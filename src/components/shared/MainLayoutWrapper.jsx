'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartBar from '@/components/cart/CartBar';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';

export default function MainLayoutWrapper({ children }) {
    const pathname = usePathname();
    const isAdmin = pathname?.startsWith('/admin');

    if (isAdmin) {
        return <main id="content" className="admin-root-wrapper">{children}</main>;
    }

    return (
        <>
            <Header />
            <main id="content">
                {children}
            </main>
            <CartBar />
            <FloatingWhatsApp />
            <Footer />
        </>
    );
}
