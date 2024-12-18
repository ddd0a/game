import{n as o,j as t,a as e}from"../../../vendor_emotion-CZWcTM8j.js";import{S as a}from"./BaseScreen-Bl68sDI-.js";import{_ as s}from"./source-D6xN8Rqo.js";import{B as c}from"../../../components-DTw2mVnC.js";import{u as m}from"../../data-CsaiakhX.js";import{b as f}from"../../../features-tA-DxrQa.js";const d=o(a)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 24rem;
`;function v(n){const{children:r,...l}=n;return t(d,{...l,children:[e(g,{src:s}),e(u,{}),e(F,{})]})}const g=o.img`
  width: 327rem;
  height: 327rem;
  position: absolute;
  top: 78rem;
  pointer-events: none;
`,h=o.div`
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
`;function u(){return t(h,{children:[e("h1",{children:"Your KYC Already Approved"}),e("p",{children:"Your KYC has been approved. You can now enjoy all the features available on our platform."})]})}const p=o.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 11rem;
`,i=o(c)`
  transition: all 0.3s;
  width: 100%;
  height: 100% !important;
  font-family: Gilroy;
  font-weight: 500;
  font-size: 16rem;
  line-height: 24rem;
`;function F(){const n=f(),r=m();return t(p,{children:[e(i,{style:{backgroundColorLeft:"#FF3568",backgroundColorRight:"#FF5CC9",color:"#FFFFFF",padding:"6rem 0"},onClick:()=>{n.close()},children:"Close"}),e(i,{frameType:"outline",style:{frameColorLeft:"#FF3568",frameColorRight:"#FF5CC9",backgroundColorLeft:"#FFFFFF",backgroundColorRight:"#FFFFFF",color:"#FF3568",padding:"6rem 0"},onClick:()=>{r.moveNext()},children:"Review KYC Details"})]})}export{v as S};
