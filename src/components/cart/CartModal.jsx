'use client';

import React from 'react';
import { useCartStore } from '@/store/cartStore';

// --- SVG Icons Components ---
const LocationDotIcon = ({ size = 14, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="12" r="3"/>
    </svg>
);

const CheckCircleIcon = ({ size = 80, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
);

const ShoppingCartIcon = ({ size = 48, className = "" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
    </svg>
);

const PlusIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
);

const MinusIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/>
    </svg>
);

const CheckIcon = ({ size = 14, className = "text-success" }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="20 6 9 17 4 12"/>
    </svg>
);

const ArrowRightIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
);

const ArrowLeftIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
    </svg>
);

const LockIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="me-1">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
);

const SpinnerIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="animate-spin me-2">
        <path d="M21 12a9 9 0 11-6.21-8.58"/>
    </svg>
);

const CartModal = () => {
    const { cartItems, addItem, removeItem, getTotalPrice, clearCart, selectedLocation, isCartOpen, setCartOpen } = useCartStore();
    const [status, setStatus] = React.useState('idle'); // idle, loading, success
    const [step, setStep] = React.useState('cart'); // cart, login
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        address: ''
    });

    const handleCheckout = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.address) return alert('Please enter all your details to proceed.');
        
        setStatus('loading');
        try {
            const res = await fetch('/api/bookings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: cartItems,
                    totalPrice: getTotalPrice(),
                    location: selectedLocation,
                    customerName: formData.name,
                    phone: formData.phone,
                    address: formData.address
                })
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setTimeout(() => {
                    clearCart();
                    setCartOpen(false);
                    setStatus('idle');
                    setStep('cart');
                }, 3000);
            }
        } catch (err) {
            console.error(err);
            setStatus('idle');
        }
    };

    if (!isCartOpen) return null;

    return (
        <div className="cart-modal-overlay" onClick={() => setCartOpen(false)}>
            <div className="cart-modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header-uc d-flex align-items-center justify-content-between p-4 border-bottom">
                    <div className="d-flex flex-column">
                        <h4 className="fw-bold font-outfit mb-0 text-dark">
                            {step === 'cart' ? 'Booking Summary' : 'Login / Contact Details'}
                        </h4>
                        <div className="text-muted small d-flex align-items-center gap-1 mt-1">
                            <LocationDotIcon /> {selectedLocation}
                        </div>
                    </div>
                    <button className="btn-close" onClick={() => setCartOpen(false)} aria-label="Close"></button>
                </div>
                
                <div className="modal-body-uc p-4">
                    {status === 'success' ? (
                        <div className="text-center py-5">
                            <div className="success-icon mb-4">
                                <CheckCircleIcon className="text-success" />
                            </div>
                            <h3 className="fw-bold text-dark font-outfit">Booking Successful!</h3>
                            <p className="text-muted font-inter">A service expert will call you shortly to confirm your slot.</p>
                        </div>
                    ) : cartItems.length === 0 ? (
                        <div className="text-center py-5">
                            <div className="mb-3 opacity-25">
                                <ShoppingCartIcon className="text-muted" />
                            </div>
                            <p className="text-muted font-inter">Your cart is empty.</p>
                            <button className="btn btn-orange mt-2 px-4 py-2 fw-bold" onClick={() => setCartOpen(false)}>Add Services</button>
                        </div>
                    ) : step === 'cart' ? (
                        <>
                            <div className="cart-items-scroll mb-4 custom-scrollbar">
                                {cartItems.map((item, i) => (
                                    <div key={i} className="cart-item-row d-flex align-items-center justify-content-between py-3 border-bottom border-light">
                                        <div className="item-details">
                                            <h6 className="fw-bold text-dark mb-0 font-outfit">{item.name}</h6>
                                            <span className="text-muted small font-inter">₹{item.price} each</span>
                                        </div>
                                        <div className="cart-counter-modal d-flex align-items-center gap-3 bg-light-soft border border-light rounded-pill px-3 py-1">
                                            <button onClick={() => removeItem(item.id)} className="btn btn-sm p-0 text-orange d-flex align-items-center justify-content-center">
                                                <MinusIcon />
                                            </button>
                                            <span className="fw-bold text-dark small" style={{ minWidth: '15px', textAlign: 'center' }}>{item.quantity}</span>
                                            <button onClick={() => addItem(item)} className="btn btn-sm p-0 text-orange d-flex align-items-center justify-content-center">
                                                <PlusIcon />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="uc-promise-card bg-light-soft p-3 rounded-4 mb-4 border border-dashed">
                                <h6 className="fw-bold text-dark mb-3 small text-uppercase tracking-wider font-outfit">Charminar Promise</h6>
                                <div className="d-flex flex-column gap-2">
                                    <div className="promise-item d-flex align-items-center gap-2 small font-inter">
                                        <CheckIcon /> <span>Verified Professionals Only</span>
                                    </div>
                                    <div className="promise-item d-flex align-items-center gap-2 small font-inter">
                                        <CheckIcon /> <span>Hyper-Local Support (60 Mins)</span>
                                    </div>
                                    <div className="promise-item d-flex align-items-center gap-2 small font-inter">
                                        <CheckIcon /> <span>100% Genuine Spare Parts</span>
                                    </div>
                                </div>
                            </div>

                            <div className="price-breakdown bg-light-soft p-4 rounded-4 mb-4 border border-light">
                                <div className="d-flex justify-content-between mb-2 small text-muted font-inter">
                                    <span>Item Total</span>
                                    <span className="text-dark fw-bold">₹{getTotalPrice()}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2 small text-muted font-inter">
                                    <span>Service Fee</span>
                                    <span className="text-success fw-bold">FREE</span>
                                </div>
                                <hr className="my-3 opacity-25" />
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="h5 fw-bold mb-0 font-outfit">Total Payable</span>
                                    <span className="h5 fw-bold text-orange mb-0 font-outfit">₹{getTotalPrice()}</span>
                                </div>
                            </div>

                            <button 
                                onClick={() => setStep('login')}
                                className="btn btn-orange w-100 py-3 fw-bold text-uppercase rounded-3 shadow-lg d-flex align-items-center justify-content-center gap-2"
                            >
                                Continue Details <ArrowRightIcon />
                            </button>
                        </>
                    ) : (
                        <div className="checkout-form">
                            <button className="btn btn-link text-muted p-0 mb-4 text-decoration-none d-flex align-items-center gap-2 small fw-bold" onClick={() => setStep('cart')}>
                                <ArrowLeftIcon /> Back to Summary
                            </button>
                            <div className="p-4 bg-light-soft rounded-4 border border-light">
                                <h5 className="fw-bold text-dark mb-2 font-outfit">Almost Done!</h5>
                                <p className="text-muted small mb-4 font-inter">Please provide your details so our expert can reach your location.</p>
                                
                                <div className="d-flex flex-column gap-3 mb-4">
                                    <div className="form-group">
                                        <label className="small text-muted mb-2 fw-bold font-inter">Full Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-lg bg-white border-light shadow-sm" 
                                            placeholder="Enter your name" 
                                            style={{ borderRadius: '10px', fontSize: '15px' }}
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="small text-muted mb-2 fw-bold font-inter">Mobile Number</label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-light border-light" style={{ borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px' }}>+91</span>
                                            <input 
                                                type="tel" 
                                                className="form-control form-control-lg bg-white border-light shadow-sm" 
                                                placeholder="10-digit number" 
                                                style={{ borderTopRightRadius: '10px', borderBottomRightRadius: '10px', fontSize: '15px' }}
                                                value={formData.phone}
                                                maxLength="10"
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="small text-muted mb-2 fw-bold font-inter">Service Address (House No, Area)</label>
                                        <textarea 
                                            className="form-control bg-white border-light shadow-sm" 
                                            placeholder="e.g. Flat 101, Sai Mansion, Madhapur" 
                                            rows="3"
                                            style={{ borderRadius: '10px', fontSize: '15px' }}
                                            value={formData.address}
                                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                                        ></textarea>
                                    </div>
                                </div>

                                <button 
                                    onClick={handleCheckout}
                                    disabled={status === 'loading'}
                                    className="btn btn-orange w-100 py-3 fw-bold text-uppercase rounded-3 shadow-lg d-flex align-items-center justify-content-center"
                                >
                                    {status === 'loading' ? (
                                        <><SpinnerIcon /> Confirming...</>
                                    ) : (
                                        'Confirm Booking'
                                    )}
                                </button>
                                <p className="text-center mt-3 mb-0 x-small text-muted fw-medium d-flex align-items-center justify-content-center">
                                    <LockIcon /> Secure SSL Encrypted Checkout
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
                .cart-modal-overlay {
                    position: fixed;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.7);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(8px);
                    animation: fadeIn 0.3s ease-out;
                }

                .cart-modal-content {
                    background: #fff;
                    width: 94%;
                    max-width: 500px;
                    border-radius: 20px;
                    box-shadow: 0 40px 100px -20px rgba(0,0,0,0.5);
                    animation: zoomIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    max-height: 90vh;
                    display: flex;
                    flex-direction: column;
                    border: 1px solid rgba(255,255,255,0.2);
                }

                .cart-items-scroll {
                    overflow-y: auto;
                    max-height: 300px;
                    padding-right: 5px;
                }

                .bg-light-soft { background: #f9fbfe; }
                .border-dashed { border: 1px dashed #e2e8f0 !important; }

                .animate-spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes zoomIn { from { transform: scale(0.95) translateY(20px); opacity: 0; } to { transform: scale(1) translateY(0); opacity: 1; } }

                .btn-orange {
                    background: #ff6b00;
                    border: none;
                    color: white;
                    transition: all 0.3s;
                }
                .btn-orange:hover {
                    background: #e66000;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(255,107,0,0.2);
                }
                .btn-orange:active { transform: translateY(0); }
                .btn-orange:disabled { opacity: 0.7; cursor: not-allowed; }
                .text-orange { color: #ff6b00; }
                .tracking-wider { letter-spacing: 0.05em; }

                @media (max-width: 576px) {
                    .cart-modal-content {
                        width: 100%;
                        max-width: 100%;
                        margin: 0;
                        border-bottom-left-radius: 0;
                        border-bottom-right-radius: 0;
                        position: absolute;
                        bottom: 0;
                        max-height: 95vh;
                        border-radius: 24px 24px 0 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default CartModal;
