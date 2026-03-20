import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'Contact Charminar Repairs | Book Appliance Repair in Hyderabad',
    description: 'Book a home appliance repair with Charminar Repairs in Hyderabad. Call 8008615049 or fill the form for same-day service for AC, fridge, washing machine & more.',
    canonicalPath: '/contact-us',
    keywords: 'contact Charminar Repairs, book appliance repair Hyderabad, appliance repair booking, call appliance repair Hyderabad, doorstep repair service Hyderabad, schedule technician visit',
});

export default function ContactUsLayout({ children }) {
    return <>{children}</>;
}
