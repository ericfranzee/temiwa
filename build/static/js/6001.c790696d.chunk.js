"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[6001],{35116:(e,t,i)=>{i.d(t,{A:()=>l});i(9950);var a=i(48538),n=i(44070),s=i(85923),o=i(70030),r=i(13311),d=i(44414);function l(e){let{size:t="",onClick:i,type:l="default",...c}=e;const{t:u}=(0,o.B)(),{isDemo:m}=(0,r.A)();return(0,d.jsx)(a.A,{size:t,icon:(0,d.jsx)(n.A,{}),onClick:e=>{m?s.oR.warning(u("cannot.work.demo")):i(e)},type:l,...c})}},8297:(e,t,i)=>{i.d(t,{A:()=>d});var a=i(9950),n=i(55902),s=i(41397),o=i(60767),r=i(44414);function d(e){let{handleChange:t,defaultValue:i,resetSearch:d,...l}=e;const[c,u]=(0,a.useState)(i),m=(0,a.useMemo)((()=>(0,s.debounce)((e=>{t(e)}),800)),[]);return(0,a.useEffect)((()=>{u(i)}),[d]),(0,r.jsx)(n.A,{value:c,onChange:e=>{u(e.target.value),m(e.target.value)},prefix:(0,r.jsx)(o.A,{}),...l})}},37295:(e,t,i)=>{i.d(t,{A:()=>n});var a=i(9950);function n(e,t){const[i,n]=(0,a.useState)(e);return(0,a.useEffect)((()=>{const i=setTimeout((()=>{n(e)}),t);return()=>{clearTimeout(i)}}),[e,t]),i}},26001:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var a=i(80737),n=i(48538),s=i(23263),o=i(52913),r=i(70030),d=(i(44738),i(91854)),l=i(88986),c=i(86644),u=i(9950),m=i(74623),h=i(24513),p=i(44070),v=i(35116),x=i(55386),A=i(85923),j=i(23800),f=i(76083),g=i(28429),k=i(37295),b=i(8297),y=i(44414);function w(){const{t:e}=(0,r.B)(),t=(0,d.wA)(),i=(0,g.Zp)(),{setIsModalVisible:w}=(0,u.useContext)(x.o),{params:C,memberShipData:S,loading:_,meta:z}=(0,d.d4)((e=>e.membership),d.bN),{activeMenu:I}=(0,d.d4)((e=>e.menu),d.bN),[D,M]=(0,u.useState)(""),[E,B]=(0,u.useState)(null),[N,R]=(0,u.useState)(!1),T=[{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("name"),dataIndex:"translation",key:"translation",is_show:!0,render:e=>null===e||void 0===e?void 0:e.title},{title:e("shop"),dataIndex:"shop",key:"shop",is_show:!0,render:e=>{var t;return null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.title}},{title:e("price"),dataIndex:"price",key:"price",is_show:!0},{title:e("time"),dataIndex:"time",key:"time",is_show:!0},{title:e("actions"),key:"actions",is_show:!0,render:(e,t)=>(0,y.jsxs)(a.A,{children:[(0,y.jsx)(n.A,{type:"primary",icon:(0,y.jsx)(h.A,{}),onClick:()=>F(null===t||void 0===t?void 0:t.id)}),(0,y.jsx)(v.A,{icon:(0,y.jsx)(p.A,{}),onClick:()=>{w(!0),B([null===t||void 0===t?void 0:t.id])}})]})}],V=(0,k.A)(D,200),X={...C,search:V};(0,u.useEffect)((()=>{I.refetch&&(0,d.vA)((()=>{t((0,c.jm)(X)),t((0,m.km)(I))}))}),[I.refetch]),(0,l.A)((()=>{t((0,c.jm)(X))}),[V]);const F=e=>{t((0,m.X4)({id:"membership.edit",url:"membership/edit/".concat(e),name:"edit.membership"})),i("edit/".concat(e),{state:{paramsData:X}})};return(0,y.jsxs)(u.Fragment,{children:[(0,y.jsx)(s.A,{children:(0,y.jsxs)(a.A,{children:[(0,y.jsx)(b.A,{handleChange:e=>M(e),placeholder:e("search")}),(0,y.jsx)(n.A,{type:"primary",onClick:()=>{t((0,m.X4)({id:"membership.add",url:"membership/add",name:"add.membership"})),i("add")},children:e("add.membership")})]})}),(0,y.jsx)(s.A,{title:"Membership",children:(0,y.jsx)(o.A,{scroll:{x:!0},rowKey:e=>e.id,columns:null===T||void 0===T?void 0:T.filter((e=>null===e||void 0===e?void 0:e.is_show)),dataSource:S,loading:_,pagination:{pageSize:null===z||void 0===z?void 0:z.per_page,current:null===z||void 0===z?void 0:z.current_page,total:null===z||void 0===z?void 0:z.total},onChange:e=>{const{pageSize:i,current:a}=e,n={...X,perPage:i,page:a};(0,d.vA)((()=>{t((0,c.jm)(n)),t((0,m.km)(I))}))}})}),(0,y.jsx)(f.A,{click:()=>{R(!0);const i={...Object.assign({},...E.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};j.A.delete(i).then((()=>{t((0,c.jm)({paramsData:X})),w(!1),B(null),A.oR.success(e("successfully.updated"))})).finally((()=>R(!1)))},text:e("are.you.sure.you.want.to.delete.the.selected.products"),loading:N})]})}}}]);