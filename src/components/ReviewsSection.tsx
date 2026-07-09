import { trustCards } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export function ReviewsSection() {
  return (
    <section className="section-shell py-16 lg:py-24" aria-labelledby="trust-title">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">Fiducia</p>
        <h2
          id="trust-title"
          className="mt-4 font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl"
        >
          La fiducia si vede da chi torna.
        </h2>
        <p className="mt-5 text-lg leading-8 text-cocoa">
          Chi viene da Il Paradiso delle Donne cerca un risultato curato,
          spiegazioni semplici e un trattamento fatto con attenzione. Per questo
          molte clienti tornano nel tempo per unghie, laminazione e trattamenti viso.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {trustCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Reveal key={card.title} delay={index * 0.04}>
              <article className="h-full rounded-2xl border border-espresso/10 bg-porcelain p-5">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose/12 text-rose">
                  <Icon aria-hidden size={19} />
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight text-espresso">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-cocoa">{card.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <p className="mt-6 text-sm leading-6 text-cocoa/80">
        Le recensioni reali potranno essere integrate da Google appena disponibili.
      </p>
    </section>
  );
}
