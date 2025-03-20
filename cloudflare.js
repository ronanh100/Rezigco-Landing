/**
 * Cloudflare Pages Configuration Helper
 * 
 * This script helps optimize Next.js builds for Cloudflare Pages
 * by addressing common issues like bundle size limits.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to run the optimized build
function runOptimizedBuild() {
  console.log('📦 Running optimized build for Cloudflare Pages...');
  
  try {
    // Clean previous builds
    if (fs.existsSync('.next')) {
      console.log('🧹 Cleaning previous build...');
      fs.rmSync('.next', { recursive: true, force: true });
    }
    
    // Run the optimized build
    console.log('🔨 Building Next.js app with optimizations...');
    execSync('NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS="--max-old-space-size=4096" next build', { 
      stdio: 'inherit' 
    });
    
    console.log('✅ Build completed successfully!');
    
    // Check for large files that might exceed Cloudflare's limits
    checkLargeFiles();
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

// Function to check for files that might exceed Cloudflare's size limits
function checkLargeFiles() {
  console.log('🔍 Checking for large files (>20MB) that might exceed Cloudflare limits...');
  
  const MAX_SIZE = 20 * 1024 * 1024; // 20MB in bytes
  const directory = path.join(process.cwd(), '.next');
  
  if (!fs.existsSync(directory)) {
    console.log('⚠️ Build directory not found!');
    return;
  }
  
  function scanDirectory(directory) {
    const largeFiles = [];
    
    function scan(dir) {
      const files = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const file of files) {
        const filePath = path.join(dir, file.name);
        
        if (file.isDirectory()) {
          scan(filePath);
        } else {
          const stats = fs.statSync(filePath);
          if (stats.size > MAX_SIZE) {
            largeFiles.push({
              path: filePath,
              size: (stats.size / (1024 * 1024)).toFixed(2) + ' MB'
            });
          }
        }
      }
    }
    
    scan(directory);
    return largeFiles;
  }
  
  const largeFiles = scanDirectory(directory);
  
  if (largeFiles.length > 0) {
    console.log('⚠️ Found large files that might exceed Cloudflare Pages limits:');
    largeFiles.forEach(file => {
      console.log(`   - ${file.path} (${file.size})`);
    });
    console.log('\n🔧 Suggestion: These files may need further optimization or splitting.');
  } else {
    console.log('✅ No large files found that would exceed Cloudflare limits.');
  }
}

// Execute the optimized build process
runOptimizedBuild(); 