import { useState, useEffect, useRef } from 'react';

// Custom React hook to observe if an element is visible in the viewport
const useIntersectionObserver = (options = {}) => {
    // State to track if the element is intersecting (visible)
    const [isIntersecting, setIsIntersecting] = useState(false);
    // Ref to attach to the DOM element you want to observe
    const ref = useRef(null);

    useEffect(() => {
        // Create an IntersectionObserver instance
        const observer = new IntersectionObserver(([entry]) => {
            // Update state when intersection changes
            setIsIntersecting(entry.isIntersecting);
        }, options);

        // Start observing the element if it exists
        if (ref.current) {
            observer.observe(ref.current);
        }

        // Cleanup: disconnect the observer when the component unmounts or options change
        return () => {
            observer.disconnect();
        };
    }, [options]); // Re-run effect if options change

    // Return the ref to attach to an element, and the intersection state
    return [ref, isIntersecting];
};

export default useIntersectionObserver;