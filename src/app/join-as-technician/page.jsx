import React from 'react';
import PageHero from '@/components/shared/PageHero';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'Join as a Technician | MeeHelper – Work With Us in Hyderabad',
    description: 'Join MeeHelper as a certified field technician. Earn ₹25,000–₹60,000/month, flexible timings, and grow your career in home services.',
    canonicalPath: '/join-as-technician',
});

const perks = [
    { icon: '💰', title: 'Earn ₹25K–₹60K/Month', desc: 'Top-performing engineers earn ₹60,000+ per month based on jobs completed and customer ratings.' },
    { icon: '⏰', title: 'Flexible Work Hours', desc: 'Choose morning or evening shifts. Set your own availability and work-life balance.' },
    { icon: '📱', title: 'Work App Provided', desc: 'Get assigned jobs on our technician app. No need to market yourself — we bring the work to you.' },
    { icon: '🎓', title: 'Free Training', desc: 'Brand-specific technical training, safety certification, and customer handling workshops — all free.' },
    { icon: '🛡️', title: 'Insurance Coverage', desc: 'Work-related accident insurance provided to all enrolled technicians.' },
    { icon: '📈', title: 'Career Growth', desc: 'Progress from Field Technician → Senior Engineer → Area Manager → Regional Head.' },
];

const roles = [
    { role: 'AC Technician', exp: '1+ Years', skills: 'Inverter AC, Split AC, Cassette AC, Gas Handling (R32/R410a)', openings: 5 },
    { role: 'Refrigerator Engineer', exp: '1+ Years', skills: 'Compressor repair, PCB, gas leak, frost issues', openings: 4 },
    { role: 'Washing Machine Expert', exp: '6 Months+', skills: 'Front load, top load, drum motor, PCB diagnosis', openings: 6 },
    { role: 'Electronics Technician', exp: '1+ Years', skills: 'LED TV, laptop, microwave circuit board repairs', openings: 3 },
    { role: 'Cleaning Team Lead', exp: '6 Months+', skills: 'Deep cleaning, pest control, steam cleaning operations', openings: 4 },
    { role: 'Multi-Appliance Engineer', exp: '2+ Years', skills: 'All appliance types, home visit handling', openings: 3 },
];

const process = [
    { no: 1, title: 'Apply Online', desc: 'Fill the application below with your experience and preferred service category.' },
    { no: 2, title: 'Phone Interview', desc: 'Our HR team will call you within 48 hours for a quick 15-minute screening.' },
    { no: 3, title: 'Skill Assessment', desc: 'A short practical test at our Hyderabad office to assess your technical skill level.' },
    { no: 4, title: 'Onboarding & Training', desc: 'Complete our 2-day onboarding, get your uniform, tools kit, and start earning.' },
];

export default function JoinAsTechnicianPage() {
    return (
        <main style={{ background: '#f8f9fc' }}>
            <PageHero title="Join as a Technician" subtitle="Work with Hyderabad's fastest-growing home services brand. Earn well, grow fast, and build a rewarding career." breadcrumb="Join as Technician" />

            {/* Perks */}
            <section style={{ padding: '60px 0 0' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: 24, color: '#0c1228', marginBottom: 8 }}>Why Work With Us?</h2>
                    <p style={{ textAlign: 'center', color: '#64748b', fontSize: 14, marginBottom: 36 }}>Join 150+ certified technicians earning well and growing their careers with MeeHelper</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
                        {perks.map((p, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '24px 20px' }}>
                                <div style={{ fontSize: 28, marginBottom: 12 }}>{p.icon}</div>
                                <h3 style={{ fontWeight: 800, fontSize: 15, color: '#0c1228', marginBottom: 6 }}>{p.title}</h3>
                                <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Roles */}
            <section style={{ padding: '60px 0 0' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <h2 style={{ fontWeight: 800, fontSize: 22, color: '#0c1228', marginBottom: 28, textAlign: 'center' }}>Open Positions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {roles.map((r, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '18px 24px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                                <div style={{ flex: 1, minWidth: 200 }}>
                                    <div style={{ fontWeight: 800, fontSize: 15, color: '#0c1228', marginBottom: 4 }}>{r.role}</div>
                                    <div style={{ fontSize: 12, color: '#64748b' }}>{r.skills}</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Experience</div>
                                    <div style={{ fontWeight: 700, fontSize: 13, color: '#374151' }}>{r.exp}</div>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: 11, color: '#94a3b8' }}>Openings</div>
                                    <div style={{ fontWeight: 800, fontSize: 16, color: '#10b981' }}>{r.openings}</div>
                                </div>
                                <Link href="/contact-us/" style={{ background: '#024dbe', color: '#fff', padding: '8px 20px', borderRadius: 4, fontWeight: 700, fontSize: 13, flexShrink: 0 }}>Apply Now</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section style={{ padding: '60px 0 80px' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <h2 style={{ fontWeight: 800, fontSize: 22, color: '#0c1228', marginBottom: 32, textAlign: 'center' }}>Hiring Process</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 40 }}>
                        {process.map((s, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '24px 20px', textAlign: 'center' }}>
                                <div style={{ width: 40, height: 40, background: '#f3e8ff', color: '#024dbe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, margin: '0 auto 14px' }}>{s.no}</div>
                                <h4 style={{ fontWeight: 800, fontSize: 14, color: '#0c1228', marginBottom: 8 }}>{s.title}</h4>
                                <p style={{ fontSize: 12.5, color: '#475569', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ background: '#024dbe', borderRadius: 4, padding: '32px', textAlign: 'center', color: '#fff' }}>
                        <h3 style={{ fontWeight: 800, marginBottom: 6 }}>Ready to Start Earning?</h3>
                        <p style={{ opacity: 0.85, fontSize: 14, marginBottom: 20 }}>WhatsApp your name and experience to us. Our HR team will respond within 24 hours.</p>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="https://wa.me/918008615049?text=Hi%2C%20I%20want%20to%20join%20as%20a%20technician" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: '#fff', padding: '11px 28px', borderRadius: 4, fontWeight: 700, fontSize: 14 }}>WhatsApp to Apply</a>
                            <a href="mailto:hr@meehelper.com" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '11px 28px', borderRadius: 4, fontWeight: 700, fontSize: 14 }}>Email Your Resume</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
