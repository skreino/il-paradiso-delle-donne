import { Star } from "lucide-react";
import { reviews } from "@/config/site";
import { Reveal } from "@/components/Reveal";

export function ReviewsSection() {
  return (
    <section className="section-shell py-20 lg:py-28" aria-labelledby="reviews-title">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">Fiducia</p>
        <h2 id="reviews-title" className="mt-4 font-display text-4xl font-bold leading-tight text-espresso sm:text-5xl">
          La fiducia si vede da chi torna.
        </h2>
        <p className="mt-5 text-lg leading-8 text-charcoal/74">
          Queste card sono placeholder ispirati alla struttura delle recensioni Google. Andranno sostituite con recensioni reali appena disponibili.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <Reveal key={review.name + review.category} delay={index * 0.05}>
            <article className="h-full rounded-2xl border border-espresso/10 bg-porcelain p-6 shadow-soft">
              <div className="flex gap-1 text-champagne" aria-label={`${review.rating} stelle`}>
                {Array.from({ length: review.rating }).map((_, starIndex) => (
                  <Star key={starIndex} size={18} fill="currentColor" aria-hidden />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-charcoal/78">“{review.text}”</p>
              <div className="mt-6 border-t border-espresso/10 pt-5">
                <p className="font-extrabold text-espresso">{review.name}</p>
                <p className="text-sm font-bold text-cocoa">{review.category}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {[
          "clienti abituali",
          "spiegazioni chiare",
          "consigli con criterio",
          "ambiente pulito e curato",
          "risultato naturale"
        ].map((item) => (
          <div key={item} className="rounded-full border border-espresso/10 bg-white/60 px-4 py-3 text-center text-sm font-extrabold text-cocoa">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
