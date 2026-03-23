'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '@/styles/admin.css';
import { db } from '@/lib/firebase';
import { collection, onSnapshot, query, orderBy, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import toast from 'react-hot-toast';
import Pagination from '@/components/admin/Pagination';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminHeader from '@/components/admin/AdminHeader';
import { SERVICE_DATA_MAP } from '@/config/serviceData';

const PAGE_SIZE = 8;

const hyderabadAreas = [
    "Abids", "Adibatla", "Adikmet", "Afzal Gunj", "Alkapur Township", "Alwal", "Amberpet", "Ameerpet", "Anandbagh", "AS Rao Nagar", "Ashok Nagar", "Attapur",
    "Bachupally", "Bahadurpura", "Balanagar", "Balapur", "Bandlaguda Jagir", "Banjara Hills", "Barkas", "Barkatpura", "Basheerbagh", "Begumpet", "Bharat Nagar", "Boduppal", "Bolarum", "Bowenpally", "Budvel",
    "Chaderghat", "Chandanagar", "Chandrayangutta", "Charminar", "Chengicherla", "Cherlapally", "Chikkadpally",
    "Dabeerpura", "Darulshifa", "Domalguda", "Dulapally",
    "East Marredpally", "ECIL", "Engine Bowli", "Erragadda",
    "Falaknuma", "Fateh Darwaza", "Film Nagar", "Financial District",
    "Gachibowli", "Ghansi Bazaar", "Ghatkesar", "Golnaka", "Gowlipura",
    "Hafeezpet", "Hayathnagar", "Himayatnagar", "HITEC City", "Hussaini Alam",
    "Ibrahimpatnam", "IS Sadan",
    "Jahanuma", "Jeedimetla", "Jubilee Hills",
    "Kachiguda", "Kalapathar", "Kapra", "Karkhana", "Karwan", "Katedan", "Keesara", "King Koti", "Kokapet", "Kollur", "Kompally", "Kondapur", "Kothaguda", "Koti", "KPHB Colony", "Kukatpally", "Kushaiguda",
    "L.B. Nagar", "Laad Bazaar", "Lal Darwaza", "Langar Houz", "Lingampally", "Lothkunta",
    "Madina", "Madinaguda", "Madhapur", "Maheshwaram", "Mailardevpally", "Malakpet", "Malkajgiri", "Mallapur", "Manikonda", "Medchal", "Medipally", "Mehdipatnam", "MG Road", "Miyapur", "Moghalpura", "Mokila", "Moosapet", "Moula Ali", "Musheerabad",
    "Nacharam", "Nagole", "Nallagandla", "Nanakramguda", "Narayanguda", "Narsingi", "Neredmet", "Nizampet",
    "Old Alwal", "Old Bowenpally", "Osman Nagar",
    "Pahadi Shareef", "Panjagutta", "Paradise", "Pathergatti", "Patny", "Peerzadiguda", "Petbasheerabad", "Pocharam", "Pragathi Nagar", "Punjagutta", "Puppalaguda", "Puranapul",
    "Raidurg", "Rajendranagar", "Ram Nagar", "Ranigunj", "Rein Bazaar", "RTC X Roads",
    "Sainikpuri", "Saidabad", "Sanathnagar", "Santosh Nagar", "Safilguda", "Secunderabad", "Serilingampally", "Shah Ali Banda", "Shameerpet", "Shivarampally", "Somajiguda", "SR Nagar", "Srinagar Colony", "Suchitra", "Sultan Bazaar", "Sun City", "Suraram",
    "Tarnaka", "Tellapur", "Tolichowki", "Trimulgherry", "Troop Bazaar",
    "Uppal", "Uppuguda",
    "Vanasthalipuram", "Velimela", "Vidyanagar",
    "West Marredpally",
    "Yakutpura", "Yousufguda"
].sort();

const AdminPage = () => {
    const router = useRouter();
    // We will use handleSeedData which is already defined and robust.
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [partners, setPartners] = useState([]);
    const [activeTab, setActiveTab] = useState('leads');
    const [leads, setLeads] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // Pagination state
    const [leadsPage, setLeadsPage] = useState(1);
    const [partnersPage, setPartnersPage] = useState(1);
    const [bookingsPage, setBookingsPage] = useState(1);

    // Career Applications/Partner filters
    const [filterName, setFilterName] = useState('');
    const [filterLocation, setFilterLocation] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [filterSpecialty, setFilterSpecialty] = useState('');

    // Service Leads filters
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [filterAppliance, setFilterAppliance] = useState('');
    const [filterLeadLocation, setFilterLeadLocation] = useState('');

    const applianceOptions = [
        "Washing Machine", "Refrigerator", "Air Conditioner", 
        "Microwave Oven", "Television", "Dishwasher", "Electrical",
        "Coffee Machine", "Vacuum Cleaner", "Gas Stove & Hob",
        "Water Purifier (RO)", "Geyser & Water Heater", "Kitchen Chimney",
        "Laptop & Desktop", "Professional Appliance"
    ];

    // Service Management State
    const [selectedServiceCategory, setSelectedServiceCategory] = useState('');
    const [serviceItems, setServiceItems] = useState([]);
    const [isSavingService, setIsSavingService] = useState(false);
    const [serviceModalOpen, setServiceModalOpen] = useState(false);
    const [editingServiceItem, setEditingServiceItem] = useState(null);
    const [newServiceItem, setNewServiceItem] = useState({ name: '', price: '', desc: '' });
    const [dbCategories, setDbCategories] = useState([]);
    const [selectedPartner, setSelectedPartner] = useState(null);
    const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

    const serviceCategories = dbCategories.length > 0 ? dbCategories : Object.keys(SERVICE_DATA_MAP).map(catName => ({
        name: catName,
        slug: catName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        icon: SERVICE_DATA_MAP[catName].icon
    }));

    const specialtyOptions = [
        "Washing Machine", "Fridge", "AC", "TV", "Electrical", "Other"
    ];

    useEffect(() => {
        // Real-time Partners
        const qPartner = query(collection(db, 'partners'), orderBy('createdAt', 'desc'));
        const unsubscribePartner = onSnapshot(qPartner, (snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setPartners(data);
        });

        // Real-time Leads
        const qLeads = query(collection(db, 'service_leads'), orderBy('createdAt', 'desc'));
        const unsubscribeLeads = onSnapshot(qLeads, (snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setLeads(data);
        });

        // Real-time Bookings
        const qBookings = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));
        const unsubscribeBookings = onSnapshot(qBookings, (snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setBookings(data);
        });

        // Real-time Service Categories
        const qCats = query(collection(db, 'service_items'), orderBy('title', 'asc'));
        const unsubscribeCats = onSnapshot(qCats, (snapshot) => {
            const data = snapshot.docs.map(doc => ({ 
                name: doc.data().title || doc.id, 
                slug: doc.id,
                icon: doc.data().icon 
            }));
            setDbCategories(data);
        });

        // Simple session check
        const session = localStorage.getItem('admin_session');
        if (session === 'active') {
            setIsLoggedIn(true);
        } else {
            router.push('/admin/login');
        }

        return () => { unsubscribePartner(); unsubscribeLeads(); unsubscribeBookings(); unsubscribeCats(); };
    }, [router]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        // Reset page on tab switch
        if (tab === 'leads') {
            setLeadsPage(1);
            setFromDate('');
            setToDate('');
            setFilterAppliance('');
            setFilterLeadLocation('');
        } else if (tab === 'bookings') {
            setBookingsPage(1);
        } else if (tab === 'services') {
            setSelectedServiceCategory('');
            setServiceItems([]);
        } else {
            setPartnersPage(1);
            setFilterName('');
            setFilterLocation('');
            setFilterStatus('');
            setFilterSpecialty('');
        }
        setSidebarOpen(false); // Close sidebar on mobile after tab change
    };

    const fetchServiceItems = async (categorySlug) => {
        if (!categorySlug) return;
        setLoading(true);
        try {
            const { getDocs, query, orderBy, collection } = await import('firebase/firestore');
            const colRef = collection(db, 'service_items', categorySlug, 'sub_services');
            const q = query(colRef, orderBy('order', 'asc'));
            const snap = await getDocs(q);
            const items = snap.docs.map(d => ({ docId: d.id, ...d.data() }));
            setServiceItems(items);
        } catch (error) {
            console.error('Error fetching service items:', error);
            toast.error('Failed to load services');
        } finally {
            setLoading(false);
        }
    };

    const handleSeedData = async () => {
        if (!window.confirm("This will seed all service metadata (descriptions, highlights, photos) and sub-services from your config into Firestore. Proceed?")) return;
        setLoading(true);
        try {
            const { setDoc, doc, collection } = await import('firebase/firestore');
            let totalCats = 0;
            let totalSub = 0;
            
            for (const [catName, data] of Object.entries(SERVICE_DATA_MAP)) {
                const slug = catName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                
                // 1. Seed Top-Level Metadata (The main service info)
                const catDocRef = doc(db, 'service_items', slug);
                const { subServices, ...metaData } = data; // Separate sub-services from meta
                
                await setDoc(catDocRef, {
                    ...metaData,
                    title: catName,
                    slug: slug,
                    updatedAt: new Date()
                }, { merge: true });
                totalCats++;

                // 2. Seed Sub-Services if they exist
                if (data.subServices) {
                    const subColRef = collection(db, 'service_items', slug, 'sub_services');
                    for (const sub of data.subServices) {
                        await setDoc(doc(subColRef, sub.id), {
                            ...sub,
                            categorySlug: slug,
                            updatedAt: new Date(),
                            order: data.subServices.indexOf(sub)
                        }, { merge: true });
                        totalSub++;
                    }
                }
            }
            toast.success(`Successfully seeded ${totalCats} categories and ${totalSub} sub-items.`);
            if (selectedServiceCategory) fetchServiceItems(selectedServiceCategory);
        } catch (error) {
            console.error("Seed error:", error);
            toast.error("Failed to seed data");
        } finally {
            setLoading(false);
        }
    };

    const handleSaveServiceItem = async () => {
        if (!selectedServiceCategory || !newServiceItem.name || !newServiceItem.price) {
            toast.error("Please fill all required fields");
            return;
        }

        setIsSavingService(true);
        try {
            // Dynamic Firestore Calls for Service Management
            const slug = selectedServiceCategory;
            const categoryCol = collection(db, 'service_items', slug, 'sub_services');

            if (editingServiceItem) {
                // Update
                const docRef = doc(db, 'service_items', slug, 'sub_services', editingServiceItem.docId || editingServiceItem.id);
                await updateDoc(docRef, {
                    ...newServiceItem,
                    price: Number(newServiceItem.price),
                    updatedAt: new Date()
                });
                toast.success("Service updated successfully");
            } else {
                // Create
                const { addDoc } = await import('firebase/firestore');
                await addDoc(categoryCol, {
                    ...newServiceItem,
                    price: Number(newServiceItem.price),
                    id: Date.now().toString(),
                    categorySlug: slug,
                    order: Date.now(),
                    updatedAt: new Date(),
                });
                toast.success("Service added successfully");
            }
            fetchServiceItems(selectedServiceCategory);
            setServiceModalOpen(false);
            setNewServiceItem({ name: '', price: '', desc: '' });
            setEditingServiceItem(null);
        } catch (error) {
            console.error('Error saving service:', error);
            toast.error("Failed to save service");
        } finally {
            setIsSavingService(false);
        }
    };

    const handleDeleteServiceItem = async (itemId) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        try {
            const { deleteDoc, doc } = await import('firebase/firestore');
            const docRef = doc(db, 'service_items', selectedServiceCategory, 'sub_services', itemId);
            await deleteDoc(docRef);
            toast.success("Service item deleted");
            fetchServiceItems(selectedServiceCategory);
        } catch (error) {
            console.error('Error deleting service:', error);
            toast.error("Failed to delete item");
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('admin_session');
        toast.success("Logged out successfully", { duration: 2000 });
        router.push('/admin/login');
    };

    const deleteItem = async (col, id) => {
        if (!window.confirm('Delete this permanently?')) return;
        try {
            await deleteDoc(doc(db, col, id));
            toast.success("Record deleted permanently", { duration: 2000 });
        } catch (error) {
            console.error('Delete error:', error);
            toast.error("Failed to delete record", { duration: 2000 });
        }
    };

    const updateStatus = async (col, id, status) => {
        try {
            await updateDoc(doc(db, col, id), { status });
            toast.success(`Status updated to ${status}`, { duration: 2000 });
        } catch (error) {
            console.error('Update error:', error);
            toast.error("Failed to update status", { duration: 2000 });
        }
    };

    // Filtered leads
    const filteredLeads = leads.filter(lead => {
        const leadDate = lead.visit_date; // Assuming YYYY-MM-DD
        const dateMatch = (!fromDate || leadDate >= fromDate) && 
                         (!toDate || leadDate <= toDate);
        const applianceMatch = filterAppliance === '' ||
            (lead.appliance || '').includes(filterAppliance);
        const locMatch = filterLeadLocation === '' ||
            (lead.address || '').toLowerCase().includes(filterLeadLocation.toLowerCase());
        return dateMatch && applianceMatch && locMatch;
    });

    const totalLeadsPages = Math.max(1, Math.ceil(filteredLeads.length / PAGE_SIZE));
    const paginatedLeads = filteredLeads.slice((leadsPage - 1) * PAGE_SIZE, leadsPage * PAGE_SIZE);

    // Filtered partners
    const filteredPartners = partners.filter(p => {
        const nameMatch = filterName === '' ||
            (p.name || '').toLowerCase().includes(filterName.toLowerCase());
        const specialtyMatch = filterSpecialty === '' ||
            (p.specialization || '').includes(filterSpecialty);
        const locationMatch = filterLocation === '' ||
            (p.location || '').toLowerCase().includes(filterLocation.toLowerCase());
        const statusMatch = filterStatus === '' ||
            (p.status || 'Applied') === filterStatus;
        return nameMatch && specialtyMatch && locationMatch && statusMatch;
    });

    const totalPartnersPages = Math.max(1, Math.ceil(filteredPartners.length / PAGE_SIZE));
    const paginatedPartners = filteredPartners.slice((partnersPage - 1) * PAGE_SIZE, partnersPage * PAGE_SIZE);

    // Filtered bookings
    const totalBookingsPages = Math.max(1, Math.ceil(bookings.length / PAGE_SIZE));
    const paginatedBookings = bookings.slice((bookingsPage - 1) * PAGE_SIZE, bookingsPage * PAGE_SIZE);



    if (!isLoggedIn) {
        return <div className="d-flex justify-content-center align-items-center vh-100"><div className="spinner-border text-orange" role="status"></div></div>;
    }

    return (
        <div className="admin-layout">
            <AdminSidebar 
                activeTab={activeTab} 
                onTabChange={handleTabChange} 
                onLogout={handleLogout} 
                isOpen={sidebarOpen} 
                onClose={() => setSidebarOpen(false)} 
            />

            <main className="admin-content">
                <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

                {/* Dashboard Header */}
                <div className="dashboard-hero-banner mb-4 animate-fade-in d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
                    <div className="hero-text-content">
                        <h1 className="fw-extrabold text-dark-blue display-6 mb-2 tracking-tight">
                            {activeTab === 'leads' ? 'Service Leads' : 
                             activeTab === 'bookings' ? 'Cart Orders' : 
                             activeTab === 'partners' ? 'Partner Network' : 'Service Management'}
                            <span className="text-orange ms-2">Hub</span>
                        </h1>
                        <p className="text-muted fs-5 mb-0 d-flex align-items-center gap-2">
                             Welcome back, <span className="fw-bold text-dark border-bottom border-warning border-2 pb-1">Super Admin</span>
                             <span className="opacity-50">|</span>
                             <span className="small opacity-75 fw-medium">Network is buzzing with activity!</span>
                        </p>
                    </div>
                    <div className="d-flex align-items-center gap-3 bg-white p-3 rounded-4 shadow-sm border border-white-50 premium-hover">
                        <div className="text-end d-none d-md-block">
                            <div className="fw-extrabold text-dark-blue fs-6">Operations Center</div>
                            <div className="small text-success fw-bold d-flex align-items-center justify-content-end gap-2 mt-1">
                                <span className="d-flex h-2 w-2 position-relative">
                                  <span className="animate-ping position-absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                                  <span className="position-relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                                </span>
                                System Live
                            </div>
                        </div>
                        <div className="profile-img-wrapper position-relative">
                            <img src="/images/worker_icon.png" width="52" height="52" className="rounded-circle shadow-md border-2 border-white p-1" alt="admin" />
                            <div className="position-absolute bottom-0 end-0 bg-success border border-white border-2 rounded-circle" style={{width: 14, height: 14}}></div>
                        </div>
                    </div>
                </div>

                {/* Stat Cards Grid - Hidden for Services and optionally Cart tabs for a cleaner look */}
                {(activeTab !== 'services' && activeTab !== 'bookings') && (
                    <div className="stat-cards-grid animate-slide-up mb-4">
                        {activeTab === 'leads' ? (
                            <>
                                <div className="stat-card">
                                    <div className="stat-icon orange">
                                        <img src="/images/lightning_bolt_icon.png" alt="bolt" width="36" height="36" />
                                    </div>
                                    <div className="stat-info">
                                        <h4>Total Service Leads</h4>
                                        <h2>{leads.length}</h2>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon blue">
                                        <img src="/images/clock_icon.png" alt="pending" width="36" height="36" />
                                    </div>
                                    <div className="stat-info">
                                        <h4>Pending Leads</h4>
                                        <h2>{leads.filter(l => !l.status || l.status === 'Pending').length}</h2>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon green">
                                        <img src="/images/ok_icon.png" alt="completed" width="36" height="36" />
                                    </div>
                                    <div className="stat-info">
                                        <h4>Completed Jobs</h4>
                                        <h2>{leads.filter(l => l.status === 'Completed').length}</h2>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="stat-card">
                                    <div className="stat-icon blue">
                                        <img src="/images/group_icon.png" alt="partners" width="40" height="40" />
                                    </div>
                                    <div className="stat-info">
                                        <h4>TOTAL PARTNERS</h4>
                                        <h2>{partners.length}</h2>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon orange">
                                        <img src="/images/clock_icon.png" alt="pending" width="40" height="40" />
                                    </div>
                                    <div className="stat-info">
                                        <h4>PENDING APPROVAL</h4>
                                        <h2>{partners.filter(a => a.status === 'Applied').length}</h2>
                                    </div>
                                </div>
                                <div className="stat-card text-success">
                                    <div className="stat-icon green">
                                        <img src="/images/ok_icon.png" alt="verified" width="40" height="40" />
                                    </div>
                                    <div className="stat-info">
                                        <h4>VERIFIED EXPERTS</h4>
                                        <h2>{partners.filter(a => a.isVerified).length}</h2>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}

                <div className="table-card admin-dashboard" style={{ display: activeTab === 'services' ? 'none' : 'block' }}>
                    <div className="table-header">
                        <h3>{activeTab === 'leads' ? 'Recent Service Leads' : activeTab === 'bookings' ? 'Cart Orders' : 'Service Expert Network'}</h3>
                        <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-light text-dark px-3 py-2 border" style={{borderRadius: 8}}>
                                {activeTab === 'leads' ? filteredLeads.length : activeTab === 'bookings' ? bookings.length : filteredPartners.length} Records
                            </span>
                            <span className="badge border px-3 py-2" style={{borderRadius: 8, background: 'linear-gradient(135deg,#FF512F,#F09819)', color: '#fff', fontSize: 12}}>
                                Page {activeTab === 'leads' ? leadsPage : activeTab === 'bookings' ? bookingsPage : partnersPage} / {activeTab === 'leads' ? totalLeadsPages : activeTab === 'bookings' ? totalBookingsPages : totalPartnersPages}
                            </span>
                        </div>
                    </div>

                    {/* Service Leads Filters */}
                    {activeTab === 'leads' && (
                        <div className="admin-filter-bar">
                            <div className="filter-item date-range">
                                <label>📅 Date Range</label>
                                <div className="d-flex gap-2">
                                    <input
                                        type="date"
                                        value={fromDate}
                                        onChange={e => { setFromDate(e.target.value); setLeadsPage(1); }}
                                        className="filter-input"
                                        title="From"
                                    />
                                    <input
                                        type="date"
                                        value={toDate}
                                        onChange={e => { setToDate(e.target.value); setLeadsPage(1); }}
                                        className="filter-input"
                                        title="To"
                                    />
                                </div>
                            </div>
                            <div className="filter-item">
                                <label>🔧 Appliance</label>
                                <select 
                                    className="filter-input"
                                    value={filterAppliance}
                                    onChange={e => { setFilterAppliance(e.target.value); setLeadsPage(1); }}
                                >
                                    <option value="">All Appliances</option>
                                    {applianceOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
                            </div>
                            <div className="filter-item">
                                <label>📍 Location</label>
                                <input
                                    type="text"
                                    list="hyderabad-areas-leads"
                                    placeholder="e.g. Hyderabad..."
                                    value={filterLeadLocation}
                                    onChange={e => { setFilterLeadLocation(e.target.value); setLeadsPage(1); }}
                                    className="filter-input"
                                    autoComplete="off"
                                />
                                <datalist id="hyderabad-areas-leads">
                                    {hyderabadAreas.map(area => <option key={area} value={area} />)}
                                </datalist>
                            </div>
                            {(fromDate || toDate || filterAppliance || filterLeadLocation) && (
                                <button className="filter-clear-btn" onClick={() => { setFromDate(''); setToDate(''); setFilterAppliance(''); setFilterLeadLocation(''); setLeadsPage(1); }}>
                                    ✕ Clear
                                </button>
                            )}
                        </div>
                    )}

                    {/* Partner Network Filters */}
                    {activeTab === 'partners' && (
                        <div className="admin-filter-bar">
                            <div className="filter-item">
                                <label>👤 Expert Name</label>
                                <input
                                    type="text"
                                    placeholder="Search name..."
                                    value={filterName}
                                    onChange={e => { setFilterName(e.target.value); setPartnersPage(1); }}
                                    className="filter-input"
                                />
                            </div>
                            <div className="filter-item">
                                <label>🎯 Category</label>
                                <select 
                                    className="filter-input"
                                    value={filterSpecialty}
                                    onChange={e => { setFilterSpecialty(e.target.value); setPartnersPage(1); }}
                                >
                                    <option value="">All Categories</option>
                                    <option value="Washing Machine">Washing Machine</option>
                                    <option value="Fridge">Fridge</option>
                                    <option value="AC">AC</option>
                                    <option value="TV">TV</option>
                                    <option value="Electrical">Electrical</option>
                                    <option value="Water Purifier">Water Purifier</option>
                                </select>
                            </div>
                            <div className="filter-item">
                                <label>📍 Home Area</label>
                                <input
                                    type="text"
                                    list="hyderabad-areas-apps"
                                    placeholder="Search location..."
                                    value={filterLocation}
                                    onChange={e => { setFilterLocation(e.target.value); setPartnersPage(1); }}
                                    className="filter-input"
                                    autoComplete="off"
                                />
                                <datalist id="hyderabad-areas-apps">
                                    {hyderabadAreas.map(area => <option key={area} value={area} />)}
                                </datalist>
                            </div>
                            <div className="filter-item">
                                <label>⚡ Work Status</label>
                                <select
                                    value={filterStatus}
                                    onChange={e => { setFilterStatus(e.target.value); setPartnersPage(1); }}
                                    className="filter-input"
                                >
                                    <option value="">All Status</option>
                                    <option value="Applied">Applied</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>
                            {(filterName || filterSpecialty || filterLocation || filterStatus) && (
                                <button className="filter-clear-btn" onClick={() => { setFilterName(''); setFilterSpecialty(''); setFilterLocation(''); setFilterStatus(''); setPartnersPage(1); }}>
                                    ✕ Clear
                                </button>
                            )}
                        </div>
                    )}

                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            {activeTab === 'leads' ? (
                                <>
                                    <thead className="bg-light-blue fw-bold text-dark">
                                        <tr>
                                            <th className="py-3 px-4">Visit Schedule</th>
                                            <th className="py-3 px-4">Customer Info</th>
                                            <th className="py-3 px-4">Service Type</th>
                                            <th className="py-3 px-4">Problem Context</th>
                                            <th className="py-3 px-4">Service Area</th>
                                            <th className="py-3 px-4 text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedLeads.map((lead) => (
                                            <tr key={lead.id} className="animate-fade-in">
                                                <td className="py-3 px-4">
                                                    <div className="fw-bold text-dark-blue fs-6">{lead.visit_date}</div>
                                                    <div className="text-muted small d-flex align-items-center gap-1">
                                                        <img src="/images/clock_icon.png" width="14" alt="time" />
                                                        {lead.visit_time}
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <div className="fw-bold text-dark mb-1">{lead.name}</div>
                                                    <div className="text-orange small fw-bold mb-2">{lead.phone}</div>
                                                    <span className={`badge-status shadow-sm border ${lead.status === 'Completed' ? 'bg-success text-white border-success' : lead.status === 'Cancelled' ? 'bg-danger text-white border-danger' : 'bg-warning text-dark border-warning'}`}>
                                                        {lead.status || 'Pending'}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <div className="fw-bold text-primary">{lead.appliance}</div>
                                                    <div className="badge bg-soft-primary text-primary mt-1 border border-primary-subtle rounded-pill px-2">{lead.source || 'Website Lead'}</div>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <div className="small text-muted line-clamp-2" style={{maxWidth: '220px'}} title={lead.problem_description}>
                                                        {lead.problem_description}
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <div className="small text-muted font-inter">
                                                        <div className="fw-bold text-dark mb-1">{lead.area || 'Hyderabad'}</div>
                                                        <div className="text-nowrap">{lead.address}</div>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4 text-center">
                                                    <div className="d-flex gap-2 justify-content-center">
                                                        <button className="btn-icon-admin edit shadow-sm" onClick={() => updateStatus('service_leads', lead.id, 'Completed')} title="Mark Completed"><img src="/images/ok_icon.png" alt="check" width="18" height="18" /></button>
                                                        <button className="btn-icon-admin delete shadow-sm" onClick={() => deleteItem('service_leads', lead.id)} title="Delete Lead"><img src="/images/trash_icon.png" alt="trash" width="18" height="18" /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </>
                            ) : activeTab === 'bookings' ? (
                                <>
                                    <thead className="bg-light-blue fw-bold text-dark">
                                        <tr>
                                            <th className="py-3 px-4">Booking Date</th>
                                            <th className="py-3 px-4">Customer &amp; Status</th>
                                            <th className="py-3 px-4">Repair Selection</th>
                                            <th className="py-3 px-4">Work Location</th>
                                            <th className="py-3 px-4 text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedBookings.map((b) => (
                                            <tr key={b.id} className="animate-fade-in">
                                                <td className="py-3 px-4">
                                                    <div className="fw-bold text-dark-blue mb-1">
                                                        {b.createdAt?.toDate ? b.createdAt.toDate().toLocaleDateString('en-IN', {day: '2-digit', month: 'short'}) : 'Date N/A'}
                                                    </div>
                                                    <div className="text-muted small">
                                                        {b.createdAt?.toDate ? b.createdAt.toDate().toLocaleTimeString('en-IN', {hour: '2-digit', minute: '2-digit', hour12: true}) : 'Time N/A'}
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <div className="fw-bold text-dark mb-1">{b.customerName}</div>
                                                    <div className="text-orange small fw-extrabold mb-1">{b.phone}</div>
                                                    {b.selectedSlot && (
                                                        <div className="mb-2 p-1 px-2 bg-soft-primary rounded border border-primary-subtle d-inline-block small text-primary fw-bold">
                                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="me-1"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> {b.selectedSlot.date} | <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="me-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> {b.selectedSlot.time}
                                                        </div>
                                                    )}
                                                    <div>
                                                        <span className={`badge-status shadow-sm border ${b.status === 'Completed' ? 'bg-success text-white border-success' : b.status === 'Cancelled' ? 'bg-danger text-white border-danger' : 'bg-warning text-dark border-warning'}`}>
                                                            {b.status || 'Order Placed'}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <div className="booking-items-list mb-2">
                                                        {b.items && b.items.map((item, idx) => (
                                                            <div key={idx} className="small text-dark mb-1 d-flex align-items-center justify-content-between gap-3 border-bottom border-light pb-1">
                                                                <span className="fw-bold text-primary">{item.name}</span>
                                                                <span className="badge bg-light text-dark border rounded-pill small">₹{item.price} x {item.quantity}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    {b.tipAmount > 0 && (
                                                        <div className="text-success small fw-bold d-flex justify-content-between align-items-center mt-1 px-2 border-bottom border-light pb-1">
                                                            <span>Tip Included:</span>
                                                            <span>₹{b.tipAmount}</span>
                                                        </div>
                                                    )}
                                                    <div className="fw-extrabold text-dark-blue d-flex justify-content-between align-items-center mt-2 p-2 bg-light-soft rounded-3">
                                                        <span>Grand Total:</span>
                                                        <span className="text-orange fs-5">₹{b.totalPrice}</span>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <div className="small text-muted">
                                                        <div className="mb-2 d-flex align-items-center gap-2 text-dark">
                                                            <img src="/images/map_marker_icon.png" width="18" alt="loc" className="opacity-75" />
                                                            <span className="fw-bold fs-6">{b.location}</span>
                                                        </div>
                                                        <div style={{maxWidth: '220px'}} className="line-clamp-3">{b.address}</div>
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4 text-center">
                                                    <div className="d-flex gap-2 justify-content-center">
                                                        <button className="btn-icon-admin success shadow-sm" onClick={() => updateStatus('bookings', b.id, 'Completed')} title="Mark Completed"><img src="/images/ok_icon.png" alt="check" width="20" height="20" /></button>
                                                        <button className="btn-icon-admin delete shadow-sm" onClick={() => updateStatus('bookings', b.id, 'Cancelled')} title="Cancel Order"><img src="/images/img_icons8_com_3d_fluency_94_cancel_png.png" alt="cancel" width="20" height="20" /></button>
                                                        <button className="btn-icon-admin shadow-sm" onClick={() => deleteItem('bookings', b.id)} title="Delete Record"><img src="/images/trash_icon.png" alt="trash" width="20" height="20" /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </>
                            ) : (
                                <>
                                    <thead className="bg-light-blue fw-bold text-dark">
                                        <tr>
                                            <th className="py-3 px-4">Applied Date</th>
                                            <th className="py-3 px-4">Expert Profile</th>
                                            <th className="py-3 px-4">Technical Details</th>
                                            <th className="py-3 px-4">Payment &amp; Loc</th>
                                            <th className="py-3 px-4 text-center">Admin Controls</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedPartners.map((p) => (
                                            <tr key={p.id} className="animate-fade-in">
                                                <td className="py-3 px-4">
                                                    <div className="text-muted small fw-bold mb-1">{p.date}</div>
                                                    {p.isVerified ? 
                                                        <span className="badge bg-soft-success text-success border border-success-subtle rounded-pill small px-2">Verified Expert</span> : 
                                                        <span className="badge bg-soft-warning text-warning border border-warning-subtle rounded-pill small px-2">Pending Verify</span>
                                                    }
                                                </td>
                                                <td className="py-3 px-4">
                                                    <div className="fw-bold text-dark mb-1 d-flex align-items-center gap-2">
                                                        {p.name}
                                                        {p.isVerified && <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-primary"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>}
                                                    </div>
                                                    <div className="text-orange small fw-bold d-flex align-items-center gap-2">
                                                        {p.phone}
                                                        {p.whatsapp && <a href={`https://wa.me/91${p.whatsapp}`} target="_blank" className="text-success"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.847 1.606 5.62l-.993 3.635 3.791-.994-1.35 1.041zm11.057-7.477c-.313-.156-1.853-.915-2.14-.1.021-.286-.141-.43-.162-.482-.046-.117-.183-.248-.454-.313-.156-.217-.655-.156-.915-.286-.021-.033-.124-.132-.231-.24-.448-.454-.515-.558-.871-1.03-.518-.686-.689-.81-.979-1.22-.29-.41-.03-.701.071-.851.101-.15.228-.35.342-.48.113-.13.15-.224.227-.374.077-.15.038-.281-.019-.393-.057-.113-.513-1.236-.704-1.697-.186-.446-.363-.385-.513-.392-.132-.007-.284-.009-.437-.009-.153 0-.401.057-.611.286-.21.229-.801.782-.801 1.905 0 1.124.815 2.208.929 2.361.114.153 1.605 2.45 3.886 3.432.543.234.966.374 1.296.479.544.173 1.04.149 1.431.09.435-.066 1.341-.548 1.531-1.077.19-.529.19-.982.132-1.077-.059-.095-.213-.151-.527-.308z"/></svg></a>}
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <div className="fw-bold text-primary">{p.specialization}</div>
                                                    <div className="text-muted small">
                                                       {p.experience} Exp | ★ {p.rating || '5.0'}
                                                    </div>
                                                </td>
                                                <td className="py-3 px-4">
                                                    <div className="fw-bold text-dark-blue small mb-1">{p.location}</div>
                                                    <div className="text-muted small line-clamp-1" style={{maxWidth: '120px'}} title={p.upi}>UPI: {p.upi || 'N/A'}</div>
                                                </td>
                                                <td className="py-3 px-4 text-center">
                                                    <div className="d-flex gap-2 justify-content-center">
                                                        <button 
                                                            className="btn-icon-admin edit shadow-sm d-flex align-items-center justify-content-center" 
                                                            onClick={() => { setSelectedPartner(p); setIsPartnerModalOpen(true); }} 
                                                            title="View Full Details"
                                                        >
                                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                                                        </button>
                                                        {!p.isVerified && (
                                                            <button className="btn-icon-admin success shadow-sm" onClick={() => updateDoc(doc(db, 'partners', p.id), { isVerified: true, status: 'Approved' })} title="Verify & Approve"><img src="/images/ok_icon.png" alt="check" width="18" height="18" /></button>
                                                        )}
                                                        <button className="btn-icon-admin delete shadow-sm" onClick={() => updateStatus('partners', p.id, 'Rejected')} title="Reject Partner"><img src="/images/img_icons8_com_3d_fluency_94_cancel_png.png" alt="cancel" width="18" height="18" /></button>
                                                        <button className="btn-icon-admin shadow-sm" onClick={() => deleteItem('partners', p.id)} title="Delete Record Permanently"><img src="/images/trash_icon.png" alt="trash" width="18" height="18" /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </>
                            )}
                        </table>

                        {((activeTab === 'partners' && filteredPartners.length === 0) || (activeTab === 'leads' && filteredLeads.length === 0) || (activeTab === 'bookings' && bookings.length === 0)) && (
                            <div className="text-center py-5">
                                <img src="/images/img_icons8_com_3d_fluency_94_empty_box_png.png" alt="empty" style={{width: 48, height: 48, opacity: 0.7}} className="mb-3" />
                                <p className="text-muted m-0 fw-bold">No records found here.</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    {activeTab === 'leads' && (
                        <Pagination
                            currentPage={leadsPage}
                            totalPages={totalLeadsPages}
                            onPageChange={setLeadsPage}
                        />
                    )}
                    {activeTab === 'bookings' && (
                        <Pagination
                            currentPage={bookingsPage}
                            totalPages={totalBookingsPages}
                            onPageChange={setBookingsPage}
                        />
                    )}
                    {activeTab === 'partners' && (
                        <Pagination
                            currentPage={partnersPage}
                            totalPages={totalPartnersPages}
                            onPageChange={setPartnersPage}
                        />
                    )}
                </div>

                {/* Service Management UI */}
                {activeTab === 'services' && (
                    <div className="services-container mt-4 animate-fade-in">
                        <div className="card shadow-md border-0 p-4 rounded-3 overflow-hidden position-relative">
                            <div className="card-header-gradient p-4 m-n4 mb-4 d-flex justify-content-between align-items-center bg-dark text-white shadow-lg border-bottom border-warning">
                                <div className="d-flex align-items-center gap-3">
                                    <div className="bg-orange p-2 rounded-3 shadow-sm">
                                        <img src="/images/gear_icon.svg" width="32" height="32" alt="gear" />
                                    </div>
                                    <div>
                                        <h4 className="fw-extrabold mb-0 text-white tracking-tight">Dynamic Service Management</h4>
                                        <p className="small mb-0 opacity-75 fw-medium">Control rates, descriptions and repair items in real-time.</p>
                                    </div>
                                </div>
                                <div className="d-flex gap-3">
                                    <button 
                                        className="btn btn-glass-dark btn-sm d-flex align-items-center gap-2 border-1 fw-bold px-3 py-2 text-white"
                                        onClick={handleSeedData}
                                        title="Import services from local config"
                                        disabled={loading}
                                    >
                                        <img src="/images/gas_stove_icon.png" width="22" height="22" alt="sync" />
                                        <span>Sync Config</span>
                                    </button>
                                    <button 
                                        className="btn btn-warning btn-sm d-flex align-items-center gap-2 border-0 fw-bold px-3 py-2 shadow-sm text-dark hover-scale"
                                        onClick={() => {
                                            setEditingServiceItem(null);
                                            setNewServiceItem({ name: '', price: '', desc: '' });
                                            setServiceModalOpen(true);
                                        }}
                                        disabled={!selectedServiceCategory}
                                    >
                                        <img src="/images/ok_icon.png" width="22" height="22" alt="add" />
                                        <span>New Service</span>
                                    </button>
                                </div>
                            </div>

                            <div className="category-selection-area mb-5">
                                <label className="form-label fw-bold text-dark-blue mb-3 fs-5">Select Service Category</label>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="input-group input-group-lg shadow-sm rounded-3 overflow-hidden">
                                            <span className="input-group-text bg-white border-end-0">
                                                <img src="/images/search_icon.png" width="20" alt="search" />
                                            </span>
                                            <select 
                                                className="form-select border-start-0" 
                                                value={selectedServiceCategory}
                                                onChange={(e) => {
                                                    const slug = e.target.value;
                                                    setSelectedServiceCategory(slug);
                                                    fetchServiceItems(slug);
                                                }}
                                            >
                                                <option value="">-- Select a Category --</option>
                                                {serviceCategories.map(cat => (
                                                    <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-center">
                                        {selectedServiceCategory && (
                                            <div className="badge bg-soft-primary text-primary px-3 py-2 fs-6 rounded-pill border border-primary">
                                                Active: <span className="fw-bold">{serviceCategories.find(c => c.slug === selectedServiceCategory)?.name}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {!selectedServiceCategory ? (
                                <div className="text-center py-6 bg-light-soft rounded-3 border-2 border-dashed border-primary-subtle">
                                    <div className="mb-4">
                                        <img src="/images/gear_icon.svg" width="100" alt="select-category" className="opacity-75 floating-anim" />
                                    </div>
                                    <h5 className="fw-bold text-dark">Get Started by Selecting a Category</h5>
                                    <p className="text-muted mx-auto" style={{maxWidth: '400px'}}>Select a service from the dropdown above to manage its specific repair items, pricing, and descriptions.</p>
                                </div>
                            ) : (
                                <div className="table-responsive service-table-wrapper rounded-3 shadow-sm border">
                                    <table className="table table-hover align-middle mb-0">
                                        <thead className="bg-light-blue text-dark fw-bold">
                                            <tr>
                                                <th className="py-3 px-4">Service Details</th>
                                                <th className="py-3 px-4 text-center">Unit Price</th>
                                                <th className="py-3 px-4 text-center">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {loading ? (
                                                <tr>
                                                    <td colSpan="3" className="text-center py-5">
                                                        <div className="spinner-border text-primary" role="status"></div>
                                                        <p className="mt-2 text-muted">Fetching items...</p>
                                                    </td>
                                                </tr>
                                            ) : serviceItems.length === 0 ? (
                                                <tr>
                                                    <td colSpan="3" className="text-center py-5 text-muted">
                                                        <img src="/images/img_icons8_com_3d_fluency_94_empty_box_png.png" width="60" alt="empty" className="mb-3 opacity-50" />
                                                        <p className="fs-5">No specific repair items found for this category.</p>
                                                        <button className="btn btn-primary btn-sm mt-2 px-4 shadow-sm" onClick={() => setServiceModalOpen(true)}>Add First Item</button>
                                                    </td>
                                                </tr>
                                            ) : (
                                                serviceItems.map((item) => (
                                                    <tr key={item.docId || item.id}>
                                                        <td className="py-3 px-4">
                                                            <div className="fw-bold text-dark fs-5 mb-1">{item.name}</div>
                                                            <div className="small text-muted line-clamp-2" style={{maxWidth: '450px'}} title={item.desc}>{item.desc}</div>
                                                        </td>
                                                        <td className="py-3 px-4 text-center">
                                                            <span className="price-pill-admin">₹{item.price}</span>
                                                        </td>
                                                        <td className="py-3 px-4 text-center">
                                                            <div className="d-flex gap-3 justify-content-center">
                                                                <button 
                                                                    className="btn-icon-admin edit" 
                                                                    onClick={() => {
                                                                        setEditingServiceItem(item);
                                                                        setNewServiceItem({ name: item.name, price: item.price, desc: item.desc });
                                                                        setServiceModalOpen(true);
                                                                    }}
                                                                >
                                                                    <img src="/images/gas_stove_icon.png" width="22" height="22" alt="edit" />
                                                                </button>
                                                                <button 
                                                                    className="btn-icon-admin delete"
                                                                    onClick={() => handleDeleteServiceItem(item.docId || item.id)}
                                                                >
                                                                    <img src="/images/trash_icon.png" width="22" height="22" alt="delete" />
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>

            {/* Service Modal */}
            {serviceModalOpen && (
                <div className="admin-modal-overlay d-flex align-items-center justify-content-center">
                    <div className="admin-modal-content premium-modal rounded-3 animate-slide-up bg-white shadow-2xl overflow-hidden border-0" style={{maxWidth: '550px', width: '90%'}}>
                        <div className="modal-header-gradient p-4 text-white d-flex justify-content-between align-items-center bg-dark">
                            <div>
                                <h4 className="fw-extrabold mb-0">{editingServiceItem ? 'Edit Service Details' : 'Add New Service Item'}</h4>
                                <p className="small mb-0 opacity-75">Update information for your rate card.</p>
                            </div>
                            <button className="btn-close btn-close-white opacity-100" onClick={() => setServiceModalOpen(false)}></button>
                        </div>
                        <div className="modal-body p-4 p-md-5">
                            <div className="form-floating mb-4">
                                <input 
                                    type="text" 
                                    className="form-control rounded-3 border-2" 
                                    id="serviceName"
                                    placeholder="Service Name"
                                    value={newServiceItem.name}
                                    onChange={e => setNewServiceItem({...newServiceItem, name: e.target.value})}
                                />
                                <label htmlFor="serviceName">Service Name (e.g. Filter Cleaning)</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input 
                                    type="number" 
                                    className="form-control rounded-3 border-2" 
                                    id="servicePrice"
                                    placeholder="Price"
                                    value={newServiceItem.price}
                                    onChange={e => setNewServiceItem({...newServiceItem, price: e.target.value})}
                                />
                                <label htmlFor="servicePrice">Price in ₹</label>
                            </div>
                            <div className="form-floating mb-4">
                                <textarea 
                                    className="form-control rounded-3 border-2" 
                                    id="serviceDesc"
                                    placeholder="Description"
                                    style={{ height: '120px' }}
                                    value={newServiceItem.desc}
                                    onChange={e => setNewServiceItem({...newServiceItem, desc: e.target.value})}
                                ></textarea>
                                <label htmlFor="serviceDesc">Service Description (What is included?)</label>
                            </div>
                        </div>
                        <div className="modal-footer p-4 bg-light d-flex gap-3">
                            <button className="btn btn-outline-secondary flex-grow-1 py-3 fw-bold rounded-4 border-2" onClick={() => setServiceModalOpen(false)}>Discard</button>
                            <button 
                                className="btn btn-primary flex-grow-1 py-3 fw-bold rounded-4 shadow-lg" 
                                onClick={handleSaveServiceItem}
                                disabled={isSavingService || !newServiceItem.name || !newServiceItem.price}
                            >
                                {isSavingService ? (
                                    <><span className="spinner-border spinner-border-sm me-2"></span>Processing...</>
                                ) : (
                                    editingServiceItem ? 'Update Service' : 'Confirm & Save'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
                {/* Partner Detail Modal */}
                {isPartnerModalOpen && selectedPartner && (
                    <div className="modal-overlay-admin" onClick={() => setIsPartnerModalOpen(false)}>
                        <div className="modal-content-admin p-0 rounded-4 overflow-hidden border-0 shadow-lg position-relative" onClick={e => e.stopPropagation()} style={{maxWidth: '650px'}}>
                            <div className="bg-dark p-5 text-white position-relative overflow-hidden">
                                <button className="btn-close btn-close-white position-absolute" style={{top: '25px', right: '25px', zIndex: 10}} onClick={() => setIsPartnerModalOpen(false)}></button>
                                <div className="d-flex align-items-center gap-4 position-relative z-2">
                                     <div className="p-3 bg-primary rounded-circle shadow-lg border border-white border-opacity-10 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                                     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                                 </div>
                                     <div>
                                         <h2 className="fw-black mb-1">{selectedPartner.name}</h2>
                                         <span className={`badge ${selectedPartner.isVerified ? 'bg-success' : 'bg-warning'} px-3 py-2 rounded-pill shadow-sm`}>
                                             {selectedPartner.isVerified ? 'VERIFIED EXPERT' : 'PENDING REVIEW'}
                                         </span>
                                     </div>
                                </div>
                                 <div className="position-absolute end-0 top-0 opacity-10 pe-5 pt-4 text-white">
                                     <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                 </div>
                            </div>
                            <div className="p-5 bg-white">
                                <div className="row g-4 mb-5">
                                    <div className="col-md-6">
                                        <div className="p-3 border rounded-4 bg-light bg-opacity-50 h-100">
                                            <div className="text-muted small fw-bold mb-1 opacity-75 d-flex align-items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> CONTACT</div>
                                            <div className="fw-extrabold text-dark fs-5">{selectedPartner.phone}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 border rounded-4 bg-light bg-opacity-50 h-100">
                                            <div className="text-muted small fw-bold mb-1 opacity-75 d-flex align-items-center gap-1"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.847 1.606 5.62l-.993 3.635 3.791-.994-1.35 1.041zm11.057-7.477c-.313-.156-1.853-.915-2.14-.1.021-.286-.141-.43-.162-.482-.046-.117-.183-.248-.454-.313-.156-.217-.655-.156-.915-.286-.021-.033-.124-.132-.231-.24-.448-.454-.515-.558-.871-1.03-.518-.686-.689-.81-.979-1.22-.29-.41-.03-.701.071-.851.101-.15.228-.35.342-.48.113-.13.15-.224.227-.374.077-.15.038-.281-.019-.393-.057-.113-.513-1.236-.704-1.697-.186-.446-.363-.385-.513-.392-.132-.007-.284-.009-.437-.009-.153 0-.401.057-.611.286-.21.229-.801.782-.801 1.905 0 1.124.815 2.208.929 2.361.114.153 1.605 2.45 3.886 3.432.543.234.966.374 1.296.479.544.173 1.04.149 1.431.09.435-.066 1.341-.548 1.531-1.077.19-.529.19-.982.132-1.077-.059-.095-.213-.151-.527-.308z"/></svg> WHATSAPP</div>
                                            <div className="fw-extrabold text-success fs-5">{selectedPartner.whatsapp || 'N/A'}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 border rounded-4 bg-light bg-opacity-50 h-100">
                                            <div className="text-muted small fw-bold mb-1 opacity-75 d-flex align-items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> SPECIALTY</div>
                                            <div className="fw-extrabold text-primary fs-5">{selectedPartner.specialization}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 border rounded-4 bg-light bg-opacity-50 h-100">
                                            <div className="text-muted small fw-bold mb-1 opacity-75 d-flex align-items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="12" r="3"/></svg> LOCATION</div>
                                            <div className="fw-extrabold text-dark-blue fs-5">{selectedPartner.location}</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 border rounded-4 bg-light bg-opacity-50 h-100">
                                            <div className="text-muted small fw-bold mb-1 opacity-75 d-flex align-items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> RATING</div>
                                            <div className="fw-extrabold text-warning fs-5">★ {selectedPartner.rating || '5.0'} / 5.0</div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="p-3 border rounded-4 bg-light bg-opacity-50 h-100">
                                            <div className="text-muted small fw-bold mb-1 opacity-75 d-flex align-items-center gap-1"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M7 15h0M2 9.5h20"/></svg> PAYMENT UPI</div>
                                            <div className="fw-extrabold text-dark fs-5 truncate">{selectedPartner.upi || 'Not Set'}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex gap-3">
                                   {!selectedPartner.isVerified && (
                                       <button className="btn btn-success flex-grow-1 py-3 fw-bold rounded-3 shadow-md border-0" onClick={() => { updateDoc(doc(db, 'partners', selectedPartner.id), { isVerified: true, status: 'Approved' }); setIsPartnerModalOpen(false); }}>VERIFY & APPROVE</button>
                                   )}
                                   <button className="btn btn-outline-danger py-3 fw-bold px-4 rounded-3" onClick={() => { deleteItem('partners', selectedPartner.id); setIsPartnerModalOpen(false); }}>DELETE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

export default AdminPage;
