import{n as o,j as r,a as e}from"../../../vendor_emotion-nEVkPYdj.js";import{S as c}from"./BaseScreen-BxYAaLO0.js";import{_ as a}from"./source-Cdp6a2y-.js";import{B as l}from"../../../components-DVpIsGwS.js";import{r as m}from"../../../vendor_react-DLFB9-kf.js";import{k as u}from"../../../core-z1JMQ5Ff.js";import{b as s}from"../../../features-CK6znDLX.js";const f=o(c)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0rem 24rem;
`;function P(t){const{children:n,...i}=t;return r(f,{...i,children:[e(p,{src:a}),e(g,{}),e(w,{}),e(S,{})]})}const p=o.img`
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
`;function g(){return r(h,{children:[e("h1",{children:"Submit successfully"}),e("p",{children:"Thank you for verifying with us, please kindly wait up to 24 hours for us to process your request."})]})}const d=o.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40rem;
  gap: 11rem;
`,y=o(l)`
  transition: all 0.3s;
  width: 100%;
  height: 100% !important;
  font-family: Gilroy;
  font-weight: 500;
  font-size: 16rem;
  line-height: 24rem;
`;function w(){const t=s();return e(d,{children:e(y,{style:{backgroundColorLeft:"#FF3568",backgroundColorRight:"#FF5CC9",color:"#FFFFFF"},onClick:()=>{t.close()},children:"Go To Homepage"})})}const x=o.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 8rem;
  font-size: 12rem;
  line-height: 16rem;
  font-weight: 400;
  margin-top: 16rem;
  > span:first-of-type {
    opacity: 0.5;
  }
`,C=10;function S(){const t=s(),{secondsCountDown:n}=u({secondsEnd:C,callback:()=>{t.close()}}),i=m.useMemo(()=>`${n<=0?0:n}s`,[n]);return r(x,{children:[e("span",{children:"Automatically go to the home page at"}),e("span",{children:i})]})}export{P as S};
