!function(){var e={80130:function(e,t,n){"use strict";n.r(t),n.d(t,{dataServicePath:function(){return r},dataServiceEndpoint:function(){return o},audioServicePath:function(){return i},pronounceEndoint:function(){return s}});let r="/lambda",o="https://29yhyi3c8der.id.wasmer.app"+r,i="/g_translate_pronounce",s="https://pronounce.bryanjimenez6.workers.dev"+i},43398:function(e,t,n){"use strict";n.r(t),n.d(t,{IDBStores:function(){return r},IDBErrorCause:function(){return o},IDBKeys:function(){return i},openIDB:function(){return s},getIDBItem:function(){return c},addIDBItem:function(){return a},putIDBItem:function(){return u}});let r=Object.freeze({MEDIA:"media",STATE:"state",SETTINGS:"settings",WORKBOOK:"workbook"}),o=Object.freeze({NoResult:"IDBNoResults"}),i=Object.freeze({State:{EDITED:"localDataEdited"}});function s({version:e,logger:t}={}){let n=indexedDB.open("nmemonica-db",e??1),o=new Promise(e=>{n.onupgradeneeded=function(t){if(null===t.target)throw Error("onupgradeneeded failed");let n=t.target.result;if(0===t.oldVersion){let t=n.createObjectStore(r.MEDIA,{keyPath:"uid"}),o=new Promise((e,n)=>{t.transaction.oncomplete=function(){e()}}),i=n.createObjectStore(r.STATE,{keyPath:"key"}),s=new Promise((e,t)=>{i.transaction.oncomplete=function(){e()}}),c=n.createObjectStore(r.SETTINGS,{keyPath:"key"}),a=new Promise((e,t)=>{c.transaction.oncomplete=function(){e()}}),u=n.createObjectStore(r.WORKBOOK,{keyPath:"key"}),l=new Promise((e,t)=>{u.transaction.oncomplete=function(){e()}});Promise.all([o,s,a,l]).then(()=>{e({type:"upgrade",val:n})})}}}),i=new Promise((e,r)=>{n.onerror=function(){"function"==typeof t&&t("IDB.open X(",1),r()},n.onsuccess=function(n){if(null===n.target)throw Error("openIDB failed");let r=n.target.result;r.onerror=function(e){if(e.target&&"errorCode"in e.target){let{errorCode:n}=e.target;"function"==typeof t&&t("IDB Open X(",1)}},e({type:"open",val:r})}});return Promise.any([o,i]).then(e=>"upgrade"===e.type?i.then(e=>e.val):e.val)}function c({db:e,store:t,logger:n},i){let s=r.MEDIA,c=e.transaction([t??s]),a=c.objectStore(t??s).get(i),u=new Promise((e,t)=>{a.onerror=function(){"function"==typeof n&&n("IDB.get X(",1),t()},a.onsuccess=function(){a.result?e(a.result):t(Error("No results found",{cause:{code:o.NoResult}}))}}),l=new Promise((e,t)=>{c.oncomplete=function(){e(void 0)},c.onerror=function(){t()}});return Promise.all([u,l]).then(e=>e[0])}function a({db:e,store:t},n){let o=r.MEDIA,i=e.transaction([t??o],"readwrite"),s=i.objectStore(t??o).add(n),c=new Promise((e,t)=>{s.onsuccess=function(){e(void 0)},s.onerror=function(){t()}}),a=new Promise((e,t)=>{i.oncomplete=function(){e(n)},i.onerror=function(){t()}});return Promise.all([c,a]).then(e=>e[1])}function u({db:e,store:t},n){let o=r.MEDIA,i=e.transaction([t??o],"readwrite"),s=i.objectStore(t??o).put(n),c=new Promise((e,t)=>{s.onsuccess=function(){e(void 0)},s.onerror=function(){t()}}),a=new Promise((e,t)=>{i.oncomplete=function(){e(n)},i.onerror=function(){t()}});return Promise.all([c,a]).then(e=>e[1])}},62118:function(e,t,n){"use strict";n.r(t);var r=n("22839"),o=n("43398"),i=n("40665"),s=n("57197"),c=n("80130");let a=["232.2cb14929.js","main.b1366c62.css","icon192.png","657.7a6f19e1.js","4156f5574d12ea2e130b.png","favicon.ico","802.036eb0ab.js","icon512.png","927.76cbb2c6.js","125.5d152486.js","229.f2668483.js","main.b1366c62.js","832.7ba8fd2d.css","23.07ef543e.js","index.html","331225628f00d1a9fb35.jpeg","463.dd239938.css","352.b3c756ee.js","maskable512.png","71565d048a3f03f60ac5.png","dc7b0140cb7644f73ef2.png","856.f9bd9358.js","232.2cb14929.css","11f4a4136ea351b3efb4.png","ee636d032d073f55d622.png","832.7ba8fd2d.js","192.987f35ef.css","802.036eb0ab.css","192.987f35ef.js","463.dd239938.js","manifest.webmanifest"],u=c.dataServiceEndpoint,l=c.pronounceEndoint,f=c.audioServicePath,d=c.dataServicePath,h=globalThis.self;h.addEventListener("install",function(e){h.skipWaiting();let t=b();W(r.SWMsgOutgoing.SW_GET_VERSIONS,t)}),h.addEventListener("activate",function(e){"clients"in h&&h.clients.matchAll({includeUncontrolled:!0}).then(function(e){let t=e.map(function(e){return e.url});console.log("[ServiceWorker] Matching clients:",t.join(", ")),A("Matching clients:"+t.join(", "),i.DebugLevel.DEBUG)}),e.waitUntil(Promise.all([function(){return caches.keys().then(e=>Promise.all(e.reduce((e,t)=>[p,g,S].includes(t)?e:(console.log("[ServiceWorker] Deleting cache:",t),[...e,caches.delete(t)]),[])))}(),function(){return caches.open(g).then(e=>e.keys().then(t=>Promise.all(t.reduce((t,n)=>{let r=n.url.split("/").pop();return r&&r.indexOf(".")>-1&&!a.includes(r)?(console.log("[ServiceWorker] Removed static asset: "+r),[...t,e.delete(n.url)]):t},[]))))}()]).then(function(){return console.log("[ServiceWorker] Claiming clients"),A("Claiming clients",i.DebugLevel.DEBUG),h.clients.claim()}).then(()=>{let e=R().then(e=>{if(!e){var t;return t=u,caches.open(p).then(e=>e.add(t+E).then(()=>Promise.all(v.map(e=>{let n=t+e;return w(new Request(n)).then(e=>_(new Request(n),e))})))).catch(()=>{console.log("[ServiceWorker] Data Prefech failed for some item")})}}),t=function(){let e=globalThis.location.origin,t=globalThis.location.origin+"/";return caches.open(g).then(n=>n.addAll([e,t])).catch(()=>{console.log("[ServiceWorker] / Prefectch failed for some item")})}(),n=caches.open(g).then(e=>e.addAll([...a])).catch(()=>{console.log("[ServiceWorker] Asset Prefectch failed for some item")});return Promise.all([e,t,n])}))}),h.addEventListener("fetch",function(e){var t,n,c;if("OPTIONS"===e.request.method){;e.respondWith((t=e.request,fetch(t)));return}if("GET"!==e.request.method)return;let a=e.request.clone(),u=e.request.url,v=u.slice(u.indexOf("/",9));switch(!0){case v.startsWith(d+E):if("no-store"===a.headers.get("Cache-Control")){;e.respondWith((n=a,fetch(n)))}e.respondWith(function(e){let t=R();return t.then(t=>{let n=caches.open(p).then(t=>t.match(e.url)).then(e=>{if(!e)throw Error("Not in cache");return e});if(t)return n;let r=fetch(e).then(t=>{let n=t.clone();if(!t.ok)throw Error("Failed to fetch");return caches.open(p).then(t=>t.put(e.url,n)),t});return Promise.any([r,n]).catch(e=>Promise.reject(e[0]))})}(a));break;case u.includes("githubusercontent")&&a.headers.has(r.SWRequestHeader.DATA_VERSION):{let t=e.request.headers.get(r.SWRequestHeader.DATA_VERSION),n=caches.open(p).then(e=>e.match(u+".v"+t)).then(e=>{if(void 0===e)throw Error(`Missing ${u+".v"+t}`);return e});e.respondWith(n);break}case a.headers.has(r.SWRequestHeader.DATA_VERSION):{let t=a.headers.get(r.SWRequestHeader.DATA_VERSION);e.respondWith(function(e,t){let n;return n=t&&"0"!==t?_(e,t):w(e).then(t=>_(e,t))}(a,t));break}case v.startsWith(f):{let t=(0,s.getParam)(u,"uid");if(!t)throw Error("Request missing uid");let n=(0,s.removeParam)(u,"uid"),r=a.url.startsWith(l)?new Request(n):a;"reload"===a.headers.get("Cache-Control")&&e.respondWith(function(e,t){if(console.log("[ServiceWorker] Overriding Asset in Cache"),!h.indexedDB)return console.log(m),A(m,i.DebugLevel.WARN),I(S,t);{A("IDB.override",i.DebugLevel.WARN);let n=fetch(t),r=(0,o.openIDB)({logger:A}),s=r.then(t=>n.then(e=>{if(!e.ok)throw A("fetch",i.DebugLevel.ERROR),Error("Network response was not OK"+(e.status?" ("+e.status+")":""));return e.blob()}).then(n=>(0,o.putIDBItem)({db:t},{uid:e,blob:n}).then(e=>D(e))));return s}}(t,r)),e.respondWith(function(e,t){if(!h.indexedDB)return console.log(m),A(m,i.DebugLevel.WARN),function(e){return caches.open(S).then(t=>t.match(e)).then(t=>t||I(S,new Request(e)))}(t.url);{let n=(0,o.openIDB)({logger:A}),r=n.then(n=>(0,o.getIDBItem)({db:n,store:o.IDBStores.MEDIA},e).then(e=>D(e)).catch(()=>(A("IDB.get [] ",i.DebugLevel.WARN),fetch(t).then(e=>{if(!e.ok)throw A("fetch",i.DebugLevel.ERROR),Error("Network response was not OK"+(e.status?" ("+e.status+")":""));return e.blob()}).then(t=>(0,o.addIDBItem)({db:n},{uid:e,blob:t}).then(e=>D(e))))));return r}}(t,r));break}case u.startsWith(globalThis.location.origin)&&!u.endsWith(".hot-update.json")&&!u.includes("/#/"):e.respondWith(function(e){return caches.open(g).then(t=>t.match(e)).then(t=>t||I(g,new Request(e)))}(u));break;default:;e.respondWith((c=e.request,fetch(c)))}}),h.addEventListener("message",function(e){let t=e.data;if(t.type===r.SWMsgOutgoing.DATASET_JSON_SAVE&&t.type===r.SWMsgOutgoing.DATASET_JSON_SAVE){let n=caches.open(p).then(e=>{let n=new Blob([JSON.stringify(t.dataset)],{type:"application/json; charset=utf-8"}),r=new Response(n);return e.put(t.url,r)});e.waitUntil(n);return}if(t.type===r.SWMsgOutgoing.SW_REFRESH_HARD&&t.type===r.SWMsgOutgoing.SW_REFRESH_HARD){fetch(globalThis.location.origin+"/robots.txt").then(e=>{if(e.status<400)return caches.delete(g).then(()=>{h.registration.unregister(),W(r.SWMsgOutgoing.SW_REFRESH_HARD,{msg:"Hard Refresh",status:e.status})});throw Error("Service Unavailable")}).catch(e=>{W(r.SWMsgOutgoing.SW_REFRESH_HARD,{msg:"Hard Refresh",error:e})});return}if(t.type===r.SWMsgOutgoing.SW_GET_VERSIONS&&t.type===r.SWMsgOutgoing.SW_GET_VERSIONS){let e=b();W(r.SWMsgOutgoing.SW_GET_VERSIONS,e);return}A("Unrecognized message",i.DebugLevel.ERROR)}),h.addEventListener("push",function(e){let t=e.data?.json();if(!t){A("Bad message",i.DebugLevel.ERROR);return}if("push-subscription"===t.body.type){let n=h.registration.showNotification(t.title,{body:t.body.msg,icon:"",tag:t.tag});e.waitUntil(n);return}if("push-data-update"===t.body.type){var n,r,o;let{name:s,hash:c,url:a}=t.body,u=s.toLowerCase();let l=(n=a,r=u,o=c,caches.open(p).then(e=>{let t=`${n}/${r}.json.v${o}`;return A("Validate override url matches push url",i.DebugLevel.ERROR),fetch(`${n}/${r}.json`,{credentials:"include"}).then(i=>e.match(n+E).then(e=>{if(!e)throw Error("Missing cache.json");return e.json()}).then(e=>(e[r]=o,e)).then(r=>Promise.all([function(e,t,n,r="application/json",o=200,i="OK"){let s=new Blob([JSON.stringify(n)],{type:r}),c=new Response(s,{status:o,statusText:i});return caches.open(e).then(e=>e.put(t,c).then(()=>e.match(t)))}(p,n+E,r),e.put(t,i.clone())])))})),f=l.then(()=>{let e=h.registration.showNotification(t.title,{body:`${s}.json.v${c}`,icon:"",tag:t.tag});return e});e.waitUntil(f)}});let g="nmemonica-static",p="nmemonica-data",S="nmemonica-media",m="Your browser doesn't support a stable version of IndexedDB.",E="/cache.json",v=["/phrases.json","/vocabulary.json","/opposites.json","/kanji.json"];function b(){return{swVersion:"f769e8c2",jsVersion:"b1366c62",bundleVersion:"3b586a4c"}}function R(){let e=(0,o.openIDB)({logger:A}).then(e=>(0,o.getIDBItem)({db:e,store:o.IDBStores.STATE},o.IDBKeys.State.EDITED).then(e=>e.value).catch(()=>!1));return e}function O(e){return fetch(e)}function D(e){return new Response(e.blob,{status:200,statusText:"OK"})}function W(e,t){"clients"in h&&h.clients.matchAll({includeUncontrolled:!0,type:"window"}).then(n=>{if(n&&n.length)return n[0].postMessage({type:e,...t})})}function A(e,t){"clients"in h&&h.clients.matchAll({includeUncontrolled:!0,type:"window"}).then(n=>{if(n&&n.length)return n[0].postMessage({type:r.SWMsgIncoming.SERVICE_WORKER_LOGGER_MSG,msg:e,lvl:t})}).catch(e=>{console.log("[ServiceWorker] clientLogger failed"),console.log(e)})}function w(e){let t=e.url,n=t.slice(0,t.indexOf("/",8)),r=t.split("/").pop()||t,[o]=r.split(".json");return caches.open(p).then(e=>e.match(n+d+E).then(e=>e?Promise.resolve(e):I(p,new Request(n+d+E,{credentials:"include"})))).then(e=>e&&e.json()).then(e=>e[o])}function _(e,t){let n=e.url+".v"+t;return caches.open(p).then(t=>t.match(n).then(r=>r||fetch(e).then(e=>(e.status<400&&t.put(n,e.clone()),e))))}function I(e,t){return caches.open(e).then(e=>fetch(t).then(n=>{if(!n.ok)throw Error("Could not fetch");return e.put(t.url,n)}).then(()=>e.match(t.url)).then(e=>{if(!e)throw Error("Could not recache");return e}).catch(()=>(console.log("[ServiceWorker] Network unavailable"),Promise.reject())))}},22839:function(e,t,n){"use strict";n.r(t),n.d(t,{SWRequestHeader:function(){return r},UIMsg:function(){return o},SWMsgIncoming:function(){return i},SWMsgOutgoing:function(){return s},swMessageSubscribe:function(){return a},swMessageUnsubscribe:function(){return u},swMessageSaveDataJSON:function(){return l},swMessageGetVersions:function(){return f}});let r=Object.freeze({CACHE_RELOAD:{"Cache-Control":"reload"},CACHE_NO_WRITE:{"Cache-Control":"no-store"},DATA_VERSION:"Data-Version"}),o=Object.freeze({UI_LOGGER_MSG:"ui_logger_msg"}),i=Object.freeze({POST_INSTALL_ACTIVATE_DONE:"POST_INSTALL_ACTIVATE_DONE",SERVICE_WORKER_LOGGER_MSG:"service_worker_logger_msg",SERVICE_WORKER_NEW_TERMS_ADDED:"service_worker_new_terms"}),s=Object.freeze({SW_GET_VERSIONS:"SW_GET_VERSIONS",SW_REFRESH_HARD:"SW_REFRESH_HARD",DATASET_JSON_SAVE:"DATASET_JSON_SAVE"}),c=Error("Service Worker not available");function a(e){navigator.serviceWorker&&navigator.serviceWorker.addEventListener("message",e)}function u(e){navigator.serviceWorker&&navigator.serviceWorker.removeEventListener("message",e)}function l(e,t,n){return navigator.serviceWorker?navigator.serviceWorker.ready.then(()=>{navigator.serviceWorker.controller?.postMessage({type:s.DATASET_JSON_SAVE,url:e,dataset:t,hash:n})}):Promise.reject(c)}function f(){return navigator.serviceWorker?navigator.serviceWorker.ready.then(()=>{navigator.serviceWorker.controller?.postMessage({type:s.SW_GET_VERSIONS})}):Promise.reject(c)}},57197:function(e,t,n){"use strict";function r(e,t){let n=e.includes("?")?e.split("?")[1]:"",r=new URLSearchParams(n),o=r.get(t);return o}function o(e,t){let[n,r]=e.includes("?")?e.split("?"):[e,""],o=new URLSearchParams(r);for(let[e,n]of Object.entries(t))void 0!==n&&o.append(e,n);return[n,o.toString()].join("?")}function i(e,t){let[n,r]=e.includes("?")?e.split("?"):[e,""],o=new URLSearchParams(r);return o.delete(t),[n,o.toString()].join("?")}n.r(t),n.d(t,{getParam:function(){return r},addParam:function(){return o},removeParam:function(){return i}})},40665:function(e,t,n){"use strict";n.r(t),n.d(t,{DebugLevel:function(){return r},TermFilterBy:function(){return o},TermSortBy:function(){return i},KanaType:function(){return s},TermSortByLabel:function(){return c},toggleAFilter:function(){return a},grpParse:function(){return u},updateSpaceRepTerm:function(){return l},deleteMetadata:function(){return f}});let r=Object.freeze({OFF:0,ERROR:1,WARN:2,DEBUG:3}),o=Object.freeze({GROUP:0,FREQUENCY:1,TAGS:2}),i=Object.freeze({RANDOM:0,ALPHABETIC:1,VIEW_DATE:2,GAME:3,DIFFICULTY:4,RECALL:5}),s=Object.freeze({HIRAGANA:0,KATAKANA:1,MIXED:2}),c=["Randomized","Alphabetic","Staleness","Space Rep","Difficulty","Recall"];function a(e,t,n){let r=Math.max(...t),o=e;if(void 0!==n&&t.includes(n))o=n;else for(;!t.includes(o)||o>r;)o=o+1>r?0:o+1;return o}function u(e,t){let n=Array.from(new Set(e)),r=Array.from(new Set(t));return n.forEach(e=>{let t=!e.includes(".");r=r.includes(e)?r.filter(t=>t!==e):[...r,e],t&&r.some(t=>t.includes(e+"."))&&(r=r.filter(t=>!t.startsWith(e+".")))}),r}function l(e,t,n={count:!0,date:!0},r){let o;let i=t[e],s=t[e]?{...t[e]}:void 0,c=i?.vC??-1;o=c>0&&!0===n.count?c+1:c>0&&!1===n.count?c:1;let a={};if(void 0!==r){if(r.toggle){let n=r.toggle.reduce((n,r)=>{let o;return o=["f"].includes(r)?t[e]?.[r]!==!1:t[e]?.[r],{...n,[r]:!o}},{});a={...a,...n}}if(void 0!==r.set){let e=Object.keys(r.set).reduce((e,t)=>(r.set?.[t]!==void 0&&(e=null===r.set[t]?{...e,[t]:void 0}:{...e,[t]:r.set[t]}),e),{});a={...a,...e}}}let u=i?.lastView,l=void 0!==u&&!1===n.date,f=l?u:new Date().toJSON(),d={...t[e]??{},vC:o,lastView:f,...a},h={...t,[e]:d};return{record:h,value:d,prevVal:s??d}}function f(e,t){let n=e.reduce((e,t)=>{let n={...e,[t]:void 0};return delete n[t],n},{...t});return{record:n}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("62118")}();