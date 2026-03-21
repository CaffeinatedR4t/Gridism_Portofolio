import HeroSection from "@/components/sections/home/HeroSection";
import BrandTransitionSection from "@/components/sections/home/BrandTransitionSection";
import PortfolioCarouselSection from "@/components/sections/home/PortfolioCarouselSection";
import LogoStripSection from "@/components/sections/home/LogoStripSection";
import OurCoreServiceSection from "@/components/sections/home/OurCoreServiceSection";
import KeyFeaturesSection from "@/components/sections/home/KeyFeaturesSection";
import FeatureCardsContainer from "@/components/sections/home/FeatureCardsContainer";
import OurCoreProcessSection from "@/components/sections/home/OurCoreProcessSection";
import OurMainClientsSection from "@/components/sections/home/OurMainClientsSection";
import FooterSection from "@/components/FooterSection";

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
      <FooterSection footerImage="/images/Group 75.png" footerLogo="/images/gridism-logo - Copy.svg"/>
    </>
  );
}