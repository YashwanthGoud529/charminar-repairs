'use client';

import React, { useState, useMemo } from 'react';
import PageHero from '@/components/shared/PageHero';
import BookBanner from '@/components/home/BookBanner';
import './PricingContent.css';

// Centralized icon map that works with both slug formats
const categoryIconMap = {
    'air-conditioning': 'fa-snowflake',
    'air-conditioner-repair': 'fa-snowflake',
    'refrigeration': 'fa-icicles',
    'refrigerator-repair': 'fa-icicles',
    'washing-machines': 'fa-sync-alt',
    'washing-machine-repair': 'fa-sync-alt',
    'tv-entertainment': 'fa-tv',
    'television-repair': 'fa-tv',
    'kitchen-expert': 'fa-utensils',
    'microwave-oven': 'fa-wave-square',
    'dishwasher-repair': 'fa-glass-whiskey',
    'geyser-water-heater': 'fa-hot-tub',
    'kitchen-chimney': 'fa-fan',
    'water-purifier-ro': 'fa-tint',
    'laptop-desktop-repair': 'fa-laptop'
};

const getCategoryIcon = (slug) => categoryIconMap[slug] || 'fa-tools';

const PricingContent = () => {
    const [dynamicPricingData, setDynamicPricingData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('');

    React.useEffect(() => {
        const fetchAllPricing = async () => {
            setIsLoading(true);
            try {
                const { getDocs, collection, query, orderBy } = await import('firebase/firestore');
                const { db } = await import('@/lib/firebase');
                const { SERVICE_DATA_MAP } = await import('@/config/serviceData');

                const seenSlugs = new Set();
                const categories = Object.keys(SERVICE_DATA_MAP).map(catName => {
                   const slug = catName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                   if (seenSlugs.has(slug)) return null;
                   seenSlugs.add(slug);
                   return {
                       name: catName,
                       slug: slug
                   };
                }).filter(Boolean);

                // Parallel synchronization for all categories
                const fetchPromises = categories.map(async (cat) => {
                    try {
                        const colRef = collection(db, 'service_items', cat.slug, 'sub_services');
                        const q = query(colRef, orderBy('order', 'asc'));
                        const snap = await getDocs(q);
                        
                        // Use Cloud Data if available
                        if (!snap.empty) {
                            return {
                                id: cat.slug,
                                category: cat.name,
                                icon: getCategoryIcon(cat.slug),
                                items: snap.docs.map(d => ({
                                    service: d.data().name,
                                    details: d.data().desc,
                                    price: d.data().price
                                }))
                            };
                        }
                    } catch (e) {
                        console.warn(`Firestore sync skipped for ${cat.slug}`);
                    }

                    // Automatic engine fallback if Firestore has no data or fails
                    if (SERVICE_DATA_MAP[cat.name]?.subServices) {
                        return {
                            id: cat.slug,
                            category: cat.name,
                            icon: getCategoryIcon(cat.slug),
                            items: SERVICE_DATA_MAP[cat.name].subServices.map(s => ({
                                service: s.name,
                                details: s.desc,
                                price: s.price
                            }))
                        };
                    }
                    return null;
                });

                const results = await Promise.all(fetchPromises);
                const allData = results.filter(Boolean);
                
                setDynamicPricingData(allData);
                if (allData.length > 0) setActiveTab(allData[0].id);
            } catch (err) {
                console.error("Critical error in pricing load:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllPricing();
    }, []);

    const activeCategory = useMemo(() => 
        dynamicPricingData.find(cat => cat.id === activeTab), 
    [activeTab, dynamicPricingData]);

    return (
        <div className="pricing-premium-experience">
            <PageHero
                title="Professional Service Pricing"
                subtitle="Transparent, upfront, and market-competitive rates for all your home appliance repairs across Hyderabad."
                breadcrumb="Service Rate Card"
            />

            <section className="pricing-explorer mt-n3 pb-5">
                <div className="container px-xl-5">
                    <div className="pricing-nav-container mx-auto mb-5">
                        <div className="pricing-glass-tabs d-flex align-items-center justify-content-start flex-nowrap overflow-auto hide-scrollbar p-2">
                            {isLoading && dynamicPricingData.length === 0 ? (
                                <div className="text-purple small px-4 py-2 fw-bold">Connecting to Pricing Engine...</div>
                            ) : (
                                dynamicPricingData.map((cat, idx) => (
                                    <button
                                        key={`${cat.id}-${idx}`}
                                        className={`pricing-premium-tab ${activeTab === cat.id ? 'active' : ''}`}
                                        onClick={() => setActiveTab(cat.id)}
                                    >
                                        <div className="tab-icon-box">
                                            <i className={`fas ${cat.icon}`}></i>
                                        </div>
                                        <span className="tab-label">{cat.category}</span>
                                    </button>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="row g-4 mt-5">
                        <div className="col-lg-8 text-start">
                            <div className="premium-rate-card shadow-lg">
                                <div className="card-top-accent"></div>
                                <div className="p-4 p-md-5">
                                    {isLoading && dynamicPricingData.length === 0 ? (
                                        <div className="py-5 text-center">
                                            <div className="spinner-border text-purple" role="status"></div>
                                            <p className="mt-3 text-muted">Synchronizing rates...</p>
                                        </div>
                                    ) : activeCategory ? (
                                        <>
                                            <div className="d-flex align-items-center mb-5 flex-wrap gap-4">
                                                <div className="category-glow-icon">
                                                    <i className={`fas ${activeCategory.icon}`}></i>
                                                </div>
                                                <div className="flex-grow-1 text-start">
                                                    <h2 className="fw-black mb-1 text-dark">{activeCategory.category}</h2>
                                                    <p className="mb-0 text-muted small uppercase tracking-wider">Expert Service Rate Card</p>
                                                </div>
                                                <div className="d-none d-sm-block">
                                                    <span className="badge-premium">
                                                        <i className="fas fa-history me-2"></i> Verified Rate
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="pricing-grid">
                                                {activeCategory.items.map((item, i) => (
                                                    <div key={i} className="pricing-row d-flex flex-column flex-sm-row justify-content-between align-items-sm-center py-4 gap-3">
                                                        <div className="service-meta text-start">
                                                            <h5 className="fw-bold text-dark mb-1">{item.service}</h5>
                                                            <p className="mb-0 text-muted small pe-md-5">{item.details}</p>
                                                        </div>
                                                        <div className="price-output text-start text-sm-end">
                                                            <div className="price-label text-purple fw-bold x-small uppercase">From</div>
                                                            <div className="price-digits fs-4">
                                                                <span className="currency small">₹</span>
                                                                <span className="amount">{item.price}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <div className="py-5 text-center">
                                            <h4 className="fw-bold">No Rates Available</h4>
                                            <p className="text-muted">Please contact support for dynamic pricing.</p>
                                        </div>
                                    )}

                                    <div className="pricing-disclaimer-card mt-5">
                                        <div className="d-flex gap-3">
                                            <div className="text-purple fs-4">
                                                <i className="fas fa-info-circle"></i>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-muted small">
                                                    Final estimates depend on <strong>brand, spare parts, and complexity</strong>.
                                                </p>
                                                <p className="mb-0 text-purple fw-bold small mt-2">
                                                    * Visiting charges of ₹299 are waived if you proceed with repair.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 text-start">
                            <div className="sticky-top pt-4" style={{ top: '100px' }}>
                                <div className="trust-sidebar-card shadow-lg p-5">
                                    <h4 className="fw-black mb-4">Why Us?</h4>
                                    {[
                                        { title: "Standard Pricing", desc: "No random quotes. Fixed rate card.", icon: "fa-tags" },
                                        { title: "1-Year Warranty", desc: "Labor and genuine spares covered.", icon: "fa-certificate" },
                                        { title: "Verified Experts", desc: "Background checked technicians.", icon: "fa-user-check" }
                                    ].map((item, idx) => (
                                        <div key={idx} className="d-flex gap-3 mb-4">
                                            <div className="trust-icon-box flex-shrink-0">
                                                <i className={`fas ${item.icon}`}></i>
                                            </div>
                                            <div>
                                                <h6 className="fw-bold mb-1">{item.title}</h6>
                                                <p className="small text-white-50 mb-0">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <a href="tel:8008615049" className="btn btn-call-premium w-100 mt-4">
                                        CALL +91-8008615049
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pricing-faq py-5 mt-5">
                <div className="container custom-container">
                    <div className="text-center mb-5">
                        <span className="badge bg-soft-purple text-purple px-4 py-2 mb-3 fw-bold uppercase">FAQ</span>
                        <h2 className="fw-black fs-1">Common Queries</h2>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {[
                            { q: "What is your diagnostic fee?", a: "₹299, waived on repair." },
                            { q: "Do you use original parts?", a: "100% genuine OEM components only." },
                            { q: "Response time?", a: "Average 90 minutes across Hyderabad." }
                        ].map((faq, i) => (
                            <div key={i} className="col-lg-8">
                                <div className="p-4 bg-white shadow-sm border border-light rounded-3">
                                    <h5 className="fw-bold mb-2 text-purple">{faq.q}</h5>
                                    <p className="text-muted mb-0">{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <BookBanner />
        </div>
    );
};

export default PricingContent;
