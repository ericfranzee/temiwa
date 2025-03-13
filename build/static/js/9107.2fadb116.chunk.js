"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9107],{79406:(e,s,n)=>{n.d(s,{a:()=>c});var l=n(9950),r=n(95491),a=n.n(r),i=n(99674),t=n(90650),o=n(44414);const c=e=>{let{fetchOptions:s,debounceTimeout:n=400,refetch:r=!1,...c}=e;const[u,d]=(0,l.useState)(!1),[m,h]=(0,l.useState)([]),v=(0,l.useMemo)((()=>a()((e=>{h([]),d(!0),s(e).then((e=>{h(e),d(!1)}))}),n)),[s,n]);return(0,o.jsx)(i.A,{showSearch:!0,allowClear:!0,labelInValue:!0,onClear:()=>v(""),filterOption:!1,onSearch:v,notFoundContent:u?(0,o.jsx)(t.A,{size:"small"}):"no results",...c,options:m,onFocus:()=>{m.length&&!r||v("")}})}},47992:(e,s,n)=>{n.d(s,{G:()=>c});var l=n(9950),r=n(95491),a=n.n(r),i=n(99674),t=n(90650),o=n(44414);const c=e=>{let{fetchOptions:s,debounceTimeout:n=400,onClear:r,refetchOptions:c=!1,...u}=e;const[d,m]=(0,l.useState)(!1),[h,v]=(0,l.useState)([]),p=(0,l.useMemo)((()=>a()((e=>{v([]),m(!0),s(e).then((e=>{v(e),m(!1)}))}),n)),[s,n]);return(0,o.jsx)(i.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:p,onClear:()=>{p(""),r&&r()},notFoundContent:d?(0,o.jsx)(t.A,{size:"small"}):"no results",...u,options:h,onFocus:()=>{h.length&&!c||p("")}})}},49107:(e,s,n)=>{n.r(s),n.d(s,{default:()=>c});var l=n(59233),r=n(23263),a=n(70030),i=n(72124),t=n(23596),o=n(44414);const c=function(){const{t:e}=(0,a.B)(),[s]=l.A.useForm();return(0,o.jsx)(r.A,{title:e("add.service.master"),children:(0,o.jsx)(t.A,{form:s,onSubmit:e=>i.A.create(e)})})}},23596:(e,s,n)=>{n.d(s,{A:()=>q});var l=n(59233),r=n(87094),a=n(41988),i=n(40577),t=n(99674),o=n(25933),c=n(48538),u=n(47992),d=n(79406),m=n(9950),h=n(72124),v=n(85923),p=n(91854),A=n(74623),j=n(75751),x=n(28429),f=n(70030),b=n(44414);const g=["online","offline_in","offline_out"],y=[{value:1,label:"male"},{value:2,label:"female"},{value:3,label:"other"}];const q=function(e){var s,n,q,w;let{form:I,onSubmit:S,initialValues:C={}}=e;const{t:O}=(0,f.B)(),_=(0,p.wA)(),k=(0,x.Zp)(),{activeMenu:F}=(0,p.d4)((e=>e.menu)),{defaultCurrency:N}=(0,p.d4)((e=>e.currency),p.bN),{user:V}=(0,p.d4)((e=>e.auth)),z=(0,m.useRef)([]),[M,P]=(0,m.useState)(!1);return(0,b.jsxs)(l.A,{initialValues:{active:!Object.keys(C).length||!!C.active,shop:{value:null===(s=V.invite)||void 0===s?void 0:s.shop_id,label:(null===(n=V.invite)||void 0===n||null===(q=n.shop)||void 0===q||null===(w=q.translation)||void 0===w?void 0:w.title)||"shop not found"},...C},onFinish:e=>{P(!0);const s="master/service-master",n={...e,shop_id:e.shop.value,service_id:e.service.value,active:e.active?1:0,shop:void 0,service:void 0};return S(n).then((()=>{v.oR.success("successfully.added"),(0,p.vA)((()=>{_((0,A.EK)({...F,nextUrl:s})),_((0,j.mj)({})),k("/"+s)}))})).finally((()=>{P(!1)}))},form:I,layout:"vertical",children:[(0,b.jsxs)(r.A,{gutter:24,children:[(0,b.jsx)(a.A,{span:8,children:(0,b.jsx)(l.A.Item,{label:O("shop"),name:"shop",rules:[{required:!0,message:O("required")}],children:(0,b.jsx)(u.G,{disabled:!0})})}),(0,b.jsx)(a.A,{span:8,children:(0,b.jsx)(l.A.Item,{label:O("service"),name:"service",rules:[{required:!0,message:O("required")}],children:(0,b.jsx)(d.a,{fetchOptions:e=>{const s={search:e,active:1};return h.A.searchServices(s).then((e=>{const s=e.data.map((e=>({label:e.translation?e.translation.title:"no name",value:e.id,key:e.id,price:e.price,interval:e.interval,pause:e.pause,commission_fee:e.commission_fee,type:e.type,gender:e.gender})));return z.current=s,s}))},refetch:!0,onChange:e=>{var s;const n=null===(s=z.current)||void 0===s?void 0:s.find((s=>s.value===e.value));I.setFieldsValue({service:e,...n})}})})}),(0,b.jsx)(a.A,{span:8,children:(0,b.jsx)(l.A.Item,{label:O("price"),name:"price",rules:[{required:!0,message:O("required")}],children:(0,b.jsx)(i.A,{min:0,className:"w-100",addonAfter:null===N||void 0===N?void 0:N.symbol})})}),(0,b.jsx)(a.A,{span:8,children:(0,b.jsx)(l.A.Item,{label:O("interval"),name:"interval",rules:[{required:!0,message:O("required")}],children:(0,b.jsx)(i.A,{min:0,className:"w-100"})})}),(0,b.jsx)(a.A,{span:8,children:(0,b.jsx)(l.A.Item,{label:O("pause"),name:"pause",rules:[{required:!0,message:O("required")}],children:(0,b.jsx)(i.A,{min:0,className:"w-100"})})}),(0,b.jsx)(a.A,{span:8,children:(0,b.jsx)(l.A.Item,{label:"type",name:"type",rules:[{required:!0,message:O("required")}],children:(0,b.jsx)(t.A,{children:g.map(((e,s)=>(0,b.jsx)(t.A.Option,{value:e,children:e},e)))})})}),(0,b.jsx)(a.A,{span:8,children:(0,b.jsx)(l.A.Item,{label:O("commission.fee"),name:"commission_fee",children:(0,b.jsx)(i.A,{min:1,className:"w-100"})})}),(0,b.jsx)(a.A,{span:8,children:(0,b.jsx)(l.A.Item,{label:O("discount"),name:"discount",rules:[{validator:(e,s)=>void 0!==s&&(s<0||s>100)?Promise.reject(new Error(O("must.be.between.0.and.100"))):Promise.resolve()}],children:(0,b.jsx)(i.A,{min:0,className:"w-100",addonAfter:"%"})})}),(0,b.jsx)(a.A,{span:8,children:(0,b.jsx)(l.A.Item,{label:O("gender"),name:"gender",rules:[{required:!0,message:O("required")}],children:(0,b.jsx)(t.A,{children:y.map(((e,s)=>(0,b.jsx)(t.A.Option,{value:e.value,children:O(e.label)},e.value)))})})}),(0,b.jsx)(a.A,{span:8,children:(0,b.jsx)(l.A.Item,{label:O("active"),name:"active",valuePropName:"checked",children:(0,b.jsx)(o.A,{})})})]}),(0,b.jsx)(c.A,{type:"primary",htmlType:"submit",loading:M,children:O("submit")})]})}}}]);