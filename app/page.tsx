import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MarqueeSection from "./components/MarqueeSection";
import PrincipalsSection from "./components/PrincipalsSection";
import ToolsSection from "./components/ToolsSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MarqueeSection />
      <div className="relative">
        <PrincipalsSection />
        <ToolsSection />
      </div>
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}