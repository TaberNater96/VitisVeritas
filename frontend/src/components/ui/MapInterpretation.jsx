import React from 'react';
import SlopeSection from './SlopeSection';
import SoilTexture from './SoilTexture';
import './MapInterpretation.css';

const MapInterpretation = () => {
  return (
    <section className="map-interpretation">
      <div className="map-interpretation-divider"></div>
      
      <div className="map-interpretation-container">
        <header className="map-interpretation-header">
          <h2 className="map-interpretation-title">Map Interpretation</h2>
        </header>
        
        <div className="map-interpretation-intro">
          <h2 className="understanding-title">Vineyard Slopes</h2>
          <p className="understanding-description">
            When exploring the map above, you'll notice soil descriptions that include slope percentages, such as "Jory silty loam, 10 to 30 percent slopes." These slope 
            ranges indicate the variety of inclines found within that soil area, from the smallest grade (10%) to the steepest (30%), rather than a single uniform slope. 
            The interactive tool below brings these percentages to life, showing you exactly what each gradient looks like and how it affects vineyard management and wine 
            character. By visualizing these slopes, you'll better understand why a vineyard planted on 25% slopes produces vastly different wines than one on 5% slopes, 
            even when the soil composition is identical. This way the next time you visit a vineyard, you can look at which varietals are on smaller or steeper slopes and get
            an idea of why the vineyard planted where they did.
          </p>
        </div>

        <div className="interpretation-sections">
          {/* Slopes Component */}
          <SlopeSection />
          
          {/* Section Divider */}
          <div className="section-divider"></div>
          
          {/* Soil Texture Component */}
          <SoilTexture />
          
          {/* Section Divider */}
          <div className="section-divider"></div>
          
          {/* Future sections will be added here */}
          {/* <SoilSeriesSection /> */}
        </div>
      </div>
    </section>
  );
};

export default MapInterpretation;
