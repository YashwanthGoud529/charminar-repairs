'use client';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import CartBar from '@/components/cart/CartBar';
import FloatingWhatsApp from '@/components/shared/FloatingWhatsApp';
import LazySection from '@/components/shared/LazySection';
import Skeleton from '@/components/shared/Skeleton';

const Footer = dynamic(() => import('@/components/Footer'), { 
    loading: () => <div style={{ background: '#0c1228', height: '400px' }} className="py-5"><div className="container"><Skeleton height="300px" /></div></div>,
    ssr: true 
});

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
            <LazySection threshold={0.01} rootMargin="200px">
                <Footer />
            </LazySection>
        </>
    );
}
