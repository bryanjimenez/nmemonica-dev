(self.webpackChunknmemonica=self.webpackChunknmemonica||[]).push([["849"],{63251:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var n=i("17581"),l=i("15764"),s=i("74288");function a(e){let t,[i]=(0,s.useState)(e.initial),a=e.wideN??32,r=[],o={};for(let e=4;e<17;e++){let t=(e-4)/13*75;r=[...r,{value:t,raw:e}],o[`r ${t}`]=e,o[`s ${e}`]=t}r=[...r,{value:100,raw:a}],o["r 100"]=a,o[`s ${a}`]=100;let d=e=>o[`r ${e}`],c=t=>{let i=e.initial,n=d(t);n!==a&&i!==a&&n!==i?(e.setChoiceN(n),!0===e.wideMode&&"function"==typeof e.toggleWide&&e.toggleWide()):n!==a&&i===a&&n!==i?(e.setChoiceN(n),!0===e.wideMode&&"function"==typeof e.toggleWide&&e.toggleWide()):n===a&&n!==i&&(e.setChoiceN(n),!1===e.wideMode&&"function"==typeof e.toggleWide&&e.toggleWide())};return(0,n.jsxs)("div",{className:"kana-slider",children:[(0,n.jsx)(l.Typography,{id:"discrete-slider-restrict",gutterBottom:!0,children:"Difficulty"}),(0,n.jsx)(l.Slider,{defaultValue:(t=i,o[`s ${t}`]),valueLabelFormat:d,getAriaValueText:e=>String(d(e)),"aria-labelledby":"discrete-slider-restrict",step:null,valueLabelDisplay:"auto",marks:r,onChangeCommitted:(e,t)=>{"number"==typeof t&&c(t)}})]})}i("49720")},44146:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var n=i("17581"),l=i("75092"),s=i("63251"),a=i("86484"),r=i("41275"),o=i("90210"),d=i("62242"),c=i("31980"),u=i("12960");function f(){let e=(0,l.useDispatch)(),{orderType:t,fadeInAnswers:i,choiceN:f}=(0,d.useConnectKanji)();return(0,n.jsx)("div",{className:"outer",children:(0,n.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,n.jsx)("div",{className:"column-1"}),(0,n.jsxs)("div",{className:"column-2 setting-block",children:[(0,n.jsx)("div",{className:"mb-2",children:(0,n.jsx)(r.default,{title:"Sort by:",options:u.TermSortByLabel,allowed:[u.TermSortBy.DIFFICULTY,u.TermSortBy.RANDOM,u.TermSortBy.VIEW_DATE],initial:t.current,onChange:(0,o.buildAction)(e,c.toggleKanjiOrdering)})}),(0,n.jsx)("div",{className:"d-flex justify-content-end p-2 text-end",children:(0,n.jsx)(s.default,{initial:f,setChoiceN:(0,o.buildAction)(e,c.setKanjiBtnN)})}),(0,n.jsx)("div",{className:"d-flex justify-content-end p-2",children:(0,n.jsx)(a.default,{active:i,action:(0,o.buildAction)(e,c.toggleKanjiFadeInAnswers),statusText:"Fade in answers"})})]})]})})}},49720:function(e){}}]);
//# sourceMappingURL=849.634b4dcf.js.map