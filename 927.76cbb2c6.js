(self.webpackChunknmemonica=self.webpackChunknmemonica||[]).push([["927"],{28720:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return h}});var n=a("10327"),r=a("83169"),i=a("40432"),c=a("42565"),l=a("45307"),t=a("93197"),u=a("80161"),o=a("72530"),d=a("93781");function h(){let e=(0,i.useDispatch)(),{vocabList:s}=(0,u.useConnectVocabulary)(),{phraseList:a}=(0,t.useConnectPhrase)();(0,r.useEffect)(()=>{0===s.length&&e((0,d.getVocabulary)()),0===a.length&&e((0,o.getPhrase)())},[]);let h=(0,r.useMemo)(()=>(function(e){return e.reduce((s,a,r)=>{let i=l.JapaneseText.parse(a);if(i.hasFurigana())try{(0,l.furiganaParseRetry)(i.getPronunciation(),i.getSpellingRAW())}catch(c){if(c instanceof Error&&"cause"in c){let l=c.cause;if("ParseError"===l.code||"InputError"===l.code){let t=(0,n.jsx)("hr",{},`parse-err-sep-${a.uid}`),u=(0,n.jsxs)("div",{className:"row",children:[(0,n.jsx)("span",{className:"col p-0",children:i.toHTML({showError:!1})}),(0,n.jsx)("span",{className:"col p-0",children:a.english}),(0,n.jsxs)("span",{className:"col p-0 app-sm-fs-xx-small",children:[(0,n.jsx)("div",{children:c.message}),(0,n.jsx)("div",{children:l.info?JSON.stringify(l.info):""})]})]},`parse-err-${a.uid}`);return s.length>0&&r<e.length-1?[...s,t,u]:[...s,u]}}}return s},[])})([...a,...s]),[s,a]),f=(0,n.jsx)(n.Fragment,{children:h.length>0&&(0,n.jsxs)("div",{className:"mb-2",children:[(0,n.jsx)("span",{className:"fs-5",children:"Failed Furigana Parse"}),(0,n.jsx)(r.Suspense,{fallback:(0,n.jsx)(c.NotReady,{addlStyle:"failed-furigana-view"}),children:(0,n.jsx)("div",{className:"failed-furigana-view container mt-2 p-0",children:h})})]})});return f}}}]);