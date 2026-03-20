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
    const [applications, setApplications] = useState([]);
    const [activeTab, setActiveTab] = useState('leads');
    const [leads, setLeads] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // Pagination state
    const [leadsPage, setLeadsPage] = useState(1);
    const [appsPage, setAppsPage] = useState(1);
    const [bookingsPage, setBookingsPage] = useState(1);

    // Career Applications filters
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

    const serviceCategories = dbCategories.length > 0 ? dbCategories : Object.keys(SERVICE_DATA_MAP).map(catName => ({
        name: catName,
        slug: catName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        icon: SERVICE_DATA_MAP[catName].icon
    }));

    const specialtyOptions = [
        "Washing Machine", "Fridge", "AC", "TV", "Electrical", "Other"
    ];

    useEffect(() => {
        // Real-time Applications
        const qApp = query(collection(db, 'job_applications'), orderBy('createdAt', 'desc'));
        const unsubscribeApp = onSnapshot(qApp, (snapshot) => {
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setApplications(data);
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

        return () => { unsubscribeApp(); unsubscribeLeads(); unsubscribeBookings(); unsubscribeCats(); };
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
            setAppsPage(1);
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

    // Filtered applications
    const filteredApps = applications.filter(app => {
        const nameMatch = filterName === '' ||
            (app.name || '').toLowerCase().includes(filterName.toLowerCase());
        const specialtyMatch = filterSpecialty === '' ||
            (app.specialization || '').includes(filterSpecialty);
        const locationMatch = filterLocation === '' ||
            (app.location || '').toLowerCase().includes(filterLocation.toLowerCase());
        const statusMatch = filterStatus === '' ||
            (app.status || 'Pending') === filterStatus;
        return nameMatch && specialtyMatch && locationMatch && statusMatch;
    });

    const totalAppsPages = Math.max(1, Math.ceil(filteredApps.length / PAGE_SIZE));
    const paginatedApps = filteredApps.slice((appsPage - 1) * PAGE_SIZE, appsPage * PAGE_SIZE);

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
                             activeTab === 'applications' ? 'Career Applications' : 'Service Management'}
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
                                        <img src="/images/group_icon.png" alt="applicants" width="40" height="40" />
                                    </div>
                                    <div className="stat-info">
                                        <h4>TOTAL APPLICANTS</h4>
                                        <h2>{applications.length}</h2>
                                    </div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-icon orange">
                                        <img src="/images/clock_icon.png" alt="pending" width="40" height="40" />
                                    </div>
                                    <div className="stat-info">
                                        <h4>PENDING REVIEWS</h4>
                                        <h2>{applications.filter(a => !a.status || a.status === 'Pending').length}</h2>
                                    </div>
                                </div>
                                <div className="stat-card text-success">
                                    <div className="stat-icon green">
                                        <img src="/images/ok_icon.png" alt="hired" width="40" height="40" />
                                    </div>
                                    <div className="stat-info">
                                        <h4>HIRED EXPERTS</h4>
                                        <h2>{applications.filter(a => a.status === 'Hired').length}</h2>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}

                <div className="table-card admin-dashboard" style={{ display: activeTab === 'services' ? 'none' : 'block' }}>
                    <div className="table-header">
                        <h3>{activeTab === 'leads' ? 'Recent Service Leads' : activeTab === 'bookings' ? 'Cart Orders' : 'Career Applications'}</h3>
                        <div className="d-flex align-items-center gap-2">
                            <span className="badge bg-light text-dark px-3 py-2 border" style={{borderRadius: 8}}>
                                {activeTab === 'leads' ? filteredLeads.length : activeTab === 'bookings' ? bookings.length : filteredApps.length} Records
                            </span>
                            <span className="badge border px-3 py-2" style={{borderRadius: 8, background: 'linear-gradient(135deg,#FF512F,#F09819)', color: '#fff', fontSize: 12}}>
                                Page {activeTab === 'leads' ? leadsPage : activeTab === 'bookings' ? bookingsPage : appsPage} / {activeTab === 'leads' ? totalLeadsPages : activeTab === 'bookings' ? totalBookingsPages : totalAppsPages}
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

                    {/* Career Applications Filters */}
                    {activeTab === 'applications' && (
                        <div className="admin-filter-bar">
                            <div className="filter-item">
                                <label>👤 Name</label>
                                <input
                                    type="text"
                                    placeholder="Search name..."
                                    value={filterName}
                                    onChange={e => { setFilterName(e.target.value); setAppsPage(1); }}
                                    className="filter-input"
                                />
                            </div>
                            <div className="filter-item">
                                <label>🎯 Specialty</label>
                                <select 
                                    className="filter-input"
                                    value={filterSpecialty}
                                    onChange={e => { setFilterSpecialty(e.target.value); setAppsPage(1); }}
                                >
                                    <option value="">All Specialty</option>
                                    {specialtyOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                </select>
                            </div>
                            <div className="filter-item">
                                <label>📍 Location</label>
                                <input
                                    type="text"
                                    list="hyderabad-areas-apps"
                                    placeholder="Search location..."
                                    value={filterLocation}
                                    onChange={e => { setFilterLocation(e.target.value); setAppsPage(1); }}
                                    className="filter-input"
                                    autoComplete="off"
                                />
                                <datalist id="hyderabad-areas-apps">
                                    {hyderabadAreas.map(area => <option key={area} value={area} />)}
                                </datalist>
                            </div>
                            <div className="filter-item">
                                <label>⚡ Status</label>
                                <select
                                    value={filterStatus}
                                    onChange={e => { setFilterStatus(e.target.value); setAppsPage(1); }}
                                    className="filter-input"
                                >
                                    <option value="">All Status</option>
                                    <option value="Pending">Pending</option>
                                    <option value="Hired">Hired</option>
                                    <option value="Rejected">Rejected</option>
                                </select>
                            </div>
                            {(filterName || filterSpecialty || filterLocation || filterStatus) && (
                                <button className="filter-clear-btn" onClick={() => { setFilterName(''); setFilterSpecialty(''); setFilterLocation(''); setFilterStatus(''); setAppsPage(1); }}>
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
                                                            <i className="far fa-calendar-alt me-1"></i> {b.selectedSlot.date} | <i className="far fa-clock me-1"></i> {b.selectedSlot.time}
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
                                            <th className="py-3 px-4">Applicant Profile</th>
                                            <th className="py-3 px-4">Contact Info</th>
                                            <th className="py-3 px-4">Specialization</th>
                                            <th className="py-3 px-4">Location</th>
                                            <th className="py-3 px-4 text-center">Decision</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {paginatedApps.map((app) => (
                                            <tr key={app.id} className="animate-fade-in">
                                                <td className="py-3 px-4 text-muted small fw-bold">{app.date}</td>
                                                <td className="py-3 px-4">
                                                    <div className="fw-bold text-dark mb-1">{app.name}</div>
                                                    <span className={`badge-status shadow-sm border ${app.status === 'Hired' ? 'bg-success text-white border-success' : app.status === 'Rejected' ? 'bg-danger text-white border-danger' : 'bg-warning text-dark border-warning'}`}>
                                                        {app.status || 'Under Review'}
                                                    </span>
                                                </td>
                                                <td className="py-3 px-4 text-orange fw-bold">{app.phone}</td>
                                                <td className="py-3 px-4">
                                                    <div className="fw-bold text-primary">{app.specialization}</div>
                                                    <div className="text-muted small">{app.experience} Experience</div>
                                                </td>
                                                <td className="py-3 px-4 text-muted small font-inter">{app.location}</td>
                                                <td className="py-3 px-4 text-center">
                                                    <div className="d-flex gap-2 justify-content-center">
                                                        <button className="btn-icon-admin success shadow-sm" onClick={() => updateStatus('job_applications', app.id, 'Hired')} title="Hire"><img src="/images/ok_icon.png" alt="check" width="18" height="18" /></button>
                                                        <button className="btn-icon-admin delete shadow-sm" onClick={() => updateStatus('job_applications', app.id, 'Rejected')} title="Reject"><img src="/images/img_icons8_com_3d_fluency_94_cancel_png.png" alt="cancel" width="18" height="18" /></button>
                                                        <button className="btn-icon-admin shadow-sm" onClick={() => deleteItem('job_applications', app.id)} title="Delete Record"><img src="/images/trash_icon.png" alt="trash" width="18" height="18" /></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </>
                            )}
                        </table>

                        {((activeTab === 'applications' && filteredApps.length === 0) || (activeTab === 'leads' && filteredLeads.length === 0) || (activeTab === 'bookings' && bookings.length === 0)) && (
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
                    {activeTab === 'applications' && (
                        <Pagination
                            currentPage={appsPage}
                            totalPages={totalAppsPages}
                            onPageChange={setAppsPage}
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
        </div>
    );
};

export default AdminPage;
