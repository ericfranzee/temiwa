"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[2178],{35116:(e,l,t)=>{t.d(l,{A:()=>r});t(9950);var n=t(48538),a=t(44070),s=t(85923),o=t(70030),i=t(13311),d=t(44414);function r(e){let{size:l="",onClick:t,type:r="default",...c}=e;const{t:u}=(0,o.B)(),{isDemo:h}=(0,i.A)();return(0,d.jsx)(n.A,{size:l,icon:(0,d.jsx)(a.A,{}),onClick:e=>{h?s.oR.warning(u("cannot.work.demo")):t(e)},type:r,...c})}},28645:(e,l,t)=>{t.d(l,{A:()=>x});var n=t(9950),a=t(66362),s=t(69216),o=t(80737),i=t(25933),d=t(57811),r=t(81541),c=t(48538),u=t(89323),h=t(70030),v=t(44414);const{Text:p}=a.A,x=e=>{let{columns:l=[],setColumns:t,style:a,size:x="",iconOnly:m}=e;const{t:A}=(0,h.B)(),[g,j]=(0,n.useState)(!1),f=(0,v.jsx)(s.A,{children:null===l||void 0===l?void 0:l.map(((e,n)=>(0,v.jsx)(s.A.Item,{children:(0,v.jsxs)(o.A,{className:"d-flex justify-content-between",children:[(0,v.jsx)(p,{children:e.title}),(0,v.jsx)(i.A,{defaultChecked:!0,onClick:()=>function(e){const n=null===l||void 0===l?void 0:l.map((l=>(l.dataIndex===e.dataIndex&&(l.is_show=!(null!==l&&void 0!==l&&l.is_show)),l)));t(n)}(e),disabled:1===n})]})},e+n)))});return(0,v.jsx)(d.A,{overlay:f,trigger:["click"],onVisibleChange:e=>{j(e)},visible:g,children:(0,v.jsx)(r.A,{title:A("change.columns"),children:(0,v.jsx)(c.A,{style:{...a},size:x,icon:(0,v.jsx)(u.A,{}),children:m?null:A("Columns")})})})}},8297:(e,l,t)=>{t.d(l,{A:()=>d});var n=t(9950),a=t(55902),s=t(41397),o=t(60767),i=t(44414);function d(e){let{handleChange:l,defaultValue:t,resetSearch:d,...r}=e;const[c,u]=(0,n.useState)(t),h=(0,n.useMemo)((()=>(0,s.debounce)((e=>{l(e)}),800)),[]);return(0,n.useEffect)((()=>{u(t)}),[d]),(0,i.jsx)(a.A,{value:c,onChange:e=>{u(e.target.value),h(e.target.value)},prefix:(0,i.jsx)(o.A,{}),...r})}},68371:(e,l,t)=>{t.d(l,{W:()=>n});const n=[{label:"IN_HOUSE",value:1,key:1},{label:"SELLER",value:2,key:2}]},8168:(e,l,t)=>{function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(l,{A:()=>n})},65820:(e,l,t)=>{t.d(l,{s:()=>o});var n=t(28429),a=t(21215),s=t.n(a);const o=()=>{const e=(0,n.Zp)(),l=(0,n.zy)(),t=s().parse(l.search,{ignoreQueryPrefix:!0});return{values:t,set:(l,n)=>e({search:s().stringify({...t,[l]:n})}),reset:l=>{const n={...t};n[l]&&delete n[l],e({search:s().stringify({...n})})},clear:()=>e({search:s().stringify({})}),merge:l=>e({search:s().stringify({...t,...l})})}}},72178:(e,l,t)=>{t.r(l),t.d(l,{default:()=>Q});var n=t(9950),a=t(24513),s=t(12678),o=t(67376),i=t(44070),d=t(53387),r=t(54909),c=t(80737),u=t(12916),h=t(72243),v=t(25933),p=t(48538),x=t(23263),m=t(52913),A=t(28429),g=t(85923),j=t(55386),f=t(76083),y=t(91854),b=t(74623),w=t(55660),k=t(99856),C=t(70030),_=t(59233),I=t(82706),z=t(87094),S=t(41988),N=t(99674),V=t(44414);const H=["new","approved","rejected"];function B(e){let{data:l,handleCancel:t,paramsData:a}=e;const{t:s}=(0,C.B)(),{activeMenu:o}=(0,y.d4)((e=>e.menu),y.bN),[i]=_.A.useForm(),d=(0,y.wA)(),[r,c]=(0,n.useState)(!1);return(0,V.jsx)(I.A,{visible:!!l,title:s(l.name),onCancel:t,footer:[(0,V.jsx)(p.A,{type:"primary",onClick:()=>i.submit(),loading:r,children:s("save")}),(0,V.jsx)(p.A,{type:"default",onClick:t,children:s("cancel")})],children:(0,V.jsx)(_.A,{form:i,layout:"vertical",onFinish:e=>{c(!0);const n={...e};w.A.statusChange(l.uuid,n).then((()=>{t(),d((0,k._)(a)),d((0,b.km)(o))})).finally((()=>c(!1)))},initialValues:{status:l.status},children:(0,V.jsx)(z.A,{gutter:12,children:(0,V.jsx)(S.A,{span:24,children:(0,V.jsx)(_.A.Item,{label:s("status"),name:"status",rules:[{required:!0,message:s("required")}],children:(0,V.jsx)(N.A,{children:H.map(((e,l)=>(0,V.jsx)(N.A.Option,{value:e,children:s(e)},e+l)))})})})})})})}var M=t(35116),E=t(8297),R=t(88986),q=t(44880),O=t(28645),P=t(8168),F=t(65820),D=t(91524),K=t(68371);const T=e=>{var l,t,n,a;let{data:s}=e;const{t:o}=(0,C.B)();return(0,V.jsxs)(D.A,{bordered:!0,children:[(0,V.jsx)(D.A.Item,{label:o("logo"),children:(0,V.jsx)(h.A,{src:null===s||void 0===s?void 0:s.logo_img,width:100,height:100,className:"rounded",placeholder:!(null!==s&&void 0!==s&&s.logo_img),style:{objectFit:"cover"}}),span:3}),(0,V.jsx)(D.A.Item,{label:o("background.image"),children:(0,V.jsx)(h.A,{src:null===s||void 0===s?void 0:s.background_img,width:150,height:100,className:"rounded",placeholder:!(null!==s&&void 0!==s&&s.logo_img),style:{objectFit:"cover"}}),span:3}),(0,V.jsx)(D.A.Item,{label:o("title"),children:(null===s||void 0===s||null===(l=s.translation)||void 0===l?void 0:l.title)||o("N/A"),span:3}),(0,V.jsx)(D.A.Item,{label:o("description"),children:(null===s||void 0===s||null===(t=s.translation)||void 0===t?void 0:t.description)||o("N/A"),span:3}),(0,V.jsx)(D.A.Item,{label:o("address"),children:(null===s||void 0===s||null===(n=s.translation)||void 0===n?void 0:n.address)||o("N/A"),span:3}),(0,V.jsx)(D.A.Item,{label:o("phone"),children:(null===s||void 0===s?void 0:s.phone)||o("N/A"),span:3}),(0,V.jsx)(D.A.Item,{label:o("open"),children:Boolean(null===s||void 0===s?void 0:s.open)?o("yes"):o("no"),span:3}),(0,V.jsx)(D.A.Item,{label:o("shop.type"),children:o(null===(a=K.W.find((e=>e.value===(null===s||void 0===s?void 0:s.delivery_type))))||void 0===a?void 0:a.label),span:3})]})},X=()=>{var e;const{t:l}=(0,C.B)(),t=(0,F.s)(),a=null===(e=t.values)||void 0===e?void 0:e.shopId,[s,o]=(0,n.useState)(null),[i,d]=(0,n.useState)(!1);if((0,n.useEffect)((()=>{if(a){d(!0);(()=>{w.A.getById(a).then((e=>o(null===e||void 0===e?void 0:e.data))).catch((e=>{console.error(e)})).finally((()=>d(!1)))})()}}),[a]),!a)return null;const r=()=>{t.clear(),o(null)};return(0,V.jsx)(I.A,{title:"shop.details #".concat(a),onCancel:r,visible:!!a,footer:(0,V.jsx)(p.A,{onClick:r,children:l("close")}),width:1e3,children:(0,V.jsx)(x.A,{loading:i,children:(0,V.jsx)(T,{data:s})})})},{TabPane:L}=r.A,W=["blue","red","gold","volcano","cyan","lime"],Z=["all","new","approved","rejected"],Q=()=>{var e,l,t,_,I,z,S,N,H,D;const{t:K}=(0,C.B)(),T=(0,y.wA)(),Q=(0,A.Zp)(),U=(0,F.s)(),[G,J]=(0,n.useState)(null),{user:Y}=(0,y.d4)((e=>e.auth),y.bN),[$,ee]=(0,n.useState)(null),[le,te]=(0,n.useState)("all"),{activeMenu:ne}=(0,y.d4)((e=>e.menu),y.bN),ae=(null===(e=ne.data)||void 0===e?void 0:e.role)||le,{setIsModalVisible:se}=(0,n.useContext)(j.o),[oe,ie]=(0,n.useState)(null),[de,re]=(0,n.useState)(null),[ce,ue]=(0,n.useState)(!1),{shops:he,meta:ve,loading:pe,params:xe}=(0,y.d4)((e=>e.shop),y.bN),{defaultCurrency:me}=(0,y.d4)((e=>e.currency),y.bN),[Ae,ge]=(0,n.useState)([{title:K("id"),dataIndex:"id",is_show:!0,sorter:!0,key:"id"},{title:K("title"),dataIndex:"name",is_show:!0,key:"title"},{title:K("translations"),dataIndex:"locales",is_show:!0,key:"locales",render:(e,l)=>{var t;return(0,V.jsx)(c.A,{children:null===(t=l.locales)||void 0===t?void 0:t.map(((e,l)=>(0,V.jsx)(u.A,{className:"text-uppercase",color:[W[l]],children:e},"".concat(e,"_").concat(l))))})}},{title:K("logo"),dataIndex:"logo_img",is_show:!0,key:"logo",render:(e,l)=>(0,V.jsx)(h.A,{alt:"images background",className:"img rounded",src:e||"https://via.placeholder.com/150",effect:"blur",width:50,height:50,preview:!0,placeholder:!0})},{title:K("background"),dataIndex:"back",is_show:!0,render:(e,l)=>(0,V.jsx)(h.A,{alt:"images background",className:"img rounded",src:e||"https://via.placeholder.com/150",effect:"blur",width:50,height:50,preview:!0,placeholder:!0})},{title:K("seller"),dataIndex:"seller",is_show:!0,key:"seller"},{title:K("open.time"),dataIndex:"open",is_show:!0,key:"open.time",render:(e,l)=>l.open?(0,V.jsxs)(u.A,{color:"blue",children:[" ",K("open")," "]}):(0,V.jsxs)(u.A,{color:"red",children:[" ",K("closed")," "]})},{title:K("tax"),is_show:!0,dataIndex:"tax",key:"tax",render:e=>(0,V.jsx)("div",{style:{width:"max-content"},children:"".concat(null!==e&&void 0!==e?e:0," %")})},{title:K("verify"),dataIndex:"verify",is_show:!0,render:(e,l)=>(0,V.jsx)(v.A,{onChange:()=>{se(!0),ie(l.uuid),re(!0)},checked:e})},{title:K("status"),dataIndex:"status",key:"status",is_show:!0,render:(e,l)=>(0,V.jsxs)("div",{children:["new"===e?(0,V.jsx)(u.A,{color:"blue",children:K(e)}):"rejected"===e?(0,V.jsx)(u.A,{color:"error",children:K(e)}):(0,V.jsx)(u.A,{color:"cyan",children:K(e)}),(0,V.jsx)(a.A,{onClick:()=>J(l)})]})},{title:K("options"),dataIndex:"options",key:"options",is_show:!0,render:(e,l)=>(0,V.jsxs)(c.A,{children:[(0,V.jsx)(p.A,{icon:(0,V.jsx)(s.A,{}),onClick:()=>{U.set("shopId",null===l||void 0===l?void 0:l.id)}}),(0,V.jsx)(p.A,{type:"primary",icon:(0,V.jsx)(a.A,{}),onClick:()=>(e=>{T((0,b.X4)({id:"edit-shop",url:"shop/".concat(e.uuid),name:K("edit.shop")})),Q("/shop/".concat(e.uuid),{state:"edit"})})(l)}),(0,V.jsx)(p.A,{icon:(0,V.jsx)(o.A,{}),onClick:()=>(e=>{T((0,b.X4)({id:"shop-clone",url:"shop-clone/".concat(e.uuid),name:K("shop.clone")})),Q("/shop-clone/".concat(e.uuid),{state:"clone"})})(l)}),"manager"!==(null===Y||void 0===Y?void 0:Y.role)&&(0,V.jsx)(M.A,{icon:(0,V.jsx)(i.A,{}),onClick:()=>{ie([l.id]),se(!0),ee(!0),re(!1)}})]})}]),je=null===ne||void 0===ne?void 0:ne.data,fe={search:null===je||void 0===je?void 0:je.search,lang:"equal"===(null===je||void 0===je||null===(l=je.filter)||void 0===l?void 0:l.equal)?null===je||void 0===je||null===(t=je.filter)||void 0===t?void 0:t.lang:q.A.language,not_lang:"not_equal"===(null===je||void 0===je||null===(_=je.filter)||void 0===_?void 0:_.equal)?null===je||void 0===je||null===(I=je.filter)||void 0===I?void 0:I.lang:null,status:"all"===ae?void 0:ae,page:null===je||void 0===je?void 0:je.page,perPage:null===je||void 0===je?void 0:je.perPage,sort:null===je||void 0===je?void 0:je.sort,column:null===je||void 0===je?void 0:je.column};(0,n.useEffect)((()=>{ne.refetch&&(T((0,k._)(fe)),T((0,b.km)(ne)))}),[ne.refetch]),(0,R.A)((()=>{T((0,k._)(fe))}),[je]);const ye=e=>{const l=ne.data;T((0,b.Ok)({activeMenu:ne,data:{...l,...e}}))},be={selectedRowKeys:oe,onChange:e=>{ie(e)}};return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsxs)(x.A,{title:K("shops"),extra:(0,V.jsxs)(c.A,{wrap:!0,children:[(0,V.jsxs)(c.A,{wrap:!0,children:[(0,V.jsx)(p.A,{icon:(0,V.jsx)(d.A,{}),type:"primary",onClick:()=>{T((0,b.X4)({id:"add-shop",url:"shop/add",name:K("add.shop")})),Q("/shop/add")},children:K("add.shop")}),(0,V.jsx)(M.A,{size:"",onClick:()=>{null===oe||0===oe.length?g.oR.warning(K("select.the.product")):(se(!0),ee(!1))},children:K("delete.selected")})]}),(0,V.jsx)(O.A,{columns:Ae,setColumns:ge})]}),children:[(0,V.jsx)("div",{className:"d-flex justify-content-between",children:(0,V.jsx)(E.A,{placeholder:K("search"),handleChange:e=>ye({search:e}),defaultValue:null===(z=ne.data)||void 0===z?void 0:z.search,resetSearch:!(null!==(S=ne.data)&&void 0!==S&&S.search),className:"w-25"})}),(0,V.jsx)(r.A,{className:"mt-3",activeKey:ae,onChange:e=>{ye({role:e,page:1}),te(e)},type:"card",children:Z.map((e=>(0,V.jsx)(L,{tab:K(e)},e)))}),(0,V.jsx)(m.A,{scroll:{x:!0},rowSelection:be,columns:null===Ae||void 0===Ae?void 0:Ae.filter((e=>e.is_show)),dataSource:he,loading:pe,pagination:{pageSize:xe.perPage,page:(null===(N=ne.data)||void 0===N?void 0:N.page)||1,total:ve.total,defaultCurrent:null===(H=ne.data)||void 0===H?void 0:H.page,current:null===(D=ne.data)||void 0===D?void 0:D.page},rowKey:e=>e.id,onChange:function(e,l,t){const{pageSize:n,current:a}=e,{field:s,order:o}=t,i=(0,P.A)(o);T((0,b.Ok)({activeMenu:ne,data:{...ne.data,perPage:n,page:a,column:s,sort:i}}))}}),G&&(0,V.jsx)(B,{data:G,handleCancel:()=>J(null),paramsData:fe}),(0,V.jsx)(f.A,{click:de?()=>{ue(!0),w.A.setVerify(oe).then((e=>{se(!1),g.oR.success(K("successfully.updated")),T((0,k._)(fe)),re(!1)})).finally((()=>{ue(!1),ie(null)}))}:()=>{ue(!0);const e={...Object.assign({},...oe.map(((e,l)=>({["ids[".concat(l,"]")]:e}))))};w.A.delete(e).then((()=>{g.oR.success(K("successfully.deleted")),se(!1),T((0,k._)(fe)),ee(null),re(!1),ie(null)})).finally((()=>ue(!1)))},text:K(de?"set.verify.product":$?"delete":"all.delete"),loading:ce,setText:ie,setVerify:re})]}),(0,V.jsx)(X,{})]})}},53387:(e,l,t)=>{t.d(l,{A:()=>d});var n=t(89379),a=t(9950);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var o=t(25085),i=function(e,l){return a.createElement(o.A,(0,n.A)((0,n.A)({},e),{},{ref:l,icon:s}))};const d=a.forwardRef(i)},89323:(e,l,t)=>{t.d(l,{A:()=>d});var n=t(89379),a=t(9950);const s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var o=t(25085),i=function(e,l){return a.createElement(o.A,(0,n.A)((0,n.A)({},e),{},{ref:l,icon:s}))};const d=a.forwardRef(i)}}]);