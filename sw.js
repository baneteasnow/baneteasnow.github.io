// Next52books Service Worker
// Network First + Offline Reading

const CACHE_NAME = "next52books-v2"
const OLD_CACHE_NAME = "pwabuilder-offline"

const HOME_PAGE = "/"
const POSTS_PAGE = "/posts.html"

const PRECACHE_URLS = [HOME_PAGE, POSTS_PAGE]

// INSTALL
self.addEventListener("install", (event) => {
	event.waitUntil(
		(async () => {
			const cache = await caches.open(CACHE_NAME)

			// Cache the homepage and posts page.
			await cache.addAll(PRECACHE_URLS)

			// Activate the new service worker.
			await self.skipWaiting()
		})(),
	)
})

// ACTIVATE
self.addEventListener("activate", (event) => {
	event.waitUntil(
		(async () => {
			const cacheNames = await caches.keys()

			await Promise.all(
				cacheNames
					.filter(
						(name) =>
							name === OLD_CACHE_NAME ||
							(name.startsWith("next52books-") && name !== CACHE_NAME),
					)
					.map((name) => caches.delete(name)),
			)

			await self.clients.claim()
		})(),
	)
})

// FETCH
self.addEventListener("fetch", (event) => {
	const request = event.request

	if (request.method !== "GET") return

	const url = new URL(request.url)

	// Only handle resources from Next52books.
	if (url.origin !== self.location.origin) return

	// Do not cache the service worker itself.
	if (url.pathname === "/sw.js") return

	event.respondWith(
		(async () => {
			const cache = await caches.open(CACHE_NAME)

			try {
				const response = await fetch(request)

				// Cache successful responses.
				if (response.ok && response.type === "basic") {
					event.waitUntil(cache.put(request, response.clone()).catch(() => {}))
				}

				return response
			} catch (error) {
				// Try to find the requested resource in the cache.
				const cachedResponse = await cache.match(request, {
					ignoreSearch: request.mode === "navigate",
				})

				if (cachedResponse) {
					return cachedResponse
				}

				// Show an offline message for uncached pages.
				if (request.mode === "navigate") {
					return new Response(
						`<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, initial-scale=1">
            <title>Offline | Next52books</title>
            <style>
              body {
                margin: 0;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #E8E4DF;
                color: #222;
                font-family: Georgia, serif;
                text-align: center;
              }

              main {
                padding: 32px;
                max-width: 420px;
              }

              h1 {
                font-size: 42px;
                font-weight: normal;
                margin-bottom: 20px;
              }

              p {
                font-size: 17px;
                line-height: 1.7;
              }

              a {
                color: #963F50;
              }
            </style>
          </head>
          <body>
            <main>
              <h1>n52b</h1>
              <p>
                You're currently offline.
                This page hasn't been saved for offline reading yet.
              </p>
              <p>
                Connect to the internet and visit this page
                to make it available offline.
              </p>
              <p><a href="/">Back to Home</a></p>
            </main>
          </body>
          </html>`,
						{
							status: 200,
							headers: {
								"Content-Type": "text/html; charset=utf-8",
							},
						},
					)
				}

				// Avoid an unhandled rejection for other resources.
				return Response.error()
			}
		})(),
	)
})
