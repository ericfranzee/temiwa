"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6678],{35116:(e,t,i)=>{i.d(t,{A:()=>d});i(9950);var s=i(48538),a=i(44070),n=i(85923),l=i(70030),r=i(13311),o=i(44414);function d(e){let{size:t="",onClick:i,type:d="default",...c}=e;const{t:u}=(0,l.B)(),{isDemo:m}=(0,r.A)();return(0,o.jsx)(s.A,{size:t,icon:(0,o.jsx)(a.A,{}),onClick:e=>{m?n.oR.warning(u("cannot.work.demo")):i(e)},type:d,...c})}},8297:(e,t,i)=>{i.d(t,{A:()=>o});var s=i(9950),a=i(55902),n=i(41397),l=i(60767),r=i(44414);function o(e){let{handleChange:t,defaultValue:i,resetSearch:o,...d}=e;const[c,u]=(0,s.useState)(i),m=(0,s.useMemo)((()=>(0,n.debounce)((e=>{t(e)}),800)),[]);return(0,s.useEffect)((()=>{u(i)}),[o]),(0,r.jsx)(a.A,{value:c,onChange:e=>{u(e.target.value),m(e.target.value)},prefix:(0,r.jsx)(l.A,{}),...d})}},37295:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(9950);function a(e,t){const[i,a]=(0,s.useState)(e);return(0,s.useEffect)((()=>{const i=setTimeout((()=>{a(e)}),t);return()=>{clearTimeout(i)}}),[e,t]),i}},4297:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var s=i(80737),a=i(48538),n=i(23263),l=i(52913),r=i(70030),o=(i(44738),i(91854)),d=i(88986),c=i(86644),u=i(9950),m=i(74623),h=i(24513),p=i(44070),v=i(35116),A=i(55386),x=i(85923),f=i(39454),g=i(76083),j=i(28429),k=i(37295),b=i(8297),y=i(44414);function w(){const{t:e}=(0,r.B)(),t=(0,o.wA)(),i=(0,j.Zp)(),{setIsModalVisible:w}=(0,u.useContext)(A.o),{params:C,memberShipData:S,loading:_,meta:z}=(0,o.d4)((e=>e.membership.seller),o.bN),{activeMenu:I}=(0,o.d4)((e=>e.menu),o.bN),[D,M]=(0,u.useState)(""),[E,B]=(0,u.useState)(null),[N,R]=(0,u.useState)(!1),T=[{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("name"),dataIndex:"translation",key:"translation",is_show:!0,render:e=>null===e||void 0===e?void 0:e.title},{title:e("price"),dataIndex:"price",key:"price",is_show:!0},{title:e("time"),dataIndex:"time",key:"time",is_show:!0},{title:e("actions"),key:"actions",is_show:!0,render:(e,t)=>(0,y.jsxs)(s.A,{children:[(0,y.jsx)(a.A,{type:"primary",icon:(0,y.jsx)(h.A,{}),onClick:()=>F(null===t||void 0===t?void 0:t.id)}),(0,y.jsx)(v.A,{icon:(0,y.jsx)(p.A,{}),onClick:()=>{w(!0),B([null===t||void 0===t?void 0:t.id])}})]})}],V=(0,k.A)(D,200),X={...C,search:V};(0,u.useEffect)((()=>{I.refetch&&(0,o.vA)((()=>{t((0,c.o5)(X)),t((0,m.km)(I))}))}),[I.refetch]),(0,d.A)((()=>{t((0,c.o5)(X))}),[V]);const F=e=>{t((0,m.X4)({id:"seller.membership.edit",url:"seller/membership/edit/".concat(e),name:"edit.membership"})),i("edit/".concat(e),{state:{paramsData:X}})};return(0,y.jsxs)(u.Fragment,{children:[(0,y.jsx)(n.A,{children:(0,y.jsxs)(s.A,{children:[(0,y.jsx)(b.A,{handleChange:e=>M(e),placeholder:e("search")}),(0,y.jsx)(a.A,{type:"primary",onClick:()=>{t((0,m.X4)({id:"seller.membership.add",url:"seller/membership/add",name:"add.membership"})),i("add")},children:e("add.membership")})]})}),(0,y.jsx)(n.A,{title:"Membership",children:(0,y.jsx)(l.A,{scroll:{x:!0},rowKey:e=>e.id,columns:null===T||void 0===T?void 0:T.filter((e=>null===e||void 0===e?void 0:e.is_show)),dataSource:S,loading:_,pagination:{pageSize:null===z||void 0===z?void 0:z.per_page,current:null===z||void 0===z?void 0:z.current_page,total:null===z||void 0===z?void 0:z.total},onChange:e=>{const{pageSize:i,current:s}=e,a={...X,perPage:i,page:s};(0,o.vA)((()=>{t((0,c.jm)(a)),t((0,m.km)(I))}))}})}),(0,y.jsx)(g.A,{click:()=>{R(!0);const i={...Object.assign({},...E.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};f.A.delete(i).then((()=>{t((0,c.o5)({paramsData:X})),w(!1),B(null),x.oR.success(e("successfully.updated"))})).finally((()=>R(!1)))},text:e("are.you.sure.you.want.to.delete.the.selected.products"),loading:N})]})}}}]);