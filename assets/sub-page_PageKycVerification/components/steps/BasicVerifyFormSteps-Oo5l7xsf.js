import{n as s,j as t,a as i}from"../../../vendor_emotion-nEVkPYdj.js";import{e as a}from"../../../core-z1JMQ5Ff.js";import{u as c}from"../../data-BtPHYjuj.js";import{r,d,F as l}from"../../../vendor_react-DLFB9-kf.js";import{F as p}from"../forms/FormBasicVerify-DAblaDm6.js";import{P as f}from"../../../features-CK6znDLX.js";import{a as y}from"../../../enum-Cky0aGNf.js";const u=s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;function B(){const o=c(),e=f(),m=r.useMemo(()=>[o.commonCondition.isKycPending,o.commonCondition.isKycApproved,o.commonCondition.isKycFinallyRejected].some(Boolean),[o.commonCondition.isKycPending,o.commonCondition.isKycApproved,o.commonCondition.isKycFinallyRejected]),n=d({mode:"all",defaultValues:{...e.data??{}},disabled:m});return r.useEffect(()=>{n.reset(e.data)},[n,e.data]),t(u,{children:[a.isDevMode&&t("h2",{style:{position:"absolute",top:"0",right:"0",pointerEvents:"none",opacity:.4,zIndex:100},children:["Step: ",y[o.currentStep.name]]}),i(x,{children:i(l,{...n,children:i(p,{})})})]})}const x=s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;export{B};
