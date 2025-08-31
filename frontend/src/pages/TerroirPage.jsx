import React, { useEffect, useState } from 'react';
import './TerroirPage.css';
import terroirImage from '../assets/images/terroir.jpg';
import columbiaRiverBasaltsImage from '../assets/images/columbia_river_basalts.png';
import pnMountainsImage from '../assets/images/pn_mountains.jpg';
import missoulaFloodsImage from '../assets/images/missoula_floods.jpg';
import subductionImage from '../assets/images/subduction_zone.jpg';
import pacificClimateImage from '../assets/images/pacific_climate.png';
import rainShadowImage from '../assets/images/rain_shadow.png';
import budBreakImage from '../assets/images/bud_break.jpg';
import cloudsImage from '../assets/images/clouds.jpg';
import soilTriangleImage from '../assets/images/soil_triangle.png';
import soilFoodWebImage from '../assets/images/soil_food_web.png';
import jorySoilImage from '../assets/images/jory_soil.png';
import sunVineyardImage from '../assets/images/sun_vineyard.jpg';
import vineyardSoilImage from '../assets/images/vineyard_soil.jpg';
import vineyardHillImage from '../assets/images/vineyard_hill.jpg';
import dualHillImage from '../assets/images/dual_hill.png';
import prevailingWindsImage from '../assets/images/prevailing_winds.png';
import wvTopoImage from '../assets/images/wv_topo.png';
import soilMicrobiomeImage from '../assets/images/soil_microbiome.png';
import fungiImage from '../assets/images/fungi.png';
import soilHealthImage from '../assets/images/soil_health.png';
import vineTrunkImage from '../assets/images/vine_trunk.jpg';
import metalsImage from '../assets/images/metals.jpg';
import phLevelsImage from '../assets/images/ph_levels.png';
import wineAcidImage from '../assets/images/wine_acid.jpg';
import vineWaterImage from '../assets/images/vine_water.jpg';
import wineSwirlImage from '../assets/images/wine_swirl.jpg';

const TerroirPage = () => {
  const [sectionsInView, setSectionsInView] = useState(new Set());
  const [modalImage, setModalImage] = useState(null);

  // Modal handlers
  const openImageModal = (imageSrc, imageAlt) => {
    setModalImage({ src: imageSrc, alt: imageAlt });
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setModalImage(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset';
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && modalImage) {
        closeImageModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalImage]);

  // Cleanup effect to restore body scroll on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
            title: 'Mineral Elements and Wine Flavor',
            content: [
              'The concept of tasting "minerality" in wine has been a topic of debate between scientists and wine professionals. From a strictly geochemical standpoint, minerals from soil don\'t directly flavor wine because they\'re present at concentrations far below what humans can taste. However, minerals do influence how vines produce flavor compounds. Iron helps activate enzymes that create aromatic molecules in grapes. Manganese affects how vines produce phenolic compounds that contribute to texture and flavor. Zinc plays a role in how yeast behaves during fermentation, which influences the production of esters (fruity aromas) and higher alcohols (various flavor compounds). So while nobody is actually tasting rocks in their wine, the minerals in soil do shape the final flavor profile through these indirect biochemical pathways.',
              'Sulfur compounds are major players in wine aroma, creating everything from the tropical fruit notes in Sauvignon Blanc to the sometimes controversial "reduced" or meaty notes in certain Syrahs. The amount of sulfur available in soil affects how vines build sulfur-containing amino acids like cysteine and methionine. During fermentation, yeast transforms these amino acids into various aromatic compounds that significantly impact the wine\'s smell and taste. This might explain why wines from volcanic soils, which are naturally rich in sulfur, often display distinctive "smoky" or "struck match" characteristics. The sulfur in these soils doesn\'t directly create these flavors, but it provides the raw materials that vines and yeast convert into these distinctive aromatic compounds.'
            ],
            image: {
              src: metalsImage,
              alt: 'Mineral elements in soil that influence wine flavor',
              position: 'right'
            }
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
        introduction: 'The Willamette Valley exists in a climatic sweet spot that winemakers call the "Goldilocks zone" for cool-climate viticulture. Not too hot, not too cold, not too wet during harvest, not too dry during the growing season. This delicate balance results from a complex interplay of oceanic influences, mountain barriers, and atmospheric patterns that create one of the world\'s premier regions for Pinot Noir and other cool-climate varieties. Understanding these meteorological forces reveals why certain vintages excel, why vineyard sites mere miles apart can ripen weeks differently, and how climate patterns directly translate into the flavors in your glass.',
        subsections: [
          {
            title: 'The Maritime Influence',
            content: [
              'The Pacific Ocean, just 60 miles west, acts like a giant thermostat for the valley. Ocean water stays fairly steady year-round, hovering between 48°F and 58°F off Oregon\'s coast. This stability keeps the valley\'s temperatures in check through ocean air that flows inland. In summer, when inland areas heat up, the temperature difference creates a natural vacuum effect that sucks cool ocean air through gaps in the coastal mountains, especially through the Van Duzer Corridor near Salem.',
              'This ocean influence shows up most in the dramatic temperature swings between day and night. During growing season, it might hit 85°F in the afternoon but drop to 50°F after dark, a 35-degree swing that\'s essential for great wine. The warm days let vines photosynthesize and build up sugar in the grapes, while cool nights preserve the grapes\' natural tartness and help create the complex aromatic compounds (esters and terpenes) that give wine its bouquet. Without these temperature swings, Willamette Valley wines would lose their signature bright, refreshing quality and complex aromas.'
            ],
            image: {
              src: pacificClimateImage,
              alt: 'Pacific Ocean climate influence on Willamette Valley',
              position: 'right'
            }
          },
          {
            title: 'The Rain Shadow Effect',
            content: [
              'The Coast Range, rising to heights of 3,000 to 4,000 feet, creates the first rain shadow that affects the valley. As moisture-laden air masses from the Pacific rise over these mountains, they cool and release much of their moisture on the western slopes through orographic precipitation, the process where air masses are forced upward by topography, causing them to cool and drop their moisture. By the time these air masses descend into the Willamette Valley, they\'ve lost much of their rainfall potential.',
              'The Cascade Range to the east creates an even more dramatic rain shadow. These mountains, reaching elevations over 10,000 feet, wring out most remaining moisture from eastward-moving weather systems. This double rain shadow effect means the Willamette Valley receives about 40 to 45 inches of rain annually, compared to over 100 inches on the Coast Range\'s western slopes and less than 20 inches east of the Cascades. Crucially, this rainfall follows a Mediterranean pattern, with most precipitation occurring from November through May and relatively dry conditions during the critical grape-ripening period of August through October.'
            ],
            image: {
              src: rainShadowImage,
              alt: 'Rain shadow effect from coastal and cascade mountains',
              position: 'left'
            }
          },
          {
            title: 'Growing Degree Days and Heat Accumulation',
            content: [
              'Viticulturists measure heat accumulation using Growing Degree Days (GDD), calculated by averaging daily high and low temperatures, subtracting 50°F (the baseline temperature for grape vine growth), and summing these values from April through October. The Willamette Valley typically accumulates between 2,200 and 2,700 GDD annually, placing it in Region I (coolest) or Region II on the Winkler Scale, a classification system for wine regions based on heat accumulation.',
              'This GDD range is nearly identical to Burgundy, France, explaining why Pinot Noir and Chardonnay, Burgundy\'s noble grapes, perform so exceptionally here. The gradual heat accumulation allows for extended hang time, the period grapes remain on the vine, which enables full phenolic ripeness, when tannins and flavor compounds mature, without excessive sugar accumulation that would lead to high-alcohol wines.'
            ]
          },
          {
            title: 'Seasonal Weather Patterns',
            content: [
              'Spring in the Willamette Valley brings critical challenges and opportunities. Bud break typically occurs in early April when temperatures consistently exceed 50°F. This timing is precarious; early bud break risks frost damage, while late bud break shortens the growing season. Spring frost events, where temperatures drop below 32°F after bud break, can devastate young shoots. Vineyards address this by using various frost mitigation strategies including wind machines that mix warmer air from above with cooler air at vine level, and careful site selection on slopes where cold air drains away.',
              'Summer establishes the vintage character. High pressure systems from the subtropical Pacific, called the Pacific High, typically develop in July and August, bringing stable, dry conditions. These systems create subsidence inversions, where descending air warms and acts as a cap, preventing cloud formation and precipitation. The average July temperature of 68°F allows steady, unhurried ripening. Heat spikes above 95°F, increasingly common with climate change, can shut down photosynthesis as vines close their stomata to conserve water, potentially disrupting ripening.'
            ],
            image: {
              src: budBreakImage,
              alt: 'Spring bud break in vineyard',
              position: 'right'
            }
          },
          {
            title: 'The Harvest Window Challenge',
            content: [
              'Fall weather becomes increasingly unstable as the jet stream, the river of fast-moving air in the upper atmosphere that steers weather systems, begins its seasonal southward migration. The timing of autumn rains versus grape ripeness often determines vintage quality. Early rains can dilute flavors and promote botrytis, a fungus that can be beneficial for certain sweet wines but detrimental for dry wines. Late-arriving rains allow for optimal ripeness but require nerve and careful monitoring from winemakers.',
              'The "October Question" looms large in the valley. Will grapes achieve full ripeness before autumn rains arrive? This climatic knife-edge creates vintage variation that many consider essential to wine\'s appeal. Years when warm, dry weather extends through October often produce the valley\'s most celebrated vintages, while early rains might necessitate earlier picking, capturing brighter acidity but potentially sacrificing some complexity.'
            ]
          },
          {
            title: 'Microclimates and Mesoclimates',
            content: [
              'Wine valleys are patchworks of smaller climate zones. "Mesoclimates" cover areas from a few dozen to hundreds of acres, while "microclimates" can be as small as single vineyard blocks, each with unique conditions. Even climbing 100 feet uphill can mean the difference between frost-damaged and healthy grapes. The land\'s angle matters too: south-facing slopes get about 20% more sunshine than flat ground (like lying on a beach versus sitting under an umbrella), making grapes ripen faster. North-facing slopes stay cooler, helping grapes keep their refreshing tartness.',
              'The Van Duzer Corridor shows how geography shapes wine perfectly. This gap in the coastal mountains funnels ocean air straight into the valley like a giant wind tunnel. Vineyards in this "wind river" run 5-10 degrees cooler in the afternoon than sites just miles away. The constant breeze acts like a natural fan, keeping grape bunches dry and preventing disease. Wines from these windswept areas taste distinctly different – they have brighter, more tart flavors, stronger aromas, and a lighter, silkier feel in your mouth rather than that heavy, drying sensation.'
            ]
          },
          {
            title: 'Wind Patterns and Atmospheric Dynamics',
            content: [
              'Wind plays a bigger role in growing grapes than most people realize. In wine valleys, mornings usually start calm and still, which lets fog collect in the low areas. As the day warms up, hot air rises from the valley floor and pulls cool ocean breezes inland through gaps in the mountains. These afternoon winds typically pick up around 3 PM, blowing at 10-15 mph, and help cool things down during the hottest part of the day.',
              'All this wind actually changes how grapes develop. When vines face steady breezes, they respond by building tougher, thicker grape skins – kind of like how regular exercise builds muscle. These thicker skins contain more of the compounds that give wine its color and that distinctive dry, puckering sensation (tannins). The wind also makes vines lose water faster through their leaves, which sounds bad but can actually be good in moderation. It pushes the roots to grow deeper searching for water, and slightly stressed vines often produce more flavorful grapes. But like anything, too much wind becomes harmful – it can break shoots, make it harder for leaves to do their job of converting sunlight to energy, and stress the vines beyond what\'s helpful.'
            ],
            image: {
              src: cloudsImage,
              alt: 'Cloud formations and atmospheric patterns over vineyard',
              position: 'left'
            }
          },
          {
            title: 'The Atmospheric Terroir Translation',
            content: [
              'Every little change in weather shows up in the wine\'s taste. Cool nights help grapes hold onto their natural tartness (malic acid), giving wines that bright, refreshing quality that pairs so well with food. When heat builds up slowly and steadily over the growing season, grapes develop more complex flavors while keeping alcohol levels moderate. Morning fog can be friend or foe, under the right conditions it creates the special "noble rot" needed for sweet dessert wines, but too much causes harmful gray mold that ruins whole bunches. Even changes in air pressure matter: when storms approach and pressure drops, it can trigger wild yeasts in the cellar to spontaneously start fermenting.',
              'The Willamette Valley\'s weather creates wines that stand apart from others worldwide. They have the elegance and layers of flavor you\'d expect from cool regions, plus the reliability that comes from dry harvest weather, and just enough year-to-year differences to keep things interesting. When you taste that bright cherry flavor in a Willamette Pinot Noir, you\'re literally tasting those cool nights. The refreshing zip comes from ocean breezes. Those smooth, silky tannins developed over the long, gentle growing season. In a very real sense, you\'re not just drinking wine, you\'re drinking the weather itself, all captured in a single bottle.'
            ]
          }
        ]
      }
    },
    {
      id: 'soils',
      title: 'Soil Science',
      colorTheme: 'soils',
      content: {
        introduction: 'Soil is far more than just dirt holding vines upright. It\'s a complex, living ecosystem where chemistry, physics, biology, and mineralogy converge to create wine\'s fundamental character. In the Willamette Valley, diverse soil types within a small geographic area produce dramatically different wine expressions, even from the same grape variety planted hillsides apart.',
        subsections: [
          {
            title: 'The Architecture of Wine Soils',
            content: [
              'Soil consists of four primary components: mineral particles (45%), organic matter (5%), water (25%), and air (25%). The mineral component, derived from weathered parent rock, provides the basic framework. In the Willamette Valley, this ranges from weathered volcanic basalt to marine sedimentary rocks to wind-blown loess, accumulated wind-deposited silt.',
              'Soil texture, determined by relative proportions of sand, silt, and clay particles, fundamentally affects vine growth. Clay particles, smaller than 0.002 millimeters, dominate many Willamette Valley soils. Their microscopic size creates enormous surface area for chemical reactions and nutrient storage. Clay soils hold water through adhesion forces, providing moisture during dry summers but potentially causing waterlogging in wet conditions. Sandy soils drain rapidly and warm quickly but require irrigation. Silt particles offer moderate water retention and good nutrient availability.'
            ],
            image: {
              src: soilTriangleImage,
              alt: 'Soil texture triangle showing sand, silt, and clay proportions',
              position: 'right'
            }
          },
          {
            title: 'The Jory Soil Profile: Willamette Valley\'s Signature',
            content: [
              'Oregon\'s official state soil, Jory, demonstrates how rocks, weather, and time work together to create distinctive growing conditions for wine. Born from ancient Columbia River basalt, these soils have been developing for hundreds of thousands of years, creating layers that extend more than six feet down. At the surface, you\'ll find topsoil containing 3 to 5 percent organic matter (decomposed plant material that acts like natural slow-release fertilizer). Below lies a clay-rich layer that formed as rainwater carried tiny particles downward over millennia. This clay zone becomes the primary rooting area where mature grapevines establish themselves.',
              'Jory soil\'s striking red color comes from iron compounds like hematite and goethite, the same materials that create rust. This iron serves important functions beyond appearance, playing vital roles in plant photosynthesis and internal chemistry. Wine tasters often detect that grapes grown in these iron-rich soils produce wines with distinctive "mineral" or "blood-like" flavors, particularly noticeable in Pinot Noir. This embodies terroir in action, where the soil\'s chemical makeup directly influences the wine\'s character.'
            ],
            image: {
              src: jorySoilImage,
              alt: 'Jory soil profile showing characteristic red coloration and clay layers',
              position: 'left'
            }
          },
          {
            title: 'Willakenzie: The Marine Alternative',
            content: [
              'Willakenzie soils tell a different geological story. Formed from uplifted marine sedimentary rocks, these soils are typically only two to three feet deep. This shallow profile forces vines to partition energy differently, producing smaller berries with higher skin-to-juice ratios, concentrating flavors and tannins.',
              'The parent material contains ancient seafloor deposits rich in calcium carbonate from marine organisms. As these weather, they release calcium, which influences pH and structure. Calcium causes clay particles to flocculate, or clump together, improving drainage. This better drainage combined with shallow profiles creates natural stress that many winemakers consider ideal for quality production.'
            ]
          },
          {
            title: 'The Living Soil',
            content: [
              'A single teaspoon of healthy vineyard soil is packed with more tiny living creatures than there are people on Earth. The real MVPs of this underground world are mycorrhizal fungi, which team up with vine roots in nature\'s version of a business partnership. These fungi act like root extensions, spreading out underground networks that can increase the vine\'s reach by up to 1,000 times, imagine your roots suddenly having access to an area the size of a tennis court instead of a dinner table. The fungi deliver water and nutrients (especially phosphorus) to the vines, and in return, the vines feed them sugars. Wine researchers have discovered something fascinating: vineyards with more diverse fungal communities tend to produce more complex, interesting wines.',
              'This invisible soil life also acts as the vineyard\'s health and flavor department. Good bacteria work like tiny pharmaceutical factories, producing natural antibiotics that fight off disease-causing organisms and switching on the vine\'s own defense systems. Some bacteria even produce plant hormones that influence when grapes ripen and what flavors develop. Scientists are discovering that each vineyard\'s unique community of soil microbes might be just as important to a wine\'s character as the climate or the type of soil itself. These microscopic communities are so distinctive to each location that they\'re becoming recognized as a key part of what makes wines from different places taste different.'
            ],
            image: {
              src: soilFoodWebImage,
              alt: 'The soil food web',
              position: 'right'
            }
          },
          {
            title: 'Water Relations and Soil Physics',
            content: [
              'Plant-available water, the difference between field capacity and permanent wilting point, determines how vines experience water stress. Clay-rich Jory soils have high water-holding capacity but also high wilting points, creating mild, consistent stress that encourages deep rooting and flavor concentration without destructive drought.',
              'Soil structure, the arrangement of particles into aggregates, affects water movement and root penetration. Well-structured soils have macropores for drainage, mesopores for water storage, and micropores within aggregates. Compaction destroys this structure, reducing infiltration and root growth.'
            ]
          },
          {
            title: 'Soil Temperature Dynamics',
            content: [
              'Soil color and composition create distinct thermal patterns that directly impact vine development. Dark Jory soils act like heat absorbers, soaking up solar radiation and warming earlier in spring, which can give vines a head start on growth. However, these clay-rich soils also hold more water, creating a natural cooling effect that moderates temperature swings throughout the day. On the other hand, lighter-colored Willakenzie soils reflect more sunlight away but drain water much faster, which allows them to warm up and cool down more quickly. This difference means that while Jory soils provide steady, moderate temperatures, Willakenzie soils experience more dramatic temperature fluctuations that can stress vines during extreme weather.',
              'Underground, soil temperature becomes increasingly stable with depth, creating an important refuge for vine roots during challenging conditions. While surface soil temperatures can swing 30°F or more between day and night, temperatures just three feet down remain remarkably constant year-round. This temperature stability becomes vital during heat waves when surface roots essentially shut down to protect themselves from stress. During these periods, the vine\'s deeper roots continue operating normally in the cooler, stable environment below ground, maintaining the photosynthesis needed to ripen grapes properly. This deep root system also explains why established vineyards with mature root networks often produce better fruit during difficult vintage years than younger plantings with shallow root systems.'
            ],
            image: {
              src: sunVineyardImage,
              alt: 'Sunlight warming vineyard soil and creating temperature gradients',
              position: 'right'
            }
          },
          {
            title: 'Terroir Expression Through Soil',
            content: [
              'The path from soil to wine flavor involves complex transformations. Mineral nutrients affect enzyme production, influencing metabolic pathways creating flavor precursors. Potassium affects malate metabolism and wine acidity. Nitrogen availability determines amino acid composition, affecting fermentation and aroma production.',
              'Different soil types consistently produce recognizable flavor signatures in wines, particularly in Pinot Noir where these differences are most apparent. Jory soils tend to yield wines with darker fruit characteristics like blackberry and plum, paired with earthier aromatics reminiscent of forest floor or mushrooms, and firmer tannin structure that gives the wine backbone. Willakenzie soils typically produce brighter expressions featuring red cherry and strawberry flavors, more pronounced floral aromatics like rose petals or violets, and a silkier, more approachable texture. Vineyards planted on marine sedimentary soils often contribute a distinctive minerality that tasters describe as "oyster shell" or "wet stone," while volcanic soils add "smoky" or "graphite" notes that suggest pencil lead or charcoal. These differences aren\'t subtle marketing concepts but measurable chemical variations that trained palates can consistently identify in blind tastings.'
            ]
          },
          {
            title: 'Managing Soil for Quality',
            content: [
              'Understanding soil science allows vineyard managers to make targeted decisions that directly impact wine quality. Cover crop selection becomes strategic: legumes like clover fix atmospheric nitrogen when soils need more nutrients, grasses contribute organic matter and prevent erosion, while brassicas like mustard help control soil-borne pests. Some operations use precision viticulture with soil sensors and GPS mapping to customize management across different vineyard blocks. Others focus on building soil biology through compost and reduced chemical inputs to encourage beneficial microorganisms. The goal isn\'t creating the richest soil possible but achieving balanced nutrition that promotes moderate vine vigor and optimal fruit development.',
              'Soil functions as a dynamic, living system that actively shapes wine character through countless interactions occurring every moment. Every chemical reaction between root and mineral, every exchange between beneficial fungi and vine roots contributes to the final wine\'s expression. The process spans from geological timescales (slow weathering of ancient basalt) to instantaneous nutrient uptake at root hairs. When you taste a Willamette Valley wine, you\'re experiencing the integrated result of millions of these soil processes, making each sip a liquid expression of the complex underground ecosystem that nurtured those grapes.'
            ],
            image: {
              src: vineyardSoilImage,
              alt: 'Vineyard soil management practices and soil health indicators',
              position: 'left'
            }
          }
        ]
      }
    },
    {
      id: 'topography',
      title: 'Topography & Microclimates',
      colorTheme: 'topography',
      content: {
        introduction: 'The Willamette Valley\'s varied topography creates a three-dimensional mosaic of growing conditions that profoundly influence wine character. Elevation, slope angle, aspect, and proximity to geographical features combine to create distinct microclimates, small areas with unique atmospheric conditions, and mesoclimates, larger zones spanning dozens to hundreds of acres. These topographical variations explain why vineyards separated by mere miles, or even different blocks within the same property, can produce wines with dramatically different personalities.',
        subsections: [
          {
            title: 'Elevation',
            content: [
              'Elevation plays a very important role in Willamette Valley vineyards, which climb from 200 feet on the valley floor to over 1,000 feet on the highest hillsides. Here\'s the basic rule: for every 1,000 feet you go up, it gets about 3.5°F cooler. This cooling effect is actually a good thing for wine grapes. At higher elevations, grapes ripen more slowly, like slow-cooking versus flash-frying, which gives them time to develop complex flavors while keeping their refreshing acidity. The trade-off? High-elevation vineyards often harvest two to three weeks later than those on the valley floor, racing to pick their grapes before the autumn rains arrive.',
              'There\'s a famous elevation marker at 400 feet that locals call the "Pinot line," named after ancient floods that reached exactly this height. But this line marks something even more important for grape growing: it\'s where the best conditions begin. Below 400 feet, cold air settles like a lake and morning fog lingers. Above this line, something interesting happens on calm nights: warm air creates a blanket over cooler air (called a temperature inversion), forming a protected zone between 400 and 800 feet where frost rarely strikes. Vineyards in this "goldilocks zone" stay warmer at night than both the foggy valley floor and the exposed mountaintops, protecting buds from spring frost while still getting those cool nights that help grapes develop their best flavors.'
            ],
            image: {
              src: vineyardHillImage,
              alt: 'Vineyard hillside showing elevation gradients',
              position: 'right'
            }
          },
          {
            title: 'Slope Dynamics and Solar Exposure',
            content: [
              'The steepness of a hillside dramatically affects vineyard conditions. Think of cold air like invisible water: it\'s heavier than warm air, so it flows downhill and pools in low spots. Even gentle slopes (like a wheelchair ramp) help this cold air keep moving instead of settling on vines and causing frost damage. Steeper hillsides, while great at whisking away frost-causing cold air, make it tough to use machinery and can wash away topsoil during heavy rains. The payoff is significant though: a south-facing hillside tilted at 20 degrees acts like a solar panel, catching about 20% more sunlight than flat ground during the growing season.',
              'Where you plant on a hillside matters just as much as the hillside itself. The upper third is often the "sweet spot": warm enough to ripen grapes well but cool enough to preserve their zippy acidity, with good airflow that prevents mold. The middle section provides steady conditions for even ripening. Down at the bottom, cold air loves to settle on still nights, creating frost pockets, though these areas often have richer soil and more water. Smart vineyard owners work with these natural zones, planting different grape varieties at different heights to match what each type needs to thrive.'
            ],
            image: {
              src: dualHillImage,
              alt: 'Dual hillside showing slope dynamics and solar exposure',
              position: 'left'
            }
          },
          {
            title: 'Aspect: The Compass of Ripening',
            content: [
              'Aspect, the compass direction a slope faces, fundamentally determines daily heat accumulation and ripening patterns. South-facing slopes in the Northern Hemisphere receive maximum solar radiation, experiencing peak sun exposure when the sun reaches its highest point. These sites warm earlier in spring, triggering earlier bud break, and maintain higher temperatures throughout the growing season. In the Willamette Valley, south-facing slopes can accumulate 200 to 300 more growing degree days than north-facing slopes at the same elevation, equivalent to being 200 miles further south climatically.',
              'East-facing slopes receive morning sun, warming quickly after cool nights and drying dew that could promote fungal diseases. This early warming extends the daily photosynthesis period, potentially increasing sugar accumulation. However, they cool earlier in the afternoon, preserving acidity and aromatic compounds. West-facing slopes experience opposite patterns, remaining cooler in the morning but receiving intense afternoon sun. This can be problematic during heat waves when afternoon temperatures peak, potentially causing sunburn on exposed clusters. North-facing slopes, the coolest aspect, receive only indirect sunlight, creating conditions that significantly delay ripening. While challenging for achieving full ripeness in marginal years, these sites excel in warm vintages, producing wines with exceptional freshness and aromatic complexity.',
              'Southeast aspects often provide the ideal conditions in the Willamette Valley, receiving ample morning sun for photosynthesis while avoiding the most intense afternoon heat. Many of the valley\'s most celebrated vineyards occupy southeast-facing slopes, combining adequate heat accumulation with natural temperature moderation.'
            ]
          },
          {
            title: 'Wind Patterns and Topographical Funneling',
            content: [
              'Hills and valleys act like giant channels that direct wind flow, creating pockets of very different growing conditions. The Van Duzer Corridor, a natural gap in the Coast Range mountains, works like a giant wind tunnel. On hot summer afternoons, when inland temperatures soar, cool ocean air gets sucked through this gap at 20 to 30 mph, like opening a window in a hot room. Vineyards sitting in this "wind river" stay 5 to 10 degrees cooler than their neighbors, and the constant breeze helps prevent mold and mildew. But there\'s such a thing as too much wind: strong gusts can stress the vines and knock off flowers before they become grapes. Throughout the Willamette Valley, prevailing winds generally flow from the northwest in summer and from the southwest during winter storms, with each vineyard site experiencing these patterns differently based on its position in the landscape.',
              'Vines on exposed ridgetops and those tucked into protected valleys face completely different wind challenges. Up on the ridges, constant wind actually toughens grape skins the same way exercise builds muscle, potentially creating more flavorful, concentrated wines. But too much wind battering can break shoots, force vines to close their breathing pores (reducing growth), and dry them out faster. Meanwhile, vineyards sheltered behind hills might seem lucky to avoid the wind, but still air is a recipe for trouble: humidity builds up, creating perfect conditions for fungal diseases. The best vineyard sites find the sweet spot between these extremes, getting enough breeze to keep vines healthy but not so much that it beats them up.'
            ],
            image: {
              src: prevailingWindsImage,
              alt: 'Wind patterns and topographical funneling in the Willamette Valley',
              position: 'right'
            }
          },
          {
            title: 'Microclimate Mapping and Management',
            content: [
              'Modern grape growers have learned that even a single vineyard is really a patchwork of different growing conditions. A rise of just 50 feet, a curve in the hillside that changes sun exposure, or being near a forest edge or stream can create completely different environments for vines just rows apart. Today\'s tech-savvy vineyards use networks of weather stations and temperature sensors scattered throughout their property to track these differences. This data helps them fine-tune everything: which vines to prune when, how to manage the leafy canopy based on sun exposure, and even harvesting different sections days or weeks apart when each zone hits peak ripeness.',
              'All these landscape features show up directly in your glass of wine. Grapes from high elevations produce wines with bright, zesty acidity and delicate, floral aromas that seem to float above the glass. South-facing slopes deliver bolder wines with riper, darker fruit flavors, like the difference between fresh raspberries and blackberry jam. Sites that get constant wind develop thicker-skinned grapes that create wines with more grip and concentrated flavors. Valley floor vineyards, when handled skillfully, give earlier-ripening wines with gentler, softer personalities. By matching the right grape varieties to the right spots, and harvesting each section at its perfect moment, winemakers can capture the full range of what the Willamette Valley offers. The landscape isn\'t just where grapes grow; it\'s an active partner in winemaking that must be taken carefully into consideration, using elevation, angles, and exposure to shape every aspect of how the vine grows and ultimately how the wine tastes.'
            ],
            image: {
              src: wvTopoImage,
              alt: 'Topographic map of Willamette Valley showing microclimate zones',
              position: 'left'
            }
          }
        ]
      }
    },
    {
      id: 'biology',
      title: 'Biology & Ecology',
      colorTheme: 'biology',
      content: {
        introduction: 'Beneath every great vineyard lies an intricate web of biological relationships that profoundly influence wine quality. The Willamette Valley\'s vineyards aren\'t monocultures but complex ecosystems where millions of organisms interact with grapevines in ways that directly affect flavor, aroma, and structure. From microscopic soil bacteria to beneficial insects, from cover crop roots to native yeasts, these biological systems create what many consider the most mysterious and vital component of terroir.',
        subsections: [
          {
            title: 'The Soil Microbiome: The Underground Universe',
            content: [
              'Just one gram of healthy vineyard soil is absolutely teeming with life, hosting up to a billion bacteria from thousands of different species. These tiny organisms are the unsung heroes of the vineyard, constantly working to break down organic matter and transform minerals into forms that grapevines can actually use. Some bacteria specialize in capturing nitrogen from the air and converting it into nutrients that fuel vine growth, while others unlock phosphorus that\'s trapped in soil minerals. Without these microscopic workers, grapevines would essentially starve even in nutrient-rich soil because they couldn\'t access what they need.',
              'The fungal community in vineyard soil is just as important as the bacteria. While many people know about mycorrhizal fungi that form partnerships with vine roots, there are also countless other fungi that slowly decompose organic matter throughout the growing season. This creates a steady, gentle release of nutrients that keeps vines growing at just the right pace, avoiding the explosive growth spurts that can happen with synthetic fertilizers and actually hurt wine quality. Many of these fungi also act like natural bodyguards, producing compounds that fight off harmful pathogens or simply outcompeting the bad guys for resources.',
              'What\'s exciting is that scientists are discovering connections between soil microbe diversity and wine complexity. Different microbial communities release different minerals and produce unique compounds that the vines absorb, which could contribute to the distinct flavors we taste in the finished wine. Forward-thinking Willamette Valley winemakers are now treating their soil microbiome as a main part of what makes their wines unique, using practices like composting, minimal tillage, and diverse cover crops to nurture this underground ecosystem that may be just as important as climate and grape variety in creating exceptional wine.'
            ],
            image: {
              src: soilMicrobiomeImage,
              alt: 'Soil microbiome showing diverse bacterial and fungal communities',
              position: 'right'
            }
          },
          {
            title: 'Mycorrhizal Networks: The Wood Wide Web',
            content: [
              'Arbuscular mycorrhizal fungi (AMF) colonize over 90% of grapevine roots in healthy vineyards, forming one of nature\'s most important symbiotic relationships. These fungi extend hyphal networks far beyond the root zone, increasing the effective root surface area by up to 1,000 times. Through these fungal highways, vines access water and nutrients from soil volumes they could never reach alone. Phosphorus, zinc, copper, and other micronutrients move through mycorrhizal networks to vine roots in exchange for photosynthetically produced sugars.',
              'But mycorrhizae do more than transport nutrients. They produce glomalin, a glycoprotein that binds soil particles into stable aggregates, improving soil structure and water infiltration. During drought stress, mycorrhizal networks help vines access water from deeper soil layers and can even transfer water between plants. Some research suggests mycorrhizal diversity influences wine aromatic complexity, as different fungal species produce different enzymes that affect nutrient availability and potentially influence metabolic pathways in grapes.',
              'The mycorrhizal network connects not just vine to fungus but vine to vine, creating a vineyard-wide communication system. Through these networks, vines can share nutrients, water, and even chemical signals warning of pest attacks or disease pressure. This interconnectedness means vineyard management affects not just individual vines but the entire biological community, with practices like excessive fertilization or fungicide use potentially disrupting these beneficial networks.'
            ],
            image: {
              src: fungiImage,
              alt: 'Mycorrhizal fungal networks connecting plant roots',
              position: 'left'
            }
          },
          {
            title: 'Cover Crops and Companion Plants',
            content: [
              'Cover cropping transforms Willamette Valley vineyards into diverse ecosystems rather than monocultures. Different cover crop species provide distinct ecological services. Legumes like crimson clover and vetch fix atmospheric nitrogen through Rhizobium bacteria in their root nodules, providing natural fertilization. Deep-rooted plants like daikon radish break through compacted soil layers, improving drainage and creating channels for vine roots. Grasses add organic matter and prevent erosion on steep slopes while competing with vines for water and nutrients, naturally controlling vigor.',
              'The timing and management of cover crops critically affects vine performance. Spring cover crops compete with vines during the crucial flowering and fruit set period, potentially reducing yields but increasing concentration. Summer resident vegetation maintains beneficial insect populations and reduces dust that can carry disease spores. Fall-seeded covers protect soil during wet winters while decomposing in spring to release nutrients during the growing season.',
              'Beyond nutrient cycling, cover crops support complex food webs. Their flowers provide nectar and pollen for beneficial insects, their roots feed soil organisms, and their foliage shelters predatory insects that control pest populations. Some vineyards plant specific cover crop mixtures to attract particular beneficial insects or to produce allelopathic compounds, natural chemicals that suppress weed growth, reducing herbicide needs.'
            ]
          },
          {
            title: 'Beneficial Insects and Biological Control',
            content: [
              'Willamette Valley vineyards are buzzing with life, home to hundreds of different insect species that mostly help rather than harm grape production. Tiny predatory mites keep spider mites in check before they can damage leaves and hurt the vine\'s ability to make energy from sunlight. Lacewings and ladybugs munch on aphids and mealybugs that can spread nasty viral diseases from vine to vine. Even more impressive are the parasitic wasps that hunt down grape leafhopper eggs and lay their own eggs inside them, creating a natural pest control system that works around the clock. All these helpful insects need places to live and things to eat throughout the growing season, which is why the best vineyards maintain hedgerows, plant flowers specifically for beneficial bugs, and go easy on pesticides.',
              'Smart vineyard managers have learned that the goal isn\'t to wipe out every single pest, but to keep pest numbers below the point where they actually hurt grape production or wine quality. This balancing act, called managing economic thresholds, means leaving enough pests around to feed the good bugs while preventing serious damage. It takes careful observation and a deep understanding of how predators and pests interact, but vineyards that master this approach become incredibly stable ecosystems that need fewer and fewer interventions over time.',
              'While grapevines don\'t actually need bees for pollination since they\'re wind-pollinated, the presence of native bees like mason bees and bumblebees tells a bigger story about vineyard health. These bees pollinate cover crops and wild plants around the vineyard, and their thriving populations signal that pesticide use is minimal and habitat is abundant. Vineyards with healthy bee populations often produce higher quality wines, not because the bees directly help the grapes, but because they indicate that the entire vineyard ecosystem is balanced and thriving.'
            ],
            image: {
              src: soilHealthImage,
              alt: 'Beneficial insects and soil health in vineyard ecosystem',
              position: 'right'
            }
          },
          {
            title: 'The Vine\'s Internal Biology',
            content: [
              'Within grapevines themselves, biological processes directly influence wine quality. Grapevines have their own internal daily rhythms that control when genes turn on and off, affecting everything from how efficiently they make energy from sunlight to which flavor compounds they produce. This is why many winemakers prefer harvesting in the early morning, it\'s not just about cooler temperatures but also because the vine\'s natural acid levels peak before dawn, helping preserve the crisp acidity that makes wines taste balanced and fresh. Throughout the growing season, the vine produces different hormones that act like chemical messengers, especially during ripening when hormones like abscisic acid trigger the development of color, sugar accumulation, and the creation of the aromatic compounds that eventually become the wine\'s bouquet.',
              'The trunk and woody stem structure of the grapevine, often called the cordon system, serves as both the vine\'s highway and storage facility. These permanent woody parts transport water, nutrients, and energy between the roots and leaves while also storing carbohydrates during winter that fuel new growth each spring. The age and health of these woody structures matter tremendously, older vines with well-established trunks and cordons tend to produce more concentrated, complex fruit because their extensive wood network allows for better regulation of water and nutrient flow. The way these permanent structures are trained and pruned also influences how the vine distributes its energy, with different training systems creating microclimates within the vine canopy that affect how grapes ripen and develop their flavors.',
              'The phylloxera crisis of the late 1800s, while devastating at the time, accidentally led to one of the most important discoveries in winemaking: how much the rootstock affects wine character. Today, most wine grapes are actually two plants in one, with the fruit-producing variety grafted onto a different rootstock chosen for specific qualities. These rootstocks have dramatically different abilities to soak up nutrients from the soil, survive drought conditions, and control how vigorously the vine grows. Some rootstocks send their roots deep and straight down like anchors, while others spread their roots wide and shallow like a net, and these different root patterns completely change how the vine accesses water and minerals, ultimately influencing what the finished wine tastes like.'
            ],
            image: {
              src: vineTrunkImage,
              alt: 'Grapevine trunk',
              position: 'left'
            }
          },
          {
            title: 'Native Yeasts and Fermentation Ecology',
            content: [
              'The whitish, waxy coating you see on grape skins isn\'t just for show, it\'s actually home to an incredible diversity of wild yeasts that change depending on where the vineyard is located, what the weather was like that year, and how the grapes were grown. These native yeasts include not only the famous Saccharomyces cerevisiae that most people know about, but dozens of other species that many winemakers believe are essential for capturing the true character of a specific place. During the early stages of fermentation, wild yeasts with names like Hanseniaspora, Candida, and Metschnikowia take the lead, producing special enzymes and flavor compounds that you simply can\'t get from store-bought commercial yeasts.',
              'How a vineyard is managed has a huge impact on which wild yeasts call it home. Organic and biodynamic vineyards tend to have much more diverse yeast communities, which may be one reason their wines often taste more complex and interesting. Even the copper sprays that organic growers use to prevent disease end up selecting for yeasts that can tolerate copper, creating unique yeast populations. Cover crops and wild plants around the vineyard act like yeast hotels, keeping populations alive between growing seasons. Birds also play a surprising role, carrying yeasts on their feet and feathers as they move from vine to vine and vineyard to vineyard, helping spread the biological signature that makes each region\'s wines distinctive.',
              'When you really dig into vineyard biology, it becomes clear that exceptional wines don\'t come from sterile, factory-like conditions but from thriving, messy ecosystems where countless living things all contribute something to the final bottle. This biological side of terroir includes everything from soil microbes that help vines absorb nutrients, to wild yeasts that guide fermentation, to fungal networks that keep vines healthy, to beneficial insects that maintain the delicate balance of the vineyard ecosystem.'
            ]
          }
        ]
      }
    },
    {
      id: 'chemistry',
      title: 'The Chemical Connection',
      colorTheme: 'chemistry',
      content: {
        introduction: 'Wine is fundamentally a chemical solution, containing over 1,000 different compounds that interact to create flavor, aroma, texture, and color. In the Willamette Valley, the chemical journey from soil to grape to wine involves countless reactions influenced by terroir at every step. Understanding these chemical processes reveals why certain vineyard practices produce specific flavors, how soil chemistry translates to wine character, and why seemingly minor chemical differences create dramatically different sensory experiences.',
        subsections: [
          {
            title: 'Soil pH and Nutrient Availability',
            content: [
              'Soil pH is basically the acidity level of soil, and it acts like a control knob for which nutrients grapevines can actually use. In the Willamette Valley, most soils are slightly acidic, with pH levels between 5.5 and 6.5. This matters because nutrients change their chemical form depending on the pH. Take iron, for example: at pH 6.0, it exists in a form that vine roots can easily absorb. But if the pH rises to 7.5, that same iron transforms into a different chemical form that roots can\'t take up, even though it\'s still physically present in the soil. When this happens, vine leaves turn yellow because they can\'t produce enough chlorophyll without accessible iron.',
              'This pH effect happens with nearly all nutrients. Phosphorus becomes locked up and unavailable to plants when soil is too acidic (below pH 5.5) or too alkaline (above pH 7.0), but it\'s readily accessible to roots in that sweet spot between 6.0 and 7.0. Manganese, on the other hand, becomes more and more soluble as soil gets more acidic, which can actually poison vines if pH drops below 5.0. The slightly acidic conditions naturally found in Willamette Valley soils hit a nice balance: most nutrients stay available to vines, while avoiding the aluminum toxicity problems that plague more acidic soils in other regions.',
              'Beyond controlling nutrient availability, soil pH also affects the biological processes happening underground. Soil microorganisms and plant roots produce enzymes that break down organic matter and cycle nutrients, but these enzymes work best at specific pH levels. The enzymes that release phosphorus from decomposing organic matter are most active around pH 6.5, while those that convert nitrogen compounds into forms vines can use prefer a pH between 6.5 and 7.0. These pH-sensitive biological processes determine how quickly nutrients become available throughout the growing season, directly impacting vine health and grape quality.'
            ],
            image: {
              src: phLevelsImage,
              alt: 'pH levels and nutrient availability in soil',
              position: 'right'
            }
          },
          {
            title: 'The Chemistry of Cation Exchange',
            content: [
              'Cation exchange capacity (CEC) is essentially how well soil can hold onto positively charged nutrients. Clay particles and organic matter in the soil carry negative electrical charges, which naturally attract and hold positive nutrients like calcium, magnesium, potassium, and ammonium. Think of it as soil\'s nutrient storage system. This electrical attraction is strong enough to prevent these nutrients from washing away when it rains, but weak enough that vine roots can still access them. When roots breathe out hydrogen ions during their normal metabolic processes, these hydrogen ions swap places with the nutrient ions stuck to soil particles, releasing the nutrients so vines can absorb them.',
              'The balance of different positive nutrients in the soil matters tremendously for both soil health and vine growth. Calcium typically makes up about 65 to 75 percent of the nutrients held by the soil\'s exchange sites, and it plays a crucial role in creating good soil structure by helping clay particles and organic matter stick together in beneficial clumps. Magnesium should ideally occupy 10 to 15 percent of these exchange sites since it sits at the center of every chlorophyll molecule and helps activate many plant enzymes. Potassium, making up just 2 to 5 percent of exchange sites, might seem minor but it\'s critical for controlling how vine leaves open and close their pores and how sugars move through the plant, which directly impacts grape ripening and eventual wine quality.'
            ]
          },
          {
            title: 'Organic Acid Chemistry in Grapes',
            content: [
              'Grapes contain two primary organic acids that fundamentally shape wine character: tartaric and malic acid. Tartaric acid, unique among fruits to grapes, remains relatively stable during ripening, providing wine\'s backbone acidity. Its concentration, typically 6-10 g/L at harvest, depends partly on potassium levels in soil. High potassium causes formation of potassium bitartrate, reducing free tartaric acid and raising pH, potentially compromising wine stability and longevity.',
              'Malic acid follows a more complex chemical journey. Synthesized in grape leaves through carbon fixation, malic acid accumulates in young berries, reaching peak levels at veraison, when grapes begin softening and coloring. During ripening, malic acid undergoes respiratory breakdown through the tricarboxylic acid cycle, with rates dependent on temperature. Cool nights preserve malic acid by slowing respiration, while hot days accelerate its degradation. This explains why Willamette Valley\'s cool nights maintain the bright acidity that defines its wines.'
            ],
            image: {
              src: wineAcidImage,
              alt: 'Organic acids in grape development',
              position: 'left'
            }
          },
          {
            title: 'Phenolic Chemistry and Tannin Development',
            content: [
              'Phenolic compounds are the molecules that give wine its color, structure, and many of its flavors. These include tannins (which create that drying sensation in red wines), anthocyanins (the red and purple pigments), and flavonoids (various flavor compounds). Grapevines produce these compounds through a specific biochemical pathway called the shikimic acid pathway, and production ramps up or down based on environmental conditions. When vines experience UV exposure, water stress, or especially nitrogen deficiency, they shift their internal chemistry away from making proteins and toward making these phenolic compounds instead. This is why moderate stress on vines can actually improve wine quality, as long as it doesn\'t go too far.',
              'Tannins in grapes start out as small, individual molecules or short chains that taste harsh and astringent. During fermentation and as wine ages, these small tannin units link together into progressively longer chains through a process called polymerization. Longer tannin chains feel softer and smoother on the palate, which is why aged wines often taste less harsh than young ones. How quickly and completely this linking happens depends on several factors: the wine\'s pH level, storage temperature, and how much oxygen the wine encounters. Wines with lower pH (meaning higher acidity) are particularly good at forming stable complexes between anthocyanins and tannins. This explains why Willamette Valley Pinot Noirs, which typically have bright acidity, often age better and more gracefully than similar wines from warmer regions with higher pH levels.'
            ]
          },
          {
            title: 'Water Chemistry and Vine Response',
            content: [
              'Water in vineyard soils is far more complex than simple H₂O. It\'s actually a solution containing dissolved minerals, organic compounds, and gases that all affect how vines grow and grapes develop. Scientists measure something called electrical conductivity in this soil water, which tells them how much salt and other dissolved substances are present. When salt concentrations are higher, vines have to work harder to pull water from the soil due to osmotic pressure. This extra effort creates mild stress that\'s actually beneficial, causing vines to produce smaller berries with more concentrated flavors rather than large, watery grapes.',
              'When vines experience water stress, they produce a hormone called abscisic acid (ABA) that triggers important changes in grape development. ABA causes the tiny pores on leaves (stomata) to close, which reduces both water loss and photosynthesis. More importantly for wine quality, ABA accumulation speeds up the production of anthocyanins (color compounds) and switches on specific genes that control flavor development. The precise timing and intensity of water stress throughout the growing season, which depends on how well the soil holds water and local rainfall patterns, directly determines the chemical composition of the finished wine. Too little stress and wines lack concentration; too much and vines shut down completely. Getting this balance right is one of the key factors separating good vintages from great ones.'
            ],
            image: {
              src: vineWaterImage,
              alt: 'Water chemistry and vine response',
              position: 'right'
            }
          },
          {
            title: 'Fermentation Chemistry',
            content: [
              'Native yeast populations in vineyards and wineries create unique chemical signatures in wine through their distinctive metabolic processes. While commercial yeast strains are predictable and efficient, wild non-Saccharomyces yeasts produce different sets of enzymes that affect wine chemistry in interesting ways. These native yeasts break down glycosides (releasing aromatic compounds that were previously bound and undetectable), create different patterns of esters (fruity aromas), and produce varying levels of higher alcohols (which contribute to complexity and mouthfeel). Each wild yeast species also uses nitrogen differently during fermentation, which influences what volatile compounds they produce. This metabolic diversity is why wines fermented with native yeasts often display more complex, sometimes unpredictable flavor profiles compared to those made with commercial strains.',
              'Malolactic fermentation is another important chemical transformation in winemaking, particularly for red wines and some Chardonnays. During this process, lactic acid bacteria convert malic acid, which tastes sharp and reminiscent of green apples, into lactic acid, which has a softer, creamier character. This conversion doesn\'t just change the acid type; it also raises the wine\'s pH and reduces its total acidity, which makes the wine feel rounder and less tart. The bacteria involved also produce additional compounds like diacetyl (responsible for buttery aromas), ethyl lactate (contributing to creamy texture), and various other metabolites that add layers of complexity. The specific populations of lactic acid bacteria naturally present in Willamette Valley wineries have adapted to local conditions over time, contributing distinctive metabolic signatures that help define the regional character of these wines.'
            ]
          },
          {
            title: 'The Chemical Controller',
            content: [
              'Wine pH functions as a master control switch for chemical reactions throughout the winemaking process, from initial fermentation through bottle aging. In the typical Willamette Valley range of pH 3.2 to 3.6, about 6 percent of sulfur dioxide exists in its molecular form, which is the version that actually kills unwanted microbes and prevents oxidation. The rest exists as bisulfite ions that are much less effective. This pH-dependent balance determines how well protected the wine is from spoilage and browning. Color compounds called anthocyanins also change their structure based on pH: at pH 3.2 they appear bright red, but as pH rises toward 3.5 they shift toward purple, and would turn yellowish above pH 4.0 if wine pH ever got that high. In addition, pH affects how proteins and tannins interact, whether tartrate crystals will form in the bottle, and how quickly the wine oxidizes as it ages.',
              'The way we perceive acidity on our palate has more to do with hydrogen ion concentration than the total amount of acid in the wine, and this concentration changes dramatically with small pH shifts. Since pH is a logarithmic scale, a wine at pH 3.2 actually contains nearly twice as many hydrogen ions as a wine at pH 3.5, even though the numbers look close together. These hydrogen ions directly trigger the acid receptors on our tongue, which explains how a pH 3.2 wine tastes noticeably brighter and more tart. The Willamette Valley\'s cool climate allows grapes to develop full flavor and sugar ripeness while keeping their natural malic and tartaric acid levels high. In warmer regions, grapes lose acidity through increased respiration as they ripen, forcing winemakers to choose between picking early for acidity or late for flavor. Willamette Valley winemakers can have both.',
              'The chemistry of Willamette Valley wines represents an intricate web of reactions happening at every stage from soil to glass. Each vineyard decision sets off chains of chemical events: planting cover crops changes the forms of nitrogen in soil, which affects how yeast produce aromatic compounds during fermentation. Deciding when to harvest determines the balance of different acids, which influences how malolactic bacteria behave and what the final pH will be. Even pruning decisions matter because they affect how many leaves the vine has for photosynthesis, changing the balance of sugars and acids in the grapes. After bottling, wine continues evolving through ongoing chemical reactions that link tannins together, create new aromatic esters, and slowly transform the wine\'s entire chemical makeup over years or decades. When tasting a Willamette Valley wine, those flavors, aromas, and textures result from thousands of interconnected chemical reactions shaped by volcanic soils, cool maritime breezes, and careful winemaking decisions. This remarkable chemical complexity, accessible in every glass, makes the Willamette Valley one of the world\'s most fascinating wine regions from a scientific perspective.'
            ],
            image: {
              src: wineSwirlImage,
              alt: 'Wine pH and chemical complexity',
              position: 'left'
            }
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
    handleScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Image Modal Component
  const ImageModal = () => {
    if (!modalImage) return null;

    return (
      <div className="image-modal-overlay" onClick={closeImageModal}>
        <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="image-modal-close" onClick={closeImageModal}>
            ×
          </button>
          <img 
            src={modalImage.src} 
            alt={modalImage.alt} 
            className="image-modal-img"
          />
          <p className="image-modal-caption">{modalImage.alt}</p>
        </div>
      </div>
    );
  };

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
          <p className="scroll-text">Let's understand this land from the ground up.</p>
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
                                  className="section-img clickable-image"
                                  onClick={() => openImageModal(subsection.image.src, subsection.image.alt)}
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
      
      {/* Image Modal */}
      <ImageModal />
    </div>
  );
};

export default TerroirPage;
