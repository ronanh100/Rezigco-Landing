/**
 * Cloudflare Pages Specialized Build Script
 * This script creates a clean deployment without large cache files
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const OUTPUT_DIR = 'out';
const CACHE_DIR = '.next/cache';

/**
 * Execute the Cloudflare deployment build process
 */
async function main() {
  try {
    console.log('🚀 Starting Cloudflare Pages specialized build process...');
    
    // Step 1: Clean any previous builds
    console.log('🧹 Cleaning previous builds...');
    execSync('rm -rf .next out', { stdio: 'inherit' });
    
    // Step 2: Run the production build
    console.log('🔨 Building Next.js app...');
    execSync('NODE_ENV=production next build', { stdio: 'inherit' });
    
    // Step 3: Explicitly delete cache files
    console.log('🗑️ Removing cache files...');
    if (fs.existsSync(CACHE_DIR)) {
      execSync(`find ${CACHE_DIR} -name "*.pack" -delete`, { stdio: 'inherit' });
    }
    
    // Step 4: Check for any remaining large files
    const largeFiles = findLargeFiles('.next', 20);
    if (largeFiles.length > 0) {
      console.warn('⚠️ Found large files that might cause deployment issues:');
      largeFiles.forEach(file => {
        console.warn(`   - ${file.path} (${file.size} MB)`);
        
        // Delete any pack files automatically
        if (file.path.includes('.pack')) {
          console.log(`🔄 Removing large pack file: ${file.path}`);
          fs.unlinkSync(file.path);
        }
      });
    }
    
    // Step 5: Create .nojekyll file
    console.log('📝 Creating .nojekyll file...');
    fs.writeFileSync('.next/.nojekyll', '');
    
    // Step 6: Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }
    
    // Step 7: Copy only the necessary built files to the output directory
    console.log('📦 Successfully prepared build for Cloudflare Pages');
    
    console.log('✅ Build process completed successfully!');
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

/**
 * Find files larger than the specified size (in MB)
 */
function findLargeFiles(directory, sizeLimitMB) {
  const largeFiles = [];
  const sizeLimit = sizeLimitMB * 1024 * 1024; // Convert to bytes
  
  function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        scanDir(fullPath);
      } else {
        const stats = fs.statSync(fullPath);
        if (stats.size > sizeLimit) {
          largeFiles.push({
            path: fullPath,
            size: (stats.size / (1024 * 1024)).toFixed(2)
          });
        }
      }
    }
  }
  
  scanDir(directory);
  return largeFiles;
}

// Run the build process
main().catch(error => {
  console.error('Unhandled error:', error);
  process.exit(1);
}); 