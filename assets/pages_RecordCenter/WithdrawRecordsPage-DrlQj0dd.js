import{n as c,j as u,a as n}from"../vendor_emotion-CZWcTM8j.js";import{W as h}from"../components-DTw2mVnC.js";import{n as R,f as S}from"../features-tA-DxrQa.js";import{h as g,r as m,b as W}from"../vendor_react-Bz04f6Pj.js";import{PATHS as l}from"../pagePaths-6FEed3-5.js";import{D as w}from"./DatePicker-DoWynfTD.js";import{S as C}from"./Selecter-ByRWmpBv.js";import{C as D,R as x}from"./components-BqGtsO1-.js";import{K as P}from"../api_interface-Cwk1YCej.js";const T=10,L=()=>{const[s]=g(),o=m.useMemo(()=>({limit:T,...Object.fromEntries(s.entries())}),[s]),t=W(),{list:a,loading:i,fetchData:r,rawData:e,hasMore:f}=R(P,o);return u(D,{children:[n(E,{onChange:d=>{if(!d){t(l.RECORD_WITHDRAW,{replace:!0});return}const p=new URLSearchParams(d).toString();t(`${l.RECORD_WITHDRAW}?${p}`,{replace:!0})},value:e==null?void 0:e.query}),n(h,{list:a,hasMore:f,onLoadMore:()=>r({}),loading:i})]})},E=({onChange:s,value:o})=>{const[t,a]=m.useState(o);m.useEffect(()=>{a(o)},[o]);const i=S("CommonCorePayment.WithdrawOrderStatus");return u(y,{children:[n(j,{placeholder:"All Status",items:i.items,value:t==null?void 0:t.status,onChange:r=>{const e={...t,status:r};a(e),s(e)}}),n(A,{start:t==null?void 0:t.startTime,onStartChange:r=>{const e={...t,startTime:r};a(e),s(e)},end:t==null?void 0:t.endTime,onEndChange:r=>{const e={...t,endTime:r};a(e),s(e)}}),n(x,{onClick:()=>s(void 0)})]})},y=c.div`
  display: flex;
  align-items: center;
  gap: 10rem;
`,j=c(C)`
  flex-basis: 30%;
  max-width: 200rem;
  min-width: 100rem;
`,A=c(w)`
  flex: 1;
`;export{L as W};
