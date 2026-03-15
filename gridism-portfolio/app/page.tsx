import HeroSection from "@/components/sections/HeroSection";
import BrandTransitionSection from "@/components/sections/BrandTransitionSection";
import PortfolioCarouselSection from "@/components/sections/PortfolioCarouselSection";
import LogoStripSection from "@/components/sections/LogoStripSection";
import OurCoreServiceSection from "@/components/sections/OurCoreServiceSection";
import KeyFeaturesSection from "@/components/sections/KeyFeaturesSection";
import FeatureCardsContainer from "@/components/sections/FeatureCardsContainer";
import OurCoreProcessSection from "@/components/sections/OurCoreProcessSection";
import OurMainClientsSection from "@/components/sections/OurMainClientsSection";
import FooterSection from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandTransitionSection />
      <PortfolioCarouselSection />
      <LogoStripSection />
      <OurCoreServiceSection />
      <KeyFeaturesSection />
      <FeatureCardsContainer />
      <OurCoreProcessSection />
      <OurMainClientsSection />
      <FooterSection />
    </>
  );
}