'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { blogs as allBlogs } from '@/lib/blogs';
import PageHero from '@/components/shared/PageHero';
import '@/components/home/LatestBlogs.css';

const BlogListPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);

    const categories = ['All', ...new Set(allBlogs.map(b => b.category))];

    const filteredBlogs = selectedCategory === 'All'
        ? allBlogs
        : allBlogs.filter(b => b.category === selectedCategory);

    const PAGE_SIZE = 8;
    const totalPages = Math.ceil(filteredBlogs.length / PAGE_SIZE);
    const paginatedBlogs = filteredBlogs.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);
    const handleCategoryChange = (cat) => {
        setSelectedCategory(cat);
        setCurrentPage(1);
    };

    return (
        <main className="blog-list-page bg-light-soft min-vh-100">
            <PageHero
                title="Technical Repair Insights"
                subtitle="Expert guidance, maintenance protocols, and appliance safety insights curated for premium households in Hyderabad. Stay ahead with Charminar Repairs."
                breadcrumb="Expert Blog"
            />

            <section className="py-5">
                <div className="container custom-container py-lg-5">
                    <div className="text-center mb-5">
                        <span className="badge bg-soft-purple text-purple px-4 py-2 mb-3">TECHNICAL ARCHIVE</span>
                        <h2 className="fw-black text-dark-blue fs-1">Verified Expert Insights</h2>
                        <p className="text-muted fs-5 max-width-700 mx-auto">Access the most comprehensive database of appliance repair knowledge in Hyderabad.</p>
                    </div>

                    {/* Category Filter */}
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`btn px-4 py-2 fw-bold transition-all border ${selectedCategory === cat
                                        ? 'bg-purple text-white border-purple shadow-lg'
                                        : 'bg-white text-muted border-light shadow-sm'
                                    }`}
                                style={{ borderRadius: '8px' }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="row g-4">
                        {paginatedBlogs.map((blog) => (
                            <div key={blog.id} className="col-lg-4 col-md-6">
                                <Link href={`/blog/${blog.slug}`} className="text-decoration-none h-100 d-block">
                                    <article className="premium-blog-card h-100 bg-white shadow-sm border border-light overflow-hidden">
                                        <div className="blog-img-box">
                                            <img
                                                src={blog.image}
                                                alt={blog.title}
                                                loading="lazy"
                                            />
                                            <div className="blog-cat-tag">{blog.category}</div>
                                        </div>
                                        <div className="p-4">
                                            <div className="d-flex align-items-center gap-3 mb-3 text-muted small">
                                                <span><i className="far fa-calendar-alt text-purple me-1"></i> March 2026</span>
                                                <span><i className="far fa-clock text-purple me-1"></i> 6 min read</span>
                                            </div>
                                            <h3 className="h5 fw-black text-dark mb-3 line-clamp-2">{blog.title}</h3>
                                            <p className="text-muted small mb-4 line-clamp-3">{blog.excerpt}</p>
                                            <div className="mt-auto pt-3 border-top d-flex align-items-center text-purple fw-bold small text-uppercase">
                                                READ ANALYSIS <i className="fas fa-arrow-right ms-2"></i>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="d-flex justify-content-center align-items-center gap-2 mt-5 flex-wrap">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`btn px-4 py-2 border transition-all ${
                                    currentPage === 1
                                        ? 'bg-white text-muted border-light opacity-50 cursor-not-allowed'
                                        : 'bg-white text-purple border-light hover-lift shadow-sm'
                                }`}
                                style={{ borderRadius: '8px', minWidth: '90px' }}
                            >
                                <i className="fas fa-chevron-left me-1"></i> Prev
                            </button>
                            
                            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(pageNum => (
                                <button
                                    key={pageNum}
                                    onClick={() => setCurrentPage(pageNum)}
                                    className={`btn px-3.5 py-2 border transition-all ${
                                        currentPage === pageNum
                                            ? 'bg-purple text-white border-purple shadow-lg fw-bold'
                                            : 'bg-white text-muted border-light hover-lift shadow-sm'
                                    }`}
                                    style={{ borderRadius: '8px', minWidth: '40px' }}
                                >
                                    {pageNum}
                                </button>
                            ))}
                            
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`btn px-4 py-2 border transition-all ${
                                    currentPage === totalPages
                                        ? 'bg-white text-muted border-light opacity-50 cursor-not-allowed'
                                        : 'bg-white text-purple border-light hover-lift shadow-sm'
                                }`}
                                style={{ borderRadius: '8px', minWidth: '90px' }}
                            >
                                Next <i className="fas fa-chevron-right ms-1"></i>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <style id="blog-list-refined">{`
                .blog-list-page { font-family: var(--font-outfit), sans-serif; }
                .fw-black { font-weight: 900; }
                .text-purple { color: #673ab7; }
                .bg-purple { background: #673ab7; }
                .border-purple { border-color: #673ab7; }
                .text-dark-blue { color: #0c1228; }
                .bg-soft-purple { background: rgba(103, 58, 183, 0.08); }

                .premium-blog-card {
                    border-radius: 4px;
                    transition: all 0.3s;
                }

                .premium-blog-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 35px rgba(103, 58, 183, 0.1) !important;
                    border-color: rgba(103, 58, 183, 0.2) !important;
                }

                .blog-img-box {
                    position: relative;
                    height: 220px;
                    overflow: hidden;
                }

                .blog-img-box img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s;
                }

                .premium-blog-card:hover .blog-img-box img {
                    transform: scale(1.1);
                }

                .blog-cat-tag {
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    background: #673ab7;
                    color: white;
                    padding: 4px 12px;
                    border-radius: 4px;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .line-clamp-3 {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .hover-lift {
                    transition: transform 0.2s, box-shadow 0.2s;
                }
                .hover-lift:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(103, 58, 183, 0.15) !important;
                }
                .cursor-not-allowed {
                    cursor: not-allowed;
                }
            `}</style>
        </main>
    );
};

export default BlogListPage;
