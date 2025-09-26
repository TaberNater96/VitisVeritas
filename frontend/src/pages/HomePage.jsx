import React from 'react';
import Hero from "../components/ui/Hero";
import LazyMap from '../components/map/LazyMap';
import MapInterpretation from '../components/ui/MapInterpretation';
import BackToMapButton from '../components/ui/BackToMapButton';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      
      <div className="terroir-sections">
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

        <section className="intro-content">
          <div className="intro-container">
            <h2>The Willamette Valley Terroir Virtual Experience</h2>
            <p>
              Welcome to a unique exploration of the Willamette Valley's terroir! This is far more than just another map showing winery locations. It's an interactive tool designed to give you a complete picture of what makes this region so special for wine. You can think of this project as a digital twin for the Willamette Valley AVA. Terroir, for those who are unfamiliar with the term, is the complete natural environment in which a particular wine is produced, including factors such as the soil, geology, topography, and climate. Not just the vineyard as a whole, but the specifc block or even row in which a grapevine is cultivated. By combining detailed USDA (United States Department of Agriculture) soil data with topographic contour lines, this map allows you to see the very foundation of the valley's vineyards. My goal is to help you visualize <i>WHY</i> a wine from one hillside can taste remarkably different from one grown just down the road.
            </p>
            
            <hr />
            
            <h4>How to explore the map</h4>
            <p>
              I suggest starting with a place you're curious about, whether it's a favorite winery, a specific vineyard, or a broader American Viticultural Area (AVA), which is a federally designated wine grape-growing region based on various different physical factors. Use the AVA selection tool to instantly navigate to that area. Note that locations that are in dense urban cities like Mcminnville, Eugene, and Portland are likely either just a tasting room where wine is served, or a winery where wine is made, not the actual vineyard where the grapes are grown. Now to get a better understanding of the soil where the vines are grown, simply choose the corresponding county from the soil selection box (if you aren't familiar with the counties, just keep selecting them until the correct one is displayed on top). This will overlay the map with detailed soil areas for that specific part of the valley. 
            </p>
            
            <hr />
            
            <h4>Comparing terroir</h4>
            <p>
              Once you've selected an area, zoom in for a bird's-eye view. You'll see contour lines that displays the elevation and slope of the land, alongside the distinct, highly detailed polygons representing every unique soil type. The more you zoom in, the more contour lines will be loaded onto the map along with relative elevation labels which allows you to see exactly how the land is changing around each vineyard. Remember, the closer the contour lines are together, the steeper the slope. After selecting a soil region is where the real interaction and discovery begins as every single soil polygon in the Willamette Valley is labeled along with its relative slope. After examining the terroir of your chosen spot, pan over to a different vineyard, even one nearby, and compare the differences in soil and topography. This visual comparison is the key to understanding the intense diversity that exists within the Willamette Valley terroir.
            </p>
            
            <hr />
            
            <h4>Understanding the details</h4>
            <p>
              If you're unsure what a specific soil type means or want to better visualize what a particular slope looks like, all the information you need is right below the map. Scroll down to the Soil Map Interpretation section, where I walk you through how to read the slope, understand different soil textures, and learn about the characteristics of the specific soil series displayed on the map. For more in-depth descriptions about the Willamette Valley terroir and winemaking process, check out the other pages! Now, go ahead and start exploring the rich tapestry of the Willamette Valley!
            </p>
          </div>
        </section>

        <LazyMap />

        <MapInterpretation />
      </div>
      
      <BackToMapButton />
    </div>
  );
};

export default HomePage;