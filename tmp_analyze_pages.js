const fs = require('fs');

function countOccurrences(content, pattern) {
    const matches = content.match(pattern);
    return matches ? matches.length : 0;
}

const locationsContent = fs.readFileSync('src/config/locations.js', 'utf8');
const locationsCount = countOccurrences(locationsContent, /'[^']+'|"[^"]+"/g);

const servicesContent = fs.readFileSync('src/config/services.js', 'utf8');
const servicesCount = countOccurrences(servicesContent, /'[^']+'\s*:\s*'[^']+'/g); // Mapping entries

const blogsContent = fs.readFileSync('src/lib/blogs.js', 'utf8');
const blogsCount = countOccurrences(blogsContent, /id:\s*\d+/g);

const serviceDataContent = fs.readFileSync('src/config/serviceData.js', 'utf8');
const subServicesCount = countOccurrences(serviceDataContent, /id:\s*'[^']+'/g);

console.log('--- Current Dataset Counts ---');
console.log('Locations found:', locationsCount);
console.log('Main Services in Map:', servicesCount);
console.log('Blogs found:', blogsCount);
console.log('Sub-services found (unique IDs):', subServicesCount);

const staticPages = 10;
const areaLandingPages = locationsCount;
const blogPages = blogsCount;
const serviceLandingPages = servicesCount + subServicesCount; // Approximate

const totalUrls = staticPages + areaLandingPages + blogPages + (serviceLandingPages * locationsCount);

console.log('\n--- Page Calculations (Dynamic) ---');
console.log('Static Pages:', staticPages);
console.log('Location Landing Pages:', areaLandingPages);
console.log('Blog Pages:', blogPages);
console.log('Service Landing Pages:', serviceLandingPages);
console.log('\nDynamic Permutations (Services x Locations):', serviceLandingPages * locationsCount);
console.log('Grand Total Pages (approx):', totalUrls);
