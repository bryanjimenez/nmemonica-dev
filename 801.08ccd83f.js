(self.webpackChunknmemonica=self.webpackChunknmemonica||[]).push([["801"],{62286:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var l=s("17581"),i=s("9490"),r=s("62537"),n=s("18554"),a=s.n(n),c=s("6085"),o=s.n(c);let d=String.fromCharCode(parseInt("0x221e",16));function u(e){let{label:t=null,value:s,multiplier:n=1,children:c=null}=e;return(0,l.jsxs)("div",{className:a()({"d-flex flex-row justify-content-end":!0}),children:[(0,l.jsxs)("div",{className:"d-flex flex-column justify-content-center",children:[(0,l.jsx)("div",{children:t}),c]}),(0,l.jsxs)("div",{className:"d-flex flex-column",children:[(0,l.jsx)("div",{className:"clickable px-3 text-center",onClick:()=>{e.onChange(void 0!==s?s+Number(n):0)},children:(0,l.jsx)(r.FontAwesomeIcon,{icon:i.faChevronUp})}),(0,l.jsx)("div",{className:a()({"text-center px-2":!0}),children:s??d}),(0,l.jsx)("div",{className:"clickable px-3 text-center",onClick:()=>{e.onChange(void 0!==s?Math.max(0,s-Number(n)):0)},children:(0,l.jsx)(r.FontAwesomeIcon,{icon:i.faChevronDown})})]})]})}u.propTypes={value:o().number}},716:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return N}});var l=s("17581"),i=s("50098"),r=s("18554"),n=s.n(r),a=s("74288"),c=s("75092"),o=s("92820"),d=s("62286"),u=s("86484"),m=s("41275"),x=s("21577"),h=s("17847"),v=s("90210"),b=s("27068"),p=s("48000"),j=s("12960"),f=s("87519"),g=s("98401"),y=s("51956");function N(){let e=(0,c.useDispatch)(),{vocabList:t,vocabGroups:s,sortMethod:r,romajiEnabled:N,bareKanji:T,hintEnabled:C,activeGroup:A,autoVerbView:k,verbColSplit:w,filterType:F,difficultyThreshold:S,repetition:I,spaRepMaxReviewItem:R,reinforce:G,verbFormsOrder:V,includeNew:L,includeReviewed:M}=(0,p.useConnectVocabulary)(),E=F.current,q=r.current,B=G.current,O=C.current;0===Object.keys(s).length&&e((0,f.getVocabulary)());let D=(0,a.useMemo)(()=>Object.keys(I).filter(e=>{var t;return(null===(t=I[e])||void 0===t?void 0:t.rein)===!0}),[I]),[z,U]=(0,a.useMemo)(()=>{let e=f.vocabularyInitState.setting.verbFormsOrder,t=V.reduce((t,s)=>(e.includes(s)&&(t=[...t,s]),t),[]),s=e.reduce((e,s)=>(!t.includes(s)&&(e=[...e,s]),e),[]);return[t,s]},[V]);if(t.length<1||Object.keys(s).length<1)return(0,l.jsx)(o.NotReady,{addlStyle:"vocabulary-settings"});let H=(0,b.getStaleGroups)(s,A);if(H.length>0)throw Error("Stale vocabulary active group",{cause:{code:"StaleVocabActiveGrp",value:H}});return(0,l.jsx)("div",{className:"outer",children:(0,l.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,l.jsxs)("div",{className:"column-1",children:[(0,l.jsx)(m.default,{flip:!0,title:"Filter by:",options:["Word Group","Frequency List"],initial:E,onChange:(0,v.buildAction)(e,f.toggleVocabularyFilter)}),E===j.TermFilterBy.GROUP&&(0,l.jsx)(y.SetTermGList,{termsGroups:s,termsActive:A,toggleTermActiveGrp:(0,v.buildAction)(e,f.toggleVocabularyActiveGrp)}),E===j.TermFilterBy.FREQUENCY&&0===D.length&&(0,l.jsx)("div",{className:"fst-italic",children:"No words have been chosen"}),E===j.TermFilterBy.FREQUENCY&&D.length>0&&(0,l.jsx)(g.SetTermGFList,{termsActive:A,termsFreq:D,terms:t,removeFrequencyTerm:(0,v.buildAction)(e,f.removeFrequencyWord),toggleTermActiveGrp:(0,v.buildAction)(e,f.toggleVocabularyActiveGrp)})]}),(0,l.jsxs)("div",{className:"column-2 setting-block",children:[(0,l.jsx)(m.default,{title:"Sort by:",options:j.TermSortByLabel,initial:q,onChange:t=>(j.TermSortBy.RECALL===t&&e((0,f.toggleVocabularyReinforcement)(!1)),(0,v.buildAction)(e,f.toggleVocabularyOrdering)(t))}),(0,l.jsx)("div",{className:"d-flex justify-content-end",children:(0,l.jsx)(x.ThresholdFilterSlider,{threshold:S,setThreshold:(0,v.buildAction)(e,f.setMemorizedThreshold)})}),q===j.TermSortBy.RECALL&&(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsxs)(d.default,{value:R,onChange:t=>{e((0,f.setSpaRepMaxItemReview)(t))},children:[(0,l.jsx)("div",{className:"text-nowrap",children:"Max review items"}),(0,l.jsxs)("div",{className:"text-center",children:[(0,l.jsxs)("span",{className:"clickable",onClick:()=>{e((0,f.setSpaRepMaxItemReview)(0))},children:[(0,l.jsx)("b",{children:"m"}),"in"]})," ","-"," ",(0,l.jsxs)("span",{className:"clickable",onClick:()=>{e((0,f.setSpaRepMaxItemReview)(void 0))},children:[(0,l.jsx)("b",{children:"M"}),"ax"]})]})]})}),q===j.TermSortBy.VIEW_DATE&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsx)(u.default,{active:L,action:(0,v.buildAction)(e,f.toggleIncludeNew),statusText:"Staleness +New"})}),(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsx)(u.default,{active:M,action:(0,v.buildAction)(e,f.toggleIncludeReviewed),statusText:"Staleness +Reviewed"})})]}),(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsx)(u.default,{active:B,action:(0,v.buildAction)(e,f.toggleVocabularyReinforcement),disabled:E===j.TermFilterBy.FREQUENCY||q===j.TermSortBy.RECALL,statusText:"Reinforcement"})}),(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsx)(u.default,{active:N,action:(0,v.buildAction)(e,f.toggleVocabularyRomaji),statusText:"Romaji"})}),(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsx)(u.default,{active:T,action:(0,v.buildAction)(e,f.toggleVocabularyBareKanji),statusText:"English+Kanji"})}),(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsx)(u.default,{active:O,action:(0,v.buildAction)(e,f.toggleVocabularyHint),statusText:"Hint"})}),(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsx)(u.default,{active:k,action:(0,v.buildAction)(e,f.toggleAutoVerbView),statusText:"Auto Verb View"})}),k&&(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsx)("div",{className:"d-flex flex-row justify-content-end",children:(0,l.jsx)("div",{children:[z.map((t,s)=>(0,l.jsxs)("div",{className:n()({"d-flex justify-content-between":!0,"pt-2":s===z.length-w,"pb-2":s===z.length-1&&0===w}),children:[(0,l.jsx)("div",{className:n()({"me-3":!0,"disabled-color":0===s}),onClick:()=>{if(s>0){let t=z.slice(0,s-1),l=z[s-1],i=z[s],r=z.slice(s+1);e((0,f.setVerbFormsOrder)([...t,i,l,...r]))}},children:(0,l.jsx)(i.ChevronUpIcon,{className:"mt-1",size:"small","aria-label":"move up"})}),(0,l.jsx)("span",{className:"w-100 text-start",children:t}),(0,l.jsx)("div",{onClick:()=>{if(z.length>1){let t=[...z.slice(0,s),...z.slice(s+1)];e((0,f.setVerbFormsOrder)(t))}},children:(0,l.jsx)(i.XCircleIcon,{className:n()({"mt-1 ms-3":!0,"incorrect-color":z.length>1,"disabled-color":1===z.length}),size:"small","aria-label":"remove"})})]},t)),U.map((t,s)=>(0,l.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,l.jsx)("div",{className:"me-3 invisible",children:(0,l.jsx)(i.ChevronUpIcon,{className:"mt-1",size:"small","aria-label":"move up"})}),(0,l.jsx)("span",{className:"w-100 text-start disabled-color",children:t}),(0,l.jsx)("div",{onClick:(0,v.buildAction)(e,f.setVerbFormsOrder,[...z,U[s]]),children:(0,l.jsx)(i.PlusCircleIcon,{className:"mt-1 ms-3",size:"small","aria-label":"add"})})]},t))]})})}),k&&(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"d-flex justify-content-end p-2",children:(0,l.jsx)(h.default,{initial:z.length-w,setChoiceN:t=>{e((0,f.updateVerbColSplit)(z.length-t))},max:V.length,statusText:"Column layout"})})})]})]})})}},41275:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var l=s("17581"),i=s("15764"),r=s("50098"),n=s("18554"),a=s.n(n),c=s("6085"),o=s.n(c),d=s("74288");function u(e){let[t,s]=(0,d.useState)(null),[n,c]=(0,d.useState)(e.initial),o=(0,d.useRef)(e.options),u=(0,d.useRef)(e.allowed??e.options.map((e,t)=>t)),m=o.current,x=u.current;(0,d.useEffect)(()=>{c(e.initial)},[e.initial]);let h=!!t,v=e=>{s(e.currentTarget)},b=(t,l)=>{c(l),s(null),e.onChange(l)};return(0,l.jsxs)("div",{className:a()({clickable:!0!==e.disabled,"d-flex":!0,"flex-row-reverse":!0===e.flip||void 0,"justify-content-end":!0}),children:[(0,l.jsx)(i.List,{component:"nav",disablePadding:!0,children:(0,l.jsx)(i.ListItemButton,{disableGutters:!0,disabled:!0===e.disabled,id:"filter-button","aria-haspopup":"listbox","aria-controls":"filter-menu","aria-expanded":h?"true":void 0,onClick:v,children:(0,l.jsx)(i.ListItemText,{primary:e.title,secondary:m[n],secondaryTypographyProps:{color:"unset"}})})}),(0,l.jsx)(i.Menu,{id:"filter-menu",anchorEl:t,open:h,onClose:()=>{s(null)},MenuListProps:{"aria-labelledby":"filter-button",role:"listbox"},children:m.map((e,t)=>(0,l.jsx)(i.MenuItem,{selected:t===n,onClick:e=>{x.includes(t)&&b(e,t)},children:x.includes(t)?e:(0,l.jsx)("span",{className:"disabled-color",children:e})},e))}),(0,l.jsx)(i.IconButton,{"aria-labelledby":"filter-button",sx:{color:"unset",minWidth:"55px"},"aria-haspopup":"listbox",disabled:!0===e.disabled,onClick:v,children:(0,l.jsx)(r.KebabHorizontalIcon,{size:"medium",className:a()({"rotate-transition":!0,"rotate-90":h})})})]})}u.propTypes={disabled:o().bool,flip:o().bool,title:o().string,options:o().arrayOf(o().string),initial:o().number,onChange:o().func}},21577:function(e,t,s){"use strict";s.r(t),s.d(t,{ThresholdFilterSlider:function(){return u}});var l=s("17581"),i=s("15764"),r=s("50098"),n=s("6085"),a=s.n(n),c=s("74288"),o=s("83249"),d=s("43560");function u(e){let{threshold:t,setThreshold:s}=e,[n]=(0,c.useState)(Math.abs(t)),a=(0,o.heatMap)(Math.abs(t)/100,.75),u=[{value:d.MEMORIZED_THRLD},{value:d.DIFFICULTY_THRLD}],m=(0,c.useCallback)(()=>{s(-1*t)},[s,t]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"w-100 d-flex flex-column",children:[(0,l.jsx)("div",{className:"text-nowrap fs-x-small text-start",children:`Difficulty filter: ${t}`}),(0,l.jsxs)("div",{className:"d-flex",children:[(0,l.jsx)(i.Slider,{sx:{color:a},defaultValue:n,marks:u,track:t<0?void 0:"inverted",onChangeCommitted:(e,l)=>{let i=t<0?-1:1;"number"==typeof l&&(0===l?s(Number(i)):s(i*l))},valueLabelDisplay:"auto"}),(0,l.jsx)("div",{className:"mt-2 ms-3 ",onClick:m,children:t<0?(0,l.jsx)(r.SortAscIcon,{}):(0,l.jsx)(r.SortDescIcon,{})})]})]})})}u.propTypes={threshold:a().number,setThreshold:a().func}},17847:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var l=s("17581"),i=s("15764"),r=s("6085"),n=s.n(r),a=s("74288");function c(e){let[t]=(0,a.useState)(e.initial),s=Math.min(e.max,t),r=e.max,n=[],c={};for(let e=0;e<r+1;e++){let t=(e-0)/(r-0)*100;n=[...n,{value:t,raw:e}],c["r"+t]=e,c["s"+e]=t}let o=e=>c["r"+e],d=e=>{let t=o(e),s=Math.trunc(r/2),l="",i=s+Math.abs(s-t);return r%2!=0&&t<=s&&(l=String(++i)),r%2==0&&t===s||(l=t<s+1?i+" "+(r-i):r-i+" "+i),l},u=t=>{let l=o(t);l!==s&&e.setChoiceN(l)};return(0,l.jsxs)("div",{className:"verb-form-slider-root",children:[(0,l.jsx)(i.Typography,{id:"discrete-slider-restrict",gutterBottom:!0,children:e.statusText}),(0,l.jsx)(i.Slider,{defaultValue:c["s"+s],valueLabelFormat:d,getAriaValueText:d,"aria-labelledby":"discrete-slider-restrict",track:!1,step:null,valueLabelDisplay:"auto",marks:n,onChangeCommitted:(e,t)=>{"number"==typeof t&&u(t)}})]})}s("95911"),c.propTypes={statusText:n().string,initial:n().number.isRequired,max:n().number.isRequired,setChoiceN:n().func.isRequired}},98401:function(e,t,s){"use strict";s.r(t),s.d(t,{SetTermGFList:function(){return d}});var l=s("17581"),i=s("50098"),r=s("18554"),n=s.n(r),a=s("6085"),c=s.n(a);function o(e,t,s,r,a){return(0,l.jsxs)("div",{className:n()({"p-0 px-2":!0,clickable:e}),onClick:()=>{e&&a(s)},children:[(0,l.jsxs)("span",{className:"p-1",children:[e&&(0,l.jsx)(i.XCircleIcon,{className:"incorrect-color",size:"small","aria-label":"remove"}),!e&&(0,l.jsx)(i.IssueDraftIcon,{size:"small","aria-label":"inactive"})]}),(0,l.jsx)("span",{className:"p-1",children:r})]},s)}function d(e){let t=[],s=e.termsFreq.reduce((s,l)=>{let i=e.terms.find(e=>e.uid===l);return i?s=[...s,i]:t=[...t,l],s},[]).reduce((e,t)=>{let s=t.grp?t.grp:"undefined";return e[s]?e[s]=[...e[s],t]:e[s]=[t],e},{});return(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"fs-5 fw-light",children:"Frequency"}),(0,l.jsx)("div",{children:Object.keys(s).map(t=>{let i=e.termsActive.includes(t);return(0,l.jsxs)("div",{className:"mb-2",children:[(0,l.jsx)("span",{className:n()({"fw-bold":i}),onClick:()=>e.toggleTermActiveGrp(t),children:t}),(0,l.jsx)("div",{children:s[t].map((t,s)=>o(i,s,t.uid,t.english,e.removeFrequencyTerm))})]},t)})}),t.length>0&&(0,l.jsxs)("div",{className:"mt-5 text-break",children:[(0,l.jsx)("span",{className:"fw-bold",children:"Manual cleanup"}),t.map((t,s)=>o(!0,s,t,t,e.removeFrequencyTerm))]})]})}s("74288"),d.propTypes={termsActive:c().array,termsFreq:c().array,terms:c().array,removeFrequencyTerm:c().func,toggleTermActiveGrp:c().func}},51956:function(e,t,s){"use strict";s.r(t),s.d(t,{SetTermGList:function(){return o}});var l=s("17581"),i=s("91453"),r=s.n(i),n=s("6085"),a=s.n(n);s("74288");var c=s("78766");function o(e){return(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"fs-5 fw-light",children:"Groups"}),Object.keys(e.termsGroups).map(t=>{let s=e.termsActive.includes(t);return(0,l.jsxs)("div",{children:[(0,l.jsx)(c.GroupItem,{active:e.termsActive.includes(t),onClick:()=>e.toggleTermActiveGrp(t),children:t}),!s&&r()(e.termsGroups[t],e=>{let[,t]=e.split("_");return Number.isInteger(parseInt(t,10))?parseInt(t,10):e}).map(s=>(0,l.jsx)(c.GroupItem,{addlStyle:"ms-3",active:e.termsActive.includes(t+"."+s),onClick:()=>{e.toggleTermActiveGrp(t+"."+s)},children:s},`${t}.${s}`))]},t)})]})}o.propTypes={termsGroups:a().object,termsActive:a().array,toggleTermActiveGrp:a().func}},95911:function(e){}}]);
//# sourceMappingURL=801.08ccd83f.js.map