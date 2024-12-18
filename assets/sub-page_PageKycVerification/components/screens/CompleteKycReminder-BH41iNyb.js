import{n as t,a as e,j as l}from"../../../vendor_emotion-nEVkPYdj.js";import{S as a}from"./BaseScreen-BxYAaLO0.js";import{F as c}from"./source-Cdp6a2y-.js";import{B as s}from"../../../components-DVpIsGwS.js";import{u as f}from"../../data-BtPHYjuj.js";import{b as d,i as h}from"../../../features-CK6znDLX.js";import{m,A as g}from"../../../vendor_framer_motion-C4By12OG.js";import{c as u}from"../../../vendor_react-DLFB9-kf.js";const p=t(m.create(a))`
  flex: 0;
  position: absolute;
  bottom: 0;
  background: linear-gradient(to left, #ffd6eb 0%, #ebf5ff 20%);
  border-radius: 12rem 12rem 0 0;
  padding: 20rem 24rem;
  padding-bottom: 32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12rem;
`;function z(r){const{children:n,...o}=r;return e(g,{children:l(p,{...o,children:[e(F,{}),e(y,{}),e(x,{})]})})}const F=t(c)`
  width: 72rem;
  height: 72rem;
`,C=t(m.div)`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Gilroy;
  gap: 20rem;
  > h1,
  > p {
    margin: 0;
  }
  > h1 {
    font-size: 18rem;
    line-height: 28rem;
    font-weight: 500;
  }
  > p {
    font-size: 12rem;
    line-height: 16rem;
    font-weight: 400;
  }
`;function y(){return e(C,{children:e("p",{children:"According to PAGCOR requirements, you need to complete your information before you can use the Filbet platform normally."})})}const b=t.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40rem;
  gap: 11rem;
`,i=t(s)`
  transition: all 0.3s;
  width: 100%;
  height: 100% !important;
  font-family: Gilroy;
  font-weight: 500;
  font-size: 16rem;
  line-height: 24rem;
`;function x(){const r=d(),n=u(h),o=f();return l(b,{children:[!o.commonCondition.isKycExpired&&e(i,{frameType:"outline",style:{frameColorLeft:"#FF3568",frameColorRight:"#FF5CC9",backgroundColorLeft:"#FFFFFF",backgroundColorRight:"#FFFFFF",color:"#FF3568"},onClick:()=>{n(!0),r.close()},children:"Do it later"}),e(i,{style:{backgroundColorLeft:"#FF3568",backgroundColorRight:"#FF5CC9",color:"#FFFFFF"},onClick:()=>{o.moveNext()},children:(o.commonCondition.isKycExpired,"Complete Now")})]})}export{z as S};
