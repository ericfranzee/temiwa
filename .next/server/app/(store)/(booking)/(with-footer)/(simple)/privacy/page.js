(()=>{var e={};e.id=3135,e.ids=[3135],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},70406:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.ZP,__next_app__:()=>d,originalPathname:()=>c,pages:()=>u,routeModule:()=>h,tree:()=>l});var s=r(50482),i=r(69108),n=r(1146),a=r(68300),o={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>a[e]);r.d(t,o);let l=["",{children:["(store)",{children:["(booking)",{children:["(with-footer)",{children:["(simple)",{children:["privacy",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,55040)),"/home/user/temiwa/app/(store)/(booking)/(with-footer)/(simple)/privacy/page.tsx"]}]},{loading:[()=>Promise.resolve().then(r.bind(r,13249)),"/home/user/temiwa/app/(store)/(booking)/(with-footer)/(simple)/privacy/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,33937)),"/home/user/temiwa/app/(store)/(booking)/(with-footer)/(simple)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,12562)),"/home/user/temiwa/app/(store)/(booking)/(with-footer)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,43516)),"/home/user/temiwa/app/(store)/(booking)/layout.tsx"]}],detail:["__DEFAULT__",{},{defaultPage:[()=>Promise.resolve().then(r.bind(r,86602)),"/home/user/temiwa/app/(store)/@detail/default.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,22789)),"/home/user/temiwa/app/(store)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,77111)),"/home/user/temiwa/app/layout.tsx"],error:[()=>Promise.resolve().then(r.bind(r,20429)),"/home/user/temiwa/app/error.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,1429)),"/home/user/temiwa/app/not-found.tsx"]}],u=["/home/user/temiwa/app/(store)/(booking)/(with-footer)/(simple)/privacy/page.tsx"],c="/(store)/(booking)/(with-footer)/(simple)/privacy/page",d={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(store)/(booking)/(with-footer)/(simple)/privacy/page",pathname:"/privacy",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4190:(e,t,r)=>{Promise.resolve().then(r.bind(r,110))},110:(e,t,r)=>{"use strict";r.r(t),r.d(t,{PrivacyContent:()=>o});var s=r(95344),i=r(40219),n=r(738),a=r(66345);let o=({data:e})=>{let{language:t}=(0,a.r)(),{data:r}=(0,i.a)(["privacy",t?.locale],()=>n.x.privacy({lang:t?.locale}),{initialData:e});return(0,s.jsxs)("div",{className:"xl:container px-4 py-7",children:[s.jsx("h1",{className:"md:text-head text-xl font-semibold",children:r?.data?.translation?.title}),s.jsx("div",{className:"mt-4",dangerouslySetInnerHTML:{__html:r?.data?.translation?.description||""}})]})}},738:(e,t,r)=>{"use strict";r.d(t,{x:()=>o});var s=r(80992),i=r(11204),n=r(1356),a=r(75488);let o={terms:e=>(0,s.Z)((0,i.d)("v1/rest/term",e),{redirectOnError:!0,cache:"no-cache"}),privacy:e=>(0,s.Z)((0,i.d)("v1/rest/policy",e),{redirectOnError:!0}),faq:e=>(0,s.Z)((0,i.d)("v1/rest/faqs/paginate",e),{cache:"no-cache"}),referrals:e=>fetch(`${a._n}${(0,i.d)("v1/rest/referral",e)}`,{headers:{"Content-Type":"application/json",Authorization:(0,n.ej)("token"),METHOD:"GET"}}).then(e=>e.json()).catch(e=>e),getPages:e=>(0,s.Z)((0,i.d)("v1/rest/pages/paginate",e)),careerList:e=>(0,s.Z)((0,i.d)("v1/rest/careers/paginate",e)),getCareer:(e,t)=>(0,s.Z)((0,i.d)(`v1/rest/careers/${e}`,t))}},13249:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(25036),i=r(87104);let n=()=>s.jsx("section",{className:"relative min-h-[80vh]",children:s.jsx("div",{className:"flex justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",children:s.jsx(i.Z,{})})})},55040:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h,dynamic:()=>d});var s=r(25036),i=r(7439),n=r(74636),a=r(86843);let o=(0,a.createProxy)(String.raw`/home/user/temiwa/app/(store)/(booking)/(with-footer)/(simple)/privacy/content.tsx`),{__esModule:l,$$typeof:u}=o;o.default;let c=(0,a.createProxy)(String.raw`/home/user/temiwa/app/(store)/(booking)/(with-footer)/(simple)/privacy/content.tsx#PrivacyContent`),d="force-dynamic",h=async()=>{let e=i.cookies().get("lang")?.value,t=await n.x.privacy({lang:e});return s.jsx(c,{data:t})}},87104:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(25036);let i=({size:e})=>(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:e||"100px",height:e||"100px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[s.jsx("g",{transform:"rotate(0 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(30 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(60 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(90 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(120 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(150 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(180 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(210 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(240 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(270 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(300 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(330 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})})})]})},74636:(e,t,r)=>{"use strict";r.d(t,{x:()=>o});var s=r(99602),i=r(19510),n=r(95605),a=r(94591);let o={terms:e=>(0,s.Z)((0,i.d)("v1/rest/term",e),{redirectOnError:!0,cache:"no-cache"}),privacy:e=>(0,s.Z)((0,i.d)("v1/rest/policy",e),{redirectOnError:!0}),faq:e=>(0,s.Z)((0,i.d)("v1/rest/faqs/paginate",e),{cache:"no-cache"}),referrals:e=>fetch(`${a._n}${(0,i.d)("v1/rest/referral",e)}`,{headers:{"Content-Type":"application/json",Authorization:(0,n.ej)("token"),METHOD:"GET"}}).then(e=>e.json()).catch(e=>e),getPages:e=>(0,s.Z)((0,i.d)("v1/rest/pages/paginate",e)),careerList:e=>(0,s.Z)((0,i.d)("v1/rest/careers/paginate",e)),getCareer:(e,t)=>(0,s.Z)((0,i.d)(`v1/rest/careers/${e}`,t))}},32585:(e,t,r)=>{"use strict";r.d(t,{p:()=>E});var s,i,n,a=r(3729),o=r(46070),l=r(84653),u=r(3159),c=r(49824),d=r(63718),h=r(9718),p=r(11786),m=r(46138),x=r(51264),f=r(70621);let g=null!=(n=a.startTransition)?n:function(e){e()};var v=((s=v||{})[s.Open=0]="Open",s[s.Closed=1]="Closed",s),y=((i=y||{})[i.ToggleDisclosure=0]="ToggleDisclosure",i[i.CloseDisclosure=1]="CloseDisclosure",i[i.SetButtonId=2]="SetButtonId",i[i.SetPanelId=3]="SetPanelId",i[i.LinkPanel=4]="LinkPanel",i[i.UnlinkPanel=5]="UnlinkPanel",i);let b={0:e=>({...e,disclosureState:(0,o.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},P=(0,a.createContext)(null);function w(e){let t=(0,a.useContext)(P);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,w),t}return t}P.displayName="DisclosureContext";let j=(0,a.createContext)(null);j.displayName="DisclosureAPIContext";let C=(0,a.createContext)(null);function k(e,t){return(0,o.E)(t.type,b,e,t)}C.displayName="DisclosurePanelContext";let R=a.Fragment,M=l.AN.RenderStrategy|l.AN.Static,E=Object.assign((0,l.yV)(function(e,t){let{defaultOpen:r=!1,...s}=e,i=(0,a.useRef)(null),n=(0,u.T)(t,(0,u.h)(e=>{i.current=e},void 0===e.as||e.as===a.Fragment)),c=(0,a.useRef)(null),d=(0,a.useRef)(null),h=(0,a.useReducer)(k,{disclosureState:r?0:1,linkedPanel:!1,buttonRef:d,panelRef:c,buttonId:null,panelId:null}),[{disclosureState:m,buttonId:g},v]=h,y=(0,f.z)(e=>{v({type:1});let t=(0,x.r)(i);if(!t||!g)return;let r=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(g):t.getElementById(g);null==r||r.focus()}),b=(0,a.useMemo)(()=>({close:y}),[y]),w=(0,a.useMemo)(()=>({open:0===m,close:y}),[m,y]);return a.createElement(P.Provider,{value:h},a.createElement(j.Provider,{value:b},a.createElement(p.up,{value:(0,o.E)(m,{0:p.ZM.Open,1:p.ZM.Closed})},(0,l.sY)({ourProps:{ref:n},theirProps:s,slot:w,defaultTag:R,name:"Disclosure"}))))}),{Button:(0,l.yV)(function(e,t){let r=(0,c.M)(),{id:s=`headlessui-disclosure-button-${r}`,...i}=e,[n,o]=w("Disclosure.Button"),p=(0,a.useContext)(C),x=null!==p&&p===n.panelId,g=(0,a.useRef)(null),v=(0,u.T)(g,t,x?null:n.buttonRef);(0,a.useEffect)(()=>{if(!x)return o({type:2,buttonId:s}),()=>{o({type:2,buttonId:null})}},[s,o,x]);let y=(0,f.z)(e=>{var t;if(x){if(1===n.disclosureState)return;switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),o({type:0}),null==(t=n.buttonRef.current)||t.focus()}}else switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),o({type:0})}}),b=(0,f.z)(e=>{e.key===d.R.Space&&e.preventDefault()}),P=(0,f.z)(t=>{var r;(0,h.P)(t.currentTarget)||e.disabled||(x?(o({type:0}),null==(r=n.buttonRef.current)||r.focus()):o({type:0}))}),j=(0,a.useMemo)(()=>({open:0===n.disclosureState}),[n]),k=(0,m.f)(e,g),R=x?{ref:v,type:k,onKeyDown:y,onClick:P}:{ref:v,id:s,type:k,"aria-expanded":0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:y,onKeyUp:b,onClick:P};return(0,l.sY)({ourProps:R,theirProps:i,slot:j,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,l.yV)(function(e,t){let r=(0,c.M)(),{id:s=`headlessui-disclosure-panel-${r}`,...i}=e,[n,o]=w("Disclosure.Panel"),{close:d}=function e(t){let r=(0,a.useContext)(j);if(null===r){let r=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return r}("Disclosure.Panel"),h=(0,u.T)(t,n.panelRef,e=>{g(()=>o({type:e?4:5}))});(0,a.useEffect)(()=>(o({type:3,panelId:s}),()=>{o({type:3,panelId:null})}),[s,o]);let m=(0,p.oJ)(),x=null!==m?(m&p.ZM.Open)===p.ZM.Open:0===n.disclosureState,f=(0,a.useMemo)(()=>({open:0===n.disclosureState,close:d}),[n,d]);return a.createElement(C.Provider,{value:n.panelId},(0,l.sY)({ourProps:{ref:h,id:s},theirProps:i,slot:f,defaultTag:"div",features:M,visible:x,name:"Disclosure.Panel"}))})})},44224:(e,t,r)=>{"use strict";r.d(t,{N:()=>l});var s=r(20727),i=r(14616),n=r(73951);class a extends i.z{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:(0,n.Gm)()},t)}getOptimisticResult(e){return e.behavior=(0,n.Gm)(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"forward",pageParam:e}}})}fetchPreviousPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"backward",pageParam:e}}})}createResult(e,t){var r,s,i,a,o,l;let{state:u}=e,c=super.createResult(e,t),{isFetching:d,isRefetching:h}=c,p=d&&(null==(r=u.fetchMeta)?void 0:null==(s=r.fetchMore)?void 0:s.direction)==="forward",m=d&&(null==(i=u.fetchMeta)?void 0:null==(a=i.fetchMore)?void 0:a.direction)==="backward";return{...c,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,n.Qy)(t,null==(o=u.data)?void 0:o.pages),hasPreviousPage:(0,n.ZF)(t,null==(l=u.data)?void 0:l.pages),isFetchingNextPage:p,isFetchingPreviousPage:m,isRefetching:h&&!p&&!m}}}var o=r(41088);function l(e,t,r){let i=(0,s._v)(e,t,r);return(0,o.r)(i,a)}},14373:(e,t,r)=>{"use strict";r.d(t,{D:()=>h});var s=r(3729),i=r(20727),n=r(62818),a=r(77579),o=r(52936);class l extends o.l{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;let r=this.options;this.options=this.client.defaultMutationOptions(e),(0,i.VS)(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.currentMutation)||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();let t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let e=this.currentMutation?this.currentMutation.state:(0,n.R)(),t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){a.V.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var t,r,s,i,n,a,o,l;e.onSuccess?(null==(t=(r=this.mutateOptions).onSuccess)||t.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(s=(i=this.mutateOptions).onSettled)||s.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):e.onError&&(null==(n=(a=this.mutateOptions).onError)||n.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(o=(l=this.mutateOptions).onSettled)||o.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)})})}}var u=r(49939),c=r(11494),d=r(67414);function h(e,t,r){let n=(0,i.lV)(e,t,r),o=(0,c.NL)({context:n.context}),[h]=s.useState(()=>new l(o,n));s.useEffect(()=>{h.setOptions(n)},[h,n]);let m=(0,u.$)(s.useCallback(e=>h.subscribe(a.V.batchCalls(e)),[h]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),x=s.useCallback((e,t)=>{h.mutate(e,t).catch(p)},[h]);if(m.error&&(0,d.L)(h.options.useErrorBoundary,[m.error]))throw m.error;return{...m,mutate:x,mutateAsync:m.mutate}}function p(){}}};var t=require("../../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,7439,1496,3662,9198,6041,3478,726,797,6178,5388],()=>r(70406));module.exports=s})();