"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[5344],{85344:(e,s,a)=>{a.r(s),a.d(s,{default:()=>V});var t=a(9950),n=(a(39418),a(54450)),i=a(59051),r=a.n(i),c=a(44414);const l=e=>{let{date:s}=e;const a=r()(s,"DD-MM-YYYY").isSame(r()(),"day");return(0,c.jsx)("div",{className:"chat-date","data-date":a?"Today":r()(s,"DD-MM-YYYY").format("D MMM")})};var d=a(6604),o=a(54826),m=a(31222),u=a(26678),g=a(69216),h=a(57811),p=a(91854),v=a(90815),f=a(74443),x=a(23849),j=a(63620),y=a(17706),M=a(83090),I=a(85923),N=(a(66209),a(39751)),w=(a(81938),a(82371));const A={getUser:e=>w.A.get("dashboard/user/chat-users",{params:e})},D={apiKey:j.Lq,authDomain:j.Q3,projectId:j.iJ,storageBucket:j.vn,messagingSenderId:j.VX,appId:j.sZ,measurementId:j.Dv},b=(0,v.Wp)(D),k=((0,f.dG)(),(0,x.aU)(b));(0,N.c7)(b);function S(e){try{const s=(0,x.rJ)(k,"chat"),a=(0,x.P)(s,(0,x._M)("ids","array-contains",e));return(0,x.aQ)(a,(s=>{const a=s.docs.map((e=>({chatId:e.id,...e.data()}))),t=a.map((s=>s.ids.filter((s=>s!==e))[0])).filter(Boolean);A.getUser({ids:[...new Set(t)]}).then((e=>{var s,t;y.M.dispatch((0,M.mZ)((s=e.data,(t=a).reverse(),s.map((e=>{const s=t.find((s=>s.ids.includes(e.id)));return s.user=e,s})))))}))}))}catch(s){console.error(s)}}async function C(e,s,a){if(!e||!s)return null;try{await(0,x.kd)((0,x.H9)(k,"chat",e,"message",s.id)),s.isLast&&await(0,x.mZ)((0,x.H9)(k,"chat",e),{lastMessage:a?a.message:"",time:(0,x.O5)()})}catch(t){console.error(t),I.oR.error(t)}}async function R(e,s,a){if(s){const t=(0,x.H9)(k,"chat",s,"message",e);return(0,x.aQ)(t,(e=>{const s=e.data();a({id:e.id,message:null===s||void 0===s?void 0:s.message,type:null===s||void 0===s?void 0:s.type})}))}}const _=function(e){let{replyMessage:s}=e;return(0,c.jsx)("div",{className:"reply-message",children:"image"!==s.type?(0,c.jsx)("p",{className:"reply-message__text",children:s.message}):(0,c.jsx)("img",{className:"reply-message__image",src:s.message,alt:s.message})})},E=e=>{let{data:s,onActionMessage:a,onDeleteMessage:i}=e;const{type:l,time:v,message:f,status:x="",read:j,replyDocId:y}=s,M=(0,p.d4)((e=>{var s,a;return null===(s=e.chat)||void 0===s||null===(a=s.currentChat)||void 0===a?void 0:a.chatId})),[I,N]=(0,t.useState)(null),w=(0,c.jsxs)(g.A,{onClick:e=>{let{key:s}=e;return"delete"===s?i():a(s)},children:[(0,c.jsx)(g.A.Item,{icon:(0,c.jsx)(o.w1Z,{}),children:"Reply"},"reply"),"image"!==l&&(0,c.jsx)(g.A.Item,{icon:(0,c.jsx)(m.pik,{}),children:"Edit"},"edit"),(0,c.jsx)(g.A.Item,{icon:(0,c.jsx)(u.hJ0,{}),danger:!0,children:"Delete"},"delete")]});return(0,t.useEffect)((()=>{if(y)return R(y,M,N)}),[]),(0,c.jsx)("div",{className:"admin-message-wrapper",children:(0,c.jsxs)("div",{className:"admin-message ".concat("image"===l&&"chat-image"),children:[(0,c.jsx)(h.A,{overlay:w,trigger:["contextMenu"],children:(0,c.jsxs)("div",{children:[I&&(0,c.jsx)(_,{replyMessage:I}),"image"===l?(0,c.jsx)(n.QB,{type:"image",model:{direction:"incoming",payload:{src:f,alt:"Image",width:"100%",height:"100%"}}}):(0,c.jsx)("div",{className:"text",children:f})]})}),(0,c.jsx)("div",{className:"time",children:r()(new Date(v)).format("HH:mm")}),(0,c.jsx)("span",{className:"double-check",children:j?(0,c.jsx)(d.k42,{size:16}):(0,c.jsx)(d.G8W,{size:16})})]})})},B=e=>{let{data:s,onActionMessage:a}=e;const{time:i,message:l,type:d,replyDocId:m}=s,u=(0,p.d4)((e=>{var s,a;return null===(s=e.chat)||void 0===s||null===(a=s.currentChat)||void 0===a?void 0:a.chatId})),[v,f]=(0,t.useState)(null),x=(0,c.jsx)(g.A,{onClick:e=>{let{key:s}=e;a(s)},children:(0,c.jsx)(g.A.Item,{icon:(0,c.jsx)(o.w1Z,{}),children:(0,c.jsx)("div",{className:"w-100",children:"Reply"})},"reply")});return(0,t.useEffect)((()=>{if(m)return R(m,u,f)}),[]),(0,c.jsx)("div",{className:"user-sms-wrapper",children:(0,c.jsxs)("div",{className:"user-message ".concat("image"===d&&"chat-image"),children:[(0,c.jsx)(h.A,{overlay:x,trigger:["contextMenu"],children:(0,c.jsxs)("div",{children:[v&&(0,c.jsx)(_,{replyMessage:v}),"image"===d?(0,c.jsx)(n.QB,{type:"image",model:{direction:"incoming",payload:{src:l,alt:"Image",width:"100%",height:"100%"}}}):(0,c.jsx)("div",{className:"text",children:l})]})}),(0,c.jsx)("div",{className:"time",children:r()(new Date(i)).format("HH:mm")})]})})};function H(e){let{groupMessages:s,messageEndRef:a,handleActionMessage:t,handleDelete:n}=e;return(0,c.jsxs)("div",{className:"chat-box",children:[s.map(((e,s)=>(0,c.jsxs)("div",{children:["Invalid date"!==e.date?(0,c.jsx)(l,{date:e.date}):"",(0,c.jsx)("div",{className:"sms-box",children:e.messages.map((e=>Boolean(e.sender)?(0,c.jsx)(B,{data:e,onActionMessage:s=>t(s,e)},e.id):(0,c.jsx)(E,{data:e,onActionMessage:s=>t(s,e),onDeleteMessage:()=>n(e)},e.id)))})]},s))),(0,c.jsx)("div",{ref:a})]})}var L=a(58938);Math.easeInOutQuad=function(e,s,a,t){return(e/=t/2)<1?a/2*e*e+s:-a/2*(--e*(e-2)-1)+s};var T=a(70030),O=a(76083),Z=a(55386),z=a(7974),Q=a(82706),Y=a(48538),J=a(64924),P=a(81446);const U=e=>{let{modal:s,url:a,setModal:n,setPercent:i=(()=>{}),file:r,handleOnSubmit:l}=e;const d=()=>n(!s),[o,m]=(0,t.useState)(!1);return(0,c.jsx)(Q.A,{visible:s,footer:!1,onOk:d,onCancel:d,children:(0,c.jsxs)("div",{className:"upload-form position-relative",children:[o&&(0,c.jsx)("div",{className:"position-absolute h-100 w-100 d-flex justify-content-center align-items-center bg-transparent",children:(0,c.jsx)(P.A,{})}),(0,c.jsx)("img",{src:a}),(0,c.jsxs)("div",{className:"footer-btns",children:[(0,c.jsx)(Y.A,{disabled:o,onClick:d,children:"Cancel"}),(0,c.jsx)(Y.A,{disabled:o,onClick:()=>{if(m(!0),!r)return I.oR.error("Please upload an image first!");let e=new FormData;e.append("image",r),e.append("type","users"),J.A.upload(e).then((e=>{l({type:"image",message:e.data.title})})).catch((e=>console.error(e))).finally((()=>{m(!1),n(!1)}))},children:"Send"})]})]})})};const F=function(e){let{actionMessage:s,cancelMessageAction:a}=e;return(0,c.jsxs)("div",{style:{top:"calc(100% - ".concat("image"===s.message.type?88:53,"px)")},className:"message-actions-wrapper",children:[(0,c.jsxs)("div",{className:"message-actions__content",children:[(0,c.jsx)("span",{className:"message-actions__type",children:s.actionType}),"image"===s.message.type?(0,c.jsx)("img",{className:"message-actions__image",alt:s.message.message,src:s.message.message}):(0,c.jsx)("p",{className:"message-actions__message",children:s.message.message})]}),(0,c.jsx)("button",{className:"message-actions__close-btn",onClick:a,children:(0,c.jsx)(d.LyW,{size:20})})]})};let W;function V(){var e,s,a,i;const{t:r}=(0,T.B)(),l=(0,t.useRef)(),d=(0,t.useRef)(),o=(0,p.wA)(),m=(0,t.useRef)(),{setIsModalVisible:u}=(0,t.useContext)(Z.o),[g,h]=(0,t.useState)(""),[v,f]=(0,t.useState)(""),[N,w]=(0,t.useState)(!1),A=(0,p.d4)((e=>e.auth.user.id)),{chats:D,currentChat:b,messagesLoading:R,chatInitialized:_,authUserId:E}=(0,p.d4)((e=>e.chat),p.bN),B=(0,p.d4)((e=>(0,L.VL)(e.chat.messages)),p.bN),[Q,Y]=(0,t.useState)(""),[J,P]=(0,t.useState)({actionType:null,message:null}),V=(0,t.useRef)();(0,t.useEffect)((()=>{l.current&&l.current.focus()}),[l,b]),(0,t.useEffect)((()=>{var e;if(_){if(A!==E){var s;null===(s=W)||void 0===s||s(),(0,p.vA)((()=>{o((0,M.wD)()),o((0,M.mZ)([])),o((0,M.FB)([])),o((0,M.Ly)(A))})),W=S(A)}}else null===(e=W)||void 0===e||e(),W=S(A),(0,p.vA)((()=>{o((0,M.Ly)(A)),o((0,M.J6)(!0))}))}),[A]);const q=()=>{const e=m.current.offsetTop;!function(e,s,a){var t=e.scrollTop,n=s-t,i=0,r=function(){i+=20;var s=Math.easeInOutQuad(i,t,n,a);e.scrollTop=s,i<a&&setTimeout(r,20)};r()}(document.querySelector(".message-list .scrollbar-container"),e-30,600)},G=async e=>{Y(""),"reply"===J.actionType&&(e.replyDocId=J.message.id),"edit"===J.actionType?await async function(e,s,a,t){if(!s||!e||!t||!a)return null;try{const e=(0,x.H9)(k,"chat",s,"message",t.message.id);t.message.isLast&&await(0,x.mZ)((0,x.H9)(k,"chat",s),{lastMessage:a.message,time:(0,x.O5)()}),await(0,x.mZ)(e,{message:a.message})}catch(n){I.oR.error(n.message),console.error(n)}}(A,b.chatId,e,J):(q(),await async function(e,s,a){if(!s||!e)return null;try{const t=(0,x.H9)(k,"chat",s);await(0,x.mZ)(t,{lastMessage:a.message,time:(0,x.O5)()});const n={read:!1,time:(new Date).toISOString(),senderId:e,...a};a.type&&(n.type=a.type),await(0,x.gS)((0,x.rJ)(k,"chat",s,"message"),n)}catch(t){I.oR.error(t.message),console.error(t)}}(A,b.chatId,e)),X()},K=e=>{V.current&&V.current(),(0,p.vA)((()=>{o((0,M.f7)(!0)),o((0,M.EW)(e))})),V.current=function(e,s){if(!e)return null;try{const a=(0,x.P)((0,x.rJ)(k,"chat",e,"message"),(0,x.My)("time"));return(0,x.aQ)(a,(async e=>{const a=[],t=(0,x.wP)(k);e.forEach((e=>{const n=e.ref,i=e.data();a.push({id:e.id,message:i.message,time:i.time,read:i.read,senderId:i.senderId,type:i.type,replyDocId:i.replyDocId,isLast:!1}),i.senderId===s||i.read||t.update(n,{read:!0})})),a.sort(((e,s)=>new Date(e.time)-new Date(s.time))),a[e.size-1]&&(a[e.size-1].isLast=!0),(0,p.vA)((()=>{y.M.dispatch((0,M.f7)(!1)),y.M.dispatch((0,M.FB)(a))})),await t.commit()}))}catch(a){console.error(a)}}(e.chatId,A),X()};const X=()=>{var e;P({actionType:null,message:null}),Q&&Y(""),null===(e=l.current)||void 0===e||e.focus()};return(0,c.jsxs)("div",{style:{height:"80vh"},children:[(0,c.jsx)("input",{type:"file",ref:d,onChange:function(e){if(j.SP.includes(e.target.files[0].type)){h(e.target.files[0]);const s=new FileReader;s.onload=()=>{2===s.readyState&&(f(s.result),w(!0))},null===s||void 0===s||s.readAsDataURL(e.target.files[0])}else I.oR.error("Supported only image formats!")},accept:"image/jpg, image/jpeg, image/png, image/svg+xml, image/svg",className:"d-none"}),(0,c.jsxs)(n.J3,{responsive:!0,className:"chat-container rounded",children:[(0,c.jsx)(n.Bx,{position:"left",scrollable:!1,className:"chat-sidebar",children:(0,c.jsx)(n.Ue,{children:D.filter((e=>void 0!==e.user.id)).map(((e,s)=>{var a,t;return(0,c.jsx)(n.sy,{onClick:()=>{K(e)},name:e.user.firstname+" "+(e.user.lastname||""),info:e.lastMessage,children:(0,c.jsx)(n.eu,{src:(0,z.A)(null===(a=e.user)||void 0===a?void 0:a.img),name:null===(t=e.user)||void 0===t?void 0:t.firstname})},s)}))})}),(0,c.jsxs)(n.cW,{className:"chat-container",children:[b?(0,c.jsxs)(n.hf,{className:"chat-header",children:[(0,c.jsx)(n.hf.Back,{}),(0,c.jsx)(n.eu,{src:(0,z.A)(null===b||void 0===b||null===(e=b.user)||void 0===e?void 0:e.img),name:null===b||void 0===b||null===(s=b.user)||void 0===s?void 0:s.firstname}),(0,c.jsx)(n.hf.Content,{userName:"".concat(null===b||void 0===b||null===(a=b.user)||void 0===a?void 0:a.firstname," ").concat((null===b||void 0===b||null===(i=b.user)||void 0===i?void 0:i.lastname)||"")})]}):"",(0,c.jsxs)(n.Mf,{loading:R,className:"message-list",children:[(0,c.jsx)(H,{groupMessages:B,messageEndRef:m,handleActionMessage:(e,s)=>{var a;P({actionType:e,message:s}),"edit"===e&&Y(s.message),null===(a=l.current)||void 0===a||a.focus()},handleDelete:e=>{var s,a,t,n;const i=(null===B||void 0===B||null===(s=B.at(-1))||void 0===s||null===(a=s.messages)||void 0===a?void 0:a.at(-2))||(null===B||void 0===B||null===(t=B.at(-2))||void 0===t||null===(n=t.messages)||void 0===n?void 0:n.at(-1));C(b.chatId,e,i).then()}}),J.message&&(0,c.jsx)(F,{actionMessage:J,cancelMessageAction:X})]}),B.length?(0,c.jsx)(n.Ep,{ref:l,value:Q,onChange:e=>{Y(e)},onSend:e=>G({message:e.replace(/\&nbsp;/g,"").replace(/<[^>]+>/g,"").trim()}),placeholder:"Message",className:"chat-input",onAttachClick:()=>{d.current.click()}}):null]})]}),(0,c.jsx)(U,{modal:N,url:v,setModal:w,file:g,handleOnSubmit:G}),(0,c.jsx)(O.A,{click:async()=>{var e;await async function(e){try{await(0,x.kd)((0,x.H9)(k,"chat",e))}catch(s){I.oR.error(s)}}(b.chatId),B.forEach((e=>{e.messages.forEach((e=>C(b.chatId,e.id)))})),null===(e=V.current)||void 0===e||e.call(V),(0,p.vA)((()=>{o((0,M.wD)()),o((0,M.FB)([]))})),u(!1),X()},text:r("delete.chat")})]})}}}]);