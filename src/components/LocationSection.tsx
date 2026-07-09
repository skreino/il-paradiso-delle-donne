import { Clock, MapPin, MessageCircle, Navigation } from "lucide-react";
import { business, contactActions } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";

export function LocationSection() {
  return (
    <section id="dove-siamo" className="bg-porcelain py-16 lg:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <p className="eyebrow">Dove siamo</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl">
            A Vimercate, facile da raggiungere per il tuo appuntamento.
          </h2>
          <div className="mt-8 rounded-2xl border border-espresso/10 bg-white p-6 shadow-soft">
            <div className="flex gap-4">
              <MapPin aria-hidden className="mt-1 text-rose" size={22} />
              <div>
                <p className="text-xl font-extrabold text-espresso">{business.name}</p>
                <p className="mt-2 leading-7 text-cocoa">
                  {business.address}
                  <br />
                  {business.postalCity}
                </p>
              </div>
            </div>
            <p className="mt-5 rounded-2xl bg-ivory p-4 text-sm leading-6 text-cocoa">
              Se arrivi per la prima volta, scrivici su WhatsApp: ti aiutiamo a
              trovare l&apos;ingresso e l&apos;orario più comodo.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href={contactActions.directions}
                target="_blank"
                rel="noreferrer"
                icon={<Navigation aria-hidden size={18} />}
              >
                Apri indicazioni
              </CTAButton>
              <CTAButton
                href={contactActions.whatsapp}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                icon={<MessageCircle aria-hidden size={18} />}
              >
                Scrivici su WhatsApp
              </CTAButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-2xl border border-espresso/10 bg-nude shadow-soft">
            <iframe
              title="Mappa per raggiungere Il Paradiso delle Donne a Vimercate"
              src={business.mapsEmbedUrl}
              className="h-[330px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="bg-espresso p-6 text-ivory">
              <div className="flex items-center gap-3">
                <Clock aria-hidden size={20} className="text-champagne" />
                <p className="font-extrabold">Orari</p>
              </div>
              <div className="mt-5 grid gap-2">
                {business.hours.map(([day, time]) => (
                  <div
                    key={day}
                    className="flex justify-between gap-4 border-b border-white/10 pb-2 text-sm"
                  >
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
