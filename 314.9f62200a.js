"use strict";(self.webpackChunknmemonica=self.webpackChunknmemonica||[]).push([["314"],{93052:function(e,t,i){i.d(t,{Z:function(){return c}});var n=i(69554),s=i(5921),a=i(34929),l=i(59914);function c(e){let t,[i]=(0,l.useState)(e.initial),c=e.wideN??32,d=[],o={};for(let e=4;e<17;e++){let t=(e-4)/13*75;d=[...d,{value:t,raw:e}],o[`r ${t}`]=e,o[`s ${e}`]=t}d=[...d,{value:100,raw:c}],o["r 100"]=c,o[`s ${c}`]=100;let r=e=>o[`r ${e}`],u=t=>{let i=e.initial,n=r(t);n!==c&&i!==c&&n!==i?(e.setChoiceN(n),!0===e.wideMode&&"function"==typeof e.toggleWide&&e.toggleWide()):n!==c&&i===c&&n!==i?(e.setChoiceN(n),!0===e.wideMode&&"function"==typeof e.toggleWide&&e.toggleWide()):n===c&&n!==i&&(e.setChoiceN(n),!1===e.wideMode&&"function"==typeof e.toggleWide&&e.toggleWide())};return(0,n.jsxs)("div",{className:"kana-slider",children:[(0,n.jsx)(s.Z,{id:"discrete-slider-restrict",gutterBottom:!0,children:"Difficulty"}),(0,n.jsx)(a.ZP,{defaultValue:(t=i,o[`s ${t}`]),valueLabelFormat:r,getAriaValueText:e=>String(r(e)),"aria-labelledby":"discrete-slider-restrict",step:null,valueLabelDisplay:"auto",marks:d,onChangeCommitted:(e,t)=>{"number"==typeof t&&u(t)}})]})}i(65747)},40532:function(e,t,i){i.r(t),i.d(t,{default:function(){return f}});var n=i(69554),s=i(81722),a=i(93052),l=i(82648),c=i(68883),d=i(81718),o=i(90428),r=i(56e3),u=i(94397);function f(){let e=(0,s.I0)(),{charSet:t,easyMode:i,wideMode:f,choiceN:x}=(0,o.P)();return(0,n.jsx)("div",{className:"outer",children:(0,n.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,n.jsx)("div",{className:"column-1"}),(0,n.jsxs)("div",{className:"column-2 setting-block",children:[(0,n.jsx)("div",{children:(0,n.jsx)(l.Z,{active:t===u.kS.HIRAGANA,action:(0,c.c)(e,r.I_),statusText:(0,d.w_)(t,["Hiragana","Katakana","Mixed"])})}),(0,n.jsx)("div",{className:"d-flex justify-content-end p-2",children:(0,n.jsx)(a.Z,{initial:x,setChoiceN:(0,c.c)(e,r.Bs),wideMode:f,wideN:31,toggleWide:(0,c.c)(e,r.PD)})}),(0,n.jsx)("div",{children:(0,n.jsx)(l.Z,{active:i,action:(0,c.c)(e,r._S),statusText:"Kana Hints"})})]})]})})}},65747:function(e,t,i){e.exports={}}}]);
//# sourceMappingURL=314.9f62200a.js.map