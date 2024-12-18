import{n as s,j as E,a as o,F as U}from"../../vendor_emotion-nEVkPYdj.js";import{c as V,b as $}from"../../components-DVpIsGwS.js";import{m as l,u as k}from"../../core-z1JMQ5Ff.js";import{PATHS as w}from"../../pagePaths-6FEed3-5.js";import{b as C,u as R,r as p,d as W,C as u}from"../../vendor_react-DLFB9-kf.js";import{A as j}from"./AmountInputCard-DVjW0aTp.js";import{E as z}from"./ExchangeInput-C1oJr_vn.js";import{M as O}from"./MethodSelectCard-B4zLm9xC.js";import{P as _}from"./PromotionSelect-B1Yu7gHy.js";import{s as G}from"./state-CUKZznTS.js";import{u as H,g as v}from"../../features-CK6znDLX.js";import{M as J}from"../../api_interface-Cuputjbr.js";const K={channelName:"",amount:"",bonusPlan:void 0},pt=()=>{const f=C();H();const[h,b]=R(G);p.useEffect(()=>{h&&f("/wallet/deposit/result")},[h,f]);const{handleSubmit:A,control:d,watch:P,resetField:S,reset:N,formState:{isSubmitted:y,isDirty:T,isValid:B}}=W({defaultValues:K}),M=v(),g=P("channelName"),{currentChannel:i,amountValida:F,limitMin:L,limitMax:D}=p.useMemo(()=>{var c;const t=(c=M.data)==null?void 0:c.find(m=>m.name===g),a=(t==null?void 0:t.limits.WEB.minAmount)||0,e=(t==null?void 0:t.limits.WEB.maxAmount)||0;return{currentChannel:t,amountValida:m=>{const r=parseFloat(m.toString());if(isNaN(r))return"Please enter a valid amount";if(r<a)return`The amount cannot be less than ${l(a)}`;if(r>e)return`The amount cannot be greater than ${l(e)}`},limitMin:l(a),limitMax:l(e)}},[M.data,g]);p.useEffect(()=>{S("amount")},[i==null?void 0:i.category,S]);const[q,I]=k(async t=>{const{amount:a,bonusPlan:e,channelName:n}=t,c=new URL(window.location.href),m=await J({amount:a,channelName:n,bonusPlan:e,redirectUrl:`${c.origin}${w.DEPOSIT_RESULT}`});if(m.success){const{orderID:r,redirectUrl:x}=m.data;window.location.href=x,b({amount:a,channelName:n,bonusPlan:e,orderID:r,url:x}),f(w.DEPOSIT_RESULT)}},[N,b]);return E(U,{children:[o(V,{title:"Deposit"}),E(Q,{onSubmit:A(q),children:[o(u,{control:d,name:"channelName",rules:{required:"Method is required"},render:({field:{value:t,onChange:a},fieldState:{error:e}})=>o(X,{value:t,onChange:a,errorMessage:e==null?void 0:e.message})}),(i==null?void 0:i.category)!=="OFFLINE"&&o(u,{control:d,name:"amount",rules:{required:"Amount is required",validate:F},render:({field:{value:t,onChange:a,onBlur:e},fieldState:{error:n}})=>o(Y,{value:t==null?void 0:t.toString(),onChange:a,onBlur:e,errorMessage:n==null?void 0:n.message,placeholder:g?`The amount between ${L}-${D}`:void 0})}),(i==null?void 0:i.category)==="E_WALLET"&&o(u,{control:d,name:"channelName",rules:{required:"Exchange code is required"},render:({field:{value:t,onChange:a,onBlur:e},fieldState:{error:n}})=>o(Z,{value:t==null?void 0:t.toString(),onChange:a,onBlur:e,errorMessage:n==null?void 0:n.message})}),o(u,{control:d,name:"bonusPlan",render:({field:{value:t,onChange:a},fieldState:{error:e}})=>o(tt,{value:t==null?void 0:t.toString(),onChange:a,errorMessage:e==null?void 0:e.message})}),o(at,{}),o(et,{children:o($,{size:"large",type:"submit",loading:I,disabled:y?!B:!T,children:"Confirm"})})]})]})},Q=s.form`
  display: block;
  padding: 12rem;
`,X=s(O)`
  padding-top: 8rem;
`,Y=s(j)`
  padding-top: 12rem;
`,Z=s(z)`
  margin-top: 12rem;
`,tt=s(_)`
  margin-top: 12rem;
`,et=s.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 16rem 12rem;
  box-sizing: border-box;
  z-index: 99999;
  background: #ffffff;
  box-shadow: 0rem -4rem 12rem 0rem #0000001a;
`,at=s.div`
  height: 80rem;
`;export{pt as D};
