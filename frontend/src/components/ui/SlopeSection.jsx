import React, { useState } from 'react';
import './SlopeSection.css';

const SlopeSection = () => {
  const [selectedSlope, setSelectedSlope] = useState('0-3');

  // Calculate positions for the dashed line and labels based on angle
  const calculatePositions = (angle) => {
    const angleRad = (angle * Math.PI) / 180;
    const lineLength = 350; // Length of slope line
    const endX = lineLength * Math.cos(angleRad);
    const endY = lineLength * Math.sin(angleRad);
    
    // Calculate angle indicator line - like the HTML example
    const angleRadius = 30; // Fixed radius like the HTML example
    
    return {
      dashedLineLeft: 80 + endX,
      dashedLineHeight: endY,
      yLabelLeft: 80 + endX + 25, // Moved further right
      yLabelBottom: 80 + (endY / 2),
      angleLineHeight: angleRadius // Use fixed radius as height
    };
  };

  const slopeData = {
    '0-3': {
      label: '0-3% (Flat)',
      percentage: '0-3%',
      colorClass: 'green',
      visualData: {
        rise: '3 ft',
        run: '100 ft',
        angle: '1.7'
      },
      stats: {
        difficulty: 'Minimal',
        drainage: 'Poor to Moderate',
        erosion: 'Very Low',
        machinery: 'Excellent Access',
        vineStress: 'Low',
        soilRetention: 'Excellent'
      },
      description: 'Flat terrain in the Willamette Valley accumulates the deepest deposits of Willamette Silt from ancient Missoula floods, creating nutrient-rich soils that can exceed 30 feet in depth. These sites struggle with water movement during Oregon\'s wet winters, as clay-heavy soils common in the valley floor have slow percolation rates of less than 0.5 inches per hour. The lack of gravitational drainage forces roots to remain shallow, accessing primarily the nutrient-rich topsoil layers rather than exploring deeper mineral deposits. Cold air settles in these low-lying areas during spring frost events, creating temperature inversions that can damage emerging buds and reduce yields by up to 30% in vulnerable years.',
      wineImpact: 'Wines from flat sites typically display forward fruit characteristics with softer tannin structures due to consistent water availability throughout the growing season. The vigorous vine growth produces higher yields but can result in less concentrated flavors, requiring careful canopy management to achieve phenolic ripeness. These wines tend toward approachable, early-drinking styles with moderate complexity.'
    },
    '5': {
      label: '5% (Gentle)',
      percentage: '5%',
      colorClass: 'light-green',
      visualData: {
        rise: '5 ft',
        run: '100 ft',
        angle: '2.9'
      },
      stats: {
        difficulty: 'Easy',
        drainage: 'Good',
        erosion: 'Low',
        machinery: 'Excellent Access',
        vineStress: 'Low-Moderate',
        soilRetention: 'Very Good'
      },
      description: 'Gentle slopes provide optimal balance between drainage efficiency and soil retention in the Willamette Valley\'s marine sedimentary and volcanic soils. This inclination generates sufficient hydraulic gradient to move excess water through the soil profile at rates of 1-2 inches per hour, preventing root zone saturation while maintaining adequate moisture reserves. The 5% grade lifts vineyards above frost-prone valley floors by 20-30 feet over typical row lengths, positioning vines within the thermal inversion layer that provides crucial protection during spring freeze events. Solar radiation increases by approximately 3% compared to flat ground due to the perpendicular angle of sunlight interception on south-facing aspects.',
      wineImpact: 'Wines from gentle slopes exhibit enhanced aromatic complexity and structural balance compared to valley floor sites. The improved drainage moderates vine vigor, resulting in smaller berry sizes that increase skin-to-juice ratios by 15-20%, concentrating flavors and phenolic compounds. These sites produce wines with refined tannins and bright acidity that showcase both fruit purity and subtle mineral undertones characteristic of Willamette Valley terroir.'
    },
    '10': {
      label: '10% (Moderate)',
      percentage: '10%',
      colorClass: 'yellow',
      visualData: {
        rise: '10 ft',
        run: '100 ft',
        angle: '5.7'
      },
      stats: {
        difficulty: 'Moderate',
        drainage: 'Excellent',
        erosion: 'Moderate',
        machinery: 'Good Access',
        vineStress: 'Moderate',
        soilRetention: 'Good'
      },
      description: 'Moderate slopes create ideal conditions for premium viticulture in the Willamette Valley by inducing controlled vine stress through rapid drainage rates exceeding 2 inches per hour. Root systems penetrate 6-8 feet deep into Jory or Willakenzie soils, accessing distinct mineral layers formed from volcanic basalt or marine sediments that contribute unique flavor compounds. The 10% gradient accelerates cold air drainage at speeds of 2-3 feet per second, reducing frost risk by 40% compared to flat sites while avoiding excessive erosion that occurs on steeper grades. Diurnal temperature variations increase by 5-8°F due to enhanced air circulation, promoting anthocyanin development and acid retention during ripening.',
      wineImpact: 'Moderate slopes produce wines of exceptional complexity, with concentrated flavors showing 25-30% higher phenolic content than gentle slope wines. The combination of deep root exploration and optimal sun exposure creates layered aromatic profiles featuring both primary fruit characteristics and secondary mineral notes. Tannin polymerization improves due to gradual water stress, resulting in wines with firm yet silky textures that require 2-3 years of aging to fully express their potential. These sites consistently produce the Willamette Valley\'s most balanced and age-worthy Pinot Noirs.'
    },
    '15': {
      label: '15% (Noticeable)',
      percentage: '15%',
      colorClass: 'light-orange',
      visualData: {
        rise: '15 ft',
        run: '100 ft',
        angle: '8.5'
      },
      stats: {
        difficulty: 'Challenging',
        drainage: 'Excellent',
        erosion: 'Moderate-High',
        machinery: 'Limited Access',
        vineStress: 'Moderate-High',
        soilRetention: 'Moderate'
      },
      description: 'Noticeable slopes represent the threshold where gravitational forces begin to significantly impact both vine physiology and vineyard management in the Willamette Valley. Soil erosion rates increase to 3-5 tons per acre annually, requiring cover crop establishment and contour planting to preserve the shallow 3-4 foot topsoil layer overlaying bedrock. Water availability becomes limiting by mid-summer as drainage rates exceed 3 inches per hour, triggering early veraison and accelerating phenolic development by 10-14 days compared to gentle slopes. The 15% grade increases solar radiation receipt by 8-10% on south-facing aspects, elevating cluster zone temperatures by 3-5°F during critical ripening periods.',
      wineImpact: 'Wines from noticeable slopes display intense concentration with total extractable phenolics reaching 40% higher levels than moderate slope wines. Berry weights decrease by 20-25%, creating powerful wines with dense tannic structures that require extended maceration periods to achieve balance. The combination of water stress and increased UV exposure enhances anthocyanin stability, producing deeply colored wines with complex aromatic profiles dominated by dark fruit, earth, and spice notes.'
    },
    '25': {
      label: '25% (Steep)',
      percentage: '25%',
      colorClass: 'orange',
      visualData: {
        rise: '25 ft',
        run: '100 ft',
        angle: '14.0'
      },
      stats: {
        difficulty: 'Very Challenging',
        drainage: 'Rapid',
        erosion: 'High',
        machinery: 'Hand Work Only',
        vineStress: 'High',
        soilRetention: 'Fair'
      },
      description: 'Steep slopes push vines to their physiological limits in the Willamette Valley, with water deficits triggering stomatal closure during afternoon periods and reducing photosynthesis rates by 30-40%. Root systems extend 10-12 feet deep, often reaching fractured bedrock where they access trace minerals and underground water sources that sustain vines through drought periods. Erosion rates can exceed 10 tons per acre annually without intensive management, necessitating terracing or permanent cover crops that compete for already scarce water resources. The extreme angle increases direct and reflected solar radiation by 15-20%, accelerating sugar accumulation while preserving acidity through cool nighttime temperatures maintained by superior air drainage.',
      wineImpact: 'Steep slope wines represent the pinnacle of concentration and complexity in the Willamette Valley, with yields reduced to 1.5-2 tons per acre producing extraordinarily intense flavors. The severe water stress increases skin thickness by 30%, contributing massive tannic structures that require 5-7 years of bottle aging to integrate properly. These wines exhibit excellent mineral expression and tertiary complexity, developing notes of forest floor, truffle, and dried herbs alongside preserved primary fruit. The combination of low yields and labor-intensive farming makes these among Oregon\'s most expensive and sought-after wines.'
    },
    '35': {
      label: '35% (Very Steep)',
      percentage: '35%',
      colorClass: 'light-red',
      visualData: {
        rise: '35 ft',
        run: '100 ft',
        angle: '19.3'
      },
      stats: {
        difficulty: 'Extreme',
        drainage: 'Very Rapid',
        erosion: 'Very High',
        machinery: 'Nearly Impossible',
        vineStress: 'Very High',
        soilRetention: 'Poor'
      },
      description: 'Very steep slopes create extreme growing conditions where only the most adapted vines survive in the Willamette Valley\'s challenging climate. Soil depths rarely exceed 18 inches before hitting bedrock, forcing roots to follow fractures and fissures up to 15 feet deep in search of moisture and nutrients. Water stress becomes severe by mid-season, with leaf water potentials (how water-stressed a grapevine is) dropping below -14 bars (severe), which triggers partial leaf senescence (final developmental stage of a leaf) and reducing canopy photosynthesis by 50%. The 35% grade creates a microclimate with temperature differentials of 15-20°F between day and night, while UV radiation increases by 25% due to the near-perpendicular angle of solar interception.',
      wineImpact: 'Wines from very steep slopes achieve extraordinary concentration with sugar-free extract levels exceeding 35 grams per liter, which creates viscous textures and incredibly long finishes. Yields drop to less than one ton per acre, with individual berries weighing 0.6-0.8 grams and containing phenolic concentrations double that of moderate slope fruit. These wines require extended aging periods of 7-10 years to soften their imposing tannic structures, this reveals layers of complexity impossible to achieve on gentler terrain. The extreme terroir expression produces wines with distinctive volcanic or marine minerality that defines the absolute limits of Willamette Valley viticulture.'
    },
    '45': {
      label: '45% (Extreme)',
      percentage: '45%',
      colorClass: 'red',
      visualData: {
        rise: '45 ft',
        run: '100 ft',
        angle: '24.2'
      },
      stats: {
        difficulty: 'Nearly Impossible',
        drainage: 'Instantaneous',
        erosion: 'Severe',
        machinery: 'Absolutely Impossible',
        vineStress: 'Extreme',
        soilRetention: 'Very Poor'
      },
      description: 'Extreme slopes represent the absolute limit of viticultural possibility in the Willamette Valley, where slopes approach the angle of repose (the steepest angle soil can pile up at before it starts sliding down on its) for loose soil materials at 45%. Vines exist in near-constant water deficit with predawn leaf water potentials never recovering above -8 bars, inducing metabolic changes that fundamentally alter grape composition through enhanced production of stress-response compounds. Soil loss without terracing would exceed 50 tons per acre annually, which absolutely requires retention walls and manual transportation of replacement soil. The extreme angle creates a unique radiation environment with up to 30% more UV-B exposure than moderate slopes, which triggers protective phenolic synthesis pathways rarely activated in normal vineyard conditions.',
      wineImpact: 'Extreme slope wines transcend conventional wine categories, producing allocation-only bottles that command prices exceeding $200 due to yields below 0.5 tons per acre and dangerous hand-harvesting conditions. The extreme stress induces special metabolic pathways that create unique flavor compounds not found in wines from lesser slopes, including rare anthocyanin polymers that contribute blue-black colors stable for decades. These wines require minimum 10-year cellaring before the massive phenolic load begins to polymerize (small wine molecules link together, making smoother flavors) and soften, eventually revealing aromatic complexity with notes ranging from graphite and crushed volcanic rock to dried violets and aged balsamic. Each bottle represents an impressive viticultural achievement that pushes both vine and winemaker to their absolute limits.'
    }
  };

  const current = slopeData[selectedSlope];
  const positions = calculatePositions(parseFloat(current.visualData.angle));

  return (
    <div className="slope-component">
      <div className="slope-container">
        <div className="slope-selector">
          <button
            className={`slope-button ${selectedSlope === '0-3' ? 'active' : ''} ${slopeData['0-3'].colorClass}`}
            onClick={() => setSelectedSlope('0-3')}
          >
            {slopeData['0-3'].label}
          </button>
          <button
            className={`slope-button ${selectedSlope === '5' ? 'active' : ''} ${slopeData['5'].colorClass}`}
            onClick={() => setSelectedSlope('5')}
          >
            {slopeData['5'].label}
          </button>
          <button
            className={`slope-button ${selectedSlope === '10' ? 'active' : ''} ${slopeData['10'].colorClass}`}
            onClick={() => setSelectedSlope('10')}
          >
            {slopeData['10'].label}
          </button>
          <button
            className={`slope-button ${selectedSlope === '15' ? 'active' : ''} ${slopeData['15'].colorClass}`}
            onClick={() => setSelectedSlope('15')}
          >
            {slopeData['15'].label}
          </button>
          <button
            className={`slope-button ${selectedSlope === '25' ? 'active' : ''} ${slopeData['25'].colorClass}`}
            onClick={() => setSelectedSlope('25')}
          >
            {slopeData['25'].label}
          </button>
          <button
            className={`slope-button ${selectedSlope === '35' ? 'active' : ''} ${slopeData['35'].colorClass}`}
            onClick={() => setSelectedSlope('35')}
          >
            {slopeData['35'].label}
          </button>
          <button
            className={`slope-button ${selectedSlope === '45' ? 'active' : ''} ${slopeData['45'].colorClass}`}
            onClick={() => setSelectedSlope('45')}
          >
            {slopeData['45'].label}
          </button>
        </div>

        <div className="slope-content">
          <div className="slope-visual-container">
            <div className="slope-visual">
              <div className="slope-title-display">
                <span className={`slope-percentage ${current.colorClass}`}>{current.percentage}</span>
                <span className="slope-label">{current.label.split('(')[1]?.replace(')', '') || 'Slope'}</span>
              </div>
              
              <div className="slope-diagram">
                {/* X and Y axes */}
                <div className="axis x-axis"></div>
                <div className="axis y-axis"></div>
                
                {/* Slope line */}
                <div className="slope-line" style={{'--slope-angle': current.visualData.angle}}></div>
                
                {/* Dashed vertical line from slope end to x-axis */}
                <div 
                  className={`dashed-line ${current.colorClass}`}
                  style={{
                    left: `${positions.dashedLineLeft}px`,
                    height: `${positions.dashedLineHeight}px`
                  }}
                ></div>
                
                {/* Labels */}
                <div className="x-label">Run (100ft)</div>
                <div className="y-label-axis">Rise</div>
                <div 
                  className={`y-label ${current.colorClass}`}
                  style={{
                    left: `${positions.yLabelLeft}px`,
                    bottom: `${positions.yLabelBottom}px`
                  }}
                >
                  {current.visualData.rise}
                </div>
              </div>
            </div>
          </div>

          <div className="slope-stats-container">
            <div className="slope-stats">
              <h3>Site Characteristics</h3>
              <div className="stat-grid">
                <div className={`stat-item ${current.colorClass}`}>
                  <span className="stat-label">Vineyard Access:</span>
                  <span className="stat-value">{current.stats.difficulty}</span>
                </div>
                <div className={`stat-item ${current.colorClass}`}>
                  <span className="stat-label">Water Drainage:</span>
                  <span className="stat-value">{current.stats.drainage}</span>
                </div>
                <div className={`stat-item ${current.colorClass}`}>
                  <span className="stat-label">Erosion Risk:</span>
                  <span className="stat-value">{current.stats.erosion}</span>
                </div>
                <div className={`stat-item ${current.colorClass}`}>
                  <span className="stat-label">Equipment Use:</span>
                  <span className="stat-value">{current.stats.machinery}</span>
                </div>
                <div className={`stat-item ${current.colorClass}`}>
                  <span className="stat-label">Vine Stress:</span>
                  <span className="stat-value">{current.stats.vineStress}</span>
                </div>
                <div className={`stat-item ${current.colorClass}`}>
                  <span className="stat-label">Soil Retention:</span>
                  <span className="stat-value">{current.stats.soilRetention}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slope-description">
          <div className="description-content">
            <h3>Terroir Impact</h3>
            <p>{current.description}</p>
            
            <h4>Wine Character</h4>
            <p>{current.wineImpact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlopeSection;
