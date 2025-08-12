import React, { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Profile from './components/Profile';
import SkillsSlider from './components/SkillsSlider';
import DownloadSection from './components/DownloadSection';
import Services from './components/Services';
import PortfolioCarousel from './components/PortfolioCarousel';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import Sidebar from './components/Sidebar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <div className={`App ${isMenuOpen ? 'shifted' : ''}`}>
      <ParticlesBackground />
      <Sidebar onMenuToggle={handleMenuToggle} />
      <Banner />
      <Profile />
      <SkillsSlider />
      <DownloadSection />
      <Services />
      <PortfolioCarousel />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
