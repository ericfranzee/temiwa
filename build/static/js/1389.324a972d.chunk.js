"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[1389],{35116:(e,t,n)=>{n.d(t,{A:()=>c});n(9950);var a=n(48538),l=n(44070),o=n(85923),r=n(70030),i=n(13311),s=n(44414);function c(e){let{size:t="",onClick:n,type:c="default",...d}=e;const{t:u}=(0,r.B)(),{isDemo:v}=(0,i.A)();return(0,s.jsx)(a.A,{size:t,icon:(0,s.jsx)(l.A,{}),onClick:e=>{v?o.oR.warning(u("cannot.work.demo")):n(e)},type:c,...d})}},28645:(e,t,n)=>{n.d(t,{A:()=>h});var a=n(9950),l=n(66362),o=n(69216),r=n(80737),i=n(25933),s=n(57811),c=n(81541),d=n(48538),u=n(89323),v=n(70030),f=n(44414);const{Text:p}=l.A,h=e=>{let{columns:t=[],setColumns:n,style:l,size:h="",iconOnly:m}=e;const{t:x}=(0,v.B)(),[A,g]=(0,a.useState)(!1),y=(0,f.jsx)(o.A,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,f.jsx)(o.A.Item,{children:(0,f.jsxs)(r.A,{className:"d-flex justify-content-between",children:[(0,f.jsx)(p,{children:e.title}),(0,f.jsx)(i.A,{defaultChecked:!0,onClick:()=>function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(a)}(e),disabled:1===a})]})},e+a)))});return(0,f.jsx)(s.A,{overlay:y,trigger:["click"],onVisibleChange:e=>{g(e)},visible:A,children:(0,f.jsx)(c.A,{title:x("change.columns"),children:(0,f.jsx)(d.A,{style:{...l},size:h,icon:(0,f.jsx)(u.A,{}),children:m?null:x("Columns")})})})}},8168:(e,t,n)=>{function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{A:()=>a})},31389:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var a=n(9950),l=n(12678),o=n(44070),r=n(29633),i=n(80737),s=n(48538),c=n(23263),d=n(52913),u=n(85923),v=n(76083),f=n(55386),p=n(91854),h=n(74623),m=n(88986),x=n(8168),A=n(70030),g=n(12408),y=n(68389),C=n(59051),w=n.n(C),b=n(28429),k=n(35116),j=n(28645),V=n(82706),_=n(91524),H=n(81446),I=n(44414);function S(e){var t,n,l,o,r,i,c,d,u;let{id:v,handleCancel:f}=e;const[p,h]=(0,a.useState)({}),[m,x]=(0,a.useState)(!1),{t:y}=(0,A.B)();return(0,a.useEffect)((()=>{!function(e){x(!0),g.A.getById(e).then((e=>h(e.data))).finally((()=>x(!1)))}(v)}),[v]),(0,I.jsx)(V.A,{visible:!!v,title:y("order.review"),onCancel:f,footer:(0,I.jsx)(s.A,{type:"default",onClick:f,children:y("cancel")}),children:m?(0,I.jsx)(H.A,{}):(0,I.jsxs)(_.A,{bordered:!0,children:[(0,I.jsx)(_.A.Item,{span:3,label:y("id"),children:p.id}),(0,I.jsxs)(_.A.Item,{span:3,label:y("user"),children:[null===p||void 0===p||null===(t=p.parcel_order)||void 0===t?void 0:t.username_from," ",(0,I.jsx)("a",{href:"tel:".concat(null===p||void 0===p||null===(n=p.parcel_order)||void 0===n?void 0:n.phone_from),children:null===p||void 0===p||null===(l=p.parcel_order)||void 0===l?void 0:l.phone_from})]}),(0,I.jsxs)(_.A.Item,{span:3,label:y("receiver"),children:[null===p||void 0===p||null===(o=p.parcel_order)||void 0===o?void 0:o.username_to," ",(0,I.jsxs)("a",{href:"tel:".concat(null===p||void 0===p||null===(r=p.parcel_order)||void 0===r?void 0:r.phone_to),children:[null===p||void 0===p||null===(i=p.parcel_order)||void 0===i?void 0:i.phone_to," "]})]}),(0,I.jsxs)(_.A.Item,{span:3,label:y("deliveryman"),children:[null===(c=p.deliveryman)||void 0===c?void 0:c.firstname," ",(null===(d=p.deliveryman)||void 0===d?void 0:d.lastname)||""]}),(0,I.jsx)(_.A.Item,{span:3,label:y("rating"),children:p.rating}),(0,I.jsx)(_.A.Item,{span:3,label:y("comment"),children:p.comment}),(0,I.jsx)(_.A.Item,{span:3,label:y("parcel.order.id"),children:null===p||void 0===p||null===(u=p.parcel_order)||void 0===u?void 0:u.id}),(0,I.jsx)(_.A.Item,{span:3,label:y("created.at"),children:p.created_at})]})})}function z(){const{t:e}=(0,A.B)(),t=(0,p.wA)(),n=(0,b.Zp)(),C=a=>{t((0,h.X4)({url:"/users/user/".concat(a.uuid),id:"user_info",name:e("user.info")})),n("/users/user/".concat(a.uuid),{state:{user_id:a.id}})},[V,_]=(0,a.useState)([{title:e("order.id"),dataIndex:"parcel_order",key:"parcel_order",render:a=>(0,I.jsxs)("div",{className:"text-hover",onClick:()=>(a=>{t((0,h.X4)({id:"order_details",url:"order/details/".concat(a),name:e("order.details")})),n("/order/details/".concat(a))})(a.id),children:["#",a.id]}),sorter:!0,is_show:!0},{title:e("user"),dataIndex:"user",key:"user",is_show:!0,render:e=>(0,I.jsxs)("div",{className:"text-hover",onClick:()=>C(e),children:[null===e||void 0===e?void 0:e.firstname," ",(null===e||void 0===e?void 0:e.lastname)||""]})},{title:e("deliveryman"),dataIndex:"deliveryman",key:"deliveryman",is_show:!0,render:e=>(0,I.jsxs)("div",{className:"text-hover",onClick:()=>C(e),children:[null===e||void 0===e?void 0:e.firstname," ",(null===e||void 0===e?void 0:e.lastname)||""]})},{title:e("rating"),dataIndex:"rating",key:"rating",is_show:!0,render:e=>(0,I.jsx)(r.A,{disabled:!0,defaultValue:e})},{title:e("created.at"),dataIndex:"created_at",key:"created_at",is_show:!0,render:e=>w()(e).format("DD.MM.YYYY")},{title:e("options"),key:"options",dataIndex:"options",is_show:!0,render:(e,t)=>(0,I.jsxs)(i.A,{children:[(0,I.jsx)(s.A,{type:"primary",icon:(0,I.jsx)(l.A,{}),onClick:()=>E(t.id)}),(0,I.jsx)(k.A,{icon:(0,I.jsx)(o.A,{}),onClick:()=>{D([t.id]),H(!0),B(!0)}})]})}]),{setIsModalVisible:H}=(0,a.useContext)(f.o),[z,D]=(0,a.useState)(null),[R,E]=(0,a.useState)(null),[M,O]=(0,a.useState)(!1),[N,B]=(0,a.useState)(null),{activeMenu:L}=(0,p.d4)((e=>e.menu),p.bN),{reviews:P,meta:F,loading:K,params:T}=(0,p.d4)((e=>e.parcelReview),p.bN);console.log("reviews => ",P);(0,a.useEffect)((()=>{L.refetch&&(t((0,y.J)()),t((0,h.km)(L)))}),[L.refetch]),(0,m.A)((()=>{const e=L.data,n={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};t((0,y.J)(n))}),[L.data]);const X={id:z,onChange:e=>{D(e)}};return(0,I.jsxs)(c.A,{title:e("parcel.reviews"),extra:(0,I.jsxs)(i.A,{wrap:!0,children:[(0,I.jsx)(k.A,{size:"",onClick:()=>{null===z||0===z.length?u.oR.warning(e("select.the.product")):(H(!0),B(!1))},children:e("delete.selected")}),(0,I.jsx)(j.A,{columns:V,setColumns:_})]}),children:[(0,I.jsx)(d.A,{scroll:{x:!0},rowSelection:X,columns:null===V||void 0===V?void 0:V.filter((e=>e.is_show)),dataSource:P,pagination:{pageSize:T.perPage,page:T.page,total:F.total,defaultCurrent:T.page},rowKey:e=>e.id,onChange:function(e,n,a){const{pageSize:l,current:o}=e,{field:r,order:i}=a,s=(0,x.A)(i);t((0,h.Ok)({activeMenu:L,data:{perPage:l,page:o,column:r,sort:s}}))},loading:K}),(0,I.jsx)(v.A,{click:()=>{O(!0);const n={...Object.assign({},...z.map(((e,t)=>({["ids[".concat(t,"]")]:e}))))};g.A.delete(n).then((()=>{u.oR.success(e("successfully.deleted")),t((0,y.J)()),H(!1)})).finally((()=>O(!1)))},text:e(N?"delete":"all.delete"),setText:D,loading:M}),R&&(0,I.jsx)(S,{id:R,handleCancel:()=>E(null)})]})}},89323:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(89379),l=n(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"}}]},name:"table",theme:"outlined"};var r=n(25085),i=function(e,t){return l.createElement(r.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:o}))};const s=l.forwardRef(i)},29633:(e,t,n)=>{n.d(t,{A:()=>_});var a=n(58168),l=n(9950),o=n(89379),r=n(64467),i=n(23029),s=n(92901),c=n(85501),d=n(29426),u=n(46962),v=n(48738),f=n.n(v),p=n(91478);var h=function(e){(0,c.A)(n,e);var t=(0,d.A)(n);function n(){var e;(0,i.A)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).onHover=function(t){var n=e.props;(0,n.onHover)(t,n.index)},e.onClick=function(t){var n=e.props;(0,n.onClick)(t,n.index)},e.onKeyDown=function(t){var n=e.props,a=n.onClick,l=n.index;13===t.keyCode&&a(t,l)},e}return(0,s.A)(n,[{key:"getClassName",value:function(){var e=this.props,t=e.prefixCls,n=e.index,a=e.value,l=e.allowHalf,o=e.focused,r=n+1,i=t;return 0===a&&0===n&&o?i+=" ".concat(t,"-focused"):l&&a+.5>=r&&a<r?(i+=" ".concat(t,"-half ").concat(t,"-active"),o&&(i+=" ".concat(t,"-focused"))):(i+=" ".concat(t,r<=a?"-full":"-zero"),r===a&&o&&(i+=" ".concat(t,"-focused"))),i}},{key:"render",value:function(){var e=this.onHover,t=this.onClick,n=this.onKeyDown,a=this.props,o=a.disabled,r=a.prefixCls,i=a.character,s=a.characterRender,c=a.index,d=a.count,u=a.value,v="function"===typeof i?i(this.props):i,f=l.createElement("li",{className:this.getClassName()},l.createElement("div",{onClick:o?null:t,onKeyDown:o?null:n,onMouseMove:o?null:e,role:"radio","aria-checked":u>c?"true":"false","aria-posinset":c+1,"aria-setsize":d,tabIndex:o?-1:0},l.createElement("div",{className:"".concat(r,"-first")},v),l.createElement("div",{className:"".concat(r,"-second")},v)));return s&&(f=s(f,this.props)),f}}]),n}(l.Component);function m(){}var x=function(e){(0,c.A)(n,e);var t=(0,d.A)(n);function n(e){var a;(0,i.A)(this,n),(a=t.call(this,e)).stars=void 0,a.rate=void 0,a.onHover=function(e,t){var n=a.props.onHoverChange,l=a.getStarValue(t,e.pageX);l!==a.state.cleanedValue&&a.setState({hoverValue:l,cleanedValue:null}),n(l)},a.onMouseLeave=function(){var e=a.props.onHoverChange;a.setState({hoverValue:void 0,cleanedValue:null}),e(void 0)},a.onClick=function(e,t){var n=a.props.allowClear,l=a.state.value,o=a.getStarValue(t,e.pageX),r=!1;n&&(r=o===l),a.onMouseLeave(),a.changeValue(r?0:o),a.setState({cleanedValue:r?o:null})},a.onFocus=function(){var e=a.props.onFocus;a.setState({focused:!0}),e&&e()},a.onBlur=function(){var e=a.props.onBlur;a.setState({focused:!1}),e&&e()},a.onKeyDown=function(e){var t=e.keyCode,n=a.props,l=n.count,o=n.allowHalf,r=n.onKeyDown,i="rtl"===n.direction,s=a.state.value;t===p.A.RIGHT&&s<l&&!i?(s+=o?.5:1,a.changeValue(s),e.preventDefault()):t===p.A.LEFT&&s>0&&!i||t===p.A.RIGHT&&s>0&&i?(s-=o?.5:1,a.changeValue(s),e.preventDefault()):t===p.A.LEFT&&s<l&&i&&(s+=o?.5:1,a.changeValue(s),e.preventDefault()),r&&r(e)},a.saveRef=function(e){return function(t){a.stars[e]=t}},a.saveRate=function(e){a.rate=e};var l=e.value;return void 0===l&&(l=e.defaultValue),a.stars={},a.state={value:l,focused:!1,cleanedValue:null},a}return(0,s.A)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"getStarDOM",value:function(e){return(0,u.A)(this.stars[e])}},{key:"getStarValue",value:function(e,t){var n=this.props,a=n.allowHalf,l="rtl"===n.direction,o=e+1;if(a){var r=this.getStarDOM(e),i=function(e){var t=function(e){var t,n,a=e.ownerDocument,l=a.body,o=a&&a.documentElement,r=e.getBoundingClientRect();return t=r.left,n=r.top,{left:t-=o.clientLeft||l.clientLeft||0,top:n-=o.clientTop||l.clientTop||0}}(e),n=e.ownerDocument,a=n.defaultView||n.parentWindow;return t.left+=function(e){var t=e.pageXOffset,n="scrollLeft";if("number"!==typeof t){var a=e.document;"number"!==typeof(t=a.documentElement[n])&&(t=a.body[n])}return t}(a),t.left}(r),s=r.clientWidth;(l&&t-i>s/2||!l&&t-i<s/2)&&(o-=.5)}return o}},{key:"focus",value:function(){this.props.disabled||this.rate.focus()}},{key:"blur",value:function(){this.props.disabled||this.rate.blur()}},{key:"changeValue",value:function(e){var t=this.props.onChange;"value"in this.props||this.setState({value:e}),t(e)}},{key:"render",value:function(){for(var e=this.props,t=e.count,n=e.allowHalf,a=e.style,o=e.id,i=e.prefixCls,s=e.disabled,c=e.className,d=e.character,u=e.characterRender,v=e.tabIndex,p=e.direction,m=this.state,x=m.value,A=m.hoverValue,g=m.focused,y=[],C=s?"".concat(i,"-disabled"):"",w=0;w<t;w+=1)y.push(l.createElement(h,{ref:this.saveRef(w),index:w,count:t,disabled:s,prefixCls:"".concat(i,"-star"),allowHalf:n,value:void 0===A?x:A,onClick:this.onClick,onHover:this.onHover,key:w,character:d,characterRender:u,focused:g}));var b=f()(i,C,c,(0,r.A)({},"".concat(i,"-rtl"),"rtl"===p));return l.createElement("ul",{className:b,style:a,id:o,onMouseLeave:s?null:this.onMouseLeave,tabIndex:s?-1:v,onFocus:s?null:this.onFocus,onBlur:s?null:this.onBlur,onKeyDown:s?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},y)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"value"in e&&void 0!==e.value?(0,o.A)((0,o.A)({},t),{},{value:e.value}):t}}]),n}(l.Component);x.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:m,character:"\u2605",onHoverChange:m,tabIndex:0,direction:"ltr"};const A=x;const g={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"};var y=n(25085),C=function(e,t){return l.createElement(y.A,(0,o.A)((0,o.A)({},e),{},{ref:t,icon:g}))};const w=l.forwardRef(C);var b=n(81541),k=n(12578),j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},V=l.forwardRef((function(e,t){var n=e.prefixCls,o=e.tooltips,r=j(e,["prefixCls","tooltips"]),i=l.useContext(k.QO),s=i.getPrefixCls,c=i.direction,d=s("rate",n);return l.createElement(A,(0,a.A)({ref:t,characterRender:function(e,t){var n=t.index;return o?l.createElement(b.A,{title:o[n]},e):e}},r,{prefixCls:d,direction:c}))}));V.displayName="Rate",V.defaultProps={character:l.createElement(w,null)};const _=V}}]);