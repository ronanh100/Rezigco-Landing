// This file indicates to Cloudflare that this is a Pages application
// No custom worker logic needed as we're using Next.js
export default {
  fetch() {
    // Let Next.js handle routing
    return new Response(null, { status: 404 });
  }
}; 