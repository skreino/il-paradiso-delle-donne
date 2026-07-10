import { allServices, business, contactActions } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";

export function ContactSection() {
  return (
    <section id="contatti" className="bg-charcoal py-16 text-porcelain lg:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-rose">
            Contatti
          </p>
          <h2 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.02em] sm:text-7xl">
            Scrivici, ti aiutiamo a scegliere il trattamento.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={contactActions.whatsapp} target="_blank" rel="noreferrer" className="bg-porcelain text-charcoal hover:bg-rose">
              Prenota su WhatsApp
            </CTAButton>
            <CTAButton href={contactActions.phone} variant="secondary" className="border-porcelain/35 text-porcelain hover:bg-porcelain hover:text-charcoal">
              Chiama il centro
            </CTAButton>
          </div>
          <div className="mt-8 space-y-2 text-sm leading-7 text-porcelain/72">
            <p>Telefono / WhatsApp: {business.phone}</p>
            <p>Email: {business.email}</p>
            <p>
              {business.address}, {business.postalCity}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="border border-porcelain/18 p-5 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-porcelain">
                Nome
                <input
                  className="min-h-12 border border-porcelain/20 bg-transparent px-4 text-porcelain outline-none placeholder:text-porcelain/38 focus:border-porcelain"
                  name="nome"
                  autoComplete="name"
                  placeholder="Il tuo nome"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-porcelain">
                Telefono
                <input
                  className="min-h-12 border border-porcelain/20 bg-transparent px-4 text-porcelain outline-none placeholder:text-porcelain/38 focus:border-porcelain"
                  name="telefono"
                  type="tel"
                  autoComplete="tel"
                  placeholder="345 000 0000"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-porcelain sm:col-span-2">
                Servizio
                <select
                  className="min-h-12 border border-porcelain/20 bg-charcoal px-4 text-porcelain outline-none focus:border-porcelain"
                  name="servizio"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Scegli un trattamento
                  </option>
                  {allServices.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold text-porcelain sm:col-span-2">
                Messaggio
                <textarea
                  className="min-h-28 border border-porcelain/20 bg-transparent px-4 py-3 text-porcelain outline-none placeholder:text-porcelain/38 focus:border-porcelain"
                  name="messaggio"
                  placeholder="Dimmi cosa vorresti prenotare e quando ti è comodo"
                />
              </label>
            </div>
            <p className="mt-5 text-sm leading-6 text-porcelain/62">
              Il form raccoglie una richiesta iniziale. Per confermare
              l&apos;appuntamento usa WhatsApp o telefono.
            </p>
            <div className="mt-7">
              <CTAButton href={contactActions.whatsapp} target="_blank" rel="noreferrer" className="bg-porcelain text-charcoal hover:bg-rose">
                Richiedi appuntamento
              </CTAButton>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
