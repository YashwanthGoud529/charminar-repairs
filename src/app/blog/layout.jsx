import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'Expert Appliance Repair Blog | Charminar Repairs Hyderabad',
    description: 'Technical repair insights, maintenance protocols, and appliance safety tips curated forpremium households in Hyderabad. Stay ahead with Charminar Repairs.',
    canonicalPath: '/blog/',
    keywords: 'appliance repair blog, maintenance tips, repair guide hyderabad, ac maintenance, fridge repair tips, washing machine care'
});

export default function BlogLayout({ children }) {
    return <>{children}</>;
}
