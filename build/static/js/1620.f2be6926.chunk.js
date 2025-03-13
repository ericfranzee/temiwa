"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1620],{35116:(e,t,a)=>{a.d(t,{A:()=>c});a(9950);var s=a(48538),n=a(44070),o=a(85923),l=a(70030),i=a(13311),d=a(44414);function c(e){let{size:t="",onClick:a,type:c="default",...r}=e;const{t:u}=(0,l.B)(),{isDemo:h}=(0,i.A)();return(0,d.jsx)(s.A,{size:t,icon:(0,d.jsx)(n.A,{}),onClick:e=>{h?o.oR.warning(u("cannot.work.demo")):a(e)},type:c,...r})}},28645:(e,t,a)=>{a.d(t,{A:()=>g});var s=a(9950),n=a(66362),o=a(69216),l=a(80737),i=a(25933),d=a(57811),c=a(81541),r=a(48538),u=a(89323),h=a(70030),v=a(44414);const{Text:p}=n.A,g=e=>{let{columns:t=[],setColumns:a,style:n,size:g="",iconOnly:m}=e;const{t:x}=(0,h.B)(),[A,f]=(0,s.useState)(!1),j=(0,v.jsx)(o.A,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,v.jsx)(o.A.Item,{children:(0,v.jsxs)(l.A,{className:"d-flex justify-content-between",children:[(0,v.jsx)(p,{children:e.title}),(0,v.jsx)(i.A,{defaultChecked:!0,onClick:()=>function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(s)}(e),disabled:1===s})]})},e+s)))});return(0,v.jsx)(d.A,{overlay:j,trigger:["click"],onVisibleChange:e=>{f(e)},visible:A,children:(0,v.jsx)(c.A,{title:x("change.columns"),children:(0,v.jsx)(r.A,{style:{...n},size:g,icon:(0,v.jsx)(u.A,{}),children:m?null:x("Columns")})})})}},8168:(e,t,a)=>{function s(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{A:()=>s})},11620:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M});var s=a(9950),n=a(80737),o=a(12916),l=a(72243),i=a(48538),d=a(23263),c=a(52913),r=a(63620),u=a(28429),h=a(24513),v=a(67376),p=a(44070),g=a(53387),m=a(76083),x=a(55386),A=a(91854),f=a(74623),j=a(58974),w=a(17498),k=a(85923),y=a(70030),z=a(35116),C=a(28645),_=a(88986),b=a(59051),H=a.n(b),V=a(8168),I=a(44414);const S=["blue","red","gold","volcano","cyan","lime"],M=()=>{var e,t,a;const{t:b}=(0,y.B)(),M=(0,A.wA)(),R=(0,u.Zp)(),{setIsModalVisible:B}=(0,s.useContext)(x.o),[N,E]=(0,s.useState)(!1),[P,T]=(0,s.useState)("published"),{activeMenu:Y}=(0,A.d4)((e=>e.menu),A.bN),{shopTag:D,meta:O,loading:X,params:K}=(0,A.d4)((e=>e.shopTag),A.bN),[Z,q]=(0,s.useState)(null),F=Y.data,G=(null===F||void 0===F?void 0:F.role)||P,J={sort:null===F||void 0===F?void 0:F.sort,column:null===F||void 0===F?void 0:F.column,perPage:null===F||void 0===F?void 0:F.perPage,page:null===F||void 0===F?void 0:F.page,status:G},[L,Q]=(0,s.useState)([{title:b("id"),dataIndex:"id",key:"id",sorter:!0,is_show:!0},{title:b("title"),dataIndex:"title",key:"title",is_show:!0,render:(e,t)=>{var a;return null===(a=t.translation)||void 0===a?void 0:a.title}},{title:b("translations"),dataIndex:"locales",is_show:!0,render:(e,t)=>{var a;return(0,I.jsx)(n.A,{children:null===(a=t.locales)||void 0===a?void 0:a.map(((e,t)=>(0,I.jsx)(o.A,{color:[S[t]],className:"text-uppercase",children:e})))})}},{title:b("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,I.jsx)(l.A,{src:r.sE+e,alt:"img_gallery",width:100,className:"rounded",preview:!0,placeholder:!0})},{title:b("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:e=>H()(e).format("YYYY-MM-DD")},{title:b("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,I.jsxs)(n.A,{children:[(0,I.jsx)(i.A,{type:"primary",icon:(0,I.jsx)(h.A,{}),onClick:()=>U(t)}),(0,I.jsx)(i.A,{icon:(0,I.jsx)(v.A,{}),onClick:()=>W(t)}),(0,I.jsx)(z.A,{icon:(0,I.jsx)(p.A,{}),onClick:()=>{B(!0),q([t.id])}})]})}]),U=e=>{M((0,f.X4)({url:"shop-tag/".concat(e.id),id:"shop_tag_edit",name:b("edit.shop.tag")})),R("/shop-tag/".concat(e.id))},W=e=>{M((0,f.X4)({url:"shop-tag/clone/".concat(e.id),id:"shop_tag_clone",name:b("clone.shop.tag")})),R("/shop-tag/clone/".concat(e.id))};(0,_.A)((()=>{M((0,w.H)(J))}),[Y.data]),(0,s.useEffect)((()=>{Y.refetch&&(M((0,w.H)(J)),M((0,f.km)(Y)))}),[Y.refetch]);const $={selectedRowKeys:Z,onChange:e=>{q(e)}};return(0,I.jsxs)(d.A,{title:b("shop.tags"),extra:(0,I.jsxs)(n.A,{wrap:!0,children:[(0,I.jsx)(i.A,{type:"primary",icon:(0,I.jsx)(g.A,{}),onClick:()=>{M((0,f.X4)({id:"shop-tag/add",url:"shop-tag/add",name:b("add.shop.tag")})),R("/shop-tag/add")},children:b("add.tag")}),(0,I.jsx)(z.A,{size:"",onClick:()=>{null===Z||0===Z.length?k.oR.warning(b("select.the.product")):B(!0)},children:b("delete.selected")}),(0,I.jsx)(C.A,{setColumns:Q,columns:L})]}),children:[(0,I.jsx)(c.A,{scroll:{x:!0},rowSelection:$,columns:null===L||void 0===L?void 0:L.filter((e=>e.is_show)),dataSource:D,pagination:{pageSize:K.perPage,page:(null===(e=Y.data)||void 0===e?void 0:e.page)||1,total:O.total,defaultCurrent:null===(t=Y.data)||void 0===t?void 0:t.page,current:null===(a=Y.data)||void 0===a?void 0:a.page},rowKey:e=>e.id,loading:X,onChange:function(e,t,a){const{pageSize:s,current:n}=e,{field:o,order:l}=a,i=(0,V.A)(l);M((0,f.Ok)({activeMenu:Y,data:{...Y.data,perPage:s,page:n,column:o,sort:i}}))}}),(0,I.jsx)(m.A,{click:()=>{E(!0);const e={...Object.assign({},...Z.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};j.A.delete(e).then((()=>{M((0,w.H)()),k.oR.success(b("successfully.deleted")),B(!1)})).finally((()=>{E(!1)}))},text:b("delete"),loading:N,setText:q})]})}},53387:(e,t,a)=>{a.d(t,{A:()=>d});var s=a(89379),n=a(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var l=a(25085),i=function(e,t){return n.createElement(l.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:o}))};const d=n.forwardRef(i)},89323:(e,t,a)=>{a.d(t,{A:()=>d});var s=a(89379),n=a(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var l=a(25085),i=function(e,t){return n.createElement(l.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:o}))};const d=n.forwardRef(i)}}]);