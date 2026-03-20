'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const BlogList = ({ blogs }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 3;

    // Logic for pagination
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="blog-section py-5" style={{ background: '#f8fafc' }}>
            <div className="container custom-container px-lg-5">
                <div className="row g-4">
                    {currentBlogs.map((blog) => (
                        <div key={blog.id} className="col-lg-4 col-md-6">
                            <article className="blog-card bg-white h-100 shadow-sm transition-all hover-up" style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #f1f5f9' }}>
                                <div className="blog-image" style={{ height: '220px', overflow: 'hidden' }}>
                                    <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="p-4">
                                    <div className="d-flex align-items-center gap-2 mb-3">
                                        <span className="badge bg-orange-subtle text-orange" style={{ background: 'rgba(255,107,0,0.1)', color: '#ff6b00', fontSize: '11px', textTransform: 'uppercase', fontWeight: '800' }}>
                                            {blog.category}
                                        </span>
                                        <span className="text-muted small">• {blog.date}</span>
                                    </div>
                                    <h3 className="h5 fw-800 mb-3" style={{ lineHeight: '1.4', color: '#0c1228' }}>{blog.title}</h3>
                                    <p className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>{blog.excerpt}</p>
                                    <Link href={`/blog/${blog.id}`} className="text-orange fw-bold small text-decoration-none d-flex align-items-center gap-2">
                                        READ MORE <i className="fas fa-chevron-right" style={{ fontSize: '10px' }}></i>
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="d-flex justify-content-center mt-5">
                    <nav aria-label="Page navigation">
                        <ul className="pagination gap-2 border-0">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <li key={i + 1} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                                    <button
                                        onClick={() => paginate(i + 1)}
                                        className="page-link border rounded shadow-sm px-4 py-2"
                                        style={{
                                            background: currentPage === i + 1 ? '#ff6b00' : '#fff',
                                            borderColor: currentPage === i + 1 ? '#ff6b00' : '#dee2e6',
                                            color: currentPage === i + 1 ? '#fff' : '#0c1228',
                                            fontWeight: '700'
                                        }}
                                    >
                                        {i + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            <style jsx>{`
                .custom-container { max-width: 1400px; }
                .fw-800 { font-weight: 800; }
                .text-orange { color: #ff6b00; }
                .transition-all { transition: all 0.3s ease; }
                .hover-up:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important; }
            `}</style>
        </section>
    );
};

export default BlogList;
