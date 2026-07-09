"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { services } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";

type Service = (typeof services)[number];

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="group overflow-hidden rounded-2xl border border-espresso/10 bg-porcelain shadow-[0_18px_45px_rgba(58,36,26,0.06)]"
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ duration: 0.22 }}
    >
      <div className="relative aspect-[5/3] overflow-hidden bg-nude">
        <Image
          src={service.image}
          alt={`Immagine placeholder per ${service.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-rose/12 text-rose">
          <Icon aria-hidden size={20} />
        </div>
        <h3 className="font-display text-3xl font-bold leading-none text-espresso">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-charcoal/75">{service.copy}</p>
        <p className="mt-4 border-l-2 border-champagne/70 pl-4 text-sm font-bold leading-6 text-cocoa">
          {service.detail}
        </p>
        <CTAButton href="#contatti" variant="ghost" className="mt-5 px-0">
          Prenota
        </CTAButton>
      </div>
    </motion.article>
  );
}
