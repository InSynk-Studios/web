import ServicesSection from "../components/sections/ServicesSection";
import ClientSection from "../components/sections/ClientSection";
import ContactFormSection from "../components/sections/ContactFormSection";
import HeroSection from "../components/sections/HeroSection";
import Background from "../components/Background";

export default function Home() {
  return (
    <Background>
      <HeroSection />
      <ServicesSection />
      <ClientSection />
      <ContactFormSection />
    </Background>
  );
}
