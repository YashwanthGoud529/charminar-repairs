const fs = require('fs');

const servicesContent = fs.readFileSync('src/config/services.js', 'utf8');
const dataContent = fs.readFileSync('src/config/serviceData.js', 'utf8');

// Regex to find 'Title': 'slug' in SERVICE_CANONICAL_MAP
const canonicalRegex = /['"]([^'"]+)['"]\s*:\s*['"]([^'"]+)['"]/g;
const canonicalMap = {};
let match;
const startIndex = servicesContent.indexOf('SERVICE_CANONICAL_MAP');
while ((match = canonicalRegex.exec(servicesContent)) !== null) {
    if (match.index > startIndex) {
        canonicalMap[match[1]] = match[2];
    }
}

// Regex to find top-level keys in SERVICE_DATA_MAP
// These start at the beginning of a line (with indentation) and are followed by : {
const dataRegex = /^\s*['"]([^'"]+)['"]\s*:\s*\{/gm;
const dataKeys = new Set();
while ((match = dataRegex.exec(dataContent)) !== null) {
    dataKeys.add(match[1]);
}

console.log('--- Not Found Pages List ---');
console.log('URLs that will return 404 because titles are in Mapping but NOT in Data:\n');

const missing = [];
for (const title in canonicalMap) {
    if (!dataKeys.has(title)) {
        // Exclude some that are likely helper mappings (like near-me)
        if (title.includes(' near me') || title.includes('Near Me')) continue;
        
        missing.push({
            title: title,
            url: `/${canonicalMap[title]}/`
        });
    }
}

missing.forEach(m => {
    console.log(`URL: ${m.url} (Service: "${m.title}")`);
    // Also include common neighborhood combinations for this service
    console.log(`   └ Example Location URL: ${m.url.replace(/\/$/, '')}-in-gachibowli/`);
});

if (missing.length === 0) {
    console.log('No 404-prone services found.');
}
