"use strict";exports.id=3642,exports.ids=[3642,1737],exports.modules={73642:(e,s,t)=>{t.r(s),t.d(s,{MembershipDetail:()=>p});var i=t(95344),l=t(9758),r=t(21335),a=t(92232),n=t(1781),d=t(89722),m=t(56067),c=t(97273),o=t(17329);let x=(0,c.default)(()=>Promise.all([t.e(6596),t.e(3029)]).then(t.bind(t,13029)).then(e=>({default:e.MembershipPayment})),{loadableGenerated:{modules:["/home/user/temiwa/components/membership/membership-detail.tsx -> ./membership-payment"]},loading:()=>i.jsx(o.W,{})}),p=({data:e,showPayButton:s=!0})=>{let{t}=(0,l.$G)(),c=(0,a.Z)(e=>e.user),[o,p,h]=(0,d.d)();return(0,i.jsxs)("div",{className:"pt-16 pb-5 sm:px-12 sm:pt-20 sm:pb-16 px-4",children:[(0,i.jsxs)("div",{className:"flex items-center justify-between mb-3",children:[i.jsx("strong",{className:"text-2xl font-semibold",children:e?.translation?.title}),i.jsx("strong",{className:"text-xl font-semibold",children:i.jsx(r.t,{number:e?.price})})]}),i.jsx("p",{className:"text-sm mb-3",children:e?.translation?.description}),(0,i.jsxs)("div",{className:"flex items-center gap-2.5 flex-wrap mb-3",children:[i.jsx("div",{className:"border border-gray-field rounded-full py-2 px-5",children:i.jsx("span",{className:"text-base text-gray-field",children:e?.time})}),i.jsx("div",{className:"border border-gray-field rounded-full py-2 px-5",children:e?.sessions===1?(0,i.jsxs)("span",{className:"text-base text-gray-field",children:[`${e?.sessions_count} / ${e?.remainderSessions}`," ",t("count")]}):i.jsx("span",{className:"text-base text-gray-field",children:t("unlimited")})})]}),i.jsx("p",{className:"text-sm ",children:e?.translation?.term}),(0,i.jsxs)("p",{className:"mt-3",children:[t("services"),":"," ",e?.services.map(e=>e.service?.translation?.title||"").join(", ")]}),c&&s&&i.jsx("div",{className:"mt-6",children:i.jsx(n.z,{fullWidth:!0,onClick:p,children:t("buy.now")})}),i.jsx(m.u,{isOpen:o,onClose:h,withCloseButton:!0,children:i.jsx(x,{membershipId:e?.id,totalPrice:e?.price,onPaymentSuccess:h})})]})}},21335:(e,s,t)=>{t.d(s,{t:()=>a});var i=t(95344),l=t(3729),r=t(66345);let a=({number:e,customCurrency:s})=>{let[t,a]=(0,l.useState)(!1),n=Number.isInteger(e)?e:e?.toFixed(2),{currency:d}=(0,r.r)(),m=s||d;return((0,l.useEffect)(()=>{a(!0)},[]),t)?m?.position==="after"?(0,i.jsxs)(i.Fragment,{children:[n||0," ",m?.symbol]}):(0,i.jsxs)(i.Fragment,{children:[m?.symbol," ",n||0]}):null}}};