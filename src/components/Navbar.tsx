"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { business, contactActions, navItems } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-espresso/10 bg-porcelain/90 backdrop-blur-xl">
      <nav
        className="section-shell flex min-h-20 items-center justify-between gap-5"
        aria-label="Navigazione principale"
      >
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-display text-2xl font-bold text-espresso">
            {business.name}
          </span>
          <span className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-cocoa">
            Vimercate beauty atelier
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="text-sm font-bold text-charcoal/75 transition-colors hover:text-espresso"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <CTAButton
            href={contactActions.phone}
            variant="secondary"
            icon={<Phone aria-hidden size={17} />}
          >
            Chiama
          </CTAButton>
          <CTAButton href={contactActions.whatsapp} target="_blank" rel="noreferrer">
            Prenota su WhatsApp
          </CTAButton>
        </div>

        <button
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-espresso/15 bg-white text-espresso lg:hidden"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={cn(
          "grid border-t border-espresso/10 bg-porcelain transition-all lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="section-shell flex flex-col gap-3 py-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-2 py-3 text-base font-extrabold text-espresso"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <CTAButton href={contactActions.whatsapp} target="_blank" rel="noreferrer">
              Prenota su WhatsApp
            </CTAButton>
          </div>
        </div>
      </div>
    </header>
  );
}
