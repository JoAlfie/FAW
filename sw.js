/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-13820ceef5d0e9d9962c.js"
  },
  {
    "url": "styles.34ebabca0167113f099a.css"
  },
  {
    "url": "styles-99a8b2f7e63dcbae43cf.js"
  },
  {
    "url": "commons-5ed37bedb339929b057d.js"
  },
  {
    "url": "app-0feb87dcf5e979a0c4e2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a7388efdc62430243a75.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "442afd27bc3533530014f353c918c097"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "d274adf0f008ef152ce70a312b04b730"
  },
  {
    "url": "component---src-pages-index-js-b3ac7bfd01b2876b1b0a.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "afe1406463a0178127280b6085ae75fa"
  },
  {
    "url": "component---src-pages-shirts-js-aec65f6d54ba3c1f9b2d.js"
  },
  {
    "url": "page-data/shirts/page-data.json",
    "revision": "da6de31fc27817b5c40dad225cbbf66f"
  },
  {
    "url": "component---src-templates-shirt-js-0dc723cf9f35876ccc61.js"
  },
  {
    "url": "page-data/shirts/1/page-data.json",
    "revision": "1e4ae58c65948bb3ce282b6ab62a99b2"
  },
  {
    "url": "page-data/shirts/10/page-data.json",
    "revision": "29a1338f9269ba8bf99794b0991d6919"
  },
  {
    "url": "page-data/shirts/11/page-data.json",
    "revision": "e22ac131ca4e80b58f1640cacfd29aa3"
  },
  {
    "url": "page-data/shirts/12/page-data.json",
    "revision": "f8123e61ae467761c3e7b6b29bc4ca5f"
  },
  {
    "url": "page-data/shirts/13/page-data.json",
    "revision": "99bdeb9335357e73175d2a03567b8949"
  },
  {
    "url": "page-data/shirts/14/page-data.json",
    "revision": "af99b039591963445946763fed3169e1"
  },
  {
    "url": "page-data/shirts/15/page-data.json",
    "revision": "402de40672373199883d34732c325b41"
  },
  {
    "url": "page-data/shirts/16/page-data.json",
    "revision": "891cd530084209bdd4e6eaf268e9c327"
  },
  {
    "url": "page-data/shirts/17/page-data.json",
    "revision": "7ab75683aab7fa4ab810a3fd8b954258"
  },
  {
    "url": "page-data/shirts/18/page-data.json",
    "revision": "39aa467474d201b8d2f94b4f90f5f336"
  },
  {
    "url": "page-data/shirts/19/page-data.json",
    "revision": "0b503964012766330ad18082586a1fba"
  },
  {
    "url": "page-data/shirts/2/page-data.json",
    "revision": "4e6ee894f0196d4aac0545a3bdc0da1e"
  },
  {
    "url": "page-data/shirts/20/page-data.json",
    "revision": "0a63d4f8ed1b05b7825a7555d57f29b7"
  },
  {
    "url": "page-data/shirts/21/page-data.json",
    "revision": "8a99dddcca2c508c5e35b1037c56d63e"
  },
  {
    "url": "page-data/shirts/22/page-data.json",
    "revision": "ef1aba73c777640a2900769eede8000b"
  },
  {
    "url": "page-data/shirts/23/page-data.json",
    "revision": "4b36c1f4751c14878fcf8b1674bff064"
  },
  {
    "url": "page-data/shirts/24/page-data.json",
    "revision": "bebbfd295a7ef16536ed78655334bae0"
  },
  {
    "url": "page-data/shirts/25/page-data.json",
    "revision": "ce2567054a57339c2e4de282db20b991"
  },
  {
    "url": "page-data/shirts/26/page-data.json",
    "revision": "c308e7c6832aab423167a0cd356fa033"
  },
  {
    "url": "page-data/shirts/27/page-data.json",
    "revision": "a4600d8452f4132d1ef2c9ec3ea87dba"
  },
  {
    "url": "page-data/shirts/28/page-data.json",
    "revision": "a4d4fce7a8512dc8c97d988cb5b04dd5"
  },
  {
    "url": "page-data/shirts/29/page-data.json",
    "revision": "c20e2ca1eee512751bb78773cc8c5714"
  },
  {
    "url": "page-data/shirts/3/page-data.json",
    "revision": "571e734e73385247e90616a8a7920a13"
  },
  {
    "url": "page-data/shirts/4/page-data.json",
    "revision": "8ff5346ee77ef8b9660392679c71e0bb"
  },
  {
    "url": "page-data/shirts/5/page-data.json",
    "revision": "693b8c67977f476c95a384f3c634c74f"
  },
  {
    "url": "page-data/shirts/6/page-data.json",
    "revision": "00256359cdf7704fed414f28046a85dc"
  },
  {
    "url": "page-data/shirts/7/page-data.json",
    "revision": "5d6aa30c41e57edbfbd9b89f11424875"
  },
  {
    "url": "page-data/shirts/8/page-data.json",
    "revision": "f2ffba4e8686bf311e157e6675e73122"
  },
  {
    "url": "page-data/shirts/9/page-data.json",
    "revision": "7885dac314455b9a64bc8cdf88f70114"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "535dd19248e02683f53c542acc08f931"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.indexOf(`=`) !== -1) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-0feb87dcf5e979a0c4e2.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
