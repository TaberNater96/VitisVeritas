import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapCanvas.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapCanvas = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.6748);
  const [lat, setLat] = useState(44.7221);
  const [zoom, setZoom] = useState(7.20); // adjust this for zoom setting
  const [mapLoaded, setMapLoaded] = useState(false);
  const [selectedAva, setSelectedAva] = useState('');

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
      loadAVAData();
    });
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
          'fill-color': '#F5F5F5',
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
            'Chehalem Mountains', '#DC143C',
            'Dundee Hills', '#8B4513',
            'Eola-Amity Hills', '#228B22',
            'Laurelwood District', '#9370DB',
            'Lower Long Tom', '#FF6347',
            'McMinnville', '#4682B4',
            'Mt Pisgah Polk County', '#20B2AA',
            'Ribbon Ridge', '#9932CC',
            'Tualatin Hills', '#32CD32',
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

      // Add popup on hover to show AVA name
      const popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
      });

      map.current.on('mouseenter', 'ava-fills', (e) => {
        const feature = e.features[0];
        popup.setLngLat(e.lngLat)
          .setHTML(`<strong>${feature.properties.name}</strong>`)
          .addTo(map.current);
      });

      map.current.on('mouseleave', 'ava-fills', () => {
        popup.remove();
      });

    } catch (error) {
      console.error('Error loading AVA data:', error);
    }
  };

  // Reset to full Willamette Valley view
  const resetView = () => {
    map.current.flyTo({
      center: [-122.6748, 44.7221],
      zoom: 7.20,
      duration: 2000,
      essential: true
    });
    setSelectedAva(''); // Clear dropdown selection
  };

  // Available AVAs for dropdown with specific coordinates
  const avaCoordinates = {
    'Lower Long Tom': { lng: -123.3393, lat: 44.2213, zoom: 11.00 },
    'Mt Pisgah Polk County': { lng: -123.2863, lat: 44.8815, zoom: 12.33 },
    'Van Duzer': { lng: -123.2625, lat: 45.0120, zoom: 11.09 },
    'Eola-Amity Hills': { lng: -123.1205, lat: 45.0434, zoom: 10.42 },
    'McMinnville': { lng: -123.3314, lat: 45.1552, zoom: 11.09 },
    'Yamhill-Carlton': { lng: -123.1888, lat: 45.3271, zoom: 10.76 },
    'Dundee Hills': { lng: -123.0601, lat: 45.2781, zoom: 12.09 },
    'Ribbon Ridge': { lng: -123.0799, lat: 45.3555, zoom: 12.76 },
    'Chehalem Mountains': { lng: -122.9491, lat: 45.3815, zoom: 10.42 },
    'Laurelwood District': { lng: -122.9908, lat: 45.3961, zoom: 10.76 },
    'Tualatin Hills': { lng: -123.0940, lat: 45.5983, zoom: 10.09 }
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
      zoomToAva(selectedAvaName, true); // Pass true to indicate this is from dropdown
    }
  };

  return (
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
      <div ref={mapContainer} className="map" />
      <div className="map-info">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
    </div>
  );
};

export default MapCanvas;