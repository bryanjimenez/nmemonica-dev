(self.webpackChunknmemonica=self.webpackChunknmemonica||[]).push([["748"],{62286:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return d}});var r=t("17581"),l=t("9490"),i=t("62537"),n=t("18554"),c=t.n(n);let a=String.fromCharCode(parseInt("0x221e",16));function d(e){let{label:s=null,value:t,multiplier:n=1,children:d=null}=e;return(0,r.jsxs)("div",{className:c()({"d-flex flex-row justify-content-end":!0}),children:[(0,r.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[(0,r.jsx)("div",{children:s}),d]}),(0,r.jsxs)("div",{className:"d-flex flex-column",children:[(0,r.jsx)("div",{className:"clickable px-3 text-center",onClick:()=>{e.onChange(void 0!==t?t+Number(n):0)},children:(0,r.jsx)(i.FontAwesomeIcon,{icon:l.faChevronUp})}),(0,r.jsx)("div",{className:c()({"text-center px-2":!0}),children:t??a}),(0,r.jsx)("div",{className:"clickable px-3 text-center",onClick:()=>{e.onChange(void 0!==t?Math.max(0,t-Number(n)):0)},children:(0,r.jsx)(i.FontAwesomeIcon,{icon:l.faChevronDown})})]})]})}},52802:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return f}});var r=t("17581"),l=t("75092"),i=t("92820"),n=t("62286"),c=t("86484"),a=t("41275"),d=t("21577"),o=t("90210"),m=t("27068"),u=t("3637"),h=t("57390"),x=t("12960"),v=t("98401"),j=t("51956");function f(){let e=(0,l.useDispatch)(),{phraseList:s,phraseGroups:t,sortMethod:f,romajiActive:p,difficultyThreshold:g,activeGroup:N,filterType:b,repetition:T,reinforce:y,spaRepMaxReviewItem:C,includeNew:A,includeReviewed:S}=(0,u.useConnectPhrase)(),F=b.current,k=f.current,w=p.current,R=y.current;0===s.length&&e((0,h.getPhrase)());let I=Object.keys(T).filter(e=>{var s;return(null===(s=T[e])||void 0===s?void 0:s.rein)===!0});if(s.length<1||Object.keys(t).length<1)return(0,r.jsx)(i.NotReady,{addlStyle:"phrases-settings"});let G=(0,m.getStaleGroups)(t,N);if(G.length>0)throw Error("Stale phrases active group",{cause:{code:"StalePhraseActiveGrp",value:G}});return(0,r.jsx)("div",{className:"outer",children:(0,r.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,r.jsxs)("div",{className:"column-1",children:[(0,r.jsx)("span",{className:"fs-5 fw-light",children:(0,m.labelOptions)(F,["Phrases Group","Frequency List","NOT_USED_Tags"])}),(0,r.jsx)("div",{className:"mb-2",children:(0,r.jsx)(c.default,{active:F%2==0,action:(0,o.buildAction)(e,h.togglePhrasesFilter),color:"default",statusText:"Filter by"})}),F===x.TermFilterBy.GROUP&&(0,r.jsx)(j.SetTermGList,{termsGroups:t,termsActive:N,toggleTermActiveGrp:s=>e((0,h.togglePhraseActiveGrp)(s))}),F===x.TermFilterBy.FREQUENCY&&0===I.length&&(0,r.jsx)("div",{className:"fst-italic",children:"No phrases have been chosen"}),F===x.TermFilterBy.FREQUENCY&&I.length>0&&(0,r.jsx)(v.SetTermGFList,{termsActive:N,termsFreq:I,terms:s,removeFrequencyTerm:s=>e((0,h.removeFrequencyPhrase)(s)),toggleTermActiveGrp:s=>e((0,h.togglePhraseActiveGrp)(s))})]}),(0,r.jsxs)("div",{className:"column-2 setting-block",children:[(0,r.jsx)("div",{className:"mb-2",children:(0,r.jsx)(a.default,{title:"Sort by:",options:x.TermSortByLabel,initial:k,allowed:[x.TermSortBy.DIFFICULTY,x.TermSortBy.RANDOM,x.TermSortBy.VIEW_DATE,x.TermSortBy.RECALL],onChange:s=>(x.TermSortBy.RECALL===s&&e((0,h.togglePhrasesReinforcement)(!1)),(0,o.buildAction)(e,h.togglePhrasesOrdering)(s))})}),k===x.TermSortBy.RECALL&&(0,r.jsx)("div",{className:"mb-2",children:(0,r.jsxs)(n.default,{value:C,onChange:s=>{e((0,h.setSpaRepMaxItemReview)(s))},children:[(0,r.jsx)("div",{className:"text-nowrap",children:"Max review items"}),(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsxs)("span",{className:"clickable",onClick:()=>{e((0,h.setSpaRepMaxItemReview)(0))},children:[(0,r.jsx)("b",{children:"m"}),"in"]})," ","-"," ",(0,r.jsxs)("span",{className:"clickable",onClick:()=>{e((0,h.setSpaRepMaxItemReview)(void 0))},children:[(0,r.jsx)("b",{children:"M"}),"ax"]})]})]})}),(0,r.jsx)("div",{className:"d-flex justify-content-end",children:(0,r.jsx)(d.ThresholdFilterSlider,{threshold:g,setThreshold:(0,o.buildAction)(e,h.setMemorizedThreshold)})}),k===x.TermSortBy.VIEW_DATE&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"mb-2",children:(0,r.jsx)(c.default,{active:A,action:(0,o.buildAction)(e,h.toggleIncludeNew),statusText:"Staleness +New"})}),(0,r.jsx)("div",{className:"mb-2",children:(0,r.jsx)(c.default,{active:S,action:(0,o.buildAction)(e,h.toggleIncludeReviewed),statusText:"Staleness +Reviewed"})})]}),(0,r.jsx)("div",{className:"mb-2",children:(0,r.jsx)(c.default,{active:R,action:(0,o.buildAction)(e,h.togglePhrasesReinforcement),disabled:F===x.TermFilterBy.FREQUENCY||k===x.TermSortBy.RECALL,statusText:"Reinforcement"})}),(0,r.jsx)("div",{className:"mb-2",children:(0,r.jsx)(c.default,{active:w,action:(0,o.buildAction)(e,h.togglePhrasesRomaji),statusText:"Romaji"})})]})]})})}},21577:function(e,s,t){"use strict";t.r(s),t.d(s,{ThresholdFilterSlider:function(){return d}});var r=t("17581"),l=t("15764"),i=t("50098"),n=t("74288"),c=t("83249"),a=t("43560");function d(e){let{threshold:s,setThreshold:t}=e,[d]=(0,n.useState)(Math.abs(s)),o=(0,c.heatMap)(Math.abs(s)/100,.75),m=[{value:a.MEMORIZED_THRLD},{value:a.DIFFICULTY_THRLD}],u=(0,n.useCallback)(()=>{t(-1*s)},[t,s]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"w-100 d-flex flex-column",children:[(0,r.jsx)("div",{className:"text-nowrap fs-x-small text-start",children:`Difficulty filter: ${s}`}),(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)(l.Slider,{sx:{color:o},defaultValue:d,marks:m,track:s<0?void 0:"inverted",onChangeCommitted:(e,r)=>{let l=s<0?-1:1;"number"==typeof r&&(0===r?t(Number(l)):t(l*r))},valueLabelDisplay:"auto"}),(0,r.jsx)("div",{className:"mt-2 ms-3 ",onClick:u,children:s<0?(0,r.jsx)(i.SortAscIcon,{}):(0,r.jsx)(i.SortDescIcon,{})})]})]})})}},98401:function(e,s,t){"use strict";t.r(s),t.d(s,{SetTermGFList:function(){return a}});var r=t("17581"),l=t("50098"),i=t("18554"),n=t.n(i);function c(e,s,t,i,c){return(0,r.jsxs)("div",{className:n()({"p-0 px-2":!0,clickable:e}),onClick:()=>{e&&c(t)},children:[(0,r.jsxs)("span",{className:"p-1",children:[e&&(0,r.jsx)(l.XCircleIcon,{className:"incorrect-color",size:"small","aria-label":"remove"}),!e&&(0,r.jsx)(l.IssueDraftIcon,{size:"small","aria-label":"inactive"})]}),(0,r.jsx)("span",{className:"p-1",children:i})]},t)}function a(e){let s=[],t=e.termsFreq.reduce((t,r)=>{let l=e.terms.find(e=>e.uid===r);return l?t=[...t,l]:s=[...s,r],t},[]).reduce((e,s)=>{let t=s.grp?s.grp:"undefined";return e[t]?e[t]=[...e[t],s]:e[t]=[s],e},{});return(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"fs-5 fw-light",children:"Frequency"}),(0,r.jsx)("div",{children:Object.keys(t).map(s=>{let l=e.termsActive.includes(s);return(0,r.jsxs)("div",{className:"mb-2",children:[(0,r.jsx)("span",{className:n()({"fw-bold":l}),onClick:()=>e.toggleTermActiveGrp(s),children:s}),(0,r.jsx)("div",{children:t[s].map((s,t)=>c(l,t,s.uid,s.english,e.removeFrequencyTerm))})]},s)})}),s.length>0&&(0,r.jsxs)("div",{className:"mt-5 text-break",children:[(0,r.jsx)("span",{className:"fw-bold",children:"Manual cleanup"}),s.map((s,t)=>c(!0,t,s,s,e.removeFrequencyTerm))]})]})}},51956:function(e,s,t){"use strict";t.r(s),t.d(s,{SetTermGList:function(){return c}});var r=t("17581"),l=t("91453"),i=t.n(l),n=t("78766");function c(e){return(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"fs-5 fw-light",children:"Groups"}),Object.keys(e.termsGroups).map(s=>{let t=e.termsActive.includes(s);return(0,r.jsxs)("div",{children:[(0,r.jsx)(n.GroupItem,{active:e.termsActive.includes(s),onClick:()=>e.toggleTermActiveGrp(s),children:s}),!t&&i()(e.termsGroups[s],e=>{let[,s]=e.split("_");return Number.isInteger(parseInt(s,10))?parseInt(s,10):e}).map(t=>(0,r.jsx)(n.GroupItem,{addlStyle:"ms-3",active:e.termsActive.includes(s+"."+t),onClick:()=>{e.toggleTermActiveGrp(s+"."+t)},children:t},`${s}.${t}`))]},s)})]})}}}]);
//# sourceMappingURL=748.ce3a4c3f.js.map