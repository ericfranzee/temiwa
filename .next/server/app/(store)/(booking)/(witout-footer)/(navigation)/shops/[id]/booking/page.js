(()=>{var e={};e.id=6398,e.ids=[6398],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},85477:e=>{"use strict";e.exports=require("punycode")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},59796:e=>{"use strict";e.exports=require("zlib")},49199:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>r.ZP,__next_app__:()=>c,originalPathname:()=>d,pages:()=>u,routeModule:()=>h,tree:()=>l});var o=s(50482),i=s(69108),r=s(1146),a=s(68300),n={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>a[e]);s.d(t,n);let l=["",{children:["(store)",{children:["(booking)",{children:["(witout-footer)",{children:["(navigation)",{children:["shops",{children:["[id]",{children:["booking",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5676)),"/home/user/temiwa/app/(store)/(booking)/(witout-footer)/(navigation)/shops/[id]/booking/page.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,95643)),"/home/user/temiwa/app/(store)/(booking)/(witout-footer)/(navigation)/shops/[id]/booking/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,73691)),"/home/user/temiwa/app/(store)/(booking)/(witout-footer)/(navigation)/shops/[id]/layout.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,44753)),"/home/user/temiwa/app/(store)/(booking)/(witout-footer)/(navigation)/layout.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(s.bind(s,43516)),"/home/user/temiwa/app/(store)/(booking)/layout.tsx"]}],detail:["__DEFAULT__",{},{defaultPage:[()=>Promise.resolve().then(s.bind(s,86602)),"/home/user/temiwa/app/(store)/@detail/default.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,22789)),"/home/user/temiwa/app/(store)/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(s.bind(s,77111)),"/home/user/temiwa/app/layout.tsx"],error:[()=>Promise.resolve().then(s.bind(s,20429)),"/home/user/temiwa/app/error.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,1429)),"/home/user/temiwa/app/not-found.tsx"]}],u=["/home/user/temiwa/app/(store)/(booking)/(witout-footer)/(navigation)/shops/[id]/booking/page.tsx"],d="/(store)/(booking)/(witout-footer)/(navigation)/shops/[id]/booking/page",c={require:s,loadChunk:()=>Promise.resolve()},h=new o.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/(store)/(booking)/(witout-footer)/(navigation)/shops/[id]/booking/page",pathname:"/shops/[id]/booking",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},82930:(e,t,s)=>{Promise.resolve().then(s.bind(s,3019)),Promise.resolve().then(s.bind(s,2044)),Promise.resolve().then(s.bind(s,15124)),Promise.resolve().then(s.bind(s,21802)),Promise.resolve().then(s.bind(s,8168)),Promise.resolve().then(s.bind(s,38354))},80806:e=>{"use strict";e.exports=function(){var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,s=/([+-]|\d\d)/g;return function(o,i,r){var a=i.prototype;r.utc=function(e){var t={date:e,utc:!0,args:arguments};return new i(t)},a.utc=function(t){var s=r(this.toDate(),{locale:this.$L,utc:!0});return t?s.add(this.utcOffset(),e):s},a.local=function(){return r(this.toDate(),{locale:this.$L,utc:!1})};var n=a.parse;a.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),n.call(this,e)};var l=a.init;a.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else l.call(this)};var u=a.utcOffset;a.utcOffset=function(o,i){var r=this.$utils().u;if(r(o))return this.$u?0:r(this.$offset)?u.call(this):this.$offset;if("string"==typeof o&&null===(o=function(e){void 0===e&&(e="");var o=e.match(t);if(!o)return null;var i=(""+o[0]).match(s)||["-",0,0],r=i[0],a=60*+i[1]+ +i[2];return 0===a?0:"+"===r?a:-a}(o)))return this;var a=16>=Math.abs(o)?60*o:o,n=this;if(i)return n.$offset=a,n.$u=0===o,n;if(0!==o){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(n=this.local().add(a+l,e)).$offset=a,n.$x.$localOffset=l}else n=this.utc();return n};var d=a.format;a.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,t)},a.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var c=a.toDate;a.toDate=function(e){return"s"===e&&this.$offset?r(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():c.call(this)};var h=a.diff;a.diff=function(e,t,s){if(e&&this.$u===e.$u)return h.call(this,e,t,s);var o=this.local(),i=r(e).local();return h.call(o,i,t,s)}}}()},11343:(e,t,s)=>{"use strict";s.d(t,{v:()=>o});let o=e=>e?.reduce((e,t)=>e.concat(t.data),[])},5676:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var o=s(25036),i=s(7439),r=s(39376),a=s(20970),n=s(2997),l=s(89522),u=s(83813),d=s(70937);let c=(0,a.default)(()=>s.e(8920).then(s.bind(s,58920)).then(e=>({default:e.Services})),{loadableGenerated:{modules:["/home/user/temiwa/app/(store)/(booking)/(witout-footer)/(navigation)/shops/[id]/booking/page.tsx -> ../components/services"]},loading:()=>(0,o.jsxs)("div",{className:"border border-gray-link rounded-button py-6 px-5 animate-pulse col-span-2",children:[o.jsx("div",{className:"h-6 rounded-button w-1/3 bg-gray-300"}),(0,o.jsxs)("div",{className:"mt-6",children:[o.jsx("div",{className:"w-1/2 mb-2 rounded-full h-[18px] bg-gray-300"}),o.jsx("div",{className:"w-full mb-1 rounded-full h-[14px] bg-gray-300"}),o.jsx("div",{className:"w-1/4 rounded-full h-[14px] bg-gray-300"})]}),(0,o.jsxs)("div",{className:"mt-6",children:[o.jsx("div",{className:"w-1/2 mb-2 rounded-full h-[18px] bg-gray-300"}),o.jsx("div",{className:"w-full mb-1 rounded-full h-[14px] bg-gray-300"}),o.jsx("div",{className:"w-1/4 rounded-full h-[14px] bg-gray-300"})]}),(0,o.jsxs)("div",{className:"mt-6",children:[o.jsx("div",{className:"w-1/2 mb-2 rounded-full h-[18px] bg-gray-300"}),o.jsx("div",{className:"w-full mb-1 rounded-full h-[14px] bg-gray-300"}),o.jsx("div",{className:"w-1/4 rounded-full h-[14px] bg-gray-300"})]})]})}),h=async({params:e})=>{let t=i.cookies().get("lang")?.value,s=i.cookies().get("currency_id")?.value,a=await r.m.getBySlug(e.id,{lang:t,currency_id:s});return(0,o.jsxs)("section",{className:"xl:container px-4 py-7",children:[o.jsx(u.R,{resetAll:!0}),(0,o.jsxs)("div",{className:"grid lg:grid-cols-3 grid-cols-1 lg:gap-x-7 gap-y-7 lg:mt-6",children:[o.jsx("div",{className:"col-span-2",children:o.jsx(c,{isInBookingPage:!0,shopId:a?.data?.id})}),o.jsx("div",{children:(0,o.jsxs)("div",{className:"sticky top-6 flex flex-col gap-7",children:[o.jsx(l.N,{data:a,nextPage:"/booking/staff-select"}),o.jsx(d.h,{shopSlug:a?.data.slug,shopId:a?.data.id}),o.jsx(n.Z,{data:a?.data?.shop_working_days})]})})]})]})}},89522:(e,t,s)=>{"use strict";s.d(t,{N:()=>n});var o=s(86843);let i=(0,o.createProxy)(String.raw`/home/user/temiwa/app/(store)/(booking)/(witout-footer)/(navigation)/shops/[id]/components/booking-total/booking-total.tsx`),{__esModule:r,$$typeof:a}=i;i.default;let n=(0,o.createProxy)(String.raw`/home/user/temiwa/app/(store)/(booking)/(witout-footer)/(navigation)/shops/[id]/components/booking-total/booking-total.tsx#BookingTotal`)}};var t=require("../../../../../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),o=t.X(0,[1638,7439,1496,3662,9198,3478,1218,8663,9579,726,797,3937,7708,9308,3202],()=>s(49199));module.exports=o})();