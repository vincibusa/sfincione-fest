import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import EventSection from './components/EventSection';
import ProgrammaSection from './components/ProgrammaSection';
import DoveMangiareSection from './components/DoveMangiareSection';
import CompetizioniSection from './components/CompetizioniSection';
import MediaPartnerSection from './components/MediaPartnerSection';
import ContattiSection from './components/ContattiSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import LuoghiSection from './components/LuoghiSection';
import HistoricalDataChart from './components/HistoricalDataChart';
import PresentersSection from './components/PresentersSection';

// Componente App principale
const App = () => {
  return (
    <div className="font-gotham text-blu-notte">
      <Navbar />
      <HeroSection />
      <LuoghiSection />
      <HistoricalDataChart />
      <PresentersSection />
      <EventSection />
      <ProgrammaSection />
      <DoveMangiareSection />
      <CompetizioniSection />
      <MediaPartnerSection />
      <ContattiSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default App;