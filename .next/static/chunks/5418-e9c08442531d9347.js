"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5418,8186,6278,7153,3493,1299,6932,2998,2200],{34734:function(t,e,r){e.Z=function(){for(var t,e,r=0,n="";r<arguments.length;)(t=arguments[r++])&&(e=function t(e){var r,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e){if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(n=t(e[r]))&&(i&&(i+=" "),i+=n);else for(r in e)e[r]&&(i&&(i+=" "),i+=r)}return i}(t))&&(n&&(n+=" "),n+=e);return n}},43175:function(t,e){/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */e.parse=function(t,e){if("string"!=typeof t)throw TypeError("argument str must be a string");for(var n={},i=t.split(";"),o=(e||{}).decode||r,a=0;a<i.length;a++){var s=i[a],u=s.indexOf("=");if(!(u<0)){var l=s.substring(0,u).trim();if(void 0==n[l]){var c=s.substring(u+1,s.length).trim();'"'===c[0]&&(c=c.slice(1,-1)),n[l]=function(t,e){try{return e(t)}catch(e){return t}}(c,o)}}}return n},e.serialize=function(t,e,r){var o=r||{},a=o.encode||n;if("function"!=typeof a)throw TypeError("option encode is invalid");if(!i.test(t))throw TypeError("argument name is invalid");var s=a(e);if(s&&!i.test(s))throw TypeError("argument val is invalid");var u=t+"="+s;if(null!=o.maxAge){var l=o.maxAge-0;if(isNaN(l)||!isFinite(l))throw TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(l)}if(o.domain){if(!i.test(o.domain))throw TypeError("option domain is invalid");u+="; Domain="+o.domain}if(o.path){if(!i.test(o.path))throw TypeError("option path is invalid");u+="; Path="+o.path}if(o.expires){if("function"!=typeof o.expires.toUTCString)throw TypeError("option expires is invalid");u+="; Expires="+o.expires.toUTCString()}if(o.httpOnly&&(u+="; HttpOnly"),o.secure&&(u+="; Secure"),o.sameSite)switch("string"==typeof o.sameSite?o.sameSite.toLowerCase():o.sameSite){case!0:case"strict":u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"none":u+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return u};var r=decodeURIComponent,n=encodeURIComponent,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},34870:function(t,e,r){var n=function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)0>e.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r};e.h2=e.kT=e.d8=e.ej=e.$1=void 0;var o=r(43175),a=function(){return!0},s=function(t){void 0===t&&(t="");try{var e=JSON.stringify(t);return/^[\{\[]/.test(e)?e:t}catch(e){return t}};e.$1=function(t){if(t&&(e=t.req),!a())return e&&e.cookies?e.cookies:e&&e.headers&&e.headers.cookie?(0,o.parse)(e.headers.cookie):{};for(var e,r={},n=document.cookie?document.cookie.split("; "):[],i=0,s=n.length;i<s;i++){var u=n[i].split("="),l=u.slice(1).join("=");r[u[0]]=l}return r},e.ej=function(t,r){var n,i=(0,e.$1)(r)[t];if(void 0!==i)return"true"===(n=i?i.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent):i)||"false"!==n&&("undefined"!==n?"null"===n?null:n:void 0)},e.d8=function(t,e,r){if(r){var u,l,c,h=r.req,f=r.res,d=i(r,["req","res"]);l=h,c=f,u=d}var p=(0,o.serialize)(t,s(e),n({path:"/"},u));if(a())document.cookie=p;else if(c&&l){var v=c.getHeader("Set-Cookie");if(Array.isArray(v)||(v=v?[String(v)]:[]),c.setHeader("Set-Cookie",v.concat(p)),l&&l.cookies){var m=l.cookies;""===e?delete m[t]:m[t]=s(e)}if(l&&l.headers&&l.headers.cookie){var m=(0,o.parse)(l.headers.cookie);""===e?delete m[t]:m[t]=s(e),l.headers.cookie=Object.entries(m).reduce(function(t,e){return t.concat("".concat(e[0],"=").concat(e[1],";"))},"")}}},e.kT=function(t,r){return(0,e.d8)(t,"",n(n({},r),{maxAge:-1}))},e.h2=function(t,r){return!!t&&(0,e.$1)(r).hasOwnProperty(t)}},24232:function(t,e,r){r.d(e,{default:function(){return i.a}});var n=r(24930),i=r.n(n)},20703:function(t,e,r){r.d(e,{default:function(){return i.a}});var n=r(67447),i=r.n(n)},8792:function(t,e,r){r.d(e,{default:function(){return i.a}});var n=r(25250),i=r.n(n)},47907:function(t,e,r){var n=r(15313);r.o(n,"notFound")&&r.d(e,{notFound:function(){return n.notFound}}),r.o(n,"redirect")&&r.d(e,{redirect:function(){return n.redirect}}),r.o(n,"useParams")&&r.d(e,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(e,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(e,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(e,{useSearchParams:function(){return n.useSearchParams}})},49079:function(t,e,r){var n,i;t.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(13127)},13127:function(t){!function(){var e={229:function(t){var e,r,n,i=t.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function s(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var u=[],l=!1,c=-1;function h(){l&&n&&(l=!1,n.length?u=n.concat(u):c=-1,u.length&&f())}function f(){if(!l){var t=s(h);l=!0;for(var e=u.length;e;){for(n=u,u=[];++c<e;)n&&n[c].run();c=-1,e=u.length}n=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function p(){}i.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];u.push(new d(t,e)),1!==u.length||l||s(f)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(t){return[]},i.binding=function(t){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(t){var i=r[t];if(void 0!==i)return i.exports;var o=r[t]={exports:{}},a=!0;try{e[t](o,o.exports,n),a=!1}finally{a&&delete r[t]}return o.exports}n.ab="//";var i=n(229);t.exports=i}()},24930:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o}});let n=r(86921);r(3827),r(64090);let i=n._(r(84795));function o(t,e){let r={loading:t=>{let{error:e,isLoading:r,pastDelay:n}=t;return null}};return"function"==typeof t&&(r.loader=t),(0,i.default)({...r,...e})}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},67447:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var r in e)Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(e,{getImageProps:function(){return s},default:function(){return u}});let n=r(86921),i=r(38630),o=r(81749),a=n._(r(10536)),s=t=>{let{props:e}=(0,i.getImgProps)(t,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[t,r]of Object.entries(e))void 0===r&&delete e[t];return{props:e}},u=o.Image},19721:function(t,e,r){function n(t){let{reason:e,children:r}=t;return r}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"BailoutToCSR",{enumerable:!0,get:function(){return n}}),r(99775)},84795:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return u}});let n=r(3827),i=r(64090),o=r(19721);function a(t){var e;return{default:null!=(e=null==t?void 0:t.default)?e:t}}let s={loader:()=>Promise.resolve(a(()=>null)),loading:null,ssr:!0},u=function(t){let e={...s,...t},r=(0,i.lazy)(()=>e.loader().then(a)),u=e.loading;function l(t){let a=u?(0,n.jsx)(u,{isLoading:!0,pastDelay:!0,error:null}):null,s=e.ssr?(0,n.jsx)(r,{...t}):(0,n.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...t})});return(0,n.jsx)(i.Suspense,{fallback:a,children:s})}return l.displayName="LoadableComponent",l}},46993:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(86921)._(r(64090)).default.createContext(null)},87548:function(t,e,r){var n=r(64090),i=n&&"object"==typeof n&&"default"in n?n:{default:n},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=function(t,e){var r={};for(var n in t)!(e.indexOf(n)>=0)&&Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},s=function(t){var e=t.color,r=t.size,n=void 0===r?24:r,s=(t.children,a(t,["color","size","children"])),u="remixicon-icon "+(s.className||"");return i.default.createElement("svg",o({},s,{className:u,width:n,height:n,fill:void 0===e?"currentColor":e,viewBox:"0 0 24 24"}),i.default.createElement("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"}))},u=i.default.memo?i.default.memo(s):s;t.exports=u},54030:function(t,e,r){var n=r(64090),i=n&&"object"==typeof n&&"default"in n?n:{default:n},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=function(t,e){var r={};for(var n in t)!(e.indexOf(n)>=0)&&Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},s=function(t){var e=t.color,r=t.size,n=void 0===r?24:r,s=(t.children,a(t,["color","size","children"])),u="remixicon-icon "+(s.className||"");return i.default.createElement("svg",o({},s,{className:u,width:n,height:n,fill:void 0===e?"currentColor":e,viewBox:"0 0 24 24"}),i.default.createElement("path",{d:"M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2h-2zM6 7v13h12V7H6zm1-5h10v2H7V2zm4 8h2v7h-2v-7z"}))},u=i.default.memo?i.default.memo(s):s;t.exports=u},34160:function(t,e,r){var n=r(64090),i=n&&"object"==typeof n&&"default"in n?n:{default:n},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=function(t,e){var r={};for(var n in t)!(e.indexOf(n)>=0)&&Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},s=function(t){var e=t.color,r=t.size,n=void 0===r?24:r,s=(t.children,a(t,["color","size","children"])),u="remixicon-icon "+(s.className||"");return i.default.createElement("svg",o({},s,{className:u,width:n,height:n,fill:void 0===e?"currentColor":e,viewBox:"0 0 24 24"}),i.default.createElement("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"}))},u=i.default.memo?i.default.memo(s):s;t.exports=u},69995:function(t,e,r){var n=r(64090),i=n&&"object"==typeof n&&"default"in n?n:{default:n},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=function(t,e){var r={};for(var n in t)!(e.indexOf(n)>=0)&&Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},s=function(t){var e=t.color,r=t.size,n=void 0===r?24:r,s=(t.children,a(t,["color","size","children"])),u="remixicon-icon "+(s.className||"");return i.default.createElement("svg",o({},s,{className:u,width:n,height:n,fill:void 0===e?"currentColor":e,viewBox:"0 0 24 24"}),i.default.createElement("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"}))},u=i.default.memo?i.default.memo(s):s;t.exports=u},6722:function(t,e,r){var n=r(64090),i=n&&"object"==typeof n&&"default"in n?n:{default:n},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=function(t,e){var r={};for(var n in t)!(e.indexOf(n)>=0)&&Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},s=function(t){var e=t.color,r=t.size,n=void 0===r?24:r,s=(t.children,a(t,["color","size","children"])),u="remixicon-icon "+(s.className||"");return i.default.createElement("svg",o({},s,{className:u,width:n,height:n,fill:void 0===e?"currentColor":e,viewBox:"0 0 24 24"}),i.default.createElement("path",{d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"}))},u=i.default.memo?i.default.memo(s):s;t.exports=u},25178:function(t,e,r){var n=r(64090),i=n&&"object"==typeof n&&"default"in n?n:{default:n},o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},a=function(t,e){var r={};for(var n in t)!(e.indexOf(n)>=0)&&Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},s=function(t){var e=t.color,r=t.size,n=void 0===r?24:r,s=(t.children,a(t,["color","size","children"])),u="remixicon-icon "+(s.className||"");return i.default.createElement("svg",o({},s,{className:u,width:n,height:n,fill:void 0===e?"currentColor":e,viewBox:"0 0 24 24"}),i.default.createElement("path",{d:"M3 19h18v2H3v-2zM13 5.828V17h-2V5.828L4.929 11.9l-1.414-1.414L12 2l8.485 8.485-1.414 1.414L13 5.83z"}))},u=i.default.memo?i.default.memo(s):s;t.exports=u},95899:function(t,e,r){r.d(e,{_:function(){return n}});let n=console},34654:function(t,e,r){r.d(e,{R:function(){return u},m:function(){return s}});var n=r(95899),i=r(79522),o=r(3864),a=r(34500);class s extends o.F{setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(e=>e!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,e;return null!=(t=null==(e=this.retryer)?void 0:e.continue())?t:this.execute()}async execute(){var t,e,r,n,i,o,s,u,l,c,h,f,d,p,v,m,y,b,g,O;let x="loading"===this.state.status;try{if(!x){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(l=(c=this.mutationCache.config).onMutate)?void 0:l.call(c,this.state.variables,this));let t=await (null==(h=(f=this.options).onMutate)?void 0:h.call(f,this.state.variables));t!==this.state.context&&this.dispatch({type:"loading",context:t,variables:this.state.variables})}let d=await (()=>{var t;return this.retryer=(0,a.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(t=this.options.retry)?t:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(t=(e=this.mutationCache.config).onSuccess)?void 0:t.call(e,d,this.state.variables,this.state.context,this)),await (null==(r=(n=this.options).onSuccess)?void 0:r.call(n,d,this.state.variables,this.state.context)),await (null==(i=(o=this.mutationCache.config).onSettled)?void 0:i.call(o,d,null,this.state.variables,this.state.context,this)),await (null==(s=(u=this.options).onSettled)?void 0:s.call(u,d,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:d}),d}catch(t){try{throw await (null==(d=(p=this.mutationCache.config).onError)?void 0:d.call(p,t,this.state.variables,this.state.context,this)),await (null==(v=(m=this.options).onError)?void 0:v.call(m,t,this.state.variables,this.state.context)),await (null==(y=(b=this.mutationCache.config).onSettled)?void 0:y.call(b,void 0,t,this.state.variables,this.state.context,this)),await (null==(g=(O=this.options).onSettled)?void 0:g.call(O,void 0,t,this.state.variables,this.state.context)),t}finally{this.dispatch({type:"error",error:t})}}}dispatch(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"loading":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,a.Kw)(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...e,...t.state}}})(this.state),i.V.batch(()=>{this.observers.forEach(e=>{e.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||n._,this.observers=[],this.state=t.state||u(),this.setOptions(t.options),this.scheduleGc()}}function u(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}},3864:function(t,e,r){r.d(e,{F:function(){return i}});var n=r(31678);class i{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,n.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,null!=t?t:n.sk?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}},8186:function(t,e,r){r.d(e,{D:function(){return f}});var n=r(64090),i=r(31678),o=r(34654),a=r(79522),s=r(6761);class u extends s.l{bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var e;let r=this.options;this.options=this.client.defaultMutationOptions(t),(0,i.VS)(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(e=this.currentMutation)||e.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.currentMutation)||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();let e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==t?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let t=this.currentMutation?this.currentMutation.state:(0,o.R)(),e={...t,isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset};this.currentResult=e}notify(t){a.V.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var e,r,n,i,o,a,s,u;t.onSuccess?(null==(e=(r=this.mutateOptions).onSuccess)||e.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(n=(i=this.mutateOptions).onSettled)||n.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):t.onError&&(null==(o=(a=this.mutateOptions).onError)||o.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(s=(u=this.mutateOptions).onSettled)||s.call(u,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}t.listeners&&this.listeners.forEach(t=>{let{listener:e}=t;e(this.currentResult)})})}constructor(t,e){super(),this.client=t,this.setOptions(e),this.bindMethods(),this.updateResult()}}var l=r(97536),c=r(64095),h=r(3439);function f(t,e,r){let o=(0,i.lV)(t,e,r),s=(0,c.NL)({context:o.context}),[f]=n.useState(()=>new u(s,o));n.useEffect(()=>{f.setOptions(o)},[f,o]);let p=(0,l.$)(n.useCallback(t=>f.subscribe(a.V.batchCalls(t)),[f]),()=>f.getCurrentResult(),()=>f.getCurrentResult()),v=n.useCallback((t,e)=>{f.mutate(t,e).catch(d)},[f]);if(p.error&&(0,h.L)(f.options.useErrorBoundary,[p.error]))throw p.error;return{...p,mutate:v,mutateAsync:p.mutate}}function d(){}},9988:function(t,e,r){r.d(e,{a:function(){return a}});var n=r(31678),i=r(87307),o=r(80385);function a(t,e,r){let a=(0,n._v)(t,e,r);return(0,o.r)(a,i.z)}}}]);