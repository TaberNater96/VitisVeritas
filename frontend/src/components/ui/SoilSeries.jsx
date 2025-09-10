import React from 'react';
import './SoilSeries.css';

const SoilSeries = () => {
  const soilSeriesData = {
    bellpine: {
      title: 'Bellpine',
      soilDepthToBedrock: '20-40 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Colluvium and residuum from marine sedimentary rocks',
      awc: '0.11-0.15 in/in',
      cec: '15-25 meq/100g',
      description: 'Bellpine soils are moderately deep, well-drained soils derived from marine sedimentary rocks that provide limited fertility and moderate water retention capacity. The silty clay loam texture and 20-40 inch depth to bedrock create growing conditions that naturally restrict vine vigor while maintaining adequate drainage. In Willamette Valley vineyards, these marine sedimentary soils produce wines with bold minerality and dusty, robust tannins that distinguish them from volcanic soil counterparts. The limited nutrient availability forces vines to develop deeper root systems, resulting in concentrated fruit that expresses dark berry flavors, earthy notes, and the distinctive mineral complexity characteristic of Oregon\'s marine sedimentary terroir.'
    },
    gelderman: {
      title: 'Gelderman',
      soilDepthToBedrock: '20-40 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Volcanic basalt and tuffaceous materials',
      awc: '0.14-0.20 in/in',
      cec: '15-25 meq/100g',
      description: 'Gelderman soils are moderately deep, well-drained fine clay soils formed from weathered volcanic basalt and tuffaceous materials originating from ancient Columbia River Basalt Formation flows that occurred 5-15 million years ago. These soils are mainly characterized by their distinctive umbric epipedon (dark surface layer) and high clay content of 40-50%, with depths to weathered basalt bedrock ranging from 20-40 inches. Gelderman soils occur on summit and shoulder positions of hills and foothills throughout the Willamette Valley and are commonly used for vineyards, along with Christmas trees, orchards, and pastures. The volcanic basalt parent material creates nutrient-rich soils with excellent water retention properties due to high clay content, which produces wines with concentrated flavors, good structure, and notable minerality that reflects the iron-rich volcanic origins. The strongly acidic nature and fine clay texture of Gelderman soils contribute to moderate vine vigor and concentrated fruit production, which makes them particularly well-suited for premium Pinot Noir cultivation.'
    },
    hazelair: {
      title: 'Hazelair',
      soilDepthToBedrock: '20-40 inches',
      drainageClassification: 'Somewhat Poorly Drained',
      parentMaterial: 'Silty glaciolacustrine deposits, siltstone, or volcanic tuff',
      awc: '0.05-0.10 in/in',
      cec: '35-45 meq/100g',
      description: 'Hazelair soils are moderately deep, somewhat poorly drained soils with very high clay content (60-70%) that create challenging growing conditions requiring careful vineyard management. The heavy clay texture and seasonal high water table can lead to excessive vigor during wet periods, making these soils best suited for sites with good air drainage and careful canopy management. Despite drainage challenges, Hazelair\'s high cation exchange capacity and water retention contribute to wines with strong structure, intense flavors, and notable complexity when vines are properly managed to control vigor and achieve balanced fruit ripening.'
    },
    jory: {
      title: 'Jory',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Colluvium and residuum from volcanic basalt',
      awc: '0.13-0.16 in/in',
      cec: '20-30 meq/100g',
      description: 'Jory soils are Oregon\'s state soil and the iconic red volcanic soils that define premium Willamette Valley vineyards, particularly in the Dundee Hills AVA. Formed from weathered Columbia River Basalt, these clay-rich soils provide excellent water retention during dry summers while maintaining good drainage, creating ideal stress conditions for Pinot Noir cultivation. The high iron content and clay structure of Jory soils contribute to wines with bright red fruit characteristics, refined tannins, and distinctive spice notes that have become hallmarks of Oregon\'s most celebrated wines.'
    },
    laurelwood: {
      title: 'Laurelwood',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Wind-blown loess (silt) deposits',
      awc: '0.16-0.20 in/in',
      cec: '10-18 meq/100g',
      description: 'Laurelwood soils are very deep, well-drained loess soils composed of wind-blown silt deposited over basalt during Ice Age events between 50,000 and 200,000 years ago. The fine-silty texture provides excellent water-holding capacity while maintaining good drainage, creating ideal conditions for consistent vine growth without excessive vigor. Found exclusively at higher elevations in the Laurelwood District AVA, these soils produce wines with elegant, lighter profiles featuring red fruit characteristics, exotic spice notes, and distinctive earthy aromatics. The combination of high silt content, depth, and fractured basalt subsoil allows deep root penetration, contributing to wines with fine tannins, bright acidity, and exceptional aging potential that has become a hallmark of Oregon\'s highest elevation vineyards.'
    },
    nekia: {
      title: 'Nekia',
      soilDepthToBedrock: '20-40 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Residuum and colluvium from basalt and tuffaceous materials',
      awc: '0.10-0.14 in/in',
      cec: '20-30 meq/100g',
      description: 'Nekia soils are the most common volcanic soils in the Eola-Amity Hills AVA, and is formed from weathered basalt that creates rocky, well-drained sites with moderate rooting depth. These clay-rich soils combine good water retention with excellent drainage, producing wines with pronounced earthiness, minerality, and structure. The combination of volcanic origin, moderate depth to bedrock, and exposure to cooling winds through the Van Duzer Corridor creates an ideal environment for producing complex, age-worthy wines with distinctive mineral character and firm tannins that are characteristic of the Eola Hills terroir.'
    },
    rickreall: {
      title: 'Rickreall',
      soilDepthToBedrock: '12-20 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Colluvium and residuum from sedimentary siltstone',
      awc: '0.08-0.12 in/in',
      cec: '15-25 meq/100g',
      description: 'Rickreall soils are shallow, well-drained soils found on ridgetops and steep slopes of the Coast Range foothills, creating naturally stressed growing conditions that can produce intensely flavored wines. The limited rooting depth forces vines to struggle for water and nutrients, resulting in smaller berries with concentrated flavors and naturally controlled vigor. While these challenging soils are less commonly planted than deeper soils, vineyards established on Rickreall series often produce distinctive wines with strong mineral notes and excellent complexity, especially when managed carefully to account for their limited water-holding capacity.'
    },
    saum: {
      title: 'Saum',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Colluvium from Columbia River Basalt',
      awc: '0.12-0.16 in/in',
      cec: '18-28 meq/100g',
      description: 'Saum soils are very deep, well-drained soils formed in basalt colluvium on hillslopes and areas affected by mass movement. The fine-textured nature and 35-50% clay content provide good water retention while maintaining adequate drainage for vine health. These volcanic soils contribute to wines with refined tannins and bright red fruit characteristics typical of basaltic terroir in the Willamette Valley. Research has shown that Saum soils produce grapes with advanced ripeness characteristics, including higher sugar levels and pH, making them particularly well-suited for Pinot Noir production in Oregon\'s cooler vintages.'
    },
    willakenzie: {
      title: 'Willakenzie',
      soilDepthToBedrock: '20-40 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Tuffaceous sandstone, arkosic sandstone, and siltstone',
      awc: '0.12-0.18 in/in',
      cec: '12-20 meq/100g',
      description: 'Willakenzie soils are moderately deep, well-drained fine-loamy soils formed from ancient marine sedimentary rocks including tuffaceous sandstone and siltstone deposited millions of years ago when the Pacific Ocean covered parts of Oregon. These soils occur on smooth convex hills along the margins of the Willamette Valley and are characterized by moderate depth to bedrock (20-40 inches) and fine-loamy texture with 24-35% clay content . The marine sedimentary parent material creates unique terroir that tends to warm and dry out earlier than volcanic soils, contributing to early ripening and producing wines with distinctive characteristics . Willakenzie soils are particularly prominent in areas like Ribbon Ridge and portions of Yamhill-Carlton AVA, where they produce elegant Pinot Noir wines with vibrant red fruit profiles, excellent energy and brightness, notable minerality, and complex savory undertones that reflect the ancient oceanic origins of these sedimentary deposits .'
    }
  };

  return (
    <div className="soil-series-component">
      <div className="soil-series-container">
        {/* Section Title */}
        <div className="soil-series-header">
          <h2 className="soil-series-title">Soil Series</h2>
        </div>

        {/* Top Description Container */}
        <div className="soil-series-intro-container">
          <div className="soil-series-description">
            <p>
              When you hover over soil areas on the map above, you'll see specific names like "Jory silty clay loam" or "Rickreall silty clay loam", these are soil series names that represent specific soil types with unique characteristics and formation histories. A soil series is a classification system that groups soils with similar characteristics, formation processes, and mineral compositions, think of it as a "family name" for soil types. So when you see names like "Jory silty loam" or "Rickreall silty loam," the first word (Jory or Rickreall) identifies the soil series, while the second part describes the texture. Each soil series has distinct properties that influence how grapevines grow, including drainage patterns, mineral content, water retention, and heat absorption, all of which directly impact the flavor profile, structure, and character of the wines produced. The Willamette Valley has a very diverse set of soil families, formed by ancient lava flows, marine sediments, and glacial deposits, create distinct microclimates and growing conditions that contribute to the region's renowned terroir-driven wines. This section is meant to walk through each unique soil series found across the Willamette Valley's vineyards, which is designed to help you understand how the ground beneath the vines shapes the wine in your glass. The soil series types below are ordered alphabetically to find quickly and easily.
            </p>
          </div>
          <div className="soil-depth-image-container">
            <img 
              src="/src/assets/images/soil_depth.png" 
              alt="Soil depth illustration"
              className="soil-depth-image"
            />
          </div>
        </div>

        {/* Soil Series List */}
        <div className="soil-series-list">
          {Object.entries(soilSeriesData).map(([key, soil], index) => (
            <div 
              key={key} 
              className={`soil-series-item ${index % 2 === 0 ? 'primary' : 'secondary'}`}
            >
              <div className="soil-series-content">
                <div className="soil-series-left">
                  <h3 className="soil-series-name">{soil.title}</h3>
                  <div className="soil-series-divider"></div>
                  <div className="soil-series-stats">
                    <div className="series-stat-row">
                      <span className="series-stat-label">Soil Depth To Bedrock:</span>
                      <span className="series-stat-value">{soil.soilDepthToBedrock}</span>
                    </div>
                    <div className="series-stat-row">
                      <span className="series-stat-label">Drainage Classification:</span>
                      <span className="series-stat-value">{soil.drainageClassification}</span>
                    </div>
                    <div className="series-stat-row">
                      <span className="series-stat-label">Parent Material:</span>
                      <span className="series-stat-value">{soil.parentMaterial}</span>
                    </div>
                    <div className="series-stat-row">
                      <span className="series-stat-label">Available Water Holding Capacity (AWC):</span>
                      <span className="series-stat-value">{soil.awc}</span>
                    </div>
                    <div className="series-stat-row">
                      <span className="series-stat-label">Cation Exchange Capacity (CEC):</span>
                      <span className="series-stat-value">{soil.cec}</span>
                    </div>
                  </div>
                </div>
                <div className="soil-series-right">
                  <p className="soil-series-description">{soil.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoilSeries;
