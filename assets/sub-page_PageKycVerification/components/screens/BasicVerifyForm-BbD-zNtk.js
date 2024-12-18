import{n as t,j as c,a as r}from"../../../vendor_emotion-nEVkPYdj.js";import{S as d}from"./BaseScreen-BxYAaLO0.js";import{u as s}from"../../data-BtPHYjuj.js";import{r as a}from"../../../vendor_react-DLFB9-kf.js";import{a as o}from"../../../enum-Cky0aGNf.js";const m=t(d)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;function F(e){const{children:n,...i}=e;return c(m,{...i,children:[c(p,{children:[r(x,{}),r(I,{})]}),r(g,{children:n})]})}const p=t.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 24rem;
  width: 100%;
  z-index: 10;
  backdrop-filter: blur(4rem);
  padding: 0 var(--base-padding);
`,f=t.div`
  > h1 {
    font-weight: 500;
    font-size: 18rem;
    line-height: 20rem;
    text-align: center;
    margin: 0;
    height: 44rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,u=t.div`
  display: flex;
  gap: 12rem;
  flex-direction: row;
  flex-wrap: nowrap;
`,h=t.div`
  width: 100%;
  height: 4rem;
  transition: opacity 0.3s;
  background: #fb517b;
  opacity: 0.2;
  border-radius: 2rem;
  &[data-is-active='true'] {
    opacity: 1;
  }
`;function y(e){const n=s(),i=a.useMemo(()=>n.currentScreenStepIndex>=e.index,[n.currentScreenStepIndex,e.index]);return r(h,{"data-is-active":i})}function x(){const e=s();return c(f,{children:[r("h1",{children:"KYC Verify"}),r(u,{children:e.currentScreenSteps.map((i,l)=>r(y,{index:l},i.name))})]})}const g=t.div`
  margin-top: 32rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`,S=t.div`
  display: flex;
  flex-direction: column;
  > h2 {
    font-weight: 500;
    font-size: 22rem;
    line-height: 36rem;
    padding: 0;
    margin: 0;
  }
  > p {
    margin: 0;
    font-weight: 400;
    font-size: 14rem;
    line-height: 20rem;
  }
`;function I(){const e=s(),n=a.useMemo(()=>{switch(e.currentStepName.enum){case o.BasicVerifyFormSelectIdType:return"Select ID Type";case o.BasicVerifyFormFillInBasicInformation:return"Fill in Basic Information";case o.BasicVerifyFormUploadIdPhoto:return"Upload ID Photo"}},[e.currentStepName.enum]),i=a.useMemo(()=>{switch(e.currentStepName.enum){case o.BasicVerifyFormSelectIdType:return"Here is the description information Here is the description information.";case o.BasicVerifyFormFillInBasicInformation:return"We will keep your information confidential.";case o.BasicVerifyFormUploadIdPhoto:return"Upload your certified photo as required."}},[e.currentStepName.enum]);return c(S,{children:[r("h2",{children:n}),r("p",{children:i})]})}export{F as S};
