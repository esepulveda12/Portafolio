import React, { useState, useEffect } from 'react';
import './styles/global.css';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import DownloadSection from './components/DownloadSection';
import Services from './components/Services';
import PortfolioCarousel from './components/PortfolioCarousel';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/Particles';
import FluidCursor from './components/FluidCursor';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simular tiempo de carga inicial
		const loadingTimer = setTimeout(() => {
			setIsLoading(false);
		}, 3000); // 3 segundos de loading

		// Cleanup
		return () => clearTimeout(loadingTimer);
	}, []);

	const handleSidebarToggle = (isOpen) => {
		setIsSidebarOpen(isOpen);
	};

	// Mostrar spinner mientras carga
	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<div className={`App ${isSidebarOpen ? 'shifted' : ''}`}>
			<FluidCursor />
			<ParticlesBackground />
			<Sidebar onMenuToggle={handleSidebarToggle} />
			<div className="contenedor-principal">
				<Hero />
				<DownloadSection />
				<Services />
				<PortfolioCarousel />
				<Projects />
				<AboutMe />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default App;
