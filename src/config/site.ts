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
  { label: "Servizi", href: "#servizi" },
  { label: "Metodo", href: "#metodo" },
  { label: "Gallery", href: "#gallery" },
  { label: "Dove siamo", href: "#dove-siamo" },
  { label: "Contatti", href: "#contatti" }
];

export const photos = {
  heroMain: "/images/editorial/hero-macro-sguardo.jpg",
  heroSkin: "/images/editorial/macro-pelle-labbra.jpg",
  heroFacial: "/images/editorial/trattamento-viso-specchio.jpg",
  eyesWide: "/images/editorial/sguardo-orizzontale.jpg",
  faceStudio: "/images/editorial/viso-luce-studio.jpg",
  warmSkin: "/images/editorial/pelle-luce-calda.jpg",
  profile: "/images/editorial/profilo-luce-naturale.jpg"
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const contactActions = {
  whatsapp: whatsappUrl(business.whatsappMessage),
  phone: `tel:+39${business.whatsappNumber.slice(2)}`,
  email: `mailto:${business.email}`,
  directions: business.mapsUrl
};

export const allServices = [
  "Laminazione ciglia",
  "Trattamenti sguardo",
  "Unghie e manicure",
  "Pedicure",
  "Trattamenti viso",
  "Trattamenti corpo",
  "Depilazione",
  "Consulenza beauty"
];

export const editorialServices = [
  {
    number: "01",
    title: "Ciglia",
    eyebrow: "Laminazione e sguardo",
    image: photos.eyesWide,
    alt: "Dettaglio ravvicinato dello sguardo con ciglia naturali curate",
    copy:
      "Lavoriamo su ciglia e sopracciglia per rendere lo sguardo più ordinato, leggibile e naturale nella vita di tutti i giorni.",
    cta: "Prenota laminazione",
    href: whatsappUrl("Ciao, vorrei informazioni o un appuntamento per laminazione ciglia.")
  },
  {
    number: "02",
    title: "Unghie",
    eyebrow: "Manicure e pedicure",
    image: photos.warmSkin,
    alt: "Dettaglio mani e pelle in luce calda naturale",
    copy:
      "Forma, colore e cura dei dettagli per mani e piedi più in ordine, con un risultato adatto alla tua routine.",
    cta: "Prenota manicure",
    href: whatsappUrl("Ciao, vorrei prenotare una manicure o un trattamento unghie.")
  },
  {
    number: "03",
    title: "Trattamenti viso",
    eyebrow: "Pelle e cabina",
    image: photos.heroFacial,
    alt: "Trattamento viso in cabina con pelle detersa e luce calda",
    copy:
      "Partiamo dalla tua pelle, ascoltiamo cosa vuoi migliorare e scegliamo il trattamento più adatto senza percorsi standard.",
    cta: "Chiedi per il viso",
    href: whatsappUrl("Ciao, vorrei informazioni sui trattamenti viso.")
  }
];

export const gallery = [
  {
    title: "Sguardo",
    image: photos.heroMain,
    alt: "Macro beauty dello sguardo con pelle luminosa"
  },
  {
    title: "Pelle",
    image: photos.heroSkin,
    alt: "Dettaglio pelle e labbra in luce naturale"
  },
  {
    title: "Cabina viso",
    image: photos.heroFacial,
    alt: "Trattamento viso durante la detersione"
  },
  {
    title: "Luce naturale",
    image: photos.profile,
    alt: "Profilo beauty in luce naturale"
  },
  {
    title: "Dettagli",
    image: photos.warmSkin,
    alt: "Dettaglio pelle e mani curate"
  },
  {
    title: "Armonia",
    image: photos.faceStudio,
    alt: "Ritratto beauty con sguardo luminoso"
  }
];

export const processSteps = [
  "Scegli il trattamento",
  "Scegli data e orario",
  "Ricevi la conferma",
  "Rilassati"
];
