import React from 'react';
import Skeleton from '@/components/shared/Skeleton';

export default function Loading() {
    return (
        <div className="container py-5" style={{ backgroundColor: '#fdfdfd', minHeight: '100vh' }}>
            {/* Breadcrumb Skeleton */}
            <div className="d-flex gap-2 mb-4">
                <Skeleton width="60px" height="20px" />
                <Skeleton width="10px" height="20px" />
                <Skeleton width="100px" height="20px" />
                <Skeleton width="10px" height="20px" />
                <Skeleton width="150px" height="20px" />
            </div>

            <div className="row g-5">
                {/* Image Section Skeleton */}
                <div className="col-lg-5">
                    <Skeleton width="100%" height="450px" borderRadius="12px" />
                </div>

                {/* Content Section Skeleton */}
                <div className="col-lg-7">
                    <Skeleton width="80%" height="48px" className="mb-4" />
                    <Skeleton width="100%" height="24px" className="mb-2" />
                    <Skeleton width="100%" height="24px" className="mb-2" />
                    <Skeleton width="60%" height="24px" className="mb-5" />

                    <div className="d-flex gap-3 mb-5">
                        <Skeleton width="180px" height="56px" borderRadius="12px" />
                        <Skeleton width="180px" height="56px" borderRadius="12px" />
                    </div>

                    <div className="row g-3">
                        <div className="col-6 col-md-4">
                            <Skeleton width="100%" height="100px" borderRadius="12px" />
                        </div>
                        <div className="col-6 col-md-4">
                            <Skeleton width="100%" height="100px" borderRadius="12px" />
                        </div>
                        <div className="col-6 col-md-4">
                            <Skeleton width="100%" height="100px" borderRadius="12px" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Skeleton */}
            <div className="row mt-5 pt-5 g-4">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="col-md-3">
                        <Skeleton width="50px" height="50px" borderRadius="50%" className="mb-3" />
                        <Skeleton width="100%" height="20px" className="mb-2" />
                        <Skeleton width="80%" height="16px" />
                    </div>
                ))}
            </div>
        </div>
    );
}
