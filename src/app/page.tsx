import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { LocationSection } from "@/components/LocationSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ManifestoSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <ProcessSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
