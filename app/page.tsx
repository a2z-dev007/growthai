import HeroSection from '@/components/HeroSection';
import SocialProof from '@/components/SocialProof';
import ServicesSection from '@/components/ServicesSection';
import MVPFramework from '@/components/MVPFramework';
import WhyGrowthAI from '@/components/WhyGrowthAI';
import CaseStudies from '@/components/CaseStudies';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';
import ContactForm from '@/components/ContactForm';
import GlowingStrip from '@/components/GlowingStrip';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import FloatingContact from '@/components/FloatingContact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] overflow-hidden">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <ServicesSection />
      <MVPFramework />
      <WhyGrowthAI />
      <GlowingStrip />
      <CaseStudies />
      {/* <Pricing /> */}
      <FinalCTA />
      <ContactForm />
      <Footer />
      <FloatingContact />
    </main>
  );
}
