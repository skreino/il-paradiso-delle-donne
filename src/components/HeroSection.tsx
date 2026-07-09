"use client";

import Image from "next/image";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { business, contactActions, heroServices, images } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { TrustBadges } from "@/components/TrustBadges";
import { motionTokens } from "@/lib/motion";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="section-shell pb-14 pt-8 lg:pb-24 lg:pt-14">
      <div className="grid gap-9 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0.1 : motionTokens.duration.slow,
            ease: motionTokens.easing.smooth
          }}
        >
          <div className="inline-flex rounded-full border border-espresso/10 bg-porcelain px-4 py-2 text-xs font-extrabold uppercase tracking-[0.1em] text-cocoa">
            Centro estetico a Vimercate
          </div>
          <h1 className="mt-5 max-w-3xl font-display text-[2.75rem] font-bold leading-[0.96] text-espresso sm:text-6xl lg:text-7xl">
            Ciglia, unghie e trattamenti viso nel cuore di Vimercate.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-cocoa sm:text-lg">
            Un centro estetico dove ogni trattamento parte da una cosa semplice:
            capire cosa ti serve davvero e curarlo con precisione.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href={contactActions.whatsapp}
              target="_blank"
              rel="noreferrer"
              icon={<MessageCircle aria-hidden size={18} />}
            >
              Prenota su WhatsApp
            </CTAButton>
            <CTAButton
              href={contactActions.phone}
              variant="secondary"
              icon={<Phone aria-hidden size={18} />}
            >
              Chiama il centro
            </CTAButton>
            <CTAButton href="#trattamenti" variant="ghost" className="justify-center px-2">
              Guarda i trattamenti
            </CTAButton>
          </div>

          <div className="mt-7 flex items-start gap-3 rounded-2xl border border-espresso/10 bg-porcelain/80 p-4 text-sm text-cocoa">
            <MapPin aria-hidden className="mt-1 shrink-0 text-rose" size={18} />
            <p>
              {business.address}, {business.postalCity}. Una posizione comoda
              per chi vive o lavora a Vimercate e nei dintorni.
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
          transition={{
            duration: reduce ? 0.1 : motionTokens.duration.slow,
            ease: motionTokens.easing.smooth,
            delay: reduce ? 0 : 0.12
          }}
        >
          <div className="image-wash relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/80 bg-nude shadow-soft">
            <Image
              src={images.hero}
              alt="Centro estetico caldo e ordinato a Vimercate"
              fill
              priority
              className="object-cover photo-texture"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-5 left-4 right-4 rounded-2xl border border-espresso/10 bg-porcelain/95 p-4 shadow-soft backdrop-blur sm:left-6 sm:right-auto sm:max-w-[320px] sm:p-5">
            <p className="font-display text-3xl font-bold text-espresso">dal 2019</p>
            <p className="mt-1 text-sm leading-6 text-cocoa">
              Martina e il team seguono mani, sguardo e trattamenti beauty con
              un approccio diretto e attento.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 grid gap-3 rounded-[1.5rem] border border-espresso/10 bg-porcelain/80 p-3 shadow-[0_18px_50px_rgba(43,33,29,0.06)] sm:grid-cols-3"
        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduce ? 0.1 : motionTokens.duration.normal,
          ease: motionTokens.easing.smooth,
          delay: reduce ? 0 : 0.18
        }}
      >
        {heroServices.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="rounded-2xl border border-espresso/10 bg-white/70 px-4 py-4 font-display text-2xl font-bold text-espresso transition-colors hover:bg-white"
          >
            {item.label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
