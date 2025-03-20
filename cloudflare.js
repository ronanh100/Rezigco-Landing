/**
 * Cloudflare Pages Configuration Helper
 * 
 * This script helps optimize Next.js builds for Cloudflare Pages
 * by addressing common issues like bundle size limits.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * Run an optimized build for Cloudflare Pages
 */
function runOptimizedBuild() {
  console.log('📦 Running optimized build for Cloudflare Pages...');
  
  try {
    // Clean previous build
    console.log('🧹 Cleaning previous build...');
    execSync('rm -rf .next out', { stdio: 'inherit' });
    
    // Build Next.js app with optimizations
    console.log('🔨 Building Next.js app with optimizations...');
    execSync(
      'NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS="--max-old-space-size=4096" next build',
      { stdio: 'inherit' }
    );
    
    // Remove large webpack cache files
    console.log('🧹 Removing large webpack cache files...');
    execSync('find .next/cache -name "*.pack" -delete', { stdio: 'inherit' });

    // Create an empty .nojekyll file to disable GitHub Pages Jekyll processing
    fs.writeFileSync('.next/.nojekyll', '');
    
    // Export the static site if not already exported
    console.log('📤 Exporting static site...');
    execSync('next export', { stdio: 'inherit' });
    
    // Check for large files that might exceed Cloudflare limits
    checkLargeFiles('.next', 20);
    checkLargeFiles('out', 20);
    
    console.log('✅ Build completed successfully!');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

/**
 * Check for files larger than the specified size limit (in MB)
 */
function checkLargeFiles(directory, sizeLimitMB) {
  console.log(`🔍 Checking for large files (>${sizeLimitMB}MB) that might exceed Cloudflare limits...`);
  
  const largeFiles = [];
  
  function scanDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        scanDirectory(fullPath);
      } else {
        const stats = fs.statSync(fullPath);
        const fileSizeMB = stats.size / (1024 * 1024);
        
        if (fileSizeMB > sizeLimitMB) {
          largeFiles.push({
            path: fullPath,
            size: fileSizeMB.toFixed(2)
          });
        }
      }
    }
  }
  
  try {
    if (fs.existsSync(directory)) {
      scanDirectory(directory);
    }
    
    if (largeFiles.length > 0) {
      console.warn('⚠️ Found large files that might exceed Cloudflare Pages limits:');
      largeFiles.forEach(file => {
        console.warn(`   - ${file.path} (${file.size} MB)`);
        
        // Automatically delete large *.pack files
        if (file.path.endsWith('.pack')) {
          console.log(`🗑️  Removing large pack file: ${file.path}`);
          fs.unlinkSync(file.path);
        }
      });
      console.warn('🔧 Suggestion: These files may need further optimization or splitting.');
    } else {
      console.log('✅ No large files found. Your build should deploy successfully to Cloudflare Pages!');
    }
  } catch (error) {
    console.error(`Error scanning directory ${directory}:`, error.message);
  }
}

// Run the build process
runOptimizedBuild(); 