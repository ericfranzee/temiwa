"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8820],{57324:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(88800),a=n(27552);function r(e){return(0,a.Z)(1,arguments),(0,o.default)(e,{weekStartsOn:1})}},78356:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(61451),a=n(27552);function r(e){return(0,a.Z)(1,arguments),Math.floor((0,o.default)(e)/1e3)}},91181:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(67990),a=n(22893),r=n(68309),l=n(27552),i=n(13238);function c(e,t){(0,l.Z)(1,arguments);var n=(0,a.default)(e);return Math.round(((0,o.default)(n,t).getTime()-(function(e,t){(0,l.Z)(1,arguments);var n,c,u,s,d,m,v,f,h=(0,i.j)(),g=(0,r.Z)(null!==(n=null!==(c=null!==(u=null!==(s=null==t?void 0:t.firstWeekContainsDate)&&void 0!==s?s:null==t?void 0:null===(d=t.locale)||void 0===d?void 0:null===(m=d.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==u?u:h.firstWeekContainsDate)&&void 0!==c?c:null===(v=h.locale)||void 0===v?void 0:null===(f=v.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==n?n:1),y=function(e,t){(0,l.Z)(1,arguments);var n,c,u,s,d,m,v,f,h=(0,a.default)(e),g=h.getFullYear(),y=(0,i.j)(),p=(0,r.Z)(null!==(n=null!==(c=null!==(u=null!==(s=null==t?void 0:t.firstWeekContainsDate)&&void 0!==s?s:null==t?void 0:null===(d=t.locale)||void 0===d?void 0:null===(m=d.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==u?u:y.firstWeekContainsDate)&&void 0!==c?c:null===(v=y.locale)||void 0===v?void 0:null===(f=v.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==n?n:1);if(!(p>=1&&p<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var b=new Date(0);b.setFullYear(g+1,0,p),b.setHours(0,0,0,0);var C=(0,o.default)(b,t),k=new Date(0);k.setFullYear(g,0,p),k.setHours(0,0,0,0);var w=(0,o.default)(k,t);return h.getTime()>=C.getTime()?g+1:h.getTime()>=w.getTime()?g:g-1}(e,t),p=new Date(0);return p.setFullYear(y,0,g),p.setHours(0,0,0,0),(0,o.default)(p,t)})(n,t).getTime())/6048e5)+1}},642:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(67990),a=n(91995),r=n(27552),l=n(22893),i=n(32633);function c(e,t){return(0,r.Z)(1,arguments),function(e,t,n){(0,r.Z)(2,arguments);var l=(0,o.default)(e,n),i=(0,o.default)(t,n);return Math.round((l.getTime()-(0,a.Z)(l)-(i.getTime()-(0,a.Z)(i)))/6048e5)}(function(e){(0,r.Z)(1,arguments);var t=(0,l.default)(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(0,0,0,0),t}(e),(0,i.default)(e),t)+1}},91774:function(e,t,n){n.d(t,{F:function(){return c},f:function(){return u}});var o=n(64090);let a=["light","dark"],r="(prefers-color-scheme: dark)",l=(0,o.createContext)(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,o.useContext)(l))&&void 0!==e?e:i},u=e=>(0,o.useContext)(l)?o.createElement(o.Fragment,null,e.children):o.createElement(d,e),s=["light","dark"],d=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:i=!0,enableColorScheme:c=!0,storageKey:u="theme",themes:d=s,defaultTheme:g=i?"system":"light",attribute:y="data-theme",value:p,children:b,nonce:C}=e,[k,w]=(0,o.useState)(()=>v(u,g)),[T,S]=(0,o.useState)(()=>v(u)),E=p?Object.values(p):d,Z=(0,o.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&i&&(t=h());let o=p?p[t]:t,r=n?f():null,l=document.documentElement;if("class"===y?(l.classList.remove(...E),o&&l.classList.add(o)):o?l.setAttribute(y,o):l.removeAttribute(y),c){let e=a.includes(g)?g:null,n=a.includes(t)?t:e;l.style.colorScheme=n}null==r||r()},[]),x=(0,o.useCallback)(e=>{w(e);try{localStorage.setItem(u,e)}catch(e){}},[t]),D=(0,o.useCallback)(e=>{S(h(e)),"system"===k&&i&&!t&&Z("system")},[k,t]);(0,o.useEffect)(()=>{let e=window.matchMedia(r);return e.addListener(D),D(e),()=>e.removeListener(D)},[D]),(0,o.useEffect)(()=>{let e=e=>{e.key===u&&x(e.newValue||g)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[x]),(0,o.useEffect)(()=>{Z(null!=t?t:k)},[t,k]);let O=(0,o.useMemo)(()=>({theme:k,setTheme:x,forcedTheme:t,resolvedTheme:"system"===k?T:k,themes:i?[...d,"system"]:d,systemTheme:i?T:void 0}),[k,x,t,T,i,d]);return o.createElement(l.Provider,{value:O},o.createElement(m,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:i,enableColorScheme:c,storageKey:u,themes:d,defaultTheme:g,attribute:y,value:p,children:b,attrs:E,nonce:C}),b)},m=(0,o.memo)(e=>{let{forcedTheme:t,storageKey:n,attribute:l,enableSystem:i,enableColorScheme:c,defaultTheme:u,value:s,attrs:d,nonce:m}=e,v="system"===u,f="class"===l?"var d=document.documentElement,c=d.classList;c.remove(".concat(d.map(e=>"'".concat(e,"'")).join(","),");"):"var d=document.documentElement,n='".concat(l,"',s='setAttribute';"),h=c?a.includes(u)&&u?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(u,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",g=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],o=s?s[e]:e,r=t?e+"|| ''":"'".concat(o,"'"),i="";return c&&n&&!t&&a.includes(e)&&(i+="d.style.colorScheme = '".concat(e,"';")),"class"===l?i+=t||o?"c.add(".concat(r,")"):"null":o&&(i+="d[s](n,".concat(r,")")),i},y=t?"!function(){".concat(f).concat(g(t),"}()"):i?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(v,")){var t='").concat(r,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(g("dark"),"}else{").concat(g("light"),"}}else if(e){").concat(s?"var x=".concat(JSON.stringify(s),";"):"").concat(g(s?"x[e]":"e",!0),"}").concat(v?"":"else{"+g(u,!1,!1)+"}").concat(h,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(s?"var x=".concat(JSON.stringify(s),";"):"").concat(g(s?"x[e]":"e",!0),"}else{").concat(g(u,!1,!1),";}").concat(h,"}catch(t){}}();");return o.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:y}})},()=>!0),v=(e,t)=>{let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},f=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},h=e=>(e||(e=window.matchMedia(r)),e.matches?"dark":"light")},44158:function(e,t,n){var o=n(64090),a=o&&"object"==typeof o&&"default"in o?o:{default:o},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=function(e,t){var n={};for(var o in e)!(t.indexOf(o)>=0)&&Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},i=function(e){var t=e.color,n=e.size,o=void 0===n?24:n,i=(e.children,l(e,["color","size","children"])),c="remixicon-icon "+(i.className||"");return a.default.createElement("svg",r({},i,{className:c,width:o,height:o,fill:void 0===t?"currentColor":t,viewBox:"0 0 24 24"}),a.default.createElement("path",{d:"M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8zM6 14h2v2H6v-2zm4 0h8v2h-8v-2z"}))},c=a.default.memo?a.default.memo(i):i;e.exports=c}}]);