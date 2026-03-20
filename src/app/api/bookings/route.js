import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(request) {
    try {
        const body = await request.json();
        const { items, totalPrice, location, customerName, phone, address, tipAmount, subtotal, selectedSlot } = body;

        // Add booking to Firestore
        const docRef = await addDoc(collection(db, 'bookings'), {
            items,
            totalPrice,
            location,
            customerName,
            phone,
            address: address || '',
            tipAmount: tipAmount || 0,
            subtotal: subtotal || 0,
            selectedSlot: selectedSlot || null,
            status: 'Pending',
            createdAt: serverTimestamp()
        });

        return NextResponse.json({ 
            success: true, 
            message: 'Booking request sent successfully!',
            bookingId: docRef.id
        }, { status: 201 });

    } catch (error) {
        console.error('Booking Error:', error);
        return NextResponse.json({ 
            success: false, 
            message: 'Failed to process booking.' 
        }, { status: 400 });
    }
}
