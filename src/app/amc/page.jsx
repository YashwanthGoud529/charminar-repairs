import React from 'react';
import PageHero from '@/components/shared/PageHero';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'Annual Maintenance Contract (AMC) | Charminar Repairs Hyderabad',
    description: 'Protect your home appliances year-round with Charminar Repairs AMC plans. Starting at ₹999/year for ACs, fridges, washing machines, and more.',
    canonicalPath: '/amc',
});

const plans = [
    {
        name: 'Basic AMC', price: '₹999', period: '/year', color: '#64748b', popular: false,
        appliances: '1 Appliance', visits: '2 Preventive Visits', coverage: ['2 Free Service Calls', '10% Discount on Spare Parts', 'Priority Booking', 'WhatsApp Support'],
        notIncluded: ['Spare Parts Cost', 'Emergency Visits'],
    },
    {
        name: 'Home AMC', price: '₹2,499', period: '/year', color: '#673ab7', popular: true,
        appliances: 'Up to 4 Appliances', visits: '4 Preventive Visits', coverage: ['4 Free Service Calls', '20% Discount on Spare Parts', 'Priority Booking', '24/7 WhatsApp Support', 'Free Emergency Visits (2)', 'Annual Health Report'],
        notIncluded: ['Spare Parts Cost above ₹500'],
    },
    {
        name: 'Premium AMC', price: '₹5,999', period: '/year', color: '#0c1228', popular: false,
        appliances: 'Unlimited Appliances', visits: 'Unlimited Preventive Visits', coverage: ['Unlimited Free Service Calls', '30% Discount on Spare Parts', 'Express 4-Hour Response', 'Dedicated Relationship Manager', 'Free Emergency Visits (Unlimited)', 'Quarterly Inspection Report', 'Free Minor Spare Parts'],
        notIncluded: [],
    },
];

const faqs = [
    { q: 'What appliances does the AMC cover?', a: 'Our AMC covers AC, refrigerator, washing machine, TV, microwave, geyser, water purifier, gas stove, chimney, and laptop.' },
    { q: 'What is a preventive visit?', a: 'Our technician visits your home to inspect and service your appliances before any breakdown occurs — cleaning filters, checking gas pressure, lubrication, etc.' },
    { q: 'Are spare parts included in AMC?', a: 'Spare parts are not included in Basic and Home plans but are heavily discounted. The Premium plan includes minor parts free of cost.' },
    { q: 'Can I renew my AMC?', a: 'Yes. You can renew annually. Loyal customers get an additional 10% discount on renewal.' },
];

export default function AMCPage() {
    return (
        <main style={{ background: '#f8f9fc' }}>
            <PageHero title="Annual Maintenance Contract (AMC)" subtitle="Protect your appliances all year long. Our AMC plans offer preventive servicing, priority support, and huge savings." breadcrumb="AMC Plans" />

            <section style={{ padding: '60px 0' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: 24, color: '#0c1228', marginBottom: 8 }}>Choose Your AMC Plan</h2>
                    <p style={{ textAlign: 'center', color: '#64748b', fontSize: 14, marginBottom: 40 }}>Transparent pricing. No hidden charges. Cancel anytime.</p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 60 }}>
                        {plans.map((p, i) => (
                            <div key={i} style={{ background: '#fff', border: p.popular ? `2px solid #673ab7` : '1px solid #e8eaf0', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
                                {p.popular && <div style={{ background: '#673ab7', color: '#fff', textAlign: 'center', padding: '5px 0', fontSize: 11, fontWeight: 800, letterSpacing: 1 }}>MOST POPULAR</div>}
                                <div style={{ padding: '28px 24px' }}>
                                    <div style={{ fontWeight: 800, fontSize: 18, color: '#0c1228', marginBottom: 4 }}>{p.name}</div>
                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 4 }}>
                                        <span style={{ fontWeight: 900, fontSize: 32, color: p.color }}>{p.price}</span>
                                        <span style={{ color: '#94a3b8', fontSize: 14 }}>{p.period}</span>
                                    </div>
                                    <div style={{ fontSize: 13, color: '#64748b', marginBottom: 20, paddingBottom: 20, borderBottom: '1px solid #f1f5f9' }}>
                                        {p.appliances} · {p.visits}
                                    </div>
                                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
                                        {p.coverage.map((item, ci) => (
                                            <li key={ci} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#374151' }}>
                                                <span style={{ color: '#10b981', fontWeight: 700 }}>✓</span>{item}
                                            </li>
                                        ))}
                                        {p.notIncluded.map((item, ni) => (
                                            <li key={ni} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#94a3b8' }}>
                                                <span style={{ fontWeight: 700 }}>✗</span>{item}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact-us/" style={{ background: p.popular ? '#673ab7' : '#f8f9fc', color: p.popular ? '#fff' : '#0c1228', border: p.popular ? 'none' : '1px solid #e2e8f0', padding: '11px 0', borderRadius: 4, fontWeight: 700, fontSize: 14, display: 'block', textAlign: 'center' }}>
                                        Get This Plan
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* FAQ */}
                    <h3 style={{ fontWeight: 800, fontSize: 20, color: '#0c1228', marginBottom: 20 }}>AMC FAQs</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {faqs.map((f, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '16px 20px' }}>
                                <div style={{ fontWeight: 700, fontSize: 14, color: '#0c1228', marginBottom: 6 }}>Q. {f.q}</div>
                                <div style={{ fontSize: 13, color: '#475569', lineHeight: 1.65 }}>{f.a}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
