import{n as u,j as b,a as n,F as j}from"../../vendor_emotion-nEVkPYdj.js";import{P as v}from"../../api_interface-Cuputjbr.js";import{c as F,b as q}from"../../components-DVpIsGwS.js";import{u as G,t as H}from"../../core-z1JMQ5Ff.js";import{G as C,h as J,u as K,C as O}from"../../features-CK6znDLX.js";import{d as Q,r as i,C as k}from"../../vendor_react-DLFB9-kf.js";import{A as R}from"./Account/AccountSelecter-CzW_v3gI.js";import{A as U}from"./AmountCard-Dq2DDAxd.js";import{A as X}from"./AmountInput-BDx-4CDD.js";const Y={amount:"",accountID:""},dt=()=>{var D,L;const h=C(),m=((D=h.data)==null?void 0:D.withdrawable)??"0",I=((L=h.data)==null?void 0:L.balance)??"0",{control:w,reset:g,handleSubmit:p,formState:{isSubmitted:x,isDirty:A,isValid:y},setValue:N,trigger:c}=Q({defaultValues:Y,mode:"onChange"}),S=J(),[a,E]=i.useState();i.useEffect(()=>{c()},[a,c]);const t=i.useMemo(()=>{var e;return(e=S.data)==null?void 0:e.find(o=>o.name.toLocaleLowerCase()===(a==null?void 0:a.channelName.toLocaleLowerCase()))},[S.data,a==null?void 0:a.channelName]),P=K(),[M,T]=G(async e=>{(await v(e)).success&&(H(`Withdrawal request successful. The amount of ${e.amount} will be credited to your account after approval. Please stay tuned.`,{level:"success"}),g(),setTimeout(O,1e3),P())},[g]),d=i.useMemo(()=>Number((t==null?void 0:t.maxAmount)??0),[t==null?void 0:t.maxAmount]),W=i.useMemo(()=>Number(m),[m]),l=i.useMemo(()=>Math.max(Number((t==null?void 0:t.minAmount)??0),0),[t==null?void 0:t.minAmount]),B=i.useMemo(()=>!a,[a]),$=i.useMemo(()=>x?!A:!y,[A,x,y]),z=i.useCallback((e="0")=>{if(!a)return"Please choose an account before entering the amount.";if(e==="")return"Amount cannot be empty.";const o=Number(e);return o>d?`Exceeds the maximum limit (₱${d}) of ${t==null?void 0:t.name}`:o>W?"Exceeds the withdrawable balance.":o<l?`Less than the minimum limit (₱${l}) of ${t==null?void 0:t.name}`:!0},[d,l,a,t==null?void 0:t.name,W]);return b(j,{children:[n(F,{title:"Withdraw"}),b(at,{onSubmit:p(M),children:[n(k,{name:"accountID",defaultValue:"",control:w,rules:{required:"Please choose an account"},render:({field:{value:e,onChange:o},fieldState:{error:r}})=>n(R,{accountID:e,onChange:(s,V)=>{E(f=>{if((f==null?void 0:f.id)===s){o("");return}return o(s),V})},errorMessage:r==null?void 0:r.message})}),n(k,{name:"amount",control:w,rules:{validate:z},render:({field:{value:e,onBlur:o,onChange:r},fieldState:{error:s}})=>b(U,{disabled:!a,withdrawableBalance:m,totalBalance:I,fillAll:()=>{B||(N("amount",m),c("amount"))},children:[n(X,{value:e,onBlur:o,onChange:r,disabled:B}),(s==null?void 0:s.message)&&n(_,{children:s.message}),n(Z,{type:"submit"}),n(tt,{})]})}),n(q,{onClick:p(M),loading:T,size:"large",disabled:$,type:"submit",style:{marginTop:"10rem"},children:"Confirm"})]})]})},Z=u.input`
  display: none;
`,_=u.div`
  color: #f53f3f;
  font-size: 14rem;
  font-weight: 400;
  line-height: 20rem;
  padding-bottom: 12rem;
`,tt=u.div`
  background-color: rgba(0, 0, 0, 0.15);
  height: 1rem;
`,at=u.form`
  padding: 12rem;
  display: flex;
  flex-direction: column;
  gap: 15rem;
  width: 100%;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;export{dt as W};
