import{n as r,j as s,a as t}from"../../vendor_emotion-CZWcTM8j.js";import{c as h,b as g,r as u}from"../../vendor_react-Bz04f6Pj.js";import{F as b,a as p,b as v,c as y,d as k,e as w,f as _,g as x,h as A,i as F}from"./source-BFqAsQdD.js";import{c as m,i as I,b as R,m as S,C as j,F as E}from"../../features-tA-DxrQa.js";import{PATHS as c}from"../../pagePaths-6FEed3-5.js";const Z=()=>{var n;const e=(n=m().commonVariable.profile)==null?void 0:n.data,i=h(I),a=R();return s(d,{children:[t(o,{icon:t(z,{}),title:"Username",describe:e==null?void 0:e.username,linkTo:e!=null&&e.usernameEditable?void 0:c.MY_USERNAME}),t(o,{icon:t(D,{}),title:"KYC",describe:t(B,{}),onClick:async()=>{await S(),await j(),i(!1),a.open("page_kyc_verification_manual",{state:{stepIndex:0}})}}),t(o,{icon:t(U,{}),title:"Login Password",describe:e!=null&&e.hasLoginPassword?"set":"unset",linkTo:c.MY_PASSWORD})]})},ee=()=>{const{data:e}=E();return s(d,{children:[t(o,{icon:t(Y,{}),title:"Phone",describe:e!=null&&e.hasPhoneNumber?s("span",{children:["+",e.phoneNumber.countryCode," ",e.phoneNumber.number]}):"unset",linkTo:e!=null&&e.hasPhoneNumber?void 0:c.MY_PHONE}),t(o,{icon:t(G,{}),title:"Email",describe:e!=null&&e.hasEmail?e.email:"unset",linkTo:e!=null&&e.hasEmail?void 0:c.MY_EMAIL}),t(o,{icon:t(K,{}),title:"Facebook",describe:"unavailable"}),t(o,{icon:t(O,{}),title:"Google",describe:"unavailable"})]})},te=()=>s(d,{children:[t(o,{icon:t(Q,{}),title:"FAQ",linkTo:c.FAQ}),t(o,{icon:t(V,{}),title:"About Us",linkTo:`${c.ABOUT_US}/introduce`})]}),d=r.div`
  background: #ffffff;
  box-shadow: 0px 12rem 32rem 0px #b2d5ff1f;
  border-radius: 12rem;
`,o=({icon:e,title:i,describe:a,onClick:n,linkTo:l})=>{const f=g();return!n&&l&&(n=()=>f(l)),s(M,{onClick:n,className:n?void 0:"unclickable",children:[e&&t(P,{children:e}),t(L,{children:i}),s(N,{children:[a&&t($,{children:a}),n&&t(T,{})]})]})},M=r.a`
  display: flex;
  height: 56rem;
  align-items: center;
  margin: 0 16rem;
  border-bottom: 0.5rem solid #e1e1e1;
  &.unclickable {
    cursor: default;
  }
  &:last-child {
    border-bottom: none;
  }
`,P=r.div`
  height: 32rem;
  width: 32rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`,L=r.div`
  font-size: 14rem;
  line-height: 20rem;
  font-weight: 400;
  color: #323232;
  flex: 1;
`,N=r.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 10rem;
  gap: 10rem;
`,$=r.div`
  font-size: 14rem;
  color: #646464;
`,T=r(b)`
  color: #646464;
`,z=r(p)`
  width: 15.5rem;
  height: 16.98rem;
  color: #323232;
`,D=r(v)`
  width: 15.06rem;
  height: 18.87rem;
  color: #323232;
`,U=r(y)`
  width: 14.96rem;
  height: 19.33rem;
  color: #323232;
`,Y=r(k)`
  width: 17.5rem;
  height: 17.5rem;
  color: #323232;
`,G=r(w)`
  width: 17.5rem;
  height: 17.5rem;
  color: #323232;
`,K=r(_)`
  width: 20rem;
  height: 20rem;
  color: #323232;
`,O=r(x)`
  width: 24rem;
  height: 24rem;
  color: #323232;
`,Q=r(A)`
  width: 17.01rem;
  height: 20.67rem;
  color: #323232;
`,V=r(F)`
  width: 16.95rem;
  height: 16.98rem;
  color: #323232;
`;function B(){const e=m(),i=u.useMemo(()=>e.commonVariable.kycStatus??"unset",[e.commonVariable.kycStatus]),a=u.useMemo(()=>{switch(i){case"unset":return"Apply Now";case"draft":return"Draft";case"pending":return"Pending";case"approved":return"Approved";case"rejected":return"Rejected";case"final_rejected":return"Frozen"}},[i]);return t(H,{"data-status":i,children:t("div",{className:"kyc_status",children:a})})}const H=r.div`
  --radius: 3rem;
  --padding: 10rem;
  position: relative;
  font-family: Gilroy;
  font-size: 12rem;
  font-weight: 600;
  color: #ffffff;
  display: inline-flex;
  flex-direction: row;
  height: 24rem;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius);
  overflow: hidden;
  div.kyc_level {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: baseline;
    align-items: center;
    background: #0059d5;
    border-radius: var(--radius) 0 0 var(--radius);
    padding: 0 var(--padding);
  }
  div.kyc_level_block {
    z-index: 1;
    margin-left: auto;
    height: 100%;
    display: flex;
    justify-content: baseline;
    align-items: center;
    padding: 0 var(--padding);
    border-radius: var(--radius);
    color: transparent;
  }
  div.kyc_status {
    z-index: 1;
    background: #868686;
    margin-left: auto;
    height: 100%;
    display: flex;
    justify-content: baseline;
    align-items: center;
    padding: 0 var(--padding);
    border-radius: var(--radius);
    color: #000000;
  }

  &[data-level='-1'] {
    div.kyc_level {
      background: transparent;
      color: transparent;
    }
  }
  &[data-level='1'] {
    div.kyc_level {
      background: #0059d5;
    }
  }
  &[data-level='9'] {
    div.kyc_level {
      background: #9c00d5;
    }
  }

  &[data-status='unset'] {
    div.kyc_status {
      background: #c7c7c7;
      color: #000000;
    }
  }
  &[data-status='pending'] {
    div.kyc_status {
      background: #aacfff;
      color: #000000;
    }
  }
  &[data-status='approved'] {
    div.kyc_status {
      background: #29b200;
      color: #ffffff;
    }
  }
  &[data-status='rejected'] {
    div.kyc_status {
      background: #ff1100;
      color: #ffffff;
    }
  }
  &[data-status='final_rejected'] {
    pointer-events: none;
    div.kyc_status {
      /* frozen color */
      background: #000000;
      color: #ffef0f;
    }
  }

  &[data-is-level-hidden='true'] {
    div.kyc_level_block {
      display: none;
      padding: 0;
    }
  }
`;export{Z as A,ee as L,te as a};
