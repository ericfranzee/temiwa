"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3547,1454],{34734:function(e,t,r){t.Z=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(o&&(o+=" "),o+=n);else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(n&&(n+=" "),n+=t);return n}},43175:function(e,t){/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var n={},o=e.split(";"),i=(t||{}).decode||r,a=0;a<o.length;a++){var u=o[a],s=u.indexOf("=");if(!(s<0)){var l=u.substring(0,s).trim();if(void 0==n[l]){var c=u.substring(s+1,u.length).trim();'"'===c[0]&&(c=c.slice(1,-1)),n[l]=function(e,t){try{return t(e)}catch(t){return e}}(c,i)}}}return n},t.serialize=function(e,t,r){var i=r||{},a=i.encode||n;if("function"!=typeof a)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var u=a(t);if(u&&!o.test(u))throw TypeError("argument val is invalid");var s=e+"="+u;if(null!=i.maxAge){var l=i.maxAge-0;if(isNaN(l)||!isFinite(l))throw TypeError("option maxAge is invalid");s+="; Max-Age="+Math.floor(l)}if(i.domain){if(!o.test(i.domain))throw TypeError("option domain is invalid");s+="; Domain="+i.domain}if(i.path){if(!o.test(i.path))throw TypeError("option path is invalid");s+="; Path="+i.path}if(i.expires){if("function"!=typeof i.expires.toUTCString)throw TypeError("option expires is invalid");s+="; Expires="+i.expires.toUTCString()}if(i.httpOnly&&(s+="; HttpOnly"),i.secure&&(s+="; Secure"),i.sameSite)switch("string"==typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return s};var r=decodeURIComponent,n=encodeURIComponent,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},34870:function(e,t,r){var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};t.h2=t.kT=t.d8=t.ej=t.$1=void 0;var i=r(43175),a=function(){return!0},u=function(e){void 0===e&&(e="");try{var t=JSON.stringify(e);return/^[\{\[]/.test(t)?t:e}catch(t){return e}};t.$1=function(e){if(e&&(t=e.req),!a())return t&&t.cookies?t.cookies:t&&t.headers&&t.headers.cookie?(0,i.parse)(t.headers.cookie):{};for(var t,r={},n=document.cookie?document.cookie.split("; "):[],o=0,u=n.length;o<u;o++){var s=n[o].split("="),l=s.slice(1).join("=");r[s[0]]=l}return r},t.ej=function(e,r){var n,o=(0,t.$1)(r)[e];if(void 0!==o)return"true"===(n=o?o.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):o)||"false"!==n&&("undefined"!==n?"null"===n?null:n:void 0)},t.d8=function(e,t,r){if(r){var s,l,c,f=r.req,p=r.res,d=o(r,["req","res"]);l=f,c=p,s=d}var y=(0,i.serialize)(e,u(t),n({path:"/"},s));if(a())document.cookie=y;else if(c&&l){var h=c.getHeader("Set-Cookie");if(Array.isArray(h)||(h=h?[String(h)]:[]),c.setHeader("Set-Cookie",h.concat(y)),l&&l.cookies){var v=l.cookies;""===t?delete v[e]:v[e]=u(t)}if(l&&l.headers&&l.headers.cookie){var v=(0,i.parse)(l.headers.cookie);""===t?delete v[e]:v[e]=u(t),l.headers.cookie=Object.entries(v).reduce(function(e,t){return e.concat("".concat(t[0],"=").concat(t[1],";"))},"")}}},t.kT=function(e,r){return(0,t.d8)(e,"",n(n({},r),{maxAge:-1}))},t.h2=function(e,r){return!!e&&(0,t.$1)(r).hasOwnProperty(e)}},49079:function(e,t,r){var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(13127)},13127:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s=[],l=!1,c=-1;function f(){l&&n&&(l=!1,n.length?s=n.concat(s):c=-1,s.length&&p())}function p(){if(!l){var e=u(f);l=!0;for(var t=s.length;t;){for(n=s,s=[];++c<t;)n&&n[c].run();c=-1,t=s.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];s.push(new d(e,t)),1!==s.length||l||u(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},11754:function(e,t,r){r.d(t,{p:function(){return C}});var n,o,i,a=r(64090),u=r(72640),s=r(18318),l=r(36601),c=r(92381),f=r(67409),p=r(84152),d=r(88358),y=r(71454),h=r(94819),v=r(10641);let m=null!=(i=a.startTransition)?i:function(e){e()};var g=((n=g||{})[n.Open=0]="Open",n[n.Closed=1]="Closed",n),b=((o=b||{})[o.ToggleDisclosure=0]="ToggleDisclosure",o[o.CloseDisclosure=1]="CloseDisclosure",o[o.SetButtonId=2]="SetButtonId",o[o.SetPanelId=3]="SetPanelId",o[o.LinkPanel=4]="LinkPanel",o[o.UnlinkPanel=5]="UnlinkPanel",o);let T={0:e=>({...e,disclosureState:(0,u.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},S=(0,a.createContext)(null);function k(e){let t=(0,a.useContext)(S);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Disclosure /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return t}S.displayName="DisclosureContext";let E=(0,a.createContext)(null);E.displayName="DisclosureAPIContext";let P=(0,a.createContext)(null);function w(e,t){return(0,u.E)(t.type,T,e,t)}P.displayName="DisclosurePanelContext";let x=a.Fragment,I=s.AN.RenderStrategy|s.AN.Static,C=Object.assign((0,s.yV)(function(e,t){let{defaultOpen:r=!1,...n}=e,o=(0,a.useRef)(null),i=(0,l.T)(t,(0,l.h)(e=>{o.current=e},void 0===e.as||e.as===a.Fragment)),c=(0,a.useRef)(null),f=(0,a.useRef)(null),p=(0,a.useReducer)(w,{disclosureState:r?0:1,linkedPanel:!1,buttonRef:f,panelRef:c,buttonId:null,panelId:null}),[{disclosureState:y,buttonId:m},g]=p,b=(0,v.z)(e=>{g({type:1});let t=(0,h.r)(o);if(!t||!m)return;let r=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(m):t.getElementById(m);null==r||r.focus()}),T=(0,a.useMemo)(()=>({close:b}),[b]),k=(0,a.useMemo)(()=>({open:0===y,close:b}),[y,b]);return a.createElement(S.Provider,{value:p},a.createElement(E.Provider,{value:T},a.createElement(d.up,{value:(0,u.E)(y,{0:d.ZM.Open,1:d.ZM.Closed})},(0,s.sY)({ourProps:{ref:i},theirProps:n,slot:k,defaultTag:x,name:"Disclosure"}))))}),{Button:(0,s.yV)(function(e,t){let r=(0,c.M)(),{id:n="headlessui-disclosure-button-".concat(r),...o}=e,[i,u]=k("Disclosure.Button"),d=(0,a.useContext)(P),h=null!==d&&d===i.panelId,m=(0,a.useRef)(null),g=(0,l.T)(m,t,h?null:i.buttonRef);(0,a.useEffect)(()=>{if(!h)return u({type:2,buttonId:n}),()=>{u({type:2,buttonId:null})}},[n,u,h]);let b=(0,v.z)(e=>{var t;if(h){if(1===i.disclosureState)return;switch(e.key){case f.R.Space:case f.R.Enter:e.preventDefault(),e.stopPropagation(),u({type:0}),null==(t=i.buttonRef.current)||t.focus()}}else switch(e.key){case f.R.Space:case f.R.Enter:e.preventDefault(),e.stopPropagation(),u({type:0})}}),T=(0,v.z)(e=>{e.key===f.R.Space&&e.preventDefault()}),S=(0,v.z)(t=>{var r;(0,p.P)(t.currentTarget)||e.disabled||(h?(u({type:0}),null==(r=i.buttonRef.current)||r.focus()):u({type:0}))}),E=(0,a.useMemo)(()=>({open:0===i.disclosureState}),[i]),w=(0,y.f)(e,m),x=h?{ref:g,type:w,onKeyDown:b,onClick:S}:{ref:g,id:n,type:w,"aria-expanded":0===i.disclosureState,"aria-controls":i.linkedPanel?i.panelId:void 0,onKeyDown:b,onKeyUp:T,onClick:S};return(0,s.sY)({ourProps:x,theirProps:o,slot:E,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,s.yV)(function(e,t){let r=(0,c.M)(),{id:n="headlessui-disclosure-panel-".concat(r),...o}=e,[i,u]=k("Disclosure.Panel"),{close:f}=function e(t){let r=(0,a.useContext)(E);if(null===r){let r=Error("<".concat(t," /> is missing a parent <Disclosure /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return r}("Disclosure.Panel"),p=(0,l.T)(t,i.panelRef,e=>{m(()=>u({type:e?4:5}))});(0,a.useEffect)(()=>(u({type:3,panelId:n}),()=>{u({type:3,panelId:null})}),[n,u]);let y=(0,d.oJ)(),h=null!==y?(y&d.ZM.Open)===d.ZM.Open:0===i.disclosureState,v=(0,a.useMemo)(()=>({open:0===i.disclosureState,close:f}),[i,f]);return a.createElement(P.Provider,{value:i.panelId},(0,s.sY)({ourProps:{ref:p,id:n},theirProps:o,slot:v,defaultTag:"div",features:I,visible:h,name:"Disclosure.Panel"}))})})},71454:function(e,t,r){r.d(t,{f:function(){return a}});var n=r(64090),o=r(39790);function i(e){var t;if(e.type)return e.type;let r=null!=(t=e.as)?t:"button";if("string"==typeof r&&"button"===r.toLowerCase())return"button"}function a(e,t){let[r,a]=(0,n.useState)(()=>i(e));return(0,o.e)(()=>{a(i(e))},[e.type,e.as]),(0,o.e)(()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&a("button")},[r,t]),r}}}]);