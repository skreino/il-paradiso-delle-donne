import Image from "next/image";
import { business, images } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="chi-siamo" className="bg-espresso py-20 text-ivory lg:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <Reveal>
          <p className="eyebrow text-champagne">Chi siamo</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-6xl">
            Dietro ogni trattamento c&apos;è una persona che ti ascolta.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-ivory/76">
            <p>
              {business.founder} lavora nel mondo beauty dal 2014. Nel dicembre 2019 ha aperto {business.name} a Vimercate, costruendo negli anni un centro riconosciuto soprattutto per unghie, laminazione e attenzione al dettaglio.
            </p>
            <p>
              Il centro è cresciuto grazie a un rapporto diretto con le clienti: consigli chiari, trattamenti spiegati con semplicità e un team che segue ogni risultato con precisione.
            </p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {["Dal 2014 nel beauty", "A Vimercate dal 2019", "Team attento e concreto"].map((item) => (
              <div key={item} className="rounded-2xl border border-ivory/14 bg-white/5 p-4">
                <p className="text-sm font-extrabold leading-6 text-ivory">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ivory/15 bg-cocoa">
            <Image
              src={images.team}
              alt="Martina e team del centro estetico a Vimercate"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
