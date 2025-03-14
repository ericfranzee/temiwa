"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3727],{13727:function(e,t,s){s.r(t);var i=s(3827),r=s(36308),n=s(34734);s(64090);var o=s(45981),a=s(32635),l=s(9988),p=s(51237);t.default=e=>{let{type:t,typeId:s}=e,{t:u}=(0,a.$G)(),{data:h}=(0,l.a)(["groupRating",t,s],()=>p.p.getGroupRating(t,s));return(0,i.jsxs)("div",{className:"grid grid-cols-4 gap-4",children:[(0,i.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,i.jsxs)("div",{className:"border border-gray-border dark:border-gray-bold rounded-2xl flex items-center justify-center flex-col flex-1",children:[(0,i.jsx)("strong",{className:"text-3xl font-bold",children:(null==h?void 0:h.avg)||0}),(0,i.jsx)("span",{className:"text-xs font-medium text-center",children:u("total.rating")})]}),(0,i.jsxs)("div",{className:"border border-gray-border dark:border-gray-bold  rounded-2xl flex items-center gap-2 justify-center py-7 flex-wrap",children:[(0,i.jsxs)("div",{className:"flex items-center gap-0.5",children:[(0,i.jsx)("span",{className:"text-yellow",children:(0,i.jsx)(r.Z,{})}),(0,i.jsx)("span",{className:"text-sm",children:(null==h?void 0:h.count)||0})]}),(0,i.jsx)("span",{className:"text-xs font-medium",children:u("reviews")})]})]}),(0,i.jsx)("div",{className:"border border-gray-border dark:border-gray-bold  rounded-2xl col-span-3 p-5",children:(0,i.jsx)("div",{className:"flex flex-col gap-6",children:Array.from([,,,,,].keys()).map(e=>{let t=0;return h&&h.count&&0!==h.group[e+1]&&(t=Math.floor(h.group[e+1]/h.count*100)),(0,i.jsxs)("div",{className:"flex items-center gap-2.5",children:[(0,i.jsxs)("div",{className:"text-sm",children:[e+1," ",u("star")]}),(0,i.jsx)(o.Z,{value:t,className:"flex-1",max:100,disabled:!0,renderTrack:(e,t)=>{let{key:s,...r}=e;return(0,i.jsx)("div",{...r,className:(0,n.Z)(0===t.index&&t.value>0?"bg-yellow h-[14px] -translate-y-[5px] rounded-full ":"bg-gray-border dark:border-gray-bold h-1 rounded-r-full")},s)}}),(0,i.jsxs)("div",{className:"text-sm font-semibold w-4",children:[t,"%"]})]},e)})})})]})}},36308:function(e,t,s){var i=s(3827);s(64090),t.Z=e=>{let{size:t,...s}=e;return(0,i.jsxs)("svg",{width:t||"16",height:t||"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:[(0,i.jsx)("g",{clipPath:"url(#clip0_1_12182)",children:(0,i.jsx)("path",{d:"M8.00002 0.333359L10.8174 4.45536L15.6087 5.86136L12.5587 9.81469L12.702 14.8054L8.00002 13.1267L3.29802 14.8054L3.44136 9.81469L0.391357 5.86136L5.18269 4.45536L8.00002 0.333359ZM6.66669 8.00002H5.33336C5.33335 8.69573 5.60522 9.36389 6.09096 9.86194C6.5767 10.36 7.23785 10.6485 7.93334 10.6659C8.62882 10.6833 9.30357 10.4282 9.81361 9.95507C10.3236 9.48192 10.6286 8.82819 10.6634 8.13336L10.6667 8.00002H9.33336C9.33491 8.34601 9.2019 8.67906 8.96244 8.92879C8.72298 9.17853 8.39581 9.3254 8.05007 9.33839C7.70432 9.35137 7.36706 9.22944 7.10955 8.99836C6.85203 8.76729 6.69443 8.44516 6.67002 8.10002L6.66669 8.00002Z",fill:"currentColor"})}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_1_12182",children:(0,i.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]})}},51237:function(e,t,s){s.d(t,{p:function(){return n}});var i=s(31995),r=s(68466);let n={getAllReviews:(e,t,s)=>{let n="";return n="products"===e?"v1/rest/".concat(e,"/reviews/").concat(t):"v1/rest/".concat(e,"/").concat(t,"/reviews"),(0,i.Z)((0,r.d)(n,s))},checkCanReview:e=>(0,i.Z)((0,r.d)("v1/rest/added-review",e)),getRating:e=>(0,i.Z)((0,r.d)("v1/rest/review/options",e)),getGroupRating:(e,t)=>(0,i.Z)("v1/rest/".concat(e,"/").concat(t,"/reviews-group-rating")),createReview:(e,t,s)=>i.Z.post("v1/dashboard/user/".concat(e,"/review/").concat(t),{body:s})}},45981:function(e,t,s){function i(e,t){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}s.d(t,{Z:function(){return c}});var r=s(64090);function n(e){return e&&e.stopPropagation&&e.stopPropagation(),e&&e.preventDefault&&e.preventDefault(),!1}function o(e){return null==e?[]:Array.isArray(e)?e.slice():[e]}function a(e){return null!==e&&1===e.length?e[0]:e.slice()}function l(e){Object.keys(e).forEach(t=>{"undefined"!=typeof document&&document.addEventListener(t,e[t],!1)})}function p(e,t){let s;return u(((s=e)<=t.min&&(s=t.min),s>=t.max&&(s=t.max),s),t)}function u(e,t){let s=(e-t.min)%t.step,i=e-s;return 2*Math.abs(s)>=t.step&&(i+=s>0?t.step:-t.step),parseFloat(i.toFixed(5))}let h=function(e){function t(t){var s;(s=e.call(this,t)||this).onKeyUp=()=>{s.onEnd()},s.onMouseUp=()=>{s.onEnd(s.getMouseEventMap())},s.onTouchEnd=e=>{e.preventDefault(),s.onEnd(s.getTouchEventMap())},s.onBlur=()=>{s.setState({index:-1},s.onEnd(s.getKeyDownEventMap()))},s.onMouseMove=e=>{s.setState({pending:!0});let t=s.getMousePosition(e),i=s.getDiffPosition(t[0]),r=s.getValueFromPosition(i);s.move(r)},s.onTouchMove=e=>{if(e.touches.length>1)return;s.setState({pending:!0});let t=s.getTouchPosition(e);if(void 0===s.isScrolling){let e=t[0]-s.startPosition[0],i=t[1]-s.startPosition[1];s.isScrolling=Math.abs(i)>Math.abs(e)}if(s.isScrolling)return void s.setState({index:-1});let i=s.getDiffPosition(t[0]),r=s.getValueFromPosition(i);s.move(r)},s.onKeyDown=e=>{if(!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey))switch(s.setState({pending:!0}),e.key){case"ArrowLeft":case"ArrowDown":case"Left":case"Down":e.preventDefault(),s.moveDownByStep();break;case"ArrowRight":case"ArrowUp":case"Right":case"Up":e.preventDefault(),s.moveUpByStep();break;case"Home":e.preventDefault(),s.move(s.props.min);break;case"End":e.preventDefault(),s.move(s.props.max);break;case"PageDown":e.preventDefault(),s.moveDownByStep(s.props.pageFn(s.props.step));break;case"PageUp":e.preventDefault(),s.moveUpByStep(s.props.pageFn(s.props.step))}},s.onSliderMouseDown=e=>{if(!s.props.disabled&&2!==e.button){if(s.setState({pending:!0}),!s.props.snapDragDisabled){let t=s.getMousePosition(e);s.forceValueFromPosition(t[0],e=>{s.start(e,t[0]),l(s.getMouseEventMap())})}n(e)}},s.onSliderClick=e=>{if(!s.props.disabled&&s.props.onSliderClick&&!s.hasMoved){let t=s.getMousePosition(e),i=p(s.calcValue(s.calcOffsetFromPosition(t[0])),s.props);s.props.onSliderClick(i)}},s.createOnKeyDown=e=>t=>{s.props.disabled||(s.start(e),l(s.getKeyDownEventMap()),n(t))},s.createOnMouseDown=e=>t=>{if(s.props.disabled||2===t.button)return;s.setState({pending:!0});let i=s.getMousePosition(t);s.start(e,i[0]),l(s.getMouseEventMap()),n(t)},s.createOnTouchStart=e=>t=>{if(s.props.disabled||t.touches.length>1)return;s.setState({pending:!0});let i=s.getTouchPosition(t);s.startPosition=i,s.isScrolling=void 0,s.start(e,i[0]),l(s.getTouchEventMap()),t.stopPropagation&&t.stopPropagation()},s.handleResize=()=>{let e=window.setTimeout(()=>{s.pendingResizeTimeouts.shift(),s.resize()},0);s.pendingResizeTimeouts.push(e)},s.renderThumb=(e,t)=>{let i=s.props.thumbClassName+" "+s.props.thumbClassName+"-"+t+" "+(s.state.index===t?s.props.thumbActiveClassName:""),r={ref:e=>{s["thumb"+t]=e},key:s.props.thumbClassName+"-"+t,className:i,style:e,onMouseDown:s.createOnMouseDown(t),onTouchStart:s.createOnTouchStart(t),onFocus:s.createOnKeyDown(t),tabIndex:0,role:"slider","aria-orientation":s.props.orientation,"aria-valuenow":s.state.value[t],"aria-valuemin":s.props.min,"aria-valuemax":s.props.max,"aria-label":Array.isArray(s.props.ariaLabel)?s.props.ariaLabel[t]:s.props.ariaLabel,"aria-labelledby":Array.isArray(s.props.ariaLabelledby)?s.props.ariaLabelledby[t]:s.props.ariaLabelledby,"aria-disabled":s.props.disabled},n={index:t,value:a(s.state.value),valueNow:s.state.value[t]};return s.props.ariaValuetext&&(r["aria-valuetext"]="string"==typeof s.props.ariaValuetext?s.props.ariaValuetext:s.props.ariaValuetext(n)),s.props.renderThumb(r,n)},s.renderTrack=(e,t,i)=>{let r={key:s.props.trackClassName+"-"+e,className:s.props.trackClassName+" "+s.props.trackClassName+"-"+e,style:s.buildTrackStyle(t,s.state.upperBound-i)},n={index:e,value:a(s.state.value)};return s.props.renderTrack(r,n)};let i=o(t.value);i.length||(i=o(t.defaultValue)),s.pendingResizeTimeouts=[];let u=[];for(let e=0;e<i.length;e+=1)i[e]=p(i[e],t),u.push(e);return s.resizeObserver=null,s.resizeElementRef=r.createRef(),s.state={index:-1,upperBound:0,sliderLength:0,value:i,zIndices:u},s}t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e);var s=t.prototype;return s.componentDidMount=function(){this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.resizeElementRef.current),this.resize()},t.getDerivedStateFromProps=function(e,t){let s=o(e.value);return s.length?t.pending?null:{value:s.map(t=>p(t,e))}:null},s.componentDidUpdate=function(){0===this.state.upperBound&&this.resize()},s.componentWillUnmount=function(){this.clearPendingResizeTimeouts(),this.resizeObserver&&this.resizeObserver.disconnect()},s.onEnd=function(e){e&&function(e){Object.keys(e).forEach(t=>{"undefined"!=typeof document&&document.removeEventListener(t,e[t],!1)})}(e),this.hasMoved&&this.fireChangeEvent("onAfterChange"),this.setState({pending:!1}),this.hasMoved=!1},s.getValue=function(){return a(this.state.value)},s.getClosestIndex=function(e){let t=Number.MAX_VALUE,s=-1,{value:i}=this.state,r=i.length;for(let n=0;n<r;n+=1){let r=Math.abs(e-this.calcOffset(i[n]));r<t&&(t=r,s=n)}return s},s.getMousePosition=function(e){return[e["page"+this.axisKey()],e["page"+this.orthogonalAxisKey()]]},s.getTouchPosition=function(e){let t=e.touches[0];return[t["page"+this.axisKey()],t["page"+this.orthogonalAxisKey()]]},s.getKeyDownEventMap=function(){return{keydown:this.onKeyDown,keyup:this.onKeyUp,focusout:this.onBlur}},s.getMouseEventMap=function(){return{mousemove:this.onMouseMove,mouseup:this.onMouseUp}},s.getTouchEventMap=function(){return{touchmove:this.onTouchMove,touchend:this.onTouchEnd}},s.getValueFromPosition=function(e){let t=e/(this.state.sliderLength-this.state.thumbSize)*(this.props.max-this.props.min);return p(this.state.startValue+t,this.props)},s.getDiffPosition=function(e){let t=e-this.state.startPosition;return this.props.invert&&(t*=-1),t},s.resize=function(){let{slider:e,thumb0:t}=this;if(!e||!t)return;let s=this.sizeKey(),i=e.getBoundingClientRect(),r=e[s],n=i[this.posMaxKey()],o=i[this.posMinKey()],a=t.getBoundingClientRect()[s.replace("client","").toLowerCase()],l=r-a,p=Math.abs(n-o);this.state.upperBound===l&&this.state.sliderLength===p&&this.state.thumbSize===a||this.setState({upperBound:l,sliderLength:p,thumbSize:a})},s.calcOffset=function(e){let t=this.props.max-this.props.min;return 0===t?0:(e-this.props.min)/t*this.state.upperBound},s.calcValue=function(e){return e/this.state.upperBound*(this.props.max-this.props.min)+this.props.min},s.calcOffsetFromPosition=function(e){let{slider:t}=this,s=t.getBoundingClientRect(),i=s[this.posMaxKey()],r=s[this.posMinKey()],n=e-(window["page"+this.axisKey()+"Offset"]+(this.props.invert?i:r));return this.props.invert&&(n=this.state.sliderLength-n),n-=this.state.thumbSize/2},s.forceValueFromPosition=function(e,t){let s=this.calcOffsetFromPosition(e),i=this.getClosestIndex(s),r=p(this.calcValue(s),this.props),n=this.state.value.slice();n[i]=r;for(let e=0;e<n.length-1;e+=1)if(n[e+1]-n[e]<this.props.minDistance)return;this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0,this.setState({value:n},()=>{t(i),this.fireChangeEvent("onChange")})},s.clearPendingResizeTimeouts=function(){do clearTimeout(this.pendingResizeTimeouts.shift());while(this.pendingResizeTimeouts.length)},s.start=function(e,t){let s=this["thumb"+e];s&&s.focus();let{zIndices:i}=this.state;i.splice(i.indexOf(e),1),i.push(e),this.setState(s=>({startValue:s.value[e],startPosition:void 0!==t?t:s.startPosition,index:e,zIndices:i}))},s.moveUpByStep=function(e){void 0===e&&(e=this.props.step);let t=this.state.value[this.state.index],s=p(this.props.invert&&"horizontal"===this.props.orientation?t-e:t+e,this.props);this.move(Math.min(s,this.props.max))},s.moveDownByStep=function(e){void 0===e&&(e=this.props.step);let t=this.state.value[this.state.index],s=p(this.props.invert&&"horizontal"===this.props.orientation?t+e:t-e,this.props);this.move(Math.max(s,this.props.min))},s.move=function(e){let t=this.state.value.slice(),{index:s}=this.state,{length:i}=t,r=t[s];if(e===r)return;this.hasMoved||this.fireChangeEvent("onBeforeChange"),this.hasMoved=!0;let{pearling:n,max:o,min:a,minDistance:l}=this.props;if(!n){if(s>0){let i=t[s-1];e<i+l&&(e=i+l)}if(s<i-1){let i=t[s+1];e>i-l&&(e=i-l)}}t[s]=e,n&&i>1&&(e>r?(this.pushSucceeding(t,l,s),function(e,t,s,i){for(let r=0;r<e;r+=1){let n=i-r*s;t[e-1-r]>n&&(t[e-1-r]=n)}}(i,t,l,o)):e<r&&(this.pushPreceding(t,l,s),function(e,t,s,i){for(let r=0;r<e;r+=1){let e=i+r*s;t[r]<e&&(t[r]=e)}}(i,t,l,a))),this.setState({value:t},this.fireChangeEvent.bind(this,"onChange"))},s.pushSucceeding=function(e,t,s){let i,r;for(r=e[i=s]+t;null!==e[i+1]&&r>e[i+1];i+=1,r=e[i]+t)e[i+1]=u(r,this.props)},s.pushPreceding=function(e,t,s){for(let i=s,r=e[i]-t;null!==e[i-1]&&r<e[i-1];i-=1,r=e[i]-t)e[i-1]=u(r,this.props)},s.axisKey=function(){return"vertical"===this.props.orientation?"Y":"X"},s.orthogonalAxisKey=function(){return"vertical"===this.props.orientation?"X":"Y"},s.posMinKey=function(){return"vertical"===this.props.orientation?this.props.invert?"bottom":"top":this.props.invert?"right":"left"},s.posMaxKey=function(){return"vertical"===this.props.orientation?this.props.invert?"top":"bottom":this.props.invert?"left":"right"},s.sizeKey=function(){return"vertical"===this.props.orientation?"clientHeight":"clientWidth"},s.fireChangeEvent=function(e){this.props[e]&&this.props[e](a(this.state.value),this.state.index)},s.buildThumbStyle=function(e,t){let s={position:"absolute",touchAction:"none",willChange:this.state.index>=0?this.posMinKey():void 0,zIndex:this.state.zIndices.indexOf(t)+1};return s[this.posMinKey()]=e+"px",s},s.buildTrackStyle=function(e,t){let s={position:"absolute",willChange:this.state.index>=0?this.posMinKey()+","+this.posMaxKey():void 0};return s[this.posMinKey()]=e,s[this.posMaxKey()]=t,s},s.buildMarkStyle=function(e){var t;return(t={position:"absolute"})[this.posMinKey()]=e,t},s.renderThumbs=function(e){let{length:t}=e,s=[];for(let i=0;i<t;i+=1)s[i]=this.buildThumbStyle(e[i],i);let i=[];for(let e=0;e<t;e+=1)i[e]=this.renderThumb(s[e],e);return i},s.renderTracks=function(e){let t=[],s=e.length-1;t.push(this.renderTrack(0,0,e[0]));for(let i=0;i<s;i+=1)t.push(this.renderTrack(i+1,e[i],e[i+1]));return t.push(this.renderTrack(s+1,e[s],this.state.upperBound)),t},s.renderMarks=function(){let{marks:e}=this.props,t=this.props.max-this.props.min+1;return"boolean"==typeof e?e=Array.from({length:t}).map((e,t)=>t):"number"==typeof e&&(e=Array.from({length:t}).map((e,t)=>t).filter(t=>t%e==0)),e.map(parseFloat).sort((e,t)=>e-t).map(e=>{let t=this.calcOffset(e),s={key:e,className:this.props.markClassName,style:this.buildMarkStyle(t)};return this.props.renderMark(s)})},s.render=function(){let e=[],{value:t}=this.state,s=t.length;for(let i=0;i<s;i+=1)e[i]=this.calcOffset(t[i],i);let i=this.props.withTracks?this.renderTracks(e):null,n=this.renderThumbs(e),o=this.props.marks?this.renderMarks():null;return r.createElement("div",{ref:e=>{this.slider=e,this.resizeElementRef.current=e},style:{position:"relative"},className:this.props.className+(this.props.disabled?" disabled":""),onMouseDown:this.onSliderMouseDown,onClick:this.onSliderClick},i,n,o)},t}(r.Component);h.displayName="ReactSlider",h.defaultProps={min:0,max:100,step:1,pageFn:e=>10*e,minDistance:0,defaultValue:0,orientation:"horizontal",className:"slider",thumbClassName:"thumb",thumbActiveClassName:"active",trackClassName:"track",markClassName:"mark",withTracks:!0,pearling:!1,disabled:!1,snapDragDisabled:!1,invert:!1,marks:[],renderThumb:e=>r.createElement("div",e),renderTrack:e=>r.createElement("div",e),renderMark:e=>r.createElement("span",e)};var c=h}}]);