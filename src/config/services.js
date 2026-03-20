export const SERVICE_CANONICAL_MAP = {
    'Refrigerator Repair': 'refrigerator-repairing',
    'Washing Machine Repair': 'washing-machine-repairing',
    'Air Conditioner Repair': 'ac-repairing',
    'Television Repair': 'television-repairing',
    'Microwave Oven Repair': 'microwave-repairing',
    'Water Purifier (RO) Service': 'water-purifier-servicing',
    'Geyser & Water Heater Repair': 'geyser-repairing',
    'Gas Stove & Hob Repair': 'gas-stove-repairing',
    'Kitchen Chimney Service': 'kitchen-chimney-servicing',
    'Dishwasher Repair': 'dishwasher-repairing',
    'Laptop & Desktop Repair': 'laptop-repairing',
    'Professional Appliance Repair': 'appliance-repairing',
    'Insta Help': 'insta-help',
    'Foam-jet AC Service': 'foam-jet-ac-service',
    'Intense Bathroom Cleaning': 'bathroom-cleaning',
    'Haircut for Men': 'men-haircut',
    'British Rose Pedicure': 'pedicure-service',
    'Decor Installation': 'decor-installation',
    'Automatic Machine Check-up': 'washing-machine-checkup',
    'Mosquitoes Control': 'mosquito-control',
    'Termite Control': 'termite-control',
    'Woodborer Control': 'woodborer-control',
    'Commercial Pest Control': 'commercial-pest-control',
    'Bed Bugs Control': 'bed-bugs-control',
    'Cockroach Control': 'cockroach-control',
    'Coffee Machine Repair': 'coffee-machine-repairing',
    'Plumbing Work': 'plumbing-services',
    'Electrical work': 'electrical-services',
    'Carpenter work': 'carpenter-services',
    'Bird Netting': 'bird-netting',
};

export const CANONICAL_SLUGS = Object.values(SERVICE_CANONICAL_MAP);

export const HOME_PAGE_SLUGS = [
    'refrigerator-repairing', 'washing-machine-repairing', 'ac-repairing', 'television-repairing',
    'microwave-repairing', 'water-purifier-servicing', 'geyser-repairing', 'gas-stove-repairing',
    'kitchen-chimney-servicing', 'dishwasher-repairing', 'laptop-repairing',
    'appliance-repairing', 'insta-help', 'foam-jet-ac-service', 'bathroom-cleaning', 'men-haircut',
    'pedicure-service', 'decor-installation', 'washing-machine-checkup',
    'mosquito-control', 'termite-control', 'woodborer-control', 'commercial-pest-control',
    'bed-bugs-control', 'cockroach-control',
    'plumbing-services', 'electrical-services', 'carpenter-services', 'bird-netting'
];

export const getServiceSlug = (name) => {
    return SERVICE_CANONICAL_MAP[name] || name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
};
