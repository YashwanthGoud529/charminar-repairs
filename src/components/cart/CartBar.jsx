'use client';

import React, { useEffect, useState } from 'react';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import './CartBar.css';

const CartBar = () => {
    const { cartItems, getFinalTotal, getItemCount } = useCartStore();
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

    return (
        <div className="cart-bar-fixed shadow-lg">
            {/* Close Button as a red circle with X */}
            <div 
                className="cart-bar-close-v4"
                onClick={() => setUserHidden(true)}
                title="Dismiss"
            >
                <i className="fas fa-times"></i>
            </div>

            <div className="cart-bar-left-v4">
                <div className="cart-bar-price-v4">
                    <span>₹{totalToPay}</span>
                    <span className="cart-bar-count-v4">{itemCount}</span>
                </div>
                <Link href="/cart" className="cart-bar-subtext-v4">
                    View breakup
                </Link>
            </div>

            <div className="cart-bar-right-v4">
                <button 
                    className="cart-bar-btn-v4"
                    onClick={() => router.push('/cart')}
                >
                    View Cart <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default CartBar;
