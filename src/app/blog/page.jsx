import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogs as allBlogs } from '@/lib/blogs';
import PageHero from '@/components/shared/PageHero';
import '@/components/home/LatestBlogs.css';

// Calculate reading time from content
function calcReadTime(content = '') {
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]+>/g, ' ');
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

const PAGE_SIZE = 8;

// Generate metadata server-side
export const metadata = {
    title: 'Appliance Repair Blog — Tips & Expert Insights | MeeHelper',
    description: 'Expert appliance repair guides, maintenance tips, and technical insights for Hyderabad homeowners. Curated by MeeHelper certified technicians.',
    alternates: { canonical: 'https://www.meehelper.com/blog' }
};

// Server Component — no 'use client' needed
const BlogListPage = ({ searchParams }) => {
    const selectedCategory = searchParams?.category || 'All';
    const currentPage = parseInt(searchParams?.page || '1', 10);

    const categories = ['All', ...new Set(allBlogs.map(b => b.category))];

    const filteredBlogs = selectedCategory === 'All'
        ? allBlogs
        : allBlogs.filter(b => b.category === selectedCategory);

    const totalPages = Math.ceil(filteredBlogs.length / PAGE_SIZE);
    const paginatedBlogs = filteredBlogs.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    );

    const buildUrl = (cat, page) => {
        const params = new URLSearchParams();
        if (cat && cat !== 'All') params.set('category', cat);
        if (page && page > 1) params.set('page', String(page));
        const str = params.toString();
        return `/blog${str ? `?${str}` : ''}`;
    };

    return (
        <main className="blog-list-page bg-light-soft min-vh-100">
            <PageHero
                title="Technical Repair Insights"
                subtitle="Expert guidance, maintenance protocols, and appliance safety insights curated for premium households in Hyderabad. Stay ahead with MeeHelper."
                breadcrumb="Expert Blog"
            />

            <section className="py-5">
                <div className="container custom-container py-lg-5">
                    <div className="text-center mb-5">
                        <span className="badge bg-soft-blue text-purple px-4 py-2 mb-3">TECHNICAL ARCHIVE</span>
                        <h2 className="fw-black text-dark-blue fs-1">Verified Expert Insights</h2>
                        <p className="text-muted fs-5 max-width-700 mx-auto">Access the most comprehensive database of appliance repair knowledge in Hyderabad.</p>
                    </div>

                    {/* Category Filter — server-side via Link */}
                    <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
                        {categories.map(cat => (
                            <Link
                                key={cat}
                                href={buildUrl(cat, 1)}
                                className={`btn px-4 py-2 fw-bold border ${selectedCategory === cat
                                    ? 'bg-purple text-white border-purple shadow-lg'
                                    : 'bg-white text-muted border-light shadow-sm'
                                    }`}
                                style={{ borderRadius: '4px' }}
                            >
                                {cat}
                            </Link>
                        ))}
                    </div>

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

                    {/* Pagination — server-side via Link */}
                    {totalPages > 1 && (
                        <div className="d-flex justify-content-center align-items-center gap-2 mt-5 flex-wrap">
                            <Link
                                href={buildUrl(selectedCategory, Math.max(currentPage - 1, 1))}
                                className={`btn px-4 py-2 border ${currentPage === 1
                                    ? 'bg-white text-muted border-light opacity-50 pe-none'
                                    : 'bg-white text-purple border-light shadow-sm'
                                    }`}
                                style={{ borderRadius: '4px', minWidth: '90px' }}
                            >
                                <i className="fas fa-chevron-left me-1"></i> Prev
                            </Link>

                            {Array.from({ length: totalPages }, (_, idx) => idx + 1).map(pageNum => (
                                <Link
                                    key={pageNum}
                                    href={buildUrl(selectedCategory, pageNum)}
                                    className={`btn px-3 py-2 border ${currentPage === pageNum
                                        ? 'bg-purple text-white border-purple shadow-lg fw-bold'
                                        : 'bg-white text-muted border-light shadow-sm'
                                        }`}
                                    style={{ borderRadius: '4px', minWidth: '40px' }}
                                >
                                    {pageNum}
                                </Link>
                            ))}

                            <Link
                                href={buildUrl(selectedCategory, Math.min(currentPage + 1, totalPages))}
                                className={`btn px-4 py-2 border ${currentPage === totalPages
                                    ? 'bg-white text-muted border-light opacity-50 pe-none'
                                    : 'bg-white text-purple border-light shadow-sm'
                                    }`}
                                style={{ borderRadius: '4px', minWidth: '90px' }}
                            >
                                Next <i className="fas fa-chevron-right ms-1"></i>
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            <style id="blog-list-refined">{`
                .blog-list-page { font-family: var(--font-main), sans-serif; }
                .fw-black { font-weight: 900; }
                .text-purple { color: #024dbe; }
                .bg-purple { background: #024dbe; }
                .border-purple { border-color: #024dbe; }
                .text-dark-blue { color: #0c1228; }
                .bg-soft-blue { background: rgba(2, 77, 190, 0.08); }

                .premium-blog-card {
                    border-radius: 4px;
                    transition: all 0.3s;
                }
                .premium-blog-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 15px 35px rgba(2, 77, 190, 0.1) !important;
                    border-color: rgba(2, 77, 190, 0.2) !important;
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
                    background: #024dbe;
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
            `}</style>
        </main>
    );
};

export default BlogListPage;
