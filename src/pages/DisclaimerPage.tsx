import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-slate-50 to-emerald-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="mb-6">
            <Link to="/" className="text-emerald-600 hover:text-emerald-700 underline">
              ← Back to Home
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900">Medical & Affiliate Disclaimer</h1>
          <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Medical Disclaimer</h2>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-amber-900 font-semibold mb-2">⚠️ Important Medical Notice</p>
              <p className="text-slate-700">
                The information provided on this website is for general informational purposes only and is not intended as a 
                substitute for professional veterinary advice, diagnosis, or treatment. Always seek the advice of a qualified 
                veterinarian with any questions you may have regarding your pet's medical condition.
              </p>
            </div>
            <p className="text-slate-700">
              PetHelpLine is a referral service that connects pet owners with licensed veterinarians through third-party platforms. 
              We do not provide direct veterinary services, diagnoses, or medical advice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Emergency Situations</h2>
            <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
              <p className="text-rose-900 font-semibold mb-2">🚨 In Case of Emergency</p>
              <p className="text-slate-700">
                If your pet is experiencing a life-threatening emergency, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 ml-4 mt-2">
                <li>Difficulty breathing</li>
                <li>Severe trauma or injury</li>
                <li>Unconsciousness or collapse</li>
                <li>Severe bleeding</li>
                <li>Suspected poisoning</li>
                <li>Seizures</li>
              </ul>
              <p className="text-slate-700 mt-2">
                <strong>Do not wait for an online consultation.</strong> Immediately contact your local emergency veterinary 
                clinic or animal hospital, or call your veterinarian's emergency line.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Limitations of Online Consultations</h2>
            <p className="text-slate-700">
              Online veterinary consultations have limitations:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Veterinarians cannot perform physical examinations through online platforms</li>
              <li>Some conditions require in-person evaluation and diagnostic tests</li>
              <li>Online consultations are not suitable for all medical situations</li>
              <li>The veterinarian may recommend an in-person visit based on the information provided</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">No Guarantee of Results</h2>
            <p className="text-slate-700">
              We do not guarantee, warrant, or represent that any information, advice, or recommendations provided through 
              third-party veterinary services will be accurate, complete, or suitable for your pet's specific situation. 
              Individual results may vary.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Affiliate Disclosure</h2>
            <p className="text-slate-700">
              PetHelpLine participates in affiliate marketing programs. This means we may earn commissions when you click on 
              links to third-party veterinary services and make purchases or sign up for services.
            </p>
            <p className="text-slate-700">
              <strong>Important:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>We only recommend services we believe may be helpful to pet owners</li>
              <li>Affiliate relationships do not influence our content or recommendations</li>
              <li>The price you pay is not affected by our affiliate relationships</li>
              <li>You are under no obligation to use our affiliate links</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Third-Party Services</h2>
            <p className="text-slate-700">
              When you click on links to third-party veterinary services, you will be subject to their terms of service, 
              privacy policies, and medical disclaimers. PetHelpLine is not responsible for the content, practices, or 
              policies of third-party services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">No Endorsement</h2>
            <p className="text-slate-700">
              Reference to any specific veterinary service, product, or company does not constitute an endorsement or 
              recommendation by PetHelpLine unless explicitly stated.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Your Responsibility</h2>
            <p className="text-slate-700">
              You are solely responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Deciding whether to use the services of third-party veterinary platforms</li>
              <li>Evaluating the suitability of online consultations for your pet's specific needs</li>
              <li>Seeking immediate emergency care when necessary</li>
              <li>Following up with in-person veterinary care when recommended</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Contact Information</h2>
            <p className="text-slate-700">
              If you have questions about this disclaimer, please contact us through the contact information provided 
              on our main website.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DisclaimerPage;

