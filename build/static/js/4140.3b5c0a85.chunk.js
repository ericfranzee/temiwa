"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4140],{41064:(e,t,n)=>{function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["title"];if(null===t||void 0===t||!t.translations)return{};const{translations:l}=t,a=(e,t)=>{const n=null===l||void 0===l?void 0:l.find((t=>(null===t||void 0===t?void 0:t.locale)===(null===e||void 0===e?void 0:e.locale)));return n||{[t]:""}},s=e.flatMap((e=>n.flatMap((t=>({["".concat(t,"[").concat(null===e||void 0===e?void 0:e.locale,"]")]:a(e,t)[t]})))));return Object.assign({},...s)}n.d(t,{A:()=>l})},31281:(e,t,n)=>{function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const l=e.map((e=>({[e.locale]:""===t["".concat(n,"[").concat(e.locale,"]")]?void 0:t["".concat(n,"[").concat(e.locale,"]")]})));return Object.assign({},...l)}n.d(t,{A:()=>l})},4140:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var l=n(9950),a=n(28429),s=n(85923),c=n(59233),i=n(23263),o=n(87094),u=n(41988),r=n(80737),d=n(48538),f=n(91854),h=n(74623),A=n(71999),m=n(31281),v=n(13790),g=n(70030),j=n(15249),p=n(92386),x=n(41064),q=n(81446),w=n(44414);function b(){const{t:e}=(0,g.B)(),{activeMenu:t}=(0,f.d4)((e=>e.menu),f.bN),{languages:n,defaultLang:b}=(0,f.d4)((e=>e.formLang),f.bN),{uuid:y}=(0,a.g)(),k=(0,f.wA)(),[F]=c.A.useForm(),M=(0,a.Zp)(),[C,E]=(0,l.useState)(!1),[I,O]=(0,l.useState)(!1);(0,l.useEffect)((()=>()=>{const e=F.getFieldsValue(!0);k((0,h.Ok)({activeMenu:t,data:e}))}),[]),(0,l.useEffect)((()=>{t.refetch&&function(e){O(!0),p.A.getById(e).then((e=>{let{data:t}=e;F.setFieldsValue((0,x.A)(n,t,["answer","question"]))})).finally((()=>{O(!1),k((0,h.km)(t))}))}(y)}),[t.refetch]);return(0,w.jsx)(i.A,{title:e("edit.faq"),extra:(0,w.jsx)(A.A,{}),children:I?(0,w.jsx)(q.A,{}):(0,w.jsxs)(c.A,{name:"faq-edit",layout:"vertical",onFinish:l=>{const a={question:(0,m.A)(n,l,"question"),answer:(0,m.A)(n,l,"answer")};E(!0);const c="settings/faqs";p.A.update(y,a).then((()=>{s.oR.success(e("successfully.updated")),k((0,h.EK)({...t,nextUrl:c})),M("/".concat(c)),k((0,v.C)({}))})).finally((()=>E(!1)))},form:F,initialValues:null===t||void 0===t?void 0:t.data,children:[(0,w.jsx)(o.A,{gutter:12,children:(0,w.jsx)(u.A,{span:12,children:n.map((t=>(0,w.jsx)(c.A.Item,{label:e("question"),name:"question[".concat(t.locale,"]"),rules:[{required:t.locale===b,message:e("required")}],hidden:t.locale!==b,children:(0,w.jsx)(j.A,{rows:2})},"question"+t.locale)))})}),(0,w.jsx)(o.A,{gutter:12,children:(0,w.jsx)(u.A,{span:12,children:n.map((t=>(0,w.jsx)(c.A.Item,{label:e("answer"),name:"answer[".concat(t.locale,"]"),rules:[{required:t.locale===b,message:e("required")}],hidden:t.locale!==b,children:(0,w.jsx)(j.A,{rows:6})},"answer"+t.locale)))})}),(0,w.jsx)(r.A,{children:(0,w.jsx)(d.A,{type:"primary",htmlType:"submit",loading:C,children:e("save")})})]})})}}}]);