import React from 'react';
import ServiceAreasContent from '@/components/service-areas/ServiceAreasContent';
import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'Appliance Repair Service Areas in Hyderabad | Charminar Repairs',
    description: 'Serving all major localities in Hyderabad including Gachibowli, Madhapur, Banjara Hills, and Secunderabad. 2-hour arrival guarantee across 100+ locations.',
    canonicalPath: '/service-areas',
});

const ServiceAreasPage = () => {
    const locations = [
        { name: "Gachibowli", zip: "500032", type: "Tech Hub" },
        { name: "Madhapur", zip: "500081", type: "IT District" },
        { name: "Kondapur", zip: "500084", type: "Residential" },
        { name: "Jubilee Hills", zip: "500033", type: "Premium" },
        { name: "Banjara Hills", zip: "500034", type: "Premium" },
        { name: "KPHB Colony", zip: "500072", type: "Commercial" },
        { name: "Miyapur", zip: "500049", type: "Major Hub" },
        { name: "Manikonda", zip: "500089", type: "Emerging" },
        { name: "Himayatnagar", zip: "500029", type: "Central" },
        { name: "Begumpet", zip: "500016", type: "Business" },
        { name: "Secunderabad", zip: "500003", type: "Twin Hub" },
        { name: "Uppal", zip: "500039", type: "East Zone" },
        { name: "Nagole", zip: "500068", type: "Secondary" },
        { name: "LB Nagar", zip: "500074", type: "Growth Corridor" },
        { name: "Dilsukhnagar", zip: "500060", type: "Student Hub" },
        { name: "Mehdipatnam", zip: "500028", type: "Central" },
        { name: "Kukatpally", zip: "500072", type: "Heavy Commercial" },
        { name: "A.S. Rao Nagar", zip: "500062", type: "Suburban" },
        { name: "Tarnaka", zip: "500007", type: "University" },
        { name: "Habsiguda", zip: "500007", type: "Residential" },
        { name: "Ameerpet", zip: "500016", type: "Commercial" },
        { name: "Abids", zip: "500001", type: "Heritage Business" },
        { name: "Somajiguda", zip: "500082", type: "Business District" },
        { name: "Tolichowki", zip: "500008", type: "Diverse Zone" },
    ];

    return <ServiceAreasContent locations={locations} />;
};

export default ServiceAreasPage;
