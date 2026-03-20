'use client';

import React from 'react';
import { useCartStore } from '@/store/cartStore';

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
                        <span className="text-muted small">
                            <i className="fas fa-location-dot me-1"></i> {selectedLocation}
                        </span>
                    </div>
                    <button className="btn-close" onClick={() => setCartOpen(false)}></button>
                </div>
                
                <div className="modal-body-uc p-4">
                    {status === 'success' ? (
                        <div className="text-center py-5">
                            <div className="success-icon mb-4">
                                <i className="fas fa-check-circle fa-5x text-success"></i>
                            </div>
                            <h3 className="fw-bold text-dark">Booking Successful!</h3>
                            <p className="text-muted">A service expert will call you shortly to confirm your slot.</p>
                        </div>
                    ) : cartItems.length === 0 ? (
                        <div className="text-center py-5">
                            <i className="fas fa-shopping-cart fa-3x text-muted mb-3 opacity-25"></i>
                            <p className="text-muted">Your cart is empty.</p>
                            <button className="btn btn-orange mt-2" onClick={() => setCartOpen(false)}>Add Services</button>
                        </div>
                    ) : step === 'cart' ? (
                        <>
                            <div className="cart-items-scroll mb-4">
                                {cartItems.map((item, i) => (
                                    <div key={i} className="cart-item-row d-flex align-items-center justify-content-between py-3 border-bottom">
                                        <div className="item-details">
                                            <h6 className="fw-bold text-dark mb-0">{item.name}</h6>
                                            <span className="text-muted small">₹{item.price} each</span>
                                        </div>
                                        <div className="cart-counter-modal d-flex align-items-center gap-3 bg-light border rounded-3 px-2 py-1">
                                            <button onClick={() => removeItem(item.id)} className="btn btn-sm text-orange fw-bold">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            <span className="fw-bold text-dark">{item.quantity}</span>
                                            <button onClick={() => addItem(item)} className="btn btn-sm text-orange fw-bold">
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="uc-promise-card bg-light p-3 rounded-3 mb-4 border-dashed">
                                <h6 className="fw-bold text-dark mb-3 small text-uppercase tracking-wider">Charminar Promise</h6>
                                <div className="d-flex flex-column gap-2">
                                    <div className="promise-item d-flex align-items-center gap-2 small">
                                        <i className="fas fa-check text-green"></i> <span>Verified Professionals</span>
                                    </div>
                                    <div className="promise-item d-flex align-items-center gap-2 small">
                                        <i className="fas fa-check text-green"></i> <span>Hassle Free Booking</span>
                                    </div>
                                    <div className="promise-item d-flex align-items-center gap-2 small">
                                        <i className="fas fa-check text-green"></i> <span>Transparent Pricing</span>
                                    </div>
                                </div>
                            </div>

                            <div className="price-breakdown bg-light p-3 rounded-3 mb-4">
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-muted">Item Total</span>
                                    <span className="text-dark fw-bold">₹{getTotalPrice()}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                    <span className="text-muted">Service Fee</span>
                                    <span className="text-success fw-bold">FREE</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <span className="h5 fw-bold mb-0">Total Payable</span>
                                    <span className="h5 fw-bold text-orange mb-0">₹{getTotalPrice()}</span>
                                </div>
                            </div>

                            <button 
                                onClick={() => setStep('login')}
                                className="btn btn-orange w-100 py-3 fw-bold text-uppercase rounded-3 shadow-lg"
                            >
                                Continue Details <i className="fas fa-arrow-right ms-2"></i>
                            </button>
                        </>
                    ) : (
                        <div className="checkout-form">
                            <button className="btn btn-link text-muted p-0 mb-3 text-decoration-none" onClick={() => setStep('cart')}>
                                <i className="fas fa-arrow-left me-2"></i> Back to Cart
                            </button>
                            <div className="p-4 bg-light rounded-4 border">
                                <h5 className="fw-bold text-dark mb-2">Almost Done!</h5>
                                <p className="text-muted small mb-4">Please provide your details so our expert can reach you at the given location.</p>
                                
                                <div className="d-flex flex-column gap-3 mb-4">
                                    <div className="form-group relative">
                                        <label className="small text-muted mb-1 fw-bold">Full Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control form-control-lg bg-white" 
                                            placeholder="Enter your name" 
                                            value={formData.name}
                                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        />
                                    </div>
                                    <div className="form-group relative">
                                        <label className="small text-muted mb-1 fw-bold">Mobile Number</label>
                                        <div className="input-group">
                                            <span className="input-group-text bg-white">+91</span>
                                            <input 
                                                type="tel" 
                                                className="form-control form-control-lg bg-white" 
                                                placeholder="10-digit number" 
                                                value={formData.phone}
                                                maxLength="10"
                                                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group relative">
                                        <label className="small text-muted mb-1 fw-bold">House / Flat No., Area</label>
                                        <textarea 
                                            className="form-control bg-white" 
                                            placeholder="Complete door number and street details" 
                                            rows="2"
                                            value={formData.address}
                                            onChange={(e) => setFormData({...formData, address: e.target.value})}
                                        ></textarea>
                                    </div>
                                </div>

                                <button 
                                    onClick={handleCheckout}
                                    disabled={status === 'loading'}
                                    className="btn btn-orange w-100 py-3 fw-bold text-uppercase rounded-3 shadow"
                                >
                                    {status === 'loading' ? (
                                        <><i className="fas fa-spinner fa-spin me-2"></i> Confirming...</>
                                    ) : (
                                        'Confirm Booking'
                                    )}
                                </button>
                                <p className="text-center mt-3 mb-0 x-small text-muted">
                                    <i className="fas fa-lock me-1"></i> Your personal details are safe with us.
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
                    background: rgba(0,0,0,0.6);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    backdrop-filter: blur(5px);
                    animation: fadeIn 0.3s ease;
                }

                .cart-modal-content {
                    background: #fff;
                    width: 100%;
                    max-width: 500px;
                    border-radius: 16px;
                    box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
                    animation: zoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    max-height: 90vh;
                    display: flex;
                    flex-direction: column;
                }

                .cart-items-scroll {
                    overflow-y: auto;
                    max-height: 200px;
                }

                .border-dashed {
                    border: 1px dashed #ced4da !important;
                }

                .text-green { color: #22c55e; }

                @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
                @keyframes zoomIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }

                .btn-orange {
                    background: #ff6b00;
                    border: none;
                    color: white;
                }
                .btn-orange:hover {
                    background: #e66000;
                    color: white;
                }
                .btn-orange:disabled { opacity: 0.7; cursor: not-allowed; }
                .text-orange { color: #ff6b00; }
                .bg-orange-soft { background: rgba(255, 107, 0, 0.1); }
                .tracking-wider { letter-spacing: 0.05em; }

                @media (max-width: 576px) {
                    .cart-modal-content {
                        margin: 0;
                        border-bottom-left-radius: 0;
                        border-bottom-right-radius: 0;
                        position: absolute;
                        bottom: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default CartModal;
