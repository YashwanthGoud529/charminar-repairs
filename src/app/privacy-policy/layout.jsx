import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'Privacy Policy | MeeHelper Hyderabad',
    description: 'Read the MeeHelper privacy policy to understand how your personal data is collected, used, and protected when you book appliance repair services in Hyderabad.',
    canonicalPath: '/privacy-policy',
    keywords: 'MeeHelper privacy policy, data protection appliance repair, customer data security Hyderabad',
    noIndex: false,
});

export default function PrivacyPolicyLayout({ children }) {
    return <>{children}</>;
}
