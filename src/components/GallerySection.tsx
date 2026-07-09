import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { contactActions, gallery } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";

export function GallerySection() {
  return (
    <section className="bg-porcelain py-20 lg:py-28">
      <div className="section-shell">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl">
              Dettagli reali, luce morbida, risultati facili da leggere.
            </h2>
          </div>
          <CTAButton
            href={contactActions.whatsapp}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            icon={<MessageCircle aria-hidden size={18} />}
          >
            Vedi altri lavori
          </CTAButton>
        </Reveal>
        <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-4">
          {gallery.map((item, index) => (
            <Reveal
              key={item.title}
              className={index === 0 ? "md:col-span-2 md:row-span-2" : index === 3 ? "md:col-span-2" : ""}
              delay={index * 0.04}
            >
              <figure className="group relative h-full overflow-hidden rounded-2xl border border-espresso/10 bg-nude shadow-[0_16px_40px_rgba(58,36,26,0.07)]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 768px) 25vw, 100vw"
                />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-full bg-porcelain/88 px-4 py-2 text-sm font-extrabold text-espresso backdrop-blur">
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
