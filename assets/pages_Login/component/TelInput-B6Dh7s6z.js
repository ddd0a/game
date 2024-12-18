import{n as e,j as l,a as t}from"../../vendor_emotion-nEVkPYdj.js";import{r as w}from"../../vendor_react-DLFB9-kf.js";import{F as k}from"../source-D_NTJDXD.js";const U=({error:f,clearable:m,value:n="",placeholder:h,type:p="tel",onChange:i,onFocus:o,onBlur:a,...b})=>{function g(r){if(!i)return;const s=r.target.value;let c=10;s.startsWith("0")&&c++,!(s.length>c)&&i(s)}const[u,d]=w.useState(!1),v=u||!!n;function x(r){d(!0),o==null||o(r)}function y(r){d(!1),a==null||a(r)}return l(j,{className:f?"has-error":void 0,children:[l(z,{className:v?"active":void 0,children:[t(I,{children:h}),l(S,{children:[t(N,{children:"+63"}),t(P,{...b,value:n,onChange:g,onFocus:x,onBlur:y,type:p})]})]}),m&&t(A,{className:n?"show":void 0,onClick:()=>i==null?void 0:i(""),children:t(F,{})})]})},j=e.label`
  background: #ffffff;
  border-radius: 12rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
  padding: 5rem;
  position: relative;
  min-height: 46rem;
  box-sizing: border-box;
  border: 1rem solid #cdd6e5;
  box-shadow: 0rem 12rem 32rem 0rem #b2d5ff1f;
  &.has-error {
    border: 1rem #ff5c6a solid;
  }
`,z=e.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 5rem;
`,I=e.div`
  color: #aaaaaa;
  transform: scale(1.5) translate(0, 6rem);
  font-family: SF Pro;
  font-size: 12rem;
  line-height: 16rem;
  display: inline-block;
  transform-origin: left top;
  transition: transform 0.2s linear;
  .active & {
    transform: none;
  }
`,S=e.div`
  height: 24rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`,N=e.div`
  padding-right: 3rem;
  line-height: 16rem;
  font-size: 14rem;
  color: #323232;
  visibility: hidden;
  .active & {
    visibility: visible;
  }
`,P=e.input`
  flex: 1;
  border: none;
  outline: none;
  height: 24rem;
  font-size: 16rem;
  line-height: 24rem;
  color: #323232;
  padding: 0;
  background-color: transparent;
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,A=e.a`
  width: 34rem;
  height: 34rem;
  align-items: center;
  justify-content: center;
  display: none;
  &.show {
    display: flex;
  }
`,F=e(k)`
  width: 11rem;
  height: 11rem;
`;export{U as T};
