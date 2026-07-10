import Image from "next/image";
import { editorialServices } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  return (
    <section id="servizi" className="bg-ivory py-16 lg:py-24">
      <div className="section-shell">
        <Reveal className="max-w-4xl">
          <p className="eyebrow">Servizi principali</p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-charcoal sm:text-7xl">
            Tre percorsi, un solo modo di lavorare: attenzione.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-16 lg:space-y-24">
          {editorialServices.map((service, index) => {
            const reverse = index % 2 === 1;
            return (
              <Reveal key={service.number} delay={index * 0.05}>
                <article
                  className={cn(
                    "grid gap-8 border-t border-charcoal/15 pt-8 lg:grid-cols-12 lg:items-center",
                    reverse && "lg:[&>*:first-child]:col-start-8"
                  )}
                >
                  <div
                    className={cn(
                      "relative min-h-[360px] overflow-hidden bg-nude lg:col-span-5 lg:min-h-[560px]",
                      reverse ? "lg:order-2" : "lg:order-1"
                    )}
                  >
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      style={{ objectPosition: index === 0 ? "50% 42%" : "50% 50%" }}
                    />
                  </div>
                  <div
                    className={cn(
                      "lg:col-span-6",
                      reverse ? "lg:order-1 lg:col-start-1" : "lg:order-2 lg:col-start-7"
                    )}
                  >
                    <div className="flex items-baseline gap-5">
                      <span className="font-display text-6xl text-espresso/45">
                        {service.number}
                      </span>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-espresso">
                        {service.eyebrow}
                      </p>
                    </div>
                    <h3 className="mt-5 font-display text-6xl font-semibold leading-none text-charcoal sm:text-8xl">
                      {service.title}
                    </h3>
                    <p className="mt-6 max-w-xl text-lg leading-8 text-cocoa">{service.copy}</p>
                    <CTAButton
                      href={service.href}
                      target="_blank"
                      rel="noreferrer"
                      variant="ghost"
                      className="mt-8"
                    >
                      {service.cta}
                    </CTAButton>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
