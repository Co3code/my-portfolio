import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PortfolioPage from './pages/PortfolioPage';
import AppPage from './pages/AppPage';
import LoadingOverlay from './components/LoadingOverlay';
import { useEffect, useState } from 'react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  // Keep Router as the top-level wrapper; render a child
  // that can use `useLocation()` for route-change loading.
  return (
    <Router>
      <AppShell />
    </Router>
  );
}

function AppShell() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Initial load (first paint)
  useEffect(() => {
    const t = window.setTimeout(() => setIsLoading(false), 700);
    return () => window.clearTimeout(t);
  }, []);

  // Route transitions
  useEffect(() => {
    setIsLoading(true);
    const t = window.setTimeout(() => setIsLoading(false), 450);
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <LoadingOverlay isLoading={isLoading} brand="AC" label="Loading portfolio..." />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/view-app" element={<AppPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

