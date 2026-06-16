import React from 'react';
import PageHero from '@/components/shared/PageHero';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'Emergency Repairs Hyderabad | Charminar Repairs – 2-Hour Response',
    description: 'AC breakdown? Fridge not cooling? We offer emergency appliance repair across Hyderabad with a 2-hour guaranteed response time.',
    canonicalPath: '/emergency-repairs',
});

const emergencies = [
    { icon: '❄️', title: 'AC Not Cooling', urgency: 'Critical', desc: 'Especially in summer — we dispatch a technician within 2 hours guaranteed.' },
    { icon: '🧊', title: 'Fridge Stopped Working', urgency: 'Critical', desc: 'Food spoilage risk. We prioritize fridge emergencies above all other jobs.' },
    { icon: '💧', title: 'Washing Machine Flooding', urgency: 'Urgent', desc: 'Water overflow can damage flooring. Immediate response to contain and fix.' },
    { icon: '💻', title: 'Laptop Won\'t Boot', urgency: 'Urgent', desc: 'Work-from-home emergency? We visit within 3 hours for laptop hardware issues.' },
    { icon: '🔥', title: 'Gas Stove Not Igniting', urgency: 'Critical', desc: 'Safety first. Gas-related emergencies are handled with highest priority.' },
    { icon: '🚿', title: 'Geyser Failure', urgency: 'Urgent', desc: 'No hot water in winter? Emergency geyser repairs dispatched same hour.' },
];

const steps = [
    { no: 1, title: 'Call or WhatsApp Us', desc: 'Dial 8008615049 or send "EMERGENCY" on WhatsApp. Our emergency line is open 7 AM – 11 PM.' },
    { no: 2, title: 'Technician Dispatched', desc: 'Nearest available certified technician is dispatched to your location within 30 minutes of your call.' },
    { no: 3, title: 'On-Site in 2 Hours', desc: 'We guarantee arrival within 2 hours in central Hyderabad. Outlying areas within 3 hours.' },
    { no: 4, title: 'Fix & Warranty', desc: 'Issue resolved on the spot in most cases. 30-day warranty applies even on emergency repairs.' },
];

export default function EmergencyRepairsPage() {
    return (
        <main style={{ background: '#f8f9fc' }}>
            <PageHero title="Emergency Repairs" subtitle="Appliance breakdown? Don't panic. We guarantee a 2-hour response across Hyderabad — any day, any time." breadcrumb="Emergency Repairs" />

            {/* Emergency CTA */}
            <section style={{ background: '#ef4444', padding: '24px 0' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, flexWrap: 'wrap', textAlign: 'center' }}>
                        <div>
                            <div style={{ fontWeight: 900, fontSize: 18, color: '#fff' }}>🚨 Emergency Helpline — Available Now</div>
                            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>7:00 AM – 11:00 PM · 7 Days a Week</div>
                        </div>
                        <a href="tel:8008615049" style={{ background: '#fff', color: '#ef4444', padding: '12px 28px', borderRadius: 4, fontWeight: 900, fontSize: 16, display: 'inline-block', textDecoration: 'none' }}>
                            📞 Call 8008615049
                        </a>
                    </div>
                </div>
            </section>

            {/* Emergency Types */}
            <section style={{ padding: '60px 0 0' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <h2 style={{ fontWeight: 800, fontSize: 22, color: '#0c1228', marginBottom: 8, textAlign: 'center' }}>We Handle These Emergencies</h2>
                    <p style={{ color: '#64748b', fontSize: 14, textAlign: 'center', marginBottom: 36 }}>All emergency jobs include free re-visit within 30 days</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                        {emergencies.map((e, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '20px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                                <div style={{ fontSize: 28, flexShrink: 0 }}>{e.icon}</div>
                                <div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                                        <span style={{ fontWeight: 800, fontSize: 14, color: '#0c1228' }}>{e.title}</span>
                                        <span style={{ fontSize: 10, background: e.urgency === 'Critical' ? '#fee2e2' : '#fef3c7', color: e.urgency === 'Critical' ? '#dc2626' : '#d97706', padding: '1px 6px', borderRadius: 4, fontWeight: 700 }}>{e.urgency}</span>
                                    </div>
                                    <p style={{ fontSize: 13, color: '#475569', margin: 0, lineHeight: 1.6 }}>{e.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section style={{ padding: '60px 0 80px' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <h2 style={{ fontWeight: 800, fontSize: 22, color: '#0c1228', marginBottom: 36, textAlign: 'center' }}>How Emergency Service Works</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
                        {steps.map((s, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '24px 20px', textAlign: 'center' }}>
                                <div style={{ width: 40, height: 40, background: '#ef444415', color: '#ef4444', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, margin: '0 auto 14px' }}>{s.no}</div>
                                <h4 style={{ fontWeight: 800, fontSize: 14, color: '#0c1228', marginBottom: 8 }}>{s.title}</h4>
                                <p style={{ fontSize: 12.5, color: '#475569', margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ background: '#0c1228', borderRadius: 4, padding: '28px', textAlign: 'center', marginTop: 36, color: '#fff' }}>
                        <p style={{ opacity: 0.75, fontSize: 14, marginBottom: 12 }}>Emergency surge charge applies: ₹100–₹200 depending on distance and time of call.</p>
                        <a href="tel:8008615049" style={{ background: '#ef4444', color: '#fff', padding: '12px 28px', borderRadius: 4, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>🚨 Call Now – 8008615049</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
