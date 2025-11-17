import React, { useState, useRef } from 'react';
import './SoilSeries.css';
import soilDepthImg from '../../assets/images/soil_depth.png';

const SoilSeries = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const soilRefs = useRef({});
  const soilSeriesData = {
    amity: {
      title: 'Amity',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Somewhat Poorly Drained',
      parentMaterial: 'Stratified glaciolacustrine silts',
      awc: '0.18-0.22 in/in',
      cec: '18-25 meq/100g',
      description: 'Amity soils represent the transitional terraces of the Willamette Valley, where ancient glacial lake deposits have created deep, silty soils with distinctive pale-colored (albic) horizons that reflect seasonal water fluctuation. These somewhat poorly drained soils, often referred to locally as "half-white land," occupy the middle ground between well-drained upland sites and poorly drained valley floors, supporting vines that must work harder to access nutrients through their moderately restricted drainage profile. The resulting wines from Amity soils tend to produce Pinot Noir with moderate intensity and elegant structure, displaying earthy undertones and subtle minerality that reflect the soil\'s periodic saturation and complex iron chemistry. While these soils require careful vineyard management to optimize drainage and prevent excessive vigor during wet springs, they reward growers with wines that showcase a distinctive restraint and complexity, contributing layers of savory character and aged-worthy structure to Willamette Valley blends.'
    },
    bellpine: {
      title: 'Bellpine',
      soilDepthToBedrock: '20-40 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Colluvium and residuum from sedimentary rocks',
      awc: '0.12-0.16 in/in',
      cec: '20-30 meq/100g',
      description: 'The Bellpine series is one of the most distinctive terroirs in the Willamette Valley, consisting of moderately deep, well-drained soils formed from ancient marine sedimentary rocks on convex foothills. These fine-textured soils feature high clay content (40-55 percent) and reach bedrock at 20-40 inches, creating moderate water stress that concentrates flavors while maintaining adequate vine nutrition. The marine sedimentary origin contributes to wines with powerful, succulent black fruit notes, dry dusty earth characteristics, and robust tannin structure that distinguishes them from volcanic soil wines. The shallow clay loam structure derived from marine sandstones provides excellent drainage while the sedimentary parent material imparts distinctive mineral complexity. For Willamette Valley viticulture, Bellpine soils produce wines of strong power and concentration, offering the structural backbone and earthy complexity that reflects millions of years of marine sediment deposition. This makes them particularly prized for age-worthy Pinot Noir with forward terroir expression and exceptional cellar potential.'
    },
    carlton: {
      title: 'Carlton',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Moderately Well Drained',
      parentMaterial: 'Mixed alluvium and colluvium',
      awc: '0.16-0.20 in/in',
      cec: '15-25 meq/100g',
      description: 'Carlton soils occupy the gentle footslopes and toeslopes of the Willamette Valley, where colluvium from hillsides mingles with ancient valley deposits to create deep, fertile soils. The thick mollic epipedon (20-30 inches) reflects centuries of organic matter accumulation, providing exceptional nutrient reserves and water-holding capacity that support vigorous vine growth. These fine-silty soils produce generous yields of Pinot Noir with approachable, fruit-forward characteristics marked by softer tannins and earlier drinkability than hillside sites. The combination of good moisture retention and moderate drainage creates ideal conditions for consistent production, making Carlton soils particularly valuable for producing accessible, commercially viable wines that showcase the welcoming side of Oregon Pinot Noir while maintaining the region\'s signature elegance and balance.'
    },
    chehalem: {
      title: 'Chehalem',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Somewhat Poorly Drained',
      parentMaterial: 'Alluvium from sedimentary and volcanic rocks',
      awc: '0.17-0.21 in/in',
      cec: '25-35 meq/100g',
      description: 'The Chehalem soil series represents very deep, somewhat poorly drained soils with fine texture, containing 35-50% clay and characterized by smectitic mineralogy that provides excellent nutrient retention capabilities. These soils formed in alluvium primarily from sedimentary and volcanic rocks, developing on terraces and alluvial fans at elevations from 150 to 900 feet with a distinctive thick mollic epipedon exceeding 24 inches in depth. The seasonal water table that occurs between 16-20 inches creates aquic conditions during winter and spring months. This leads to the formation of iron accumulations that is a strong signal for periods of saturation and aeration.  While Chehalem soils possess the clay content and nutrient-holding capacity that could theoretically benefit grapevines, their somewhat poorly drained nature and seasonal waterlogging present significant viticultural challenges in the Willamette Valley, as most higher quality wine grapes require well-drained conditions to prevent root diseases and produce the concentrated, complex flavors that define quality Willamette Valley wines.'
    },
    chehalis: {
      title: 'Chehalis',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Mixed alluvium',
      awc: '0.20-0.24 in/in',
      cec: '20-30 meq/100g',
      description: 'Chehalis soils form the fertile river terraces and flood plains of the Willamette Valley, where centuries of flooding have deposited layers of nutrient-rich alluvium that create exceptionally deep, productive soils with thick mollic epipedons extending 50 to 150 cm. These well-drained, fine-silty soils benefit from their position slightly elevated above active floodplains, providing excellent water retention without the drainage issues of lower-lying areas, making them highly sought after for premium vineyard sites. The deep, uniform profile and high organic matter content support consistent vine vigor and produce Pinot Noir with generous fruit expression, showing bright red and black cherry characteristics with supple tannins and approachable structure. While traditionally associated with agricultural crops due to their exceptional fertility, carefully managed Chehalis soils in vineyard settings reward growers with reliable yields and wines that showcase pure fruit flavors, making them valuable for producing accessible, fruit-forward Oregon wines that maintain regional typicity while offering early drinkability.'
    },
    chehulpum: {
      title: 'Chehulpum',
      soilDepthToBedrock: '10-20 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Colluvium from sedimentary rocks and glaciolacustrine deposits',
      awc: '0.10-0.14 in/in',
      cec: '15-25 meq/100g',
      description: 'The Chehulpum soil series are shallow, well-drained soils that formed from colluvium derived from sedimentary rocks, often mixed with silty glaciolacustrine deposits from ancient lake sediments in the lower elevations of the Willamette Valley. These soils occur on low hills with slopes ranging from 3 to 60 percent, where weathering processes have created a distinctive shallow profile over semiconsolidated sandstone bedrock at depths of only 10-20 inches.  The limited soil volume above bedrock creates natural water stress during the growing season, forcing plant roots to establish quickly and access nutrients efficiently from the available soil layers. In Willamette Valley viticulture, Chehulpum soils present both opportunities and challenges. While the shallow nature limits total water storage and may stress vines during extended dry periods, the excellent drainage and natural restriction of root growth can encourage concentrated fruit development and enhance wine complexity by forcing vines to focus energy into fruit production rather than excessive vegetative growth.'
    },
    coburg: {
      title: 'Coburg',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Moderately Well Drained',
      parentMaterial: 'Mixed alluvium',
      awc: '0.18-0.22 in/in',
      cec: '25-35 meq/100g',
      description: 'The Coburg series represents one of the most agriculturally productive soils in the Willamette Valley, consisting of very deep, moderately-drained soils formed from mixed alluvium on ancient stream terraces. These fine-textured soils feature a substantial mollic epipedon (50-75 cm thick) and high clay content (35-45 percent) that creates exceptional water and nutrient retention, making them ideal for sustained vine health throughout the growing season. The seasonal high water table at 70-100 cm depth provides consistent moisture availability during important growth periods while maintaining adequate drainage during wet winters. For Willamette Valley viticulture, Coburg soils offer consistency and predictability, producing wines with rich fruit character, balanced acidity, and excellent aging potential due to the soil\'s ability to moderate vine stress and provide steady nutrient availability. The deep, fertile alluvial foundation supports vigorous vine growth while the clay-rich texture contributes to wines with structure, depth, and the characteristic terroir expression that defines premium Willamette Valley Pinot Noir.'
    },
    cove: {
      title: 'Cove',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Poorly to Very Poorly Drained',
      parentMaterial: 'Mixed alluvium from sedimentary and basic igneous rocks',
      awc: '0.18-0.22 in/in',
      cec: '30-40 meq/100g',
      description: 'The Cove soil series consists of very deep, poorly drained soils characterized by their high clay content (50-60%) and smectitic mineralogy, which gives them exceptional water and nutrient retention capabilities. These soils formed in clayey recent alluvium washed from areas underlain by sedimentary and basic igneous rocks, creating a heavy-textured soil that experiences seasonal waterlogging and develops distinctive cracks during dry summer months.  With their high cation exchange capacity and smectitic clay minerals, Cove soils provide excellent nutrient storage but present drainage challenges, making them less common for premium viticulture in the Willamette Valley. While their nutrient-rich profile could theoretically support vine growth, the poor drainage and seasonal flooding typical of these floodplain soils create conditions that most wine grape varieties cannot tolerate, as excess moisture can lead to root diseases and diluted fruit quality that compromises wine concentration and character.'
    },
    dayton: {
      title: 'Dayton',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Poorly Drained',
      parentMaterial: 'Silty and clayey glaciolacustrine deposits',
      awc: '0.12-0.16 in/in',
      cec: '25-40 meq/100g',
      description: 'The Dayton series represents one of the most distinctive and challenging soils found in Willamette Valley vineyards, and is characterized by its unique dual-layer structure with an abrupt textural change from silty surface horizons to dense clay subsoils. This soil forms from ancient glacial lake deposits left by the Missoula Floods, creating a distinctive "albic" (bleached) horizon that sits above an extremely dense clay layer, causing a perched water table that creates seasonal waterlogging conditions. For winemaking, Dayton soils present both significant challenges and potential benefits, while the poor drainage and clay-rich subsoil can stress vines during wet periods, this same restrictive layer forces roots to develop primarily in the upper soil horizons, potentially concentrating flavors and creating the water stress that many winemakers associate with premium wine production. The high cation exchange capacity of these clay-rich soils provides excellent nutrient retention, though careful vineyard management is essential to prevent waterlogging and ensure proper vine health in this unique terroir.'
    },
    dupee: {
      title: 'Dupee',
      soilDepthToBedrock: '40-60+ inches',
      drainageClassification: 'Somewhat Poorly Drained',
      parentMaterial: 'Clayey colluvium and residuum from marine sedimentary bedrock',
      awc: '0.14-0.17 in/in',
      cec: '20-35 meq/100g',
      description: 'The Dupee series is a very unique soil series in the Willamette Valley, identified by its heavy clay composition and seasonal water dynamics that create eccentric growing conditions for premium viticulture. This deep soil forms from ancient marine sedimentary rocks including sandstone, siltstone, and mudstone that were deposited on prehistoric ocean floors, resulting in a fine-textured profile with exceptional nutrient-holding capacity due to its high clay content. The somewhat poorly drained nature creates a distinctive seasonal rhythm where winter water tables recharge the soil profile, followed by gradual drying that naturally stresses vines during the critical ripening period. For winemakers, Dupee soils are known for producing intensely concentrated Pinot Noirs with excellent structure and aging potential. This is due to how the restrictive clay layers force vines to develop deep, extensive root systems while the high cation exchange capacity provides steady nutrient release throughout the growing season, creating wines with exceptional mineral complexity and longevity.'
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
    goodin: {
      title: 'Goodin',
      soilDepthToBedrock: '20-40 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Residuum and colluvium from siltstone and sandstone',
      awc: '0.14-0.18 in/in',
      cec: '20-30 meq/100g',
      description: 'The Goodin soil series are well-drained soils that formed from the weathering of ancient marine sedimentary rocks, specifically the Yamhill and Keasey Formations that were uplifted and exposed as the Oregon Coast Range developed. These soils occur on ridges and side slopes of hills throughout the western margin of the Willamette Valley, where centuries of weathering have transformed siltstone and fine-grained sandstone into a distinctive soil profile with a strong argillic horizon.  The moderate depth to underlying bedrock creates natural water stress during the growing season, encouraging grapevines to develop extensive root systems and concentrate their energy into fruit production rather than excessive vegetative growth. In Willamette Valley vineyards, Goodin soils are mainly valued for their ability to produce wines with excellent structure and mineral complexity, as the slow release of nutrients from the weathered sedimentary parent material imparts distinctive earthy and mineral notes that reflect the ancient marine origins of the underlying geology.'
    },
    hazelair: {
      title: 'Hazelair',
      soilDepthToBedrock: '20-40 inches',
      drainageClassification: 'Somewhat Poorly Drained',
      parentMaterial: 'Silty glaciolacustrine deposits or colluvium over clayey residuum',
      awc: '0.20-0.24 in/in',
      cec: '35-45 meq/100g',
      description: 'The Hazelair series represents one of the most water-retentive and nutrient-rich soils in the Willamette Valley, consisting of moderately deep, somewhat poorly drained soils with distinctive clay layers formed from ancient sedimentary deposits. These very fine-textured soils feature extremely high clay content (60-70 percent in the subsoil) and a mollic epipedon, creating exceptional water-holding capacity and nutrient retention. The sedimentary marine origin and poorly-drained characteristics produce structural expressions of Pinot Noir with complex arrays of savory and dark-fruited flavors. The distinctive vertic properties and seasonal water table create unique growing conditions that stress vines during summer months while providing ample moisture reserves during critical periods. Hazelair soils are known complexity and power, producing wines with intense concentration, robust structure, and distinctive earthy minerality that reflects the ancient marine sedimentary heritage, making them quite valued for creating age-worthy Pinot Noir with profound depth and supreme terroir expression.'
    },
    jory: {
      title: 'Jory',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Colluvium and residuum derived from sedimentary and basic igneous bedrock',
      awc: '0.14-0.18 in/in',
      cec: '20-30 meq/100g',
      description: 'The Jory series represents some of Oregon\'s most iconic terroir regions, serving as the official state soil and consisting of very deep, well-drained soils formed from ancient volcanic basalt on the foothills surrounding the Willamette Valley. These fine-textured soils feature high clay content (45-60 percent) with distinctive reddish colors from iron-rich volcanic parent material, extending to depths over 60 inches. The volcanic origin creates wines with bright red cherry and red-fruit flavor profiles, distinctive floral aromatics, and spice notes, with softer, well-integrated tannins and excellent acidity retention even in warm years. The red, iron-rich volcanic soils create tight, well-formed small clusters that intensify flavors and structure in Pinot Noir while providing excellent water retention capabilities. For Willamette Valley viticulture, Jory soils represent the quintessential expression of volcanic terroir, producing wines of exceptional elegance, complexity, and aging potential that embody the signature characteristics Oregon Pinot Noir is globally renowned for. Jory is known for combining power with finesse through the unique mineral composition and water-holding properties of ancient basaltic deposits.'
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
    melbourne: {
      title: 'Melbourne',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Weathered siltstone and sandstone',
      awc: '0.14-0.18 in/in',
      cec: '18-30 meq/100g',
      description: 'Melbourne soils developed from ancient sedimentary rocks and contain significant clay content (35-60%) that naturally regulates water availability to vines during Oregon\'s dry growing season. The clay-rich subsoils force roots to work harder for water and nutrients, naturally limiting yields and concentrating flavors in the grapes. These hillside soils, found at elevations between 200-1,200 feet, produce Pinot Noir with notable depth and structure, often showing darker fruit profiles and earthier characteristics than wines from volcanic soils. The high cation exchange capacity means Melbourne soils hold nutrients exceptionally well, contributing to the complex mineral notes and firm tannin structure that give Willamette Valley wines from these sites their distinctive power and longevity.'
    },
    melby: {
      title: 'Melby',
      soilDepthToBedrock: '40-60 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Colluvium and residuum weathered from sedimentary rock',
      awc: '0.14-0.17 in/in',
      cec: '18-28 meq/100g',
      description: 'The Melby series represents one of the most distinctive sedimentary terroirs found in the higher elevations of the Oregon Coast Range, where ancient marine sedimentary rocks have weathered into clay-rich soils that produce wines of exceptional depth and complexity. The characteristic 7.5YR hue and strong brown coloration of these soils is what really shows their sedimentary origin and high clay content, which contributes to wines with distinctive earthy minerality and bold structure. For viticulture, Melby soils offer a balance of drainage and water retention, with their moderately slow permeability creating natural vine stress during the growing season while maintaining sufficient moisture reserves for sustained growth. The higher elevation sites where these soils occur provide cooler microclimates and extended growing seasons, allowing for the development of complex phenolic compounds and natural acidity that make Melby vineyard sites increasingly prized for producing age-worthy wines with pronounced terroir characteristics and exceptional longevity.'
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
    newberg: {
      title: 'Newberg',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Somewhat Excessively Drained',
      parentMaterial: 'Alluvium from sedimentary and igneous rocks',
      awc: '0.10-0.15 in/in',
      cec: '8-15 meq/100g',
      description: 'Newberg soils occupy the active floodplains and lower terraces of the Willamette Valley, where recent alluvial deposits from mixed sedimentary and igneous sources create coarse-loamy soils with rapid drainage and lower water-holding capacity. These somewhat excessively drained soils, subject to occasional flooding, present unique challenges for viticulture with their sandy textures and limited nutrient retention, requiring careful irrigation management to maintain vine health. While traditionally avoided for premium wine production due to their excessive drainage and lower fertility, strategically managed Newberg sites can produce lighter-bodied Pinot Noir with delicate fruit expression and bright acidity, offering freshness and early approachability. The periodic flood risk and coarse texture make these soils more suitable for annual crops and vegetables, though some innovative growers have found success with certain white varieties that benefit from the stress-inducing drainage and produce wines with crisp, mineral-driven profiles that complement the Willamette Valley\'s portfolio.'
    },
    olyic: {
      title: 'Olyic',
      soilDepthToBedrock: '40-60+ inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Residuum and colluvium weathered from basalt',
      awc: '0.13-0.16 in/in',
      cec: '15-25 meq/100g',
      description: 'The Olyic series represents a distinctive volcanic terroir found primarily in the higher elevations of the Oregon Coast Range, where ancient basaltic bedrock has weathered over millennia to create complex, mineral-rich soils prized by progressive winemakers seeking unique vineyard sites. This deep, well-drained soil forms from the weathering of basaltic lava flows, creating a fine-loamy profile with excellent structure and moderate water-holding capacity that supports sustainable viticulture without irrigation. The basaltic parent material imparts distinctive mineralogical characteristics including iron-rich concretions and a characteristic reddish-brown coloration, contributing to wines with pronounced mineral complexity and distinctive terroir expression. For viticulture, Olyic soils offer exceptional drainage combined with sufficient depth for root development, creating ideal conditions for producing concentrated, structured wines with distinctive volcanic characteristics. The higher elevation sites where these soils occur provide cooler growing conditions and extended hang time. This allows for the development of complex flavor compounds and natural acidity that make these vineyard sites increasingly sought after for premium wine production.'
    },
    panther: {
      title: 'Panther',
      soilDepthToBedrock: '40-60 inches',
      drainageClassification: 'Poorly Drained',
      parentMaterial: 'Colluvium over residuum from sedimentary and tuffaceous rock',
      awc: '0.19-0.23 in/in',
      cec: '40-50 meq/100g',
      description: 'The Panther soil series consists of poorly drained soils with distinctive vertic properties, characterized by seasonal waterlogging and the development of slickensides from shrinking and swelling of smectitic clays. These soils formed in colluvium from basalt and sedimentary rock over clayey residuum derived from tuffaceous or sedimentary rock, occurring in swales, concave slopes, and slump benches on low rolling hills throughout the Willamette Valley foothills. The distinctive seasonal saturation creates aquic conditions from December to April, which leads to iron accumulations and depletions that give the soil profile its characteristic mottled appearance. In Willamette Valley viticulture, Panther soils present significant challenges due to their poor drainage and seasonal waterlogging, which can lead to root diseases and stress in grapevines. While the soils possess high nutrient-holding capacity from their smectitic mineralogy, the prolonged wet conditions during the critical winter and spring months make them generally unsuitable for vineyard development, as most wine grape varieties require well-drained conditions to thrive and produce quality fruit.'
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
    salem: {
      title: 'Salem',
      soilDepthToBedrock: 'Very Deep (>60 inches)',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Loamy alluvium over sandy and gravelly alluvium',
      awc: '0.12-0.16 in/in',
      cec: '12-18 meq/100g',
      description: 'Salem soils are fine-loamy over sandy or sandy-skeletal soils that formed from loamy alluvium over sandy and gravelly alluvium deposited on ancient stream terraces throughout the Willamette Valley. These well-drained soils feature a thick mollic epipedon (a type of topsoil layer) and an argillic horizon with around 25 to 35 percent clay content. This provides excellent structure for vine root development and moderate water retention. The texture profile allows for good drainage in the upper soil layers while the underlying gravelly subsoil ensures excellent drainage during Oregon\'s wet winters, which prevents waterlogging that could damage vine roots. Salem soils are very well-suited for Pinot Noir production, as the moderate clay content and well-drained characteristics promote balanced vine vigor and stress. This leads to wines with concentrated flavors, good structure, and the earthy minerality that characterizes premium Willamette Valley Pinot Noir. The alluvial origin contributes to the soil\'s fertility and ability to support sustainable viticulture practices common throughout the region.'
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
    steiwer: {
      title: 'Steiwer',
      soilDepthToBedrock: '20-40 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Loamy colluvium from sedimentary bedrock mixed with glaciolacustrine deposits',
      awc: '0.15-0.18 in/in',
      cec: '15-25 meq/100g',
      description: 'The Steiwer series represents one of the most prized terroirs in Willamette Valley viticulture, formed from ancient marine sedimentary bedrock that creates distinctive hillside vineyard sites. This moderately deep soil develops from weathered sandstone and siltstone that originated millions of years ago when the region was covered by ocean, with these marine sediments later mixed with glacial lake deposits from the Missoula Floods. Wines from predominantly marine sedimentary soils show powerful, succulent black fruit notes, especially in warmer years, with dry, dusty, earth notes, producing what many consider to be some of the most structured and age-worthy Pinot Noirs in Oregon. The combination of good drainage and moderate depth to bedrock creates ideal vine stress conditions, while the fine-loamy texture provides sufficient water-holding capacity during dry summers, allowing for complex flavor development without the need for irrigation in most vintages.'
    },
    wellsdale: {
      title: 'Wellsdale',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Moderately Well Drained',
      parentMaterial: 'Marine sandstone and siltstone',
      awc: '0.14-0.18 in/in',
      cec: '10-20 meq/100g',
      description: 'Wellsdale soils formed from ancient marine sedimentary rocks that were once part of the Pacific Ocean floor, containing trace amounts of salt that influence wine character. These fine-loamy soils with 25-35% clay provide moderate water retention and good drainage, though a seasonal water table at 20-30 inches can influence root development and vine vigor. Found on gentle hillslopes at 200-700 feet elevation, Wellsdale soils are known for producing Pinot Noir with black fruit characteristics, including blackberry and dark plum, along with subtle spice notes and velvety textures. The marine sedimentary origin contributes unique mineral qualities and savory profiles that distinguish wines from these sites, offering good structure and moderate aging potential while maintaining the approachability that makes Oregon Pinot Noir so appealing.'
    },
    willakenzie: {
      title: 'Willakenzie',
      soilDepthToBedrock: '20-40 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Tuffaceous sandstone, arkosic sandstone, and siltstone',
      awc: '0.12-0.18 in/in',
      cec: '12-20 meq/100g',
      description: 'Willakenzie soils are moderately deep, well-drained fine-loamy soils formed from ancient marine sedimentary rocks including tuffaceous sandstone and siltstone deposited millions of years ago when the Pacific Ocean covered parts of Oregon. These soils occur on smooth convex hills along the margins of the Willamette Valley and are characterized by moderate depth to bedrock (20-40 inches) and fine-loamy texture with 24-35% clay content . The marine sedimentary parent material creates unique terroir that tends to warm and dry out earlier than volcanic soils, contributing to early ripening and producing wines with distinctive characteristics . Willakenzie soils are particularly prominent in areas like Ribbon Ridge and portions of Yamhill-Carlton AVA, where they produce elegant Pinot Noir wines with vibrant red fruit profiles, excellent energy and brightness, notable minerality, and complex savory undertones that reflect the ancient oceanic origins of these sedimentary deposits .'
    },
    witham: {
      title: 'Witham',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Somewhat Poorly Drained',
      parentMaterial: 'Clayey slope alluvium and colluvium derived from basalt',
      awc: '0.15-0.18 in/in',
      cec: '35-50 meq/100g',
      description: 'The Witham series is mainly characterized by its high clay content and unique vertic properties that create dramatic seasonal changes in soil behavior. This very deep, clay-rich soil forms from weathered basaltic materials that have accumulated in footslope and toeslope positions, creating extremely dense profiles with 50-60 percent clay content and distinctive slickensides that develop from the soil\'s shrink-swell behavior. The vertic nature of these soils means they crack dramatically to the surface during dry summer months, then swell and become nearly impermeable during wet winter periods when a seasonal water table develops. For viticulture, Witham soils present both significant challenges and unique opportunities. The extreme clay content and seasonal waterlogging require careful vineyard management and drainage considerations, but the high cation exchange capacity provides exceptional nutrient retention and the natural stress cycles create ideal conditions for producing intensely concentrated wines with solid structure and aging potential. Wines from Witham soils are known for their power, density, and distinctive mineral character that really shows off the basaltic parent material and unique clay-dominated soil.'
    },
    witzel: {
      title: 'Witzel',
      soilDepthToBedrock: '12-20 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Loamy colluvium derived from basalt',
      awc: '0.06-0.10 in/in',
      cec: '8-15 meq/100g',
      description: 'The Witzel series represents one of the most challenging yet rewarding terroirs in the Willamette Valley, consisting of shallow, well-drained soils formed from basaltic colluvium on hillsides and ridgetops. This skeletal soil series is characterized by high rock fragment content (40-75 percent) and reaches bedrock at just 12 to 20 inches depth, creating intense drainage that forces vine roots to penetrate fractured basalt for water and nutrients. The extremely shallow, broken basalt foundation provides natural water stress that concentrates flavors and limits yields, producing wines of exceptional intensity and mineral complexity. The volcanic terroir contributes distinctive mineral notes and structural backbone to Pinot Noir, while the limited water-holding capacity creates wines with pronounced concentration and age-worthy tannin structure. For Willamette Valley viticulture, Witzel soils represent the extreme expression of volcanic terroir, demanding careful site selection and rootstock matching but rewarding vintners with wines of remarkable depth and distinctive volcanic character.'
    },
    woodburn: {
      title: 'Woodburn',
      soilDepthToBedrock: 'Over 60 inches',
      drainageClassification: 'Moderately Well Drained',
      parentMaterial: 'Silty glaciolacustrine deposits',
      awc: '0.16-0.20 in/in',
      cec: '12-22 meq/100g',
      description: 'Woodburn soils formed from ancient Missoula Flood deposits that created the fertile valley floor of the Willamette Valley over 15,000 years ago. These deep, silty soils are prized for their excellent nutrient-holding capacity and consistent moisture availability throughout the growing season, supporting larger vine canopies and higher yields than hillside sites. The fine-silty texture and seasonal water table at 20-30 inches create conditions that produce Pinot Noir with softer tannins, darker fruit profiles, and earlier ripening characteristics. While wines from Woodburn soils may lack the complexity of those from volcanic or sedimentary hillside sites, they offer approachable fruit-forward profiles with good balance, making them ideal for producing consistent, commercially viable wines that showcase the accessibility of Willamette Valley Pinot Noir.'
    },
    yamhill: {
      title: 'Yamhill',
      soilDepthToBedrock: '20-40 inches',
      drainageClassification: 'Well Drained',
      parentMaterial: 'Colluvium from basalt',
      awc: '0.12-0.16 in/in',
      cec: '20-35 meq/100g',
      description: 'Yamhill soils are moderately deep, reddish-brown soils formed from ancient basalt flows that were part of the Columbia River Basalt Group formations. These fine-textured soils with 35-50% clay content provide moderate water retention while their shallower depth to bedrock naturally limits vine vigor and creates stress that concentrates flavors in the fruit. The basalt parent material contributes to distinctive mineral characteristics and darker fruit profiles in Willamette Valley Pinot Noir, often showing blackberry and dark cherry notes with earthy undertones. The combination of good drainage, restricted rooting depth, and high nutrient-holding capacity produces wines with firm tannin structure, concentrated flavors, and excellent aging potential that exemplify the power and complexity possible from Oregon\'s volcanic terroirs.'
    }
  };

  // Function to scroll to a specific soil series
  const scrollToSoilSeries = (key) => {
    const element = soilRefs.current[key];
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
      setSearchTerm('');
      setIsDropdownOpen(false);
    }
  };

  // Filter soil series based on search term
  const filteredSoilSeries = Object.entries(soilSeriesData).filter(([key, soil]) =>
    soil.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsDropdownOpen(e.target.value.length > 0);
  };

  // Handle selection from dropdown
  const handleSoilSelect = (key, title) => {
    scrollToSoilSeries(key);
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
              When you hover over soil areas on the map above, you'll see specific names like "Jory silty clay loam" or "Rickreall silty clay loam", these are soil series names that represent specific soil types with unique characteristics and formation histories. A soil series is a classification system that groups soils with similar characteristics, formation processes, and mineral compositions, think of it as a "family name" for soil types. So when you see names like "Jory silty loam" or "Rickreall silty loam," the first word (Jory or Rickreall) identifies the soil series, while the second part describes the texture. Each soil series has distinct properties that influence how grapevines grow, including drainage patterns, mineral content, water retention, and heat absorption, all of which directly impact the flavor profile, structure, and character of the wines produced. The Willamette Valley has a very diverse set of soil families, formed by ancient lava flows, marine sediments, and glacial deposits. These environments create distinct microclimates and growing conditions that contribute to this region's renowned terroir-driven wines. This section is meant to walk through each unique soil series found across the Willamette Valley's vineyards (not <i>every</i> soil series found in Oregon), which is designed to help you understand how the ground beneath the vines shapes the wine in your glass. The soil series types below are ordered alphabetically to reference quickly and easily after looking at one on the map above.
            </p>
          </div>
          <div className="soil-depth-image-container">
            <img 
              src={soilDepthImg} 
              alt="Soil depth illustration"
              className="soil-depth-image"
            />
          </div>
        </div>

        {/* Search Tool */}
        <div className="soil-search-container">
          <div className="soil-search-wrapper">
            <input
              type="text"
              placeholder="Search for a soil series..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="soil-search-input"
              onFocus={() => setIsDropdownOpen(searchTerm.length > 0)}
              onBlur={() => setTimeout(() => setIsDropdownOpen(false), 150)}
            />
            {isDropdownOpen && filteredSoilSeries.length > 0 && (
              <div className="soil-search-dropdown">
                {filteredSoilSeries.map(([key, soil]) => (
                  <div
                    key={key}
                    className="soil-search-option"
                    onClick={() => handleSoilSelect(key, soil.title)}
                  >
                    <span className="soil-option-name">{soil.title}</span>
                    <span className="soil-option-drainage">{soil.drainageClassification}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Soil Series List */}
        <div className="soil-series-list">
          {Object.entries(soilSeriesData).map(([key, soil], index) => (
            <div 
              key={key} 
              ref={el => soilRefs.current[key] = el}
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
