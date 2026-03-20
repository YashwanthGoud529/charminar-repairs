const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const srcDir = path.join(__dirname, '../src');
const publicAssetsDir = path.join(__dirname, '../public/assets/downloads');

if (!fs.existsSync(publicAssetsDir)) {
    fs.mkdirSync(publicAssetsDir, { recursive: true });
}

function walk(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walk(filePath, fileList);
        } else if (/\.(js|jsx|css)$/.test(file)) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const urlRegex = /https:\/\/(images\.unsplash\.com|img\.icons8\.com|api\.iconify\.design)[^"'`\s\)]+/g;

function downloadFile(url, dest) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(dest)) {
            resolve();
            return;
        }
        
        let protocol = url.startsWith('https') ? https : require('http');
        
        const request = protocol.get(url, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                downloadFile(response.headers.location, dest).then(resolve).catch(reject);
                return;
            }
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
                return;
            }
            
            const file = fs.createWriteStream(dest);
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function processFiles() {
    console.log("Finding files...");
    const files = walk(srcDir);
    const urlMap = new Map();

    console.log("Scanning files for URLs...");
    for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        let matches = content.match(urlRegex);
        if (matches) {
            for (let match of matches) {
                // Remove trailing quotes, etc. if any stuck
                match = match.replace(/["';\)]$/, '');
                if (!urlMap.has(match)) {
                    // Generate a Safe Filename
                    const extMatch = match.match(/\.(png|jpg|jpeg|svg|gif|webp)/i);
                    let ext = extMatch ? extMatch[1] : 'jpg'; 
                    // Unsplash images usually jpg
                    if (match.includes('unsplash.com')) ext = 'jpg';
                    if (match.includes('iconify.design')) ext = 'svg';

                    const hash = crypto.createHash('md5').update(match).digest('hex').substring(0, 8);
                    const safeName = match.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 50) + '_' + hash + '.' + ext;
                    
                    urlMap.set(match, safeName);
                }
            }
        }
    }

    console.log(`Found ${urlMap.size} unique URLs.`);

    // Download maps
    for (const [url, filename] of urlMap.entries()) {
        const dest = path.join(publicAssetsDir, filename);
        console.log(`Downloading ${url} -> ${filename}`);
        try {
            await downloadFile(url, dest);
            console.log(`Downloaded ${filename}`);
        } catch (err) {
            console.error(`Error downloading ${url}: ${err.message}`);
        }
    }

    // Replace in files
    console.log("Replacing URLs in files...");
    let replaceCount = 0;
    for (const file of files) {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;
        
        for (const [url, filename] of urlMap.entries()) {
            if (content.includes(url)) {
                // In some cases we might want to replace accurately.
                const localPath = `/assets/downloads/${filename}`;
                content = content.split(url).join(localPath);
                changed = true;
            }
        }
        
        if (changed) {
            fs.writeFileSync(file, content, 'utf8');
            replaceCount++;
        }
    }
    
    console.log(`Replaced URLs in ${replaceCount} files.`);
}

processFiles().then(() => {
    console.log("Done extracting and downloading external images.");
}).catch(console.error);
