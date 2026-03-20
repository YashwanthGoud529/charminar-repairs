const fs = require('fs');
const path = require('path');

const publicDirs = [
    path.join(__dirname, '../public/assets/downloads'),
    path.join(__dirname, '../public/wp-content/uploads')
];

function getAllImages(dirs, fileList = []) {
    for (const dir of dirs) {
        if (!fs.existsSync(dir)) continue;
        const files = fs.readdirSync(dir);
        for (const file of files) {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) {
                getAllImages([filePath], fileList);
            } else if (/\.(png|jpg|jpeg|gif|svg|webp)$/i.test(file)) {
                // Normalize path for comparison: e.g. /wp-content/uploads/...
                const relativePath = filePath.split('public')[1].replace(/\\/g, '/');
                fileList.push({ absolute: filePath, relative: relativePath });
            }
        }
    }
    return fileList;
}

function walkSrc(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walkSrc(filePath, fileList);
        } else if (/\.(js|jsx|css)$/.test(file)) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const srcDir = path.join(__dirname, '../src');
const allImages = getAllImages(publicDirs);
const srcFiles = walkSrc(srcDir);

console.log(`Found ${allImages.length} images in public directories.`);
console.log(`Scanning ${srcFiles.length} source files...`);

let unusedCount = 0;

for (const image of allImages) {
    let isUsed = false;
    const searchString = image.relative; // e.g. /wp-content/uploads/file.png
    const fileName = path.basename(image.relative); // e.g. file.png

    for (const file of srcFiles) {
        const content = fs.readFileSync(file, 'utf8');
        // Check if the exact relative path or just the filename is used
        if (content.includes(searchString) || content.includes(fileName)) {
            isUsed = true;
            break;
        }
    }

    if (!isUsed) {
        console.log(`Unused: ${image.relative} - DELETING`);
        fs.unlinkSync(image.absolute);
        unusedCount++;
    }
}

console.log(`Deleted ${unusedCount} unused images.`);
