import React from 'react';
import './SoilTexture.css';

const SoilTexture = () => {
  const soilData = {
    sand: {
      title: 'Sand',
      size: '0.05-2.0 mm',
      drainage: 'Rapid',
      waterHolding: 'Poor',
      nutrients: 'Low',
      compaction: 'Resistant',
      workability: 'Easy',
      description: 'Sandy soils provide excellent drainage and warm up quickly in spring, but their low fertility and poor water retention force vines to struggle for nutrients and moisture. In the Willamette Valley, this stress produces lighter-bodied wines with bright, transparent fruit flavors and elegant profiles, mainly suited for aromatic white varieties.',
      image: 'sand.jpg'
    },
    clay: {
      title: 'Clay',
      size: '< 0.002 mm',
      drainage: 'Very Slow',
      waterHolding: 'Excellent',
      nutrients: 'High',
      compaction: 'Prone',
      workability: 'Difficult',
      description: 'Clay-rich soils like the iconic red Jory soils of Dundee Hills excel at retaining water and nutrients through high cation exchange capacity, providing consistent hydration while keeping roots cool. These volcanic-origin clay soils produce the Valley\'s most full-bodied, intensely flavored Pinot Noirs with firm tannins, dark fruit characteristics, and exceptional aging potential.',
      image: 'clay.jpg'
    },
    silt: {
      title: 'Silt',
      size: '0.002-0.05 mm',
      drainage: 'Moderate',
      waterHolding: 'Good',
      nutrients: 'Moderate-High',
      compaction: 'Moderate',
      workability: 'Moderate',
      description: 'The Willamette Valley\'s famous silty soils (like Willakenzie and Loess) hold water tightly in their fine particles, which causes vines work harder to access moisture despite good retention capacity. This controlled stress creates wines with distinctive earthiness, white pepper notes, and softer, rounder profiles with vibrant acidity, especially prominent in the region\'s windblown loess deposits.',
      image: 'silt.jpg'
    },
    loam: {
      title: 'Loam',
      size: 'Mixed Particles',
      drainage: 'Good',
      waterHolding: 'Good',
      nutrients: 'Balanced',
      compaction: 'Low',
      workability: 'Excellent',
      description: 'Loamy soils combine sand\'s drainage, clay\'s nutrient retention, and silt\'s water-holding capacity, creating the ideal balance for consistent vine growth without excessive stress. Throughout the Willamette Valley, these well-balanced soils produce complex, terroir-driven wines that showcase both fruit purity and structural elegance, making them particularly versatile for multiple grape varieties.',
      image: 'loam.jpg'
    }
  };

  return (
    <div className="soil-texture-component">
      <div className="soil-texture-container">
        {/* Section Title */}
        <div className="soil-texture-header">
          <h2 className="soil-texture-title">Soil Texture</h2>
        </div>

        {/* Top Description Container */}
        <div className="soil-texture-intro-container">
          <div className="soil-texture-description">
            <p>
                Soil texture describes the relative proportions of sand, silt, and clay particles in a soil, which determines how water, air, and nutrients move through it. 
                When you see a soil name like "silty clay loam," the last word (loam) indicates the primary texture class, while any preceding words (silty clay) describe 
                modifiers that show which particles are more prominent. In the case of “silty clay loam”, it is a loam soil with higher amounts of silt and clay. The soil 
                texture triangle you see to the right visually represents these classifications, with each point in the triangle corresponding to a specific combination of 
                sand, silt, and clay percentages that define distinct soil types. Sandy soils drain quickly and warm up faster in spring, while clay-rich soils hold more 
                water and nutrients but can become waterlogged; loamy soils offer a balance that many consider ideal for agriculture. For wine grapes, soil texture directly 
                influences vine vigor and grape quality, where sandy soils produce lighter, more aromatic wines due to good drainage and lower fertility, while clay-rich 
                soils typically yield fuller-bodied, more tannic wines as vines work harder to access water, which concentrates flavors in smaller berries.
            </p>
          </div>
          <div className="soil-texture-triangle">
            <img 
              src="/src/assets/images/soil_texture_triangle.png" 
              alt="Soil Texture Triangle showing the relationship between sand, silt, and clay particles"
              className="triangle-image"
            />
          </div>
        </div>

        {/* Soil Type Containers */}
        <div className="soil-types-grid">
          <div className="soil-type-container sand">
            <div className="soil-type-content">
              <div className="soil-type-info">
                <div className="soil-type-details">
                  <h4 className="soil-type-title">{soilData.sand.title}</h4>
                  <div className="soil-stats">
                    <div className="stat-row">
                      <span className="stat-label">Particle Size:</span>
                      <span className="stat-value">{soilData.sand.size}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Drainage:</span>
                      <span className="stat-value">{soilData.sand.drainage}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Water Holding:</span>
                      <span className="stat-value">{soilData.sand.waterHolding}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Nutrient Retention:</span>
                      <span className="stat-value">{soilData.sand.nutrients}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Compaction Risk:</span>
                      <span className="stat-value">{soilData.sand.compaction}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Workability:</span>
                      <span className="stat-value">{soilData.sand.workability}</span>
                    </div>
                  </div>
                </div>
                <div className="soil-type-image">
                  <img 
                    src={`/src/assets/images/${soilData.sand.image}`} 
                    alt={`${soilData.sand.title} soil texture`}
                    className="soil-image"
                  />
                </div>
              </div>
              <p className="soil-description">{soilData.sand.description}</p>
            </div>
          </div>

          <div className="soil-type-container silt">
            <div className="soil-type-content">
              <div className="soil-type-info">
                <div className="soil-type-details">
                  <h4 className="soil-type-title">{soilData.silt.title}</h4>
                  <div className="soil-stats">
                    <div className="stat-row">
                      <span className="stat-label">Particle Size:</span>
                      <span className="stat-value">{soilData.silt.size}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Drainage:</span>
                      <span className="stat-value">{soilData.silt.drainage}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Water Holding:</span>
                      <span className="stat-value">{soilData.silt.waterHolding}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Nutrient Retention:</span>
                      <span className="stat-value">{soilData.silt.nutrients}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Compaction Risk:</span>
                      <span className="stat-value">{soilData.silt.compaction}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Workability:</span>
                      <span className="stat-value">{soilData.silt.workability}</span>
                    </div>
                  </div>
                </div>
                <div className="soil-type-image">
                  <img 
                    src={`/src/assets/images/${soilData.silt.image}`} 
                    alt={`${soilData.silt.title} soil texture`}
                    className="soil-image"
                  />
                </div>
              </div>
              <p className="soil-description">{soilData.silt.description}</p>
            </div>
          </div>

          <div className="soil-type-container clay">
            <div className="soil-type-content">
              <div className="soil-type-info">
                <div className="soil-type-details">
                  <h4 className="soil-type-title">{soilData.clay.title}</h4>
                  <div className="soil-stats">
                    <div className="stat-row">
                      <span className="stat-label">Particle Size:</span>
                      <span className="stat-value">{soilData.clay.size}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Drainage:</span>
                      <span className="stat-value">{soilData.clay.drainage}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Water Holding:</span>
                      <span className="stat-value">{soilData.clay.waterHolding}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Nutrient Retention:</span>
                      <span className="stat-value">{soilData.clay.nutrients}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Compaction Risk:</span>
                      <span className="stat-value">{soilData.clay.compaction}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Workability:</span>
                      <span className="stat-value">{soilData.clay.workability}</span>
                    </div>
                  </div>
                </div>
                <div className="soil-type-image">
                  <img 
                    src={`/src/assets/images/${soilData.clay.image}`} 
                    alt={`${soilData.clay.title} soil texture`}
                    className="soil-image"
                  />
                </div>
              </div>
              <p className="soil-description">{soilData.clay.description}</p>
            </div>
          </div>

          <div className="soil-type-container loam">
            <div className="soil-type-content">
              <div className="soil-type-info">
                <div className="soil-type-details">
                  <h4 className="soil-type-title">{soilData.loam.title}</h4>
                  <div className="soil-stats">
                    <div className="stat-row">
                      <span className="stat-label">Particle Size:</span>
                      <span className="stat-value">{soilData.loam.size}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Drainage:</span>
                      <span className="stat-value">{soilData.loam.drainage}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Water Holding:</span>
                      <span className="stat-value">{soilData.loam.waterHolding}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Nutrient Retention:</span>
                      <span className="stat-value">{soilData.loam.nutrients}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Compaction Risk:</span>
                      <span className="stat-value">{soilData.loam.compaction}</span>
                    </div>
                    <div className="stat-row">
                      <span className="stat-label">Workability:</span>
                      <span className="stat-value">{soilData.loam.workability}</span>
                    </div>
                  </div>
                </div>
                <div className="soil-type-image">
                  <img 
                    src={`/src/assets/images/${soilData.loam.image}`} 
                    alt={`${soilData.loam.title} soil texture`}
                    className="soil-image"
                  />
                </div>
              </div>
              <p className="soil-description">{soilData.loam.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoilTexture;
