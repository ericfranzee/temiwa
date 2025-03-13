"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[4388],{28645:(t,e,l)=>{l.d(e,{A:()=>m});var o=l(9950),n=l(66362),a=l(69216),s=l(80737),i=l(25933),c=l(57811),d=l(81541),r=l(48538),u=l(89323),v=l(70030),h=l(44414);const{Text:p}=n.A,m=t=>{let{columns:e=[],setColumns:l,style:n,size:m="",iconOnly:k}=t;const{t:x}=(0,v.B)(),[f,A]=(0,o.useState)(!1),g=(0,h.jsx)(a.A,{children:null===e||void 0===e?void 0:e.map(((t,o)=>(0,h.jsx)(a.A.Item,{children:(0,h.jsxs)(s.A,{className:"d-flex justify-content-between",children:[(0,h.jsx)(p,{children:t.title}),(0,h.jsx)(i.A,{defaultChecked:!0,onClick:()=>function(t){const o=null===e||void 0===e?void 0:e.map((e=>(e.dataIndex===t.dataIndex&&(e.is_show=!(null!==e&&void 0!==e&&e.is_show)),e)));l(o)}(t),disabled:1===o})]})},t+o)))});return(0,h.jsx)(c.A,{overlay:g,trigger:["click"],onVisibleChange:t=>{A(t)},visible:f,children:(0,h.jsx)(d.A,{title:x("change.columns"),children:(0,h.jsx)(r.A,{style:{...n},size:m,icon:(0,h.jsx)(u.A,{}),children:k?null:x("Columns")})})})}},24388:(t,e,l)=>{l.r(e),l.d(e,{default:()=>j});var o=l(12916),n=l(87094),a=l(41988),s=l(23263),i=l(80737),c=l(99674),d=l(48538),r=l(52913),u=l(9950),v=l(40841),h=l(91854),p=l(19973),m=l(74623),k=l(28645),x=l(70243),f=l(88986),A=l(70030),g=l(28429),_=l(44414);const j=()=>{var t;const e=(0,h.wA)(),{t:l}=(0,A.B)(),j=(0,g.Zp)(),{activeMenu:w}=(0,h.d4)((t=>t.menu),h.bN),{loading:y,productList:z}=(0,h.d4)((t=>t.stockReport),h.bN),[C,b]=(0,u.useState)([]),[V,H]=(0,u.useState)(!1),[S,I]=(0,u.useState)((null===w||void 0===w||null===(t=w.data)||void 0===t?void 0:t.value)||null),[q,M]=(0,u.useState)([{title:"Product title",dataIndex:"product_translation_title",key:"product_translation_title",render:(t,o)=>{var n;return(0,_.jsx)("a",{onClick:()=>{return t=o,e((0,m.X4)({url:"report/products",id:"report.products",name:l("report.products")})),void j("/report/products?product_id=".concat(t.id));var t},children:null===o||void 0===o||null===(n=o.translation)||void 0===n?void 0:n.title})},is_show:!0,sorter:(t,e)=>{var l,o;return null===t||void 0===t||null===(l=t.translation)||void 0===l?void 0:l.title.localeCompare(null===e||void 0===e||null===(o=e.translation)||void 0===o?void 0:o.title)}},{title:"Status",key:"status",dataIndex:"status",render:(t,e)=>(0,_.jsx)(o.A,{children:e.status},e.id),is_show:!0},{title:"Stock",key:"stock",dataIndex:"quantity",render:(t,e)=>null===e||void 0===e?void 0:e.stocks_sum_quantity,is_show:!0,sorter:(t,e)=>(null===t||void 0===t?void 0:t.stocks_sum_quantity)-(null===e||void 0===e?void 0:e.stocks_sum_quantity)}]),B={page:w.page,perPage:w.perPage,actual:S},N=t=>{e((0,x.qV)(t))};(0,f.A)((()=>{N(B)}),[S]),(0,u.useEffect)((()=>{w.refetch&&(N(B),e((0,m.km)(w)))}),[w.refetch]);return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(n.A,{gutter:24,children:(0,_.jsx)(a.A,{span:24,children:(0,_.jsxs)(s.A,{title:l("stock"),children:[(0,_.jsxs)(i.A,{className:"d-flex justify-content-end",children:[(0,_.jsx)(c.A,{style:{width:"200px"},onChange:t=>I(t),options:[{value:null,label:"All products",key:"all_products"},{value:"in_stock",label:"In stock",key:"in_stock"},{value:"low_stock",label:"Low stock",key:"low_stock"},{value:"out_of_stock",label:"Out of stock",key:"out_of_stock"}],defaultValue:(null===w||void 0===w?void 0:w.data)||null}),(0,_.jsx)(d.A,{icon:(0,_.jsx)(v.A,{}),loading:V,onClick:()=>{H(!0),p.A.getStocks({export:"excel",actual:S}).then((t=>{const e=t.data.link;e&&(window.location.href=e)})).finally((()=>H(!1)))},children:l("download")}),(0,_.jsx)(k.A,{columns:q,setColumns:M})]}),(0,_.jsx)(r.A,{scroll:{x:!0},columns:null===q||void 0===q?void 0:q.filter((t=>t.is_show)),dataSource:z.data||[],rowKey:t=>t.id,loading:y,pagination:{pageSize:null===z||void 0===z?void 0:z.per_page,page:(null===z||void 0===z?void 0:z.current_page)||1,total:null===z||void 0===z?void 0:z.total,defaultCurrent:1},onChange:t=>{const{pageSize:e,current:l}=t;N({page:l,perPage:e,actual:S})}})]})})})})}},40841:(t,e,l)=>{l.d(e,{A:()=>c});var o=l(89379),n=l(9950);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-download",theme:"outlined"};var s=l(25085),i=function(t,e){return n.createElement(s.A,(0,o.A)((0,o.A)({},t),{},{ref:e,icon:a}))};const c=n.forwardRef(i)},89323:(t,e,l)=>{l.d(e,{A:()=>c});var o=l(89379),n=l(9950);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var s=l(25085),i=function(t,e){return n.createElement(s.A,(0,o.A)((0,o.A)({},t),{},{ref:e,icon:a}))};const c=n.forwardRef(i)}}]);