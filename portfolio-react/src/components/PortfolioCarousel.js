import React, { useState, useEffect } from 'react';

const PortfolioCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    { src: 'images/figma.png', alt: 'Imagen 1' },
    { src: 'images/logos.png', alt: 'Imagen 2' },
    { src: 'images/mobile.png', alt: 'Imagen 3' },
    { src: 'images/web.png', alt: 'Imagen 4' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div id="carouselExample" className="carousel emy">
      <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
            <img src={image.src} className="emyimage" alt={image.alt} />
          </div>
        ))}
      </div>
    
      <button className="carousel-control-prev" type="button" onClick={prevSlide}>
        <span className="carousel-control-prev-icon" aria-hidden="true">←</span>
        <span className="visually-hidden"></span>
      </button>
      <button className="carousel-control-next" type="button" onClick={nextSlide}>
        <span className="carousel-control-next-icon" aria-hidden="true">→</span>
        <span className="visually-hidden"></span>
      </button>
    
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button 
            key={index}
            type="button" 
            onClick={() => goToSlide(index)} 
            className={index === currentSlide ? 'active' : ''} 
            aria-current={index === currentSlide ? 'true' : 'false'} 
            aria-label={`Imagen ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCarousel;
