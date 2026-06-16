import React from 'react';

const LocalReviews = ({ serviceName, locationLabel }) => {
    const loc = locationLabel || 'Hyderabad';
    
    const getServiceType = (serviceName) => {
        const name = (serviceName || '').toLowerCase();
        if (
            name.includes('cleaning') || 
            name.includes('sanitization') || 
            name.includes('wash') || 
            name.includes('wheels') ||
            name.includes('scrub') ||
            name.includes('scrubbing') ||
            name.includes('facade') ||
            name.includes('septic') ||
            name.includes('drainage') ||
            name.includes('tank') ||
            name.includes('sump')
        ) {
            if (name.includes('wash') || name.includes('wheels') || name.includes('auto') || name.includes('car')) {
                return 'vehicle';
            }
            return 'cleaning';
        }
        if (name.includes('polish') || name.includes('polishing')) return 'polishing';
        if (
            name.includes('pest') || 
            name.includes('control') || 
            name.includes('termite') || 
            name.includes('woodborer') || 
            name.includes('bugs') || 
            name.includes('cockroach') || 
            name.includes('mosquito') ||
            name.includes('rodent') ||
            name.includes('rat') ||
            name.includes('beehive') ||
            name.includes('wasp') ||
            name.includes('ant')
        ) {
            return 'pest';
        }
        if (name.includes('movers') || name.includes('packers') || name.includes('shifting')) return 'movers';
        if (
            name.includes('safety') || 
            name.includes('cctv') || 
            name.includes('security') || 
            name.includes('lock') || 
            name.includes('locksmith') || 
            name.includes('waterproofing') || 
            name.includes('waterproof') || 
            name.includes('grille') || 
            name.includes('mesh') || 
            name.includes('netting')
        ) {
            return 'safety';
        }
        if (
            name.includes('it-') || 
            name.includes('wifi') || 
            name.includes('router') || 
            name.includes('pc') || 
            name.includes('computer') || 
            name.includes('printer') || 
            name.includes('software') || 
            name.includes('smarthome') || 
            name.includes('laptop') || 
            name.includes('tech') ||
            name.includes('office setup') ||
            name.includes('it & office')
        ) {
            return 'it';
        }
        return 'repair';
    };

    const type = getServiceType(serviceName);

    let review2Text = `Brilliant service from Charminar Repairs! The doorstep visit was on time, and they used original spare parts. My appliance feels as good as new. Best ${serviceName.toLowerCase()} in Hyderabad.`;
    let review1Text = `I had my ${serviceName.toLowerCase()} done at my resident in ${loc} yesterday. The technician CH and team were professional, punctual, and highly skilled. They resolved the sudden problem within 45 minutes!`;
    let review3Text = `Expert and certified professionals. They explained the problem clearly and gave a transparent quote before starting. Very happy with the 180-day warranty too.`;

    if (type === 'cleaning') {
        review1Text = `Great deep cleaning service! The team arrived on time, was extremely polite, and cleaned every corner of the house. Super happy with the spotless results.`;
        review2Text = `Brilliant cleaning service! The cleaners were very professional, used high-grade eco-friendly cleaning agents, and scrubbed the bathrooms clean. Best ${serviceName.toLowerCase()} in Hyderabad!`;
        review3Text = `Outstanding utility team. They descaled the tiles and cleaned the greasy kitchen walls thoroughly. They verified our satisfaction before finishing up.`;
    } else if (type === 'polishing') {
        review1Text = `We got our marble floors polished. They used a multi-stage diamond grinding technique. The results are amazing, mirror-shine finish!`;
        review2Text = `Excellent floor care service. The restoration work removed all scratch marks and stains completely. Floors look as good as new!`;
        review3Text = `Professional and polite specialists. They used wet grinding to ensure a dust-free environment. Will definitely book again.`;
    } else if (type === 'pest') {
        review1Text = `Very professional pest control. The treatment was completely odorless and safe for our kids and pets. We haven't seen a single cockroach since then.`;
        review2Text = `Brilliant pest control service. Punctual technician, used government-certified safe chemicals, and provided a 90-day protection guarantee.`;
        review3Text = `Highly effective ant control. The technician applied odorless gel bait in all cabinet corners and sprayed the balcony. Highly satisfied!`;
    } else if (type === 'vehicle') {
        review1Text = `Incredible doorstep wash! They arrived in a mobile van equipped with water and power. The snow-foam wash made my car look brand new.`;
        review2Text = `Super convenient bike premium foam wash. The detailing team cleaned the chain, polished the body, and did internal vacuuming. Best auto care!`;
        review3Text = `Technicians were punctual and very detailed. They vacuumed the car interior completely and polished the dashboard. Highly recommended!`;
    } else if (type === 'movers') {
        review1Text = `Highly professional shifting service. They wrapped all delicate items, glass tabletops, and electronics in multi-layer bubble wrap. Zero damages!`;
        review2Text = `Excellent movers and packers experience in Hyderabad. Quick transit in a closed container truck, very helpful ground crew.`;
        review3Text = `They made our house relocation stress-free. Loaded and unloaded all furniture carefully, and helped set up the beds too. Great job!`;
    } else if (type === 'safety') {
        review1Text = `Got a 4-camera CCTV system installed. The technician was extremely neat, routed all wiring cleanly, and configured the live app on my phone.`;
        review2Text = `Excellent smart door lock installation. The technician routed the wooden frame with precision and gave us a full demo on PIN setup.`;
        review3Text = `Prompt wall waterproofing and crack sealing. They scraped the flaking paint, sealed the moisture, and applied double waterproof coating.`;
    } else if (type === 'it') {
        review1Text = `My home office WiFi speed was very low. The IT engineer installed mesh extenders and routed the ethernet cables cleanly. Speeds are now full!`;
        review2Text = `Great desktop PC repair. The technician diagnosed the SMPS failure, replaced it on the spot, and upgraded my RAM. Runs super fast now.`;
        review3Text = `Quick smart home integration. They synced all our smart bulbs, smart switches, and smart speakers with Alexa smoothly. Professional IT engineers.`;
    }

    const reviews = [
        { name: 'Sameer K.', location: loc, text: review1Text, rating: 5, date: '2 days ago' },
        { name: 'Priya R.', location: 'Madhapur', text: review2Text, rating: 5, date: '1 week ago' },
        { name: 'Arjun M.', location: 'KPHB Colony', text: review3Text, rating: 4.8, date: '3 weeks ago' }
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
                       <span className="text-muted small">(350+ Verified Reviews)</span>
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
