import{n as e,j as h,a as r}from"../../vendor_emotion-nEVkPYdj.js";import{r as b}from"../../vendor_react-DLFB9-kf.js";import{F as E,a as F,b as N}from"../source-D_NTJDXD.js";const q=({error:w,clearable:p,value:o="",placeholder:g,type:t,onChange:i,onFocus:s,onBlur:a,...d})=>{function x(n){if(!i)return;const m=n.target.value;if(t==="number"||t==="tel"){const f=d.maxLength;if(f&&m.length>f)return}i(m)}const v=t==="password",[l,y]=b.useState(!1);t==="password"&&l&&(t="text");const[k,c]=b.useState(!1),I=k||!!o;function S(n){c(!0),s==null||s(n)}function j(n){c(!1),a==null||a(n)}return h(z,{className:w?"has-error":void 0,children:[h(R,{className:I?"active":void 0,children:[r(P,{children:g}),r(V,{...d,value:o,onChange:x,onFocus:S,onBlur:j,type:t})]}),p&&r(u,{className:o?"show":void 0,onClick:()=>i==null?void 0:i(""),children:r($,{})}),v&&r(u,{className:"show",onClick:()=>y(!l),children:l?r(A,{}):r(C,{})})]})},z=e.label`
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
`,R=e.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 5rem;
`,P=e.div`
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
`,V=e.input`
  border: none;
  outline: none;
  height: 24rem;
  font-size: 16rem;
  line-height: 24rem;
  color: #323232;
  background-color: transparent;
  width: 100%;
  &[type='number']::-webkit-outer-spin-button,
  &[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`,u=e.a`
  width: 34rem;
  height: 34rem;
  align-items: center;
  justify-content: center;
  display: none;
  &.show {
    display: flex;
  }
`,$=e(E)`
  width: 11rem;
  height: 11rem;
`,A=e(F)`
  width: 20rem;
  height: 20rem;
`,C=e(N)`
  width: 20rem;
  height: 20rem;
`;export{q as I};
