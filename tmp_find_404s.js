const fs = require('fs');

// Simple mock for imports (we'll just use regex or similar, but since we can't easily compile, we'll just read strings)
function extractObject(content, objectName) {
    const regex = new RegExp(`export const ${objectName}\\s*=\\s*({[\\s\\S]+?});`);
    const match = content.match(regex);
    if (!match) return {};
    try {
        // Evaluate it in a restricted way (it's mostly strings and values)
        // This is a bit hacky but works for simple JS objects
        return eval(`(${match[1]})`);
    } catch (e) {
        console.log(`Error parsing ${objectName}:`, e);
        return {};
    }
}

const servicesContent = fs.readFileSync('src/config/services.js', 'utf8');
const serviceDataContent = fs.readFileSync('src/config/serviceData.js', 'utf8');

const CANONICAL_MAP = extractObject(servicesContent, 'SERVICE_CANONICAL_MAP');
const DATA_MAP = extractObject(serviceDataContent, 'SERVICE_DATA_MAP');

const canonicalTitles = Object.keys(CANONICAL_MAP);
const dataTitles = Object.keys(DATA_MAP);

const missingInData = canonicalTitles.filter(t => !DATA_MAP[t]);
const missingInCanonical = dataTitles.filter(t => !CANONICAL_MAP[t]);

console.log('--- Mismatch Identification ---');
console.log('Total Canonical Titles:', canonicalTitles.length);
console.log('Total Service Data Titles:', dataTitles.length);

console.log('\n--- Services in Mapping but MISSING in Data (Returns 404) ---');
missingInData.forEach(t => {
    console.log(`[404] Title: "${t}" -> Slug: "${CANONICAL_MAP[t]}"`);
});

console.log('\n--- Services in Data but MISSING in Mapping (Might not rank/sitemap) ---');
missingInCanonical.forEach(t => {
    console.log(`[ORPHANED] Title: "${t}"`);
});
