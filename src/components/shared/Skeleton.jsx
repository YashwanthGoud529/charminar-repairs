import React from 'react';

/**
 * A highly reusable Skeleton component for premium looking loading states.
 * Uses the .skeleton class from globals.css for shimmer animation.
 */
const Skeleton = ({ width = '100%', height = '20px', borderRadius = '8px', className = '' }) => {
    return (
        <div 
            className={`skeleton ${className}`} 
            style={{ 
                width, 
                height, 
                borderRadius, 
                display: 'block' 
            }} 
        />
    );
};

export default Skeleton;
