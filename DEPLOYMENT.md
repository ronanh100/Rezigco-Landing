# Rezigco Landing Page Deployment Guide

This guide outlines how to deploy the Rezigco Landing Page to Cloudflare Pages.

## Configuration Files

The deployment uses these key configuration files:

1. **build.sh** - Main build script that runs the Next.js build
2. **.cloudflare/pages.toml** - Cloudflare Pages configuration
3. **wrangler.toml** - Alternative configuration if pages.toml is not detected

## Deployment Process

The deployment flow works as follows:

1. Cloudflare Pages clones the repository
2. The build script (`build.sh`) runs to:
   - Clean previous builds
   - Build the Next.js app with static export
   - Handle any cache files that might cause issues
3. The output in the `out` directory is deployed to Cloudflare Pages

## Common Issues and Solutions

### Node.js Version Issues

If you encounter Node.js version errors:

- The project is configured to work with Node.js version 20.0.0 or later
- Cloudflare Pages currently uses Node.js 20.0.0 by default
- Node version is specified in:
  - `.node-version`
  - `.nvmrc`
  - `package.json` engines field

### TOML Parsing Errors

If you encounter TOML parsing errors:

- Ensure there are no duplicate keys in the `wrangler.toml` file
- Make sure the format is consistent across the file
- The `.cloudflare/pages.toml` configuration will be prioritized

### Build Command Failures

If the build command fails:

- Check the build script for any issues that might cause non-zero exit codes
- Ensure all commands have proper error handling
- Verify the `command` parameter in the configuration files points to the correct build script

## Manual Deployment Steps

To deploy manually:

1. Push changes to the main branch
2. Cloudflare Pages will automatically detect the changes and start the build
3. Monitor the build logs for any errors
4. If successful, the site will be available at your Cloudflare Pages URL

## Testing Locally

To test the build process locally:

```bash
# Run the build script
./build.sh

# Check the output directory
ls -la out

# Ensure no files exceed Cloudflare's size limits
find out -type f -size +5M
```

## Environment Variables

The following environment variables are set during build:

- `NODE_ENV=production` - Enables production optimizations
- `NEXT_TELEMETRY_DISABLED=1` - Disables Next.js telemetry 