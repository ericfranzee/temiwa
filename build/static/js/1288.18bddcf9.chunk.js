"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1288],{17456:(e,s,l)=>{l.d(s,{A:()=>a});l(9950);const a=l.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},61288:(e,s,l)=>{l.r(s),l.d(s,{default:()=>f});var a=l(9950),n=l(59233),t=l(23263),i=l(87094),r=l(41988),d=l(99674),c=l(90650),u=l(55902),m=l(25933),o=l(48538),h=l(70030),x=l(74623),j=l(91854),p=l(53496),A=l(76214),b=l(85923),y=l(28429),v=(l(17456),l(54826),l(70283),l(44414));function f(){const{t:e}=(0,h.B)(),[s]=n.A.useForm(),[l,f]=(0,a.useState)(!1),[g,q]=(0,a.useState)(!1),[k,C]=(0,a.useState)([]),[I,N]=(0,a.useState)(null),{activeMenu:w}=(0,j.d4)((e=>e.menu),j.bN),F=(0,j.wA)(),S=(0,y.Zp)();(0,a.useEffect)((()=>{!async function(){q(!0),A.A.allPayment().then((e=>{let{data:s}=e;const l=s.map((e=>({label:e.tag[0].toUpperCase()+e.tag.substring(1),value:e.id,key:e.id})));C(l)})).finally((()=>q(!1)))}()}),[]);return(0,v.jsx)(t.A,{title:e("add.payment"),className:"h-100",children:(0,v.jsxs)(n.A,{layout:"vertical",name:"user-address",form:s,onFinish:s=>{f(!0),A.A.create(s).then((()=>{const s="seller/payments";b.oR.success(e("successfully.created")),F((0,x.EK)({...w,nextUrl:s})),S("/".concat(s)),F((0,p.Np)()),F((0,x.Ms)(w))})).catch((e=>console.error(e))).finally((()=>f(!1)))},initialValues:{status:!0},children:[(0,v.jsxs)(i.A,{gutter:12,children:[(0,v.jsx)(r.A,{span:"Cash"===(null===I||void 0===I?void 0:I.label)||"Wallet"===(null===I||void 0===I?void 0:I.label)?12:24,children:(0,v.jsx)(n.A.Item,{label:e("payment"),name:"payment_id",rules:[{required:!0,message:e("required")}],children:(0,v.jsx)(d.A,{notFoundContent:g?(0,v.jsx)(c.A,{size:"small"}):"no results",allowClear:!0,options:k,onSelect:e=>N(k.find((s=>s.value===e)))})})}),"Cash"===(null===I||void 0===I?void 0:I.label)||"Wallet"===(null===I||void 0===I?void 0:I.label)?"":(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r.A,{span:12,children:(0,v.jsx)(n.A.Item,{label:e("client.id"),name:"client_id",rules:[{required:!0,message:e("required")}],children:(0,v.jsx)(u.A,{})})}),(0,v.jsx)(r.A,{span:12,children:(0,v.jsx)(n.A.Item,{label:e("secret.id"),name:"secret_id",rules:[{required:!0,message:e("required")}],children:(0,v.jsx)(u.A,{})})}),"Paystack"===(null===I||void 0===I?void 0:I.label)?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r.A,{span:12,children:(0,v.jsx)(n.A.Item,{label:e("payment.id"),name:"payment_key",rules:[{required:!0,message:e("required")}],children:(0,v.jsx)(u.A,{})})}),(0,v.jsx)(r.A,{span:12,children:(0,v.jsx)(n.A.Item,{label:e("merchant.email"),name:"merchant_email",rules:[{required:!0,message:e("required")}],children:(0,v.jsx)(u.A,{})})})]}):""]}),(0,v.jsx)(r.A,{span:12,children:(0,v.jsx)(n.A.Item,{label:e("status"),name:"status",valuePropName:"checked",children:(0,v.jsx)(m.A,{})})})]}),(0,v.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,v.jsx)("div",{className:"pb-5",children:(0,v.jsx)(o.A,{type:"primary",htmlType:"submit",loading:l,disabled:l,children:e("submit")})})})]})})}}}]);