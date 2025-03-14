"use strict";exports.id=5432,exports.ids=[5432],exports.modules={75432:(e,t,r)=>{let n;r.d(t,{FacebookAuthProvider:()=>tl,GoogleAuthProvider:()=>tu,OAuthProvider:()=>ta,RecaptchaVerifier:()=>tN,getAuth:()=>tE,signInWithPhoneNumber:()=>tP,signInWithPopup:()=>tC,signOut:()=>t_});var i=r(36348),s=r(17031),o=r(62824),a=r(47059),l=r(12781),u=r(13685),c=r(57310),h=r(76227),d=r(95687),p=r(59796);let f=l.Readable,m=Symbol("buffer"),g=Symbol("type");class y{constructor(){this[g]="";let e=arguments[0],t=arguments[1],r=[];if(e){let t=Number(e.length);for(let n=0;n<t;n++){let t;let i=e[n];(t=i instanceof Buffer?i:ArrayBuffer.isView(i)?Buffer.from(i.buffer,i.byteOffset,i.byteLength):i instanceof ArrayBuffer?Buffer.from(i):i instanceof y?i[m]:Buffer.from("string"==typeof i?i:String(i))).length,r.push(t)}}this[m]=Buffer.concat(r);let n=t&&void 0!==t.type&&String(t.type).toLowerCase();n&&!/[^\u0020-\u007E]/.test(n)&&(this[g]=n)}get size(){return this[m].length}get type(){return this[g]}text(){return Promise.resolve(this[m].toString())}arrayBuffer(){let e=this[m];return Promise.resolve(e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength))}stream(){let e=new f;return e._read=function(){},e.push(this[m]),e.push(null),e}toString(){return"[object Blob]"}slice(){let e;let t=this.size,r=arguments[0],n=arguments[1];e=void 0===r?0:r<0?Math.max(t+r,0):Math.min(r,t);let i=Math.max((void 0===n?t:n<0?Math.max(t+n,0):Math.min(n,t))-e,0),s=this[m].slice(e,e+i),o=new y([],{type:arguments[2]});return o[m]=s,o}}function _(e,t,r){Error.call(this,e),this.message=e,this.type=t,r&&(this.code=this.errno=r.code),Error.captureStackTrace(this,this.constructor)}Object.defineProperties(y.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}}),Object.defineProperty(y.prototype,Symbol.toStringTag,{value:"Blob",writable:!1,enumerable:!1,configurable:!0}),_.prototype=Object.create(Error.prototype),_.prototype.constructor=_,_.prototype.name="FetchError";try{n=require("encoding").convert}catch(e){}let v=Symbol("Body internals"),I=l.PassThrough;function T(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.size,i=r.timeout;null==e?e=null:w(e)?e=Buffer.from(e.toString()):S(e)||Buffer.isBuffer(e)||("[object ArrayBuffer]"===Object.prototype.toString.call(e)?e=Buffer.from(e):ArrayBuffer.isView(e)?e=Buffer.from(e.buffer,e.byteOffset,e.byteLength):e instanceof l||(e=Buffer.from(String(e)))),this[v]={body:e,disturbed:!1,error:null},this.size=void 0===n?0:n,this.timeout=void 0===i?0:i,e instanceof l&&e.on("error",function(e){let r="AbortError"===e.name?e:new _(`Invalid response body while trying to fetch ${t.url}: ${e.message}`,"system",e);t[v].error=r})}function b(){var e=this;if(this[v].disturbed)return T.Promise.reject(TypeError(`body used already for: ${this.url}`));if(this[v].disturbed=!0,this[v].error)return T.Promise.reject(this[v].error);let t=this.body;if(null===t)return T.Promise.resolve(Buffer.alloc(0));if(S(t)&&(t=t.stream()),Buffer.isBuffer(t))return T.Promise.resolve(t);if(!(t instanceof l))return T.Promise.resolve(Buffer.alloc(0));let r=[],n=0,i=!1;return new T.Promise(function(s,o){let a;e.timeout&&(a=setTimeout(function(){i=!0,o(new _(`Response timeout while trying to fetch ${e.url} (over ${e.timeout}ms)`,"body-timeout"))},e.timeout)),t.on("error",function(t){"AbortError"===t.name?(i=!0,o(t)):o(new _(`Invalid response body while trying to fetch ${e.url}: ${t.message}`,"system",t))}),t.on("data",function(t){if(!i&&null!==t){if(e.size&&n+t.length>e.size){i=!0,o(new _(`content size at ${e.url} over limit: ${e.size}`,"max-size"));return}n+=t.length,r.push(t)}}),t.on("end",function(){if(!i){clearTimeout(a);try{s(Buffer.concat(r,n))}catch(t){o(new _(`Could not create Buffer from response body for ${e.url}: ${t.message}`,"system",t))}}})})}function w(e){return"object"==typeof e&&"function"==typeof e.append&&"function"==typeof e.delete&&"function"==typeof e.get&&"function"==typeof e.getAll&&"function"==typeof e.has&&"function"==typeof e.set&&("URLSearchParams"===e.constructor.name||"[object URLSearchParams]"===Object.prototype.toString.call(e)||"function"==typeof e.sort)}function S(e){return"object"==typeof e&&"function"==typeof e.arrayBuffer&&"string"==typeof e.type&&"function"==typeof e.stream&&"function"==typeof e.constructor&&"string"==typeof e.constructor.name&&/^(Blob|File)$/.test(e.constructor.name)&&/^(Blob|File)$/.test(e[Symbol.toStringTag])}function E(e){let t,r;let n=e.body;if(e.bodyUsed)throw Error("cannot clone body after it is used");return n instanceof l&&"function"!=typeof n.getBoundary&&(t=new I,r=new I,n.pipe(t),n.pipe(r),e[v].body=t,n=r),n}function O(e){if(null===e)return null;if("string"==typeof e)return"text/plain;charset=UTF-8";if(w(e))return"application/x-www-form-urlencoded;charset=UTF-8";if(S(e))return e.type||null;if(Buffer.isBuffer(e))return null;if("[object ArrayBuffer]"===Object.prototype.toString.call(e))return null;if(ArrayBuffer.isView(e))return null;else if("function"==typeof e.getBoundary)return`multipart/form-data;boundary=${e.getBoundary()}`;else if(e instanceof l)return null;else return"text/plain;charset=UTF-8"}function k(e){let t=e.body;return null===t?0:S(t)?t.size:Buffer.isBuffer(t)?t.length:t&&"function"==typeof t.getLengthSync&&(t._lengthRetrievers&&0==t._lengthRetrievers.length||t.hasKnownLength&&t.hasKnownLength())?t.getLengthSync():null}T.prototype={get body(){return this[v].body},get bodyUsed(){return this[v].disturbed},arrayBuffer(){return b.call(this).then(function(e){return e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength)})},blob(){let e=this.headers&&this.headers.get("content-type")||"";return b.call(this).then(function(t){return Object.assign(new y([],{type:e.toLowerCase()}),{[m]:t})})},json(){var e=this;return b.call(this).then(function(t){try{return JSON.parse(t.toString())}catch(t){return T.Promise.reject(new _(`invalid json response body at ${e.url} reason: ${t.message}`,"invalid-json"))}})},text(){return b.call(this).then(function(e){return e.toString()})},buffer(){return b.call(this)},textConverted(){var e=this;return b.call(this).then(function(t){return function(e,t){let r,i;if("function"!=typeof n)throw Error("The package `encoding` must be installed to use the textConverted() function");let s=t.get("content-type"),o="utf-8";return s&&(r=/charset=([^;]*)/i.exec(s)),i=e.slice(0,1024).toString(),!r&&i&&(r=/<meta.+?charset=(['"])(.+?)\1/i.exec(i)),!r&&i&&(!(r=/<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(i))&&(r=/<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(i))&&r.pop(),r&&(r=/charset=(.*)/i.exec(r.pop()))),!r&&i&&(r=/<\?xml.+?encoding=(['"])(.+?)\1/i.exec(i)),r&&("gb2312"===(o=r.pop())||"gbk"===o)&&(o="gb18030"),n(e,"UTF-8",o).toString()}(t,e.headers)})}},Object.defineProperties(T.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0}}),T.mixIn=function(e){for(let t of Object.getOwnPropertyNames(T.prototype))if(!(t in e)){let r=Object.getOwnPropertyDescriptor(T.prototype,t);Object.defineProperty(e,t,r)}},T.Promise=global.Promise;let R=/[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/,P=/[^\t\x20-\x7e\x80-\xff]/;function C(e){if(e=`${e}`,R.test(e)||""===e)throw TypeError(`${e} is not a legal HTTP header name`)}function N(e){if(e=`${e}`,P.test(e))throw TypeError(`${e} is not a legal HTTP header value`)}function A(e,t){for(let r in t=t.toLowerCase(),e)if(r.toLowerCase()===t)return r}let L=Symbol("map");class U{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;if(this[L]=Object.create(null),e instanceof U){let t=e.raw();for(let e of Object.keys(t))for(let r of t[e])this.append(e,r);return}if(null==e);else if("object"==typeof e){let t=e[Symbol.iterator];if(null!=t){if("function"!=typeof t)throw TypeError("Header pairs must be iterable");let r=[];for(let t of e){if("object"!=typeof t||"function"!=typeof t[Symbol.iterator])throw TypeError("Each header pair must be iterable");r.push(Array.from(t))}for(let e of r){if(2!==e.length)throw TypeError("Each header pair must be a name/value tuple");this.append(e[0],e[1])}}else for(let t of Object.keys(e)){let r=e[t];this.append(t,r)}}else throw TypeError("Provided initializer must be an object")}get(e){C(e=`${e}`);let t=A(this[L],e);return void 0===t?null:this[L][t].join(", ")}forEach(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=D(this),n=0;for(;n<r.length;){var i=r[n];let s=i[0],o=i[1];e.call(t,o,s,this),r=D(this),n++}}set(e,t){e=`${e}`,t=`${t}`,C(e),N(t);let r=A(this[L],e);this[L][void 0!==r?r:e]=[t]}append(e,t){e=`${e}`,t=`${t}`,C(e),N(t);let r=A(this[L],e);void 0!==r?this[L][r].push(t):this[L][e]=[t]}has(e){return C(e=`${e}`),void 0!==A(this[L],e)}delete(e){C(e=`${e}`);let t=A(this[L],e);void 0!==t&&delete this[L][t]}raw(){return this[L]}keys(){return j(this,"key")}values(){return j(this,"value")}[Symbol.iterator](){return j(this,"key+value")}}function D(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"key+value";return Object.keys(e[L]).sort().map("key"===t?function(e){return e.toLowerCase()}:"value"===t?function(t){return e[L][t].join(", ")}:function(t){return[t.toLowerCase(),e[L][t].join(", ")]})}U.prototype.entries=U.prototype[Symbol.iterator],Object.defineProperty(U.prototype,Symbol.toStringTag,{value:"Headers",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(U.prototype,{get:{enumerable:!0},forEach:{enumerable:!0},set:{enumerable:!0},append:{enumerable:!0},has:{enumerable:!0},delete:{enumerable:!0},keys:{enumerable:!0},values:{enumerable:!0},entries:{enumerable:!0}});let M=Symbol("internal");function j(e,t){let r=Object.create(F);return r[M]={target:e,kind:t,index:0},r}let F=Object.setPrototypeOf({next(){if(!this||Object.getPrototypeOf(this)!==F)throw TypeError("Value of `this` is not a HeadersIterator");var e=this[M];let t=e.target,r=e.kind,n=e.index,i=D(t,r);return n>=i.length?{value:void 0,done:!0}:(this[M].index=n+1,{value:i[n],done:!1})}},Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));Object.defineProperty(F,Symbol.toStringTag,{value:"HeadersIterator",writable:!1,enumerable:!1,configurable:!0});let x=Symbol("Response internals"),z=u.STATUS_CODES;class ${constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};T.call(this,e,t);let r=t.status||200,n=new U(t.headers);if(null!=e&&!n.has("Content-Type")){let t=O(e);t&&n.append("Content-Type",t)}this[x]={url:t.url,status:r,statusText:t.statusText||z[r],headers:n,counter:t.counter}}get url(){return this[x].url||""}get status(){return this[x].status}get ok(){return this[x].status>=200&&this[x].status<300}get redirected(){return this[x].counter>0}get statusText(){return this[x].statusText}get headers(){return this[x].headers}clone(){return new $(E(this),{url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected})}}T.mixIn($.prototype),Object.defineProperties($.prototype,{url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}}),Object.defineProperty($.prototype,Symbol.toStringTag,{value:"Response",writable:!1,enumerable:!1,configurable:!0});let V=Symbol("Request internals"),B=c.URL||h.URL,H=c.parse,K=c.format;function G(e){return/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(e)&&(e=new B(e).toString()),H(e)}let q="destroy"in l.Readable.prototype;function J(e){return"object"==typeof e&&"object"==typeof e[V]}class W{constructor(e){let t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};J(e)?t=G(e.url):(t=e&&e.href?G(e.href):G(`${e}`),e={});let n=r.method||e.method||"GET";if(n=n.toUpperCase(),(null!=r.body||J(e)&&null!==e.body)&&("GET"===n||"HEAD"===n))throw TypeError("Request with GET/HEAD method cannot have body");let i=null!=r.body?r.body:J(e)&&null!==e.body?E(e):null;T.call(this,i,{timeout:r.timeout||e.timeout||0,size:r.size||e.size||0});let s=new U(r.headers||e.headers||{});if(null!=i&&!s.has("Content-Type")){let e=O(i);e&&s.append("Content-Type",e)}let o=J(e)?e.signal:null;if("signal"in r&&(o=r.signal),null!=o&&!function(e){let t=e&&"object"==typeof e&&Object.getPrototypeOf(e);return!!(t&&"AbortSignal"===t.constructor.name)}(o))throw TypeError("Expected signal to be an instanceof AbortSignal");this[V]={method:n,redirect:r.redirect||e.redirect||"follow",headers:s,parsedURL:t,signal:o},this.follow=void 0!==r.follow?r.follow:void 0!==e.follow?e.follow:20,this.compress=void 0!==r.compress?r.compress:void 0===e.compress||e.compress,this.counter=r.counter||e.counter||0,this.agent=r.agent||e.agent}get method(){return this[V].method}get url(){return K(this[V].parsedURL)}get headers(){return this[V].headers}get redirect(){return this[V].redirect}get signal(){return this[V].signal}clone(){return new W(this)}}function X(e){Error.call(this,e),this.type="aborted",this.message=e,Error.captureStackTrace(this,this.constructor)}T.mixIn(W.prototype),Object.defineProperty(W.prototype,Symbol.toStringTag,{value:"Request",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperties(W.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0}}),X.prototype=Object.create(Error.prototype),X.prototype.constructor=X,X.prototype.name="AbortError";let Y=c.URL||h.URL,Z=l.PassThrough,Q=function(e,t){let r=new Y(t).hostname,n=new Y(e).hostname;return r===n||"."===r[r.length-n.length-1]&&r.endsWith(n)};function ee(e,t){if(!ee.Promise)throw Error("native promise missing, set fetch.Promise to your favorite alternative");return T.Promise=ee.Promise,new ee.Promise(function(r,n){let i;let s=new W(e,t),o=function(e){let t=e[V].parsedURL,r=new U(e[V].headers);if(r.has("Accept")||r.set("Accept","*/*"),!t.protocol||!t.hostname)throw TypeError("Only absolute URLs are supported");if(!/^https?:$/.test(t.protocol))throw TypeError("Only HTTP(S) protocols are supported");if(e.signal&&e.body instanceof l.Readable&&!q)throw Error("Cancellation of streamed requests with AbortSignal is not supported in node < 8");let n=null;if(null==e.body&&/^(POST|PUT)$/i.test(e.method)&&(n="0"),null!=e.body){let t=k(e);"number"==typeof t&&(n=String(t))}n&&r.set("Content-Length",n),r.has("User-Agent")||r.set("User-Agent","node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"),e.compress&&!r.has("Accept-Encoding")&&r.set("Accept-Encoding","gzip,deflate");let i=e.agent;return"function"==typeof i&&(i=i(t)),r.has("Connection")||i||r.set("Connection","close"),Object.assign({},t,{method:e.method,headers:function(e){let t=Object.assign({__proto__:null},e[L]),r=A(e[L],"Host");return void 0!==r&&(t[r]=t[r][0]),t}(r),agent:i})}(s),a=("https:"===o.protocol?d:u).request,c=s.signal,h=null,f=function(){let e=new X("The user aborted a request.");n(e),s.body&&s.body instanceof l.Readable&&s.body.destroy(e),h&&h.body&&h.body.emit("error",e)};if(c&&c.aborted){f();return}let m=function(){f(),y()},g=a(o);function y(){g.abort(),c&&c.removeEventListener("abort",m),clearTimeout(i)}c&&c.addEventListener("abort",m),s.timeout&&g.once("socket",function(e){i=setTimeout(function(){n(new _(`network timeout at: ${s.url}`,"request-timeout")),y()},s.timeout)}),g.on("error",function(e){n(new _(`request to ${s.url} failed, reason: ${e.message}`,"system",e)),y()}),g.on("response",function(e){clearTimeout(i);let t=function(e){let t=new U;for(let r of Object.keys(e))if(!R.test(r)){if(Array.isArray(e[r]))for(let n of e[r])P.test(n)||(void 0===t[L][r]?t[L][r]=[n]:t[L][r].push(n));else P.test(e[r])||(t[L][r]=[e[r]])}return t}(e.headers);if(ee.isRedirect(e.statusCode)){let i=t.get("Location"),o=null;try{o=null===i?null:new Y(i,s.url).toString()}catch(e){if("manual"!==s.redirect){n(new _(`uri requested responds with an invalid redirect URL: ${i}`,"invalid-redirect")),y();return}}switch(s.redirect){case"error":n(new _(`uri requested responds with a redirect, redirect mode is set to error: ${s.url}`,"no-redirect")),y();return;case"manual":if(null!==o)try{t.set("Location",o)}catch(e){n(e)}break;case"follow":if(null===o)break;if(s.counter>=s.follow){n(new _(`maximum redirect reached at: ${s.url}`,"max-redirect")),y();return}let a={headers:new U(s.headers),follow:s.follow,counter:s.counter+1,agent:s.agent,compress:s.compress,method:s.method,body:s.body,signal:s.signal,timeout:s.timeout,size:s.size};if(!Q(s.url,o))for(let e of["authorization","www-authenticate","cookie","cookie2"])a.headers.delete(e);if(303!==e.statusCode&&s.body&&null===k(s)){n(new _("Cannot follow redirect with body being a readable stream","unsupported-redirect")),y();return}(303===e.statusCode||(301===e.statusCode||302===e.statusCode)&&"POST"===s.method)&&(a.method="GET",a.body=void 0,a.headers.delete("content-length")),r(ee(new W(o,a))),y();return}}e.once("end",function(){c&&c.removeEventListener("abort",m)});let o=e.pipe(new Z),a={url:s.url,status:e.statusCode,statusText:e.statusMessage,headers:t,size:s.size,timeout:s.timeout,counter:s.counter},l=t.get("Content-Encoding");if(!s.compress||"HEAD"===s.method||null===l||204===e.statusCode||304===e.statusCode){r(h=new $(o,a));return}let u={flush:p.Z_SYNC_FLUSH,finishFlush:p.Z_SYNC_FLUSH};if("gzip"==l||"x-gzip"==l){r(h=new $(o=o.pipe(p.createGunzip(u)),a));return}if("deflate"==l||"x-deflate"==l){e.pipe(new Z).once("data",function(e){r(h=new $(o=(15&e[0])==8?o.pipe(p.createInflate()):o.pipe(p.createInflateRaw()),a))});return}if("br"==l&&"function"==typeof p.createBrotliDecompress){r(h=new $(o=o.pipe(p.createBrotliDecompress()),a));return}r(h=new $(o,a))}),function(e,t){let r=t.body;null===r?e.end():S(r)?r.stream().pipe(e):Buffer.isBuffer(r)?(e.write(r),e.end()):r.pipe(e)}(g,s)})}ee.isRedirect=function(e){return 301===e||302===e||303===e||307===e||308===e},ee.Promise=global.Promise;var et=r(71954);function er(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let en=new i.LL("auth","Firebase",er()),ei=new et.Yd("@firebase/auth");function es(e,...t){ei.logLevel<=et.in.ERROR&&ei.error(`Auth (${s.Jn}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(e,...t){throw el(e,...t)}function ea(e,...t){return el(e,...t)}function el(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return en.create(e,...t)}function eu(e,t,...r){if(!e)throw el(t,...r)}function ec(e){let t="INTERNAL ASSERTION FAILED: "+e;throw es(t),Error(t)}function eh(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||ec("Short delay should be less than long delay!"),this.isMobile=(0,i.uI)()||(0,i.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===eh()||"https:"===eh()||(0,i.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void ec("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void ec("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void ec("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ef={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},em=new ed(3e4,6e4);function eg(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ey(e,t,r,n,s={}){return e_(e,s,async()=>{let s={},o={};n&&("GET"===t?o=n:s={body:JSON.stringify(n)});let a=(0,i.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),ep.fetch()(eI(e,e.config.apiHost,r,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function e_(e,t,r){e._canInitEmulator=!1;let n=Object.assign(Object.assign({},ef),t);try{let t=new eT(e),s=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw eb(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let[t,r]=(s.ok?o.errorMessage:o.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw eb(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===t)throw eb(e,"email-already-in-use",o);if("USER_DISABLED"===t)throw eb(e,"user-disabled",o);let a=n[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw function(e,t,r){let n=Object.assign(Object.assign({},er()),{[t]:r});return new i.LL("auth","Firebase",n).create(t,{appName:e.name})}(e,a,r);eo(e,a)}}catch(t){if(t instanceof i.ZR)throw t;eo(e,"network-request-failed",{message:String(t)})}}async function ev(e,t,r,n,i={}){let s=await ey(e,t,r,n,i);return"mfaPendingCredential"in s&&eo(e,"multi-factor-auth-required",{_serverResponse:s}),s}function eI(e,t,r,n){let i=`${t}${r}?${n}`;return e.config.emulator?/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){e.emulator||ec("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}(e.config,i):`${e.config.apiScheme}://${i}`}class eT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(ea(this.auth,"network-request-failed")),em.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function eb(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=ea(e,t,n);return i.customData._tokenResponse=r,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(e){return void 0!==e&&void 0!==e.enterprise}class eS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eE(e,t){return ey(e,"GET","/v2/recaptchaConfig",eg(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(e,t){return ey(e,"POST","/v1/accounts:delete",t)}async function ek(e,t){return ey(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function eP(e,t=!1){let r=(0,i.m9)(e),n=await r.getIdToken(t),s=eN(n);eu(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");let o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:n,authTime:eR(eC(s.auth_time)),issuedAtTime:eR(eC(s.iat)),expirationTime:eR(eC(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}function eC(e){return 1e3*Number(e)}function eN(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return es("JWT malformed, contained fewer than 3 sections"),null;try{let e=(0,i.tV)(r);if(!e)return es("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return es("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eA(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof i.ZR&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(!e)return this.errorBackoff=3e4,Math.max(0,(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(null==e?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=eR(this.lastLoginAt),this.creationTime=eR(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(e){var t;let r=e.auth,n=await e.getIdToken(),i=await eA(e,ek(r,{idToken:n}));eu(null==i?void 0:i.users.length,r,"internal-error");let s=i.users[0];e._notifyReloadListener(s);let a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map(e=>{var{providerId:t}=e,r=(0,o._T)(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}):[],l=[...e.providerData.filter(e=>!a.some(t=>t.providerId===e.providerId)),...a],u=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null==l?void 0:l.length);Object.assign(e,{uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new eU(s.createdAt,s.lastLoginAt),isAnonymous:!!u&&c})}async function eM(e){let t=(0,i.m9)(e);await eD(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ej(e,t){let r=await e_(e,{},async()=>{let r=(0,i.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:s}=e.config,o=eI(e,n,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ep.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){eu(e.idToken,"internal-error"),eu(void 0!==e.idToken,"internal-error"),eu(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){let t=eN(e);return eu(t,"internal-error"),eu(void 0!==t.exp,"internal-error"),eu(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return(eu(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await ej(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new eF;return r&&(eu("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(eu("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(eu("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new eF,this.toJSON())}_performRefresh(){return ec("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(e,t){eu("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ez{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,i=(0,o._T)(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eL(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new eU(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let t=await eA(this,this.stsTokenManager.getToken(this.auth,e));return eu(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return eP(this,e)}reload(){return eM(this)}_assign(e){this!==e&&(eu(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new ez(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){eu(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await eD(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){let e=await this.getIdToken();return await eA(this,eO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,i,s,o,a,l,u;let c=null!==(r=t.displayName)&&void 0!==r?r:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:v,isAnonymous:I,providerData:T,stsTokenManager:b}=t;eu(_&&b,e,"internal-error");let w=eF.fromJSON(this.name,b);eu("string"==typeof _,e,"internal-error"),ex(c,e.name),ex(h,e.name),eu("boolean"==typeof v,e,"internal-error"),eu("boolean"==typeof I,e,"internal-error"),ex(d,e.name),ex(p,e.name),ex(f,e.name),ex(m,e.name),ex(g,e.name),ex(y,e.name);let S=new ez({uid:_,auth:e,email:h,emailVerified:v,displayName:c,isAnonymous:I,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:w,createdAt:g,lastLoginAt:y});return T&&Array.isArray(T)&&(S.providerData=T.map(e=>Object.assign({},e))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,r=!1){let n=new eF;n.updateFromServerResponse(t);let i=new ez({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await eD(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e$=new Map;function eV(e){e instanceof Function||ec("Expected a class definition");let t=e$.get(e);return t?t instanceof e||ec("Instance stored in cache mismatched with class"):(t=new e,e$.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eB{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eH(e,t,r){return`firebase:${e}:${t}:${r}`}eB.type="NONE";class eK{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=eH(this.userKey,n.apiKey,i),this.fullPersistenceKey=eH("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?ez._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new eK(eV(eB),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||eV(eB),s=eH(r,e.config.apiKey,e.name),o=null;for(let r of t)try{let t=await r._get(s);if(t){let n=ez._fromJSON(e,t);r!==i&&(o=n),i=r;break}}catch(e){}let a=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length&&(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new eK(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eG(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(function(e=(0,i.z$)()){return/iemobile/i.test(e)}(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";{if(t.includes("edge/"))return"Edge";if(function(e=(0,i.z$)()){return/firefox\//i.test(e)}(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(function(e=(0,i.z$)()){return/blackberry/i.test(e)}(t))return"Blackberry";if(function(e=(0,i.z$)()){return/webos/i.test(e)}(t))return"Webos";if(function(e=(0,i.z$)()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}(t))return"Safari";if((t.includes("chrome/")||function(e=(0,i.z$)()){return/crios\//i.test(e)}(t))&&!t.includes("edge/"))return"Chrome";if(function(e=(0,i.z$)()){return/android/i.test(e)}(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==r?void 0:r.length)===2)return r[1]}return"Other"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eq(e,t=[]){let r;switch(e){case"Browser":r=eG((0,i.z$)());break;case"Worker":r=`${eG((0,i.z$)())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${s.Jn}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eJ{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eW(e,t={}){return ey(e,"GET","/v2/passwordPolicy",eg(e,t))}class eX{constructor(e){var t,r,n,i;let s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,i,s,o;let a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(r=a.meetsMaxPasswordLength)||void 0===r||r),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eY{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eQ(this),this.idTokenSubscription=new eQ(this),this.beforeStateQueue=new eJ(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=en,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=eV(t)),this._initializationPromise=this.queue(async()=>{var r,n;if(!this._deleted&&(this.persistenceManager=await eK.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser(),n=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);(!r||r===s)&&(null==o?void 0:o.user)&&(n=o.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return(eu(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId)?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await eD(e)}catch(e){if((null==e?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){let t=e?(0,i.m9)(e):null;return t&&eu(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&eu(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(eV(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new eX(await eW(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new i.LL("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&eV(e)||this._popupRedirectResolver;eu(t,this,"argument-error"),this.redirectPersistenceManager=await eK.create(this,[eV(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return(this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e)?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,o=this._isInitialized?Promise.resolve():this._initializationPromise;if(eu(o,this,"internal-error"),o.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{let r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return eu(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=eq(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);let r=await (null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);let n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;let t=await (null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){ei.logLevel<=et.in.WARN&&ei.warn(`Auth (${s.Jn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function eZ(e){return(0,i.m9)(e)}class eQ{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,i.ne)(e=>this.observer=e)}get next(){return eu(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}class e0{constructor(e){this.type="recaptcha-enterprise",this.auth=eZ(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{eE(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new eS(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}return new Promise((n,i)=>{r(this.auth).then(r=>{if(!t&&ew(window.grecaptcha))!function(t,r,n){let i=window.grecaptcha;ew(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r("NO_RECAPTCHA")})}):n(Error("No reCAPTCHA enterprise script loaded."))}(r,n,i);else{i(Error("RecaptchaVerifier is only supported in browser"));return}}).catch(e=>{i(e)})})}}async function e1(e,t,r,n=!1){let i;let s=new e0(e);try{i=await s.verify(r)}catch(e){i=await s.verify(r,!0)}let o=Object.assign({},t);return n?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function e2(e,t,r,n){var i;if(null===(i=e._getRecaptchaConfig())||void 0===i||!i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await e1(e,t,r,"getOobCode"===r);return n(e,i)}});{let i=await e1(e,t,r,"getOobCode"===r);return n(e,i)}}function e3(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function e4(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e8{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ec("not implemented")}_getIdTokenResponse(e){return ec("not implemented")}_linkToIdToken(e,t){return ec("not implemented")}_getReauthenticationResolver(e){return ec("not implemented")}}async function e7(e,t){return ey(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e9(e,t){return ev(e,"POST","/v1/accounts:signInWithPassword",eg(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e5(e,t){return ev(e,"POST","/v1/accounts:signInWithEmailLink",eg(e,t))}async function e6(e,t){return ev(e,"POST","/v1/accounts:signInWithEmailLink",eg(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends e8{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new te(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new te(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return e2(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",e9);case"emailLink":return e5(e,{email:this._email,oobCode:this._password});default:eo(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return e7(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return e6(e,{idToken:t,email:this._email,oobCode:this._password});default:eo(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e,t){return ev(e,"POST","/v1/accounts:signInWithIdp",eg(e,t))}class tr extends e8{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):eo("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,i=(0,o._T)(t,["providerId","signInMethod"]);if(!r||!n)return null;let s=new tr(r,n);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return tt(e,this.buildRequest())}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,tt(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,tt(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,i.xO)(t)}return e}}class tn{constructor(e){var t,r,n,s,o,a;let l=(0,i.zd)((0,i.pd)(e)),u=null!==(t=l.apiKey)&&void 0!==t?t:null,c=null!==(r=l.oobCode)&&void 0!==r?r:null,h=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=l.mode)&&void 0!==n?n:null);eu(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=l.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=l.tenantId)&&void 0!==a?a:null}static parseLink(e){let t=function(e){let t=(0,i.zd)((0,i.pd)(e)).link,r=t?(0,i.zd)((0,i.pd)(t)).deep_link_id:null,n=(0,i.zd)((0,i.pd)(e)).deep_link_id;return(n?(0,i.zd)((0,i.pd)(n)).link:null)||n||r||t||e}(e);try{return new tn(t)}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.providerId=ti.PROVIDER_ID}static credential(e,t){return te._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=tn.parseLink(t);return eu(r,"argument-error"),te._fromEmailAndCode(e,r.code,r.tenantId)}}ti.PROVIDER_ID="password",ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends ts{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ta extends to{static credentialFromJSON(e){let t="string"==typeof e?JSON.parse(e):e;return eu("providerId"in t&&"signInMethod"in t,"argument-error"),tr._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return eu(e.idToken||e.accessToken,"argument-error"),tr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ta.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ta.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:n,pendingToken:i,nonce:s,providerId:o}=e;if(!r&&!n&&!t&&!i||!o)return null;try{return new ta(o)._credential({idToken:t,accessToken:r,nonce:s,pendingToken:i})}catch(e){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends to{constructor(){super("facebook.com")}static credential(e){return tr._fromParams({providerId:tl.PROVIDER_ID,signInMethod:tl.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tl.credentialFromTaggedObject(e)}static credentialFromError(e){return tl.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tl.credential(e.oauthAccessToken)}catch(e){return null}}}tl.FACEBOOK_SIGN_IN_METHOD="facebook.com",tl.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends to{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tr._fromParams({providerId:tu.PROVIDER_ID,signInMethod:tu.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tu.credentialFromTaggedObject(e)}static credentialFromError(e){return tu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return tu.credential(t,r)}catch(e){return null}}}tu.GOOGLE_SIGN_IN_METHOD="google.com",tu.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends to{constructor(){super("github.com")}static credential(e){return tr._fromParams({providerId:tc.PROVIDER_ID,signInMethod:tc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tc.credentialFromTaggedObject(e)}static credentialFromError(e){return tc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tc.credential(e.oauthAccessToken)}catch(e){return null}}}tc.GITHUB_SIGN_IN_METHOD="github.com",tc.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th extends to{constructor(){super("twitter.com")}static credential(e,t){return tr._fromParams({providerId:th.PROVIDER_ID,signInMethod:th.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return th.credentialFromTaggedObject(e)}static credentialFromError(e){return th.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return th.credential(t,r)}catch(e){return null}}}th.TWITTER_SIGN_IN_METHOD="twitter.com",th.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){return new td({user:await ez._fromIdTokenResponse(e,r,n),providerId:tp(r),_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){return await e._updateTokensIfNecessary(r,!0),new td({user:e,providerId:tp(r),_tokenResponse:r,operationType:t})}}function tp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf extends null{constructor(e,t,r,n){var i;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,tf.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new tf(e,t,r,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?tg._fromServerResponse(e,t):"totpInfo"in t?ty._fromServerResponse(e,t):eo(e,"internal-error")}}class tg extends null{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new tg(t)}}class ty extends null{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new ty(t)}}function t_(e){return(0,i.m9)(e).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new tv("enroll",e,t)}static _fromMfaPendingCredential(e){return new tv("signin",e)}toJSON(){return{multiFactorSession:{["enroll"===this.type?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return tv._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(r=e.multiFactorSession)||void 0===r?void 0:r.idToken)return tv._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){let r=eZ(e),n=t.customData._serverResponse,i=(n.mfaInfo||[]).map(e=>tm._fromServerResponse(r,e));eu(n.mfaPendingCredential,r,"internal-error");let s=tv._fromMfaPendingCredential(n.mfaPendingCredential);return new tI(s,i,async e=>{let i=await e._process(r,s);delete n.mfaInfo,delete n.mfaPendingCredential;let o=Object.assign(Object.assign({},n),{idToken:i.idToken,refreshToken:i.refreshToken});switch(t.operationType){case"signIn":let a=await td._fromIdTokenResponse(r,t.operationType,o);return await r._updateCurrentUser(a.user),a;case"reauthenticate":return eu(t.user,r,"internal-error"),td._forOperation(t.user,t.operationType,o);default:eo(r,"internal-error")}})}async resolveSignIn(e){return this.signInResolver(e)}}class tT{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(t=>tm._fromServerResponse(e.auth,t)))})}static _fromUser(e){return new tT(e)}async getSession(){return tv._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){let r=await this.getSession(),n=await eA(this.user,e._process(this.user.auth,r,t));return await this.user._updateTokensIfNecessary(n),this.user.reload()}async unenroll(e){let t="string"==typeof e?e:e.uid,r=await this.user.getIdToken();try{var n;let e=await eA(this.user,(n=this.user.auth,ey(n,"POST","/v2/accounts/mfaEnrollment:withdraw",eg(n,{idToken:r,mfaEnrollmentId:t}))));this.enrolledFactors=this.enrolledFactors.filter(({uid:e})=>e!==t),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}}}new WeakMap;var tb="@firebase/auth",tw="1.3.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){eu(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function tE(e=(0,s.Mq)()){let t=(0,s.qX)(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=(0,s.qX)(e,"auth");if(r.isInitialized()){let e=r.getImmediate(),n=r.getOptions();if((0,i.vZ)(n,null!=t?t:{}))return e;eo(e,"already-initialized")}return r.initialize({options:t})}(e),n=(0,i.q4)("auth");return n&&function(e,t,r){let n=eZ(e);eu(n._canInitEmulator,n,"emulator-config-failed"),eu(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=!!(null==r?void 0:r.disableWarnings),s=e3(t),{host:o,port:a}=function(e){let t=e3(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:e4(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:e4(t)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.")}(r,`http://${n}`),r}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ep.initialize(ee,U,$),function(e){(0,s.Xd)(new a.wA("auth",(t,{options:r})=>{let n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;eu(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});let l=new eY(n,i,s,{apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:eq(e)});return function(e,t){let r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(eV);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(l,r),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),(0,s.Xd)(new a.wA("auth-internal",e=>new tS(eZ(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.KN)(tb,tw,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(e)),(0,s.KN)(tb,tw,"esm2017")}("Node");let tO=ea("operation-not-supported-in-this-environment");async function tk(){throw tO}class tR{constructor(){throw tO}}let tP=tk,tC=tk,tN=tR;eY.prototype.setPersistence=async()=>{};class tA{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ec("unexpected MultiFactorSessionType")}}}class tL{static assertionForEnrollment(e,t){return tU._fromSecret(e,t)}static assertionForSignIn(e,t){return tU._fromEnrollmentId(e,t)}static async generateSecret(e){var t,r;eu(void 0!==(null===(t=e.user)||void 0===t?void 0:t.auth),"internal-error");let n=await ey(r=e.user.auth,"POST","/v2/accounts/mfaEnrollment:start",eg(r,{idToken:e.credential,totpEnrollmentInfo:{}}));return tD._fromStartTotpMfaEnrollmentResponse(n,e.user.auth)}}tL.FACTOR_ID="totp";class tU extends tA{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new tU(t,void 0,e)}static _fromEnrollmentId(e,t){return new tU(t,e)}async _finalizeEnroll(e,t,r){return eu(void 0!==this.secret,e,"argument-error"),ey(e,"POST","/v2/accounts/mfaEnrollment:finalize",eg(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){eu(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return ey(e,"POST","/v2/accounts/mfaSignIn:finalize",eg(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class tD{constructor(e,t,r,n,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new tD(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let n=!1;return(tM(e)||tM(t))&&(n=!0),n&&(tM(e)&&(e=(null===(r=this.auth.currentUser)||void 0===r?void 0:r.email)||"unknownuser"),tM(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function tM(e){return void 0===e||(null==e?void 0:e.length)===0}},62824:(e,t,r)=>{r.d(t,{_T:()=>i,pi:()=>n});var n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function i(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}};