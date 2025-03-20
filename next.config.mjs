/**
 * Simplified Next.js configuration for Cloudflare Pages
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  webpack: (config, { isServer }) => {
    // Delete the webpack cache files
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          commons: {
            name: 'commons',
            minChunks: 3,
            priority: 20,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            name(module) {
              const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
              if (!match) return 'lib';
              
              const packageName = match[1];
              return `lib.${packageName.replace('@', '')}`;
            },
          },
        },
      };
    }

    return config;
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
};

export default nextConfig; 