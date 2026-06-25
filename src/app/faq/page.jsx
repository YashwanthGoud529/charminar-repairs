import React from 'react';
import PageHero from '@/components/shared/PageHero';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'FAQ | MeeHelper – Common Questions Answered',
    description: 'Find answers to the most common questions about our appliance repair, cleaning, and home services in Hyderabad.',
    canonicalPath: '/faq',
});

const faqs = [
    {
        cat: 'Booking & Scheduling', icon: '📅', items: [
            { q: 'How do I book a repair service?', a: 'You can book online via our website, call us at 8008615049, or WhatsApp us. We confirm your slot within 15 minutes.' },
            { q: 'What is the earliest slot I can get?', a: 'We offer same-day service in most Hyderabad areas. Book before 12 PM for a same-day afternoon slot.' },
            { q: 'Can I reschedule or cancel my booking?', a: 'Yes. Cancellations before 2 hours of the scheduled visit are free. Late cancellations may attract a ₹99 convenience fee.' },
            { q: 'Do you offer weekend appointments?', a: 'Yes, we are available 7 days a week from 8 AM to 9 PM including Sundays and public holidays.' },
        ]
    },
    {
        cat: 'Pricing & Payments', icon: '💳', items: [
            { q: 'What is the service visit charge?', a: 'Our inspection visit starts at ₹99. This amount is waived if you proceed with the repair.' },
            { q: 'How do you charge for repairs?', a: 'We charge a transparent flat fee — you\'ll get a quotation before any work begins. No hidden charges ever.' },
            { q: 'Do you accept UPI / online payments?', a: 'Yes — we accept UPI, credit/debit cards, net banking, wallets, and cash.' },
            { q: 'Do you charge extra for same-day or emergency visits?', a: 'Emergency visits may carry a nominal surge of ₹50–₹150 depending on urgency and distance.' },
        ]
    },
    {
        cat: 'Warranty & Quality', icon: '🛡️', items: [
            { q: 'Do repairs come with a warranty?', a: 'Yes. All repairs carry a 180-day service warranty and 90-day warranty on replaced spare parts.' },
            { q: 'What if the appliance breaks again within warranty?', a: 'We will revisit and fix it at zero additional cost. No questions asked.' },
            { q: 'Are your technicians certified?', a: 'All our engineers are certified, background-verified, and trained on specific brands and appliance categories.' },
        ]
    },
    {
        cat: 'Service Coverage', icon: '📍', items: [
            { q: 'Which areas in Hyderabad do you cover?', a: 'We cover 500+ localities across Hyderabad, Secunderabad, and nearby suburbs. Check our Service Areas page for full coverage.' },
            { q: 'Do you service all brands?', a: 'Yes — Samsung, LG, Whirlpool, Bosch, Godrej, Voltas, Daikin, Hitachi, Haier, and all major Indian and international brands.' },
            { q: 'Do you repair commercial appliances?', a: 'We primarily serve residential clients, but we also offer AMC and bulk repair services for offices and housing societies.' },
        ]
    },
    {
        cat: 'Spare Parts', icon: '🔧', items: [
            { q: 'Do you use genuine spare parts?', a: 'We use OEM or ISI-certified equivalent spare parts sourced from authorised distributors.' },
            { q: 'What if a spare part needs to be ordered?', a: 'We will inform you at the time of diagnosis. Most parts are in stock; rare parts are usually delivered within 1–2 business days.' },
        ]
    },
];

export default function FAQPage() {
    return (
        <main style={{ background: '#f8f9fc' }}>
            <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know about MeeHelper services, pricing, and policies." breadcrumb="FAQ" />

            <section style={{ padding: '60px 0 80px' }}>
                <div className="container" style={{ maxWidth: 960 }}>
                    {faqs.map((section, si) => (
                        <div key={si} style={{ marginBottom: 48 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                                <span style={{ fontSize: 22 }}>{section.icon}</span>
                                <h2 style={{ fontSize: 18, fontWeight: 700, color: '#0c1228', margin: 0 }}>{section.cat}</h2>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {section.items.map((item, i) => (
                                    <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '18px 22px' }}>
                                        <div style={{ fontWeight: 700, color: '#0c1228', fontSize: 15, marginBottom: 8, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                                            <span style={{ color: '#024dbe', fontWeight: 800, flexShrink: 0 }}>Q.</span>
                                            {item.q}
                                        </div>
                                        <div style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, paddingLeft: 22 }}>{item.a}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div style={{ background: '#024dbe', borderRadius: 4, padding: '32px 36px', color: '#fff', textAlign: 'center', marginTop: 40 }}>
                        <h3 style={{ fontWeight: 800, marginBottom: 8 }}>Still have a question?</h3>
                        <p style={{ opacity: 0.85, marginBottom: 20, fontSize: 14 }}>Our support team is available 7 days a week, 9 AM – 9 PM.</p>
                        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="tel:8008615049" style={{ background: '#fff', color: '#024dbe', padding: '10px 24px', borderRadius: 4, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>Call 8008615049</a>
                            <Link href="/contact-us/" style={{ background: 'transparent', color: '#fff', padding: '10px 24px', borderRadius: 4, fontWeight: 700, fontSize: 14, border: '1px solid rgba(255,255,255,0.4)', textDecoration: 'none' }}>Send a Message</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
