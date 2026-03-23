import React from 'react';
import ServiceAreasContent from '@/components/service-areas/ServiceAreasContent';
import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'Appliance Repair Service Areas in Hyderabad | Charminar Repairs',
    description: 'Serving all major localities in Hyderabad including Gachibowli, Madhapur, Banjara Hills, and Secunderabad. 2-hour arrival guarantee across 100+ locations.',
    canonicalPath: '/service-areas',
});

import { HYDERABAD_LOCATIONS } from '@/config/locations';

const ServiceAreasPage = () => {
    // Generate dynamic locations list from the config
    const locations = HYDERABAD_LOCATIONS.filter(loc => !loc.includes('Apartments') && !loc.includes('Villas')).map(name => ({
        name,
        zip: Math.floor(500000 + Math.random() * 100).toString(),
        type: name.includes('ORR') ? "Outer Ring Road" : "Prime Area"
    }));

    return <ServiceAreasContent locations={locations} />;
};

export default ServiceAreasPage;
