'use client';

import React, { useState, useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import LocationSelector from '@/components/shared/LocationSelector';
import toast from 'react-hot-toast';
import './cart.css';

export default function CartPage() {
    const { 
        cartItems, addItem, removeItem, getTotalPrice, getFinalTotal, 
        getServiceFee, getTaxAmount, visitingFee, tipAmount, setTip,
        clearCart, selectedLocation 
    } = useCartStore();

    const [status, setStatus] = useState('idle'); 
    const [step, setStep] = useState('cart'); 
    const [noCallBefore, setNoCallBefore] = useState(false);
    const [showCustomTipInput, setShowCustomTipInput] = useState(false);
    const [customTipValue, setCustomTipValue] = useState('');
    
    const [formData, setFormData] = useState({
        name: '',
        phone: '', 
        address: ''
    });

    
    useEffect(() => {
        setTip(0);
       
    }, []);

    const subtotal = getTotalPrice();
    const serviceFee = getServiceFee();
    const taxAndFee = getTaxAmount();
    const finalTotal = getFinalTotal();
    const savingTotal = 50; 
    // Group items by category
    const groupedItems = cartItems.reduce((acc, item) => {
        const cat = item.category || 'General';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(item);
        return acc;
    }, {});

    const [selectedDate, setSelectedDate] = useState(0); 
    const [selectedSlot, setSelectedSlot] = useState(null);

    const dates = [...Array(7)].map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i);
        return {
            day: d.toLocaleDateString('en-US', { weekday: 'short' }),
            num: d.getDate(),
            full: d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
        };
    });

    const slots = React.useMemo(() => {
        const generatedSlots = [];
        const startHour = 7; // 7 AM
        const endHour = 21; // 9 PM
        
        const now = new Date();
        const currentHour = now.getHours();
        
        for (let hour = startHour; hour <= endHour; hour++) {
            // Add a 2-hour gap for today's slots
            if (selectedDate === 0 && hour < currentHour + 2) {
                continue;
            }
            
            const isPM = hour >= 12;
            const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
            const amPm = isPM ? 'PM' : 'AM';
            const timeString = `${displayHour.toString().padStart(2, '0')}:00 ${amPm}`;
            generatedSlots.push(timeString);
        }
        return generatedSlots;
    }, [selectedDate]);

    useEffect(() => {
        if (selectedSlot && !slots.includes(selectedSlot)) {
            setSelectedSlot(null);
        }
    }, [selectedDate, slots]);

    const handleCheckout = async () => {
        if (!formData.name || !formData.phone || !formData.address || !selectedSlot) {
            toast.error('Please complete all mandatory details (Contact & Service Address) to proceed.');
            return;
        }

        setStatus('loading');
        try {
            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: cartItems,
                    totalPrice: getFinalTotal(),
                    subtotal: getTotalPrice(),
                    tipAmount: tipAmount,
                    location: selectedLocation,
                    customerName: formData.name,
                    phone: formData.phone,
                    address: formData.address,
                    selectedSlot: {
                        date: dates[selectedDate]?.full,
                        time: selectedSlot
                    }
                })
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                toast.success('Booking Confirmed Successfully!');
                setTimeout(() => {
                    clearCart();
                    setStatus('idle');
                    window.location.href = '/';
                }, 3000);
            } else {
                toast.error('Booking failed. Please try again.');
                setStatus('idle');
            }
        } catch (err) {
            console.error(err);
            toast.error('Network error. Please try again.');
            setStatus('idle');
        }
    };

    if (cartItems.length === 0 && status !== 'success') {
        return (
            <div className="cart-page-wrapper d-flex align-items-center justify-content-center p-4">
                <div className="text-center bg-white p-5 rounded-4 shadow-sm" style={{maxWidth: '500px'}}>
                    <img src="/images/img_icons8_com_3d_fluency_94_empty_box_png.png" width="100" className="mb-4" alt="empty" />
                    <h2 className="fw-800 mb-3">Your cart is empty</h2>
                    <p className="text-muted mb-4">Looks like you haven't added any services yet. Start exploring our premium repair services.</p>
                    <Link href="/" className="btn cart-btn-purple">Browse Services</Link>
                </div>
            </div>
        );
    }

    if (status === 'success') {
        return (
            <div className="cart-page-wrapper d-flex align-items-center justify-content-center p-4">
                <div className="text-center bg-white p-5 rounded-4 shadow-sm" style={{maxWidth: '500px'}}>
                    <div className="bg-success bg-opacity-10 text-success p-4 rounded-circle d-inline-block mb-4">
                        <i className="fas fa-check fa-3x"></i>
                    </div>
                    <h2 className="fw-800 mb-3">Booking Confirmed!</h2>
                    <p className="text-muted mb-0">Your request for {selectedLocation} is secured.</p>
                    <p className="text-muted mb-4 small">Slot: {dates[selectedDate].full}, {selectedSlot}</p>
                    <p className="text-muted mb-4 small">Redirecting you to home...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page-wrapper py-5">
            <div className="container px-xl-5">
                <div className="row g-4 d-flex align-items-start">
                    
                    {/* LEFT COLUMN */}
                    <div className="col-lg-7">
                        <div className="saving-banner">
                            <i className="fas fa-tag"></i> Saving ₹{savingTotal} on this order
                        </div>

                        <div className="cart-info-card shadow-sm">
                            <div className="cart-info-item align-items-start border-0 pb-0">
                                <div className="icon-box-colorful icon-box-purple shadow-sm mt-1">
                                    <i className="fas fa-user"></i>
                                </div>
                                <div className="cart-info-content flex-grow-1">
                                    <h6 className="mb-3">Contact Details</h6>
                                    <div className="d-flex flex-column gap-3">
                                        <div className="form-floating">
                                            <input 
                                                type="text" 
                                                className="form-control bg-light border-0" 
                                                id="userNameInput"
                                                placeholder="Your Full Name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                            />
                                            <label htmlFor="userNameInput" className="text-muted"><i className="far fa-user me-2"></i>Full Name *</label>
                                        </div>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light border-0 fw-bold px-3">+91</span>
                                            <div className="form-floating flex-grow-1">
                                                <input 
                                                    type="tel" 
                                                    className="form-control bg-light border-0 border-start" 
                                                    id="userPhoneInput"
                                                    placeholder="Mobile Number"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                />
                                                <label htmlFor="userPhoneInput" className="text-muted"><i className="fas fa-mobile-alt me-2"></i>Mobile Number *</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="cart-info-item align-items-start border-0 pb-0 mt-4">
                                <div className="icon-box-colorful icon-box-blue shadow-sm mt-1">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="cart-info-content flex-grow-1">
                                    <h6 className="mb-3">Service Address</h6>
                                    <div className="form-floating">
                                        <textarea 
                                            className="form-control border-0 bg-light" 
                                            id="userAddressInput"
                                            placeholder="Flat/House No., Building Name, Area..."
                                            style={{ height: '90px', resize: 'none' }}
                                            value={formData.address}
                                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                                        ></textarea>
                                        <label htmlFor="userAddressInput" className="text-muted"><i className="fas fa-home me-2"></i>Complete Address *</label>
                                    </div>
                                </div>
                            </div>

                            <div className="cart-info-item align-items-start border-0 pb-2 mt-4">
                                <div className="icon-box-colorful icon-box-green shadow-sm mt-1">
                                    <i className="far fa-clock"></i>
                                </div>
                                <div className="cart-info-content flex-grow-1">
                                    <h6 className="mb-3">Preferred Time Slot</h6>
                                    <div className="slot-selector-v4 bg-light rounded-3 p-3 border-0">
                                        <div className="date-scroll-v4 mb-3">
                                            {dates.map((d, i) => (
                                                <div 
                                                    key={i} 
                                                    className={`date-item-v4 ${selectedDate === i ? 'active shadow-sm' : 'bg-white'}`}
                                                    onClick={() => setSelectedDate(i)}
                                                >
                                                    <div className="date-day-v4 opacity-75">{d.day}</div>
                                                    <div className="date-num-v4 fw-black fs-5">{d.num}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="time-grid-v4">
                                            {slots.length > 0 ? (
                                                slots.map((s, i) => (
                                                    <div 
                                                        key={i} 
                                                        className={`time-item-v4 ${selectedSlot === s ? 'active shadow-sm' : 'bg-white'}`}
                                                        onClick={() => setSelectedSlot(s)}
                                                    >
                                                        {s}
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-danger w-100 py-2 d-flex align-items-center gap-2" style={{gridColumn: '1 / -1'}}>
                                                    <i className="fas fa-exclamation-circle"></i> No slots available for this date.
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {selectedSlot && (
                                        <div className="mt-3 text-success fw-bold font-outfit bg-success bg-opacity-10 py-2 px-3 rounded-2 d-inline-block">
                                            <i className="fas fa-check-circle me-2"></i>Selected: {dates[selectedDate].full}, {selectedSlot}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="cart-info-item opacity-50 border-0">
                                <div className="icon-box-colorful icon-box-indigo shadow-sm">
                                    <i className="fas fa-wallet"></i>
                                </div>
                                <div className="cart-info-content">
                                    <h6>Payment Method</h6>
                                </div>
                            </div>
                        </div>

                        <div className="cancellation-policy">
                            <h6>Cancellation policy</h6>
                            <p>
                                Free cancellations if done more than 12 hrs before the service. A fee will be charged otherwise.
                            </p>
                            <span className="read-link">Read full policy</span>
                        </div>
                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="col-lg-5 ps-lg-4">
                        <div className="summary-card-v4 shadow-sm">
                            {Object.entries(groupedItems).map(([cat, items]) => (
                                <div key={cat} className="cart-category-group">
                                    <h5>{cat}</h5>
                                    {items.map((item, i) => (
                                        <div key={i} className="cart-item-v4">
                                            <div className="item-name-v4">
                                                <span>{item.name}</span>
                                            </div>
                                            <div className="qty-control-v4">
                                                <button className="qty-btn-v4" onClick={() => removeItem(item.id)}>−</button>
                                                <span className="qty-val-v4">{item.quantity}</span>
                                                <button className="qty-btn-v4" onClick={() => addItem(item)}>+</button>
                                            </div>
                                            <div className="item-price-v4">
                                                <span className="price-current">₹{item.price * item.quantity}</span>
                                                <span className="price-old">₹{(item.price + 200) * item.quantity}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}

                            <div className="instruction-opt">
                                <input 
                                    type="checkbox" 
                                    checked={noCallBefore} 
                                    onChange={(e) => setNoCallBefore(e.target.checked)} 
                                />
                                <span>Avoid calling before reaching the location</span>
                            </div>
                        </div>

                        <div className="offers-section shadow-sm">
                            <div className="offers-left">
                                <i className="fas fa-percentage"></i>
                                <span>Coupons and offers</span>
                            </div>
                            <div className="offers-right">
                                7 offers <i className="fas fa-chevron-right ms-1" style={{fontSize: '10px'}}></i>
                            </div>
                        </div>

                        <div className="payment-summary-v4 shadow-sm">
                            <h6>Payment summary</h6>
                            <div className="summary-row-v4">
                                <span>Item total</span>
                                <div className="item-total-val text-end">
                                    <span className="old">₹{subtotal + 1200}</span>
                                    <span className="fw-700 text-dark">₹{subtotal}</span>
                                </div>
                            </div>
                            <div className="summary-row-v4">
                                <span>Taxes and Fee</span>
                                <span className="fw-700 text-dark">₹{taxAndFee + serviceFee}</span>
                            </div>
                            {tipAmount > 0 && (
                                <div className="summary-row-v4">
                                    <span>Tip</span>
                                    <span className="fw-700 text-dark">₹{tipAmount}</span>
                                </div>
                            )}
                            
                            <div className="summary-row-v4 total">
                                <span>Total amount</span>
                                <span>₹{finalTotal}</span>
                            </div>
                            <div className="summary-row-v4 total mt-0 pt-2 border-top-0">
                                <span>Amount to pay</span>
                                <span>₹{finalTotal}</span>
                            </div>

                            <div className="tip-section-v4">
                                <h6>Add a tip to thank the Professional</h6>
                                <p>100% of the tip goes to the professional.</p>
                                <div className="tip-grid">
                                    {[50, 75, 100].map(val => (
                                        <div 
                                            key={val} 
                                            className={`tip-btn ${tipAmount === val && !showCustomTipInput ? 'active' : ''}`}
                                            onClick={() => {
                                                setTip(tipAmount === val && !showCustomTipInput ? 0 : val);
                                                setShowCustomTipInput(false);
                                            }}
                                        >
                                            ₹{val}
                                            {val === 75 && <span className="popular-badge">POPULAR</span>}
                                        </div>
                                    ))}
                                    {showCustomTipInput ? (
                                        <div className="tip-btn active p-0 overflow-hidden d-flex align-items-center">
                                            <span className="ps-2 fw-bold text-success">₹</span>
                                            <input 
                                                type="number" 
                                                autoFocus
                                                style={{ border: 'none', background: 'transparent', width: '60px', outline: 'none', paddingLeft: '5px' }}
                                                value={customTipValue}
                                                onChange={(e) => {
                                                    const val = parseInt(e.target.value);
                                                    setCustomTipValue(e.target.value);
                                                    setTip(isNaN(val) ? 0 : val);
                                                }}
                                                onBlur={() => {
                                                    if (!customTipValue) {
                                                        setShowCustomTipInput(false);
                                                        setTip(0);
                                                    }
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <div 
                                            className={`tip-btn ${![0, 50, 75, 100].includes(tipAmount) ? 'active' : ''}`}
                                            onClick={() => setShowCustomTipInput(true)}
                                        >
                                            Custom
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="tip-disclaimer text-center">
                            100% of the tip goes to the professional.
                        </div>
                    </div>
                </div>
            </div>

            {/* STICKY FOOTER */}
            <div className="cart-sticky-footer shadow-lg">
                <div className="footer-amount">
                    <div>₹{finalTotal}</div>
                    <span className="view-breakup" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>View breakup</span>
                </div>
                <div className="footer-actions">
                    <button 
                        className="btn cart-btn-purple"
                        onClick={step === 'cart' ? () => setStep('checkout') : handleCheckout}
                        disabled={status === 'loading'}
                    >
                        {status === 'loading' ? 'Processing...' : (step === 'cart' ? 'Book Appointment' : 'Confirm Order')}
                    </button>
                </div>
            </div>
        </div>
    );
}
