'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
            {/* Top Sub-Header Bar */}
            <div className="top-subheader-bar text-white">
                <div className="container-fluid px-lg-5 d-flex justify-content-between align-items-center flex-wrap gap-3">
                    <div className="d-flex align-items-center gap-4 flex-wrap">
                        <span className="top-subheader-item">
                            <span className="top-subheader-icon">🎖️</span>
                            <span className="fw-semibold">ISO 9001:2015 Certified Service Network</span>
                        </span>
                        <span className="opacity-50 d-none d-md-inline">|</span>
                        <span className="d-none d-md-inline top-subheader-item">
                            <span className="top-subheader-icon">🛡️</span>
                            <span>180-Day Doorstep Protection Warranty</span>
                        </span>
                    </div>
                    <div className="d-flex align-items-center gap-4 flex-wrap">
                        <span className="top-subheader-item">
                            <span className="top-subheader-icon">📞</span>
                            <strong>Helpline: 8008615049</strong>
                        </span>
                        <span className="opacity-50 d-none d-sm-inline">|</span>
                        <span className="d-none d-sm-inline top-subheader-item">
                            <span className="top-subheader-icon">⏰</span>
                            <span>Mon–Sun: 8:00 AM – 9:00 PM</span>
                        </span>
                    </div>
                </div>
            </div>
            <nav className="header-nav-main-v3">
                <div className="container-fluid px-lg-5">
                    <div className="nav-row-v3">
                        <div className="nav-left-v3">
                            <div className="logo-section-v3">
                                <Link href="/">
                                    <Image
                                        src="/logo.png"
                                        alt="MeeHelper"
                                        width={161}
                                        height={70}
                                        priority
                                        className="main-logo-v3"
                                    />
                                </Link>
                            </div>
                            <ul className="nav-list-v3 d-none d-xl-flex">
                                <li className="nav-item-dropdown-v3">
                                    <Link href="/all-services-hyderabad/" className={isActive('/all-services-hyderabad') ? 'active' : ''}>
                                        <i className="fas fa-tools nav-link-icon"></i> Services <i className="fas fa-chevron-down ms-1 nav-chevron-icon"></i>
                                    </Link>
                                    <div className="mega-dropdown-v3">
                                        <div className="dropdown-col-v3">
                                            <h4>Appliance Repair</h4>
                                            <ul>
                                                <li><Link href="/ac-repairing/">AC Repair</Link></li>
                                                <li><Link href="/refrigerator-repairing/">Refrigerator Repair</Link></li>
                                                <li><Link href="/washing-machine-repairing/">Washing Machine</Link></li>
                                                <li><Link href="/tv-repairing/">TV Repair</Link></li>
                                                <li><Link href="/microwave-repairing/">Microwave Repair</Link></li>
                                                <li><Link href="/geyser-repairing/">Geyser Repair</Link></li>
                                            </ul>
                                        </div>
                                        <div className="dropdown-col-v3">
                                            <h4>Home & Utility</h4>
                                            <ul>
                                                <li><Link href="/floor-polishing/">Floor Polishing</Link></li>
                                                <li><Link href="/packers-and-movers/">Packers & Movers</Link></li>
                                                <li><Link href="/cleaning-sanitization-services/">Cleaning & Sanitization</Link></li>
                                                <li><Link href="/safety-home-protection/">Safety & Protection</Link></li>
                                                <li><Link href="/home-it-office-setup/">Home IT & Office</Link></li>
                                                <li><Link href="/premium-pest-control/">Premium Pest Control</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li><Link href="/about-us" className={isActive('/about-us') ? 'active' : ''}><i className="fas fa-info-circle nav-link-icon"></i> About</Link></li>
                                <li><Link href="/pricing" className={isActive('/pricing') ? 'active' : ''}><i className="fas fa-tags nav-link-icon"></i> Pricing</Link></li>
                                {/* <li><Link href="/service-areas" className={isActive('/service-areas') ? 'active' : ''}>Areas</Link></li> */}
                                <li><Link href="/blog" className={isActive('/blog') ? 'active' : ''}><i className="fas fa-blog nav-link-icon"></i> Blog</Link></li>
                                <li><Link href="/contact-us" className={isActive('/contact-us') ? 'active' : ''}><i className="fas fa-envelope nav-link-icon"></i> Contact</Link></li>
                                <li className="ms-lg-3">
                                    <Link href="/careers" className="partner-btn-v3 d-flex align-items-center gap-2">
                                        <span>Join Our Team</span>
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
                                    <svg width="14" height="14" fill="#024dbe" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73s4.365 9.73 9.73 9.73c2.132 0 4.106-.69 5.711-1.857l6.205 6.205c.299.299.691.448 1.083.448s.784-.149 1.083-.448c.597-.597.597-1.569 0-2.166zm-14.078-4.186c-4.113 0-7.46-3.347-7.46-7.46s3.347-7.46 7.46-7.46 7.46 3.347 7.46 7.46-3.347 7.46-7.46 7.46z" /></svg>
                                    <input
                                        id="search-input-desktop"
                                        type="text"
                                        placeholder={`Search for '${displayText}'${showCursor ? '|' : ''}`}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        onFocus={() => searchQuery.length > 1 && setShowSuggestions(true)}
                                        aria-label="Search for appliance repair services"
                                    />
                                    {showSuggestions && suggestions.length > 0 && (
                                        <div className="search-suggestions-dropdown">
                                            {suggestions.map((s, i) => (
                                                <div
                                                    key={i}
                                                    className="suggestion-item"
                                                    onClick={() => handleSuggestionClick(s.slug)}
                                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSuggestionClick(s.slug); }}
                                                    role="option"
                                                    tabIndex={0}
                                                    aria-selected={false}
                                                >
                                                    <svg width="14" height="14" fill="#64748b" viewBox="0 0 24 24" className="me-2" aria-hidden="true"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 8c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zm-2 4c-3.313 0-6 2.687-6 6h12c0-3.313-2.687-6-6-6z" /></svg>
                                                    <span>{s.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="nav-actions-v3">
                                <a href="tel:+918008615049" className="call-btn-v3 d-none d-lg-flex align-items-center gap-2 text-decoration-none" aria-label="Call MeeHelper support">
                                    <div className="icon-box-colorful icon-box-green shadow-sm">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <span className="text-muted x-small fw-medium call-btn-text-muted">24/7 Support</span>
                                        <span className="text-dark fw-black small call-btn-text-dark">80086 15049</span>
                                    </div>
                                </a>
                                {/* <Link href="/cart" className="icon-box-colorful icon-box-purple position-relative" aria-label="View shopping cart with repairs">
                                    <i className="fas fa-shopping-cart fs-6"></i>
                                    {cartItems.length > 0 && <span className="cart-badge-v3">{cartItems.length}</span>}
                                </Link> */}
                                <a href="tel:+918008615049" className="icon-box-colorful icon-box-green d-lg-none" aria-label="Call MeeHelper directly">
                                    <i className="fas fa-phone-alt"></i>
                                </a>
                                <button
                                    className="icon-box-colorful icon-box-blue d-lg-none"
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    aria-label={isMobileMenuOpen ? "Close side navigation panel" : "Open side navigation panel"}
                                >
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
                    <Image
                        src="/logo.png"
                        alt="MeeHelper Logo"
                        width={120}
                        height={34}
                        className="mobile-sidebar-logo"
                    />
                    <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close navigation sidebar">
                        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" /></svg>
                    </button>
                </div>
                <div className="mobile-sidebar-body-v3">
                    <div className="mobile-tools-v3 p-3">
                        <div className="mobile-search-wrap mb-3 px-2">
                            <div className="search-bar-v3 w-100">
                                <svg width="14" height="14" fill="#024dbe" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73s4.365 9.73 9.73 9.73c2.132 0 4.106-.69 5.711-1.857l6.205 6.205c.299.299.691.448 1.083.448s.784-.149 1.083-.448c.597-.597.597-1.569 0-2.166zm-14.078-4.186c-4.113 0-7.46-3.347-7.46-7.46s3.347-7.46 7.46-7.46 7.46 3.347 7.46 7.46-3.347 7.46-7.46 7.46z" /></svg>
                                <input
                                    id="search-input-mobile"
                                    type="text"
                                    placeholder="Search services..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    aria-label="Search for appliance repair services on mobile"
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
                        <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}><i className="fas fa-home me-2 mobile-nav-icon"></i>Home</Link></li>
                        <li><Link href="/all-services-hyderabad/" onClick={() => setIsMobileMenuOpen(false)}><i className="fas fa-tools me-2 mobile-nav-icon"></i>Services</Link></li>
                        <li><Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}><i className="fas fa-tags me-2 mobile-nav-icon"></i>Pricing Card</Link></li>
                        <li><Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)}><i className="fas fa-info-circle me-2 mobile-nav-icon"></i>About Us</Link></li>
                        <li><Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)}><i className="fas fa-envelope me-2 mobile-nav-icon"></i>Contact Experts</Link></li>
                        <li className="mt-4">
                            <Link href="/careers" className="partner-btn-v3 w-100 justify-content-center" onClick={() => setIsMobileMenuOpen(false)}>
                                <i className="fas fa-briefcase me-2"></i>
                                Join Our Team
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
