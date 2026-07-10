import { processSteps } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export function ProcessSection() {
  return (
    <section className="bg-ivory py-16 lg:py-24">
      <div className="section-shell">
        <Reveal className="grid gap-8 border-y border-charcoal/15 py-12 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="font-display text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-charcoal sm:text-7xl">
            Prenotare è semplice.
          </h2>
          <div className="divide-y divide-charcoal/15">
            {processSteps.map((step, index) => (
              <div key={step} className="grid grid-cols-[80px_1fr] gap-4 py-6 lg:grid-cols-[120px_1fr]">
                <span className="font-display text-5xl text-espresso/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="pt-3 font-display text-3xl leading-tight text-charcoal sm:text-4xl">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
