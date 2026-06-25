import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'About MeeHelper | 12+ Years of Appliance Repair in Hyderabad',
    description: 'Learn about MeeHelper – Hyderabad\'s most trusted appliance repair company since 2013. Background-verified technicians, 180-day warranty, genuine OEM parts, and same-day service.',
    canonicalPath: '/about-us',
    keywords: 'about MeeHelper, appliance repair company Hyderabad, home appliance technicians Hyderabad, trusted repair service Hyderabad, certified appliance repair, 12 years experience Hyderabad',
});

export default function AboutUsLayout({ children }) {
    return <>{children}</>;
}
