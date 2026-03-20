'use client';

import React from 'react';
import Link from 'next/link';
import './LatestBlogs.css';

import { blogs as allBlogs } from '@/lib/blogs';

const LatestBlogs = () => {
    // Show only the latest 6 most recent blogs on home page
    const blogs = allBlogs.slice(0, 6);


    return (
        <section className="latest-blogs section-py">
            <div className="custom-container">
                <div className="d-flex align-items-center justify-content-between mb-5 flex-wrap gap-4">
                    <div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <div className="icon-badge-small">
                                <i className="fas fa-lightbulb text-orange"></i>
                            </div>
                            <div className="text-orange-dark fw-bold text-uppercase letter-spacing-1">Expert Insights</div>
                        </div>
                        <h2 className="section-title">Latest From Our Blog</h2>
                    </div>
                    <Link href="/blog/" className="btn btn-outline-dark d-none d-md-block px-4 py-2 view-more-btn">
                        VIEW MORE <i className="fas fa-arrow-right ms-2 fs-xs"></i>
                    </Link>
                </div>

                <div className="row row-20 g-0" style={{ margin: '0 -10px' }}>
                    {blogs.map((blog) => (
                        <div key={blog.id} className="col-lg-4 col-md-6 px-2 mb-4">
                            <Link href={`/blog/${blog.slug}/`} className="text-decoration-none">
                                <article className="blog-card border">
                                    <div className="blog-img-container">
                                        <img 
                                            src={blog.image} 
                                            alt={`Appliance Repair Tip: ${blog.title}`} 
                                            title={blog.title}
                                            loading="lazy"
                                            width="600"
                                            height="400"
                                        />
                                    </div>
                                    <div className="blog-card-content">
                                        <time className="text-muted small mb-2 d-block" dateTime={blog.date}>{blog.date}</time>
                                        <h3 className="blog-card-title">
                                            {blog.title.split(/(Charminar Repairs|Hyderabad)/g).map((part, i) => {
                                                if (part === 'Charminar Repairs') return <span key={i} className="company-highlight">{part}</span>;
                                                if (part === 'Hyderabad') return <span key={i} className="location-highlight">{part}</span>;
                                                return part;
                                            })}
                                        </h3>
                                        <p className="blog-card-excerpt">
                                            {blog.excerpt.split(/(Charminar Repairs|Hyderabad)/g).map((part, i) => {
                                                if (part === 'Charminar Repairs') return <span key={i} className="company-highlight">{part}</span>;
                                                if (part === 'Hyderabad') return <span key={i} className="location-highlight">{part}</span>;
                                                return part;
                                            })}
                                        </p>
                                    </div>
                                </article>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center d-md-none mt-4">
                    <Link href="/blog/" className="btn btn-outline-dark w-100 py-3 view-all-blogs-btn">
                        VIEW ALL BLOGS
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;
