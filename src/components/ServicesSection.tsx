"use client";

import { services } from "@/config/site";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";

export function ServicesSection() {
  return (
    <section id="trattamenti" className="bg-porcelain py-16 lg:py-24">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Trattamenti</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl">
            Trattamenti chiari, pensati per la tua routine.
          </h2>
          <p className="mt-5 text-lg leading-8 text-cocoa">
            Sguardo, mani, viso e corpo: scegli il servizio, oppure scrivici e
            ti aiutiamo a capire da dove partire.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
