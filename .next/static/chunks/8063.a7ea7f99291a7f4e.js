"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8063],{784:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var l=a(3827);a(64090);var i=a(32635),n=a(45943),s=a(81992),r=a(12694),d=a(28817),c=a(9988),o=a(51369),u=a(29541),m=a(15494),f=a(77497),x=a(64387),p=a(72207),v=a(8792),h=a(24232),g=a(46748),y=a(98313),b=a(21879),j=a(31087);let N=(0,h.default)(()=>Promise.all([a.e(3056),a.e(9028)]).then(a.bind(a,59559)).then(e=>({default:e.Empty})),{loadableGenerated:{webpack:()=>[59559]}}),k=e=>{var t,a,i;let{data:n,disabled:s,loading:r}=e;return(0,l.jsx)(b.p,{shop:null==n?void 0:n.shop,defaultOpen:(null===(t=n.stocks)||void 0===t?void 0:t.length)!==0,showEstimatedTime:!0,children:(0,l.jsx)("div",{className:"flex flex-col lg:col-span-5 col-span-7 gap-7 ",children:(null===(a=n.stocks)||void 0===a?void 0:a.length)===0?(0,l.jsx)(N,{animated:!1}):null===(i=n.stocks)||void 0===i?void 0:i.map(e=>(0,l.jsx)(j.Z,{disabled:s,isCalculating:r,data:e,showNoteButton:!1},e.id))})})},w=(0,h.default)(()=>Promise.all([a.e(3056),a.e(9028)]).then(a.bind(a,59559)).then(e=>({default:e.Empty})),{loadableGenerated:{webpack:()=>[59559]}});var C=()=>{var e;let{currency:t,language:a}=(0,y.r)(),h=(0,m.Z)(e=>e.country),b=(0,m.Z)(e=>e.city),j=(0,d.Z)(e=>e.clear),N=(0,d.Z)(e=>e.list),{t:C}=(0,i.$G)(),[P,_,z]=(0,x.d)(),{data:M,isFetching:S,error:T,isError:O,isLoading:Z}=(0,c.a)({queryKey:["calculate",null==t?void 0:t.id,N,null==h?void 0:h.id,null==b?void 0:b.id,null==a?void 0:a.locale],queryFn:()=>{let e={currency_id:null==t?void 0:t.id,country_id:null==h?void 0:h.id,city_id:null==b?void 0:b.id,products:N.map(e=>({stock_id:e.stockId,quantity:e.quantity,image:e.image})),lang:null==a?void 0:a.locale};return s.y.restCalculate(e)},enabled:!!t,staleTime:1/0,keepPreviousData:!0,retry:!1});return Z?(0,l.jsx)("section",{className:"xl:container px-4",children:(0,l.jsx)("div",{className:"grid grid-cols-7",children:(0,l.jsxs)("div",{className:"flex flex-col gap-7 col-span-5",children:[(0,l.jsxs)("div",{className:"flex gap-7 animate-pulse",children:[(0,l.jsx)("div",{className:"relative overflow-hidden lg:h-[320px] md:h-56 h-40 rounded-3xl aspect-[250/320] bg-gray-300"}),(0,l.jsxs)("div",{className:"flex-1 my-5",children:[(0,l.jsx)("div",{className:"h-[22px] rounded-full w-full bg-gray-300 line-clamp-1"}),(0,l.jsx)("div",{className:"h-4 mt-5 rounded-full bg-gray-300 w-4/5"}),(0,l.jsx)("div",{className:"h-4 mt-4 rounded-full bg-gray-300 w-3/5"})]})]}),(0,l.jsxs)("div",{className:"flex gap-7 animate-pulse",children:[(0,l.jsx)("div",{className:"relative overflow-hidden lg:h-[320px] md:h-56 h-40 rounded-3xl aspect-[250/320] bg-gray-300"}),(0,l.jsxs)("div",{className:"flex-1 my-5",children:[(0,l.jsx)("div",{className:"h-[22px] rounded-full w-full bg-gray-300 line-clamp-1"}),(0,l.jsx)("div",{className:"h-4 mt-5 rounded-full bg-gray-300 w-4/5"}),(0,l.jsx)("div",{className:"h-4 mt-4 rounded-full bg-gray-300 w-3/5"})]})]})]})})}):T||0===N.length||(null==M?void 0:M.data.shops.length)===0?(0,l.jsxs)("section",{className:"xl:container px-2 md:px-4",children:[(0,l.jsx)(g.x,{title:"order.detail"}),(0,l.jsx)(w,{animated:!1,text:"your.cart.is.empty",imagePath:"/img/empty_cart.png"})]}):(0,l.jsxs)("section",{className:"xl:container px-4 mb-4",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsx)(g.x,{title:"order.detail"}),(0,l.jsxs)("button",{onClick:_,className:"flex items-center gap-2.5 text-red-600",children:[(0,l.jsx)(f.Z,{}),C("clear.all")]})]}),(0,l.jsxs)("div",{className:"grid grid-cols-7 mt-7 gap-7 relative pb-24",children:[S&&(0,l.jsx)("div",{className:"absolute left-0 w-full h-full min-h-60 bg-white dark:bg-dark dark:bg-opacity-10 bg-opacity-30 flex items-center justify-center z-10",children:(0,l.jsx)(u.Z,{size:80})}),(0,l.jsx)("div",{className:"flex flex-col lg:col-span-5 col-span-7 gap-7 ",children:null==M?void 0:M.data.shops.map(e=>{var t;return(0,l.jsx)(k,{data:e,loading:S},null===(t=e.shop)||void 0===t?void 0:t.id)})}),(0,l.jsx)("div",{className:"lg:col-span-2 col-span-7",children:(0,l.jsxs)("div",{className:"sticky top-2",children:[(0,l.jsx)(o.x,{totals:null==M?void 0:M.data,showTotalTax:!0}),(0,l.jsxs)(n.z,{loading:S,fullWidth:!0,disabled:O,as:v.default,href:"/login?redirect=/cart",children:[C("go.to.checkout")," - ",(0,l.jsx)(r.t,{number:null==M?void 0:null===(e=M.data)||void 0===e?void 0:e.total_price})]})]})})]}),(0,l.jsx)(p.s,{text:"are.you.sure.want.to.clear.all.items.in.the.cart",onConfirm:()=>j(),onCancel:z,isOpen:P})]})}},29541:function(e,t,a){var l=a(3827);a(64090),t.Z=e=>(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size||"20",height:e.size||"20",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",...e,children:[(0,l.jsxs)("circle",{cx:"84",cy:"50",r:"10",fill:"currentColor",children:[(0,l.jsx)("animate",{attributeName:"r",repeatCount:"indefinite",dur:"0.25s",calcMode:"spline",keyTimes:"0;1",values:"10;0",keySplines:"0 0.5 0.5 1",begin:"0s"}),(0,l.jsx)("animate",{attributeName:"fill",repeatCount:"indefinite",dur:"1s",calcMode:"discrete",keyTimes:"0;0.25;0.5;0.75;1",values:"currentColor;#fdfdfd;#dce4eb;#bbcedd;currentColor",begin:"0s"})]}),(0,l.jsxs)("circle",{cx:"16",cy:"50",r:"10",fill:"currentColor",children:[(0,l.jsx)("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"0;0;10;10;10",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"0s"}),(0,l.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"16;16;16;50;84",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"0s"})]}),(0,l.jsxs)("circle",{cx:"50",cy:"50",r:"10",fill:"#bbcedd",children:[(0,l.jsx)("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"0;0;10;10;10",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.25s"}),(0,l.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"16;16;16;50;84",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.25s"})]}),(0,l.jsxs)("circle",{cx:"84",cy:"50",r:"10",fill:"#dce4eb",children:[(0,l.jsx)("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"0;0;10;10;10",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.5s"}),(0,l.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"16;16;16;50;84",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.5s"})]}),(0,l.jsxs)("circle",{cx:"16",cy:"50",r:"10",fill:"#fdfdfd",children:[(0,l.jsx)("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"0;0;10;10;10",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.75s"}),(0,l.jsx)("animate",{attributeName:"cx",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.25;0.5;0.75;1",values:"16;16;16;50;84",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.75s"})]})]})},20703:function(e,t,a){a.d(t,{default:function(){return i.a}});var l=a(67447),i=a.n(l)},8792:function(e,t,a){a.d(t,{default:function(){return i.a}});var l=a(25250),i=a.n(l)},47907:function(e,t,a){var l=a(15313);a.o(l,"notFound")&&a.d(t,{notFound:function(){return l.notFound}}),a.o(l,"redirect")&&a.d(t,{redirect:function(){return l.redirect}}),a.o(l,"useParams")&&a.d(t,{useParams:function(){return l.useParams}}),a.o(l,"usePathname")&&a.d(t,{usePathname:function(){return l.usePathname}}),a.o(l,"useRouter")&&a.d(t,{useRouter:function(){return l.useRouter}}),a.o(l,"useSearchParams")&&a.d(t,{useSearchParams:function(){return l.useSearchParams}})},67447:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{getImageProps:function(){return r},default:function(){return d}});let l=a(86921),i=a(38630),n=a(81749),s=l._(a(10536)),r=e=>{let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}},d=n.Image},46993:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return l}});let l=a(86921)._(a(64090)).default.createContext(null)},90295:function(e,t,a){var l=a(64090),i=l&&"object"==typeof l&&"default"in l?l:{default:l},n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},s=function(e,t){var a={};for(var l in e)!(t.indexOf(l)>=0)&&Object.prototype.hasOwnProperty.call(e,l)&&(a[l]=e[l]);return a},r=function(e){var t=e.color,a=e.size,l=void 0===a?24:a,r=(e.children,s(e,["color","size","children"])),d="remixicon-icon "+(r.className||"");return i.default.createElement("svg",n({},r,{className:d,width:l,height:l,fill:void 0===t?"currentColor":t,viewBox:"0 0 24 24"}),i.default.createElement("path",{d:"M15 2a4 4 0 0 1 3.464 6.001L23 8v2h-2v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V10H1V8l4.536.001A4 4 0 0 1 12 3.355 3.983 3.983 0 0 1 15 2zm-4 8H5v9h6v-9zm8 0h-6v9h6v-9zM9 4a2 2 0 0 0-.15 3.995L9 8h2V6a2 2 0 0 0-1.697-1.977l-.154-.018L9 4zm6 0a2 2 0 0 0-1.995 1.85L13 6v2h2a2 2 0 0 0 1.995-1.85L17 6a2 2 0 0 0-2-2z"}))},d=i.default.memo?i.default.memo(r):r;e.exports=d},9988:function(e,t,a){a.d(t,{a:function(){return s}});var l=a(31678),i=a(87307),n=a(80385);function s(e,t,a){let s=(0,l._v)(e,t,a);return(0,n.r)(s,i.z)}}}]);