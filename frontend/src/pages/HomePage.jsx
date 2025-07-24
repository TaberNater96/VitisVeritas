import React from 'react';
import Hero from "../components/ui/Hero";
import LazyMap from '../components/map/LazyMap';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      
      {/* Content section to create space between hero and map */}
      <section className="intro-content">
        <div className="container">
          <h2>Discover the Terroir of the Willamette Valley</h2>
          <p>
            Explore the unique characteristics that make each American Viticultural Area 
            (AVA) within the Willamette Valley distinct. Click on any region below to 
            zoom in and discover what makes each terroir special.
          </p>
        </div>
      </section>

      {/* Lazy-loaded map */}
      <LazyMap />
    </div>
  );
};

export default HomePage;