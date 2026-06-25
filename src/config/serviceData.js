import { toCDN } from './services';

export const SERVICE_DATA_MAP = {
    'Pest Control Services': {
        icon: '/assets/Images/home-repair-services/pest_control.jpeg',
        photo: '/assets/Images/home-repair-services/pest_control.jpeg',
        desc: 'Protect your home and family from disease-carrying pests. Our <strong>government-licensed pest control experts in Hyderabad</strong> provide specialized treatments for termites, cockroaches, rodents, and mosquitoes using eco-friendly, safe chemicals.',
        highlights: [
            '✦ Government Licensed & Certified Pest Experts',
            '✦ Odorless, Eco-Friendly & Kids-Safe Treatments',
            '✦ 90-Day Protection Guarantee on All Services',
            '✦ Advanced Gel & Herbal Injection Technology',
            '✦ Termite Construction & Post-Construction Fix',
            '✦ Cockroach, Bed Bug & Rodent Management',
            '✦ Mosquito Mesh & Fogging Solutions',
            '✦ Same-Day Inspection & Treatment'
        ],
        specializations: ['Termite Proofing', 'Cockroach Control', 'Bed Bug Removal', 'Rodent Management'],
        subServices: [
            { id: 'pest-cockroach', name: 'General Pest Control', price: 799, category: 'Gel Treatment', image: '/assets/Images/home-repair-services/pest_control.jpeg', desc: 'Control for cockroaches, ants, and spiders in home.' },
            { id: 'pest-termite', name: 'Termite Protection Plan', price: 1499, category: 'Structural', image: '/assets/Images/home-repair-services/pest_control.jpeg', desc: 'Anti-termite treatment with 5-year warranty.' }
        ]
    },
    'Home Repair Services': {
        icon: '/images/maintenance_icon.png',
        photo: '/assets/Images/home-repair-services/plumbing_work.jpeg',
        desc: 'Your one-stop solution for all <strong>home maintenance and repair needs in Hyderabad</strong>. From expert plumbing and electrical work to professional carpentry and bird netting, we ensure your home stays in perfect condition.',
        highlights: [
            '✦ Rapid Doorstep Plumbing & Leakage Fixing',
            '✦ Certified Electricians for Wiring & Faults',
            '✦ Precision Carpentry & Furniture Restoration',
            '✦ High-Durability Balcony Bird Netting',
            '✦ Mosaic & Tile Flooring Repair Works',
            '✦ Door, Lock & Window Hardware Fixes',
            '✦ Same-Day Emergency Repairs Available',
            '✦ Verified Professionals with Modern Tools'
        ],
        specializations: ['Plumbing', 'Electrical', 'Carpentry', 'Bird Netting'],
        subServices: [
            { id: 'hr-plumber', name: 'Expert Plumbing Visit', price: 149, category: 'Plumbing', image: '/images/maintenance_icon.png', desc: 'Doorstep visit for leak detection and diagnosis.' },
            { id: 'hr-electrician', name: 'Electrician Visit', price: 149, category: 'Electrical', image: '/images/lightning_bolt_icon.png', desc: 'Safety audit and fault finding by certified experts.' }
        ]
    },
    'Most Booked Services': {
        icon: '/images/ok_icon.png',
        photo: '/images/worker_icon.png',
        desc: 'Explore the <strong>top-rated appliance repair and home services</strong> trusted by over 10,000 residents across Hyderabad. These services have the highest customer satisfaction scores and fastest response times.',
        highlights: [
            '✦ Top-Rated AC & Refrigerator Restoration',
            '✦ Most Hired Washing Machine Experts',
            '✦ Fastest Response TV & Microwave Service',
            '✦ Highest Rated Pest Control Treatments',
            '✦ Best Valued Plumbing & Electrical Fixes',
            '✦ Guaranteed Reliability & Workmanship',
            '✦ Same-Day Priority Scheduling',
            '✦ 180-Day Comprehensive Warranty'
        ],
        specializations: ['Top Rated Repairs', 'Trending Services', 'Customer Favorites'],
        subServices: [
            { id: 'mb-ac', name: 'Priority AC Service', price: 650, category: 'Best Seller', image: '/images/ac_icon.png', desc: 'Our #1 most booked service for cooling recovery.' }
        ]
    },
    'Explore Our Services': {
        icon: '/favicon.ico',
        photo: '/images/unsplash_1621905251189.jpg',
        desc: 'Discover the full range of <strong>professional home services provided by MeeHelper</strong>. From specialized appliance repair to complete home maintenance, our certified experts cover every corner of Hyderabad.',
        highlights: [
            '✦ Full Spectrum of Appliance Repair Solutions',
            '✦ Comprehensive Home Maintenance & Repairs',
            '✦ Licensed Pest Control & Hygiene Services',
            '✦ Professional Smart Device & TV Diagnostics',
            '✦ Rapid Doorstep Support Across 50+ Districts',
            '✦ Transparent Pricing & Guaranteed Warranty',
            '✦ Verified Experts for Every Service Category',
            '✦ 24/7 Online Booking & Support Access'
        ],
        specializations: ['All Appliances', 'All Home Repairs', 'All Pest Control'],
        subServices: [
            { id: 'expl-all', name: 'View Full Rate Card', price: 0, category: 'Menu', image: '/images/logo.png', desc: 'Explore all repair items and service rates.' }
        ]
    },
    'Cleaning & Sanitization': {
        icon: '/images/deep-home-cleaning.png',
        photo: '/images/deep-home-cleaning.png',
        desc: 'Keep your spaces pristine, safe, and germ-free. We offer premium **home & commercial cleaning and sanitization services across Hyderabad**, using hospital-grade disinfectants and advanced scrubbing machines.',
        highlights: [
            '✦ Deep Home Cleaning & Complete Villa Scrubbing',
            '✦ Sofa, Carpet & Mattress Shampoo Extraction',
            '✦ Kitchen Degreasing & Bathroom Lime-scale Removal',
            '✦ Hospital-Grade ULV Cold Fogging Sanitization',
            '✦ 100% Safe, Eco-Friendly & Kids-Friendly Chemicals',
            '✦ Background-Verified & Trained Cleaning Professionals',
            '✦ Advanced Single-Disc Scrubbing & High-Vacuum Systems',
            '✦ Same-Day Service & Transparent Pricing Plans'
        ],
        specializations: ['Deep Home Cleaning', 'Sofa & Carpet Wash', 'Bathroom Sanitization', 'ULV Cold Fogging'],
        subServices: [
            { id: 'deep-home-cleaning', name: 'Deep Home Cleaning', price: 3510, category: 'Home Cleaning', image: '/images/deep-home-cleaning.png', desc: 'ISO-certified complete top-to-bottom house scrubbing & sanitization.' },
            { id: 'sofa-cleaning', name: 'Sofa Cleaning', price: 599, category: 'Furniture Cleaning', image: '/images/furniture-cleaning.png', desc: 'Dry vacuuming and shampoo extraction to remove spots and hair.' },
            { id: 'bathroom-cleaning', name: 'Bathroom Cleaning', price: 399, category: 'Home Cleaning', image: '/images/bathroom-cleaning.png', desc: 'Intense lime scale removal, tile washing, and tap polishing.' },
            { id: 'home-sanitization', name: 'Home Sanitization', price: 599, category: 'Sanitization', image: '/images/sanitization-service.png', desc: 'Hospital-grade cold fogging sanitization for all rooms.' }
        ]
    },
    'Air Conditioner Repair': {
        globalDiscount: 16,
        icon: '/images/ac_icon.png',
        photo: '/images/ac-repair.png',
        desc: 'Is your <strong>AC blowing warm air</strong>, leaking water, or making unexplained noises? At <strong>MeeHelper</strong>, our HVAC-certified technicians perform a complete <strong>25-point diagnostic</strong> on your air conditioner across <strong>Hyderabad</strong> — from the outdoor compressor unit to the indoor evaporator coil.',
        highlights: [
            '✦ Split & Window AC Repair — All Types',
            '✦ Refrigerant Gas Charging (R-32 / R-22 / R-410A)',
            '✦ Compressor & Capacitor Replacement',
            '✦ PCB & Thermostat Board Diagnostics',
            '✦ Deep Jet Cleaning (Indoor + Outdoor Unit)',
            '✦ Water Leakage & Drain Line Unclogging',
            '✦ Same-Day Doorstep Service in Hyderabad',
            '✦ 180-Day Warranty on Parts & Labour'
        ],
        brands: ['Voltas', 'LG', 'Samsung', 'Daikin', 'Blue Star', 'Hitachi', 'Carrier', 'Panasonic', 'O General', 'Lloyd', 'Godrej', 'Haier'],
        specializations: [
            'Inverter & Dual Inverter AC Repair', 'Split AC Jet Cleaning Service', 'Window AC Full Restoration',
            'Gas Charging & Leakage Fixing', 'PCB Repair & Micro-Soldering', 'Compressor Health Diagnostics',
            'HVAC System Design & Install', 'Thermostat Calibration', 'Commercial Tower AC Repair'
        ],
        restorationFramework: [
            { title: 'Thermostat & Sensor Calibration', icon: 'fas fa-thermometer-half' },
            { title: 'Refrigerant Pressure System Audit', icon: 'fas fa-gauge-high' },
            { title: 'Evaporator Coil Integrity Check', icon: 'fas fa-wind' },
            { title: 'Condenser Fan Motor Performance', icon: 'fas fa-fan' },
            { title: 'Electrical Control PCB Analysis', icon: 'fas fa-microchip' },
            { title: 'Drainage Flow & Anti-Clog Review', icon: 'fas fa-droplet' }
        ],
        faultResolution: [
            { t: 'AC Blowing Warm Air', i: 'fas fa-temperature-up', d: 'Comprehensive compressor and gas pressure restoration.' },
            { t: 'Indoor Unit Water Leak', i: 'fas fa-droplet-slash', d: 'Drain pipe de-clogging and tray alignment fixing.' },
            { t: 'Loud Rattling Noise', i: 'fas fa-volume-up', d: 'Fan motor balancing and vibration pad installation.' },
            { t: 'Automatic Power Cut', i: 'fas fa-power-off', d: 'PCB relay troubleshooting and sensor recalibration.' },
            { t: 'Ice on Cooling Coils', i: 'fas fa-snowflake', d: 'Airflow optimization and refrigerant level correction.' },
            { t: 'Remote Not Working', i: 'fas fa-signal', d: 'IR sensor replacement and control board sync.' }
        ],
        subServices: [
            { id: 'ac-repair-gen', name: 'General AC Repair', price: 650, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'Starting from ₹650. Includes primary diagnostic and basic electrical repair.' },
            { id: 'ac-compressor', name: 'AC Compressor Restoration', price: 1500, image: '/images/ac_icon.png', desc: 'Professional compressor health diagnostics and starter restoration.' },
            { id: 'ac-pcb', name: 'PCB / Control Board Repair', price: 2700, image: '/images/chip_icon.png', desc: 'Fixes communication errors and main circuit failures.' },
            { id: 'ac-motor', name: 'Fan Motor Repair', price: 1400, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Resolution for noisy fans or unit vibration.' },
            { id: 'ac-leak', name: 'Refrigerant Leak Repair', price: 600, image: '/images/gas_1.png', desc: 'Pressure testing and leak sealing to restore cooling power.' },
            { id: 'ac-capacitor', name: 'Capacitor Swap', price: 450, image: '/images/electrical_wiring_3d.png', desc: 'Replacement of faulty capacitors to start the compressor safely.' },
            { id: 'ac-coil', name: 'Coil & Condenser Repair', price: 2000, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Deep restoration for high-performance cooling coils.' }
        ],
        inclusions: [
            'Thorough 25-point AC diagnostic checkup',
            '180-day warranty on all parts & labour',
            'OEM-grade spare parts used',
            'Post-service cleaning included'
        ],
        exclusions: [
            'Cost of gas refill if required separately',
            'Full compressor replacement (quoted separately)',
            'Structural wall or duct work'
        ],
        reviews: [
            { user: 'Ravi K., Banjara Hills', text: 'AC was blowing warm air — technician diagnosed gas leak and fixed it in under an hour. Very professional!' },
            { user: 'Priya M., Madhapur', text: 'Brilliant job on the PCB repair. Saved me from buying a new AC. Highly recommend MeeHelper!' }
        ],
        spotlight: {
            title: 'HVAC Certified Technicians Only',
            desc: 'Our AC experts hold HVAC certification and receive 100+ hours of hands-on training. We match the best technician to your AC brand for a flawless repair every time.'
        }
    },
    'Refrigerator Repair': {
        icon: '/images/refrigerator_icon.png',
        photo: '/images/refrigerator-repair.png',
        desc: 'A malfunctioning refrigerator can lead to significant food spoilage and health hazards. Our <strong>certified refrigerator technicians in Hyderabad</strong> are trained to service all types — <strong>single door, double door, and side-by-side models</strong>. Clean, efficient, <strong>same-day repair</strong> is our promise.',
        highlights: [
            '✦ Inadequate Cooling / Not Cooling at All',
            '✦ Compressor Motor Replacement & Repair',
            '✦ Refrigerant Gas Leak Detection & Charging',
            '✦ No-Frost & Defrost System Repair',
            '✦ Water Leakage Inside / Under the Fridge',
            '✦ Loud Humming, Buzzing or Clicking Noise',
            '✦ Thermostat, Relay & Start Capacitor Repair',
            '✦ Door Gasket, Hinge & Shelf Replacement',
        ],
        brands: ['Samsung', 'LG', 'Whirlpool', 'Godrej', 'Haier', 'Bosch', 'Panasonic', 'Videocon', 'Voltas Beko', 'IFB', 'Kelvinator'],
        specializations: [
            'Side-by-Side Fridge Specialists', 'Double Door Cooling Recovery', 'Single Door Compressor Fix',
            'Inverter Compressor Diagnostics', 'Gas Refilling & Leak Detection', 'Defrost System Troubleshooting',
            'Internal Wiring & Sensor Swap', 'Door Gasket & Seal Repair', 'Deep Freezer Restoration'
        ],
        restorationFramework: [
            { title: 'Compressor Load & Efficiency Test', icon: 'fas fa-tachometer-alt' },
            { title: 'Thermostat Precision Calibration', icon: 'fas fa-temperature-low' },
            { title: 'Gas Leakage Detection & Sealing', icon: 'fas fa-search-dollar' },
            { title: 'Defrost Cycle Timing Audit', icon: 'fas fa-clock' },
            { title: 'Internal Airflow Distribution', icon: 'fas fa-wind' },
            { title: 'Magnetic Door Seal Verification', icon: 'fas fa-door-closed' }
        ],
        faultResolution: [
            { t: 'Fridge Not Cooling', i: 'fas fa-snowflake', d: 'Compressor health check and gas level restoration.' },
            { t: 'Water Leakage Underneath', i: 'fas fa-droplet', d: 'Defrost drain cleaning and tray replacement.' },
            { t: 'Excessive Ice Buildup', i: 'fas fa-icicles', d: 'Defrost heater and timer circuit restoration.' },
            { t: 'Constant Running Motor', i: 'fas fa-infinity', d: 'Thermostat calibration and door seal optimization.' },
            { t: 'Bad Odor & Hygiene Issue', i: 'fas fa-wind', d: 'Internal chemical sanitization and filter swap.' },
            { t: 'Strange Clicking Sound', i: 'fas fa-volume-down', d: 'Relay and starter capacitor diagnostics.' }
        ],
        subServices: [
            { id: 'fridge-checkup', name: 'Standard Diagnostic & Safety Check', price: 299, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'A thorough inspection of the compressor, thermostat, and gas levels to identify cooling issues and electrical safety.' },
            { id: 'fridge-gas', name: 'Gas Refilling & Leakage Restoration', price: 1299, image: '/images/gas_1.png', desc: 'Full system vacuuming and leak sealing followed by R134a/R600a eco-friendly gas charging for peak freezer performance.' },
            { id: 'fridge-pcb', name: 'Inverter Board / Main Logic Repair', price: 1899, image: '/images/chip_icon.png', desc: 'Advanced repair for high-end side-by-side or double-door fridge boards to resolve sensor issues and display errors.' },
            { id: 'fridge-defrost', name: 'Automatic Defrost System Fix', price: 899, image: '/images/check_mark_3d.svg', desc: 'Replacement of faulty defrost heaters, timers, or sensors to stop excessive ice buildup in the freezer compartment.' },
            { id: 'fridge-fan', name: 'Cooling Fan Motor Replacement', price: 799, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Fixes loud humming noises and uneven cooling by installing a silent, high-RPM fan motor.' }
        ],
        inclusions: [
            'Full 15-point diagnostic and safety audit',
            '180-day warranty on all electronic parts',
            'Internal cleaning and coil descaling',
            'Genuine OEM-grade spare parts used'
        ],
        exclusions: [
            'Cabinet body denting or painting',
            'Full door/cabinet replacement costs',
            'Power house-wiring electrical repairs'
        ],
        reviews: [
            { user: 'Kiran T., Jubilee Hills', text: 'My side-by-side fridge stopped cooling. The technician arrived in 2 hours and fixed the inverter PCB. Saved all my frozen food!' },
            { user: 'Sneha R., Madhapur', text: 'Professional gas refilling for my Whirlpool fridge. Very ethical and explained everything clearly. Great value.' }
        ],
        spotlight: {
            title: 'Cooling System Engineers',
            desc: 'Our experts are trained specifically in modern inverter and smart-sensor technologies. We focus on thermodynamic efficiency to ensure your refrigerator consumes less power while keeping food fresh.'
        }
    },
    'Washing Machine Repair': {
        icon: '/images/washing_machine_icon.png',
        photo: '/images/washing-machine-repair.png',
        desc: 'Washing machine breakdowns can disrupt your entire household routine. Whether it fails to spin, refuses to drain water, or throws error codes, our <strong>expert washer technicians in Hyderabad</strong> have the skills and tools to fix it right. We service <strong>fully-automatic and front-load machines</strong> of all major brands.',
        highlights: [
            '✦ Fully-Auto, Semi-Auto, Front & Top Load',
            '✦ Drum & Tub Bearing Replacement',
            '✦ Motor, Belt & Brush Repair',
            '✦ Water Inlet Valve & Drain Pump Repair',
            '✦ PCB / Control Board Error Code Fix',
            '✦ Spin Cycle Failure & Vibration Issues',
            '✦ Door Lock, Lid Switch & Hinge Repair',
            '✦ 180-Day Service Warranty — All Parts',
        ],
        brands: ['Samsung', 'LG', 'Whirlpool', 'IFB', 'Bosch', 'Haier', 'Godrej', 'Panasonic', 'Videocon', 'Onida', 'Siemens', 'Electrolux'],
        specializations: [
            'Front Load Inverter Repair', 'Top Load Automatic Service', 'Semi-Automatic Tub Fix',
            'Drum & Bearing Replacement', 'PCB Error Code Clearing', 'Drain Pump & Motor Repair',
            'Clutch & Gear Box Restoration', 'Suspension & Balance Tuning', 'Direct Drive System Audit'
        ],
        restorationFramework: [
            { title: 'Drum Balancing & Alignment', icon: 'fas fa-sync' },
            { title: 'Bearing Load & Spin Analysis', icon: 'fas fa-dharmachakra' },
            { title: 'Motor Torque Calibration', icon: 'fas fa-gear' },
            { title: 'Water Flow System Audit', icon: 'fas fa-water' },
            { title: 'PCB Logic & Relay Testing', icon: 'fas fa-memory' },
            { title: 'Dampener & Spring Tension', icon: 'fas fa-shuttle-space' }
        ],
        faultResolution: [
            { t: 'Washing Machine Not Spinning', i: 'fas fa-rotate', d: 'Motor and capacitor diagnostics for high-torque performance.' },
            { t: 'Water Drainage Blockage', i: 'fas fa-faucet-drip', d: 'Pump filter cleaning and hydraulic flow restoration.' },
            { t: 'Loud Shaking during Spin', i: 'fas fa-vibration', d: 'Suspension rod replacement and balance tuning.' },
            { t: 'PCB Error Code E1/E2/E4', i: 'fas fa-bug', d: 'Digital board troubleshooting and sensor reset.' },
            { t: 'Door Gasket Leakage', i: 'fas fa-tint-slash', d: 'Seal restoration and latch alignment adjustment.' },
            { t: 'Program Cycle Sticking', i: 'fas fa-hourglass-start', d: 'Timer module audit and clock logic reset.' }
        ],
        subServices: [
            { id: 'wm-checkup', name: 'Washer Health & Fault Diagnostic', price: 299, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'Electrical safety test and mechanical audit to find why your machine is noisy, leaking, or not spinning.' },
            { id: 'wm-clean', name: 'Professional Drum Descaling & Service', price: 599, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Removes hard-water scale, lint, and bacteria from the outer tub and inner drum to restore hygiene and drainage speed.' },
            { id: 'wm-pcb', name: 'Main Control Board (PCB) Repair', price: 1999, image: '/images/chip_icon.png', desc: 'Resolving motherboard error codes (E1, E2, dC, etc.) through professional circuit component restoration.' },
            { id: 'wm-drum', name: 'Heavy-Duty Drum Bearing Replacement', price: 2499, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Fixes high-pitched screeching or vibration during the spin cycle with premium, long-life industrial bearings.' },
            { id: 'wm-pump', name: 'Silent Drain Pump Replacement', price: 1200, image: '/images/img_icons8_com_3d_fluency_94_forward_png.png', desc: 'Solves water drainage issues and OE errors by installing a high-efficiency magnetic drain pump.' }
        ],
        inclusions: [
            'Deep jet drum sterilization and descaling',
            'Full hydraulic pump and filter cleaning',
            'Anti-vibration and load balancing service',
            'Genuine wash-grade spare components'
        ],
        exclusions: [
            'Drum spider or main outer body overhaul',
            'Full tub assembly replacement',
            'Plumbing work outside the machine unit'
        ],
        reviews: [
            { user: 'Sandeep V., Kukatpally', text: 'My front-load machine had a loud noise. Technician replaced bearings and now it is pin-drop silent. Excellent work!' },
            { user: 'Meena K., Secunderabad', text: 'Professional PCB repair for my LG top-loader. The cost was fair and it was fixed the same day.' }
        ],
        spotlight: {
            title: 'Laundry Care Specialists',
            desc: 'Washing machines are complex mechanical systems. Our experts specialize in drum dynamics and precision balance tuning, ensuring your machine lasts longer and performs quieter.'
        }
    },
    'Television Repair': {
        icon: '/images/tv_icon.png',
        photo: '/images/television-repair.png',
        desc: 'Television problems — from cracked screens to no-signal errors — require expert diagnosis and precision repairs. Our TV repair technicians in Hyderabad are trained to handle LED, LCD, OLED, QLED, 4K, Smart TVs, and Android TVs. We diagnose display panel damage, T-CON board failures, backlight strip issues, power supply board faults, HDMI port damage, and motherboard failures.',
        highlights: [
            '✦ LED, LCD, OLED, QLED & 4K TV Repair',
            '✦ Display Panel & Backlight Replacement',
            '✦ T-CON Board & Main Board Repair',
            '✦ Power Supply PCB Diagnostics',
            '✦ HDMI, USB & AV Port Replacement',
            '✦ Smart TV — WiFi, Apps & Firmware Fix',
            '✦ No Signal, Black Screen & Lines Fix',
            '✦ Sound Board & Speaker Replacement',
        ],
        brands: ['Samsung', 'LG', 'Sony', 'Panasonic', 'Mi (Xiaomi)', 'TCL', 'OnePlus', 'Vu', 'Philips', 'Hisense', 'Toshiba', 'BPL'],
        specializations: [
            'OLED & QLED Panel Diagnostics', '4K Smart TV Motherboard Fix', 'Backlight LED Strip Replacement',
            'T-CON Board & LVDS Repair', 'Software & WiFi Card Troubleshooting', 'Power Supply PCB Restoration',
            'Sound Board & Speaker Service', 'HDMI & Port Replacement', 'Remote Sensor Calibration'
        ],
        restorationFramework: [
            { title: 'Backlight Voltage Uniformity', icon: 'fas fa-lightbulb' },
            { title: 'Display Panel Polarization', icon: 'fas fa-tv' },
            { title: 'T-CON Signal Processing', icon: 'fas fa-microchip' },
            { title: 'Power Supply PCB Audit', icon: 'fas fa-bolt' },
            { title: 'HDMI & Input Logic Test', icon: 'fas fa-ethernet' },
            { title: 'Sound Board Acoustics Check', icon: 'fas fa-volume-up' }
        ],
        faultResolution: [
            { t: 'No Picture / Black Screen', i: 'fas fa-eye-slash', d: 'Backlight LED strip and T-CON board restoration.' },
            { t: 'Sound Present No Display', i: 'fas fa-volume-high', d: 'Panel power logic and gate-driver IC audit.' },
            { t: 'Lines on LED Screen', i: 'fas fa-grip-lines', d: 'LVDS cable cleaning and COF bonding check.' },
            { t: 'Smart TV App Crashing', i: 'fas fa-app-store', d: 'Firmware update and memory cache flushing.' },
            { t: 'WiFi Connectivity Issues', i: 'fas fa-wifi', d: 'Internal antenna and network card diagnostics.' },
            { t: 'Sudden Power Off', i: 'fas fa-plug-circle-exclamation', d: 'Main power supply and capacitor leak audit.' }
        ],
        subServices: [
            { id: 'tv-visit', name: 'TV Diagnostic Visit', price: 299, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'Panel & board inspection with estimate.' },
            { id: 'tv-backlight', name: 'LED Backlight Strip Replacement', price: 1899, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Fixes dark spots & black screens.' },
            { id: 'tv-mainboard', name: 'TV Motherboard / Main Board Repair', price: 2999, image: '/images/chip_icon.png', desc: 'Firmware & logic restoration.' },
            { id: 'tv-panel', name: 'Panel / Open Cell COF Bonding', price: 4999, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Fixes horizontal/vertical lines.' }
        ],
        inclusions: [
            'Panel polarization and voltage testing',
            'Firmware check and software cache clear',
            'Internal cleaning and dust removal',
            'Genuine LED backlight strip arrays'
        ],
        exclusions: [
            'Physical screen crack restoration (replacement only)',
            'Major liquid spill panel damage restoration',
            'External HDMI / cable wiring work'
        ],
        reviews: [
            { user: 'Arun M., Banjara Hills', text: 'My Sony OLED had no picture. Technician replaced the T-CON board and it is perfect. Saved me a lot of money!' },
            { user: 'Priya S., Hitech City', text: 'Backlight issue fixed in 2 hours for my Mi TV. Very professional and tidy work.' }
        ],
        spotlight: {
            title: 'Display & Optic Experts',
            desc: 'Modern TV panels are incredibly delicate. Our technicians use clean-room techniques and precision diagnostic tools to handle everything from software glitches to micro-soldering on motherboards.'
        }
    },
    'Microwave Oven Repair': {
        icon: '/images/microwave_icon.png',
        photo: '/images/microwave-repair.png',
        desc: 'A microwave oven is one of the most frequently used appliances in your kitchen — and it requires expert hands when it stops heating, sparks, or displays error codes. Our technicians handle all types: solo microwave, grill microwave, convection microwave, and OTG ovens.',
        highlights: [
            '✦ Solo, Grill & Convection Microwave Repair',
            '✦ Magnetron Replacement (No Heating Fix)',
            '✦ High-Voltage Capacitor & Diode Repair',
            '✦ Turntable Motor & Ring Replacement',
            '✦ Control Panel, Touchpad & PCB Fix',
            '✦ Door Latch, Hinge & Interlock Repair',
            '✦ Sparking, Burning Smell & Error Codes',
            '✦ Waveguide Cover Cleaning & Replacement',
        ],
        brands: ['Samsung', 'LG', 'IFB', 'Panasonic', 'Godrej', 'Whirlpool', 'Bajaj', 'Morphy Richards', 'Bosch', 'Siemens'],
        specializations: [
            'Magnetron & Heating Diagnostics', 'Convection Fan Motor Repair', 'Touchpad & Control Panel Fix',
            'High-Voltage Transformer Audit', 'Turntable Motor Mechanism', 'Internal Chamber Sanitization',
            'Door Interlock Safety Check', 'PCB Error Code Resets', 'Grill Element Replacement'
        ],
        restorationFramework: [
            { title: 'Magnetron Performance Test', icon: 'fas fa-radiation' },
            { title: 'High-Voltage Capacitor Integrity', icon: 'fas fa-bolt' },
            { title: 'Door Interlock Safety Check', icon: 'fas fa-door-closed' },
            { title: 'Turntable Sensitivity Scan', icon: 'fas fa-arrows-rotate' },
            { title: 'Control Board Logic Analysis', icon: 'fas fa-memory' },
            { title: 'Waveguide Consistency Review', icon: 'fas fa-square-rss' }
        ],
        faultResolution: [
            { t: 'Not Heating Food', i: 'fas fa-temperature-low', d: 'Magnetron replacement and diode restoration.' },
            { t: 'Sparking inside Chamber', i: 'fas fa-bolt-lightning', d: 'Waveguide cover fix and internal sanitization.' },
            { t: 'Touch Pad Not Working', i: 'fas fa-hand-pointer', d: 'Connection cleanup and PCB ribbon restoration.' },
            { t: 'Loud Humming Noise', i: 'fas fa-volume-up', d: 'HV Transformer audit and mounting stabilization.' }
        ],
        subServices: [
            { id: 'mw-visit', name: 'Microwave Safety & Diagnostic Visit', price: 199, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'Our technician checks for radiation leaks, magnetron health, and touchpad responsiveness to ensure safe kitchen usage.' },
            { id: 'mw-magnetron', name: 'Magnetron Replacement (Core Heating)', price: 1199, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Restores powerful heating to your microwave by replacing the microwave generator with an original high-frequency magnetron.' },
            { id: 'mw-pcb', name: 'Touchpad & Logical Board Repair', price: 1499, image: '/images/chip_icon.png', desc: 'Fixes non-responsive buttons or auto-start issues by restoring the capacitive touch circuits or main logice board.' },
            { id: 'mw-transformer', name: 'High-Voltage Transformer Repair', price: 1299, image: '/images/electrical_wiring_3d.png', desc: 'Solves loud humming noises and heating failures by addressing the high-voltage power delivery system.' },
            { id: 'mw-motor', name: 'Turntable Motor & Drive Fix', price: 599, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Ensures even heating by fixing the rotating plate mechanism and glass tray alignment.' }
        ],
        inclusions: [
            'Full radiation leakage safety check',
            'High-voltage electrical circuit audit',
            'Chamber sterilization and grease removal',
            'Genuine safety-rated spare parts'
        ],
        exclusions: [
            'Turntable glass plate replacement',
            'Cavity body denting/painting',
            'Burned cavity restoration (safety risk)'
        ],
        reviews: [
            { user: 'Vikram S., Gachibowli', text: 'Microwave was sparking inside. Technician cleaned the waveguide and it is now safe to use. Very helpful advice!' },
            { user: 'Anjali D., Miyapur', text: 'Touchpad was not working. They fixed it on the spot. Professional and timely service.' }
        ],
        spotlight: {
            title: 'Microwave Safety Specialists',
            desc: 'Microwave repair involves high-voltage risks. We follow strict safety protocols, including radiation leak testing after every repair, to ensure your kitchen appliance is 100% safe for your family.'
        }
    },
    'Dishwasher Repair': {
        icon: '/images/dishwasher_icon.png',
        photo: '/images/dishwasher-repair.png',
        desc: 'Dishwasher problems — from leaks beneath the unit to dishes coming out still dirty — are complex and require specialist knowledge. Our dishwasher repair technicians in Hyderabad are trained to work on built-in, freestanding, countertop, and semi-integrated models.',
        highlights: [
            '✦ Dishes Not Cleaning Properly — Fixed',
            '✦ Water Not Draining After Cycle',
            '✦ Door Latch, Seal & Gasket Replacement',
            '✦ Spray Arm Blockage & Replacement',
            '✦ Wash Pump & Drain Pump Repair',
            '✦ Heating Element & Thermostat Service',
            '✦ Water Inlet Valve & Float Switch Fix',
            '✦ Control Board Error Codes & Reset',
        ],
        brands: ['Bosch', 'IFB', 'Samsung', 'LG', 'Siemens', 'Whirlpool', 'Godrej', 'Faber', 'Electrolux', 'Voltas'],
        specializations: [
            'Built-in Dishwasher Tune-up', 'Spray Arm De-clogging', 'Drain Pump Performance Fix',
            'Thermal Fuse & Sensor Swap', 'Door Gasket Steam Sealing', 'Control Board Logic Reset',
            'Hard Water Scale Removal', 'Inlet Valve Pressure Tuning', 'Cycle Timing Optimization'
        ],
        restorationFramework: [
            { title: 'Hydraulic Pressure Flow Audit', icon: 'fas fa-water' },
            { title: 'Drain Pump Performance', icon: 'fas fa-faucet-drip' },
            { title: 'Spray Arm Rotation Integrity', icon: 'fas fa-arrows-spin' },
            { title: 'Thermal Sensor Precision', icon: 'fas fa-temperature-half' },
            { title: 'Detergent Dispenser Logic', icon: 'fas fa-box-open' },
            { title: 'Internal Sanitization Hub', icon: 'fas fa-soap' }
        ],
        faultResolution: [
            { t: 'Water Not Draining', i: 'fas fa-droplet-slash', d: 'Pump housing cleanup and impeller restoration.' },
            { t: 'Dishes Coming Out Dirty', i: 'fas fa-utensils', d: 'Spray arm de-clogging and descaling protocol.' },
            { t: 'Water Leakage Fault', i: 'fas fa-droplet', d: 'Door seal restoration and float switch calibration.' },
            { t: 'E15 / E24 Error Codes', i: 'fas fa-bug', d: 'Logic board diagnostic and drainage system audit.' }
        ],
        subServices: [
            { id: 'dw-visit', name: 'Dishwasher Diagnostic Visit', price: 299, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'System scan & leak site inspection.' },
            { id: 'dw-clean', name: 'Professional Deep Descaling', price: 699, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Anti-bacterial & hard water restoration.' },
            { id: 'dw-pump', name: 'Drain / Wash Pump Restoration', price: 2199, image: '/images/dishwasher_repair_3d.png', desc: 'Fixes drainage & cleaning issues.' }
        ],
        inclusions: [
            'Deep chemical descaling and sanitization',
            'Spray arm and filter de-clogging service',
            'Full hydraulic leak pressure testing',
            'Genuine OEM-certified pump components'
        ],
        exclusions: [
            'Inner cabinet basket replacement costs',
            'Full outer body panel restoration',
            'Kitchen plumbing or inlet water line work'
        ],
        reviews: [
            { user: 'Rahul V., Kondapur', text: 'My Bosch dishwasher had an E15 error. The technician fixed the leak and descaled the unit. Dishes are sparkling now!' },
            { user: 'Meera G., Madhapur', text: 'Excellent service for my IFB dishwasher. Very professional and the cost was exactly as quoted.' }
        ],
        spotlight: {
            title: 'Hydraulic System Experts',
            desc: 'Dishwashers rely on complex water pressure and thermal dynamics. Our experts focus on restoring factory-level spray pressure and chemical efficiency to ensure hygienic cleaning every cycle.'
        }
    },
    'Coffee Machine Repair': {
        icon: '/images/blender_icon.png',
        photo: '/images/coffee-machine-repair.png',
        desc: 'Your morning coffee ritual deserves a machine that works flawlessly. Whether your coffee machine is producing weak espresso, failing to grind beans, losing pressure, or showing descaling warnings, our certified technicians can restore it to factory performance.',
        highlights: [
            '✦ Espresso, Drip, Pod & Bean-to-Cup Machines',
            '✦ Extraction Pressure Calibration & Fix',
            '✦ No/Weak Coffee Flow — Pump & Valve Repair',
            '✦ Grinder Burr Sharpening & Motor Replacement',
            '✦ Boiler, Thermoblock & Heating Element Fix',
            '✦ Solenoid Valve & High-Pressure Hose Repair',
            '✦ Professional Deep Descaling & Chemical Cleaning',
            '✦ Steam Wand, Milk Frother & Carafe Servicing',
        ],
        brands: ['Nespresso', 'DeLonghi', 'Philips', 'Morphy Richards', 'Lavazza', 'Jura', 'Illy', 'Bajaj', 'Black & Decker', 'Sunbeam'],
        specializations: [
            'High-Pressure Pump Calibration', 'Brew Group Portafilter Fix', 'Internal Steam Boiler Audit',
            'Grinder Motor & Burr Tuning', 'Descaling System Restoration', 'Solenoid Valve Pressure Leak',
            'Automatic Milk Frother Fix', 'PCB Logic & Sensor Diagnostics', 'Thermistor Temperature Control'
        ],
        restorationFramework: [
            { title: 'Pressure Pump Calibration', icon: 'fas fa-gauge-high' },
            { title: 'Boiler Thermal Audit', icon: 'fas fa-temperature-high' },
            { title: 'Grinder Burr Precision', icon: 'fas fa-cog' },
            { title: 'Solenoid Valve Sealing', icon: 'fas fa-water' },
            { title: 'Control Board Diagnostics', icon: 'fas fa-microchip' },
            { title: 'Hydraulic Flow Test', icon: 'fas fa-vial' }
        ],
        faultResolution: [
            { t: 'No Coffee Extraction', i: 'fas fa-mug-hot', d: 'Pump and solenoid valve restoration.' },
            { t: 'Weak / Cold Coffee', i: 'fas fa-temperature-low', d: 'Boiler element and thermistor check.' },
            { t: 'Grinder Blockage', i: 'fas fa-ban', d: 'Burr cleaning and motor torque calibration.' }
        ],
        subServices: [
            { id: 'cm-descale', name: 'Professional Descaling Service', price: 999, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Removes lime scale & restores flow.' },
            { id: 'cm-pump', name: 'Pressure Pump Replacement', price: 2499, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Fixes weak extraction & low pressure.' },
            { id: 'cm-visit', name: 'Coffee Machine Diagnostic', price: 299, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'Full system health & sensor check.' },
        ]
    },
    'Vacuum Cleaner Repair': {
        icon: '/images/vacuum_cleaner_icon.png',
        photo: 'https://images.unsplash.com/photo-1687443044772-0bfc335d6739?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc: 'A vacuum cleaner losing suction, making loud noise, shutting off automatically, or emitting burning smells must be inspected immediately. Our trained technicians service canister vacuums, upright vacuums, robotic vacuums, and handheld vacuums.',
        highlights: [
            '✦ Canister, Upright, Robotic & Cordless Types',
            '✦ Suction Power Loss — Motor & Impeller Fix',
            '✦ HEPA Filter Deep Cleaning & Replacement',
            '✦ Brush Roll, Bearing & Belt Replacement',
            '✦ Overheating, Auto Shutoff & Fuse Repair',
            '✦ Hose, Pipe & Attachment Port Repair',
            '✦ Robotic Vacuum Sensor & PCB Repair',
            '✦ Burning Smell — Motor Winding Inspection',
        ],
        brands: ['Dyson', 'Eureka Forbes', 'Philips', 'LG', 'Samsung', 'Mi (Xiaomi)', 'iRobot', 'Inalsa', 'Bosch', 'Black & Decker'],
        specializations: [
            'Robotic Sensor Navigation Fix', 'Cordless Battery Pack Swap', 'HEPA Airflow Optimization',
            'Brush Roll Drive Belt Repair', 'Impeller Fan Motor Balancing', 'Suction Leak Detection Lock',
            'PCB Controller Firmware Fix', 'Anti-Static Cleaning Protocol', 'Cyclonic Chamber Restoration'
        ],
        restorationFramework: [
            { title: 'Motor Suction Load Test', icon: 'fas fa-tachometer-alt' },
            { title: 'HEPA Airflow Integrity', icon: 'fas fa-wind' },
            { title: 'Brush Drive Mechanism', icon: 'fas fa-redo' },
            { title: 'Battery Cell Balancing', icon: 'fas fa-battery-half' },
            { title: 'PCB Sensor Calibration', icon: 'fas fa-satellite' },
            { title: 'Filter Saturation Audit', icon: 'fas fa-filter' }
        ],
        faultResolution: [
            { t: 'Total Suction Loss', i: 'fas fa-arrow-down-z-a', d: 'Impeller repair and motor health check.' },
            { t: 'Excessive Noise', i: 'fas fa-volume-up', d: 'Bearing replacement and fan balancing.' },
            { t: 'Robot Navigation Issue', i: 'fas fa-robot', d: 'Sensor cleaning and firmware logic reset.' }
        ],
        subServices: [
            { id: 'vc-filter', name: 'HEPA Filter & Full Cleaning', price: 599, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Restores suction & air quality.' },
            { id: 'vc-motor', name: 'Vacuum Motor Restoration', price: 1899, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Fixes suction loss & loud noise.' },
            { id: 'vc-robot', name: 'Robot Vacuum Battery Swap', price: 2999, image: '/images/img_icons8_com_3d_fluency_94_forward_png.png', desc: 'Genuine high-capacity battery cell.' },
        ]
    },
    'Gas Stove & Hob Repair': {
        icon: '/images/gas_stove_icon.png',
        photo: '/images/istock_young_1324872698.jpg',
        desc: 'A gas leak or a blocked burner isn\'t just a nuisance—it\'s a safety hazard. Our certified gas stove technicians in Hyderabad specialize in repairing hobs, cooktops, and traditional stoves with a focus on safety and precision.',
        highlights: [
            '✦ Gas Leakage Detection & Sealing',
            '✦ Burner Cleaning & Flame Optimization',
            '✦ Ignition System & Spark Plug Repair',
            '✦ Knob, Valve & Pipe Replacement',
            '✦ High-Efficiency Cleaning & Servicing',
            '✦ Support Grid & Glass Top Replacement',
            '✦ Pressure Regulator Inspection',
            '✦ All Major Hob & Stove Brands Serviced',
        ],
        brands: ['Prestige', 'Pigeon', 'Sunflame', 'Glen', 'Faber', 'Butterfly', 'Elica', 'Bajaj', 'Morphy Richards', 'Bosch', 'Siemens'],
        specializations: [
            'Automatic Ignition System Fix', 'Gas Leakage Safety Sealing', 'High-Flame Burner Restoration',
            'Knob & Valve Mechanism Repair', 'Hob & Cooktop Deep Cleaning', 'Supply Pipe & Regulator Audit',
            'Glass Top Sealing & Protection', 'Forge-Iron Support Repair', 'Commercial Stove Servicing'
        ],
        restorationFramework: [
            { title: 'Gas Leakage Safety Audit', icon: 'fas fa-shield-halved' },
            { title: 'Ignition Pulse Calibration', icon: 'fas fa-bolt-lightning' },
            { title: 'Burner Flame Optimization', icon: 'fas fa-fire' },
            { title: 'Valve & Knob Precision', icon: 'fas fa-sliders' },
            { title: 'Supply Line Pressure Check', icon: 'fas fa-gauge' },
            { title: 'Structural Integrity Check', icon: 'fas fa-cube' }
        ],
        faultResolution: [
            { t: 'Gas Leakage Smell', i: 'fas fa-warning', d: 'Valve sealing and pipe replacement.' },
            { t: 'Low Blue Flame', i: 'fas fa-tint', d: 'Burner de-clogging and air-mix calibration.' },
            { t: 'Auto-Ignition Failure', i: 'fas fa-bolt', d: 'Spark plug and battery module restoration.' }
        ],
        subServices: [
            { id: 'gs-clean', name: 'Deep Cleaning & Burner Service', price: 499, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Carbon removal & flame optimization.' },
            { id: 'gs-ignition', name: 'Auto-Ignition Component Fix', price: 399, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Spark plug & wiring restoration.' },
            { id: 'gs-visit', name: 'Gas Stove Inspection Visit', price: 199, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'Leak detection & safety audit.' },
        ]
    },
    'Water Purifier (RO) Service': {
        icon: '/images/water_purifier_icon.png',
        photo: '/images/water-purifier-repair.png',
        desc: 'Ensure your family has access to pure, safe drinking water with our <strong>expert RO water purifier servicing in Hyderabad</strong>. We specialize in point-of-use and whole-house filtration systems, providing deep sanitization and membrane performance audits.',
        highlights: [
            '✦ RO, UV & UF Water Purifier Repair',
            '✦ Sediment & Carbon Filter Replacement',
            '✦ high-Tech TDS Level Calibration',
            '✦ Booster Pump & SMPS Transformer Repair',
            '✦ Internal Tank sanitization & Cleaning',
            '✦ Float switch & Automatic Sensor Fix',
            '✦ Mineral Cartridge & Alkaline Enhancement',
            '✦ Annual Maintenance Contracts (AMC)',
        ],
        brands: ['Kent', 'Aquaguard', 'Eureka Forbes', 'Pureit', 'Livpure', 'Blue Star', 'AO Smith', 'Havells', 'Whirlpool', 'LG'],
        specializations: [
            'RO Membrane Replacement', 'UV Lamp & UF Filter Audit', 'TDS Controller Adjustment',
            'High-Pressure Pump Repair', 'Internal Tank Sanitization', 'Pre-Filter & Sediment Cleaning',
            'Waste Water Ratio Tuning', 'Alkaline Filter Integration', 'Floating Sensor Replacement'
        ],
        restorationFramework: [
            { title: 'TDS Level Precision Audit', icon: 'fas fa-vial' },
            { title: 'Membrane Permeability Test', icon: 'fas fa-filter' },
            { title: 'Booster Pump Pressure', icon: 'fas fa-compress' },
            { title: 'UV Sterilization Integrity', icon: 'fas fa-sun' },
            { title: 'Float Sensor Logic', icon: 'fas fa-water' },
            { title: 'Filter Saturation Check', icon: 'fas fa-layer-group' }
        ],
        faultResolution: [
            { t: 'High TDS / Salty Water', i: 'fas fa-microscope', d: 'Membrane replacement and TDS calibration.' },
            { t: 'Water Leakage from Unit', i: 'fas fa-droplet', d: 'Elbow and connector sealing.' },
            { t: 'No Water Flow', i: 'fas fa-ban', d: 'Booster pump and solenoid valve fix.' }
        ],
        subServices: [
            { id: 'ro-service', name: 'Full Filtration Service (All Filters)', price: 1299, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Sediment, Carbon & Post-filter swap.' },
            { id: 'ro-membrane', name: 'RO Membrane Replacement', price: 1899, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Restores TDS level to pure standards.' },
            { id: 'ro-pump', name: 'Bo booster Pump Restoration', price: 1599, image: '/images/img_icons8_com_3d_fluency_94_forward_png.png', desc: 'Fixes low pressure & flow issues.' }
        ],
        inclusions: [
            'Full 7-stage filter set evaluation',
            'Precision TDS level and pH audit',
            'Internal tank sanitization and descaling',
            'High-grade pure-flow authentic filters'
        ],
        exclusions: [
            'External pre-filter housing replacement',
            'Main water inlet plumbing repairs',
            'UV lamp or LED indicator replacement'
        ],
        reviews: [
            { user: 'Sowmya B., Miyapur', text: 'Water tasted slightly salty. Technician replaced the membrane and now the TDS is perfect. Very ethical work!' },
            { user: 'Rakesh P., Dilsukhnagar', text: 'On-time service for my Aquaguard. Explained the filter stages clearly. Highly satisfied with the results.' }
        ],
        spotlight: {
            title: 'Water Chemistry Specialists',
            desc: 'We don’t just swap filters. Our RO experts understand the science of water purification, ensuring your drinking water meets WHO safety standards for mineral balance and purity.'
        }
    },
    'Geyser & Water Heater Repair': {
        icon: '/images/geyser_icon.png',
        photo: '/images/geyser-repair.png',
        desc: 'Experience uninterrupted hot water with our <strong>certified geyser repair services in Hyderabad</strong>. Our technicians manage high-pressure systems and electrical heating elements with a strict <strong>safety-first diagnostic protocol</strong>.',
        highlights: [
            '✦ Instant, Storage & Gas Geyser Repair',
            '✦ Heating Element & Thermostat Swap',
            '✦ Pressure Release Valve (PRV) Audit',
            '✦ Internal Tank Descaling & Corrosion Removal',
            '✦ Power Supply & MCB Trip Troubleshooting',
            '✦ Water Leakage & Pipe Connection Sealing',
            '✦ Safety Cut-out & Thermal Link Repair',
            '✦ Magnesium Anode Rod Maintenance',
        ],
        brands: ['AO Smith', 'Racold', 'Bajaj', 'Venus', 'Havells', 'Crompton', 'V-Guard', 'Orient', 'Kenstar', 'Ariston'],
        specializations: [
            'High-Pressure Storage Repair', 'Instant Geyser Safety Check', 'Heating Element Descaling',
            'Thermostat & Cut-off Wiring', 'Magnesium Anode Rod Swap', 'Tank Leakage Sealing Fix',
            'MCB & Electrical Continuity', 'PRV Valve Pressure Balance', 'Digital Panel Error Fix'
        ],
        restorationFramework: [
            { title: 'Electrical Leakage (Earthing)', icon: 'fas fa-shield-bolt' },
            { title: 'Heating Element Efficiency', icon: 'fas fa-temperature-arrow-up' },
            { title: 'Thermostat Safety Cut-off', icon: 'fas fa-toggle-on' },
            { title: 'Tank Descaling Audit', icon: 'fas fa-soap' },
            { title: 'PRV Pressure Balancing', icon: 'fas fa-gauge' },
            { title: 'Anode Rod Integrity', icon: 'fas fa-magnet' }
        ],
        faultResolution: [
            { t: 'No Hot Water Output', i: 'fas fa-snowflake', d: 'Heating element and thermostat restoration.' },
            { t: 'Electric Shock or Tripping', i: 'fas fa-bolt', d: 'Element leakage and earthing safety fix.' },
            { t: 'Water Leaking from Tank', i: 'fas fa-tint', d: 'Inlet/Outlet sealing or tank repair.' }
        ],
        subServices: [
            { id: 'geyser-service', name: 'Geyser Descaling & AMC', price: 599, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Internal tank & element cleaning.' },
            { id: 'geyser-element', name: 'Heating Element Replacement', price: 999, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Heavy-duty copper element with warranty.' },
            { id: 'geyser-thermostat', name: 'Thermostat & Safety Cut-off', price: 499, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'Fixes overheating & power issues.' }
        ],
        inclusions: [
            'Full heating element efficiency audit',
            'Inlet/Outlet pressure valve calibration',
            'Electrical earthing and safety check',
            'Genuine heavy-duty copper components'
        ],
        exclusions: [
            'Main water supply pipeline repair',
            'Wall mounting structural reinforcement',
            'Full storage tank replacement'
        ],
        reviews: [
            { user: 'Arun L., Begumpet', text: 'Geyser was tripping the MCB. Tech found a leakage in the element and fixed it on the spot. Very safe and efficient.' },
            { user: 'Sita M., Gachibowli', text: 'Professional descaling for my AO Smith. Now water heats up much faster. Saved me from a cold winter morning!' }
        ],
        spotlight: {
            title: 'Thermal Safety Engineering',
            desc: 'Geyser repairs involve high-pressure water and high-voltage electricity. Our technicians prioritize a rigid 10-point safety protocol to ensure 100% shock-proof and leak-proof operation.'
        }
    },
    'Kitchen Chimney Service': {
        icon: '/images/chimney_icon.png',
        photo: '/images/istock_a_2248380132.jpg',
        desc: 'Breathe clean air and keep your kitchen oil-free with our <strong>professional chimney deep cleaning and repair in Hyderabad</strong>. We use specialized degreasers and jet-cleaning technology to restore suction power to factory levels.',
        highlights: [
            '✦ Deep Chemical Degreasing & Cleaning',
            '✦ Motor Winding & Suction Restoration',
            '✦ Baffle & Mesh Filter Replacement',
            '✦ Touch Panel & Sensor PCB Repair',
            '✦ LED Light & Switchboard Diagnostics',
            '✦ Ducting Pipe Installation & Repair',
            '✦ Unusual Vibration & Noise Reduction',
            '✦ Oil Collector Cup & Tray Cleaning',
        ],
        brands: ['Faber', 'Elica', 'Glen', 'Hindware', 'Kaff', 'Sunflame', 'Prestige', 'Bosch', 'Hafele', 'Siemens'],
        specializations: [
            'Filter Degreasing & Jet Clean', 'Baffle Filter Suction Boost', 'Silent Motor Technology Fix',
            'Kitchen Smoke Audit & Ducting', 'Oil-Collector Cup Fitting', 'Touch & Motion Sensor Repair',
            'LED Strip & Panel Restoration', 'Internal Blower Calibration', 'Chimney Mounting Service'
        ],
        restorationFramework: [
            { title: 'Motor Suction Peak Audit', icon: 'fas fa-fan' },
            { title: 'Chemical Degreasing Cycle', icon: 'fas fa-soap' },
            { title: 'Blower Dynamic Balance', icon: 'fas fa-arrows-spin' },
            { title: 'Touch PCB Logic Audit', icon: 'fas fa-microchip' },
            { title: 'Ducting Airflow Integrity', icon: 'fas fa-wind' },
            { title: 'Filter Mesh Restoration', icon: 'fas fa-border-all' }
        ],
        faultResolution: [
            { t: 'Weak Suction Power', i: 'fas fa-arrow-down', d: 'Filter degreasing and motor winding check.' },
            { t: 'Loud Noise / Vibration', i: 'fas fa-volume-high', d: 'Blower balancing and motor mounting fix.' },
            { t: 'Touch Panel Non-Responsive', i: 'fas fa-hand-pointer', d: 'PCB repair or sensor cleaning.' }
        ],
        subServices: [
            { id: 'ch-clean', name: 'Chimney Deep Chemical Cleaning', price: 899, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Includes oil degreasing & blower clean.' },
            { id: 'ch-motor', name: 'Chimney Motor Restoration', price: 2499, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Copper winding & suction tuning.' },
            { id: 'ch-visit', name: 'Chimney Diagnostic Visit', price: 299, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'Suction test & board inspection.' }
        ],
        inclusions: [
            'Deep chemical degreasing of mesh filters',
            'Internal blower and motor health audit',
            'Dynamic suction peak-performance test',
            'Oil-collector cup sterilization'
        ],
        exclusions: [
            'Full ducting pipe installation cost',
            'Outer cosmetic body paint/polishing',
            'Remote control unit replacement'
        ],
        reviews: [
            { user: 'Suresh N., Manikonda', text: 'Chimney suction was very weak. After deep cleaning, it is pulling smoke perfectly. Mess-free and professional service.' },
            { user: 'Ananya S., Kukatpally', text: 'Great job cleaning my Faber chimney. They removed all the grease without making a mess. Worth every rupee.' }
        ],
        spotlight: {
            title: 'Aerodynamic Suction Experts',
            desc: 'Kitchen chimneys lose efficiency as oil clogs the blower and filters. We use industrial-grade degreasers and jet cleaning to restore factory-level suction, keeping your kitchen smoke-free.'
        }
    },
    'Laptop & Desktop Repair': {
        icon: '/images/laptop_icon.png',
        photo: 'https://images.unsplash.com/photo-1544281679-32a3de086805?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wJTIwcmVwYWlyfGVufDB8fDB8fHwy',
        desc: 'Get back to work with Hyderabad’s most trusted <strong>chip-level laptop repair experts</strong>. From logic board micro-soldering to high-speed SSD upgrades, we handle all hardware and software complexities for premium laptops.',
        highlights: [
            '✦ MacBook, Windows & Gaming Laptop Fix',
            '✦ Screen / Display Panel Replacement',
            '✦ Motherboard Chip-Level Repair',
            '✦ Battery & Charging Port Replacement',
            '✦ SSD Upgrade & RAM Expansion',
            '✦ Keyboard & Trackpad Restoration',
            '✦ Overheating & Cooling Fan Service',
            '✦ Data Recovery & OS Optimization',
        ],
        brands: ['Apple', 'Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'MSI', 'Samsung', 'Microsoft Surface', 'Xiaomi'],
        specializations: [
            'Chip-Level Logic Board Repair', 'Broken Hinges & Panel Fix', 'High-Speed SSD Data Migration',
            'Gaming Laptop GPU Service', 'Liquid Spill Recovery Path', 'Battery & Charging Logic Fix',
            'BIOS Programming & Firmware', 'Overheating & Thermal Repaste', 'Micro-Soldering Components'
        ],
        restorationFramework: [
            { title: 'Logic Board Rail Analysis', icon: 'fas fa-microchip' },
            { title: 'Thermal Solution Repasting', icon: 'fas fa-temperature-arrow-down' },
            { title: 'Display Interface Calibration', icon: 'fas fa-desktop' },
            { title: 'Data Integrity & SSD Review', icon: 'fas fa-database' },
            { title: 'BIOS/EEPROM Programming', icon: 'fas fa-code' },
            { title: 'Chassis Integrity Audit', icon: 'fas fa-shield' }
        ],
        faultResolution: [
            { t: 'Dead / No Power On', i: 'fas fa-power-off', d: 'DC-in jack and power rail repair via micro-soldering.' },
            { t: 'Vertical Lines on Screen', i: 'fas fa-grip-lines-vertical', d: 'Display panel replacement or EDP cable restoration.' },
            { t: 'Laptop Hinge Broken', i: 'fas fa-link-slash', d: 'Panel body restoration and hinge mechanism fixing.' },
            { t: 'Slowness & Hanging', i: 'fas fa-gauge-low', d: 'SSD upgrade and OS optimization with thermal repaste.' },
            { t: 'Keyboard Not Typing', i: 'fas fa-keyboard', d: 'Matrix circuit testing and keyboard unit replacement.' },
            { t: 'Battery Not Charging', i: 'fas fa-battery-slash', d: 'Charging IC replacement and battery health audit.' }
        ],
        subServices: [
            { id: 'lp-form', name: 'Laptop Formatting & OS Install', price: 599, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Windows/MacOS setup with drivers.' },
            { id: 'lp-clean', name: 'Advanced Thermal Service', price: 799, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Fan cleaning & thermal repasting.' },
            { id: 'lp-ssd', name: '512GB NVMe SSD Upgrade', price: 3499, image: '/images/img_icons8_com_3d_fluency_94_forward_png.png', desc: 'Includes data migration & setup.' },
            { id: 'lp-board', name: 'Logic Board Micro-Soldering', price: 2999, image: '/images/chip_icon.png', desc: 'Fixes power & display IC issues.' },
        ]
    },
    'Professional Appliance Repair': {
        icon: '/images/service_icon.png',
        photo: '/images/unsplash_1621905251189.jpg',
        desc: 'Professional home appliance repair services in Hyderabad. Our background-verified, certified technicians bring OEM spare parts to your doorstep and fix your appliance right the first time — backed by a 180-day warranty on all parts and labour.',
        highlights: [
            '✦ Certified & Background-Verified Technicians',
            '✦ Same-Day Doorstep Service in Hyderabad',
            '✦ OEM / Genuine Spare Parts Only',
            '✦ Transparent, Upfront Pricing — No Surprises',
            '✦ 180-Day Warranty on Parts & Labour',
            '✦ 2-Hour Response Time Guarantee',
            '✦ Post-Service Quality Inspection',
            '✦ All Major Brands Covered',
        ],
        brands: ['Samsung', 'LG', 'Whirlpool', 'Bosch', 'IFB', 'Godrej', 'Panasonic', 'Haier', 'Sony', 'Philips'],
        specializations: [
            'Certified Diagnostics', 'Same-Day Repair', 'OEM Spare Parts',
            'Performance Audit', 'Safety Certification', 'Structural Fix',
            'Electronic Calibration', 'Component Restoration', 'Final Load Testing'
        ],
        restorationFramework: [
            { title: 'Electronic Control Module (PCB) Audit', icon: 'fas fa-microchip' },
            { title: 'Drive System & Engine Calibration', icon: 'fas fa-cogs' },
            { title: 'Fluid Dynamics & Drainage Optimization', icon: 'fas fa-vial' },
            { title: 'Structural Integrity & Vibration Control', icon: 'fas fa-cubes' },
            { title: 'Thermal Management & Heating Sensors', icon: 'fas fa-thermometer-half' },
            { title: 'Final Performance Stress Test', icon: 'fas fa-tachometer-alt' }
        ],
        faultResolution: [
            { t: 'Complete Power Failure', i: 'fas fa-power-off', d: 'Root-cause analysis of motherboard and fuse integrity.' },
            { t: 'Unusual Mechanical Noise', i: 'fas fa-volume-up', d: 'Bearing calibration and motor vibration dampening.' },
            { t: 'Water Leakage Fault', i: 'fas fa-tint-slash', d: 'Precision seal audit and drainage system de-clogging.' },
            { t: 'Performance Efficiency Drop', i: 'fas fa-chart-line-down', d: 'Component restoration and calibration.' }
        ]
    },
    'Insta Help': {
        icon: '/assets/Images/most-booked/insta-help.jpg',
        photo: '/assets/Images/most-booked/insta-help.jpg',
        desc: 'Need urgent help with minor household tasks? Our <strong>Insta Help service in Hyderabad</strong> connects you with a professional handyman within 30-60 minutes for small but essential fixes like shelf mounting, bulb replacement, or furniture assembly.',
        highlights: [
            '✦ 30-60 Minute Emergency Response',
            '✦ Minor Plumbing & Electrical Fixes',
            '✦ Furniture & Decor Assembly',
            '✦ Door Lock & Handle Restoration',
            '✦ Picture Frame & Shelf Mounting',
            '✦ Smart Doorbell & Lock Setup',
            '✦ Same-Day Reliable Handyman',
            '✦ Transparent Hourly Pricing',
        ],
        brands: ['All Major Brand Fixtures'],
        specializations: [
            'Emergency Handyman Support', 'Minor Electrical Diagnostics', 'Plumbing Leakage Sealing',
            'Furniture Assembly Logic', 'Wall Mounting Precision', 'Door Hardware Restoration',
            'Smart Home Gadget Sync', 'Appliance Power Check', 'Rapid Fix Multi-Tooling'
        ],
        restorationFramework: [
            { title: 'Immediate Response Protocol', icon: 'fas fa-clock-rotate-left' },
            { title: 'Multi-Point Basic Audit', icon: 'fas fa-magnifying-glass' },
            { title: 'Safe Installation Path', icon: 'fas fa-shield-check' },
            { title: 'Hardware Integrity Review', icon: 'fas fa-hammer' },
            { title: 'Functional Performance Test', icon: 'fas fa-play' },
            { title: 'Workspace Sanitization', icon: 'fas fa-broom' }
        ],
        faultResolution: [
            { t: 'Loose Door Handle', i: 'fas fa-door-open', d: 'Tightening and internal spring calibration.' },
            { t: 'Picture Frame Mounting', i: 'fas fa-image', d: 'Leveling and heavy-duty fixing protocol.' },
            { t: 'Minor Water Leak', i: 'fas fa-droplet', d: 'Washer replacement and sealant application.' }
        ],
        subServices: [
            { id: 'insta-visit', name: 'Insta-Help Diagnostic Visit', price: 99, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'Rapid 30-min arrival for task scoping.' },
            { id: 'handy-hour', name: 'General Handyman (1 Hour)', price: 299, image: '/images/img_icons8_com_3d_fluency_94_handshake_png.png', desc: 'Up to 60 mins of multi-tasking work.' },
        ]
    },
    'Foam-jet AC Service': {
        icon: '/images/ac_icon.png',
        photo: '/assets/Images/most-booked/foam-jet-ac-service.jpg',
        desc: 'Experience supercharged cooling with our <strong>High-Pressure Foam-Jet AC Service in Hyderabad</strong>. Unlike traditional water washes, our foam-based technology reaches deep inside the cooling coils to remove 99.9% of dust and bacteria.',
        highlights: [
            '✦ High-Pressure 2X Foam Cleaning',
            '✦ Antimicrobial Cooling Coil Treatment',
            '✦ Drain Pipe De-clogging & Cleaning',
            '✦ Outdoor Unit High-Jet Restoration',
            '✦ Improved Airflow & Air Quality',
            '✦ Reduces Electricity Consumption',
            '✦ 60-Day Service Guarantee',
            '✦ Professional Diagnostic Health Scan',
        ],
        brands: ['Voltas', 'LG', 'Daikin', 'Lloyd', 'Samsung', 'Blue Star', 'Hitachi'],
        specializations: [
            'Deep-Foam Coil Restoration', 'Antimicrobial Airway Clean', 'Drainage Flow Pressure Test',
            'Outdoor Fin Optimization', 'Airflow Velocity Calibration', 'Electrical Contact Polish',
            'Capacitor & Sensor Audit', 'Filter Mesh Restoration', 'Inverter PCB Dust Removal'
        ],
        restorationFramework: [
            { title: 'Pre-Service Cooling Audit', icon: 'fas fa-thermometer' },
            { title: 'High-Pressure Foam Blast', icon: 'fas fa-spray-can-sparkles' },
            { title: 'Jet-Wash Coil Restoration', icon: 'fas fa-wind' },
            { title: 'Drainage System Hygiene', icon: 'fas fa-droplet' },
            { title: 'Electrical Load Analysis', icon: 'fas fa-bolt' },
            { title: 'Post-Service Temp Check', icon: 'fas fa-snowflake' }
        ],
        faultResolution: [
            { t: 'Low Cooling / Dust', i: 'fas fa-temperature-up', d: 'Deep foam cleaning and fin restoration.' },
            { t: 'Internal Water Leaking', i: 'fas fa-tint-slash', d: 'Drain tray and pipe high-pressure flush.' },
            { t: 'Bad Odor from Vents', i: 'fas fa-trash-can', d: 'Antimicrobial treatment and coil sanitization.' }
        ],
        subServices: [
            { id: 'foam-ac-single', name: 'Premium Foam-Jet (Split AC)', price: 599, image: '/assets/Images/most-booked/foam-jet-ac-service.jpg', desc: 'Full indoor & outdoor jet restoration.' },
            { id: 'foam-ac-pack', name: 'Elite Multi-AC Jet (2 Units)', price: 1099, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Discounted pack for multiple units.' },
        ]
    },
    'Intense Bathroom Cleaning': {
        icon: '/images/maintenance_icon.png',
        photo: '/assets/Images/most-booked/intense-bathroom-cleaning.jpg',
        desc: 'Get your bathrooms sparkling again with our <strong>Professional Intense Bathroom Cleaning in Hyderabad</strong>. We use mechanised equipment and eco-friendly chemicals to remove hard water stains, salt deposits, and deep-seated grime.',
        highlights: [
            '✦ Hard Water & Salt Stain Removal',
            '✦ Floor & Wall Tile Mechanised Scrubbing',
            '✦ Toilet Bowl & Commode Sanitization',
            '✦ Tap & Fixture Chrome Polishing',
            '✦ Exhaust Fan & Window Degreasing',
            '✦ Drain Cleaning & Odor Removal',
            '✦ Mirror & Glass Partition Cleaning',
            '✦ Anti-Bacterial Steaming Protocol',
        ],
        brands: ['Jaquar', 'Kohler', 'Hindware', 'Cera', 'Parryware', 'TOTO'],
        specializations: [
            'Hard Water Descaling Logic', 'Tile Grout Steam Cleaning', 'Chrome Fixture Restoration',
            'Glass Limescale Removal', 'Drainage Hygiene Audit', 'Commode Sanitization Hub',
            'Exhaust Airflow Optimization', 'Acid-Free Chemical Usage', 'Vertical Surface Scrubbing'
        ],
        restorationFramework: [
            { title: 'Surface Type Identification', icon: 'fas fa-layer-group' },
            { title: 'Chemical Pre-Soak Cycle', icon: 'fas fa-soap' },
            { title: 'Mechanised Buffing Phase', icon: 'fas fa-sync' },
            { title: 'Detail Corner Cleaning', icon: 'fas fa-broom' },
            { title: 'Steam Sanitization Cycle', icon: 'fas fa-cloud' },
            { title: 'High-Gloss Fixture Polish', icon: 'fas fa-sparkles' }
        ],
        faultResolution: [
            { t: 'Salt Deposits on Taps', i: 'fas fa-tint', d: 'Limescale removal and mirror polish.' },
            { t: 'Yellow Stains on Tiles', i: 'fas fa-palette', d: 'Heavy-duty mechanised floor scrubbing.' },
            { t: 'Clogged Floor Drains', i: 'fas fa-filter', d: 'Deep cleaning and hair-trap restoration.' }
        ],
        subServices: [
            { id: 'bc-single', name: 'Single Bathroom Intense Clean', price: 499, image: '/assets/Images/most-booked/intense-bathroom-cleaning.jpg', desc: 'Restores sparkle to tiles & fixtures.' },
            { id: 'bc-double', name: 'Double Bathroom Combo Clean', price: 923, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Complete sanitization for two units.' },
        ]
    },
    'Haircut for Men': {
        globalDiscount: 21,
        icon: '/images/service_icon.png',
        photo: '/assets/Images/most-booked/haircut-for-men.jpg',
        desc: 'Skip the salon queue and experience <strong>Premium Men’s Grooming at home in Hyderabad</strong>. Our certified stylists bring a complete salon kit including sterilized tools and mess-free capes for a professional cut.',
        highlights: [
            '✦ Professional Stylist Selection',
            '✦ mess-Free Grooming Protocol',
            '✦ Sterilized Kits & Disposables',
            '✦ Classic, Fade & Modern Styles',
            '✦ Beard Shaping & Styling Add-on',
            '✦ Shoulder & Head Relaxer Massage',
            '✦ Post-Service Cleaning Included',
            '✦ Same-Day Slot Availability',
        ],
        brands: ['Wahl', 'Loreal', 'Gillette', 'Philips'],
        specializations: [
            'Modern Fade Haircut Logic', 'Beard Sculpting Precision', 'Scalp Health Consultation',
            'Sterilized Tool Protocol', 'Anti-Dandruff Treatment', 'Skin-Safe Razor Finish',
            'Client Profile Styling', 'Rapid Grooming Workflow', 'Mess-Free Clean Protocol'
        ],
        restorationFramework: [
            { title: 'Style Consultation Hub', icon: 'fas fa-comments' },
            { title: 'Tool Sterilization Cycle', icon: 'fas fa-microbe-slash' },
            { title: 'Precision Sculpting Phase', icon: 'fas fa-scissors' },
            { title: 'Detail Lining & Finish', icon: 'fas fa-grip-lines' },
            { title: 'Stress Relief Massage', icon: 'fas fa-spa' },
            { title: 'Post-Grooming Sanitation', icon: 'fas fa-broom' }
        ],
        faultResolution: [
            { t: 'Uneven Hair Length', i: 'fas fa-ruler', d: 'Correction via precision layering techniques.' },
            { t: 'Poor Beard Shaping', i: 'fas fa-user-tie', d: 'Symmetrical contouring and edging.' },
            { t: 'Salon Hygiene Concerns', i: 'fas fa-shield-virus', d: '100% disposable capes and UV-sterilized tools.' }
        ],
        subServices: [
            { id: 'hc-regular', name: 'Standard Hair Cut', price: 200, image: '/images/img_icons8_com_3d_fluency_94_scissors_png.png', desc: 'Professional classic haircut with style consultation.' },
            { id: 'hc-style', name: 'Change of Style / Fade', price: 300, image: '/images/img_icons8_com_3d_fluency_94_scissors_png.png', desc: 'Transform your look with a trendy fade or complete style change.' },
            { id: 'hc-shave', name: 'Regular Clean Shave', price: 80, image: '/images/img_icons8_com_3d_fluency_94_razor_png.png', desc: 'Smooth and clean shave using sterilized tools.' },
            { id: 'hc-head-shave', name: 'Full Head Shave', price: 200, image: '/images/img_icons8_com_3d_fluency_94_razor_png.png', desc: 'Traditional head shave for a clean look.' },
            { id: 'hc-kids', name: 'Kids Hair Cut (Up to 10yr)', price: 120, image: '/images/img_icons8_com_3d_fluency_94_scissors_png.png', desc: 'Special care haircut for children with a friendly approach.' },
            { id: 'hc-beard-design', name: 'Beard Design & Sculpting', price: 200, image: '/images/img_icons8_com_3d_fluency_94_razor_png.png', desc: 'Precision beard shaping to match your face structure.' },
            { id: 'hc-beard-trim', name: 'Quick Beard Trim', price: 100, image: '/images/img_icons8_com_3d_fluency_94_razor_png.png', desc: 'Fast and efficient beard length adjustment.' },
            { id: 'hc-color-grey', name: 'Grey Coverage (Hair Only)', price: 800, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Professional hair color to hide greys naturally.' },
            { id: 'hc-color-streak', name: 'Hair Streak (Per Streak)', price: 200, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Add a pop of color with single or multiple streaks.' },
            { id: 'hc-color-beard', name: 'Beard Coloring', price: 300, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Match your beard with your hair for a complete look.' },
            { id: 'hc-straight', name: 'Hair Straightening / Smoothening', price: 4500, image: '/images/img_icons8_com_3d_fluency_94_scissors_png.png', desc: 'Professional high-quality hair straightening for a permanent sleek look.' },
            { id: 'hc-massage-wash', name: 'Indian Head Massage (With Wash)', price: 400, image: '/images/img_icons8_com_3d_fluency_94_spa_png.png', desc: 'Deeply relaxing head massage followed by a professional hair wash.' },
            { id: 'hc-massage-basic', name: 'Indian Head Massage (Dry)', price: 350, image: '/images/img_icons8_com_3d_fluency_94_spa_png.png', desc: 'Traditional stress-relief head massage for instant relaxation.' },
            { id: 'hc-spa-classic', name: 'Classic Hair Spa', price: 750, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Deep conditioning treatment to restore hair health and shine.' },
            { id: 'hc-treatment-anti', name: 'Anti-Dandruff / Hairfall Treatment', price: 1300, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Professional clinical treatment targeting scalp issues.' }
        ],
        inclusions: [
            'Professional certified stylist at your doorstep',
            'Mess-free grooming with disposable cape',
            'UV-sterilized scissors & razors',
            'Post-service cleanup included'
        ],
        exclusions: [
            'Hair color products not included (charged separately)',
            'Chemical treatments like smoothening require advance booking',
            'Kids under 5 years require guardian consent'
        ],
        reviews: [
            { user: 'Suresh R., Kondapur', text: 'Got a fade haircut at home — stylist was super skilled and tools were all clean. My kids loved it too!' },
            { user: 'Arun T., HITEC City', text: 'Excellent beard design. The stylist knew exactly what I wanted. Will book again for sure!' }
        ],
        spotlight: {
            title: 'Expert Stylists, Salon Quality at Home',
            desc: 'Our stylists are trained in modern barbering techniques and hygiene protocols. Each visit includes sterilized tools, mess-free service, and a style consult — all at your doorstep.'
        }
    },
    'British Rose Pedicure': {
        icon: '/images/service_icon.png',
        photo: '/assets/Images/most-booked/british-rose-pedicure.jpg',
        desc: 'Treat your feet to the ultimate relaxation with our <strong>British Rose Pedicure in Hyderabad</strong>. This luxury treatment uses organic rose extracts and deep-moisturizing oils to soften skin and soothe tired muscles.',
        highlights: [
            '✦ Organic British Rose Extracts',
            '✦ Deep-tissue Foot Massage',
            '✦ Callus & Dead Skin Removal',
            '✦ Cuticle Care & Nail Shaping',
            '✦ Relaxing Hot Towel Treatment',
            '✦ Long-Lasting Premium Polish',
            '✦ Sterilized Hygiene Kit Included',
            '✦ Professional Beauty Therapist',
        ],
        brands: ['The Body Shop', 'OPI', 'Lotus Herbals', 'VLCC'],
        specializations: [
            'Organic Skincare Protocol', 'Advanced Callus Removal', 'Relaxation Reflexology',
            'Hygiene First Sterilization', 'Nail Health Diagnostics', 'Moisturizing Oil Therapy',
            'Luxury Aroma Experience', 'Vertical Foot Spa Path', 'Premium Finishing Logic'
        ],
        restorationFramework: [
            { title: 'Foot Soak & Softening', icon: 'fas fa-bowl-water' },
            { title: 'Deep Exfoliation Cycle', icon: 'fas fa-scrub' },
            { title: 'Callus Removal Phase', icon: 'fas fa-eraser' },
            { title: 'Therapeutic Foot Massage', icon: 'fas fa-hands-bubbles' },
            { title: 'Hydrating Rose Mask', icon: 'fas fa-spa' },
            { title: 'Nail Grooming & Polish', icon: 'fas fa-palette' }
        ],
        faultResolution: [
            { t: 'Cracked / Dry Heels', i: 'fas fa-shoe-prints', d: 'Intense moisturizing and callus removal.' },
            { t: 'Tired / Aching Feet', i: 'fas fa-person-running', d: 'Reflexology-based deep tissue massage.' },
            { t: 'Brittle / Chipped Nails', i: 'fas fa-hand', d: 'Nutrient-rich oil treatment and shaping.' }
        ],
        subServices: [
            { id: 'pd-rose', name: 'Luxury British Rose Pedicure', price: 759, image: '/assets/Images/most-booked/british-rose-pedicure.jpg', desc: 'Complete 60-min foot relaxation.' },
            { id: 'pd-mani', name: 'Glow Manicure (Add-on)', price: 499, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Hand whitening & softening treatment.' },
        ]
    },
    'Decor Installation': {
        icon: '/images/maintenance_icon.png',
        photo: '/assets/Images/most-booked/decor-installation.jpg',
        desc: 'Transform your living space with our <strong>Professional Decor Installation Services in Hyderabad</strong>. From heavy paintings and mirrors to designer wallpaper and curtain rods, we ensure secure and aesthetic mounting.',
        highlights: [
            '✦ heavy mirror & Painting Mounting',
            '✦ Curtain Rod & Blind Installation',
            '✦ Designer Wallpaper Application',
            '✦ Wall Shelving & Floating Units',
            '✦ Precise Laser Leveling Technology',
            '✦ Concealed Wiring & Cable Mgmt',
            '✦ Robust Support & Bracket Audit',
            '✦ Post-Installation Cleanup',
        ],
        brands: ['IKEA', 'Asian Paints', 'D\'Decor', 'Stanley'],
        specializations: [
            'Laser Alignment Precision', 'Heavy-Duty Wall Anchoring', 'Wallpaper Logic & Fitting',
            'Mirror Safety Integration', 'Curtain Rod Leveling Path', 'Cable Management Hub',
            'Aesthetic Placement Audit', 'Masonry & Drywall Drilling', 'Modular Decor Assembly'
        ],
        restorationFramework: [
            { title: 'Laser Alignment Audit', icon: 'fas fa-crosshairs' },
            { title: 'Wall Integrity Analysis', icon: 'fas fa-wall' },
            { title: 'Heavy Bracket Anchoring', icon: 'fas fa-screw' },
            { title: 'Decor Mounting Phase', icon: 'fas fa-image' },
            { title: 'Load Bearing Verification', icon: 'fas fa-weight-hanging' },
            { title: 'Finish & Level Review', icon: 'fas fa-check-double' }
        ],
        faultResolution: [
            { t: 'Tilted / Uneven Decor', i: 'fas fa-arrows-left-right', d: 'Correction using digital laser leveling.' },
            { t: 'Loose Shelf Brackets', i: 'fas fa-screwdriver', d: 'Replacement with industrial-grade anchors.' },
            { t: 'Air Bubbles in Wallpaper', i: 'fas fa-circle-notch', d: 'Smoothing and adhesive restoration protocol.' }
        ],
        subServices: [
            { id: 'dc-mirror', name: 'Mirror / Painting Install', price: 199, image: '/assets/Images/most-booked/decor-installation.jpg', desc: 'Secure mounting for single large item.' },
            { id: 'dc-rod', name: 'Curtain Rod (Pair) Fitting', price: 299, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Includes dual rod laser installation.' },
            { id: 'dc-visit', name: 'Decor Placement Consultation', price: 79, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'Laser marking & layout planning.' },
        ]
    },
    'Automatic Machine Check-up': {
        icon: '/images/washing_machine_icon.png',
        photo: '/assets/Images/most-booked/automatic-top-load-machine-check-up.png',
        desc: 'Prevent future breakdowns with our <strong>Premium Automatic Washing Machine Health Check in Hyderabad</strong>. Our technicians perform a 15-point diagnostic scan to identify hidden motor, pump, and PCB issues.',
        highlights: [
            '✦ 15-Point Mechanical Diagnostic',
            '✦ Drum Balance & Suspension Audit',
            '✦ PCB Sensor Calibration & Scan',
            '✦ Drain Pump & Hose Flow Test',
            '✦ Electrical Leakage & Safety Test',
            '✦ Water Level Sensor Check-up',
            '✦ Motor Torque & Belt Integrity',
            '✦ Detailed Performance Report',
        ],
        brands: ['Samsung', 'LG', 'Whirlpool', 'IFB', 'Bosch', 'Haier'],
        specializations: [
            'Drum Bearing Pulse Audit', 'PCB Logic Circuit Analysis', 'Motor Torque Load Test',
            'Water Pressure Sensor Fix', 'Suspension Rod Aging Scan', 'Drainage Flow Calibration',
            'Electrical Earthing Audit', 'Software Error Log Clear', 'Anti-Vibration Pad Tuning'
        ],
        restorationFramework: [
            { title: 'Pre-Load Bearing Scan', icon: 'fas fa-stethoscope' },
            { title: 'PCB Logic Performance', icon: 'fas fa-microchip' },
            { title: 'Hydraulic Flow Load Test', icon: 'fas fa-water' },
            { title: 'Drum Alignment Audit', icon: 'fas fa-sync' },
            { title: 'Electrical Safety Continuity', icon: 'fas fa-bolt' },
            { title: 'Calibration Report Hub', icon: 'fas fa-file-waveform' }
        ],
        faultResolution: [
            { t: 'Loud Noise / Vibration', i: 'fas fa-volume-high', d: 'Suspension and foot balance adjustment.' },
            { t: 'Machine Taking Long Time', i: 'fas fa-clock', d: 'Inlet valve and sensor cleaning protocol.' },
            { t: 'Water Drainage Slow', i: 'fas fa-faucet-drip', d: 'Pump filter cleaning and draine audit.' }
        ],
        subServices: [
            { id: 'mc-check', name: 'Full Machine Health Audit', price: 199, desc: 'Complete 15-point diagnostic scan.' },
            { id: 'mc-descaling', name: 'Machine Drum Descaling', price: 599, desc: 'Removes lime scale & restores hygiene.' },
        ]
    },
    'Mosquitoes Control': {
        icon: '/images/service_icon.png',
        photo: '/assets/Images/pest-control/mosquitos-controls.png',
        desc: 'Protect your family from Dengue, Malaria, and Zika with our <strong>Scientific Mosquito Control in Hyderabad</strong>. We use WHO-approved odorless sprays and thermal fogging to eliminate mosquitoes from their breeding sources.',
        highlights: [
            '✦ Indoor Residual Spraying (IRS)',
            '✦ Larvacidal Treatment for Breeding',
            '✦ WHO-Approved Odorless Chemicals',
            '✦ Thermal Fogging for Open Areas',
            '✦ Anti-Mosquito Drainage Cleaning',
            '✦ Safe for Children & Pets',
            '✦ 30-Day Protection Guarantee',
            '✦ Professional Pest Audit included',
        ],
        brands: ['Bayer', 'Syngenta', 'Godrej', 'PCI'],
        specializations: [
            'Larval Source Management', 'Indoor Surface Residual', 'Aerosol Space Treatment',
            'Growth Regulator Logic', 'Environmental Audit Hub', 'Mosquito Species Mapping',
            'Breeding Site Sealing', 'Pet-Safe Chemical Path', 'Outdoor Fogging Dynamics'
        ],
        restorationFramework: [
            { title: 'Pest Density Analysis', icon: 'fas fa-bug' },
            { title: 'Larvicidal Point Focus', icon: 'fas fa-droplet' },
            { title: 'Surface Residual Coating', icon: 'fas fa-spray-can' },
            { title: 'Space Mist Treatment', icon: 'fas fa-wind' },
            { title: 'Drainage Habitat Clean', icon: 'fas fa-biohazard' },
            { title: 'Post-Treatment Audit', icon: 'fas fa-shield-virus' }
        ],
        faultResolution: [
            { t: 'Swarm in Living Areas', i: 'fas fa-house', d: 'Indoor residual spray and misting.' },
            { t: 'Breeding in Standing Water', i: 'fas fa-water', d: 'Larvacidal oil and regulator granules.' },
            { t: 'Open Area Infestation', i: 'fas fa-tree', d: 'Thermal fogging and habitat destruction.' }
        ],
        subServices: [
            { id: 'mq-net', name: 'Classic Window Shield', price: 149, image: '/assets/Images/pest-control/mosquitos-controls.png', desc: 'Velcro-based mesh installation.' },
            { id: 'mq-fog', name: 'Professional Barrier Fogging', price: 999, image: '/assets/Images/pest-control/mosquitos-controls.png', desc: 'Garden & balcony area protection.' },
        ]
    },
    'Termite Control': {
        icon: '/images/service_icon.png',
        photo: '/assets/Images/pest-control/termite-control.png',
        desc: 'Save your furniture and home structure with our <strong>Advanced Anti-Termite Treatment in Hyderabad</strong>. We use the "Drill-Fill-Seal" technology and lethal non-repellent chemicals to eradicate entire termite colonies.',
        highlights: [
            '✦ Drill-Fill-Seal Post Construction',
            '✦ Non-Repellent Chemical Barricade',
            '✦ Wood & Furniture Protection Spray',
            '✦ Wall-to-Floor Junction Injection',
            '✦ Odorless & Highly Effective',
            '✦ 5-Year Service Warranty',
            '✦ Free Site Inspection & Audit',
            '✦ Govt. Approved Toxicologist Service',
        ],
        brands: ['Bayer (Termidor)', 'FMC', 'Syngenta'],
        specializations: [
            'Subterranean Colony Eradication', 'Precision Drilling Path', 'Chemical Barrier Integration',
            'Furniture Integrity Audit', 'Moisture Source Detection', 'Wall Injection Logic',
            'Post-Construction Shielding', 'Non-Toxic Barrier Path', 'Structural Protection Hub'
        ],
        restorationFramework: [
            { title: 'Infestation Mapping', icon: 'fas fa-map-location' },
            { title: 'Precision Drilling Phase', icon: 'fas fa-drill' },
            { title: 'Chemical Injection Cycle', icon: 'fas fa-syringe' },
            { title: 'Drill Hole Sealing Hub', icon: 'fas fa-circle-check' },
            { title: 'Structural spray Shield', icon: 'fas fa-shield' },
            { title: 'Follow-up Monitoring', icon: 'fas fa-clock' }
        ],
        faultResolution: [
            { t: 'Mud Tubes on Walls', i: 'fas fa-grip-lines-vertical', d: 'Injection treatment and source removal.' },
            { t: 'Hollow Sounding Wood', i: 'fas fa-tree', d: 'Internal chemical filling and sealing.' },
            { t: 'Sawdust Near Furniture', i: 'fas fa-dumpster', d: 'Surface spray and internal injection.' }
        ],
        subServices: [
            { id: 'tm-check', name: 'Termite Site Inspection', price: 0, image: '/assets/Images/pest-control/termite-control.jpeg', desc: 'Free diagnostic & damage audit.' },
            { id: 'tm-treat', name: 'Full-House Warranty Treat', price: 4999, image: '/assets/Images/pest-control/termite-control.jpeg', desc: 'Includes 5-year protection & warranty.' },
        ]
    },
    'Woodborer Control': {
        icon: '/images/service_icon.png',
        photo: '/assets/Images/pest-control/woodborder-control.jpeg',
        desc: 'Is your expensive wooden furniture turning into powder? Our <strong>Professional Woodborer Control in Hyderabad</strong> targets the larvae deep within the wood using specialized syringes and oil-based preservatives.',
        highlights: [
            '✦ Precision Syringe Injection',
            '✦ Oil-Based Wood Preservatives',
            '✦ Targeted Larval Eradication',
            '✦ Surface protection Coating',
            '✦ Odorless & Stain-Free Process',
            '✦ 100% Effective Larvicide',
            '✦ 180-Day Comprehensive Warranty',
            '✦ Certified Pest Control Experts',
        ],
        brands: ['Bayer', 'Adbright', 'Dr. Fixit'],
        specializations: [
            'Larval Tunnel Identification', 'Internal Wood Saturation', 'Anti-Powder Preservation',
            'Furniture Coating Logic', 'Moisture Content Audit', 'Syringe Delivery Precision',
            'Stain-Free Chemical Path', 'Timber Health Diagnostics', 'Breeding Cycle Interruption'
        ],
        restorationFramework: [
            { title: 'Detection of Bore Holes', icon: 'fas fa-eye' },
            { title: 'Precision Syringing Cycle', icon: 'fas fa-syringe' },
            { title: 'Internal Saturate Phase', icon: 'fas fa-bottle-droplet' },
            { title: 'Surface Protection Coat', icon: 'fas fa-layer-group' },
            { title: 'Exit Hole Sealing Hub', icon: 'fas fa-circle-stop' },
            { title: 'Post-Process Monitoring', icon: 'fas fa-list-check' }
        ],
        faultResolution: [
            { t: 'Fine Yellow Powder', i: 'fas fa-snowflake', d: 'Internal larval syringing and removal.' },
            { t: 'Tiny Pinsize Holes', i: 'fas fa-bullseye', d: 'Targeted injection of wood preservative.' },
            { t: 'Clicking Sound in Wood', i: 'fas fa-volume-low', d: 'Deep saturation of larval galleries.' }
        ],
        subServices: [
            { id: 'wb-single', name: 'Single Furniture Protect', price: 899, image: '/assets/Images/pest-control/woodborder-control.jpeg', desc: 'Larval treatment for 1 wardrobe/unit.' },
            { id: 'wb-full', name: 'Complete Wooden Home Pack', price: 2499, image: '/assets/Images/pest-control/woodborder-control.jpeg', desc: 'Covers all wooden assets with warranty.' },
        ]
    },
    'Commercial Pest Control': {
        icon: '/images/service_icon.png',
        photo: '/assets/Images/pest-control/commercial-pest-control.jpeg',
        desc: 'Maintain hygiene and compliance with our <strong>B2B Commercial Pest Control in Hyderabad</strong>. We serve restaurants, IT parks, warehouses, and hospitals with integrated pest management (IPM) strategies.',
        highlights: [
            '✦ Integrated Pest Management (IPM)',
            '✦ Food Safety (HACCP) Compliance',
            '✦ Gel Treatment for IT/Office Areas',
            '✦ Rat Baiting & Rodent Control',
            '✦ Periodic Maintenance Visits',
            '✦ Audit-Ready Documentation',
            '✦ 24/7 Emergency Support',
            '✦ Customized Industry Solutions',
        ],
        brands: ['EcoLab', 'Bayer', 'Rentokil'],
        specializations: [
            'HACCP Compliance Logic', 'IPM Strategic Auditing', 'Gel Baiting Precision',
            'Rodent Perimeter Shield', 'Drainage Sanitization Hub', 'Logbook Maintenance Path',
            'Zero-Odor Chemical Plan', 'Warehouse Vector Control', 'Kitchen Hygiene Recovery'
        ],
        restorationFramework: [
            { title: 'Strategic Site Mapping', icon: 'fas fa-map' },
            { title: 'Pest Buffer Zone Analysis', icon: 'fas fa-maximize' },
            { title: 'Targeted Gel & Baiting', icon: 'fas fa-vial' },
            { title: 'Boundary Shielding Phase', icon: 'fas fa-shield' },
            { title: 'Digital Audit Reporting', icon: 'fas fa-file-contract' },
            { title: 'Compliance verification', icon: 'fas fa-certificate' }
        ],
        faultResolution: [
            { t: 'Warehouse Rodent Issue', i: 'fas fa-boxes-stacked', d: 'Multi-catch baiting and structural sealing.' },
            { t: 'Office Cockroach Problem', i: 'fas fa-desktop', d: 'Gel-based non-invasive treatment.' },
            { t: 'Restaurant Hygiene Audit', i: 'fas fa-utensils', d: 'Night-time sanitation and barrier spray.' }
        ],
        subServices: [
            { id: 'com-inspect', name: 'B2B Compliance Audit', price: 0, image: '/assets/Images/pest-control/commercial-pest-control.jpeg', desc: 'FSSAI/HACCP readiness check.' },
            { id: 'com-quarterly', name: 'Quarterly Shield Contract', price: 14999, image: '/assets/Images/pest-control/commercial-pest-control.jpeg', desc: '4 services per year with auditing.' },
        ]
    },
    'Bed Bugs Control': {
        icon: '/images/service_icon.png',
        photo: '/assets/Images/pest-control/bed-bugs.jpeg',
        desc: 'Regain your sleep with our <strong>Advanced Bed Bug Eradication in Hyderabad</strong>. We use a combination of hot steam treatment and targeted insecticide sprays to kill bed bugs and their eggs instantly.',
        highlights: [
            '✦ Two-Visit Intensive Treatment',
            '✦ Steam Sanitization of Mattresses',
            '✦ Odorless & Safe Synthetic Sprays',
            '✦ Crevice & Joint Deep Injection',
            '✦ Furniture & Curtain Treatment',
            '✦ egg-Cycle Disturbance protocol',
            '✦ 60-Day Protection Guarantee',
            '✦ Expert Infestation Identification',
        ],
        brands: ['Syngenta', 'Bayer', 'BASF'],
        specializations: [
            'Egg-Cycle Breaking Logic', 'High-Temp Steam Sterility', 'Crevice Injection Precision',
            'Textile-Safe Insecticide', 'Luggage Sanitization Path', 'Mattress Protection Hub',
            'Night-Active Behavior Map', 'Second-Generation Larvicide', 'Safe Sleeping Protocol'
        ],
        restorationFramework: [
            { title: 'Nesting Site Detection', icon: 'fas fa-search' },
            { title: 'High-Temp Steam Cycle', icon: 'fas fa-cloud' },
            { title: 'Insecticide Spray Phase', icon: 'fas fa-spray-can' },
            { title: 'Crevice Sealing Audit', icon: 'fas fa-grip-lines' },
            { title: 'Egg Elimination Protocol', icon: 'fas fa-circle-minus' },
            { title: '15-Day Follow-up Visit', icon: 'fas fa-calendar-alt' }
        ],
        faultResolution: [
            { t: 'Bites on Body / Itching', i: 'fas fa-person-dots-from-line', d: 'Immediate mattress steam and spray.' },
            { t: 'Black Spots on Mattress', i: 'fas fa-circle', d: 'Deep sanitization and insecticide injection.' },
            { t: 'Infested Sofa / Chairs', i: 'fas fa-couch', d: 'Full furniture treatment and barrier coating.' }
        ],
        subServices: [
            { id: 'bb-treat', name: 'Full-House Terminate (2 Visit)', price: 1299, image: '/assets/Images/pest-control/bed-bugs.jpeg', desc: 'Lethal treatment for bedroom area.' },
            { id: 'bb-check', name: 'Professional Audit & Map', price: 0, image: '/assets/Images/pest-control/bed-bugs.jpeg', desc: 'Free site inspection for hideouts.' }
        ],
        inclusions: [
            'Intensive two-visit eradication cycle',
            'High-temperature steam sanitization',
            'Scent-free human-safe chemical spray',
            'Full furniture and crevice injection'
        ],
        exclusions: [
            'Heavy structural furniture dismantling',
            'Off-site luggage sanitization',
            'Full laundry/dry-cleaning service'
        ],
        reviews: [
            { user: 'Sanjay B., Kompally', text: 'Had a severe bed bug issue. The two-visit treatment worked like a charm. Finally sleeping in peace!' },
            { user: 'Reema K., Madhapur', text: 'Professional and thorough. They sanitized the mattresses and sprayed all corners. Highly effective.' }
        ],
        spotlight: {
            title: 'Sleep-Safe Sanitization',
            desc: 'Bed bug eradication is about breaking the egg cycle. Our technicians use a scientific multi-stage approach combining thermal and chemical treatments to ensure your home is bug-free for good.'
        }
    },
    'Cockroach Control': {
        icon: '/images/service_icon.png',
        photo: '/assets/Images/pest-control/cock-roch-control.jpeg',
        desc: 'Say goodbye to pests with our <strong>Professional Cockroach Gel Treatment in Hyderabad</strong>. Our odorless gel technology works through a "Cascade Effect" where one cockroach infects the whole nest, ensuring 100% elimination.',
        highlights: [
            '✦ Odorless Gel Baiting Technology',
            '✦ No Need to Empty Kitchen Cabinets',
            '✦ Targeted Hiding Spot Application',
            '✦ Safe for Children & Food Areas',
            '✦ Drain & Pipe high-Pressure Spray',
            '✦ Eradicates Nests & Eggs',
            '✦ 90-Day Satisfaction Warranty',
            '✦ Quick 30-Minute Treatment',
        ],
        brands: ['Bayer (Maxforce)', 'BASF (Goliath)'],
        specializations: [
            'Gel-Bait Cascade Logic', 'Kitchen Cabinet Sanitization', 'Drainage Perimeter Shield',
            'Hide-out Mapping Precision', 'Safe-to-Food Chemical Path', 'Breeding Site Destruction',
            'Pantry Integrity Audit', 'Zero-Odor Application Path', 'Anti-Reinfestation Protocol'
        ],
        restorationFramework: [
            { title: 'Critical Point Identification', icon: 'fas fa-bullseye' },
            { title: 'Odorless Gel Application', icon: 'fas fa-droplet' },
            { title: 'Drainage Perimeter Spray', icon: 'fas fa-shield' },
            { title: 'Hiding Spot Saturation', icon: 'fas fa-circle-nodes' },
            { title: 'Nest Eradication Phase', icon: 'fas fa-biohazard' },
            { title: 'Client Hygiene Advisory', icon: 'fas fa-clipboard-check' }
        ],
        faultResolution: [
            { t: 'Seen in Kitchen Cabinets', i: 'fas fa-kitchen-set', d: 'Strategic gel placement in hinges and corners.' },
            { t: 'Coming from Drains', i: 'fas fa-faucet-drip', d: 'High-pressure boundary spray application.' },
            { t: 'Egg Cases behind Fridge', i: 'fas fa-egg', d: 'Physical removal and residual spray coating.' }
        ],
        subServices: [
            { id: 'cc-basic', name: 'Kitchen & Bathroom Gel', price: 699, image: '/assets/Images/pest-control/cock-roch-control.jpeg', desc: 'Effective for targeted kitchen area.' },
            { id: 'cc-full', name: 'Complete Home Protection', price: 999, image: '/assets/Images/pest-control/cock-roch-control.jpeg', desc: 'Full house gel treatment & drainage spray.' }
        ],
        inclusions: [
            'Odorless gel baiting in all cabinets',
            'High-pressure drainage perimeter spray',
            'Egg-case removal and barrier coating',
            'Pantry and food-area safety audit'
        ],
        exclusions: [
            'External yard or garden pest control',
            'Major structural sealing of wall cracks',
            'Post-treatment cleaning of cabinets'
        ],
        reviews: [
            { user: 'Amit G., Manikonda', text: 'The gel treatment is amazing. No smell at all and within 3 days all cockroaches were gone. Very tidy work.' },
            { user: 'Lakshmi V., Tarnaka', text: 'Excellent service. They reached all the difficult corners behind the fridge and oven. No more pests!' }
        ],
        spotlight: {
            title: 'Cascade Elimination Tech',
            desc: 'Our roach control utilizes advanced baiting logic. We use non-repellent gels that cockroaches carry back to their nests, triggering a lethal chain reaction that eliminates the entire colony.'
        }
    },
    'Invisible Grille': {
        icon: '/images/service_icon.png',
        photo: '/artifacts/invisible_grille_balcony_1774010770896.png',
        desc: 'Ensure your family\'s safety without compromising on the view with our <strong>Invisible Grille</strong> installation in Hyderabad. Made of high-tensile marine-grade stainless steel cables, they offer unblocked balcony views and maximum child safety.',
        highlights: [
            '✦ 316 Grade Stainless Steel Cables',
            '✦ Anti-Rust & Weather Proof',
            '✦ Nylon / Teflon Coated for Safety',
            '✦ Perfect for High-Rise Balconies',
            '✦ Quick, Clean Installation'
        ],
        brands: ['Premium Safety Installers'],
        specializations: ['Balcony Enclosure', 'Staircase Safety', 'Window Grille'],
        restorationFramework: [
            { title: 'Site Inspection', icon: 'fas fa-search' },
            { title: 'Measurement', icon: 'fas fa-ruler' },
            { title: 'Cable Tensioning', icon: 'fas fa-wrench' }
        ],
        faultResolution: [
            { t: 'Child Safety Concern', i: 'fas fa-child', d: 'Sturdy 2-inch gap cable installation.' }
        ],
        subServices: [
            { id: 'ig-balcony', name: 'Balcony Invisible Grille', price: 150, desc: 'Per Square Foot including installation' },
            { id: 'ig-window', name: 'Window Safety Grille', price: 130, desc: 'Per Square Foot for windows' }
        ],
        inclusions: [
            'Marine-grade 316 stainless steel cables',
            'Anti-uv nylon/teflon protective coating',
            'High-tension cable stress testing',
            'Professional rust-proof mounting hardware'
        ],
        exclusions: [
            'Major balcony structural repairs',
            'Painting of wall frames after install',
            'Removal of old heavy iron grilles'
        ],
        reviews: [
            { user: 'Vamsi T., Hitech City', text: 'Installed invisible grilles in my 15th-floor balcony. Safe for my kids and the view is still amazing!' },
            { user: 'Divya S., Financial Dist', text: 'Very neat installation. The cables are strong and practically invisible from a distance.' }
        ],
        spotlight: {
            title: 'High-Tensile Safety Engineering',
            desc: 'Our invisible grilles use aero-grade cables capable of withstanding over 400kg of impact. We combine transparency with extreme strength to secure your high-rise home without the cage-like feel.'
        }
    },
    'Mosquito Mesh': {
        icon: '/images/service_icon.png',
        photo: 'https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?q=80&w=1200&auto=format&fit=crop',
        desc: 'Protect your home from dengue and malaria with our premium <strong>Mosquito Mesh</strong> solutions in Hyderabad. We offer roller, pleated, and Velcro meshes customized for your doors and windows.',
        highlights: [
            '✦ Pleated, Roller & Magnetic Options',
            '✦ Washable & Durable Fiberglass',
            '✦ 100% Unobstructed Airflow',
            '✦ Custom Fit for UPVC/Wooden Frames',
            '✦ 5-Year Warranty on Mesh'
        ],
        brands: ['Saint-Gobain', 'Custom Mesh Pros'],
        specializations: ['Pleated Door Mesh', 'Velcro Window Net', 'Roller Fly Screen'],
        restorationFramework: [
            { title: 'Frame Check', icon: 'fas fa-crop' },
            { title: 'Custom Cutting', icon: 'fas fa-scissors' },
            { title: 'Gap Sealing', icon: 'fas fa-shield' }
        ],
        faultResolution: [
            { t: 'Mosquito Entry', i: 'fas fa-bug', d: 'Complete sealing of window gaps.' }
        ],
        subServices: [
            { id: 'mm-pleated', name: 'Pleated Door Mesh', price: 120, desc: 'Per Sq.Ft for French doors.' },
            { id: 'mm-velcro', name: 'Velcro Window Mesh', price: 60, desc: 'Per Sq.Ft affordable window net.' }
        ]
    },
    'Honeycomb Blinds': {
        icon: '/images/service_icon.png',
        photo: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
        desc: 'Upgrade your interiors with our elegant <strong>Honeycomb Blinds</strong>. The unique cellular design provides excellent insulation, noise reduction, and light control for your bedroom and living spaces.',
        highlights: [
            '✦ Energy Efficient Cellular Design',
            '✦ Blackout & Translucent Options',
            '✦ Motorized & Cordless Available',
            '✦ UV Protection & Noise Reduction',
            '✦ Premium Fabric Textures'
        ],
        brands: ['Decor Blinds', 'Somfy Automation'],
        specializations: ['Motorized Blinds', 'Blackout Cellular', 'Skylight Blinds'],
        restorationFramework: [
            { title: 'Shade Selection', icon: 'fas fa-swatchbook' },
            { title: 'Track Mounting', icon: 'fas fa-tools' },
            { title: 'Motor Calibration', icon: 'fas fa-cogs' }
        ],
        faultResolution: [
            { t: 'Excessive Heat/Light', i: 'fas fa-sun', d: 'Thermal insulation blockout shades.' }
        ],
        subServices: [
            { id: 'hb-manual', name: 'Manual Honeycomb Blinds', price: 180, desc: 'Per Sq.Ft standard pull mechanism.' },
            { id: 'hb-motor', name: 'Motorized Smart Blinds', price: 350, desc: 'Per Sq.Ft remote-controlled.' }
        ]
    },
    'Zip Screen': {
        icon: '/images/service_icon.png',
        photo: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop',
        desc: 'Enjoy outdoor living securely with our automated <strong>Zip Screen systems</strong>. Providing ultimate protection from sun, wind, rain, and insects, zip blinds are perfect for patios, balconies, and semi-open areas.',
        highlights: [
            '✦ Advanced Zip-Lock Technology',
            '✦ Withstands High Wind Impact',
            '✦ Blocks UV & Rainwater',
            '✦ Remote Control Automation',
            '✦ Minimalist Modern Aesthetics'
        ],
        brands: ['ZipTrack', 'Serge Ferrari'],
        specializations: ['Balcony Enclosure', 'Patio Weather Shield', 'Outdoor Blinds'],
        restorationFramework: [
            { title: 'Profile Fitting', icon: 'fas fa-ruler-combined' },
            { title: 'Fabric Tensioning', icon: 'fas fa-compress' },
            { title: 'Automated Setup', icon: 'fas fa-robot' }
        ],
        faultResolution: [
            { t: 'Rain in Balcony', i: 'fas fa-cloud-rain', d: 'Waterproof zip-track containment.' }
        ],
        subServices: [
            { id: 'zs-standard', name: 'Outdoor Zip Screen', price: 450, desc: 'Per Sq.Ft heavy duty weather blind.' }
        ]
    },
    'Modern Pergola': {
        icon: '/images/service_icon.png',
        photo: 'https://images.unsplash.com/photo-1588102377317-062e7aa23a41?q=80&w=1200&auto=format&fit=crop',
        desc: 'Transform your terrace or garden with a <strong>Modern Louvered Pergola</strong>. Our automated bioclimatic pergolas offer adjustable sunlight and waterproof roofing at the touch of a button.',
        highlights: [
            '✦ Bioclimatic Louvered Roof',
            '✦ Integrated LED Lighting',
            '✦ Rain Sensor Automation',
            '✦ Aluminum Powder Coated Frame',
            '✦ Custom Architectural Design'
        ],
        brands: ['Extruded Aluminum Profiles'],
        specializations: ['Terrace Roofing', 'Garden Canopy', 'Automated Louvers'],
        restorationFramework: [
            { title: 'Structural Anchor', icon: 'fas fa-hammer' },
            { title: 'Louver Assembly', icon: 'fas fa-layer-group' },
            { title: 'Sensor Integration', icon: 'fas fa-wifi' }
        ],
        faultResolution: [
            { t: 'Open Terrace Usability', i: 'fas fa-umbrella-beach', d: 'All-weather automated shading.' }
        ],
        subServices: [
            { id: 'pg-louvered', name: 'Bioclimatic Pergola', price: 1200, desc: 'Per Sq.Ft for premium automated roof.' }
        ]
    },
    'Safety Mesh': {
        icon: '/images/service_icon.png',
        photo: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop',
        desc: 'Our <strong>Stainless Steel Safety Mesh</strong> provides robust security against intruders without the jail-like look of traditional iron grills. Perfect for premium villas and high-security zones.',
        highlights: [
            '✦ 304/316 Grade Bulletproof Mesh',
            '✦ Knife & Impact Resistant',
            '✦ Clear Visibility & Ventilation',
            '✦ Multi-Point Locking System',
            '✦ Unbeatable Anti-Burglary Shield'
        ],
        brands: ['Security Mesh Pro'],
        specializations: ['Security Doors', 'Toughened Window Mesh', 'Pet Safety'],
        restorationFramework: [
            { title: 'Security Audit', icon: 'fas fa-user-shield' },
            { title: 'Heavy Duty Frame Fit', icon: 'fas fa-door-closed' },
            { title: 'Multi-Lock Assembly', icon: 'fas fa-lock' }
        ],
        faultResolution: [
            { t: 'Burglary Protection', i: 'fas fa-shield-alt', d: 'Impact-resistant woven steel barrier.' }
        ],
        subServices: [
            { id: 'sm-door', name: 'Security Mesh Door', price: 650, desc: 'Per Sq.Ft for heavy-duty main doors.' }
        ]
    },
    'Bird Netting': {
        icon: '/images/binoculars_icon.png',
        photo: '/assets/Images/home-repair-services/bird_netting.jpeg',
        desc: 'Keep your balcony clean and safe with our <strong>professional bird netting services in Hyderabad</strong>. We use high-grade HDPE nets that are UV-resistant, durable, and nearly invisible, ensuring your view remains unobstructed while keeping birds away.',
        highlights: [
            '✦ High-Density Polyethylene (HDPE) Garware Nets',
            '✦ UV Resistant & Environmentally Friendly',
            '✦ 3-5 Year Warranty on Durability',
            '✦ Rust-Free Stainless Steel Hook Installation',
            '✦ Quick & Mess-Free Doorstep Setup',
            '✦ Balcony, Window & Gallery Coverage',
            '✦ Aesthetic & Transparent Visibility',
            '✦ Expert Team for High-Rise Apartments',
        ],
        brands: ['Garware', 'Nylex', 'Bird-X'],
        specializations: ['Balcony Bird Netting', 'Anti-Pigeon Netting', 'Cricket Practice Netting', 'Children Safety Netting'],
        restorationFramework: [
            { title: 'Area Measurement & Audit', icon: 'fas fa-ruler-combined' },
            { title: 'Anchor Point Drilling', icon: 'fas fa-screwdriver-wrench' },
            { title: 'Net Tension Adjustment', icon: 'fas fa-up-down-left-right' }
        ],
        faultResolution: [
            { t: 'Bird Intrusion', i: 'fas fa-crow', d: 'Secure mesh barrier to prevent bird entry and nesting.' },
            { t: 'Net Loosening', i: 'fas fa-arrows-to-circle', d: 'Re-tensioning and anchor reinforcement.' }
        ],
        subServices: [
            { id: 'bn-balcony', name: 'Standard Balcony Bird Netting', price: 15, category: 'Bird Protection', image: '/assets/Images/home-repair-services/bird_netting.jpeg', desc: 'Per Sq.Ft for high-quality HDPE mesh installation.' },
            { id: 'bn-visit', name: 'Measurement & Quote Visit', price: 99, category: 'Other Services', image: '/images/binoculars_icon.png', desc: 'Professional site audit and customized estimation.' },
        ]
    },
    'Plumbing Work': {
        icon: '/images/maintenance_icon.png',
        photo: '/assets/Images/home-repair-services/plumbing_work.jpeg',
        desc: 'From leaking taps to complex pipe installations, our <strong>certified plumbers in Hyderabad</strong> provide rapid, reliable solutions for all your water and drainage needs. We use precision tools and quality fixtures to ensure a leak-free home.',
        highlights: [
            '✦ Tap, Faucet & Sink Leakage Resolution',
            '✦ Pipe Bursts & Underground Leak Detection',
            '✦ Toilet, Commode & Flush Tank Repair',
            '✦ Water Tank Cleaning & Level Sensor Setup',
            '✦ Hot & Cold Water Line Internal Fixes',
            '✦ Sewage & Drain Line De-clogging',
            '✦ New Bathroom Fitting & Accessories',
            '✦ Emergency 24/7 Support in Hyderabad',
        ],
        brands: ['Jaquar', 'Cera', 'Hindware', 'Kohler', 'Parryware'],
        specializations: ['Leak Detection', 'Sanitary Fitting', 'Drainage Solutions', 'Pipe Installation'],
        restorationFramework: [
            { title: 'Pressure Flow Test', icon: 'fas fa-faucet' },
            { title: 'Leakage Site Audit', icon: 'fas fa-search' },
            { title: 'Hydraulic Seal Check', icon: 'fas fa-tint' }
        ],
        faultResolution: [
            { t: 'Low Water Pressure', i: 'fas fa-arrow-down', d: 'De-scaling pipes and cleaning inlet aerators.' },
            { t: 'Active Pipe Leaks', i: 'fas fa-droplet-slash', d: 'Pipe segment replacement and high-grade sealing.' }
        ],
        subServices: [
            { id: 'pb-minor', name: 'Minor Plumbing Fix (Tap/Valve)', price: 149, category: 'Water & Leakage Fixes', image: '/images/istock_plumber_1372970823.jpg', desc: 'Fixing loose handles or replacing washers.' },
            { id: 'pb-declog', name: 'Drainage Jet De-clogging', price: 499, category: 'Drainage Solutions', image: '/images/kitchen_repair_blog.png', desc: 'Clearing main drain line blockages.' }
        ],
        inclusions: [
            'Leak detection and site pressure audit',
            'Full fixture and valve health check',
            'High-grade teflon and washer sealing',
            'OEM / Jaquar-grade spare components'
        ],
        exclusions: [
            'Underground main water line excavation',
            'Large-scale bathroom redesign/tiling',
            'Sewer line structural replacement'
        ],
        reviews: [
            { user: 'Santhosh K., Kondapur', text: 'Prompt response for my bathroom leak. Fixed the hidden pipe burst in 45 mins. Very professional tools used.' },
            { user: 'Bala G., Jubilee Hills', text: 'Professional tap and mixer installation for my kitchen. Neat work and very polite plumber.' }
        ],
        spotlight: {
            title: 'Hydraulic Flow Masters',
            desc: 'Plumbing is more than just stopping leaks. Our experts focus on flow dynamics and hydraulic pressure to ensure your fixtures last longer and your water consumption is optimized.'
        }
    },
    'Electrical work': {
        icon: '/images/lightning_bolt_icon.png',
        photo: '/assets/Images/home-repair-services/electrical_work.jpeg',
        desc: 'Electrical faults can be dangerous. Our <strong>background-verified electricians in Hyderabad</strong> are trained to handle everything from flickering lights and MCB tripping to complete house rewiring with a 100% safety guarantee.',
        highlights: [
            '✦ Short Circuit & MCB Trip Resolution',
            '✦ New Wiring & Conduit Installation',
            '✦ Switch, Socket & Regulator Replacement',
            '✦ Fan, Light & Inverter Installation',
            '✦ Main DB Box & Meter Board Wiring',
            '✦ TV & AC Point Wiring & Safety Check',
            '✦ Earthing & Surge Protection Setup',
            '✦ 2-Hour Rapid Response Guarantee',
        ],
        brands: ['Anchor', 'Havells', 'Legrand', 'Finolex', 'Polycab'],
        specializations: ['Domestic Wiring', 'Fault Finding', 'MCB Protection', 'Appliance Power Sync'],
        restorationFramework: [
            { title: 'Continuity & Load Test', icon: 'fas fa-bolt' },
            { title: 'Insulation Resistance Check', icon: 'fas fa-shield' },
            { title: 'Circuit Balancing Audit', icon: 'fas fa-scale-balanced' }
        ],
        faultResolution: [
            { t: 'Frequent Power Trips', i: 'fas fa-plug-circle-exclamation', d: 'Resolving short circuits and upgrading MCB load.' },
            { t: 'Dim or Flickering Lights', i: 'fas fa-lightbulb', d: 'Voltage stabilization and loose connection fixing.' }
        ],
        subServices: [
            { id: 'el-minor', name: 'Switch/Socket Replacement', price: 99, category: 'Electrical Repairs', image: '/images/electrical_repair_blog.png', desc: 'Repairing or swapping faulty electrical points.' },
            { id: 'el-fan', name: 'Ceiling Fan Service/Assembly', price: 199, category: 'Appliance Fitting', image: '/images/electrical_wiring_3d.png', desc: 'Testing motor winding and regulator sync.' }
        ],
        inclusions: [
            'Full continuity and earthing safety test',
            'Circuit load and voltage audit',
            'Fire-retardant genuine wiring parts',
            '180-day warranty on all electrical labor'
        ],
        exclusions: [
            'Concealed conduit wall cutting (civil)',
            'Full house internal wiring cabling cost',
            'Energy meter board replacement'
        ],
        reviews: [
            { user: 'Raghav M., Uppal', text: 'My TV unit was flickering. Tech found a loose neutral in the DB box. Very safe and efficient work.' },
            { user: 'Sumathi P., Miyapur', text: 'Installed 4 new AC points and fixed my inverter. Professional cabling and very clean installation.' }
        ],
        spotlight: {
            title: 'Precision Power Engineering',
            desc: 'Electrical safety is non-negotiable. Our electricians use calibrated multimeters to ensure your home’s circuitry is balanced and protected against power surges and shorts.'
        }
    },
    'Carpenter work': {
        icon: '/images/raw_githubusercontent_com_microsoft_fluentui_emoji_main_assets_hammer_20and_20wrench_3d_hammer_and_wrench_3d_png.png',
        photo: '/assets/Images/home-repair-services/carpenter_work.jpeg',
        desc: 'Restore your furniture to its original glory with our <strong>expert carpentry services in Hyderabad</strong>. Whether it’s a squeaky door, a broken drawer, or a new wardrobe assembly, our craftsmen deliver precision and quality.',
        highlights: [
            '✦ Door Hinge, Lock & Handle Repair',
            '✦ Wardrobe & Cabinet Door Alignment',
            '✦ Squeaky Floor & Furniture Restoration',
            '✦ Custom Woodwork & Plywood Repairs',
            '✦ IKEA & Modular Furniture Assembly',
            '✦ Drawer Slide & Channel Replacement',
            '✦ Mesh Door & Window Frame Fixes',
            '✦ Professional Polish & Varnish Touch-up',
        ],
        brands: ['Godrej Locks', 'Hettich', 'Hafele', 'CenturyPly'],
        specializations: ['Furniture Repair', 'Modular Assembly', 'Door Hardware', 'Cabinet Restoration'],
        restorationFramework: [
            { title: 'Surface Integrity Check', icon: 'fas fa-tree' },
            { title: 'Hardware Alignment Audit', icon: 'fas fa-ruler-vertical' },
            { title: 'Structural Reinforcement', icon: 'fas fa-hammer' }
        ],
        faultResolution: [
            { t: 'Door Scraping Floor', i: 'fas fa-door-open', d: 'Hinge adjustment and bottom trimming.' },
            { t: 'Broken Plywood/Legs', i: 'fas fa-briefcase', d: 'Structural support and matching material restoration.' }
        ],
        subServices: [
            { id: 'cp-hinge', name: 'Door Hinge/Lock Fix', price: 149, category: 'Woodwork & Hardware', image: '/images/happy-young-handyman-carpenter-in-workshop-smiling.jpg', desc: 'Solving alignment or locking issues.' },
            { id: 'cp-assembly', name: 'Furniture Assembly (Small)', price: 499, category: 'Modular Assembly', image: '/images/repairman-using-tools-to-fix-oven.jpg', desc: 'Setting up tables, chairs or small units.' }
        ],
        inclusions: [
            'Hardware alignment and leveling audit',
            'Joint reinforcement and gluing service',
            'Polishing and minor scratch touch-up',
            'Premium Godrej/Hettich grade hardware'
        ],
        exclusions: [
            'Full wood carving or antique work',
            'Major outdoor structural wood building',
            'Painting of large wardrobe units'
        ],
        reviews: [
            { user: 'Vivek S., Dilshuknagar', text: 'Wardrobe doors were sagging. Carpenter aligned them perfectly and fixed the loose handles in 30 mins.' },
            { user: 'Anjali R., Gachibowli', text: 'Professional assembly of my IKEA study table. Very neat work and followed all instructions correctly.' }
        ],
        spotlight: {
            title: 'Craftsmanship & Precision',
            desc: 'Modern modular furniture requires precise hardware alignment. Our carpenters specialize in European-style hinges and channels, ensuring your furniture remains functional and silent for years.'
        }
    },
    'Floor Polishing': {
        icon: '/images/indian-marble-floor-polishing.png',
        photo: '/images/indian-marble-floor-polishing.png',
        desc: 'Elevate your spaces with Hyderabad\'s premier <strong>professional floor polishing services</strong>. We specialize in deep grinding, restoration, and high-gloss diamond polishing for mosaic, marble, and granite floors.',
        highlights: [
            '✦ Mirror-Like Liquid Gloss Finish Restoration',
            '✦ Deep Scratch, Stain & Acid Etch Removal',
            '✦ Multi-Stage Diamond Abrasive Grit Grinding',
            '✦ Advanced Fluorosilicate Crystallization Seal',
            '✦ Grout Line Restoration & Joint Epoxy Filling',
            '✦ Dust-Free Wet Sanding Technology Used',
            '✦ Eco-Friendly, Kids & Pet-Safe Compounds',
            '✦ Specialized Care for Indian & Italian Marble'
        ],
        brands: ['Makrana', 'Italian Statuario', 'Carrara White', 'Botticino', 'Green Marble', 'Black Galaxy Granite', 'Double Stone Terrazzo'],
        specializations: ['Crystallization Shield', 'Joint Resin Injection', 'Stain Poultice Guard', 'Diamond Grit Leveling'],
        subServices: [
            { id: 'floor-mosaic', name: 'Mosaic Floor Polishing', price: 15, image: '/images/mosaic-floor-polishing.png', desc: 'Starts at ₹15 per SQFT. Mirror shine & crack repairs.' },
            { id: 'floor-indian-marble', name: 'Indian Marble Floor Polishing', price: 18, image: '/images/indian-marble-floor-polishing.png', desc: 'Starts at ₹18 per SQFT. Removes scratches & deep crystallizes.' },
            { id: 'floor-italian-marble', name: 'Italian Marble floor Polishing', price: 40, image: '/images/italian-marble-floor-polishing.png', desc: 'Starts at ₹40 per SQFT. Ultimate liquid-glass reflection.' },
            { id: 'floor-granite', name: 'Granite Floor Polishing', price: 20, image: '/images/granite-floor-polishing.png', desc: 'Starts at ₹20 per SQFT. High speed buffing & wear resistant seal.' }
        ]
    },
    'Mosaic Floor Polishing': {
        icon: '/images/mosaic-floor-polishing.png',
        photo: '/images/mosaic-floor-polishing.png',
        desc: 'Give your classic mosaic floors a brilliant high-gloss mirror finish. Our <strong>expert mosaic floor polishing services in Hyderabad</strong> remove deep stains, scratches, and yellowing, restoring the original pattern and luster.',
        highlights: [
            '✦ Deep Grinding to Remove Scratches & Stains',
            '✦ Multi-Stage Diamond Pad Honing & Polishing',
            '✦ Eco-Friendly Non-Acidic Polishing Compounds',
            '✦ Specialized Crack & Chip Repair with Matching Pigments',
            '✦ High-Gloss Mirror Finish & Protective Sealant Layer',
            '✦ Long-Lasting Dust-Repellent Protective Coating',
            '✦ 100% Dust-Free Wet Polishing Technology',
            '✦ Experienced Technicians with Heavy-Duty Machines'
        ],
        brands: ['Single Stone Mosaic', 'Double Stone Terrazzo', 'Colored Chips Mosaic', 'Classic White Mosaic', 'Designer Terrazzo Tiles'],
        specializations: ['Deep Stain Removal', 'Scratch Grinding', 'Crack Sealing', 'Mirror Gloss Finish', 'Dust-Free Wet Polishing', 'Protective Sealing'],
        restorationFramework: [
            { title: 'Luster & Gloss Audit', icon: 'fas fa-eye' },
            { title: 'Diamond Grinding Check', icon: 'fas fa-shield' },
            { title: 'Crack Sealing Analysis', icon: 'fas fa-tools' },
            { title: 'Sealant Absorption Test', icon: 'fas fa-tint' }
        ],
        faultResolution: [
            { t: 'Dull & Scratched Surface', i: 'fas fa-eraser', d: 'Diamond pad grinding and honing stages.' },
            { t: 'Stains & Discoloration', i: 'fas fa-paint-roller', d: 'Specialized chemical treatment & deep cleaning.' },
            { t: 'Cracks & Pitting', i: 'fas fa-fill-drip', d: 'Epoxy resin grout filling and leveling.' }
        ],
        subServices: [
            { id: 'fp-ac', name: 'AC Cleaning', price: 499, image: '/images/ac_icon.png', desc: 'Deep filter and coil cleaning for maximum airflow.' },
            { id: 'fp-fan', name: 'Fan Cleaning', price: 59, image: '/images/fan_icon.png', desc: 'Blade cleaning and dry dusting for ceiling fans.' },
            { id: 'fp-sofa', name: 'Sofa Cleaning', price: 349, image: '/images/blender_icon.png', desc: 'Fabric vacuuming and organic spot removal.' },
            { id: 'fp-bath', name: 'Bathroom Cleaning', price: 349, image: '/images/water_purifier_icon.png', desc: 'Descaling, sanitization and tiles floor scrub.' },
            { id: 'fp-carpet', name: 'Office Carpet Cleaning', price: 599, image: '/images/vacuum_cleaner_icon.png', desc: 'Deep shampooing and hot water extraction.' },
            { id: 'fp-mattress', name: 'Mattress Cleaning', price: 349, image: '/images/ok_icon.png', desc: 'UV sanitization and allergen dust extraction.' }
        ],
        inclusions: [
            'Multi-stage diamond polishing sequence',
            'Dust-free wet sanding system',
            'Deep stain treatment',
            'Epoxy repair of minor cracks'
        ],
        exclusions: [
            'Moving heavy furniture (wardrobes/beds)',
            'Major structural flooring replacement',
            'Polishing skirting/walls above 6 inches'
        ],
        reviews: [
            { user: 'Karthik S., Jubilee Hills', text: 'Our 20-year-old mosaic floors look brand new after this service. The mirror finish is amazing.' },
            { user: 'Ananya R., Secunderabad', text: 'Very professional crew. They did the whole living room dust-free and clean. Recommended!' }
        ],
        spotlight: {
            title: 'Stone Care Specialists',
            desc: 'Mosaic require precise chemical and mechanical balance. Our technicians analyze your stone composition to deliver maximum gloss without weakening the binder.'
        }
    },
    'Indian Marble Floor Polishing': {
        icon: '/images/indian-marble-floor-polishing.png',
        photo: '/images/indian-marble-floor-polishing.png',
        desc: 'Revive the natural veins and rich texture of your Indian marble. Our <strong>professional Indian marble floor polishing in Hyderabad</strong> uses diamond abrasives and premium fluorosilicate compounds to deliver a deep, durable mirror gloss.',
        highlights: [
            '✦ Deep Scuff & Scratch Removal Grinding',
            '✦ Multi-Step Diamond Honing for Flawless Texture',
            '✦ High-Grade Fluorosilicate Crystallization',
            '✦ Seamless Joint Refilling & Crack Epoxy Work',
            '✦ Mirror Gloss Finish & Stain-Resistant Shield',
            '✦ Long-Lasting Shine with Zero Dust Wet Polishing',
            '✦ Restores Natural Colors & Vein Definition',
            '✦ Certified Handymen with Commercial Grade Equipment'
        ],
        brands: ['Makrana Marble', 'Ambaji White', 'Rajnagar Marble', 'Katni Marble', 'Green Marble', 'Pink Marble'],
        specializations: ['Vein Contrast Enhancement', 'Diamond Grit Leveling', 'Joint Epoxy Grouting', 'Crystallization Gloss', 'Dust-Free Wet Honing', 'Stain Guard Coating'],
        restorationFramework: [
            { title: 'Vein Contrast Audit', icon: 'fas fa-magnifying-glass' },
            { title: 'Diamond Honing Level', icon: 'fas fa-layer-group' },
            { title: 'Crystallization Depth', icon: 'fas fa-gem' },
            { title: 'Stain Resistance Check', icon: 'fas fa-rose' }
        ],
        faultResolution: [
            { t: 'Dullness & Loss of Luster', i: 'fas fa-sun', d: 'Diamond honing and premium chemical crystallization.' },
            { t: 'Dirty or Uneven Joints', i: 'fas fa-screwdriver-wrench', d: 'Joint cleaning and color-matched epoxy refilling.' },
            { t: 'Deep Food or Acid Stains', i: 'fas fa-flask-vial', d: 'Stain extraction poultice application and buffing.' }
        ],
        subServices: [
            { id: 'fp-ac', name: 'AC Cleaning', price: 499, image: '/images/ac_icon.png', desc: 'Deep filter and coil cleaning for maximum airflow.' },
            { id: 'fp-fan', name: 'Fan Cleaning', price: 59, image: '/images/fan_icon.png', desc: 'Blade cleaning and dry dusting for ceiling fans.' },
            { id: 'fp-sofa', name: 'Sofa Cleaning', price: 349, image: '/images/blender_icon.png', desc: 'Fabric vacuuming and organic spot removal.' },
            { id: 'fp-bath', name: 'Bathroom Cleaning', price: 349, image: '/images/water_purifier_icon.png', desc: 'Descaling, sanitization and tiles floor scrub.' },
            { id: 'fp-carpet', name: 'Office Carpet Cleaning', price: 599, image: '/images/vacuum_cleaner_icon.png', desc: 'Deep shampooing and hot water extraction.' },
            { id: 'fp-mattress', name: 'Mattress Cleaning', price: 349, image: '/images/ok_icon.png', desc: 'UV sanitization and allergen dust extraction.' }
        ],
        inclusions: [
            'Multi-stage diamond polishing sequence',
            'Dust-free wet sanding system',
            'Deep stain treatment',
            'Epoxy repair of minor cracks'
        ],
        exclusions: [
            'Moving heavy furniture (wardrobes/beds)',
            'Major structural flooring replacement',
            'Polishing skirting/walls above 6 inches'
        ],
        reviews: [
            { user: 'Sridhar G., Gachibowli', text: 'They polished our Makrana marble floors. The scratch removal and joint filling were top-notch.' },
            { user: 'Madhavi K., Kukatpally', text: 'Clean job, the shine is incredible. My house looks twice as bright now.' }
        ],
        spotlight: {
            title: 'Preserving Heritage Stone',
            desc: 'Indian marble is porous and prone to staining. Our crystallization process seals the pores, making the stone highly resistant to everyday liquid spills.'
        }
    },
    'Italian Marble floor Polishing': {
        icon: '/images/italian-marble-floor-polishing.png',
        photo: '/images/italian-marble-floor-polishing.png',
        desc: 'Italian marble deserves elite care. Protect your luxury investment with our <strong>premium Italian marble floor polishing services in Hyderabad</strong>. We use fine Italian abrasives, import sealants, and precision diamond honing to achieve a majestic, liquid-mirror finish.',
        highlights: [
            '✦ Luxury Italian Marble Restoration Experts',
            '✦ Ultra-Fine Diamond Honing up to 8000 Grit',
            '✦ Import Italian Wax & Premium Crystallization',
            '✦ Precision Grout Line Color-Matched Epoxy Refilling',
            '✦ Superior Water & Oil Stain Repellent Shielding',
            '✦ Majestic Liquid-Mirror High Gloss Reflection',
            '✦ Gentle Acid-Free Protective Sealing Treatment',
            '✦ Handled by Elite Stone Care Specialists Only'
        ],
        brands: ['Carrara Marble', 'Calacatta Marble', 'Statario Marble', 'Botticino Marble', 'Crema Marfil', 'Travertine Marble'],
        specializations: ['Liquid Gloss Finish', 'Import Crystallization', 'Italian Grit Sanding', 'Ultra-Fine Honing', 'Color-Match Grouting', 'Stain Guard Sealing'],
        restorationFramework: [
            { title: 'Liquid Gloss Audit', icon: 'fas fa-droplet' },
            { title: '8000-Grit Honing level', icon: 'fas fa-gauge' },
            { title: 'Import Sealant Depth', icon: 'fas fa-lock' },
            { title: 'Vein Pattern Preservation', icon: 'fas fa-signature' }
        ],
        faultResolution: [
            { t: 'Acid Etch Marks & Dullness', i: 'fas fa-hand-fist', d: 'Super-fine diamond honing and acid-free crystallization.' },
            { t: 'Grout Discoloration & Cracks', i: 'fas fa-hammer', d: 'Grout removal and color-matched resin joint injection.' },
            { t: 'Organic & Oil Stains', i: 'fas fa-wand-magic-sparkles', d: 'Premium poultice stain extraction and sealing.' }
        ],
        subServices: [
            { id: 'fp-ac', name: 'AC Cleaning', price: 499, image: '/images/ac_icon.png', desc: 'Deep filter and coil cleaning for maximum airflow.' },
            { id: 'fp-fan', name: 'Fan Cleaning', price: 59, image: '/images/fan_icon.png', desc: 'Blade cleaning and dry dusting for ceiling fans.' },
            { id: 'fp-sofa', name: 'Sofa Cleaning', price: 349, image: '/images/blender_icon.png', desc: 'Fabric vacuuming and organic spot removal.' },
            { id: 'fp-bath', name: 'Bathroom Cleaning', price: 349, image: '/images/water_purifier_icon.png', desc: 'Descaling, sanitization and tiles floor scrub.' },
            { id: 'fp-carpet', name: 'Office Carpet Cleaning', price: 599, image: '/images/vacuum_cleaner_icon.png', desc: 'Deep shampooing and hot water extraction.' },
            { id: 'fp-mattress', name: 'Mattress Cleaning', price: 349, image: '/images/ok_icon.png', desc: 'UV sanitization and allergen dust extraction.' }
        ],
        inclusions: [
            'Multi-stage diamond polishing sequence',
            'Dust-free wet sanding system',
            'Deep stain treatment',
            'Epoxy repair of minor cracks'
        ],
        exclusions: [
            'Moving heavy furniture (wardrobes/beds)',
            'Major structural flooring replacement',
            'Polishing skirting/walls above 6 inches'
        ],
        reviews: [
            { user: 'Vikram R., Banjara Hills', text: 'Stunning liquid shine on our Statario marble. Their team knows exactly how to handle high-end Italian stone.' },
            { user: 'Pranitha P., Jubilee Hills', text: 'Best floor polishing service in Hyderabad. The gloss and clarity are absolutely perfect.' }
        ],
        spotlight: {
            title: 'Luxurious Stone Conservation',
            desc: 'Italian marble is softer than Indian marble and requires gentle, non-abrasive methods. We use specialized diamond pads to gently hone the surface without creating micro-fractures.'
        }
    },
    'Granite Floor Polishing': {
        icon: '/images/granite-floor-polishing.png',
        photo: '/images/granite-floor-polishing.png',
        desc: 'Granite is one of the hardest stones and requires heavy-duty diamond grinding to restore its luster. Our <strong>expert granite floor polishing in Hyderabad</strong> uses industrial diamond pads and high-gloss buffs to bring back its brilliant, durable reflection.',
        highlights: [
            '✦ Heavy-Duty Diamond Grit Grinding Sequence',
            '✦ Perfect Leveling & Scratch Removal Treatment',
            '✦ Specialized Granite Powder Crystallization',
            '✦ Epoxy Crack Injection & Grout Grouting',
            '✦ Brilliant Glass-Like Reflective Gloss Finish',
            '✦ Long-Lasting Wear-Resistant Protective Sealant',
            '✦ Dust-Free Wet Grinding for Zero Residue',
            '✦ Trained Professionals with Heavy Machinery'
        ],
        brands: ['Black Galaxy Granite', 'Kashmir White Granite', 'Jhansi Red Granite', 'Tan Brown Granite', 'Absolute Black Granite', 'Grey Granite'],
        specializations: ['Diamond Grit Grinding', 'Scratch Removal Buffing', 'Granite Crystallization', 'High-Gloss Glass Finish', 'Epoxy Chip Filling', 'Wear-Resistant Sealing'],
        restorationFramework: [
            { title: 'Glass Luster Audit', icon: 'fas fa-glass-water' },
            { title: 'Scratch Level Depth', icon: 'fas fa-border-all' },
            { title: 'Crystallization Shield', icon: 'fas fa-shield-virus' },
            { title: 'Joint Level Alignment', icon: 'fas fa-ruler-combined' }
        ],
        faultResolution: [
            { t: 'Scratched & Dull Granite', i: 'fas fa-arrow-rotate-left', d: 'Heavy-duty diamond pad grinding and crystallization.' },
            { t: 'Chipped Corners or Holes', i: 'fas fa-wrench', d: 'Color-matched granite epoxy resin filling and level honing.' },
            { t: 'Loss of Shine in Traffic Areas', i: 'fas fa-arrows-spin', d: 'Re-honing and high-speed powder crystallization buffing.' }
        ],
        subServices: [
            { id: 'fp-ac', name: 'AC Cleaning', price: 499, image: '/images/ac_icon.png', desc: 'Deep filter and coil cleaning for maximum airflow.' },
            { id: 'fp-fan', name: 'Fan Cleaning', price: 59, image: '/images/fan_icon.png', desc: 'Blade cleaning and dry dusting for ceiling fans.' },
            { id: 'fp-sofa', name: 'Sofa Cleaning', price: 349, image: '/images/blender_icon.png', desc: 'Fabric vacuuming and organic spot removal.' },
            { id: 'fp-bath', name: 'Bathroom Cleaning', price: 349, image: '/images/water_purifier_icon.png', desc: 'Descaling, sanitization and tiles floor scrub.' },
            { id: 'fp-carpet', name: 'Office Carpet Cleaning', price: 599, image: '/images/vacuum_cleaner_icon.png', desc: 'Deep shampooing and hot water extraction.' },
            { id: 'fp-mattress', name: 'Mattress Cleaning', price: 349, image: '/images/ok_icon.png', desc: 'UV sanitization and allergen dust extraction.' }
        ],
        inclusions: [
            'Multi-stage diamond polishing sequence',
            'Dust-free wet sanding system',
            'Deep stain treatment',
            'Epoxy repair of minor cracks'
        ],
        exclusions: [
            'Moving heavy furniture (wardrobes/beds)',
            'Major structural flooring replacement',
            'Polishing skirting/walls above 6 inches'
        ],
        reviews: [
            { user: 'Naresh Y., Madhapur', text: 'Polished our Black Galaxy granite floors. They look extremely dark, reflective and glassy now.' },
            { user: 'Sneha L., Begumpet', text: 'On-time service. The crew had heavy grinding machines and cleared all scratches. Very happy!' }
        ],
        spotlight: {
            title: 'High-Durability Protection',
            desc: 'Granite requires high pressure and speed to polish compared to marble. Our heavy-duty single disc machines are calibrated specifically to bring out the natural crystals of granite.'
        }
    },
    'Packers and Movers': {
        icon: '/assets/Images/category/packers-movers.jpeg',
        photo: '/assets/Images/category/packers-movers.jpeg',
        desc: 'Relocating to a new home or office? At <strong>MeeHelper Packers & Movers</strong>, we provide seamless, secure, and professional relocation services across Hyderabad. Our trained moving team handles packing, loading, transportation, and unpacking with 100% safety and zero damage guaranteed.',
        highlights: [
            '✦ ISO-Certified Packing & Moving Professional Teams',
            '✦ Zero Damage Guarantee with Complete Transit Insurance',
            '✦ Doorstep Packing, Loading, Transport & Unpacking',
            '✦ Bubble Wrap, Foam Sheets & High-Quality Corrugated Boxes',
            '✦ Covered Waterproof Relocation Trucks',
            '✦ On-Time Pickup and Scheduled Doorstep Delivery',
            '✦ Local Shifting and Intercity Relocation Services',
            '✦ 24/7 Dedicated Move Coordinator & Live Tracking'
        ],
        brands: ['Household Shifting', 'Office Relocation', 'Vehicle Transport', 'Local Moving', 'Intercity Shifting'],
        specializations: [
            'Premium 3-Layer Packing', 'Fragile Item Special Handling', 'Heavy Furniture Dismantling & Assembly',
            'Covered Truck Transport', 'Office IT Equipment Moving', 'Two-Wheeler / Car Carrier Shifting',
            'Warehousing & Short Term Storage', 'Unpacking & Room Setup Support', 'Same-Day Local Relocation'
        ],
        restorationFramework: [
            { title: 'Pre-Move Survey & Estimation', icon: 'fas fa-clipboard-list' },
            { title: 'Multi-Layer Safe Packing', icon: 'fas fa-box-open' },
            { title: 'Safe Loading & Securing', icon: 'fas fa-truck-loading' },
            { title: 'GPS Tracked Secure Transit', icon: 'fas fa-route' },
            { title: 'Doorstep Unloading & Setup', icon: 'fas fa-truck-ramp-box' },
            { title: 'Final Handover & Inspection', icon: 'fas fa-circle-check' }
        ],
        faultResolution: [
            { t: 'Fragile Glassware Damage', i: 'fas fa-glass-water', d: 'Bubble wrapped and packed in heavy-duty wooden crates.' },
            { t: 'Furniture Scratches', i: 'fas fa-chair', d: 'High-density foam sheets and stretch wrap protection.' },
            { t: 'Rain and Water Damage', i: 'fas fa-cloud-showers-heavy', d: '100% closed waterproof container moving vehicles.' },
            { t: 'Delayed Deliveries', i: 'fas fa-clock', d: 'Committed schedules with live tracking and coordinator updates.' },
            { t: 'Hidden Price Additions', i: 'fas fa-calculator', d: 'All-inclusive fixed quotations with zero hidden costs.' }
        ],
        subServices: [
            { id: 'pm-1bhk', name: '1 BHK Local Home Shifting', price: 4499, image: '/images/home_icon_3d.png', desc: 'Ideal for small homes. Includes packing materials, loading, local transport, and unloading.' },
            { id: 'pm-2bhk', name: '2 BHK Local Home Shifting', price: 6999, image: '/images/home_icon_3d.png', desc: 'Standard family shifting. Multi-layer packing, medium covered truck, and dedicated shifting crew.' },
            { id: 'pm-3bhk', name: '3 BHK Local Home Shifting', price: 9999, image: '/images/home_icon_3d.png', desc: 'Large home relocation. Extra packing crew, large container truck, dismantle & re-assembly of beds.' },
            { id: 'pm-office', name: 'Office & Corporate Shifting', price: 14999, image: '/images/chip_icon.png', desc: 'Secure shifting of computers, files, pantry items, and furniture. Done over weekends/nights.' },
            { id: 'pm-vehicle', name: 'Bike & Vehicle Transportation', price: 2499, image: '/images/gear_icon.svg', desc: 'Specialized vehicle carriers for scratch-free relocation of bikes and cars across Hyderabad.' }
        ],
        inclusions: [
            'Complete packing materials (bubble wrap, carton boxes, tape)',
            'Experienced packing and loading labor crew',
            'Transit vehicle (covered container truck)',
            'Disassembly and reassembly of standard wooden furniture'
        ],
        exclusions: [
            'Toll gate and parking charges (if applicable)',
            'Lifting items beyond 3rd floor without lift access (extra labor)',
            'AC dismantling and gas charging (available as add-on)',
            'Unpacking of cartoon boxes (quoted separately if needed)'
        ],
        reviews: [
            { user: 'Sravan Kumar, Kondapur', text: 'Shifted my 2 BHK from Kondapur to Gachibowli. Excellent packing and zero scratches on our glass table. Highly satisfied!' },
            { user: 'Anjali Sharma, Madhapur', text: 'Very professional packers. They completed the entire packing and shifting in 5 hours. Rates were exactly as quoted, no hidden fees.' }
        ],
        spotlight: {
            title: 'Verified Moving Partners',
            desc: 'All our movers undergo strict background checks, vehicle audits, and packing certifications. We guarantee a stress-free shifting experience with dedicated support coordinators.'
        }
    },
    'Air Cooler Repair': {
        globalDiscount: 10,
        icon: '/images/ac_icon.png',
        photo: '/images/ac-repair.png',
        desc: 'Is your <strong>air cooler not throwing cool air</strong>, leaking water, or having motor issues? At <strong>MeeHelper</strong>, our certified technicians perform quick doorstep diagnostics and servicing on all types of desert and personal coolers across <strong>Hyderabad</strong>.',
        highlights: [
            '✦ Desert & Personal Cooler Repair',
            '✦ Fan Motor & Pump Repair/Replacement',
            '✦ Cooling Pad (Honey-Comb / Wood-Wool) Changes',
            '✦ Water Leakage & Body Damage Restoration',
            '✦ Electrical Wiring & Switch Troubleshooting',
            '✦ Same-Day Doorstep Service in Hyderabad',
            '✦ 180-Day Warranty on Spares & Service'
        ],
        brands: ['Symphony', 'Kenstar', 'Bajaj', 'Orient', 'Crompton', 'Usha', 'Havells', 'Hindware'],
        specializations: [
            'Fan Motor Restoration', 'Submersible Pump Swaps', 'Honey-Comb Pad Cleaning',
            'Wiring & Safety Audits', 'Water Distribution Checks'
        ],
        restorationFramework: [
            { title: 'Fan Motor Torque & Alignment', icon: 'fas fa-fan' },
            { title: 'Submersible Pump Water Distribution', icon: 'fas fa-droplet' },
            { title: 'Honey-Comb Pad Descaling', icon: 'fas fa-wind' },
            { title: 'Electrical Control Switch & Safety Audit', icon: 'fas fa-microchip' }
        ],
        faultResolution: [
            { t: 'Cooler Not Throwing Cool Air', i: 'fas fa-temperature-up', d: 'Water pump check and pad clearing/replacement.' },
            { t: 'Water Leakage Underneath', i: 'fas fa-droplet-slash', d: 'Tank inspection and hose replacement.' },
            { t: 'Fan Motor Not Spinning', i: 'fas fa-rotate', d: 'Motor winding diagnostics and capacitor replacement.' }
        ],
        subServices: [
            { id: 'cooler-visit', name: 'Air Cooler Diagnostic Visit', price: 199, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'Complete safety and mechanical checkup of pump, motor, and pads.' },
            { id: 'cooler-pump', name: 'Cooler Pump Replacement', price: 499, image: '/images/gas_1.png', desc: 'Installation of high-lift submersible pump to restore water flow.' },
            { id: 'cooler-motor', name: 'Fan Motor Repair / Swap', price: 899, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Fixes noisy operations or motor failures.' }
        ],
        inclusions: [
            'Thorough inspection of motor, pump, and pads',
            '180-day warranty on all parts replaced',
            'Post-service testing for cooling performance'
        ],
        exclusions: [
            'Cost of new cooling pads if replaced',
            'Complete body/tank replacement',
            'External power socket repairs'
        ]
    }
};

export const DEFAULT_SERVICE = {
    icon: '/images/service_icon.png',
    photo: '/images/unsplash_1621905251189.jpg',
    desc: 'Professional home appliance repair services in Hyderabad. Our background-verified, certified technicians bring OEM spare parts to your doorstep and fix your appliance right the first time — backed by a 180-day warranty on all parts and labour.',
    highlights: [
        '✦ Certified & Background-Verified Technicians',
        '✦ Same-Day Doorstep Service in Hyderabad',
        '✦ OEM / Genuine Spare Parts Only',
        '✦ Transparent, Upfront Pricing — No Surprises',
        '✦ 180-Day Warranty on Parts & Labour',
        '✦ 2-Hour Response Time Guarantee',
        '✦ Post-Service Quality Inspection',
        '✦ All Major Brands Covered',
    ],
    brands: ['Samsung', 'LG', 'Whirlpool', 'Bosch', 'IFB', 'Godrej', 'Panasonic', 'Haier', 'Sony', 'Philips'],
    specializations: [
        'Certified Diagnostics', 'Same-Day Repair', 'OEM Spare Parts',
        'Performance Audit', 'Safety Certification', 'Structural Fix',
        'Electronic Calibration', 'Component Restoration', 'Final Load Testing'
    ],
    restorationFramework: [
        { title: 'Electronic Control Module (PCB) Audit', icon: 'fas fa-microchip' },
        { title: 'Drive System & Engine Calibration', icon: 'fas fa-cogs' },
        { title: 'Fluid Dynamics & Drainage Optimization', icon: 'fas fa-vial' },
        { title: 'Structural Integrity & Vibration Control', icon: 'fas fa-cubes' },
        { title: 'Thermal Management & Heating Sensors', icon: 'fas fa-thermometer-half' },
        { title: 'Final Performance Stress Test', icon: 'fas fa-tachometer-alt' }
    ],
    faultResolution: [
        { t: 'Complete Power Failure', i: 'fas fa-power-off', d: 'Root-cause analysis of motherboard and fuse integrity.' },
        { t: 'Unusual Mechanical Noise', i: 'fas fa-volume-up', d: 'Bearing calibration and motor vibration dampening.' },
        { t: 'Water Leakage Fault', i: 'fas fa-tint-slash', d: 'Precision seal audit and drainage system de-clogging.' },
        { t: 'Performance Efficiency Drop', i: 'fas fa-chart-line-down', d: 'Component restoration and calibration.' }
    ],
    inclusions: [
        'Complete diagnostic and safety audit',
        'OEM-grade genuine spare parts',
        'Transparent upfront pricing model',
        'Post-service quality verification'
    ],
    exclusions: [
        'Major structural body replacement',
        'Third-party software modification',
        'Off-site deep lab restoration'
    ],
    reviews: [
        { user: 'Rakesh V., Hyderabad', text: 'Excellent and professional service. The technician was on time and fixed the issue effectively.' },
        { user: 'Sowmya L., Hyderabad', text: 'Very trustworthy and ethical work. Price was fair and service was top-notch.' }
    ],
    spotlight: {
        title: 'Certified Excellence Standards',
        desc: 'At MeeHelper, we follow a rigorous certification process for every technician. We ensure that your home appliances are handled by experts who understand the engineering behind the brand.'
    }
};

Object.assign(SERVICE_DATA_MAP, {
    'Deep Home Cleaning': {
        globalDiscount: 55,
        icon: '/images/home-cleaning.png',
        photo: '/images/home-cleaning.png',
        desc: 'MeeHelper is Hyderabad\'s premium **professional deep home cleaning services** partner. We offer ISO-certified home deep cleaning using eco-friendly, family-safe agents and heavy-duty machinery. Our trained and background-verified crew cleans every nook and cranny — from ceiling fans to floor scrubbing — ensuring a 100% satisfaction guarantee.',
        highlights: [
            '✦ ISO Certified Cleaners & Premium Equipment',
            '✦ Eco-Friendly, Kids & Pet-Safe Disinfectants',
            '✦ 100% Satisfaction Guarantee or Free Re-service',
            '✦ Deep Scrubbing, Grinding & Stain Removal',
            '✦ Dusting & Vacuuming of Upholstery & Carpets',
            '✦ In-House Verified Professional Technicians',
            '✦ 15+ Lakh Satisfied Customers Across India',
            '✦ Same-Day Priority Booking & Prompt Arrival'
        ],
        brands: ['Eco-Safe Agents', 'Karcher Equipment', 'Taski Chemicals', 'ISO Certified Standards', '3M Cleaning Pads'],
        specializations: ['Wall & Ceiling Dusting', 'Intense Floor Scrubbing', 'Kitchen Grease Removal', 'Bathroom Descaling', 'Window Grill & Pane Cleaning', 'Furniture Sanitization'],
        restorationFramework: [
            { title: 'Full Site Inspection', icon: 'fas fa-search' },
            { title: 'Dry Dusting & Cobweb Removal', icon: 'fas fa-broom' },
            { title: 'High-Suction HEPA Vacuuming', icon: 'fas fa-wind' },
            { title: 'Grease & Lime scale Descaling', icon: 'fas fa-soap' },
            { title: 'Mechanical Floor Scrubbing', icon: 'fas fa-redo' },
            { title: 'Sanitization & Quality Audit', icon: 'fas fa-check-double' }
        ],
        faultResolution: [
            { t: 'Stubborn Kitchen Grease', i: 'fas fa-fire', d: 'High-temperature steam descaling & heavy degreasers.' },
            { t: 'Hard Water Bathroom Stains', i: 'fas fa-droplet-slash', d: 'Eco-friendly chemical descaling of taps, tiles, and shower area.' },
            { t: 'Dusty High Ceilings & Fans', i: 'fas fa-fan', d: 'Telescopic ladder cleaning and dry vacuuming.' },
            { t: 'Dirty Window Grills & Tracks', i: 'fas fa-border-all', d: 'Track vacuuming & high-pressure wiping.' }
        ],
        subServices: [
            { id: 'clean-deep-1bhk', name: '1 BHK - Full House Deep Cleaning', price: 3510, image: '/images/home-cleaning.png', desc: 'Complete deep cleaning for 1 BHK apartment. Includes bathroom, kitchen, bedroom, and balcony deep scrubbing.' },
            { id: 'clean-deep-2bhk', name: '2 BHK - Full House Deep Cleaning', price: 4499, image: '/images/home-cleaning.png', desc: 'Complete deep cleaning for 2 BHK apartment. Includes bathroom descaling, kitchen grease removal, and floor buffing.' },
            { id: 'clean-deep-3bhk', name: '3 BHK - Full House Deep Cleaning', price: 5499, image: '/images/home-cleaning.png', desc: 'Complete deep cleaning for 3 BHK apartment. Highly recommended for moving in or pre-festive cleaning.' },
            { id: 'clean-deep-villa', name: 'Luxury Villa Deep Cleaning (4+ BHK)', price: 7499, image: '/images/home-cleaning.png', desc: 'Complete top-to-bottom deep sanitization & cleaning for luxury villas. Includes premium double-team deployment.' }
        ],
        inclusions: [
            'Mattress & Sofa Dusting & Vacuuming',
            'Cupboard vacuuming and cleaning (both inside & outside)',
            'Windows, Grills, and Ceiling Fan Cleaning',
            'Floor scrubbing, dry wall dusting, and sanitization',
            'Full kitchen and bathroom deep descaling & cleaning'
        ],
        exclusions: [
            'Facade / Exterior glass & wall cleaning',
            'Internal cleaning of cupboards with items (unless emptied)',
            'Removal of heavy construction debris'
        ],
        reviews: [
            { user: 'Srinivas R., Jubilee Hills', text: 'I booked the 3 BHK deep cleaning. The team was extremely polite and detailed. House looks absolutely brand new!' },
            { user: 'Monica G., Gachibowli', text: 'Their kitchen and bathroom cleaning is top-notch. Removed years of scale and oil. Best price in Hyderabad.' }
        ],
        spotlight: {
            title: 'ISO Certified Cleaning Standards',
            desc: 'Our cleaning teams are certified and use high-end equipment like Karcher vacuum cleaners and Taski eco-safe chemicals to deliver unmatched hygiene and gloss.'
        }
    },
    'Empty Home Cleaning': {
        globalDiscount: 15,
        icon: '/images/home-cleaning.png',
        photo: '/images/home-cleaning.png',
        desc: 'Professional empty house / move-in cleaning services. Ideal for tenants moving out or owners renting out properties.',
        highlights: ['✦ Floor scrubbing', '✦ Bathroom descaling', '✦ Kitchen cleaning', '✦ Cobwebs removal'],
        brands: ['Taski Chemicals', 'Karcher Vacuum', '3M Scrubbers', 'Diversy Eco-friendly Disinfectants'],
        specializations: ['Move-In Scrubbing', 'End-of-Tenancy Polish', 'Dust & Cobweb Sweep', 'Drain De-odorization'],
        restorationFramework: [
            { title: 'Visual Inspection & Audit', icon: 'fas fa-magnifying-glass' },
            { title: 'Dry Cobweb & Dust Extraction', icon: 'fas fa-wind' },
            { title: 'Intense Floor Scrub & Buff', icon: 'fas fa-rotate' },
            { title: 'Bathroom & Kitchen Scrub', icon: 'fas fa-soap' },
            { title: 'Glass & Window Detailing', icon: 'fas fa-border-all' },
            { title: 'Final Sanitization & Handover', icon: 'fas fa-check-double' }
        ],
        faultResolution: [
            { t: 'Heavy Dust Accumulation', i: 'fas fa-wind', d: 'High-suction HEPA vacuuming of rooms and cabinets.' },
            { t: 'Stained Vacant Bathrooms', i: 'fas fa-soap', d: 'Chemical descaling and tiles mechanised washing.' },
            { t: 'Dirty Window Tracks', i: 'fas fa-border-all', d: 'Deep vacuuming of tracks and glass wiping.' }
        ],
        subServices: [
            { id: 'clean-empty-1bhk', name: '1 BHK Empty Home Cleaning', price: 1999, image: '/images/home-cleaning.png', desc: 'Floor scrubbing, dusting, window clean.' },
            { id: 'clean-empty-2bhk', name: '2 BHK Empty Home Cleaning', price: 2699, image: '/images/home-cleaning.png', desc: 'Bathroom deep wash, kitchen dry clean, floor clean.' },
            { id: 'clean-empty-3bhk', name: '3 BHK Empty Home Cleaning', price: 3499, image: '/images/home-cleaning.png', desc: 'Detailed dust removal and sanitization of vacant flats.' }
        ],
        inclusions: [
            'Mechanised floor scrubbing and drying',
            'Full bathroom deep washing and descaling',
            'Kitchen platforms, cabinets & tiles degreasing',
            'Window panes, frames & track vacuuming'
        ],
        exclusions: [
            'Cleaning of wall surfaces (wet wiping available separately)',
            'Removal of heavy construction cement debris',
            'Inside cleaning of locked/semi-furnished cabinets'
        ],
        reviews: [
            { user: 'Karthik P., Madhapur', text: 'Excellent move-in cleaning. The house was closed for months and they made it absolutely clean and fresh!' },
            { user: 'Srilatha M., Kondapur', text: 'Very thorough job. Perfect for renting out my apartment. Highly recommended.' }
        ],
        spotlight: {
            title: 'Hassle-Free Tenant Handover',
            desc: 'Our empty home service is tailored to help you secure your security deposit return or welcome new tenants with a sparkling, hygienic property.'
        }
    },
    'Interior Home Cleaning': {
        globalDiscount: 10,
        icon: '/images/home-cleaning.png',
        photo: '/images/home-cleaning.png',
        desc: 'Detailed cleaning of all interior spaces including doors, windows, panels, and wooden cupboards.',
        highlights: ['✦ Cupboard internal dusting', '✦ Door & panel cleaning', '✦ Switchboards polishing'],
        brands: ['3M Wood Polish', 'Colin Glass Clean', 'Karcher HEPA Filters', 'Taski Polishers'],
        specializations: ['Cupboard Internal Cleaning', 'Switchboard Polish', 'Door Frame Detail', 'Fittings Polishing'],
        restorationFramework: [
            { title: 'De-clutter Consultation', icon: 'fas fa-clipboard-list' },
            { title: 'Internal Vacuuming', icon: 'fas fa-wind' },
            { title: 'Microfiber Clean Wiping', icon: 'fas fa-soap' },
            { title: 'Wood Polish & Conditioning', icon: 'fas fa-sparkles' }
        ],
        faultResolution: [
            { t: 'Dusty Wardrobes & Shelves', i: 'fas fa-wind', d: 'Internal vacuuming & microfiber sanitization.' },
            { t: 'Greasy Switchboards', i: 'fas fa-bolt', d: 'Safe non-conductive chemical wipes.' }
        ],
        subServices: [
            { id: 'clean-interior-full', name: 'Full Interior Detail Cleaning', price: 2499, image: '/images/home-cleaning.png', desc: 'Clean doors, door frames, wardrobes, and drawers.' }
        ],
        inclusions: [
            'Inside & outside cleaning of all empty wardrobes',
            'Safe chemical wipe of switchboards and switches',
            'Doors, door frames, and door handles polishing',
            'Interior partition glass cleaning'
        ],
        exclusions: [
            'Moving heavy clothing items inside wardrobes',
            'Electrical repair of faulty switchboards',
            'Wall painting or stain touch-up'
        ],
        reviews: [
            { user: 'Ravi Teja, Banjara Hills', text: 'All my wardrobes and doors were cleaned perfectly. Excellent woodwork polishing!' },
            { user: 'Pranathi S., Jubilee Hills', text: 'Very detailed. Handled all switchboards and panels with care.' }
        ],
        spotlight: {
            title: 'Wooden & Polish Care',
            desc: 'We use premium non-greasy conditioning polishes for wood and laminates to protect the surface and restore its natural shine.'
        }
    },
    'Kitchen Cleaning': {
        globalDiscount: 20,
        icon: '/images/home-cleaning.png',
        photo: '/images/home-cleaning.png',
        desc: 'Premium kitchen cleaning service to remove oil, soot, and grease from tiles, slab, and cabinets.',
        highlights: ['✦ Degreasing of cabinets', '✦ Backsplash oil removal', '✦ Slab sanitization'],
        brands: ['Taski Degreasers', '3M Abrasives', 'Eco-Clean Non-Toxic Agents', 'Karcher Steam Generators'],
        specializations: ['Modular Cabinet Degreasing', 'Chimney Outer Cleaning', 'Limescale Descaling', 'Slab Sanitization'],
        restorationFramework: [
            { title: 'Grease Assessment', icon: 'fas fa-magnifying-glass' },
            { title: 'Chemical Pre-soaking', icon: 'fas fa-soap' },
            { title: 'High-Temp Steam Flush', icon: 'fas fa-cloud' },
            { title: 'Abrasive Scrubbing', icon: 'fas fa-tools' },
            { title: 'Polishing & Sanitization', icon: 'fas fa-sparkles' }
        ],
        faultResolution: [
            { t: 'Sticky Backsplash Oil', i: 'fas fa-fire', d: 'Industrial degreasing spray and hot water scrubbing.' },
            { t: 'Limescale on Taps & Sink', i: 'fas fa-droplet', d: 'Acid-free descaling gel application and polish.' }
        ],
        subServices: [
            { id: 'clean-kitchen-reg', name: 'Standard Kitchen Cleaning', price: 999, image: '/images/home-cleaning.png', desc: 'External degreasing and cleaning.' },
            { id: 'clean-kitchen-deep', name: 'Deep Kitchen Degreasing & Wash', price: 1499, image: '/images/home-cleaning.png', desc: 'Includes appliance exterior and tile scrubbing.' }
        ],
        inclusions: [
            'Cabinet exteriors degreasing and shine polish',
            'Kitchen tiles and backsplash oil extraction',
            'Exhaust fan and outer chimney cleaning',
            'Sink, taps, and slab sanitization'
        ],
        exclusions: [
            'Cleaning inside cabinets with utensils (unless emptied)',
            'Internal chimney filters deep chemical wash',
            'Repairing of modular drawers or sliders'
        ],
        reviews: [
            { user: 'Swetha K., Miyapur', text: 'My kitchen was very greasy, but they made it look absolutely sparkling. Removed all oil stains.' },
            { user: 'Naresh G., Hitech City', text: 'Professional team, used safe chemicals and steam cleaning. Great service!' }
        ],
        spotlight: {
            title: 'Steam & Safe Sanitization',
            desc: 'Kitchen surfaces contact food. We use certified food-grade sanitizers and high-temperature steam to sanitize surfaces without chemical residues.'
        }
    },
    'Bathroom Cleaning': {
        globalDiscount: 25,
        icon: '/images/home-cleaning.png',
        photo: '/images/home-cleaning.png',
        desc: 'Descaling of bathroom floors, walls, taps, shower heads, and toilet bowls using professional acidic cleaners.',
        highlights: ['✦ Lime scale removal', '✦ Tap polish & shine', '✦ Anti-bacterial sanitization'],
        brands: ['Taski R6 / R1', 'Diversey Sanitizers', '3M Descaling Pads', 'Jaquar Polishers'],
        specializations: ['Hard Water Descaling', 'Commode Sanitization', 'Glass Partition Polishing', 'Chrome Fixture Restoration'],
        restorationFramework: [
            { title: 'Limescale Inspection', icon: 'fas fa-search' },
            { title: 'Descaler Gel Treatment', icon: 'fas fa-soap' },
            { title: 'Detail Scrubbing & Washing', icon: 'fas fa-broom' },
            { title: 'Sanitization & Steaming', icon: 'fas fa-cloud' },
            { title: 'Chrome & Glass Polishing', icon: 'fas fa-sparkles' }
        ],
        faultResolution: [
            { t: 'White Hard Water Marks', i: 'fas fa-droplet-slash', d: 'Eco-friendly descaling acid scrub on walls/floors.' },
            { t: 'Dull Chrome Taps & Shower', i: 'fas fa-wrench', d: 'Professional chrome buffing and shine recovery.' }
        ],
        subServices: [
            { id: 'clean-bath-1', name: 'Single Bathroom Deep Cleaning', price: 399, image: '/images/home-cleaning.png', desc: 'Full scrubbing, toilet sanitization, chrome polishing.' },
            { id: 'clean-bath-2', name: '2 Bathrooms Deep Cleaning Pack', price: 749, image: '/images/home-cleaning.png', desc: 'Includes deep sanitization and scaling protection.' },
            { id: 'clean-bath-3', name: '3 Bathrooms Deep Cleaning Pack', price: 1099, image: '/images/home-cleaning.png', desc: 'Saves more! Clean and scrub 3 bathrooms.' }
        ],
        inclusions: [
            'Wall tiles descaling and yellow stain removal',
            'Toilet bowl, commode, and urinal sanitization',
            'Chrome taps, showers, and mixers polish',
            'Exhaust fan, mirror, and partition clean'
        ],
        exclusions: [
            'Restoring permanently corroded/damaged taps',
            'Wall tile grout refilling/grouting',
            'Clearing main sewer line blockages'
        ],
        reviews: [
            { user: 'Sandeep B., Kukatpally', text: 'Highly impressed with the limescale removal. The glass partition looks transparent again!' },
            { user: 'Meera R., Gachibowli', text: 'Prompt and very neat work. They disinfected the whole bathroom.' }
        ],
        spotlight: {
            title: '100% Anti-Bacterial Hygiene',
            desc: 'We follow hospital-grade sanitization protocols to eliminate E. coli and Salmonella, leaving your bathrooms clean and fresh.'
        }
    },
    'Windows And Door Cleaning': {
        globalDiscount: 10,
        icon: '/images/home-cleaning.png',
        photo: '/images/home-cleaning.png',
        desc: 'Thorough vacuuming and wiping of window tracks, panes, glass doors, and wooden panels.',
        highlights: ['✦ Glass streak-free wipe', '✦ Track dust vacuuming', '✦ Frame cleaning'],
        brands: ['Colin Glass', 'Karcher Wet/Dry Vacuum', '3M Microfiber Cloths', 'Eco-Clean Glass Concentrates'],
        specializations: ['Track Vacuuming', 'Streak-Free Glass Polish', 'UPVC Frame Cleaning', 'Door Panel Shine'],
        restorationFramework: [
            { title: 'Track De-clogging', icon: 'fas fa-wind' },
            { title: 'Glass Spray & Scrub', icon: 'fas fa-soap' },
            { title: 'Squeegee Dry & Wipe', icon: 'fas fa-check' },
            { title: 'Frame Polish', icon: 'fas fa-sparkles' }
        ],
        faultResolution: [
            { t: 'Dust Blocked Tracks', i: 'fas fa-trash-can', d: 'High-suction narrow crevice tool vacuuming.' },
            { t: 'Water Stained Glass', i: 'fas fa-droplet', d: 'Vinegar-infused glass cleaning and streak-free buffing.' }
        ],
        subServices: [
            { id: 'clean-windows-5', name: 'Window & Door Detail (Up to 5 Units)', price: 499, image: '/images/home-cleaning.png', desc: 'Vacuum tracks & polish glass.' },
            { id: 'clean-windows-10', name: 'Window & Door Detail (Up to 10 Units)', price: 899, image: '/images/home-cleaning.png', desc: 'Best value for complete home glass/track cleaning.' }
        ],
        inclusions: [
            'Window panes exterior/interior glass wiping',
            'High-suction vacuuming of dust in tracks',
            'UPVC / wooden window frame chemical wash',
            'Mesh screens dusting and dry wipe'
        ],
        exclusions: [
            'Cleaning window glass from outside above 3rd floor without balcony',
            'Fixing broken channels or sliding wheels',
            'Replacing damaged window net/mesh'
        ],
        reviews: [
            { user: 'Sanjay V., Manikonda', text: 'My sliding tracks were full of construction dust. They cleaned it beautifully.' },
            { user: 'Rakesh S., Hitech City', text: 'Streak-free finish on all balcony glass doors. Satisfied with their work!' }
        ],
        spotlight: {
            title: 'High-Reach Glass Safety',
            desc: 'Our crew uses telescopic wipers and safety harnesses to clean window exteriors safely from within the property.'
        }
    },
    'Balcony Cleaning': {
        globalDiscount: 10,
        icon: '/images/home-cleaning.png',
        photo: '/images/home-cleaning.png',
        desc: 'Floor washing, railing dusting, and glass door cleaning for balconies and utility areas.',
        highlights: ['✦ Railing scrubbing', '✦ Floor pressure washing', '✦ Drainage desilt'],
        brands: ['Karcher Pressure Washers', 'Taski floor Scrubbers', '3M Brushes', 'Eco-Shield Disinfectant'],
        specializations: ['Railing Deep Clean', 'Floor Stain Scrubbing', 'Pigeon Drop Sanitization', 'Drain Cleaning'],
        restorationFramework: [
            { title: 'Debris Disposal', icon: 'fas fa-trash-can' },
            { title: 'Pressure Jet Washing', icon: 'fas fa-water' },
            { title: 'Hard Scrub & Buff', icon: 'fas fa-rotate' },
            { title: 'Railing Wipe & Protect', icon: 'fas fa-shield' }
        ],
        faultResolution: [
            { t: 'Pigeon Droppings Stains', i: 'fas fa-biohazard', d: 'Chemical pre-soak, scraping, and high-pressure jet wash.' },
            { t: 'Rust on Railings', i: 'fas fa-tools', d: 'Abrasive scrubbing and rust protector coating application.' }
        ],
        subServices: [
            { id: 'clean-balcony-s', name: 'Small Balcony Wash & Scrub', price: 299, image: '/images/home-cleaning.png', desc: 'Includes floor scrub and railing clean.' },
            { id: 'clean-balcony-l', name: 'Medium/Large Balcony Wash', price: 499, image: '/images/home-cleaning.png', desc: 'Detailed cleaning & stain removal.' }
        ],
        inclusions: [
            'High-pressure floor washing and scrubbing',
            'Sanitization and cleaning of pigeon droppings',
            'Railing dust wipe and chemical wash',
            'Balcony floor drain de-silting'
        ],
        exclusions: [
            'Washing exterior walls/facade below the balcony line',
            'Pigeon netting installation (available as separate service)',
            'Civil repair of balcony drainage leaks'
        ],
        reviews: [
            { user: 'Priya K., Miyapur', text: 'Highly recommend for balcony cleaning. They cleared all pigeon mess and made it spotless.' },
            { user: 'Vikram N., Hitech City', text: 'On-time and great work with pressure washer. Balcony is clean.' }
        ],
        spotlight: {
            title: 'Hygienic Bird Dropping Removal',
            desc: 'Pigeon droppings carry harmful bacteria. We use bio-active chemicals to completely sanitize and deodorize balcony spaces.'
        }
    },
    'Hotel Cleaning': {
        globalDiscount: 15,
        icon: '/images/commercial-cleaning.png',
        photo: '/images/commercial-cleaning.png',
        desc: 'Professional commercial grade hotel room sanitization and deep cleaning services.',
        highlights: ['✦ Linen dust-extraction', '✦ Glass and mirror polish', '✦ Room disinfection'],
        brands: ['Taski Commercial line', 'Karcher Professional', 'Ozone Generators', '3M Hygiene solutions'],
        specializations: ['Lobby Buffing', 'Room Deep Polish', 'Bathroom Sterilization', 'Ozone Odor Removal'],
        restorationFramework: [
            { title: 'Inspection Checklist', icon: 'fas fa-list' },
            { title: 'High-Suction Vacuuming', icon: 'fas fa-wind' },
            { title: 'Hospital-Grade Mop', icon: 'fas fa-soap' },
            { title: 'Sanitization & Steaming', icon: 'fas fa-cloud' },
            { title: 'Ozone De-odorizing', icon: 'fas fa-wind' }
        ],
        faultResolution: [
            { t: 'Musty Carpet Odor', i: 'fas fa-wind', d: 'Ozone treatment and deep encapsulation shampooing.' },
            { t: 'Salt build-up in Baths', i: 'fas fa-droplet-slash', d: 'Acid-free descaler and buffing machine restoration.' }
        ],
        subServices: [
            { id: 'comm-hotel-std', name: 'Standard Room Deep Clean', price: 499, image: '/images/commercial-cleaning.png', desc: 'Complete floor, wall, and bathroom wash.' },
            { id: 'comm-hotel-suite', name: 'Suite Room Luxury Clean', price: 899, image: '/images/commercial-cleaning.png', desc: 'Includes sofa sanitization & premium polish.' }
        ],
        inclusions: [
            'Floor scrubbing and diamond pad buffing',
            'Full room sanitization and anti-odor spray',
            'Ensuite bathroom descaling and commode scrub',
            'Glass, furniture, and TV panel wipe down'
        ],
        exclusions: [
            'Hotel laundry or heavy linen washing',
            'Kitchen pantry commercial equipment scrub',
            'Room upholstery repair'
        ],
        reviews: [
            { user: 'Ashok Y., Secunderabad', text: 'Professional commercial grade service. They cleaned 5 of our suites overnight. Very efficient!' },
            { user: 'Sheela T., Hitech City', text: 'Impressive odor extraction. The rooms feel fresh and sanitised.' }
        ],
        spotlight: {
            title: 'Audit-Ready Hygiene standards',
            desc: 'Our commercial teams follow ISO 9001 guidelines to ensure hotel rooms meet all local tourism and health department sanitization audits.'
        }
    },
    'Water Tank Cleaning': {
        globalDiscount: 20,
        icon: '/images/commercial-cleaning.png',
        photo: '/images/commercial-cleaning.png',
        desc: 'High-pressure water tank scrubbing, mud removal, and chlorine sanitization.',
        highlights: ['✦ Mud & algae extraction', '✦ Chlorine disinfection', '✦ Wall pressure scrub'],
        brands: ['Karcher High-Pressure Jets', 'Eco-friendly Chlorine Tablets', 'Submersible Pumps', 'UV Sanitizers'],
        specializations: ['Sump Mud Sweeping', 'Overhead Tank Scrubbing', 'Anti-Algae Treatment', 'Chlorine Sterilization'],
        restorationFramework: [
            { title: 'Water Drainage', icon: 'fas fa-droplet' },
            { title: 'Silt & Mud Vacuuming', icon: 'fas fa-wind' },
            { title: 'Pressure Jet Scrubbing', icon: 'fas fa-water' },
            { title: 'Chemical Sterilization', icon: 'fas fa-soap' },
            { title: 'UV Light Exposure', icon: 'fas fa-sun' }
        ],
        faultResolution: [
            { t: 'Algae & Moss Build-up', i: 'fas fa-biohazard', d: 'High-pressure jet washing and anti-algae solution spray.' },
            { t: 'Thick Mud Sediment', i: 'fas fa-trash-can', d: 'Heavy-duty sludge pump extraction and bottom scrubbing.' }
        ],
        subServices: [
            { id: 'comm-tank-1k', name: 'Sump/Overhead Tank Clean (< 1,000L)', price: 599, image: '/images/commercial-cleaning.png', desc: 'Scrub & disinfect.' },
            { id: 'comm-tank-3k', name: 'Water Tank Clean (1,000L - 3,000L)', price: 999, image: '/images/commercial-cleaning.png', desc: 'Pressure jet wash and algae sweep.' },
            { id: 'comm-tank-5k', name: 'Water Tank Clean (3,000L - 5,000L)', price: 1499, image: '/images/commercial-cleaning.png', desc: 'Heavy industrial scrub & disinfect.' }
        ],
        inclusions: [
            'Mud, silt, and dirty water pump-out',
            'Pressure jet washing of internal walls',
            'Anti-bacterial chlorine sanitization',
            'UV sterilization of water chamber'
        ],
        exclusions: [
            'Plumbing repair of inlet/outlet valves',
            'Civil works or crack sealing of brick sumps',
            'Cost of fresh water for tank refilling'
        ],
        reviews: [
            { user: 'Sravan G., Miyapur', text: 'Very systematic process. The water is absolutely clear now. Removed 2 inches of mud from sump.' },
            { user: 'Rakesh L., Kondapur', text: 'Prompt and professional. They showed before/after photos of the overhead tank.' }
        ],
        spotlight: {
            title: '6-Stage Tank Sterilization',
            desc: 'We use a unique 6-stage scientific process involving sludge extraction, scrubbing, jet wash, antibacterial spray, chemical dosing, and UV sterilizer radiation.'
        }
    },
    'Office Cleaning': {
        globalDiscount: 15,
        icon: '/images/commercial-cleaning.png',
        photo: '/images/commercial-cleaning.png',
        desc: 'Corporate office cleaning to maintain professional hygiene and polish for workspace floors and desks.',
        highlights: ['✦ Keyboard & desk disinfection', '✦ Trash clearing', '✦ Floor vacuuming'],
        brands: ['Taski floor Polishes', 'Karcher Industrial Vacuums', '3M Workspace Wipes', 'Diversey Sanitizers'],
        specializations: ['Workstation Sanitization', 'Carpet High-Vacuuming', 'Glass Panel Buffing', 'Pantry Scrubbing'],
        restorationFramework: [
            { title: 'Desk Disinfection', icon: 'fas fa-soap' },
            { title: 'Carpet Deep Extraction', icon: 'fas fa-wind' },
            { title: 'Tile Buffing', icon: 'fas fa-rotate' },
            { title: 'Pantry Sanitization', icon: 'fas fa-utensils' }
        ],
        faultResolution: [
            { t: 'Stained Office Carpets', i: 'fas fa-soap', d: 'Hot water injection-extraction and spot treating.' },
            { t: 'Dull Reception Floor', i: 'fas fa-rotate', d: 'Mechanised buffing with diamond gloss pads.' }
        ],
        subServices: [
            { id: 'comm-office-s', name: 'Office Deep Clean (< 1,000 SQFT)', price: 2499, image: '/images/commercial-cleaning.png', desc: 'Desk cleaning, bathroom descaling, vacuuming.' },
            { id: 'comm-office-m', name: 'Office Deep Clean (1,000 - 2,500 SQFT)', price: 4999, image: '/images/commercial-cleaning.png', desc: 'Detailed workplace deep scrubbing.' },
            { id: 'comm-office-l', name: 'Office Deep Clean (2,500 - 5,000 SQFT)', price: 8999, image: '/images/commercial-cleaning.png', desc: 'Includes team of 6 + floor buffing.' }
        ],
        inclusions: [
            'Workspace desk, keyboard, and phone sterilization',
            'Full carpet vacuuming and tile scrubbing',
            'Pantry slab, microwave, and sink wash',
            'Trash bins clearing and garbage bagging'
        ],
        exclusions: [
            'Wiping active server rooms or complex hardware panels',
            'Wall paint stains chemical removal',
            'Outside office window facade cleaning'
        ],
        reviews: [
            { user: 'Anil T., Gachibowli', text: 'Excellent office deep clean done over the weekend. Workstations are sparkling. Great job!' },
            { user: 'Srilakshmi K., Madhapur', text: 'Reliable team, clean and professional execution. Very useful for IT offices.' }
        ],
        spotlight: {
            title: 'Weekend & Night-Shift Cleaning',
            desc: 'We execute corporate office cleaning after business hours or during weekends to ensure zero disruption to your daily workflow.'
        }
    },
    'After Party Cleaning': {
        globalDiscount: 10,
        icon: '/images/commercial-cleaning.png',
        photo: '/images/commercial-cleaning.png',
        desc: 'Rapid event clean-up to remove trash, wash cups/plates, and deep clean party spaces.',
        highlights: ['✦ Quick trash disposal', '✦ Floor washing & scrubbing', '✦ Carpet vacuuming'],
        brands: ['Taski Fast-acting Cleaners', '3M Heavy trash Bags', 'Karcher high volume vacuums', 'Eco-Clean Deodorizers'],
        specializations: ['Trash Bagging', 'Floor Sanitization', 'Crockery Washing', 'De-odorization'],
        restorationFramework: [
            { title: 'Debris Collection', icon: 'fas fa-trash-can' },
            { title: 'Crockery Wash & Stack', icon: 'fas fa-utensils' },
            { title: 'Floor Washing & Mopping', icon: 'fas fa-soap' },
            { title: 'De-odorizing Mist Spray', icon: 'fas fa-wind' }
        ],
        faultResolution: [
            { t: 'Spilled Drinks on Floors', i: 'fas fa-droplet', d: 'Instant wet vacuuming and disinfectant mopping.' },
            { t: 'Bad Smoke/Alcohol Smell', i: 'fas fa-wind', d: 'Ultra-low volume deodorizing mist fogging.' }
        ],
        subServices: [
            { id: 'comm-party-s', name: 'Small Gathering Clean-up (< 20 guests)', price: 1499, image: '/images/commercial-cleaning.png', desc: 'Trash bagging and floor clean.' },
            { id: 'comm-party-m', name: 'Medium Event Clean-up (< 50 guests)', price: 2499, image: '/images/commercial-cleaning.png', desc: 'Floor scrub, toilet wash, trash disposal.' },
            { id: 'comm-party-l', name: 'Large Banquet Clean-up (> 50 guests)', price: 4999, image: '/images/commercial-cleaning.png', desc: 'Full commercial hall clean-up.' }
        ],
        inclusions: [
            'All event trash collection, bagging and disposal',
            'Glass cups, plates, and cutlery washing',
            'Floor scrub, wash, and drying post-party',
            'Restroom sanitization and deep wash'
        ],
        exclusions: [
            'Disposing of hazardous or illegal materials',
            'Heavy event stage dismantling or removal',
            'Repairing broken furniture or assets'
        ],
        reviews: [
            { user: 'Sanjay P., Jubilee Hills', text: 'Saved us a lot of stress. They cleaned up the entire hall in 3 hours. Sparkling clean.' },
            { user: 'Madhavi G., Banjara Hills', text: 'Prompt arrival at 2 AM. Very polite crew and clean work.' }
        ],
        spotlight: {
            title: '24/7 Emergency Deployment',
            desc: 'Whether it is late-night or early-morning, our express after-party clean-up teams are available on-demand to restore your home or banquet.'
        }
    },
    'Commercial Cleaning': {
        globalDiscount: 10,
        icon: '/images/commercial-cleaning.png',
        photo: '/images/commercial-cleaning.png',
        desc: 'Standard commercial space floor scrub and detailed cleaning. Pricing is per SQFT.',
        highlights: ['✦ Heavy duty scrubbing', '✦ Large area coverage', '✦ Industrial chemicals'],
        brands: ['Taski Industrial Cleaners', 'Karcher Floor Scrubbing Machines', '3M Abrasive Buffers', 'Diversey Eco line'],
        specializations: ['Slab Scrubbing', 'Industrial Dusting', 'Gym Floor Sanitization', 'Heavy Machinery Buffing'],
        restorationFramework: [
            { title: 'Floor Type Survey', icon: 'fas fa-magnifying-glass' },
            { title: 'Mechanised Scrubbing', icon: 'fas fa-rotate' },
            { title: 'Squeegee Extraction', icon: 'fas fa-water' },
            { title: 'Sanitizing Finish', icon: 'fas fa-shield' }
        ],
        faultResolution: [
            { t: 'High Traffic Scuff Marks', i: 'fas fa-arrows-spin', d: 'Mechanised diamond buffer pad scrubbing.' },
            { t: 'Deep Industrial Grime', i: 'fas fa-oil-can', d: 'High alkaline chemical solutions and jet wash.' }
        ],
        subServices: [
            { id: 'comm-clean-sqft', name: 'Commercial Space Scrubbing (Per SQFT)', price: 3, unit: '/ SQFT', image: '/images/commercial-cleaning.png', desc: 'Starts at ₹3 per SQFT. Minimum order ₹1500.' }
        ],
        inclusions: [
            'Mechanised single disc floor scrubbing',
            'Deep dust vacuuming of rafters and slabs',
            'Industrial chemical wash and drying',
            'Window glass and frame cleaning'
        ],
        exclusions: [
            'Scrubbing active heavy production machinery',
            'Handling toxic or hazardous manufacturing waste',
            'Facade high-rise cleaning'
        ],
        reviews: [
            { user: 'Gopal S., Cherlapally', text: 'Polished our warehouse floors beautifully. Professional machines used.' },
            { user: 'Raghav V., Jeedimetla', text: 'Best commercial rates in Hyderabad. The scrubbing was very fast.' }
        ],
        spotlight: {
            title: 'Heavy Duty Scrubbing Equipment',
            desc: 'We deploy high-torque single disc scrubbing machines and heavy wet-vacuum systems to clean large commercial areas rapidly.'
        }
    },
    'Villa Cleaning': {
        globalDiscount: 15,
        icon: '/images/commercial-cleaning.png',
        photo: '/images/commercial-cleaning.png',
        desc: 'Top-to-bottom villa cleaning with extra focus on luxury tiles, panels, and staircase glass.',
        highlights: ['✦ Spiral staircase clean', '✦ Glass panel buffing', '✦ Floor scrubbing'],
        brands: ['Taski Premium Line', 'Karcher Steam Generators', '3M Diamond Buffers', 'Colin Glass Polish'],
        specializations: ['Staircase Glass Polish', 'High Ceiling Chandelier Dusting', 'Marble Crystallization', 'Wooden Panel Polish'],
        restorationFramework: [
            { title: 'Villa Layout Audit', icon: 'fas fa-map' },
            { title: 'Ceiling & Wall Dusting', icon: 'fas fa-broom' },
            { title: 'Vacuuming & Scrubbing', icon: 'fas fa-soap' },
            { title: 'Glass & Chrome Polish', icon: 'fas fa-sparkles' },
            { title: 'Balcony & Yard Wash', icon: 'fas fa-water' },
            { title: 'Sanitization & Handover', icon: 'fas fa-check-double' }
        ],
        faultResolution: [
            { t: 'Dull Luxury Marble', i: 'fas fa-gem', d: 'Crystallization chemical buffing with high-speed machine.' },
            { t: 'Dirty Spiral Glass Panels', i: 'fas fa-border-all', d: 'Squeegee glass treatment and streak-free buffing.' }
        ],
        subServices: [
            { id: 'comm-villa-3bhk', name: '3 BHK Villa Deep Cleaning', price: 5999, image: '/images/commercial-cleaning.png', desc: 'Detailed top-to-bottom wash.' },
            { id: 'comm-villa-4bhk', name: '4 BHK Villa Deep Cleaning', price: 7999, image: '/images/commercial-cleaning.png', desc: 'Premium double team deployment.' },
            { id: 'comm-villa-5bhk', name: '5 BHK Luxury Villa Deep Clean', price: 9999, image: '/images/commercial-cleaning.png', desc: 'Full disinfection and marble shine check.' }
        ],
        inclusions: [
            'Top-to-bottom deep dry & wet dusting of all rooms',
            'Full kitchen and bathroom deep descaling & cleaning',
            'Glass windows, partitions, and staircase polish',
            'Balconies, terraces, and porch area pressure washing'
        ],
        exclusions: [
            'Lawn maintenance or garden grass mowing',
            'Exterior high-wall paint restoration',
            'Cleaning of items stored in vaults/safes'
        ],
        reviews: [
            { user: 'Srinath K., Jubilee Hills', text: 'Excellent villa cleaning. A crew of 8 arrived with heavy vacuum machines and steam guns. Impeccable work!' },
            { user: 'Madhurima S., Gachibowli', text: 'Brilliant job on our staircase and balcony glass. Looks premium.' }
        ],
        spotlight: {
            title: 'Premium Multi-Team Deployment',
            desc: 'For large villas, we deploy multiple specialised cleaning squads simultaneously to finish the task with extreme efficiency and care.'
        }
    },
    'Sofa Cleaning': {
        globalDiscount: 20,
        icon: '/images/furniture-cleaning.png',
        photo: '/images/furniture-cleaning.png',
        desc: 'Upholstery extraction dry cleaning to remove dust, food stains, and pet hair from sofa seats.',
        highlights: ['✦ Foam shampoo wash', '✦ Vacuum extraction', '✦ Odor treatment'],
        brands: ['Taski TR101 Shampoo', 'Karcher Extraction Machines', '3M Fabric Protectors', 'Eco-Clean Stain Solvents'],
        specializations: ['Fabric Spot Treatment', 'Leather Conditioning', 'HEPA Allergen Extraction', 'Deodorization Treatment'],
        restorationFramework: [
            { title: 'Fabric Audit & Spotting', icon: 'fas fa-search' },
            { title: 'High-Suction Dry Vacuum', icon: 'fas fa-wind' },
            { title: 'Active Foam Shampooing', icon: 'fas fa-soap' },
            { title: 'Extraction Rinse Cycle', icon: 'fas fa-water' },
            { title: 'Stain Eraser Treatment', icon: 'fas fa-eraser' }
        ],
        faultResolution: [
            { t: 'Deep Tea / Coffee Stains', i: 'fas fa-mug-hot', d: 'Targeted enzyme-based stain solvents and extraction.' },
            { t: 'Stubborn Pet Hair', i: 'fas fa-shield-cat', d: 'Silicon scraping brushes and high-lift HEPA vacuuming.' }
        ],
        subServices: [
            { id: 'furn-sofa-3', name: '3-Seater Sofa Dry Cleaning', price: 599, image: '/images/furniture-cleaning.png', desc: 'Vacuum & shampoo wash.' },
            { id: 'furn-sofa-5', name: '5-Seater Sofa Dry Cleaning', price: 899, image: '/images/furniture-cleaning.png', desc: 'Full extraction & stain removal.' },
            { id: 'furn-sofa-7', name: '7-Seater Sofa Dry Cleaning', price: 1199, image: '/images/furniture-cleaning.png', desc: 'Best value for family sofa set.' }
        ],
        inclusions: [
            'Deep high-suction vacuuming of sofa cushions',
            'Fabric foam shampoo scrub and mechanical rub',
            'Chemical extraction of dirty water & allergens',
            'Odor eliminator and freshness spray'
        ],
        exclusions: [
            'Fixing torn upholstery or broken wooden frames',
            'Full sofa cushion drying (requires 3-4 hours fan air)',
            'Cleaning of matching throw pillows (available as add-on)'
        ],
        reviews: [
            { user: 'Sumathi K., Miyapur', text: 'My light grey sofa had severe tea stains. They removed everything. Incredible extraction work!' },
            { user: 'Vikram A., Kondapur', text: 'Technicians were professional. They used a Karcher extraction machine. Sofa looks like new.' }
        ],
        spotlight: {
            title: 'Injection-Extraction Tech',
            desc: 'We use professional extraction systems that inject shampoo deep into the fabric fibers and instantly suck out the dirt, dust mites, and water.'
        }
    },
    'Carpet Cleaning': {
        globalDiscount: 15,
        icon: '/images/furniture-cleaning.png',
        photo: '/images/furniture-cleaning.png',
        desc: 'Industrial grade vacuuming and shampoo scrub for carpets to remove deep dirt and stains.',
        highlights: ['✦ Stain extraction', '✦ Soft bristle brushing', '✦ Anti-mold treatment'],
        brands: ['Taski Carpet line', 'Karcher Professional Vacs', '3M Abrasives', 'Eco-Clean Deodorizer'],
        specializations: ['Persian Carpet Care', 'Office Carpet Sanitization', 'Encapsulation Cleaning', 'Anti-Static Protection'],
        restorationFramework: [
            { title: 'Fiber Assessment', icon: 'fas fa-magnifying-glass' },
            { title: 'Allergen Dry Vacuum', icon: 'fas fa-wind' },
            { title: 'Shampoo Foam Blast', icon: 'fas fa-soap' },
            { title: 'Industrial Scrub Cycle', icon: 'fas fa-rotate' },
            { title: 'Vacuum Extraction Rinse', icon: 'fas fa-water' }
        ],
        faultResolution: [
            { t: 'Food Stain & Odor', i: 'fas fa-utensils', d: 'Enzymatic spot cleaner treatment and hot water extraction.' },
            { t: 'Dull / Compressed Fibers', i: 'fas fa-arrows-up-down', d: 'Soft bristle pile brushing and mechanical cleaning.' }
        ],
        subServices: [
            { id: 'furn-carpet-s', name: 'Small Carpet Wash (< 5x7 ft)', price: 399, image: '/images/furniture-cleaning.png', desc: 'Dry clean and vacuum.' },
            { id: 'furn-carpet-l', name: 'Large Carpet Wash (> 5x7 ft)', price: 699, image: '/images/furniture-cleaning.png', desc: 'Deep foam shampoo and extraction.' }
        ],
        inclusions: [
            'Deep dry vacuuming of carpet fibers',
            'Organic foam shampoo wash and scrubbing',
            'Water extraction and stain treatment',
            'Anti-bacterial spray coating'
        ],
        exclusions: [
            'Repairing frayed edges or loose threads',
            'Full carpet drying (takes 4-5 hours under ceiling fan)',
            'Handling vintage silk carpets without prior waiver'
        ],
        reviews: [
            { user: 'Sanjay S., Gachibowli', text: 'Great carpet wash. Removed dark traffic marks near the reception area.' },
            { user: 'Priya D., Madhapur', text: 'Clean job, the smell of carpet is totally gone. Very professional.' }
        ],
        spotlight: {
            title: 'Deep Pile Care',
            desc: 'Our deep pile extraction process rejuvenates flat carpet fibers, lifting them back to their original texture and softness.'
        }
    },
    'Mattress Cleaning': {
        globalDiscount: 15,
        icon: '/images/furniture-cleaning.png',
        photo: '/images/furniture-cleaning.png',
        desc: 'High-suction UV vacuuming and shampoo sanitization to remove dust mites, sweat stains, and dead skin.',
        highlights: ['✦ Dust mite UV kill', '✦ Sweat stain extraction', '✦ Fabric refresher'],
        brands: ['Taski TR line', 'Karcher Extraction Machine', 'Ozone Sanitizer', '3M anti-allergen spray'],
        specializations: ['Dust Mite Extraction', 'Sweat Stain Bleaching', 'Urine Stain Treatment', 'Sanitization Shield'],
        restorationFramework: [
            { title: 'UV Light Mite Kill', icon: 'fas fa-sun' },
            { title: 'Dry HEPA Vacuuming', icon: 'fas fa-wind' },
            { title: 'Stain Solvent Treatment', icon: 'fas fa-soap' },
            { title: 'Water-Jet Extraction', icon: 'fas fa-water' }
        ],
        faultResolution: [
            { t: 'Yellow Sweat Ring Stains', i: 'fas fa-circle', d: 'Active oxygen booster treatment and extraction.' },
            { t: 'Allergy Flare-ups', i: 'fas fa-biohazard', d: 'Deep UV-C vacuuming to eradicate micro-mites and skin scales.' }
        ],
        subServices: [
            { id: 'furn-mattress-s', name: 'Single Bed Mattress Clean', price: 499, image: '/images/furniture-cleaning.png', desc: 'Top side extraction.' },
            { id: 'furn-mattress-d', name: 'Double Bed Mattress Clean', price: 799, image: '/images/furniture-cleaning.png', desc: 'Dual side vacuuming and shampoo.' }
        ],
        inclusions: [
            'UV-C sanitization to kill 99% dust mites',
            'High-suction HEPA dry vacuuming of all sides',
            'Stain shampoo scrub and extraction on top side',
            'Antibacterial fabric protection spray'
        ],
        exclusions: [
            'Cleaning interior coir/spring structural rust',
            'Complete drying (drying takes 4-6 hours)',
            'Removing permanent chemical dye stains'
        ],
        reviews: [
            { user: 'Madhavi V., Miyapur', text: 'My kids mattress had multiple stains. They cleaned it and now it looks sterile and clean.' },
            { user: 'Arun K., Kondapur', text: 'Excellent UV sterilization. Sleep quality has definitely improved.' }
        ],
        spotlight: {
            title: 'UV-C Sterilization Tech',
            desc: 'We combine high-power UV-C radiation with 1800W vacuum suction to kill and extract microscopic dust mites and their allergens.'
        }
    },
    'Chair Cleaning': {
        globalDiscount: 10,
        icon: '/images/furniture-cleaning.png',
        photo: '/images/furniture-cleaning.png',
        desc: 'Upholstery clean for dining or office chairs to remove armrest dirt and food stains.',
        highlights: ['✦ Fabric / leather polish', '✦ Backrest vacuuming', '✦ Frame wiping'],
        brands: ['Taski TR101', 'Karcher Spot Extractors', '3M Leather Conditioner', 'Colin'],
        specializations: ['Office Ergonomic Chair Wash', 'Dining Chair Fabric Scrub', 'Leather Chair Buffing', 'Armrest Degreasing'],
        restorationFramework: [
            { title: 'Dry Vacuuming', icon: 'fas fa-wind' },
            { title: 'Spot Treatment', icon: 'fas fa-soap' },
            { title: 'Encapsulation Wash', icon: 'fas fa-water' },
            { title: 'Frame Polish', icon: 'fas fa-sparkles' }
        ],
        faultResolution: [
            { t: 'Dirty Fabric Armrests', i: 'fas fa-user-tie', d: 'Heavy alkaline degreasing and extraction.' },
            { t: 'Faded Leather Seats', i: 'fas fa-circle-notch', d: 'Cream based conditioning and wax polishing.' }
        ],
        subServices: [
            { id: 'furn-chair-unit', name: 'Dining/Office Chair Clean (Per Unit)', price: 99, unit: '/ Seat', image: '/images/furniture-cleaning.png', desc: 'Minimum order of 4 units required.' }
        ],
        inclusions: [
            'Seat cushion foam shampoo scrub',
            'Backrest fabric extraction cleaning',
            'Chair legs and steel frame wiping',
            'Stain remover spot treatment'
        ],
        exclusions: [
            'Repairing broken mesh or hydraulic systems',
            'Replacing cracked leather segments',
            'Washing non-fabric plastic/wood components (wiped only)'
        ],
        reviews: [
            { user: 'Shekar P., Jubilee Hills', text: 'Had 20 office chairs cleaned. The team did it very quickly. Armrest grease is gone.' },
            { user: 'Nisha S., Gachibowli', text: 'Perfect cleaning for our dining chairs. Very affordable rates.' }
        ],
        spotlight: {
            title: 'Ergonomic Mesh Care',
            desc: 'Office mesh chairs trap skin flakes and dust. We use fine spray extractors to clean the mesh without stretching or weakening the material.'
        }
    },
    'Microwave Cleaning': {
        globalDiscount: 10,
        icon: '/images/furniture-cleaning.png',
        photo: '/images/furniture-cleaning.png',
        desc: 'Internal chamber steam clean and carbon degreasing for microwave ovens.',
        highlights: ['✦ Food grease steam clean', '✦ Odor removal', '✦ Plate wash'],
        brands: ['Eco-Clean Food Safe Degreasers', 'Steam Generators', '3M Non-scratch sponges', 'Diversey Sanitizer'],
        specializations: ['Chamber Degreasing', 'Waveguide Cleaning', 'Odor Neutralization', 'Outer Body Polish'],
        restorationFramework: [
            { title: 'Visual Diagnostics', icon: 'fas fa-search' },
            { title: 'Steam Ingestion', icon: 'fas fa-cloud' },
            { title: 'Carbon Scrubbing', icon: 'fas fa-soap' },
            { title: 'Food-grade Sanitization', icon: 'fas fa-check' }
        ],
        faultResolution: [
            { t: 'Burned Food Odor', i: 'fas fa-wind', d: 'Citric acid steam wash and active carbon wipe.' },
            { t: 'Greasy Door Glass', i: 'fas fa-eye', d: 'Heavy-duty food-safe degreaser scrubbing.' }
        ],
        subServices: [
            { id: 'furn-micro-solo', name: 'Solo Microwave Internal Clean', price: 299, image: '/images/furniture-cleaning.png', desc: 'Steam scrub and glass tray clean.' },
            { id: 'furn-micro-conv', name: 'Convection Microwave Deep Clean', price: 399, image: '/images/furniture-cleaning.png', desc: 'Chamber scrub and fan wipe.' }
        ],
        inclusions: [
            'Internal heating chamber deep degreasing',
            'Glass turntable plate and ring washing',
            'Door gasket seal cleaning and sanitization',
            'Outer cabinet dusting and panel polish'
        ],
        exclusions: [
            'Repairing broken keypad buttons or display',
            'Fixing internal electrical sparking faults',
            'Replacing cracked turntable glass plates'
        ],
        reviews: [
            { user: 'Anjali D., Miyapur', text: 'Very neat microwave cleaning. Completely removed the burnt butter smell.' },
            { user: 'Sanjay B., Kondapur', text: 'Excellent grease removal. Inside is absolutely clean and safe.' }
        ],
        spotlight: {
            title: '100% Food-Safe Chemicals',
            desc: 'We exclusively use natural citric-based chemical solutions to clean microwaves. No toxic residues or harmful chemical vapors left behind.'
        }
    },
    'Refrigerator Cleaning': {
        globalDiscount: 15,
        icon: '/images/furniture-cleaning.png',
        photo: '/images/furniture-cleaning.png',
        desc: 'Tray removal, vegetable box scrub, door gasket cleaning, and full chemical sanitization.',
        highlights: ['✦ Gasket mold removal', '✦ Tray descaling', '✦ Bio-degradable sanitization'],
        brands: ['Diversey Food-grade Sanitizers', '3M Sponge pads', 'Eco-Clean Descaler', 'Ozone Deodorizer'],
        specializations: ['Gasket Mold Extraction', 'Veg Box Disinfection', 'Anti-Odor Ozone Spray', 'Tray Descaling'],
        restorationFramework: [
            { title: 'Tray Dismantling', icon: 'fas fa-circle-minus' },
            { title: 'Scrub & Descaling', icon: 'fas fa-soap' },
            { title: 'Gasket Steam Wipe', icon: 'fas fa-cloud' },
            { title: 'Anti-Odor Spraying', icon: 'fas fa-wind' },
            { title: 'Assembly & Test', icon: 'fas fa-check-double' }
        ],
        faultResolution: [
            { t: 'Black Mold on Door Gasket', i: 'fas fa-biohazard', d: 'High-pressure steam sanitization and mold scraping.' },
            { t: 'Fish / Rotten Food Odor', i: 'fas fa-wind', d: 'Ozone gas sanitization and baking soda wipe down.' }
        ],
        subServices: [
            { id: 'furn-fridge-s', name: 'Single Door Refrigerator Clean', price: 399, image: '/images/furniture-cleaning.png', desc: 'Tray scrub and cabinet wipe.' },
            { id: 'furn-fridge-d', name: 'Double Door Refrigerator Clean', price: 599, image: '/images/furniture-cleaning.png', desc: 'Includes gasket wash and defroster sanitization.' },
            { id: 'furn-fridge-sbs', name: 'Side-by-Side Fridge Deep Clean', price: 899, image: '/images/furniture-cleaning.png', desc: 'Ultimate detail wash & anti-odor wipe.' }
        ],
        inclusions: [
            'All trays and vegetable drawers removal and wash',
            'Full interior cabinet deep cleaning and sanitization',
            'Magnetic door gasket steam wash and disinfection',
            'Back condenser grill dusting and vacuuming'
        ],
        exclusions: [
            'Defrosting heavy freezer ice (requires customer to switch off 3 hours prior)',
            'Repairing active compressor or gas leakage issues',
            'Replacing cracked plastic trays/shelves'
        ],
        reviews: [
            { user: 'Srilatha G., Miyapur', text: 'Cleaned my double door fridge perfectly. All the food odors are gone and the gasket looks clean.' },
            { user: 'Karthik N., Hitech City', text: 'Professional service, they even vacuumed the back condenser. Recommended!' }
        ],
        spotlight: {
            title: 'Mold-Free Door Gaskets',
            desc: 'Fridge door gaskets trap food particles and moisture, breeding black mold. Our steam cleaning process removes 99% mold spores safely.'
        }
    },
    'Cabinet Cleaning': {
        globalDiscount: 10,
        icon: '/images/furniture-cleaning.png',
        photo: '/images/furniture-cleaning.png',
        desc: 'Dusting, vacuuming, and wood polishing for wardrobes and kitchen cabinets.',
        highlights: ['✦ Internal wood dusting', '✦ Hinge dust removal', '✦ Outer wood polish'],
        brands: ['3M Wood Polish', 'Karcher Crevice Vacuum', 'Colin', 'Eco-Clean wood oils'],
        specializations: ['Wardrobe Internal Dusting', 'Drawer Slider Cleaning', 'Hinge Lubrication', 'Wood Veneer Polish'],
        restorationFramework: [
            { title: 'Internal Vacuuming', icon: 'fas fa-wind' },
            { title: 'Chemical Wipe Down', icon: 'fas fa-soap' },
            { title: 'Hinge Oil Spray', icon: 'fas fa-oil-can' },
            { title: 'Wood conditioning Polish', icon: 'fas fa-sparkles' }
        ],
        faultResolution: [
            { t: 'Squeaky Hinger / Sticking Drawers', i: 'fas fa-tools', d: 'Silicon spray lubrication and screw tightening.' },
            { t: 'Faded Wooden Cabinet Doors', i: 'fas fa-paint-roller', d: 'Wax conditioning and wood veneer oiling.' }
        ],
        subServices: [
            { id: 'furn-cabinet-s', name: 'Cabinet Detail (Up to 5 Drawers)', price: 499, image: '/images/furniture-cleaning.png', desc: 'Vacuum & polish.' },
            { id: 'furn-cabinet-l', name: 'Cabinet Detail (Above 5 Drawers)', price: 899, image: '/images/furniture-cleaning.png', desc: 'Best value for full bedroom wardrobes.' }
        ],
        inclusions: [
            'Internal shelves dry vacuuming and wipe',
            'Cabinet door fronts wood conditioning polish',
            'Hinge dust extraction and lubrication',
            'Drawer tracks cleaning and slide audit'
        ],
        exclusions: [
            'Emptying cabinet items (wardrobes must be pre-emptied)',
            'Repairing warped wood or deep water damage',
            'Painting cabinet interior boards'
        ],
        reviews: [
            { user: 'Monika K., Jubilee Hills', text: 'Excellent woodwork polishing. Made my wardrobe look brand new.' },
            { user: 'Siddharth M., Banjara Hills', text: 'Clean job, they vacuumed all the corners in the drawers.' }
        ],
        spotlight: {
            title: 'Premium Veneer Polishing',
            desc: 'We use non-silicon wood oils to restore wood grain depth and shield it against moisture and dust build-up.'
        }
    },
    'Home Sanitization': {
        globalDiscount: 15,
        icon: '/images/sanitization-service.png',
        photo: '/images/sanitization-service.png',
        desc: 'Full home disinfection using cold fogging machine and hospital-grade sanitizers.',
        highlights: ['✦ Ultra-low volume fogging', '✦ Touchpoint wipe down', '✦ Safe for kids & pets'],
        brands: ['Virex II 256', 'Diversey sanitizers', '3M Disinfectant Wipes', 'ULV Cold Foggers'],
        specializations: ['ULV Mist Fogging', 'High Touchpoint Disinfection', 'Anti-Viral Coating', 'Allergen Shield'],
        restorationFramework: [
            { title: 'Touchpoint Wiping', icon: 'fas fa-soap' },
            { title: 'ULV Mist Preparation', icon: 'fas fa-shuffle' },
            { title: 'Full House Cold Fogging', icon: 'fas fa-cloud' },
            { title: 'Air Circulation Test', icon: 'fas fa-wind' }
        ],
        faultResolution: [
            { t: 'Flu / Virus Outbreak', i: 'fas fa-shield-virus', d: 'Hospital-grade ULV fogging and full touchpoint disinfection.' },
            { t: 'Musty Pet Germ Odors', i: 'fas fa-cat', d: 'Anti-microbial spray misting and sanitization.' }
        ],
        subServices: [
            { id: 'san-home-1bhk', name: '1 BHK Full Home Sanitization', price: 599, image: '/images/sanitization-service.png', desc: 'Disinfect bedroom, bathroom, kitchen.' },
            { id: 'san-home-2bhk', name: '2 BHK Full Home Sanitization', price: 799, image: '/images/sanitization-service.png', desc: 'Fogging & manual touchpoint wipes.' },
            { id: 'san-home-3bhk', name: '3 BHK Full Home Sanitization', price: 999, image: '/images/sanitization-service.png', desc: 'Complete home disinfection with 7-day shield.' }
        ],
        inclusions: [
            'Full room cold ULV fogging sanitization',
            'Door handles, switches, and remote wiping',
            'Bathroom commodes and sinks chemical sanitization',
            'Safe child/pet friendly non-toxic chemicals'
        ],
        exclusions: [
            'Deep kitchen grease cleaning (this is sanitization only)',
            'Washing carpets/upholstery (sprayed only)',
            'Wiping active electrical wiring circuits'
        ],
        reviews: [
            { user: 'Vikram S., Miyapur', text: 'Clean and safe fogging. No bad chemical smells. Safe for my kids.' },
            { user: 'Sneha L., Kondapur', text: 'Booked after someone had a viral fever. Sanitized the entire home in 40 mins.' }
        ],
        spotlight: {
            title: 'ULV Cold Fogging Technology',
            desc: 'Our ULV (Ultra-Low Volume) cold fogging machines disperse micro-droplets of sanitizers that suspend in air, reaching every corner and crevice.'
        }
    },
    'Office Sanitization': {
        globalDiscount: 10,
        icon: '/images/sanitization-service.png',
        photo: '/images/sanitization-service.png',
        desc: 'Commercial corporate office cold fogging sanitization. Priced per SQFT.',
        highlights: ['✦ Desk & server room fogging', '✦ Minimal interruption', '✦ Certified disinfectants'],
        brands: ['Virex II 256', 'ULV Cold Foggers', '3M Wipes', 'Bio-Shield Pro'],
        specializations: ['IT Server Room Safe Fogging', 'Workstation Sanitization', 'Conference Room Disinfection', 'Touchpoint Polish'],
        restorationFramework: [
            { title: 'Workstation Wiping', icon: 'fas fa-soap' },
            { title: 'ULV Mist Fogging', icon: 'fas fa-cloud' },
            { title: 'AC Filter Sanitization', icon: 'fas fa-wind' },
            { title: 'Compliance Report', icon: 'fas fa-file-contract' }
        ],
        faultResolution: [
            { t: 'Office Infection Concerns', i: 'fas fa-shield-virus', d: 'Workplace workstation ULV fogging and door-handle wiping.' },
            { t: 'Dirty HVAC Vent Air', i: 'fas fa-wind', d: 'Vent disinfection spray and misting.' }
        ],
        subServices: [
            { id: 'san-office-sqft', name: 'Office Fogging Sanitization (Per SQFT)', price: 1.5, unit: '/ SQFT', image: '/images/sanitization-service.png', desc: 'Starts at ₹1.5 per SQFT. Minimum order ₹1000.' }
        ],
        inclusions: [
            'ULV cold mist fogging for all cabins and bays',
            'Workstation desks and keyboard wiping',
            'Conference rooms and pantry sanitization',
            'Disinfection completion certificate issued'
        ],
        exclusions: [
            'Cleaning office carpet stains (requires shampoo separately)',
            'Wiping inside personal lockers/drawers',
            'Filing paper documents or organizing desks'
        ],
        reviews: [
            { user: 'Sunil K., Gachibowli', text: 'Sanitized our IT park office of 5000 sqft in 2 hours. Professional team and documents were safe.' },
            { user: 'Rohan N., Madhapur', text: 'Minimal disruption, clean work. They used Virex chemicals.' }
        ],
        spotlight: {
            title: 'Safe for IT Equipment',
            desc: 'Our cold fogging droplets are so fine (under 20 microns) that they disinfect keyboard keys and monitor panels safely without leaving moisture.'
        }
    },
    'Vehicle Sanitization': {
        globalDiscount: 10,
        icon: '/images/sanitization-service.png',
        photo: '/images/sanitization-service.png',
        desc: 'Deep spray sanitization of vehicle interiors, handlebars, and seats.',
        highlights: ['✦ AC vent disinfection', '✦ Steering & dashboard wipe', '✦ Helmet sanitization free'],
        brands: ['Virex II', '3M Leather Clean', 'Micro-spray guns', 'ULV Handheld Mist'],
        specializations: ['AC Vent Disinfection', 'Steering Wheel Sanitization', 'Seat Germ extraction', 'Helmet Deodorizer'],
        restorationFramework: [
            { title: 'Interior Dusting', icon: 'fas fa-wind' },
            { title: 'Dashboard & Steering Wipe', icon: 'fas fa-soap' },
            { title: 'AC Vent Fogging', icon: 'fas fa-cloud' },
            { title: 'Odor Spray', icon: 'fas fa-wind' }
        ],
        faultResolution: [
            { t: 'Musty AC Vent Smells', i: 'fas fa-wind', d: 'High pressure steam sanitization in vents.' },
            { t: 'Sticky Steering & Dashboard', i: 'fas fa-arrows-spin', d: 'Alcohol free sanitizing wipes and leather polish.' }
        ],
        subServices: [
            { id: 'san-veh-bike', name: 'Two-Wheeler Full Sanitization', price: 199, image: '/images/sanitization-service.png', desc: 'Handlebar, seat, and body spray.' },
            { id: 'san-veh-car', name: 'Hatchback/Sedan Interior Sanitization', price: 399, image: '/images/sanitization-service.png', desc: 'Touchpoint wipe and AC vent fogging.' },
            { id: 'san-veh-suv', name: 'SUV/Lorry Interior Sanitization', price: 599, image: '/images/sanitization-service.png', desc: 'Includes cargo area fogging & dashboard wipe.' }
        ],
        inclusions: [
            'Steering wheel, gearbox, and handles sanitization',
            'AC vent fogging and filter sanitization spray',
            'Interior seats and floor mats mist spray',
            'Free helmet sanitization for two-wheelers'
        ],
        exclusions: [
            'Exterior body washing (available under MeeHelper Auto Care)',
            'Removing deep carpet grease stains',
            'Engine bay sanitization'
        ],
        reviews: [
            { user: 'Rahul T., Kondapur', text: 'Very neat dashboard wipe and AC vent cleaning. The car smells clean now.' },
            { user: 'Vikram M., Gachibowli', text: 'Fast bike sanitization. Helmet clean was a great free add-on!' }
        ],
        spotlight: {
            title: 'AC Vent Microbe Shield',
            desc: 'AC vents breed mold and bacteria. We use targeted chemical sprays that disinfect internal duct lines safely.'
        }
    },
    'Commercial Sanitization': {
        globalDiscount: 10,
        icon: '/images/sanitization-service.png',
        photo: '/images/sanitization-service.png',
        desc: 'Retail shops, clinics, gyms, and warehouse cold fogging disinfection.',
        highlights: ['✦ High footprint touchpoints', '✦ Certified chemicals', '✦ Same-day certificate'],
        brands: ['Virex II 256', 'ULV Industrial Fogger', '3M Wipes', 'Bio-Shield Pro'],
        specializations: ['Gym Equipment Sanitization', 'Clinic Sterile Fogging', 'Warehouse Vector Disinfection', 'Retail Touchpoint Wash'],
        restorationFramework: [
            { title: 'Site Inspection', icon: 'fas fa-search' },
            { title: 'Gym/Clinic Equipment Wipe', icon: 'fas fa-soap' },
            { title: 'ULV Cold Fogging', icon: 'fas fa-cloud' },
            { title: 'Sanitized Log Tagging', icon: 'fas fa-tag' }
        ],
        faultResolution: [
            { t: 'High Infection Risks in Gyms', i: 'fas fa-dumbbell', d: 'Antibacterial equipment spray and full floor ULV fogging.' },
            { t: 'Clinic Sterile Audit Prep', i: 'fas fa-hospital', d: 'Hospital-grade chemical fogging and documentation check.' }
        ],
        subServices: [
            { id: 'san-comm-sqft', name: 'Commercial Fogging Sanitization (Per SQFT)', price: 2, unit: '/ SQFT', image: '/images/sanitization-service.png', desc: 'Starts at ₹2 per SQFT. Minimum order ₹1500.' }
        ],
        inclusions: [
            'High-power industrial ULV cold fogging',
            'Gym machines, seats, and weights wipe down',
            'Clinic lobbies, counters, and chambers disinfection',
            'Official sanitization certificate display decal'
        ],
        exclusions: [
            'Internal cleaning of clinical test machinery',
            'Deep floor tile descaling (available under cleaning)',
            'Handling hazardous bio-medical waste disposal'
        ],
        reviews: [
            { user: 'Sreedhar G., Tarnaka', text: 'We got our gym sanitized. Excellent response times and neat execution. DECALS look great on windows.' },
            { user: 'Dr. Madhavi, Secunderabad', text: 'Certified clinical sanitization. Very neat work, safe for patients.' }
        ],
        spotlight: {
            title: 'Sanitized Store Badges',
            desc: 'After every commercial sanitization, we provide a "MeeHelper Sanitized" door decal to assure your walk-in customers of their safety.'
        }
    },
    'MeeHelper Auto Care': {
        globalDiscount: 20,
        icon: '/images/doorstep-wash.png',
        photo: '/images/doorstep-wash.png',
        desc: 'MeeHelper Auto Care is Hyderabad\'s premium **doorstep car detailing and steam wash service**. We bring high-pressure steam wash systems, deep cleaning extractors, and buffing machines to your doorstep. Clean, professional, and scratch-free detailing is guaranteed.',
        highlights: [
            '✦ High-Pressure Snow Foam & Steam Wash',
            '✦ Deep Vacuuming & Upholstery Steaming',
            '✦ Engine Bay Detailing & Steam Wash',
            '✦ Full Body Buffing & Machine Polishing',
            '✦ Antibacterial Treatment & Sanitization',
            '✦ Premium Dashboard & Leather Dressing',
            '✦ 300+ Verified Bookings Across Hyderabad',
            '✦ Doorstep Detailing — We Bring Our Power/Water'
        ],
        brands: ['3M Car Detailing', 'Meguiars Wax', 'Turtle Wax Premium', 'Rupes Polishers', 'Sonax'],
        specializations: ['Steam Detailing', 'Interior Scrub & Wash', 'Paint Protection & Polish', 'AC Sanitization', 'Alloy Wheel Detail'],
        restorationFramework: [
            { title: 'Vehicle Inspection & Preparation', icon: 'fas fa-search' },
            { title: 'Full Exterior Steam Application', icon: 'fas fa-water' },
            { title: 'Interior Deep Vacuum & Air Blow', icon: 'fas fa-wind' },
            { title: 'AC Vent Sanitization & Steam Clean', icon: 'fas fa-shield' },
            { title: 'Dashboard & Trim Liquid Wax dressing', icon: 'fas fa-sparkles' },
            { title: 'Machine Buffing & Paint Polishing', icon: 'fas fa-circle-notch' }
        ],
        faultResolution: [
            { t: 'Stubborn Interior Odors & Stains', i: 'fas fa-wind', d: 'Deep upholstery extraction & antibacterial steam wash.' },
            { t: 'Faded Paint & Paint Swirls', i: 'fas fa-sparkles', d: 'Rubbing compound and buffing machine restoration.' },
            { t: 'Dirty AC Vents & Microbes', i: 'fas fa-shield-virus', d: 'High temperature steam sanitization.' }
        ],
        subServices: [
            {
                id: 'wash-bike-eco',
                name: 'Doorstep Bike Eco Wash',
                price: 299,
                category: 'Bike Wash',
                image: '/images/bike-wash-eco.png',
                desc: 'Pressure jet wash, cleaning, and dry wipe. Ideal for daily commuters.'
            },
            {
                id: 'wash-bike-prem',
                name: 'Doorstep Bike Premium Wash',
                price: 499,
                category: 'Bike Wash',
                image: '/images/bike-wash-premium.png',
                desc: 'Active snow foam wash, tyre dressing, dashboard wax polish, and chain lubrication.'
            },
            {
                id: 'wash-car-std',
                name: 'Car Exterior Wash & Vacuum',
                price: 799,
                category: 'Car Wash',
                image: '/images/car-wash-standard.png',
                desc: 'Snow foam wash, tire dressing, interior high-suction vacuum, and floor mat cleaning.'
            },
            {
                id: 'wash-car-suv',
                name: 'SUV Premium Wash & Polish',
                price: 1199,
                category: 'Car Wash',
                image: '/images/car-wash-suv.png',
                desc: 'Complete snow foam wash, interior vacuuming, dashboard polish, glass wipe, and alloy polish.'
            },
            {
                id: 'meehelper-wheels-standard',
                name: 'STANDARD (Spadex Steam Wash)',
                price: 1499,
                category: 'Spadex Car Detailing',
                image: '/images/steam-wash-standard.png',
                desc: 'Full Exterior Steam Wash, Vacuuming of Interiors, Dashboard & Door panels Cleaning, Boot cleaning, Windshield cleaning, Wheel & Wheel Arch cleaning, Tyres dressing, Deodorizing, Total interiors steam wash and anti-bacterial treatment. For MUVs, Mahindra Thar, XUVs, 6+ Seaters & Premium branded cars Rs 300 extra charges.'
            },
            {
                id: 'meehelper-wheels-premium',
                name: 'PREMIUM (Standard & Spadex Elite)',
                price: 2499,
                category: 'Spadex Car Detailing',
                image: '/images/steam-wash-premium.png',
                desc: 'Interiors Deep cleaning (4 layers-Vacuuming Steaming, Washing & Premium polishing), Seats, Door panels, Dashboard and Roof steaming, Washing and premium polishing, Engine bay steam Wash dressing. For MUVs, Mahindra Thar, XUVs, 6+ Seaters & Premium branded cars Rs 300 extra charges.'
            },
            {
                id: 'meehelper-wheels-pro',
                name: 'SPADEX PRO (Elite Package)',
                price: 3699,
                category: 'Spadex Car Detailing',
                image: '/images/steam-wash-pro.png',
                desc: 'Spadex Standard + Spadex Premium + Full Body Buffing & Polishing. For MUVs, Mahindra Thar, XUVs, 6+ Seaters & Premium branded cars Rs 300 extra charges.'
            }
        ],
        inclusions: [
            'Eco-friendly deep steam exterior/interior cleaning',
            'Full body microfiber scratch-free towel drying',
            'All materials, power, and water brought by us',
            '100% satisfaction and paint protection guarantee'
        ],
        exclusions: [
            'Paint scratch removal (deep metal scratches)',
            'Interior seat removal (done only if requested)',
            'Engine mechanical repair or diagnosis'
        ],
        reviews: [
            { user: 'Sanjay T., Madhapur', text: 'My SUV looks brand new. The steam wash removed all food stains and dog hair. Very thorough detailing!' },
            { user: 'Vikram K., Gachibowli', text: 'They spent 3 hours on the Spadex Pro buffing. High-gloss reflection is back. Professional team!' }
        ],
        spotlight: {
            title: 'Doorstep Steam Detailing Van',
            desc: 'We carry our own mobile diesel steam machines, vacuum systems, and silent generators in our service vans. You don\'t need to provide anything — just sit back and watch your vehicle shine.'
        }
    },
    'After Party Cleaning': {
        icon: '/images/specialized-cleaning.png',
        photo: '/images/specialized-cleaning.png',
        desc: 'Are you a party lover but don\'t know how to clean the after-party mess all around? Call <strong>MeeHelper</strong> immediately! We provide the best after-party cleaning services in Hyderabad to clear out the mess and give our customers complete peace of mind. Our after-party cleaning service is highly budget-friendly and is excellent for residential as well as commercial events. From corporate halls, luxury apartments, and villas, we have the best after-party cleaners in Hyderabad who can handle all types of cleaning requirements. Active cleaning is completed standard and at a reasonable price at your spot.',
        highlights: [
            '✦ Well Trained & Certified Party Cleaners',
            '✦ Customized Deep Cleaning Packages',
            '✦ Use of Safe & Eco-friendly Biodegradable Solutions',
            '✦ Flat, Affordable Rates — No Hidden Charges',
            '✦ 100% Quality & Satisfaction Guarantee',
            '✦ Same-Day Emergency Cleaning Available',
            '✦ High-Pressure Scrubbing & Vacuuming of Party Areas',
            '✦ Thorough Trash Disposal & Bathroom Sanitization'
        ],
        brands: ['Residential Halls', 'Corporate Lounges', 'Villas & Apartments', 'Wedding Venues', 'Open Terrace Spaces'],
        specializations: ['Trash Bagging & Disposal', 'Upholstery Vacuuming', 'Kitchen Deep Cleaning', 'Bathroom Disinfection'],
        subServices: [
            { id: 'party-cleanup-std', name: 'Standard Event Space Cleaning', price: 1782, category: 'Event Cleaning', image: '/images/specialized-cleaning.png', desc: 'Starts at ₹1782 (up to 500 SQFT). Standard trash disposal, floor sweep, and dusting.' },
            { id: 'party-cleanup-deep', name: 'Deep After Party Cleaning', price: 2499, category: 'Deep Clean', image: '/images/specialized-cleaning.png', desc: 'Starts at ₹2499. Thorough scrubbing of party area, upholstery vacuuming, bathroom cleaning, and kitchen deep cleaning.' }
        ],
        inclusions: [
            'Thorough cleaning and scrubbing of the party area',
            'Vacuuming sofas, upholstery, and other furniture',
            'Cleaning and sanitizing all the bathrooms and sinks',
            'Deep cleaning the kitchen area',
            'Cleaning wall dust, cobwebs, and decorations',
            'Taking out and bagging all the trash'
        ],
        exclusions: [
            'Washing dishes and cutlery (unless requested separately)',
            'Cleaning of external lawns or parking areas',
            'Repair of damaged furniture or property fixtures'
        ],
        reviews: [
            { user: 'Sameer K., Gachibowli', text: 'Used MeeHelper after our housewarming party. The team was extremely fast, bagged all the trash, and left the bathrooms sanitized. Highly recommended!' },
            { user: 'Srilatha M., Jubilee Hills', text: 'Professional party cleaners. They cleared the terrace and living room area perfectly. No hidden fees.' }
        ]
    },
    'Safety & Home Protection': {
        icon: '/images/safety-home-protection.png',
        photo: '/images/safety-home-protection.png',
        desc: 'Protect your family and preserve your property with Hyderabad\'s premier <strong>safety & home protection solutions</strong>. We specialize in advanced CCTV security cameras, smart door locks, wall waterproofing, and emergency locksmith services.',
        highlights: [
            '✦ Advanced CCTV Security Systems & AMC Maintenance',
            '✦ Biometric & Smart Keypad Door Lock Installation',
            '✦ Professional Damp-Proof Wall Waterproofing & Crack Sealing',
            '✦ Emergency Locksmith & Lock Repair Support',
            '✦ High-Quality Equipment & Standard Installation Processes',
            '✦ Certified, Background-Verified Field Engineers',
            '✦ Up to 180-Day Warranty on Hardware & Installations',
            '✦ Same-Day Diagnostic & Setup Visits across Hyderabad'
        ],
        brands: ['Hikvision', 'CP Plus', 'Dahua', 'Yale', 'Godrej', 'Dr. Fixit', 'Berger Homeshield', 'Link Locks'],
        specializations: ['Surveillance Integration', 'Biometric Configuration', 'Damp Injection Shield', 'Emergency Key Entry'],
        subServices: [
            { id: 'safety-cctv', name: 'CCTV Camera Installation & Maintenance', price: 1499, category: 'Safety Installation', image: '/images/safety-cctv.png', desc: 'Starts at ₹1499. Includes professional camera mount, wiring, and DVR/NVR configuration.' },
            { id: 'safety-smartlock', name: 'Smart Door Lock Installation', price: 999, category: 'Lock Installation', image: '/images/safety-smartlock.png', desc: 'Starts at ₹999. Fitting of premium smart lock on wooden/metal doors and configuration.' },
            { id: 'safety-waterproofing', name: 'Wall Waterproofing & Crack Sealing', price: 45, category: 'Waterproofing', image: '/images/safety-waterproofing.png', desc: 'Starts at ₹45 per SQFT. Sealing of damp areas, cracks, and applying protective barrier.' },
            { id: 'safety-locksmith', name: 'Emergency Locksmith Service', price: 499, category: 'Lock Services', image: '/images/safety-locksmith.png', desc: 'Starts at ₹499. Rapid response lockout help, key repairs, and cylinder replacements.' }
        ],
        inclusions: [
            'Standard mounting, configuration, and setup labor',
            'Background-verified, certified technicians',
            'Complete post-installation tutorial and testing',
            '100% genuine hardware and installation materials used'
        ],
        exclusions: [
            'Cost of core hardware products (cameras, locks) unless purchased from us',
            'Major wall masonry or painting work',
            'External scaffolding costs for height repairs'
        ],
        reviews: [
            { user: 'Karthik R., Gachibowli', text: 'Excellent CCTV camera installation. The technician configured the app on my phone in 10 minutes. Clean wiring!' },
            { user: 'Srilatha M., Jubilee Hills', text: 'Called the emergency locksmith at midnight when we locked ourselves out. They arrived in 30 mins. Great service!' }
        ]
    },
    'Home IT & Office Setup': {
        icon: '/images/home-it-setup.png',
        photo: '/images/home-it-setup.png',
        desc: 'Upgrade your digital workspace and home connectivity with our <strong>professional Home IT & office setup solutions</strong>. We provide WiFi router configuration, range extenders, desktop PC repairs, smart home integration, and OS setup.',
        highlights: [
            '✦ WiFi Network Optimization & Range Extender Setup',
            '✦ PC & Laptop Hardware Diagnostics & Parts Upgrades',
            '✦ Smart Home Voice Assistant & IoT Integration',
            '✦ Windows & Mac OS Installation & Softwares Setup',
            '✦ Clean Cable Management & Dual Monitor Desktop Setup',
            '✦ Background-Verified, Highly Skilled IT Engineers',
            '✦ Quick Diagnostics & Same-Day Doorstep Service',
            '✦ Flat Service Fee structure with Transparent Quotes'
        ],
        brands: ['TP-Link', 'Netgear', 'D-Link', 'Asus', 'HP', 'Dell', 'Lenovo', 'Apple', 'Logitech', 'Microsoft'],
        specializations: ['Network Design', 'OS Installation', 'IoT Configuration', 'Data Recovery Backup'],
        subServices: [
            { id: 'it-wifi', name: 'WiFi Router Setup & Range Extender Installation', price: 399, category: 'Network Setup', image: '/images/it-wifi.png', desc: 'Starts at ₹399. Router configuration, password setup, and WiFi speed tests.' },
            { id: 'it-pcrepair', name: 'Desktop PC & Printer Repair', price: 599, category: 'Hardware Repair', image: '/images/it-pcrepair.png', desc: 'Starts at ₹599. Hardware troubleshooting, RAM/SSD upgrades, and driver setups.' },
            { id: 'it-smarthome', name: 'Smart Home Setup & Hub Integration', price: 799, category: 'Smart Home', image: '/images/it-smarthome.png', desc: 'Starts at ₹799. Configuration of smart speakers, smart lights, and voice actions.' },
            { id: 'it-laptopsoft', name: 'Laptop Software Setup & OS Installation', price: 499, category: 'Software Support', image: '/images/it-laptopsoft.png', desc: 'Starts at ₹499. Fresh OS install, critical drivers setup, and essential software.' }
        ],
        inclusions: [
            'Diagnostics and resolution of software errors',
            'Premium SSD/RAM hardware installation service fee',
            'Configuration of router and printer settings',
            'Network testing for high-speed connectivity'
        ],
        exclusions: [
            'Cost of replacement hardware (RAM, SSD, routers, printers)',
            'Official license keys for software/operating systems',
            'Data recovery from physically dead hard drives'
        ],
        reviews: [
            { user: 'Naresh K., Hitech City', text: 'My home office WiFi was very slow. The IT tech installed a mesh extender and optimized my router. Speed is doubled now!' },
            { user: 'Divya S., Kondapur', text: 'Super fast SSD upgrade. My laptop boots in 5 seconds now. Highly professional and polite engineer.' }
        ]
    },
    'Premium Pest Control Options': {
        icon: '/images/premium-pest-control.png',
        photo: '/images/premium-pest-control.png',
        desc: 'Eradicate stubborn pests from your premises using <strong>premium pest control options in Hyderabad</strong>. We offer eco-friendly, government-licensed treatments for rodents, beehives, ants, and termites.',
        highlights: [
            '✦ Safe, Odorless, and Government-Approved Pest Sprays',
            '✦ Heavy-Duty Rodent Baiting & Entry Points Sealing',
            '✦ Safe Beehive & Wasp Nest Removal at High Elevations',
            '✦ Pre-Construction Sub-Soil Anti-Termite Chemical Barriers',
            '✦ Comprehensive Ant Spray & Gel Bait Treatments',
            '✦ 100% Eco-Safe Chemicals, Safe for Kids & Pets',
            '✦ Up to 90-Day Protection Guarantee on Pest Treatments',
            '✦ Background-Verified, Certified Pest Controllers'
        ],
        brands: ['Bayer', 'Syngenta', 'BASF', 'UPL', 'FMC', 'Godrej Pest', 'PCI Standards'],
        specializations: ['Rodent Trapping', 'Anti-Termite Injection', 'Height Wasp Removal', 'Gel Baiting System'],
        subServices: [
            { id: 'pest-rodent', name: 'Rodent & Rat Control', price: 1200, category: 'Pest Eradication', image: '/images/pest-rodent.png', desc: 'Starts at ₹1200. Trap placement, toxic/non-toxic baiting, and entry point suggestions.' },
            { id: 'pest-beehive', name: 'Beehive & Wasp Nest Removal', price: 999, category: 'Height Safety', image: '/images/pest-beehive.png', desc: 'Starts at ₹999. Safe extraction of beehives and wasp nests from high walls or balconies.' },
            { id: 'pest-termite', name: 'Pre-Construction Anti-Termite Treatment', price: 12, category: 'Termite Defense', image: '/images/pest-termite.png', desc: 'Starts at ₹12 per SQFT. Foundational chemical spray and pipe network setup.' },
            { id: 'pest-ant', name: 'Complete Ant Control & Prevention', price: 799, category: 'Insect Control', image: '/images/pest-ant.png', desc: 'Starts at ₹799. Spot treatment with gel baits and perimeter spray for permanent removal.' }
        ],
        inclusions: [
            'Application of certified odorless pesticides',
            'Protective equipment worn by pest controllers',
            'Eco-friendly child and pet-safe gel baits',
            'Follow-up advice and preventive checklist'
        ],
        exclusions: [
            'Structural woodwork repair for termite damage',
            'Sealing of large brickwork holes (must be done by mason)',
            'Clean-up of old beehive residues (honey stains)'
        ],
        reviews: [
            { user: 'Pranav P., Kukatpally', text: 'Termite infestation in my kitchen cabinets was completely solved. The chemical was odorless and very effective.' },
            { user: 'Swetha G., Manikonda', text: 'They removed a huge wasp nest from my 10th-floor balcony safely. Highly skilled technicians.' }
        ]
    },
    'Specialized Cleaning & Utility Services': {
        icon: '/images/specialized-cleaning.png',
        photo: '/images/specialized-cleaning.png',
        desc: 'Keep your property hygienic and functional with Hyderabad\'s premier <strong>specialized cleaning & utility services</strong>. We offer septic tank cleaning, facade window cleaning, water tank sanitization, and deep kitchen/bathroom scrubbing.',
        highlights: [
            '✦ High-Pressure Vacuum Septic Tank & Sump Clearance',
            '✦ Professional High-Rise Facade & Window Cleaning',
            '✦ 6-Stage Water Tank Cleaning & UV Disinfection',
            '✦ Deep Acid-Free Kitchen & Bathroom Scrubbing',
            '✦ High-Pressure Jet Washers & Heavy-Duty Scrubbers',
            '✦ Biodegradable, Safe & Strong Cleaning Compounds',
            '✦ Certified, Trained Cleaning Teams & Supervisors',
            '✦ 100% Satisfaction & High Hygiene Standards Guaranteed'
        ],
        brands: ['Karcher', 'Taski', 'Diversey', '3M Professional', 'Bosch Cleaning', 'Harpic Pro', 'Lizol Pro'],
        specializations: ['High-Pressure Jetting', '6-Stage UV Sanitizing', 'Facade Safety Harness', 'Vacuum Sludge Extraction'],
        subServices: [
            { id: 'clean-septictank', name: 'Septic Tank & Drainage Cleaning', price: 2499, category: 'Drainage Utilities', image: '/images/clean-septictank.png', desc: 'Starts at ₹2499. High-pressure pump suction of sludge and blockages clearance.' },
            { id: 'clean-facade', name: 'High-Rise Facade Window Cleaning', price: 3499, category: 'Exterior Cleaning', image: '/images/clean-facade.png', desc: 'Starts at ₹3499. Cleaning of exterior building glass and windows using safety harness.' },
            { id: 'clean-watertank', name: 'Water Tank & Sump Deep Cleaning', price: 999, category: 'Water Hygiene', image: '/images/clean-watertank.png', desc: 'Starts at ₹999. Multi-stage high-pressure jet wash, sludge vacuuming, and UV sterilization.' },
            { id: 'clean-scrubbing', name: 'Kitchen & Bathroom Deep Scrubbing', price: 1899, category: 'Interior Scrubbing', image: '/images/clean-scrubbing.png', desc: 'Starts at ₹1899. Deep scrubbing of walls, tiles, shower glass, sinks, and kitchen counters.' }
        ],
        inclusions: [
            'Heavy industrial vacuum and jet washing equipment',
            'High-grade eco-friendly cleaning detergents',
            'Standard safety gear and harness for height works',
            'Complete post-cleaning inspection and report'
        ],
        exclusions: [
            'Clearing blockages in municipal main lines (outside property)',
            'Structural repair of leaky water tanks',
            'Scaffold installation (cost extra if height exceeds harness capability)'
        ],
        reviews: [
            { user: 'Rahul V., Gachibowli', text: 'Very professional water tank cleaning. They vacuumed out all mud and sanitized it. Water feels fresh now!' },
            { user: 'Meenakshi N., Madhapur', text: 'My bathrooms had hard water stains on glass and tiles. The scrubbing team worked for 3 hours and made it shine. Great job!' }
        ]
    },
    'CCTV Camera Installation & Maintenance': {
        icon: '/images/safety-cctv.png',
        photo: '/images/safety-cctv.png',
        desc: 'Keep your home and workplace secure with <strong>MeeHelper\' professional CCTV camera installation services</strong> in Hyderabad. We offer high-definition security camera mountings, complete DVR/NVR wiring, and mobile monitoring app setup for CP Plus, Hikvision, and Dahua systems.',
        highlights: [
            '✦ Complete Dome & Bullet Camera Setups',
            '✦ DVR/NVR Installation & HDD Storage Setup',
            '✦ Smart Phone Live Feed App Configuration',
            '✦ Background-Verified, Professional Security Techs',
            '✦ Transparent Pricing with Zero Hidden Charges',
            '✦ Up to 180-Day Warranty on Hardware Installations'
        ],
        brands: ['CP Plus', 'Hikvision', 'Dahua', 'Sony', 'Panasonic', 'EZVIZ'],
        specializations: ['Dome Mounting', 'Bullet Installation', 'IP Camera Setup', 'NVR Routing', 'Power Supply Setup'],
        subServices: [
            { id: 'cctv-setup-std', name: 'Standard 2-Camera Setup & Installation', price: 1499, image: '/images/safety-cctv.png', desc: 'Mounting of 2 HD cameras, cabling, DVR connection, and live feed configuration.' },
            { id: 'cctv-setup-prem', name: 'Premium 4-Camera Setup & Installation', price: 2999, image: '/images/safety-cctv.png', desc: 'Mounting of 4 HD cameras, complete cabling, power supply setup, and network routing.' }
        ],
        inclusions: [
            'Camera physical mounting and angle adjustment',
            'Power supply wiring and DVR connectivity',
            'Mobile app setup and network testing'
        ],
        exclusions: [
            'Cost of cameras, DVR, HDD, and cables (charged extra)',
            'Scaffolding/ladder setup for heights above 15 feet',
            'Conduit pipe installation in walls'
        ],
        reviews: [
            { user: 'Karthik S., Hitech City', text: 'Installed 4 CP Plus cameras at my shop. The work was very neat, cables are hidden nicely. Great job!' },
            { user: 'Manish P., Kondapur', text: 'Prompt service. The technician adjusted the camera view to cover all blind spots. Highly satisfied!' }
        ]
    },
    'Smart Door Lock Installation': {
        icon: '/images/safety-smartlock.png',
        photo: '/images/safety-smartlock.png',
        desc: 'Upgrade your home entryway security with <strong>MeeHelper\' smart door lock installation services</strong> in Hyderabad. We specialize in fitting high-security biometric locks, digital keypad locks, and IoT smart locks on wooden and metal doors.',
        highlights: [
            '✦ Professional Biometric & Keypad Lock Installation',
            '✦ Seamless IoT App & Smart Home Integration',
            '✦ Experienced Technicians with Heavy-Duty Carving Tools',
            '✦ Precise Door Frame Strike Plate Alignments',
            '✦ Complete Demo & User Pin Configuration',
            '✦ 100% Secure & Clean Setup Guarantee'
        ],
        brands: ['Yale', 'Godrej', 'Samsung', 'Luzon', 'Solity', 'Dahua'],
        specializations: ['Wooden Door Fitting', 'Metal Door Fitting', 'Biometric Setup', 'IoT Integration', 'Strike Plate Alignment'],
        subServices: [
            { id: 'lock-install-std', name: 'Standard Smart Lock Installation', price: 999, image: '/images/safety-smartlock.png', desc: 'Professional door routing, lock mounting, pin setup, and user demo.' },
            { id: 'lock-install-gate', name: 'Premium Smart Gate Lock Installation', price: 1499, image: '/images/safety-smartlock.png', desc: 'Installation of high-security smart locks on metal gates, outdoor waterproof models.' }
        ],
        inclusions: [
            'Precise door routing and mounting cut-outs',
            'Hardware lock fitting and alignment check',
            'Pin/fingerprint setup tutorial'
        ],
        exclusions: [
            'Cost of the smart lock unit itself (unless purchased from us)',
            'Custom metal welding for gated lock boxes',
            'Battery replacements'
        ],
        reviews: [
            { user: 'Aman V., Gachibowli', text: 'Excellent installation of my Yale lock. The technician carved the wooden door precisely. Working smoothly.' },
            { user: 'Swetha R., Jubilee Hills', text: 'Very professional. Set up the fingerprint and mobile app access quickly. Highly recommended!' }
        ]
    },
    'Wall Waterproofing & Crack Sealing': {
        icon: '/images/safety-waterproofing.png',
        photo: '/images/safety-waterproofing.png',
        desc: 'Restore and protect your walls from moisture damage with <strong>MeeHelper\' damp waterproofing and crack sealing services</strong> in Hyderabad. We use high-performance chemical membranes, damp injection barriers, and polyurethane sealants to fix walls permanently.',
        highlights: [
            '✦ Multi-Stage Chemical Moisture Barrier Application',
            '✦ Durable Polyurethane Crack Sealing & Epoxy Injections',
            '✦ Advanced Dampness Defense for Interior & Exterior Walls',
            '✦ Heavy-Duty Anti-Fungal Protective Coating',
            '✦ Background-Verified, Professional Wall Masons',
            '✦ Up to 5-Year Leakage Warranty on Waterproofing'
        ],
        brands: ['Dr. Fixit', 'Berger Homeshield', 'Asian Paints SmartCare', 'Fosroc', 'Sika', 'Pidilite'],
        specializations: ['Wall Dampness Shield', 'Epoxy Injection', 'PU Crack Seal', 'Sump Waterproofing', 'Roof Coating'],
        subServices: [
            { id: 'waterproof-crack', name: 'Wall Crack Sealing & Localized Waterproofing', price: 45, unit: '/ SQFT', image: '/images/safety-waterproofing.png', desc: 'Starts at ₹45 per SQFT. Sealing of visible cracks and localized chemical coat. Min ₹1500.' },
            { id: 'waterproof-deep', name: 'Deep Wall Dampness Chemical Injection Shield', price: 85, unit: '/ SQFT', image: '/images/safety-waterproofing.png', desc: 'Starts at ₹85 per SQFT. Pressure chemical injection barrier to prevent rising damp.' }
        ],
        inclusions: [
            'Wall surface scraping and loose cement removal',
            'Application of polymer-modified mortar and sealants',
            'Double coat chemical waterproof lining'
        ],
        exclusions: [
            'Cost of final masonry plastering or decorative wall painting',
            'Scaffolding setup for height repairs exceeding 12 feet',
            'Repairing leakage source from neighbor\'s property'
        ],
        reviews: [
            { user: 'Ramesh K., Kukatpally', text: 'My bedroom wall had severe dampness. They did chemical waterproofing and it is dry now even after heavy rains. Excellent work!' },
            { user: 'Divya M., Madhapur', text: 'Professional crack sealing. The team scraped out all old flaking paint, sealed the crack, and waterproofed it. Clean execution.' }
        ]
    },
    'Emergency Locksmith Service': {
        icon: '/images/safety-locksmith.png',
        photo: '/images/safety-locksmith.png',
        desc: 'Get rapid assistance with lockouts and broken locks with <strong>MeeHelper\' emergency locksmith services</strong> in Hyderabad. Our mobile technicians are available same-day to repair locks, replace key cylinders, and bypass door locks safely.',
        highlights: [
            '✦ Lockout Assistance & Safe Non-Damage Door Opening',
            '✦ Immediate Lock Cylinder & Key Replacements',
            '✦ Precision Duplication & Re-Keying Services',
            '✦ Background-Verified, Trusted Lock Experts',
            '✦ Quick 30-Minute Dispatch across Hyderabad Localities',
            '✦ Standard Handyman rates with No Exploitative Pricing'
        ],
        brands: ['Godrej', 'Link', 'Harrison', 'Yale', 'Dorset', 'Europa'],
        specializations: ['Door Lockout Bypass', 'Cylinder Swap', 'Broken Key Extraction', 'Master Key System', 'Padlock Cutting'],
        subServices: [
            { id: 'locksmith-bypass', name: 'Emergency Door Lock Bypass (Lockout Help)', price: 499, image: '/images/safety-locksmith.png', desc: 'Bypassing jammed or locked residential door locks without damage to the door.' },
            { id: 'locksmith-replace', name: 'Lock Cylinder Replacement & Key Change', price: 699, image: '/images/safety-locksmith.png', desc: 'Fitting of brand-new lock cylinder with set of new keys. Cylinder cost extra.' }
        ],
        inclusions: [
            'Door opening labor, cylinder removal, and fitting',
            'Testing of key mechanism and door alignment',
            'Non-damage lock picking procedures'
        ],
        exclusions: [
            'Cost of the lock body/cylinder hardware (charged on actuals)',
            'Repairing broken wood on doors from forced entry before locksmith arrival',
            'Opening of highly secure premium vault safes'
        ],
        reviews: [
            { user: 'Vikram S., Hitech City', text: 'Locked out of my flat at 11 PM. The locksmith arrived in 25 minutes and opened the door without damaging the lock. LIFE SAVER!' },
            { user: 'Deepa G., Manikonda', text: 'Replaced my main door lock cylinder. Fast work and provided 4 brand-new keys. Reasonable rates.' }
        ]
    },
    'WiFi Router Setup & Range Extender Installation': {
        icon: '/images/it-wifi.png',
        photo: '/images/it-wifi.png',
        desc: 'Eliminate network dead zones and optimize internet speeds with <strong>MeeHelper\' professional WiFi router setup services</strong> in Hyderabad. We configure router protocols, secure passwords, set up mesh systems, and align range extenders.',
        highlights: [
            '✦ Complete WiFi Router configuration & WAN settings',
            '✦ Network Range Extender & Repeater installations',
            '✦ High-Speed Mesh WiFi coverage planning',
            '✦ Dynamic IP & DNS optimization for Gaming/Streaming',
            '✦ Secure WPA3 Security & Guest SSID setup',
            '✦ Background-Verified, Expert Network IT Engineers'
        ],
        brands: ['TP-Link', 'Netgear', 'D-Link', 'Asus', 'Tenda', 'Linksys', 'Google Nest'],
        specializations: ['Router Configuration', 'Range Optimization', 'Mesh Setup', 'Guest SSID Secure', 'DNS Tuning'],
        subServices: [
            { id: 'wifi-setup-router', name: 'Standard Router Config & Password Security', price: 399, image: '/images/it-wifi.png', desc: 'Configuring WAN/LAN settings, SSID setup, WPA password lock, and testing.' },
            { id: 'wifi-setup-extender', name: 'WiFi Range Extender / Mesh Installation', price: 599, image: '/images/it-wifi.png', desc: 'Ideal for multi-story homes. Placing and pairing extenders/mesh nodes to remove dead spots.' }
        ],
        inclusions: [
            'Router configuration, firmware updates, and optimization',
            'Connecting up to 5 smart devices to new network',
            'WiFi signal mapping in primary rooms'
        ],
        exclusions: [
            'Cost of the router, mesh system, range extenders, or LAN cables',
            'Laying of outdoor/underground fiber optic lines',
            'Liaisoning with local Internet Service Providers'
        ],
        reviews: [
            { user: 'Naresh T., Gachibowli', text: 'WiFi was very slow in my bedroom. The tech installed a mesh system and speed is now full throughout the flat. Excellent!' },
            { user: 'Priya K., Kukatpally', text: 'Fast setup of my new TP-Link router. The technician also configured the Guest network and blocked unwanted sites.' }
        ]
    },
    'Desktop PC & Printer Repair': {
        icon: '/images/it-pcrepair.png',
        photo: '/images/it-pcrepair.png',
        desc: 'Restore your PC\'s productivity with <strong>MeeHelper\' professional desktop PC and printer repair services</strong> in Hyderabad. We troubleshoot slow performance, diagnose hardware failures, install RAM/SSD upgrades, and configure office printers.',
        highlights: [
            '✦ Hardware diagnostics & logic board troubleshooting',
            '✦ High-speed SSD upgrades & RAM expansions',
            '✦ Desktop power supply (SMPS) replacements',
            '✦ Printer driver setups & network connection config',
            '✦ Thermal paste application & dust clean-up',
            '✦ Certified, background-verified IT hardware technicians'
        ],
        brands: ['HP', 'Dell', 'Lenovo', 'Asus', 'Acer', 'Intel', 'AMD', 'Canon', 'Epson', 'Brother'],
        specializations: ['SMPS Replacement', 'SSD Upgrades', 'RAM Expansion', 'Thermal Clean', 'Printer Driver Setup'],
        subServices: [
            { id: 'pc-repair-diag', name: 'Desktop PC Hardware Diagnosis & Diagnostic visit', price: 599, image: '/images/it-pcrepair.png', desc: 'Troubleshooting boot errors, blue screens, or dead computers. Diagnostic fee.' },
            { id: 'pc-repair-printer', name: 'Printer Installation & Network Setup', price: 499, image: '/images/it-pcrepair.png', desc: 'Connecting USB/Wi-Fi printers, configuring drivers on PCs, and loading ink cartridges.' }
        ],
        inclusions: [
            'Diagnostic tests, internal cleaning, and processor repasting',
            'Configuration of printer software on up to 2 devices',
            'Transparent quotation for hardware replacement parts'
        ],
        exclusions: [
            'Cost of new computer hardware components (SSD, RAM, SMPS, motherboard)',
            'Data recovery from physically damaged hard drive disks',
            'Refilling printer ink cartridges'
        ],
        reviews: [
            { user: 'Sanjay D., Dilshuknagar', text: 'My PC was not booting up. The technician identified a failed SMPS, replaced it, and cleaned the CPU fan. Very helpful!' },
            { user: 'Archana V., Gachibowli', text: 'Configured my wireless Canon printer to print from both my phone and laptop. Fast service and clean work.' }
        ]
    },
    'Smart Home Setup & Hub Integration': {
        icon: '/images/it-smarthome.png',
        photo: '/images/it-smarthome.png',
        desc: 'Transform your residence into a connected workspace with <strong>MeeHelper\' smart home setup services</strong> in Hyderabad. We pair voice assistants, integrate smart lights, configure IR blasters, and set up home automation scenes.',
        highlights: [
            '✦ Voice Assistant Integration (Alexa, Google Home)',
            '✦ Smart LED Bulb & Smart Plug configuration',
            '✦ Smart IR Blaster setup to control TV & AC',
            '✦ Network Pairing & Multi-device Syncing',
            '✦ Custom Automation Scenes (e.g. "Alexa, Good Night")',
            '✦ Background-Verified, Smart Tech Specialists'
        ],
        brands: ['Amazon Echo', 'Google Nest', 'Philips Hue', 'Wipro Smart', 'Syska Smart', 'Oakter', 'Tuya'],
        specializations: ['Alexa Pair', 'Google Home Connect', 'Philips Hue Setup', 'IR Blaster Config', 'Automation Scene'],
        subServices: [
            { id: 'smart-setup-basic', name: 'Basic Smart Assistant & Light Setup', price: 799, image: '/images/it-smarthome.png', desc: 'Configuring 1 smart speaker (Alexa/Google) and pairing up to 4 smart lights/plugs.' },
            { id: 'smart-setup-full', name: 'Full Smart Living Room Automation', price: 1499, image: '/images/it-smarthome.png', desc: 'Pairing voice speaker, configuring smart IR blaster to control TV/AC, and creating custom scenes.' }
        ],
        inclusions: [
            'Network registration, app downloading, and profile setup',
            'Teaching voice command shortcuts and routines',
            'Integration with home WiFi network'
        ],
        exclusions: [
            'Cost of smart speakers, plugs, bulbs, IR blasters, or accessories',
            'Electrical wiring and socket installation (can be booked separately)',
            'Configuring non-compatible legacy appliances'
        ],
        reviews: [
            { user: 'Rohit P., Gachibowli', text: 'Set up my Alexa system to control my living room lights and television. The technician explained all the voice commands very clearly.' },
            { user: 'Lalitha M., Jubilee Hills', text: 'Connected all my Wipro smart bulbs to my Google Nest speaker. Excellent work and quick setup.' }
        ]
    },
    'Laptop Software Setup & OS Installation': {
        icon: '/images/it-laptopsoft.png',
        photo: '/images/it-laptopsoft.png',
        desc: 'Solve slow speeds and software errors with <strong>MeeHelper\' laptop software services</strong> in Hyderabad. We install Windows/macOS operating systems, remove viruses, configure security tools, and install essential drivers.',
        highlights: [
            '✦ Operating System Installation (Windows 11/10, macOS)',
            '✦ Virus, Spyware & Adware Malware Removal',
            '✦ System Speed-Up & Registry optimization',
            '✦ Driver installations (Audio, WiFi, Graphic cards)',
            '✦ Data backup & migration to new operating systems',
            '✦ Certified Software Engineers at your doorstep'
        ],
        brands: ['Microsoft Windows', 'Apple macOS', 'Norton Antivirus', 'McAfee', 'MS Office', 'Adobe Creative Suit'],
        specializations: ['OS Installation', 'Virus Clean-up', 'System Speedup', 'Driver Updates', 'Data Migration'],
        subServices: [
            { id: 'laptop-os-install', name: 'Fresh OS Installation (with Drivers)', price: 499, image: '/images/it-laptopsoft.png', desc: 'Format drive, fresh install of Windows/macOS, configuration of critical hardware drivers.' },
            { id: 'laptop-software-clean', name: 'Virus Removal & Performance Tune-up', price: 599, image: '/images/it-laptopsoft.png', desc: 'Full malware scanning, junk file deletion, registry optimization, and startup speedup.' }
        ],
        inclusions: [
            'Software installation, user profile configuration, and network pairing',
            'Installation of user-provided official software licenses',
            'Post-installation software testing'
        ],
        exclusions: [
            'Cost of official Operating System or software license keys',
            'Hardware repair of laptops (unless requested separately)',
            'Data recovery from damaged files'
        ],
        reviews: [
            { user: 'Vikram A., Kondapur', text: 'My Dell laptop was running extremely slow. Fresh Windows install completely resolved it. Boots up in seconds now!' },
            { user: 'Sneha G., Banjara Hills', text: 'Fast virus cleanup. The tech removed all the pop-up adware and installed my antivirus program. Highly satisfied.' }
        ]
    },
    'Rodent & Rat Control': {
        icon: '/images/pest-rodent.png',
        photo: '/images/pest-rodent.png',
        desc: 'Eliminate dangerous and destructive rats with <strong>MeeHelper\' rodent control services</strong> in Hyderabad. We place high-grade rodent traps, secure entry points, and use government-licensed non-leak baits to clear rats safely.',
        highlights: [
            '✦ Multi-Point Rodent Trap & Box Placement',
            '✦ Government-Approved Safe Baiting System',
            '✦ Entry Points Mapping & Structural sealing advice',
            '✦ Non-Leak Baits prevent rats dying in hidden walls',
            '✦ 100% Eco-Safe Chemicals, safe for children and pets',
            '✦ Government-Licensed, Professional Pest Experts'
        ],
        brands: ['Bayer Rodenticide', 'Syngenta Rodent Traps', 'PCI baiting standards', 'BASF Pest controls'],
        specializations: ['Glue Board Trap', 'Snap Trap Setup', 'Bait Box Placement', 'Entry Points Seal', 'Odorless Chemicals'],
        subServices: [
            { id: 'pest-rodent-std', name: 'Standard Rodent Control Visit', price: 1200, image: '/images/pest-rodent.png', desc: 'Includes placement of glue traps, bait stations, and inspection of entry points.' },
            { id: 'pest-rodent-deep', name: 'Premium Rodent Eradication & Follow-up', price: 1999, image: '/images/pest-rodent.png', desc: 'Standard rodent treatment plus 1 follow-up visit after 1 week to remove traps and replace baits.' }
        ],
        inclusions: [
            'Placement of professional bait stations and traps',
            'Detailed inspection of pipe entries and wall holes',
            'Safe, child and pet-friendly baiting formulas'
        ],
        exclusions: [
            'Structural brickwork/cementing of large pipe entries (must be done by mason)',
            'Cleaning of pre-existing rat urine stains from floors',
            'Outdoor garden area rodent eradication (covers house structure only)'
        ],
        reviews: [
            { user: 'Pavan M., Gachibowli', text: 'Rats were chewing our wiring. The pest controllers installed bait boxes and glue traps. No rat activity for the last 3 weeks!' },
            { user: 'Kiran K., Kukatpally', text: 'Professional pest control. The bait used was odorless and solved our rat issue quickly. Friendly technicians.' }
        ]
    },
    'Beehive & Wasp Nest Removal': {
        icon: '/images/pest-beehive.png',
        photo: '/images/pest-beehive.png',
        desc: 'Safely remove dangerous beehives and wasp nests with <strong>MeeHelper\' professional nest removal services</strong> in Hyderabad. We utilize specialized height gear, smoke dispersers, and protective suits to clear balconies and high walls safely.',
        highlights: [
            '✦ Safe, Professional Beehive Extraction',
            '✦ Balloon/Height Balcony Access Specialist tools',
            '✦ Protective suit, safety gear & eco-friendly sprays used',
            '✦ Prevents swarm returns with post-removal repellent',
            '✦ Quick Emergency same-day bookings available',
            '✦ Highly Experienced High-Elevation Field Crew'
        ],
        brands: ['Safety Harness Systems', 'Eco-Pest repellent sprays', 'Bayer Heights Defense', 'Syngenta Nest Cleans'],
        specializations: ['High elevation removal', 'Wasp Nest Clean', 'Balcony Bee Extraction', 'Smoke Dispersal', 'Repellent Spraying'],
        subServices: [
            { id: 'beehive-remove-std', name: 'Standard Balcony Bee/Wasp Nest Removal', price: 999, image: '/images/pest-beehive.png', desc: 'Safe removal of standard-sized beehives/wasp nests from balconies or windows (< 12 feet height).' },
            { id: 'beehive-remove-high', name: 'High-Elevation Wall Beehive Extraction', price: 1782, image: '/images/pest-beehive.png', desc: 'Removal of large hives from high walls, roofs, or balconies requiring safety harness and height ropes.' }
        ],
        inclusions: [
            'Complete physical removal of the nest/hive structure',
            'Application of special repellent spray to prevent re-nesting',
            'Safe disposal of hive components'
        ],
        exclusions: [
            'Cleaning of pre-existing honey stain residues from walls',
            'Repainting of wall areas due to honey stain scraping',
            'Handling of wild honeybees in open garden trees'
        ],
        reviews: [
            { user: 'Srilatha N., Jubilee Hills', text: 'They removed a large beehive from our balcony window. The technicians wore full white suits and completed it in 20 minutes safely. Awesome!' },
            { user: 'Ajay K., Gachibowli', text: 'Called them for a wasp nest near our AC compressor. Quick response and safe removal. No wasps returned. Five stars!' }
        ]
    },
    'Pre-Construction Anti-Termite Treatment': {
        icon: '/images/pest-termite.png',
        photo: '/images/pest-termite.png',
        desc: 'Create a permanent protective barrier against termites with <strong>MeeHelper\' foundational anti-termite treatments</strong> in Hyderabad. We apply sub-soil chemical barriers and construct physical piping networks to protect properties long-term.',
        highlights: [
            '✦ Foundational Sub-Soil chemical barrier spray',
            '✦ Termidor / Imidacloprid premium chemical application',
            '✦ Ground foundation trenching and chemical soaking',
            '✦ Long-term termite protection with up to 10-Year warranty',
            '✦ Government-Licensed, Commercial Grade pest controllers',
            '✦ Flat SQFT pricing structure with detailed certificates'
        ],
        brands: ['Bayer Premise', 'Termidor', 'FMC Biflex', 'Tata Termex', 'Syngenta Altris'],
        specializations: ['Sub-Soil Barrier', 'Trench Soaking', 'Drill & Inject Shield', 'Piping Network Setup', 'Anti-Termite spray'],
        subServices: [
            { id: 'termite-pre-sqft', name: 'Anti-Termite Sub-Soil Spray (Per SQFT)', price: 12, unit: '/ SQFT', image: '/images/pest-termite.png', desc: 'Starts at ₹12 per SQFT. Ground chemical spray before foundation concrete pouring.' },
            { id: 'termite-drill-inject', name: 'Post-Construction Drill & Inject treatment', price: 1499, image: '/images/pest-termite.png', desc: 'For completed homes. Drilling holes in floors/walls and injecting chemical barrier. Includes 5-year warranty.' }
        ],
        inclusions: [
            'Ground trenching, foundational spraying, and chemical injection',
            'Safety gloves/masks worn by licensed controllers',
            'Termite treatment certificate and floor mapping'
        ],
        exclusions: [
            'Cost of refilling tiles/flooring (we fill drilled holes with matching cement)',
            'Structural wood replacement due to previous termite damage',
            'Plastering work over damp wall injections'
        ],
        reviews: [
            { user: 'Pranav K., Gachibowli', text: 'Had our under-construction villa sprayed. The team arrived on time before the slab pouring and did a thorough chemical wash. Excellent documentation!' },
            { user: 'Meena G., Manikonda', text: 'Got the post-construction drill & inject done for my kitchen cabinets. Termite dust has stopped completely. Very professional.' }
        ]
    },
    'Complete Ant Control & Prevention': {
        icon: '/images/pest-ant.png',
        photo: '/images/pest-ant.png',
        desc: 'Eradicate black and red ant infestations with <strong>MeeHelper\' customized ant control services</strong> in Hyderabad. We apply odorless ant gel baits in kitchen corners and spray eco-safe chemical barriers along wall perimeters.',
        highlights: [
            '✦ Spot treatment with Premium Bayer ant gel baits',
            '✦ Wall perimeter chemical spray barriers',
            '✦ Safe, Odorless, and non-toxic for children/pets',
            '✦ Resolves red ant bites & black ant infestations',
            '✦ Up to 90-Day Protection Guarantee on treatments',
            '✦ Certified, background-verified field controllers'
        ],
        brands: ['Bayer Maxforce', 'Syngenta Optigard', 'BASF Ant Gel', 'Godrej Pest', 'PCI Standards'],
        specializations: ['Gel Baiting Spots', 'Perimeter Spray Shield', 'Red Ant Eradication', 'Hygienic Kitchen Spotting'],
        subServices: [
            { id: 'ant-control-std', name: 'Standard Ant Gel & Spray Treatment', price: 799, image: '/images/pest-ant.png', desc: 'Applying ant gel in kitchen drawers and spray along perimeter of all rooms.' },
            { id: 'ant-control-deep', name: 'Premium Ant & General Insect Combo', price: 1200, image: '/images/pest-ant.png', desc: 'Standard ant treatment plus general pest spray covering spiders, silverfish, and cockroaches.' }
        ],
        inclusions: [
            'Application of certified odorless pest formulas',
            'Spot treatment of kitchen shelves, drawers, and cabinet hinges',
            'Post-treatment preventive advisory check'
        ],
        exclusions: [
            'Moving of heavy kitchen appliances (refrigerator, dishwasher)',
            'Sealing cracks in granite or wall tiles',
            'Washing utensils contaminated before gel placement'
        ],
        reviews: [
            { user: 'Vinay T., Kondapur', text: 'Had a major red ant issue in my kitchen. The tech applied optigard gel. Within 2 days, all ants disappeared. Safe and odorless.' },
            { user: 'Srilatha D., Kukatpally', text: 'Excellent service. The technician was very polite and explained where not to wash. Working perfectly.' }
        ]
    },
    'Septic Tank & Drainage Cleaning': {
        icon: '/images/clean-septictank.png',
        photo: '/images/clean-septictank.png',
        desc: 'Ensure your drainage system remains functional with <strong>MeeHelper\' professional septic tank cleaning services</strong> in Hyderabad. We employ high-pressure vacuum tankers and sludge pumps to extract waste and clear drainage blocks.',
        highlights: [
            '✦ Heavy-Duty Vacuum Tanker Sludge Extraction',
            '✦ High-Pressure Jetting to Clear Drainage Blocks',
            '✦ Hygienic & Odor-Controlled Waste Disposal',
            '✦ Certified, Background-Verified Utility Crew',
            '✦ Commercial & Residential Sump/Tank Clearances',
            '✦ Flat, transparent rates without hidden quotes'
        ],
        brands: ['Karcher High-Pressure Jets', 'Ashok Leyland Vacuum Tankers', 'Diversey Sanitizers', 'Lizol Pro'],
        specializations: ['Sludge Extraction', 'Drain Jetting', 'Odor Control Mist', 'Sewer Block Bypass', 'Sump Clearance'],
        subServices: [
            { id: 'septic-clean-std', name: 'Standard Septic Tank Cleaning (< 2000L)', price: 2499, image: '/images/clean-septictank.png', desc: 'Vacuum tanker suction extraction of sludge and water wash for standard residential tanks.' },
            { id: 'septic-clean-large', name: 'Premium Large Septic Tank Cleaning (> 2000L)', price: 4499, image: '/images/clean-septictank.png', desc: 'Heavy tanker pump extraction, high-pressure wall jet washing, and chemical sanitization.' }
        ],
        inclusions: [
            'Vacuum pump tanker operations and sludge disposal',
            'Physical cleaning and high-pressure hose rinsing',
            'Sanitization and de-odorizing spray'
        ],
        exclusions: [
            'Repairing broken concrete slab covers of septic tanks',
            'Clearing blocks in municipal sewer main lines (outside property)',
            'Cleaning toxic chemical wastes from factories'
        ],
        reviews: [
            { user: 'Venkatesh S., Dilshuknagar', text: 'Septic tank was overflowing. The vacuum tanker arrived in 1 hour, pumped out all sludge, and left the area clean. Very professional!' },
            { user: 'Anil P., Gachibowli', text: 'Fast and hygienic execution. The high-pressure jet wash removed all built-up muck from the chamber. Excellent rates.' }
        ]
    },
    'High-Rise Facade Window Cleaning': {
        icon: '/images/clean-facade.png',
        photo: '/images/clean-facade.png',
        desc: 'Restore the external appearance of your commercial or residential building with <strong>MeeHelper\' high-rise facade cleaning services</strong> in Hyderabad. Our crew is equipped with safety harnesses, pressure washers, and glass restorers.',
        highlights: [
            '✦ Professional High-Rise Safety Harness Cleaning',
            '✦ Hard Water Stain & Dirt Grime Scraping',
            '✦ Glass, Alcopanel, and ACP Sheet Washings',
            '✦ High-Pressure Jet Washers for Outer Bricks/Stone',
            '✦ Background-Verified, Highly Trained Height Crew',
            '✦ Comprehensive Liability Insurance for Height Works'
        ],
        brands: ['Karcher Jet Pumps', 'Taski Glass Cleaners', '3M Squeegees', 'Diversey Restorers', 'Unger Safety Gear'],
        specializations: ['Safety Harness Wash', 'Hard Water Scraping', 'ACP Panel Wipe', 'High Pressure Jetting', 'Glass Restoration'],
        subServices: [
            { id: 'facade-clean-low', name: 'Low-Rise Facade Cleaning (Up to 3 Floors)', price: 3499, image: '/images/clean-facade.png', desc: 'Cleaning exterior building glass and ACP panels using long extension poles and pressure washers.' },
            { id: 'facade-clean-high', name: 'High-Rise Facade Harness Cleaning (4+ Floors)', price: 6999, image: '/images/clean-facade.png', desc: 'Rope access (spiderman) harness cleaning for tall buildings. Minimum order applies.' }
        ],
        inclusions: [
            'Glass squeegee wash, ACP panel wiping, and jet rinsing',
            'Safety gear, harness, and height anchors installation',
            'Certified and safety-trained cleaning supervisors'
        ],
        exclusions: [
            'Installation of temporary structural metal scaffolding (if required, charged extra)',
            'Polishing scratched glass (only washing is covered)',
            'Cleaning facade areas without safe roof anchor access'
        ],
        reviews: [
            { user: 'Rajiv N., Madhapur', text: 'Got our 5-story office building facade cleaned. The spiderman cleaning crew was fast, safe, and removed all hard water stains. Looks new!' },
            { user: 'Srilatha G., Gachibowli', text: 'Excellent height window wash. Professional safety protocols were followed. Recommended for commercial spaces.' }
        ]
    },
    'Water Tank & Sump Deep Cleaning': {
        icon: '/images/clean-watertank.png',
        photo: '/images/clean-watertank.png',
        desc: 'Protect your family from water-borne diseases with <strong>MeeHelper\' 6-stage water tank cleaning services</strong> in Hyderabad. We vacuum sludge, scrub walls with high-pressure jets, sanitize with anti-bacterial sprays, and use UV sterilization.',
        highlights: [
            '✦ 6-Stage Deep Water Tank Sanitization',
            '✦ High-Pressure Jet Washing & Wall Scrubbing',
            '✦ Industrial Vacuum Sludge & Dirt Extraction',
            '✦ Anti-Bacterial Sanitizing Chemical Spraying',
            '✦ Safe, Eco-Friendly Non-Toxic Cleaning Agents',
            '✦ Certified, Background-Verified Utility Engineers',
            '✦ Same-Day Emergency Tank Cleaning Visits'
        ],
        brands: ['Karcher Jets', 'Diversey Sanitizers', 'Philips UV Lamps', 'Taski Pro', 'Harpic Pro'],
        specializations: ['6-Stage Sanitation', 'Sludge Vacuuming', 'Pressure Jet Washing', 'UV Sterilization', 'Underground Sump Wash'],
        subServices: [
            { id: 'tank-clean-over', name: 'Overhead PVC/Concrete Tank Clean (< 2000L)', price: 999, image: '/images/clean-watertank.png', desc: '6-stage cleaning of overhead PVC water tanks including sludge vacuuming and UV treatment.' },
            { id: 'tank-clean-under', name: 'Underground Concrete Sump Cleaning (< 5000L)', price: 1499, image: '/images/clean-watertank.png', desc: 'Deep mud vacuuming, high-pressure jet walls scrub, sanitizing spray, and UV sterilization.' }
        ],
        inclusions: [
            'Mud sludge pumping, floor pressure jetting, and wall scrubbing',
            'Antibacterial chemical mist spraying and UV light exposure',
            'Cleaning area sanitization post-task'
        ],
        exclusions: [
            'Cost of repair for cracked concrete sumps or leaking PVC tanks',
            'Cleaning pipeline outlets (covers tank structure only)',
            'Plumbing bypass setups for broken valves'
        ],
        reviews: [
            { user: 'Naresh B., Kukatpally', text: 'Professional water tank cleaning. They vacuumed out 4 inches of mud from my sump and sanitized it. High-pressure wash made it spotless.' },
            { user: 'Anjali R., Gachibowli', text: 'Very systematic 6-stage cleaning. The UV sterilizer was placed inside the tank for 15 minutes. Great hygiene standards!' }
        ]
    },
    'Kitchen & Bathroom Deep Scrubbing': {
        icon: '/images/clean-scrubbing.png',
        photo: '/images/clean-scrubbing.png',
        desc: 'Eradicate grease, oil, and hard water stains with <strong>MeeHelper\' intensive kitchen and bathroom deep scrubbing services</strong> in Hyderabad. We scrub tiles, tiles joints, exhaust fans, toilet bowls, sinks, and glass dividers.',
        highlights: [
            '✦ Deep Rotary Machine Scrubbing for floor tiles',
            '✦ Specialized Hard Water Acid-Free stain removals',
            '✦ Detailed oil grease degreasing in Kitchen Chimney area',
            '✦ Disinfection & Sanitization of all sanitary fittings',
            '✦ Background-Verified, Professional Cleaning experts',
            '✦ Bio-degradable, safe and strong cleaning compounds'
        ],
        brands: ['Taski Scrubbers', '3M Scotch Brite', 'Diversey Degreasers', 'Karcher Steamers', 'Lizol Pro'],
        specializations: ['Tile Joint Scrubbing', 'Oil Degreasing', 'Hard Water Descaling', 'Chrome Polishing', 'Exhaust Fan Cleaning'],
        subServices: [
            { id: 'scrub-bath-std', name: 'Intensive Bathroom Scrubbing (Single)', price: 999, image: '/images/clean-scrubbing.png', desc: 'Deep scrubbing of wall tiles, shower glass, descaling taps, and toilet bowl sanitization.' },
            { id: 'scrub-kitchen-std', name: 'Intensive Kitchen Deep Scrubbing', price: 1899, image: '/images/clean-scrubbing.png', desc: 'Removal of oil/grease from tiles, platform wash, sink cleaning, cabinet exterior wiping, and exhaust fan degreasing.' }
        ],
        inclusions: [
            'Detailed scrubbing, washing, descaling, and sanitization labor',
            'High-grade eco-friendly cleaning agents and tools',
            'Drying of floor tile perimeters'
        ],
        exclusions: [
            'Interior cleaning of kitchen cabinet drawers (unless empty)',
            'Wall paint peeling chemical scrubbing',
            'Polishing rusted chrome fixtures (only cleaning is covered)'
        ],
        reviews: [
            { user: 'Srilatha M., Jubilee Hills', text: 'My bathroom had heavy hard water stains. The scrubbing team descaled the glass partition and taps. Looks brilliant now!' },
            { user: 'Pavan T., Kondapur', text: 'Got the kitchen scrubbing done. The exhaust fan and oil stained tiles near the stove were cleaned thoroughly. Very happy with the service.' }
        ]
    },

    // ─── AC & Climate Control Services ──────────────────────────────────────────
    'AC & Climate Control Services': {
        icon: '/images/ac_icon.png',
        photo: '/images/ac-repair.png',
        desc: 'Complete <strong>AC & climate control solutions in Hyderabad</strong> — from annual maintenance contracts and duct cleaning to air purifier servicing and ceiling fan repairs. Our HVAC-certified technicians keep your home cool and air quality premium all year round.',
        highlights: [
            '✦ Annual AC Maintenance Contracts (AMC)',
            '✦ Professional Duct & Vent Deep Cleaning',
            '✦ Air Purifier Filter Service & Replacement',
            '✦ Ceiling Fan Installation, Balancing & Repair',
            '✦ AC Gas Refilling — R-32 / R-22 / R-410A',
            '✦ AC Installation & Uninstallation (All Types)',
            '✦ HVAC-Certified Technicians Only',
            '✦ Same-Day Doorstep Service Across Hyderabad'
        ],
        brands: ['Voltas', 'LG', 'Daikin', 'Blue Star', 'Hitachi', 'Carrier', 'Samsung', 'Panasonic', 'O General', 'Havells', 'Crompton', 'Usha'],
        specializations: ['AC AMC Plans', 'Duct Cleaning', 'Air Purifier Service', 'Ceiling Fan Repair', 'Gas Refill', 'AC Installation'],
        subServices: [
            { id: 'ac-amc', name: 'Annual AC Maintenance Contract (AMC)', price: 1499, category: 'AMC Plans', image: '/images/ac_icon.png', desc: 'Starts at ₹1499/year. Covers 2 preventive service visits, gas top-up check, and priority support.' },
            { id: 'ac-duct-cleaning', name: 'AC Duct & Vent Cleaning', price: 1999, category: 'Cleaning', image: '/images/ac-repair.png', desc: 'Starts at ₹1999. Deep cleaning of ducts, vents, and filters to improve air quality and efficiency.' },
            { id: 'air-purifier-service', name: 'Air Purifier Service & Filter Replacement', price: 699, category: 'Air Quality', image: '/images/ac_icon.png', desc: 'Starts at ₹699. HEPA filter replacement, UV lamp check, and sensor calibration.' },
            { id: 'ceiling-fan-repair', name: 'Ceiling Fan Installation & Repair', price: 299, category: 'Fan Services', image: '/images/electrical_wiring_3d.png', desc: 'Starts at ₹299. Fan installation, blade balancing, capacitor replacement, and regulator fixing.' },
            { id: 'ac-gas-refill', name: 'AC Gas Refilling Service', price: 1200, category: 'Gas Refill', image: '/images/gas_1.png', desc: 'Starts at ₹1200. Refrigerant top-up (R-32/R-22/R-410A) with leak check and pressure test.' },
            { id: 'ac-installation-svc', name: 'AC Installation & Uninstallation', price: 799, category: 'Installation', image: '/images/ac_icon.png', desc: 'Starts at ₹799. Professional mounting, pipe fitting, and electrical connection for all AC types.' }
        ],
        inclusions: [
            'HVAC-certified technician for all visits',
            'Detailed inspection report after every service',
            'OEM-grade filters and gas used',
            '90-day service warranty on labour'
        ],
        exclusions: [
            'Full AC unit replacement cost',
            'Major ductwork structural changes',
            'Scaffolding for high-wall installations'
        ],
        reviews: [
            { user: 'Arun K., Banjara Hills', text: 'Got the annual AMC for 3 ACs. The team visits twice a year and keeps everything running perfectly. Great value!' },
            { user: 'Meena S., Madhapur', text: 'Air purifier filter replacement was done quickly. Technician explained the filter types and recommended the right one for my home.' }
        ]
    },

    // ─── Electrical & Power Solutions ──────────────────────────────────────────
    'Electrical & Power Solutions': {
        icon: '/images/lightning_bolt_icon.png',
        photo: '/images/lightning_bolt_icon.png',
        desc: 'Advanced <strong>electrical and power solutions for your home and office in Hyderabad</strong>. From smart switch installations and EV charger setup to inverter repairs and generator maintenance — our certified electricians deliver safe, code-compliant work.',
        highlights: [
            '✦ Smart Switch & Automation Panel Installation',
            '✦ EV Charger (Home Charging Point) Setup',
            '✦ Inverter, UPS & Battery Replacement Service',
            '✦ Generator Servicing & Maintenance Contracts',
            '✦ Complete Home Wiring & MCB/DB Upgrades',
            '✦ Power Backup & Solar Integration Solutions',
            '✦ Certified Electricians with Safety-First Approach',
            '✦ Same-Day Emergency Electrical Repairs'
        ],
        brands: ['Schneider Electric', 'Legrand', 'Havells', 'Anchor', 'Luminous', 'Microtek', 'Exide', 'Amaron', 'ABB', 'Polycab'],
        specializations: ['Smart Home Wiring', 'EV Charging Setup', 'Inverter Service', 'Generator Maintenance', 'DB Panel Upgrade'],
        subServices: [
            { id: 'smart-switch-install', name: 'Smart Switch & Automation Panel Installation', price: 999, category: 'Smart Electrical', image: '/images/electrical_wiring_3d.png', desc: 'Starts at ₹999. WiFi-enabled touch switches, voice control setup, and panel wiring.' },
            { id: 'ev-charger-install', name: 'EV Home Charger Installation', price: 2499, category: 'EV Solutions', image: '/images/electrical_wiring_3d.png', desc: 'Starts at ₹2499. Supply and installation of Level 2 AC home EV charging point with earthing.' },
            { id: 'inverter-battery-service', name: 'Inverter & Battery Service / Replacement', price: 499, category: 'Power Backup', image: '/images/electrical_wiring_3d.png', desc: 'Starts at ₹499. Inverter diagnostics, battery water topping, terminal cleaning, and replacement.' },
            { id: 'generator-service', name: 'Generator Servicing & Maintenance', price: 1499, category: 'Power Backup', image: '/images/electrical_wiring_3d.png', desc: 'Starts at ₹1499. Oil change, air/fuel filter replacement, spark plug check, and load test.' },
            { id: 'home-wiring', name: 'Complete Home Wiring & Rewiring', price: 2999, category: 'Wiring', image: '/images/electrical_wiring_3d.png', desc: 'Starts at ₹2999. Full home wiring, MCB panel upgrade, earthing, and inspection certificate.' },
            { id: 'power-backup-setup', name: 'Power Backup & Solar Integration Setup', price: 4999, category: 'Solar & Backup', image: '/images/electrical_wiring_3d.png', desc: 'Starts at ₹4999. Solar panel connection to inverter/battery with net metering setup.' }
        ],
        inclusions: [
            'Certified electrician with insulated tools',
            'ISI-marked wiring and components used',
            'Safety certificate on wiring jobs',
            '180-day warranty on all electrical work'
        ],
        exclusions: [
            'Cost of switches, MCBs, and wiring materials (quoted separately)',
            'Civil/masonry work for conduit channels',
            'Municipal electrical connection approvals'
        ],
        reviews: [
            { user: 'Suresh P., Kukatpally', text: 'Had the EV charger installed for my Nexon EV. The team was professional, completed within 2 hours, and earthing was perfect.' },
            { user: 'Lakshmi N., Gachibowli', text: 'Inverter battery replacement was done at my doorstep. Same-day service and genuine Luminous battery fitted. Highly recommend!' }
        ]
    },

    // ─── Home Renovation & Interiors ──────────────────────────────────────────
    'Home Renovation & Interiors': {
        icon: '/images/worker_icon.png',
        photo: '/images/worker_icon.png',
        desc: 'Transform your living spaces with professional <strong>home renovation and interior services in Hyderabad</strong>. From modular kitchen installations and wardrobe design to false ceiling work, wallpaper installation, and premium home painting packages.',
        highlights: [
            '✦ Custom Modular Kitchen Design & Installation',
            '✦ Wardrobe, Storage & Shelving Solutions',
            '✦ False Ceiling (Gypsum & POP) Work',
            '✦ Wallpaper Hanging & Feature Wall Design',
            '✦ Premium Interior & Exterior Home Painting',
            '✦ Tile Replacement & Mosaic Restoration',
            '✦ Expert Interior Designers & Carpenters',
            '✦ End-to-End Project Management & On-Time Delivery'
        ],
        brands: ['Asian Paints', 'Berger Paints', 'Nerolac', 'Saint-Gobain Gyproc', 'Armstrong', 'Godrej Interio', 'Hafele', 'Hettich'],
        specializations: ['Modular Kitchen', 'Wardrobe Design', 'False Ceiling', 'Wallpaper', 'Home Painting', 'Tile Work'],
        subServices: [
            { id: 'modular-kitchen', name: 'Modular Kitchen Installation', price: 15000, category: 'Kitchen', image: '/images/worker_icon.png', desc: 'Starts at ₹15,000. Custom modular kitchen design, fabrication, and professional installation.' },
            { id: 'wardrobe-design', name: 'Wardrobe Design & Installation', price: 8000, category: 'Furniture', image: '/images/worker_icon.png', desc: 'Starts at ₹8,000. Sliding or hinged wardrobe design, laminate finishing, and fitting.' },
            { id: 'false-ceiling', name: 'False Ceiling (Gypsum/POP) Work', price: 45, category: 'Ceiling', image: '/images/worker_icon.png', desc: 'Starts at ₹45/sq.ft. Gypsum board or POP false ceiling with LED cove lighting integration.' },
            { id: 'wallpaper-install', name: 'Wallpaper Installation', price: 25, category: 'Wall Decor', image: '/images/worker_icon.png', desc: 'Starts at ₹25/sq.ft. Expert wallpaper hanging for feature walls — vinyl, fabric, and 3D types.' },
            { id: 'home-painting', name: 'Home Painting Packages', price: 7, category: 'Painting', image: '/images/worker_icon.png', desc: 'Starts at ₹7/sq.ft. Interior or exterior painting with premium paints, wall putty, and primer.' },
            { id: 'tile-replacement', name: 'Tile Replacement & Grouting', price: 1499, category: 'Flooring', image: '/images/worker_icon.png', desc: 'Starts at ₹1499. Removal of damaged tiles and professional replacement with fresh grouting.' }
        ],
        inclusions: [
            'Design consultation before work begins',
            'Premium grade materials from trusted brands',
            'Clean workmanship with site protection sheets',
            '180-day warranty on installation workmanship'
        ],
        exclusions: [
            'Cost of hardware fittings and handles (quoted separately)',
            'Major structural wall breaking or rebuilding',
            'Furniture delivery and logistics'
        ],
        reviews: [
            { user: 'Priya R., Jubilee Hills', text: 'Got false ceiling with LED lighting done in our living room. The finish is flawless and very premium. Highly satisfied!' },
            { user: 'Karthik M., Kondapur', text: 'Modular kitchen was installed in 3 days. The carpenters were skilled, and the finish quality is excellent. Recommended!' }
        ]
    },

    // ─── Outdoor & Property Care ──────────────────────────────────────────────
    'Outdoor & Property Care': {
        icon: '/images/worker_icon.png',
        photo: '/images/worker_icon.png',
        desc: 'Keep your outdoor spaces lush, maintained, and energy-efficient with our <strong>outdoor & property care services in Hyderabad</strong>. From professional gardening and landscaping to solar panel cleaning, terrace waterproofing, and rainwater harvesting setups.',
        highlights: [
            '✦ Professional Gardening & Landscape Design',
            '✦ Lawn Maintenance & Garden Upkeep Contracts',
            '✦ Terrace & Balcony Waterproofing Solutions',
            '✦ Solar Panel Cleaning & Efficiency Restoration',
            '✦ Solar Water Heater Servicing & Maintenance',
            '✦ Rainwater Harvesting System Setup',
            '✦ Skilled Garden Experts & Property Technicians',
            '✦ Monthly & Annual Maintenance Plans Available'
        ],
        brands: ['Tata Solar', 'Luminous Solar', 'Vikram Solar', 'Dr. Fixit', 'Berger WeatherCoat', 'Asian Paints SmartCare', 'Havells Solar'],
        specializations: ['Landscape Design', 'Lawn Care AMC', 'Terrace Waterproofing', 'Solar Panel Service', 'Rainwater Harvesting'],
        subServices: [
            { id: 'gardening-landscaping', name: 'Gardening & Landscaping Services', price: 999, category: 'Garden Care', image: '/images/worker_icon.png', desc: 'Starts at ₹999. Trimming, pruning, fertilizing, replanting, and full garden makeover.' },
            { id: 'lawn-maintenance', name: 'Lawn Maintenance Contract', price: 1499, category: 'Garden Care', image: '/images/worker_icon.png', desc: 'Starts at ₹1499/month. Regular mowing, edging, fertilization, and weed control.' },
            { id: 'terrace-waterproofing', name: 'Terrace & Balcony Waterproofing', price: 25, category: 'Waterproofing', image: '/images/worker_icon.png', desc: 'Starts at ₹25/sq.ft. Crystalline or elastomeric waterproofing coat for terraces and flat roofs.' },
            { id: 'solar-panel-cleaning', name: 'Solar Panel Cleaning & Inspection', price: 799, category: 'Solar Services', image: '/images/worker_icon.png', desc: 'Starts at ₹799. Soft-brush wet cleaning to restore solar efficiency. Includes output inspection.' },
            { id: 'solar-water-heater', name: 'Solar Water Heater Servicing', price: 999, category: 'Solar Services', image: '/images/worker_icon.png', desc: 'Starts at ₹999. De-scaling of collector tubes, pump check, and tank pressure inspection.' },
            { id: 'rainwater-harvesting', name: 'Rainwater Harvesting System Setup', price: 12000, category: 'Green Solutions', image: '/images/worker_icon.png', desc: 'Starts at ₹12,000. Design and installation of rooftop rainwater collection and filtration system.' }
        ],
        inclusions: [
            'Site inspection before work',
            'Eco-friendly fertilizers and plant-safe chemicals',
            'Waterproofing quality check after curing',
            '180-day warranty on waterproofing coat'
        ],
        exclusions: [
            'Cost of plants, soil, and garden accessories',
            'Major civil work for roof reconstruction',
            'Solar panel hardware procurement cost'
        ],
        reviews: [
            { user: 'Ramesh G., Banjara Hills', text: 'Beautiful terrace garden made by the team. They redesigned the space with plants, pots, and drip irrigation. Stunning result!' },
            { user: 'Sindhu K., Madhapur', text: 'Solar panel cleaning improved my system output by 18%. Very professional team and reasonably priced.' }
        ]
    },

    // ─── Commercial & Facility Services ─────────────────────────────────────────
    'Commercial & Facility Services': {
        icon: '/images/worker_icon.png',
        photo: '/images/worker_icon.png',
        desc: 'Comprehensive <strong>commercial and facility management services in Hyderabad</strong> for offices, restaurants, warehouses, and retail spaces. We provide office maintenance AMCs, facility management, restaurant equipment repair, and full-scale commercial cleaning.',
        highlights: [
            '✦ Office & Facility Maintenance AMC Contracts',
            '✦ Restaurant & Commercial Kitchen Equipment Repair',
            '✦ Warehouse & Retail Space Deep Cleaning',
            '✦ Commercial Pest Control & Hygiene Audits',
            '✦ Retail Store Maintenance & Fixture Repairs',
            '✦ Corporate IT & Network Infrastructure Setup',
            '✦ Dedicated Account Manager for B2B Clients',
            '✦ SLA-Backed Service with Priority Response'
        ],
        brands: ['Bosch Commercial', 'LG Commercial', 'Samsung Commercial', 'Karcher Commercial', 'Bayer Pest', 'Rentokil Initial'],
        specializations: ['Office AMC', 'Facility Management', 'Restaurant Equipment', 'Warehouse Cleaning', 'Retail Maintenance'],
        subServices: [
            { id: 'office-amc', name: 'Office Maintenance Contract (AMC)', price: 4999, category: 'Contracts', image: '/images/worker_icon.png', desc: 'Starts at ₹4999/month. Covers plumbing, electrical, AC, and carpentry repairs for offices.' },
            { id: 'facility-management', name: 'Facility Management Services', price: 9999, category: 'Contracts', image: '/images/worker_icon.png', desc: 'Starts at ₹9999/month. Comprehensive facility upkeep with dedicated on-site or on-call team.' },
            { id: 'restaurant-equipment', name: 'Restaurant & Kitchen Equipment Repair', price: 799, category: 'Commercial Repair', image: '/images/worker_icon.png', desc: 'Starts at ₹799. Repair of commercial ovens, refrigerators, dishwashers, grills, and mixers.' },
            { id: 'warehouse-cleaning', name: 'Warehouse & Industrial Cleaning', price: 5999, category: 'Commercial Cleaning', image: '/images/worker_icon.png', desc: 'Starts at ₹5999. High-pressure floor scrubbing, racking area cleaning, and dust management.' },
            { id: 'retail-maintenance', name: 'Retail Store Maintenance', price: 2999, category: 'Retail', image: '/images/worker_icon.png', desc: 'Starts at ₹2999/month. Fixture repairs, lighting upkeep, AC service, and cosmetic repairs.' },
            { id: 'commercial-it-setup', name: 'Commercial IT & Network Setup', price: 3999, category: 'IT Infrastructure', image: '/images/worker_icon.png', desc: 'Starts at ₹3999. Office network cabling, WiFi access points, server rack, and CCTV setup.' }
        ],
        inclusions: [
            'Dedicated relationship manager for all B2B accounts',
            'Monthly maintenance report and service log',
            'Priority scheduling with 4-hour response SLA',
            'All technicians background-verified and uniformed'
        ],
        exclusions: [
            'Cost of hardware, parts, and materials (quoted separately)',
            'Civil or masonry structural work',
            'Government licensing or compliance certification costs'
        ],
        reviews: [
            { user: 'Venu G., Hitech City (Office Manager)', text: 'We signed an annual AMC for our 80-seater office. Plumbing, AC, and electrical issues are resolved same-day. Great service!' },
            { user: 'Rahul P., Kukatpally (Restaurant Owner)', text: 'Our commercial refrigerator broke down on a Friday night. MeeHelper sent a technician within 2 hours. Excellent response!' }
        ]
    },

    // ─── Home Care Plans & AMC ───────────────────────────────────────────────
    'Home Care Plans & AMC': {
        icon: '/images/ok_icon.png',
        photo: '/images/ok_icon.png',
        desc: 'Enjoy year-round peace of mind with <strong>MeeHelper Home Care Plans and AMC subscriptions</strong>. Our plans cover appliance maintenance, pest control, RO servicing, and cleaning on a regular schedule — saving you time, money, and stress.',
        highlights: [
            '✦ Annual Home Care Plan — All-in-One Convenience',
            '✦ Appliance AMC Bundle for All Major Appliances',
            '✦ Pest Control AMC with Quarterly Treatments',
            '✦ RO & Water Purifier AMC Plan',
            '✦ Monthly Cleaning Subscription Service',
            '✦ Senior Citizen Special Home Care Package',
            '✦ Priority Booking with Guaranteed Slots',
            '✦ Free Emergency Visits Included in Plans'
        ],
        brands: ['MeeHelper Certified', 'Aquaguard', 'Kent', 'Eureka Forbes', 'Bayer Pest', 'Samsung', 'LG', 'Whirlpool'],
        specializations: ['Annual Home Plans', 'Appliance AMC', 'Pest Control AMC', 'RO AMC', 'Cleaning Subscription', 'Senior Care'],
        subServices: [
            { id: 'annual-home-care', name: 'Annual Home Care Plan', price: 7999, category: 'Annual Plans', image: '/images/ok_icon.png', desc: '₹7999/year. Covers 4 appliance services, 2 pest control visits, 2 deep cleans, and priority support.' },
            { id: 'appliance-amc-bundle', name: 'Appliance AMC Bundle', price: 3999, category: 'Appliance Plans', image: '/images/ok_icon.png', desc: '₹3999/year. Preventive maintenance for up to 3 appliances (AC, refrigerator, washing machine).' },
            { id: 'pest-control-amc', name: 'Pest Control AMC Plan', price: 2499, category: 'Pest Plans', image: '/images/ok_icon.png', desc: '₹2499/year. Quarterly general pest control + 1 rodent or termite treatment included.' },
            { id: 'ro-amc-plan', name: 'RO Water Purifier AMC', price: 1499, category: 'Water Plans', image: '/images/ok_icon.png', desc: '₹1499/year. 2 filter replacements, membrane check, and 2 service visits included.' },
            { id: 'cleaning-subscription', name: 'Monthly Cleaning Subscription', price: 1999, category: 'Cleaning Plans', image: '/images/ok_icon.png', desc: '₹1999/month. Regular monthly deep home cleaning with eco-safe products and trained staff.' },
            { id: 'senior-citizen-care', name: 'Senior Citizen Home Care Package', price: 4999, category: 'Special Plans', image: '/images/ok_icon.png', desc: '₹4999/year. Priority scheduling, free home visits, and dedicated support for senior citizens.' }
        ],
        inclusions: [
            'All scheduled visits per plan covered',
            'Spare parts for preventive maintenance included',
            'Free emergency call-out (max 2 per year)',
            'Priority helpline access and dedicated service manager'
        ],
        exclusions: [
            'Major breakdown repairs not covered by plan',
            'Replacement of full appliance units',
            'Chemicals for heavy pest infestations (quoted separately)'
        ],
        reviews: [
            { user: 'Asha T., Jubilee Hills', text: 'The Annual Home Care Plan is the best investment. No more searching for technicians. One call and everything is handled!' },
            { user: 'Venkatesh R., Banjara Hills', text: 'Enrolled the senior citizen package for my parents. The team is very patient, polite, and always on time. Highly recommend!' }
        ]
    },

    // ─── Mobile & Electronics Repair ─────────────────────────────────────────
    'Mobile & Electronics Repair': {
        icon: '/images/chip_icon.png',
        photo: '/images/chip_icon.png',
        desc: 'Professional doorstep <strong>mobile phone and electronics repair services in Hyderabad</strong>. From cracked screen replacements and battery swaps to gaming PC diagnostics and CCTV maintenance — our certified technicians fix all your devices on the same day.',
        highlights: [
            '✦ Mobile Phone Screen & Battery Replacement',
            '✦ Gaming PC Build, Upgrade & Diagnostics',
            '✦ Laptop & Desktop Hardware Repair',
            '✦ CCTV Camera Maintenance & DVR Repair',
            '✦ Networking Equipment & Router Support',
            '✦ Tablet & iPad Screen Replacement',
            '✦ Certified Technicians with 90-Day Warranty',
            '✦ Transparent Pricing — No Fix, No Fee'
        ],
        brands: ['Samsung', 'Apple', 'OnePlus', 'Xiaomi', 'Realme', 'ASUS ROG', 'HP', 'Dell', 'Acer', 'CP Plus', 'Hikvision'],
        specializations: ['Mobile Repair', 'Gaming PC Service', 'Screen Replacement', 'CCTV Maintenance', 'Networking Support'],
        subServices: [
            { id: 'mobile-repair', name: 'Mobile Phone Repair (Screen/Battery)', price: 799, category: 'Mobile', image: '/images/chip_icon.png', desc: 'Starts at ₹799. Screen replacement, battery swap, charging port fix, and software issues.' },
            { id: 'gaming-pc-service', name: 'Gaming PC Build & Service', price: 1499, category: 'PC Service', image: '/images/chip_icon.png', desc: 'Starts at ₹1499. GPU diagnostics, cooling system cleaning, RAM/SSD upgrades, and overclocking.' },
            { id: 'cctv-maintenance-svc', name: 'CCTV Maintenance & DVR Repair', price: 999, category: 'Surveillance', image: '/images/chip_icon.png', desc: 'Starts at ₹999. Camera focus adjustment, DVR HDD check, app reconnection, and lens cleaning.' },
            { id: 'networking-support-svc', name: 'Networking & Router Support', price: 499, category: 'Networking', image: '/images/chip_icon.png', desc: 'Starts at ₹499. Router configuration, port forwarding, WiFi dead-zone fixing, and mesh setup.' },
            { id: 'tablet-repair', name: 'Tablet & iPad Repair', price: 1299, category: 'Mobile', image: '/images/chip_icon.png', desc: 'Starts at ₹1299. Display replacement, battery service, and software restore for all tablets.' }
        ],
        inclusions: [
            '90-day warranty on all replaced parts',
            'Original OEM or high-quality compatible parts used',
            'Free data backup advisory before repair',
            'No fix, no fee policy on diagnostics'
        ],
        exclusions: [
            'Water damage board-level repair (quoted separately)',
            'Data recovery from physically dead storage',
            'Software licensing and app purchase costs'
        ],
        reviews: [
            { user: 'Arjun K., Kondapur', text: 'Got my iPhone screen replaced at home. The technician was professional and the quality is excellent. 90-day warranty is reassuring.' },
            { user: 'Sai V., Hitech City', text: 'Gaming PC was overheating. The tech cleaned the cooling system, applied new thermal paste, and upgraded my RAM. Performance is back to 100%!' }
        ]
    },

    // ─── Plumbing & Water Solutions ───────────────────────────────────────────
    'Plumbing & Water Solutions': {
        icon: '/images/maintenance_icon.png',
        photo: '/images/maintenance_icon.png',
        desc: 'Comprehensive <strong>plumbing and water solutions in Hyderabad</strong> — from borewell motor repairs and pipeline leak detection to bathroom renovation and drain cleaning. Our certified plumbers respond same-day for all residential and commercial needs.',
        highlights: [
            '✦ Borewell Motor Repair & Replacement',
            '✦ Pipeline Leak Detection & Joint Repair',
            '✦ Bathroom Renovation & Fitting Works',
            '✦ Drain & Sewer Line Cleaning & Unblocking',
            '✦ RO Water Purifier Installation',
            '✦ Overhead & Sump Tank Float Valve Repair',
            '✦ Certified Plumbers with Modern Detection Tools',
            '✦ Same-Day Emergency Plumbing Response'
        ],
        brands: ['Jaquar', 'Hindware', 'Cera', 'Parryware', 'Grundfos Pumps', 'Kirloskar', 'Texmo', 'Kent', 'Aquaguard'],
        specializations: ['Borewell Motors', 'Leak Detection', 'Bathroom Renovation', 'Drain Cleaning', 'RO Installation'],
        subServices: [
            { id: 'borewell-motor-repair', name: 'Borewell Motor Repair & Replacement', price: 1999, category: 'Motors', image: '/images/maintenance_icon.png', desc: 'Starts at ₹1999. Submersible pump pull-out, winding repair/replacement, and reinstallation.' },
            { id: 'pipeline-leak-detection', name: 'Pipeline Leak Detection & Repair', price: 799, category: 'Leak Repair', image: '/images/maintenance_icon.png', desc: 'Starts at ₹799. Electronic leak detection, pipe joint sealing, and pressure testing.' },
            { id: 'bathroom-renovation', name: 'Bathroom Renovation & Fitting', price: 8999, category: 'Renovation', image: '/images/maintenance_icon.png', desc: 'Starts at ₹8999. Fitting of WC, washbasin, shower, taps, tiles, and accessories.' },
            { id: 'drain-cleaning', name: 'Drain & Sewer Line Cleaning', price: 999, category: 'Drainage', image: '/images/maintenance_icon.png', desc: 'Starts at ₹999. High-pressure hydro-jetting to clear blockages in kitchen, bathroom, and sewers.' },
            { id: 'ro-installation', name: 'RO Water Purifier Installation', price: 599, category: 'Water Purifier', image: '/images/maintenance_icon.png', desc: 'Starts at ₹599. Full installation of under-sink or countertop RO system with water testing.' },
            { id: 'tank-float-repair', name: 'Tank Float Valve & Pump Repair', price: 499, category: 'Tank Repair', image: '/images/maintenance_icon.png', desc: 'Starts at ₹499. Float valve replacement, tank overflow fixing, and pump restart.' }
        ],
        inclusions: [
            'ISI-grade plumbing fittings and pipes used',
            'Leak pressure test after every repair',
            'Clean and tidy work — floor protection used',
            '90-day warranty on all plumbing work'
        ],
        exclusions: [
            'Cost of bathroom fittings and accessories',
            'Civil breaking work for concealed pipe repair',
            'Deep excavation for underground pipeline work'
        ],
        reviews: [
            { user: 'Naveen R., Miyapur', text: 'Borewell motor was not running. The team pulled it out, replaced the motor, and installed it back in 3 hours. Great work!' },
            { user: 'Deepika S., Kukatpally', text: 'Bathroom renovation was done perfectly. New Jaquar fittings, tile work, and everything installed neatly. Very satisfied!' }
        ]
    },

    // ─── Fire & Gas Safety Services ───────────────────────────────────────────
    'Fire & Gas Safety Services': {
        icon: '/images/lightning_bolt_icon.png',
        photo: '/images/lightning_bolt_icon.png',
        desc: 'Protect your home and workplace with professional <strong>fire and gas safety services in Hyderabad</strong>. We provide fire extinguisher installation, annual fire safety audits, gas leak detection system setup, and digital safety solutions to keep your family safe.',
        highlights: [
            '✦ Fire Extinguisher Supply, Installation & Refilling',
            '✦ Annual Fire Safety Audits & Compliance Reports',
            '✦ Gas Leak Detection System Installation',
            '✦ Smoke & CO Alarm Installation & Testing',
            '✦ Fire Safety Training for Home & Office Staff',
            '✦ Emergency Gas Valve Shutoff Installation',
            '✦ Certified Fire Safety Engineers',
            '✦ Home & Commercial Safety Solutions'
        ],
        brands: ['Kanex', 'Ceasefire', 'Minimax', 'Kidde', 'Honeywell', 'BRK Brands', 'Elica Gas Sensors'],
        specializations: ['Fire Extinguishers', 'Safety Audits', 'Gas Leak Detectors', 'Smoke Alarms', 'Emergency Shutoffs'],
        subServices: [
            { id: 'fire-extinguisher', name: 'Fire Extinguisher Installation & Refilling', price: 999, category: 'Fire Safety', image: '/images/lightning_bolt_icon.png', desc: 'Starts at ₹999. Supply, mounting, and ISI-certified ABC powder extinguisher installation.' },
            { id: 'fire-safety-audit', name: 'Fire Safety Audit & Compliance Report', price: 2999, category: 'Safety Audit', image: '/images/lightning_bolt_icon.png', desc: 'Starts at ₹2999. Comprehensive fire safety audit with risk assessment and compliance checklist.' },
            { id: 'gas-leak-detection', name: 'Gas Leak Detection System Installation', price: 1499, category: 'Gas Safety', image: '/images/lightning_bolt_icon.png', desc: 'Starts at ₹1499. LPG/CNG leak detector installation with buzzer alarm and solenoid shutoff valve.' },
            { id: 'smoke-alarm-install', name: 'Smoke & CO Alarm Installation', price: 799, category: 'Alarms', image: '/images/lightning_bolt_icon.png', desc: 'Starts at ₹799. Battery or hardwired smoke and carbon monoxide alarm installation and testing.' },
            { id: 'fire-safety-training', name: 'Fire Safety Training Session', price: 1999, category: 'Training', image: '/images/lightning_bolt_icon.png', desc: 'Starts at ₹1999. 60-minute practical fire safety training for home or office staff.' }
        ],
        inclusions: [
            'Certified fire safety engineer for installation',
            'ISI/CE-certified safety equipment',
            'Compliance checklist and report provided',
            '180-day warranty on installed equipment'
        ],
        exclusions: [
            'Large-scale fire suppression system design',
            'Municipal fire NOC filing and approvals',
            'Hydrant and sprinkler system installation'
        ],
        reviews: [
            { user: 'Rajesh T., Secunderabad', text: 'Had the gas leak detector installed after my neighbour had a leak incident. The team was fast, professional, and explained everything clearly.' },
            { user: 'Anitha K., Begumpet', text: 'Annual fire safety audit for our office. Received a detailed report with recommendations. Very thorough and professional.' }
        ]
    },

    // ─── Office & Furniture Shifting ─────────────────────────────────────────
    'Office & Furniture Shifting': {
        icon: '/images/worker_icon.png',
        photo: '/images/worker_icon.png',
        desc: 'Stress-free <strong>office shifting and furniture relocation services in Hyderabad</strong>. We specialize in corporate office moves, single furniture shifting, bike/car transport, and storage solutions — with expert packing, loading, and on-time delivery.',
        highlights: [
            '✦ Complete Office Shifting & Workstation Relocation',
            '✦ Single Furniture Piece Shifting & Assembly',
            '✦ Bike & Car Transport in Closed Carriers',
            '✦ Storage & Warehousing Solutions',
            '✦ Dedicated Move Manager for Office Shifts',
            '✦ IT Equipment & Server Room Relocation',
            '✦ ISO-Certified Packing Materials',
            '✦ Zero-Damage Transit Guarantee'
        ],
        brands: ['Multi-layer Bubble Wrap', 'Closed Container Trucks', 'Corrugated Sheets', 'Heavy Duty Tape', 'Shrink Wrap'],
        specializations: ['Office Shifting', 'Furniture Shifting', 'Bike Transport', 'Car Transport', 'Storage Solutions'],
        subServices: [
            { id: 'office-shifting', name: 'Office Shifting & Workstation Relocation', price: 4999, category: 'Office Move', image: '/images/worker_icon.png', desc: 'Starts at ₹4999. Complete packing, disassembly, shifting, and reassembly of office furniture and IT equipment.' },
            { id: 'furniture-shifting', name: 'Single Furniture Piece Shifting', price: 999, category: 'Furniture Move', image: '/images/worker_icon.png', desc: 'Starts at ₹999. Safe shifting of sofa, bed, wardrobe, or any single piece of furniture.' },
            { id: 'bike-transport', name: 'Bike Transport Service', price: 2499, category: 'Vehicle Transport', image: '/images/worker_icon.png', desc: 'Starts at ₹2499. Safe two-wheeler transport in closed carriers with full-body wrapping.' },
            { id: 'car-transport', name: 'Car Transport Service', price: 5999, category: 'Vehicle Transport', image: '/images/worker_icon.png', desc: 'Starts at ₹5999. Enclosed car carrier transport with door-to-door delivery and insurance.' },
            { id: 'storage-warehousing', name: 'Storage & Warehousing', price: 2999, category: 'Storage', image: '/images/worker_icon.png', desc: 'Starts at ₹2999/month. Secure, climate-controlled storage units for household or office goods.' }
        ],
        inclusions: [
            'Professional packing with branded materials',
            'Loading, transit, and unloading included',
            'Transit insurance for all goods',
            'Dedicated move coordinator for communication'
        ],
        exclusions: [
            'Customs/toll charges for inter-state moves',
            'Reassembly of complex modular furniture',
            'Storage insurance beyond 1 month (extended plan)'
        ],
        reviews: [
            { user: 'Anand P., Hitech City', text: 'Shifted our 30-person office in one weekend. MeeHelper handled everything — IT equipment, workstations, and cabinets. Zero damage!' },
            { user: 'Lakshmi V., Gachibowli', text: 'Sent my bike from Hyderabad to Chennai. It arrived in perfect condition, wrapped securely. Great service and on-time delivery!' }
        ]
    }
});

// Process default service to use CDN
if (DEFAULT_SERVICE.icon) DEFAULT_SERVICE.icon = toCDN(DEFAULT_SERVICE.icon);
if (DEFAULT_SERVICE.photo) DEFAULT_SERVICE.photo = toCDN(DEFAULT_SERVICE.photo);

// Process SERVICE_DATA_MAP to use CDN paths
Object.keys(SERVICE_DATA_MAP).forEach(key => {
    const service = SERVICE_DATA_MAP[key];
    if (service.icon) service.icon = toCDN(service.icon);
    if (service.photo) service.photo = toCDN(service.photo);
    if (service.subServices) {
        service.subServices.forEach(sub => {
            if (sub.image) sub.image = toCDN(sub.image);
        });
    }
});

// Map alternative UI names to database keys for seamless data lookup
SERVICE_DATA_MAP['AC Repairing'] = SERVICE_DATA_MAP['Air Conditioner Repair'];
SERVICE_DATA_MAP['Refrigerator Repairing'] = SERVICE_DATA_MAP['Refrigerator Repair'];
SERVICE_DATA_MAP['Washing Machine Repairing'] = SERVICE_DATA_MAP['Washing Machine Repair'];
SERVICE_DATA_MAP['TV Repairing'] = SERVICE_DATA_MAP['Television Repair'];
SERVICE_DATA_MAP['Microwave Repairing'] = SERVICE_DATA_MAP['Microwave Oven Repair'];
SERVICE_DATA_MAP['Geyser Repairing'] = SERVICE_DATA_MAP['Geyser & Water Heater Repair'];
SERVICE_DATA_MAP['Chimney Repairing'] = SERVICE_DATA_MAP['Kitchen Chimney Service'];
SERVICE_DATA_MAP['Water Purifier Repairing'] = SERVICE_DATA_MAP['Water Purifier (RO) Service'];
SERVICE_DATA_MAP['Laptop Repairing'] = SERVICE_DATA_MAP['Laptop & Desktop Repair'];
SERVICE_DATA_MAP['Air Cooler Repairing'] = SERVICE_DATA_MAP['Air Cooler Repair'];
SERVICE_DATA_MAP['Kitchen Sink Repairing'] = SERVICE_DATA_MAP['Plumbing Work'];
SERVICE_DATA_MAP['Men Haircut'] = SERVICE_DATA_MAP['Haircut for Men'];
SERVICE_DATA_MAP['Washing Machine Checkup'] = SERVICE_DATA_MAP['Automatic Machine Check-up'];
SERVICE_DATA_MAP['Manicure Service'] = SERVICE_DATA_MAP['British Rose Pedicure'];
SERVICE_DATA_MAP['Massage for Men'] = SERVICE_DATA_MAP['Haircut for Men'];
SERVICE_DATA_MAP['AC Installation'] = SERVICE_DATA_MAP['Air Conditioner Repair'];
SERVICE_DATA_MAP['Doorstep Bike Eco Wash'] = SERVICE_DATA_MAP['MeeHelper Auto Care'];
SERVICE_DATA_MAP['Doorstep Bike Premium Foam Wash & Polish'] = SERVICE_DATA_MAP['MeeHelper Auto Care'];
SERVICE_DATA_MAP['Hatchback/Sedan Exterior Foam Wash & Vacuum'] = SERVICE_DATA_MAP['MeeHelper Auto Care'];
SERVICE_DATA_MAP['SUV Premium Foam Wash & Interior Polish'] = SERVICE_DATA_MAP['MeeHelper Auto Care'];
SERVICE_DATA_MAP['STANDARD (Spadex Steam Wash)'] = SERVICE_DATA_MAP['MeeHelper Auto Care'];
SERVICE_DATA_MAP['PREMIUM (Standard & Spadex Elite)'] = SERVICE_DATA_MAP['MeeHelper Auto Care'];
SERVICE_DATA_MAP['SPADEX PRO (Elite Package)'] = SERVICE_DATA_MAP['MeeHelper Auto Care'];


