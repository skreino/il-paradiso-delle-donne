import Image from "next/image";
import { business, photos } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="metodo" className="bg-porcelain py-16 lg:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <p className="eyebrow">Metodo e centro</p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.92] tracking-[-0.02em] text-charcoal sm:text-7xl">
            Ascoltiamo.
            <br />
            Consigliamo.
            <br />
            Ci prendiamo cura.
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-cocoa">
            <p>
              {business.founder} lavora nel mondo beauty dal 2014. Nel 2019 ha
              aperto {business.name} a Vimercate con un&apos;idea semplice:
              creare un centro dove ogni cliente possa sentirsi ascoltata e
              accompagnata nella scelta del trattamento giusto.
            </p>
            <p>
              Il centro è cresciuto grazie al passaparola, alle clienti che
              tornano e alla cura dei dettagli: dalle unghie alla laminazione,
              fino ai trattamenti viso e corpo.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative min-h-[420px] overflow-hidden bg-nude lg:min-h-[620px]">
            <Image
              src={photos.faceStudio}
              alt="Ritratto beauty in luce chiara, associato alla cura del viso"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 48vw, 100vw"
              style={{ objectPosition: "50% 36%" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
