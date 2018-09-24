const staticAssets = [
	"./",
	"./src/stylesheets/style.css",
	"./src/stylesheets/bulma.min.css",
	"./src/stylesheets/all.css",
	"./src/webfonts/fa-brands-400.woff2",
	"./src/webfonts/fa-solid-900.woff2",
	"./src/assets/me.JPG",
	"./src/assets/Certificate_1.png",
	"./src/assets/Certificate_2.png",
	"./src/assets/Certificate_3.png",
	"./src/javascripts/index.js",
	"./src/javascripts/jquery-3.3.1.min.js"
];

self.addEventListener("install", async event => {
	const cache = await caches.open("static-balsu");
	cache.addAll(staticAssets);
});

self.addEventListener("fetch", event => {
	const { request } = event;
	const url = new URL(request.url);

	if (url.origin === location.origin) {
		event.respondWith(cacheData(request));
	} else {
		event.respondWith(networkFirst(request));
	}
});

async function cacheData(request) {
	const cachedResponse = await caches.match(request);
	return cachedResponse || fetch(request);
}

async function networkFirst(request) {
	const cache = await caches.open("dynamic-balsu");

	try {
		const response = await fetch(request);
		cache.put(request, response.clone());
		return response;
	} catch (error) {
		return await cache.match(request);
	}
}
