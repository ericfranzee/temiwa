"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1251],{11251:(e,a,t)=>{t.r(a),t.d(a,{default:()=>b});var i=t(9950),r=t(28429),s=t(85923),l=t(59233),n=t(23263),c=t(87094),d=t(41988),o=t(55902),m=t(25933),u=t(48538),v=t(91854),h=t(74623),j=t(37963),x=t(59759),A=t(70030),p=t(48970),g=t(44414);const b=()=>{var e,a;const{t:t}=(0,A.B)(),{activeMenu:b}=(0,v.d4)((e=>e.menu),v.bN),f=(0,v.wA)(),[y]=l.A.useForm(),w=(0,r.Zp)(),[P,k]=(0,i.useState)(null!==(e=b.data)&&void 0!==e&&e.image?[null===(a=b.data)||void 0===a?void 0:a.image]:[]),[E,F]=(0,i.useState)(!1);(0,i.useEffect)((()=>()=>{const e=y.getFieldsValue(!0);f((0,h.Ok)({activeMenu:b,data:e}))}),[]);return(0,g.jsx)(n.A,{title:t("add.brand"),children:(0,g.jsxs)(l.A,{name:"basic",layout:"vertical",onFinish:e=>{var a;const i={...e,active:e.active?1:0,"images[0]":null===(a=P[0])||void 0===a?void 0:a.name};F(!0);const r="catalog/brands";j.A.create(i).then((()=>{s.oR.success(t("successfully.created")),f((0,h.EK)({...b,nextUrl:r})),w("/".concat(r)),f((0,x.$F)({}))})).finally((()=>F(!1)))},form:y,initialValues:{active:!0,...b.data},children:[(0,g.jsxs)(c.A,{gutter:12,children:[(0,g.jsx)(d.A,{span:12,children:(0,g.jsx)(l.A.Item,{label:t("title"),name:"title",rules:[{validator:(e,a)=>a?a&&""===(null===a||void 0===a?void 0:a.trim())?Promise.reject(new Error(t("no.empty.space"))):a&&(null===a||void 0===a?void 0:a.trim().length)<2?Promise.reject(new Error(t("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(t("required")))}],children:(0,g.jsx)(o.A,{maxLength:50})})}),(0,g.jsx)(d.A,{span:6,children:(0,g.jsx)(l.A.Item,{label:t("image"),name:"images",rules:[{validator:(e,a)=>0===(null===P||void 0===P?void 0:P.length)?Promise.reject(new Error(t("required"))):Promise.resolve()}],children:(0,g.jsx)(p.A,{type:"brands",imageList:P,setImageList:k,form:y,multiple:!1})})}),(0,g.jsx)(d.A,{span:6,children:(0,g.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,g.jsx)(l.A.Item,{label:t("active"),name:"active",valuePropName:"checked",children:(0,g.jsx)(m.A,{})})})})]}),(0,g.jsx)(u.A,{type:"primary",htmlType:"submit",loading:E,children:t("submit")})]})})}}}]);