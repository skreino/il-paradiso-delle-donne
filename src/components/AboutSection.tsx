import Image from "next/image";
import { business, images } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="chi-siamo" className="bg-espresso py-16 text-ivory lg:py-24">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <p className="eyebrow text-champagne">Chi siamo</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-6xl">
            Un centro nato per far sentire ogni cliente seguita davvero.
          </h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-ivory/76">
            <p>
              {business.founder} lavora nel mondo beauty dal 2014. Nel 2019
              apre {business.name} a Vimercate, con un&apos;idea semplice:
              creare un centro estetico dove ogni cliente possa sentirsi
              ascoltata, consigliata e accompagnata nella scelta del trattamento giusto.
            </p>
            <p>
              Negli anni il centro è cresciuto soprattutto grazie al passaparola,
              alle clienti che tornano e alla cura dei dettagli: dalle unghie
              alla laminazione, fino ai trattamenti viso e corpo.
            </p>
          </div>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {["Beauty dal 2014", "Centro a Vimercate", "Trattamenti personalizzati"].map(
              (item) => (
                <div key={item} className="rounded-2xl border border-ivory/14 bg-white/5 p-4">
                  <p className="text-sm font-extrabold leading-6 text-ivory">{item}</p>
                </div>
              )
            )}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-ivory/15 bg-cocoa">
            <Image
              src={images.team}
              alt="Martina e il team di Il Paradiso delle Donne a Vimercate"
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
