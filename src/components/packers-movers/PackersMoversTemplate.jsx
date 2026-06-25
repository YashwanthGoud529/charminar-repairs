'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import toast from 'react-hot-toast';
import './PackersMoversTemplate.css';

// SVG Icons
const ShieldCheckIcon = ({ size = 20, className = "" }) => (
    <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" className={className}>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
);

const CheckIcon = ({ size = 16, className = "" }) => (
    <svg width={size} height={size} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M20 6L9 17l-5-5"/>
    </svg>
);

const PackersMoversTemplate = ({ displayLocation }) => {
    const { addItem } = useCartStore();

    // Shifting Form States
    const [shiftingCategory, setShiftingCategory] = useState('Within City'); // Within City, Between City, Within Society
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropLocation, setDropLocation] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [shiftingDate, setShiftingDate] = useState('');
    const [liftPickup, setLiftPickup] = useState(true);
    const [liftDrop, setLiftDrop] = useState(true);

    // Flow state
    const [step, setStep] = useState(1); // 1 = Form from screenshot, 2 = Shifting Size selection & Price display
    const [shiftingSize, setShiftingSize] = useState('2bhk');
    const [doorstepWash, setDoorstepWash] = useState(false);

    // Price Mapping Structure
    const sizeConfig = {
        '1bhk': { label: '1 BHK Apartment Shifting', basePrice: 4499, packing: 1000, transport: 2000, labor: 1499 },
        '2bhk': { label: '2 BHK Apartment Shifting', basePrice: 6999, packing: 1800, transport: 3200, labor: 1999 },
        '3bhk': { label: '3 BHK Apartment Shifting', basePrice: 9999, packing: 2500, transport: 4800, labor: 2699 },
        'villa': { label: '4 BHK / Luxury Villa Relocation', basePrice: 15499, packing: 4000, transport: 7000, labor: 4499 },
        'office': { label: 'Office & Corporate Relocation', basePrice: 14999, packing: 4000, transport: 6500, labor: 4499 },
        'bike': { label: 'Two-Wheeler / Bike Transportation', basePrice: 1999, packing: 500, transport: 1100, labor: 399 },
        'car': { label: 'Four-Wheeler / Car Transportation', basePrice: 4499, packing: 1200, transport: 2500, labor: 799 },
        'lorry': { label: 'Cargo Lorry / Heavy Truck Rental', basePrice: 7999, packing: 1500, transport: 5000, labor: 1499 },
        'vehicle': { label: 'Other Vehicle Transportation', basePrice: 2499, packing: 800, transport: 1200, labor: 499 }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!pickupLocation) {
            toast.error('Please enter a pickup location');
            return;
        }
        if (!dropLocation) {
            toast.error('Please enter a drop location');
            return;
        }
        if (!phoneNumber || phoneNumber.length < 10) {
            toast.error('Please enter a valid 10-digit mobile number');
            return;
        }
        if (!shiftingDate) {
            toast.error('Please select a shifting date');
            return;
        }
        setStep(2); // Go to step 2 (Shifting size & quote calculation)
        toast.success('Details verified! Please select your shifting size.');
    };

    const getWashPrice = () => {
        if (shiftingSize === 'bike') return 399;
        if (shiftingSize === 'car') return 999;
        if (shiftingSize === 'lorry') return 1999;
        if (shiftingSize === 'vehicle') return 499;
        return 1499; // Move-in Sanitization & Deep Cleaning
    };

    const getWashLabel = () => {
        if (shiftingSize === 'bike') return 'Add Doorstep Bike Wash & Polish';
        if (shiftingSize === 'car') return 'Add Doorstep Car Foam Wash & Polish';
        if (shiftingSize === 'lorry') return 'Add Lorry Cargo Exterior Wash';
        if (shiftingSize === 'vehicle') return 'Add Doorstep Vehicle Wash';
        return 'Add Move-in Sanitization & Deep Cleaning';
    };

    // Calculate Dynamic Quote
    const getFinalEstimate = () => {
        const config = sizeConfig[shiftingSize];
        if (!config) return null;

        let multiplier = 1;
        if (shiftingCategory === 'Between City') multiplier = 1.8;
        if (shiftingCategory === 'Within Society') multiplier = 0.45;

        let base = Math.round(config.basePrice * multiplier);
        let packing = Math.round(config.packing * multiplier);
        let transport = Math.round(config.transport * multiplier);
        let labor = Math.round(config.labor * (multiplier > 1 ? 1.4 : multiplier));

        // Penalty if there is no elevator (lifts)
        let liftPenalty = 0;
        if (!liftPickup) liftPenalty += 500;
        if (!liftDrop) liftPenalty += 500;

        let washCost = doorstepWash ? getWashPrice() : 0;
        const total = base + liftPenalty + washCost;

        return {
            label: config.label,
            totalPrice: total,
            breakdown: {
                packing,
                transport,
                labor: labor + liftPenalty,
                liftSaving: liftPenalty === 0 ? 1000 : (liftPenalty === 500 ? 500 : 0),
                washCost
            }
        };
    };

    const finalQuote = getFinalEstimate();

    const handleBookShifting = () => {
        if (!finalQuote) return;
        
        let labelSuffix = doorstepWash ? ` + Doorstep Wash/Sanitization` : '';
        const message = `Hello MeeHelper, I want to book Packers & Movers service:\n- Type: ${finalQuote.label} (${shiftingCategory})${labelSuffix}\n- From: ${pickupLocation}\n- To: ${dropLocation}\n- Estimated Price: ₹${finalQuote.totalPrice}\n- Date: ${shiftingDate}\n- Phone: ${phoneNumber}`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/918008615049?text=${encodedMessage}`, '_blank');

        // Reset flow
        setStep(1);
        setDoorstepWash(false);
    };

    return (
        <div className="packers-movers-template">
            {/* HERO SECTION */}
            <section className="pm-hero-section position-relative py-5">
                <div className="container custom-container position-relative z-1">
                    {/* Header text */}
                    <div className="text-center text-white mb-5 animate-fade-in-up">
                        <div className="d-inline-flex mb-3">
                            <div className="pm-hero-badge">
                                <span className="pulse-dot"></span>
                                ★ #1 Rated Packers & Movers in Hyderabad
                            </div>
                        </div>
                        <h1 className="pm-hero-title mb-3">
                            Enjoy <span className="pm-text-gradient-gold">Hassle-Free</span> Shifting
                        </h1>
                        <p className="pm-hero-subtitle mb-4">
                            Hyderabad's most trusted household packing & relocation partners
                        </p>
                        <div className="pm-feature-pills-row">
                            <div className="pm-feature-pill">
                                <i className="fas fa-truck"></i>
                                Own Container Fleet
                            </div>
                            <div className="pm-feature-pill">
                                <i className="fas fa-shield-halved"></i>
                                100% Insured Shifting
                            </div>
                            <div className="pm-feature-pill">
                                <i className="fas fa-user-check"></i>
                                In-House Trained Crew
                            </div>
                        </div>
                    </div>

                    {/* Reference UI Tabs */}
                    <div className="pm-ui-tabs-row d-flex justify-content-center gap-3 mb-3">
                        {['Within City', 'Between City', 'Within Society'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setShiftingCategory(cat);
                                    setStep(1); // Reset back to step 1 form
                                }}
                                className={`pm-ui-tab-btn ${shiftingCategory === cat ? 'active' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Hyderabad Location Badge */}
                    <div className="d-flex justify-content-center">
                        <div className="pm-city-badge shadow-sm">
                            <i className="fas fa-map-marker-alt text-danger me-2"></i>
                            Hyderabad <span className="text-danger">*</span>
                        </div>
                    </div>

                    {/* Reference UI Input Card */}
                    <div className="pm-calculator-card bg-white p-4 shadow-lg mx-auto" style={{ maxWidth: '950px' }}>
                        {step === 1 ? (
                            <form onSubmit={handleFormSubmit}>
                                <div className="row g-3 align-items-end mb-4">
                                    <div className="col-md-3 text-start">
                                        <label className="form-label fw-bold text-dark small">Pickup Location <span className="text-danger">*</span></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Sending from"
                                            value={pickupLocation}
                                            onChange={(e) => setPickupLocation(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-3 text-start">
                                        <label className="form-label fw-bold text-dark small">Drop Location <span className="text-danger">*</span></label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Sending to"
                                            value={dropLocation}
                                            onChange={(e) => setDropLocation(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-3 text-start">
                                        <label className="form-label fw-bold text-dark small">Phone Number <span className="text-danger">*</span></label>
                                        <input 
                                            type="tel" 
                                            className="form-control" 
                                            placeholder="Enter Contact Details"
                                            maxLength="10"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-3 text-start">
                                        <label className="form-label fw-bold text-dark small">Shifting Date <span className="text-danger">*</span></label>
                                        <input 
                                            type="date" 
                                            className="form-control" 
                                            value={shiftingDate}
                                            onChange={(e) => setShiftingDate(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <hr className="my-4" style={{ borderColor: '#e2e8f0', opacity: 0.15 }} />

                                <div className="row g-4 mb-4 text-start">
                                    <div className="col-md-6 d-flex align-items-center gap-3">
                                        <div className="form-check form-switch custom-switch flex-shrink-0">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="liftPickup" 
                                                checked={liftPickup}
                                                onChange={(e) => setLiftPickup(e.target.checked)}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="liftPickup" className="form-label fw-bold text-dark mb-0 style-switch-label">Service lift available at pickup</label>
                                            <p className="text-muted x-small mb-0">A working service lift will reduce the overall quote</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center gap-3">
                                        <div className="form-check form-switch custom-switch flex-shrink-0">
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox" 
                                                id="liftDrop" 
                                                checked={liftDrop}
                                                onChange={(e) => setLiftDrop(e.target.checked)}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="liftDrop" className="form-label fw-bold text-dark mb-0 style-switch-label">Service lift available at drop</label>
                                            <p className="text-muted x-small mb-0">A working service lift will reduce the overall quote</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center pt-2">
                                    <p className="text-muted small mb-2 fw-medium">Get a house Inspection for <span className="text-danger fw-bold">Free</span></p>
                                    <button type="submit" className="btn btn-danger btn-lg px-5 py-3 fw-bold rounded-3 shadow hover-lift pm-next-btn">
                                        Next
                                    </button>
                                </div>
                            </form>
                        ) : (
                            /* Step 2: Selecting Shifting Size and displaying quote */
                            <div className="animate-fade-in-up text-start">
                                <button onClick={() => setStep(1)} className="btn btn-link text-decoration-none text-muted mb-3 p-0 small">
                                    ← Edit shifting locations & details
                                </button>
                                <h4 className="fw-black text-dark mb-1 fs-5">Step 2: Select Shifting Size</h4>
                                <p className="text-muted small mb-4">Shifting details: From <strong>{pickupLocation}</strong> to <strong>{dropLocation}</strong> on <strong>{shiftingDate}</strong></p>
                                
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-bold text-dark small">House Shifting Layout / Size / Vehicle</label>
                                            <select 
                                                className="form-select form-select-lg"
                                                value={shiftingSize}
                                                onChange={(e) => setShiftingSize(e.target.value)}
                                            >
                                                <option value="1bhk">1 BHK Apartment Shifting</option>
                                                <option value="2bhk">2 BHK Apartment Shifting</option>
                                                <option value="3bhk">3 BHK Apartment Shifting</option>
                                                <option value="villa">4 BHK / Luxury Villa Relocation</option>
                                                <option value="office">Office & Corporate Relocation</option>
                                                <option value="bike">Two-Wheeler / Bike Transportation</option>
                                                <option value="car">Four-Wheeler / Car Transportation</option>
                                                <option value="lorry">Cargo Lorry / Heavy Truck Rental</option>
                                                <option value="vehicle">Other Vehicle Transportation</option>
                                            </select>
                                        </div>

                                        {/* Doorstep Wash Addon Card */}
                                        <div className="mb-4 p-3 border rounded-3 bg-white shadow-sm d-flex align-items-center justify-content-between hover-lift">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="icon-box-colorful icon-box-blue flex-shrink-0" style={{ width: '40px', height: '40px', borderRadius: '8px' }}>
                                                    <i className="fas fa-soap fs-5 text-primary"></i>
                                                </div>
                                                <div>
                                                    <h6 className="fw-bold text-dark mb-0 small">{getWashLabel()}</h6>
                                                    <p className="text-muted x-small mb-0">Professional doorstep deep sanitization & cleaning</p>
                                                </div>
                                            </div>
                                            <div className="text-end d-flex align-items-center gap-3">
                                                <span className="fw-black text-success small">+₹{getWashPrice()}</span>
                                                <div className="form-check form-switch custom-switch mb-0">
                                                    <input 
                                                        className="form-check-input" 
                                                        type="checkbox" 
                                                        id="doorstepWashAddon" 
                                                        checked={doorstepWash}
                                                        onChange={(e) => setDoorstepWash(e.target.checked)}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-3 bg-light rounded-3">
                                            <h6 className="fw-bold text-dark mb-2 small">Shifting Parameters Checked:</h6>
                                            <ul className="list-unstyled d-flex flex-column gap-2 mb-0 x-small text-secondary">
                                                <li>🚚 Shifting Corridor Type: <strong>{shiftingCategory}</strong></li>
                                                <li>🏢 Lift at Pickup: <strong>{liftPickup ? 'Yes (Saves labor)' : 'No (Requires stairs carrying)'}</strong></li>
                                                <li>🏢 Lift at Drop: <strong>{liftDrop ? 'Yes (Saves labor)' : 'No (Requires stairs carrying)'}</strong></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-6 border-start border-light ps-md-4">
                                        {finalQuote && (
                                            <div className="pm-final-quote-box p-4 rounded-3 border">
                                                <div className="d-flex justify-content-between align-items-center mb-3">
                                                    <span className="fw-bold text-dark-blue">ESTIMATED RATE:</span>
                                                    <h3 className="fw-black text-success mb-0 fs-2">₹{finalQuote.totalPrice}</h3>
                                                </div>
                                                <hr className="my-3 opacity-10" />
                                                <div className="small text-secondary mb-4">
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <span>Multi-Layer Cushion Packing:</span>
                                                        <span>₹{finalQuote.breakdown.packing}</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <span>Closed Container Transport:</span>
                                                        <span>₹{finalQuote.breakdown.transport}</span>
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <span>Loading/Unloading Labor:</span>
                                                        <span>₹{finalQuote.breakdown.labor}</span>
                                                    </div>
                                                    {doorstepWash && (
                                                        <div className="d-flex justify-content-between mb-2 text-primary fw-bold">
                                                            <span>{getWashLabel().replace('Add ', '')}:</span>
                                                            <span>+₹{finalQuote.breakdown.washCost}</span>
                                                        </div>
                                                    )}
                                                </div>
                                                <button onClick={handleBookShifting} className="btn btn-danger w-100 btn-lg fw-bold rounded-3 shadow hover-lift py-3">
                                                    CONFIRM & BOOK VIA WHATSAPP
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="pm-hero-bg-overlay"></div>
            </section>

            {/* HIGHLIGHT FEATURES ROW */}
            <section className="py-4 bg-light border-bottom">
                <div className="container custom-container px-lg-4">
                    <div className="row g-3 text-center">
                        <div className="col-md-4">
                            <div className="p-3 bg-white border rounded shadow-sm hover-lift d-flex align-items-center gap-3 text-start">
                                <div className="icon-box-colorful icon-box-red flex-shrink-0">
                                    <i className="fas fa-clock fs-5"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold text-dark mb-1">On-Time Shifting</h6>
                                    <p className="text-secondary x-small mb-0">Experience reliable, punctual packers and movers services</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 bg-white border rounded shadow-sm hover-lift d-flex align-items-center gap-3 text-start">
                                <div className="icon-box-colorful icon-box-green flex-shrink-0">
                                    <i className="fas fa-indian-rupee-sign fs-5"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold text-dark mb-1">Economical Prices</h6>
                                    <p className="text-secondary x-small mb-0">Hassle-free moving services that fit your budget perfectly</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 bg-white border rounded shadow-sm hover-lift d-flex align-items-center gap-3 text-start">
                                <div className="icon-box-colorful icon-box-blue flex-shrink-0">
                                    <i className="fas fa-shield-halved fs-5"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold text-dark mb-1">Damage-Proof Packaging</h6>
                                    <p className="text-secondary x-small mb-0">Multi-layered packing to ensure safe movement of goods</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRO AND STRENGTHS SECTION */}
            <section className="py-5 bg-white">
                <div className="container custom-container px-lg-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-7 text-start">
                            <span className="text-primary fw-bold text-uppercase tracking-wider small">★ #1 Relocation Partners</span>
                            <h2 className="fw-black text-dark mt-2 mb-3 fs-2">Best Packers and Movers in {displayLocation}</h2>
                            <p className="text-secondary small lh-lg mb-4">
                                The hustling city of {displayLocation} attracts thousands of working professionals throughout the year. Choosing efficient packers and movers in {displayLocation} becomes a necessity for these working professionals. For seamless and quick residential and commercial relocations, <strong>MeeHelper</strong> is here to help you. We are noted for our reliability and for executing high-quality relocations. We have a team of highly skilled professionals who are experts in providing customised moving plans that suit your unique needs. On our user-friendly platform, you can choose from a wide range of moving services and get price quotations instantly. Our transparent pricing, premium packing, and flexible moving options enable us to establish trust among our customers. Choose MeeHelper and enjoy a pleasant and hassle-free moving experience.
                            </p>
                        </div>
                        <div className="col-lg-5">
                            <div className="p-4 bg-light-soft border rounded-4 pm-strengths-card text-start">
                                <h5 className="fw-bold text-dark mb-4 text-center font-outfit">Our Strengths: What Sets Us Apart</h5>
                                <div className="row g-3">
                                    {[
                                        { val: '15+', label: 'Years of Trust', icon: 'fas fa-award', color: '#ff6b00' },
                                        { val: '2000+', label: 'Moves Monthly', icon: 'fas fa-truck-ramp-box', color: '#5e17eb' },
                                        { val: '150+', label: 'Own Vehicles', icon: 'fas fa-truck-moving', color: '#10b981' },
                                        { val: '300+', label: 'In-House Team', icon: 'fas fa-users-gear', color: '#3b82f6' },
                                        { val: '21+', label: 'Cities In India', icon: 'fas fa-map-location-dot', color: '#ec4899' },
                                        { val: '40M', label: 'Trusted Customers', icon: 'fas fa-heart', color: '#ef4444' }
                                    ].map((s, idx) => (
                                        <div key={idx} className="col-6">
                                            <div className="p-3 bg-white border rounded shadow-sm h-100 text-center">
                                                <div className="mb-2" style={{ color: s.color }}>
                                                    <i className={`${s.icon} fs-4`}></i>
                                                </div>
                                                <h3 className="fw-black mb-1 fs-4 text-dark">{s.val}</h3>
                                                <p className="text-muted x-small mb-0 fw-semibold">{s.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RELOCATION SERVICES Portfolio */}
            <section className="py-5 bg-light-soft border-top border-bottom">
                <div className="container custom-container px-lg-4 text-center">
                    <div className="mb-5">
                        <span className="text-primary fw-bold text-uppercase tracking-wider">Our Shifting Portfolio</span>
                        <h2 className="fw-black text-dark mt-2 fs-2">What are the Different Services offered by MeeHelper?</h2>
                        <p className="text-muted">At MeeHelper, we offer a wide range of packers and movers services in {displayLocation}. From residential moves to commercial relocations, our experts are proficient in handling every type and aspect of moving.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: 'House Shifting Services', desc: 'MeeHelper is one of the best options for home-shifting services. Our professional workforce is capable of carefully loading, packing, moving, and organising your home with the highest care and convenience. We use only high-quality packing material, which ensures the protection of your belongings during transit. We are also versatile in terms of post-shifting services such as product reassembly and appliance installation.', img: '/images/house-relocation-new.png' },
                            { title: 'Car Transport Services', desc: 'If you are moving far within the city or moving to another city that is far from your current location, it is only logical to hire a car relocator. For car transportation services, MeeHelper is a well-known brand. Our flexible booking policy is ideal for transferring vehicles from one place to another on a timeline that is convenient for you. Our team of specialists will carefully pack and move your car, ensuring that it arrives at the destination on schedule.', img: '/images/vehicle_shifting_1780746074228.png' },
                            { title: 'Bike Shifting Services', desc: 'For shifting a bike, one must have ample experience. At MeeHelper, our workers are well-known for providing excellent bike-shifting services. Our team of professionals are very competent in packaging and transporting expensive sports motorcycles to your next adventure destination. With a commitment to providing excellent service and the use of high-grade materials, we ensure that your favourite bike is delivered scratch-free and on schedule.', img: '/images/packers_mover_banner_v2_1780745477698.png' },
                            { title: 'City Tempo Services', desc: 'City tempo service is an excellent option for transporting fewer items. In addition, it is less expensive than renting a fully functional vehicle and can handle traffic well. We can help with your relocations with its well-maintained fleet of tempo travellers, which includes Chota Hathi and TATA Ace. Contact MeeHelper for a smooth and affordable shifting experience.', img: '/images/packing_unpacking_1780746091063.png' },
                            { title: 'Office Shifting Services', desc: 'Office moves typically cause a pause in regular business operations. The relocation procedure needs to be quick and effective. We provide the most efficient and speedy office-shifting services. Before transferring everything to your new workplace, the team of professionals carefully packs all of the bulky equipment, furniture, laptops, servers, and documents. Upon reaching the new workplace, we will also unpack and organise the place before leaving and we also make sure your business is not affected during the move.', img: '/images/office_shifting_1780746056579.png' }
                        ].map((svc, idx) => (
                            <div key={idx} className={idx < 3 ? "col-md-4" : "col-md-6"}>
                                <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100 hover-lift text-start bg-white">
                                    <div className="position-relative" style={{ height: '200px' }}>
                                        <Image src={svc.img} alt={svc.title} fill className="object-fit-cover" />
                                    </div>
                                    <div className="card-body p-4">
                                        <h5 className="fw-bold text-dark mb-2">{svc.title}</h5>
                                        <p className="text-secondary small lh-base mb-0">{svc.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW TO BOOK GUIDE */}
            <section className="py-5 bg-white">
                <div className="container custom-container px-lg-4">
                    <div className="text-center mb-5">
                        <span className="text-primary fw-bold text-uppercase tracking-wider">Simple Booking Steps</span>
                        <h2 className="fw-black text-dark mt-2 fs-2">How to Book MeeHelper Packers and Movers Near {displayLocation}?</h2>
                        <p className="text-muted">With our carefully designed platform, we have simplified the process of booking. We provide a convenient booking experience for everyone. Here is a guide to booking shifting in {displayLocation} – for both local and intercity moves!</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6">
                            <div className="p-4 border rounded-4 bg-light-soft h-100 text-start">
                                <h4 className="fw-bold text-danger mb-4 d-flex align-items-center gap-2">
                                    <i className="fas fa-route"></i> Local Home Shifting
                                </h4>
                                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                                    {[
                                        { step: '1', title: 'Visit Website/App', desc: 'Access MeeHelper’s platform for your booking.' },
                                        { step: '2', title: 'Select Shifting Location', desc: 'Enter the elements of your move, such as your current locality and new address.' },
                                        { step: '3', title: 'Add Inventory', desc: 'Select or select items you expect us to move.' },
                                        { step: '4', title: 'Enter Shifting Date and Time', desc: 'Select the preferred date and time for shifting.' },
                                        { step: '5', title: 'Review Details and Confirm', desc: 'Go through the details to make sure everything is correct.' },
                                        { step: '6', title: 'Make Online Payment', desc: 'Conclude the booking process by making the payment via online transaction.' }
                                    ].map((s, i) => (
                                        <li key={i} className="d-flex gap-3">
                                            <div className="pm-step-num flex-shrink-0 bg-danger text-white fw-bold d-flex align-items-center justify-content-center rounded-circle" style={{ width: '28px', height: '28px', fontSize: '13px' }}>
                                                {s.step}
                                            </div>
                                            <div>
                                                <strong className="text-dark small d-block mb-0.5">{s.title}</strong>
                                                <p className="text-muted x-small mb-0">{s.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="p-4 border rounded-4 bg-light-soft h-100 text-start">
                                <h4 className="fw-bold text-primary mb-4 d-flex align-items-center gap-2">
                                    <i className="fas fa-city"></i> Intercity House Shifting
                                </h4>
                                <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
                                    {[
                                        { step: '1', title: 'Visit Website/App', desc: 'Start by visiting our website or mobile application.' },
                                        { step: '2', title: 'Select Shifting Location', desc: 'Choose your current locality and destination.' },
                                        { step: '3', title: 'Add Inventory', desc: 'Provide the listing of items you are preparing to move.' },
                                        { step: '4', title: 'Enter Shifting Date and Time', desc: 'Pick the preferred date and time slot for moving.' },
                                        { step: '5', title: 'Review Details and Confirm', desc: 'Carefully examine all details and press confirm.' },
                                        { step: '6', title: 'Make Online Payment', desc: 'Pay online, and your booking is confirmed.' }
                                    ].map((s, i) => (
                                        <li key={i} className="d-flex gap-3">
                                            <div className="pm-step-num flex-shrink-0 bg-primary text-white fw-bold d-flex align-items-center justify-content-center rounded-circle" style={{ width: '28px', height: '28px', fontSize: '13px' }}>
                                                {s.step}
                                            </div>
                                            <div>
                                                <strong className="text-dark small d-block mb-0.5">{s.title}</strong>
                                                <p className="text-muted x-small mb-0">{s.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="py-5 bg-light-soft border-top border-bottom">
                <div className="container custom-container px-lg-4 text-center">
                    <div className="mb-5">
                        <span className="text-primary fw-bold text-uppercase tracking-wider">Reliable & Insured Moving</span>
                        <h2 className="fw-black text-dark mt-2 fs-2">Why MeeHelper's Packers & Movers in {displayLocation}?</h2>
                        <p className="text-muted">We are dedicated to offering our clients the most outstanding moving experience possible, guaranteeing a smooth and stress-free move.</p>
                    </div>
                    <div className="row g-4 text-start">
                        {[
                            { title: 'Lowest Price Guarantee', desc: 'We take pride in our lowest price guarantee policy. Our platform provides instant and accurate pricing with zero hidden charges or last-minute surprise fees. The process is completely free from intermediaries, eliminating unnecessary costs.' },
                            { title: 'Best Quality Service', desc: 'At MeeHelper, we put quality over everything else. We provide premium packing materials for every booking. Our skilled labourers execute each booking with dedication, ensuring a high standard of protection throughout transit.' },
                            { title: 'Reschedule Your Shifting Anytime', desc: 'We understand that plans can change due to last-minute meetings or trips. Therefore, we offer a free rescheduling option if the shifting date is altered up to 48 hours before the scheduled time slot.' },
                            { title: 'Support Assistance', desc: 'Reach out to our dedicated customer support team 24/7. We are available on live chat and phone to handle every query, clear doubts, and coordinate your move seamlessly.' },
                            { title: 'Professional Labour', desc: 'Our ground crew is the backbone of every moving operation. Hired through vetting and rigorously trained, we have specialists for car, bike, residential, commercial, and tempo relocations. They also handle reassembly and appliance setup.' }
                        ].map((w, idx) => (
                            <div key={idx} className={idx < 4 ? "col-md-6" : "col-md-12"}>
                                <div className="p-4 bg-white border rounded-4 shadow-sm h-100 hover-lift d-flex gap-3">
                                    <div className="icon-box-colorful icon-box-green shadow-sm flex-shrink-0">
                                        <i className="fas fa-circle-check fs-5"></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-dark mb-2">{w.title}</h5>
                                        <p className="text-secondary small lh-base mb-0">{w.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* RELOCATION PROCESS TIMELINE */}
            <section className="py-5 bg-white">
                <div className="container custom-container px-lg-4 text-center">
                    <div className="mb-5">
                        <span className="text-primary fw-bold text-uppercase tracking-wider">Step-by-Step Relocation Flow</span>
                        <h2 className="fw-black text-dark mt-2 fs-2">What is the Process for MeeHelper Home Shifting Services?</h2>
                        <p className="text-muted">We have streamlined the entire process. Our professional workforce is punctual and careful at every step of the move.</p>
                    </div>
                    <div className="row g-4 text-start">
                        {[
                            { title: '1. Booking', desc: 'Confirm your move on our platform by paying a token amount. Input details like current location, destination, preferred date, volume of goods, and any specialty items (artwork, piano).' },
                            { title: '2. Packaging', desc: 'On the scheduled date, our professional crew arrives with premium packing materials. Fragile items like glassware and electronics receive double-layered bubble wrap and padding.' },
                            { title: '3. Transport', desc: 'Goods are carefully loaded onto our secure closed container trucks (ranging from Tata Ace to large trucks). Driven by certified drivers familiar with routes.' },
                            { title: '4. Unloading', desc: 'Upon reaching the destination, our ground crew manually unloads and carries items into your new home, handling delicate packages with extreme caution.' },
                            { title: '5. Unpacking & Assembly', desc: 'We unpack your boxes, reassemble wardrobes/beds, and arrange larger furniture (sofas, mattresses) exactly as per your directions.' },
                            { title: '6. Final Inspection', desc: 'Our team conducts a final examination check to ensure everything arrived safely, works properly, and is set up to your complete satisfaction.' }
                        ].map((p, idx) => (
                            <div key={idx} className="col-md-4">
                                <div className="p-4 border rounded-4 h-100 bg-light-soft hover-lift">
                                    <div className="badge bg-danger mb-3 fw-bold rounded-2 px-2.5 py-1.5" style={{ fontSize: '11px' }}>Step {idx + 1}</div>
                                    <h6 className="fw-bold text-dark mb-2">{p.title}</h6>
                                    <p className="text-secondary small mb-0 lh-normal">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MEEHELPER RATES TABLES */}
            <section className="py-5 bg-light-soft border-top border-bottom">
                <div className="container custom-container px-lg-4 text-center">
                    <div className="mb-5">
                        <span className="text-primary fw-bold text-uppercase tracking-wider">Transaprent Pricing</span>
                        <h2 className="fw-black text-dark mt-2 fs-2">MeeHelper's Packers and Movers Charges in {displayLocation}</h2>
                        <p className="text-muted">Below are the transparent starting prices for local and intercity house shifting services.</p>
                    </div>

                    <div className="row g-4 text-start justify-content-center">
                        {/* Local Table */}
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white border rounded-4 overflow-hidden shadow-sm h-100">
                                <div className="p-3 bg-danger text-white text-center">
                                    <h5 className="mb-0 fw-bold font-outfit">Local House Shifting</h5>
                                    <span className="x-small opacity-75">Inside {displayLocation} Region</span>
                                </div>
                                <div className="p-3">
                                    <table className="table align-middle mb-0 text-secondary table-borderless table-striped x-small">
                                        <thead>
                                            <tr className="border-bottom">
                                                <th className="pb-2 fw-bold text-dark">BHK Type</th>
                                                <th className="pb-2 text-end fw-bold text-dark">Starting Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2.5 fw-semibold text-dark">1 BHK Apartment</td>
                                                <td className="py-2.5 text-end text-success fw-bold">₹4,999</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2.5 fw-semibold text-dark">2 BHK Apartment</td>
                                                <td className="py-2.5 text-end text-success fw-bold">₹7,999</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2.5 fw-semibold text-dark">3 BHK Apartment</td>
                                                <td className="py-2.5 text-end text-success fw-bold">₹11,999</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Intercity Table */}
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white border rounded-4 overflow-hidden shadow-sm h-100">
                                <div className="p-3 bg-primary text-white text-center">
                                    <h5 className="mb-0 fw-bold font-outfit">Intercity House Shifting</h5>
                                    <span className="x-small opacity-75">Out of State / City Shifting</span>
                                </div>
                                <div className="p-3">
                                    <table className="table align-middle mb-0 text-secondary table-borderless table-striped x-small">
                                        <thead>
                                            <tr className="border-bottom">
                                                <th className="pb-2 fw-bold text-dark">BHK Type</th>
                                                <th className="pb-2 text-end fw-bold text-dark">Starting Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2.5 fw-semibold text-dark">1 BHK Apartment</td>
                                                <td className="py-2.5 text-end text-success fw-bold">₹14,999</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2.5 fw-semibold text-dark">2 BHK Apartment</td>
                                                <td className="py-2.5 text-end text-success fw-bold">₹19,999</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2.5 fw-semibold text-dark">3 BHK Apartment</td>
                                                <td className="py-2.5 text-end text-success fw-bold">₹24,999</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Vehicle Shifting Table */}
                        <div className="col-lg-4 col-md-6">
                            <div className="bg-white border rounded-4 overflow-hidden shadow-sm h-100">
                                <div className="p-3 bg-dark text-white text-center">
                                    <h5 className="mb-0 fw-bold font-outfit">Intercity Vehicle Shifting</h5>
                                    <span className="x-small opacity-75">Safe Transit for Cars & Bikes</span>
                                </div>
                                <div className="p-3">
                                    <table className="table align-middle mb-0 text-secondary table-borderless table-striped x-small">
                                        <thead>
                                            <tr className="border-bottom">
                                                <th className="pb-2 fw-bold text-dark">Vehicle Type</th>
                                                <th className="pb-2 text-end fw-bold text-dark">Starting Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2.5 fw-semibold text-dark">Bike / Motorcycle</td>
                                                <td className="py-2.5 text-end text-success fw-bold">₹4,999</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2.5 fw-semibold text-dark">Car / Sedan / SUV</td>
                                                <td className="py-2.5 text-end text-success fw-bold">₹9,999</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mt-3 text-center">
                            <p className="text-muted x-small mb-0 italic">
                                *Disclaimer: Shifting rates vary depending on inventory volume, transit distance, season timing, and specific dates (e.g. weekdays vs month-end weekends).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FACTORS AFFECTING COSTS */}
            <section className="py-5 bg-white">
                <div className="container custom-container px-lg-4 text-center">
                    <div className="mb-5">
                        <span className="text-primary fw-bold text-uppercase tracking-wider">Pricing transparency</span>
                        <h2 className="fw-black text-dark mt-2 fs-2">Factors Affecting Shifting Costs in {displayLocation}</h2>
                        <p className="text-muted">While MeeHelper guarantees the best deal, the following variables influence the final quotation breakdown.</p>
                    </div>
                    <div className="row g-4 text-start">
                        {[
                            { title: 'Season & Timing', desc: 'Demand rises significantly on weekends, month-ends, and peak seasons, which might slightly increase transit expenses compared to mid-month weekdays.' },
                            { title: 'Distance', desc: 'Intercity relocations require longer trips, fuel charges, interstate taxes, and toll fees, which increase the overall pricing compared to local shifting.' },
                            { title: 'Volume & Weight of Items', desc: 'More items or heavier furniture require larger trucks, extra wrapping materials, and additional ground crew, impacting costs.' },
                            { title: 'Type of Items', desc: 'Delicate items, artwork, heavy double beds, and smart TVs require premium specialized packaging and custom loading maneuvers.' },
                            { title: 'Taxes & Regulatory Fees', desc: 'Toll taxes and regulatory checkpoints vary based on transit routes, especially when crossing state boarders.' },
                            { title: 'Packaging Material', desc: 'Heavy cardboard boxes, double bubble wrap, custom foam rolls, and stretch films determine the packaging material cost component.' },
                            { title: 'Accessibility', desc: 'Relocating to high-rise floors without elevator access or long corridors requires extensive manual labor carrying via stairs.' },
                            { title: 'Parking Distance', desc: 'If the container truck must park far from your doorway, our team has to transport items manually over that distance.' },
                            { title: 'Urgent Moves', desc: 'Last-minute bookings require prompt scheduling and workforce allocations, which might add expedite charges to the invoice.' }
                        ].map((f, idx) => (
                            <div key={idx} className="col-md-4">
                                <div className="p-4 border rounded-4 h-100 bg-light-soft hover-lift">
                                    <div className="icon-box-colorful icon-box-blue shadow-sm mb-3">
                                        <i className="fas fa-chart-simple fs-5"></i>
                                    </div>
                                    <h6 className="fw-bold text-dark mb-2">{f.title}</h6>
                                    <p className="text-secondary small mb-0 lh-normal">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PACKAGING MATERIALS */}
            <section className="py-5 bg-light-soft border-top border-bottom">
                <div className="container custom-container px-lg-4 text-center">
                    <div className="mb-5">
                        <span className="text-primary fw-bold text-uppercase tracking-wider">Premium Safe Packing</span>
                        <h2 className="fw-black text-dark mt-2 fs-2">What Packaging Materials are used by MeeHelper?</h2>
                        <p className="text-muted">We maintain heavy focus on packaging quality to completely avoid accidents or damage during transit.</p>
                    </div>
                    <div className="row g-4 text-start justify-content-center">
                        {[
                            { title: 'Bubble Wrap', desc: 'Prevents fragile items, glassware, and electronics from scratching or shattering by providing surface cushioning.' },
                            { title: 'Cardboard Boxes', desc: 'Durable, heavy-duty boxes in various sizes. Polypropylene boxes are also used for small items like clothing.' },
                            { title: 'Packing Peanuts', desc: 'Fills up empty space in boxes, securing items and acting as an excellent shock absorber during bumps.' },
                            { title: 'Packing Tape', desc: 'Heavy-duty adhesive tape to securely lock cardboard boxes and hold bubble wrapping layers in place.' },
                            { title: 'Stretch Wrap', desc: 'Protective plastic film wrapped around large furniture items like sofas and wardrobes to guard against dust, moisture, and friction.' }
                        ].map((m, idx) => (
                            <div key={idx} className="col-md-4">
                                <div className="p-4 bg-white border rounded-4 shadow-sm h-100 hover-lift d-flex gap-3">
                                    <div className="icon-box-colorful icon-box-red shadow-sm flex-shrink-0">
                                        <i className="fas fa-box-open fs-5"></i>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold text-dark mb-2">{m.title}</h6>
                                        <p className="text-secondary small mb-0 lh-normal">{m.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEED AN EXTRA HAND */}
            <section className="py-5 bg-white">
                <div className="container custom-container px-lg-4 text-center">
                    <div className="mb-5">
                        <span className="text-primary fw-bold text-uppercase tracking-wider">Supplementary Services</span>
                        <h2 className="fw-black text-dark mt-2 fs-2">Need an Extra Hand? Supplementary Services</h2>
                        <p className="text-muted">Need more than just packing and shifting? MeeHelper offers licensed engineering services for your convenience.</p>
                    </div>
                    <div className="row g-4 text-start justify-content-center">
                        {[
                            { title: 'Appliance Installation', desc: 'We\'ll ensure your AC, refrigerator, TV, and washing machine are properly uninstalled, moved, and installed in your new space.', icon: 'fas fa-tv' },
                            { title: 'Electrical Work', desc: 'Our licensed electricians can handle switchboard setups, lighting installations, and wiring repairs at your new residence.', icon: 'fas fa-plug-circle-bolt' },
                            { title: 'Carpentry Services', desc: 'From heavy wardrobe assembly to minor furniture repairs and wall mounting, our professional carpenters handle it all.', icon: 'fas fa-hammer' },
                            { title: 'Painting Services', desc: 'Freshen up your new home space with our professional home painting, wall priming, and textured painting choices.', icon: 'fas fa-paint-roller' },
                            { title: 'Plumbing Services', desc: 'Expert plumbers to resolve tap leakages, connect washing machine inlets/outlets, and fit washroom fixtures.', icon: 'fas fa-faucet' },
                            { title: 'Rope Pulling Services', desc: 'Need to move extremely heavy or large items (sofas, pianos) through tight corridors? Our rope pulling experts hoist them safely.', icon: 'fas fa-person-falling-burst' }
                        ].map((srv, idx) => (
                            <div key={idx} className="col-md-4">
                                <div className="p-4 border rounded-4 h-100 bg-light-soft hover-lift">
                                    <div className="icon-box-colorful icon-box-green shadow-sm mb-3">
                                        <i className={`${srv.icon} fs-5`}></i>
                                    </div>
                                    <h6 className="fw-bold text-dark mb-2">{srv.title}</h6>
                                    <p className="text-secondary small mb-0 lh-normal">{srv.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONCLUSION */}
            <section className="py-5 bg-light-soft border-top border-bottom text-center">
                <div className="container custom-container px-lg-4 max-w-4xl mx-auto">
                    <h3 className="fw-black text-dark mb-3 fs-3">Conclusion</h3>
                    <p className="text-secondary small lh-lg mb-0">
                        To sum up, <strong>MeeHelper</strong> is the best packer and mover in {displayLocation}. We are known for our reliable and efficient moving services, which are affordable. We are an excellent choice for a hassle-free moving experience. Our team of experts is experienced and well-trained in every aspect of relocating. The customer support team is well aware of the delays and troubles that may occur during the move and can handle them efficiently. For our wide variety of moving services, including home, office and vehicle shifting, we offer transparent and instant pricing that establishes trust among our customers. Making a hassle-free journey for you is the goal of MeeHelper packers and movers in {displayLocation}. Book us for your upcoming move!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PackersMoversTemplate;
