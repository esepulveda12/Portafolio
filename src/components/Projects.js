import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Globe, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const portfolioImages = [
        {
            src: 'images/proyectos/mainsep.png',
            alt: 'Mainsep Project',
            title: 'Mainsep',
            category: 'Web Development',
            githubLink: 'https://github.com/esepulveda12/mainsep',
            deployLink: 'https://mainsep.vercel.app',
        },
        {
            src: 'images/proyectos/kawaiitube.png',
            alt: 'KawaiiTube Project',
            title: 'KawaiiTube',
            category: 'Web Application',
            githubLink: 'https://github.com/esepulveda12/Demoreproductormusica',
            deployLink: 'https://demoreproductormusica.vercel.app',
        },
        {
            src: 'images/proyectos/pokemon.png',
            alt: 'Pokedex Project',
            title: 'Pokedex',
            category: 'Web Application',
            githubLink: 'https://github.com/esepulveda12/RetroPokedex',
            deployLink: 'https://retro-pokedex-omega.vercel.app',
        },
        {
            src: 'images/proyectos/bakery.png',
            alt: "Bit's Cake Project",
            title: "Bit's Cake",
            category: 'Web Design',
            githubLink: 'https://github.com/esepulveda12/Pasteleria',
            deployLink: 'https://pasteleria-brown.vercel.app',
        },
        {
            src: 'images/proyectos/neochat.png',
            alt: 'Neo Chat Project',
            title: 'Neo Chat',
            category: 'Chat Application',
            githubLink: 'https://github.com/esepulveda12/Neochat',
            deployLink: 'https://neochat-beta.vercel.app',
        },
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, portfolioImages.length]);

    const nextImage = () => {
        setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
    };

    const prevImage = () => {
        setCurrentSlide((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
    };

    const goToImage = (index) => {
        setCurrentSlide(index);
    };

    const getCardClass = (index) => {
        if (index === currentSlide) return 'active';
        const prev = (currentSlide - 1 + portfolioImages.length) % portfolioImages.length;
        const next = (currentSlide + 1) % portfolioImages.length;
        if (index === prev) return 'prev';
        if (index === next) return 'next';
        return 'hidden';
    };

    return (
        <div className="projects-section" id="proyectos">
            <div className="projects-bg-bubble bubble-a" />
            <div className="projects-bg-bubble bubble-b" />

            <div className="projects-container">
                <div className="projects-title">Mis Proyectos</div>
                <p className="projects-subtitle">Una selección de mis trabajos más recientes en desarrollo web y diseño.</p>

                <div
                    className="carousel-3d-frame"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <div className="carousel-3d-track">
                        {portfolioImages.map((image, index) => (
                            <div
                                key={index}
                                className={`project-card-3d ${getCardClass(index)}`}
                                onClick={(e) => {
                                    // Solo navegar si no se hizo clic en un botón de acción
                                    if (!e.target.closest('.action-btn')) {
                                        goToImage(index);
                                    }
                                }}
                            >
                                <div className="card-image-wrapper">
                                    <img src={image.src} alt={image.alt} className="card-image" />
                                    <div className="card-overlay" />
                                </div>
                                <div className="card-content">
                                    <div className="card-text">
                                        <h3 className="card-title">{image.title}</h3>
                                        <span className="card-category">{image.category}</span>
                                    </div>
                                    <div className="card-actions">
                                        <a 
                                            href={image.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="action-btn" 
                                            aria-label="GitHub"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github size={18} />
                                        </a>
                                        <a 
                                            href={image.deployLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="action-btn" 
                                            aria-label="Demo"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Globe size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="nav-button prev" onClick={prevImage} aria-label="Anterior">
                        <ChevronLeft />
                    </button>
                    <button className="nav-button next" onClick={nextImage} aria-label="Siguiente">
                        <ChevronRight />
                    </button>
                </div>

                <div className="carousel-indicators modern">
                    {portfolioImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={index === currentSlide ? 'active' : ''}
                            aria-label={`Ir a proyecto ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
