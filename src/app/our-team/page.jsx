import React from 'react';
import PageHero from '@/components/shared/PageHero';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'Our Technicians | Charminar Repairs – Certified & Verified Engineers',
    description: 'Meet the certified, police-verified, uniformed technicians behind Charminar Repairs. Every engineer is trained, insured, and background-checked.',
    canonicalPath: '/our-team',
});

const engineers = [
    { name: 'Mohammed Faisal', role: 'Senior AC Specialist', exp: '9 Years', badges: ['AC', 'Refrigerator', 'Geyser'], rating: 4.9, jobs: 2100, area: 'Gachibowli, Kondapur, Madhapur' },
    { name: 'Ravi Shankar', role: 'Washing Machine Expert', exp: '7 Years', badges: ['Washing Machine', 'Dryer'], rating: 4.8, jobs: 1840, area: 'Kukatpally, KPHB, Miyapur' },
    { name: 'Srinivas Reddy', role: 'Electronics Technician', exp: '11 Years', badges: ['TV', 'Laptop', 'Microwave'], rating: 4.9, jobs: 3200, area: 'Banjara Hills, Jubilee Hills, Ameerpet' },
    { name: 'Arjun Kumar', role: 'Appliance Engineer', exp: '6 Years', badges: ['Refrigerator', 'AC', 'Gas Stove'], rating: 4.7, jobs: 1560, area: 'Secunderabad, Alwal, Malkajgiri' },
    { name: 'Venkat Rao', role: 'Cleaning Specialist', exp: '5 Years', badges: ['Deep Cleaning', 'Pest Control'], rating: 4.8, jobs: 980, area: 'Hitech City, Nanakramguda, Manikonda' },
    { name: 'Irfan Ahmed', role: 'Multi-Appliance Expert', exp: '8 Years', badges: ['Chimney', 'Water Purifier', 'Geyser'], rating: 4.9, jobs: 2450, area: 'Old City, Mehdipatnam, Tolichowki' },
];

const certifications = ['Brand Authorized Service Training', 'Police Verification & Background Check', 'First Aid & Safety Certified', 'Customer Service Excellence Program', 'OEM Spare Parts Handling Trained'];

export default function OurTeamPage() {
    return (
        <main style={{ background: '#f8f9fc' }}>
            <PageHero title="Our Technicians" subtitle="Meet our team of certified, background-verified engineers who deliver doorstep repairs across 500+ Hyderabad localities." breadcrumb="Our Team" />

            {/* Trust Banner */}
            <section style={{ background: '#fff', borderBottom: '1px solid #e8eaf0', padding: '24px 0' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', alignItems: 'center' }}>
                        {certifications.map((c, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#f3e8ff', borderRadius: 4, padding: '6px 14px' }}>
                                <span style={{ color: '#673ab7', fontWeight: 800 }}>✓</span>
                                <span style={{ fontSize: 12, fontWeight: 600, color: '#673ab7' }}>{c}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section style={{ padding: '60px 0 80px' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <h2 style={{ fontWeight: 800, fontSize: 22, color: '#0c1228', marginBottom: 32, textAlign: 'center' }}>Our Star Engineers</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
                        {engineers.map((e, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '24px', overflow: 'hidden' }}>
                                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 16 }}>
                                    <div style={{ width: 52, height: 52, background: `hsl(${i * 47 + 200},70%,92%)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 20, color: `hsl(${i * 47 + 200},60%,40%)`, flexShrink: 0 }}>
                                        {e.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 800, fontSize: 15, color: '#0c1228' }}>{e.name}</div>
                                        <div style={{ fontSize: 12, color: '#673ab7', fontWeight: 700 }}>{e.role}</div>
                                        <div style={{ fontSize: 11, color: '#94a3b8', marginTop: 2 }}>{e.exp} Experience</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontWeight: 800, fontSize: 18, color: '#f59e0b' }}>⭐ {e.rating}</div>
                                        <div style={{ fontSize: 10, color: '#94a3b8', fontWeight: 600 }}>Rating</div>
                                    </div>
                                    <div style={{ width: 1, background: '#e8eaf0' }} />
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontWeight: 800, fontSize: 18, color: '#10b981' }}>{e.jobs.toLocaleString()}</div>
                                        <div style={{ fontSize: 10, color: '#94a3b8', fontWeight: 600 }}>Jobs Done</div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 12 }}>
                                    {e.badges.map((b, bi) => (
                                        <span key={bi} style={{ fontSize: 11, background: '#f8f9fc', border: '1px solid #e2e8f0', color: '#475569', padding: '2px 8px', borderRadius: 4, fontWeight: 600 }}>{b}</span>
                                    ))}
                                </div>
                                <div style={{ fontSize: 12, color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 6 }}>
                                    <span>📍</span> Covers: {e.area}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ background: '#0c1228', borderRadius: 4, padding: '36px', marginTop: 48, textAlign: 'center', color: '#fff' }}>
                        <h3 style={{ fontWeight: 800, marginBottom: 8 }}>Want to Join Our Team?</h3>
                        <p style={{ opacity: 0.75, fontSize: 14, marginBottom: 20 }}>We're always hiring certified engineers across Hyderabad. Earn well, work flexibly.</p>
                        <Link href="/join-as-technician/" style={{ background: '#673ab7', color: '#fff', padding: '12px 28px', borderRadius: 4, fontWeight: 700, fontSize: 14, display: 'inline-block' }}>Apply as a Technician</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
