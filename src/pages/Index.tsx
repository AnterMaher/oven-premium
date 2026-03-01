import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import TrustSection from "@/components/landing/TrustSection";
import ProcessSection from "@/components/landing/ProcessSection";
import ContactFooter from "@/components/landing/ContactFooter";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="overflow-x-hidden width-full">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <ProcessSection />
      <ContactFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
