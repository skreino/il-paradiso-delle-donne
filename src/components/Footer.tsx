import { business, contactActions, navItems } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-charcoal pb-24 pt-10 text-ivory md:pb-10">
      <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-display text-3xl font-bold">{business.name}</p>
          <p className="mt-2 text-sm leading-6 text-ivory/70">
            {business.address}, {business.postalCity}<br />
            Tel. {business.phone}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold text-ivory/70">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-ivory">
              {item.label}
            </a>
          ))}
          <a href={contactActions.email} className="hover:text-ivory">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
