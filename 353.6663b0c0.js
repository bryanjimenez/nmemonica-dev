(self.webpackChunknmemonica=self.webpackChunknmemonica||[]).push([["353"],{82450:function(e,n,r){var t={utf8:{stringToBytes:function(e){return t.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(t.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var n=[],r=0;r<e.length;r++)n.push(255&e.charCodeAt(r));return n},bytesToString:function(e){for(var n=[],r=0;r<e.length;r++)n.push(String.fromCharCode(e[r]));return n.join("")}}};e.exports=t},27028:function(e,n,r){var t,s;t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s={rotl:function(e,n){return e<<n|e>>>32-n},rotr:function(e,n){return e<<32-n|e>>>n},endian:function(e){if(e.constructor==Number)return 16711935&s.rotl(e,8)|4278255360&s.rotl(e,24);for(var n=0;n<e.length;n++)e[n]=s.endian(e[n]);return e},randomBytes:function(e){for(var n=[];e>0;e--)n.push(Math.floor(256*Math.random()));return n},bytesToWords:function(e){for(var n=[],r=0,t=0;r<e.length;r++,t+=8)n[t>>>5]|=e[r]<<24-t%32;return n},wordsToBytes:function(e){for(var n=[],r=0;r<32*e.length;r+=8)n.push(e[r>>>5]>>>24-r%32&255);return n},bytesToHex:function(e){for(var n=[],r=0;r<e.length;r++)n.push((e[r]>>>4).toString(16)),n.push((15&e[r]).toString(16));return n.join("")},hexToBytes:function(e){for(var n=[],r=0;r<e.length;r+=2)n.push(parseInt(e.substr(r,2),16));return n},bytesToBase64:function(e){for(var n=[],r=0;r<e.length;r+=3){for(var s=e[r]<<16|e[r+1]<<8|e[r+2],i=0;i<4;i++)8*r+6*i<=8*e.length?n.push(t.charAt(s>>>6*(3-i)&63)):n.push("=")}return n.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/ig,"");for(var n=[],r=0,s=0;r<e.length;s=++r%4)0!=s&&n.push((t.indexOf(e.charAt(r-1))&Math.pow(2,-2*s+8)-1)<<2*s|t.indexOf(e.charAt(r))>>>6-2*s);return n}},e.exports=s},18796:function(e,n,r){function t(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(t(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&t(e.slice(0,0))}(e)||!!e._isBuffer)}},80335:function(e,n,r){var t,s,i,o,a;t=r("27028"),s=r("82450").utf8,i=r("18796"),o=r("82450").bin,(a=function(e,n){e.constructor==String?e=n&&"binary"===n.encoding?o.stringToBytes(e):s.stringToBytes(e):i(e)?e=Array.prototype.slice.call(e,0):!Array.isArray(e)&&e.constructor!==Uint8Array&&(e=e.toString());for(var r=t.bytesToWords(e),l=8*e.length,u=1732584193,c=-271733879,f=-1732584194,p=271733878,g=0;g<r.length;g++)r[g]=(r[g]<<8|r[g]>>>24)&16711935|(r[g]<<24|r[g]>>>8)&4278255360;r[l>>>5]|=128<<l%32,r[(l+64>>>9<<4)+14]=l;for(var h=a._ff,j=a._gg,b=a._hh,d=a._ii,g=0;g<r.length;g+=16){var m=u,y=c,v=f,O=p;u=h(u,c,f,p,r[g+0],7,-680876936),p=h(p,u,c,f,r[g+1],12,-389564586),f=h(f,p,u,c,r[g+2],17,606105819),c=h(c,f,p,u,r[g+3],22,-1044525330),u=h(u,c,f,p,r[g+4],7,-176418897),p=h(p,u,c,f,r[g+5],12,1200080426),f=h(f,p,u,c,r[g+6],17,-1473231341),c=h(c,f,p,u,r[g+7],22,-45705983),u=h(u,c,f,p,r[g+8],7,1770035416),p=h(p,u,c,f,r[g+9],12,-1958414417),f=h(f,p,u,c,r[g+10],17,-42063),c=h(c,f,p,u,r[g+11],22,-1990404162),u=h(u,c,f,p,r[g+12],7,1804603682),p=h(p,u,c,f,r[g+13],12,-40341101),f=h(f,p,u,c,r[g+14],17,-1502002290),c=h(c,f,p,u,r[g+15],22,1236535329),u=j(u,c,f,p,r[g+1],5,-165796510),p=j(p,u,c,f,r[g+6],9,-1069501632),f=j(f,p,u,c,r[g+11],14,643717713),c=j(c,f,p,u,r[g+0],20,-373897302),u=j(u,c,f,p,r[g+5],5,-701558691),p=j(p,u,c,f,r[g+10],9,38016083),f=j(f,p,u,c,r[g+15],14,-660478335),c=j(c,f,p,u,r[g+4],20,-405537848),u=j(u,c,f,p,r[g+9],5,568446438),p=j(p,u,c,f,r[g+14],9,-1019803690),f=j(f,p,u,c,r[g+3],14,-187363961),c=j(c,f,p,u,r[g+8],20,1163531501),u=j(u,c,f,p,r[g+13],5,-1444681467),p=j(p,u,c,f,r[g+2],9,-51403784),f=j(f,p,u,c,r[g+7],14,1735328473),c=j(c,f,p,u,r[g+12],20,-1926607734),u=b(u,c,f,p,r[g+5],4,-378558),p=b(p,u,c,f,r[g+8],11,-2022574463),f=b(f,p,u,c,r[g+11],16,1839030562),c=b(c,f,p,u,r[g+14],23,-35309556),u=b(u,c,f,p,r[g+1],4,-1530992060),p=b(p,u,c,f,r[g+4],11,1272893353),f=b(f,p,u,c,r[g+7],16,-155497632),c=b(c,f,p,u,r[g+10],23,-1094730640),u=b(u,c,f,p,r[g+13],4,681279174),p=b(p,u,c,f,r[g+0],11,-358537222),f=b(f,p,u,c,r[g+3],16,-722521979),c=b(c,f,p,u,r[g+6],23,76029189),u=b(u,c,f,p,r[g+9],4,-640364487),p=b(p,u,c,f,r[g+12],11,-421815835),f=b(f,p,u,c,r[g+15],16,530742520),c=b(c,f,p,u,r[g+2],23,-995338651),u=d(u,c,f,p,r[g+0],6,-198630844),p=d(p,u,c,f,r[g+7],10,1126891415),f=d(f,p,u,c,r[g+14],15,-1416354905),c=d(c,f,p,u,r[g+5],21,-57434055),u=d(u,c,f,p,r[g+12],6,1700485571),p=d(p,u,c,f,r[g+3],10,-1894986606),f=d(f,p,u,c,r[g+10],15,-1051523),c=d(c,f,p,u,r[g+1],21,-2054922799),u=d(u,c,f,p,r[g+8],6,1873313359),p=d(p,u,c,f,r[g+15],10,-30611744),f=d(f,p,u,c,r[g+6],15,-1560198380),c=d(c,f,p,u,r[g+13],21,1309151649),u=d(u,c,f,p,r[g+4],6,-145523070),p=d(p,u,c,f,r[g+11],10,-1120210379),f=d(f,p,u,c,r[g+2],15,718787259),c=d(c,f,p,u,r[g+9],21,-343485551),u=u+m>>>0,c=c+y>>>0,f=f+v>>>0,p=p+O>>>0}return t.endian([u,c,f,p])})._ff=function(e,n,r,t,s,i,o){var a=e+(n&r|~n&t)+(s>>>0)+o;return(a<<i|a>>>32-i)+n},a._gg=function(e,n,r,t,s,i,o){var a=e+(n&t|r&~t)+(s>>>0)+o;return(a<<i|a>>>32-i)+n},a._hh=function(e,n,r,t,s,i,o){var a=e+(n^r^t)+(s>>>0)+o;return(a<<i|a>>>32-i)+n},a._ii=function(e,n,r,t,s,i,o){var a=e+(r^(n|~t))+(s>>>0)+o;return(a<<i|a>>>32-i)+n},a._blocksize=16,a._digestsize=16,e.exports=function(e,n){if(null==e)throw Error("Illegal argument "+e);var r=t.wordsToBytes(a(e,n));return n&&n.asBytes?r:n&&n.asString?o.bytesToString(r):t.bytesToHex(r)}},89780:function(e,n,r){"use strict";r.r(n),r.d(n,{csvToObject:function(){return s},objectToCSV:function(){return i}});let t=new RegExp(/^,*$/);function s(e,n,r){let{delimiter:s=",",name:i}=null!=r?r:{};return new Promise((r,o)=>{try{let o={name:null!=i?i:n,rows:{len:0}},a=0,l="";e.on("line",e=>{let n=e;if(t.test(n))return o.rows[a]={cells:{}},a++,o;if(e.includes('"')&&(e.split('"').length+1)%2!=0&&""===l)return l+=n,o;if(e.includes('"')&&(e.split('"').length+1)%2==0&&""!==l)return l+="\n"+n,o;if(!e.includes('"')&&""!==l)return l+="\n"+n,o;else e.includes('"')&&(e.split('"').length+1)%2!=0&&""!==l&&(n=l+"\n"+n,l="");let r=function(e,n){let r="",t=!1,s={},i=0,o=e.replaceAll('""',"\x02");return o.split("").forEach((e,a)=>{switch(!0){case e===n&&!t:r.length>0&&(s=Object.assign(Object.assign({},s),{[i]:{text:r}}),r=""),i++;break;case e===n&&t:r+=e;break;case'"'===e:t=!t;break;case"\x02"===e:r+='"';break;default:r+=e}a===o.length-1&&""!==r&&(s=Object.assign(Object.assign({},s),{[i]:{text:r}}))}),{cells:s}}(n,s);return o.rows[a]=r,o.rows.len=a+1,a++,o}),e.on("close",()=>{r(o)})}catch(e){o(e)}})}function i(e,n,r){let{delimiter:t=","}=null!=r?r:{},s=0,i=Object.values(e.rows);i.forEach((e,r)=>{var i;let o="";if("number"!=typeof e&&"cells"in e){let a=Object.keys(e.cells).reduce((e,n)=>e<Number(n)?Number(n):e,0);0===r&&(s=a),0===a&&(o=",".repeat(s));for(let n=0;n<a+1;n++){let r=null===(i=e.cells[n])||void 0===i?void 0:i.text;switch(!0){case(null==r?void 0:r.includes(t))||(null==r?void 0:r.includes("\n"))||(null==r?void 0:r.includes('"')):o+='"'+(null==r?void 0:r.replaceAll('"','""'))+'"';break;case void 0!==r:o+=r}n!==a&&(o+=",")}""!==o&&a<s&&(o+=",".repeat(s-a)),n.write(o+"\r\n")}}),n.end()}},22707:function(e,n,r){"use strict";r.r(n),r.d(n,{jtox:function(){return u},sheetDataToJSON:function(){return c}});var t=r("80335");let s={english:["English"],japanese:["Japanese"],romaji:["Romaji"],grp:["Group"],subGrp:["Sub Group","Subgroup"],tag:["Tags"],pronounce:["Pronounced","Pronounce","Pronunciation"],opposite:["Opposites","Opposite"],lit:["Literal"],lesson:["Lesson"],kanji:["Kanji"],on:["Onyomi"],kun:["Kunyomi"],radex:["Radical Examples","Radex"]},i={japanese:-1,romaji:-1,english:-1,grp:-1,subGrp:-1,lit:-1,lesson:-1,tag:-1},o={japanese:-1,romaji:-1,english:-1,grp:-1,subGrp:-1,pronounce:-1,opposite:-1,tag:-1},a={kanji:-1,english:-1,on:-1,kun:-1,grp:-1,tag:-1,radex:-1};function l(e){let n=Object.values(e.rows).reduce((e,n)=>{if("number"!=typeof n&&n.cells&&Object.keys(n.cells).length>0){let r=Object.keys(n.cells).map(e=>Number(e)),t=r.reduce((e,r)=>{let{text:t}=n.cells[r];return void 0!==t&&(e[Number(r)]=t),e},Array(r.length));e=[...e,t]}return e},[]);return n}function u(e,n){let r;let t={name:n,rows:{len:0}};switch(n){case"Vocabulary":r=Object.assign({},o);break;case"Phrases":r=Object.assign({},i);break;case"Kanji":r=Object.assign({},a);break;default:throw Error(`Mapping for ${n} not implemented`)}let l=Object.keys(r);l.forEach((e,n)=>{var r,i;t.rows[0]={cells:Object.assign(Object.assign({},null!==(i=null===(r=t.rows[0])||void 0===r?void 0:r.cells)&&void 0!==i?i:{}),{[n]:{text:s[e][0]}})}});let u=1;for(let[n,r]of Object.entries(e)){for(let[e,n]of Object.entries(r)){let r=l.indexOf(e);r>-1&&((!t.rows[u]||!t.rows[u].cells)&&(t.rows[u]={cells:{}}),Array.isArray(n)?t.rows[u].cells[r]={text:n.join("\n")}:"string"==typeof n&&(t.rows[u].cells[r]={text:n}))}u++}return t.rows.len=u,t}function c(e){let n={},r="";switch(e.name){case"Vocabulary":{let{vocabularyRecord:s,hash:i}=function(e){let n=l(e);return function(e,n){let r=Object.assign({},o),s=n.reduce((n,s,i)=>{if(0===i&&s.forEach((e,n)=>{f(r,e,n)}),r.english<0||r.japanese<0||r.romaji<0||r.grp<0||r.subGrp<0||r.tag<0||r.pronounce<0){let n=Object.entries(r),t=n.findIndex(([e,n])=>n<0);throw Error(`Missing or incorrect header '${n[t][0]}' in ${e}.csv`)}if(i>0){let o={japanese:s[r.japanese],romaji:s[r.romaji],english:s[r.english]};if(!o.japanese)throw Error(`Missing first cell [1,${i+1}] in ${e}`);let a=t(o.japanese);s[r.grp]&&""!==s[r.grp]&&(o.grp=s[r.grp]),s[r.subGrp]&&""!==s[r.subGrp]&&(o.subGrp=s[r.subGrp]),s[r.pronounce]&&""!==s[r.pronounce]&&(o.pronounce=s[r.pronounce]),s[r.tag]&&""!==s[r.tag]&&(o.tag=s[r.tag]),s[r.romaji]&&""!==s[r.romaji]&&(o.romaji=s[r.romaji]),s[r.opposite]&&""!==s[r.opposite]&&(o.opposite=s[r.opposite].split("\n")),n[a]=o}return n},{}),i=t(JSON.stringify(s)).slice(0,4);return{hash:i,vocabularyRecord:s}}(e.name,n)}(e);n=s,r=i;break}case"Phrases":{let{phrasesRecord:s,hash:o}=function(e){let n=l(e);return function(e,n){let r=Object.assign({},i),s=n.reduce((n,s,i)=>{if(0===i&&s.forEach((e,n)=>{f(r,e,n)}),r.english<0||r.japanese<0||r.romaji<0||r.grp<0||r.subGrp<0||r.tag<0||r.lit<0||r.lesson<0){let n=Object.entries(r),t=n.findIndex(([e,n])=>n<0);throw Error(`Missing or incorrect header '${n[t][0]}' in ${e}.csv`)}if(i>0){let o={japanese:s[r.japanese],english:s[r.english]};if(!o.japanese)throw Error(`Missing first cell [1,${i+1}] in ${e}`);let a=t(o.japanese);s[r.lit]&&""!==s[r.lit]&&(o.lit=s[r.lit]),s[r.grp]&&""!==s[r.grp]&&(o.grp=s[r.grp]),s[r.subGrp]&&""!==s[r.subGrp]&&(o.subGrp=s[r.subGrp]),s[r.romaji]&&""!==s[r.romaji]&&(o.romaji=s[r.romaji]),s[r.lesson]&&""!==s[r.lesson]&&(o.lesson=s[r.lesson]),s[r.tag]&&""!==s[r.tag]&&(o.tag=s[r.tag]),n[a]=o}return n},{}),o=t(JSON.stringify(s)).slice(0,4);return{hash:o,phrasesRecord:s}}(e.name,n)}(e);n=s,r=o;break}case"Kanji":{let{kanjiRecord:s,hash:i}=function(e){let n=l(e);return function(e,n){let r=Object.assign({},a),s=n.reduce((n,s,i)=>{if(0===i&&s.forEach((e,n)=>{f(r,e,n)}),r.english<0||r.kanji<0||r.on<0||r.kun<0||r.grp<0||r.tag<0||r.radex<0){let n=Object.entries(r),t=n.findIndex(([e,n])=>n<0);throw Error(`Missing or incorrect header '${n[t][0]}' in ${e}.csv`)}if(i>0){let o={kanji:s[r.kanji],english:s[r.english]};if(!o.kanji)throw console.log("kanji"),Error(`Missing first cell [1,${i+1}] in ${e}`);let a=t(o.kanji);s[r.on]&&""!==s[r.on]&&(o.on=s[r.on]),s[r.kun]&&""!==s[r.kun]&&(o.kun=s[r.kun]),s[r.grp]&&""!==s[r.grp]&&(o.grp=s[r.grp]),s[r.tag]&&""!==s[r.tag]&&(o.tag=s[r.tag]),s[r.radex]&&""!==s[r.radex]&&(o.radex=s[r.radex]),n[a]=o}return n},{}),i=t(JSON.stringify(s)).slice(0,4);return{hash:i,kanjiRecord:s}}(e.name,n)}(e);n=s,r=i;break}case"Opposites":{let{oppositesList:s,hash:i}=function(e){let n=l(e);return function(e,n){let r=Object.assign({},o),s=[],i=n.reduce((n,i,o)=>{if(0===o&&i.forEach((e,n)=>{f(r,e,n)}),r.english<0||r.japanese<0||r.romaji<0||r.opposite<0){let n=Object.entries(r),t=n.findIndex(([e,n])=>n<0);throw Error(`Missing or incorrect header '${n[t][0]}' in ${e}.csv`)}if(o>0){let a={japanese:i[r.japanese],romaji:i[r.romaji],english:i[r.english]};if(!a.japanese)throw Error(`Missing first cell [1,${o+1}] in ${e}`);if(i[r.opposite]&&""!==i[r.opposite]){let e=t(a.japanese),o=i[r.opposite].split("\n");return o.forEach(e=>{s.push({japanese:i[r.japanese],romaji:i[r.romaji],english:i[r.english],opposite:e})}),Object.assign(Object.assign({},n),{[e]:{japanese:i[r.japanese],romaji:i[r.romaji],english:i[r.english]}})}}return n},{}),a=s.map(e=>[{japanese:e.japanese,romaji:e.romaji,english:e.english},i[e.opposite]]),l=t(JSON.stringify(a)).slice(0,4);return{hash:l,oppositesList:a}}(e.name,n)}(e);n=s,r=i}}return{data:n,hash:r}}function f(e,n,r){let t=n.toLowerCase(),i=Object.entries(s);if(t&&t.length>0){let n=i.findIndex(([e,n])=>void 0!==n.find(e=>e.toLowerCase()===t));-1!==n&&(e[i[n][0]]=r)}}},88134:function(e,n,r){"use strict";function t(e){let n=void 0!==e.name&&e.rows.len>=0&&Object.keys(e.rows).length>0;return n}function s(e){let n=Object.keys(e).reduce((e,n)=>e<Number(n)?Number(n):e,0);return n}r.r(n),r.d(n,{isFilledSheetData:function(){return t},getLastCellIdx:function(){return s}})}}]);