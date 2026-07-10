import { allServices, business, contactActions, navItems } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-charcoal pb-24 text-porcelain md:pb-10">
      <div className="section-shell border-t border-porcelain/16 py-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-display text-4xl font-semibold">{business.name}</p>
            <p className="mt-4 max-w-md text-sm leading-7 text-porcelain/65">
              Centro estetico a Vimercate per ciglia, unghie, trattamenti viso,
              corpo e depilazione.
            </p>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-rose">
              Navigazione
            </p>
            <div className="grid gap-2 text-sm text-porcelain/72">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-porcelain">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-rose">
              Servizi
            </p>
            <div className="grid gap-2 text-sm text-porcelain/72">
              {allServices.slice(0, 5).map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-porcelain/16 pt-6 text-sm text-porcelain/62 lg:flex-row lg:items-center lg:justify-between">
          <p>
            {business.address}, {business.postalCity} · {business.phone}
          </p>
          <div className="flex gap-4">
            <a href={contactActions.email} className="hover:text-porcelain">
              Email
            </a>
            <a href={contactActions.directions} target="_blank" rel="noreferrer" className="hover:text-porcelain">
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
