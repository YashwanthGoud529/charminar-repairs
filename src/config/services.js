export const SERVICE_CANONICAL_MAP = {
    'Professional Appliance Repair': 'appliance-repair-services',
    'AC Repairing': 'ac-repairing',
    'Refrigerator Repairing': 'refrigerator-repairing',
    'Washing Machine Repairing': 'washing-machine-repairing',
    'TV Repairing': 'tv-repairing',
    'Microwave Repairing': 'microwave-repairing',
    'Geyser Repairing': 'geyser-repairing',
    'Chimney Repairing': 'chimney-repairing',
    'Water Purifier Repairing': 'water-purifier-servicing',
    'Laptop Repairing': 'laptop-repairing',
    'Air Cooler Repairing': 'air-cooler-servicing',
    'Kitchen Sink Repairing': 'plumbing-work',
    'Decor Installation': 'decor-installation',
    'Men Haircut': 'men-haircut',
    'Pedicure Service': 'pedicure-service',
    'Manicure Service': 'manicure-service',
    'Massage for Men': 'massage-for-men',
    'Haircut for Men': 'haircut-for-men',
    'Washing Machine Checkup': 'washing-machine-checkup',
    'AC Installation': 'ac-installation',
    'Mosquitoes Control': 'mosquito-control',
    'Termite Control': 'termite-control',
    'Woodborer Control': 'woodborer-control',
    'Commercial Pest Control': 'commercial-pest-control',
    'Bed Bugs Control': 'bed-bugs-control',
    'Cockroach Control': 'cockroach-control',
    'Invisible Grille': 'invisible-grille',
    'Mosquito Mesh': 'mosquito-mesh',
    'Honeycomb Blinds': 'honeycomb-blinds',
    'Zip Screen': 'zip-screen',
    'Modern Pergola': 'modern-pergola',
    'Safety Mesh': 'safety-mesh',
    'Bird Netting': 'bird-netting',
    'Plumbing Work': 'plumbing-work',
    'Electrical work': 'electrical-work',
    'Carpenter work': 'carpenter-work',

    // --- Category Hubs for Local SEO ---
    'Pest Control Services': 'pest-control-services',
    'Home Repair Services': 'home-repair-services',
    'Most Booked Services': 'most-booked-services',
    'Appliance Repair Services': 'appliance-repair-services',
    'Explore Our Services': 'all-services-hyderabad',
};

export const CANONICAL_SLUGS = Object.values(SERVICE_CANONICAL_MAP);

export const HOME_PAGE_SLUGS = [
    'ac-repairing',
    'refrigerator-repairing',
    'washing-machine-repairing',
    'tv-repairing',
    'microwave-repairing',
];

export const getServiceSlug = (serviceName) => {
    return SERVICE_CANONICAL_MAP[serviceName] || null;
};
