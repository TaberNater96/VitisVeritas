import React, { useEffect, useState } from 'react';
import './AlchemyPage.css';
import wineMakingImage from '../assets/images/wine_making.jpg';
import harvestImage from '../assets/images/harvest.jpg';
import corkingImage from '../assets/images/corking.jpg';
import grapeSortingImage from '../assets/images/grape_sorting.jpg';
import grapeHarvestImage from '../assets/images/grape_harvest.jpg';
import sortingImage from '../assets/images/sorting.jpeg';
import crushingImage from '../assets/images/crushing.jpg';
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
  const [sectionsInView, setSectionsInView] = useState(new Set());
  const [activeSection, setActiveSection] = useState(0);
  const [showSideNav, setShowSideNav] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionIndex) => {
    const section = document.querySelectorAll('.phase-section')[sectionIndex];
    const headerHeight = 80; // height of sticky header
    const offset = 20; // additional offset for better positioning
    
    if (section) {
      const sectionTop = section.offsetTop - headerHeight - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  const wineProcessPhases = [
    {
      id: 'harvest',
      title: 'Phase 1: Harvest',
      description: `Harvest in the Willamette Valley is unlike anywhere else, stretching from late August through October, much longer than in warmer regions. This extended season happens because the cool climate allows grapes to ripen slowly, developing complex flavors that simply can't be rushed. While California winemakers often focus primarily on sugar levels (measured in Brix), Oregon winemakers obsess over something more nuanced: achieving perfect phenolic ripeness while keeping that bright, natural acidity that makes these wines so food-friendly and age-worthy. Most grapes are still picked by hand here, with crews starting work in the cool morning hours to keep the fruit fresh and prevent unwanted oxidation. The varied microclimates mean that grapes from Dundee Hills might be ready weeks before those in the Van Duzer Corridor, requiring winemakers to constantly taste and test, looking for that perfect balance of pH (ideally between 3.4 and 3.7 for reds), acidity, and most importantly, the development of flavors in both the skins and seeds.
      
      Weather plays a huge role in harvest decisions here, the threat of autumn rain creates a strategic chess game for winemakers. Beyond just checking sugar and acid levels, they're evaluating how the tannins are developing and whether the color compounds (anthocyanins) have reached their peak. This is especially crucial for Pinot Noir, where picking too early results in harsh, green-tasting tannins that no amount of aging can fix. The harvest itself involves small picking bins to prevent the weight of grapes from crushing those on the bottom, careful sorting right in the field to remove damaged fruit, and increasingly, refrigerated trucks that keep grapes cool during their journey to the winery. Winemakers also make critical decisions about whole cluster fermentation right in the vineyard - examining whether the stems have turned brown and woody (lignified) enough to add positive spice notes, or if they're still green and would contribute unwanted vegetal flavors.`,
      image: harvestImage,
      secondImage: grapeHarvestImage
    },
    {
      id: 'reception-sorting',
      title: 'Phase 2: Reception and Sorting',
      description: `When grapes arrive at the winery, they undergo an intensive quality check that shows just how seriously Willamette Valley producers take their craft. The first priority is temperature - keeping grapes between 50 and 60 degrees Fahrenheit prevents fermentation from starting too early and preserves those delicate aromatic compounds that make Oregon wines distinctive. Sorting happens on specialized tables where trained workers remove anything that isn't a perfect grape - leaves, stems, damaged berries, even the occasional ladybug. This meticulous process typically takes one to two hours per ton of grapes, with sorters who know exactly what each vineyard lot needs based on the intended wine style.
      
      The sorting approach changes dramatically depending on what wine is being made. For Pinot Noir that will be fermented with whole clusters, entire bunches are examined to see if the stems are mature enough - brown and woody stems add spice and structure, while green stems would ruin the wine with bitter, vegetal notes. White grapes like Chardonnay and Pinot Gris get even more attention, as any damaged berries could release compounds that would make the wine bitter or cause it to brown. Some larger wineries now use optical sorting machines that can identify and remove imperfect berries with incredible precision. The science here is about preventing problems before they start - keeping out under-ripe fruit that contains pyrazines (compounds that taste like bell peppers) and damaged grapes whose enzymes would cause browning and off-flavors, especially in white wines.`,
      image: sortingImage,
      secondImage: grapeSortingImage
    },
    {
      id: 'crushing-pressing',
      title: 'Phase 3: Crushing and Pressing',
      description: `This phase shows the biggest differences between how different grape varieties are handled in the Willamette Valley. For premium Pinot Noir, many winemakers skip crushing entirely, keeping berries whole to allow a gentle, natural fermentation to begin inside the intact grapes. When crushing is used, it's incredibly gentle, just enough to break the skins without crushing seeds, which would release harsh tannins that have no place in elegant Oregon Pinot. Many producers include 15-30% whole clusters in their fermentations, where entire bunches go into tanks uncrushed, starting a process called carbonic maceration that creates complex spice notes and silky tannins. Experienced winemakers often taste the stems throughout ripening to assess their readiness, looking for brown, lignified stems that taste more like cinnamon than green pepper. The decision to use whole clusters depends heavily on the vintage, in cooler years, more grapes are destemmed to avoid those harsh, unripe stem tannins.
      
      White wine processing is completely different, designed to get juice with minimal extraction of tannins or color from the skins. Chardonnay and Pinot Gris go straight into pneumatic presses, essentially giant balloons that gently squeeze the grapes in cycles. The first juice that runs out (free-run) is the highest quality, while subsequent pressing cycles at increasing pressure extract more structured but less refined juice. Winemakers rarely press harder than 1.5 bar (about 22 pounds per square inch) to avoid crushing seeds and extracting bitter compounds. Rosé production takes one of two paths: either bleeding off pink juice from red wine tanks after just 2-8 hours of skin contact (called saignée), or pressing red grapes directly like a white wine. The color development is carefully monitored through lab analysis to achieve just the right shade of pink. The underlying science involves managing extraction, higher temperatures and longer contact times pull more compounds from the skins, so precise temperature control and timing are essential for achieving the desired wine style.`,
      image: crushingImage,
      secondImage: pressingImage
    },
    {
      id: 'fermentation',
      title: 'Phase 4: Fermentation',
      description: `Primary fermentation is where the magic happens - carefully selected yeast strains (Saccharomyces cerevisiae) convert grape sugars into alcohol while extracting all the flavors and aromas that define Oregon wine style. Red wines ferment at 75-85 degrees Fahrenheit in small, open-top vessels that allow winemakers to gently punch down the cap of grape skins that floats to the surface. This happens 2-3 times daily to extract color and tannins without overdoing it. These relatively cool fermentation temperatures - cooler than what's used in warmer climates - preserve the delicate aromatic compounds and elegant tannin structure that Oregon Pinot Noir is famous for. The whole process typically takes 12-16 days, with winemakers constantly monitoring sugar levels, temperature, and most importantly, tasting to determine when the wine has extracted just enough from the skins. The choice between wild yeast (naturally present on grapes) and commercial yeast strains reflects each winery's philosophy - many use a combination to balance reliable fermentation with the complexity that indigenous yeasts bring.
      
      White wine fermentation happens in a completely different environment - at just 50-60 degrees Fahrenheit to preserve those volatile aromatic compounds that would evaporate at higher temperatures. Premium Chardonnay often ferments right in French oak barrels, where the wood adds complexity while the slow, cool fermentation develops a creamy texture and beautifully integrated oak flavors. Nearly all Oregon red wines go through malolactic fermentation (MLF), where special bacteria (Oenococcus oeni) convert sharp malic acid into softer lactic acid - think of the difference between a green apple and cream. This can happen either at the same time as the primary fermentation or after it's complete. White wines might undergo MLF depending on the style the winemaker wants - it adds richness and sometimes a buttery character from a compound called diacetyl. Throughout fermentation, winemakers track pH changes (usually increasing by 0.1-0.3), acid levels (dropping by 1-3 grams per liter), and the development of various flavor compounds that contribute to the wine's final character.`,
      image: fermentationImage,
      secondImage: malolacticImage
    },
    {
      id: 'pressing-clarification',
      title: 'Phase 5: Pressing and Clarification',
      description: `After fermentation completes, it's time to separate the new wine from all the grape solids. Red wines go into pneumatic presses that work in graduated cycles - first the wine that flows out naturally (free-run), then light pressing at about 0.5-1.0 bar, and finally harder pressing up to 1.5-2.0 bar that extracts more tannic, structured wine. Oregon winemakers taste each fraction separately, making careful blending decisions based on what style they're after and what the vintage has given them. Free-run wine brings elegance and aromatics, while press wine adds structure and color intensity - finding the perfect blend is part art, part science. The entire pressing process typically takes 1-2 days per batch, using pumping systems designed to minimize oxygen exposure that could damage the wine's delicate character.
      
      Clarification uses both natural settling and modern technology to achieve crystal-clear wine while preserving quality. Red wines typically cold-settle for 24-48 hours at 50-55 degrees Fahrenheit, allowing dead yeast cells and grape particles (called gross lees) to fall to the bottom naturally. The clear wine is then carefully pumped off this sediment (racked) using specialized equipment that minimizes oxygen pickup. White wines need more intensive clarification because they contain proteins and phenolic compounds that can cause haziness later. After cold settling for 36-48 hours, they're often treated with bentonite clay, which binds to unstable proteins and removes them - this is especially important for Oregon whites because the region's high natural acidity makes proteins even more likely to cause problems. Some winemakers also use pectolytic enzymes to break down pectins (the same compounds that make jam gel), helping the wine clear more quickly and completely.`,
      image: rackingImage,
      secondImage: filtrationImage
    },
    {
      id: 'aging-maturation',
      title: 'Phase 6: Aging and Maturation',
      description: `The aging phase is the longest part of Oregon winemaking, typically lasting 9-22 months depending on the wine style and quality level. French oak dominates in the Willamette Valley, both because of Burgundian influence and because French oak's flavor profile perfectly complements Oregon's cool-climate fruit. Red wines age in 225-liter barrels, with premium Pinot Noir seeing 15-40% new oak and the rest in 1-3 year old barrels that provide subtle oak influence without overpowering the fruit. Choosing barrels is an art form, winemakers select specific cooperages (barrel makers), toast levels (how much the inside is charred), and even which French forests the oak comes from. Vosges and Allier forests are particularly prized for their tight grain and elegant tannins. Cellars are kept at a constant 55-60 degrees Fahrenheit to promote slow, steady development while preventing unwanted microbial activity or excessive evaporation.
      
      During aging, wines undergo remarkable chemical changes through controlled oxygen exposure, tannin evolution, and flavor integration. About 2-4% of the wine evaporates through the barrel staves each year (called the "angel's share"), providing just enough oxygen to help tannins link up with color compounds, creating stable colors and a softer mouthfeel. Winemakers regularly top up barrels to prevent too much air space (ullage) that would cause oxidation, and they monitor sulfur dioxide levels monthly, maintaining about 20 parts per million of free SO₂ to prevent spoilage without interfering with the wine's development. White wines might be aged "sur lie" (on the yeast lees) with periodic stirring (bâtonnage) to develop creamy texture and complex flavors as yeast cells break down and release compounds that enhance mouthfeel. The science involves understanding how compounds extract from oak over time, how oxygen drives chemical reactions that soften tannins, and how enzymatic processes slowly transform primary fruit flavors into the complex bouquet found in mature wines.`,
      image: agingImage,
      secondImage: blendingImage
    },
    {
      id: 'bottling',
      title: 'Phase 7: Bottling',
      description: `Bottling represents the culmination of the entire winemaking process, requiring precise technical execution to preserve wine quality and ensure it will age gracefully. Before bottling, winemakers make final blending decisions, combining different lots, barrel selections, and sometimes even different vintages to achieve their signature style and consistency. Extensive lab testing confirms the wine is stable, checking that proteins won't cause haziness, that tartrate crystals won't form in the bottle, and that no unwanted microbes are present. Filtration decisions vary widely based on winemaking philosophy. Some producers use coarse filtration through cellulose pads, others sterile-filter through 0.45-micron membranes, and many red wine producers use minimal or no filtration to preserve texture and complexity.
      
      The actual bottling process uses very specific equipment designed to protect wine from its biggest enemy: oxygen. Modern bottling lines blanket the wine with inert gases like nitrogen or carbon dioxide, use counter-pressure fillers that minimize turbulence, and include quality control stations that check fill levels, cork insertion, and capsule application. A final dose of sulfur dioxide (targeting 25-30 parts per million free SO₂) compensates for the small amount of oxygen that inevitably gets picked up during bottling. Natural cork remains the closure of choice for most premium Oregon wines, allowing 0.5-2.0 milligrams per liter of oxygen transmission annually, just enough to allow beneficial aging reactions. After bottling, Oregon Pinot Noir typically needs 2-5 years to show its best, during which time primary fruit flavors evolve into the complex tertiary aromas and flavors that showcase the region's potential for creating truly age-worthy wines.`,
      image: corkingImage,
      secondImage: bottlingImage
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.phase-section');
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const headerHeight = 80;

      // Check if we're past the hero section but before the footer to show side nav
      const heroSection = document.querySelector('.alchemy-hero');
      const footerSection = document.querySelector('footer');
      let shouldShowSideNav = false;
      
      if (heroSection && footerSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const footerTop = footerSection.offsetTop;
        const viewportBottom = scrollPosition + windowHeight;
        
        // Show nav if we're past hero but footer is not significantly visible
        // Hide nav when footer is more than 15% visible in viewport
        const footerVisibleHeight = Math.max(0, viewportBottom - footerTop);
        const footerVisibilityRatio = footerVisibleHeight / windowHeight;
        
        shouldShowSideNav = (scrollPosition > heroBottom - headerHeight) && (footerVisibilityRatio < 0.15);
      }
      
      setShowSideNav(shouldShowSideNav);

      // Track active section for navigation highlighting
      let currentActiveSection = 0;
      let minDistance = Infinity;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionCenter = sectionTop + (sectionHeight / 2);
        const viewportCenter = scrollPosition + (windowHeight / 2);
        const distance = Math.abs(sectionCenter - viewportCenter);

        // Update active section based on which section center is closest to viewport center
        if (distance < minDistance) {
          minDistance = distance;
          currentActiveSection = index;
        }
        
        // EXISTING ANIMATION LOGIC - DO NOT MODIFY
        // Check if section is in view (with some buffer)
        const isInView = scrollPosition + windowHeight > sectionTop + 200 && 
                        scrollPosition < sectionTop + sectionHeight - 200;
        
        if (isInView) {
          setSectionsInView(prev => new Set([...prev, index]));
        } else {
          setSectionsInView(prev => {
            const newSet = new Set(prev);
            newSet.delete(index);
            return newSet;
          });
        }
      });

      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="alchemy-page">
      <div className="alchemy-hero" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${wineMakingImage})`}}>
        <div className="alchemy-hero-content">
          <h1 className="alchemy-title">
            The Science of Willamette<br />
            Valley Winemaking
          </h1>
          <p className="alchemy-description">
            Ever wonder how Willamette Valley wines get that incredible character? It's not magic, it's a blend of science, craft, experience, and serious passion. From the complex chemistry in the vineyard, to the delicate techniques in the cellar, to the people who pour their heart into every bottle. This page will walk through the phases <i>AFTER</i> the grapes are done growing, and are ready to be turned into wine.
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

      {/* Side Navigation */}
      <nav className={`side-nav ${showSideNav ? 'visible' : ''}`}>
        <div className="side-nav-content">
          <h3 className="side-nav-title">Navigate Phases</h3>
          <ul className="side-nav-list">
            {wineProcessPhases.map((phase, index) => (
              <li key={phase.id} className="side-nav-item">
                <button
                  className={`side-nav-link ${activeSection === index ? 'active' : ''}`}
                  onClick={() => scrollToSection(index)}
                  aria-label={`Go to ${phase.title} section`}
                >
                  <span className="side-nav-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="side-nav-text">{phase.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="phases-container">
        {wineProcessPhases.map((phase, index) => {
          const paragraphs = phase.description.split(/\n\s*\n/).filter(p => p.trim());
          return (
            <section key={phase.id} className={`phase-section ${index % 2 === 0 ? 'phase-left' : 'phase-right'} ${sectionsInView.has(index) ? 'in-view' : ''}`}>
              <div className="phase-content">
                <h2 className="phase-title">{phase.title}</h2>
                
                <div className="paragraph-image-pair">
                  <div className="paragraph-container">
                    <p className="phase-description">
                      {paragraphs[0]}
                    </p>
                  </div>
                  <div className="image-container">
                    {phase.image ? (
                      <img src={phase.image} alt={`${phase.title} part 1`} className="wine-process-image" />
                    ) : (
                      <div className="image-placeholder">
                        <span className="placeholder-text">Image Coming Soon</span>
                        <i className="fas fa-image placeholder-icon"></i>
                      </div>
                    )}
                  </div>
                </div>

                {paragraphs[1] && (
                  <div className="paragraph-image-pair">
                    <div className="paragraph-container">
                      <p className="phase-description">
                        {paragraphs[1]}
                      </p>
                    </div>
                    <div className="image-container">
                      {phase.secondImage ? (
                        <img src={phase.secondImage} alt={`${phase.title} part 2`} className="wine-process-image" />
                      ) : (
                        <div className="image-placeholder">
                          <span className="placeholder-text">Image Coming Soon</span>
                          <i className="fas fa-image placeholder-icon"></i>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default AlchemyPage;
