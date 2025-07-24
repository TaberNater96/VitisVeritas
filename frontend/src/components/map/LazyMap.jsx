import React, { useState, useEffect } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import MapCanvas from './MapCanvas';
import './LazyMap.css';

const LazyMap = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [hasLoaded, setHasLoaded] = useState(false); // THIS IS THE KEY

    // Once visible, mark as loaded forever
    useEffect(() => {
        if (isVisible && !hasLoaded) {
            setHasLoaded(true); // This never goes back to false
        }
    }, [isVisible, hasLoaded]);

    return (
        <section ref={ref} className="lazy-map-section">
            {hasLoaded ? (
                <MapCanvas /> // Once loaded, always shows map
            ) : (
                <div className="map-placeholder">
                    <div className="loading-spinner"></div>
                    <p>Loading interactive map...</p>
                </div>
            )}
        </section>
    );
};

export default LazyMap;