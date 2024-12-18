import{j as d,a as r,n as t}from"../../vendor_emotion-CZWcTM8j.js";import{a as v,R as C,u as T,r as s,L as A}from"../../vendor_react-Bz04f6Pj.js";import{w as I,e as P}from"../source-2yT3hbV3.js";import{PATHS as g}from"../../pagePaths-6FEed3-5.js";const R=v(!1),V=C.forwardRef(({className:n,style:i},b)=>{const[f,l]=T(R),[m,a]=s.useState(!1),c=s.useRef(f),o=s.useRef(),y=s.useMemo(()=>{const e=[];return n&&e.push(n),m&&e.push("mask"),e.join(" ")},[n,m]);function w(e){e?u():h()}function u(){var e;a(!1),l(!0),c.current=!0,(e=o.current)==null||e.call(o,!0)}function h(){var e;a(!1),l(!1),c.current=!1,(e=o.current)==null||e.call(o,!1)}return s.useImperativeHandle(b,()=>({check:()=>new Promise(e=>{if(c.current)return e(!0);if(o.current!==void 0)return e(!1);o.current=x=>{e(x),o.current=void 0},a(!0)})})),d(j,{className:y,style:i,children:[r(z,{onClick:h}),d(L,{children:[d(S,{children:[r(D,{}),r(M,{children:"Do You agree to the Terms of use and Privacy policy？"}),r(B,{onClick:u,children:"Agree"})]}),r(E,{onChange:w,checked:f}),r(p,{children:"I agree to the"}),r(k,{to:g.TERMS,children:"Terms of use"}),r(p,{children:"and"}),r(k,{to:g.PRIVACY,children:"Privacy policy."})]})]})}),j=t.div`
  text-align: center;
`,z=t.div`
  display: none;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  backdrop-filter: blur(1rem);
  .mask & {
    display: block;
  }
`,S=t.div`
  display: none;
  position: absolute;
  width: 250rem;
  padding: 0 16rem 16rem 16rem;
  left: -20rem;
  bottom: 100%;
  transform: translate(0, -15rem);
  background-color: #ffffff;
  box-shadow: 0rem 0rem 8rem 0rem #00000033;
  border-radius: 12rem;
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 30rem;
    border-width: 10rem;
    border-style: solid;
    border-color: #ffffff transparent transparent transparent;
  }
  .mask & {
    display: block;
  }
`,D=t.div`
  background-image: url(${I});
  background-size: cover;
  width: 48rem;
  height: 48rem;
  display: inline-block;
  margin-top: -24rem;
`,M=t.div`
  font-family: Inter;
  font-size: 14rem;
  font-weight: 400;
  line-height: 20rem;
  text-align: center;
  padding: 16rem 0 24rem 0;
  font-weight: 500;
`,B=t.a`
  display: block;
  background: #ff5c6a;
  border-radius: 6rem;
  color: #ffffff;
  line-height: 36rem;
`,p=t.div`
  font-family: SF Pro;
  font-size: 11rem;
  font-weight: 510;
  line-height: 24rem;
  color: rgba(0, 0, 0, 0.6);
`,k=t(A)`
  text-decoration: underline;
  color: #000000;
  font-size: 11rem;
`,L=t.div`
  display: inline-flex;
  align-items: center;
  gap: 5rem;
  padding: 5rem 10rem;
  border-radius: 5rem;
  position: relative;
  .mask & {
    background-color: #ffffff;
    z-index: 1;
  }
`,E=({checked:n,onChange:i})=>r(F,{className:n?"checked":void 0,onClick:()=>i==null?void 0:i(!n),children:n&&r(H,{})}),F=t.a`
  width: 18rem;
  height: 18rem;
  border: 1rem solid #d0d0d0;
  border-radius: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &.checked {
    background: #f76560;
    border: 1rem solid #f76560;
  }
`,H=t(P)`
  height: 5rem;
  width: 8rem;
  transform: scale(1.5);
`;export{V as T};
