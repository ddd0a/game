import{n as a,j as d,a as e}from"../../../vendor_emotion-nEVkPYdj.js";import{b as j}from"../../../components-DVpIsGwS.js";import{t as E}from"../../../core-z1JMQ5Ff.js";import{u as T,F as U,P as z,h as L}from"../../../features-CK6znDLX.js";import{I as M}from"../../../vendor_antd-kEHdUJyS.js";import{m as O,d as R,r as w,C as l}from"../../../vendor_react-DLFB9-kf.js";import{g as V,a as W}from"./data-Qx4mSnEk.js";import{O as D}from"../../../api_interface-Cuputjbr.js";const se=()=>{var N,y;const{channelName:n}=O(),x=T(),{data:s,reload:A}=U(),{data:p,reload:S}=z(),f=(p==null?void 0:p.condition.status)==="approved",{reset:g,handleSubmit:k,control:m,formState:{isSubmitted:F,errors:i,isDirty:C,isValid:I}}=R({}),h=L();w.useEffect(()=>{let r=s==null?void 0:s.realName;r||(r={firstName:"",middleName:"",lastName:""}),g({realName:r,channelName:n,account:""})},[n,s,g]);const{name:q,iconUrl:B,bgColor:P}=w.useMemo(()=>{if(h.data){for(const r of h.data)if(r.name===n)return{name:r.displayName,iconUrl:V(n,r.icon),bgColor:W(n)}}return{}},[h.data,n]);return d("div",{children:[d(H,{style:{backgroundColor:P},children:[e(K,{}),e(Z,{src:B})]}),d($,{children:[d(J,{children:["Add ",q," account"]}),e(Q,{children:"Please enter your account information"}),d(G,{onSubmit:k(async r=>{(await D(r)).success&&(E("Account added successfully."),setTimeout(()=>{A(),S()},1e3),x())}),children:[d(X,{children:[e(c,{className:"item",children:e(l,{name:"realName.firstName",control:m,rules:{required:"Firstname is required"},render:({field:{onBlur:r,onChange:t,value:o}})=>e(u,{placeholder:"first name",clearable:!0,value:o,onBlur:r,onChange:t,disabled:f})})}),e(v,{}),e(c,{className:"item",children:e(l,{name:"realName.middleName",control:m,render:({field:{onBlur:r,onChange:t,value:o}})=>e(u,{placeholder:"middle name",clearable:!0,value:o,onBlur:r,onChange:t,disabled:f})})}),e(v,{}),e(c,{className:"item",children:e(l,{name:"realName.lastName",control:m,rules:{required:"Lastname is required"},render:({field:{onBlur:r,onChange:t,value:o}})=>e(u,{placeholder:"last name",clearable:!0,value:o,onBlur:r,onChange:t,disabled:f})})})]}),((N=i.realName)==null?void 0:N.firstName)&&e(b,{children:i.realName.firstName.message}),((y=i.realName)==null?void 0:y.lastName)&&e(b,{children:i.realName.lastName.message}),e(c,{children:e(l,{name:"account",defaultValue:"",control:m,rules:{required:"Account is required"},render:({field:{onBlur:r,onChange:t,value:o}})=>e(u,{type:"number",placeholder:"your account",clearable:!0,value:o,onBlur:r,onChange:t})})}),i.account&&e(b,{children:i.account.message}),e(Y,{children:e(j,{type:"submit",disabled:F?!I:!C,children:"Submit"})})]})]})]})},G=a.form`
  display: block;
`,H=a.div`
  text-align: center;
  padding-top: 20rem;
  padding-bottom: 78rem;
`,K=a.div``,$=a.div`
  background-color: #ffffff;
  margin: 12rem;
  padding: 18rem;
  border-radius: 12rem;
  margin-top: -30rem;
`,J=a.div`
  font-size: 14rem;
  line-height: 20rem;
  font-weight: 510;
  color: 323232;
`,Q=a.div`
  font-size: 12rem;
  line-height: 16rem;
  font-weight: 400;
  color: #646464;
  padding-top: 8rem;
`,c=a.label`
  display: block;
  padding-top: 24rem;
  border-bottom: 1px solid #1f000426;
  padding-bottom: 8rem;
`,b=a.div`
  margin-top: 10rem;
  color: red;
`,X=a.div`
  display: flex;
  align-items: end;
  .item {
    flex: 1;
  }
`,v=a.div`
  height: 2rem;
  width: 6rem;
  background-color: #d7d7d7;
  margin: 15rem 5rem;
`,u=a(M)`
  --font-size: 16px;
  --placeholder-color: #c9cdd4;
  --color: #000000;
  padding-left: 5rem;
  padding-right: 5rem;
  /* For Chrome, Safari, Edge, and Opera */
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,Y=a.div`
  padding-top: 44rem;
`,Z=a.img`
  height: 36rem;
  max-width: 100%;
  width: auto;
  object-fit: contain;
`;export{se as A};
