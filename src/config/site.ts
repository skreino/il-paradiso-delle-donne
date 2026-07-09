import {
  CalendarCheck,
  Eye,
  Footprints,
  Hand,
  HeartHandshake,
  MapPin,
  Sparkles,
  Stars,
  Waves
} from "lucide-react";

export const business = {
  name: "Il Paradiso delle Donne",
  founder: "Martina Di Mattia",
  phone: "345 473 0204",
  whatsappNumber: "393454730204",
  email: "ilparadisodelledonneweb@gmail.com",
  address: "Via Luigi Cadorna, 24/e",
  postalCity: "20871 Vimercate (MB)",
  area: "Vimercate, Monza e Brianza",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Via%20Luigi%20Cadorna%2024%2Fe%2020871%20Vimercate%20MB",
  whatsappMessage:
    "Ciao, vorrei richiedere un appuntamento presso Il Paradiso delle Donne.",
  hours: [
    ["Lunedì", "Chiuso"],
    ["Martedì", "12:00 - 20:00"],
    ["Mercoledì", "10:00 - 20:00"],
    ["Giovedì", "12:00 - 20:00"],
    ["Venerdì", "10:00 - 20:00"],
    ["Sabato", "09:00 - 16:00"],
    ["Domenica", "Chiuso"]
  ]
};

export const seo = {
  title:
    "Il Paradiso delle Donne | Centro estetico, laminazione ciglia e unghie a Vimercate",
  description:
    "Centro estetico a Vimercate specializzato in laminazione ciglia, unghie, manicure, pedicure, trattamenti viso, corpo e depilazione.",
  keywords: [
    "Centro estetico Vimercate",
    "Estetista Vimercate",
    "Laminazione ciglia Vimercate",
    "Unghie Vimercate",
    "Manicure Vimercate",
    "Pedicure Vimercate",
    "Trattamenti viso Vimercate",
    "Depilazione Vimercate",
    "Il Paradiso delle Donne Vimercate"
  ]
};

export const navItems = [
  { label: "Trattamenti", href: "#trattamenti" },
  { label: "Laminazione", href: "#sguardo" },
  { label: "Chi siamo", href: "#chi-siamo" },
  { label: "Dove siamo", href: "#dove-siamo" },
  { label: "Contatti", href: "#contatti" }
];

export const images = {
  hero: "/images/hero-beauty-studio.svg",
  lashes: "/images/laminazione-ciglia.svg",
  nails: "/images/unghie-manicure.svg",
  face: "/images/trattamento-viso.svg",
  team: "/images/team-paradiso-donne.svg",
  studio: "/images/studio-vimercate.svg",
  pedicure: "/images/pedicure.svg",
  body: "/images/trattamento-corpo.svg"
};

export const trustBadges = [
  "Centro estetico a Vimercate",
  "Specialiste in sguardo e unghie",
  "Trattamenti personalizzati",
  "Clienti fidelizzate nel tempo"
];

export const services = [
  {
    title: "Laminazione ciglia",
    copy: "Per ciglia ordinate, curve e valorizzate senza un effetto finto.",
    detail: "Risultato naturale e consulenza prima del trattamento.",
    icon: Eye,
    image: images.lashes
  },
  {
    title: "Trattamenti sguardo",
    copy: "Definizione, ordine e armonia per sopracciglia e ciglia.",
    detail: "Pensati in base al tuo viso, non in modo standard.",
    icon: Sparkles,
    image: images.lashes
  },
  {
    title: "Unghie e manicure",
    copy: "Mani curate con attenzione alla forma, alla durata e al risultato finale.",
    detail: "Colori, struttura e finitura scelti con criterio.",
    icon: Hand,
    image: images.nails
  },
  {
    title: "Pedicure",
    copy: "Piedi in ordine, pelle più curata e comfort nella vita di tutti i giorni.",
    detail: "Un trattamento concreto, preciso e rilassato.",
    icon: Footprints,
    image: images.pedicure
  },
  {
    title: "Trattamenti viso",
    copy: "Trattamenti scelti in base alla tua pelle, non a caso.",
    detail: "Prima valutiamo, poi consigliamo il percorso più adatto.",
    icon: Stars,
    image: images.face
  },
  {
    title: "Trattamenti corpo",
    copy: "Percorsi estetici per sentirti più seguita e costante.",
    detail: "Obiettivi chiari e indicazioni semplici da mantenere.",
    icon: Waves,
    image: images.body
  },
  {
    title: "Depilazione",
    copy: "Un servizio essenziale eseguito con attenzione, igiene e delicatezza.",
    detail: "Rapido, preciso e facile da inserire nella routine.",
    icon: Sparkles,
    image: images.studio
  },
  {
    title: "Consulenza beauty personalizzata",
    copy: "Prima guardiamo cosa serve davvero, poi scegliamo insieme il trattamento.",
    detail: "Ideale se non sai da dove partire.",
    icon: HeartHandshake,
    image: images.team
  }
];

export const processSteps = [
  "Ci racconti cosa vorresti migliorare",
  "Guardiamo insieme cosa è più adatto",
  "Ti consigliamo il trattamento corretto",
  "Eseguiamo il servizio con precisione",
  "Ti diamo indicazioni per mantenere il risultato"
];

export const reviews = [
  {
    name: "Cliente abituale",
    category: "Unghie",
    text: "Placeholder recensione: servizio preciso, ambiente curato e consigli sempre chiari.",
    rating: 5
  },
  {
    name: "Cliente Google",
    category: "Laminazione ciglia",
    text: "Placeholder recensione: risultato naturale, senza forzature, con molta attenzione ai dettagli.",
    rating: 5
  },
  {
    name: "Prima visita",
    category: "Trattamento viso",
    text: "Placeholder recensione: spiegazioni semplici e trattamento scelto in base alla pelle.",
    rating: 5
  }
];

export const gallery = [
  { title: "Laminazione ciglia", image: images.lashes, alt: "Dettaglio realistico di ciglia curate" },
  { title: "Unghie", image: images.nails, alt: "Dettaglio manicure elegante in luce calda" },
  { title: "Studio", image: images.studio, alt: "Interno caldo di centro estetico premium" },
  { title: "Trattamento viso", image: images.face, alt: "Dettaglio trattamento viso in cabina estetica" },
  { title: "Mani e piedi", image: images.pedicure, alt: "Pedicure e cura dei piedi in ambiente raffinato" }
];

export const contactActions = {
  whatsapp: `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`,
  phone: `tel:+39${business.whatsappNumber.slice(2)}`,
  email: `mailto:${business.email}`,
  directions: business.mapsUrl
};
