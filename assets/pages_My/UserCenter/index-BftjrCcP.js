import{n,j as t,a as r}from"../../vendor_emotion-nEVkPYdj.js";import{E as f}from"../../api_interface-Cuputjbr.js";import{T as g}from"../../components-DVpIsGwS.js";import{c as p,t as b}from"../../core-z1JMQ5Ff.js";import{G as h,H as a}from"../../features-CK6znDLX.js";import{PATHS as i}from"../../pagePaths-6FEed3-5.js";import{D as k}from"../../vendor_antd-kEHdUJyS.js";import{r as d,b as m}from"../../vendor_react-DLFB9-kf.js";import{V as y}from"../Vip/index-D2jO2_bM.js";import{H as v}from"./Header-BTBNSVDB.js";import{A as B,L as x,a as C}from"./Menus-D8vZT5Oh.js";import{w as S,j as w}from"./source-Dx4dWocQ.js";const $=()=>{const{data:o}=h();d.useEffect(()=>(a(),()=>{a()}),[]);const e=m();return t(y,{Header:v,children:[t(A,{children:[t(s,{onClick:()=>e(i.RECORD_BALANCE),style:{backgroundImage:`url(${S})`},children:[t(c,{children:["₱",(o==null?void 0:o.balance)??""]}),r(l,{children:"Records"})]}),t(s,{onClick:()=>e(i.WELFARE),style:{backgroundImage:`url(${w})`},children:[r(c,{children:"4"}),r(l,{children:"Welfare"})]}),r(B,{}),r(x,{}),r(C,{}),r("div",{children:r(E,{})})]}),r(g,{current:"my"})]})},A=n.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  & > div {
    &:nth-of-type(n) {
      grid-column: span 2;
    }
  }
  gap: 16rem;
  padding: 16rem;
`,E=()=>{const o=m(),[e,u]=d.useState(!1);return r(L,{onClick:async()=>{e||(u(!0),await f(),await p.exec("logout"),b("Signout successfully",{level:"success"}),o("/",{replace:!0}))},children:e?r(k,{color:"currentColor"}):"sign out"})},L=n.a`
  display: block;
  background-color: #ffffff;
  height: 48rem;
  line-height: 48rem;
  text-align: center;
  border-radius: 12rem;
  font-size: 16rem;
  color: #f35f5ff2;
  font-weight: 510;
`,s=n.a`
  background-color: #ffffff;
  border-radius: 12rem;
  height: 88rem;
  box-sizing: border-box;
  padding: 12rem;
  background-repeat: no-repeat;
  background-size: 72rem 72rem;
  background-position: right bottom;
  display: block;
`,c=n.div`
  color: #323232;
  font-size: 16rem;
`,l=n.div`
  color: #646464;
  font-size: 12rem;
  margin-top: 8rem;
`;export{$ as U};
