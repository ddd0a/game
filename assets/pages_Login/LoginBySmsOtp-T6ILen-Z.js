import{n as r,a as n,j as s,F as v}from"../vendor_emotion-CZWcTM8j.js";import{z as O}from"../api_interface-Cwk1YCej.js";import{S as x,b as k}from"../components-DTw2mVnC.js";import{t as w,c as P}from"../core-B_o7srNM.js";import{e as B,s as F,B as T}from"../features-tA-DxrQa.js";import{L as C,d as I,b as _,C as j}from"../vendor_react-Bz04f6Pj.js";import{PATHS as m}from"../pagePaths-6FEed3-5.js";import{L as A}from"./component/LoginMain-D-qiZEMR.js";import{T as D}from"./component/TelInput-0mK27PtV.js";import{u as R}from"./rencent-CuuqYMn5.js";const X=()=>{const{loading:c,send:d,phoneNumber:e,result:i,reset:u,resend:G}=B("login"),{setRencent:f}=R(),{handleSubmit:p,control:g,formState:{isSubmitted:h,isDirty:S,isValid:b}}=I(),y=_();return e?n(x,{title:"Enter the code",subTitle:s(v,{children:[s("div",{children:["Please enter the ",i==null?void 0:i.codeLength,"-digit code sent to:"]}),s("b",{children:["+",e==null?void 0:e.countryCode," ",e==null?void 0:e.number]})]}),reason:"login",onSubmit:async l=>{const o=i==null?void 0:i.id;if(!o){console.error("sms otp id not exists");return}const a=await O({code:l,smsOtpID:o});if(a.success){y("/",{replace:!0}),w("Successfully logged in",{level:"success"}),await F(a.data),await P.exec("login"),u();return}}}):s(A,{title:"phone number",subTitle:"We'll send a verification code to your mobile number.",onSubmit:p(d),children:[n(j,{control:g,name:"number",rules:{required:"Please enter mobile phone number",validate:T},render:({field:{value:l,onChange:o,onBlur:a,disabled:L},fieldState:{error:t}})=>s(z,{children:[n(D,{value:l,onChange:o,onBlur:a,disabled:L,clearable:!0,error:!!(t!=null&&t.message),placeholder:"phone number",autoFocus:!0}),(t==null?void 0:t.message)&&n(M,{children:t.message})]})}),n(k,{type:"submit",loading:c,disabled:h?!b:!S,children:"Send one time pin"}),n(W,{children:n(E,{to:m.LOGIN_BY_PASSWORD,replace:!0,onClick:()=>f(m.LOGIN_BY_PASSWORD),children:"Login by password"})})]})},z=r.div``,M=r.div`
  color: #f53f3f;
  font-size: 12rem;
  line-height: 18rem;
  padding: 3rem 12rem;
`,W=r.div`
  padding-top: 15rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`,E=r(C)`
  color: #165dff;
  font-family: SF Pro;
  font-size: 14rem;
  font-weight: 400;
  line-height: 24rem;
  text-align: center;
`;export{X as L};
