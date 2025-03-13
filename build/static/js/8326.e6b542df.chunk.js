"use strict";(self.webpackChunkuzmart=self.webpackChunkuzmart||[]).push([[8326],{48326:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var r=a(9950),l=a(59233),i=a(23263),d=a(87094),n=a(41988),t=a(99674),u=a(55902),m=a(25933),c=a(80737),j=a(48538),x=a(70030),A=a(62960),h=a(24455),p=a(91854),o=a(85923),_=a(74623),b=a(28429),q=a(44414);const w=[{title:"firebase",value:"firebase"},{title:"twilio",value:"twilio"}];function g(){const[e]=l.A.useForm(),{t:s}=(0,x.B)(),[a,g]=(0,r.useState)(!1),[y,k]=(0,r.useState)(null),N=(0,p.wA)(),f=(0,b.Zp)(),{activeMenu:I}=(0,p.d4)((e=>e.menu),p.bN),{smsGatewaysList:v}=(0,p.d4)((e=>e.sms),p.bN);return(0,q.jsx)(l.A,{form:e,layout:"vertical",onFinish:e=>{console.log("value",e),g(!0);const a={type:y,default:Number(e.default),payload:{type:void 0,default:void 0,...e}},r="settings/sms-payload";A.A.create(a).then((()=>{N((0,h.M)()),o.oR.success(s("successfully.updated")),N((0,_.EK)({...I,nextUrl:r})),f("/".concat(r))})).finally((()=>g(!1)))},children:(0,q.jsxs)(i.A,{title:s("add.sms.payload"),children:[(0,q.jsxs)(d.A,{gutter:12,children:[(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("select.type"),rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(t.A,{className:"w-100",onChange:e=>k(e),options:w.filter((e=>!v.some((s=>s.type===e.value))))})})}),"firebase"===y&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("android_api_key"),name:"android_api_key",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("api_key"),name:"api_key",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("app_id"),name:"app_id",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("auth_domain"),name:"auth_domain",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("ios_api_key"),name:"ios_api_key",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("measurement_id"),name:"measurement_id",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("message_sender_id"),name:"message_sender_id",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("project_id"),name:"project_id",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("server_key"),name:"server_key",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("storage_bucket"),name:"storage_bucket",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("vapid_key"),name:"vapid_key",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("default"),name:"default",valuePropName:"checked",children:(0,q.jsx)(m.A,{})})})]}),"twilio"===y&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("twilio_auth_token"),name:"twilio_auth_token",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{min:0,className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("twilio_account_id"),name:"twilio_account_id",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("twilio_number"),name:"twilio_number",rules:[{required:!0,message:s("required")}],children:(0,q.jsx)(u.A,{className:"w-100"})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:s("default"),name:"default",valuePropName:"checked",children:(0,q.jsx)(m.A,{})})})]})]}),(0,q.jsx)(c.A,{children:(0,q.jsx)(j.A,{type:"primary",htmlType:"submit",loading:a,children:s("submit")})})]})})}}}]);