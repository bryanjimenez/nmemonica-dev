!function(){var e={761:function(e,t,n){"use strict";n.r(t),n.d(t,{audioServicePath:function(){return a},dataServiceEndpoint:function(){return c},dataServicePath:function(){return i},pronounceEndoint:function(){return l},settingsServicePath:function(){return u},sheetServicePath:function(){return s},syncService:function(){return o},uiEndpoint:function(){return r}});let r="https://bryanjimenez.github.io/nmemonica-dev",o="wss://def9c0b3-4620-41d5-864d-0efd15134816-00-3aquxjqijbq66.spock.replit.dev",i="/lambda",c="https://29yhyi3c8der.id.wasmer.app"+i,s="/workbook",u="/settings",a="/g_translate_pronounce",l="https://pronounce.bryanjimenez6.workers.dev"+a},95504:function(e,t,n){"use strict";n.r(t),n.d(t,{IDBErrorCause:function(){return o},IDBKeys:function(){return i},IDBStores:function(){return r},addIDBItem:function(){return u},getIDBItem:function(){return s},openIDB:function(){return c},putIDBItem:function(){return a}});let r=Object.freeze({MEDIA:"media",STATE:"state",SETTINGS:"settings",WORKBOOK:"workbook"}),o=Object.freeze({NoResult:"IDBNoResults"}),i=Object.freeze({State:{EDITED:"localDataEdited"}});function c(){let{version:e,logger:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=indexedDB.open("nmemonica-db",e??1),o=new Promise(e=>{n.onupgradeneeded=function(t){if(null===t.target)throw Error("onupgradeneeded failed");let n=t.target.result;if(0===t.oldVersion){let t=n.createObjectStore(r.MEDIA,{keyPath:"uid"}),o=new Promise((e,n)=>{t.transaction.oncomplete=function(){e()}}),i=n.createObjectStore(r.STATE,{keyPath:"key"}),c=new Promise((e,t)=>{i.transaction.oncomplete=function(){e()}}),s=n.createObjectStore(r.SETTINGS,{keyPath:"key"}),u=new Promise((e,t)=>{s.transaction.oncomplete=function(){e()}}),a=n.createObjectStore(r.WORKBOOK,{keyPath:"key"});Promise.all([o,c,u,new Promise((e,t)=>{a.transaction.oncomplete=function(){e()}})]).then(()=>{e({type:"upgrade",val:n})})}}}),i=new Promise((e,r)=>{n.onerror=function(){"function"==typeof t&&t("IDB.open X(",1),r()},n.onsuccess=function(n){if(null===n.target)throw Error("openIDB failed");let r=n.target.result;r.onerror=function(e){if(e.target&&"errorCode"in e.target){let{errorCode:n}=e.target;"function"==typeof t&&t("IDB Open X(",1)}},e({type:"open",val:r})}});return Promise.any([o,i]).then(e=>"upgrade"===e.type?i.then(e=>e.val):e.val)}function s(e,t){let{db:n,store:i,logger:c}=e,s=r.MEDIA,u=n.transaction([i??s]),a=u.objectStore(i??s).get(t),l=new Promise((e,t)=>{a.onerror=function(){"function"==typeof c&&c("IDB.get X(",1),t()},a.onsuccess=function(){a.result?e(a.result):t(Error("No results found",{cause:{code:o.NoResult}}))}});return Promise.all([l,new Promise((e,t)=>{u.oncomplete=function(){e(void 0)},u.onerror=function(){t()}})]).then(e=>e[0])}function u(e,t){let{db:n,store:o}=e,i=r.MEDIA,c=n.transaction([o??i],"readwrite"),s=c.objectStore(o??i).add(t),u=new Promise((e,t)=>{s.onsuccess=function(){e(void 0)},s.onerror=function(){t()}});return Promise.all([u,new Promise((e,n)=>{c.oncomplete=function(){e(t)},c.onerror=function(){n()}})]).then(e=>e[1])}function a(e,t){let{db:n,store:o}=e,i=r.MEDIA,c=n.transaction([o??i],"readwrite"),s=c.objectStore(o??i).put(t),u=new Promise((e,t)=>{s.onsuccess=function(){e(void 0)},s.onerror=function(){t()}});return Promise.all([u,new Promise((e,n)=>{c.oncomplete=function(){e(t)},c.onerror=function(){n()}})]).then(e=>e[1])}},77454:function(e,t,n){"use strict";n.r(t);var r=n("31218"),o=n("95504"),i=n("41978"),c=n("39721"),s=n("761");let u=["266.aba21e00.js","acfc9c4c7b3551d82d29.jpeg","592.6dcff9b9.js","177.6c07b6cb.js","576.fe4ab338.js","762.c6ec3a84.css","609.63ae5286.js","main.3b0dd51f.css","762.c6ec3a84.js","609.63ae5286.css","413.1b44a641.js","05356590e448bb24f8cd.png","580.9064720c.js","915977dbf0ad4a6ff875.png","de7d55e0079fa382fe2d.png","233.570ba4eb.js","7e7855ba05602e04c5a3.png","37d28b313e4b12c8b365.png","580.9064720c.css","334.b5bd263d.js","208.a7cc8ddd.js","592.6dcff9b9.css","534.4968d7ca.js","main.3b0dd51f.js"],a=s.uiEndpoint,l=s.pronounceEndoint,d=s.audioServicePath,f=globalThis.self;f.addEventListener("install",function(e){f.skipWaiting();let t=E();b(r.SWMsgOutgoing.SW_GET_VERSIONS,t)}),f.addEventListener("activate",function(e){"clients"in f&&f.clients.matchAll({includeUncontrolled:!0}).then(function(e){let t=e.map(function(e){return e.url});console.log("[ServiceWorker] Matching clients:",t.join(", ")),R("Matching clients:"+t.join(", "),i.DebugLevel.DEBUG)}),e.waitUntil(Promise.all([function(){return caches.keys().then(e=>Promise.all(e.reduce((e,t)=>[h,g,S].includes(t)?e:(console.log("[ServiceWorker] Deleting cache:",t),[...e,caches.delete(t)]),[])))}(),function(){return caches.open(g).then(e=>e.keys().then(t=>Promise.all(t.reduce((t,n)=>{let r=n.url.split("/").pop();return r&&r.indexOf(".")>-1&&!u.includes(r)?(console.log("[ServiceWorker] Removed static asset: "+r),[...t,e.delete(n.url)]):t},[]))))}()]).then(function(){return console.log("[ServiceWorker] Claiming clients"),R("Claiming clients",i.DebugLevel.DEBUG),f.clients.claim()}).then(()=>{let e=function(){let e=a+"/";return caches.open(g).then(t=>t.addAll([a,e])).catch(()=>{console.log("[ServiceWorker] / Prefectch failed for some item")})}();return Promise.all([e,caches.open(g).then(e=>e.addAll([...u])).catch(()=>{console.log("[ServiceWorker] Asset Prefectch failed for some item")})])}))}),f.addEventListener("fetch",function(e){var t,n,s,u;if("OPTIONS"===e.request.method){;e.respondWith((t=e.request,fetch(t)));return}if("GET"!==e.request.method)return;let E=e.request.clone(),m=e.request.url,b=m.slice(m.indexOf("/",9));switch(!0){case m.includes("githubusercontent")&&E.headers.has(r.SWRequestHeader.DATA_VERSION):{let t=e.request.headers.get(r.SWRequestHeader.DATA_VERSION),n=caches.open(h).then(e=>e.match(m+".v"+t)).then(e=>{if(void 0===e)throw Error(`Missing ${m+".v"+t}`);return e});e.respondWith(n);break}case m.startsWith(a)&&!m.endsWith(".hot-update.json"):e.respondWith(function(e){return caches.open(g).then(t=>t.match(e)).then(t=>t||O(g,new Request(e)))}(m));break;case b.startsWith(d):{;let t=(0,c.getParam)(m,"uid");if(!t)throw Error("Request missing uid");let r=(0,c.removeParam)(m,"uid"),u=E.url.startsWith(l)?new Request(r):E;"reload"===E.headers.get("Cache-Control")&&e.respondWith(function(e,t){if(console.log("[ServiceWorker] Overriding Asset in Cache"),!f.indexedDB)return console.log(v),R(v,i.DebugLevel.WARN),O(S,t);{R("IDB.override",i.DebugLevel.WARN);let n=fetch(t);return(0,o.openIDB)({logger:R}).then(t=>n.then(e=>{if(!e.ok)throw R("fetch",i.DebugLevel.ERROR),Error("Network response was not OK"+(e.status?" ("+e.status+")":""));return e.blob()}).then(n=>(0,o.putIDBItem)({db:t},{uid:e,blob:n}).then(e=>p(e))))}}(t,u)),e.respondWith((n=t,s=u,f.indexedDB?(0,o.openIDB)({logger:R}).then(e=>(0,o.getIDBItem)({db:e,store:o.IDBStores.MEDIA},n).then(e=>p(e)).catch(()=>(R("IDB.get [] ",i.DebugLevel.WARN),fetch(s).then(e=>{if(!e.ok)throw R("fetch",i.DebugLevel.ERROR),Error("Network response was not OK"+(e.status?" ("+e.status+")":""));return e.blob()}).then(t=>(0,o.addIDBItem)({db:e},{uid:n,blob:t}).then(e=>p(e)))))):(console.log(v),R(v,i.DebugLevel.WARN),function(e){return caches.open(S).then(t=>t.match(e)).then(t=>t||O(S,new Request(e)))}(s.url))));break}default:;e.respondWith((u=e.request,fetch(u)))}}),f.addEventListener("message",function(e){let t=e.data;if(t.type===r.SWMsgOutgoing.SW_REFRESH_HARD&&t.type===r.SWMsgOutgoing.SW_REFRESH_HARD){fetch(a+"/robots.txt").then(e=>{if(e.status<400)return caches.delete(g).then(()=>{f.registration.unregister(),b(r.SWMsgOutgoing.SW_REFRESH_HARD,{msg:"Hard Refresh",status:e.status})});throw Error("Service Unavailable")}).catch(e=>{b(r.SWMsgOutgoing.SW_REFRESH_HARD,{msg:"Hard Refresh",error:e})});return}if(t.type===r.SWMsgOutgoing.SW_GET_VERSIONS&&t.type===r.SWMsgOutgoing.SW_GET_VERSIONS){let e=E();b(r.SWMsgOutgoing.SW_GET_VERSIONS,e);return}R("Unrecognized message",i.DebugLevel.ERROR)});let g="nmemonica-static",h="nmemonica-data",S="nmemonica-media",v="Your browser doesn't support a stable version of IndexedDB.";function E(){return{swVersion:"c6933304",jsVersion:"3b0dd51f",bundleVersion:"7fc6b1cb"}}function m(e){return fetch(e)}function p(e){return new Response(e.blob,{status:200,statusText:"OK"})}function b(e,t){"clients"in f&&f.clients.matchAll({includeUncontrolled:!0,type:"window"}).then(n=>{if(n&&n.length)return n[0].postMessage({type:e,...t})})}function R(e,t){"clients"in f&&f.clients.matchAll({includeUncontrolled:!0,type:"window"}).then(n=>{if(n&&n.length)return n[0].postMessage({type:r.SWMsgIncoming.SERVICE_WORKER_LOGGER_MSG,msg:e,lvl:t})}).catch(e=>{console.log("[ServiceWorker] clientLogger failed"),console.log(e)})}function O(e,t){return caches.open(e).then(e=>fetch(t).then(n=>{if(!n.ok)throw Error("Could not fetch");return e.put(t.url,n)}).then(()=>e.match(t.url)).then(e=>{if(!e)throw Error("Could not recache");return e}).catch(()=>(console.log("[ServiceWorker] Network unavailable"),Promise.reject())))}},31218:function(e,t,n){"use strict";n.r(t),n.d(t,{SWMsgIncoming:function(){return i},SWMsgOutgoing:function(){return c},SWRequestHeader:function(){return r},UIMsg:function(){return o},swMessageDoHardRefresh:function(){return d},swMessageGetVersions:function(){return l},swMessageSubscribe:function(){return u},swMessageUnsubscribe:function(){return a}});let r=Object.freeze({CACHE_RELOAD:{"Cache-Control":"reload"},CACHE_NO_WRITE:{"Cache-Control":"no-store"},DATA_VERSION:"Data-Version"}),o=Object.freeze({UI_LOGGER_MSG:"ui_logger_msg"}),i=Object.freeze({POST_INSTALL_ACTIVATE_DONE:"POST_INSTALL_ACTIVATE_DONE",SERVICE_WORKER_LOGGER_MSG:"service_worker_logger_msg",SERVICE_WORKER_NEW_TERMS_ADDED:"service_worker_new_terms"}),c=Object.freeze({SW_GET_VERSIONS:"SW_GET_VERSIONS",SW_REFRESH_HARD:"SW_REFRESH_HARD",DATASET_JSON_SAVE:"DATASET_JSON_SAVE"}),s=Error("Service Worker not available");function u(e){navigator.serviceWorker&&navigator.serviceWorker.addEventListener("message",e)}function a(e){navigator.serviceWorker&&navigator.serviceWorker.removeEventListener("message",e)}function l(){return navigator.serviceWorker?navigator.serviceWorker.ready.then(()=>{var e;null===(e=navigator.serviceWorker.controller)||void 0===e||e.postMessage({type:c.SW_GET_VERSIONS})}):Promise.reject(s)}function d(){return navigator.serviceWorker?navigator.serviceWorker.ready.then(()=>{var e;null===(e=navigator.serviceWorker.controller)||void 0===e||e.postMessage({type:c.SW_REFRESH_HARD})}):Promise.reject(s)}},39721:function(e,t,n){"use strict";function r(e,t){let n=e.includes("?")?e.split("?")[1]:"";return new URLSearchParams(n).get(t)}function o(e,t){let[n,r]=e.includes("?")?e.split("?"):[e,""],o=new URLSearchParams(r);for(let[e,n]of Object.entries(t))void 0!==n&&o.append(e,n);return[n,o.toString()].join("?")}function i(e,t){let[n,r]=e.includes("?")?e.split("?"):[e,""],o=new URLSearchParams(r);return o.delete(t),[n,o.toString()].join("?")}n.r(t),n.d(t,{addParam:function(){return o},getParam:function(){return r},removeParam:function(){return i}})},41978:function(e,t,n){"use strict";n.r(t),n.d(t,{DebugLevel:function(){return r},KanaType:function(){return s},TermFilterBy:function(){return o},TermSortBy:function(){return i},TermSortByLabel:function(){return c},deleteMetadata:function(){return d},grpParse:function(){return a},toggleAFilter:function(){return u},updateSpaceRepTerm:function(){return l}});let r=Object.freeze({OFF:0,ERROR:1,WARN:2,DEBUG:3}),o=Object.freeze({GROUP:0,FREQUENCY:1,TAGS:2}),i=Object.freeze({RANDOM:0,ALPHABETIC:1,DIFFICULTY:2,VIEW_DATE:3,RECALL:4}),c=["Randomized","Alphabetic","Difficulty","Viewed Date","Recall Interval"],s=Object.freeze({HIRAGANA:0,KATAKANA:1,MIXED:2});function u(e,t,n){let r=Math.max(...t),o=e;if(void 0!==n&&t.includes(n))o=n;else for(;!t.includes(o)||o>r;)o=o+1>r?0:o+1;return o}function a(e,t){let n=Array.from(new Set(e)),r=Array.from(new Set(t));return n.forEach(e=>{let t=!e.includes(".");r=r.includes(e)?r.filter(t=>t!==e):[...r,e],t&&r.some(t=>t.includes(e+"."))&&(r=r.filter(t=>!t.startsWith(e+".")))}),r}function l(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{count:!0,date:!0},o=arguments.length>3?arguments[3]:void 0,i=t[e],c=t[e]?{...t[e]}:void 0,s=(null==i?void 0:i.vC)??-1;n=s>0&&!0===r.count?s+1:s>0&&!1===r.count?s:1;let u={};if(void 0!==o){if(o.toggle){let n=o.toggle.reduce((n,r)=>{var o,i;let c;return c=["f"].includes(r)?(null===(o=t[e])||void 0===o?void 0:o[r])!==!1:null===(i=t[e])||void 0===i?void 0:i[r],{...n,[r]:!0!==c}},{});u={...u,...n}}if(void 0!==o.set){let e,t={};for(e in o.set){var a;(null===(a=o.set)||void 0===a?void 0:a[e])!==void 0&&(t=null===o.set[e]?{...t,[e]:void 0}:{...t,[e]:o.set[e]})}u={...u,...t}}}let l=null==i?void 0:i.lastView,d=void 0!==l&&!1===r.date?l:new Date().toJSON(),f={...t[e]??{},vC:n,lastView:d,...u};return{record:{...t,[e]:f},value:f,prevVal:c??f}}function d(e,t){return{record:e.reduce((e,t)=>{let n={...e,[t]:void 0};return delete n[t],n},{...t})}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("77454")}();