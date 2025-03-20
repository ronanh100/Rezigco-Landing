#!/bin/bash
# Cloudflare Pages build script

echo "Starting Cloudflare Pages build process..."

# Clean previous build artifacts
rm -rf .next out
echo "Removed previous build artifacts"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm ci
fi

# Run Next.js build
echo "Running Next.js build..."
npx next build

# Handle cache directories safely
rm -rf .next/cache 2>/dev/null || true
echo "Removed cache directories"

# Generate static export
echo "Generating static export..."
npx next export

# Check for large files
echo "Checking for large files..."
find out -type f -size +20M | while read file; do
  echo "Warning: Large file detected: $file"
done

# Check if build was successful
if [ -d "out" ] && [ -f "out/index.html" ]; then
  echo "Build completed successfully!"
  exit 0
else
  echo "Build failed: output directory is missing or incomplete"
  exit 1
fi 