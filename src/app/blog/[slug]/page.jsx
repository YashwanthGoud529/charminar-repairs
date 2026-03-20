import React from 'react';
import Link from 'next/link';
import { blogs as allBlogs } from '@/lib/blogs';
import BookBanner from '@/components/home/BookBanner';
import { constructMetadata } from '@/components/seo/constructMetadata';
import PageHero from '@/components/shared/PageHero';
import './BlogDetail.css';

export async function generateStaticParams() {
    return allBlogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const blog = allBlogs.find(b => b.slug === slug);

    if (!blog) {
        return { title: 'Article Not Found' };
    }

    return constructMetadata({
        title: `${blog.title} | Charminar Repairs Hyderabad`,
        description: blog.excerpt,
        canonicalPath: `/blog/${slug}`,
    });
}

const BlogDetailPage = async ({ params }) => {
    const { slug } = await params;
    const blog = allBlogs.find(b => b.slug === slug);

    if (!blog) {
        return (
            <div className="container py-5 text-center">
                <h2>Article Not Found</h2>
                <Link href="/blog" className="btn btn-purple mt-3">Back to Blogs</Link>
            </div>
        );
    }

    const recommendedBlogs = allBlogs
        .filter(b => b.id !== blog.id)
        .slice(0, 10);

    const readNextBlogs = allBlogs
        .filter(b => b.id !== blog.id && !recommendedBlogs.find(r => r.id === b.id))
        .slice(0, 4);

    return (
        <main className="blog-detail-page bg-light-soft pb-5">
            <PageHero 
                title={blog.title}
                subtitle={blog.category}
                breadcrumb="Insights"
            />
            <div className="container custom-container py-5 mt-n4">

                <div className="row g-lg-5">
                    {/* Main Content Area */}
                    <div className="col-lg-8">
                        <article className="blog-article-premium bg-white p-4 p-md-5 shadow-sm border border-light">
                            <div className="mb-4">
                                <div className="d-flex align-items-center gap-2 mb-3">
                                    <span className="badge bg-soft-purple text-purple px-4 py-2 fw-bold" style={{ borderRadius: '8px' }}>TECHNICAL GUIDE</span>
                                </div>
                                <h1 className="fw-black text-dark mb-4 fs-1">
                                    {blog.title}
                                </h1>
                                <div className="blog-meta-v2 d-flex flex-wrap align-items-center gap-4 py-3 border-top border-bottom border-light mt-4">
                                    <div className="d-flex align-items-center gap-2 text-muted">
                                        <i className="far fa-calendar-alt text-purple"></i>
                                        <span>March 2026</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 text-muted">
                                        <i className="far fa-clock text-purple"></i>
                                        <span>8 Min Read</span>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 text-muted">
                                        <i className="fas fa-user-shield text-purple"></i>
                                        <span>Verified Entry</span>
                                    </div>
                                </div>
                            </div>

                            <div className="blog-featured-img-v2 mb-5 rounded-3 overflow-hidden shadow-lg" style={{ borderRadius: '8px' }}>
                                <img src={blog.image} alt={blog.title} className="w-100" style={{ maxHeight: '500px', objectFit: 'cover' }} />
                            </div>

                            <div className="blog-rich-content font-outfit fs-5 text-muted lh-lg" dangerouslySetInnerHTML={{ __html: blog.content }}>
                            </div>

                            <div className="expert-callout-premium p-5 mt-5 bg-dark text-white rounded-3 position-relative overflow-hidden">
                                <div className="hub-blob position-absolute bottom-0 end-0"></div>
                                <div className="position-relative z-1">
                                    <h3 className="fw-black mb-3 h2">Broken Appliance?</h3>
                                    <p className="opacity-75 fs-5 mb-4">Our background-verified master technicians in <strong>Hyderabad</strong> are ready for same-day inspection.</p>
                                    <div className="d-flex flex-wrap gap-3">
                                        <a href="tel:8008615049" className="btn btn-primary px-5 py-3 fw-bold rounded-3" style={{ background: '#673ab7', borderColor: '#673ab7' }}>
                                            CALL 8008615049
                                        </a>
                                        <Link href="/contact-us" className="btn btn-outline-light px-5 py-3 fw-black rounded-3 border-2">
                                            BOOK ONLINE
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article>

                        <div className="row g-4 mt-5">
                            <div className="col-12"><h3 className="fw-black mb-4">Read Next</h3></div>
                            {readNextBlogs.map(nextBlog => (
                                <div key={nextBlog.id} className="col-md-6">
                                    <Link href={`/blog/${nextBlog.slug}`} className="text-decoration-none h-100 d-block">
                                        <div className="next-article-card p-3 bg-white shadow-sm border border-light h-100 d-flex gap-3 align-items-center">
                                            <img src={nextBlog.image} width="100" height="80" className="object-fit-cover rounded-3" style={{ borderRadius: '8px' }} alt="next" />
                                            <div>
                                                <h6 className="fw-bold text-dark mb-1 small line-clamp-2">{nextBlog.title}</h6>
                                                <span className="text-purple x-small fw-bold">{nextBlog.category}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        <aside className="sticky-top" style={{ top: '100px' }}>
                            <div className="sidebar-booking p-5 bg-purple text-white shadow-lg text-center rounded-3 mb-4">
                                <i className="fas fa-tools fa-3x mb-4 opacity-50"></i>
                                <h4 className="fw-black mb-3">Instant Booking</h4>
                                <p className="small opacity-75 mb-4">Professional repair service at your doorstep across Hyderabad.</p>
                                <a href="tel:8008615049" className="btn btn-light w-100 py-3 fw-black text-purple" style={{ borderRadius: '8px' }}>
                                    CALL ENGINEEER
                                </a>
                            </div>

                            <div className="sidebar-rec p-4 bg-white shadow-sm border border-light rounded-3">
                                <h5 className="fw-black mb-4 border-bottom pb-3">Popular Insights</h5>
                                <div className="d-flex flex-column gap-3">
                                    {recommendedBlogs.slice(0, 6).map(rec => (
                                        <Link key={rec.id} href={`/blog/${rec.slug}`} className="text-decoration-none">
                                            <div className="rec-item-v2 d-flex gap-3 align-items-start">
                                                <img src={rec.image} width="80" height="60" className="rounded-3 object-fit-cover" alt="rec" style={{ borderRadius: '8px' }} />
                                                <div>
                                                    <h6 className="fw-bold text-dark mb-1 small line-clamp-2">{rec.title}</h6>
                                                    <span className="x-small text-muted">{rec.category}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>

            <BookBanner />

            <style id="blog-detail-refined">{`
                .blog-detail-page { font-family: var(--font-outfit), sans-serif; }
                .fw-black { font-weight: 900; }
                .text-purple { color: #673ab7; }
                .bg-purple { background: #673ab7; }
                .bg-soft-purple { background: rgba(103, 58, 183, 0.08); }
                .btn-purple { background: #673ab7; color: white; }
                
                .blog-article-premium {
                    border-radius: 8px;
                }

                .hub-blob {
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, rgba(103, 58, 183, 0.2) 0%, transparent 70%);
                    z-index: 0;
                }

                .next-article-card, .sidebar-rec {
                    border-radius: 8px;
                    transition: all 0.3s;
                }

                .next-article-card:hover {
                    transform: translateX(5px);
                    border-color: #673ab7 !important;
                }

                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </main>
    );
};

export default BlogDetailPage;
