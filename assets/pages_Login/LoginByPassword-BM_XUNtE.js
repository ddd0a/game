import{n as o,j as c,a as s}from"../vendor_emotion-nEVkPYdj.js";import{y as E}from"../api_interface-Cuputjbr.js";import{b as O}from"../components-DVpIsGwS.js";import{L as v,d as M,b as T,k as _,r as g,C as p}from"../vendor_react-DLFB9-kf.js";import{PATHS as h}from"../pagePaths-6FEed3-5.js";import{I as w}from"./component/Input-Dy7Mxytu.js";import{L as j}from"./component/LoginMain-BpO79DL3.js";import{u as I}from"./rencent-VpSkOHvm.js";import{c as N,t as C}from"../core-z1JMQ5Ff.js";import{s as H}from"../features-CK6znDLX.js";const K=()=>{const{handleSubmit:m,control:d,reset:f,formState:{isSubmitted:L,isSubmitting:P,isDirty:S,isValid:k}}=M(),a=T(),{state:t}=_(),u=g.useMemo(()=>m(async i=>{const n=await E(i);if(n.success){await H(n.data),f(),await N.exec("login"),t!=null&&t.from?a(t.from,{replace:!0}):window.history.length>1?a(-1):a("/",{replace:!0});return}throw new Error(n.errorMessage)}),[m,a,f,t==null?void 0:t.from]),x=g.useCallback(async()=>{try{await u(),C("Successfully logged in",{level:"success"})}catch(i){console.error("loginByPassword:Error",i)}},[u]),{setRencent:B}=I();return c(j,{title:"Hi Welcome Back!",subTitle:"Please log in with password.",onSubmit:x,children:[s(p,{control:d,name:"account",rules:{required:"Please enter login name"},render:({field:{value:i,onChange:n,onBlur:l,disabled:r},fieldState:{error:e}})=>c(y,{children:[s(w,{value:i,onChange:n,onBlur:l,disabled:r,clearable:!0,error:!!(e!=null&&e.message),placeholder:"Phone/Email/Account"}),(e==null?void 0:e.message)&&s(b,{children:e.message})]})}),s(p,{control:d,name:"password",rules:{required:"Please enter password"},render:({field:{value:i,onChange:n,onBlur:l,disabled:r},fieldState:{error:e}})=>c(y,{children:[s(w,{value:i,onChange:n,onBlur:l,disabled:r,clearable:!0,error:!!(e!=null&&e.message),placeholder:"password",type:"password"}),(e==null?void 0:e.message)&&s(b,{children:e.message})]})}),s(O,{type:"submit",loading:P,disabled:L?!k:!S,children:"Login"}),s(A,{children:s(F,{to:h.LOGIN_BY_PHONE_OTP,replace:!0,onClick:()=>B(h.LOGIN_BY_PHONE_OTP),children:"Login by SMS OTP"})})]})},y=o.div``,b=o.div`
  color: #f53f3f;
  font-size: 12rem;
  line-height: 18rem;
  padding: 3rem 12rem;
`,A=o.div`
  padding-top: 15rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */
`,F=o(v)`
  color: #165dff;
  font-family: SF Pro;
  font-size: 14rem;
  font-weight: 400;
  line-height: 24rem;
  text-align: center;
`;export{K as L};
