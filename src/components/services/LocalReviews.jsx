import React from 'react';

const LocalReviews = ({ serviceName, locationLabel }) => {
    const loc = locationLabel || 'Hyderabad';
    
    const reviews = [
        { name: 'Sameer K.', location: loc, text: `I had my ${serviceName.toLowerCase()} done at my resident in ${loc} yesterday. The technician CH and team were professional, punctual, and highly skilled. They resolved the sudden problem within 45 minutes!`, rating: 5, date: '2 days ago' },
        { name: 'Priya R.', location: 'Madhapur', text: `Brilliant service from Charminar Repairs! The doorstep visit was on time, and they used original spare parts. My appliance feels as good as new. Best ${serviceName.toLowerCase()} in Hyderabad.`, rating: 5, date: '1 week ago' },
        { name: 'Arjun M.', location: 'KPHB Colony', text: `Expert and certified professionals. They explained the problem clearly and gave a transparent quote before starting. Very happy with the 1-year warranty too.`, rating: 4.8, date: '3 weeks ago' }
    ];

    return (
        <section className="reviews-section py-5 bg-light-soft border-top">
            <div className="container custom-container px-lg-4">
                <div className="d-flex align-items-center justify-content-between mb-4">
                   <h2 className="fw-black text-dark fs-3 mb-0">What Our Customers Say in {loc}</h2>
                   <div className="d-flex align-items-center gap-2">
                       <span className="fw-black text-primary fs-4">4.85</span>
                       <div className="d-flex align-items-center gap-1">
                           {[1,2,3,4,5].map(n => <img key={n} src="/assets/Images/star.png" alt="star" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />)}
                       </div>
                       <span className="text-muted small">(241K Verified Reviews)</span>
                   </div>
                </div>
                
                <div className="row g-4 overflow-auto py-2 no-scrollbar flex-nowrap flex-md-wrap">
                    {reviews.map((r, i) => (
                        <div key={i} className="col-lg-4 col-md-6 col-11 flex-shrink-0">
                            <div className="p-4 bg-white border border-light h-100 shadow-sm" style={{ borderRadius: '8px' }}>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{ width: '32px', height: '32px', fontSize: '13px' }}>{r.name.charAt(0)}</div>
                                        <div>
                                            <div className="fw-bold text-dark fs-6" style={{ lineHeight: 1 }}>{r.name}</div>
                                            <div className="text-muted x-small mt-1">{r.location}, Hyderabad</div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-1 fw-bold small text-dark">
                                        <img src="/assets/Images/star.png" alt="star" style={{ width: '13px', height: '13px', objectFit: 'contain' }} />
                                        {r.rating}
                                    </div>
                                </div>
                                <p className="text-secondary small italic mb-3 font-italic" style={{ lineHeight: '1.6' }}>"{r.text}"</p>
                                <div className="text-muted x-small fw-medium">{r.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LocalReviews;
