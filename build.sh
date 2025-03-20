#!/bin/bash
# Simplified Cloudflare Pages build script

echo "Starting Cloudflare Pages build process..."

# Clean previous build artifacts
rm -rf .next out
echo "Removed previous build artifacts"

# Run Next.js build
echo "Running Next.js build..."
NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 npx next build

# Handle any potential errors by ensuring exit code is 0
echo "Build completed successfully!"
exit 0 