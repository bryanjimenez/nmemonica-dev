(self.webpackChunknmemonica=self.webpackChunknmemonica||[]).push([["483"],{71420:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return p}});var a=l("17581"),n=l("50098"),i=l("74288"),c=l("75092"),t=l("92820"),d=l("27068"),r=l("62242"),h=l("3637"),o=l("48000"),u=l("31980"),x=l("57390"),m=l("87519"),j=l("26101");function p(){let e=(0,c.useDispatch)(),[s,l]=(0,i.useState)(!1),{vocabList:p,repetition:f}=(0,o.useConnectVocabulary)(),{phraseList:g,repetition:k}=(0,h.useConnectPhrase)(),{kanjiList:b,repetition:N}=(0,r.useConnectKanji)(),{keys:v,list:y}=(0,i.useMemo)(()=>(0,d.getStaleSpaceRepKeys)(f,p,"[Stale Vocabulary]"),[p,f]),{keys:S,list:w}=(0,i.useMemo)(()=>(0,d.getStaleSpaceRepKeys)(k,g,"[Stale Phrase]"),[g,k]),{keys:M,list:C}=(0,i.useMemo)(()=>(0,d.getStaleSpaceRepKeys)(N,b,"[Stale Kanji]"),[b,N]),K=(0,i.useMemo)(()=>new Set([...v,...S,...M]),[v,S,M]),P=(0,i.useMemo)(()=>(function(e){return e.reduce((s,l,n)=>{let i=(0,a.jsx)("hr",{},`stale-meta-${l.uid}`),c=(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("span",{className:"col p-0",children:l.key}),(0,a.jsx)("span",{className:"col p-0",children:l.english}),(0,a.jsx)("span",{className:"col p-0 app-sm-fs-xx-small",children:(0,a.jsx)("div",{children:l.uid})})]},l.uid);return s.length>0&&n<e.length?[...s,i,c]:[...s,c]},[])})([...y,...w,...C]),[y,w,C]),R=(0,i.useMemo)(()=>C.reduce((e,s)=>"uid"===s.key?[...e,s.uid]:e,[]),[C]),V=(0,i.useMemo)(()=>w.reduce((e,s)=>"uid"===s.key?[...e,s.uid]:e,[]),[w]),I=(0,i.useMemo)(()=>y.reduce((e,s)=>"uid"===s.key?[...e,s.uid]:e,[]),[y]),T=(0,i.useCallback)(()=>{V.length>0&&e((0,x.deleteMetaPhrase)(V))},[e,V]),z=(0,i.useCallback)(()=>{I.length>0&&e((0,m.deleteMetaVocab)(I))},[e,I]),L=(0,i.useCallback)(()=>{R.length>0&&e((0,u.deleteMetaKanji)(R))},[e,R]);return(0,a.jsxs)(a.Fragment,{children:[(V.length>0||I.length>0||R.length>0)&&(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("span",{className:"fs-5",children:"Stale Metadata UID"}),(0,a.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,a.jsx)("div",{className:"column-1"}),(0,a.jsx)("div",{className:"column-2",children:(0,a.jsxs)("div",{className:"setting-block",children:[V.length>0&&(0,a.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,a.jsxs)("span",{children:["Phrase: ",V.length]}),(0,a.jsx)("div",{className:"ps-4",onClick:T,children:(0,a.jsx)(n.TrashIcon,{className:"clickable",size:"small","aria-label":"delete"})})]}),I.length>0&&(0,a.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,a.jsxs)("span",{children:["Vocabulary: ",I.length]}),(0,a.jsx)("div",{className:"ps-4",onClick:z,children:(0,a.jsx)(n.TrashIcon,{className:"clickable",size:"small","aria-label":"delete"})})]}),R.length>0&&(0,a.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,a.jsxs)("span",{children:["Kanji: ",R.length]}),(0,a.jsx)("div",{className:"ps-4",onClick:L,children:(0,a.jsx)(n.TrashIcon,{className:"clickable",size:"small","aria-label":"delete"})})]})]})})]})]}),(0,a.jsxs)("div",{className:"mb-2",children:[(0,a.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,a.jsx)("span",{className:"fs-5",children:"Stale Space Repetition"}),(0,j.collapseExpandToggler)(s,l)]}),(0,a.jsxs)("div",{children:[V.length>0&&(0,a.jsxs)("div",{onClick:T,children:["Stale Phrase Metadata: ",V.length]}),I.length>0&&(0,a.jsxs)("div",{onClick:z,children:["Stale Vocab Metadata: ",I.length]}),R.length>0&&(0,a.jsxs)("div",{onClick:L,children:["Stale Kanji Metadata: ",R.length]})]}),(0,a.jsx)("div",{className:"px-4",children:(0,a.jsx)("span",{children:"keys: "+JSON.stringify(Array.from(K))})}),s&&(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)(t.NotReady,{addlStyle:"failed-spacerep-view"}),children:(0,a.jsx)("div",{className:"failed-spacerep-view container mt-2 p-0",children:P})})]})]})}}}]);
//# sourceMappingURL=483.de738b47.js.map