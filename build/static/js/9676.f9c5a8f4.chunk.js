"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9676],{99676:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(9950),r=a(59233),i=a(23263),s=a(87094),n=a(41988),o=a(55902),c=a(99674),d=a(25933),u=a(48538),m=a(90650),v=a(85923),p=a(28429),h=a(71999),g=a(98591),j=a(91854),x=a(74623),A=a(62572),y=a(63620),f=a(70030),w=a(48970),b=a(85427),k=a(44414);const E=()=>{var e,t;const{t:a}=(0,f.B)(),E=(0,p.Zp)(),P=(0,j.wA)(),{activeMenu:I}=(0,j.d4)((e=>e.menu),j.bN),[N,q]=(0,l.useState)(!1),[S,F]=(0,l.useState)(null!==(e=I.data)&&void 0!==e&&e.image?[null===(t=I.data)||void 0===t?void 0:t.image]:[]),[L]=r.A.useForm(),[z,C]=(0,l.useState)(!1),[V,B]=(0,l.useState)(null),{uuid:M}=(0,p.g)(),{params:O}=(0,j.d4)((e=>e.careerCategory),j.bN),{defaultLang:_,languages:K}=(0,j.d4)((e=>e.formLang),j.bN);(0,l.useEffect)((()=>()=>{const e=L.getFieldsValue(!0);P((0,x.Ok)({activeMenu:I,data:e}))}),[]);const R=e=>({name:e,url:y.sE+e});function T(e){if(!e)return{};const{translations:t}=e,a=K.map((e=>{var a,l;return{["title[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title,["description[".concat(e.locale,"]")]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.description}}));return Object.assign({},...a)}return(0,l.useEffect)((()=>{var e;I.refetch&&(e=M,q(!0),A.A.getById(e).then((e=>{let t=e.data;const a={...t,...T(t),image:[R(t.img)],keywords:t.keywords.split(",")};L.setFieldsValue(a),F([R(t.img)])})).finally((()=>{q(!1),P((0,x.km)(I))})))}),[I.refetch]),(0,k.jsx)(i.A,{title:a("edit.career.category"),extra:(0,k.jsx)(h.A,{}),children:N?(0,k.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,k.jsx)(m.A,{size:"large",className:"mt-5 pt-5"})}):(0,k.jsxs)(r.A,{name:"basic",layout:"vertical",onFinish:e=>{var t;C(!0);const l={...e,type:"career",active:e.active?1:0,keywords:e.keywords.join(","),parent_id:null,"images[0]":null===(t=S[0])||void 0===t?void 0:t.name},r="catalog/career-categories";A.A.update(M,l).then((()=>{v.oR.success(a("successfully.updated")),P((0,x.EK)({...I,nextUrl:r})),P((0,b.b)(O)),E("/".concat(r))})).catch((e=>B(e.response.data.params))).finally((()=>C(!1)))},initialValues:{parent_id:{title:"---",value:0,key:0},active:!0,...I.data},form:L,children:[(0,k.jsxs)(s.A,{gutter:12,children:[(0,k.jsx)(n.A,{span:12,children:K.map(((e,t)=>(0,k.jsx)(r.A.Item,{label:a("name"),name:"title[".concat(e.locale,"]"),help:V&&V["title.".concat(_)]?V["title.".concat(_)][0]:null,validateStatus:V?"error":"success",rules:[{validator:(t,l)=>l||(null===e||void 0===e?void 0:e.locale)!==_?l&&""===(null===l||void 0===l?void 0:l.trim())?Promise.reject(new Error(a("no.empty.space"))):l&&(null===l||void 0===l?void 0:l.trim().length)<2?Promise.reject(new Error(a("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(a("required")))}],hidden:e.locale!==_,children:(0,k.jsx)(o.A,{})},e.title+t)))}),(0,k.jsx)(n.A,{span:12,children:K.map(((e,t)=>(0,k.jsx)(r.A.Item,{label:a("description"),name:"description[".concat(e.locale,"]"),rules:[{validator:(t,l)=>l||(null===e||void 0===e?void 0:e.locale)!==_?l&&""===(null===l||void 0===l?void 0:l.trim())?Promise.reject(new Error(a("no.empty.space"))):l&&(null===l||void 0===l?void 0:l.trim().length)<5?Promise.reject(new Error(a("must.be.at.least.5"))):Promise.resolve():Promise.reject(new Error(a("required")))}],hidden:e.locale!==_,children:(0,k.jsx)(g.A,{rows:4})},e.locale+t)))}),(0,k.jsx)(n.A,{span:12,children:(0,k.jsx)(r.A.Item,{label:a("keywords"),name:"keywords",rules:[{required:!0,message:a("required")}],children:(0,k.jsx)(c.A,{mode:"tags",style:{width:"100%"}})})}),(0,k.jsx)(n.A,{span:4,children:(0,k.jsx)(r.A.Item,{label:a("image"),name:"images",rules:[{validator:(e,t)=>0===(null===S||void 0===S?void 0:S.length)?Promise.reject(new Error(a("required"))):Promise.resolve()}],children:(0,k.jsx)(w.A,{type:"categories",imageList:S,setImageList:F,form:L,multiple:!1})})}),(0,k.jsx)(n.A,{span:2,children:(0,k.jsx)(r.A.Item,{label:a("active"),name:"active",valuePropName:"checked",children:(0,k.jsx)(d.A,{})})})]}),(0,k.jsx)(u.A,{type:"primary",htmlType:"submit",loading:z,children:a("submit")})]})})}}}]);