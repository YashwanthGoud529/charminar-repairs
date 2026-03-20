'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SERVICE_DATA_MAP, DEFAULT_SERVICE } from '@/config/serviceData';
import { useCartStore } from '@/store/cartStore';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import './ServiceTemplate.css';

const ServiceTemplate = ({ title, description, image, longDescription, slug }) => {
    const baseTitle = title ? title.split(' in ')[0].trim() : '';
    const locationPart = title && title.includes(' in ') ? title.split(' in ')[1].split(',')[0].trim() : '';
    const displayLocation = locationPart || 'Hyderabad';


    const { cartItems, addItem, removeItem } = useCartStore();

    const [dynamicSubServices, setDynamicSubServices] = useState([]);
    const [isLoadingDynamic, setIsLoadingDynamic] = useState(true);
    const [liveSvc, setLiveSvc] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalActive, setIsModalActive] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            requestAnimationFrame(() => setIsModalActive(true));
        } else {
            document.body.style.overflow = 'auto';
            setIsModalActive(false);
        }
    }, [isModalOpen]);

    const closeModal = () => {
        setIsModalActive(false);
        setTimeout(() => setIsModalOpen(false), 300); // Match CSS transition duration
    };

    useEffect(() => {
        const categorySlug = baseTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        setIsLoadingDynamic(true);

        const fetchData = async () => {
            try {
                const { getDoc, doc, collection, query, orderBy, getDocs } = await import('firebase/firestore');

                // 1. Fetch Main Metadata
                const catDocRef = doc(db, 'service_items', categorySlug);
                const catSnap = await getDoc(catDocRef);
                if (catSnap.exists()) {
                    setLiveSvc(catSnap.data());
                }

                // 2. Fetch Sub-Services
                const colRef = collection(db, 'service_items', categorySlug, 'sub_services');
                const q = query(colRef, orderBy('order', 'asc'));
                const snap = await getDocs(q);
                const items = snap.docs.map(d => {
                    const data = d.data();
                    const localSvc = (SERVICE_DATA_MAP[baseTitle]?.subServices || []).find(ls => ls.id === data.id);
                    return { 
                        docId: d.id, 
                        ...data,
                        image: data.image || localSvc?.image // Fallback to local image if missing in Firestore
                    };
                });
                setDynamicSubServices(items);
            } catch (err) {
                console.error("Error fetching data from Firestore:", err);
            } finally {
                setIsLoadingDynamic(false);
            }
        };

        fetchData();
    }, [baseTitle]);

    // Merge: local config is the BASE (has reviews, inclusions, exclusions, spotlight, brands, etc.)
    // Firestore liveSvc OVERRIDES only what it has (title, desc, etc.)
    // This ensures all dynamic modal content comes from the local config
    const localConfigSvc = SERVICE_DATA_MAP[baseTitle] || DEFAULT_SERVICE;
    const svc = liveSvc ? { ...localConfigSvc, ...liveSvc } : localConfigSvc;

    // Categorization logic
    const categorizeItem = (item) => {
        if (item.category) return item.category;
        const lowerName = (item.name || '').toLowerCase();
        if (lowerName.includes('install') || lowerName.includes('uninstall')) return 'Installation & Uninstallation';
        if (lowerName.includes('repair') || lowerName.includes('gas') || lowerName.includes('refill') || lowerName.includes('fix')) return 'Repair & Gas Refill';
        if (lowerName.includes('foam') || lowerName.includes('jet') || lowerName.includes('saver') || lowerName.includes('package')) return 'Super Saver Packages';
        if (lowerName.includes('service') || lowerName.includes('clean') || lowerName.includes('check')) return 'Service Options';
        return 'Other Services';
    };

    // Use Config Data as fallback if Firebase is empty (this matches the API seed data)
    const displayItems = dynamicSubServices.length > 0 ? dynamicSubServices : (svc.subServices || []);

    const groupedItems = displayItems.reduce((acc, item) => {
        const cat = categorizeItem(item);
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(item);
        return acc;
    }, {});

    const activeCategories = Object.keys(groupedItems).sort((a, b) => {
        const order = { 'Super Saver Packages': 1, 'Service Options': 2, 'Repair & Gas Refill': 3, 'Installation & Uninstallation': 4, 'Other Services': 5 };
        return (order[a] || 99) - (order[b] || 99);
    });

    useEffect(() => {
        if (!activeTab && activeCategories.length > 0) {
            setActiveTab(activeCategories[0]);
        }
    }, [activeCategories, activeTab]);

    const scrollToCategory = (cat) => {
        setActiveTab(cat);
        const el = document.getElementById(`category-${cat.replace(/\s+/g, '-')}`);
        if (el) {
            const yOffset = -120; // Offset for sticky navbar
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <main className="service-detail-page service-detail-page-main bg-light pb-5">
            <div className="container custom-container px-lg-4 px-3">
                {/* BREADCRUMBS */}
                <nav className="mb-4 d-flex align-items-center gap-2" style={{ fontSize: '13px' }}>
                    <Link href="/" className="text-muted text-decoration-none hover-dark">Home</Link>
                    <i className="fas fa-chevron-right text-muted" style={{ fontSize: '8px' }}></i>
                    <span className="text-primary fw-bold" style={{ color: '#673ab7' }}>{baseTitle} in {displayLocation}</span>
                </nav>

                <div className="row g-4 position-relative">

                    {/* LEFT SIDEBAR */}
                    <div className="col-lg-4 col-xl-4 d-none d-lg-block">
                        {/* Title & Rating - NOT STICKY */}
                        <div className="mb-4 pb-2">
                            <h1 className="fw-bold text-dark lh-sm mb-2 sidebar-title">
                                {baseTitle}
                            </h1>
                            <div className="d-flex align-items-center gap-3">
                                <div className="d-flex align-items-center gap-1">
                                    <img src="/assets/Images/star.png" alt="Star" className="sidebar-rating-star" />
                                    <span className="text-dark fs-5 fw-bold">4.85</span>
                                </div>
                                <span className="text-muted fw-normal sidebar-bookings-text">2.6 M bookings</span>
                            </div>
                        </div>

                        {/* STICKY SELECT A SERVICE BOX */}
                        <div className="sticky-sidebar-container">
                            <div className="bg-white p-4 shadow-sm border service-selector-box">
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <span className="text-secondary fw-bold service-selector-label">Select a service</span>
                                    <hr className="flex-grow-1 my-0 text-muted opacity-25" />
                                </div>

                                <div className="row g-3">
                                    {activeCategories.map(cat => {
                                        const isSaver = cat.toLowerCase().includes('saver') || cat.toLowerCase().includes('package');
                                        return (
                                            <div key={cat} className="col-4 text-center px-1 category-item-container" onClick={() => scrollToCategory(cat)}>
                                                <div
                                                    className={`mb-2 category-icon-wrapper transition-all ${activeTab === cat ? 'active' : 'inactive'}`}
                                                >
                                                    {isSaver ? (
                                                        <div className="text-primary fw-bold category-saver-text">
                                                            <span className="category-saver-upto">UPTO</span><br />
                                                            <span className="category-saver-percent">{svc.globalDiscount || 25}%</span><br />
                                                            <span className="category-saver-off">OFF</span>
                                                        </div>
                                                    ) : (
                                                        <img src={svc.icon || '/images/default_icon.png'} className="object-fit-contain opacity-75 category-icon-img" alt={cat} />
                                                    )}
                                                </div>
                                                <div className={`lh-sm category-label-text ${activeTab === cat ? 'text-dark fw-bold' : 'text-secondary fw-medium'}`}>
                                                    {cat}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* CONTACT EXPERT MINI BOX */}
                                <div className="mt-4 p-3 bg-light-soft border-top d-flex align-items-center gap-3 sidebar-contact-promo">
                                    <div className="bg-primary rounded-circle shadow-sm d-flex align-items-center justify-content-center" style={{ width: '42px', height: '42px' }}>
                                        <i className="fas fa-phone-alt text-white fs-5"></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="fw-bold text-dark x-small lh-1 mb-1">Confused?</div>
                                        <Link href="/contact-us" className="text-primary fw-bold text-decoration-none small">Talk to expert</Link>
                                    </div>
                                    <i className="fas fa-chevron-right text-muted opacity-50" style={{ fontSize: '10px' }}></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT - SCROLLING SERVICES */}
                    <div className="col-lg-8 col-xl-8 col-12 ms-auto">

                        {/* MOBILE TITLE (Shown only on small screens) */}
                        <div className="d-lg-none mb-4">
                            <h1 className="fw-black text-dark lh-sm mb-1 mobile-main-title">
                                Professional <span className="text-primary">{baseTitle}</span>
                            </h1>
                            <div className="d-flex align-items-center gap-2">
                                <img src="/assets/Images/star.png" alt="Star" className="small-star-icon" />
                                <span className="text-dark fw-bold small-bookings-text">4.85 <span className="text-muted fw-normal">(2.6 M bookings)</span></span>
                            </div>
                        </div>

                        {/* PREMIUM HERO BANNER - ATTRACTIVE REDESIGN (8px Radius) */}
                        <div className="mb-4 shadow-sm border hero-banner-container">
                            {/* Accent Pattern Overlay */}
                            <div className="hero-accent-pattern"></div>

                            <div className="row g-0 align-items-stretch position-relative hero-main-row">
                                {/* TEXT CONTENT SIDE */}
                                <div className="col-md-7 p-lg-5 p-4 d-flex flex-column justify-content-center hero-text-side">
                                    <div className="d-flex align-items-center gap-3 mb-4">
                                        <div className="d-flex align-items-center gap-2 bg-primary text-white px-3 py-1 shadow-sm premium-badge-wrapper">
                                            <i className="fas fa-crown"></i> PREMIUM SERVICE
                                        </div>
                                        <div className="d-flex align-items-center gap-1 text-primary fw-bold satisfaction-guarantee">
                                            <i className="fas fa-shield-alt"></i> 100% Satisfaction Guaranteed
                                        </div>
                                    </div>
                                    <h2 className="fw-black pb-3 text-dark d-md-block d-none hero-main-title">
                                        Expert Repairs in<br />
                                        <span className="hero-title-highlight" style={{ color: '#673ab7' }}>{displayLocation}</span>
                                    </h2>
                                    <p className="text-secondary mb-4 d-md-block d-none hero-description">
                                        Experience high-quality maintenance and repairs from our certified technicians. We ensure 100% satisfaction with every visit.
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <div className="p-3 bg-white border border-light shadow-sm hero-stat-card">
                                                <div className="text-muted mb-1 fw-bold hero-stat-label">Investment</div>
                                                <div className="text-dark fw-black fs-4 text-nowrap">₹299<span className="small text-muted fw-normal ms-1 hero-stat-unit">Start</span></div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="p-3 bg-white border border-light shadow-sm hero-stat-card">
                                                <div className="text-muted mb-1 fw-bold hero-stat-label">Quick Fix</div>
                                                <div className="text-dark fw-black fs-4 text-nowrap">60<span className="small text-muted fw-normal ms-1 hero-stat-unit">Mins</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* IMAGE SIDE */}
                                <div className="col-md-5 d-none d-md-block position-relative">
                                    <img src={svc.photo || '/images/ac-repair.png'} className="w-100 h-100 object-fit-cover" style={{ zIndex: 1 }} alt={baseTitle} />
                                    {/* Overlay for depth */}
                                    <div className="hero-image-overlay"></div>
                                    {/* Accent Badge */}
                                    <div className="hero-guarantee-badge">
                                        <div className="hero-guarantee-icon-circle">
                                            <i className="fas fa-check hero-guarantee-icon"></i>
                                        </div>
                                        <span className="hero-guarantee-text">Guaranteed Repairs</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TRUST BADGES BAR - (As requested from user image) */}
                        <div className="row g-2 g-md-2 mb-4 service-trust-badges-row px-1">
                            {[
                                { title: '30 Days Warranty', desc: 'With No Additional Charges' },
                                { title: '5-Star Rated Technicians', desc: 'Repairing on-time Consistently' },
                                { title: 'Free Inspection Charges', desc: 'With no Inspection Charges' },
                                { title: 'High Quality Spare Parts', desc: 'Ensuring Durability & Reliability' }
                            ].map((b, i) => (
                                <div key={i} className="col-lg-3 col-md-3 col-6 p-1">
                                    <div className="p-3 d-flex align-items-center gap-2 h-100 shadow-sm border border-info border-opacity-10 trust-badge-box" style={{ backgroundColor: '#bce1eb', borderRadius: '4px' }}>
                                        <div className="bg-success rounded-circle d-flex align-items-center justify-content-center p-1 shadow-sm flex-shrink-0" style={{ width: '18px', height: '18px' }}>
                                            <i className="fas fa-check text-white" style={{ fontSize: '8px' }}></i>
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="fw-black text-dark lh-1 mb-1" style={{ fontSize: '11px', whiteSpace: 'nowrap' }}>{b.title}</div>
                                            <div className="text-dark opacity-75 lh-1" style={{ fontSize: '10px', fontWeight: '500' }}>{b.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* HORIZONTAL STICKY TABS (Mobile & Tablet) */}
                        <div className="d-lg-none sticky-top py-2 shadow-sm sticky-mobile-tabs-container">
                            <div className="d-flex overflow-auto gap-2 no-scrollbar pb-1">
                                {activeCategories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => scrollToCategory(cat)}
                                        className={`btn btn-sm text-nowrap px-3 py-2 fw-bold transition-all mobile-tab-btn ${activeTab === cat ? 'btn-dark' : 'btn-light border-light opacity-75'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {/* CATEGORIES SECTION */}
                        {isLoadingDynamic ? (
                            <div className="text-center py-5 bg-white shadow-sm border service-category-card">
                                <div className="spinner-border text-primary spinner-border-sm" role="status"></div>
                                <p className="mt-2 text-muted fw-bold">Loading expert services...</p>
                            </div>
                        ) : (
                            <div className="services-list-container">
                                {activeCategories.map(cat => (
                                    <div key={cat} id={`category-${cat.replace(/\s+/g, '-')}`} className="mb-4 bg-white shadow-sm p-4 border service-category-card">
                                        <h3 className="fw-bold mb-4 pb-2 fs-4 text-dark border-bottom d-flex align-items-center gap-2">
                                            {cat}
                                        </h3>

                                        <div className="d-flex flex-column">
                                            {groupedItems[cat].map((sub, i) => {
                                                const itemId = sub.docId || sub.id;
                                                const cartItem = cartItems.find(item => item.id === itemId);
                                                const isLast = i === groupedItems[cat].length - 1;
                                                const discount = svc.globalDiscount || 0;
                                                const originalPrice = discount > 0 ? Math.round(sub.price / (1 - discount / 100)) : null;
                                                return (
                                                    <div key={i} className={`py-4 d-flex justify-content-between align-items-start gap-3 ${!isLast ? 'border-bottom border-light' : ''}`}>

                                                        {/* TEXT COLUMN */}
                                                        <div className="info-column flex-grow-1 pe-md-3">
                                                            <h5 className="fw-bold mb-1 text-dark fs-6">{sub.name}</h5>

                                                            <div className="d-flex align-items-center gap-2 mb-2">
                                                                <div className="d-flex align-items-center gap-1 bg-success bg-opacity-10 text-success px-2 py-0 border border-success border-opacity-10 item-rating-badge">
                                                                    <img src="/assets/Images/star.png" alt="Star" className="item-rating-star-small" /> 4.8
                                                                </div>
                                                                <span className="text-muted item-reviews-text">4.1K reviews</span>
                                                            </div>
                                                            <div className="d-flex align-items-center gap-2 flex-wrap mb-2">
                                                                <span className="fw-black text-dark fs-5">₹{sub.price}</span>
                                                                {originalPrice && (
                                                                    <>
                                                                        <span className="text-muted text-decoration-line-through" style={{ fontSize: '14px' }}>₹{originalPrice}</span>
                                                                        <span className="badge text-white fw-bold px-2 py-1" style={{ backgroundColor: '#27ae60', fontSize: '11px', borderRadius: '4px' }}>{discount}% OFF</span>
                                                                    </>
                                                                )}
                                                            </div>
                                                            <p className="text-secondary mb-2 lh-base item-desc-para">
                                                                {sub.desc}
                                                            </p>
                                                            <div
                                                                className="text-primary fw-bold hover-underline view-details-link"
                                                                onClick={() => {
                                                                    setSelectedService({ ...sub, category: cat });
                                                                    setIsModalOpen(true);
                                                                }}
                                                            >
                                                                View details
                                                            </div>
                                                        </div>
                                                        {/* ACTION COLUMN */}
                                                        <div className="action-column flex-shrink-0 text-end" style={{ width: '110px' }}>
                                                            {sub.image && (
                                                                <div className="mb-3 position-relative">
                                                                    <img src={sub.image} alt={sub.name} className="w-100 shadow-sm border service-item-thumb" />
                                                                </div>
                                                            )}
                                                            {!cartItem ? (
                                                                <button
                                                                    className="btn bg-white border shadow-sm fw-bold text-success w-100 py-2 hover-lift add-btn-custom"
                                                                    onClick={() => addItem({ id: itemId, name: sub.name, price: sub.price, image: sub.image })}
                                                                >
                                                                    ADD
                                                                </button>
                                                            ) : (
                                                                <div className="d-flex align-items-center justify-content-between shadow-sm border border-success-subtle bg-white qty-selector-v3">
                                                                    <button className="btn border-0 fw-bold px-3 py-2 text-success" onClick={() => removeItem(itemId)}>−</button>
                                                                    <span className="fw-bold text-dark px-1">{cartItem.quantity}</span>
                                                                    <button className="btn border-0 fw-bold px-3 py-2 text-success" onClick={() => addItem({ id: itemId, name: sub.name, price: sub.price, image: sub.image })}>+</button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* DYNAMIC SERVICE DETAILS MODAL - PROFESSIONAL XXL REDESIGN */}
            {isModalOpen && selectedService && (
                <div className={`modal d-block details-modal-overlay ${isModalActive ? 'active' : ''}`} tabIndex="-1">
                    <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable modal-xxl-dialog">
                        <div className="modal-content border-0 shadow-lg position-relative details-modal-content modal-xxl-content">
                            {/* FLOATING CLOSE BUTTON (TOP RIGHT) - RED STYLE */}
                            <button
                                className="btn position-absolute top-0 end-0 m-3 shadow-lg d-flex align-items-center justify-content-center modal-close-red"
                                onClick={closeModal}
                            >
                                <i className="fas fa-times text-white fs-5"></i>
                            </button>

                            <div className="modal-body p-0 bg-white h-100 overflow-hidden">
                                <div className="row g-0 h-100">
                                    {/* LEFT ASIDE: IMAGE & BRANDING (Visible on Desktop, Banner on Mobile) */}
                                    <div className="col-lg-5 d-none d-lg-block bg-dark">
                                        <div className="h-100 position-relative">
                                            <img
                                                src={selectedService.image || svc.photo || '/images/washing-machine.png'}
                                                className="w-100 h-100 object-fit-cover opacity-75"
                                                alt={selectedService.name}
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="position-absolute bottom-0 start-0 w-100 p-5 bg-gradient-to-t from-black to-transparent">
                                                <h3 className="text-white fw-black fs-1 mb-2">{selectedService.name}</h3>
                                                <div className="d-flex align-items-center gap-2 mb-4">
                                                    <img src="/assets/Images/star.png" alt="Star" style={{ width: '16px', height: '16px' }} />
                                                    <span className="text-white fw-bold">4.8 (361K Verified Bookings)</span>
                                                </div>
                                                <div className="d-flex gap-2">
                                                    <span className="badge bg-primary px-3 py-2" style={{ borderRadius: '4px' }}>EXPERT SERVICE</span>
                                                    <span className="badge bg-white text-dark px-3 py-2" style={{ borderRadius: '4px' }}>30-DAY WARRANTY</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT SIDE: RICH CONTENT AREA */}
                                    <div className="col-lg-7 col-12 h-100 overflow-auto p-lg-5 p-4 custom-scrollbar">
                                        {/* Mobile Header (Banner) */}
                                        <div className="d-lg-none mb-4 position-relative">
                                            <img src={selectedService.image || svc.photo} className="w-100 rounded shadow-sm mb-3" style={{ height: '200px', objectFit: 'cover' }} alt={selectedService.name} />
                                            <h2 className="fw-black text-dark">{selectedService.name}</h2>
                                        </div>

                                        <div className="mb-5">
                                            <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-4">
                                                <div>
                                                    <h3 className="fw-black text-dark mb-1 fs-2">Service Details</h3>
                                                    <p className="text-muted mb-0">{svc.title} Certified Experts</p>
                                                </div>
                                                <div className="text-end">
                                                    {(() => {
                                                        const discount = svc.globalDiscount || 0;
                                                        const originalPrice = discount > 0 ? Math.round(selectedService.price / (1 - discount / 100)) : null;
                                                        return (
                                                            <>
                                                                <div className="text-primary fw-black fs-2">₹{selectedService.price}</div>
                                                                {originalPrice && (
                                                                    <div className="d-flex align-items-center justify-content-end gap-2 mt-1">
                                                                        <span className="text-muted text-decoration-line-through small">₹{originalPrice}</span>
                                                                        <span className="badge fw-bold text-white px-2" style={{ backgroundColor: '#27ae60', fontSize: '11px', borderRadius: '4px' }}>{discount}% OFF</span>
                                                                    </div>
                                                                )}
                                                                <div className="text-muted x-small mt-1">Inclusive of all taxes</div>
                                                            </>
                                                        );
                                                    })()}
                                                </div>
                                            </div>

                                            {/* Description Card */}
                                            <div className="p-3 bg-light border border-light mb-5" style={{ borderRadius: '8px' }}>
                                                <h5 className="fw-bold text-dark ">Service Description</h5>
                                                <p className="text-secondary mb-0 lh-lg" style={{ fontSize: '15px' }}>{selectedService.desc || svc.description}</p>
                                            </div>

                                            <div className="row g-5">
                                                {/* Dynamic Process Steps from restorationFramework */}
                                                <div className="col-md-6">
                                                    <h4 className="fw-black mb-4 fs-5 text-dark border-start border-primary border-4 ps-3">Our Process</h4>
                                                    <div className="d-flex flex-column gap-4">
                                                        {(svc.restorationFramework || [
                                                            { title: 'Consultation & Review', icon: 'fas fa-clipboard' },
                                                            { title: 'Assessment & Diagnosis', icon: 'fas fa-search' },
                                                            { title: 'Service Execution', icon: 'fas fa-tools' },
                                                            { title: 'Quality Check & Finish', icon: 'fas fa-check-circle' }
                                                        ]).map((item, idx) => (
                                                            <div key={idx} className="d-flex gap-3 align-items-start">
                                                                <div className="process-step-indicator">{idx + 1}</div>
                                                                <div>
                                                                    <div className="fw-bold small text-dark d-flex align-items-center gap-2">
                                                                        {item.icon && <i className={`${item.icon} text-primary`} style={{ fontSize: '12px' }}></i>}
                                                                        {item.title}
                                                                    </div>
                                                                    {item.desc && <div className="text-muted" style={{ fontSize: '13px' }}>{item.desc}</div>}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Dynamic Brands Column */}
                                                <div className="col-md-6">
                                                    <h4 className="fw-black mb-4 fs-5 text-dark border-start border-primary border-4 ps-3">
                                                        {svc.brands && svc.brands.length > 0 ? 'Trusted Brands' : 'What We Cover'}
                                                    </h4>
                                                    <div className="row g-2">
                                                        {(svc.brands || ['All Brands', 'All Models', 'All Types']).map(b => (
                                                            <div key={b} className="col-4">
                                                                <div className="border border-light p-2 text-center text-secondary small fw-bold" style={{ borderRadius: '4px', fontSize: '11px' }}>{b}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Trust Promise Bar */}
                                        <div className="bg-light p-4 mb-5 border border-primary border-opacity-10 d-flex flex-md-row flex-column justify-content-between align-items-center gap-4" style={{ borderRadius: '8px' }}>
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="bg-primary bg-opacity-10 p-2 rounded-circle d-flex align-items-center justify-content-center" style={{ width: '54px', height: '54px' }}>
                                                    <img src="/images/shield_icon.png" alt="Shield" className="w-100 h-100 object-fit-contain" />
                                                </div>
                                                <div>
                                                    <h5 className="fw-black text-dark mb-0 fs-6">Charminar Protection</h5>
                                                    <p className="text-muted mb-0 small">180 days comprehensive warranty on all repairs</p>
                                                </div>
                                            </div>
                                            <button className="btn btn-outline-dark btn-sm fw-bold px-4" style={{ borderRadius: '8px' }}>Read Warranty Policy</button>
                                        </div>

                                        {/* Reviews Section - DYNAMIC */}
                                        <div className="mb-5">
                                            <h4 className="fw-black mb-4 fs-5 text-dark">Verified Customer Stories</h4>
                                            <div className="row g-3">
                                                {(svc.reviews || [
                                                    { user: 'Verified Customer', text: 'Brilliant service! The professional arrived exactly on time and completed the job perfectly. Highly recommend.' },
                                                    { user: 'Happy Customer', text: 'Excellent work done at a very fair price. Very satisfied with the quality and professionalism.' }
                                                ]).map((r, idx) => (
                                                    <div key={idx} className="col-md-6">
                                                        <div className="p-3 border border-light bg-light" style={{ borderRadius: '8px' }}>
                                                            <div className="d-flex justify-content-between mb-2">
                                                                <span className="fw-bold small text-dark">{r.user}</span>
                                                                <span className="d-flex align-items-center gap-1">
                                                                    {[1, 2, 3, 4, 5].map(n => <img key={n} src="/assets/Images/star.png" alt="star" style={{ width: '13px', height: '13px', objectFit: 'contain' }} />)}
                                                                </span>
                                                            </div>
                                                            <p className="text-muted mb-0 font-italic" style={{ fontSize: '13px' }}>"{r.text}"</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* INCLUSIONS & EXCLUSIONS - DYNAMIC */}
                                        <div className="row g-4 mb-5 border-top pt-5">
                                            <div className="col-md-6">
                                                <h5 className="fw-black text-dark mb-4 d-flex align-items-center gap-2">
                                                    <i className="fas fa-plus-circle text-success opacity-75"></i> What's included
                                                </h5>
                                                <ul className="list-unstyled d-flex flex-column gap-3">
                                                    {(svc.inclusions || [
                                                        'Professional service by certified experts',
                                                        '180-day warranty coverage',
                                                        'Post-service cleanup included'
                                                    ]).map((item, idx) => (
                                                        <li key={idx} className="d-flex gap-2 text-secondary" style={{ fontSize: '14px' }}>
                                                            <i className="fas fa-check text-success mt-1" style={{ fontSize: '11px' }}></i>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <h5 className="fw-black text-dark mb-4 d-flex align-items-center gap-2">
                                                    <i className="fas fa-minus-circle text-danger opacity-75"></i> What's excluded
                                                </h5>
                                                <ul className="list-unstyled d-flex flex-column gap-3">
                                                    {(svc.exclusions || [
                                                        'Cost of additional spare parts (if required)',
                                                        'Major structural work beyond service scope'
                                                    ]).map((item, idx) => (
                                                        <li key={idx} className="d-flex gap-2 text-secondary" style={{ fontSize: '14px' }}>
                                                            <i className="fas fa-times text-danger mt-1" style={{ fontSize: '11px' }}></i>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* EXPERT SPOTLIGHT - DYNAMIC */}
                                        <div className="p-4 bg-dark text-white mb-5 d-flex align-items-center gap-4 shadow-lg" style={{ borderRadius: '12px' }}>
                                            <div className="bg-white rounded-circle p-1 flex-shrink-0" style={{ width: '70px', height: '70px' }}>
                                                <img src={svc.photo || '/images/8-Team-Member.jpg'} className="w-100 h-100 rounded-circle object-fit-cover" alt="Expert" />
                                            </div>
                                            <div>
                                                <h5 className="fw-black mb-1 fs-5">{svc.spotlight?.title || 'Elite Professionals Only'}</h5>
                                                <p className="mb-0 text-white-50 small pe-lg-4 lh-base">
                                                    {svc.spotlight?.desc || 'Every professional undergoes rigorous background verification and 100+ hours of technical training. We only send the top 1% of experts to ensure high-quality service and absolute peace of mind for your home.'}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-footer border-top bg-white p-4 d-flex justify-content-between align-items-center sticky-bottom interaction-footer-sticky">
                                    <div className="d-md-block d-none">
                                        <div className="fw-black text-dark fs-3">₹{selectedService.price}</div>
                                        <div className="text-muted small">Ready to book professional assistance?</div>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <button className="btn btn-light fw-bold px-4 py-2 btn-modal-action" onClick={closeModal}>Close Window</button>
                                        <button className="btn btn-primary fw-black px-5 py-2 shadow-sm btn-modal-action" onClick={() => {
                                            addItem({ id: selectedService.docId, name: selectedService.name, price: selectedService.price, image: selectedService.image });
                                            closeModal();
                                        }}>ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default ServiceTemplate;
