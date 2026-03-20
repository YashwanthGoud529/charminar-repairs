'use client';

import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`scroll-container ${isVisible ? 'visible' : ''}`}>
            <button 
                onClick={scrollToTop} 
                className="scroll-btn floating-btn"
                aria-label="Scroll to top"
                title="Scroll to Top"
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    );
};

export default ScrollToTop;
