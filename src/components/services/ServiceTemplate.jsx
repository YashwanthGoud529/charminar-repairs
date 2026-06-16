'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICE_DATA_MAP, DEFAULT_SERVICE } from '@/config/serviceData';
import { useCartStore } from '@/store/cartStore';
import { db } from '@/lib/firebase';
import { doc, getDoc, collection, query, orderBy, getDocs } from 'firebase/firestore';
import './ServiceTemplate.css';

// --- SVG Icons Components ---
const ChevronRightIcon = ({ size = 10, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 18l6-6-6-6"/>
    </svg>
);

const PhoneIcon = ({ size = 18, className = "" }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" className={className}>
        <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
);

const CrownIcon = () => (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" className="me-1">
        <path d="M5 16h14v2H5zm14-8l-3.5 3.5-3.5-3.5-3.5 3.5L5 8V5h14v3z"/>
    </svg>
);

const ShieldCheckIcon = ({ size = 16, className = "" }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" className={className}>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
);

const CheckIcon = ({ size = 14, className = "" }) => (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 6L9 17l-5-5"/>
    </svg>
);

const PlusCircleIcon = () => (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success opacity-75">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
);

const MinusCircleIcon = () => (
    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-danger opacity-75">
        <circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
);

const TimesIcon = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
);

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
        setTimeout(() => setIsModalOpen(false), 300);
    };

    // Find parent service in SERVICE_DATA_MAP using case-insensitive and slug-matching lookup
    const findLocalService = (titleText) => {
        if (!titleText) return { name: '', data: null };
        const lowerTitle = titleText.toLowerCase().trim();
        const slugifiedTitle = titleText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        
        // Match keys
        for (const [key, val] of Object.entries(SERVICE_DATA_MAP)) {
            const keyLower = key.toLowerCase().trim();
            const keySlug = key.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            if (keyLower === lowerTitle || keySlug === slugifiedTitle) {
                return { name: key, data: val };
            }
        }
        
        // Match sub-services
        for (const [key, val] of Object.entries(SERVICE_DATA_MAP)) {
            const hasSub = val.subServices?.some(sub => {
                const subNameLower = (sub.name || '').toLowerCase().trim();
                const subIdLower = (sub.id || '').toLowerCase().trim();
                return subNameLower === lowerTitle || subIdLower === lowerTitle || subIdLower === slugifiedTitle;
            });
            if (hasSub) {
                return { name: key, data: val };
            }
        }
        
        return { name: titleText, data: null };
    };

    const resolved = findLocalService(baseTitle);
    let parentSvcName = resolved.name;
    let foundLocalSvc = resolved.data;

    useEffect(() => {
        const categorySlug = parentSvcName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        setIsLoadingDynamic(true);

        const fetchData = async () => {
            try {
                const catDocRef = doc(db, 'service_items', categorySlug);
                const catSnap = await getDoc(catDocRef);
                if (catSnap.exists()) {
                    setLiveSvc(catSnap.data());
                }

                const colRef = collection(db, 'service_items', categorySlug, 'sub_services');
                const q = query(colRef, orderBy('order', 'asc'));
                const snap = await getDocs(q);
                const items = snap.docs.map(d => {
                    const data = d.data();
                    const localSvc = (foundLocalSvc?.subServices || []).find(ls => ls.id === data.id);
                    return { 
                        docId: d.id, 
                        ...data,
                        image: data.image || localSvc?.image
                    };
                });
                setDynamicSubServices(items);
            } catch (err) {
                // Silently fall back to local data on permission errors (expected for non-public collections)
                if (err?.code !== 'permission-denied') {
                    console.error("Error fetching data:", err);
                }
            } finally {
                setIsLoadingDynamic(false);
            }
        };

        fetchData();
    }, [parentSvcName, foundLocalSvc]);

    const localConfigSvc = foundLocalSvc || DEFAULT_SERVICE;
    const svc = liveSvc ? { ...localConfigSvc, ...liveSvc } : localConfigSvc;

    const getProfessionalCategoryName = (categoryName, serviceName) => {
        const svc = (serviceName || '').toLowerCase();
        
        // AC
        if (svc.includes('air conditioner') || svc.includes('ac repair')) {
            if (categoryName === 'Repair & Gas Refill') return 'AC Repair & Gas Charging';
            if (categoryName === 'Installation & Uninstallation') return 'AC Installation & Removal';
            if (categoryName === 'Super Saver Packages') return 'AC Service Packages';
            if (categoryName === 'Service Options') return 'AC Servicing & Cleaning';
        }
        // Refrigerator
        if (svc.includes('refrigerator') || svc.includes('fridge')) {
            if (categoryName === 'Repair & Gas Refill') return 'Refrigerator Repair & Gas Charging';
            if (categoryName === 'Installation & Uninstallation') return 'Refrigerator Installation';
            if (categoryName === 'Super Saver Packages') return 'Refrigerator Packages';
            if (categoryName === 'Service Options') return 'Refrigerator Servicing';
        }
        // Washing Machine
        if (svc.includes('washing machine') || svc.includes('washer')) {
            if (categoryName === 'Repair & Gas Refill') return 'Washing Machine Repair';
            if (categoryName === 'Installation & Uninstallation') return 'Washing Machine Installation';
            if (categoryName === 'Super Saver Packages') return 'Washing Machine Packages';
            if (categoryName === 'Service Options') return 'Washing Machine Servicing';
        }
        // TV
        if (svc.includes('television') || svc.includes('tv')) {
            if (categoryName === 'Repair & Gas Refill') return 'TV Display & Board Repairs';
            if (categoryName === 'Installation & Uninstallation') return 'TV Mounting & Unmounting';
            if (categoryName === 'Super Saver Packages') return 'TV Service Packages';
            if (categoryName === 'Service Options') return 'TV Installation & Setup';
        }
        // Microwave
        if (svc.includes('microwave') || svc.includes('oven')) {
            if (categoryName === 'Repair & Gas Refill') return 'Microwave Repair & Magnetron Fix';
            if (categoryName === 'Installation & Uninstallation') return 'Microwave Installation';
            if (categoryName === 'Super Saver Packages') return 'Microwave Packages';
            if (categoryName === 'Service Options') return 'Microwave Servicing';
        }
        // RO Purifier
        if (svc.includes('purifier') || svc.includes('water filter') || svc.includes('ro')) {
            if (categoryName === 'Repair & Gas Refill') return 'RO Repair & Pump Swap';
            if (categoryName === 'Installation & Uninstallation') return 'RO Installation & Removal';
            if (categoryName === 'Super Saver Packages') return 'RO Service Packages';
            if (categoryName === 'Service Options') return 'RO Filter & Membrane Service';
        }
        // Geyser
        if (svc.includes('geyser') || svc.includes('water heater')) {
            if (categoryName === 'Repair & Gas Refill') return 'Geyser Repair & Elements';
            if (categoryName === 'Installation & Uninstallation') return 'Geyser Installation & Removal';
            if (categoryName === 'Super Saver Packages') return 'Geyser Service Packages';
            if (categoryName === 'Service Options') return 'Geyser Cleaning & Servicing';
        }
        // Chimney
        if (svc.includes('chimney') || svc.includes('kitchen chimney')) {
            if (categoryName === 'Repair & Gas Refill') return 'Chimney Repair & Parts';
            if (categoryName === 'Installation & Uninstallation') return 'Chimney Installation & Removal';
            if (categoryName === 'Super Saver Packages') return 'Chimney Cleaning Packages';
            if (categoryName === 'Service Options') return 'Chimney Servicing & De-greasing';
        }
        // Gas Stove
        if (svc.includes('stove') || svc.includes('hob')) {
            if (categoryName === 'Repair & Gas Refill') return 'Stove & Hob Repair Works';
            if (categoryName === 'Installation & Uninstallation') return 'Stove Installation & Setup';
            if (categoryName === 'Super Saver Packages') return 'Stove Service Packages';
            if (categoryName === 'Service Options') return 'Stove Cleaning & Maintenance';
        }
        // Dishwasher
        if (svc.includes('dishwasher')) {
            if (categoryName === 'Repair & Gas Refill') return 'Dishwasher Repair & Pump Fix';
            if (categoryName === 'Installation & Uninstallation') return 'Dishwasher Installation';
            if (categoryName === 'Super Saver Packages') return 'Dishwasher Packages';
            if (categoryName === 'Service Options') return 'Dishwasher Cleaning & Descaling';
        }
        // Vacuum Cleaner
        if (svc.includes('vacuum') || svc.includes('cleaner')) {
            if (categoryName === 'Repair & Gas Refill') return 'Vacuum Repair & Motor Fix';
            if (categoryName === 'Installation & Uninstallation') return 'Vacuum Installation';
            if (categoryName === 'Super Saver Packages') return 'Vacuum Service Packages';
            if (categoryName === 'Service Options') return 'Vacuum Servicing & Filters';
        }
        // Floor Polishing
        if (svc.includes('floor polishing') || svc.includes('marble') || svc.includes('polish')) {
            if (categoryName === 'Repair & Gas Refill') return 'Floor Polishing Services';
            if (categoryName === 'Installation & Uninstallation') return 'Epoxy & Grout Filling';
            if (categoryName === 'Super Saver Packages') return 'Floor Polishing Packages';
            if (categoryName === 'Service Options') return 'Floor Grinding & Restoration';
        }

        return categoryName;
    };

    const categorizeItem = (item) => {
        if (item.category) return item.category;
        const lowerName = (item.name || '').toLowerCase();
        if (lowerName.includes('install') || lowerName.includes('uninstall')) return 'Installation & Uninstallation';
        if (lowerName.includes('repair') || lowerName.includes('gas') || lowerName.includes('refill') || lowerName.includes('fix')) return 'Repair & Gas Refill';
        if (lowerName.includes('foam') || lowerName.includes('jet') || lowerName.includes('saver') || lowerName.includes('package')) return 'Super Saver Packages';
        if (lowerName.includes('service') || lowerName.includes('clean') || lowerName.includes('check')) return 'Service Options';
        return 'Other Services';
    };

    const displayItems = dynamicSubServices.length > 0 ? dynamicSubServices : (svc.subServices || []);
    const groupedItems = displayItems.reduce((acc, item) => {
        const cat = categorizeItem(item);
        const professionalCat = getProfessionalCategoryName(cat, parentSvcName);
        if (!acc[professionalCat]) acc[professionalCat] = [];
        acc[professionalCat].push(item);
        return acc;
    }, {});

    const activeCategories = Object.keys(groupedItems).sort((a, b) => {
        const order = { 
            // Super Saver Packages
            'Super Saver Packages': 1, 'AC Service Packages': 1, 'Refrigerator Packages': 1, 'Washing Machine Packages': 1, 'TV Service Packages': 1, 'Microwave Packages': 1, 'RO Service Packages': 1, 'Geyser Service Packages': 1, 'Chimney Cleaning Packages': 1, 'Stove Service Packages': 1, 'Dishwasher Packages': 1, 'Vacuum Service Packages': 1, 'Floor Polishing Packages': 1,
            
            // Service Options
            'Service Options': 2, 'AC Servicing & Cleaning': 2, 'Refrigerator Servicing': 2, 'Washing Machine Servicing': 2, 'TV Installation & Setup': 2, 'Microwave Servicing': 2, 'RO Filter & Membrane Service': 2, 'Geyser Cleaning & Servicing': 2, 'Chimney Servicing & De-greasing': 2, 'Stove Cleaning & Maintenance': 2, 'Dishwasher Cleaning & Descaling': 2, 'Vacuum Servicing & Filters': 2, 'Floor Grinding & Restoration': 2,
            
            // Repair & Gas Refill
            'Repair & Gas Refill': 3, 'AC Repair & Gas Charging': 3, 'Refrigerator Repair & Gas Charging': 3, 'Washing Machine Repair': 3, 'TV Display & Board Repairs': 3, 'Microwave Repair & Magnetron Fix': 3, 'RO Repair & Pump Swap': 3, 'Geyser Repair & Elements': 3, 'Chimney Repair & Parts': 3, 'Stove & Hob Repair Works': 3, 'Dishwasher Repair & Pump Fix': 3, 'Vacuum Repair & Motor Fix': 3, 'Floor Polishing Services': 3,
            
            // Installation & Uninstallation
            'Installation & Uninstallation': 4, 'AC Installation & Removal': 4, 'Refrigerator Installation': 4, 'Washing Machine Installation': 4, 'TV Mounting & Unmounting': 4, 'Microwave Installation': 4, 'RO Installation & Removal': 4, 'Geyser Installation & Removal': 4, 'Chimney Installation & Removal': 4, 'Stove Installation & Setup': 4, 'Dishwasher Installation': 4, 'Vacuum Installation': 4, 'Epoxy & Grout Filling': 4,
            
            'Other Services': 5 
        };
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
            const yOffset = -120;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleBookDirectly = (sub) => {
        const message = `Hello Charminar Repairs, I want to book the service: ${sub.name} in ${displayLocation} for ₹${sub.price}.`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/918008615049?text=${encodedMessage}`, '_blank');
    };

    const getServiceType = (serviceName) => {
        const name = (serviceName || '').toLowerCase();
        if (
            name.includes('cleaning') || 
            name.includes('sanitization') || 
            name.includes('wash') || 
            name.includes('wheels') ||
            name.includes('scrub') ||
            name.includes('scrubbing') ||
            name.includes('facade') ||
            name.includes('septic') ||
            name.includes('drainage') ||
            name.includes('tank') ||
            name.includes('sump')
        ) {
            if (name.includes('wash') || name.includes('wheels') || name.includes('auto') || name.includes('car')) {
                return 'detailing';
            }
            return 'cleaning';
        }
        if (name.includes('polish') || name.includes('polishing')) return 'polishing';
        if (
            name.includes('pest') || 
            name.includes('control') || 
            name.includes('termite') || 
            name.includes('woodborer') || 
            name.includes('bugs') || 
            name.includes('cockroach') || 
            name.includes('mosquito') ||
            name.includes('rodent') ||
            name.includes('rat') ||
            name.includes('beehive') ||
            name.includes('wasp') ||
            name.includes('ant')
        ) {
            return 'pest control';
        }
        if (name.includes('movers') || name.includes('packers') || name.includes('shifting')) return 'shifting';
        if (
            name.includes('safety') || 
            name.includes('cctv') || 
            name.includes('security') || 
            name.includes('lock') || 
            name.includes('locksmith') || 
            name.includes('waterproofing') || 
            name.includes('waterproof') || 
            name.includes('grille') || 
            name.includes('mesh') || 
            name.includes('netting')
        ) {
            return 'safety';
        }
        if (
            name.includes('it-') || 
            name.includes('wifi') || 
            name.includes('router') || 
            name.includes('pc') || 
            name.includes('computer') || 
            name.includes('printer') || 
            name.includes('software') || 
            name.includes('smarthome') || 
            name.includes('laptop') || 
            name.includes('tech') ||
            name.includes('office setup') ||
            name.includes('it & office')
        ) {
            return 'it';
        }
        return 'repairs';
    };

    const type = getServiceType(parentSvcName);
    const heroActionText = type === 'cleaning' ? 'Expert Cleaning in'
                         : type === 'polishing' ? 'Floor Polishing in'
                         : type === 'pest control' ? 'Pest Control in'
                         : type === 'detailing' ? 'Auto Detailing in'
                         : type === 'shifting' ? 'Packers & Movers in'
                         : type === 'safety' ? 'Security & Protection in'
                         : type === 'it' ? 'Home IT & Tech Setup in'
                         : 'Expert Repairs in';

    const prices = displayItems.map(item => Number(item.price) || 0).filter(p => p > 0);
    const minPrice = prices.length > 0 ? Math.min(...prices) : 149;

    const rawDesc = svc.desc || description || "Experience high-quality services from our certified technicians.";
    const heroDescription = rawDesc.replace(/<[^>]*>/g, '').replace(/Hyderabad/g, displayLocation);

    const guaranteeText = type === 'repairs' ? 'Guaranteed Repairs' : 'Guaranteed Care';

    return (
        <main className="service-detail-page service-detail-page-main bg-light pb-5">
            <div className="container custom-container px-lg-4 px-3">
                <nav className="mb-4 d-flex align-items-center gap-2" style={{ fontSize: '13px' }}>
                    <Link href="/" className="text-muted text-decoration-none hover-dark">Home</Link>
                    <ChevronRightIcon size={8} className="text-muted" />
                    <span className="text-primary fw-bold" style={{ color: '#673ab7' }}>{baseTitle} in {displayLocation}</span>
                </nav>

                <div className="row g-4 position-relative">
                    <div className="col-lg-4 col-xl-4 d-none d-lg-block">
                        <div className="mb-4 pb-2">
                            <h1 className="fw-bold text-dark lh-sm mb-2 sidebar-title">{baseTitle}</h1>
                            <div className="d-flex align-items-center gap-3">
                                <div className="d-flex align-items-center gap-1">
                                    <i className="fas fa-star text-warning sidebar-rating-star"></i>
                                    <span className="text-dark fs-5 fw-bold">4.85</span>
                                </div>
                                <span className="text-muted fw-normal sidebar-bookings-text">2.6 M bookings</span>
                            </div>
                        </div>

                        <div className="sticky-sidebar-container">
                            <div className="bg-white p-4 shadow-sm border service-selector-box">
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <span className="text-secondary fw-bold service-selector-label">Select a service</span>
                                    <hr className="flex-grow-1 my-0 text-muted opacity-25" />
                                </div>
                                <div className="row g-3">
                                    {activeCategories.map(cat => {
                                        const isSaver = cat.toLowerCase().includes('saver') || cat.toLowerCase().includes('package');
                                        const getCatConfig = (name) => {
                                            const lower = name.toLowerCase();
                                            if (lower.includes('repair') || lower.includes('fix') || lower.includes('charging') || lower.includes('board') || lower.includes('display')) {
                                                return { color: 'blue', icon: 'fas fa-tools' };
                                            }
                                            if (lower.includes('install') || lower.includes('removal') || lower.includes('mounting') || lower.includes('unmounting') || lower.includes('filling') || lower.includes('setup')) {
                                                return { color: 'green', icon: 'fas fa-plus-circle' };
                                            }
                                            if (lower.includes('service') || lower.includes('cleaning') || lower.includes('clean') || lower.includes('descaling') || lower.includes('maintenance') || lower.includes('grinding') || lower.includes('restoration')) {
                                                return { color: 'orange', icon: 'fas fa-cog' };
                                            }
                                            if (lower.includes('package')) {
                                                return { color: 'indigo', icon: 'fas fa-box' };
                                            }
                                            return { color: 'purple', icon: 'fas fa-concierge-bell' };
                                        };
                                        const config = getCatConfig(cat);

                                        return (
                                            <div key={cat} className="col-4 text-center px-1 category-item-container" style={{ cursor: 'pointer' }} onClick={() => scrollToCategory(cat)}>
                                                <div className={`mb-2 icon-box-colorful icon-box-${config.color} w-100 ${activeTab === cat ? 'active-cat-box shadow-sm' : 'opacity-75'}`} style={{ height: '60px', borderRadius: '12px' }}>
                                                    {isSaver ? (
                                                        <div className="text-center lh-1">
                                                            <span className="small d-block fw-bold opacity-75" style={{ fontSize: '10px' }}>UPTO</span>
                                                            <span className="fs-5 d-block fw-black">{svc.globalDiscount || 25}%</span>
                                                            <span className="small d-block fw-bold opacity-75" style={{ fontSize: '10px' }}>OFF</span>
                                                        </div>
                                                    ) : (
                                                        <i className={`${config.icon} fs-4`}></i>
                                                    )}
                                                </div>
                                                <div className={`lh-sm category-label-text ${activeTab === cat ? 'text-dark fw-bold' : 'text-secondary fw-medium'}`}>
                                                    {cat}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="mt-4 p-3 bg-light-soft border-top d-flex align-items-center gap-3 sidebar-contact-promo">
                                    <div className="icon-box-colorful icon-box-purple shadow-sm">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="fw-bold text-dark x-small lh-1 mb-1">Confused?</div>
                                        <Link href="/contact-us" className="text-primary fw-bold text-decoration-none small">Talk to expert</Link>
                                    </div>
                                    <i className="fas fa-chevron-right text-muted opacity-50 x-small"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 col-xl-8 col-12 ms-auto">
                        <div className="d-lg-none mb-4">
                            <h1 className="fw-black text-dark lh-sm mb-1 mobile-main-title">
                                Professional <span className="text-primary">{baseTitle}</span>
                            </h1>
                            <div className="d-flex align-items-center gap-2">
                                <i className="fas fa-star text-warning small-star-icon"></i>
                                <span className="text-dark fw-bold small-bookings-text">4.85 <span className="text-muted fw-normal">(2.6 M bookings)</span></span>
                            </div>
                        </div>

                        <div className="mb-4 shadow-sm border hero-banner-container">
                            <div className="hero-accent-pattern"></div>
                            <div className="row g-0 align-items-stretch position-relative hero-main-row">
                                <div className="col-md-7 p-lg-5 p-4 d-flex flex-column justify-content-center hero-text-side">
                                    <div className="d-flex align-items-center flex-wrap gap-2 mb-4">
                                        <div className="d-flex align-items-center gap-2 bg-primary text-white px-3 py-1 shadow-sm premium-badge-wrapper">
                                            <CrownIcon /> PREMIUM SERVICE
                                        </div>
                                        <div className="d-flex align-items-center gap-1 text-primary fw-bold satisfaction-guarantee">
                                            <ShieldCheckIcon /> 100% Satisfaction Guaranteed
                                        </div>
                                    </div>
                                    <h2 className="fw-black pb-3 text-dark d-md-block d-none hero-main-title">
                                        {heroActionText}<br />
                                        <span className="hero-title-highlight" style={{ color: '#673ab7' }}>{displayLocation}</span>
                                    </h2>
                                    <p className="text-secondary mb-4 d-md-block d-none hero-description">
                                        {heroDescription}
                                    </p>
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <div className="p-3 bg-white border border-light shadow-sm hero-stat-card">
                                                <div className="text-muted mb-1 fw-bold hero-stat-label">Investment</div>
                                                <div className="text-dark fw-black fs-4 text-nowrap">₹{minPrice}<span className="small text-muted fw-normal ms-1 hero-stat-unit">Start</span></div>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="p-3 bg-white border border-light shadow-sm hero-stat-card">
                                                <div className="text-muted mb-1 fw-bold hero-stat-label">{type === 'shifting' ? 'Service Speed' : 'Quick Fix'}</div>
                                                <div className="text-dark fw-black fs-4 text-nowrap">{type === 'shifting' ? 'Same Day' : '60'}<span className="small text-muted fw-normal ms-1 hero-stat-unit">{type === 'shifting' ? '' : 'Mins'}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 d-none d-md-block position-relative">
                                    <Image 
                                        src={svc.photo || '/images/ac-repair.png'} 
                                        className="w-50 h-50 object-fit-cover rounded-end" 
                                        alt={`${baseTitle} in ${displayLocation}`}
                                        fill
                                        priority
                                        sizes="(max-width: 768px) 100vw, 40vw"
                                    />
                                    <div className="hero-image-overlay"></div>
                                    <div className="hero-guarantee-badge">
                                        <div className="hero-guarantee-icon-circle">
                                            <CheckIcon className="hero-guarantee-icon text-white" size={12} />
                                        </div>
                                        <span className="hero-guarantee-text">{guaranteeText}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-2 g-md-2 mb-4 service-trust-badges-row px-1">
                            {[
                                { title: '30 Days Warranty', desc: 'No Additional Charges' },
                                { title: 'Rated Experts', desc: 'Repairing on-time' },
                                { title: 'Zero Inspection', desc: 'With No Charges' },
                                { title: 'Genuine Parts', desc: 'Reliable Components' }
                            ].map((b, i) => (
                                <div key={i} className="col-lg-3 col-md-3 col-6 p-1">
                                    <div className="p-2 d-flex align-items-center gap-2 h-100 shadow-sm border border-info border-opacity-10 trust-badge-box" style={{ backgroundColor: '#e0f2f7', borderRadius: '4px' }}>
                                        <div className="bg-success rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '16px', height: '16px' }}>
                                            <CheckIcon className="text-white" size={8} />
                                        </div>
                                        <div className="flex-grow-1">
                                            <div className="fw-black text-dark lh-1 mb-1" style={{ fontSize: '10px' }}>{b.title}</div>
                                            <div className="text-dark opacity-75 lh-1" style={{ fontSize: '9px' }}>{b.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="d-lg-none sticky-top py-2 shadow-sm sticky-mobile-tabs-container">
                            <div className="d-flex overflow-auto gap-2 no-scrollbar pb-1">
                                {activeCategories.map(cat => (
                                    <button key={cat} onClick={() => scrollToCategory(cat)} className={`btn btn-sm text-nowrap px-3 py-2 fw-bold transition-all mobile-tab-btn ${activeTab === cat ? 'btn-dark' : 'btn-light border-light opacity-75'}`}>
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="services-list-container">
                            {activeCategories.map(cat => (
                                    <div key={cat} id={`category-${cat.replace(/\s+/g, '-')}`} className="mb-4 bg-white shadow-sm p-4 border service-category-card" style={{ borderRadius: '4px' }}>
                                        <h3 className="fw-bold mb-4 pb-2 fs-4 text-dark border-bottom">{cat}</h3>
                                        <div className="row g-4">
                                            {groupedItems[cat].map((sub, i) => {
                                                const itemId = sub.docId || sub.id;
                                                const cartItem = cartItems.find(item => item.id === itemId);
                                                const discount = svc.globalDiscount || 20; // fallback to 20% if not defined
                                                const originalPrice = discount > 0 ? Math.round(sub.price / (1 - discount / 100)) : null;
                                                return (
                                                    <div key={i} className="col-lg-4 col-md-6 col-12">
                                                         <div className="shared-carousel-card most-booked-card hover-lift d-flex flex-column h-100 bg-white p-3 border" style={{ borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
                                                             {/* Image wrapper commented out for future dynamic loading */}
                                                             {/* 
                                                             <div className="img-wrapper safety-img-wrap" style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', borderRadius: '4px', overflow: 'hidden' }} onClick={() => { setSelectedService({ ...sub, category: cat }); setIsModalOpen(true); }}>
                                                                 {discount > 0 && (
                                                                     <div className="discount-tag" style={{ borderTopLeftRadius: '4px' }}>
                                                                         <span className="get-instant">Get Instant</span>
                                                                         <span className="percentage">{discount}%</span>
                                                                         <span className="off-text">OFF</span>
                                                                         <span className="booking-text">On First Booking</span>
                                                                     </div>
                                                                 )}
                                                                 <img 
                                                                     src={sub.image || svc.photo || '/images/ac-repair.png'} 
                                                                     alt={sub.name} 
                                                                     className="w-100 h-100 object-fit-cover" 
                                                                     style={{ borderRadius: '4px', cursor: 'pointer' }} 
                                                                 />
                                                             </div> 
                                                             */}
                                                             <div className="d-flex flex-column flex-grow-1 text-start">
                                                                 {discount > 0 && (
                                                                     <div className="mb-2">
                                                                         <span className="badge fw-bold" style={{ fontSize: '10px', padding: '4px 8px', backgroundColor: '#e8f5e9', color: '#2e7d32', borderRadius: '4px' }}>
                                                                             Get {discount}% OFF on First Booking
                                                                         </span>
                                                                     </div>
                                                                 )}
                                                                 
                                                                 <h3 className="service-title text-start mt-1 mb-2" style={{ fontSize: '16px', color: '#1a1a1a', fontWeight: '700', cursor: 'pointer' }} onClick={() => { setSelectedService({ ...sub, category: cat }); setIsModalOpen(true); }}>
                                                                     {sub.name}
                                                                 </h3>
                                                                 
                                                                 {/* {sub.desc && (
                                                                     <p className="text-secondary text-start mb-3" style={{ fontSize: '12.5px', lineHeight: '1.5', minHeight: '40px' }}>
                                                                         {sub.desc}
                                                                     </p>
                                                                 )} */}
                                                                 
                                                                 <div className="d-flex align-items-center justify-content-between mt-auto pt-2 border-top">
                                                                     <div className="d-flex align-items-baseline gap-1">
                                                                         <span className="fw-black text-dark fs-5">₹{sub.price}</span>
                                                                         {sub.unit && <span className="text-muted small" style={{ fontSize: '11px' }}>{sub.unit}</span>}
                                                                         {originalPrice && (
                                                                             <span className="text-muted text-decoration-line-through ms-1" style={{ fontSize: '11px' }}>₹{originalPrice}</span>
                                                                         )}
                                                                     </div>
                                                                     
                                                                     <div className="d-flex align-items-center gap-3">
                                                                         <div className="hover-underline cursor-pointer small fw-bold" style={{ color: '#673ab7', fontSize: '12px', fontWeight: '600' }} onClick={() => { setSelectedService({ ...sub, category: cat }); setIsModalOpen(true); }}>
                                                                             View details
                                                                         </div>
                                                                         
                                                                         <button 
                                                                             className="btn bg-white shadow-sm fw-bold py-1 px-3 hover-lift" 
                                                                             style={{ fontSize: '12px', border: '1.5px solid #24b24b', color: '#24b24b', borderRadius: '4px' }} 
                                                                             onClick={() => handleBookDirectly(sub)}
                                                                         >
                                                                             BOOK
                                                                         </button>
                                                                     </div>
                                                                 </div>
                                                             </div>
                                                         </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            {isModalOpen && selectedService && (
                <div className={`modal d-block details-modal-overlay ${isModalActive ? 'active' : ''}`}>
                    <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable modal-xxl-dialog">
                        <div className="modal-content border-0 shadow-lg position-relative details-modal-content modal-xxl-content" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                            <button className="btn position-absolute top-0 end-0 m-3 shadow-lg d-flex align-items-center justify-content-center modal-close-red z-3" onClick={closeModal} style={{ width: '38px', height: '38px', borderRadius: '50%', backgroundColor: '#ef4444', border: 'none' }}>
                                <TimesIcon className="text-white" size={20} />
                            </button>

                            <div className="modal-body p-0 bg-white h-100 overflow-hidden">
                                <div className="row g-0 h-100">
                                    <div className="col-lg-5 d-none d-lg-block bg-dark h-100">
                                        <div className="h-100 position-relative">
                                            <img src={selectedService.image || svc.photo || '/images/washing-machine.png'} className="w-100 h-100 object-fit-cover opacity-75" alt={selectedService.name} />
                                            <div className="position-absolute bottom-0 start-0 w-100 p-5 bg-gradient-to-t from-black to-transparent">
                                                <h3 className="text-white fw-black fs-1 mb-2">{selectedService.name}</h3>
                                                <div className="d-flex align-items-center gap-2 mb-4">
                                                    <img src="/assets/Images/star.png" alt="Star" style={{ width: '16px', height: '16px' }} />
                                                    <span className="text-white fw-bold">4.8 (Verified Bookings)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-7 col-12 h-100 overflow-auto p-lg-5 p-4 custom-scrollbar">
                                        <div className="d-lg-none mb-4"><h2 className="fw-black text-dark">{selectedService.name}</h2></div>
                                        <div className="mb-5">
                                            <div className="d-flex align-items-center justify-content-between mb-4 border-bottom pb-4">
                                                <div><h3 className="fw-black text-dark mb-1 fs-2">Details</h3><p className="text-muted mb-0">Certified Experts</p></div>
                                                <div className="text-end">
                                                    <div className="text-primary fw-black fs-2">₹{selectedService.price}{selectedService.unit ? ` ${selectedService.unit}` : ''}</div>
                                                </div>
                                            </div>
                                            <div className="p-4 bg-light border border-light mb-5 rounded-4">
                                                <h5 className="fw-bold text-dark ">Description</h5>
                                                <p className="text-secondary mb-0 lh-lg small">{selectedService.desc || svc.description}</p>
                                            </div>

                                            <div className="row g-4">
                                                <div className="col-md-6">
                                                    <h4 className="fw-black mb-4 fs-5 text-dark border-start border-primary border-4 ps-3">Process</h4>
                                                    <div className="d-flex flex-column gap-3">
                                                        {(svc.restorationFramework || [
                                                            { title: 'Consultation', icon: 'fas fa-clipboard' },
                                                            { title: 'Diagnosis', icon: 'fas fa-search' },
                                                            { title: 'Execution', icon: 'fas fa-tools' },
                                                            { title: 'Quality Check', icon: 'fas fa-check-circle' }
                                                        ]).map((item, idx) => (
                                                            <div key={idx} className="d-flex gap-3 align-items-center">
                                                                <div className="process-step-indicator small">{idx + 1}</div>
                                                                <div className="fw-bold small">{item.title}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <h4 className="fw-black mb-4 fs-5 text-dark border-start border-primary border-4 ps-3">Brands</h4>
                                                    <div className="row g-2">
                                                        {(svc.brands || ['All Brands', 'All Models']).slice(0, 9).map(b => (
                                                            <div key={b} className="col-4">
                                                                <div className="border border-light p-2 text-center text-secondary small fw-bold rounded" style={{ fontSize: '10px' }}>{b}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row g-4 mb-5 border-top pt-5">
                                            <div className="col-md-6">
                                                <h5 className="fw-black text-dark mb-4 d-flex align-items-center gap-2"><PlusCircleIcon /> Included</h5>
                                                <ul className="list-unstyled d-flex flex-column gap-2">
                                                    {(svc.inclusions || ['Professional service', '180-day warranty']).map((item, idx) => (
                                                        <li key={idx} className="d-flex gap-2 text-secondary small">
                                                            <i className="fas fa-check text-success mt-1" style={{ fontSize: '12px' }}></i> {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <h5 className="fw-black text-dark mb-4 d-flex align-items-center gap-2"><MinusCircleIcon /> Excluded</h5>
                                                <ul className="list-unstyled d-flex flex-column gap-2">
                                                    {(svc.exclusions || ['Parts cost']).map((item, idx) => (
                                                        <li key={idx} className="d-flex gap-2 text-secondary small">
                                                            <i className="fas fa-times text-danger mt-1" style={{ fontSize: '12px' }}></i> {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="modal-footer border-top bg-white p-4 d-flex justify-content-between align-items-center interaction-footer-sticky">
                                    <div className="d-md-block d-none"><div className="fw-black text-dark fs-3">₹{selectedService.price}{selectedService.unit ? ` ${selectedService.unit}` : ''}</div></div>
                                    <div className="d-flex gap-2">
                                        <button className="btn btn-light fw-bold px-4 py-2" style={{ borderRadius: '10px' }} onClick={closeModal}>Close</button>
                                        <button className="btn btn-primary fw-black px-4 py-2 shadow-sm" style={{ borderRadius: '10px' }} onClick={() => {
                                            handleBookDirectly(selectedService);
                                            closeModal();
                                        }}>BOOK NOW</button>
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
