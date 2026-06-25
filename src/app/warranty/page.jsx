import React from 'react';
import PageHero from '@/components/shared/PageHero';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'Warranty & Guarantee | MeeHelper – 180-Day Service Warranty',
    description: 'Every repair by MeeHelper comes with a 180-day service warranty and 90-day parts warranty. Your satisfaction is guaranteed.',
    canonicalPath: '/warranty',
});

const warranties = [
    { icon: '🔧', title: '180-Day Service Warranty', color: '#024dbe', desc: 'If the same issue reappears within 180 days of our repair, we will fix it at zero cost — no questions asked.' },
    { icon: '🔩', title: '90-Day Parts Warranty', color: '#0ea5e9', desc: 'All replacement spare parts carry a 90-day manufacturer-backed warranty. Defective parts are replaced for free.' },
    { icon: '💯', title: '100% Satisfaction Promise', color: '#10b981', desc: 'Not satisfied with the repair? We will revisit, reassess, and make it right. Your trust is our priority.' },
    { icon: '📋', title: 'Transparent Quotation', color: '#f59e0b', desc: 'We quote before we start. You approve before we touch anything. No hidden fees, ever.' },
];

const covered = ['AC gas filling & gas leaks', 'Compressor repairs (refrigerator / AC)', 'Washing machine drum, motor, pump issues', 'TV display, backlight, and circuit board repairs', 'Microwave magnetron, turntable motor replacements', 'Geyser heating element and thermostat repairs', 'Water purifier membrane and UV lamp changes', 'Laptop charging port, keyboard, screen repairs'];

const notCovered = ['Physical damage after our visit (drops, floods, power surges)', 'Consumables like filters changed during every service', 'Issues unrelated to our repair scope', 'Repairs done by another technician after our visit'];

export default function WarrantyPage() {
    return (
        <main style={{ background: '#f8f9fc' }}>
            <PageHero title="Warranty & Guarantee" subtitle="We stand behind every repair. Our warranty ensures your appliance stays fixed — or we come back for free." breadcrumb="Warranty" />

            <section style={{ padding: '60px 0' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 56 }}>
                        {warranties.map((w, i) => (
                            <div key={i} style={{ background: '#fff', border: `2px solid ${w.color}20`, borderTop: `3px solid ${w.color}`, borderRadius: 4, padding: '28px 22px' }}>
                                <div style={{ fontSize: 28, marginBottom: 12 }}>{w.icon}</div>
                                <h3 style={{ fontWeight: 800, fontSize: 16, color: '#0c1228', marginBottom: 10 }}>{w.title}</h3>
                                <p style={{ color: '#475569', fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>{w.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                        <div style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '28px 24px' }}>
                            <h3 style={{ fontWeight: 800, fontSize: 17, color: '#10b981', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>✅ What's Covered</h3>
                            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {covered.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13.5, color: '#374151' }}>
                                        <span style={{ color: '#10b981', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '28px 24px' }}>
                            <h3 style={{ fontWeight: 800, fontSize: 17, color: '#ef4444', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>❌ Not Covered</h3>
                            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {notCovered.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13.5, color: '#374151' }}>
                                        <span style={{ color: '#ef4444', fontWeight: 700, flexShrink: 0 }}>✗</span>{item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div style={{ background: '#024dbe', borderRadius: 4, padding: '32px', textAlign: 'center', marginTop: 40, color: '#fff' }}>
                        <h3 style={{ fontWeight: 800, marginBottom: 8 }}>Warranty Claim? We're Here.</h3>
                        <p style={{ opacity: 0.85, fontSize: 14, marginBottom: 20 }}>Call us or WhatsApp your booking ID and we'll dispatch a technician within 24 hours.</p>
                        <a href="tel:8008615049" style={{ background: '#fff', color: '#024dbe', padding: '11px 28px', borderRadius: 4, fontWeight: 700, fontSize: 14, display: 'inline-block' }}>Call 8008615049</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
