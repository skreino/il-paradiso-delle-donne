import {
  CalendarCheck,
  Eye,
  Footprints,
  Hand,
  HeartHandshake,
  MapPin,
  ShieldCheck,
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
  postalCity: "20871 Vimercate MB",
  area: "Vimercate, Monza e Brianza",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Il%20Paradiso%20delle%20Donne%20Via%20Luigi%20Cadorna%2024%2Fe%2020871%20Vimercate%20MB",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Via%20Luigi%20Cadorna%2024%2Fe%2020871%20Vimercate%20MB&output=embed",
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
    "Il Paradiso delle Donne | Centro estetico a Vimercate per ciglia, unghie e viso",
  description:
    "Centro estetico a Vimercate per laminazione ciglia, unghie, manicure, pedicure, trattamenti viso, corpo e depilazione. Prenota su WhatsApp.",
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
  { label: "Sguardo", href: "#sguardo" },
  { label: "Chi siamo", href: "#chi-siamo" },
  { label: "Dove siamo", href: "#dove-siamo" },
  { label: "Contatti", href: "#contatti" }
];

export const images = {
  hero: "/images/hero-centro-estetico-vimercate.svg",
  lashes: "/images/laminazione-ciglia-naturale.svg",
  nails: "/images/unghie-manicure-dettaglio.svg",
  face: "/images/trattamento-viso-cabina.svg",
  team: "/images/martina-team.svg",
  studio: "/images/studio-il-paradiso-delle-donne.svg",
  pedicure: "/images/pedicure-dettaglio.svg",
  body: "/images/trattamento-corpo.svg",
  galleryNails: "/images/gallery-unghie-01.svg",
  galleryLashes: "/images/gallery-ciglia-01.svg",
  galleryStudio: "/images/gallery-studio-01.svg"
};

export const trustBadges = [
  "A Vimercate dal 2019",
  "Specialiste in laminazione e unghie",
  "Consulenza prima del trattamento",
  "Appuntamenti su richiesta"
];

export function whatsappUrl(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const services = [
  {
    title: "Laminazione ciglia",
    copy: "Per ciglia più ordinate, curve e visibili, senza dover ricorrere ogni giorno al mascara.",
    detail: "Valutiamo le ciglia naturali e ti spieghiamo il risultato possibile.",
    icon: Eye,
    image: images.lashes,
    alt: "Trattamento di laminazione ciglia con luce calda e strumenti puliti",
    whatsapp: whatsappUrl("Ciao, vorrei informazioni o un appuntamento per laminazione ciglia.")
  },
  {
    title: "Trattamenti sguardo",
    copy: "Ciglia e sopracciglia più ordinate, con un effetto pulito che resta naturale sul viso.",
    detail: "Ideale se vuoi valorizzare lo sguardo senza cambiare troppo.",
    icon: Sparkles,
    image: images.galleryLashes,
    alt: "Dettaglio occhi e sopracciglia curati in centro estetico",
    whatsapp: whatsappUrl("Ciao, vorrei informazioni sui trattamenti sguardo.")
  },
  {
    title: "Unghie e manicure",
    copy: "Forma, colore e struttura studiati per mani curate e un risultato che resta bello nel tempo.",
    detail: "Ti aiutiamo a scegliere lunghezza, tonalità e finitura.",
    icon: Hand,
    image: images.nails,
    alt: "Dettaglio manicure nude realizzata con precisione",
    whatsapp: whatsappUrl("Ciao, vorrei prenotare una manicure o un trattamento unghie.")
  },
  {
    title: "Pedicure",
    copy: "Un servizio pratico e curato per piedi più ordinati, comodi e leggeri.",
    detail: "Pensato per mantenere piedi e unghie in ordine con regolarità.",
    icon: Footprints,
    image: images.pedicure,
    alt: "Pedicure curata con strumenti puliti e asciugamano chiaro",
    whatsapp: whatsappUrl("Ciao, vorrei prenotare una pedicure.")
  },
  {
    title: "Trattamenti viso",
    copy: "Partiamo dalla tua pelle e scegliamo il trattamento più adatto, senza percorsi scelti a caso.",
    detail: "Detersione, manualità e prodotti selezionati in base al bisogno.",
    icon: Stars,
    image: images.face,
    alt: "Cabina estetica per trattamento viso con luce calda",
    whatsapp: whatsappUrl("Ciao, vorrei informazioni sui trattamenti viso.")
  },
  {
    title: "Trattamenti corpo",
    copy: "Percorsi estetici per il corpo spiegati in modo chiaro, con obiettivi realistici.",
    detail: "Ti consigliamo frequenza e mantenimento senza forzature.",
    icon: Waves,
    image: images.body,
    alt: "Cabina per trattamento corpo in ambiente caldo e ordinato",
    whatsapp: whatsappUrl("Ciao, vorrei informazioni sui trattamenti corpo.")
  },
  {
    title: "Depilazione",
    copy: "Precisione, igiene e delicatezza per un trattamento rapido e gestito con attenzione.",
    detail: "Per viso e corpo, con tempi chiari e massima cura della pelle.",
    icon: ShieldCheck,
    image: images.studio,
    alt: "Postazione ordinata con prodotti e strumenti estetici",
    whatsapp: whatsappUrl("Ciao, vorrei prenotare un trattamento di depilazione.")
  },
  {
    title: "Consulenza beauty",
    copy: "Se non sai da dove partire, guardiamo insieme cosa ti serve e cosa può funzionare meglio.",
    detail: "Un primo confronto semplice prima di scegliere il trattamento.",
    icon: HeartHandshake,
    image: images.team,
    alt: "Team del centro estetico pronto ad accogliere le clienti",
    whatsapp: whatsappUrl("Ciao, vorrei una consulenza beauty personalizzata.")
  }
];

export const heroServices = [
  { label: "Laminazione ciglia", href: "#sguardo" },
  { label: "Unghie e manicure", href: "#trattamenti" },
  { label: "Trattamenti viso", href: "#trattamenti" }
];

export const processSteps = [
  "Ci racconti cosa vorresti sistemare",
  "Guardiamo insieme pelle, ciglia, mani o corpo",
  "Ti proponiamo il trattamento più adatto",
  "Lavoriamo con tempi chiari e precisione",
  "Ti lasciamo indicazioni semplici per mantenere il risultato"
];

export const trustCards = [
  {
    title: "Clienti abituali nel tempo",
    text: "Molte clienti tornano per mantenere mani, ciglia e viso curati con continuità.",
    icon: CalendarCheck
  },
  {
    title: "Consulenza prima del trattamento",
    text: "Prima di iniziare ascoltiamo cosa desideri e ti spieghiamo cosa è più adatto.",
    icon: HeartHandshake
  },
  {
    title: "Ambiente pulito e ordinato",
    text: "Postazioni, strumenti e tempi di lavoro sono gestiti con attenzione.",
    icon: ShieldCheck
  },
  {
    title: "Risultati naturali e curati",
    text: "Il risultato deve stare bene sul tuo viso, sulle tue mani e nella tua routine.",
    icon: Sparkles
  },
  {
    title: "Appuntamenti gestiti con attenzione",
    text: "Ti aiutiamo a trovare il momento giusto e a capire quanto tempo serve.",
    icon: MapPin
  }
];

export const gallery = [
  {
    title: "Dettagli manicure",
    image: images.galleryNails,
    alt: "Manicure nude con dettagli curati in centro estetico"
  },
  {
    title: "Laminazione ciglia",
    image: images.galleryLashes,
    alt: "Ciglia valorizzate con effetto naturale"
  },
  {
    title: "Cabina trattamenti",
    image: images.face,
    alt: "Cabina trattamenti viso ordinata e luminosa"
  },
  {
    title: "Studio",
    image: images.galleryStudio,
    alt: "Dettaglio dello studio Il Paradiso delle Donne a Vimercate"
  },
  {
    title: "Cura mani e piedi",
    image: images.pedicure,
    alt: "Cura mani e piedi con strumenti puliti"
  }
];

export const contactActions = {
  whatsapp: whatsappUrl(business.whatsappMessage),
  phone: `tel:+39${business.whatsappNumber.slice(2)}`,
  email: `mailto:${business.email}`,
  directions: business.mapsUrl
};
