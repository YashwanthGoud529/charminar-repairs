import React from 'react';
import PageHero from '@/components/shared/PageHero';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

const GOOGLE_REVIEW_URL = 'https://www.google.com/search?q=charminar+appliance+repairs,+hyderabad#mpd=~13980744700618605071/customers/reviewsa';

export const metadata = constructMetadata({
    title: 'Customer Reviews & Ratings | Charminar Repairs Hyderabad',
    description: 'Read verified customer reviews for Charminar Repairs. 10,000+ happy customers across Hyderabad rate us 4.8/5 for appliance repair, cleaning, and home services.',
    canonicalPath: '/reviews',
});

const stats = [
    { label: 'Happy Customers', value: '10,000+', icon: '😊', color: '#673ab7' },
    { label: 'Average Rating', value: '4.8 / 5', icon: '⭐', color: '#f59e0b' },
    { label: 'Jobs Completed', value: '35,000+', icon: '✅', color: '#10b981' },
    { label: 'Repeat Customers', value: '78%', icon: '🔁', color: '#0ea5e9' },
];

const reviews = [
    { name: 'Rajesh Kumar', area: 'Banjara Hills', rating: 5, service: 'AC Repair', date: 'May 2025', text: 'Excellent service! The technician arrived within 2 hours, diagnosed the issue instantly, and fixed my Daikin AC at a very reasonable price. Will definitely use again.' },
    { name: 'Priya Sharma', area: 'Kondapur', rating: 5, service: 'Washing Machine Repair', date: 'May 2025', text: 'Very professional. They called before arriving, wore shoe covers inside the house, and fixed the drum motor in under an hour. 30-day warranty is a bonus!' },
    { name: 'Mohammed Imran', area: 'Madhapur', rating: 5, service: 'Refrigerator Repair', date: 'April 2025', text: 'My LG fridge was not cooling. They replaced the compressor with a genuine part and gave 90 days warranty on it. Transparent pricing, no surprises.' },
    { name: 'Sunita Reddy', area: 'Gachibowli', rating: 5, service: 'Deep Home Cleaning', date: 'April 2025', text: 'Wow! My 3BHK looks brand new. The team was punctual, brought all their own equipment, and worked nonstop for 6 hours. Highly recommended!' },
    { name: 'Amit Verma', area: 'Jubilee Hills', rating: 5, service: 'TV Repair', date: 'March 2025', text: 'Samsung LED TV display issue resolved same day. The engineer was knowledgeable and explained the problem clearly. Reasonable charge.' },
    { name: 'Kavitha Rao', area: 'Kukatpally', rating: 4, service: 'Microwave Repair', date: 'March 2025', text: 'Good service overall. Took slightly longer than expected due to part availability, but they communicated well and finished the job next day.' },
    { name: 'Suresh Naidu', area: 'Miyapur', rating: 5, service: 'Laptop Repair', date: 'March 2025', text: 'My Dell laptop charging port was broken. Fixed in 45 minutes at my home. Much better than going to a service center!' },
    { name: 'Farzana Begum', area: 'Mehdipatnam', rating: 5, service: 'Pest Control', date: 'February 2025', text: 'Cockroach-free for 3 months now. The chemicals used were safe for kids and pets as they said. Professional team with proper equipment.' },
    { name: 'Ravi Teja', area: 'Ameerpet', rating: 5, service: 'Water Purifier Service', date: 'February 2025', text: 'Annual AMC was totally worth it. They service my Kent RO every 6 months and respond instantly for any issue in between.' },
];

const StarRating = ({ rating }) => (
    <div style={{ display: 'flex', gap: 2 }}>
        {[1,2,3,4,5].map(s => (
            <span key={s} style={{ color: s <= rating ? '#f59e0b' : '#e2e8f0', fontSize: 14 }}>★</span>
        ))}
    </div>
);

export default function ReviewsPage() {
    return (
        <main style={{ background: '#f8f9fc' }}>
            <PageHero
                title="Customer Reviews & Ratings"
                subtitle="Real feedback from 10,000+ verified customers across Hyderabad. See why we're the city's most trusted home services brand."
                breadcrumb="Reviews"
            />

            {/* Stats */}
            <section style={{ background: '#fff', borderBottom: '1px solid #e8eaf0', padding: '32px 0' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                        {stats.map((s, i) => (
                            <div key={i} style={{ textAlign: 'center', padding: '16px 0' }}>
                                <div style={{ fontSize: 28, marginBottom: 4 }}>{s.icon}</div>
                                <div style={{ fontWeight: 900, fontSize: 26, color: s.color, marginBottom: 2 }}>{s.value}</div>
                                <div style={{ fontSize: 13, color: '#64748b', fontWeight: 600 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section style={{ padding: '60px 0 80px' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <h2 style={{ fontWeight: 800, fontSize: 22, color: '#0c1228', marginBottom: 32, textAlign: 'center' }}>What Our Customers Say</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
                        {reviews.map((r, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                                        <div style={{ width: 40, height: 40, background: '#673ab7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 16, flexShrink: 0 }}>
                                            {r.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div style={{ fontWeight: 700, fontSize: 14, color: '#0c1228' }}>{r.name}</div>
                                            <div style={{ fontSize: 12, color: '#94a3b8' }}>{r.area}</div>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: 10, background: '#f3e8ff', color: '#673ab7', padding: '2px 8px', borderRadius: 4, fontWeight: 700, whiteSpace: 'nowrap' }}>{r.service}</span>
                                </div>
                                <StarRating rating={r.rating} />
                                <p style={{ color: '#475569', fontSize: 13, lineHeight: 1.65, margin: 0 }}>"{r.text}"</p>
                                <div style={{ fontSize: 11, color: '#94a3b8', fontWeight: 600, marginTop: 'auto' }}>{r.date} · Verified Customer</div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 48 }}>
                        <p style={{ color: '#64748b', fontSize: 13, marginBottom: 16 }}>Want to share your experience?</p>
                        <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer" style={{ background: '#673ab7', color: '#fff', padding: '12px 28px', borderRadius: 4, fontWeight: 700, fontSize: 14, display: 'inline-block' }}>Leave a Google Review ⭐</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
