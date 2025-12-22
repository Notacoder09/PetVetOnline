import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            <p className="text-slate-400">© {new Date().getFullYear()} PetHelpLine. All rights reserved.</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm">
            <Link to="/privacy" className="hover:text-white underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white underline underline-offset-4">
              Terms of Service
            </Link>
            <Link to="/disclaimer" className="hover:text-white underline underline-offset-4">
              Disclaimer
            </Link>
          </nav>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-slate-500 text-center">
          <p>
            This website contains affiliate links. We may earn a commission if you make a purchase through these links.
            This does not affect the price you pay or our editorial independence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

