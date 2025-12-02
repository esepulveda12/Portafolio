import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import './PortfolioCarousel.css';

const PortfolioCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const portfolioImages = [
    {
      src: 'images/figma.png',
      alt: 'Diseño Figma UI/UX',
      title: 'Proyectos Figma',
      category: 'UI/UX Design',
    },
    {
      src: 'images/logos.png',
      alt: 'Diseño de Logos',
      title: 'Diseño de Logos',
      category: 'Branding',
    },
    {
      src: 'images/mobile.png',
      alt: 'Aplicaciones Móviles',
      title: 'Apps Móviles',
      category: 'Mobile Development',
    },
    {
      src: 'images/web.png',
      alt: 'Desarrollo Web',
      title: 'Sitios Web',
      category: 'Web Development',
    },
  ];

  const [itemsPerSlide, setItemsPerSlide] = useState(window.innerWidth < 768 ? 1 : 2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 2);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Recalculate slides whenever itemsPerSlide changes
  const slides = Array.from({ length: Math.ceil(portfolioImages.length / itemsPerSlide) }, (_, idx) =>
    portfolioImages.slice(idx * itemsPerSlide, idx * itemsPerSlide + itemsPerSlide)
  );

  // Reset to first slide when configuration changes to prevent empty views
  useEffect(() => {
    setCurrentSlide(0);
  }, [itemsPerSlide]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextImage = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevImage = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToImage = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="portfolio-section" id="specializations">
      <div className="portfolio-bg-bubble bubble-a" />
      <div className="portfolio-bg-bubble bubble-b" />

      <div className="portfolio-container">
        <div className="portfolio-title">Áreas de especialización</div>
        <p className="portfolio-subtitle">Diseño y desarrollo de software enfocados en la experiencia de usuario y la innovación.</p>

        <div
          className="carousel-frame"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((group, slideIdx) => (
              <div key={slideIdx} className="carousel-slide">
                {group.map((image, index) => (
                  <div key={index} className="carousel-card">
                    <div className="media-wrapper">
                      <img src={image.src} alt={image.alt} className="carousel-image" />
                      <div className="carousel-overlay" />
                      <div className="carousel-info">
                        <div>
                          <div className="info-title">{image.title}</div>
                          <div className="info-category">{image.category}</div>
                        </div>
                        <button className="globe-btn" aria-label="Ver proyecto">
                          <Globe />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button className="carousel-button prev" onClick={prevImage} aria-label="Anterior">
            <ChevronLeft />
          </button>
          <button className="carousel-button next" onClick={nextImage} aria-label="Siguiente">
            <ChevronRight />
          </button>
        </div>

        <div className="carousel-indicators modern">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={index === currentSlide ? 'active' : ''}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>

        {/* counter removed per request */}
      </div>
    </div>
  );
};

export default PortfolioCarousel;
