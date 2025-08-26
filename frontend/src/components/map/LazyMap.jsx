import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import MapCanvas from './MapCanvas';
import './LazyMap.css';

const LazyMap = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [shouldStartLoading, setShouldStartLoading] = useState(false);

    // Start loading the map immediately after a short delay to allow hero content to load first
    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldStartLoading(true);
        }, 1000); // 1 second delay to allow hero and initial content to load

        return () => clearTimeout(timer);
    }, []);

    return (
        <section ref={ref} className="lazy-map-section">
            {shouldStartLoading ? (
                <MapCanvas isVisible={isVisible} />
            ) : (
                <div className="map-placeholder">
                    <div className="loading-spinner"></div>
                    <p>Preparing interactive map...</p>
                    <p style={{ fontSize: '0.9rem', opacity: 0.8, marginTop: '0.5rem' }}>
                        Loading will begin shortly
                    </p>
                </div>
            )}
        </section>
    );
};

export default LazyMap;