"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[780],{88754:(e,t,l)=>{l.d(t,{A:()=>m});var a=l(9950),n=l(36455),i=l(19181),o=l.n(i),c=l(59233),r=l(70030),s=l(64924),d=l(63620),u=l(44414);const m=e=>{let{getLanguageFields:t,form:l,lang:i,languages:m}=e;const{t:p}=(0,r.B)();function g(e){e.plugins.get("FileRepository").createUploadAdapter=e=>function(e){return{upload:()=>new Promise(((t,l)=>{const a=new FormData;e.file.then((e=>{a.append("image",e),a.append("type","blogs"),s.A.upload(a).then((e=>{let{data:l}=e;t({default:"".concat(d.sE+l.title)})})).catch((e=>{l(e)}))}))}))}}(e)}return(0,u.jsx)(a.Fragment,{children:m.map((e=>(0,u.jsx)(c.A.Item,{label:p("description"),name:"description[".concat(e.locale,"]"),valuePropName:"data",getValueFromEvent:(e,t)=>t.getData(),rules:[{required:e.locale===i,message:p("required")}],hidden:e.locale!==i,children:(0,u.jsx)(n.CKEditor,{editor:o(),data:t()["description[".concat(e.value,"]")],config:{extraPlugins:[g]},onBlur:(t,a)=>{const n=a.getData();l.setFieldsValue({["description[".concat(e.value,"]")]:n})}})},"desc"+e.locale)))})}},31281:(e,t,l)=>{function a(e,t){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.map((e=>({[e.locale]:""===t["".concat(l,"[").concat(e.locale,"]")]?void 0:t["".concat(l,"[").concat(e.locale,"]")]})));return Object.assign({},...a)}l.d(t,{A:()=>a})},90780:(e,t,l)=>{l.r(t),l.d(t,{default:()=>E});var a=l(9950),n=l(28429),i=l(85923),o=l(59233),c=l(23263),r=l(87094),s=l(41988),d=l(55902),u=l(80737),m=l(48538),p=l(90650),g=l(91854),h=l(74623),v=l(73271),f=l(58920),j=l(71999),A=l(31281),x=l(70030),y=l(88754),b=l(44414);function E(){const{t:e}=(0,x.B)(),{activeMenu:t}=(0,g.d4)((e=>e.menu),g.bN),{languages:l,defaultLang:E}=(0,g.d4)((e=>e.formLang),g.bN),w=(0,g.wA)(),[F]=o.A.useForm(),P=(0,n.Zp)(),{uuid:k}=(0,n.g)(),[_,N]=(0,a.useState)(!1),[V,q]=(0,a.useState)(!1);(0,a.useEffect)((()=>()=>{const e=F.getFieldsValue(!0);w((0,h.Ok)({activeMenu:t,data:e}))}),[]);function B(e){if(!e)return{};const{translations:t}=e,a=l.map((e=>{var l,a,n;return{["title[".concat(e.locale,"]")]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.title,["description[".concat(e.locale,"]")]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description,["short_desc[".concat(e.locale,"]")]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.short_desc}}));return Object.assign({},...a)}return(0,a.useEffect)((()=>{t.refetch&&(e=>{q(!0),f.A.getById(e).then((e=>{let t=e.data;F.setFieldsValue({...t,...B(t)})})).finally((()=>{q(!1),w((0,h.km)(t))}))})(k)}),[t.refetch]),(0,b.jsx)(c.A,{title:e("edit.notification"),extra:(0,b.jsx)(j.A,{}),children:V?(0,b.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,b.jsx)(p.A,{size:"large",className:"py-5"})}):(0,b.jsxs)(o.A,{name:"notification-edit",layout:"vertical",onFinish:a=>{const n={type:"notification",title:(0,A.A)(l,a),description:(0,A.A)(l,a,"description"),short_desc:(0,A.A)(l,a,"short_desc")};N(!0);const o="notifications";f.A.update(k,n).then((()=>{i.oR.success(e("successfully.updated")),w((0,h.EK)({...t,nextUrl:o})),P("/".concat(o)),w((0,v.b)({}))})).finally((()=>N(!1)))},form:F,initialValues:{active:!0,...t.data},children:[(0,b.jsxs)(r.A,{gutter:12,children:[(0,b.jsx)(s.A,{span:12,children:l.map((t=>(0,b.jsx)(o.A.Item,{label:e("title"),name:"title[".concat(t.locale,"]"),rules:[{validator:(l,a)=>a||(null===t||void 0===t?void 0:t.locale)!==E?a&&""===(null===a||void 0===a?void 0:a.trim())?Promise.reject(new Error(e("no.empty.space"))):a&&(null===a||void 0===a?void 0:a.trim().length)<2?Promise.reject(new Error(e("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(e("required")))}],hidden:t.locale!==E,children:(0,b.jsx)(d.A,{})},"title"+t.locale)))}),(0,b.jsx)(s.A,{span:24,children:l.map((t=>(0,b.jsx)(o.A.Item,{label:e("short.description"),name:"short_desc[".concat(t.locale,"]"),rules:[{validator:(l,a)=>a||(null===t||void 0===t?void 0:t.locale)!==E?a&&""===(null===a||void 0===a?void 0:a.trim())?Promise.reject(new Error(e("no.empty.space"))):a&&(null===a||void 0===a?void 0:a.trim().length)<2?Promise.reject(new Error(e("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(e("required")))}],hidden:t.locale!==E,children:(0,b.jsx)(d.A,{})},"short_desc"+t.locale)))}),(0,b.jsx)(s.A,{span:24,children:(0,b.jsx)(y.A,{form:F,lang:E,languages:l,getLanguageFields:B})})]}),(0,b.jsx)(u.A,{children:(0,b.jsx)(m.A,{type:"primary",htmlType:"submit",loading:_,children:e("save")})})]})})}}}]);