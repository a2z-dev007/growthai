import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

export const metadata = {
  title: 'Terms of Service | GrowthAI',
  description: 'Terms of Service for GrowthAI',
};

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#0B0F19] overflow-hidden text-gray-300">
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-[80vh]">
        <h1 className="text-4xl md:text-5xl font-sora font-bold text-white mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none prose-p:leading-relaxed prose-headings:font-sora prose-headings:text-white">
          <p className="mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing our website at GrowthAI.in, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on GrowthAI's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on GrowthAI's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-10 mb-4">3. Disclaimer</h2>
          <p className="mb-4">
            The materials on GrowthAI's website are provided on an 'as is' basis. GrowthAI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p className="mb-4">
            Further, GrowthAI does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">4. Limitations</h2>
          <p className="mb-4">
            In no event shall GrowthAI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on GrowthAI's website, even if GrowthAI or a GrowthAI authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">5. Revisions and Errata</h2>
          <p className="mb-4">
            The materials appearing on GrowthAI's website could include technical, typographical, or photographic errors. GrowthAI does not warrant that any of the materials on its website are accurate, complete or current. GrowthAI may make changes to the materials contained on its website at any time without notice. However GrowthAI does not make any commitment to update the materials.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">6. Links</h2>
          <p className="mb-4">
            GrowthAI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by GrowthAI of the site. Use of any such linked website is at the user's own risk.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">7. Contact Information</h2>
          <p className="mb-4">
            If you have any questions or concerns regarding these Terms of Service, you may contact us using the following details:
          </p>
          <p className="mb-4">
            Email: <a href="mailto:shah@growthai.in" className="text-[#0EA5E9] hover:text-[#22C55E] transition-colors">shah@growthai.in</a><br />
            Phone: <a href="tel:+917071967997" className="text-[#0EA5E9] hover:text-[#22C55E] transition-colors">+91 7071967997</a>
          </p>
        </div>
      </section>
      <Footer />
      <FloatingContact />
    </main>
  );
}
