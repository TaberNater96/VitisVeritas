import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapCanvas.css';
import '../map/LazyMap.css';
import wineryIcon from '../../assets/images/vv_logo_nb.png';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapCanvas = ({ isVisible = true }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.9427);
  const [lat, setLat] = useState(44.8850);
  const [zoom, setZoom] = useState(7.20); // adjust this for zoom setting
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedAva, setSelectedAva] = useState('');
  const [selectedCounties, setSelectedCounties] = useState([]);
  const [countiesData, setCountiesData] = useState([]);
  const [loadingSoils, setLoadingSoils] = useState({});
  const [loadingStates, setLoadingStates] = useState({
    counties: false,
    avas: false,
    wineries: false,
    allSoils: false
  });
  const [elevationEnabled, setElevationEnabled] = useState(true); // Default to enabled
  const activePopupRef = useRef(null);
  const loadingQueueRef = useRef([]);

  // Initialize map
  useEffect(() => {
    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12', // custom terrain style
      center: [lng, lat],
      zoom: zoom,
      pitch: 0, // keep it 2D for now
      bearing: 0
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Map event listeners
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    map.current.on('load', () => {
      setMapLoaded(true);
      
      // Start optimized loading sequence
      loadDataSequentially();
      
      // Load elevation contours by default
      loadElevationContours();
      
      // Add global mousemove handler to manage soil popups better
      map.current.on('mousemove', (e) => {
        // Check if mouse is over any soil layer
        const features = map.current.queryRenderedFeatures(e.point);
        const soilFeatures = features.filter(f => f.source && f.source.endsWith('-soils'));
        const wineryFeatures = features.filter(f => f.source === 'wineries');
        
        // If over a winery, hide soil popup to prioritize winery popup
        if (wineryFeatures.length > 0 && activePopupRef.current) {
          activePopupRef.current.remove();
          activePopupRef.current = null;
          map.current.getCanvas().style.cursor = 'pointer';
        }
        // If not over any soil features and not over wineries, remove popup
        else if (soilFeatures.length === 0 && wineryFeatures.length === 0 && activePopupRef.current) {
          activePopupRef.current.remove();
          activePopupRef.current = null;
          map.current.getCanvas().style.cursor = '';
        }
      });
    });

    // Cleanup function
    return () => {
      if (activePopupRef.current) {
        activePopupRef.current.remove();
        activePopupRef.current = null;
      }
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  // Optimized sequential loading function
  const loadDataSequentially = async () => {
    try {
      // Step 1: Load counties index (lightweight, needed for soil data later)
      console.log('Loading counties index...');
      setLoadingStates(prev => ({ ...prev, counties: true }));
      await loadCountiesIndex();
      setLoadingStates(prev => ({ ...prev, counties: false }));

      // Step 2: Load AVAs (priority geojson - most important for user interaction)
      console.log('Loading AVA data...');
      setLoadingStates(prev => ({ ...prev, avas: true }));
      await loadAVAData();
      setLoadingStates(prev => ({ ...prev, avas: false }));

      // Step 3: Load wineries (secondary priority)
      console.log('Loading winery data...');
      setLoadingStates(prev => ({ ...prev, wineries: true }));
      await loadWineryData();
      setLoadingStates(prev => ({ ...prev, wineries: false }));

      // Step 4: Preload all soil data in background (largest files, lowest priority)
      console.log('Starting background loading of all soil data...');
      setLoadingStates(prev => ({ ...prev, allSoils: true }));
      await preloadAllSoilData();
      setLoadingStates(prev => ({ ...prev, allSoils: false }));
      
      console.log('All data loading completed!');
    } catch (error) {
      console.error('Error in sequential loading:', error);
    }
  };

  // Preload all soil data in the background
  const preloadAllSoilData = async () => {
    if (!countiesData || countiesData.length === 0) {
      console.warn('Counties data not available for soil preloading');
      return;
    }

    const soilLoadPromises = countiesData.map(async (county) => {
      try {
        console.log(`Preloading soil data for ${county.name}...`);
        // Don't add to map yet, just fetch and cache the data
        const response = await fetch(`/data/${county.name}_soils.geojson`);
        if (!response.ok) {
          throw new Error(`Failed to preload ${county.name} soil data`);
        }
        const soilData = await response.json();
        
        // Store in a cache for later use
        if (!window.soilDataCache) {
          window.soilDataCache = {};
        }
        window.soilDataCache[county.name] = soilData;
        
        console.log(`Successfully preloaded soil data for ${county.name}`);
      } catch (error) {
        console.warn(`Failed to preload soil data for ${county.name}:`, error);
      }
    });

    // Load all soil data concurrently (but after other data loads sequentially)
    await Promise.allSettled(soilLoadPromises);
    console.log('Soil data preloading completed');
  };

  // Load counties index data
  const loadCountiesIndex = async () => {
    try {
      const response = await fetch('/data/counties_index.json');
      const data = await response.json();
      setCountiesData(data.counties);
    } catch (error) {
      console.error('Error loading counties index:', error);
      throw error; // Re-throw to handle in sequential loading
    }
  };

  // Effect to cleanup soil layers when component unmounts
  useEffect(() => {
    return () => {
      selectedCounties.forEach(countyName => {
        removeSoilData(countyName);
      });
    };
  }, []);

  // Load AVA GeoJSON data
  const loadAVAData = async () => {
    try {
      // Load your AVA data
      const response = await fetch('/data/avas.geojson');
      const avaData = await response.json();

      // Add AVA source
      map.current.addSource('avas', {
        type: 'geojson',
        data: avaData
      });

      // Add Willamette Valley (parent AVA) fill layer first (bottom layer)
      map.current.addLayer({
        id: 'willamette-valley-fill',
        type: 'fill',
        source: 'avas',
        filter: ['==', 'name', 'Willamette Valley'],
        paint: {
          'fill-color': '#0c6502',
          'fill-opacity': 0.4
        }
      });

      // Add sub-AVAs fill layer on top (interactive layer)
      map.current.addLayer({
        id: 'ava-fills',
        type: 'fill',
        source: 'avas',
        filter: ['!=', 'name', 'Willamette Valley'],
        paint: {
          'fill-color': [
            'match',
            ['get', 'name'],
            'Chehalem Mountains', '#ffffff',
            'Dundee Hills', '#8B4513',
            'Eola-Amity Hills', '#052986',
            'Laurelwood District', '#ddcd17',
            'Lower Long Tom', '#d30707',
            'McMinnville', '#4682B4',
            'Mt Pisgah Polk County', '#20B2AA',
            'Ribbon Ridge', '#6e03a3',
            'Tualatin Hills', '#6d6d6d',
            'Van Duzer', '#FF69B4',
            'Yamhill-Carlton', '#FF8C00',
            '#696969'
          ],
          'fill-opacity': 0.6
        }
      });

      // Add AVA border layer
      map.current.addLayer({
        id: 'ava-borders',
        type: 'line',
        source: 'avas',
        paint: {
          'line-color': '#333333',
          'line-width': 2,
          'line-opacity': 0.8
        }
      });

      // Add click interaction for zooming
      map.current.on('click', 'ava-fills', (e) => {
        if (e.features.length > 0) {
          const feature = e.features[0];
          const avaName = feature.properties.name;
          
          // Don't zoom if clicking on Willamette Valley (parent AVA)
          if (avaName === 'Willamette Valley') {
            return;
          }
          
          zoomToAva(avaName);
        }
      });

      // Change cursor on hover
      map.current.on('mouseenter', 'ava-fills', () => {
        map.current.getCanvas().style.cursor = 'pointer';
      });

      map.current.on('mouseleave', 'ava-fills', () => {
        map.current.getCanvas().style.cursor = '';
      });

    } catch (error) {
      console.error('Error loading AVA data:', error);
      throw error; // Re-throw to handle in sequential loading
    }
  };

  // Load Winery GeoJSON data
  const loadWineryData = async () => {
    try {
      // Load winery data
      console.log('Loading winery data...');
      const response = await fetch('/data/wineries.geojson');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const wineryData = await response.json();
      console.log('Winery data loaded:', wineryData.features.length, 'wineries');

      // Load the winery icon image
      const image = new Image();
      image.onload = () => {
        console.log('Winery icon loaded successfully');
        
        // Add the image to the map
        map.current.addImage('winery-icon', image);

        // Add winery source
        map.current.addSource('wineries', {
          type: 'geojson',
          data: wineryData
        });

        // Add winery layer (make sure it's on top of AVA layers)
        map.current.addLayer({
          id: 'wineries',
          type: 'symbol',
          source: 'wineries',
          layout: {
            'icon-image': 'winery-icon',
            'icon-size': 0.035,
            'icon-allow-overlap': true,
            'icon-ignore-placement': false,
            'icon-anchor': 'bottom' // anchor to bottom so the point is at the actual location
          },
          paint: {
            'icon-opacity': 1.0 // full opacity
          }
        });

        console.log('Winery layer added to map');

        // Add hover popup for winery names
        const wineryPopup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: [0, -25], // Reduce vertical offset to bring closer to icon
          anchor: 'bottom',
          className: 'winery-hover-popup'
        });

        map.current.on('mouseenter', 'wineries', (e) => {
          map.current.getCanvas().style.cursor = 'pointer';
          const feature = e.features[0];
          // Use the geometry coordinates instead of mouse event coordinates for consistent positioning
          const coordinates = e.features[0].geometry.coordinates.slice();
          
          // Ensure consistent positioning by normalizing longitude
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
          
          wineryPopup.setLngLat(coordinates)
            .setHTML(`<strong>${feature.properties.name}</strong>`)
            .addTo(map.current);
        });

        map.current.on('mouseleave', 'wineries', () => {
          map.current.getCanvas().style.cursor = '';
          wineryPopup.remove();
        });

        // Add click popup for detailed winery information
        map.current.on('click', 'wineries', (e) => {
          const feature = e.features[0];
          const properties = feature.properties;
          
          // Use the geometry coordinates instead of mouse event coordinates for consistent positioning
          const coordinates = e.features[0].geometry.coordinates.slice();
          
          // Ensure consistent positioning by normalizing longitude
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
          
          // Format phone number
          const formatPhoneNumber = (phone) => {
            if (!phone) return '';
            const cleaned = phone.replace(/\D/g, '');
            if (cleaned.length === 11 && cleaned.startsWith('1')) {
              const withoutCountryCode = cleaned.substring(1);
              return `(${withoutCountryCode.substring(0, 3)}) ${withoutCountryCode.substring(3, 6)}-${withoutCountryCode.substring(6)}`;
            } else if (cleaned.length === 10) {
              return `(${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6)}`;
            }
            return phone;
          };

          // Create popup content
          let popupContent = `
            <div class="winery-popup">
              <h3 class="winery-name">${properties.name}</h3>
              <hr class="winery-divider">
              <p class="winery-description">${properties.description}</p>
              <hr class="winery-divider">
              <div class="winery-details">
          `;

          // Add contact information with separators
          const contactInfo = [];
          
          if (properties.phone) {
            contactInfo.push(formatPhoneNumber(properties.phone));
          }
          
          if (properties.address) {
            contactInfo.push(properties.address);
          }
          
          if (properties.website_url && properties.website_url.trim() !== '') {
            contactInfo.push(`<a href="${properties.website_url}" target="_blank" rel="noopener noreferrer">Visit Website</a>`);
          }

          popupContent += contactInfo.join(' | ');
          popupContent += `
              </div>
            </div>
          `;

          new mapboxgl.Popup({ 
            offset: [0, -35], // Reduce vertical offset to bring closer to icon
            closeButton: true,
            closeOnClick: true,
            anchor: 'bottom',
            className: 'winery-detail-popup',
            maxWidth: '450px'
          })
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map.current);
        });
      };

      image.onerror = () => {
        console.error('Failed to load winery icon:', wineryIcon);
      };

      image.src = wineryIcon;

    } catch (error) {
      console.error('Error loading winery data:', error);
      throw error; // Re-throw to handle in sequential loading
    }
  };

  // Reset to full Willamette Valley view
  const resetView = () => {
    map.current.flyTo({
      center: [-122.9427, 44.8850],
      zoom: 7.20,
      duration: 2000,
      essential: true
    });
    setSelectedAva(''); // clear dropdown selection
  };

  // Toggle elevation contour lines
  const toggleElevation = () => {
    if (!map.current || !mapLoaded) return;

    if (elevationEnabled) {
      // Remove elevation layers
      if (map.current.getLayer('contour-lines')) {
        map.current.removeLayer('contour-lines');
      }
      if (map.current.getLayer('contour-labels')) {
        map.current.removeLayer('contour-labels');
      }
      if (map.current.getSource('contour-source')) {
        map.current.removeSource('contour-source');
      }
      setElevationEnabled(false);
    } else {
      // Load elevation contours
      loadElevationContours();
      setElevationEnabled(true);
    }
  };

  // Function to load elevation contours
  const loadElevationContours = () => {
    if (!map.current) return;

    // Add elevation contour lines
    map.current.addSource('contour-source', {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-terrain-v2'
    });

    // Add contour lines layer
    map.current.addLayer({
      id: 'contour-lines',
      type: 'line',
      source: 'contour-source',
      'source-layer': 'contour',
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#4d3013ff',
        'line-width': [
          'interpolate',
          ['linear'],
          ['zoom'],
          7, 2.0,
          10, 3.5,
          15, 5.0
        ],
        'line-opacity': 1.0
      },
      filter: [
        'all',
        ['==', ['get', 'index'], 5],
        ['>=', ['get', 'ele'], 0]
      ]
    });

    // Add contour labels layer
    map.current.addLayer({
      id: 'contour-labels',
      type: 'symbol',
      source: 'contour-source',
      'source-layer': 'contour',
      layout: {
        'text-field': [
          'concat',
          ['to-string', ['get', 'ele']],
          'm'
        ],
        'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
        'text-size': [
          'interpolate',
          ['linear'],
          ['zoom'],
          7, 12,
          10, 14,
          15, 18
        ],
        'symbol-placement': 'line'
      },
      paint: {
        'text-color': '#482d12ff',
        'text-halo-color': '#ffffff',
        'text-halo-width': 2
      },
      filter: [
        'all',
        ['==', ['get', 'index'], 5],
        ['>=', ['get', 'ele'], 0]
      ]
    });
  };

  // Available AVAs for dropdown with specific coordinates
  const avaCoordinates = {
    'Lower Long Tom': { lng: -123.3458, lat: 44.2402, zoom: 11.00 },
    'Mt Pisgah Polk County': { lng: -123.2904, lat: 44.8843, zoom: 12.33 },
    'Van Duzer': { lng: -123.2602, lat: 45.0232, zoom: 11.09 },
    'Eola-Amity Hills': { lng: -123.1393, lat: 45.0664, zoom: 10.42 },
    'McMinnville': { lng: -123.3440, lat: 45.1727, zoom: 11.09 },
    'Yamhill-Carlton': { lng: -123.1879, lat: 45.3443, zoom: 10.43 },
    'Dundee Hills': { lng: -123.0608, lat: 45.2854, zoom: 11.74 },
    'Ribbon Ridge': { lng: -123.0776, lat: 45.3607, zoom: 12.43 },
    'Chehalem Mountains': { lng: -122.9660, lat: 45.4017, zoom: 10.42 },
    'Laurelwood District': { lng: -123.0030, lat: 45.4158, zoom: 10.76 },
    'Tualatin Hills': { lng: -123.1397, lat: 45.6283, zoom: 9.76 }
  };

  const avaList = Object.keys(avaCoordinates);

  // Function to zoom to specific AVA with predefined coordinates
  const zoomToAva = (avaName, fromDropdown = false) => {
    const coords = avaCoordinates[avaName];
    if (!coords || !map.current) return;
    
    const currentZoom = map.current.getZoom();
    const intermediateZoom = 8.50; // Zoom out farther for better transition
    const defaultZoom = 7.20;
    
    // Only use zoom out/in animation if called from dropdown
    if (fromDropdown && currentZoom > defaultZoom + 0.5) {
      // Get current center to zoom out in place
      const currentCenter = map.current.getCenter();
      
      map.current.flyTo({
        center: [currentCenter.lng, currentCenter.lat],
        zoom: intermediateZoom,
        duration: 2500, // Slower zoom out
        essential: true
      });
      
      // After zoom out completes, zoom into the specific AVA
      setTimeout(() => {
        map.current.flyTo({
          center: [coords.lng, coords.lat],
          zoom: coords.zoom,
          duration: 3500, // Slower zoom in
          essential: true
        });
      }, 2500);
    } else {
      // Direct zoom to AVA (for clicks or dropdown from default view)
      map.current.flyTo({
        center: [coords.lng, coords.lat],
        zoom: coords.zoom,
        duration: 3500, // Slower zoom in
        essential: true
      });
    }
  };

  // Handle dropdown change
  const handleAvaSelection = (e) => {
    const selectedAvaName = e.target.value;
    setSelectedAva(selectedAvaName);
    if (selectedAvaName) {
      zoomToAva(selectedAvaName, true); // pass true to indicate this is from dropdown
    }
  };

  // Load soil data for a specific county
  const loadSoilData = async (countyName) => {
    if (!map.current || !mapLoaded) return;

    const sourceId = `${countyName}-soils`;
    const layerId = `${countyName}-soils-layer`;

    // Check if already loaded
    if (map.current.getSource(sourceId)) {
      return;
    }

    setLoadingSoils(prev => ({ ...prev, [countyName]: true }));

    try {
      let soilData;
      
      // Check if data is already cached from preloading
      if (window.soilDataCache && window.soilDataCache[countyName]) {
        console.log(`Using cached soil data for ${countyName}`);
        soilData = window.soilDataCache[countyName];
      } else {
        console.log(`Fetching soil data for ${countyName}...`);
        const response = await fetch(`/data/${countyName}_soils.geojson`);
        if (!response.ok) {
          throw new Error(`Failed to load ${countyName} soil data`);
        }
        soilData = await response.json();
      }

      // Add soil data source
      map.current.addSource(sourceId, {
        type: 'geojson',
        data: soilData
      });

      // Add soil fill layer (semi-transparent)
      map.current.addLayer({
        id: layerId,
        type: 'fill',
        source: sourceId,
        paint: {
          'fill-color': [
            'case',
            ['has', 'mukey'],
            [
              'interpolate',
              ['linear'],
              ['%', ['to-number', ['get', 'mukey']], 6],
              0, '#DEB887',
              1, '#D2B48C', 
              2, '#BC8F8F',
              3, '#F4A460',
              4, '#CD853F',
              5, '#A0522D'
            ],
            '#D2B48C'
          ],
          'fill-opacity': 0.6
        }
      }, 'ava-fills'); // Insert before AVA fills so AVAs are on top

      // Add soil border layer
      map.current.addLayer({
        id: `${layerId}-border`,
        type: 'line',
        source: sourceId,
        paint: {
          'line-color': '#8B4513',
          'line-width': 0.5,
          'line-opacity': 0.8
        }
      }, 'ava-fills');

      // Add hover popup for soil information with better responsiveness
      map.current.on('mousemove', layerId, (e) => {
        if (e.features.length > 0) {
          map.current.getCanvas().style.cursor = 'pointer';
          const feature = e.features[0];
          const coordinates = e.lngLat;
          
          // Remove existing popup before creating new one
          if (activePopupRef.current) {
            activePopupRef.current.remove();
          }
          
          // Create new popup at current mouse position
          activePopupRef.current = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false,
            offset: [0, -10],
            className: 'soil-hover-popup'
          })
          .setLngLat(coordinates)
          .setHTML(`
            <div class="soil-popup-content">
              <strong>${feature.properties.muname || 'Unknown Soil Type'}</strong>
              <br><em>${(feature.properties.county || countyName).charAt(0).toUpperCase() + (feature.properties.county || countyName).slice(1)} County</em>
            </div>
          `)
          .addTo(map.current);
        }
      });

      map.current.on('mouseleave', layerId, () => {
        map.current.getCanvas().style.cursor = '';
        if (activePopupRef.current) {
          activePopupRef.current.remove();
          activePopupRef.current = null;
        }
      });

      console.log(`Loaded ${countyName} soil data with ${soilData.features.length} features`);

    } catch (error) {
      console.error(`Error loading ${countyName} soil data:`, error);
    } finally {
      setLoadingSoils(prev => ({ ...prev, [countyName]: false }));
    }
  };

  // Remove soil data for a specific county
  const removeSoilData = (countyName) => {
    if (!map.current) return;

    const sourceId = `${countyName}-soils`;
    const layerId = `${countyName}-soils-layer`;
    const borderLayerId = `${layerId}-border`;

    // Remove event listeners first
    if (map.current.getLayer(layerId)) {
      map.current.off('mousemove', layerId);
      map.current.off('mouseleave', layerId);
    }

    // Remove layers
    if (map.current.getLayer(layerId)) {
      map.current.removeLayer(layerId);
    }
    if (map.current.getLayer(borderLayerId)) {
      map.current.removeLayer(borderLayerId);
    }

    // Remove source
    if (map.current.getSource(sourceId)) {
      map.current.removeSource(sourceId);
    }
  };

  // Handle county selection change
  const handleCountySelection = (countyName) => {
    const isSelected = selectedCounties.includes(countyName);
    
    if (isSelected) {
      // Remove county
      setSelectedCounties(prev => prev.filter(c => c !== countyName));
      removeSoilData(countyName);
    } else {
      // Add county - load data after map is loaded
      setSelectedCounties(prev => [...prev, countyName]);
      if (mapLoaded) {
        // Small delay to ensure proper loading order
        setTimeout(() => {
          loadSoilData(countyName);
        }, 100);
      }
    }
  };

  // AVA color mapping for legend
  const avaColors = {
    'Chehalem Mountains': '#ffffff',
    'Dundee Hills': '#8B4513',
    'Eola-Amity Hills': '#052986',
    'Laurelwood District': '#ddcd17',
    'Lower Long Tom': '#d30707',
    'McMinnville': '#4682B4',
    'Mt Pisgah Polk County': '#20B2AA',
    'Ribbon Ridge': '#6e03a3',
    'Tualatin Hills': '#6d6d6d',
    'Van Duzer': '#FF69B4',
    'Yamhill-Carlton': '#FF8C00'
  };

  return (
    <div className="map-wrapper" style={{ 
      opacity: isVisible ? 1 : 0, 
      transition: 'opacity 0.5s ease-in-out',
      pointerEvents: isVisible ? 'auto' : 'none'
    }}>
      {/* Show loading overlay when map is loading but not visible */}
      {!isVisible && (loadingStates.counties || loadingStates.avas || loadingStates.wineries) && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '1rem',
          borderRadius: '8px',
          textAlign: 'center',
          zIndex: 1000,
          backdropFilter: 'blur(5px)'
        }}>
          <div className="loading-spinner"></div>
          <p>Loading map data...</p>
          {loadingStates.counties && <p style={{ fontSize: '0.8rem', margin: '0.2rem 0' }}>📊 Counties index</p>}
          {loadingStates.avas && <p style={{ fontSize: '0.8rem', margin: '0.2rem 0' }}>🗺️ AVA regions</p>}
          {loadingStates.wineries && <p style={{ fontSize: '0.8rem', margin: '0.2rem 0' }}>🍷 Wineries</p>}
          {loadingStates.allSoils && <p style={{ fontSize: '0.8rem', margin: '0.2rem 0' }}>🌱 Soil data (background)</p>}
        </div>
      )}
      
      <div className="ava-legend">
        <h3>Willamette Valley AVA Regions</h3>
        <div className="legend-items">
          {Object.entries(avaColors).map(([avaName, color]) => (
            <div key={avaName} className="legend-item">
              <div 
                className="legend-color" 
                style={{ backgroundColor: color }}
              ></div>
              <span className="legend-label">{avaName}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="map-container">
        <div className="map-header">
          <h2>Explore the Willamette Valley AVAs</h2>
          <div className="map-controls">
            <select 
              value={selectedAva} 
              onChange={handleAvaSelection}
              className="ava-dropdown"
            >
              <option value="">Select an AVA</option>
              {avaList.map(ava => (
                <option key={ava} value={ava}>{ava}</option>
              ))}
            </select>
            <button onClick={resetView} className="reset-view-btn">
              Reset View
            </button>
          </div>
        </div>

        <div className="elevation-container">
          <h3>Toggle Elevation (Zoom In To View)</h3>
          <div className="elevation-toggle-wrapper">
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={elevationEnabled}
                onChange={toggleElevation}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="soil-selector">
          <h3>Select Willamette Valley Counties to View Soil Types</h3>
          <div className="county-checkboxes">
            {countiesData.map((county) => (
              <label key={county.name} className="county-checkbox">
                <input
                  type="checkbox"
                  checked={selectedCounties.includes(county.name)}
                  onChange={() => handleCountySelection(county.name)}
                  disabled={loadingSoils[county.name]}
                />
                <span className="checkbox-text">
                  {county.display_name}
                  {loadingSoils[county.name] && <span className="loading-indicator"> (Loading...)</span>}
                </span>
              </label>
            ))}
          </div>
        </div>
        
        <div ref={mapContainer} className="map" />
        <div className="map-info">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
    </div>
  );
};

export default MapCanvas;