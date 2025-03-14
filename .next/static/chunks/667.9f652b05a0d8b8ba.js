"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{70667:function(e,t,i){i.r(t),i.d(t,{BookingReviewCreate:function(){return v}});var o=i(3827),n=i(32635),l=i(64095),s=i(8186),r=i(11677),c=i(42776),a=i(98313),d=i(51237),u=i(29449);let v=e=>{var t;let{service:i,bookingId:v,onSuccess:m,bookingParentId:p}=e,{t:h}=(0,n.$G)(),{language:g}=(0,a.r)(),f=(0,l.NL)(),{mutate:y,isLoading:x}=(0,s.D)({mutationFn:e=>r.s.createReview(v,e),onSuccess:()=>{(0,c.Vp)(h("review.successfully.added")),f.invalidateQueries(["appointment",p,null==g?void 0:g.locale]),m&&m()},onError:e=>{(0,c.vU)(e.message)}}),{mutate:w}=(0,s.D)({mutationFn:e=>d.p.createReview("shops",null==i?void 0:i.shop_id,{...e,type:"shop"}),onSuccess:()=>{f.invalidateQueries(["reviewList",String(null==i?void 0:i.shop_id),"shops"]),f.invalidateQueries(["groupRating","shops",null==i?void 0:i.shop_id]),f.setQueryData(["canReview","shop",null==i?void 0:i.shop_id],e=>e?{...e,data:{ordered:!0,added_review:!0}}:{data:{ordered:!0,added_review:!0},message:"success",status:!0,timestamp:""})}});return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"md:text-head text-xl font-semibold mb-7",children:h("add.review")}),(0,o.jsxs)("strong",{className:"md:text-3xl text-2xl font-semibold",children:[h("rate.your.experience.at")," ",null==i?void 0:null===(t=i.translation)||void 0===t?void 0:t.title]}),(0,o.jsx)(u.$,{isLoading:x,onSubmit:e=>{y(e),w(e)}})]})}},29449:function(e,t,i){i.d(t,{$:function(){return f}});var o=i(3827),n=i(82670),l=i(28183),s=i(36308),r=i(43520),c=i(64090),a=i(32635),d=i(41991),u=i(87957),v=i(45943),m=i(20703),p=i(34734);let h={cleanliness:{icon:"/icons/clean.svg"},masters:{icon:"/icons/masters.svg"},location:{icon:"/icons/location.svg"},price:{icon:"/icons/price.svg"},interior:{icon:"/icons/interior.svg"},service:{icon:"/icons/quality.svg"},communication:{icon:"/icons/communication.svg"},equipment:{icon:"/icons/equipment.svg"}},g=d.object({comment:d.string().required(),rating:d.number().required()}),f=e=>{var t;let{onSubmit:i,isLoading:d,initialData:f}=e,{t:y}=(0,a.$G)(),[x,w]=(0,c.useState)(f?{cleanliness:{icon:"/icons/clean.svg",selected:f.cleanliness},masters:{icon:"/icons/masters.svg",selected:f.masters},location:{icon:"/icons/location.svg",selected:f.location},price:{icon:"/icons/price.svg",selected:f.price},interior:{icon:"/icons/interior.svg",selected:f.interior},service:{icon:"/icons/quality.svg",selected:f.service},communication:{icon:"/icons/communication.svg",selected:f.communication},equipment:{icon:"/icons/equipment.svg",selected:f.equipment}}:h),{setValue:_,formState:{errors:C},register:j,handleSubmit:b}=(0,n.cI)({resolver:(0,u.X)(g),defaultValues:{rating:(null==f?void 0:f.rating)||0,comment:null==f?void 0:f.comment}}),k=e=>{w(t=>({...t,[e]:{...t[e],selected:!t[e].selected}}))};return(0,o.jsxs)("form",{onSubmit:b(e=>{i({...e,cleanliness:x.cleanliness.selected,masters:x.masters.selected,location:x.location.selected,price:x.price.selected,interior:x.interior.selected,service:x.service.selected,communication:null==x?void 0:x.communication.selected,equipment:x.equipment.selected})}),children:[(0,o.jsx)("div",{className:"flex flex-col justify-center items-center w-full my-5",children:(0,o.jsx)(l.i,{onClick:e=>{_("rating",e)},emptyStyle:{display:"flex",gap:"15px"},fillStyle:{display:"flex",gap:"15px"},initialValue:(null==f?void 0:f.rating)||0,fillIcon:(0,o.jsx)("div",{className:"text-yellow",children:(0,o.jsx)(s.Z,{size:25})}),emptyIcon:(0,o.jsx)(s.Z,{size:25})})}),(0,o.jsx)("div",{className:"grid grid-cols-3 md:gap-5 gap-2 my-7",children:Object.entries(x).map(e=>{let[t,i]=e;return(0,o.jsxs)("button",{type:"button",onClick:()=>k(t),className:(0,p.Z)("rounded-button flex flex-col items-center gap-2.5 p-2.5 bg-gray-link hover:bg-gray-segment",i.selected&&"bg-yellow hover:bg-yellow"),children:[(0,o.jsx)(m.default,{src:i.icon,alt:t,width:40,height:40}),(0,o.jsx)("span",{className:"text-sm",children:y(t)})]},t)})}),(0,o.jsx)(r.K,{...j("comment"),placeholder:y("comment"),rows:3,error:null===(t=C.comment)||void 0===t?void 0:t.message}),(0,o.jsx)(v.z,{className:"mt-5",fullWidth:!0,loading:d,children:y("save")})]})}},36308:function(e,t,i){var o=i(3827);i(64090),t.Z=e=>{let{size:t,...i}=e;return(0,o.jsxs)("svg",{width:t||"16",height:t||"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...i,children:[(0,o.jsx)("g",{clipPath:"url(#clip0_1_12182)",children:(0,o.jsx)("path",{d:"M8.00002 0.333359L10.8174 4.45536L15.6087 5.86136L12.5587 9.81469L12.702 14.8054L8.00002 13.1267L3.29802 14.8054L3.44136 9.81469L0.391357 5.86136L5.18269 4.45536L8.00002 0.333359ZM6.66669 8.00002H5.33336C5.33335 8.69573 5.60522 9.36389 6.09096 9.86194C6.5767 10.36 7.23785 10.6485 7.93334 10.6659C8.62882 10.6833 9.30357 10.4282 9.81361 9.95507C10.3236 9.48192 10.6286 8.82819 10.6634 8.13336L10.6667 8.00002H9.33336C9.33491 8.34601 9.2019 8.67906 8.96244 8.92879C8.72298 9.17853 8.39581 9.3254 8.05007 9.33839C7.70432 9.35137 7.36706 9.22944 7.10955 8.99836C6.85203 8.76729 6.69443 8.44516 6.67002 8.10002L6.66669 8.00002Z",fill:"currentColor"})}),(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip0_1_12182",children:(0,o.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]})}},28183:function(e,t,i){var o=i(3827),n=i(64090),l=function(){return(l=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};function s(e,t,i){if(i||2==arguments.length)for(var o,n=0,l=t.length;n<l;n++)!o&&n in t||(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}function r(e){var t=e.size,i=void 0===t?25:t,n=e.SVGstrokeColor,s=e.SVGstorkeWidth,r=e.SVGclassName,c=e.SVGstyle;return o.jsx("svg",l({className:void 0===r?"star-svg":r,style:c,stroke:void 0===n?"currentColor":n,fill:"currentColor",strokeWidth:void 0===s?0:s,viewBox:"0 0 24 24",width:i,height:i,xmlns:"http://www.w3.org/2000/svg"},{children:o.jsx("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}))}function c(e,t){switch(t.type){case"PointerMove":return l(l({},e),{hoverValue:t.payload,hoverIndex:t.index});case"PointerLeave":return l(l({},e),{ratingValue:e.ratingValue,hoverIndex:0,hoverValue:null});case"MouseClick":return l(l({},e),{valueIndex:e.hoverIndex,ratingValue:t.payload});default:return e}}function a(){return window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||"undefined"!=typeof navigator&&navigator.maxTouchPoints>0}!function(e,t){void 0===t&&(t={});var i=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===i&&o.firstChild?o.insertBefore(n,o.firstChild):o.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".style-module_starRatingWrap__q-lJC{display:inline-block;touch-action:none}.style-module_simpleStarRating__nWUxf{display:inline-block;overflow:hidden;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap}.style-module_fillIcons__6---A{display:inline-block;overflow:hidden;position:absolute;top:0;white-space:nowrap}.style-module_emptyIcons__Bg-FZ{display:inline-block}.style-module_tooltip__tKc3i{background-color:#333;border-radius:5px;color:#fff;display:inline-block;padding:5px 15px;vertical-align:middle}"),t.i=function(e){var t,i,d=e.onClick,u=e.onPointerMove,v=e.onPointerEnter,m=e.onPointerLeave,p=e.initialValue,h=void 0===p?0:p,g=e.iconsCount,f=void 0===g?5:g,y=e.size,x=void 0===y?40:y,w=e.readonly,_=void 0!==w&&w,C=e.rtl,j=void 0!==C&&C,b=e.customIcons,k=void 0===b?[]:b,S=e.allowFraction,V=void 0!==S&&S,N=e.style,L=e.className,M=e.transition,I=e.allowHover,G=void 0===I||I,P=e.disableFillHover,q=void 0!==P&&P,R=e.fillIcon,A=void 0===R?null:R,W=e.fillColor,z=e.fillColorArray,E=e.fillStyle,T=e.fillClassName,B=e.emptyIcon,F=void 0===B?null:B,Z=e.emptyColor,D=e.emptyStyle,H=e.emptyClassName,O=e.allowTitleTag,Q=e.showTooltip,$=e.tooltipDefaultText,K=e.tooltipArray,U=void 0===K?[]:K,J=e.tooltipStyle,X=e.tooltipClassName,Y=e.SVGclassName,ee=void 0===Y?"star-svg":Y,et=e.titleSeparator,ei=e.SVGstyle,eo=e.SVGstorkeWidth,en=void 0===eo?0:eo,el=e.SVGstrokeColor,es=void 0===el?"currentColor":el,er=n.useReducer(c,{hoverIndex:0,valueIndex:0,ratingValue:h,hoverValue:null}),ec=er[0],ea=ec.ratingValue,ed=ec.hoverValue,eu=ec.hoverIndex,ev=ec.valueIndex,em=er[1];n.useEffect(function(){h&&em({type:"MouseClick",payload:0})},[h]);var ep=n.useMemo(function(){return V?2*f:f},[V,f]),eh=n.useMemo(function(){return h>ep?0:V||Math.floor(h)===h?Math.round(h/f*100):2*Math.ceil(h)*10},[V,h,f,ep]),eg=n.useMemo(function(){return(V?2*h-1:h-1)||0},[V,h]),ef=n.useCallback(function(e){return f%2!=0?e/2/10:e*f/100},[f]),ey=function(e){for(var t=e.clientX,i=e.currentTarget.children[0].getBoundingClientRect(),o=i.left,n=i.right,l=i.width,s=j?n-t:t-o,r=ep,c=Math.round(l/ep),a=0;a<=ep;a+=1)if(s<=c*a){r=0===a&&s<c?0:a;break}var d=r-1;r>0&&(em({type:"PointerMove",payload:100*r/ep,index:d}),u&&ed&&u(ef(ed),d,e))},ex=function(e){ed&&(em({type:"MouseClick",payload:ed}),d&&d(ef(ed),eu,e))},ew=n.useMemo(function(){if(G){if(q){var e=ea&&ea||eh;return ed&&ed>e?ed:e}return ed&&ed||ea&&ea||eh}return ea&&ea||eh},[G,q,ed,ea,eh]);n.useEffect(function(){U.length>ep&&console.error("tooltipArray Array length is bigger then Icons Count length.")},[U.length,ep]);var e_=n.useCallback(function(e){return ed&&e[eu]||ea&&e[ev]||h&&e[eg]},[ed,eu,ea,ev,h,eg]),eC=n.useMemo(function(){return ed&&ef(ed)||ea&&ef(ea)||h&&ef(eh)},[ed,ef,ea,h,eh]);return o.jsxs("span",l({className:"style-module_starRatingWrap__q-lJC",style:{direction:"".concat(j?"rtl":"ltr")}},{children:[o.jsxs("span",l({className:"".concat("style-module_simpleStarRating__nWUxf"," ").concat(void 0===L?"react-simple-star-rating":L),style:l({cursor:_?"":"pointer"},N),onPointerMove:_?void 0:ey,onPointerEnter:_?void 0:function(e){v&&v(e),a()&&ey(e)},onPointerLeave:_?void 0:function(e){a()&&ex(),em({type:"PointerLeave"}),m&&m(e)},onClick:_?void 0:ex,"aria-hidden":"true"},{children:[o.jsx("span",l({className:"".concat("style-module_emptyIcons__Bg-FZ"," ").concat(void 0===H?"empty-icons":H),style:l({color:void 0===Z?"#cccccc":Z},D)},{children:s([],Array(f),!0).map(function(e,t){var i;return o.jsx(n.Fragment,{children:(null===(i=k[t])||void 0===i?void 0:i.icon)||F||o.jsx(r,{SVGclassName:ee,SVGstyle:ei,SVGstorkeWidth:en,SVGstrokeColor:es,size:x})},t)})})),o.jsx("span",l({className:"".concat("style-module_fillIcons__6---A"," ").concat(void 0===T?"filled-icons":T),style:l(((t={})[j?"right":"left"]=0,t.color=e_(void 0===z?[]:z)||(void 0===W?"#ffbc0b":W),t.transition=void 0!==M&&M?"width .2s ease, color .2s ease":"",t.width="".concat(ew,"%"),t),E),title:void 0===O||O?"".concat(eC," ").concat(void 0===et?"out of":et," ").concat(f):void 0},{children:s([],Array(f),!0).map(function(e,t){var i;return o.jsx(n.Fragment,{children:(null===(i=k[t])||void 0===i?void 0:i.icon)||A||o.jsx(r,{SVGclassName:ee,SVGstyle:ei,SVGstorkeWidth:en,SVGstrokeColor:es,size:x})},t)})}))]})),void 0!==Q&&Q&&o.jsx("span",l({className:"".concat("style-module_tooltip__tKc3i"," ").concat(void 0===X?"react-simple-star-rating-tooltip":X),style:l(((i={})[j?"marginRight":"marginLeft"]=20,i),J)},{children:(U.length>0?e_(U):eC)||(void 0===$?"Your Rate":$)}))]}))}}}]);