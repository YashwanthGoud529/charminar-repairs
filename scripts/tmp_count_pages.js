const { HYDERABAD_LOCATIONS } = require('./src/config/locations');
const { CANONICAL_SLUGS } = require('./src/config/services');

const staticRoutesCount = 11;
const serviceSlugsCount = CANONICAL_SLUGS.length;
const locationsCount = HYDERABAD_LOCATIONS.length;
const locationServiceRoutesCount = serviceSlugsCount * locationsCount;

console.log('Static Routes:', staticRoutesCount);
console.log('Service Slugs:', serviceSlugsCount);
console.log('Locations:', locationsCount);
console.log('Location-Specific Service Routes:', locationServiceRoutesCount);
console.log('Total Inner Pages (Dynamic + Static):', staticRoutesCount + serviceSlugsCount + locationServiceRoutesCount);
