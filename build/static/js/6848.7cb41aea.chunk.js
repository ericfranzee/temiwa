"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6848],{31281:(e,t,a)=>{function l(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const l=e.map((e=>({[e.locale]:""===t["".concat(a,"[").concat(e.locale,"]")]?void 0:t["".concat(a,"[").concat(e.locale,"]")]})));return Object.assign({},...l)}a.d(t,{A:()=>l})},93142:(e,t,a)=>{a.d(t,{A:()=>c});var l=a(82371);const c={getPolicy:()=>l.A.get("dashboard/admin/policy"),getTerms:()=>l.A.get("dashboard/admin/term"),createPolicy:e=>l.A.post("dashboard/admin/policy",e),createTerms:e=>l.A.post("dashboard/admin/term",e)}},66848:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var l=a(9950),c=a(85923),n=a(59233),s=a(23263),i=a(87094),r=a(41988),o=a(55902),d=a(80737),u=a(48538),m=a(91854),h=a(36455),A=a(19181),p=a.n(A),f=a(74623),g=a(93142),v=a(70030),j=a(81446),x=a(71999),b=a(31281),y=a(44414);function k(){const{t:e}=(0,v.B)(),{activeMenu:t}=(0,m.d4)((e=>e.menu),m.bN),a=(0,m.wA)(),[A]=n.A.useForm(),[k,F]=(0,l.useState)(!1),[T,q]=(0,l.useState)(!1),{languages:E,defaultLang:V}=(0,m.d4)((e=>e.formLang),m.bN);function w(e){if(!e)return{};const{translations:t}=e,a=E.map((e=>{var a,l;return{["title[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title,["description[".concat(e.locale,"]")]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.description}}));return Object.assign({},...a)}(0,l.useEffect)((()=>()=>{const e=A.getFieldsValue(!0);a((0,f.Ok)({activeMenu:t,data:e}))}),[]),(0,l.useEffect)((()=>{t.refetch&&(q(!0),g.A.getTerms().then((e=>{let{data:t}=e;return A.setFieldsValue({...w(t)})})).finally((()=>{q(!1),a((0,f.km)(t))})))}),[t.refetch]);return(0,y.jsx)(s.A,{title:e("terms"),extra:(0,y.jsx)(x.A,{}),children:T?(0,y.jsx)(j.A,{}):(0,y.jsxs)(n.A,{name:"terms-form",layout:"vertical",onFinish:t=>{const a={title:(0,b.A)(E,t),description:(0,b.A)(E,t,"description")};F(!0),g.A.createTerms(a).then((()=>{c.oR.success(e("successfully.saved"))})).finally((()=>F(!1)))},form:A,initialValues:t.data,children:[(0,y.jsxs)(i.A,{gutter:12,children:[(0,y.jsx)(r.A,{span:12,children:E.map((t=>(0,y.jsx)(n.A.Item,{label:e("title"),name:"title[".concat(t.locale,"]"),rules:[{required:t.locale===V,message:e("required")}],hidden:t.locale!==V,children:(0,y.jsx)(o.A,{})},"title"+t.locale)))}),(0,y.jsx)(r.A,{span:24,children:E.map((t=>(0,y.jsx)(n.A.Item,{label:e("description"),name:"description[".concat(t.locale,"]"),valuePropName:"data",getValueFromEvent:(e,t)=>t.getData(),rules:[{required:t.locale===V,message:e("required")}],hidden:t.locale!==V,children:(0,y.jsx)(h.CKEditor,{editor:p()})})))})]}),(0,y.jsx)(d.A,{children:(0,y.jsx)(u.A,{type:"primary",htmlType:"submit",loading:k,children:e("save")})})]})})}}}]);