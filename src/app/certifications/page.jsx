import React from 'react';
import PageHero from '@/components/shared/PageHero';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'Certifications & Authorizations | Charminar Repairs',
    description: 'Charminar Repairs is certified and trained by top appliance brands including Samsung, LG, Whirlpool, Bosch, and Voltas for authorized repair services in Hyderabad.',
    canonicalPath: '/certifications',
});

const brands = [
    { name: 'Samsung', type: 'Authorized Service Partner', category: 'Electronics & Home Appliances', color: '#1428A0' },
    { name: 'LG', type: 'Certified Service Centre', category: 'Home Appliances', color: '#A50034' },
    { name: 'Whirlpool', type: 'Trained Service Partner', category: 'Washing Machines & Refrigerators', color: '#1D3D7F' },
    { name: 'Bosch', type: 'Authorized Repair Network', category: 'Home Appliances', color: '#E20015' },
    { name: 'Voltas', type: 'Certified AC Repair Partner', category: 'Air Conditioners', color: '#00539B' },
    { name: 'Daikin', type: 'Trained AC Service Partner', category: 'Air Conditioners', color: '#005687' },
    { name: 'Hitachi', type: 'Certified Service Partner', category: 'AC & Refrigerators', color: '#C70000' },
    { name: 'Godrej', type: 'Authorized Service Network', category: 'All Home Appliances', color: '#6AB23E' },
    { name: 'Haier', type: 'Certified Repair Partner', category: 'AC & Washing Machines', color: '#1A4FA0' },
    { name: 'Blue Star', type: 'Trained AC Service Engineer', category: 'Commercial & Residential AC', color: '#005EA8' },
    { name: 'Kent', type: 'Authorized RO Service Partner', category: 'Water Purifiers', color: '#0073BA' },
    { name: 'Aquaguard', type: 'Certified Service Agent', category: 'Water Purifiers', color: '#009BDE' },
];

const credentials = [
    { icon: '🏛️', title: 'MSME Registered', desc: 'Officially registered under the Micro, Small & Medium Enterprises Act, Government of India.' },
    { icon: '🔐', title: 'ISO 9001:2015 Compliant', desc: 'Our service processes meet international quality management system standards.' },
    { icon: '👮', title: 'Police Verified Team', desc: 'Every technician on our roster has cleared police background verification.' },
    { icon: '🏆', title: '13+ Years in Business', desc: 'Serving Hyderabad since 2012 with zero compromise on quality or customer trust.' },
];

export default function CertificationsPage() {
    return (
        <main style={{ background: '#f8f9fc' }}>
            <PageHero title="Certifications & Authorizations" subtitle="Our engineers are trained and authorized by India's leading appliance brands. You're always in safe, certified hands." breadcrumb="Certifications" />

            {/* Credentials */}
            <section style={{ background: '#fff', borderBottom: '1px solid #e8eaf0', padding: '40px 0' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
                        {credentials.map((c, i) => (
                            <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px' }}>
                                <div style={{ fontSize: 28, flexShrink: 0 }}>{c.icon}</div>
                                <div>
                                    <div style={{ fontWeight: 800, fontSize: 14, color: '#0c1228', marginBottom: 4 }}>{c.title}</div>
                                    <div style={{ fontSize: 12.5, color: '#64748b', lineHeight: 1.6 }}>{c.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Certifications */}
            <section style={{ padding: '60px 0 80px' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <h2 style={{ fontWeight: 800, fontSize: 22, color: '#0c1228', marginBottom: 8, textAlign: 'center' }}>Brand Authorizations</h2>
                    <p style={{ color: '#64748b', fontSize: 14, textAlign: 'center', marginBottom: 36 }}>We are trained, certified, or authorized partners of these leading brands</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 16 }}>
                        {brands.map((b, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '20px 18px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                                <div style={{ width: 42, height: 42, background: b.color + '15', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <span style={{ fontWeight: 900, fontSize: 11, color: b.color }}>{b.name.slice(0,3).toUpperCase()}</span>
                                </div>
                                <div>
                                    <div style={{ fontWeight: 800, fontSize: 14, color: '#0c1228', marginBottom: 2 }}>{b.name}</div>
                                    <div style={{ fontSize: 11, color: '#673ab7', fontWeight: 700, marginBottom: 4 }}>{b.type}</div>
                                    <div style={{ fontSize: 11, color: '#94a3b8' }}>{b.category}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ background: '#f3e8ff', borderRadius: 4, padding: '20px 24px', marginTop: 36, display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                        <span style={{ fontSize: 20 }}>ℹ️</span>
                        <p style={{ color: '#4c1d95', fontSize: 13, margin: 0, lineHeight: 1.7 }}>
                            <strong>Disclaimer:</strong> Charminar Repairs is an independent multi-brand service company. Brand names are mentioned to indicate our technical expertise with those products. We are not the official warranty service center for these brands unless explicitly stated.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
