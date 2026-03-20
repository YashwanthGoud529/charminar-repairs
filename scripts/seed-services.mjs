import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc, deleteDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmfq9Y3kE1GuXCP-klV2UDVYU20BHVBus",
  authDomain: "charminar-repairs.firebaseapp.com",
  projectId: "charminar-repairs",
  storageBucket: "charminar-repairs.firebasestorage.app",
  messagingSenderId: "582718266624",
  appId: "1:582718266624:web:1f0bdf4ed109dc675e67e5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ─── Updated Service Data ────────────────────────────────────────────────────
const SERVICES_TO_SYNC = {
  'air-conditioner-repair': {
    subServices: [
      { id: 'ac-repair-gen',  name: 'General AC Repair',           price: 650,  order: 1, desc: 'Starting from ₹650. Includes primary diagnostic and basic electrical repair.', image: '/images/img_icons8_com_3d_fluency_94_conference_png.png', category: 'Other Services' },
      { id: 'ac-compressor',  name: 'AC Compressor Restoration',   price: 1500, order: 2, desc: 'Professional compressor health diagnostics and starter restoration.', image: '/images/ac_icon.png', category: 'Repair & Gas Refill' },
      { id: 'ac-pcb',         name: 'PCB / Control Board Repair',  price: 2700, order: 3, desc: 'Fixes communication errors and main circuit failures.', image: '/images/chip_icon.png', category: 'Repair & Gas Refill' },
      { id: 'ac-motor',       name: 'Fan Motor Repair',            price: 1400, order: 4, desc: 'Resolution for noisy fans or unit vibration.', image: '/images/img_icons8_com_3d_fluency_94_line_chart_png.png', category: 'Repair & Gas Refill' },
      { id: 'ac-leak',        name: 'Refrigerant Leak Repair',     price: 600,  order: 5, desc: 'Pressure testing and leak sealing to restore cooling power.', image: '/images/gas_1.png', category: 'Repair & Gas Refill' },
      { id: 'ac-capacitor',   name: 'Capacitor Swap',              price: 450,  order: 6, desc: 'Replacement of faulty capacitors to start the compressor safely.', image: '/images/electrical_wiring_3d.png', category: 'Repair & Gas Refill' },
      { id: 'ac-coil',        name: 'Coil & Condenser Repair',     price: 2000, order: 7, desc: 'Deep restoration for high-performance cooling coils.', image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', category: 'Repair & Gas Refill' },
    ]
  },
  'haircut-for-men': {
    subServices: [
      // Hair Cut & Style
      { id: 'hc-regular',       name: 'Standard Hair Cut',                    price: 200,  order: 1,  desc: 'Professional classic haircut with style consultation.', image: '/images/img_icons8_com_3d_fluency_94_scissors_png.png', category: 'Other Services' },
      { id: 'hc-style',         name: 'Change of Style / Fade',               price: 300,  order: 2,  desc: 'Transform your look with a trendy fade or complete style change.', image: '/images/img_icons8_com_3d_fluency_94_scissors_png.png', category: 'Other Services' },
      { id: 'hc-shave',         name: 'Regular Clean Shave',                  price: 80,   order: 3,  desc: 'Smooth and clean shave using sterilized tools.', image: '/images/img_icons8_com_3d_fluency_94_razor_png.png', category: 'Other Services' },
      { id: 'hc-head-shave',    name: 'Full Head Shave',                      price: 200,  order: 4,  desc: 'Traditional head shave for a clean look.', image: '/images/img_icons8_com_3d_fluency_94_razor_png.png', category: 'Other Services' },
      { id: 'hc-kids',          name: 'Kids Hair Cut (Up to 10yr)',            price: 120,  order: 5,  desc: 'Special care haircut for children with a friendly approach.', image: '/images/img_icons8_com_3d_fluency_94_scissors_png.png', category: 'Other Services' },
      { id: 'hc-beard-design',  name: 'Beard Design & Sculpting',             price: 200,  order: 6,  desc: 'Precision beard shaping to match your face structure.', image: '/images/img_icons8_com_3d_fluency_94_razor_png.png', category: 'Other Services' },
      { id: 'hc-beard-trim',    name: 'Quick Beard Trim',                     price: 100,  order: 7,  desc: 'Fast and efficient beard length adjustment.', image: '/images/img_icons8_com_3d_fluency_94_razor_png.png', category: 'Other Services' },
      // Hair Coloring
      { id: 'hc-color-grey',    name: 'Grey Coverage (Hair Only)',             price: 800,  order: 8,  desc: 'Professional hair color to hide greys naturally.', image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', category: 'Other Services' },
      { id: 'hc-color-streak',  name: 'Hair Streak (Per Streak)',              price: 200,  order: 9,  desc: 'Add a pop of color with single or multiple streaks.', image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', category: 'Other Services' },
      { id: 'hc-color-beard',   name: 'Beard Coloring',                       price: 300,  order: 10, desc: 'Match your beard with your hair for a complete look.', image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', category: 'Other Services' },
      // Hair Forms
      { id: 'hc-straight',      name: 'Hair Straightening / Smoothening',     price: 4500, order: 11, desc: 'Professional high-quality hair straightening for a permanent sleek look.', image: '/images/img_icons8_com_3d_fluency_94_scissors_png.png', category: 'Other Services' },
      // Head Massage
      { id: 'hc-massage-wash',  name: 'Indian Head Massage (With Wash)',      price: 400,  order: 12, desc: 'Deeply relaxing head massage followed by a professional hair wash.', image: '/images/img_icons8_com_3d_fluency_94_spa_png.png', category: 'Other Services' },
      { id: 'hc-massage-basic', name: 'Indian Head Massage (Dry)',            price: 350,  order: 13, desc: 'Traditional stress-relief head massage for instant relaxation.', image: '/images/img_icons8_com_3d_fluency_94_spa_png.png', category: 'Other Services' },
      // Hair Spa & Treatment
      { id: 'hc-spa-classic',   name: 'Classic Hair Spa',                     price: 750,  order: 14, desc: 'Deep conditioning treatment to restore hair health and shine.', image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', category: 'Other Services' },
      { id: 'hc-treatment-anti',name: 'Anti-Dandruff / Hairfall Treatment',   price: 1300, order: 15, desc: 'Professional clinical treatment targeting scalp issues.', image: '/images/img_icons8_com_3d_fluency_94_empty_box_png.png', category: 'Other Services' },
    ]
  }
};

// ─── Sync to Firestore ──────────────────────────────────────────────────────
async function syncToFirestore() {
  for (const [categorySlug, data] of Object.entries(SERVICES_TO_SYNC)) {
    console.log(`\n📦 Syncing category: ${categorySlug}`);

    const subColRef = collection(db, 'service_items', categorySlug, 'sub_services');

    // 1. Delete all existing sub-services
    const existing = await getDocs(subColRef);
    for (const document of existing.docs) {
      await deleteDoc(doc(db, 'service_items', categorySlug, 'sub_services', document.id));
      console.log(`  🗑️  Deleted old: ${document.id}`);
    }

    // 2. Write new sub-services
    for (const svc of data.subServices) {
      await setDoc(doc(db, 'service_items', categorySlug, 'sub_services', svc.id), svc);
      console.log(`  ✅ Written: ${svc.name} — ₹${svc.price}`);
    }

    console.log(`✔  Done: ${categorySlug}`);
  }

  console.log('\n🎉 All services synced to Firestore successfully!');
  process.exit(0);
}

syncToFirestore().catch(err => {
  console.error('❌ Error syncing to Firestore:', err);
  process.exit(1);
});
