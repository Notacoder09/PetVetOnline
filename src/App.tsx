import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import PetVetBridgePage from './pages/PetVetBridgePage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import Footer from './components/Footer';

// Component to track page views on route changes
function PageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track PageView on route change
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <PageViewTracker />
      <Routes>
        <Route path="/" element={<><PetVetBridgePage /><Footer /></>} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
      </Routes>
    </Router>
  );
}

export default App;

