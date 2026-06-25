import React from 'react';
import { constructMetadata } from '@/components/seo/constructMetadata';
import RefundContent from '@/components/refund/RefundContent';

export const metadata = constructMetadata({
    title: 'Refund & Cancellation Policy | MeeHelper',
    description: 'Information about refunds and service cancellations for MeeHelper in Hyderabad.',
    canonicalPath: '/refund-policy',
});

export default function RefundPolicyPage() {
    return <RefundContent />;
}
