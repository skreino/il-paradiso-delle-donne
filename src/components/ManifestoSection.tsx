import { Reveal } from "@/components/Reveal";

export function ManifestoSection() {
  return (
    <section className="bg-porcelain py-16 lg:py-24">
      <div className="section-shell editorial-rule grid gap-10 pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <Reveal>
          <h2 className="font-display text-6xl font-semibold leading-[0.9] tracking-[-0.03em] text-charcoal sm:text-7xl lg:text-8xl">
            Cura.
            <br />
            Armonia.
            <br />
            Tu.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="max-w-2xl text-xl leading-9 text-cocoa lg:pt-5">
            Ogni appuntamento parte dall&apos;ascolto: cosa vuoi valorizzare, cosa
            ti serve davvero, quale risultato può accompagnare la tua routine
            senza forzature.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
