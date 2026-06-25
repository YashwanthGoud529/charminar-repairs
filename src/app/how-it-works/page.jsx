import React from 'react';
import PageHero from '@/components/shared/PageHero';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'How It Works | MeeHelper – Book a Repair in 3 Easy Steps',
    description: 'See how MeeHelper works — book online, get a certified technician at your door, and enjoy a 180-day repair warranty.',
    canonicalPath: '/how-it-works',
});

const steps = [
    { no: '01', title: 'Book Your Service', icon: '📱', color: '#024dbe', desc: 'Choose your appliance and preferred time slot. Book via website, phone call, or WhatsApp — takes less than 2 minutes. You\'ll receive an instant SMS/WhatsApp confirmation.' },
    { no: '02', title: 'Technician Assigned', icon: '👨‍🔧', color: '#0ea5e9', desc: 'A certified, background-verified technician is assigned to your booking. You\'ll receive their name, photo, and live ETA before they arrive.' },
    { no: '03', title: 'Diagnosis & Quotation', icon: '🔍', color: '#f59e0b', desc: 'The technician inspects the appliance and provides a transparent price quote. No hidden charges. You decide whether to proceed.' },
    { no: '04', title: 'Repair Done', icon: '✅', color: '#10b981', desc: 'Once approved, our expert completes the repair using genuine spare parts. Most repairs are done in a single visit under 60 minutes.' },
    { no: '05', title: 'Pay & Get Warranty', icon: '🛡️', color: '#ef4444', desc: 'Pay conveniently via UPI, card, or cash. Every repair comes with a 180-day service warranty and 90-day parts warranty.' },
    { no: '06', title: 'Rate Your Experience', icon: '⭐', color: '#8b5cf6', desc: 'Share feedback on WhatsApp or Google. We monitor every job to ensure you\'re 100% satisfied.' },
];

const guarantees = [
    { icon: '⏱️', title: 'Same-Day Service', desc: 'Book before 12 PM for same-day repair in most Hyderabad localities.' },
    { icon: '💰', title: 'Price Transparency', desc: 'See the full cost before we start. No surprise charges, ever.' },
    { icon: '🔐', title: 'Background-Checked Engineers', desc: 'Every technician is police-verified, certified, and uniformed.' },
    { icon: '🏆', title: '180-Day Warranty', desc: 'All repairs guaranteed. If it fails within 180 days, we fix it free.' },
];

export default function HowItWorksPage() {
    return (
        <main style={{ background: '#f8f9fc' }}>
            <PageHero title="How It Works" subtitle="Getting your appliance repaired with MeeHelper is simple, fast, and fully transparent." breadcrumb="How It Works" />

            <section style={{ padding: '60px 0' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <div style={{ textAlign: 'center', marginBottom: 48 }}>
                        <span style={{ background: '#f3e8ff', color: '#024dbe', fontSize: 12, fontWeight: 700, padding: '4px 12px', borderRadius: 4, letterSpacing: 1 }}>THE PROCESS</span>
                        <h2 style={{ fontWeight: 800, fontSize: 28, marginTop: 12, color: '#0c1228' }}>Repair in 6 Simple Steps</h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                        {steps.map((step, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 16, right: 16, fontSize: 28, opacity: 0.08, fontWeight: 900, color: step.color }}>{step.no}</div>
                                <div style={{ width: 44, height: 44, background: step.color + '15', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 16 }}>{step.icon}</div>
                                <div style={{ fontSize: 11, fontWeight: 700, color: step.color, letterSpacing: 1, marginBottom: 6 }}>STEP {step.no}</div>
                                <h3 style={{ fontWeight: 800, fontSize: 16, color: '#0c1228', marginBottom: 10 }}>{step.title}</h3>
                                <p style={{ color: '#475569', fontSize: 13.5, lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ background: '#fff', padding: '60px 0', borderTop: '1px solid #e8eaf0' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: 24, marginBottom: 36, color: '#0c1228' }}>Our Guarantees to You</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
                        {guarantees.map((g, i) => (
                            <div key={i} style={{ background: '#f8f9fc', borderRadius: 4, padding: '24px 20px', textAlign: 'center', border: '1px solid #e8eaf0' }}>
                                <div style={{ fontSize: 30, marginBottom: 12 }}>{g.icon}</div>
                                <h4 style={{ fontWeight: 700, fontSize: 15, color: '#0c1228', marginBottom: 8 }}>{g.title}</h4>
                                <p style={{ color: '#475569', fontSize: 13, margin: 0, lineHeight: 1.6 }}>{g.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 48 }}>
                        <Link href="/contact-us/" style={{ background: '#024dbe', color: '#fff', padding: '14px 36px', borderRadius: 4, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>Book a Repair Now</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
