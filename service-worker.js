"use strict";var precacheConfig=[["/Sorting-Hat-Quiz/index.html","ba641cda81eac783687ed3bb0ff2a882"],["/Sorting-Hat-Quiz/static/css/main.eb1c8ff4.css","646e884eb4efee778bd81be50b33b886"],["/Sorting-Hat-Quiz/static/js/main.63b759d6.js","a5a32b942f0aea70f05b881bdefe315c"],["/Sorting-Hat-Quiz/static/media/class.582dcdd8.gif","582dcdd8a92f3bc369b4ebd2a135d017"],["/Sorting-Hat-Quiz/static/media/deathly-hallows-2.4f7ce608.gif","4f7ce608683beb4a06bed689bdc31809"],["/Sorting-Hat-Quiz/static/media/great-hall.ece69f80.gif","ece69f80e733ba0cb8a5386251426586"],["/Sorting-Hat-Quiz/static/media/gryffindor.6c40a225.gif","6c40a2257d32852f32507ad1611ebef3"],["/Sorting-Hat-Quiz/static/media/hogwarts-crest.112a83c0.png","112a83c016bc74866fee9c8da9a2e435"],["/Sorting-Hat-Quiz/static/media/hufflepuff.3cc719a1.gif","3cc719a19977d9d00f53e791fb512535"],["/Sorting-Hat-Quiz/static/media/pet.1e854c2c.gif","1e854c2c6725ee9603359f65ad0afc8c"],["/Sorting-Hat-Quiz/static/media/quidditch.6c1caf55.gif","6c1caf550f3dc40ea725910f8aa3b4e9"],["/Sorting-Hat-Quiz/static/media/ravenclaw.153e3aea.gif","153e3aea900522bea51b37a1bc732586"],["/Sorting-Hat-Quiz/static/media/slytherin.00ae353b.gif","00ae353b6c9e170c635ef041b805b150"],["/Sorting-Hat-Quiz/static/media/sorting-hat.42ccf75e.gif","42ccf75ea20859c1ce842e722721e5d3"],["/Sorting-Hat-Quiz/static/media/wand.c450cde5.gif","c450cde5fd4f2f21a338644388930439"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/Sorting-Hat-Quiz/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});