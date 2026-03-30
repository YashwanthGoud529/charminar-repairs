'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import Skeleton from './Skeleton';

/**
 * A professional Lazy Load component that uses Intersection Observer.
 * It only renders its children (or dynamic component) when it scrolls into view.
 */
const LazySection = ({ 
    children, 
    fallback, 
    threshold = 0.1, 
    rootMargin = '100px',
    className = '',
    id
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [threshold, rootMargin]);

    return (
        <div ref={sectionRef} id={id} className={className} style={{ minHeight: !isVisible ? '200px' : 'auto' }}>
            {isVisible ? (
                <Suspense fallback={fallback || <DefaultFallback />}>
                    {children}
                </Suspense>
            ) : (
                fallback || <DefaultFallback />
            )}
        </div>
    );
};

const DefaultFallback = () => (
    <div className="container py-5">
        <Skeleton height="40px" width="60%" className="mb-4" />
        <Skeleton height="200px" width="100%" borderRadius="12px" />
    </div>
);

export default LazySection;
