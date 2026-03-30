'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './LatestBlogs.css';

import { blogs as allBlogs } from '@/lib/blogs';

const LatestBlogs = () => {
    // Show only the latest 6 most recent blogs on home page
    const blogs = allBlogs.slice(0, 6);

    // --- SVG Icons Components ---
    const LightbulbIcon = () => (
        <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="text-orange" aria-hidden="true">
            <path d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1zM9 19h6v1H9zM9 21h6v1H9z"/>
        </svg>
    );

    const ArrowRightIcon = () => (
        <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ms-2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
    );


    return (
        <section className="latest-blogs section-py">
            <div className="custom-container">
                <div className="d-flex align-items-center justify-content-between mb-5 flex-wrap gap-4">
                    <div>
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <div className="icon-badge-small d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255, 102, 0, 0.1)' }}>
                                <LightbulbIcon />
                            </div>
                            <div className="text-orange-dark fw-bold text-uppercase letter-spacing-1">Expert Insights</div>
                        </div>
                        <h2 className="section-title">Latest From Our Blog</h2>
                    </div>
                    <Link href="/blog/" className="btn btn-outline-dark d-none d-md-flex align-items-center px-4 py-2 view-more-btn" style={{ borderRadius: '10px', height: 'fit-content' }} aria-label="View all blog articles">
                        VIEW MORE <ArrowRightIcon />
                    </Link>
                </div>

                <div className="row row-20 g-0" style={{ margin: '0 -10px' }}>
                    {blogs.map((blog) => (
                        <div key={blog.id} className="col-lg-4 col-md-6 px-2 mb-4">
                            <Link href={`/blog/${blog.slug}/`} className="text-decoration-none" aria-label={`Read blog post: ${blog.title}`}>
                                <article className="blog-card border" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                                    <div className="blog-img-container" style={{ position: 'relative', height: '240px' }}>
                                        <Image 
                                            src={blog.image} 
                                            alt={`Appliance Repair Tip: ${blog.title}`} 
                                            title={blog.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            loading="lazy"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="blog-card-content p-4">
                                        <time className="text-muted small mb-2 d-block" dateTime={blog.date}>{blog.date}</time>
                                        <h3 className="blog-card-title mb-3" style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.4' }}>
                                            {blog.title.split(/(Charminar Repairs|Hyderabad)/g).map((part, i) => {
                                                if (part === 'Charminar Repairs') return <span key={i} className="company-highlight text-purple">{part}</span>;
                                                if (part === 'Hyderabad') return <span key={i} className="location-highlight text-orange-dark">{part}</span>;
                                                return part;
                                            })}
                                        </h3>
                                        <p className="blog-card-excerpt mb-0" style={{ fontSize: '14px', color: '#666', height: '60px', overflow: 'hidden' }}>
                                            {blog.excerpt.split(/(Charminar Repairs|Hyderabad)/g).map((part, i) => {
                                                if (part === 'Charminar Repairs') return <span key={i} className="company-highlight text-purple">{part}</span>;
                                                if (part === 'Hyderabad') return <span key={i} className="location-highlight text-orange-dark">{part}</span>;
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
                    <Link href="/blog/" className="btn btn-outline-dark w-100 py-3 view-all-blogs-btn" style={{ borderRadius: '12px' }}>
                        VIEW ALL BLOGS
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LatestBlogs;
