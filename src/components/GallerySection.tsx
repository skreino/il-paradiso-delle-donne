import Image from "next/image";
import { gallery } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const sizes = [
  "lg:col-span-5 lg:row-span-2",
  "lg:col-span-3",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-5"
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-porcelain py-16 lg:py-24">
      <div className="section-shell">
        <Reveal className="max-w-4xl">
          <p className="eyebrow">Gallery</p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-charcoal sm:text-7xl">
            Dettagli, pelle, luce. Nessun prima e dopo costruito.
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[250px] gap-3 lg:grid-cols-12 lg:auto-rows-[220px]">
          {gallery.map((item, index) => (
            <Reveal key={item.title} className={cn("min-h-[250px]", sizes[index])} delay={index * 0.035}>
              <figure className="relative h-full overflow-hidden bg-nude">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  style={{ objectPosition: index === 0 ? "50% 38%" : "50% 50%" }}
                />
                <figcaption className="absolute bottom-4 left-4 bg-porcelain px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-charcoal">
                  {item.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
