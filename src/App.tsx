import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PortfolioPage from './pages/PortfolioPage';
import AppPage from './pages/AppPage';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<PortfolioPage />} />
            <Route path="/view-app" element={<AppPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

