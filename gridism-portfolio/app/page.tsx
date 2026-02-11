import HeroSection from "@/components/sections/HeroSection";
import BrandTransitionSection from "@/components/sections/BrandTransitionSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioCarouselSection from "@/components/sections/PortfolioCarouselSection";
import LogoStripSection from "@/components/sections/LogoStripSection";
import OurCoreServiceSection from "@/components/sections/OurCoreServiceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BrandTransitionSection />
      <AboutSection />
      <PortfolioCarouselSection />
      <LogoStripSection />
      <OurCoreServiceSection />
    </>
  );
}