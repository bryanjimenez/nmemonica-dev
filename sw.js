!function(){var e={70166:function(e,t,n){"use strict";n.r(t),n.d(t,{audioServicePath:function(){return a},dataServiceEndpoint:function(){return i},dataServicePath:function(){return o},pronounceEndoint:function(){return u},settingsServicePath:function(){return s},sheetServicePath:function(){return c},uiEndpoint:function(){return r}});let r="https://bryanjimenez.github.io/nmemonica-dev",o="/lambda",i="https://29yhyi3c8der.id.wasmer.app"+o,c="/workbook",s="/settings",a="/g_translate_pronounce",u="https://pronounce.bryanjimenez6.workers.dev"+a},35018:function(e,t,n){"use strict";n.r(t),n.d(t,{IDBErrorCause:function(){return o},IDBKeys:function(){return i},IDBStores:function(){return r},addIDBItem:function(){return a},getIDBItem:function(){return s},openIDB:function(){return c},putIDBItem:function(){return u}});let r=Object.freeze({MEDIA:"media",STATE:"state",SETTINGS:"settings",WORKBOOK:"workbook"}),o=Object.freeze({NoResult:"IDBNoResults"}),i=Object.freeze({State:{EDITED:"localDataEdited"}});function c(){let{version:e,logger:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=indexedDB.open("nmemonica-db",e??1),o=new Promise(e=>{n.onupgradeneeded=function(t){if(null===t.target)throw Error("onupgradeneeded failed");let n=t.target.result;if(0===t.oldVersion){let t=n.createObjectStore(r.MEDIA,{keyPath:"uid"}),o=new Promise((e,n)=>{t.transaction.oncomplete=function(){e()}}),i=n.createObjectStore(r.STATE,{keyPath:"key"}),c=new Promise((e,t)=>{i.transaction.oncomplete=function(){e()}}),s=n.createObjectStore(r.SETTINGS,{keyPath:"key"}),a=new Promise((e,t)=>{s.transaction.oncomplete=function(){e()}}),u=n.createObjectStore(r.WORKBOOK,{keyPath:"key"});Promise.all([o,c,a,new Promise((e,t)=>{u.transaction.oncomplete=function(){e()}})]).then(()=>{e({type:"upgrade",val:n})})}}}),i=new Promise((e,r)=>{n.onerror=function(){"function"==typeof t&&t("IDB.open X(",1),r()},n.onsuccess=function(n){if(null===n.target)throw Error("openIDB failed");let r=n.target.result;r.onerror=function(e){if(e.target&&"errorCode"in e.target){let{errorCode:n}=e.target;"function"==typeof t&&t("IDB Open X(",1)}},e({type:"open",val:r})}});return Promise.any([o,i]).then(e=>"upgrade"===e.type?i.then(e=>e.val):e.val)}function s(e,t){let{db:n,store:i,logger:c}=e,s=r.MEDIA,a=n.transaction([i??s]),u=a.objectStore(i??s).get(t),l=new Promise((e,t)=>{u.onerror=function(){"function"==typeof c&&c("IDB.get X(",1),t()},u.onsuccess=function(){u.result?e(u.result):t(Error("No results found",{cause:{code:o.NoResult}}))}});return Promise.all([l,new Promise((e,t)=>{a.oncomplete=function(){e(void 0)},a.onerror=function(){t()}})]).then(e=>e[0])}function a(e,t){let{db:n,store:o}=e,i=r.MEDIA,c=n.transaction([o??i],"readwrite"),s=c.objectStore(o??i).add(t),a=new Promise((e,t)=>{s.onsuccess=function(){e(void 0)},s.onerror=function(){t()}});return Promise.all([a,new Promise((e,n)=>{c.oncomplete=function(){e(t)},c.onerror=function(){n()}})]).then(e=>e[1])}function u(e,t){let{db:n,store:o}=e,i=r.MEDIA,c=n.transaction([o??i],"readwrite"),s=c.objectStore(o??i).put(t),a=new Promise((e,t)=>{s.onsuccess=function(){e(void 0)},s.onerror=function(){t()}});return Promise.all([a,new Promise((e,n)=>{c.oncomplete=function(){e(t)},c.onerror=function(){n()}})]).then(e=>e[1])}},53223:function(e,t,n){"use strict";n.r(t);var r=n("96486"),o=n("35018"),i=n("12960"),c=n("19578"),s=n("70166");let a=["748.525d3e24.js","782.7321826f.css","icon512_dev.png","icon192.png","382.7bfd9d9f.js","05356590e448bb24f8cd.png","favicon.ico","782.7321826f.js","icon512.png","616.3d019812.js","849.5da970d5.css","422.16251e9a.js","main.dd576d1e.css","801.73953b14.css","index.html","main.dd576d1e.js","407.8ff4f5a0.js","acfc9c4c7b3551d82d29.jpeg","625.66760300.js","674.3004eacb.js","maskable512_dev.png","674.3004eacb.css","227.fc2352b9.js","915977dbf0ad4a6ff875.png","de7d55e0079fa382fe2d.png","7e7855ba05602e04c5a3.png","37d28b313e4b12c8b365.png","icon192_dev.png","maskable512.png","849.5da970d5.js","801.73953b14.js","483.de738b47.js","manifest.webmanifest"],u=s.uiEndpoint,l=s.dataServiceEndpoint,d=s.pronounceEndoint,f=s.audioServicePath,h=s.dataServicePath,g=globalThis.self;g.addEventListener("install",function(e){g.skipWaiting();let t=b();A(r.SWMsgOutgoing.SW_GET_VERSIONS,t)}),g.addEventListener("activate",function(e){"clients"in g&&g.clients.matchAll({includeUncontrolled:!0}).then(function(e){let t=e.map(function(e){return e.url});console.log("[ServiceWorker] Matching clients:",t.join(", ")),_("Matching clients:"+t.join(", "),i.DebugLevel.DEBUG)}),e.waitUntil(Promise.all([function(){return caches.keys().then(e=>Promise.all(e.reduce((e,t)=>[p,S,v].includes(t)?e:(console.log("[ServiceWorker] Deleting cache:",t),[...e,caches.delete(t)]),[])))}(),function(){return caches.open(S).then(e=>e.keys().then(t=>Promise.all(t.reduce((t,n)=>{let r=n.url.split("/").pop();return r&&r.indexOf(".")>-1&&!a.includes(r)?(console.log("[ServiceWorker] Removed static asset: "+r),[...t,e.delete(n.url)]):t},[]))))}()]).then(function(){return console.log("[ServiceWorker] Claiming clients"),_("Claiming clients",i.DebugLevel.DEBUG),g.clients.claim()}).then(()=>{let e=D().then(e=>{if(e)_("Datasets edited: Skipping recache",i.DebugLevel.WARN);else{var t;return t=l,caches.open(p).then(e=>e.add(t+E).then(()=>Promise.all(R.map(e=>{let n=t+e;return I(new Request(n)).then(e=>w(new Request(n),e))})))).catch(()=>{console.log("[ServiceWorker] Data Prefech failed for some item")})}}),t=function(){let e=u+"/";return caches.open(S).then(t=>t.addAll([u,e])).catch(()=>{console.log("[ServiceWorker] / Prefectch failed for some item")})}();return Promise.all([e,t,caches.open(S).then(e=>e.addAll([...a])).catch(()=>{console.log("[ServiceWorker] Asset Prefectch failed for some item")})])}))}),g.addEventListener("fetch",function(e){var t,n,s,a,l;if("OPTIONS"===e.request.method){;e.respondWith((t=e.request,fetch(t)));return}if("GET"!==e.request.method)return;let R=e.request.clone(),b=e.request.url,O=b.slice(b.indexOf("/",9));switch(!0){case O.startsWith(h+E):if("no-store"===R.headers.get("Cache-Control")){;e.respondWith((n=R,fetch(n)))}e.respondWith(function(e){return D().then(t=>{let n=caches.open(p).then(t=>t.match(e.url)).then(e=>{if(!e)throw Error("Not in cache");return e});return t?n:Promise.any([fetch(e).then(t=>{let n=t.clone();if(!t.ok)throw Error("Failed to fetch");return caches.open(p).then(t=>t.put(e.url,n)),t}),n]).catch(e=>Promise.reject(e[0]))})}(R));break;case b.includes("githubusercontent")&&R.headers.has(r.SWRequestHeader.DATA_VERSION):{let t=e.request.headers.get(r.SWRequestHeader.DATA_VERSION),n=caches.open(p).then(e=>e.match(b+".v"+t)).then(e=>{if(void 0===e)throw Error(`Missing ${b+".v"+t}`);return e});e.respondWith(n);break}case R.headers.has(r.SWRequestHeader.DATA_VERSION):{let t=R.headers.get(r.SWRequestHeader.DATA_VERSION);e.respondWith(function(e,t){let n;return n=t&&"0"!==t?w(e,t):I(e).then(t=>w(e,t))}(R,t));break}case b.startsWith(u)&&!b.endsWith(".hot-update.json"):e.respondWith(function(e){return caches.open(S).then(t=>t.match(e)).then(t=>t||P(S,new Request(e)))}(b));break;case O.startsWith(f):{;let t=(0,c.getParam)(b,"uid");if(!t)throw Error("Request missing uid");let n=(0,c.removeParam)(b,"uid"),r=R.url.startsWith(d)?new Request(n):R;"reload"===R.headers.get("Cache-Control")&&e.respondWith(function(e,t){if(console.log("[ServiceWorker] Overriding Asset in Cache"),!g.indexedDB)return console.log(m),_(m,i.DebugLevel.WARN),P(v,t);{_("IDB.override",i.DebugLevel.WARN);let n=fetch(t);return(0,o.openIDB)({logger:_}).then(t=>n.then(e=>{if(!e.ok)throw _("fetch",i.DebugLevel.ERROR),Error("Network response was not OK"+(e.status?" ("+e.status+")":""));return e.blob()}).then(n=>(0,o.putIDBItem)({db:t},{uid:e,blob:n}).then(e=>W(e))))}}(t,r)),e.respondWith((s=t,a=r,g.indexedDB?(0,o.openIDB)({logger:_}).then(e=>(0,o.getIDBItem)({db:e,store:o.IDBStores.MEDIA},s).then(e=>W(e)).catch(()=>(_("IDB.get [] ",i.DebugLevel.WARN),fetch(a).then(e=>{if(!e.ok)throw _("fetch",i.DebugLevel.ERROR),Error("Network response was not OK"+(e.status?" ("+e.status+")":""));return e.blob()}).then(t=>(0,o.addIDBItem)({db:e},{uid:s,blob:t}).then(e=>W(e)))))):(console.log(m),_(m,i.DebugLevel.WARN),function(e){return caches.open(v).then(t=>t.match(e)).then(t=>t||P(v,new Request(e)))}(a.url))));break}default:;e.respondWith((l=e.request,fetch(l)))}}),g.addEventListener("message",function(e){let t=e.data;if(t.type===r.SWMsgOutgoing.DATASET_JSON_SAVE&&t.type===r.SWMsgOutgoing.DATASET_JSON_SAVE){let n=caches.open(p).then(e=>{let n=new Blob([JSON.stringify(t.dataset)],{type:"application/json; charset=utf-8"}),r=new Response(n);return e.put(t.url,r)});e.waitUntil(n);return}if(t.type===r.SWMsgOutgoing.SW_REFRESH_HARD&&t.type===r.SWMsgOutgoing.SW_REFRESH_HARD){fetch(u+"/robots.txt").then(e=>{if(e.status<400)return caches.delete(S).then(()=>{g.registration.unregister(),A(r.SWMsgOutgoing.SW_REFRESH_HARD,{msg:"Hard Refresh",status:e.status})});throw Error("Service Unavailable")}).catch(e=>{A(r.SWMsgOutgoing.SW_REFRESH_HARD,{msg:"Hard Refresh",error:e})});return}if(t.type===r.SWMsgOutgoing.SW_GET_VERSIONS&&t.type===r.SWMsgOutgoing.SW_GET_VERSIONS){let e=b();A(r.SWMsgOutgoing.SW_GET_VERSIONS,e);return}_("Unrecognized message",i.DebugLevel.ERROR)});let S="nmemonica-static",p="nmemonica-data",v="nmemonica-media",m="Your browser doesn't support a stable version of IndexedDB.",E="/cache.json",R=["/phrases.json","/vocabulary.json","/kanji.json"];function b(){return{swVersion:"8efc81b9",jsVersion:"dd576d1e",bundleVersion:"1354828b"}}function D(){return(0,o.openIDB)({logger:_}).then(e=>(0,o.getIDBItem)({db:e,store:o.IDBStores.STATE},o.IDBKeys.State.EDITED).then(e=>e.value).catch(()=>!1))}function O(e){return fetch(e)}function W(e){return new Response(e.blob,{status:200,statusText:"OK"})}function A(e,t){"clients"in g&&g.clients.matchAll({includeUncontrolled:!0,type:"window"}).then(n=>{if(n&&n.length)return n[0].postMessage({type:e,...t})})}function _(e,t){"clients"in g&&g.clients.matchAll({includeUncontrolled:!0,type:"window"}).then(n=>{if(n&&n.length)return n[0].postMessage({type:r.SWMsgIncoming.SERVICE_WORKER_LOGGER_MSG,msg:e,lvl:t})}).catch(e=>{console.log("[ServiceWorker] clientLogger failed"),console.log(e)})}function I(e){let t=e.url,n=t.slice(0,t.indexOf("/",8)),[r]=(t.split("/").pop()||t).split(".json");return caches.open(p).then(e=>e.match(n+h+E).then(e=>e?Promise.resolve(e):P(p,new Request(n+h+E,{credentials:"include"})))).then(e=>e&&e.json()).then(e=>e[r])}function w(e,t){let n=e.url+".v"+t;return caches.open(p).then(t=>t.match(n).then(r=>r||fetch(e).then(e=>(e.status<400&&t.put(n,e.clone()),e))))}function P(e,t){return caches.open(e).then(e=>fetch(t).then(n=>{if(!n.ok)throw Error("Could not fetch");return e.put(t.url,n)}).then(()=>e.match(t.url)).then(e=>{if(!e)throw Error("Could not recache");return e}).catch(()=>(console.log("[ServiceWorker] Network unavailable"),Promise.reject())))}},96486:function(e,t,n){"use strict";n.r(t),n.d(t,{SWMsgIncoming:function(){return i},SWMsgOutgoing:function(){return c},SWRequestHeader:function(){return r},UIMsg:function(){return o},swMessageDoHardRefresh:function(){return f},swMessageGetVersions:function(){return d},swMessageSaveDataJSON:function(){return l},swMessageSubscribe:function(){return a},swMessageUnsubscribe:function(){return u}});let r=Object.freeze({CACHE_RELOAD:{"Cache-Control":"reload"},CACHE_NO_WRITE:{"Cache-Control":"no-store"},DATA_VERSION:"Data-Version"}),o=Object.freeze({UI_LOGGER_MSG:"ui_logger_msg"}),i=Object.freeze({POST_INSTALL_ACTIVATE_DONE:"POST_INSTALL_ACTIVATE_DONE",SERVICE_WORKER_LOGGER_MSG:"service_worker_logger_msg",SERVICE_WORKER_NEW_TERMS_ADDED:"service_worker_new_terms"}),c=Object.freeze({SW_GET_VERSIONS:"SW_GET_VERSIONS",SW_REFRESH_HARD:"SW_REFRESH_HARD",DATASET_JSON_SAVE:"DATASET_JSON_SAVE"}),s=Error("Service Worker not available");function a(e){navigator.serviceWorker&&navigator.serviceWorker.addEventListener("message",e)}function u(e){navigator.serviceWorker&&navigator.serviceWorker.removeEventListener("message",e)}function l(e,t){return navigator.serviceWorker?navigator.serviceWorker.ready.then(()=>{var n;null===(n=navigator.serviceWorker.controller)||void 0===n||n.postMessage({type:c.DATASET_JSON_SAVE,url:e,dataset:t})}):Promise.reject(s)}function d(){return navigator.serviceWorker?navigator.serviceWorker.ready.then(()=>{var e;null===(e=navigator.serviceWorker.controller)||void 0===e||e.postMessage({type:c.SW_GET_VERSIONS})}):Promise.reject(s)}function f(){return navigator.serviceWorker?navigator.serviceWorker.ready.then(()=>{var e;null===(e=navigator.serviceWorker.controller)||void 0===e||e.postMessage({type:c.SW_REFRESH_HARD})}):Promise.reject(s)}},19578:function(e,t,n){"use strict";function r(e,t){let n=e.includes("?")?e.split("?")[1]:"";return new URLSearchParams(n).get(t)}function o(e,t){let[n,r]=e.includes("?")?e.split("?"):[e,""],o=new URLSearchParams(r);for(let[e,n]of Object.entries(t))void 0!==n&&o.append(e,n);return[n,o.toString()].join("?")}function i(e,t){let[n,r]=e.includes("?")?e.split("?"):[e,""],o=new URLSearchParams(r);return o.delete(t),[n,o.toString()].join("?")}n.r(t),n.d(t,{addParam:function(){return o},getParam:function(){return r},removeParam:function(){return i}})},12960:function(e,t,n){"use strict";n.r(t),n.d(t,{DebugLevel:function(){return r},KanaType:function(){return c},TermFilterBy:function(){return o},TermSortBy:function(){return i},TermSortByLabel:function(){return s},deleteMetadata:function(){return d},grpParse:function(){return u},toggleAFilter:function(){return a},updateSpaceRepTerm:function(){return l}});let r=Object.freeze({OFF:0,ERROR:1,WARN:2,DEBUG:3}),o=Object.freeze({GROUP:0,FREQUENCY:1,TAGS:2}),i=Object.freeze({RANDOM:0,ALPHABETIC:1,DIFFICULTY:2,VIEW_DATE:3,RECALL:4,GAME:5}),c=Object.freeze({HIRAGANA:0,KATAKANA:1,MIXED:2}),s=["Randomized","Alphabetic","Difficulty","Viewed Date","Recall Interval","OLD Space Rep"];function a(e,t,n){let r=Math.max(...t),o=e;if(void 0!==n&&t.includes(n))o=n;else for(;!t.includes(o)||o>r;)o=o+1>r?0:o+1;return o}function u(e,t){let n=Array.from(new Set(e)),r=Array.from(new Set(t));return n.forEach(e=>{let t=!e.includes(".");r=r.includes(e)?r.filter(t=>t!==e):[...r,e],t&&r.some(t=>t.includes(e+"."))&&(r=r.filter(t=>!t.startsWith(e+".")))}),r}function l(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{count:!0,date:!0},o=arguments.length>3?arguments[3]:void 0,i=t[e],c=t[e]?{...t[e]}:void 0,s=(null==i?void 0:i.vC)??-1;n=s>0&&!0===r.count?s+1:s>0&&!1===r.count?s:1;let a={};if(void 0!==o){if(o.toggle){let n=o.toggle.reduce((n,r)=>{var o,i;let c;return c=["f"].includes(r)?(null===(o=t[e])||void 0===o?void 0:o[r])!==!1:null===(i=t[e])||void 0===i?void 0:i[r],{...n,[r]:!c}},{});a={...a,...n}}if(void 0!==o.set){let e=Object.keys(o.set).reduce((e,t)=>{var n;return(null===(n=o.set)||void 0===n?void 0:n[t])!==void 0&&(e=null===o.set[t]?{...e,[t]:void 0}:{...e,[t]:o.set[t]}),e},{});a={...a,...e}}}let u=null==i?void 0:i.lastView,l=void 0!==u&&!1===r.date?u:new Date().toJSON(),d={...t[e]??{},vC:n,lastView:l,...a};return{record:{...t,[e]:d},value:d,prevVal:c??d}}function d(e,t){return{record:e.reduce((e,t)=>{let n={...e,[t]:void 0};return delete n[t],n},{...t})}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("53223")}();