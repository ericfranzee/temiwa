"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[3794],{35116:(e,t,n)=>{n.d(t,{A:()=>r});n(9950);var s=n(48538),l=n(44070),a=n(85923),i=n(70030),c=n(13311),d=n(44414);function r(e){let{size:t="",onClick:n,type:r="default",...o}=e;const{t:h}=(0,i.B)(),{isDemo:u}=(0,c.A)();return(0,d.jsx)(s.A,{size:t,icon:(0,d.jsx)(l.A,{}),onClick:e=>{u?a.oR.warning(h("cannot.work.demo")):n(e)},type:r,...o})}},28645:(e,t,n)=>{n.d(t,{A:()=>x});var s=n(9950),l=n(66362),a=n(69216),i=n(80737),c=n(25933),d=n(57811),r=n(81541),o=n(48538),h=n(89323),u=n(70030),v=n(44414);const{Text:m}=l.A,x=e=>{let{columns:t=[],setColumns:n,style:l,size:x="",iconOnly:A}=e;const{t:p}=(0,u.B)(),[g,f]=(0,s.useState)(!1),j=(0,v.jsx)(a.A,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,v.jsx)(a.A.Item,{children:(0,v.jsxs)(i.A,{className:"d-flex justify-content-between",children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(c.A,{defaultChecked:!0,onClick:()=>function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(s)}(e),disabled:1===s})]})},e+s)))});return(0,v.jsx)(d.A,{overlay:j,trigger:["click"],onVisibleChange:e=>{f(e)},visible:g,children:(0,v.jsx)(r.A,{title:p("change.columns"),children:(0,v.jsx)(o.A,{style:{...l},size:x,icon:(0,v.jsx)(h.A,{}),children:A?null:p("Columns")})})})}},73794:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var s=n(9950),l=n(80737),a=n(48538),i=n(23263),c=n(52913),d=n(28429),r=n(24513),o=n(44070),h=n(53387),u=n(76083),v=n(55386),m=n(91854),x=n(74623),A=n(85923),p=n(70030),g=n(37332),f=n(58962),j=n(35116),b=n(28645),w=n(44414);const z=()=>{const{t:e}=(0,p.B)(),t=(0,m.wA)(),n=(0,d.Zp)(),{setIsModalVisible:z}=(0,s.useContext)(v.o),[k,y]=(0,s.useState)(null),[C,V]=(0,s.useState)(null),[H,S]=(0,s.useState)(!1),{activeMenu:_}=(0,m.d4)((e=>e.menu),m.bN),{branches:I,meta:M,loading:R}=(0,m.d4)((e=>e.branch),m.bN),[B,D]=(0,s.useState)([{title:e("id"),is_show:!0,dataIndex:"id",key:"id"},{title:e("title"),is_show:!0,dataIndex:"title",key:"title",render:(e,t)=>{var n;return(0,w.jsx)(w.Fragment,{children:null===t||void 0===t||null===(n=t.translation)||void 0===n?void 0:n.title})}},{title:e("address"),is_show:!0,dataIndex:"address",key:"address",render:(e,t)=>{var n;return(0,w.jsx)(w.Fragment,{children:null===t||void 0===t||null===(n=t.address)||void 0===n?void 0:n.address})}},{title:e("options"),is_show:!0,key:"options",dataIndex:"options",render:(e,t)=>(0,w.jsxs)(l.A,{children:[(0,w.jsx)(a.A,{type:"primary",icon:(0,w.jsx)(r.A,{}),onClick:()=>E(t)}),(0,w.jsx)(j.A,{icon:(0,w.jsx)(o.A,{}),onClick:()=>{z(!0),y([t.id]),V(!0)}})]})}]),E=s=>{t((0,x.X4)({url:"seller/branch/".concat(s.id),id:"branch_edit",name:e("edit.branch")})),n("/seller/branch/".concat(s.id))};(0,s.useEffect)((()=>{_.refetch&&(t((0,g.D)()),t((0,x.km)(_)))}),[_.refetch]);const N={selectedRowKeys:k,onChange:e=>{y(e)}};return(0,w.jsxs)(i.A,{title:e("branch"),extra:(0,w.jsxs)(l.A,{wrap:!0,children:[(0,w.jsx)(a.A,{size:"small",type:"primary",icon:(0,w.jsx)(h.A,{}),onClick:()=>{t((0,x.X4)({url:"seller/branch/add",id:"add.branch",name:e("add.branch")})),n("/seller/branch/add")},children:e("add.branch")}),(0,w.jsx)(j.A,{type:"danger",onClick:()=>{null===k||0===k.length?A.oR.warning(e("select.the.product")):(z(!0),V(!1))},children:e("delete.all")}),(0,w.jsx)(b.A,{columns:B,setColumns:D})]}),children:[(0,w.jsx)(c.A,{scroll:{x:!0},rowSelection:N,columns:null===B||void 0===B?void 0:B.filter((e=>e.is_show)),dataSource:I,pagination:{pageSize:null===M||void 0===M?void 0:M.per_page,page:null===M||void 0===M?void 0:M.current_page,total:null===M||void 0===M?void 0:M.total},rowKey:e=>e.id,loading:R,onChange:e=>{const{pageSize:n,current:s}=e;t((0,g.D)({perPage:n,page:s}))}}),(0,w.jsx)(u.A,{click:()=>{S(!0);const n={...Object.assign({},...k.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};f.A.delete(n).then((()=>{t((0,g.D)()),A.oR.success(e("successfully.deleted")),y(null)})).finally((()=>{z(!1),S(!1)}))},text:e(C?"delete":"all.delete"),loading:H,setText:y})]})}},53387:(e,t,n)=>{n.d(t,{A:()=>d});var s=n(89379),l=n(9950);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var i=n(25085),c=function(e,t){return l.createElement(i.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:a}))};const d=l.forwardRef(c)},89323:(e,t,n)=>{n.d(t,{A:()=>d});var s=n(89379),l=n(9950);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var i=n(25085),c=function(e,t){return l.createElement(i.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:a}))};const d=l.forwardRef(c)}}]);