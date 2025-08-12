import React from 'react';

const SkillsSlider = () => {
  const skills = [
    'flutter.png', 'illustraitor.png', 'JavaScript-logo.png', 'photoshops.png', 'visual.png',
    'flutter.png', 'illustraitor.png', 'JavaScript-logo.png', 'photoshops.png', 'visual.png',
    'html.png', 'piton.png', 'JavaScript-logo.png', 'Figma-logo.png', 'visual.png',
    'codificacion.png', 'flutter.png', 'piton.png', 'html.png', 'Figma-logo.png',
    'visual.png', 'photoshops.png', 'visual.png', 'flutter.png', 'illustraitor.png',
    'flutter.png', 'Figma-logo.png', 'visual.png', 'flutter.png', 'html.png',
    'flutter.png', 'Figma-logo.png', 'visual.png'
  ];

  return (
    <div className="banneremy">
      <div className="banner-text emy">
        {skills.map((skill, index) => (
          <div key={index} className="slideapp">
            <img src={`/sliderapp/${skill}`} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSlider;
