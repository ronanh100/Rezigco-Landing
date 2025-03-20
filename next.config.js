/** @type {import('next').NextConfig} */

// Add bundle analyzer support
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({ enabled: true })
  : (config) => config;

// Add crypto for hashing in chunk naming
const crypto = require('crypto');

// Next.js config with optimization focus
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
      'node_modules/@swc/core-*',
      'node_modules/@esbuild/*',
      'node_modules/typescript',
      'node_modules/prettier',
      'node_modules/eslint*',
      '**/*.map', // Exclude all sourcemaps
      '.git/**',
      '**/node_modules/framer-motion',
      '**/node_modules/motion',
      '**/node_modules/@fortawesome/**',
      '**/node_modules/react-icons/**'
    ],
  },
  // Optimize output files for Cloudflare Pages
  compress: true, // Enable Next.js built-in compression
  poweredByHeader: false, // Remove X-Powered-By header
  generateEtags: true, // Generate ETags for improved caching
  
  experimental: {
    // Improve static optimization
    optimizeCss: true,
    // Enable aggressive minification
    optimizePackageImports: [
      'react-icons', 
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      'lucide-react',
      '@tabler/icons-react',
      'motion',
      'framer-motion'
    ],
    // Minimize client reference manifest file size
    clientRouterFilter: true
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
              passes: 3,
              pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
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
          '@fortawesome/free-brands-svg-icons$': '@fortawesome/free-brands-svg-icons/index.js',
          'motion': 'motion/dist/index.js'
        };
      }
      
      // Split chunks more aggressively to avoid large files
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 5000,  // Smaller chunks
        maxSize: 12000000, // Smaller max size - well under Cloudflare's 25MB limit
        cacheGroups: {
          framework: {
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            name: 'framework',
            priority: 40,
            reuseExistingChunk: true,
          },
          framerMotion: {
            test: /[\\/]node_modules[\\/](framer-motion|motion|popmotion|style-value-types)[\\/]/,
            name: 'motion.core',
            priority: 35,
            reuseExistingChunk: true,
          },
          fontawesome: {
            test: /[\\/]node_modules[\\/]@fortawesome/,
            name(module, chunks) {
              // Split fontawesome into smaller chunks
              const path = module.context.replace(/\\/g, '/');
              if (path.includes('/free-brands-svg-icons/')) {
                return 'fa.brands';
              } else if (path.includes('/free-solid-svg-icons/')) {
                return 'fa.solid';
              }
              return 'fa.core';
            },
            priority: 30,
            reuseExistingChunk: true,
          },
          reactIcons: {
            test: /[\\/]node_modules[\\/]react-icons/,
            name(module, chunks) {
              // Granular chunking for react-icons
              const iconSet = module.context.match(/react-icons\/(.*?)\//);
              if (iconSet && iconSet[1]) {
                return `icons.${iconSet[1]}`;
              }
              return 'icons.core';
            },
            priority: 25,
            reuseExistingChunk: true,
          },
          tabler: {
            test: /[\\/]node_modules[\\/]@tabler/,
            name: 'vendor.tabler',
            priority: 20,
            reuseExistingChunk: true,
          },
          lucide: {
            test: /[\\/]node_modules[\\/]lucide-react/,
            name: 'vendor.lucide',
            priority: 15,
            reuseExistingChunk: true,
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name(module, chunks) {
              // Use a hash of the module path to create smaller chunks
              const hash = crypto.createHash('md5');
              const path = module.context.replace(/\\/g, '/');
              hash.update(path);
              return `commons.${hash.digest('hex').substring(0, 8)}`;
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
            minSize: 5000,
          },
        },
      };
      
      // Mark packages as having no side effects
      config.module.rules.push({
        test: /\.m?js$/,
        include: [
          /node_modules\/motion/,
          /node_modules\/framer-motion/,
          /node_modules\/@fortawesome/,
          /node_modules\/react-icons/,
          /node_modules\/@tabler/,
          /node_modules\/lucide-react/
        ],
        sideEffects: false,
      });
    }

    return config;
  },
  // Disable sourcemap generation in production
  productionBrowserSourceMaps: false,
};

module.exports = withBundleAnalyzer(nextConfig); 