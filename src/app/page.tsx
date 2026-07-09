import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { HeroSection } from "@/components/HeroSection";
import { LocationSection } from "@/components/LocationSection";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SignatureTreatmentSection } from "@/components/SignatureTreatmentSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <SignatureTreatmentSection />
        <AboutSection />
        <ReviewsSection />
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
