import{n as r,j as o,a as e}from"../../../vendor_emotion-nEVkPYdj.js";import{S as g}from"./BaseScreen-BxYAaLO0.js";import{r as s}from"../../../vendor_react-DLFB9-kf.js";import{c as y}from"../../../features-CK6znDLX.js";import{u as x}from"../../data-BtPHYjuj.js";import{a as n}from"../../../enum-Cky0aGNf.js";const S=r(g)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;function T(i){const{children:t,...c}=i;return o(S,{...c,children:[e(v,{children:e(j,{})}),e(z,{children:t})]})}const v=r.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 24rem;
  width: 100%;
  z-index: 10;
  backdrop-filter: blur(4rem);
  padding: 0 var(--base-padding);
`,w=r.div`
  margin-top: 16rem;
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
`;function j(){var d,m,f;const i=y(),t=x(),c=s.useMemo(()=>{switch(t.currentStepName.enum){case n.KycOcrVerifyProcessGuide:return"Get started";case n.KycOcrSelectIdType:return"ID Type";case n.KycOcrZoloz:return"Ocr verification";case n.KycOrcInformationConfrim:return"Confirm your information"}},[t.currentStepName.enum]),a=s.useMemo(()=>{switch(t.currentStepName.enum){case n.KycOcrSelectIdType:return"Select the type of ID you want to verify"}},[t.currentStepName.enum]),l=s.useMemo(()=>{var u,h,p;return((p=(h=(u=i.state.stateLatest.kyc)==null?void 0:u.data)==null?void 0:h.condition.issue)==null?void 0:p.message)??""},[(f=(m=(d=i.state.stateLatest.kyc)==null?void 0:d.data)==null?void 0:m.condition.issue)==null?void 0:f.message]);return o(w,{children:[o(b,{children:[e("h1",{children:c}),!!a&&e("h2",{children:a})]}),l&&o(C,{children:[e("h3",{children:"Rejected!"}),e("div",{children:l})]})]})}const b=r.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  > h1 {
    display: flex;
    font-weight: 600;
    font-size: 24rem;
    line-height: 36rem;
    text-align: center;
    margin: 0;
    align-items: center;
    justify-content: center;
  }
  > h2 {
    display: flex;
    font-weight: 400;
    font-size: 16rem;
    line-height: 20rem;
    text-align: center;
    margin: 0;
    color: #666666;
    align-items: center;
    justify-content: start;
  }
`,z=r.div`
  margin-top: 32rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`,C=r.div`
  padding: 6rem;
  background: #ffe8ed;
  border-radius: 8rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  > h3 {
    font-size: 16rem;
    line-height: 20rem;
    font-weight: 500;
    margin: 0;
    color: #d00000;
  }
  > div {
    font-size: 14rem;
    font-weight: 500;
    color: #d00000;
  }
`;export{T as S};
