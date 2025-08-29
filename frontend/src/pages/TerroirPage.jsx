import React, { useEffect, useState } from 'react';
import './TerroirPage.css';
import terroirImage from '../assets/images/terroir.jpg';
import columbiaRiverBasaltsImage from '../assets/images/columbia_river_basalts.png';
import pnMountainsImage from '../assets/images/pn_mountains.jpg';
import missoulaFloodsImage from '../assets/images/missoula_floods.jpg';
import subductionImage from '../assets/images/subduction_zone.jpg';

const TerroirPage = () => {
  const [sectionsInView, setSectionsInView] = useState(new Set());

  const terroirSections = [
    {
      id: 'geology',
      title: 'The Geological Foundation',
      colorTheme: 'geology',
      content: {
        introduction: 'The story of Willamette Valley wine begins not in the vineyard, but millions of years ago in the fiery depths of the Earth where ancient forces shaped the enviornment we know today. To understand why Pinot Noir thrives here while struggling elsewhere, or why certain hillsides produce more complex wines than others, we must first understand the powerful geological events that created this valley. The unique combination of volcanic activity, catastrophic floods, and tectonic forces has gifted the Willamette Valley with one of the most diverse and wine-friendly geological profiles in North America.',
        subsections: [
          {
            title: 'Ancient History',
            content: [
              'Between 17 and 12 million years ago, during the Miocene epoch, the Willamette Valley didn\'t exist as we know it today. Instead, this region was experiencing one of the most extensive volcanic episodes in Earth\'s history. The Columbia River Basalt Group eruptions, massive fissure eruptions where lava poured from cracks in the earth rather than traditional volcanoes, sent rivers of basalt flowing westward from eastern Oregon and Washington. These weren\'t ordinary volcanic events; single flows could cover thousands of square miles and reach depths of 400 feet.',
              'As these basalt flows cooled and solidified, they created the bedrock foundation that would later influence water drainage and root penetration in vineyards. Basalt, being relatively rich in iron and magnesium, would eventually weather into nutrient-rich soils. Around 15 million years ago, the Cascade Range began its dramatic rise due to subduction, the process where the oceanic Juan de Fuca Plate slides beneath the continental North American Plate. This mountain-building episode, called the Cascade orogeny, would prove vital for the valley\'s future wine industry by creating a rain shadow effect that protects the valley from excessive Pacific moisture.'
            ],
            image: {
              src: columbiaRiverBasaltsImage,
              alt: 'Columbia River basalt formations',
              position: 'right'
            }
          },
          {
            title: 'The Siletz River Volcanics',
            content: [
              'Beneath much of the valley lies an even older geological formation that many overlook but which plays a critical role in wine quality: the Siletz River Volcanics. These 50-60 million-year-old seafloor basalts were formed when the region was still part of the ocean floor. Through tectonic uplift, the gradual rising of the Earth\'s surface due to plate movement, these ancient ocean floor basalts were lifted above sea level and now form the basement rock beneath much of the valley.',
              'Where these Siletz River Volcanics have been uplifted and exposed, particularly in the Eola-Amity Hills, they create unique growing conditions. The marine origin of these rocks means they contain different mineral compositions than the younger Columbia River basalts, including higher levels of sodium and potassium. Vines growing in soils that came from these marine basalts often produce wines with a distinctive mineral character that sommeliers describe as "saline" or "oceanic."'
            ]
          },
          {
            title: 'The Valley',
            content: [
              'As the Cascades continued to rise, they created a structural depression, essentially a long, low area between mountain ranges, that would become the Willamette Valley. This wasn\'t a sudden event but a gradual process occurring over millions of years. The valley began filling with sediments eroded from the surrounding mountains, creating layers of different materials that would later become distinct soil types.',
              'Around 15,000 to 13,000 years ago, the valley\'s geology took a dramatic turn with the Missoula Floods, one of the largest flood events in Earth\'s history. An ice dam holding back Glacial Lake Missoula in Montana repeatedly failed, sending walls of water up to 400 feet high racing across eastern Washington and down the Columbia River Gorge. When these floods reached the Willamette Valley, they backed up, creating a temporary lake that covered the valley floor up to an elevation of about 400 feet.'
            ],
            image: {
              src: pnMountainsImage,
              alt: 'Pacific Northwest mountain ranges',
              position: 'left'
            }
          },
          {
            title: 'The Great Missoula Floods: A Winemaker\'s Gift',
            content: [
              'The Missoula Floods deposited what geologists call the Willamette Silt, a layer of fine-grained sediment that can reach depths of 100 feet in some areas. This wasn\'t a single event but a series of 40 or more floods, each leaving its own layer of sediment. The floods sorted materials by size: heavier gravels and sands settled first near the valley margins, while the finest silts settled in the valley center as the temporary lake slowly drained.',
              'This flood-deposited silt created the valley floor soils that are generally too fertile and poorly drained for premium wine grape production, which is why you\'ll find most of the valley\'s best vineyards not on the valley floor, but on the hillsides above the flood line. The 400-foot elevation mark left by these floods is often called the "Pinot line" by local vintners, as vineyards planted above this elevation typically produce superior Pinot Noir.'
            ],
            image: {
              src: missoulaFloodsImage,
              alt: 'Missoula Floods impact on Willamette Valley',
              position: 'right'
            }
          },
          {
            title: 'The Formation of Wine-Critical Soils',
            content: [
              'The interplay between volcanic bedrock, flood deposits, and weathering has created the Willamette Valley\'s distinctive soil series. The most famous is the Jory series, formed from weathered Columbia River basalt on hillsides above the flood deposits. Jory soils are characterized by their deep red color from iron oxides, their clay-rich texture that provides good water retention during dry summers, and their slightly acidic pH that Pinot Noir particularly favors.',
              'The weathering process that creates Jory soil is called laterization, intense chemical weathering in warm, wet conditions that leaches out silica and other minerals while concentrating iron and aluminum oxides. This process, occurring over hundreds of thousands of years, creates soils that are well-drained yet moisture-retentive, perfectly balanced for viticulture. The clay particles in Jory soil are predominantly kaolinite and gibbsite, which have excellent cation exchange capacity, the ability to hold and gradually release nutrients to vine roots.',
              'The Willakenzie series formed from uplifted marine sedimentary rocks of the Spencer and Yamhill formations. These 20-40 million-year-old marine sandstones and siltstones create soils with different characteristics than volcanic-derived soils. Willakenzie soils are typically shallower, forcing vines to struggle more and produce smaller berries with more concentrated flavors. They drain exceptionally well and warm up faster in spring, allowing for earlier bud break and potentially longer growing seasons.'
            ]
          },
          {
            title: 'Geological Diversity and Wine Complexity',
            content: [
              'The Willamette Valley\'s geological complexity creates numerous distinct growing environments within a relatively small area. The Dundee Hills, formed from Columbia River basalt flows, offer deep Jory soils perfect for elegant, age-worthy Pinot Noirs. The Ribbon Ridge AVA sits on marine sedimentary soils that produce wines with distinctive spice and earth notes. The Eola-Amity Hills, with their mix of volcanic and marine sediments plus exposure to cooling Pacific winds through the Van Duzer Corridor, a gap in the Coast Range, create wines with bright acidity and complex mineral notes.',
              'Even within single vineyards, geological variations create complexity. Fault lines, fractures in the Earth\'s crust where movement has occurred, run through the valley, juxtaposing different rock types and creating abrupt changes in soil depth and composition. These geological boundaries often coincide with changes in wine character, leading innovative winemakers to harvest and ferment different geological zones separately.',
              'Understanding this geological foundation helps explain why Willamette Valley wines express such diversity and complexity. The ancient seafloor provides mineral depth, volcanic soils contribute structure and ageability, flood deposits define where not to plant, and ongoing geological processes ensure that the terroir remains dynamic rather than static. When you taste that hint of wet stone in a Ribbon Ridge Pinot Noir or notice the iron-rich earthiness in a Dundee Hills bottling, you\'re tasting millions of years of geological history, a story written in stone, translated through roots and vines, and captured in every glass. This is all the result of a living geologic region, from an active subduction zone to basaltic lava flows, there is much more than meets the eye below our feet.'
            ],
            image: {
              src: subductionImage,
              alt: 'Tectonic subduction and geological complexity',
              position: 'left'
            }
          }
        ]
      }
    },
    {
      id: 'climate',
      title: 'Climate & Meteorology',
      colorTheme: 'climate',
      content: {
        introduction: 'The Willamette Valley\'s climate is a delicate dance between marine influence and continental patterns, creating growing conditions that allow grapes to ripen slowly while retaining crucial acidity and aromatic complexity.',
        paragraphs: [
          'The valley\'s climate is defined by its position between the Pacific Ocean and the Cascade Range. Marine air flows through the Van Duzer Corridor and other gaps in the Coast Range, moderating temperatures and bringing cooling fog during crucial ripening periods. This marine influence is strongest in the northern valley and diminishes as you move south, creating distinct microclimates within individual AVAs.',
          'Diurnal temperature variation - the difference between day and night temperatures - is critical for wine quality. Summer days may reach 85-90°F, while nights commonly drop to 45-55°F. This dramatic swing allows grapes to ripen during warm days while preserving acidity and aromatic compounds during cool nights. The growing season averages 190-220 frost-free days, with harvest typically occurring from late August through October.',
          'Rainfall patterns strongly influence vineyard management decisions. The valley receives 40-60 inches of annual precipitation, with 90% falling between October and April. This wet winter/dry summer pattern means established vines rarely need irrigation, but young plantings may require supplemental water. The timing of fall rains can make or break a vintage, as harvest-time precipitation can dilute flavors and encourage rot pressure.'
        ],
        images: [
          {
            placeholder: 'Weather station data visualization showing diurnal temperature patterns throughout growing season',
            position: 'after-paragraph-2'
          },
          {
            placeholder: 'Comparative chart of Willamette Valley climate vs. Burgundy, Piedmont, and other cool-climate regions',
            position: 'after-paragraph-3'
          }
        ]
      }
    },
    {
      id: 'soils',
      title: 'Soil Science',
      colorTheme: 'soils',
      content: {
        introduction: 'Soil is where the magic of terroir begins. The Willamette Valley\'s diverse soil types, formed by volcanic activity and flood deposits, create distinct growing environments that profoundly influence grape development and wine character.',
        paragraphs: [
          'Jory soils, the valley\'s most famous soil type, formed from weathered Missoula Flood deposits over ancient basalt bedrock. These well-drained, reddish-brown soils are found on hilltops and upper slopes, particularly in the Dundee Hills. Rich in iron oxide and volcanic minerals, Jory soils typically produce more structured, powerful wines with excellent aging potential. The soil\'s excellent drainage forces vines to develop deep root systems, accessing diverse mineral layers.',
          'Willakenzie soils derive from marine sedimentary rocks uplifted during the formation of the Coast Range. Found primarily on slopes and hillsides, these clay-rich soils have excellent water retention but can be challenging to work. Willakenzie soils often produce more elegant, aromatic wines with distinctive floral notes. The higher clay content creates natural water stress during dry periods, concentrating flavors in the grapes.',
          'Woodburn and Nekia soils occupy different elevation zones and offer their own contributions to wine character. Woodburn soils in valley floors provide consistent moisture and nutrients, while Nekia soils on volcanic ridges offer exceptional drainage and mineral complexity. Understanding these soil differences helps winemakers select appropriate sites for different grape varieties and wine styles, with Pinot Noir showing remarkable sensitivity to these subtle soil variations.'
        ],
        images: [
          {
            placeholder: 'Soil profile cross-sections showing Jory, Willakenzie, and Woodburn soil horizons',
            position: 'after-paragraph-1'
          },
          {
            placeholder: 'Interactive soil map of Willamette Valley showing distribution of major soil types',
            position: 'after-paragraph-2'
          },
          {
            placeholder: 'Mineral composition charts comparing major Willamette Valley soil types',
            position: 'after-paragraph-3'
          }
        ]
      }
    },
    {
      id: 'topography',
      title: 'Topography & Microclimates',
      colorTheme: 'topography',
      content: {
        introduction: 'The rolling hills and varied elevations of the Willamette Valley create countless microclimates, each with its own personality. Understanding how topography influences growing conditions is essential to appreciating the diversity of Oregon wines.',
        paragraphs: [
          'Elevation plays a crucial role in site selection, with most premium vineyards planted between 200-800 feet above sea level. Higher elevations experience cooler temperatures, longer growing seasons, and better air drainage - crucial for preventing frost damage and disease pressure. Sites above 800 feet risk insufficient heat accumulation, while those below 200 feet may face frost and humidity challenges. Each 100-foot elevation gain typically correlates to a 1-2°F temperature decrease.',
          'Slope aspect - the direction a hillside faces - dramatically affects grape growing conditions. South-facing slopes receive maximum sun exposure and warmth, ideal for varieties needing full ripeness. East-facing slopes capture gentle morning sun while avoiding afternoon heat stress. West-facing slopes benefit from afternoon sun but risk exposure to marine winds. North-facing slopes, while cooler, can produce exceptional wines in warm vintages when heat stress is a concern.',
          'The valley\'s complex topography creates numerous frost pockets and wind patterns that influence site-specific growing conditions. Cold air drainage allows hilltop vineyards to avoid damaging spring and fall frosts, while valley floor sites may experience temperature inversions. Wind patterns, particularly through gaps in the coastal hills, moderate temperatures but can also create desiccating conditions that stress vines if not properly managed.'
        ],
        images: [
          {
            placeholder: '3D topographic model of Willamette Valley showing elevation gradients and vineyard locations',
            position: 'after-paragraph-1'
          },
          {
            placeholder: 'Sun exposure diagrams showing seasonal solar angles on different slope aspects',
            position: 'after-paragraph-2'
          },
          {
            placeholder: 'Wind pattern visualization showing marine air flow through Coast Range gaps',
            position: 'after-paragraph-3'
          }
        ]
      }
    },
    {
      id: 'biology',
      title: 'Biology & Ecology',
      colorTheme: 'biology',
      content: {
        introduction: 'The Willamette Valley vineyard is a complex ecosystem where beneficial organisms and harmful threats exist in delicate balance. Understanding this biological interplay is crucial for sustainable grape growing and wine quality.',
        paragraphs: [
          'Soil biology forms the foundation of healthy vineyard ecosystems. Mycorrhizal fungi form symbiotic relationships with vine roots, extending their reach for nutrients and water while receiving carbohydrates in return. These fungal networks can span entire hillsides, connecting plants and facilitating communication through chemical signals. Beneficial bacteria in the rhizosphere help process nutrients and protect against harmful pathogens, while earthworms and other soil organisms improve soil structure and nutrient cycling.',
          'Cover crops and biodiversity management play crucial roles in vineyard health. Leguminous cover crops like crimson clover fix nitrogen naturally, reducing fertilizer needs. Flowering plants provide habitat for beneficial insects that control pest populations, while diverse plant communities improve soil health and prevent erosion. The timing of cover crop management affects competition with vines for water and nutrients, requiring careful coordination with vine growth cycles.',
          'Disease and pest management requires constant vigilance and integrated approaches. Powdery mildew, downy mildew, and botrytis threaten grape quality and must be managed through canopy management, fungicide applications, and cultural practices. Phylloxera, an aphid-like insect that devastated European vineyards in the 19th century, requires the use of resistant rootstocks. Other pests like birds, wasps, and various insects require monitoring and management strategies that balance effectiveness with environmental stewardship.'
        ],
        images: [
          {
            placeholder: 'Microscopic imagery showing mycorrhizal fungal networks around vine roots',
            position: 'after-paragraph-1'
          },
          {
            placeholder: 'Seasonal ecosystem diagram showing beneficial insects, cover crops, and soil organisms',
            position: 'after-paragraph-2'
          },
          {
            placeholder: 'Disease pressure calendar showing common vineyard threats throughout growing season',
            position: 'after-paragraph-3'
          }
        ]
      }
    },
    {
      id: 'hydrology',
      title: 'Water & Hydrology',
      colorTheme: 'hydrology',
      content: {
        introduction: 'Water is both blessing and challenge in the Willamette Valley. Understanding how water moves through the landscape and affects vine growth is essential for both vineyard management and wine quality.',
        paragraphs: [
          'The valley\'s Mediterranean-style climate creates distinct wet and dry seasons that profoundly influence vineyard management. Winter rains replenish soil moisture and groundwater, while summers are typically dry from July through September. This pattern naturally stresses vines during ripening, concentrating flavors and reducing disease pressure. However, young vines and those on shallow soils may require supplemental irrigation during extended dry periods.',
          'Drainage characteristics vary dramatically across soil types and topographic positions. Well-drained Jory soils on hilltops rarely experience waterlogging, while clay-rich Willakenzie soils may become saturated during wet periods, potentially causing root stress and delayed bud break. Valley floor sites with poor drainage may require tile drainage systems or raised planting to prevent root rot and other water-related problems.',
          'Water stress management is a critical factor in wine quality. Moderate water stress during veraison (color change) encourages the production of flavor compounds and reduces vegetative growth, allowing the vine to focus energy on fruit development. However, severe stress can halt ripening and create harsh tannins. Skilled growers monitor soil moisture and vine stress indicators to maintain optimal water balance throughout the growing season.'
        ],
        images: [
          {
            placeholder: 'Water cycle diagram showing precipitation patterns and soil water movement in vineyard settings',
            position: 'after-paragraph-1'
          },
          {
            placeholder: 'Vine root system illustration showing water uptake patterns in different soil types',
            position: 'after-paragraph-2'
          },
          {
            placeholder: 'Drought stress indicators chart showing visual and physiological signs in grape vines',
            position: 'after-paragraph-3'
          }
        ]
      }
    },
    {
      id: 'chemistry',
      title: 'The Chemistry Connection',
      colorTheme: 'chemistry',
      content: {
        introduction: 'The translation from soil minerals to wine flavor involves complex chemical processes that occur throughout the growing season. Understanding these chemical transformations helps explain why terroir truly matters in wine quality and character.',
        paragraphs: [
          'Soil pH dramatically affects nutrient availability and vine health. Most Willamette Valley soils range from pH 5.5 to 6.5, slightly acidic conditions that favor the availability of essential nutrients like iron, manganese, and phosphorus. Soils that are too acidic (below pH 5.0) can create aluminum toxicity, while alkaline soils (above pH 7.0) may limit iron availability, causing chlorosis. Soil pH also influences microbial activity and the breakdown of organic matter, affecting the release of nutrients throughout the growing season.',
          'The relationship between soil chemistry and wine chemistry is complex but measurable. Higher potassium levels in soil can lead to higher pH in wine grapes, affecting the wine\'s acidity and color stability. Calcium and magnesium influence cell wall structure in grapes, affecting juice extraction and tannin development. Iron and other trace minerals may contribute to wine complexity, though their direct impact on flavor is still being studied.',
          'Brix levels (sugar content) and acid development during ripening reflect the vine\'s response to its growing environment. Cool, well-drained sites typically maintain higher natural acidity while achieving adequate sugar ripeness. Hot sites may develop high sugar levels quickly but lose crucial acidity. The balance between sugar accumulation and acid retention - influenced by soil type, drainage, and microclimate - determines harvest timing and ultimate wine style.'
        ],
        images: [
          {
            placeholder: 'pH scale visualization showing optimal ranges for vine growth and nutrient availability',
            position: 'after-paragraph-1'
          },
          {
            placeholder: 'Molecular diagrams showing how soil minerals translate to wine compounds (simplified)',
            position: 'after-paragraph-2'
          },
          {
            placeholder: 'Ripening progression charts showing sugar/acid development in different terroir sites',
            position: 'after-paragraph-3'
          }
        ]
      }
    },
    {
      id: 'synthesis',
      title: 'Blending It All Together',
      colorTheme: 'synthesis',
      content: {
        introduction: 'Each glass of Willamette Valley wine represents the culmination of millions of years of geological history, thousands of years of climate patterns, and countless biological interactions. Understanding terroir means appreciating how all these elements blend together.',
        paragraphs: [
          'The concept of terroir transcends simple soil chemistry or climate data - it represents the complete integration of place, time, and human stewardship. A vineyard\'s terroir includes not just the physical environment but also the accumulated knowledge and decisions of the people who tend it. Traditional practices, innovative techniques, and philosophical approaches all become part of the terroir expression in the finished wine.',
          'When you taste a Willamette Valley Pinot Noir, you\'re experiencing the translation of place into flavor. The bright acidity might reflect cool morning fog rolling in from the Pacific. The subtle mineral notes could echo the ancient basalt bedrock beneath the vineyard. The wine\'s elegant structure might result from the measured water stress imposed by well-drained hillside soils. Each sip contains the story of its origin.',
          'Understanding terroir enhances wine appreciation by connecting the sensory experience to the science of place. Rather than simply noting flavor descriptors, you can understand why certain characteristics develop and what they reveal about growing conditions. This knowledge transforms wine tasting from simple pleasure into a deeper appreciation of the remarkable processes that transform soil, sun, and rain into liquid poetry. The next time you enjoy an Oregon wine, remember that you\'re tasting not just fermented grape juice, but a complete ecosystem captured in glass.'
        ],
        images: [
          {
            placeholder: 'Interactive flowchart showing terroir elements → grape development → wine characteristics',
            position: 'after-paragraph-1'
          },
          {
            placeholder: 'Comparative tasting chart showing how different terroir sites affect wine flavor profiles',
            position: 'after-paragraph-2'
          },
          {
            placeholder: 'Artistic representation of vineyard landscape with overlay of scientific elements',
            position: 'after-paragraph-3'
          }
        ]
      }
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.terroir-section');
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
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
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="terroir-page">
      {/* Hero Section */}
      <section 
        className="terroir-hero" 
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${terroirImage})`
        }}
      >
        <div className="terroir-hero-content">
          <h1 className="terroir-title">Where Earth Becomes Wine</h1>
          <p className="terroir-description">
            Discover how geology, meteorology, chemistry, biology, topography, physics, and most importantly art, 
            blend together to create the unique character of Willamette Valley wines. This page will walk through 
            the life cycle of grapes BEFORE they are harvested and explain how the environment they grow in shapes 
            their personality.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="chevron-left">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="scroll-text">Let's understand this land from the ground up</p>
          <div className="chevron-right">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="terroir-main">
        {/* Sections Container */}
        <div className="terroir-sections">
          {terroirSections.map((section, index) => (
            <section
              key={section.id}
              id={`terroir-section-${index}`}
              className={`terroir-section ${section.colorTheme} ${sectionsInView.has(index) ? 'in-view' : ''}`}
            >
              <div className="section-content">
                <header className="section-header">
                  <h2 className="section-title">{section.title}</h2>
                </header>

                <div className="section-body">
                  {/* Introduction paragraph if it exists */}
                  {section.content.introduction && (
                    <p className="intro-paragraph">{section.content.introduction}</p>
                  )}
                  
                  {/* Render subsections for new format */}
                  {section.content.subsections && section.content.subsections.map((subsection, subIndex) => (
                    <div key={subIndex} className="subsection">
                      <h3 className="subsection-title">{subsection.title}</h3>
                      <div className="subsection-content">
                        <div className="text-with-image">
                          {subsection.image && (
                            <div className={`floating-image ${subsection.image.position}`}>
                              {subsection.image.src ? (
                                <img 
                                  src={subsection.image.src} 
                                  alt={subsection.image.alt}
                                  className="section-img"
                                />
                              ) : (
                                <div className="image-placeholder">
                                  <div className="placeholder-icon">🖼️</div>
                                  <p className="placeholder-text">{subsection.image.placeholder}</p>
                                </div>
                              )}
                            </div>
                          )}
                          {subsection.content.map((paragraph, pIndex) => (
                            <p key={pIndex} className="section-paragraph">{paragraph}</p>
                          ))}
                        </div>
                      </div>
                      <div className="clear"></div>
                    </div>
                  ))}
                  
                  {/* Legacy format for other sections */}
                  {section.content.paragraphs && section.content.paragraphs.map((paragraph, pIndex) => (
                    <div key={pIndex} className="paragraph-container">
                      <p className="section-paragraph">{paragraph}</p>
                      
                      {/* Insert images after specific paragraphs */}
                      {section.content.images
                        .filter(img => img.position === `after-paragraph-${pIndex + 1}`)
                        .map((image, imgIndex) => (
                          <div key={imgIndex} className="image-placeholder">
                            <div className="placeholder-icon">🖼️</div>
                            <p className="placeholder-text">{image.placeholder}</p>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TerroirPage;
