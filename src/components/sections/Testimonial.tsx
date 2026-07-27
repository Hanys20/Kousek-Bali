import { PlaceholderPhoto } from "@/components/ui/PlaceholderPhoto";

export function Testimonial() {
  return (
    <section className="bg-forest-900">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <PlaceholderPhoto
          label="Foto: příprava kakaa, ruce, šálek"
          className="aspect-[4/5] w-full"
        />
        <blockquote>
          <p className="font-serif text-3xl italic leading-snug text-cream sm:text-4xl">
            &bdquo;Kakao není spěch. Je to pár minut, kdy se zastavíte,
            zpomalíte dech a vrátíte se sami k sobě.&ldquo;
          </p>
          <footer className="tracked-label mt-6 text-xs text-cream-muted">
            Kousek Bali
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
