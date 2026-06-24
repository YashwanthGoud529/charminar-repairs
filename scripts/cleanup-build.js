const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

let filesDeleted = 0;
let dirsDeleted = 0;

function cleanDirectory(dir) {
  if (!fs.existsSync(dir)) return;

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    
    // Check if the path exists (it might have been deleted as a parent directory)
    if (!fs.existsSync(fullPath)) continue;
    
    try {
      const stat = fs.statSync(fullPath);

      // Skip the _next folder completely to preserve essential JS/CSS bundles
      if (stat.isDirectory() && item === '_next') {
        continue;
      }

      if (stat.isDirectory()) {
        // If the directory starts with __next, delete it recursively
        if (item.startsWith('__next')) {
          fs.rmSync(fullPath, { recursive: true, force: true });
          dirsDeleted++;
        } else {
          // Recursively clean subdirectory
          cleanDirectory(fullPath);
        }
      } else {
        // Delete if it ends with .txt or starts with __next
        if (item.endsWith('.txt') || item.startsWith('__next')) {
          fs.unlinkSync(fullPath);
          filesDeleted++;
        }
      }
    } catch (err) {
      console.warn(`Warning: Could not process ${fullPath}: ${err.message}`);
    }
  }
}

console.log('Starting build post-processing cleanup...');
if (fs.existsSync(outDir)) {
  cleanDirectory(outDir);
  console.log(`Build cleanup complete! Successfully removed ${filesDeleted} temporary .txt files and ${dirsDeleted} metadata folders.`);
} else {
  console.log('Error: "out/" directory does not exist. Make sure next build completed successfully.');
}
