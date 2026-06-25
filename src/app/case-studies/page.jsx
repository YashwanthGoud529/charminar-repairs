import React from 'react';
import PageHero from '@/components/shared/PageHero';
import { constructMetadata } from '@/components/seo/constructMetadata';
import Link from 'next/link';

export const metadata = constructMetadata({
    title: 'Case Studies | MeeHelper – Before & After Repair Stories',
    description: 'Read real repair case studies from MeeHelper. See how we fixed complex appliance issues across Hyderabad homes.',
    canonicalPath: '/case-studies',
});

const cases = [
    {
        id: 1, tag: 'AC Repair', color: '#0ea5e9', area: 'Kondapur', appliance: 'Voltas 1.5T Split AC',
        issue: 'AC running but not cooling. Room temperature not dropping below 30°C even after 2 hours.',
        diagnosis: 'Gas leakage from the indoor unit coil. Refrigerant (R-32) had dropped to 30% of required pressure.',
        solution: 'Identified and sealed the micro-crack in the evaporator coil. Refilled gas to optimal pressure (900 PSI). Cleaned both indoor and outdoor units.',
        time: '3 Hours', cost: '₹2,800', outcome: 'AC cooling to 18°C within 15 minutes. Customer reported zero issues over 6-month follow-up.',
    },
    {
        id: 2, tag: 'Washing Machine', color: '#024dbe', area: 'Madhapur', appliance: 'Samsung 7kg Front Load',
        issue: 'Machine stopping mid-cycle and displaying error code E4. Clothes coming out soaking wet.',
        diagnosis: 'Blocked drain pump filter combined with a faulty door latch sensor triggering a safety stop.',
        solution: 'Deep-cleaned the blocked filter (removed a large sock + debris). Replaced door latch mechanism with OEM Samsung part.',
        time: '90 Minutes', cost: '₹1,650', outcome: 'Full wash cycles completing successfully. 90-day warranty on the door latch. Customer enrolled in AMC plan.',
    },
    {
        id: 3, tag: 'Refrigerator', color: '#10b981', area: 'Banjara Hills', appliance: 'LG 260L Double Door',
        issue: 'Fridge not cooling at all. Freezer section frosted up completely. Humming noise from the rear.',
        diagnosis: 'Defrost thermostat failure caused the evaporator to freeze over entirely, blocking all airflow.',
        solution: 'Manual defrost of evaporator. Replaced defrost thermostat and defrost heater with LG-compatible parts. Checked compressor health (normal).',
        time: '2 Hours', cost: '₹3,200', outcome: 'Fridge back to -18°C in freezer, 4°C in fridge section. No recurrence after 4 months.',
    },
    {
        id: 4, tag: 'TV Repair', color: '#f59e0b', area: 'Jubilee Hills', appliance: 'Sony 55-inch 4K LED',
        issue: 'TV powering on but screen completely black. Sound working fine. Remote backlight visible.',
        diagnosis: 'Backlight LED strip failure. 3 out of 8 backlight strips had failed due to power surge during monsoon.',
        solution: 'Replaced all 8 backlight LED strips with premium compatible replacements. Installed surge protector on recommendation.',
        time: '2.5 Hours', cost: '₹4,500', outcome: 'Perfect picture quality restored. Customer saved ₹45,000 compared to buying a new TV.',
    },
    {
        id: 5, tag: 'Deep Cleaning', color: '#8b5cf6', area: 'Gachibowli', appliance: '3BHK Apartment (1800 sq ft)',
        issue: 'Tenant move-out cleaning needed. 3 years of built-up grease in kitchen, bathroom scaling, and general deep clean.',
        diagnosis: 'Kitchen exhaust, chimney, stove grids — heavy grease deposits. Bathrooms — hard water scale + mold. Floors — embedded dirt.',
        solution: '6-member cleaning team with steam cleaners, degreasers, descalers, and HEPA vacuum cleaners. 8-hour intensive cleaning session.',
        time: '8 Hours', cost: '₹5,999', outcome: 'Apartment passed landlord inspection. Security deposit fully returned. Customer booked quarterly maintenance plan.',
    },
    {
        id: 6, tag: 'Laptop Repair', color: '#ef4444', area: 'Kukatpally', appliance: 'Dell Inspiron 15',
        issue: 'Laptop not turning on at all. No power LED, no fan spin. Charging light blinks for 3 seconds then stops.',
        diagnosis: 'DC jack completely broken internally. Power not reaching motherboard. BIOS battery also dead.',
        solution: 'Replaced DC power jack via precision soldering. Replaced CMOS battery. Full system diagnostic and driver update.',
        time: '45 Minutes', cost: '₹1,200', outcome: 'Laptop operating normally. Customer avoided ₹12,000 motherboard replacement quote from another vendor.',
    },
];

export default function CaseStudiesPage() {
    return (
        <main style={{ background: '#f8f9fc' }}>
            <PageHero title="Repair Case Studies" subtitle="Real problems. Real fixes. See how our engineers solve complex appliance issues across Hyderabad homes." breadcrumb="Case Studies" />

            <section style={{ padding: '60px 0 80px' }}>
                <div className="container" style={{ maxWidth: 1100 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                        {cases.map((c, i) => (
                            <div key={i} style={{ background: '#fff', border: '1px solid #e8eaf0', borderRadius: 4, overflow: 'hidden', borderLeft: `4px solid ${c.color}` }}>
                                <div style={{ padding: '20px 24px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                                    <span style={{ background: c.color + '15', color: c.color, fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 4 }}>{c.tag}</span>
                                    <span style={{ fontSize: 13, fontWeight: 700, color: '#0c1228' }}>{c.appliance}</span>
                                    <span style={{ fontSize: 12, color: '#94a3b8', marginLeft: 'auto' }}>📍 {c.area}</span>
                                </div>
                                <div style={{ padding: '20px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
                                    {[
                                        { label: '🔴 Problem', text: c.issue },
                                        { label: '🔍 Diagnosis', text: c.diagnosis },
                                        { label: '🔧 Solution', text: c.solution },
                                    ].map((block, bi) => (
                                        <div key={bi}>
                                            <div style={{ fontWeight: 800, fontSize: 12, color: '#0c1228', marginBottom: 6 }}>{block.label}</div>
                                            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.65, margin: 0 }}>{block.text}</p>
                                        </div>
                                    ))}
                                </div>
                                <div style={{ padding: '12px 24px 16px', background: '#f8f9fc', display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                                    <div style={{ fontSize: 12, color: '#475569' }}><strong style={{ color: '#0c1228' }}>⏱ Time:</strong> {c.time}</div>
                                    <div style={{ fontSize: 12, color: '#475569' }}><strong style={{ color: '#0c1228' }}>💰 Cost:</strong> {c.cost}</div>
                                    <div style={{ fontSize: 12, color: '#10b981', fontWeight: 600 }}>✅ {c.outcome}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 48 }}>
                        <Link href="/contact-us/" style={{ background: '#024dbe', color: '#fff', padding: '13px 32px', borderRadius: 4, fontWeight: 700, fontSize: 15, display: 'inline-block' }}>Book Your Repair Today</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
