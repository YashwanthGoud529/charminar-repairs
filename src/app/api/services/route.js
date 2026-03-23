export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import {
    collection, doc, getDocs, setDoc, addDoc, updateDoc,
    deleteDoc, query, orderBy, serverTimestamp
} from 'firebase/firestore';
import { SERVICE_DATA_MAP } from '@/config/serviceData';

/**
 * Seed Firestore with all static sub-services
 * POST /api/services?action=seed
 */
async function seedServices(includeDummy = false) {
    const categories = includeDummy ? {
        ...SERVICE_DATA_MAP,
        "Dummy Diagnostics": {
            subServices: [
                { id: "d-1", name: "Premium System Check", price: 499, desc: "A comprehensive health check for all your home appliances." },
                { id: "d-2", name: "Advanced Circuit Scan", price: 850, desc: "High-level diagnostic scan for electronic boards." }
            ]
        }
    } : SERVICE_DATA_MAP;

    const batch = [];
    for (const [categoryName, data] of Object.entries(categories)) {
        if (!data.subServices || data.subServices.length === 0) continue;
        const slug = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const colRef = collection(db, 'service_items', slug, 'sub_services');
        for (const sub of data.subServices) {
            const docRef = doc(colRef, sub.id);
            await setDoc(docRef, {
                id: sub.id,
                name: sub.name,
                price: sub.price,
                desc: sub.desc || '',
                categoryName,
                categorySlug: slug,
                order: data.subServices.indexOf(sub),
                updatedAt: serverTimestamp(),
            }, { merge: true });
        }
        batch.push(slug);
    }
    return batch;
}

export async function POST(req) {
    try {
        const { searchParams } = new URL(req.url);
        const action = searchParams.get('action');

        if (action === 'seed') {
            const includeDummy = searchParams.get('dummy') === 'true';
            const seeded = await seedServices(includeDummy);
            return NextResponse.json({ success: true, seeded, includesDummy: includeDummy });
        }

        const body = await req.json();
        const { categorySlug, item } = body;

        if (!categorySlug || !item) {
            return NextResponse.json({ error: 'Missing categorySlug or item' }, { status: 400 });
        }

        const colRef = collection(db, 'service_items', categorySlug, 'sub_services');
        const docRef = await addDoc(colRef, {
            ...item,
            categorySlug,
            order: Date.now(),
            updatedAt: serverTimestamp(),
        });

        return NextResponse.json({ success: true, id: docRef.id });
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const body = await req.json();
        const { categorySlug, itemId, updates } = body;
        const docRef = doc(db, 'service_items', categorySlug, 'sub_services', itemId);
        await updateDoc(docRef, { ...updates, updatedAt: serverTimestamp() });
        return NextResponse.json({ success: true });
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const categorySlug = searchParams.get('category');
        const itemId = searchParams.get('id');
        if (!categorySlug || !itemId) {
            return NextResponse.json({ error: 'Missing params' }, { status: 400 });
        }
        await deleteDoc(doc(db, 'service_items', categorySlug, 'sub_services', itemId));
        return NextResponse.json({ success: true });
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const categorySlug = searchParams.get('category');
        if (!categorySlug) {
            return NextResponse.json({ error: 'Missing category' }, { status: 400 });
        }
        const colRef = collection(db, 'service_items', categorySlug, 'sub_services');
        const q = query(colRef, orderBy('order', 'asc'));
        const snap = await getDocs(q);
        const items = snap.docs.map(d => ({ docId: d.id, ...d.data() }));
        return NextResponse.json({ items });
    } catch (e) {
        return NextResponse.json({ error: e.message }, { status: 500 });
    }
}
