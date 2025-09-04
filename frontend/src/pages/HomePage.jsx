import React from 'react';
import Hero from "../components/ui/Hero";
import LazyMap from '../components/map/LazyMap';
import MapInterpretation from '../components/ui/MapInterpretation';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      
      {/* Combined terroir sections with unified gradient background */}
      <div className="terroir-sections">
        {/* Quote section moved from hero */}
        <section className="quote-section">
          <div className="quote-container">
            <blockquote className="quote">
              <p className="quote-text">
                "Wine can of their wits the wise beguile, make the sage frolic, and the serious smile."
              </p>
              <cite className="quote-attribution">
                ~ Homer, The Odyssey, 9th century B.C.
              </cite>
            </blockquote>
          </div>
        </section>

        {/* Content section to create space between hero and map */}
        <section className="intro-content">
          <div className="intro-container">
            <h2>The Willamette Valley Terroir Virtual Experience</h2>
            <p>
              Welcome to an immersive exploration of the Willamette Valley's diverse terroir. This interactive experience allows you to delve deep into the intricate relationship between geography, climate, and winemaking that makes this region one of the world's premier wine destinations.
            </p>
            <p>
              The map below provides a comprehensive view of all Willamette Valley sub-AVAs, complete with detailed boundaries, elevation data, and the precise locations of every known winery and vineyard throughout the valley. As you explore, you'll discover how subtle variations in slope, soil composition, wind patterns, sun exposure, and microclimates create distinct characteristics in each wine produced.
            </p>
            <p>
              By visualizing the terroir surrounding each winery and vineyard, you can begin to understand how these environmental factors influence the character and quality of the wines. This knowledge will help you build a fuller appreciation for what to look for in a wine, what to expect from specific areas, and the scientific reasoning behind these differences. It's this incredible diversity within a relatively small geographic area that makes Willamette Valley wines so unique, complex, and consistently exceptional.
            </p>
            <p>
              Click on any region, winery, or vineyard to zoom in and explore the detailed terroir characteristics that shape each unique wine experience. Discover the stories written in the landscape and taste them in every glass.
            </p>
          </div>
        </section>

        {/* Lazy-loaded map */}
        <LazyMap />

        {/* Map Interpretation section with slopes and future components */}
        <MapInterpretation />
      </div>
    </div>
  );
};

export default HomePage;