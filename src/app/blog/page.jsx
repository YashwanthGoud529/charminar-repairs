import React from 'react';
import { blogs as allBlogs } from '@/lib/blogs';
import PageHero from '@/components/shared/PageHero';
import BlogListClient from '@/components/blog/BlogListClient';
import '@/components/home/LatestBlogs.css';

// Generate metadata server-side
export const metadata = {
    title: 'Appliance Repair Blog — Tips & Expert Insights | MeeHelper',
    description: 'Expert appliance repair guides, maintenance tips, and technical insights for Hyderabad homeowners. Curated by MeeHelper certified technicians.',
    alternates: { canonical: 'https://www.meehelper.com/blog' }
};

const BlogListPage = () => {
    return (
        <main className="blog-list-page bg-light-soft min-vh-100">
            <PageHero
                title="Technical Repair Insights"
                subtitle="Expert guidance, maintenance protocols, and appliance safety insights curated for premium households in Hyderabad. Stay ahead with MeeHelper."
                breadcrumb="Expert Blog"
            />

            <section className="py-5">
                <BlogListClient allBlogs={allBlogs} />
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
