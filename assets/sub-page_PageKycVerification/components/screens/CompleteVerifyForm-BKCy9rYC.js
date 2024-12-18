import{n as t,j as o,a as e}from"../../../vendor_emotion-CZWcTM8j.js";import{S as f}from"./BaseScreen-Bl68sDI-.js";import{r as h}from"../../../vendor_react-Bz04f6Pj.js";import{c as p}from"../../../features-tA-DxrQa.js";const g=t(f)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;function C(n){const{children:r,...i}=n;return o(g,{...i,children:[e(u,{children:e(y,{})}),e(S,{children:r})]})}const u=t.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 24rem;
  width: 100%;
  z-index: 10;
  backdrop-filter: blur(4rem);
  padding: 0 var(--base-padding);
`,x=t.div`
  > h1 {
    font-weight: 500;
    font-size: 18rem;
    line-height: 20rem;
    text-align: center;
    margin: 0;
    height: 44rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;function y(){var s,a,c;const n=p(),r="Complete information",i=h.useMemo(()=>{var d,l,m;return((m=(l=(d=n.state.stateLatest.kyc)==null?void 0:d.data)==null?void 0:l.condition.issue)==null?void 0:m.message)??""},[(c=(a=(s=n.state.stateLatest.kyc)==null?void 0:s.data)==null?void 0:a.condition.issue)==null?void 0:c.message]);return o(x,{children:[e("h1",{children:r}),i&&o(j,{children:[e("h3",{children:"Rejected!"}),e("div",{children:i})]})]})}const S=t.div`
  margin-top: 32rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`,j=t.div`
  padding: 6rem;
  background: #ffe8ed;
  border-radius: 8rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  > h3 {
    font-size: 16rem;
    line-height: 20rem;
    font-weight: 500;
    margin: 0;
    color: #d00000;
  }
  > div {
    font-size: 14rem;
    font-weight: 500;
    color: #d00000;
  }
`;export{C as S};
