'use client';

import React, { useState, useEffect, useRef } from 'react';
import { HYDERABAD_LOCATIONS } from '@/config/locations';
import { useCartStore } from '@/store/cartStore';

// Popular/frequently used areas shown by default
const POPULAR_LOCATIONS = [
    'Madhapur', 'Hitech City', 'Gachibowli', 'Banjara Hills', 'Jubilee Hills',
    'Kondapur', 'Ameerpet', 'Kukatpally', 'Mehdipatnam', 'Miyapur',
    'Secunderabad', 'Dilsukhnagar', 'Uppal', 'ECIL', 'Bowenpally',
    'Kompally', 'Bachupally', 'Madinaguda', 'Madhapur', 'LB Nagar'
];

const LocationSelector = () => {
    const { selectedLocation, setLocation } = useCartStore();
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);

    const filteredLocations = searchTerm.trim()
        ? HYDERABAD_LOCATIONS.filter(loc =>
            loc.toLowerCase().includes(searchTerm.toLowerCase())
          ).slice(0, 30)
        : POPULAR_LOCATIONS;

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };
        if (isOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const handleSelect = (loc) => {
        setLocation(loc);
        setIsOpen(false);
        setSearchTerm('');
    };

    return (
        <div className="location-selector-wrapper" ref={dropdownRef}>
            <div className="location-display" onClick={() => setIsOpen(!isOpen)}>
                <img src="https://img.icons8.com/3d-fluency/94/map-marker.png" alt="Location" className="location-pin-icon" style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                <span title={selectedLocation} className="location-label">
                    {selectedLocation || 'Select Location'}
                </span>
                <i className={`fas fa-chevron-down location-chevron ${isOpen ? 'open' : ''}`}></i>
            </div>

            {isOpen && (
                <div className="location-dropdown">
                    <div className="location-search-box">
                        <i className="fas fa-search location-search-icon"></i>
                        <input
                            type="text"
                            className="location-search-input"
                            placeholder="Search your area..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            autoFocus
                        />
                        {searchTerm && (
                            <button className="location-clear-btn" onClick={() => setSearchTerm('')}>
                                <i className="fas fa-times"></i>
                            </button>
                        )}
                    </div>

                    {!searchTerm && (
                        <div className="location-group-label" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <img src="/assets/Images/star.png" alt="star" style={{ width: '11px', height: '11px', objectFit: 'contain' }} /> Popular Areas
                        </div>
                    )}
                    {searchTerm && filteredLocations.length === 0 && (
                        <div className="location-empty">
                            <i className="fas fa-map-marker-alt mb-2 d-block"></i>
                            No area found for "{searchTerm}"
                        </div>
                    )}

                    <div className="location-list">
                        {filteredLocations.map((loc, i) => (
                            <div
                                key={i}
                                className={`location-item ${selectedLocation === loc ? 'active' : ''}`}
                                onClick={() => handleSelect(loc)}
                            >
                                <i className="fas fa-location-dot location-item-dot"></i>
                                <span>{loc}</span>
                                {selectedLocation === loc && <i className="fas fa-check location-check ms-auto"></i>}
                            </div>
                        ))}
                    </div>

                    {searchTerm && filteredLocations.length > 0 && (
                        <div className="location-footer-note">
                            Showing {filteredLocations.length} result{filteredLocations.length !== 1 ? 's' : ''}
                        </div>
                    )}
                </div>
            )}

            <style jsx>{`
                .location-selector-wrapper {
                    position: relative;
                    cursor: pointer;
                    min-width: 170px;
                    height: 100%;
                    flex-shrink: 0;
                }
                .location-display {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #1e293b;
                    font-weight: 600;
                    padding: 12px 16px 12px 12px;
                    border-radius: 8px;
                    background: transparent;
                    transition: background 0.2s;
                    font-size: 15px;
                    height: 100%;
                    user-select: none;
                }
                .location-display:hover {
                    background: #f8fafc;
                }
                .location-pin-icon {
                    color: var(--primary);
                    font-size: 18px;
                    flex-shrink: 0;
                }
                .location-label {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 115px;
                    font-size: 14px;
                }
                .location-chevron {
                    color: #94a3b8;
                    font-size: 12px;
                    flex-shrink: 0;
                    transition: transform 0.25s ease;
                    margin-left: auto;
                }
                .location-chevron.open {
                    transform: rotate(180deg);
                }
                .location-dropdown {
                    position: absolute;
                    top: calc(100% + 12px);
                    left: 0;
                    width: 290px;
                    background: #fff;
                    border-radius: 8px;
                    z-index: 9999;
                    overflow: hidden;
                    border: 1px solid #e2e8f0;
                    box-shadow: 0 16px 40px rgba(0,0,0,0.12);
                    animation: locDropIn 0.18s cubic-bezier(0.16, 1, 0.3, 1);
                }
                @keyframes locDropIn {
                    from { opacity: 0; transform: translateY(-8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .location-search-box {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 10px 14px;
                    border-bottom: 1px solid #f1f5f9;
                    background: #f8fafc;
                }
                .location-search-icon {
                    color: #94a3b8;
                    font-size: 14px;
                    flex-shrink: 0;
                }
                .location-search-input {
                    flex: 1;
                    border: none;
                    outline: none;
                    font-size: 14px;
                    font-weight: 500;
                    background: transparent;
                    color: #1e293b;
                }
                .location-search-input::placeholder { color: #94a3b8; }
                .location-clear-btn {
                    background: none;
                    border: none;
                    color: #94a3b8;
                    cursor: pointer;
                    padding: 0;
                    font-size: 12px;
                    line-height: 1;
                }
                .location-clear-btn:hover { color: #64748b; }
                .location-group-label {
                    padding: 8px 14px 4px;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                    color: #94a3b8;
                    background: #fff;
                }
                .location-list {
                    max-height: 260px;
                    overflow-y: auto;
                    scrollbar-width: thin;
                    scrollbar-color: #e2e8f0 transparent;
                }
                .location-list::-webkit-scrollbar { width: 4px; }
                .location-list::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 4px; }
                .location-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 14px;
                    color: #334155;
                    font-size: 14px;
                    cursor: pointer;
                    transition: background 0.15s;
                    font-weight: 500;
                    border-bottom: 1px solid #f8fafc;
                }
                .location-item:hover {
                    background: #fff5f0;
                    color: var(--primary);
                }
                .location-item.active {
                    background: #fff5f0;
                    color: var(--primary);
                    font-weight: 700;
                }
                .location-item-dot {
                    color: #cbd5e1;
                    font-size: 12px;
                    flex-shrink: 0;
                    transition: color 0.15s;
                }
                .location-item:hover .location-item-dot,
                .location-item.active .location-item-dot {
                    color: var(--primary);
                }
                .location-check {
                    color: var(--primary);
                    font-size: 12px;
                }
                .location-empty {
                    padding: 30px 14px;
                    text-align: center;
                    color: #94a3b8;
                    font-size: 13px;
                }
                .location-footer-note {
                    padding: 8px 14px;
                    font-size: 11px;
                    color: #94a3b8;
                    border-top: 1px solid #f1f5f9;
                    background: #f8fafc;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default LocationSelector;
