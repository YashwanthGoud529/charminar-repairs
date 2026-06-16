const https = require('https');

const urls = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop', // Interior Home Cleaning
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop', // Water Tank Cleaning
    'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop', // Hotel Cleaning
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop', // Villa Cleaning
    'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=600&auto=format&fit=crop', // After Party Cleaning
    'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop', // Commercial Space Cleaning
    'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=600&auto=format&fit=crop', // Carpet Cleaning
    'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop', // Mattress Cleaning
    'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop', // Cabinet Cleaning
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop', // Chair Cleaning
    'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=600&auto=format&fit=crop', // Microwave Cleaning
    'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=600&auto=format&fit=crop', // Vehicle Sanitization
];

function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            resolve({ url, status: res.statusCode });
        }).on('error', (e) => {
            resolve({ url, status: 'ERROR: ' + e.message });
        });
    });
}

Promise.all(urls.map(checkUrl)).then((results) => {
    console.log('--- URL Check Results ---');
    results.forEach((r) => {
        console.log(`${r.status === 200 ? '✅' : '❌'} [${r.status}] ${r.url}`);
    });
});
