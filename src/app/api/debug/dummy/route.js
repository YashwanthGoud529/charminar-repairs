export const dynamic = 'force-static';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(req) {
    try {
        // 1. Seed Dummy Service Leads
        const leadsCol = collection(db, 'service_leads');
        const dummyLeads = [
            {
                name: "Rahul Kumar",
                phone: "9876543210",
                appliance: "Washing Machine",
                problem_description: "Drum is making loud noise during spin cycle. Possible bearing issue.",
                address: "Plot 42, Gachibowli High Street",
                area: "Gachibowli",
                visit_date: "2026-03-20",
                visit_time: "10:00 AM - 12:00 PM",
                status: "Pending",
                source: "Website Lead",
                createdAt: serverTimestamp()
            },
            {
                name: "Anitha Reddy",
                phone: "9123456789",
                appliance: "Refrigerator",
                problem_description: "Cooling is not consistent in the lower compartment. Freezer is fine.",
                address: "Flat 202, Skyline Apartments, Madhapur",
                area: "Madhapur",
                visit_date: "2026-03-21",
                visit_time: "02:00 PM - 04:00 PM",
                status: "Pending",
                source: "Website Lead",
                createdAt: serverTimestamp()
            },
            {
                name: "Suresh Babu",
                phone: "8887776665",
                appliance: "Air Conditioner",
                problem_description: "Gas leak suspected. AC not cooling at all.",
                address: "H.No 12-5/A, Banjara Hills Road No. 10",
                area: "Banjara Hills",
                visit_date: "2026-03-19",
                visit_time: "11:00 AM - 01:00 PM",
                status: "Completed",
                source: "Contact Form",
                createdAt: serverTimestamp()
            }
        ];

        // 2. Seed Dummy Bookings (Cart Orders)
        const bookingsCol = collection(db, 'bookings');
        const dummyBookings = [
            {
                customerName: "Mohammed Ibrahim",
                phone: "7778889990",
                location: "Tolichowki",
                address: "Near Galaxy Cafe, Al-Hasnat Colony",
                items: [
                    { id: "wm-1", name: "Drum Bearing Replacement", price: 1800, quantity: 1 },
                    { id: "wm-2", name: "Inlet Valve Fix", price: 450, quantity: 1 }
                ],
                totalPrice: 2250,
                status: "Pending",
                createdAt: serverTimestamp()
            },
            {
                customerName: "Praveen Sharma",
                phone: "9000100020",
                location: "Jubilee Hills",
                address: "Road No. 36, Beside Blue Cross",
                items: [
                    { id: "ac-1", name: "Premium Jet Cleaning", price: 599, quantity: 2 },
                    { id: "ac-2", name: "Gas Refill - R32", price: 2500, quantity: 1 }
                ],
                totalPrice: 3698,
                status: "Pending",
                createdAt: serverTimestamp()
            }
        ];

        // 3. Seed Dummy Job Applications
        const appsCol = collection(db, 'job_applications');
        const dummyApps = [
            {
                name: "Manish Verma",
                phone: "9665544332",
                location: "Miyapur",
                specialization: "Air Conditioner",
                experience: "5 Years",
                status: "Pending",
                date: "18 Mar 2026",
                createdAt: serverTimestamp()
            },
            {
                name: "Karthik Raj",
                phone: "8112233445",
                location: "Uppal",
                specialization: "Washing Machine",
                experience: "3 Years",
                status: "Hired",
                date: "15 Mar 2026",
                createdAt: serverTimestamp()
            }
        ];

        // Perform additions
        const promises = [
            ...dummyLeads.map(l => addDoc(leadsCol, l)),
            ...dummyBookings.map(b => addDoc(bookingsCol, b)),
            ...dummyApps.map(a => addDoc(appsCol, a))
        ];

        await Promise.all(promises);

        return Response.json({ 
            success: true, 
            message: "Dummy data seeded successfully for testing UI.",
            counts: {
                leads: dummyLeads.length,
                bookings: dummyBookings.length,
                applications: dummyApps.length
            }
        });
    } catch (e) {
        return Response.json({ error: e.message }, { status: 500 });
    }
}
