export const SERVICE_DATA_MAP = {
    'Air Conditioner Repair': {
        icon: '/images/ac_icon.png',
        photo: '/images/ac-repair.png',
        desc: 'Is your <strong>AC blowing warm air</strong>, leaking water, or making unexplained noises? At <strong>Charminar Repairs</strong>, our HVAC-certified technicians perform a complete <strong>25-point diagnostic</strong> on your air conditioner across <strong>Hyderabad</strong> — from the outdoor compressor unit to the indoor evaporator coil.',
        highlights: [
            '✦ Split & Window AC Repair — All Types',
            '✦ Refrigerant Gas Charging (R-32 / R-22 / R-410A)',
            '✦ Compressor & Capacitor Replacement',
            '✦ PCB & Thermostat Board Diagnostics',
            '✦ Deep Jet Cleaning (Indoor + Outdoor Unit)',
            '✦ Water Leakage & Drain Line Unclogging',
            '✦ Same-Day Doorstep Service in Hyderabad',
            '✦ 1-Year Warranty on Parts & Labour',
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
            { id: 'ac-coil', name: 'Coil & Condenser Repair', price: 2000, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Deep restoration for high-performance cooling coils.' },
        ]
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
            { id: 'fridge-fan', name: 'Cooling Fan Motor Replacement', price: 799, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Fixes loud humming noises and uneven cooling by installing a silent, high-RPM fan motor.' },
        ]
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
            '✦ 1-Year Service Warranty — All Parts',
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
            { id: 'wm-pump', name: 'Silent Drain Pump Replacement', price: 1200, image: '/images/img_icons8_com_3d_fluency_94_forward_png.png', desc: 'Solves water drainage issues and OE errors by installing a high-efficiency magnetic drain pump.' },
        ]
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
            { id: 'tv-panel', name: 'Panel / Open Cell COF Bonding', price: 4999, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Fixes horizontal/vertical lines.' },
        ]
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
            { id: 'mw-motor', name: 'Turntable Motor & Drive Fix', price: 599, image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', desc: 'Ensures even heating by fixing the rotating plate mechanism and glass tray alignment.' },
        ]
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
            { id: 'dw-pump', name: 'Drain / Wash Pump Restoration', price: 2199, image: '/images/dishwasher_repair_3d.png', desc: 'Fixes drainage & cleaning issues.' },
        ]
    },
    'Coffee Machine Repair': {
        icon: '/images/blender_icon.png',
        photo: '/images/ac.png',
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
        photo: '/images/ac.png',
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
            { id: 'ro-pump', name: 'Bo booster Pump Restoration', price: 1599, image: '/images/img_icons8_com_3d_fluency_94_forward_png.png', desc: 'Fixes low pressure & flow issues.' },
        ]
    },
    'Geyser & Water Heater Repair': {
        icon: '/images/geyser_icon.png',
        photo: '/images/geyser_icon.png',
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
            { id: 'geyser-thermostat', name: 'Thermostat & Safety Cut-off', price: 499, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'Fixes overheating & power issues.' },
        ]
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
            { id: 'ch-visit', name: 'Chimney Diagnostic Visit', price: 299, image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', desc: 'Suction test & board inspection.' },
        ]
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
        desc: 'Professional home appliance repair services in Hyderabad. Our background-verified, certified technicians bring OEM spare parts to your doorstep and fix your appliance right the first time — backed by a 1-year warranty on all parts and labour.',
        highlights: [
            '✦ Certified & Background-Verified Technicians',
            '✦ Same-Day Doorstep Service in Hyderabad',
            '✦ OEM / Genuine Spare Parts Only',
            '✦ Transparent, Upfront Pricing — No Surprises',
            '✦ 1-Year Warranty on Parts & Labour',
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
            // --- HAIR CUT ---
            { id: 'hc-regular', name: 'Standard Hair Cut', price: 200, image: '/images/img_icons8_com_3d_fluency_94_scissors_png.png', desc: 'Professional classic haircut with style consultation.' },
            { id: 'hc-style', name: 'Change of Style / Fade', price: 300, image: '/images/img_icons8_com_3d_fluency_94_scissors_png.png', desc: 'Transform your look with a trendy fade or complete style change.' },
            { id: 'hc-shave', name: 'Regular Clean Shave', price: 80, image: '/images/img_icons8_com_3d_fluency_94_razor_png.png', desc: 'Smooth and clean shave using sterilized tools.' },
            { id: 'hc-head-shave', name: 'Full Head Shave', price: 200, image: '/images/img_icons8_com_3d_fluency_94_razor_png.png', desc: 'Traditional head shave for a clean look.' },
            { id: 'hc-kids', name: 'Kids Hair Cut (Up to 10yr)', price: 120, image: '/images/img_icons8_com_3d_fluency_94_scissors_png.png', desc: 'Special care haircut for children with a friendly approach.' },
            { id: 'hc-beard-design', name: 'Beard Design & Sculpting', price: 200, image: '/images/img_icons8_com_3d_fluency_94_razor_png.png', desc: 'Precision beard shaping to match your face structure.' },
            { id: 'hc-beard-trim', name: 'Quick Beard Trim', price: 100, image: '/images/img_icons8_com_3d_fluency_94_razor_png.png', desc: 'Fast and efficient beard length adjustment.' },
            
            // --- HAIR COLORING ---
            { id: 'hc-color-grey', name: 'Grey Coverage (Hair Only)', price: 800, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Professional hair color to hide greys naturally.' },
            { id: 'hc-color-streak', name: 'Hair Streak (Per Streak)', price: 200, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Add a pop of color with single or multiple streaks.' },
            { id: 'hc-color-beard', name: 'Beard Coloring', price: 300, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Match your beard with your hair for a complete look.' },

            // --- HEAD MASSAGE ---
            { id: 'hc-massage-wash', name: 'Indian Head Massage (With Wash)', price: 400, image: '/images/img_icons8_com_3d_fluency_94_spa_png.png', desc: 'Deeply relaxing head massage followed by a professional hair wash.' },
            { id: 'hc-massage-basic', name: 'Indian Head Massage (Dry)', price: 350, image: '/images/img_icons8_com_3d_fluency_94_spa_png.png', desc: 'traditional stress-relief head massage for instant relaxation.' },

            // --- HAIR SPA & TREATMENT ---
            { id: 'hc-spa-classic', name: 'Classic Hair Spa', price: 750, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Deep conditioning treatment to restore hair health and shine.' },
            { id: 'hc-treatment-anti', name: 'Anti-Dandruff / Hairfall Treatment', price: 1300, image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', desc: 'Professional clinical treatment targeting scalp issues.' },
        ]
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
            { id: 'tm-check', name: 'Termite Site Inspection', price: 0, image: '/assets/Images/pest-control/termite-control.png', desc: 'Free diagnostic & damage audit.' },
            { id: 'tm-treat', name: 'Full-House Warranty Treat', price: 4999, image: '/assets/Images/pest-control/termite-control.png', desc: 'Includes 5-year protection & warranty.' },
        ]
    },
    'Woodborer Control': {
        icon: '/images/service_icon.png',
        photo: '/assets/Images/pest-control/woodborder-control.png',
        desc: 'Is your expensive wooden furniture turning into powder? Our <strong>Professional Woodborer Control in Hyderabad</strong> targets the larvae deep within the wood using specialized syringes and oil-based preservatives.',
        highlights: [
            '✦ Precision Syringe Injection',
            '✦ Oil-Based Wood Preservatives',
            '✦ Targeted Larval Eradication',
            '✦ Surface protection Coating',
            '✦ Odorless & Stain-Free Process',
            '✦ 100% Effective Larvicide',
            '✦ 1-Year Comprehensive Warranty',
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
            { id: 'wb-single', name: 'Single Furniture Protect', price: 899, image: '/assets/Images/pest-control/woodborder-control.png', desc: 'Larval treatment for 1 wardrobe/unit.' },
            { id: 'wb-full', name: 'Complete Wooden Home Pack', price: 2499, image: '/assets/Images/pest-control/woodborder-control.png', desc: 'Covers all wooden assets with warranty.' },
        ]
    },
    'Commercial Pest Control': {
        icon: '/images/service_icon.png',
        photo: '/assets/Images/pest-control/commercial-pest-control.png',
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
            { id: 'com-inspect', name: 'B2B Compliance Audit', price: 0, image: '/assets/Images/pest-control/commercial-pest-control.png', desc: 'FSSAI/HACCP readiness check.' },
            { id: 'com-quarterly', name: 'Quarterly Shield Contract', price: 14999, image: '/assets/Images/pest-control/commercial-pest-control.png', desc: '4 services per year with auditing.' },
        ]
    },
    'Bed Bugs Control': {
        icon: '/images/service_icon.png',
        photo: '/assets/Images/pest-control/bed-bugs.png',
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
            { id: 'bb-treat', name: 'Full-House Terminate (2 Visit)', price: 1299, image: '/assets/Images/pest-control/bed-bugs.png', desc: 'Lethal treatment for bedroom area.' },
            { id: 'bb-check', name: 'Professional Audit & Map', price: 0, image: '/assets/Images/pest-control/bed-bugs.png', desc: 'Free site inspection for hideouts.' },
        ]
    },
    'Cockroach Control': {
        icon: '/images/service_icon.png',
        photo: '/assets/Images/pest-control/cock-roch-control.png',
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
            { id: 'cc-basic', name: 'Kitchen & Bathroom Gel', price: 699, image: '/assets/Images/pest-control/cock-roch-control.png', desc: 'Effective for targeted kitchen area.' },
            { id: 'cc-full', name: 'Complete Home Protection', price: 999, image: '/assets/Images/pest-control/cock-roch-control.png', desc: 'Full house gel treatment & drainage spray.' },
        ]
    },
    'Invisible Grille': {
        icon: '/images/service_icon.png',
        photo: 'https://placehold.co/800x600/f8f9fa/343a40?text=Invisible+Grille',
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
        ]
    },
    'Mosquito Mesh': {
        icon: '/images/service_icon.png',
        photo: 'https://placehold.co/800x600/f8f9fa/343a40?text=Mosquito+Mesh',
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
        photo: 'https://placehold.co/800x600/f8f9fa/343a40?text=Honeycomb+Blinds',
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
        photo: 'https://placehold.co/800x600/f8f9fa/343a40?text=Zip+Screen',
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
        photo: 'https://placehold.co/800x600/f8f9fa/343a40?text=Modern+Pergola',
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
        photo: 'https://placehold.co/800x600/f8f9fa/343a40?text=Safety+Mesh',
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
            { id: 'bn-balcony', name: 'Standard Balcony Bird Netting', price: 15, category: 'Bird Protection', image: '/assets/Images/home-repair-services/bird_netting.png', desc: 'Per Sq.Ft for high-quality HDPE mesh installation.' },
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
            { id: 'pb-declog', name: 'Drainage Jet De-clogging', price: 499, category: 'Drainage Solutions', image: '/images/kitchen_repair_blog.png', desc: 'Clearing main drain line blockages.' },
        ]
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
            { id: 'el-fan', name: 'Ceiling Fan Service/Assembly', price: 199, category: 'Appliance Fitting', image: '/images/electrical_wiring_3d.png', desc: 'Testing motor winding and regulator sync.' },
        ]
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
            { id: 'cp-assembly', name: 'Furniture Assembly (Small)', price: 499, category: 'Modular Assembly', image: '/images/repairman-using-tools-to-fix-oven.jpg', desc: 'Setting up tables, chairs or small units.' },
        ]
    }
};

export const DEFAULT_SERVICE = {
    icon: '/images/service_icon.png',
    photo: '/images/unsplash_1621905251189.jpg',
    desc: 'Professional home appliance repair services in Hyderabad. Our background-verified, certified technicians bring OEM spare parts to your doorstep and fix your appliance right the first time — backed by a 1-year warranty on all parts and labour.',
    highlights: [
        '✦ Certified & Background-Verified Technicians',
        '✦ Same-Day Doorstep Service in Hyderabad',
        '✦ OEM / Genuine Spare Parts Only',
        '✦ Transparent, Upfront Pricing — No Surprises',
        '✦ 1-Year Warranty on Parts & Labour',
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
};
