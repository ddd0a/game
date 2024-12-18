import{n as s,j as r,a as n}from"../../../vendor_emotion-nEVkPYdj.js";import{e as a}from"../../../core-z1JMQ5Ff.js";import{r as i,d as l,F as d}from"../../../vendor_react-DLFB9-kf.js";import{F as c}from"../forms/FormCompleteVerify-Zz_N4c1J.js";import{u as p}from"../../data-BtPHYjuj.js";import{P as f}from"../../../features-CK6znDLX.js";import{a as u}from"../../../enum-Cky0aGNf.js";const y=s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;function b(){const o=p(),e=f(),m=i.useMemo(()=>[o.commonCondition.isKycApproved,o.commonCondition.isKycFinallyRejected].some(Boolean),[o.commonCondition.isKycApproved,o.commonCondition.isKycFinallyRejected]),t=l({mode:"all",defaultValues:{...e.data},disabled:m});return i.useEffect(()=>{t.reset(e.data)},[t,e.data]),r(y,{children:[a.isDevMode&&r("h2",{style:{position:"absolute",top:"0",right:"0",pointerEvents:"none",opacity:.4,zIndex:100},children:["Step: ",u[o.currentStep.name]]}),n(x,{children:n(d,{...t,children:n(c,{})})})]})}const x=s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;export{b as C};
