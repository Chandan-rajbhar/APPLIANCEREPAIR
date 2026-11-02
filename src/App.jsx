import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import OverviewPage from './pages/OverviewPage';
import ServicesPage from './pages/ServicesPage';
import AppliancesPage from './pages/AppliancesPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import ReviewsPage from './pages/ReviewsPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white font-sans text-[#173860] antialiased selection:bg-orange-500 selection:text-white">
        {/* Persistent Navbar across all routes */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<OverviewPage />} />
            <Route path="/overview" element={<Navigate to="/" replace />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/appliances" element={<AppliancesPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Persistent Footer across all routes */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
