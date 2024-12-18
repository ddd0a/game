import{n as r,j as o,a as e}from"../vendor_emotion-nEVkPYdj.js";import{b as l}from"../components-DVpIsGwS.js";import{m}from"../core-z1JMQ5Ff.js";import{G as f,L as p}from"../features-CK6znDLX.js";import{u as h}from"../src_ts_file-OdrKWGew.js";import{PATHS as s}from"../pagePaths-6FEed3-5.js";import{b as g}from"../vendor_react-DLFB9-kf.js";const W=()=>{var a;const n=g(),d=f(),i=h().isAccessFromGLife,t=p();return o(w,{children:[o(B,{children:[e(b,{children:"Current Balance"}),e(v,{children:m((a=d.data)==null?void 0:a.balance)})]}),o(u,{children:[e(c,{children:e(l,{fill:"outline",size:"middle",onClick:()=>{i?t():n(s.WITHDRAW)},children:"Withdraw"})}),e(c,{children:e(l,{size:"middle",onClick:()=>{i?t():n(s.DEPOSIT)},children:"Deposit"})})]})]})},u=r.div`
  background-color: #ffffff;
  display: flex;
  padding: 14rem;
  flex-wrap: wrap;
  gap: 7rem;
`,c=r.div`
  flex: 1 1 calc(50% - 3.5rem);
  min-width: 30rem;
`,b=r.div`
  line-height: 24rem;
  font-size: 16rem;
  color: rgba(255, 255, 255, 0.8);
`,v=r.div`
  font-size: 40rem;
  margin-top: 17rem;
  color: #ffffff;
  font-weight: 500;
  &::before {
    content: '₱';
    margin-right: 5rem;
    font-weight: normal;
  }
`,B=r.div`
  height: 124rem;
  padding: 12rem;
  box-sizing: border-box;
  background-color: #1093ff;
  position: relative;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    top: 80rem;
    right: -40rem;
    width: 250rem;
    height: 80rem;
    transform: rotate(-25deg);
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.2) 50%
    );
    pointer-events: none;
  }
`,w=r.div`
  border-radius: 8rem;
  overflow: hidden;
`;export{W as B};
