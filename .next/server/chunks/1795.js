"use strict";exports.id=1795,exports.ids=[1795],exports.modules={21795:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var s=r(95344);r(3729);var a=r(40219),l=r(22307),d=r(66017),i=r(89410),o=r(56506);let n=({data:e})=>s.jsx(o.default,{href:`/products/${e.uuid}`,children:(0,s.jsxs)("div",{className:"group border border-gray-border rounded-2xl p-2.5 flex gap-7 items-center dark:border-gray-bold",children:[s.jsx(i.default,{width:161,height:100,src:e.img,alt:e.translation?.title||"product",className:"md:aspect-[161/100] aspect-[120/100] object-cover rounded-2xl group-hover:brightness-110 transition-all"}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[s.jsx("div",{className:"md:text-lg text-base font-medium line-clamp-2",children:e.translation?.title}),s.jsx("span",{className:"md:text-sm text-xs font-medium text-gray-field line-clamp-1",children:e.translation?.description})]})]})}),c=()=>{let e=(0,d.Z)(e=>e.country),{data:t}=(0,a.a)(["suggestions"],()=>l._.getAll({perPage:4,region_id:e?.region_id}));return s.jsx("div",{className:"flex flex-col lg:gap-5 gap-2",children:t?.data?.map(e=>s.jsx(n,{data:e},e.id))})}}};