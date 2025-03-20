/** @type {import('next').NextConfig} */

// Add bundle analyzer support
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config) => config;

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  // Configure images for static optimization
  images: {
    unoptimized: true, // For Cloudflare Pages compatibility
    domains: ['localhost'],
    remotePatterns: [],
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Top-level output file tracing excludes
  outputFileTracingExcludes: {
    '*': [
      'node_modules/@swc/core-linux-x64-gnu',
      'node_modules/@swc/core-linux-x64-musl',
      'node_modules/@esbuild/darwin-*',
      'node_modules/@esbuild/linux-*',
      'node_modules/@esbuild/win32-*',
      'node_modules/typescript',
      'node_modules/prettier',
      '**/*.map', // Exclude all sourcemaps
      '.git/**',
    ],
  },
  experimental: {
    // Improve static optimization
    optimizeCss: true,
    // Enable aggressive minification
    optimizePackageImports: ['react-icons', '@fortawesome/fontawesome-svg-core'],
  },
  // Webpack configuration to reduce bundle size
  webpack: (config, { dev, isServer }) => {
    // Production optimizations only
    if (!dev) {
      // Enable tree shaking for all modules
      config.optimization.usedExports = true;
      
      // Minimize all JavaScript
      config.optimization.minimize = true;
      
      // Configure the Terser plugin for better minification
      config.optimization.minimizer = config.optimization.minimizer.map(minimizer => {
        if (minimizer.constructor.name === 'TerserPlugin') {
          minimizer.options.terserOptions = {
            ...minimizer.options.terserOptions,
            compress: {
              drop_console: true,
              dead_code: true,
              drop_debugger: true,
              keep_infinity: true,
              passes: 2,
            },
            output: {
              comments: false,
            },
            mangle: true,
          };
        }
        return minimizer;
      });
      
      // Add Font Awesome specific optimizations to only include used icons
      if (!isServer) {
        config.resolve.alias = {
          ...config.resolve.alias,
          '@fortawesome/fontawesome-svg-core$': '@fortawesome/fontawesome-svg-core/index.js',
          '@fortawesome/free-solid-svg-icons$': '@fortawesome/free-solid-svg-icons/index.js',
          '@fortawesome/free-brands-svg-icons$': '@fortawesome/free-brands-svg-icons/index.js'
        };
      }
      
      // Split chunks more aggressively to avoid large files
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 30,
        minSize: 20000,
        maxSize: 24000000, // Stay under 25MB limit
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
            name: 'vendor',
          },
          // Separate Font Awesome into its own chunk
          fontawesome: {
            test: /[\\/]node_modules[\\/]@fortawesome/,
            name: 'vendor.fontawesome',
            priority: 20,
            reuseExistingChunk: true,
          },
          // Separate React Icons into its own chunk
          reactIcons: {
            test: /[\\/]node_modules[\\/]react-icons/,
            name: 'vendor.reacticons',
            priority: 20,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      };
    }

    return config;
  },
  // Disable sourcemap generation in production
  productionBrowserSourceMaps: false,
};

module.exports = withBundleAnalyzer(nextConfig); 