"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2947],{35116:(e,t,a)=>{a.d(t,{A:()=>o});a(9950);var n=a(48538),s=a(44070),l=a(85923),i=a(70030),c=a(13311),d=a(44414);function o(e){let{size:t="",onClick:a,type:o="default",...r}=e;const{t:u}=(0,i.B)(),{isDemo:h}=(0,c.A)();return(0,d.jsx)(n.A,{size:t,icon:(0,d.jsx)(s.A,{}),onClick:e=>{h?l.oR.warning(u("cannot.work.demo")):a(e)},type:o,...r})}},28645:(e,t,a)=>{a.d(t,{A:()=>x});var n=a(9950),s=a(66362),l=a(69216),i=a(80737),c=a(25933),d=a(57811),o=a(81541),r=a(48538),u=a(89323),h=a(70030),v=a(44414);const{Text:m}=s.A,x=e=>{let{columns:t=[],setColumns:a,style:s,size:x="",iconOnly:A}=e;const{t:p}=(0,h.B)(),[g,f]=(0,n.useState)(!1),j=(0,v.jsx)(l.A,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,v.jsx)(l.A.Item,{children:(0,v.jsxs)(i.A,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(c.A,{defaultChecked:!0,onClick:()=>function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(n)}(e),disabled:1===n})]})},e+n)))});return(0,v.jsx)(d.A,{overlay:j,trigger:["click"],onVisibleChange:e=>{f(e)},visible:g,children:(0,v.jsx)(o.A,{title:p("change.columns"),children:(0,v.jsx)(r.A,{style:{...s},size:x,icon:(0,v.jsx)(u.A,{}),children:A?null:p("Columns")})})})}},8297:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(9950),s=a(55902),l=a(41397),i=a(60767),c=a(44414);function d(e){let{handleChange:t,defaultValue:a,resetSearch:d,...o}=e;const[r,u]=(0,n.useState)(a),h=(0,n.useMemo)((()=>(0,l.debounce)((e=>{t(e)}),800)),[]);return(0,n.useEffect)((()=>{u(a)}),[d]),(0,c.jsx)(s.A,{value:r,onChange:e=>{u(e.target.value),h(e.target.value)},prefix:(0,c.jsx)(i.A,{}),...o})}},8168:(e,t,a)=>{function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{A:()=>n})},2947:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var n=a(9950),s=a(24513),l=a(67376),i=a(44070),c=a(53387),d=a(72243),o=a(12916),r=a(80737),u=a(48538),h=a(23263),v=a(52913),m=a(85923),x=a(63620),A=a(76083),p=a(55386),g=a(91854),f=a(28429),j=a(74623),b=a(37963),w=a(59759),k=a(70030),y=a(35116),C=a(28645),z=a(8297),V=a(88986),S=a(38525),_=a(8168),H=a(44414);const I=()=>{var e,t;const{t:a}=(0,k.B)(),I=(0,g.wA)(),M=(0,f.Zp)(),[N,R]=(0,n.useState)(!1),{setIsModalVisible:B}=(0,n.useContext)(p.o),[E,F]=(0,n.useState)(null),[O,X]=(0,n.useState)(!1),[$,P]=(0,n.useState)(null),{activeMenu:K}=(0,g.d4)((e=>e.menu),g.bN),T=null===K||void 0===K?void 0:K.data,D={sort:null===T||void 0===T?void 0:T.sort,column:null===T||void 0===T?void 0:T.column,search:null!==T&&void 0!==T&&T.search?T.search:void 0,perPage:null===T||void 0===T?void 0:T.perPage,page:null===T||void 0===T?void 0:T.page,status:(null===T||void 0===T?void 0:T.role)||"published"},{brands:W,meta:Z,loading:q}=(0,g.d4)((e=>e.brand),g.bN),[G,J]=(0,n.useState)([{title:a("id"),dataIndex:"id",key:"id",is_show:!0,sorter:!0},{title:a("title"),dataIndex:"title",key:"title",is_show:!0},{title:a("image"),dataIndex:"img",key:"img",is_show:!0,render:(e,t)=>(0,H.jsx)(d.A,{src:x.sE+e,alt:"img_gallery",width:100,height:"auto",className:"rounded",preview:!0,placeholder:!0},e+t.id)},{title:a("active"),dataIndex:"active",key:"active",is_show:!0,render:e=>e?(0,H.jsx)(o.A,{color:"cyan",children:a("active")}):(0,H.jsx)(o.A,{color:"yellow",children:a("inactive")})},{title:a("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,H.jsxs)(r.A,{children:[(0,H.jsx)(u.A,{type:"primary",icon:(0,H.jsx)(s.A,{}),onClick:()=>(e=>{I((0,j.X4)({url:"brand/".concat(e.id),id:"brand_edit",name:a("edit.brand")})),M("/brand/".concat(e.id),{state:"edit"})})(t)}),(0,H.jsx)(u.A,{icon:(0,H.jsx)(l.A,{}),onClick:()=>(e=>{I((0,j.X4)({id:"brand-clone",url:"brand-clone/".concat(e),name:a("brand.clone")})),M("/brand-clone/".concat(e),{state:"clone"})})(t.id)}),(0,H.jsx)(y.A,{icon:(0,H.jsx)(i.A,{}),onClick:()=>{F([t.id]),B(!0),P(!0)}})]})}]);(0,V.A)((()=>{I((0,w.$F)(D))}),[K.data]),(0,n.useEffect)((()=>{K.refetch&&(I((0,w.$F)(D)),I((0,j.km)(K)))}),[K.refetch]);const L={selectedRowKeys:E,onChange:e=>{F(e)}};return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(h.A,{className:"p-0",children:(0,H.jsxs)(r.A,{wrap:!0,children:[(0,H.jsx)(z.A,{placeholder:a("search"),className:"w-25",handleChange:e=>{(e=>{const t=K.data;I((0,j.Ok)({activeMenu:K,data:{...t,...e}}))})({search:e})},defaultValue:null===(e=K.data)||void 0===e?void 0:e.search,resetSearch:!(null!==(t=K.data)&&void 0!==t&&t.search),style:{minWidth:300}}),(0,H.jsxs)(u.A,{onClick:()=>{I((0,j.X4)({url:"catalog/brands/import",id:"brand_import",name:a("import.brand")})),M("/catalog/brands/import")},children:[(0,H.jsx)(S.I8R,{className:"mr-2"}),a("import")]}),(0,H.jsxs)(u.A,{loading:N,onClick:()=>{R(!0),b.A.export(D).then((e=>{const t=x.bb+e.data.file_name;window.location.href=t})).finally((()=>R(!1)))},children:[(0,H.jsx)(S.$tV,{className:"mr-2"}),a("export")]}),(0,H.jsx)(y.A,{size:"",onClick:()=>{null===E||0===E.length?m.oR.warning(a("select.the.product")):(B(!0),P(!1))},children:a("delete.selected")}),(0,H.jsx)(u.A,{type:"primary",icon:(0,H.jsx)(c.A,{}),onClick:()=>{I((0,j.X4)({id:"brand/add",url:"brand/add",name:a("add.brand")})),M("/brand/add")},children:a("add.brands")}),(0,H.jsx)(C.A,{columns:G,setColumns:J})]})}),(0,H.jsx)(h.A,{title:a("brands"),children:(0,H.jsx)(v.A,{scroll:{x:!0},rowSelection:L,columns:null===G||void 0===G?void 0:G.filter((e=>e.is_show)),dataSource:W,pagination:{pageSize:Z.per_page,page:Z.current_page,total:Z.total},rowKey:e=>e.id,onChange:function(e,t,a){const{pageSize:n,current:s}=e,{field:l,order:i}=a,c=(0,_.A)(i);I((0,j.Ok)({activeMenu:K,data:{...T,perPage:n,page:s,column:l,sort:c}}))},loading:q})}),(0,H.jsx)(A.A,{click:()=>{X(!0);const e={...Object.assign({},...E.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};b.A.delete(e).then((()=>{m.oR.success(a("successfully.deleted")),I((0,w.$F)(D)),B(!1),P(null)})).finally((()=>{F(null),X(!1)}))},text:a($?"delete":"all.delete"),setText:F,loading:O})]})}},53387:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(89379),s=a(9950);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=a(25085),c=function(e,t){return s.createElement(i.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:l}))};const d=s.forwardRef(c)},89323:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(89379),s=a(9950);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=a(25085),c=function(e,t){return s.createElement(i.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:l}))};const d=s.forwardRef(c)}}]);