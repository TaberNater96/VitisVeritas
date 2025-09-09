import React from 'react';
import './SoilSeries.css';

const SoilSeries = () => {
  const soilSeriesData = {
    jory: {
      title: 'Jory',
      soilDepthToBedrock: '20-40 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Volcanic Basalt',
      awc: '0.15-0.20 in/in',
      cec: '15-25 meq/100g',
      description: 'Jory soils are the iconic red volcanic soils formed from weathered Columbia River Basalt that define much of the Dundee Hills and parts of other Willamette Valley AVAs. These deep, well-drained soils with their distinctive reddish-brown color provide excellent water retention while allowing proper drainage, creating ideal conditions for Pinot Noir cultivation. The high iron oxide content and fine clay particles give Jory soils exceptional cation exchange capacity, allowing them to hold nutrients effectively while the volcanic origin provides excellent mineral complexity. Wines from Jory soils are known for their power, structure, and ability to age gracefully, often displaying dark fruit characteristics, firm tannins, and distinctive earthy undertones.'
    },
    rickreall: {
      title: 'Rickreall',
      soilDepthToBedrock: '20-40 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Marine Sedimentary',
      awc: '0.12-0.18 in/in',
      cec: '12-20 meq/100g',
      description: 'Rickreall soils are formed from weathered marine sedimentary rocks and are commonly found throughout the western foothills of the Willamette Valley, particularly in areas with moderate slopes. These soils typically have a brownish color and provide good drainage while maintaining adequate moisture retention for vine health. The sedimentary origin gives Rickreall soils a different mineral profile compared to volcanic Jory soils, often resulting in wines with more delicate structure and elegant aromatics. Vineyards on Rickreall soils tend to produce Pinot Noir with refined tannins, bright acidity, and complex floral and spice notes that reflect the unique geological history of these marine-derived formations.'
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
