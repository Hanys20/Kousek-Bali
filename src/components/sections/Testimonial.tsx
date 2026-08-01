"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export function Testimonial() {
  const imageRef = useRef<HTMLDivElement>(null);

  // Jemný parallax — fotka se posouvá pomaleji než scroll, drží klidnou
  // náladu citátu. Vypnuto při prefers-reduced-motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = imageRef.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const maxOffset = rect.height * 0.04;
      const offset = Math.max(
        -maxOffset,
        Math.min(maxOffset, rect.top * 0.08),
      );
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div ref={imageRef} className="absolute inset-0">
          <Image
            src="/images/salek-kakaa.webp"
            alt="Šálek ceremoniálního kakaa s okvětními lístky, kakaové boby a vonná tyčinka"
            fill
            sizes="100vw"
            className="scale-110 object-cover object-[22%_center] lg:object-center"
          />
        </div>
      </div>
      {/* fotka má tmavou pravou půlku — scrim ji dorovná, aby citát četl i na mobilu */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night-950/85 via-night-950/70 to-night-950/85 lg:from-night-950/10 lg:via-night-950/60 lg:to-night-950/85" />

      <div className="mx-auto grid max-w-7xl px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-36">
        <blockquote className="lg:col-start-2">
          <svg
            width="44"
            height="34"
            viewBox="0 0 44 34"
            fill="currentColor"
            className="text-turquoise"
            aria-hidden
          >
            <path d="M0 34V19.4C0 8.7 5.9 1.6 17.1 0l1.5 5.5c-6.3 1.3-9.6 5-9.9 10.4h9.1V34H0Zm25.4 0V19.4C25.4 8.7 31.3 1.6 42.5 0L44 5.5c-6.3 1.3-9.6 5-9.9 10.4h9.1V34H25.4Z" />
          </svg>

          <p className="mt-6 font-sans text-3xl font-light leading-[1.3] tracking-tight text-cream sm:text-4xl lg:text-[2.6rem]">
            Kakao není jen nápoj. Je to pozvání zpomalit, naslouchat a být
            přítomný.
          </p>

          <footer className="tracked-label mt-8 text-xs font-bold text-cream-muted">
            Štěpánka a Honza, Kousek Bali — ze srdce do srdce
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
