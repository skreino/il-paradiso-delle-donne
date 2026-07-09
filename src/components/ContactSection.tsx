import { Mail, MessageCircle, Phone } from "lucide-react";
import { business, contactActions, services } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  return (
    <section
      id="contatti"
      className="section-shell grid gap-10 pb-28 pt-16 lg:grid-cols-[0.85fr_1.15fr] lg:pb-32 lg:pt-24"
    >
      <Reveal>
        <p className="eyebrow">Contatti</p>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl">
          Prenota o chiedi quale trattamento è più adatto a te.
        </h2>
        <p className="mt-5 text-base leading-7 text-cocoa">
          Il modo più veloce è WhatsApp. Puoi inviare una richiesta, indicare il
          servizio che ti interessa e ricevere una risposta dal centro.
        </p>
        <div className="mt-8 space-y-3">
          <CTAButton
            href={contactActions.whatsapp}
            target="_blank"
            rel="noreferrer"
            icon={<MessageCircle aria-hidden size={18} />}
            className="w-full justify-center sm:w-auto"
          >
            Scrivici su WhatsApp
          </CTAButton>
          <div className="grid gap-3 pt-3 sm:grid-cols-2">
            <a
              className="rounded-2xl border border-espresso/10 bg-porcelain p-4 font-bold text-espresso"
              href={contactActions.phone}
            >
              <Phone aria-hidden size={18} className="mb-3 text-rose" />
              {business.phone}
            </a>
            <a
              className="rounded-2xl border border-espresso/10 bg-porcelain p-4 font-bold text-espresso"
              href={contactActions.email}
            >
              <Mail aria-hidden size={18} className="mb-3 text-rose" />
              {business.email}
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <form className="rounded-[1.5rem] border border-espresso/10 bg-porcelain p-5 shadow-soft sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-extrabold text-espresso">
              Nome
              <input
                className="min-h-12 rounded-2xl border border-espresso/12 bg-white px-4 text-charcoal outline-none focus:border-espresso"
                name="nome"
                autoComplete="name"
                placeholder="Il tuo nome"
              />
            </label>
            <label className="grid gap-2 text-sm font-extrabold text-espresso">
              Telefono
              <input
                className="min-h-12 rounded-2xl border border-espresso/12 bg-white px-4 text-charcoal outline-none focus:border-espresso"
                name="telefono"
                type="tel"
                autoComplete="tel"
                placeholder="345 000 0000"
              />
            </label>
            <label className="grid gap-2 text-sm font-extrabold text-espresso sm:col-span-2">
              Servizio di interesse
              <select
                className="min-h-12 rounded-2xl border border-espresso/12 bg-white px-4 text-charcoal outline-none focus:border-espresso"
                name="servizio"
                defaultValue=""
              >
                <option value="" disabled>
                  Scegli un trattamento
                </option>
                {services.map((service) => (
                  <option key={service.title}>{service.title}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 text-sm font-extrabold text-espresso sm:col-span-2">
              Giorno/orario preferito
              <input
                className="min-h-12 rounded-2xl border border-espresso/12 bg-white px-4 text-charcoal outline-none focus:border-espresso"
                name="orario"
                placeholder="Es. venerdì pomeriggio"
              />
            </label>
            <label className="grid gap-2 text-sm font-extrabold text-espresso sm:col-span-2">
              Messaggio
              <textarea
                className="min-h-28 rounded-2xl border border-espresso/12 bg-white px-4 py-3 text-charcoal outline-none focus:border-espresso"
                name="messaggio"
                placeholder="Raccontaci cosa vorresti fare"
              />
            </label>
          </div>
          <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-cocoa">
            <input type="checkbox" className="mt-1 h-4 w-4 rounded border-espresso/20" />
            <span>
              Acconsento a essere ricontattata per la gestione della richiesta di appuntamento.
            </span>
          </label>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={contactActions.whatsapp} target="_blank" rel="noreferrer">
              Richiedi appuntamento
            </CTAButton>
            <CTAButton
              href={contactActions.phone}
              variant="secondary"
              icon={<Phone aria-hidden size={18} />}
            >
              Chiama ora
            </CTAButton>
          </div>
        </form>
      </Reveal>
    </section>
  );
}
