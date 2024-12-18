import{k as i,n as e,j as f,a as d}from"../../vendor_emotion-CZWcTM8j.js";import{u as s}from"../data-CsaiakhX.js";import{e as m}from"../../core-B_o7srNM.js";import{S as o}from"../../enum-Cky0aGNf.js";const l=i`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 20% 100%;
  }

`,c=e.div`
  &,
  * {
    box-sizing: border-box;
  }
  --base-padding: 24rem;
  font-family: Gilroy;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  background: linear-gradient(to bottom, #ffd6eb 0%, #ffffff 20%);
  /* background animation */
  /* animation-name: ${l};
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  animation-delay: 3s; */
  &[data-screen-name='${o.BasicVerifyForm}'] {
    background: linear-gradient(to left, #ffd6eb 0%, #ebf5ff 20%);
  }
  &[data-screen-name='${o.CompleteKycReminder}'] {
    background: transparent;
  }
  &[data-screen-name='${o.CompleteVerifyForm}'] {
    background: linear-gradient(to bottom, #ebf5ff 0%, #ebf5ff 100%),
      linear-gradient(to right, #ebf5ff 80%, #ffd6eb 100%);
  }
  &[data-screen-name='${o.KycOcrProcess}'] {
    background: linear-gradient(to bottom, #ebf5ff 0%, #ebf5ff 100%),
      linear-gradient(to right, #ebf5ff 80%, #ffd6eb 100%);
  }
`;function k(n){const{children:a,...t}=n,r=s();return f(c,{...t,id:"StageLayoutRoot",children:[d(b,{"data-is-dev":m.isDevMode,children:JSON.stringify(r.__debugInfo,null,2)}),a]})}const b=e.pre`
  position: absolute;
  left: 0;
  bottom: 0;
  word-wrap: normal;
  font-family: monospace;
  font-size: 8rem;
  pointer-events: none;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.6);
  opacity: 0.5;
  display: none;
  &[data-is-dev='true'] {
    display: flex;
  }
`;export{k as S};
