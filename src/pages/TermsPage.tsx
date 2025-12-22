import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-slate-50 to-emerald-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="mb-6">
            <Link to="/" className="text-emerald-600 hover:text-emerald-700 underline">
              ← Back to Home
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
          <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Agreement to Terms</h2>
            <p className="text-slate-700">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Use License</h2>
            <p className="text-slate-700">
              Permission is granted to temporarily access the materials on PetHelpLine's website for personal, non-commercial 
              transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Service Description</h2>
            <p className="text-slate-700">
              PetHelpLine provides a platform that connects pet owners with licensed veterinarians through third-party services. 
              We are not a veterinary service provider ourselves, but rather a referral and information service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Affiliate Relationships</h2>
            <p className="text-slate-700">
              This website contains affiliate links. We may receive compensation when you click on links to third-party services 
              and make purchases. This does not affect the price you pay or our editorial independence.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Limitations of Liability</h2>
            <p className="text-slate-700">
              In no event shall PetHelpLine or its suppliers be liable for any damages (including, without limitation, damages for 
              loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on 
              PetHelpLine's website, even if PetHelpLine or a PetHelpLine authorized representative has been notified orally or in 
              writing of the possibility of such damage.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Accuracy of Materials</h2>
            <p className="text-slate-700">
              The materials appearing on PetHelpLine's website could include technical, typographical, or photographic errors. 
              PetHelpLine does not warrant that any of the materials on its website are accurate, complete, or current.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Modifications</h2>
            <p className="text-slate-700">
              PetHelpLine may revise these terms of service for its website at any time without notice. By using this website, 
              you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Governing Law</h2>
            <p className="text-slate-700">
              These terms and conditions are governed by and construed in accordance with applicable laws, and you irrevocably 
              submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsPage;

