"use strict";exports.id=5710,exports.ids=[5710],exports.modules={65710:(t,e,s)=>{s.r(e),s.d(e,{default:()=>b});var r=s(95344),i=s(9758);s(3729);var a=s(84502),o=s(60708),l=s(96040),n=s(14373),u=s(32438),d=s(1475),c=s(8428),h=s(91451),p=s(1781);let f=a.object({password:a.string().required(),password_confirmation:a.string().nullable().oneOf([a.ref("password"),null])}),b=()=>{let t=(0,c.useRouter)(),{t:e}=(0,i.$G)(),{mutate:s,isLoading:a}=(0,n.D)({mutationFn:t=>u.W.updatePassword(t),onError:t=>{(0,d.vU)(t.message)}}),{register:b,handleSubmit:m,formState:{errors:x}}=(0,o.cI)({resolver:(0,l.X)(f)});return(0,r.jsxs)("div",{className:"flex flex-col gap-6  ",children:[r.jsx("h1",{className:"font-semibold text-[30px] mb-2 text-start",children:e("reset.password")}),(0,r.jsxs)("form",{id:"reset",onSubmit:m(r=>{s(r,{onSuccess:()=>{(0,d.Vp)(e("successfully.updated")),t.replace("/")}})}),children:[(0,r.jsxs)("div",{className:"flex flex-col gap-3 mb-8 w-full",children:[r.jsx(h.I,{fullWidth:!0,...b("password"),error:x.password?.message,label:e("password"),type:"password"}),r.jsx(h.I,{fullWidth:!0,...b("password_confirmation"),error:x.password_confirmation?.message,label:e("password.confirmation"),type:"password"})]}),r.jsx(p.z,{loading:a,fullWidth:!0,type:"submit",form:"reset",children:e("reset")})]})]})}},91451:(t,e,s)=>{s.d(e,{I:()=>n});var r=s(95344),i=s(42473),a=s(3729),o=s(9758),l=s(56086);let n=(0,a.forwardRef)(({fullWidth:t,label:e,type:s,className:n,error:u,rightIcon:d,status:c="default",autoComplete:h,placeholder:p,leftIcon:f,containerClassName:b,required:m,disabled:x,id:v,...y},g)=>{let[w,R]=(0,a.useState)(s||"text"),{t:j}=(0,o.$G)(),S=(0,a.useId)();return(0,r.jsxs)("div",{className:(0,i.Z)("relative flex flex-col items-start",t&&"w-full",b),children:[(0,r.jsxs)("div",{className:(0,i.Z)("relative",t&&"w-full"),children:[r.jsx("input",{ref:g,id:S,type:w,autoComplete:"off",placeholder:" ",disabled:x,...y,className:(0,i.Z)("block px-4 w-full text-sm  bg-transparent rounded-button border appearance-none focus:outline-none focus:ring-0  peer ",t&&"w-full",!!d&&"pr-8",!!f&&"pl-10",e?"pt-4 pb-[12px]":"py-[19px]","default"===c&&"border-gray-link focus-visible:border-primary","error"===c&&"border-badge-product focus-visible:border-red-700","success"===c&&"border-green-500 focus-visible:border-red-700",x&&"text-gray-field",n)}),"password"===s&&r.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-3 z-10",children:r.jsx(l.h,{rounded:!0,type:"button",onClick:()=>{"password"===w?R("text"):R("password")},children:"password"===w?r.jsx("i",{className:"ri-eye-line"}):r.jsx("i",{className:"ri-eye-close-line"})})}),!!f&&r.jsx("div",{className:"absolute inset-y-0 left-3 flex items-center pr-3 z-[4]",children:f}),!!d&&r.jsx("div",{className:"absolute inset-y-0 right-0 flex items-center pr-1.5 z-[4]",children:d}),(0,r.jsxs)("label",{htmlFor:S,className:(0,i.Z)("absolute text-sm text-gray-placeholder duration-300 transform -translate-y-3 scale-75 top-3.5 origin-[0] peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3.5",f?"left-10 rtl:right-10 rtl:left-auto":"left-4 rtl:right-0 rtl:left-auto",x&&"text-gray-field"),children:[e,m&&"*"]})]}),u&&r.jsx("p",{role:"alert",className:"text-red text-sm mt-1",children:j(u)})]})})},32438:(t,e,s)=>{s.d(e,{W:()=>a});var r=s(80992),i=s(11204);let a={profile:()=>(0,r.Z)("v1/dashboard/user/profile/show"),updateFirebaseToken:t=>r.Z.post("v1/dashboard/user/profile/firebase/token/update",{body:t}),update:t=>r.Z.put("v1/dashboard/user/profile/update",{body:t}),updatePassword:t=>r.Z.post("v1/dashboard/user/profile/password/update",{body:t}),updateNotificationSettings:t=>r.Z.post("v1/dashboard/user/update/notifications",{body:t}),getWalletHistory:t=>(0,r.Z)((0,i.d)("v1/dashboard/user/wallet/histories",t)),userList:t=>(0,r.Z)((0,i.d)("v1/dashboard/user/search-sending",t)),sendMoney:t=>r.Z.post("v1/dashboard/user/wallet/send",{body:t}),updateLanguage:t=>r.Z.put((0,i.d)("v1/dashboard/user/profile/lang/update",{lang:t})),updateCurrency:t=>r.Z.put((0,i.d)("v1/dashboard/user/profile/currency/update",{currency_id:t})),sendGiftCart:t=>r.Z.post("v1/dashboard/user/gift-carts/send",{body:t})}},11204:(t,e,s)=>{s.d(e,{d:()=>r});let r=(t,e)=>{let s=new URLSearchParams;return e&&Object.entries(e).forEach(([t,e])=>{null!=e&&(Array.isArray(e)?e.forEach((e,r)=>{"object"==typeof e?Object.entries(e).forEach(([e,i])=>{null!=i&&s.set(`${t}[${r}][${e}]`,String(i))}):s.set(`${t}[${r}]`,String(e))}):s.set(t,String(e)))}),`${t}${s.toString()?`?${s.toString()}`:""}`}},14373:(t,e,s)=>{s.d(e,{D:()=>h});var r=s(3729),i=s(20727),a=s(62818),o=s(77579),l=s(52936);class n extends l.l{constructor(t,e){super(),this.client=t,this.setOptions(e),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var e;let s=this.options;this.options=this.client.defaultMutationOptions(t),(0,i.VS)(s,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(e=this.currentMutation)||e.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;null==(t=this.currentMutation)||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();let e={listeners:!0};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.notify(e)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,e){return this.mutateOptions=e,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==t?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let t=this.currentMutation?this.currentMutation.state:(0,a.R)(),e={...t,isLoading:"loading"===t.status,isSuccess:"success"===t.status,isError:"error"===t.status,isIdle:"idle"===t.status,mutate:this.mutate,reset:this.reset};this.currentResult=e}notify(t){o.V.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var e,s,r,i,a,o,l,n;t.onSuccess?(null==(e=(s=this.mutateOptions).onSuccess)||e.call(s,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(r=(i=this.mutateOptions).onSettled)||r.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):t.onError&&(null==(a=(o=this.mutateOptions).onError)||a.call(o,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(l=(n=this.mutateOptions).onSettled)||l.call(n,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}t.listeners&&this.listeners.forEach(({listener:t})=>{t(this.currentResult)})})}}var u=s(49939),d=s(11494),c=s(67414);function h(t,e,s){let a=(0,i.lV)(t,e,s),l=(0,d.NL)({context:a.context}),[h]=r.useState(()=>new n(l,a));r.useEffect(()=>{h.setOptions(a)},[h,a]);let f=(0,u.$)(r.useCallback(t=>h.subscribe(o.V.batchCalls(t)),[h]),()=>h.getCurrentResult(),()=>h.getCurrentResult()),b=r.useCallback((t,e)=>{h.mutate(t,e).catch(p)},[h]);if(f.error&&(0,c.L)(h.options.useErrorBoundary,[f.error]))throw f.error;return{...f,mutate:b,mutateAsync:f.mutate}}function p(){}},49939:(t,e,s)=>{s.d(e,{$:()=>r});let r=s(8145).useSyncExternalStore},67414:(t,e,s)=>{s.d(e,{L:()=>r});function r(t,e){return"function"==typeof t?t(...e):!!t}}};