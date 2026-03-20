
const fs = require('fs');
const content = fs.readFileSync('c:\\Users\\Yashwanth.DESKTOP-5LCJF4Q\\Downloads\\public_html\\service-areas.html', 'utf8');

const regex = /<span class="elementor-icon-list-text">(.*?)<\/span>/g;
let matches;
const locations = new Set();
while ((matches = regex.exec(content)) !== null) {
    let loc = matches[1].replace(/&nbsp;/g, ' ').trim();
    if (loc && !loc.includes('8008615049') && !loc.includes('7286937941') && !loc.includes('Hyderabad') && !loc.includes('Secunderabad') && !loc.includes('Medchal')) {
        locations.add(loc);
    }
}

console.log(JSON.stringify(Array.from(locations), null, 2));
