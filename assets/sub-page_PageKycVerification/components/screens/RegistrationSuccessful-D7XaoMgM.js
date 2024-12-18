import{n as t,j as i,a as e}from"../../../vendor_emotion-CZWcTM8j.js";import{S as c}from"./BaseScreen-Bl68sDI-.js";import{_ as l}from"./source-D6xN8Rqo.js";import{B as a}from"../../../components-DTw2mVnC.js";import{u as m}from"../../data-CsaiakhX.js";import{b as f,i as d}from"../../../features-tA-DxrQa.js";import{c as g}from"../../../vendor_react-Bz04f6Pj.js";const h=t(c)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 24rem;
`;function A(r){const{children:n,...o}=r;return i(h,{...o,children:[e(u,{src:l}),e(F,{}),e(y,{})]})}const u=t.img`
  width: 327rem;
  height: 327rem;
  position: absolute;
  top: 78rem;
  pointer-events: none;
`,p=t.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Gilroy;
  margin-bottom: 56rem;
  margin-top: 190rem;
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
    font-size: 16rem;
    line-height: 24rem;
    font-weight: 400;
  }
`;function F(){return i(p,{children:[e("h1",{children:"Registration Successful"}),e("p",{children:"You have successfully registered. To start trading, please complete the KYC verification process."})]})}const C=t.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40rem;
  gap: 11rem;
`,s=t(a)`
  transition: all 0.3s;
  width: 100%;
  height: 100% !important;
  font-family: Gilroy;
  font-weight: 500;
  font-size: 16rem;
  line-height: 24rem;
`;function y(){const r=f(),n=g(d),o=m();return i(C,{children:[!o.commonCondition.isKycExpired&&e(s,{frameType:"outline",style:{frameColorLeft:"#FF3568",frameColorRight:"#FF5CC9",backgroundColorLeft:"#FFFFFF",backgroundColorRight:"#FFFFFF",color:"#FF3568"},onClick:()=>{n(!0),r.close()},children:"Do it later"}),e(s,{style:{backgroundColorLeft:"#FF3568",backgroundColorRight:"#FF5CC9",color:"#FFFFFF"},onClick:()=>{o.moveNext()},children:o.commonCondition.isKycExpired?"Go To KYC Verify":"KYC Verify"})]})}export{A as S};
