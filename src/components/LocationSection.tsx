import { business, contactActions } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";

export function LocationSection() {
  return (
    <section id="dove-siamo" className="bg-porcelain py-16 lg:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="eyebrow">Vimercate</p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.02em] text-charcoal sm:text-7xl">
            Dove arrivare per il tuo appuntamento.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-8 text-cocoa">
            <p>
              <strong className="text-charcoal">{business.name}</strong>
              <br />
              {business.address}
              <br />
              {business.postalCity}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton href={contactActions.directions} target="_blank" rel="noreferrer">
                Apri Google Maps
              </CTAButton>
              <CTAButton href={contactActions.whatsapp} target="_blank" rel="noreferrer" variant="secondary">
                Prenota su WhatsApp
              </CTAButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden border border-charcoal/15 bg-ivory">
            <iframe
              title="Mappa per raggiungere Il Paradiso delle Donne a Vimercate"
              src={business.mapsEmbedUrl}
              className="h-[360px] w-full border-0 lg:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="grid gap-2 border-t border-charcoal/15 p-5 sm:grid-cols-2">
              {business.hours.map(([day, time]) => (
                <div key={day} className="flex justify-between gap-4 border-b border-charcoal/10 py-2 text-sm">
                  <span className="text-cocoa">{day}</span>
                  <span className="font-bold text-charcoal">{time}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
