import{n as c,j as u,a as n}from"../vendor_emotion-CZWcTM8j.js";import{D as h}from"../components-DTw2mVnC.js";import{n as S,f as D}from"../features-tA-DxrQa.js";import{h as g,r as m,b as R}from"../vendor_react-Bz04f6Pj.js";import{PATHS as l}from"../pagePaths-6FEed3-5.js";import{D as P}from"./DatePicker-DoWynfTD.js";import{S as C}from"./Selecter-ByRWmpBv.js";import{C as x,R as E}from"./components-BqGtsO1-.js";import{J as w}from"../api_interface-Cwk1YCej.js";const T=10,_=()=>{const[s]=g(),o=m.useMemo(()=>({limit:T,...Object.fromEntries(s.entries())}),[s]),e=R(),{list:a,loading:i,fetchData:r,rawData:t,hasMore:p}=S(w,o);return u(x,{children:[n(O,{onChange:d=>{if(!d){e(l.RECORD_DEPOSIT,{replace:!0});return}const f=new URLSearchParams(d).toString();e(`${l.RECORD_DEPOSIT}?${f}`,{replace:!0})},value:t==null?void 0:t.query}),n(h,{list:a,hasMore:p,onLoadMore:()=>r({}),loading:i})]})},O=({onChange:s,value:o})=>{const[e,a]=m.useState(o);m.useEffect(()=>{a(o)},[o]);const i=D("CommonCorePayment.WithdrawOrderStatus");return u(y,{children:[n(j,{placeholder:"All Status",items:i.items,value:e==null?void 0:e.status,onChange:r=>{const t={...e,status:r};a(t),s(t)}}),n(F,{start:e==null?void 0:e.startTime,onStartChange:r=>{const t={...e,startTime:r};a(t),s(t)},end:e==null?void 0:e.endTime,onEndChange:r=>{const t={...e,endTime:r};a(t),s(t)}}),n(E,{onClick:()=>s(void 0)})]})},y=c.div`
  display: flex;
  align-items: center;
  gap: 10rem;
`,j=c(C)`
  flex-basis: 30%;
  max-width: 200rem;
  min-width: 100rem;
`,F=c(P)`
  flex: 1;
`;export{_ as D};
