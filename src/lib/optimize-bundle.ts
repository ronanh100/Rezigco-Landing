/**
 * Bundle optimization utilities
 * Helps reduce initial JavaScript payload by lazily importing heavy modules
 */

// Create a map to cache imported modules
const importCache: Record<string, Promise<any>> = {};

/**
 * Lazily import a module only when needed
 * This helps reduce the initial bundle size
 */
export const lazyImport = <T extends object>(
  modulePath: string,
  namedImport?: string
): Promise<T> => {
  const cacheKey = `${modulePath}:${namedImport || 'default'}`;
  
  if (!importCache[cacheKey]) {
    importCache[cacheKey] = import(modulePath).then(module => {
      return namedImport ? module[namedImport] : module.default;
    });
  }
  
  return importCache[cacheKey];
};

/**
 * Prepare routes for dynamic imports
 * Map component names to their paths for dynamic loading
 */
export const COMPONENT_PATHS: Record<string, string> = {
  // Core components
  'Features': '@/components/Features',
  'RotatingWords': '@/components/RotatingWords',
  'Setup': '@/components/Setup',
  'AIIntelligence': '@/components/AIIntelligence',
  'ChatEngagerBenefits': '@/components/ChatEngagerBenefits',
  'InboundAutomatorBenefits': '@/components/InboundAutomatorBenefits',
  'DataOrganizerBenefits': '@/components/DataOrganizerBenefits',
  'InsightsBenefits': '@/components/InsightsBenefits',
  'ZiggySetupTimeline': '@/components/ZiggySetupTimeline',
  'GetDemo': '@/components/GetDemo',
  'Footer': '@/components/Footer',
  
  // UI components
  'ShimmerButton': '@/registry/magicui/shimmer-button',
  'FlipWords': '@/components/ui/flip-words',
  'AnimatedList': '@/registry/magicui/animated-list',
  'WordRotate': '@/registry/magicui/word-rotate',
  'OrbitingCircles': '@/registry/magicui/orbiting-circles',
};

/**
 * Load a component dynamically by name
 * Falls back to import directly from path if component name not found
 */
export const loadComponent = (componentName: string): Promise<any> => {
  const path = COMPONENT_PATHS[componentName] || componentName;
  return lazyImport(path);
};

/**
 * Defer execution until browser is idle
 * Helps prioritize critical rendering tasks
 */
export const runWhenIdle = (callback: () => void, timeout = 2000): void => {
  if (typeof window === 'undefined') return;
  
  if ('requestIdleCallback' in window) {
    // @ts-ignore - requestIdleCallback is not in the TS types
    window.requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, timeout);
  }
};

/**
 * Setup intersection observer to load components only when they come into view
 * This helps reduce the initial JS bundle size and improves page load performance
 */
export const setupLazyLoadingObserver = (): void => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
  
  const options = {
    root: null,
    rootMargin: '200px', // Start loading when component is 200px from viewport
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const componentName = entry.target.getAttribute('data-component');
        if (componentName && COMPONENT_PATHS[componentName]) {
          loadComponent(componentName).catch(() => {
            // Silent failure for prefetching
          });
        }
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  // Find all components that should be lazy loaded
  document.querySelectorAll('[data-component]').forEach(element => {
    observer.observe(element);
  });
};

// Auto-initialize when imported on client-side
if (typeof window !== 'undefined') {
  runWhenIdle(() => {
    setupLazyLoadingObserver();
  });
} 