import type { Metadata } from "next";
import "./globals.css";
import { business, contactActions, seo } from "@/config/site";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  metadataBase: new URL("https://ilparadisodelledonne.example"),
  alternates: {
    canonical: "https://il-paradiso-delle-donne.vercel.app/"
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "/images/hero-centro-estetico-vimercate.svg",
        width: 1200,
        height: 630,
        alt: "Il Paradiso delle Donne, centro estetico a Vimercate"
      }
    ]
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: business.name,
  founder: business.founder,
  telephone: `+39 ${business.phone}`,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    addressLocality: "Vimercate",
    addressRegion: "MB",
    postalCode: "20871",
    addressCountry: "IT"
  },
  areaServed: business.area,
  url: "https://il-paradiso-delle-donne.vercel.app/",
  image: "https://il-paradiso-delle-donne.vercel.app/images/hero-centro-estetico-vimercate.svg",
  sameAs: [contactActions.directions],
  openingHoursSpecification: business.hours.map(([day, time]) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: day,
    opens: time === "Chiuso" ? "00:00" : time.split(" - ")[0],
    closes: time === "Chiuso" ? "00:00" : time.split(" - ")[1]
  }))
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        {children}
      </body>
    </html>
  );
}
