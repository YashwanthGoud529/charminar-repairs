import React from 'react';
import PageHero from '@/components/shared/PageHero';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'Compare Repair Plans | Charminar Repairs - Find the Right Plan',
    description: 'Compare one-time repair, AMC, and premium maintenance plans from Charminar Repairs. See what is included and choose the best value for your home.',
    canonicalPath: '/compare-plans',
});

const features = [
    { feature: 'Service Visit Charge', oneTime: '₹99 (waived on repair)', amc: 'Free', premium: 'Free' },
    { feature: 'Repair Warranty', oneTime: '30 Days', amc: '60 Days', premium: '90 Days' },
    { feature: 'Parts Warranty', oneTime: '90 Days', amc: '90 Days', premium: '1 Year' },
    { feature: 'Priority Booking', oneTime: '✗', amc: '✓', premium: '✓' },
    { feature: 'Preventive Servicing', oneTime: '✗', amc: '2x / Year', premium: 'Quarterly' },
    { feature: 'Spare Parts Discount', oneTime: '✗', amc: '20% Off', premium: '30% Off + Free Minor Parts' },
    { feature: 'Emergency Response', oneTime: 'Surge Charge', amc: 'Free (2/year)', premium: 'Free Unlimited' },
    { feature: 'Dedicated Manager', oneTime: '✗', amc: '✗', premium: '✓' },
    { feature: 'Monthly Report', oneTime: '✗', amc: '✗', premium: '✓' },
    { feature: 'Multi-Appliance Coverage', oneTime: 'Per Appliance', amc: 'Up to 4', premium: 'Unlimited' },
    { feature: 'Price', oneTime: 'Pay per use', amc: '₹2,499/year', premium: '₹5,999/year' },
];

export default function ComparePlansPage() {
    return (
        <main style={{ background: '#f8f9fc' }}>
            <PageHero title="Compare Plans" subtitle="One-time repair or year-round protection? Compare our plans side by side and choose what's right for your home." breadcrumb="Compare Plans" />

            <section style={{ padding: '60px 0 80px' }}>
                <div className="container" style={{ maxWidth: 900 }}>
                    {/* Summary cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 36 }}>
                        {[
                            { name: 'One-Time Repair', price: 'Pay Per Use', color: '#64748b', desc: 'Book when you need us. No commitments.', cta: 'Book a Repair' },
                            { name: 'Home AMC', price: '₹2,499/yr', color: '#673ab7', popular: true, desc: 'Best value. Cover up to 4 appliances.', cta: 'Get AMC' },
                            { name: 'Premium AMC', price: '₹5,999/yr', color: '#0c1228', desc: 'Everything included. Unlimited coverage.', cta: 'Get Premium' },
                        ].map((p, i) => (
                            <div key={i} style={{ background: p.popular ? '#673ab7' : '#fff', border: p.popular ? 'none' : '1px solid #e8eaf0', borderRadius: 4, padding: '20px 16px', textAlign: 'center', position: 'relative' }}>
                                {p.popular && <div style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', background: '#f59e0b', color: '#fff', fontSize: 10, fontWeight: 800, padding: '2px 10px', borderRadius: 4, whiteSpace: 'nowrap' }}>BEST VALUE</div>}
                                <div style={{ fontWeight: 800, fontSize: 14, color: p.popular ? '#fff' : '#0c1228', marginBottom: 4 }}>{p.name}</div>
                                <div style={{ fontWeight: 900, fontSize: 20, color: p.popular ? '#fff' : p.color, marginBottom: 6 }}>{p.price}</div>
                                <div style={{ fontSize: 12, color: p.popular ? 'rgba(255,255,255,0.75)' : '#64748b', marginBottom: 14 }}>{p.desc}</div>
                                <Link href="/contact-us/" style={{ background: p.popular ? '#fff' : '#673ab7', color: p.popular ? '#673ab7' : '#fff', padding: '8px 0', borderRadius: 4, fontWeight: 700, fontSize: 12, display: 'block' }}>{p.cta}</Link>
                            </div>
                        ))}
                    </div>

                    {/* Comparison table */}
                    <div style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, overflow: 'hidden' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', background: '#0c1228', padding: '12px 16px', gap: 8 }}>
                            {['Feature', 'One-Time', 'Home AMC', 'Premium AMC'].map((h, i) => (
                                <div key={i} style={{ fontSize: 12, fontWeight: 700, color: i === 0 ? 'rgba(255,255,255,0.7)' : '#fff', textAlign: i > 0 ? 'center' : 'left' }}>{h}</div>
                            ))}
                        </div>
                        {features.map((row, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 16px', gap: 8, background: i % 2 === 0 ? '#fff' : '#f8f9fc', borderBottom: '1px solid #f1f5f9', alignItems: 'center' }}>
                                <div style={{ fontSize: 13, color: '#374151', fontWeight: 600 }}>{row.feature}</div>
                                <div style={{ fontSize: 12.5, color: row.oneTime === '✗' ? '#cbd5e1' : '#374151', textAlign: 'center' }}>{row.oneTime}</div>
                                <div style={{ fontSize: 12.5, color: row.amc === '✗' ? '#cbd5e1' : '#673ab7', fontWeight: row.amc !== '✗' ? 700 : 400, textAlign: 'center' }}>{row.amc}</div>
                                <div style={{ fontSize: 12.5, color: row.premium === '✗' ? '#cbd5e1' : '#10b981', fontWeight: row.premium !== '✗' ? 700 : 400, textAlign: 'center' }}>{row.premium}</div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 40 }}>
                        <p style={{ color: '#64748b', fontSize: 13, marginBottom: 16 }}>Not sure which plan is right for you?</p>
                        <Link href="/contact-us/" style={{ background: '#673ab7', color: '#fff', padding: '13px 32px', borderRadius: 4, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>Talk to Our Team</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
