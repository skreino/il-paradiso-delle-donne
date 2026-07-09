import { Clock, MapPin, Navigation } from "lucide-react";
import { business, contactActions } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";

export function LocationSection() {
  return (
    <section id="dove-siamo" className="bg-porcelain py-20 lg:py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <p className="eyebrow">Dove siamo</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl">
            A Vimercate, in una posizione semplice da raggiungere.
          </h2>
          <div className="mt-8 rounded-2xl border border-espresso/10 bg-white p-6 shadow-soft">
            <div className="flex gap-4">
              <MapPin aria-hidden className="mt-1 text-rose" size={22} />
              <div>
                <p className="text-xl font-extrabold text-espresso">{business.name}</p>
                <p className="mt-2 leading-7 text-charcoal/75">
                  {business.address}<br />
                  {business.postalCity}
                </p>
              </div>
            </div>
            <p className="mt-5 rounded-2xl bg-ivory p-4 text-sm leading-6 text-charcoal/72">
              Nota arrivo/parcheggio: aggiungi qui un&apos;indicazione utile per le clienti appena disponibile.
            </p>
            <CTAButton
              href={contactActions.directions}
              target="_blank"
              rel="noreferrer"
              className="mt-6"
              icon={<Navigation aria-hidden size={18} />}
            >
              Apri indicazioni
            </CTAButton>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-2xl border border-espresso/10 bg-nude shadow-soft">
            <div className="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(135deg,#e8d8c8,#fffdf8_48%,#d6bfa9)] p-8 text-center">
              <div>
                <MapPin className="mx-auto text-espresso" size={36} />
                <p className="mt-4 font-display text-3xl font-bold text-espresso">
                  Google Maps embed
                </p>
                <p className="mt-2 max-w-sm text-sm leading-6 text-charcoal/72">
                  Placeholder pronto per incorporare la mappa reale del centro.
                </p>
              </div>
            </div>
            <div className="bg-espresso p-6 text-ivory">
              <div className="flex items-center gap-3">
                <Clock aria-hidden size={20} className="text-champagne" />
                <p className="font-extrabold">Orari</p>
              </div>
              <div className="mt-5 grid gap-2">
                {business.hours.map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-4 border-b border-white/10 pb-2 text-sm">
                    <span className="text-ivory/72">{day}</span>
                    <span className="font-bold">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
