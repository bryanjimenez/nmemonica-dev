"use strict";(self.webpackChunknmemonica=self.webpackChunknmemonica||[]).push([["927"],{93052:function(e,t,i){i.d(t,{Z:function(){return c}});var n=i(69554),l=i(5921),s=i(34929),a=i(59914);function c(e){let t,[i]=(0,a.useState)(e.initial),c=e.wideN??32,o=[],d={};for(let e=4;e<17;e++){let t=(e-4)/13*75;o=[...o,{value:t,raw:e}],d[`r ${t}`]=e,d[`s ${e}`]=t}o=[...o,{value:100,raw:c}],d["r 100"]=c,d[`s ${c}`]=100;let r=e=>d[`r ${e}`],u=t=>{let i=e.initial,n=r(t);n!==c&&i!==c&&n!==i?(e.setChoiceN(n),!0===e.wideMode&&"function"==typeof e.toggleWide&&e.toggleWide()):n!==c&&i===c&&n!==i?(e.setChoiceN(n),!0===e.wideMode&&"function"==typeof e.toggleWide&&e.toggleWide()):n===c&&n!==i&&(e.setChoiceN(n),!1===e.wideMode&&"function"==typeof e.toggleWide&&e.toggleWide())};return(0,n.jsxs)("div",{className:"kana-slider",children:[(0,n.jsx)(l.Z,{id:"discrete-slider-restrict",gutterBottom:!0,children:"Difficulty"}),(0,n.jsx)(s.ZP,{defaultValue:(t=i,d[`s ${t}`]),valueLabelFormat:r,getAriaValueText:e=>String(r(e)),"aria-labelledby":"discrete-slider-restrict",step:null,valueLabelDisplay:"auto",marks:o,onChangeCommitted:(e,t)=>{"number"==typeof t&&u(t)}})]})}i(65747)},19811:function(e,t,i){i.r(t),i.d(t,{default:function(){return f}});var n=i(69554),l=i(81722),s=i(93052),a=i(82648),c=i(88889),o=i(68883),d=i(32369),r=i(45181),u=i(94397);function f(){let e=(0,l.I0)(),{sortMethod:t,fadeInAnswers:i,choiceN:f}=(0,d.R)();return(0,n.jsx)("div",{className:"outer",children:(0,n.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,n.jsx)("div",{className:"column-1"}),(0,n.jsxs)("div",{className:"column-2 setting-block",children:[(0,n.jsx)("div",{className:"mb-2",children:(0,n.jsx)(c.Z,{title:"Sort by:",options:u.iU,allowed:[u.vl.DIFFICULTY,u.vl.RANDOM,u.vl.VIEW_DATE],initial:t,onChange:(0,o.c)(e,r.vX)})}),(0,n.jsx)("div",{className:"d-flex justify-content-end p-2 text-end",children:(0,n.jsx)(s.Z,{initial:f,setChoiceN:(0,o.c)(e,r.ow)})}),(0,n.jsx)("div",{className:"d-flex justify-content-end p-2",children:(0,n.jsx)(a.Z,{active:i,action:(0,o.c)(e,r.im),statusText:"Fade in answers"})})]})]})})}},65747:function(e,t,i){e.exports={}}}]);
//# sourceMappingURL=927.59c8265f.js.map