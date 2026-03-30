import { SERVICE_DATA_MAP, DEFAULT_SERVICE } from '@/config/serviceData';
import { BRAND } from '@/config/branding';
import './AboutService.css';

const COMPANY = {
    name: BRAND.name,
    phone: BRAND.phone,
    phoneDisplay: BRAND.phoneDisplay,
    warranty: '180',
    priceStart: '100',
    location: BRAND.address,
};

// --- SVG Icons Components ---
const PhoneIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
);

const ShieldIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
);

const BoltIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.47 11 21 11 21z"/></svg>
);

const TagIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7c-.83 0-1.5-.67-1.5-1.5S4.67 4 5.5 4s1.5.67 1.5 1.5S6.33 7 5.5 7z"/></svg>
);

const UserShieldIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" opacity="0.3"/></svg>
);

const CogIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
);

const RupeeIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M13.41 7C12.98 6.13 12.09 5.5 11 5.5h-5V4h10V2.5H4V4h1.5v12.5H4V18h3.33l1.34 4.5h2.66l-1.34-4.5H11c2.21 0 4-1.79 4-4v-1.5h1.5V11H15c-.41 0-.81-.04-1.21-.12L13.41 7zM11 11H7V7h4c1.1 0 2 .9 2 2s-.9 2-2 2z"/></svg>
);

const SearchIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
);

const ToolsIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
);

const CheckCircleIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
);

const UsersIcon = () => (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
);

const ClockIcon = () => (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
);

const StarIcon = () => (
    <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
);

const MapMarkerIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
);

const MedalIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
);

const CheckIcon = () => (
    <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
);

const WrenchIcon = () => (
    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>
);

// --- Icon Mapper for Dynamic Data ---
const IconMapper = ({ iconName, className }) => {
    if (!iconName) return <WrenchIcon />;
    
    const size = "18";
    const color = "currentColor";
    const props = { width: size, height: size, fill: color, className };

    if (iconName.includes('thermometer')) return <svg {...props} viewBox="0 0 24 24"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>;
    if (iconName.includes('gauge') || iconName.includes('tachometer')) return <svg {...props} viewBox="0 0 24 24"><path d="M20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 3.82 2.66 7.02 6.23 7.8L9 22h6l-1.23-4.2c3.57-.78 6.23-3.98 6.23-7.8zM12 4c3.31 0 6 2.69 6 6 0 2.5-1.56 4.67-3.81 5.56l.81 2.44C17.7 17.07 20 13.84 20 10c0-4.41-3.59-8-8-8zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>;
    if (iconName.includes('wind') || iconName.includes('fan')) return <svg {...props} viewBox="0 0 24 24"><path d="M12 12c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1zm5.66-2.34l.7-.7a1 1 0 0 0 0-1.42l-4.24-4.24a1 1 0 0 0-1.42 0l-.7.7a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0zM7.05 15.24l.71.71c.39.39 1.02.39 1.41 0l4.24-4.24a1 1 0 0 0 0-1.42l-.71-.71a1 1 0 0 0-1.41 0l-4.24 4.24a1 1 0 0 0 0 1.42zM12 13c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-6c0-.55-.45-1-1-1zM5.66 14.34l-.7.7a1 1 0 0 0 0 1.42l4.24 4.24c.39.39 1.02.39 1.42 0l.7-.7a1 1 0 0 0 0-1.42l-4.24-4.24a1 1 0 0 0-1.42 0zM21.12 19.7l-4.24-4.24a1 1 0 0 0-1.42 0l-.7.7a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0l.7-.7a1 1 0 0 0 0-1.42z"/></svg>;
    if (iconName.includes('microchip') || iconName.includes('memory')) return <svg {...props} viewBox="0 0 24 24"><path d="M20 9V7c0-1.1-.9-2-2-2h-3V3h-2v2h-2V3H9v2H6c-1.1 0-2 .9-2 2v2H2v2h2v2H2v2h2v2c0 1.1.9 2 2 2h3v2h2v-2h2v2h2v-2h3c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2zm-4 6H8V8h8v7z"/></svg>;
    if (iconName.includes('droplet') || iconName.includes('water')) return <svg {...props} viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0L12 2.69z"/></svg>;
    if (iconName.includes('snowflake') || iconName.includes('icicles')) return <svg {...props} viewBox="0 0 24 24"><path d="M22 11h-4.17l3.24-3.24-1.41-1.41L13 13.01V7h-2v6.01L4.34 6.35 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.41L11 10.99V17h2v-6.01l6.66 6.66 1.41-1.41L17.83 13H22v-2z"/></svg>;
    if (iconName.includes('sun') || iconName.includes('temperature-up')) return <svg {...props} viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.42 0s.39-1.02 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.06 1.06c.39.39 1.03.39 1.42 0a.996.996 0 0 0 0-1.41l-1.07-1.06zm1.06-10.96a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.42s1.02.39 1.41 0l1.06-1.07zM7.05 18.37a.996.996 0 0 0 0-1.41.996.996 0 0 0-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.42s1.02.39 1.41 0l1.06-1.07z"/></svg>;
    if (iconName.includes('clock') || iconName.includes('hourglass')) return <svg {...props} viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>;
    if (iconName.includes('check') || iconName.includes('ok')) return <svg {...props} viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>;
    if (iconName.includes('power') || iconName.includes('bolt')) return <svg {...props} viewBox="0 0 24 24"><path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.47 11 21 11 21z"/></svg>;
    if (iconName.includes('rotate') || iconName.includes('sync')) return <svg {...props} viewBox="0 0 24 24"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm-7.3 4.2L3.24 6.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8z"/></svg>;
    if (iconName.includes('tv') || iconName.includes('display')) return <svg {...props} viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="15" rx="2" ry="2"/><polyline points="8 21 12 17 16 21"/></svg>;
    if (iconName.includes('volume')) return <svg {...props} viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>;
    if (iconName.includes('signal') || iconName.includes('wifi')) return <svg {...props} viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.59 16.11a6 6 0 0 1 6.82 0M12 20h.01"/></svg>;

    return <WrenchIcon />;
};


const WHY_CHOOSE = [
    { icon: <UserShieldIcon />, title: 'Certified Technicians', desc: 'Background-verified experts trained for all major brands and models.' },
    { icon: <BoltIcon />, title: 'Same-Day Service', desc: 'Book by 5 PM and get doorstep service within 60 minutes of booking.' },
    { icon: <TagIcon />, title: 'Starts at ₹100', desc: 'Transparent flat-rate pricing with zero hidden charges — ever.' },
    { icon: <CogIcon />, title: 'Genuine Spare Parts', desc: 'OEM-approved components for long-lasting, reliable repairs.' },
    { icon: <ShieldIcon />, title: '180-Day Warranty', desc: 'Every repair is backed by our 180-day service warranty, free of charge.' },
    { icon: <RupeeIcon />, title: 'Pay After Repair', desc: 'No advance payment. Pay only when you\'re 100% satisfied with the repair.' },
];

const AboutService = ({ serviceName, locationLabel }) => {
    const loc = locationLabel || 'Hyderabad';
    const locFull = locationLabel ? `${locationLabel}, Hyderabad` : 'Hyderabad';

    const PROCESS_STEPS = [
        { step: '01', icon: <PhoneIcon />, title: 'Book a Service', desc: `Call ${COMPANY.phoneDisplay} or book online to schedule your ${serviceName.toLowerCase()} in ${loc}. Takes less than 2 minutes.` },
        { step: '02', icon: <SearchIcon />, title: 'Free Diagnosis', desc: `Our ${loc} technician arrives on time and diagnoses the exact issue with your appliance at no extra cost.` },
        { step: '03', icon: <ToolsIcon />, title: 'On-Spot Repair', desc: `Most ${serviceName.toLowerCase()} issues in ${loc} are fixed on the spot using 100% genuine spare parts.` },
        { step: '04', icon: <CheckCircleIcon />, title: 'Warranty & Support', desc: `Every ${serviceName.toLowerCase()} in ${loc} comes with a ${COMPANY.warranty}-day service warranty and free post-repair support.` },
    ];
    const sData = SERVICE_DATA_MAP[serviceName] || DEFAULT_SERVICE;
    const commonIssues = sData.faultResolution || [];
    const brandsText = sData.brands?.slice(0, 6).join(', ') || 'LG, Samsung, Whirlpool, Bosch, IFB';

    return (
        <div className="about-service-wrapper">

            {/* Intro SECTION */}
            <section className="as-intro-section">
                <div className="container custom-container px-lg-4">
                    <div className="as-intro-grid">
                        <div className="as-intro-text">
                            <div className="as-eyebrow">Expert Doorstep Service · {locFull}</div>
                            <h2 className="as-intro-title">
                                {serviceName} in {locFull}
                            </h2>
                            <div
                                className="as-intro-desc"
                                dangerouslySetInnerHTML={{ __html: sData.desc.replace(/Hyderabad/g, locFull) }}
                            />
                            <p className="as-intro-desc mt-3">
                                At <strong>Charminar Repairs</strong>, we offer expert <strong>{serviceName.toLowerCase()}</strong> to
                                restore your appliance's functionality quickly and affordably in <strong>{locFull}</strong>.
                                Whether it's a sudden breakdown, noisy operation, or error codes — our certified technicians
                                ensure your <strong>{brandsText}</strong> — and more — are repaired efficiently with same-day
                                doorstep service starting at just <strong>₹{COMPANY.priceStart}</strong>.
                            </p>
                            <div className="as-intro-cta-row">
                                <a href={`tel:${COMPANY.phone}`} className="as-cta-btn as-cta-primary">
                                    <span className="me-2"><PhoneIcon /></span> Call {COMPANY.phoneDisplay}
                                </a>
                                <div className="as-badge-row">
                                    <span className="as-trust-badge"><ShieldIcon /> {COMPANY.warranty}-Day Warranty</span>
                                    <span className="as-trust-badge"><TagIcon /> From ₹{COMPANY.priceStart}</span>
                                    <span className="as-trust-badge"><BoltIcon /> 60-Min Arrival</span>
                                </div>
                            </div>
                        </div>
                        <div className="as-intro-stats">
                            <div className="as-stat-card">
                                <div className="as-stat-icon"><UsersIcon /></div>
                                <div className="as-stat-num">10,000+</div>
                                <div className="as-stat-label">Happy Customers</div>
                            </div>
                            <div className="as-stat-card">
                                <div className="as-stat-icon"><ClockIcon /></div>
                                <div className="as-stat-num">60 Min</div>
                                <div className="as-stat-label">Arrival Time</div>
                            </div>
                            <div className="as-stat-card">
                                <div className="as-stat-icon"><ShieldIcon /></div>
                                <div className="as-stat-num">{COMPANY.warranty} Days</div>
                                <div className="as-stat-label">Service Warranty</div>
                            </div>
                            <div className="as-stat-card">
                                <div className="as-stat-icon"><StarIcon /></div>
                                <div className="as-stat-num">4.9 ★</div>
                                <div className="as-stat-label">Average Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="as-why-section">
                <div className="container custom-container px-lg-4">
                    <div className="as-section-head">
                        <div className="as-eyebrow">Our Promise</div>
                        <h2 className="as-section-title">Why Choose Our {serviceName} Experts in {loc}?</h2>
                        <p className="as-section-sub">
                            Thousands of residents in <strong>{locFull}</strong> trust {COMPANY.name} for their appliance repairs.
                            Here's what makes us different:
                        </p>
                    </div>
                    <div className="as-why-grid">
                        {WHY_CHOOSE.map((item, idx) => (
                            <div key={idx} className="as-why-card">
                                <div className="as-why-icon-wrap">
                                    {item.icon}
                                </div>
                                <h4 className="as-why-title">{item.title}</h4>
                                <p className="as-why-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Issues Section */}
            {commonIssues.length > 0 && (
                <section className="as-issues-section">
                    <div className="container custom-container px-lg-4">
                        <div className="as-section-head">
                            <div className="as-eyebrow">Fault Diagnosis</div>
                            <h2 className="as-section-title">Common {serviceName} Issues We Fix in {loc}</h2>
                            <p className="as-section-sub">Our certified technicians quickly diagnose and repair all of these common problems.</p>
                        </div>
                        <div className="as-issues-grid">
                            {commonIssues.map((issue, idx) => (
                                <div key={idx} className="as-issue-card">
                                    <div className="as-issue-icon">
                                        <IconMapper iconName={issue.i} />
                                    </div>
                                    <div className="as-issue-content">
                                        <h4 className="as-issue-title">{issue.t}</h4>
                                        {issue.d && <p className="as-issue-desc">{issue.d}</p>}
                                    </div>
                                    <div className="as-issue-badge">
                                        <CheckIcon /> Fixed
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Process Section */}
            <section className="as-process-section">
                <div className="container custom-container px-lg-4">
                    <div className="as-section-head">
                        <div className="as-eyebrow">How It Works</div>
                        <h2 className="as-section-title">Our {serviceName} Repair Process in {loc}</h2>
                        <p className="as-section-sub">Simple, fast, and transparent — from booking to warranty.</p>
                    </div>
                    <div className="as-process-track">
                        {PROCESS_STEPS.map((s, idx) => (
                            <div key={idx} className="as-process-step">
                                <div className="as-process-num">{s.step}</div>
                                <div className="as-process-icon-wrap">
                                    {s.icon}
                                </div>
                                <h4 className="as-process-title">{s.title}</h4>
                                <p className="as-process-desc">{s.desc}</p>
                                {idx < PROCESS_STEPS.length - 1 && <div className="as-process-connector" />}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specializations and Coverage */}
            <section className="as-spec-section">
                <div className="container custom-container px-lg-4">
                    <div className="as-spec-grid">
                        {/* Technical Specializations */}
                        {sData.specializations && (
                                <div className="as-spec-card">
                                    <h3 className="as-spec-title">
                                        <span className="me-2 text-primary"><MedalIcon /></span> Performance Audit
                                    </h3>
                                    <div className="as-spec-framework-list mt-4 d-flex flex-column gap-3">
                                        {sData.restorationFramework?.map((item, i) => (
                                            <div key={i} className="d-flex align-items-center gap-3 p-3 bg-white border rounded-3 shadow-sm hover-lift">
                                                <div className="as-framework-icon text-orange">
                                                    <IconMapper iconName={item.icon} />
                                                </div>
                                                <span className="fw-bold text-dark-blue small">{item.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                        )}

                        {/* Coverage Card */}
                        <div className="as-spec-card as-coverage-card">
                            <h3 className="as-spec-title">
                                <span className="me-2"><MapMarkerIcon /></span> Service Coverage in {loc}
                            </h3>
                            <p className="as-spec-desc">
                                Our hyper-local network allows us to reach any address in <strong>{locFull}</strong> within
                                60 minutes. Whether you're in a gated community, apartment complex, or independent villa,
                                {COMPANY.name} brings the service centre to your doorstep.
                            </p>
                            <div className="as-coverage-highlights">
                                <div className="as-cov-item"><CheckCircleIcon /> Residential & Commercial</div>
                                <div className="as-cov-item"><CheckCircleIcon /> 7 AM – 10 PM, 7 Days a Week</div>
                                <div className="as-cov-item"><CheckCircleIcon /> 50+ Hyderabad Districts</div>
                                <div className="as-cov-item"><CheckCircleIcon /> Weekend & Emergency Slots</div>
                            </div>
                            <a href={`tel:${COMPANY.phone}`} className="as-cta-btn as-cta-outline mt-4">
                                <span className="me-2"><PhoneIcon /></span> Book Now: {COMPANY.phoneDisplay}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutService;
