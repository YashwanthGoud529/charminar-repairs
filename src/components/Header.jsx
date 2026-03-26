'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SERVICE_CANONICAL_MAP } from '@/config/services';
import { SERVICE_DATA_MAP } from '@/config/serviceData';
import { useCartStore } from '@/store/cartStore';
import LocationSelector from '@/components/shared/LocationSelector';

import './Header.css';

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const { cartItems } = useCartStore();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef(null);

    // Search bar states
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Typing effect for placeholder
    const SEARCH_TERMS = ['AC Repair', 'Washing Machine Repair', 'Fridge Repair'];
    const [currentTermIndex, setCurrentTermIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);

    // Search list includes canonical names AND data-rich service names
    const ALL_SERVICES = [
        ...Object.entries(SERVICE_CANONICAL_MAP).map(([name, slug]) => ({ name, slug })),
        ...Object.keys(SERVICE_DATA_MAP).map(name => ({ name, slug: SERVICE_CANONICAL_MAP[name] || name.toLowerCase().replace(/[^a-z0-9]+/g, '-') }))
    ].reduce((acc, current) => {
        if (!acc.find(item => item.name === current.name)) acc.push(current);
        return acc;
    }, []);

    useEffect(() => {
        const cursorInterval = setInterval(() => setShowCursor(prev => !prev), 500);
        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        const currentTerm = SEARCH_TERMS[currentTermIndex];
        let timeout;
        if (isTyping) {
            if (displayText.length < currentTerm.length) {
                timeout = setTimeout(() => setDisplayText(currentTerm.slice(0, displayText.length + 1)), 100);
            } else {
                timeout = setTimeout(() => setIsTyping(false), 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => setDisplayText(currentTerm.slice(0, displayText.length - 1)), 50);
            } else {
                setIsTyping(true);
                setCurrentTermIndex((prev) => (prev + 1) % SEARCH_TERMS.length);
            }
        }
        return () => clearTimeout(timeout);
    }, [displayText, isTyping, currentTermIndex]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle Search Filter
    useEffect(() => {
        if (searchQuery.trim().length > 1) {
            const filtered = ALL_SERVICES.filter(s =>
                s.name.toLowerCase().includes(searchQuery.toLowerCase())
            ).slice(0, 6);
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    }, [searchQuery]);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSuggestionClick = (slug) => {
        router.push(`/${slug}/`);
        setSearchQuery('');
        setShowSuggestions(false);
    };

    const isActive = (path) => {
        if (!pathname) return false;
        if (path === '/') return pathname === '/';
        const normPath = path.replace(/\/$/, '');
        const normPathname = pathname.replace(/\/$/, '');
        return normPathname === normPath || normPathname.startsWith(`${normPath}/`);
    };

    return (
        <header className={`header-container-v3 ${scrolled ? 'scrolled' : ''}`}>
            <nav className="header-nav-main-v3">
                <div className="container-fluid px-lg-5">
                    <div className="nav-row-v3">
                        <div className="nav-left-v3">
                            <div className="logo-section-v3">
                                <Link href="/">
                                    <img src="/images/charminar-repairs-logo.jpeg" alt="Charminar Repairs" className="main-logo-v3" width="120" height="40" loading="eager" />
                                </Link>
                            </div>
                            <ul className="nav-list-v3 d-none d-xl-flex">
                                <li><Link href="/about-us" className={isActive('/about-us') ? 'active' : ''}>About</Link></li>
                                <li><Link href="/pricing" className={isActive('/pricing') ? 'active' : ''}>Pricing</Link></li>
                                <li><Link href="/service-areas" className={isActive('/service-areas') ? 'active' : ''}>Areas</Link></li>
                                <li><Link href="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link></li>
                                <li><Link href="/contact-us" className={isActive('/contact-us') ? 'active' : ''}>Contact</Link></li>
                                <li className="ms-lg-3">
                                    <Link href="/careers" className="partner-btn-v3 d-flex align-items-center gap-2">
                                        <div className="icon-box-colorful icon-box-orange p-1 bg-white-opacity shadow-sm" style={{ width: '24px', height: '24px', minWidth: '24px' }}>
                                            <i className="fas fa-handshake" style={{ fontSize: '12px' }}></i>
                                        </div>
                                        <span>Want to be a Partner?</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="nav-right-v3">
                            <div className="nav-tools-v3 d-none d-lg-flex">
                                <div className="location-wrap-v3">
                                    <LocationSelector />
                                </div>
                                <div className="search-bar-v3" ref={dropdownRef}>
                                    <svg width="14" height="14" fill="#673ab7" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73s4.365 9.73 9.73 9.73c2.132 0 4.106-.69 5.711-1.857l6.205 6.205c.299.299.691.448 1.083.448s.784-.149 1.083-.448c.597-.597.597-1.569 0-2.166zm-14.078-4.186c-4.113 0-7.46-3.347-7.46-7.46s3.347-7.46 7.46-7.46 7.46 3.347 7.46 7.46-3.347 7.46-7.46 7.46z" /></svg>
                                    <input
                                        type="text"
                                        placeholder={`Search for '${displayText}'${showCursor ? '|' : ''}`}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onFocus={() => searchQuery.length > 1 && setShowSuggestions(true)}
                                    />
                                    {showSuggestions && suggestions.length > 0 && (
                                        <div className="search-suggestions-dropdown">
                                            {suggestions.map((s, i) => (
                                                <div key={i} className="suggestion-item" onClick={() => handleSuggestionClick(s.slug)}>
                                                    <svg width="14" height="14" fill="#64748b" viewBox="0 0 24 24" className="me-2"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 8c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zm-2 4c-3.313 0-6 2.687-6 6h12c0-3.313-2.687-6-6-6z" /></svg>
                                                    <span>{s.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="nav-actions-v3">
                                <a href="tel:+918008615049" className="call-btn-v3 d-none d-lg-flex align-items-center gap-2 text-decoration-none">
                                    <div className="icon-box-colorful icon-box-green shadow-sm">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="text-muted x-small fw-medium" style={{ lineHeight: 1 }}>24/7 Support</span>
                                        <span className="text-dark fw-black small" style={{ lineHeight: 1 }}>80086 15049</span>
                                    </div>
                                </a>
                                <Link href="/cart" className="icon-box-colorful icon-box-purple position-relative" aria-label="View Cart">
                                    <i className="fas fa-shopping-cart fs-6"></i>
                                    {cartItems.length > 0 && <span className="cart-badge-v3">{cartItems.length}</span>}
                                </Link>
                                <a href="tel:+918008615049" className="icon-box-colorful icon-box-green d-lg-none" aria-label="Call Now">
                                    <i className="fas fa-phone-alt"></i>
                                </a>
                                <button className="icon-box-colorful icon-box-blue d-lg-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                    <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div className={`mobile-sidebar-v3 ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-sidebar-header-v3">
                    <img src="/images/charminar-repairs-logo.jpeg" alt="Logo" height="30" />
                    <button onClick={() => setIsMobileMenuOpen(false)}>
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg>
                    </button>
                </div>
                <div className="mobile-sidebar-body-v3">
                    <div className="mobile-tools-v3 p-3">
                        <div className="mobile-search-wrap mb-3 px-2">
                            <div className="search-bar-v3 w-100">
                                <svg width="14" height="14" fill="#673ab7" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73s4.365 9.73 9.73 9.73c2.132 0 4.106-.69 5.711-1.857l6.205 6.205c.299.299.691.448 1.083.448s.784-.149 1.083-.448c.597-.597.597-1.569 0-2.166zm-14.078-4.186c-4.113 0-7.46-3.347-7.46-7.46s3.347-7.46 7.46-7.46 7.46 3.347 7.46 7.46-3.347 7.46-7.46 7.46z" /></svg>
                                <input
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                {showSuggestions && suggestions.length > 0 && (
                                    <div className="search-suggestions-dropdown mobile">
                                        {suggestions.map((s, i) => (
                                            <div key={i} className="suggestion-item" onClick={() => { handleSuggestionClick(s.slug); setIsMobileMenuOpen(false); }}>
                                                {s.name}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <LocationSelector />
                    </div>
                    <ul className="mobile-nav-list-v3">
                        <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                        <li><Link href="/#services" onClick={() => setIsMobileMenuOpen(false)}>Services</Link></li>
                        <li><Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing Card</Link></li>
                        <li><Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
                        <li><Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact Experts</Link></li>
                        <li className="mt-4">
                            <Link href="/careers" className="partner-btn-v3 w-100 justify-content-center" onClick={() => setIsMobileMenuOpen(false)}>
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="me-2"><path d="M11 11.53c.18 0 .34-.02.47-.07.13-.04.22-.09.28-.14.06-.05.09-.13.09-.23V7.09c0-.23-.17-.38-.5-.45a1 1 0 0 1-.77-.32c-.06-.07-.12-.17-.18-.32C9.8 4.7 9.3 3 8 3c-1 0-1.7 1.1-1.7 1.8 0 .5.3.9.7 1.1s.1.1.2.2c.4.2.8.5.8 1.1v2.8c0 .3.1.5.3.7.2.2.4.3.7.3zm8.3-2.1c.3 0 .5-.1.7-.3.2-.2.3-.4.3-.7V4.5c0-.8-.3-1.5-.9-2-.6-.6-1.3-.9-2.1-.9H16.1c-.8 0-1.5.3-2.1.9-.6.6-.9 1.3-.9 2.1v2.9c0 .3.1.5.3.7.2.2.5.3.7.3s.5-.1.7-.3c.2-.2.3-.4.3-.7V4.5c0-.3.1-.5.3-.7.2-.2.5-.3.7-.3s.5.1.7.3c.2.2.3.5.3.7v3.9c0 .3.1.5.3.7s.5.3.7.3zm-5 8.1c.3 0 .5-.1.7-.3s.3-.4.3-.7v-2.8c0-.3-.1-.5-.3-.7s-.5-.3-.7-.3-.5.1-.7.3-.3.4-.3.7v2.8c0 .3.1.5.3.7s.5.3.7.3zM15 11c-.5 0-1 .2-1.4.6-.4.4-.6.9-.6 1.4v6c0 .5.2 1 .6 1.4.4.4.9.6 1.4.6h4c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4v-6c0-.5-.2-1-.6-1.4-.4-.4-.9-.6-1.4-.6h-4zm-4-4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2v10c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2h-2V9c0-1.1-.9-2-2-2h-4zm-7.3 1.1c.2-.2.3-.5.3-.7V4.5c0-.8-.3-1.5-.9-2-.6-.6-1.3-.9-2.1-.9H2.3c-.8 0-1.5.3-2.1.9-.6.6-.9 1.3-.9 2.1v2.9c0 .3.1.5.3.7s.5.3.8.3.5-.1.7-.3c.2-.2.3-.4.3-.7V4.5c0-.3.1-.5.3-.7s.5-.3.7-.3.5.1.7.3c.2.2.3.5.3.7v3.9c0 .3.1.5.3.7s.5.2.7.2zM2.3 8.3c-.3 0-.5.1-.7.3s-.3.4-.3.7v2.8c0 .3.1.5.3.7s.5.3.7.3.5-.1.7-.3.3-.4.3-.7v-2.8c0-.3-.1-.5-.3-.7s-.5-.3-.7-.3z" /></svg>
                                Want to be a Partner?
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`mobile-overlay-v3 ${isMobileMenuOpen ? 'show' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
        </header>
    );
};

export default Header;
