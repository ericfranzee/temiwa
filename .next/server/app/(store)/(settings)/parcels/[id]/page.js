(()=>{var e={};e.id=2186,e.ids=[2186,8725],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},79469:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.ZP,__next_app__:()=>u,originalPathname:()=>c,pages:()=>d,routeModule:()=>x,tree:()=>l});var s=r(50482),i=r(69108),a=r(1146),n=r(68300),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);r.d(t,o);let l=["",{children:["(store)",{children:["(settings)",{children:["parcels",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,13996)),"/home/user/temiwa/app/(store)/(settings)/parcels/[id]/page.tsx"]}]},{loading:[()=>Promise.resolve().then(r.bind(r,27180)),"/home/user/temiwa/app/(store)/(settings)/parcels/[id]/loading.tsx"]}]},{loading:[()=>Promise.resolve().then(r.bind(r,98598)),"/home/user/temiwa/app/(store)/(settings)/parcels/loading.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,52421)),"/home/user/temiwa/app/(store)/(settings)/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,87038)),"/home/user/temiwa/app/(store)/(settings)/loading.tsx"]}],detail:["__DEFAULT__",{},{defaultPage:[()=>Promise.resolve().then(r.bind(r,86602)),"/home/user/temiwa/app/(store)/@detail/default.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,22789)),"/home/user/temiwa/app/(store)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,77111)),"/home/user/temiwa/app/layout.tsx"],error:[()=>Promise.resolve().then(r.bind(r,20429)),"/home/user/temiwa/app/error.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,1429)),"/home/user/temiwa/app/not-found.tsx"]}],d=["/home/user/temiwa/app/(store)/(settings)/parcels/[id]/page.tsx"],c="/(store)/(settings)/parcels/[id]/page",u={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(store)/(settings)/parcels/[id]/page",pathname:"/parcels/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},46650:(e,t,r)=>{Promise.resolve().then(r.bind(r,46746))},75952:(e,t,r)=>{Promise.resolve().then(r.bind(r,49796)),Promise.resolve().then(r.bind(r,53048)),Promise.resolve().then(r.bind(r,38631)),Promise.resolve().then(r.bind(r,38321)),Promise.resolve().then(r.bind(r,26553)),Promise.resolve().then(r.bind(r,9750)),Promise.resolve().then(r.t.bind(r,31900,23)),Promise.resolve().then(r.t.bind(r,61476,23)),Promise.resolve().then(r.bind(r,38354))},46746:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(95344),i=r(8428),a=r(56067),n=r(3729),o=r(75493),l=r(18874);let d=({params:e})=>{let t=(0,i.useRouter)();return s.jsx(a.u,{transparent:!0,withCloseButton:!0,isOpen:!0,onClose:()=>t.replace("/parcels"),children:s.jsx(n.Suspense,{fallback:s.jsx(o.l,{}),children:s.jsx(l.Z,{id:Number(e.id)})})})}},52421:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(25036);r(40002);var i=r(20970),a=r(99602),n=r(63061),o=r(1918),l=r(28725);let d=(0,i.default)(()=>r.e(6191).then(r.bind(r,4345)),{loadableGenerated:{modules:["/home/user/temiwa/app/(store)/(settings)/layout.tsx -> @/components/profile-sidebar"]}}),c=async({children:e,info:t})=>{let r=await (0,a.Z)("v1/rest/settings",{cache:"no-cache"}),i=(0,n.B)(r?.data);return(0,s.jsxs)(s.Fragment,{children:[s.jsx(l.Header,{showOnlyBackButton:!0,borderBottom:!0,settings:i}),s.jsx("main",{className:"xl:container px-4",children:(0,s.jsxs)("div",{className:(0,o.Z)("flex gap-12 "),children:[s.jsx("aside",{className:"border-r border-gray-border dark:border-gray-bold min-h-[calc(100vh-100px)] hidden lg:block lg:pt-10 pt-4",children:s.jsx(d,{})}),t,s.jsx("div",{className:(0,o.Z)("pb-4 flex-1 lg:border border-gray-link rounded-button md:my-7 lg:py-10 py-4 lg:px-10 p-0"),children:e})]})})]})}},87038:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(25036),i=r(87104);let a=()=>s.jsx("section",{className:"relative min-h-[80vh]",children:s.jsx("div",{className:"flex justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",children:s.jsx(i.Z,{})})})},27180:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=()=>null},13996:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>i,default:()=>n});let s=(0,r(86843).createProxy)(String.raw`/home/user/temiwa/app/(store)/(settings)/parcels/[id]/page.tsx`),{__esModule:i,$$typeof:a}=s,n=s.default},98598:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(25036);let i=()=>(0,s.jsxs)("div",{className:"w-full",children:[s.jsx("div",{className:"h-5 w-1/5 rounded-3xl bg-gray-300"}),(0,s.jsxs)("div",{className:"flex mt-4 flex-col gap-3 w-full",children:[s.jsx("div",{className:"h-20 rounded-2xl bg-gray-300 "}),s.jsx("div",{className:"h-20 rounded-2xl bg-gray-300 "})]}),s.jsx("div",{className:"h-5 w-1/5 mt-7 rounded-3xl bg-gray-300"}),(0,s.jsxs)("div",{className:"flex mt-4 flex-col gap-3 w-full",children:[s.jsx("div",{className:"h-20 rounded-2xl bg-gray-300 "}),s.jsx("div",{className:"h-20 rounded-2xl bg-gray-300 "})]})]})},87104:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(25036);let i=({size:e})=>(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:e||"100px",height:e||"100px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[s.jsx("g",{transform:"rotate(0 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.9166666666666666s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(30 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.8333333333333334s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(60 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.75s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(90 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.6666666666666666s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(120 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5833333333333334s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(150 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.5s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(180 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.4166666666666667s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(210 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.3333333333333333s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(240 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.25s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(270 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.16666666666666666s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(300 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"-0.08333333333333333s",repeatCount:"indefinite"})})}),s.jsx("g",{transform:"rotate(330 50 50)",children:s.jsx("rect",{x:"47",y:"24",rx:"3",ry:"6",width:"6",height:"12",fill:"currentColor",children:s.jsx("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})})})]})},79218:(e,t,r)=>{"use strict";r.d(t,{x:()=>o});var s=r(86843);let i=(0,s.createProxy)(String.raw`/home/user/temiwa/components/back-button/back-button.tsx`),{__esModule:a,$$typeof:n}=i;i.default;let o=(0,s.createProxy)(String.raw`/home/user/temiwa/components/back-button/back-button.tsx#BackButton`)},28725:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Header:()=>f});var s=r(25036),i=r(2813),a=r(16274),n=r(1918),o=r(20970),l=r(79218),d=r(86843);let c=(0,d.createProxy)(String.raw`/home/user/temiwa/components/country-indicator/country-indicator.tsx`),{__esModule:u,$$typeof:x}=c,m=c.default,h=(0,d.createProxy)(String.raw`/home/user/temiwa/components/header/links.tsx`),{__esModule:p,$$typeof:g}=h;h.default;let b=(0,d.createProxy)(String.raw`/home/user/temiwa/components/header/links.tsx#HeaderLinks`),y=(0,o.default)(()=>r.e(3092).then(r.bind(r,23146)).then(e=>({default:e.HeaderButtons})),{loadableGenerated:{modules:["/home/user/temiwa/components/header/header.tsx -> @/components/header-buttons"]},ssr:!1,loading:()=>(0,s.jsxs)("div",{className:"flex items-center gap-5",children:[s.jsx("div",{className:"rounded-button bg-gray-300 w-44 h-10 lg:block hidden"}),s.jsx("div",{className:"rounded-button bg-gray-300 lg:w-40 w-10 h-10"})]})}),j=(0,o.default)(()=>r.e(3836).then(r.bind(r,83836)),{loadableGenerated:{modules:["/home/user/temiwa/components/header/header.tsx -> ./mobile-sidebar"]}}),f=({settings:e,showLinks:t,borderBottom:r=!1,isHidden:o=!0,showOnlyBackButton:d,showBusinessButton:c=!0})=>s.jsx("header",{className:(0,n.Z)(r&&"border-b border-gray-link"),children:(0,s.jsxs)("div",{className:"xl:container px-4 lg:py-7 sm:py-4 py-2.5 flex items-center justify-between ",children:[o&&!d&&s.jsx(j,{isHidden:o}),(0,s.jsxs)("div",{className:"flex gap-7 items-center",children:[!o&&!d&&s.jsx(j,{isHidden:o}),s.jsx(a.default,{href:"/",className:(0,n.Z)("relative z-10 lg:z-[4] lg:inline",d&&"hidden"),children:s.jsx(i.default,{src:e?.logo||"",alt:e?.title||"logo",width:148,height:28,className:"object-contain h-7 w-auto"})}),s.jsx(m,{}),d&&s.jsx("div",{className:"lg:hidden",children:s.jsx(l.x,{})})]}),t&&s.jsx(b,{}),s.jsx(y,{canOpenDrawer:d,showBusinessButton:c})]})})}};var t=require("../../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[1638,7439,1496,3662,9198,6041,3478,1194,890,726,797,6178,9750,9259],()=>r(79469));module.exports=s})();