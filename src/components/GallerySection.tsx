import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { contactActions, gallery } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";

export function GallerySection() {
  return (
    <section className="bg-porcelain py-16 lg:py-24">
      <div className="section-shell">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl">
              Dettagli del lavoro quotidiano, senza effetti costruiti.
            </h2>
          </div>
          <CTAButton
            href={contactActions.whatsapp}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            icon={<MessageCircle aria-hidden size={18} />}
          >
            Scrivici su WhatsApp
          </CTAButton>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-[1.1fr_0.9fr_0.9fr] md:grid-rows-[230px_230px]">
          {gallery.map((item, index) => (
            <Reveal
              key={item.title}
              className={
                index === 0
                  ? "md:row-span-2"
                  : index === 3
                    ? "md:col-span-2"
                    : ""
              }
              delay={index * 0.04}
            >
              <figure className="group relative min-h-[230px] overflow-hidden rounded-2xl border border-espresso/10 bg-nude shadow-[0_16px_40px_rgba(43,33,29,0.07)] md:h-full">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <figcaption className="absolute inset-x-4 bottom-4 rounded-full bg-porcelain/90 px-4 py-2 text-sm font-extrabold text-espresso backdrop-blur">
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
