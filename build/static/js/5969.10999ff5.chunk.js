"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5969],{55969:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var s=a(9950),l=a(28429),n=a(85923),i=a(59233),c=a(23263),r=a(87094),d=a(41988),u=a(55902),o=a(99674),m=a(25933),h=a(48538),f=a(90650),x=a(91854),j=a(74623),A=a(63010),p=a(60150),v=a(71999),g=a(70030),b=a(44414);function y(){const{t:e}=(0,g.B)(),{activeMenu:t}=(0,x.d4)((e=>e.menu),x.bN),{id:a}=(0,l.g)(),y=(0,x.wA)(),[k]=i.A.useForm(),N=(0,l.Zp)(),[q,F]=(0,s.useState)(!1),[I,O]=(0,s.useState)(!1),{defaultLang:w,languages:z}=(0,x.d4)((e=>e.formLang),x.bN);(0,s.useEffect)((()=>()=>{const e=k.getFieldsValue(!0);y((0,j.Ok)({activeMenu:t,data:e}))}),[]);const E=e=>{F(!0),A.A.getById(e).then((e=>{let{data:t}=e;const a=function(e){if(!e)return{};const{translations:t}=e,a=z.map((e=>{var a;return{["title[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title}}));return Object.assign({},...a)}(t);k.setFieldsValue({...t,...a})})).finally((()=>{F(!1),y((0,j.km)(t))}))};return(0,s.useEffect)((()=>{t.refetch&&E(a)}),[t.refetch]),(0,b.jsx)(c.A,{title:e("edit.unit"),extra:(0,b.jsx)(v.A,{}),children:q?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,b.jsx)(f.A,{size:"large",className:"py-5"})}):(0,b.jsxs)(i.A,{name:"basic",layout:"vertical",onFinish:s=>{const l={...s,active:s.active?1:0};O(!0);const i="catalog/units";A.A.update(a,l).then((()=>{n.oR.success(e("successfully.updated")),y((0,j.EK)({...t,nextUrl:i})),N("/".concat(i)),y((0,p.Q)())})).finally((()=>O(!1)))},form:k,initialValues:{...t.data},children:[(0,b.jsxs)(r.A,{gutter:12,children:[(0,b.jsx)(d.A,{span:12,children:z.map(((t,a)=>(0,b.jsx)(i.A.Item,{label:e("title"),name:"title[".concat(t.locale,"]"),rules:[{required:t.locale===w,message:e("required")}],hidden:t.locale!==w,children:(0,b.jsx)(u.A,{})},"title"+a)))}),(0,b.jsx)(d.A,{span:12,children:(0,b.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,b.jsx)(i.A.Item,{label:e("position"),name:"position",rules:[{required:!0,message:e("required")}],children:(0,b.jsxs)(o.A,{children:[(0,b.jsx)(o.A.Option,{value:"after",children:e("after")}),(0,b.jsx)(o.A.Option,{value:"before",children:e("before")})]})})})}),(0,b.jsx)(d.A,{span:6,children:(0,b.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,b.jsx)(i.A.Item,{label:e("active"),name:"active",valuePropName:"checked",children:(0,b.jsx)(m.A,{})})})})]}),(0,b.jsx)(h.A,{type:"primary",htmlType:"submit",loading:I,children:e("submit")})]})})}}}]);