import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, query, where, getDocs } from 'firebase/firestore';

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

const DUMMY_PARTNERS = [
  {
    name: 'Yashwanth Goud',
    phone: '8008615049',
    whatsapp: '8008615049',
    specialization: 'AC Technical Expert',
    experience: '5-10 Years',
    location: 'Gachibowli',
    upi: '8008615049@ybl',
    password: 'password123',
    status: 'Approved',
    isVerified: true,
    rating: 4.9,
    jobsCompleted: 142,
    date: new Date().toLocaleString()
  },
  {
    name: 'Suresh Kumar',
    phone: '9988776655',
    whatsapp: '9988776655',
    specialization: 'Washing Machine Specialist',
    experience: '3-5 Years',
    location: 'Madhapur',
    upi: 'suresh.kumar@okaxis',
    password: 'password123',
    status: 'Approved',
    isVerified: true,
    rating: 4.7,
    jobsCompleted: 88,
    date: new Date().toLocaleString()
  },
  {
    name: 'Md. Azhar',
    phone: '8877665544',
    whatsapp: '8877665544',
    specialization: 'Refrigerator Repair Pro',
    experience: '10+ Years',
    location: 'Mehdipatnam',
    upi: 'azhar.md@paytm',
    password: 'password123',
    status: 'Applied',
    isVerified: false,
    rating: 5.0,
    jobsCompleted: 0,
    date: new Date().toLocaleString()
  },
  {
    name: 'Kiran Reddy',
    phone: '7766554433',
    whatsapp: '7766554433',
    specialization: 'Electrical Wiring Expert',
    experience: '1-2 Years',
    location: 'Kondapur',
    upi: 'kiran.reddy@upi',
    password: 'password123',
    status: 'Applied',
    isVerified: false,
    rating: 4.5,
    jobsCompleted: 5,
    date: new Date().toLocaleString()
  },
  {
    name: 'Rajesh Verma',
    phone: '6655443322',
    whatsapp: '6655443322',
    specialization: 'TV Repair Specialist',
    experience: '5-10 Years',
    location: 'Kukatpally',
    upi: 'verma.rajesh@okicici',
    password: 'password123',
    status: 'Rejected',
    isVerified: false,
    rating: 3.2,
    jobsCompleted: 12,
    date: new Date().toLocaleString()
  }
];

async function seed() {
  console.log('🚀 Starting Partner Data Seeding...');
  
  for (const p of DUMMY_PARTNERS) {
    const q = query(collection(db, 'partners'), where('phone', '==', p.phone));
    const snap = await getDocs(q);
    
    if (snap.empty) {
        await addDoc(collection(db, 'partners'), {
            ...p,
            createdAt: serverTimestamp()
        });
        console.log(`✅ Added Partner: ${p.name}`);
    } else {
        console.log(`⏭️ Skipped Partner (Already exists): ${p.name}`);
    }
  }
  
  console.log('\n🎉 Seeding Completed Successfully!');
  process.exit(0);
}

seed().catch(err => {
    console.error('❌ Error during seeding:', err);
    process.exit(1);
});
