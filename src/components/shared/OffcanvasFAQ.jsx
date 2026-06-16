'use client';

import React, { useEffect } from 'react';
import FAQ from './FAQ';

const OffcanvasFAQ = ({ isOpen, onClose, items = [], title = "All Frequently Asked Questions" }) => {
    // Prevent background scrolling when offcanvas is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div 
                className={`faq-offcanvas-backdrop ${isOpen ? 'show' : ''}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`faq-offcanvas-drawer ${isOpen ? 'open' : ''}`}>
                <div className="faq-offcanvas-header d-flex justify-content-between align-items-center p-3 border-bottom bg-light">
                    <h5 className="mb-0 fw-bold font-outfit text-dark" style={{ fontSize: '1.1rem' }}>{title}</h5>
                    <button 
                        onClick={onClose} 
                        className="btn-close-custom btn border-0 p-1 d-flex align-items-center justify-content-center"
                        aria-label="Close"
                        style={{ background: 'none', cursor: 'pointer', outline: 'none' }}
                    >
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div className="faq-offcanvas-body flex-grow-1 overflow-y-auto">
                    <div className="offcanvas-faq-container">
                        <FAQ 
                            items={items} 
                            title="" 
                            subtitle="" 
                            compact={true} 
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default OffcanvasFAQ;
