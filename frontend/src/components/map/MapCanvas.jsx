import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapCanvas.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapCanvas = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-123.1);
  const [lat, setLat] = useState(45.0);
  const [zoom, setZoom] = useState(7); // adjust this for zoom setting
  const [mapLoaded, setMapLoaded] = useState(false);

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

      // Add AVA fill layer (colored regions)
      map.current.addLayer({
        id: 'ava-fills',
        type: 'fill',
        source: 'avas',
        paint: {
          'fill-color': [
            'match',
            ['get', 'name'],
            'Dundee Hills', '#8B4513',
            'Eola-Amity Hills', '#228B22',
            'McMinnville', '#4682B4',
            'Ribbon Ridge', '#9932CC',
            'Chehalem Mountains', '#DC143C',
            'Yamhill-Carlton', '#FF8C00',
            'Willamette Valley', '#708090',
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
          
          // Get the bounds of the clicked AVA
          const bounds = new mapboxgl.LngLatBounds();
          const coords = feature.geometry.coordinates[0];
          
          // Handle MultiPolygon vs Polygon
          if (feature.geometry.type === 'MultiPolygon') {
            feature.geometry.coordinates.forEach(polygon => {
              polygon[0].forEach(coord => bounds.extend(coord));
            });
          } else {
            coords.forEach(coord => bounds.extend(coord));
          }

          // Smooth zoom to the AVA bounds
          map.current.fitBounds(bounds, {
            padding: { top: 50, bottom: 50, left: 50, right: 50 },
            duration: 2000, // 2 seconds smooth animation
            essential: true
          });
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
      center: [-123.1, 45.0],
      zoom: 7,
      duration: 2000,
      essential: true
    });
  };

  return (
    <div className="map-container">
      <div className="map-header">
        <h2>Explore the Willamette Valley AVAs</h2>
        <button onClick={resetView} className="reset-view-btn">
          Reset View
        </button>
      </div>
      <div ref={mapContainer} className="map" />
      <div className="map-info">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
    </div>
  );
};

export default MapCanvas;