(self.webpackChunknmemonica=self.webpackChunknmemonica||[]).push([["407"],{62286:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var s=n("17581"),i=n("9490"),l=n("62537"),r=n("18554"),a=n.n(r),c=n("6085"),o=n.n(c);let d=String.fromCharCode(parseInt("0x221e",16));function u(e){let{label:t=null,value:n,multiplier:r=1,children:c=null}=e;return(0,s.jsxs)("div",{className:a()({"mb-3 d-flex flex-row justify-content-end":!0}),children:[(0,s.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[(0,s.jsx)("div",{children:t}),c]}),(0,s.jsxs)("div",{className:"d-flex flex-column",children:[(0,s.jsx)("div",{className:"clickable px-3 text-center",onClick:()=>{e.onChange(void 0!==n?n+Number(r):0)},children:(0,s.jsx)(l.FontAwesomeIcon,{icon:i.faChevronUp})}),(0,s.jsx)("div",{className:a()({"text-center px-2":!0}),children:n??d}),(0,s.jsx)("div",{className:"clickable px-3 text-center",onClick:()=>{e.onChange(void 0!==n?Math.max(0,n-Number(r)):0)},children:(0,s.jsx)(l.FontAwesomeIcon,{icon:i.faChevronDown})})]})]})}u.propTypes={value:o().number}},83523:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var s=n("17581"),i=n("75092"),l=n("92820"),r=n("62286"),a=n("86484"),c=n("41275"),o=n("21577"),d=n("90210"),u=n("27068"),m=n("62242"),x=n("48000"),h=n("31980"),j=n("12960"),f=n("87519"),v=n("98401"),p=n("41259");function b(){let e=(0,i.useDispatch)(),{vocabList:t}=(0,x.useConnectVocabulary)(),{filterType:n,orderType:b,difficultyThreshold:g,reinforce:y,activeTags:T,kanjiList:N,repetition:C,kanjiTagObj:k,spaRepMaxReviewItem:F,includeNew:A,includeReviewed:S}=(0,m.useConnectKanji)(),w=n.current,I=b.current;if(0===t.length&&e((0,f.getVocabulary)()),0===Object.keys(k).length&&e((0,h.getKanji)()),N.length<1||Object.keys(k).length<1)return(0,s.jsx)(l.NotReady,{addlStyle:"vocabulary-settings"});let R=Object.values(N).filter(e=>e.tags.some(e=>T.includes(e))),L=R.map(e=>e.uid),E=Object.keys(C).filter(e=>{var t;return(null===(t=C[e])||void 0===t?void 0:t.rein)===!0}),M=E.filter(e=>!L.includes(e));return(0,s.jsx)("div",{className:"outer",children:(0,s.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,s.jsxs)("div",{className:"column-1",children:[(0,s.jsx)("span",{className:"fs-5 fw-light",children:(0,u.labelOptions)(w,["Kanji Group","Frequency List","Tags"])}),(0,s.jsx)("div",{className:"mb-2",children:(0,s.jsx)(a.default,{active:w%2==0,action:(0,d.buildAction)(e,h.toggleKanjiFilter),color:"default",statusText:"Filter by"})}),w===j.TermFilterBy.FREQUENCY&&0===E.length&&(0,s.jsx)("div",{className:"fst-italic",children:"No words have been chosen"}),w===j.TermFilterBy.TAGS&&(0,s.jsx)(p.SetTermTagList,{selectedCount:0===R.length?Object.values(N).length:R.length,termsTags:k,termsActive:T,toggleTermActive:(0,d.buildAction)(e,h.toggleKanjiActiveTag)}),w===j.TermFilterBy.FREQUENCY&&E.length>0&&(0,s.jsx)(v.SetTermGFList,{termsActive:T,termsFreq:E,terms:N,removeFrequencyTerm:(0,d.buildAction)(e,h.removeFrequencyKanji),toggleTermActiveGrp:(0,d.buildAction)(e,h.toggleKanjiActiveGrp)})]}),(0,s.jsxs)("div",{className:"column-2 setting-block",children:[(0,s.jsx)("div",{className:"mb-2",children:(0,s.jsx)(c.default,{title:"Sort by:",options:j.TermSortByLabel,allowed:[j.TermSortBy.DIFFICULTY,j.TermSortBy.RANDOM,j.TermSortBy.VIEW_DATE,j.TermSortBy.RECALL],initial:I,onChange:t=>(j.TermSortBy.RECALL===t&&e((0,h.toggleKanjiReinforcement)(!1)),(0,d.buildAction)(e,h.toggleKanjiOrdering)(t))})}),I===j.TermSortBy.RECALL&&(0,s.jsxs)(r.default,{value:F,onChange:t=>{e((0,h.setSpaRepMaxItemReview)(t))},children:[(0,s.jsx)("div",{children:"Max review items"}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)("span",{className:"clickable",onClick:()=>{e((0,h.setSpaRepMaxItemReview)(0))},children:[(0,s.jsx)("b",{children:"m"}),"in"]})," ","-"," ",(0,s.jsxs)("span",{className:"clickable",onClick:()=>{e((0,h.setSpaRepMaxItemReview)(void 0))},children:[(0,s.jsx)("b",{children:"M"}),"ax"]})]})]}),(0,s.jsx)("div",{className:"d-flex justify-content-end",children:(0,s.jsx)(o.ThresholdFilterSlider,{threshold:g,setThreshold:(0,d.buildAction)(e,h.setMemorizedThreshold)})}),I===j.TermSortBy.VIEW_DATE&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"mb-2",children:(0,s.jsx)(a.default,{active:A,action:(0,d.buildAction)(e,h.toggleIncludeNew),statusText:"Staleness +New"})}),(0,s.jsx)("div",{className:"mb-2",children:(0,s.jsx)(a.default,{active:S,action:(0,d.buildAction)(e,h.toggleIncludeReviewed),statusText:"Staleness +Reviewed"})})]}),(0,s.jsx)("div",{className:"mb-2",children:(0,s.jsx)(a.default,{active:y.current,action:(0,d.buildAction)(e,h.toggleKanjiReinforcement),disabled:w===j.TermFilterBy.FREQUENCY||I===j.TermSortBy.RECALL,statusText:(y?`(+${M.length} ) `:"")+"Reinforcement"})})]})]})})}},41275:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var s=n("17581"),i=n("15764"),l=n("50098"),r=n("18554"),a=n.n(r),c=n("6085"),o=n.n(c),d=n("74288");function u(e){let[t,n]=(0,d.useState)(null),[r,c]=(0,d.useState)(e.initial),o=(0,d.useRef)(e.options),u=(0,d.useRef)(e.allowed??e.options.map((e,t)=>t)),m=o.current,x=u.current;(0,d.useEffect)(()=>{c(e.initial)},[e.initial]);let h=!!t,j=e=>{n(e.currentTarget)},f=(t,s)=>{c(s),n(null),e.onChange(s)};return(0,s.jsxs)("div",{className:a()({clickable:!0!==e.disabled,"d-flex":!0,"flex-row-reverse":!0===e.flip||void 0,"justify-content-end":!0}),children:[(0,s.jsx)(i.List,{component:"nav",disablePadding:!0,children:(0,s.jsx)(i.ListItemButton,{disableGutters:!0,disabled:!0===e.disabled,id:"filter-button","aria-haspopup":"listbox","aria-controls":"filter-menu","aria-expanded":h?"true":void 0,onClick:j,children:(0,s.jsx)(i.ListItemText,{primary:e.title,secondary:m[r],secondaryTypographyProps:{color:"unset"}})})}),(0,s.jsx)(i.Menu,{id:"filter-menu",anchorEl:t,open:h,onClose:()=>{n(null)},MenuListProps:{"aria-labelledby":"filter-button",role:"listbox"},children:m.map((e,t)=>(0,s.jsx)(i.MenuItem,{selected:t===r,onClick:e=>{x.includes(t)&&f(e,t)},children:x.includes(t)?e:(0,s.jsx)("span",{className:"disabled-color",children:e})},e))}),(0,s.jsx)(i.IconButton,{"aria-labelledby":"filter-button",sx:{color:"unset",minWidth:"55px"},"aria-haspopup":"listbox",disabled:!0===e.disabled,onClick:j,children:(0,s.jsx)(l.KebabHorizontalIcon,{size:"medium",className:a()({"rotate-transition":!0,"rotate-90":h})})})]})}u.propTypes={disabled:o().bool,flip:o().bool,title:o().string,options:o().arrayOf(o().string),initial:o().number,onChange:o().func}},21577:function(e,t,n){"use strict";n.r(t),n.d(t,{ThresholdFilterSlider:function(){return u}});var s=n("17581"),i=n("15764"),l=n("50098"),r=n("6085"),a=n.n(r),c=n("74288"),o=n("83249"),d=n("43560");function u(e){let{threshold:t,setThreshold:n}=e,[r]=(0,c.useState)(Math.abs(t)),a=(0,o.heatMap)(Math.abs(t)/100,.75),u=[{value:d.MEMORIZED_THRLD},{value:d.DIFFICULTY_THRLD}],m=(0,c.useCallback)(()=>{n(-1*t)},[n,t]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"position-relative text-nowrap w-0 fs-x-small",style:{top:"-15px"},children:`Difficulty filter: ${t}`}),(0,s.jsx)(i.Slider,{sx:{color:a},defaultValue:r,marks:u,track:t<0?void 0:"inverted",onChangeCommitted:(e,s)=>{let i=t<0?-1:1;"number"==typeof s&&(0===s?n(Number(i)):n(i*s))},valueLabelDisplay:"auto"}),(0,s.jsx)("div",{className:"mt-2 ms-3 ",onClick:m,children:t<0?(0,s.jsx)(l.SortAscIcon,{}):(0,s.jsx)(l.SortDescIcon,{})})]})}u.propTypes={threshold:a().number,setThreshold:a().func}},98401:function(e,t,n){"use strict";n.r(t),n.d(t,{SetTermGFList:function(){return d}});var s=n("17581"),i=n("50098"),l=n("18554"),r=n.n(l),a=n("6085"),c=n.n(a);function o(e,t,n,l,a){return(0,s.jsxs)("div",{className:r()({"p-0 px-2":!0,clickable:e}),onClick:()=>{e&&a(n)},children:[(0,s.jsxs)("span",{className:"p-1",children:[e&&(0,s.jsx)(i.XCircleIcon,{className:"incorrect-color",size:"small","aria-label":"remove"}),!e&&(0,s.jsx)(i.IssueDraftIcon,{size:"small","aria-label":"inactive"})]}),(0,s.jsx)("span",{className:"p-1",children:l})]},n)}function d(e){let t=[],n=e.termsFreq.reduce((n,s)=>{let i=e.terms.find(e=>e.uid===s);return i?n=[...n,i]:t=[...t,s],n},[]).reduce((e,t)=>{let n=t.grp?t.grp:"undefined";return e[n]?e[n]=[...e[n],t]:e[n]=[t],e},{});return(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:"fs-5 fw-light",children:"Frequency"}),(0,s.jsx)("div",{children:Object.keys(n).map(t=>{let i=e.termsActive.includes(t);return(0,s.jsxs)("div",{className:"mb-2",children:[(0,s.jsx)("span",{className:r()({"fw-bold":i}),onClick:()=>e.toggleTermActiveGrp(t),children:t}),(0,s.jsx)("div",{children:n[t].map((t,n)=>o(i,n,t.uid,t.english,e.removeFrequencyTerm))})]},t)})}),t.length>0&&(0,s.jsxs)("div",{className:"mt-5 text-break",children:[(0,s.jsx)("span",{className:"fw-bold",children:"Manual cleanup"}),t.map((t,n)=>o(!0,n,t,t,e.removeFrequencyTerm))]})]})}n("74288"),d.propTypes={termsActive:c().array,termsFreq:c().array,terms:c().array,removeFrequencyTerm:c().func,toggleTermActiveGrp:c().func}}}]);
//# sourceMappingURL=407.8ff4f5a0.js.map