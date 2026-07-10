"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { business, contactActions, photos } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { motionTokens } from "@/lib/motion";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-porcelain">
      <div className="section-shell relative min-h-[calc(100svh-68px)] pb-14 pt-8 lg:min-h-[760px] lg:pb-20 lg:pt-10">
        <motion.div
          className="relative grid min-h-[650px] grid-cols-6 grid-rows-[120px_220px_120px_120px] gap-3 sm:grid-rows-[150px_260px_120px_120px] lg:min-h-[720px] lg:grid-cols-12 lg:grid-rows-[90px_240px_180px_150px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0.1 : 0.55, ease: motionTokens.easing.smooth }}
        >
          <motion.div
            className="relative col-span-4 col-start-3 row-span-2 row-start-1 overflow-hidden bg-nude lg:col-span-5 lg:col-start-7 lg:row-span-4 lg:row-start-1"
            initial={{ y: reduce ? 0 : 24 }}
            animate={{ y: 0 }}
            transition={{ duration: reduce ? 0.1 : 0.65, ease: motionTokens.easing.smooth }}
          >
            <Image
              src={photos.heroMain}
              alt="Macro editoriale dello sguardo con pelle luminosa"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 42vw, 70vw"
              style={{ objectPosition: "52% 42%" }}
            />
          </motion.div>

          <motion.div
            className="relative col-span-3 col-start-1 row-span-2 row-start-2 overflow-hidden bg-nude lg:col-span-4 lg:col-start-1 lg:row-span-2 lg:row-start-2"
            initial={{ y: reduce ? 0 : 32 }}
            animate={{ y: 0 }}
            transition={{
              duration: reduce ? 0.1 : 0.7,
              ease: motionTokens.easing.smooth,
              delay: reduce ? 0 : 0.08
            }}
          >
            <Image
              src={photos.heroSkin}
              alt="Dettaglio pelle e labbra in luce naturale"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 32vw, 50vw"
              style={{ objectPosition: "55% 38%" }}
            />
          </motion.div>

          <motion.div
            className="relative col-span-3 col-start-4 row-span-1 row-start-4 overflow-hidden bg-nude lg:col-span-3 lg:col-start-5 lg:row-span-1 lg:row-start-4"
            initial={{ y: reduce ? 0 : 18 }}
            animate={{ y: 0 }}
            transition={{
              duration: reduce ? 0.1 : 0.6,
              ease: motionTokens.easing.smooth,
              delay: reduce ? 0 : 0.14
            }}
          >
            <Image
              src={photos.heroFacial}
              alt="Trattamento viso con pelle detersa in cabina"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 24vw, 50vw"
              style={{ objectPosition: "50% 42%" }}
            />
          </motion.div>

          <div className="pointer-events-none absolute inset-x-0 top-[118px] z-10 lg:top-[95px]">
            <p className="mb-4 max-w-[270px] text-xs font-bold uppercase tracking-[0.16em] text-espresso sm:max-w-none">
              Ciglia, unghie e trattamenti viso a Vimercate
            </p>
            <h1 className="hero-title max-w-[1050px] font-display font-semibold leading-[0.82] tracking-[-0.03em] text-charcoal">
              La bellezza,
              <br />
              nella sua <em className="font-normal italic">forma</em>
              <br />
              più <em className="font-normal italic">autentica.</em>
            </h1>
          </div>

          <div className="absolute bottom-0 left-0 z-20 max-w-[540px] border-t border-charcoal/20 bg-porcelain/92 pb-1 pt-5 backdrop-blur-sm lg:bottom-12 lg:left-auto lg:right-0 lg:w-[410px] lg:border-l lg:border-t-0 lg:pl-7">
            <p className="text-base leading-7 text-cocoa">
              Da {business.name} trovi trattamenti per sguardo, mani, viso e
              corpo, con consigli chiari e appuntamenti gestiti con attenzione.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <CTAButton
                href={contactActions.whatsapp}
                target="_blank"
                rel="noreferrer"
                icon={<MessageCircle aria-hidden size={18} />}
              >
                Prenota su WhatsApp
              </CTAButton>
              <CTAButton href="#servizi" variant="secondary">
                Esplora i servizi
              </CTAButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
