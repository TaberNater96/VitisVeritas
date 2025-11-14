import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-container">
          <h1 className="about-title">About Vitis Veritas</h1>
          
          <div className="about-divider about-divider-small"></div>
          
          <div className="about-text">
            <h2>The Story Behind the Project</h2>
            <p>
              Vitis Veritas was born from a simple curiosity that grew into a passion. Having lived in the heart of the Willamette Valley for 30 years, I've watched local vineyards transform grapes into pure expressions of their environment. A Wadenswil grown in Southern Oregon tastes remarkably different from one cultivated in the winds of the Van Duzer Corridor, yet both carry familiar undertones that connect them to their shared varietal heritage. This fascinating interplay between grape, land, and climate reveals how wine becomes a liquid narrative of place.
            </p>

            <p>
              I once heard that when someone opens a bottle of Chianti, they are transported back to the rolling hills of Tuscany for the duration of that bottle, no matter what circumstances they are in or where they are in the world. Everything in that bottle comes straight from the land where it grew, molded by the environment and the people who tended it. This is what I want to illuminate for anyone who opens a bottle of Willamette Valley wine: not just the wine itself, but the extraordinary land from which it came.
            </p>
            
            <div className="about-divider"></div>
            
            <h2>Why This Project Needed to Exist</h2>
            <p>
              My search for comprehensive information about Willamette Valley wine revealed a surprising gap. While I could find fragments, some sites discussing terroir, others listing wineries, a few explaining winemaking processes, there was no single, holistic resource that brought it all together. I wanted to know about the vineyard down the road from my home and found nothing beyond their own website. I wanted to understand why one area produces such different wines from another, what makes each vineyard unique, and the scientific foundations underlying it all.
            </p>
            
            <p>
              More importantly, I discovered that some of the most extraordinary wines in the Willamette Valley come from little-known family vineyards that lack the marketing budgets of their larger neighbors near Portland. These are families who have spent generations perfecting their craft, motivated not by profit but by pure love of winemaking. Their stories deserve to be told, their locations mapped, and their contributions to our wine heritage recognized. Vitis Veritas aims to level the playing field, even if just a little, by providing equal visibility to every vineyard and winery in the valley, big or small, famous or undiscovered.
            </p>
            
            <div className="about-divider"></div>
            
            <h2>The Technical Journey</h2>
            <p>
              Building Vitis Veritas required months of development and thousands of hours of programming, research, and fine-tuning. As an unemployed data science graduate, I had both the time and the motivation to tackle this project solo, knowing that a purely educational platform like this would be unlikely to receive traditional funding.
            </p>
            
            <p>
              The technical challenges were significant. To keep the platform completely free to host, I engineered it to run entirely client-side as a dynamic, interactive tool. This project is currently the only platform that displays all known wineries and vineyards in the Willamette Valley on a single map. I hand-crafted the most detailed outline of the Van Duzer Corridor available online, carefully following satellite contour lines and elevation readings to help vineyard owners and wine enthusiasts visualize exactly how these crucial winds reach different locations.
            </p>

            <p>
              Perhaps the most technically complex feature is the soil map overlay. Using advanced GIS techniques, I extracted USDA survey shapefiles, transformed them into a workable format for local database storage, and then converted them into client-side GeoJSON files. The result is an overlay of thousands of soil polygons organized by county, each showing the exact soil type and slope of every location on the map. When you hover over any point, you can see precisely what lies beneath the vines.
            </p>

            <p>
              Beyond the interactive map, I've created extensive pages explaining the complete terroir of the Willamette Valley, from geology and physics to climate, topology, biology, and chemistry, as well as detailed coverage of the winemaking process after harvest. Every element is designed to provide a truly holistic understanding of what makes Willamette Valley wine unique by walking through the life from the dirt to the bottle.
            </p>
            
            <div className="about-divider"></div>
            
            <h2>A Labor of Love, Freely Shared</h2>
            <p>
              Vitis Veritas represents something rare in today's digital landscape: a comprehensive educational resource with no commercial agenda. I'm not trying to sell you wine, promote specific vineyards, or generate advertising revenue. My only costs will be the domain name and potentially Mapbox usage if the site becomes popular enough to exceed the free tier, a problem I'd welcome.
            </p>

            <p>
              This project is my contribution to the wine community and to anyone curious about the remarkable intersection of science, craft, and nature that defines Willamette Valley wine. Whether you're a seasoned sommelier, a local vineyard owner, a curious wine enthusiast, or simply someone who appreciates the beauty of terroir, I hope Vitis Veritas serves as a valuable resource for understanding and appreciating this special corner of the Pacific Northwest.
            </p>

            <p>
              <i>If you're interested in the technical implementation or would like to contribute to this project, please visit the GitHub repository linked in the footer below. The entire codebase is open source and available for exploration, improvement, and adaptation.</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;