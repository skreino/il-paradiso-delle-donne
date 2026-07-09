import Image from "next/image";
import { Eye, MessageCircle } from "lucide-react";
import { contactActions, images } from "@/config/site";
import { CTAButton } from "@/components/CTAButton";
import { Reveal } from "@/components/Reveal";

export function SignatureTreatmentSection() {
  return (
    <section id="sguardo" className="section-shell grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-28">
      <Reveal>
        <div className="image-wash relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-espresso/10 bg-nude shadow-soft">
          <Image
            src={images.lashes}
            alt="Dettaglio laminazione ciglia naturale"
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
        <p className="eyebrow">Specialiste in laminazione e sguardo</p>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-espresso sm:text-6xl">
          Uno sguardo curato cambia tutto, anche senza trucco.
        </h2>
        <div className="mt-6 space-y-5 text-base leading-8 text-charcoal/76">
          <p>
            La laminazione ciglia aiuta a valorizzare la curva naturale delle ciglia, rendendole più ordinate e visibili senza creare un effetto artificiale.
          </p>
          <p>
            È indicata se vuoi uno sguardo più aperto, una routine più semplice al mattino o un risultato pulito che resti naturale. Prima del trattamento osserviamo le tue ciglia e ti spieghiamo cosa aspettarti.
          </p>
        </div>
        <div className="mt-8">
          <CTAButton
            href={contactActions.whatsapp}
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
