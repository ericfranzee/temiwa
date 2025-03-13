"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3961],{79406:(e,l,n)=>{n.d(l,{a:()=>s});var t=n(9950),i=n(95491),a=n.n(i),o=n(99674),r=n(90650),d=n(44414);const s=e=>{let{fetchOptions:l,debounceTimeout:n=400,refetch:i=!1,...s}=e;const[u,c]=(0,t.useState)(!1),[v,h]=(0,t.useState)([]),m=(0,t.useMemo)((()=>a()((e=>{h([]),c(!0),l(e).then((e=>{h(e),c(!1)}))}),n)),[l,n]);return(0,d.jsx)(o.A,{showSearch:!0,allowClear:!0,labelInValue:!0,onClear:()=>m(""),filterOption:!1,onSearch:m,notFoundContent:u?(0,d.jsx)(r.A,{size:"small"}):"no results",...s,options:v,onFocus:()=>{v.length&&!i||m("")}})}},31281:(e,l,n)=>{function t(e,l){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const t=e.map((e=>({[e.locale]:""===l["".concat(n,"[").concat(e.locale,"]")]?void 0:l["".concat(n,"[").concat(e.locale,"]")]})));return Object.assign({},...t)}n.d(l,{A:()=>t})},91474:(e,l,n)=>{n.d(l,{A:()=>i});var t=n(82371);const i={get:e=>t.A.get("rest/cities",{params:e})}},15923:(e,l,n)=>{n.d(l,{A:()=>i});var t=n(82371);const i={get:e=>t.A.get("rest/countries",{params:e})}},13961:(e,l,n)=>{n.r(l),n.d(l,{default:()=>g});var t=n(9950),i=n(28429),a=n(85923),o=n(59233),r=n(91854),d=n(74623),s=n(70030),u=n(31281),c=n(70498),v=n(58268),h=n(70894),m=n(44414);const g=()=>{const{t:e}=(0,s.B)(),{activeMenu:l}=(0,r.d4)((e=>e.menu),r.bN),{myShop:n}=(0,r.d4)((e=>e.myShop),r.bN),g=(0,r.wA)(),[p]=o.A.useForm(),y=(0,i.Zp)(),{languages:f}=(0,r.d4)((e=>e.formLang),r.bN);(0,t.useEffect)((()=>()=>{const e=p.getFieldsValue(!0);g((0,d.Ok)({activeMenu:l,data:e}))}),[]);return(0,m.jsx)(h.A,{form:p,handleSubmit:t=>{const{area:i,city:o,country:s,region:h,price:m,fitting_rooms:p,active:A}=t,b={price:m,fitting_rooms:p,active:Number(A),area_id:null===i||void 0===i?void 0:i.value,city_id:null===o||void 0===o?void 0:o.value,country_id:null===s||void 0===s?void 0:s.value,region_id:null===h||void 0===h?void 0:h.value,address:(0,u.A)(f,t,"address"),shop_id:null===n||void 0===n?void 0:n.id},j="seller/delivery-price";return c.A.create(b).then((()=>{a.oR.success(e("successfully.created")),(0,r.vA)((()=>{g((0,d.EK)({...l,nextUrl:j})),g((0,v.Rm)({}))})),y("/".concat(j))}))}})}},70894:(e,l,n)=>{n.d(l,{A:()=>F});var t=n(9950),i=n(91854),a=n(28429),o=n(70030),r=n(59233),d=n(87094),s=n(41988),u=n(23263),c=n(40577),v=n(48538),h=n(79406),m=n(74623),g=n(70498),p=n(81446),y=n(82371);const f={get:e=>y.A.get("rest/regions",{params:e})};var A=n(15923),b=n(91474);const j={get:e=>y.A.get("rest/areas",{params:e})};var x=n(44414);function F(e){let{form:l,handleSubmit:n}=e;const{t:y}=(0,o.B)(),F=(0,i.wA)(),{id:k}=(0,a.g)(),{activeMenu:w}=(0,i.d4)((e=>e.menu),i.bN),{languages:N,defaultLang:S}=(0,i.d4)((e=>e.formLang),i.bN),{defaultCurrency:_}=(0,i.d4)((e=>e.currency),i.bN),[q,O]=(0,t.useState)(!1),[C,I]=(0,t.useState)(!1),[B,R]=(0,t.useState)({}),{country:M,region:V,city:z}=B;function E(e){if(null===e||void 0===e||!e.translations)return{};const{translations:l}=e,n=N.map((e=>{var n,t;return{["title[".concat(e.locale,"]")]:null===(n=l.find((l=>l.locale===e.locale)))||void 0===n?void 0:n.title,["address[".concat(e.locale,"]")]:null===(t=l.find((l=>l.locale===e.locale)))||void 0===t?void 0:t.address}}));return Object.assign({},...n)}(0,t.useEffect)((()=>()=>{const e=l.getFieldsValue(!0);F((0,m.Ok)({activeMenu:w,data:e}))}),[]),(0,t.useEffect)((()=>{w.refetch&&k&&P(k)}),[w.refetch]);const P=()=>{O(!0),g.A.getById(k).then((e=>{var n,t,i,a,o,r,d,s,u;let{data:c}=e;const{city:v,country:h,region:m,area:g,...p}=c,y="address[".concat(S,"]"),f={area:{label:null===g||void 0===g||null===(n=g.translation)||void 0===n?void 0:n.title,value:null===g||void 0===g?void 0:g.id},city:{label:null===v||void 0===v||null===(t=v.translation)||void 0===t?void 0:t.title,value:null===v||void 0===v?void 0:v.id},country:{label:null===h||void 0===h||null===(i=h.translation)||void 0===i?void 0:i.title,value:null===h||void 0===h?void 0:h.id},region:{label:null===m||void 0===m||null===(a=m.translation)||void 0===a?void 0:a.title,value:null===m||void 0===m?void 0:m.id}},A={...E(c),...f,...p,[y]:null===(o=c.address)||void 0===o?void 0:o[S],shop_id:{label:null===c||void 0===c||null===(r=c.shop)||void 0===r||null===(d=r.translation)||void 0===d?void 0:d.title,value:null===c||void 0===c||null===(s=c.shop)||void 0===s?void 0:s.id,key:null===c||void 0===c||null===(u=c.shop)||void 0===u?void 0:u.id}};l.setFieldsValue(A),R(f)})).catch((e=>{console.error(e)})).finally((()=>{O(!1),F((0,m.km)(w))}))};return q?(0,x.jsx)(p.A,{}):(0,x.jsxs)(r.A,{form:l,name:y(k?"edit.delivery.price":"add.delivery.price"),layout:"vertical",initialValues:{clickable:!0,...w.data},onFinish:e=>{I(!0),n(e).finally((()=>I(!1)))},children:[(0,x.jsxs)(d.A,{gutter:[24,24],children:[(0,x.jsx)(s.A,{span:12,children:(0,x.jsxs)(u.A,{title:y("deliveryzone"),className:"h-100",children:[(0,x.jsx)(s.A,{span:24,children:(0,x.jsx)(r.A.Item,{label:y("region"),name:"region",rules:[{required:!0,message:y("required")}],children:(0,x.jsx)(h.a,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10};return f.get(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},dropdownRender:e=>(0,x.jsx)(x.Fragment,{children:e}),refetch:!0,onChange:e=>{R((l=>({...l,region:e}))),l.resetFields(["city","area","country"])}})})}),(0,x.jsx)(s.A,{span:24,children:(0,x.jsx)(r.A.Item,{label:y("country"),name:"country",rules:[{required:!0,message:y("required")}],children:(0,x.jsx)(h.a,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10,region_id:null===V||void 0===V?void 0:V.value};return A.A.get(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},dropdownRender:e=>(0,x.jsx)(x.Fragment,{children:e}),refetch:!0,onChange:e=>{R((l=>({...l,country:e}))),l.resetFields(["city","area"])},disabled:!Boolean(null===V||void 0===V?void 0:V.value)})})}),(0,x.jsx)(s.A,{span:24,children:(0,x.jsx)(r.A.Item,{label:y("city"),name:"city",rules:[{required:!1,message:y("required")}],children:(0,x.jsx)(h.a,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10,country_id:null===M||void 0===M?void 0:M.value};return b.A.get(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},dropdownRender:e=>(0,x.jsx)(x.Fragment,{children:e}),refetch:!0,disabled:!Boolean(null===M||void 0===M?void 0:M.value),onChange:e=>{R((l=>({...l,city:e}))),l.resetFields(["area"])}})})}),(0,x.jsx)(s.A,{span:24,children:(0,x.jsx)(r.A.Item,{label:y("area"),name:"area",rules:[{required:!1,message:y("required")}],children:(0,x.jsx)(h.a,{fetchOptions:async function(e){const l={search:e,status:1,perPage:10,city_id:null===z||void 0===z?void 0:z.value};return j.get(l).then((e=>{let{data:l}=e;return l.map((e=>{var l;return{label:(null===e||void 0===e||null===(l=e.translation)||void 0===l?void 0:l.title)||"no name",value:null===e||void 0===e?void 0:e.id,key:null===e||void 0===e?void 0:e.id}}))}))},dropdownRender:e=>(0,x.jsx)(x.Fragment,{children:e}),refetch:!0,disabled:!Boolean(null===z||void 0===z?void 0:z.value)})})})]})}),(0,x.jsx)(s.A,{span:12,children:(0,x.jsx)(u.A,{title:y("pricing"),className:"h-100",children:(0,x.jsx)(s.A,{span:24,children:(0,x.jsx)(r.A.Item,{label:"".concat(y("price")," (").concat(null===_||void 0===_?void 0:_.symbol,")"),name:"price",rules:[{required:!0,message:y("required")}],children:(0,x.jsx)(c.A,{className:"w-100"})})})})})]}),(0,x.jsx)("br",{}),(0,x.jsx)("div",{className:"flex-grow-1 d-flex justify-content-end",children:(0,x.jsx)("div",{className:"pb-5",children:(0,x.jsx)(v.A,{type:"primary",htmlType:"submit",loading:C,children:y("submit")})})})]})}}}]);