import ServicesSection from "../components/sections/ServicesSection";
import ClientSection from "../components/sections/ClientSection";
import ContactFormSection from "../components/sections/ContactFormSection";
import HeroSection from "../components/sections/HeroSection";
import Background from "../components/Background";
import GrailCTASection from "../components/sections/GrailCTASection";

export default function Home() {
  return (
    <Background>
      <HeroSection />
      <GrailCTASection />
      <ServicesSection />
      <ClientSection />
      <ContactFormSection />
    </Background>
  );
}
