'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SERVICE_CANONICAL_MAP } from '@/config/services';
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

    const ALL_SERVICES = Object.entries(SERVICE_CANONICAL_MAP).map(([name, slug]) => ({ name, slug }));

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
                                    <img src="/images/charminar-repairs-logo.png" alt="Charminar Repairs" className="main-logo-v3" width="120" height="40" loading="eager" />
                                </Link>
                            </div>
                            <ul className="nav-list-v3 d-none d-xl-flex">
                                <li><Link href="/about-us" className={isActive('/about-us') ? 'active' : ''}>About</Link></li>
                                <li><Link href="/pricing" className={isActive('/pricing') ? 'active' : ''}>Pricing</Link></li>
                                <li><Link href="/service-areas" className={isActive('/service-areas') ? 'active' : ''}>Areas</Link></li>
                                <li><Link href="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link></li>
                                <li><Link href="/contact-us" className={isActive('/contact-us') ? 'active' : ''}>Contact</Link></li>
                                <li className="ms-lg-3"><Link href="/careers" className="partner-btn-v3"><i className="fas fa-handshake"></i> Want to be a Partner?</Link></li>
                            </ul>
                        </div>

                        <div className="nav-right-v3">
                            <div className="nav-tools-v3 d-none d-lg-flex">
                                <div className="location-wrap-v3">
                                    <LocationSelector />
                                </div>
                                <div className="search-bar-v3" ref={dropdownRef}>
                                    <i className="fas fa-search"></i>
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
                                                    <i className="fas fa-tools me-2 opacity-50"></i>
                                                    <span>{s.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="nav-actions-v3">
                                <Link href="/cart" className="cart-btn-v3" aria-label="View Cart">
                                    <div className="cart-icon-wrap-v3">
                                        <i className="fas fa-shopping-cart"></i>
                                        {cartItems.length > 0 && <span className="cart-badge-v3">{cartItems.length}</span>}
                                    </div>
                                </Link>
                                <Link href="/admin" className="profile-btn-v3" aria-label="Profile"><i className="far fa-user-circle" style={{lineHeight: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}></i></Link>
                                <button className="menu-toggle-v3 d-lg-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                                    <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div className={`mobile-sidebar-v3 ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-sidebar-header-v3">
                    <img src="/images/charminar-repairs-logo.png" alt="Logo" height="30" />
                    <button onClick={() => setIsMobileMenuOpen(false)}><i className="fas fa-times"></i></button>
                </div>
                <div className="mobile-sidebar-body-v3">
                    <div className="mobile-tools-v3 p-3">
                        <div className="mobile-search-wrap mb-3 px-2">
                             <div className="search-bar-v3 w-100">
                                <i className="fas fa-search"></i>
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
                        <li className="mt-4"><Link href="/careers" className="partner-btn-v3 w-100 justify-content-center" onClick={() => setIsMobileMenuOpen(false)}><i className="fas fa-handshake"></i> Want to be a Partner?</Link></li>
                    </ul>
                </div>
            </div>
            <div className={`mobile-overlay-v3 ${isMobileMenuOpen ? 'show' : ''}`} onClick={() => setIsMobileMenuOpen(false)}></div>
        </header>
    );
};

export default Header;
