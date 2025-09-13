import React, { useState, useEffect } from 'react';
import './BackToMapButton.css';

const BackToMapButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the map section element
      const mapSection = document.querySelector('.lazy-map-section');
      
      if (mapSection) {
        const rect = mapSection.getBoundingClientRect();
        // Show button when the map is completely out of view (above the viewport)
        const mapCompletelyPassed = rect.bottom < 0;
        setIsVisible(mapCompletelyPassed);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMap = () => {
    const mapSection = document.querySelector('.lazy-map-section');
    if (mapSection) {
      mapSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <button 
      className={`back-to-map-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToMap}
      aria-label="Back to map"
    >
      <div className="button-content">
        <svg 
          className="arrow-icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
        <span className="button-text">Back to map</span>
      </div>
    </button>
  );
};

export default BackToMapButton;
