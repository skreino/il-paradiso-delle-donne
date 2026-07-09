import Image from "next/image";
import { Eye, MessageCircle } from "lucide-react";
import { contactActions, images, whatsappUrl } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";

export function SignatureTreatmentSection() {
  return (
    <section
      id="sguardo"
      className="section-shell grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-24"
    >
      <Reveal>
        <div className="image-wash relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-espresso/10 bg-nude shadow-soft">
          <Image
            src={images.lashes}
            alt="Laminazione ciglia con risultato naturale e ordinato"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 42vw, 100vw"
          />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-rose/12 text-rose">
          <Eye aria-hidden size={22} />
        </div>
        <p className="eyebrow">Laminazione e sguardo</p>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-espresso sm:text-6xl">
          Uno sguardo più ordinato, senza cambiare chi sei.
        </h2>
        <div className="mt-6 space-y-5 text-base leading-8 text-cocoa">
          <p>
            La laminazione ciglia valorizza la curva naturale delle ciglia e le
            rende più visibili nella vita di tutti i giorni. È una scelta adatta
            se vuoi un effetto curato, ma non artificiale.
          </p>
          <p>
            Prima del trattamento guardiamo le tue ciglia, ti spieghiamo durata,
            mantenimento e risultato atteso. Così sai cosa stai facendo e perché.
          </p>
        </div>
        <div className="mt-8">
          <CTAButton
            href={whatsappUrl("Ciao, vorrei una consulenza per laminazione ciglia.")}
            target="_blank"
            rel="noreferrer"
            icon={<MessageCircle aria-hidden size={18} />}
          >
            Chiedi una consulenza
          </CTAButton>
        </div>
      </Reveal>
    </section>
  );
}
