import React from 'react';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'Sitemap | MeeHelper – All Pages',
    description: 'Complete sitemap of MeeHelper website — all services, locations, policies, and utility pages in one place.',
    canonicalPath: '/sitemap',
});

const sections = [
    {
        title: 'Main Pages', icon: '🏠', links: [
            { label: 'Home', href: '/' }, { label: 'About Us', href: '/about-us/' },
            { label: 'Services', href: '/services/' }, { label: 'Pricing', href: '/pricing/' },
            { label: 'Blog & Tips', href: '/blog/' }, { label: 'Careers', href: '/careers/' },
            { label: 'Contact Us', href: '/contact-us/' }, { label: 'Partner With Us', href: '/partner/' },
        ]
    },
    {
        title: 'Appliance Repairs', icon: '🔧', links: [
            { label: 'AC Repair', href: '/ac-repairing/' }, { label: 'Washing Machine Repair', href: '/washing-machine-repairing/' },
            { label: 'Refrigerator Repair', href: '/refrigerator-repairing/' }, { label: 'Microwave Repair', href: '/microwave-repairing/' },
            { label: 'TV Repair', href: '/tv-repairing/' }, { label: 'Laptop Repair', href: '/laptop-repairing/' },
            { label: 'Geyser Repair', href: '/geyser-repairing/' }, { label: 'Water Purifier Repair', href: '/water-purifier-repairing/' },
            { label: 'Gas Stove Repair', href: '/gas-stove-repairing/' }, { label: 'Kitchen Chimney Repair', href: '/chimney-repairing/' },
        ]
    },
    {
        title: 'Home Services', icon: '🏡', links: [
            { label: 'Deep Home Cleaning', href: '/deep-home-cleaning/' },
            { label: 'Empty Home Cleaning', href: '/empty-home-cleaning/' },
            { label: 'Pest Control', href: '/pest-control/' },
            { label: 'Packers & Movers', href: '/packers-and-movers/' },
            { label: 'MeeHelper Wheels (Car Detailing)', href: '/meehelper-wheels/' },
        ]
    },
    {
        title: 'Trust & Quality', icon: '⭐', links: [
            { label: 'Reviews & Ratings', href: '/reviews/' }, { label: 'Our Technicians', href: '/our-team/' },
            { label: 'Warranty & Guarantee', href: '/warranty/' }, { label: 'Certifications', href: '/certifications/' },
            { label: 'Case Studies', href: '/case-studies/' }, { label: 'FAQ', href: '/faq/' },
        ]
    },
    {
        title: 'Business Solutions', icon: '💼', links: [
            { label: 'Annual Maintenance Contract (AMC)', href: '/amc/' },
            { label: 'Corporate Services', href: '/corporate/' },
            { label: 'Emergency Repairs', href: '/emergency-repairs/' },
            { label: 'How It Works', href: '/how-it-works/' },
            { label: 'Offers & Coupons', href: '/offers/' },
            { label: 'Compare Plans', href: '/compare-plans/' },
            { label: 'Join as Technician', href: '/join-as-technician/' },
        ]
    },
    {
        title: 'Service Areas', icon: '📍', links: [
            { label: 'All Service Areas', href: '/service-areas/' },
            { label: 'AC Repair in Gachibowli', href: '/ac-repairing-in-gachibowli/' },
            { label: 'Washing Machine in Madhapur', href: '/washing-machine-repairing-in-madhapur/' },
            { label: 'Fridge Repair in Banjara Hills', href: '/refrigerator-repairing-in-banjara-hills/' },
            { label: 'TV Repair in Jubilee Hills', href: '/tv-repairing-in-jubilee-hills/' },
            { label: 'AC Repair in Kukatpally', href: '/ac-repairing-in-kukatpally/' },
            { label: 'Washing Machine in Kondapur', href: '/washing-machine-repairing-in-kondapur/' },
            { label: 'Fridge Repair in Miyapur', href: '/refrigerator-repairing-in-miyapur/' },
        ]
    },
    {
        title: 'Policies & Legal', icon: '📋', links: [
            { label: 'Privacy Policy', href: '/privacy-policy/' },
            { label: 'Terms of Service', href: '/terms-of-service/' },
            { label: 'Refund & Cancellation Policy', href: '/refund-policy/' },
        ]
    },
];

export default function SitemapPage() {
    return (
        <main style={{ background: '#f8f9fc', minHeight: '100vh' }}>
            {/* Hero */}
            <div style={{ background: '#0c1228', padding: '60px 0 48px' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 12 }}>
                        <Link href="/" style={{ color: 'rgba(255,255,255,0.5)' }}>Home</Link> / Sitemap
                    </div>
                    <h1 style={{ fontWeight: 900, fontSize: 32, color: '#fff', marginBottom: 8 }}>Sitemap</h1>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 15 }}>All pages of MeeHelper in one place.</p>
                </div>
            </div>

            <style>{`
                .sitemap-link {
                    display: block;
                    padding: 7px 20px;
                    font-size: 13px;
                    color: #374151;
                    transition: all 0.15s;
                    text-decoration: none;
                }
                .sitemap-link:hover {
                    background: #f3e8ff;
                    color: #024dbe;
                }
            `}</style>

            <section style={{ padding: '60px 0 80px' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
                        {sections.map((section, si) => (
                            <div key={si} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, overflow: 'hidden' }}>
                                <div style={{ background: '#0c1228', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: 8 }}>
                                    <span style={{ fontSize: 16 }}>{section.icon}</span>
                                    <span style={{ fontWeight: 800, fontSize: 14, color: '#fff' }}>{section.title}</span>
                                </div>
                                <ul style={{ margin: 0, padding: '12px 0', listStyle: 'none' }}>
                                    {section.links.map((link, li) => (
                                        <li key={li}>
                                            <Link href={link.href} className="sitemap-link">
                                                → {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
