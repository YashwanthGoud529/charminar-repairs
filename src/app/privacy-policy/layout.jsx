import { constructMetadata } from '@/components/seo/constructMetadata';

export const metadata = constructMetadata({
    title: 'Privacy Policy | Charminar Repairs Hyderabad',
    description: 'Read the Charminar Repairs privacy policy to understand how your personal data is collected, used, and protected when you book appliance repair services in Hyderabad.',
    canonicalPath: '/privacy-policy',
    keywords: 'Charminar Repairs privacy policy, data protection appliance repair, customer data security Hyderabad',
    noIndex: false,
});

export default function PrivacyPolicyLayout({ children }) {
    return <>{children}</>;
}
