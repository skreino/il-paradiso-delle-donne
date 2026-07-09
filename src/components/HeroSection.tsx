"use client";

import Image from "next/image";
import { MapPin, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { business, contactActions, images } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { TrustBadges } from "@/components/TrustBadges";
import { motionTokens } from "@/lib/motion";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="section-shell grid gap-12 pb-20 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-28 lg:pt-20">
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0.1 : motionTokens.duration.slow, ease: motionTokens.easing.smooth }}
      >
        <p className="eyebrow">Centro estetico a Vimercate</p>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-bold leading-[0.95] text-espresso sm:text-6xl lg:text-7xl">
          Il tuo momento di bellezza, nel cuore di Vimercate.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/78">
          Laminazione, unghie e trattamenti estetici pensati per valorizzarti con naturalezza, precisione e attenzione ai dettagli.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CTAButton
            href={contactActions.whatsapp}
            target="_blank"
            rel="noreferrer"
            icon={<MessageCircle aria-hidden size={18} />}
          >
            Prenota su WhatsApp
          </CTAButton>
          <CTAButton href="#trattamenti" variant="secondary">
            Scopri i trattamenti
          </CTAButton>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-espresso/10 bg-porcelain p-4 text-sm text-charcoal/78 shadow-soft">
          <MapPin aria-hidden className="mt-1 shrink-0 text-rose" size={18} />
          <p>
            {business.address}, {business.postalCity}. Comodo per chi cerca un&apos;estetista a Vimercate e in Monza e Brianza.
          </p>
        </div>

        <div className="mt-7">
          <TrustBadges />
        </div>
      </motion.div>

      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduce ? 0.1 : motionTokens.duration.slow, ease: motionTokens.easing.smooth, delay: reduce ? 0 : 0.12 }}
      >
        <div className="image-wash relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 bg-nude shadow-soft">
          <Image
            src={images.hero}
            alt="Interno caldo e raffinato di centro estetico a Vimercate"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
        </div>
        <div className="absolute -bottom-6 left-5 max-w-[280px] rounded-2xl border border-espresso/10 bg-porcelain/95 p-5 shadow-soft backdrop-blur">
          <p className="font-display text-3xl font-bold text-espresso">dal 2019</p>
          <p className="mt-1 text-sm leading-6 text-charcoal/72">
            Un riferimento locale per mani, sguardo e trattamenti beauty seguiti con cura.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
