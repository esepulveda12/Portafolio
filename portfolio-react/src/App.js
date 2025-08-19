import React, { useState } from 'react';
import './styles/global.css';
import Hero from './components/Hero';
import DownloadSection from './components/DownloadSection';
import Services from './components/Services';
import PortfolioCarousel from './components/PortfolioCarousel';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/Particles';
import CanvasCursor from './components/CanvasCursor';
import Sidebar from './components/Sidebar';

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = (isOpen) => {
		setIsMenuOpen(isOpen);
	};

	return (
		<div className={`App ${isMenuOpen ? 'shifted' : ''}`}>
			<CanvasCursor />
			<ParticlesBackground />
			<Sidebar onMenuToggle={handleMenuToggle} />
			<div className="contenedor-principal">
				<Hero />
				<DownloadSection />
				<Services />
				<PortfolioCarousel />
				<AboutMe />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;
