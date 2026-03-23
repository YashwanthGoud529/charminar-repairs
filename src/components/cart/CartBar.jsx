'use client';

import React, { useEffect, useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import { usePathname, useRouter } from 'next/navigation';
import './CartBar.css';

const CartBar = () => {
    const { getFinalTotal, getItemCount } = useCartStore();
    const pathname = usePathname();
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(false);
    const [userHidden, setUserHidden] = useState(false);
    const [lastCount, setLastCount] = useState(0);

    const totalToPay = getFinalTotal();
    const itemCount = getItemCount();

    useEffect(() => {
        const isAdminPage = pathname?.startsWith('/admin');
        const isCartPage = pathname === '/cart';
        
        if (isCartPage || isAdminPage) {
            setIsVisible(false);
        } else {
            if (itemCount > lastCount) {
                setUserHidden(false);
            }
            setIsVisible(itemCount > 0 && !userHidden);
        }
        setLastCount(itemCount);
    }, [itemCount, pathname, userHidden, lastCount]);

    if (!isVisible) return null;

    // --- SVG Icons ---
    const TimesIcon = () => (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
    );

    const ArrowRightIcon = () => (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ms-2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
    );

    return (
        <div className="cart-bar-fixed shadow-lg animate-slide-up">
            {/* Close Button as a red circle with X */}
            <div 
                className="cart-bar-close-v4 d-flex align-items-center justify-content-center"
                onClick={() => setUserHidden(true)}
                title="Dismiss"
            >
                <TimesIcon />
            </div>

            <div className="cart-bar-left-v4">
                <div className="cart-bar-price-v4">
                    <span>₹{totalToPay}</span>
                    <span className="cart-bar-count-v4">{itemCount}</span>
                </div>
                <div 
                    onClick={() => router.push('/cart')} 
                    className="cart-bar-subtext-v4 cursor-pointer"
                    style={{ textDecoration: 'underline' }}
                >
                    View breakup
                </div>
            </div>

            <div className="cart-bar-right-v4">
                <button 
                    className="cart-bar-btn-v4 d-flex align-items-center justify-content-center"
                    onClick={() => router.push('/cart')}
                >
                    View Cart <ArrowRightIcon />
                </button>
            </div>
            
            <style jsx>{`
                .animate-slide-up {
                    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                }
                @keyframes slideUp {
                    from { transform: translateY(100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default CartBar;
