import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

/**
 * The DEBUG flag will do two things:
 * 1. We will skip caching on the edge, making it easier to debug
 * 2. We will return more detailed error messages
 */
const DEBUG = false

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        }),
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

async function handleEvent(event) {
  const url = new URL(event.request.url)
  let options = {}

  try {
    if (DEBUG) {
      options.cacheControl = {
        bypassCache: true,
      }
    }

    // SPA fallback
    // If the request is for a page (not a file with extension), serve index.html
    if (!url.pathname.includes('.')) {
      options.mapRequestToAsset = req => {
        const url = new URL(req.url)
        return new Request(`${url.origin}/index.html`, req)
      }
    }

    const page = await getAssetFromKV(event, options)

    // Allow headers to be altered
    const response = new Response(page.body, page)

    response.headers.set('X-XSS-Protection', '1; mode=block')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

    // Cache static assets aggressively
    if (url.pathname.includes('/_next/static') || url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg)$/)) {
      response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    }

    return response
  } catch (e) {
    // If an error is thrown, serve index.html
    if (!DEBUG) {
      try {
        const notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/index.html`, req),
        })

        return new Response(notFoundResponse.body, {
          ...notFoundResponse,
          status: 200,
        })
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
} 