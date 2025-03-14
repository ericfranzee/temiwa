"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9418],{49418:function(e,t,n){let a,i;n.d(t,{getMessaging:function(){return eZ},getToken:function(){return e0},onMessage:function(){return e1}});var r,o,s,c,u,l=n(80830),d=n(95893),p=n(38954);let f=(e,t)=>t.some(t=>e instanceof t),g=new WeakMap,w=new WeakMap,h=new WeakMap,m=new WeakMap,b=new WeakMap,y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return w.get(e);if("objectStoreNames"===t)return e.objectStoreNames||h.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return v(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function v(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,n)=>{let a=()=>{e.removeEventListener("success",i),e.removeEventListener("error",r)},i=()=>{t(v(e.result)),a()},r=()=>{n(e.error),a()};e.addEventListener("success",i),e.addEventListener("error",r)});return t.then(t=>{t instanceof IDBCursor&&g.set(t,e)}).catch(()=>{}),b.set(t,e),t}(e);if(m.has(e))return m.get(e);let n="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.apply(k(this),n),v(g.get(this))}:function(){for(var e=arguments.length,n=Array(e),a=0;a<e;a++)n[a]=arguments[a];return v(t.apply(k(this),n))}:function(e){for(var n=arguments.length,a=Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];let r=t.call(k(this),e,...a);return h.set(r,e.sort?e.sort():[e]),v(r)}:(t instanceof IDBTransaction&&function(e){if(w.has(e))return;let t=new Promise((t,n)=>{let a=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",r),e.removeEventListener("abort",r)},i=()=>{t(),a()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",i),e.addEventListener("error",r),e.addEventListener("abort",r)});w.set(e,t)}(t),f(t,a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,y):t;return n!==e&&(m.set(e,n),b.set(n,e)),n}let k=e=>b.get(e);function I(e,t){let{blocked:n,upgrade:a,blocking:i,terminated:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=indexedDB.open(e,t),s=v(o);return a&&o.addEventListener("upgradeneeded",e=>{a(v(o.result),e.oldVersion,e.newVersion,v(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),s.then(e=>{r&&e.addEventListener("close",()=>r()),i&&e.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}function S(e){let{blocked:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",()=>t()),v(n).then(()=>void 0)}let T=["get","getKey","getAll","getAllKeys","count"],D=["put","add","delete","clear"],C=new Map;function j(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(C.get(t))return C.get(t);let n=t.replace(/FromIndex$/,""),a=t!==n,i=D.includes(n);if(!(n in(a?IDBIndex:IDBObjectStore).prototype)||!(i||T.includes(n)))return;let r=async function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];let s=this.transaction(e,i?"readwrite":"readonly"),c=s.store;return a&&(c=c.index(r.shift())),(await Promise.all([c[n](...r),i&&s.done]))[0]};return C.set(t,r),r}y={...r=y,get:(e,t,n)=>j(e,t)||r.get(e,t,n),has:(e,t)=>!!j(e,t)||r.has(e,t)};let A="@firebase/installations",E="0.6.4",M="w:".concat(E),O="FIS_v2",K=new p.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function P(e){return e instanceof p.ZR&&e.code.includes("request-failed")}/**
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
 */function _(e){let{projectId:t}=e;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function N(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function L(e,t){let n=(await t.json()).error;return K.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function B(e){let{apiKey:t}=e;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function x(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
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
 */async function q(e,t){let{appConfig:n,heartbeatServiceProvider:a}=e,{fid:i}=t,r=_(n),o=B(n),s=a.getImmediate({optional:!0});if(s){let e=await s.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}let c={method:"POST",headers:o,body:JSON.stringify({fid:i,authVersion:O,appId:n.appId,sdkVersion:M})},u=await x(()=>fetch(r,c));if(u.ok){let e=await u.json();return{fid:e.fid||i,registrationStatus:2,refreshToken:e.refreshToken,authToken:N(e.authToken)}}throw await L("Create Installation",u)}/**
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
 */function F(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */let R=/^[cdef][\w-]{21}$/;/**
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
 */function H(e){return"".concat(e.appName,"!").concat(e.appId)}/**
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
 */let W=new Map;function V(e,t){let n=H(e);$(n,t),function(e,t){let n=(!U&&"BroadcastChannel"in self&&((U=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{$(e.data.key,e.data.fid)}),U);n&&n.postMessage({key:e,fid:t}),0===W.size&&U&&(U.close(),U=null)}(n,t)}function $(e,t){let n=W.get(e);if(n)for(let e of n)e(t)}let U=null,X="firebase-installations-store",z=null;function G(){return z||(z=I("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(X)}})),z}async function J(e,t){let n=H(e),a=(await G()).transaction(X,"readwrite"),i=a.objectStore(X),r=await i.get(n);return await i.put(t,n),await a.done,r&&r.fid===t.fid||V(e,t.fid),t}async function Y(e){let t=H(e),n=(await G()).transaction(X,"readwrite");await n.objectStore(X).delete(t),await n.done}async function Q(e,t){let n=H(e),a=(await G()).transaction(X,"readwrite"),i=a.objectStore(X),r=await i.get(n),o=t(r);return void 0===o?await i.delete(n):await i.put(o,n),await a.done,o&&(!r||r.fid!==o.fid)&&V(e,o.fid),o}/**
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
 */async function Z(e){let t;let n=await Q(e.appConfig,n=>{let a=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(K.create("app-offline"))};let n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=ee(e,n);return{installationEntry:n,registrationPromise:a}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:et(e)}:{installationEntry:t}}(e,ea(n||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return R.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=a.registrationPromise,a.installationEntry});return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function ee(e,t){try{let n=await q(e,t);return J(e.appConfig,n)}catch(n){throw P(n)&&409===n.customData.serverCode?await Y(e.appConfig):await J(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function et(e){let t=await en(e.appConfig);for(;1===t.registrationStatus;)await F(100),t=await en(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:n}=await Z(e);return n||t}return t}function en(e){return Q(e,e=>{if(!e)throw K.create("installation-not-found");return ea(e)})}function ea(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
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
 */async function ei(e,t){let{appConfig:n,heartbeatServiceProvider:a}=e,i=function(e,t){let{fid:n}=t;return"".concat(_(e),"/").concat(n,"/authTokens:generate")}(n,t),r=function(e,t){let{refreshToken:n}=t,a=B(e);return a.append("Authorization","".concat(O," ").concat(n)),a}(n,t),o=a.getImmediate({optional:!0});if(o){let e=await o.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}let s={method:"POST",headers:r,body:JSON.stringify({installation:{sdkVersion:M,appId:n.appId}})},c=await x(()=>fetch(i,s));if(c.ok)return N(await c.json());throw await L("Generate Auth Token",c)}/**
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
 */async function er(e){let t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=await Q(e.appConfig,a=>{var i;if(!eu(a))throw K.create("not-registered");let r=a.authToken;if(!n&&2===(i=r).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return a;if(1===r.requestStatus)return t=eo(e,n),a;{if(!navigator.onLine)throw K.create("app-offline");let n=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(a);return t=ec(e,n),n}});return t?await t:a.authToken}async function eo(e,t){let n=await es(e.appConfig);for(;1===n.authToken.requestStatus;)await F(100),n=await es(e.appConfig);let a=n.authToken;return 0===a.requestStatus?er(e,t):a}function es(e){return Q(e,e=>{var t;if(!eu(e))throw K.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ec(e,t){try{let n=await ei(e,t),a=Object.assign(Object.assign({},t),{authToken:n});return await J(e.appConfig,a),n}catch(n){if(P(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await Y(e.appConfig);else{let n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await J(e.appConfig,n)}throw n}}function eu(e){return void 0!==e&&2===e.registrationStatus}/**
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
 */async function el(e){let{installationEntry:t,registrationPromise:n}=await Z(e);return n?n.catch(console.error):er(e).catch(console.error),t.fid}/**
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
 */async function ed(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return await ep(e),(await er(e,t)).token}async function ep(e){let{registrationPromise:t}=await Z(e);t&&await t}function ef(e){return K.create("missing-app-config-values",{valueName:e})}/**
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
 */let eg="installations";(0,l.Xd)(new d.wA(eg,e=>{let t=e.getProvider("app").getImmediate(),n=/**
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
 */function(e){if(!e||!e.options)throw ef("App Configuration");if(!e.name)throw ef("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw ef(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),a=(0,l.qX)(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,l.Xd)(new d.wA("installations-internal",e=>{let t=e.getProvider("app").getImmediate(),n=(0,l.qX)(t,eg).getImmediate();return{getId:()=>el(n),getToken:e=>ed(n,e)}},"PRIVATE")),(0,l.KN)(A,E),(0,l.KN)(A,E,"esm2017");let ew="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",eh="google.c.a.c_id";/**
 * @license
 * Copyright 2017 Google LLC
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
 */function em(e){return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(o=c||(c={}))[o.DATA_MESSAGE=1]="DATA_MESSAGE",o[o.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(s=u||(u={})).PUSH_RECEIVED="push-received",s.NOTIFICATION_CLICKED="notification-clicked";/**
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
 */let eb="fcm_token_details_db",ey="fcm_token_object_Store";async function ev(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(e=>e.name).includes(eb))return null;let t=null;return(await I(eb,5,{upgrade:async(n,a,i,r)=>{var o;if(a<2||!n.objectStoreNames.contains(ey))return;let s=r.objectStore(ey),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c){if(2===a){if(!c.auth||!c.p256dh||!c.endpoint)return;t={token:c.fcmToken,createTime:null!==(o=c.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:"string"==typeof c.vapidKey?c.vapidKey:em(c.vapidKey)}}}else 3===a?t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:em(c.auth),p256dh:em(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:em(c.vapidKey)}}:4===a&&(t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:em(c.auth),p256dh:em(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:em(c.vapidKey)}})}}})).close(),await S(eb),await S("fcm_vapid_details_db"),await S("undefined"),!function(e){if(!e||!e.subscriptionOptions)return!1;let{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?null:t}let ek="firebase-messaging-store",eI=null;function eS(){return eI||(eI=I("firebase-messaging-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(ek)}})),eI}async function eT(e){let t=ej(e),n=await eS(),a=await n.transaction(ek).objectStore(ek).get(t);if(a)return a;{let t=await ev(e.appConfig.senderId);if(t)return await eD(e,t),t}}async function eD(e,t){let n=ej(e),a=(await eS()).transaction(ek,"readwrite");return await a.objectStore(ek).put(t,n),await a.done,t}async function eC(e){let t=ej(e),n=(await eS()).transaction(ek,"readwrite");await n.objectStore(ek).delete(t),await n.done}function ej(e){let{appConfig:t}=e;return t.appId}let eA=new p.LL("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});/**
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
 */async function eE(e,t){let n;let a={method:"POST",headers:await eP(e),body:JSON.stringify(e_(t))};try{let t=await fetch(eK(e.appConfig),a);n=await t.json()}catch(e){throw eA.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw eA.create("token-subscribe-failed",{errorInfo:e})}if(!n.token)throw eA.create("token-subscribe-no-token");return n.token}async function eM(e,t){let n;let a={method:"PATCH",headers:await eP(e),body:JSON.stringify(e_(t.subscriptionOptions))};try{let i=await fetch("".concat(eK(e.appConfig),"/").concat(t.token),a);n=await i.json()}catch(e){throw eA.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(n.error){let e=n.error.message;throw eA.create("token-update-failed",{errorInfo:e})}if(!n.token)throw eA.create("token-update-no-token");return n.token}async function eO(e,t){let n=await eP(e);try{let a=await fetch("".concat(eK(e.appConfig),"/").concat(t),{method:"DELETE",headers:n}),i=await a.json();if(i.error){let e=i.error.message;throw eA.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw eA.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function eK(e){let{projectId:t}=e;return"".concat("https://fcmregistrations.googleapis.com/v1","/projects/").concat(t,"/registrations")}async function eP(e){let{appConfig:t,installations:n}=e,a=await n.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS ".concat(a)})}function e_(e){let{p256dh:t,auth:n,endpoint:a,vapidKey:i}=e,r={web:{endpoint:a,auth:n,p256dh:t}};return i!==ew&&(r.web.applicationPubKey=i),r}async function eN(e){let t=await eq(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:em(t.getKey("auth")),p256dh:em(t.getKey("p256dh"))},a=await eT(e.firebaseDependencies);if(!a)return ex(e.firebaseDependencies,n);if(function(e,t){let n=t.vapidKey===e.vapidKey,a=t.endpoint===e.endpoint,i=t.auth===e.auth,r=t.p256dh===e.p256dh;return n&&a&&i&&r}(a.subscriptionOptions,n))return Date.now()>=a.createTime+6048e5?eB(e,{token:a.token,createTime:Date.now(),subscriptionOptions:n}):a.token;try{await eO(e.firebaseDependencies,a.token)}catch(e){console.warn(e)}return ex(e.firebaseDependencies,n)}async function eL(e){let t=await eT(e.firebaseDependencies);t&&(await eO(e.firebaseDependencies,t.token),await eC(e.firebaseDependencies));let n=await e.swRegistration.pushManager.getSubscription();return!n||n.unsubscribe()}async function eB(e,t){try{let n=await eM(e.firebaseDependencies,t),a=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await eD(e.firebaseDependencies,a),n}catch(t){throw await eL(e),t}}async function ex(e,t){let n={token:await eE(e,t),createTime:Date.now(),subscriptionOptions:t};return await eD(e,n),n.token}async function eq(e,t){return await e.pushManager.getSubscription()||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){let t="=".repeat((4-e.length%4)%4),n=atob((e+t).replace(/\-/g,"+").replace(/_/g,"/")),a=new Uint8Array(n.length);for(let e=0;e<n.length;++e)a[e]=n.charCodeAt(e);return a}(t)})}/**
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
 */function eF(e){let t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};let n=t.notification.title;n&&(e.notification.title=n);let a=t.notification.body;a&&(e.notification.body=a);let i=t.notification.image;i&&(e.notification.image=i);let r=t.notification.icon;r&&(e.notification.icon=r)}(t,e),e.data&&(t.data=e.data),function(e,t){var n,a,i,r,o;if(!t.fcmOptions&&!(null===(n=t.notification)||void 0===n?void 0:n.click_action))return;e.fcmOptions={};let s=null!==(i=null===(a=t.fcmOptions)||void 0===a?void 0:a.link)&&void 0!==i?i:null===(r=t.notification)||void 0===r?void 0:r.click_action;s&&(e.fcmOptions.link=s);let c=null===(o=t.fcmOptions)||void 0===o?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}(t,e),t}function eR(e,t){let n=[];for(let a=0;a<e.length;a++)n.push(e.charAt(a)),a<t.length&&n.push(t.charAt(a));return n.join("")}function eH(e){return eA.create("missing-app-config-values",{valueName:e})}/**
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
 */eR("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),eR("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");/**
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
 */class eW{_delete(){return Promise.resolve()}constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let a=/**
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
 */function(e){if(!e||!e.options)throw eH("App Configuration Object");if(!e.name)throw eH("App Name");let{options:t}=e;for(let e of["projectId","apiKey","appId","messagingSenderId"])if(!t[e])throw eH(e);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:a,installations:t,analyticsProvider:n}}}/**
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
 */async function eV(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch(()=>{})}catch(e){throw eA.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}/**
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
 */async function e$(e,t){if(t||e.swRegistration||await eV(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw eA.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function eU(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=ew)}/**
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
 */async function eX(e,t){if(!navigator)throw eA.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw eA.create("permission-blocked");return await eU(e,null==t?void 0:t.vapidKey),await e$(e,null==t?void 0:t.serviceWorkerRegistration),eN(e)}/**
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
 */async function ez(e,t,n){let a=function(e){switch(e){case u.NOTIFICATION_CLICKED:return"notification_open";case u.PUSH_RECEIVED:return"notification_foreground";default:throw Error()}}(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:n[eh],message_name:n["google.c.a.c_l"],message_time:n["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}/**
 * @license
 * Copyright 2017 Google LLC
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
 */async function eG(e,t){let n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===u.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(eF(n)):e.onMessageHandler.next(eF(n)));let a=n.data;"object"==typeof a&&a&&eh in a&&"1"===a["google.c.a.e"]&&await ez(e,n.messageType,a)}let eJ="@firebase/messaging",eY="0.12.4";/**
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
 */async function eQ(){try{await (0,p.eu)()}catch(e){return!1}return(0,p.hl)()&&(0,p.zI)()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
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
 */function eZ(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,l.Mq)();return eQ().then(e=>{if(!e)throw eA.create("unsupported-browser")},e=>{throw eA.create("indexed-db-unsupported")}),(0,l.qX)((0,p.m9)(e),"messaging").getImmediate()}async function e0(e,t){return eX(e=(0,p.m9)(e),t)}function e1(e,t){return(/**
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
 */function(e,t){if(!navigator)throw eA.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=(0,p.m9)(e),t))}(0,l.Xd)(new d.wA("messaging",e=>{let t=new eW(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>eG(t,e)),t},"PUBLIC")),(0,l.Xd)(new d.wA("messaging-internal",e=>{let t=e.getProvider("messaging").getImmediate();return{getToken:e=>eX(t,e)}},"PRIVATE")),(0,l.KN)(eJ,eY),(0,l.KN)(eJ,eY,"esm2017")}}]);