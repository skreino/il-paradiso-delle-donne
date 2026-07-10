"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { business, contactActions, navItems } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-charcoal/10 bg-porcelain/88 backdrop-blur-xl">
      <nav
        className="section-shell flex min-h-[68px] items-center justify-between gap-6"
        aria-label="Navigazione principale"
      >
        <a href="#top" className="leading-none">
          <span className="block font-display text-2xl font-semibold text-charcoal">
            {business.name}
          </span>
          <span className="mt-1 block text-[0.65rem] font-bold uppercase tracking-[0.16em] text-espresso">
            Vimercate
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-charcoal/70 transition-colors hover:text-charcoal"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={contactActions.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden border border-charcoal px-5 py-2.5 text-sm font-bold text-charcoal transition-colors hover:bg-charcoal hover:text-porcelain lg:inline-flex"
        >
          Prenota
        </a>

        <button
          className="inline-flex h-11 w-11 items-center justify-center border border-charcoal/20 bg-transparent text-charcoal lg:hidden"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={cn(
          "grid border-t border-charcoal/10 bg-porcelain transition-all lg:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="section-shell flex flex-col gap-1 py-5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-charcoal/10 py-4 font-display text-3xl text-charcoal"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={contactActions.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex min-h-12 items-center justify-center bg-charcoal px-5 py-3 text-sm font-bold text-porcelain"
            >
              Prenota su WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
