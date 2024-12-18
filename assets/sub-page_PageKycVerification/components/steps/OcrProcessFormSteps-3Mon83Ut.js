import{n as m,j as c,a as t}from"../../../vendor_emotion-CZWcTM8j.js";import{e as l}from"../../../core-B_o7srNM.js";import{u as p}from"../../data-CsaiakhX.js";import{r,d as f,F as u}from"../../../vendor_react-Bz04f6Pj.js";import{P as y}from"../../../features-tA-DxrQa.js";import{F as x}from"../forms/FormOrcProcess-DpDJBHNY.js";import{a as F}from"../../../enum-Cky0aGNf.js";const C=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;function j(){const o=p(),e=y(),d=r.useMemo(()=>[o.commonCondition.isKycPending,o.commonCondition.isKycApproved,o.commonCondition.isKycFinallyRejected].some(Boolean),[o.commonCondition.isKycPending,o.commonCondition.isKycApproved,o.commonCondition.isKycFinallyRejected]),i=r.useMemo(()=>{var s,a;return{...e.data??{},basic:{...(s=e.data)==null?void 0:s.basic,gender:"un_know"},more:{...(a=e.data)==null?void 0:a.more,nationality:"PHL",placeOfBirth:"Manila",occupation:"Others",sourceOfIncome:"Salary / Wages"}}},[e]),n=f({mode:"all",defaultValues:i,disabled:d});return r.useEffect(()=>{n.reset(i)},[n]),c(C,{children:[l.isDevMode&&c("h2",{style:{position:"absolute",top:"0",right:"0",pointerEvents:"none",opacity:.4,zIndex:100},children:["Step: ",F[o.currentStep.name]]}),t(h,{children:t(u,{...n,children:t(x,{})})})]})}const h=m.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;export{j as O};
