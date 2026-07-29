import Image from "next/image";

export function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/salek-kakaa.webp"
        alt="Šálek ceremoniálního kakaa s okvětními lístky, kakaové boby a vonná tyčinka"
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[22%_center] lg:object-center"
      />
      {/*
        Světlý motiv: na této jediné sekci se "cream" (teď tmavá) nehodí —
        citát na fotce potřebuje zůstat světlý text na sytém podkladu, jinak
        by nebyl čitelný. Scrim je tyrkysový (ne night-950, to je teď
        světlé), text natvrdo světlý — záměrná výjimka jen tady.
      */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-turquoise-dark/90 via-turquoise-dark/75 to-turquoise-dark/90 lg:from-turquoise-dark/15 lg:via-turquoise-dark/70 lg:to-turquoise-dark/90" />

      <div className="mx-auto grid max-w-7xl px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-36">
        <blockquote className="lg:col-start-2">
          <svg
            width="44"
            height="34"
            viewBox="0 0 44 34"
            fill="currentColor"
            className="text-[#f7f3ea]"
            aria-hidden
          >
            <path d="M0 34V19.4C0 8.7 5.9 1.6 17.1 0l1.5 5.5c-6.3 1.3-9.6 5-9.9 10.4h9.1V34H0Zm25.4 0V19.4C25.4 8.7 31.3 1.6 42.5 0L44 5.5c-6.3 1.3-9.6 5-9.9 10.4h9.1V34H25.4Z" />
          </svg>

          <p className="mt-6 font-serif text-3xl italic leading-[1.3] text-[#f7f3ea] sm:text-4xl lg:text-[2.6rem]">
            Kakao není jen nápoj. Je to pozvání zpomalit, naslouchat a být
            přítomný.
          </p>

          <footer className="tracked-label mt-8 text-xs font-bold text-[#f7f3ea]/75">
            Štěpánka a Honza, Kousek Bali — ze srdce do srdce
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
