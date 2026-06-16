import React from 'react';
import PageHero from '@/components/shared/PageHero';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'Offers & Coupons | Charminar Repairs – Discounts on Appliance Repair',
    description: 'Save on appliance repair, cleaning, and home services in Hyderabad. Check current offers, coupon codes, and seasonal deals from Charminar Repairs.',
    canonicalPath: '/offers',
});

const offers = [
    { code: 'FIRST100', discount: '₹100 Off', title: 'First Booking Discount', desc: 'Get ₹100 off on your very first repair booking with us. Valid on all appliance types.', validity: '31 Dec 2025', minOrder: '₹499', color: '#673ab7', tag: 'New Customer' },
    { code: 'SUMMER25', discount: '25% Off', title: 'Summer AC Service Offer', desc: 'Beat the heat! Get 25% off on all AC repairs, gas refills, and servicing during summer months.', validity: '30 Jun 2025', minOrder: '₹999', color: '#f59e0b', tag: 'Seasonal' },
    { code: 'CLEANPRO', discount: '15% Off', title: 'Deep Cleaning Special', desc: 'Book any home deep cleaning package and get 15% off. Includes bathroom, kitchen, and full home options.', validity: '30 Sep 2025', minOrder: '₹1,999', color: '#10b981', tag: 'Cleaning' },
    { code: 'AMCNOW', discount: '20% Off', title: 'AMC First Year Discount', desc: 'Sign up for any Annual Maintenance Contract and get 20% off the first year. Applicable on all plans.', validity: '31 Mar 2026', minOrder: 'AMC Purchase', color: '#0ea5e9', tag: 'AMC' },
    { code: 'REFER50', discount: '₹50 Off', title: 'Refer a Friend', desc: 'Refer a friend and both of you get ₹50 off your next booking. No limit on referrals.', validity: 'Ongoing', minOrder: '₹399', color: '#8b5cf6', tag: 'Referral' },
    { code: 'BULK10', discount: '10% Off', title: 'Bulk Booking Discount', desc: 'Book 3 or more services in a single visit and get 10% off the total. Great for home makeovers.', validity: '31 Dec 2025', minOrder: '3+ Services', color: '#ef4444', tag: 'Bulk' },
];

export default function OffersPage() {
    return (
        <main style={{ background: '#f8f9fc' }}>
            <PageHero title="Offers & Coupons" subtitle="Exclusive deals on appliance repair, cleaning, and maintenance services across Hyderabad. Save more with every booking." breadcrumb="Offers" />

            <section style={{ padding: '60px 0 80px' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
                        {offers.map((o, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, overflow: 'hidden' }}>
                                <div style={{ background: o.color, padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div>
                                        <span style={{ fontSize: 10, background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '2px 8px', borderRadius: 4, fontWeight: 700, letterSpacing: 0.5 }}>{o.tag}</span>
                                        <div style={{ fontWeight: 900, fontSize: 28, color: '#fff', marginTop: 6 }}>{o.discount}</div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', marginBottom: 4 }}>USE CODE</div>
                                        <div style={{ background: 'rgba(255,255,255,0.15)', border: '1px dashed rgba(255,255,255,0.4)', padding: '4px 12px', borderRadius: 4, fontWeight: 900, fontSize: 14, color: '#fff', letterSpacing: 1 }}>{o.code}</div>
                                    </div>
                                </div>
                                <div style={{ padding: '20px 24px' }}>
                                    <h3 style={{ fontWeight: 800, fontSize: 15, color: '#0c1228', marginBottom: 8 }}>{o.title}</h3>
                                    <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.65, marginBottom: 16 }}>{o.desc}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#94a3b8', borderTop: '1px solid #f1f5f9', paddingTop: 12 }}>
                                        <span>Min. Order: <strong style={{ color: '#374151' }}>{o.minOrder}</strong></span>
                                        <span>Valid till: <strong style={{ color: '#374151' }}>{o.validity}</strong></span>
                                    </div>
                                </div>
                                <div style={{ padding: '0 24px 20px' }}>
                                    <Link href="/contact-us/" style={{ background: o.color, color: '#fff', padding: '10px 0', borderRadius: 4, fontWeight: 700, fontSize: 13, display: 'block', textAlign: 'center' }}>
                                        Book &amp; Apply Code
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '24px', marginTop: 32, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                        <span style={{ fontSize: 22 }}>ℹ️</span>
                        <div>
                            <strong style={{ fontSize: 14, color: '#0c1228' }}>Terms & Conditions Apply</strong>
                            <p style={{ fontSize: 12.5, color: '#64748b', margin: '6px 0 0', lineHeight: 1.6 }}>Coupons cannot be combined with other offers. One coupon per booking. Charminar Repairs reserves the right to modify or withdraw offers without prior notice. Discounts apply on service charges only, not spare parts.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
