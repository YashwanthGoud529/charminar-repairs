import React from 'react';
import PageHero from '@/components/shared/PageHero';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'Corporate & Bulk Services | Charminar Repairs Hyderabad',
    description: 'Charminar Repairs offers corporate service contracts for offices, housing societies, hotels, and commercial properties across Hyderabad.',
    canonicalPath: '/corporate',
});

const services = [
    { icon: '🏢', title: 'Office Maintenance', desc: 'Regular servicing of ACs, printers, projectors, water purifiers, and all office electronics for smooth operations.' },
    { icon: '🏘️', title: 'Housing Society AMC', desc: 'Society-wide appliance maintenance contracts covering lifts, gym equipment, community hall appliances, and individual flats.' },
    { icon: '🏨', title: 'Hotels & Hospitality', desc: 'Preventive and reactive maintenance for hotels, resorts, and service apartments — 24/7 priority response.' },
    { icon: '🏭', title: 'Warehouses & Factories', desc: 'Industrial-grade HVAC servicing, water cooler maintenance, and electrical appliance repair for manufacturing units.' },
    { icon: '🏫', title: 'Schools & Institutions', desc: 'Bulk servicing of ACs, projectors, computers, and kitchen equipment for educational institutions.' },
    { icon: '🏗️', title: 'Builder Handover Services', desc: 'End-to-end appliance commissioning and testing services for newly constructed residential and commercial properties.' },
];

const benefits = [
    { label: 'Dedicated Account Manager', icon: '👤' },
    { label: 'Priority Response within 2 Hours', icon: '⚡' },
    { label: 'Monthly Maintenance Reports', icon: '📊' },
    { label: 'Flat 25% Discount on All Services', icon: '💰' },
    { label: 'Multi-Location Coverage', icon: '🗺️' },
    { label: 'Custom SLA Agreements', icon: '📄' },
];

const clients = ['Prestige Constructions', 'My Home Group', 'Brigade Group Hyderabad', 'Rajapushpa Properties', 'WeWork Hyderabad', 'ICICI Bank Branches (HYD)', 'OYO Properties (HYD)', 'Lemon Tree Hotels'];

export default function CorporatePage() {
    return (
        <main style={{ background: '#f8f9fc' }}>
            <PageHero title="Corporate & Bulk Services" subtitle="Trusted by 200+ businesses across Hyderabad. Dedicated maintenance contracts for offices, housing societies, and commercial properties." breadcrumb="Corporate" />

            {/* Services */}
            <section style={{ padding: '60px 0 0' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: 24, color: '#0c1228', marginBottom: 8 }}>Services for Businesses</h2>
                    <p style={{ textAlign: 'center', color: '#64748b', fontSize: 14, marginBottom: 40 }}>Scalable solutions tailored to your property type and size</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                        {services.map((s, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '24px 20px' }}>
                                <div style={{ fontSize: 30, marginBottom: 12 }}>{s.icon}</div>
                                <h3 style={{ fontWeight: 800, fontSize: 15, color: '#0c1228', marginBottom: 8 }}>{s.title}</h3>
                                <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section style={{ padding: '60px 0' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <div style={{ background: '#0c1228', borderRadius: 4, padding: '40px 36px' }}>
                        <h2 style={{ fontWeight: 800, fontSize: 22, color: '#fff', marginBottom: 28, textAlign: 'center' }}>Corporate Client Benefits</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                            {benefits.map((b, i) => (
                                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', background: 'rgba(255,255,255,0.06)', borderRadius: 4, padding: '14px 16px' }}>
                                    <span style={{ fontSize: 20 }}>{b.icon}</span>
                                    <span style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>{b.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Clients */}
            <section style={{ padding: '0 0 60px' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <h2 style={{ fontWeight: 800, fontSize: 20, color: '#0c1228', marginBottom: 20, textAlign: 'center' }}>Trusted by Leading Businesses</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center', marginBottom: 40 }}>
                        {clients.map((c, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '10px 20px', fontSize: 13, fontWeight: 600, color: '#374151' }}>{c}</div>
                        ))}
                    </div>
                    <div style={{ background: '#673ab7', borderRadius: 4, padding: '32px', textAlign: 'center', color: '#fff' }}>
                        <h3 style={{ fontWeight: 800, marginBottom: 8 }}>Get a Custom Quote for Your Business</h3>
                        <p style={{ opacity: 0.85, fontSize: 14, marginBottom: 20 }}>Tell us about your property and we'll design a maintenance plan that fits your needs and budget.</p>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link href="/contact-us/" style={{ background: '#fff', color: '#673ab7', padding: '11px 28px', borderRadius: 4, fontWeight: 700, fontSize: 14 }}>Request a Quote</Link>
                            <a href="tel:8008615049" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', padding: '11px 28px', borderRadius: 4, fontWeight: 700, fontSize: 14 }}>Call 8008615049</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
