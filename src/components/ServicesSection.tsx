"use client";

import { services } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";

export function ServicesSection() {
  return (
    <section id="trattamenti" className="bg-porcelain py-20 lg:py-28">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Trattamenti</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl">
            Tutto quello che serve per sentirti curata, senza promesse esagerate.
          </h2>
          <p className="mt-5 text-lg leading-8 text-charcoal/74">
            Ogni servizio parte da una valutazione semplice: cosa desideri, cosa è adatto a te e quale risultato possiamo ottenere con precisione.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.03}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
