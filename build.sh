#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting Cloudflare Pages optimized build..."

# Clean any previous builds
echo "🧹 Cleaning previous builds..."
rm -rf .next out

# Build the Next.js app
echo "🔨 Building Next.js app..."
NODE_ENV=production npx next build

# Delete all cache files
echo "🗑️ Removing cache files..."
rm -rf .next/cache
find .next -name "*.pack" -delete 2>/dev/null || true

echo "✓ Build completed successfully!"

# List sizes of all files in .next
echo "📊 Checking for any remaining large files..."
find .next -type f -size +10M | sort -n

echo "🎉 Deploy build is ready!" 