'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function calcReadTime(content = '') {
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]+>/g, ' ');
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

const PAGE_SIZE = 8;

export default function BlogListClient({ allBlogs }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    // Sync state with URL search params on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const category = params.get('category');
            const page = params.get('page');
            if (category) {
                setSelectedCategory(category);
            }
            if (page) {
                const parsedPage = parseInt(page, 10);
                if (!isNaN(parsedPage)) {
                    setCurrentPage(parsedPage);
                }
            }
        }
    }, []);

    // Update URL when category or page changes
    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
        setCurrentPage(1);
        
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            if (cat === 'All') {
                params.delete('category');
            } else {
                params.set('category', cat);
            }
            params.delete('page');
            const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
            window.history.pushState(null, '', newUrl);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            if (page === 1) {
                params.delete('page');
            } else {
                params.set('page', String(page));
            }
            const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
            window.history.pushState(null, '', newUrl);
            window.scrollTo({ top: 300, behavior: 'smooth' });
        }
    };

    const categories = ['All', ...new Set(allBlogs.map(b => b.category))];

    const filteredBlogs = selectedCategory === 'All'
        ? allBlogs
        : allBlogs.filter(b => b.category === selectedCategory);

    const totalPages = Math.ceil(filteredBlogs.length / PAGE_SIZE);
    const paginatedBlogs = filteredBlogs.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    return (
        <div className="container custom-container py-lg-5">
            <div className="text-center mb-5">
                <span className="badge bg-soft-blue text-purple px-4 py-2 mb-3">TECHNICAL ARCHIVE</span>
                <h2 className="fw-black text-dark-blue fs-1">Verified Expert Insights</h2>
                <p className="text-muted fs-5 max-width-700 mx-auto">Access the most comprehensive database of appliance repair knowledge in Hyderabad.</p>
            </div>

            {/* Category Filter — Client-side buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`btn px-4 py-2 fw-bold border ${selectedCategory === cat
                            ? 'bg-purple text-white border-purple shadow-lg'
                            : 'bg-white text-muted border-light shadow-sm'
                            }`}
                        style={{ borderRadius: '4px' }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Blog Grid */}
            <div className="row g-4">
                {paginatedBlogs.map((blog) => (
                    <div key={blog.id} className="col-lg-4 col-md-6">
                        <Link href={`/blog/${blog.slug}`} className="text-decoration-none h-100 d-block">
                            <article className="premium-blog-card h-100 bg-white shadow-sm border border-light overflow-hidden">
                                <div className="blog-img-box">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        width={400}
                                        height={220}
                                        loading="lazy"
                                        className="w-100 h-100 object-fit-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="blog-cat-tag">{blog.category}</div>
                                </div>
                                <div className="p-4">
                                    <div className="d-flex align-items-center gap-3 mb-3 text-muted small">
                                        <span><i className="far fa-calendar-alt text-purple me-1"></i>{blog.date}</span>
                                        <span><i className="far fa-clock text-purple me-1"></i>{calcReadTime(blog.content)}</span>
                                    </div>
                                    <h3 className="h5 fw-black text-dark mb-3 line-clamp-2">{blog.title}</h3>
                                    <p className="text-muted small mb-4 line-clamp-3">{blog.excerpt}</p>
                                    <div className="d-flex align-items-center gap-2 pt-3 border-top">
                                        <div className="author-avatar-small" style={{ width: '24px', height: '24px', background: 'linear-gradient(135deg, #024dbe, #0a7fff)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#fff', fontWeight: 700, flexShrink: 0 }}>C</div>
                                        <span className="small text-muted fw-medium">MeeHelper Team</span>
                                        <span className="ms-auto text-purple fw-bold small text-uppercase">
                                            READ ANALYSIS <i className="fas fa-arrow-right ms-1"></i>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Pagination — Client-side buttons */}
            {totalPages > 1 && (
                <div className="d-flex justify-content-center align-items-center gap-2 mt-5 flex-wrap">
                    <button
                        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                        className={`btn px-4 py-2 border ${currentPage === 1
                            ? 'bg-white text-muted border-light opacity-50 pe-none'
                            : 'bg-white text-purple border-light shadow-sm'
                            }`}
                        style={{ borderRadius: '4px', minWidth: '90px' }}
                        disabled={currentPage === 1}
                    >
                        <i className="fas fa-chevron-left me-1"></i> Prev
                    </button>

                    {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(pageNum => (
                        <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`btn px-3 py-2 border ${currentPage === pageNum
                                ? 'bg-purple text-white border-purple shadow-lg fw-bold'
                                : 'bg-white text-muted border-light shadow-sm'
                                }`}
                            style={{ borderRadius: '4px', minWidth: '40px' }}
                        >
                            {pageNum}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                        className={`btn px-4 py-2 border ${currentPage === totalPages
                            ? 'bg-white text-muted border-light opacity-50 pe-none'
                            : 'bg-white text-purple border-light shadow-sm'
                            }`}
                        style={{ borderRadius: '4px', minWidth: '90px' }}
                        disabled={currentPage === totalPages}
                    >
                        Next <i className="fas fa-chevron-right ms-1"></i>
                    </button>
                </div>
            )}
        </div>
    );
}
