'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const BlogList = ({ blogs }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6; // Increased from 3 to 6 for better desktop view

    // Logic for pagination
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    // --- SVG Chevron Icon ---
    const ChevronRightIcon = () => (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ms-1">
            <path d="M9 18l6-6-6-6"/>
        </svg>
    );

    return (
        <section className="blog-section py-5 d-block w-100" style={{ background: '#f8fafc', paddingBottom: '100px' }}>
            <div className="container custom-container px-lg-5">
                <div className="row g-4">
                    {currentBlogs.map((blog) => (
                        <div key={blog.id} className="col-lg-4 col-md-6 mb-4">
                            <article className="blog-card bg-white h-100 shadow-sm transition-all hover-up" style={{ 
                                borderRadius: '16px', 
                                overflow: 'hidden', 
                                border: '1px solid #eef2f6',
                                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}>
                                <div className="blog-image" style={{ height: '240px', overflow: 'hidden' }}>
                                    <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                                </div>
                                <div className="p-4 pt-4">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <span className="badge" style={{ 
                                            background: 'rgba(255,107,0,0.1)', 
                                            color: '#ff6b00', 
                                            fontSize: '11px', 
                                            textTransform: 'uppercase', 
                                            fontWeight: '800',
                                            padding: '6px 12px',
                                            borderRadius: '6px'
                                        }}>
                                            {blog.category || 'Maintenance'}
                                        </span>
                                        <span className="text-muted" style={{ fontSize: '13px' }}>• {blog.date}</span>
                                    </div>
                                    <h3 className="h5 fw-800 mb-3 font-outfit" style={{ lineHeight: '1.4', color: '#0c1228', fontWeight: '800' }}>{blog.title}</h3>
                                    <p className="text-muted mb-4 font-inter" style={{ lineHeight: '1.6', fontSize: '14px', height: '68px', overflow: 'hidden' }}>{blog.excerpt}</p>
                                    <Link href={`/blog/${blog.id}/`} className="text-orange fw-bold small text-decoration-none d-flex align-items-center cursor-pointer font-outfit" style={{ color: '#ff6b00', letterSpacing: '0.5px' }}>
                                        READ MORE <ChevronRightIcon />
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="d-flex justify-content-center mt-5">
                        <nav aria-label="Page navigation">
                            <ul className="pagination gap-3 border-0">
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                        <button
                                            onClick={() => paginate(i + 1)}
                                            className="page-link border rounded shadow-sm px-4 py-2"
                                            style={{
                                                background: currentPage === i + 1 ? '#ff6b00' : '#fff',
                                                borderColor: currentPage === i + 1 ? '#ff6b00' : '#dee2e6',
                                                color: currentPage === i + 1 ? '#fff' : '#0c1228',
                                                fontWeight: '800',
                                                transition: 'all 0.2s',
                                                borderRadius: '10px',
                                                minWidth: '45px'
                                            }}
                                        >
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                )}
            </div>

            <style jsx>{`
                .custom-container { max-width: 1300px; }
                .hover-up:hover { transform: translateY(-12px); box-shadow: 0 30px 60px rgba(0,0,0,0.12) !important; }
            `}</style>
        </section>
    );
};

export default BlogList;
