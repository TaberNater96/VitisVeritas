import React from 'react';
import './AlchemyPage.css';
import wineMakingImage from '../assets/images/wine_making.jpg';
import harvestImage from '../assets/images/harvest.jpg';
import sortingImage from '../assets/images/sorting.jpeg';
import crushingImage from '../assets/images/crushing.jpeg';
import macerationImage from '../assets/images/maceration.jpg';
import fermentationImage from '../assets/images/fermentation.jpg';
import pressingImage from '../assets/images/pressing.jpg';
import malolacticImage from '../assets/images/malolactic.jpg';
import agingImage from '../assets/images/aging.jpg';
import blendingImage from '../assets/images/blending.jpg';
import finingImage from '../assets/images/fining.jpg';
import filtrationImage from '../assets/images/filtration.JPG';
import bottlingImage from '../assets/images/bottling.jpg';
import rackingImage from '../assets/images/racking.jpg';

const AlchemyPage = () => {
  const wineProcessPhases = [
    {
      id: 'harvest',
      title: 'Phase 1: Harvest',
      description: 'The winemaking process begins in the vineyard with the crucial decision of when to harvest the grapes. This timing is everything - it determines the sugar levels, acidity, tannin structure, and flavor development of the wine. For red wines, grapes are typically harvested at higher brix levels (24-26°) for fuller body and deeper color extraction. White wine grapes are often picked earlier (20-24° brix) to preserve bright acidity and delicate aromatics. Winemakers carefully monitor brix levels, pH, and taste the grapes daily as harvest approaches. Hand-picking is preferred for premium wines as it allows selective harvesting and prevents premature crushing that could lead to oxidation in whites or unwanted extraction in reds.',
      image: harvestImage
    },
    {
      id: 'sorting',
      title: 'Phase 2: Sorting & Selection',
      description: 'Once harvested, grapes undergo careful sorting with different approaches for reds and whites. For red wines, whole cluster sorting removes damaged berries while preserving stems if desired for added tannin structure. White wine grapes require gentler handling to prevent skin contact that could lead to unwanted color extraction or bitter compounds. The sorting removes damaged, unripe, or diseased fruit, as well as leaves and debris. Premium white wine production often includes a second sorting after a gentle pressing to remove any remaining imperfections. Optical sorting machines can identify and remove imperfect grapes with incredible precision, though many premium producers still rely on hand sorting for the ultimate quality control.',
      image: sortingImage
    },
    {
      id: 'crushing',
      title: 'Phase 3: Crushing & Destemming / Whole-Cluster Pressing',
      description: 'This is where red and white wine production dramatically diverge. For red wines, grapes are crushed to release juice while being destemmed, though some winemakers include whole clusters for added complexity and tannin structure. The crushing must be gentle enough to avoid breaking seeds, which would release bitter compounds. For white wines, many producers skip crushing entirely, moving directly to whole-cluster pressing to minimize skin contact and preserve delicate aromatics. When white grapes are crushed, it happens immediately before pressing with minimal skin contact time. The fundamental difference is that red wines need skin contact for color and tannin extraction, while white wines generally avoid it to maintain their bright, clean character.',
      image: crushingImage
    },
    {
      id: 'maceration',
      title: 'Phase 4: Cold Maceration (Optional) / Skin Contact',
      description: 'Cold maceration is primarily a red wine technique, where crushed grapes are kept at low temperatures (50-60°F) for several days before fermentation begins. This allows gentle extraction of color, aromatics, and flavor compounds from the skins without aggressive alcohol-driven extraction. For white wines, skin contact is usually limited or avoided entirely, though some styles like orange wines or certain Chardonnays benefit from brief skin contact (4-24 hours) to extract additional texture and complexity. When used in white wine production, this phase is carefully monitored to prevent over-extraction of phenolic compounds that could make the wine bitter or overly tannic. The temperature control is crucial in both cases to prevent spontaneous fermentation.',
      image: macerationImage
    },
    {
      id: 'fermentation',
      title: 'Phase 5: Alcoholic Fermentation',
      description: 'Fermentation transforms grape sugars into alcohol, but the process differs significantly between red and white wines. Red wine fermentation occurs with the skins present, typically at warmer temperatures (75-85°F) to encourage color and tannin extraction. The fermenting red wine forms a "cap" of skins that must be regularly punched down or pumped over. White wine fermentation happens without skins at cooler temperatures (55-65°F) to preserve delicate aromatics and prevent harsh extraction. White wines often ferment in stainless steel for clean flavors, though premium Chardonnays may ferment in oak barrels for added complexity. Both processes can use wild yeasts for complexity or cultured yeasts for consistency, with fermentation lasting anywhere from one week to several months.',
      image: fermentationImage
    },
    {
      id: 'pressing',
      title: 'Phase 6: Pressing',
      description: 'Pressing occurs at different stages for red and white wines. For white wines, pressing happens immediately after crushing (or without crushing for whole-cluster pressing), using gentle pressure to extract clean juice while avoiding harsh compounds from skins and seeds. Multiple press fractions are often kept separate, with the first gentle pressings being the highest quality. For red wines, pressing occurs after fermentation is complete - the free-run wine is drained first, then the remaining pomace is pressed. Red wine pressing can use more pressure since color and tannins have already been extracted, but care is still taken to avoid overly harsh extraction. The press wine is often kept separate from free-run wine and may be blended back in controlled amounts.',
      image: pressingImage
    },
    {
      id: 'racking',
      title: 'Phase 7: Racking & Lees Management',
      description: 'After pressing (reds) or primary fermentation (whites), wines are racked off heavy solids (gross lees) to prevent off-aromas. Subsequent rackings during maturation clarify the wine, with selective lees retention (and batonnage in some whites) enhancing texture and complexity. This is performed as needed rather than just once (immediately post‑fermentation/press, then periodically during maturation).',
      image: rackingImage
    },
    {
      id: 'malolactic',
      title: 'Phase 8: Malolactic Fermentation',
      description: 'Malolactic fermentation (MLF) converts sharp malic acid into softer lactic acid, but its application varies greatly between wine styles. Most red wines undergo complete MLF, which adds complexity and creates a smoother, rounder mouthfeel essential to red wine character. For white wines, MLF is a stylistic choice: crisp whites like Sauvignon Blanc typically avoid it to maintain bright acidity, while richer whites like many Chardonnays embrace partial or complete MLF for creamy texture and buttery flavors. The process can occur naturally or be inoculated with specific bacteria, taking weeks to months to complete. Temperature control is crucial, as MLF bacteria are sensitive to extremes and can produce off-flavors if not properly managed.',
      image: malolacticImage
    },
    {
      id: 'aging',
      title: 'Phase 9: Aging & Maturation',
      description: 'Aging strategies differ significantly between red and white wines. Red wines typically age longer and often in oak to develop complexity, integrate tannins, and build structure. They may age in various oak formats (barrels, tanks, chips) or neutral vessels for 6 months to several years. White wines generally age for shorter periods, with styles ranging from crisp, early-release wines aged briefly in stainless steel to preserve fruit character, to complex Chardonnays aged in oak with lees stirring (batonnage) for richness and texture. The choice of aging vessel - stainless steel, concrete, new oak, used oak, or alternative formats - dramatically influences the final wine character. Micro-oxygenation during aging helps integrate flavors and soften harsh edges in both styles.',
      image: agingImage
    },
    {
      id: 'blending',
      title: 'Phase 10: Blending',
      description: 'Blending philosophy varies between red and white wine production. Red wines often benefit from complex blends combining different varietals (like Bordeaux blends), vineyard blocks, or barrel selections to achieve balance and complexity. The tannin structure in reds allows for more intricate blending without losing wine identity. White wine blending tends to be more subtle, often focusing on balancing acidity, texture, and aromatics from different lots or lightly blending varietals for complexity. Single-varietal whites may blend different vineyard blocks or fermentation vessels (tank vs. barrel fermented portions). Both styles benefit from the winemaker\'s artistry in creating a final wine that surpasses its individual components, with careful consideration of how each element contributes to the overall balance and character.',
      image: blendingImage
    },
    {
      id: 'fining',
      title: 'Phase 11: Fining & Stabilization',
      description: 'Fining and stabilization techniques are tailored to each wine type. Red wines commonly use protein-based fining agents like egg whites or specialized proteins to soften tannins and remove harsh compounds, while maintaining the wine\'s structure and color. White wines often require more delicate fining with bentonite clay to remove excess proteins that could cause haze, or with other agents to preserve their bright, clean appearance. Both styles undergo cold stabilization to prevent tartrate crystals, though whites are more susceptible to protein haze and require more careful temperature management. The goal is always to maintain the wine\'s intended character while ensuring stability during storage and transport. Some premium wines use minimal fining to preserve texture and complexity.',
      image: finingImage
    },
    {
      id: 'filtration',
      title: 'Phase 12: Filtration',
      description: 'Filtration approaches differ based on wine style and intended market. Red wines, with their more robust structure, can often handle coarser filtration or even remain unfiltered to preserve texture and complexity. When reds are filtered, it\'s typically to remove larger particles while maintaining body and mouthfeel. White wines generally require more extensive filtration to achieve the bright clarity consumers expect, ranging from coarse filtration to sterile filtration depending on the style. Crisp white wines like Pinot Grigio typically receive thorough filtration for pristine clarity, while premium Chardonnays might use minimal filtration to retain texture. The filtration level is a crucial stylistic decision balancing stability, appearance, and wine character - over-filtration can strip away desirable compounds that contribute to mouthfeel and complexity.',
      image: filtrationImage
    },
    {
      id: 'bottling',
      title: 'Phase 13: Bottling & Finishing',
      description: 'Bottling represents the culmination of distinct journeys for red and white wines. Red wines, having typically undergone longer aging, are often more stable at bottling but may benefit from additional bottle aging to further integrate their complex components. The bottling environment must prevent oxidation while maintaining the wine\'s developed character. White wines, especially those meant for early consumption, require careful handling to preserve their fresh, bright qualities. They\'re typically bottled with higher levels of protective sulfur dioxide and may require immediate temperature control. Both styles benefit from inert gas purging and precise filling to prevent oxidation. Post-bottling, reds often improve with time as their tannins soften and flavors meld, while most whites are designed to be enjoyed within a few years of bottling, though premium examples can age beautifully for decades.',
      image: bottlingImage
    }
  ];

  return (
    <div className="alchemy-page">
      <div className="alchemy-hero" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${wineMakingImage})`}}>
        <div className="alchemy-hero-content">
          <h1 className="alchemy-title">
            The Science of Willamette<br />
            Valley Winemaking
          </h1>
          <p className="alchemy-description">
            Ever wonder how Willamette Valley wines get that incredible character? It's not magic, it's a blend of science, craft, experience, and serious passion. It's the chemistry in the vineyard, the precision techniques in the cellar, and the people who pour their heart into every bottle. This page will walk through the phases <i>AFTER</i> the grapes have been harvested and are ready to be turned into wine.
          </p>
        </div>

        <div className="scroll-indicator">
          <div className="chevron-left">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="scroll-text">Curious about how Willamette Valley grapes get turned into liquid poetry? Keep scrolling...</p>
          <div className="chevron-right">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="phases-container">
        {wineProcessPhases.map((phase, index) => (
          <section key={phase.id} className={`phase-section ${index % 2 === 0 ? 'phase-left' : 'phase-right'}`}>
            <div className="phase-content">
              <div className="phase-text">
                <h2 className="phase-title">{phase.title}</h2>
                <p className="phase-description">{phase.description}</p>
              </div>
              <div className="phase-image">
                <img 
                  src={phase.image} 
                  alt={phase.title}
                  className="phase-img"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default AlchemyPage;
