"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8184],{28184:function(e,t,n){n.r(t),n.d(t,{ProductStickyInfo:function(){return k}});var l=n(3827);n(64090);var r=n(34734),a=n(81658),i=n(59010),s=n(70577),d=n(11950),o=n(30849),c=n(99281),u=n(45943),m=n(32635),h=n(47907),g=n(97486),b=n(78826),f=n(99914),v=n(48882),p=n(19518),x=n(8792),y=n(61916),w=n(28817);let k=e=>{var t,n,k,j,C;let{data:E,selectedStock:I}=e,S=(0,y.Z)(e=>e.user),N=null===(t=(0,w.Z)(e=>e.list).find(e=>e.stockId===(null==I?void 0:I.id)))||void 0===t?void 0:t.cartDetailId,{handleAddToCart:_,handleIncrement:Z,handleDecrement:z,cartQuantity:T,isCounterLoading:q,handleBuyNow:H}=(0,i.j)({stockId:null==I?void 0:I.id,minQty:null==E?void 0:E.min_qty,maxQty:null==E?void 0:E.max_qty,productQty:null==I?void 0:I.quantity,image:null==I?void 0:null===(k=I.galleries)||void 0===k?void 0:null===(n=k[0])||void 0===n?void 0:n.path,cartDetailId:N}),{t:L}=(0,m.$G)(),{isLiked:M,handleLikeDisLike:P}=(0,g.U)("product",null==E?void 0:E.id),V=(0,h.useRouter)(),B=(0,b.Z)(e=>e.addOrRemove),F=(0,b.Z)(e=>e.ids).includes((null==E?void 0:E.id)||0),O=()=>{(null==E?void 0:E.id)&&B(E.id)};return(0,l.jsx)("div",{className:(0,r.Z)("fixed block top-0 md:bottom-auto w-full rounded-t-md md:rounded-t-none","z-10 bg-white dark:bg-darkBg border-b border-gray-border dark:border-gray-inputBorder bg-opacity-30 backdrop-blur-md dark:bg-opacity-20"),children:(0,l.jsx)("div",{className:"px-2 py-4 sm:py-2",children:(0,l.jsxs)("div",{className:"flex items-center gap-4 xl:container px-2 md:px-4 justify-between ",children:[(0,l.jsxs)("div",{className:"items-center gap-2 hidden sm:flex",children:[(0,l.jsx)(a.I,{src:(null==E?void 0:E.img)||"",alt:(null==E?void 0:null===(j=E.translation)||void 0===j?void 0:j.title)||"product",width:60,height:60,className:"max-h-[60px] w-auto"}),(0,l.jsx)("span",{className:"text-sm font-medium",children:null==E?void 0:null===(C=E.translation)||void 0===C?void 0:C.title})]}),(0,l.jsxs)("div",{className:"flex items-center gap-4 justify-between sm:justify-normal w-full sm:w-auto",children:[T&&T>0?(0,l.jsxs)("div",{className:"flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-normal",children:[(0,l.jsx)(u.z,{color:"primary",size:"small",as:x.default,href:"/cart",children:L("go.to.cart")}),(0,l.jsxs)("div",{className:"flex items-center gap-4",children:[(0,l.jsx)(s.h,{disabled:!!E&&!!S&&!N,onClick:()=>z(),size:"large",color:"black",children:(0,l.jsx)(d.Z,{})}),(0,l.jsx)("span",{className:"text-lg font-medium",children:(0,o.K)(T,null==E?void 0:E.interval)}),(0,l.jsx)(s.h,{onClick:()=>Z(),size:"large",color:"black",children:(0,l.jsx)(c.Z,{})})]})]}):(0,l.jsxs)("div",{className:"flex items-center gap-5 md:gap-2.5 w-full sm:w-auto",children:[(0,l.jsx)(u.z,{loading:q,fullWidth:!0,onClick:()=>{H(()=>V.push("/cart"))},color:"primary",size:"small",disabled:I&&E&&I.quantity<(null==E?void 0:E.min_qty)||!(null==I?void 0:I.quantity),children:L("buy.now")}),(0,l.jsx)(u.z,{disabled:q||I&&E&&I.quantity<(null==E?void 0:E.min_qty)||!(null==I?void 0:I.quantity),onClick:()=>_(),fullWidth:!0,size:"small",color:"black",children:L("add.to.cart")})]}),(0,l.jsxs)("div",{className:"items-center gap-2 hidden md:flex",children:[(0,l.jsx)(s.h,{onClick:()=>P(),color:"lightGray",size:"medium",children:M?(0,l.jsx)(f.Z,{size:24}):(0,l.jsx)(v.Z,{size:24})}),(0,l.jsx)(s.h,{onClick:()=>O(),color:"lightGray",size:"medium",children:F?(0,l.jsx)("span",{className:"text-primary",children:(0,l.jsx)(p.Z,{size:24})}):(0,l.jsx)(p.Z,{size:24})})]})]})]})})})}},11950:function(e,t,n){var l=n(3827);n(64090),t.Z=e=>{let{size:t,...n}=e;return(0,l.jsxs)("svg",{width:t||"24",height:t||"24",...n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("g",{clipPath:"url(#clip0_1_9041)",children:(0,l.jsx)("path",{d:"M5 11H19V13H5V11Z",fill:"currentColor"})}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_1_9041",children:(0,l.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]})}},99281:function(e,t,n){var l=n(3827);n(64090),t.Z=e=>{let{size:t,...n}=e;return(0,l.jsxs)("svg",{width:t||"24",height:t||"24",...n,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("g",{clipPath:"url(#clip0_1_10942)",children:(0,l.jsx)("path",{d:"M11 10.9999V4.99986H13V10.9999H19V12.9999H13V18.9999H11V12.9999H5V10.9999H11Z",fill:"currentColor"})}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0_1_10942",children:(0,l.jsx)("rect",{width:"24",height:"24",fill:"currentColor"})})})]})}},70577:function(e,t,n){n.d(t,{h:function(){return d}});var l=n(3827),r=n(34734),a=n(64090);let i={withoutPadding:"ring-offset-2",small:"p-1",medium:"p-2",large:"p-3",xlarge:"p-[18px]"},s={transparent:"bg-transparent disabled:text-gray-inputBorder",black:"bg-black text-white hover:brightness-95 disabled:bg-gray-placeholder disabled:brightness-100 dark:bg-white dark:text-dark dark:disabled:bg-gray-darkSegment dark:disabled:text-white",primary:"bg-primary text-white hover:brightness-95 disabled:bg-gray-placeholder disabled:brightness-100",white:"bg-white text-black hover:brightness-95 disabled:bg-gray-card disabled:brightness-100",gray:"bg-dark bg-opacity-60 backdrop-blur-lg",lightGray:"bg-gray-segment text-dark",blackOutlined:"border border-dark dark:border-white",grayOutlined:"border border-gray-link dark:border-white",transparentWithHover:"bg-transparent hover:bg-gray-layout disabled:cursor-not-allowed hover:disabled:bg-transparent dark:hover:bg-gray-bold disabled:text-gray-inputBorder"},d=(0,a.forwardRef)((e,t)=>{let{color:n="transparent",size:a="withoutPadding",rounded:d=!1,children:o,className:c,...u}=e;return(0,l.jsx)("button",{className:(0,r.Z)("focus-ring outline-none active:translate-y-[1px] aspect-square disabled:active:translate-y-0 ",d?"rounded-button":"rounded-[5px]",s[n],i[a],c),...u,ref:t,children:o})})},16603:function(e,t,n){n.r(t),n.d(t,{ImageWithFallBack:function(){return o}});var l=n(3827),r=n(20703),a=n(64090),i=n(91774);let s=e=>'\n<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n  <defs>\n    <linearGradient id="g">\n      <stop \n      stop-color="'.concat(e?"#383838":"#E2E2E2",'" offset="20%" />\n      <stop stop-color="').concat(e?"#A0A09C":"#F6F6F6",'" offset="50%" />\n<stop stop-color="').concat(e?"#383838":"#E2E2E2",'" offset="70%" />\n</linearGradient>\n</defs>\n      <rect width="100%" height="100%" fill="').concat(e?"#383838":"#E2E2E2",'" />\n      <rect id="r" width="100%" height="100%" fill="url(#g)" />\n      <animate xlink:href="#r" attributeName="x" from="-100%" to="100%" dur="1s" repeatCount="indefinite"  />\n</svg>'),d=e=>window.btoa(e),o=e=>{let{src:t,loader:n,...o}=e,[c,u]=(0,a.useState)(!1),{theme:m}=(0,i.F)();return(0,l.jsx)(r.default,{...o,loader:c?void 0:n,src:c?"/img/image-load-failed.png":t,placeholder:"data:image/svg+xml;base64,".concat(d(s("dark"===m))),onError:()=>{u(!0)}})}},81658:function(e,t,n){n.d(t,{I:function(){return l.ImageWithFallBack}});var l=n(16603)},28817:function(e,t,n){var l=n(22020),r=n(65249);let a=(0,l.Ue)()((0,r.tJ)(e=>({list:[],memberCartId:null,userCartUuid:null,addProduct:function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return e(e=>({list:[...e.list,{stockId:t,quantity:n,image:l}]}))},increment:function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e(e=>({list:e.list.map(e=>e.stockId===t?{stockId:e.stockId,quantity:e.quantity+n}:e)}))},decrement:function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return e(e=>({list:e.list.map(e=>e.stockId===t?{stockId:e.stockId,quantity:e.quantity-n}:e)}))},delete:t=>e(e=>({list:e.list.filter(e=>e.stockId!==t)})),updateCount:(t,n)=>e(e=>({list:e.list.map(e=>e.stockId===t?{...e,quantity:n}:e)})),clear:()=>e({list:[]}),updateList:t=>e({list:t}),updateMemberData:(t,n)=>e({memberCartId:t,userCartUuid:n}),deleteMemberData:()=>e({memberCartId:null,userCartUuid:null})}),{name:"cart"}));t.Z=a},91774:function(e,t,n){n.d(t,{F:function(){return d},f:function(){return o}});var l=n(64090);let r=["light","dark"],a="(prefers-color-scheme: dark)",i=(0,l.createContext)(void 0),s={setTheme:e=>{},themes:[]},d=()=>{var e;return null!==(e=(0,l.useContext)(i))&&void 0!==e?e:s},o=e=>(0,l.useContext)(i)?l.createElement(l.Fragment,null,e.children):l.createElement(u,e),c=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:s=!0,enableColorScheme:d=!0,storageKey:o="theme",themes:u=c,defaultTheme:f=s?"system":"light",attribute:v="data-theme",value:p,children:x,nonce:y}=e,[w,k]=(0,l.useState)(()=>h(o,f)),[j,C]=(0,l.useState)(()=>h(o)),E=p?Object.values(p):u,I=(0,l.useCallback)(e=>{let t=e;if(!t)return;"system"===e&&s&&(t=b());let l=p?p[t]:t,a=n?g():null,i=document.documentElement;if("class"===v?(i.classList.remove(...E),l&&i.classList.add(l)):l?i.setAttribute(v,l):i.removeAttribute(v),d){let e=r.includes(f)?f:null,n=r.includes(t)?t:e;i.style.colorScheme=n}null==a||a()},[]),S=(0,l.useCallback)(e=>{k(e);try{localStorage.setItem(o,e)}catch(e){}},[t]),N=(0,l.useCallback)(e=>{C(b(e)),"system"===w&&s&&!t&&I("system")},[w,t]);(0,l.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),(0,l.useEffect)(()=>{let e=e=>{e.key===o&&S(e.newValue||f)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[S]),(0,l.useEffect)(()=>{I(null!=t?t:w)},[t,w]);let _=(0,l.useMemo)(()=>({theme:w,setTheme:S,forcedTheme:t,resolvedTheme:"system"===w?j:w,themes:s?[...u,"system"]:u,systemTheme:s?j:void 0}),[w,S,t,j,s,u]);return l.createElement(i.Provider,{value:_},l.createElement(m,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:s,enableColorScheme:d,storageKey:o,themes:u,defaultTheme:f,attribute:v,value:p,children:x,attrs:E,nonce:y}),x)},m=(0,l.memo)(e=>{let{forcedTheme:t,storageKey:n,attribute:i,enableSystem:s,enableColorScheme:d,defaultTheme:o,value:c,attrs:u,nonce:m}=e,h="system"===o,g="class"===i?"var d=document.documentElement,c=d.classList;c.remove(".concat(u.map(e=>"'".concat(e,"'")).join(","),");"):"var d=document.documentElement,n='".concat(i,"',s='setAttribute';"),b=d?r.includes(o)&&o?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(o,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",f=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],l=c?c[e]:e,a=t?e+"|| ''":"'".concat(l,"'"),s="";return d&&n&&!t&&r.includes(e)&&(s+="d.style.colorScheme = '".concat(e,"';")),"class"===i?s+=t||l?"c.add(".concat(a,")"):"null":l&&(s+="d[s](n,".concat(a,")")),s},v=t?"!function(){".concat(g).concat(f(t),"}()"):s?"!function(){try{".concat(g,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(a,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(f("dark"),"}else{").concat(f("light"),"}}else if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(f(c?"x[e]":"e",!0),"}").concat(h?"":"else{"+f(o,!1,!1)+"}").concat(b,"}catch(e){}}()"):"!function(){try{".concat(g,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(c?"var x=".concat(JSON.stringify(c),";"):"").concat(f(c?"x[e]":"e",!0),"}else{").concat(f(o,!1,!1),";}").concat(b,"}catch(t){}}();");return l.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:v}})},()=>!0),h=(e,t)=>{let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},b=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")}}]);