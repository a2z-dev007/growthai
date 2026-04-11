import HeroSection from '@/components/HeroSection';
import SocialProof from '@/components/SocialProof';
import ServicesSection from '@/components/ServicesSection';
import MVPFramework from '@/components/MVPFramework';
import WhyGrowthAI from '@/components/WhyGrowthAI';
import ProjectsShowcase from '@/components/ProjectsShowcase';
import FinalCTA from '@/components/FinalCTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import FloatingContact from '@/components/FloatingContact';
import ProblemSection from '@/components/ProblemSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import Testimonials from '@/components/Testimonials';
import IdealFit from '@/components/IdealFit';
import GlowingStrip from '@/components/GlowingStrip';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] overflow-hidden">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <ProblemSection />
      <WhyGrowthAI />
      <ServicesSection />
      <GlowingStrip />
      <MVPFramework />
      <GuaranteeSection />
      {/* <ProjectsShowcase /> */}
      <Testimonials />
      <IdealFit />
      <FAQ />
      <FinalCTA />
      <ContactForm />
      <Footer />
      <FloatingContact />
    </main>
  );
}
