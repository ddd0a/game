import{n,j as o,a as e}from"../../../vendor_emotion-CZWcTM8j.js";import{b as y,i as C,c as b}from"../../../features-tA-DxrQa.js";import{c as v,r as a}from"../../../vendor_react-Bz04f6Pj.js";import{u as w}from"../../data-CsaiakhX.js";import{B as f}from"../../../components-DTw2mVnC.js";import{_ as k}from"./source-BFY6szQu.js";function P(){const r=y(),p=v(C),h=w(),t=b(),[i,g]=a.useState(Date.now()),s=a.useMemo(()=>t.commonVariable.kycExpiredTimestamp.diff(i)<0,[t.commonVariable.kycExpiredTimestamp,i]),c=a.useMemo(()=>{if(s)return{hours:"00",minutes:"00",seconds:"00"};const l=`${t.commonVariable.kycExpiredTimestamp.diff(i,"hours")}`,m=t.commonVariable.kycExpiredTimestamp.diff(i,"minutes")%60,F=`${m<10?`0${m}`:m}`,d=t.commonVariable.kycExpiredTimestamp.diff(i,"seconds")%60,x=`${d<10?`0${d}`:d}`;return{hours:l,minutes:F,seconds:x}},[t.commonVariable.kycExpiredTimestamp,s,i]);return a.useEffect(()=>{const l=setInterval(()=>{g(Date.now())},1e3);return()=>clearInterval(l)},[]),o(R,{children:[e(E,{src:k}),o(S,{children:[e("h2",{children:"KYC Reminder"}),o("div",{children:[e("p",{children:"According to PAGCOR's latest policy, users must complete KYC verification and pass the review within 72 hours of registering on this platform. Failure to do so will result in account restrictions after 72 hours, which will remain in place until KYC verification is completed."}),e("p",{children:"If you don't complete KYC verification, your account will be restricted."})]})]}),o(D,{"data-is-expired":s,children:[e(u,{value:c.hours,label:"Hour"}),e(u,{value:c.minutes,label:"Minute"}),e(u,{value:c.seconds,label:"Second"})]}),s&&e("strong",{style:{color:"#ff0040",fontSize:"12rem",lineHeight:"20rem",width:"240rem",marginTop:"20rem"},children:"Time is up, please complete KYC verification as soon as possible"}),o(T,{children:[e(f,{style:{backgroundColorLeft:"#FF3568",backgroundColorRight:"#FF5CC9",color:"#FFFFFF"},onClick:()=>{h.moveNext()},children:"KYC Verify"}),e(f,{frameType:"outline",style:{frameColorLeft:"#FF3568",frameColorRight:"#FF5CC9",backgroundColorLeft:"#FFFFFF",backgroundColorRight:"#FFFFFF",color:"#FF3568"},onClick:()=>{p(!0),r.close()},children:"Do it later"})]})]})}const R=n.div`
  font-family: 'SF Pro Rounded';
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24rem;
  padding-top: 20%;
`,D=n.div`
  display: flex;
  flex-direction: row;
  gap: 11rem;
  margin-top: 20rem;
  &[data-is-expired='true'] {
    /* text red */
    > div {
      background: #ff3568;
      color: #ffffff;
    }
  }
`,V=n.div`
  width: 72rem;
  height: 80rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f2f3;
  border-radius: 12rem;
  padding: 4rem;
  padding-top: 14rem;
  > div {
    &:first-of-type {
      font-size: 32rem;
      font-weight: 600;
      line-height: 48rem;
    }
    &:nth-of-type(2) {
      font-size: 12rem;
      line-height: 16rem;
      font-weight: 400;
    }
  }
`;function u(r){return o(V,{children:[e("div",{children:r.value}),e("div",{children:r.label})]})}const E=n.img`
  width: 98rem;
  height: 98rem;
`,S=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24rem;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20rem;
    > p {
      margin: 0;
    }
  }
`,T=n.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  margin-top: auto;
  width: 100%;
`;export{P as R};
