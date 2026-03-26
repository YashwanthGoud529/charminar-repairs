export const SERVICE_CANONICAL_MAP = {
    // --- Major Appliances ---
    'Air Conditioner Repair': 'ac-repairing',
    'Refrigerator Repair': 'refrigerator-repairing',
    'Washing Machine Repair': 'washing-machine-repairing',
    'Television Repair': 'tv-repairing',
    'Microwave Oven Repair': 'microwave-repairing',
    'Water Purifier (RO) Service': 'water-purifier-servicing',
    'Geyser & Water Heater Repair': 'geyser-repairing',
    'Kitchen Chimney Service': 'chimney-repairing',
    'Gas Stove & Hob Repair': 'gas-stove-repairing',
    'Dishwasher Repair': 'dishwasher-repairing',
    'Coffee Machine Repair': 'coffee-machine-repairing',
    'Vacuum Cleaner Repair': 'vacuum-cleaner-repairing',

    // --- Special Names used in UI components ---
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

    // --- Most Booked Section Mapping ---
    'Insta Help': 'insta-help',
    'Foam-jet AC Service': 'foam-jet-ac-service',
    'Intense Bathroom Cleaning': 'bathroom-cleaning',
    'Intense cleaning (2 bathrooms)': 'bathroom-cleaning',
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
    // Exact match first
    if (SERVICE_CANONICAL_MAP[serviceName]) return SERVICE_CANONICAL_MAP[serviceName];

    // Check if it starts with any brand and remove it
    const brands = ['Samsung', 'LG', 'Whirlpool', 'IFB', 'Bosch', 'Haier', 'Godrej', 'Panasonic', 'Videocon', 'Sony', 'Daikin', 'Voltas', 'Blue Star', 'Hitachi', 'Carrier', 'O General', 'Lloyd', 'Mi', 'Xiaomi', 'TCL', 'OnePlus', 'Vu', 'Philips', 'Hisense', 'Toshiba', 'BPL', 'Bajaj', 'Morphy Richards', 'Dyson', 'Kent', 'Aquaguard', 'Eureka Forbes', 'Prestige', 'Pigeon', 'Usha', 'Singer', 'Singer', 'V-Guard', 'Havells', 'Crompton', 'Kirloskar', 'Texmo', 'Grundfos'];
    
    let cleanName = serviceName;
    for (const b of brands) {
        if (serviceName.startsWith(b + ' ')) {
            cleanName = serviceName.slice(b.length + 1);
            break;
        }
    }

    return SERVICE_CANONICAL_MAP[cleanName] || SERVICE_CANONICAL_MAP['Professional Appliance Repair'] || 'all-services-hyderabad';
};
