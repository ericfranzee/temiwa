"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[9280],{39280:(t,e,a)=>{a.r(e),a.d(e,{default:()=>b});var l=a(47574),o=a(18503),n=a(52622),i=a(59233),d=a(23263),s=a(9950),c=a(91854),r=a(28429),u=a(74623),v=a(71999),f=a(70030),p=a(48049),h=a(44414);function m(){const{t:t}=(0,f.B)(),[e]=i.A.useForm(),a=(0,c.wA)(),{id:m}=(0,r.g)(),{activeMenu:b}=(0,c.d4)((t=>t.menu),c.bN),{languages:g,defaultLang:A}=(0,c.d4)((t=>t.formLang),c.bN),{formOptionsDispatch:x}=(0,s.useContext)(l.b),[j,k]=(0,s.useState)(!1);function y(t){if(!t)return{};const{translations:e}=t,a=g.map((t=>{var a,l,o;return{["title[".concat(t.locale,"]")]:null===(a=e.find((e=>e.locale===t.locale)))||void 0===a?void 0:a.title,["description[".concat(t.locale,"]")]:null===(l=e.find((e=>e.locale===t.locale)))||void 0===l?void 0:l.description,["short_desc[".concat(t.locale,"]")]:null===(o=e.find((e=>e.locale===t.locale)))||void 0===o?void 0:o.short_desc}}));return Object.assign({},...a)}(0,s.useEffect)((()=>{b.refetch&&(a((0,u.km)(b)),(t=>{k(!0),n.A.getById(t).then((t=>{var a,l,o,n,i,d;e.setFieldsValue({...y(t.data),required:!(null===(a=t.data)||void 0===a||!a.required),active:!(null===(l=t.data)||void 0===l||!l.active),shop:{value:null===(o=t.data)||void 0===o?void 0:o.shop_id,label:null===(n=t.data)||void 0===n||null===(i=n.shop)||void 0===i||null===(d=i.translation)||void 0===d?void 0:d.title}}),x({type:p.TH.setFormItemsState,payload:t.data.data})})).finally((()=>k(!1)))})(m))}),[b.refetch]);return(0,h.jsx)(d.A,{loading:j,title:t("edit.form.options"),extra:(0,h.jsx)(v.A,{}),children:!j&&(0,h.jsx)(o.A,{onSubmit:t=>n.A.update(m,t),form:e})})}const b=function(){return(0,h.jsx)(l.A,{children:(0,h.jsx)(m,{})})}}}]);