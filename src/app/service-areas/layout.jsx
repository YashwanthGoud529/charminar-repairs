import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'Appliance Repair Service Areas Hyderabad | 100+ Locations | Charminar Repairs',
    description: 'Charminar Repairs serves 100+ localities in Hyderabad including Gachibowli, Banjara Hills, Secunderabad & more. Get same-day doorstep repair with 2-hour arrival. Book now!',
    canonicalPath: '/service-areas',
    keywords: 'appliance repair Hyderabad areas, repair service Gachibowli, repair service Banjara Hills, appliance repair Secunderabad, appliance repair Kondapur, home repair Hyderabad localities, doorstep repair near me',
});

export default function ServiceAreasLayout({ children }) {
    return <>{children}</>;
}
