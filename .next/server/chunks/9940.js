"use strict";exports.id=9940,exports.ids=[9940],exports.modules={89940:(e,a,t)=>{t.r(a),t.d(a,{default:()=>w});var r=t(95344);t(3729);var s=t(9758),l=t(1781),c=t(11263),i=t(97273),d=t(11494),n=t(14373),u=t(56295),o=t(52138),m=t(89722),x=t(4058),p=t(1475),g=t(86741),y=t(66017),h=t(40219),f=t(8428),v=t(66345);let j=()=>{let e=(0,g.Z)(e=>e.updateList),a=(0,g.Z)(e=>e.deleteMemberData),{language:t}=(0,v.r)(),r=(0,y.Z)(e=>e.country),l=(0,y.Z)(e=>e.city),i=(0,g.Z)(e=>e.memberCartId),d=(0,g.Z)(e=>e.userCartUuid),n=(0,f.useRouter)(),{t:u}=(0,s.$G)(),o={region_id:r?.region_id,country_id:r?.id,city_id:l?.id,lang:t?.locale,user_cart_uuid:d};return(0,h.a)({queryKey:["cart",o],queryFn:()=>c.y.guestGet(Number(i),o),onSuccess:a=>{e(a.data?.user_carts?.find(e=>e.uuid===d)?.cartDetails.flatMap(e=>e.cartDetailProducts).map(e=>({stockId:e.stock.id,quantity:e.quantity,cartDetailId:e.id}))||[])},onError:()=>{e([]),a(),(0,p.vU)(u("you.kicked.from.group")),n.replace("/")},enabled:!!r,retry:!1,refetchOnMount:"always",refetchInterval:5e3})};var N=t(63383),b=t(70421);let _=(0,i.default)(()=>Promise.all([t.e(3306),t.e(4697)]).then(t.bind(t,14697)).then(e=>({default:e.Empty})),{loadableGenerated:{modules:["/home/user/temiwa/app/(store)/(booking)/(with-footer)/(simple)/cart/member-cart.tsx -> @/components/empty"]}}),w=()=>{let{data:e,error:a,isLoading:t}=j(),{t:i}=(0,s.$G)(),[y,h,f]=(0,m.d)(),v=(0,g.Z)(e=>e.memberCartId),w=(0,g.Z)(e=>e.userCartUuid),D=(0,d.NL)(),C=e?.data.user_carts.flatMap(e=>e.cartDetails.flatMap(e=>e.cartDetailProducts)).length,I=e?.data.user_carts.find(e=>e.uuid===w),Q=I?.cartDetails.flatMap(e=>e.cartDetailProducts.map(e=>e.id)),{mutate:k,isLoading:Z}=(0,n.D)({mutationFn:e=>c.y.deleteGuestProducts({cart_id:e.cartId,ids:e.ids}),onMutate:async()=>{await D.cancelQueries(["cart"],{exact:!1});let e=D.getQueryData(["cart"],{exact:!1});return D.setQueriesData({queryKey:["cart"],exact:!1},a=>a?{...a,data:{...a.data,user_carts:a.data.user_carts.map(e=>e.uuid===w?{...e,cartDetails:[]}:e)}}:e),{prevCart:e}},onError:(e,a,t)=>{D.setQueriesData({queryKey:["cart"],exact:!1},()=>t?.prevCart),(0,p.vU)(e.message)},onSettled:async()=>{f(),await D.invalidateQueries(["cart"],{exact:!1})}}),{mutate:q}=(0,n.D)({mutationFn:e=>c.y.statusChange(e.cartUuid,{cart_id:e.cartId}),onMutate:async e=>{await D.cancelQueries(["cart"],{exact:!1});let a=D.getQueryData(["cart"],{exact:!1});return D.setQueriesData({queryKey:["cart"],exact:!1},t=>t?{...t,data:{...t.data,user_carts:t.data.user_carts.map(a=>a.uuid===e.cartUuid?{...a,status:!a.status}:a)}}:a),{prevCart:a}},onError:(e,a,t)=>{D.setQueriesData({queryKey:["cart"],exact:!1},()=>t?.prevCart),(0,p.vU)(e.message)},onSettled:async()=>{await D.invalidateQueries(["cart"],{exact:!1})}});return t?r.jsx("section",{className:"xl:container px-4",children:r.jsx("div",{className:"grid grid-cols-7",children:(0,r.jsxs)("div",{className:"flex flex-col gap-7 col-span-5",children:[(0,r.jsxs)("div",{className:"flex gap-7 animate-pulse",children:[r.jsx("div",{className:"relative overflow-hidden lg:h-[320px] md:h-56 h-40 rounded-3xl aspect-[250/320] bg-gray-300"}),(0,r.jsxs)("div",{className:"flex-1 my-5",children:[r.jsx("div",{className:"h-[22px] rounded-full w-full bg-gray-300 line-clamp-1"}),r.jsx("div",{className:"h-4 mt-5 rounded-full bg-gray-300 w-4/5"}),r.jsx("div",{className:"h-4 mt-4 rounded-full bg-gray-300 w-3/5"})]})]}),(0,r.jsxs)("div",{className:"flex gap-7 animate-pulse",children:[r.jsx("div",{className:"relative overflow-hidden lg:h-[320px] md:h-56 h-40 rounded-3xl aspect-[250/320] bg-gray-300"}),(0,r.jsxs)("div",{className:"flex-1 my-5",children:[r.jsx("div",{className:"h-[22px] rounded-full w-full bg-gray-300 line-clamp-1"}),r.jsx("div",{className:"h-4 mt-5 rounded-full bg-gray-300 w-4/5"}),r.jsx("div",{className:"h-4 mt-4 rounded-full bg-gray-300 w-3/5"})]})]})]})})}):!C||a||0===C?(0,r.jsxs)("section",{className:"xl:container px-4 ",children:[r.jsx(N.x,{title:"order.detail"}),r.jsx(_,{animated:!1,text:"group.cart.is.empty",imagePath:"/img/empty_cart.png"})]}):(0,r.jsxs)("section",{className:"xl:container px-4  mb-4",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[r.jsx(N.x,{title:"order.detail"}),Q&&Q.length>0&&(0,r.jsxs)("button",{onClick:h,className:"flex items-center gap-2.5 text-red-600",children:[r.jsx(o.Z,{}),i("clear.all")]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-7 mt-7 gap-7 relative pb-24",children:[r.jsx("div",{className:"flex flex-col lg:col-span-5 col-span-7 gap-5 ",children:e?.data.user_carts?.map(a=>r.jsx(b.c,{ownerId:e?.data.owner_id,data:a},a.id))}),r.jsx("div",{className:"lg:col-span-2 col-span-7",children:(0,r.jsxs)("div",{className:"sticky top-2",children:[r.jsx(u.x,{totals:{total_price:e?.data.total_price}}),r.jsx(l.z,{color:I?.status?"primary":"black",fullWidth:!0,onClick:()=>{v&&w&&q({cartId:v,cartUuid:w})},children:i(I?.status?"done":"ready")})]})})]}),r.jsx(x.s,{text:"are.you.sure.want.to.clear.all.items.in.the.cart",onConfirm:()=>{v&&Q&&Q.length>0&&k({cartId:v,ids:Q})},onCancel:f,isOpen:y,loading:Z})]})}}};