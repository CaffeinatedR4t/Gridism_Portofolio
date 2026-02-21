import HeroSection from "@/components/sections/HeroSection";
import BrandTransitionSection from "@/components/sections/BrandTransitionSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioCarouselSection from "@/components/sections/PortfolioCarouselSection";
import LogoStripSection from "@/components/sections/LogoStripSection";
import OurCoreServiceSection from "@/components/sections/OurCoreServiceSection";
import KeyFeaturesSection from "@/components/sections/KeyFeaturesSection";
import FeatureCardsContainer from "@/components/sections/FeatureCardsContainer";
import OurCoreProcessSection from "@/components/sections/OurCoreProcessSection";
import OurMainClientsSection from "@/components/sections/OurMainClientsSection";
import WhatsAppImageSection from "@/components/sections/WhatsAppImageSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandTransitionSection />
      <AboutSection />
      <PortfolioCarouselSection />
      <LogoStripSection />
      <OurCoreServiceSection />
      
      {/* White Section */}
      <KeyFeaturesSection />
      <FeatureCardsContainer />
      
      {/* Core Process */}
      <OurCoreProcessSection />
      
      {/* Main Clients */}
      <OurMainClientsSection />
      
      {/* WhatsApp Image with Chess */}
      <WhatsAppImageSection />
      
      {/* Footer */}
      <FooterSection />
    </>
  );
}