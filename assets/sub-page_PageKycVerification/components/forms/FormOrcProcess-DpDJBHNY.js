import{n as m,a as o,F as l,j as u}from"../../../vendor_emotion-CZWcTM8j.js";import{k,r as w}from"../../../vendor_react-Bz04f6Pj.js";import{u as g}from"../../data-CsaiakhX.js";import{B as x}from"./BaseForm-O-QsYTG9.js";import{a as I,k as R}from"../../utils-C3KCcOvf.js";import{a as c,M as p}from"../../../enum-Cky0aGNf.js";import{T as P}from"../../../api_interface-Cwk1YCej.js";import{t as F,b as N}from"../../../core-B_o7srNM.js";import{a1 as O,Q as f}from"../../../features-tA-DxrQa.js";import{PATHS as v}from"../../../pagePaths-6FEed3-5.js";import{_ as L}from"./FormCompleteVerify-Pb9gvyik.js";import{o as T}from"../../../components-DTw2mVnC.js";import{v as z}from"../../../vendors-CS-3Ohps.js";function X(){const n=g(),h=I(),b=k(),d=h.watch("basic.idType"),S=w.useMemo(()=>{var s,i;const e=R[n.currentStepName.enum];if(e!=null&&e.requiredComponents)return o(l,{children:(s=e==null?void 0:e.requiredComponents)==null?void 0:s.map((r,a)=>o(r,{},`form-item-${a}`))});if(e!=null&&e.requiredComponentsSections)return o(l,{children:(i=e==null?void 0:e.requiredComponentsSections)==null?void 0:i.map((r,a)=>{const t=r.sectionTitle;return u(M,{"data-section-name":r.sectionName,children:[o("h2",{children:t}),r.components.map((C,y)=>o(C,{},`form-item-${y}`))]},`form-section-${a}`)})})},[n.currentStepName.enum]);return u(x,{actionProps:{memoActionNextButtonText(e){switch(e){case c.KycOcrSelectIdType:return"Start Now";default:return null}},async callbackActionNextButtonOnClick(){if(!d)return F("Please select an ID type",{level:"warn",keepSecond:3}),!1;const e=`${window.location.origin}${v.OCR_CALLBACK}`;switch(n.currentStepName.enum){case c.KycOcrSelectIdType:{const s=O(b.state),r=z().replace(/-/g,""),a=await P({bizId:r,idType:d,get completeCallbackURL(){const t=new URL(e);return t.searchParams.set("status",p.KycOcrComplete.toString()),t.searchParams.set("lastState",s),t.searchParams.set("bizId",r),t.href},get interruptCallbackURL(){const t=new URL(e);return t.searchParams.set("status",p.KycOcrInterrupt.toString()),t.searchParams.set("lastState",s),t.searchParams.set("bizId",r),t.href}});return a.success&&(window.location.href=a.data.redirectURL),!1}}return!0}},children:[S,n.currentStepName.enum===c.KycOrcInformationConfrim&&o(K,{})]})}const A=m.div``,B=m(T)`
  padding: 12rem;
  background: #fee0e7;
  border-radius: 8rem;
  display: flex;
  flex-direction: column;
  gap: 12rem;
  h3 {
    font-size: 14rem;
    line-height: 20rem;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 12rem;
    line-height: 18rem;
    font-weight: 400;
  }
`;function K(){const n=N(f.bind(f,L),"",[]);return o(A,{children:o(B,{children:n})})}const M=m.div`
  display: flex;
  flex-direction: column;
  position: relative;
  &::before {
    z-index: 0;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -10rem -10rem;
    border-radius: 8rem;
    pointer-events: none;
  }
  &[data-section-name='Basic'] {
    &::before {
      background: #d9f1ff;
    }
  }
  &[data-section-name='Address'] {
    &::before {
      background: #e5fffb;
    }
  }
  &[data-section-name='Income'] {
    &::before {
      background: #feffea;
    }
  }
  > div,
  h2 {
    z-index: 1;
  }
`;export{X as F};
