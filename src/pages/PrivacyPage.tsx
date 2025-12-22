import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-slate-50 to-emerald-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="mb-6">
            <Link to="/" className="text-emerald-600 hover:text-emerald-700 underline">
              ← Back to Home
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Introduction</h2>
            <p className="text-slate-700">
              This Privacy Policy describes how PetHelpLine ("we," "our," or "us") collects, uses, and protects your personal information when you visit our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Information We Collect</h2>
            <p className="text-slate-700">
              We may collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Name and contact information</li>
              <li>Pet health information you choose to share</li>
              <li>Payment information (processed by third-party providers)</li>
              <li>Usage data and website analytics</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">How We Use Your Information</h2>
            <p className="text-slate-700">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 ml-4">
              <li>Provide and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Third-Party Services</h2>
            <p className="text-slate-700">
              Our website uses third-party services, including veterinary consultation platforms and payment processors. 
              These services have their own privacy policies governing the use of your information.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Cookies and Tracking</h2>
            <p className="text-slate-700">
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Data Security</h2>
            <p className="text-slate-700">
              We implement appropriate security measures to protect your personal information. However, no method of transmission 
              over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Your Rights</h2>
            <p className="text-slate-700">
              You have the right to access, update, or delete your personal information. To exercise these rights, please contact us 
              using the information provided below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Contact Us</h2>
            <p className="text-slate-700">
              If you have questions about this Privacy Policy, please contact us through the contact information provided 
              on our main website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Changes to This Policy</h2>
            <p className="text-slate-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;

