(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6847],{66720:function(e,t,o){Promise.resolve().then(o.bind(o,70566))},70566:function(e,t,o){"use strict";o.r(t),o.d(t,{useCheckout:function(){return p}});var a=o(3827),r=o(64090),d=o(44774);let n={deliveryType:"delivery",deliveryDate:new Date(Date.now()),notes:{},shopNotes:{},coupons:{}},s=(0,r.createContext)({state:n,dispatch:()=>null});t.default=e=>{let{children:t}=e,[o,p]=(0,r.useReducer)(d.A,n),l=(0,r.useMemo)(()=>({state:o,dispatch:p}),[o]);return(0,a.jsx)(s.Provider,{value:l,children:t})};let p=()=>{let e=(0,r.useContext)(s);if(!e)throw Error("useCheckout has to be used within <CheckoutContext.Provider>");return e}},44774:function(e,t,o){"use strict";var a,r;o.d(t,{A:function(){return d},Y:function(){return a}}),(r=a||(a={})).UpdateDeliveryType="UPDATE_DELIVERY_TYPE",r.UpdateDeliveryPoint="UPDATE_DELIVERY_POINT",r.UpdatePaymentMethod="UPDATE_PAYMENT_METHOD",r.UpdateDeliverDate="UPDATE_DELIVERY_DATE",r.UpdateDeliveryAddress="UPDATE_DELIVERY_ADDRESS",r.ClearState="CLEAR_STATE",r.UpdateProductNote="UPDATE_PRODUCT_NOTE",r.UpdateShopNote="UPDATE_SHOP_NOTE",r.UpdateShopCoupon="UPDATE_SHOP_COUPON",r.DeleteShopCoupon="DELETE_SHOP_COUPON",r.UpdateTips="UPDATE_TIPS";let d=(e,t)=>{switch(t.type){case"UPDATE_DELIVERY_TYPE":return{...e,deliveryType:t.payload.type};case"UPDATE_DELIVERY_POINT":return{...e,deliveryPoint:t.payload.point};case"UPDATE_PAYMENT_METHOD":return{...e,paymentMethod:t.payload.paymentMethod};case"UPDATE_DELIVERY_DATE":return{...e,deliveryDate:t.payload.date};case"UPDATE_DELIVERY_ADDRESS":return{...e,deliveryAddress:t.payload.address,deliveryPrice:t.payload.deliveryPrice};case"UPDATE_PRODUCT_NOTE":return{...e,notes:{...e.notes,[t.payload.stockId]:t.payload.note}};case"UPDATE_SHOP_NOTE":return{...e,shopNotes:{...e.shopNotes,[t.payload.shopId]:t.payload.note}};case"UPDATE_SHOP_COUPON":return{...e,coupons:{...e.coupons,[t.payload.shopId]:t.payload.name}};case"DELETE_SHOP_COUPON":{let o={...e.coupons};return null==o||delete o[t.payload.shopId],{...e,coupons:o}}case"UPDATE_TIPS":return{...e,tips:t.payload.tips};case"CLEAR_STATE":return{deliveryType:"delivery",deliveryPoint:void 0,deliveryPrice:void 0,deliveryAddress:void 0,paymentMethod:void 0,deliveryDate:new Date(Date.now()),notes:t.payload.all?{}:e.notes,shopNotes:t.payload.all?{}:e.shopNotes,coupons:t.payload.all?{}:e.coupons};default:return e}}}},function(e){e.O(0,[2971,8069,1744],function(){return e(e.s=66720)}),_N_E=e.O()}]);