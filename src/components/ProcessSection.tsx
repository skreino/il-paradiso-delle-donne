import { processSteps } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export function ProcessSection() {
  return (
    <section className="section-shell py-16 lg:py-24">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">Metodo</p>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl">
          Prima ti ascoltiamo, poi scegliamo cosa fare.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-4 lg:grid-cols-5">
        {processSteps.map((step, index) => (
          <Reveal key={step} delay={index * 0.05}>
            <article className="h-full rounded-2xl border border-espresso/10 bg-porcelain p-5">
              <span className="font-display text-5xl font-bold text-rose/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-8 text-base font-extrabold leading-7 text-espresso">{step}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
