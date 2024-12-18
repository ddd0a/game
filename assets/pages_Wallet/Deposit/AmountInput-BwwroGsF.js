import{n as e,j as n,a as r}from"../../vendor_emotion-nEVkPYdj.js";import{F as a}from"./source-CApi-DOZ.js";const x=({placeholder:o="Please enter the amount",value:i,onChange:t,...s})=>n(c,{children:[n(m,{children:[r(d,{children:"₱"}),n(p,{children:[r(f,{type:"number",value:i,onChange:l=>t==null?void 0:t(l.target.value),...s}),(i===void 0||i==="")&&r(h,{children:o})]})]}),i&&r("a",{onClick:()=>t==null?void 0:t(""),children:r(b,{})})]}),c=e.div`
  display: flex;
  align-items: center;
`,m=e.label`
  display: flex;
  align-items: center;
  flex: 1;
`,d=e.div`
  font-size: 24rem;
  color: #323232;
  padding-right: 12rem;
  transform: translateY(2rem);
`,p=e.div`
  flex: 1;
  position: relative;
`,f=e.input`
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  height: 36rem;
  line-height: 36rem;
  font-size: 24rem;
  font-weight: 500;
  color: #323232;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,h=e.div`
  color: #a0a0a0;
  font-size: 16rem;
  line-height: 20rem;
  position: absolute;
  bottom: 8rem;
  left: 6rem;
`,b=e(a)`
  height: 14rem;
  width: 14rem;
`;export{x as A};
