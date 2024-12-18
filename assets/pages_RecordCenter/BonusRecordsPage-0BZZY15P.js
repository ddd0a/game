import{n as c,j as u,a as n}from"../vendor_emotion-CZWcTM8j.js";import{h}from"../components-DTw2mVnC.js";import{h as R,r as m,b as g}from"../vendor_react-Bz04f6Pj.js";import{PATHS as f}from"../pagePaths-6FEed3-5.js";import{D as S}from"./DatePicker-DoWynfTD.js";import{S as x}from"./Selecter-ByRWmpBv.js";import{C,R as D}from"./components-BqGtsO1-.js";import{I as P}from"../api_interface-Cwk1YCej.js";import{n as T}from"../features-tA-DxrQa.js";const E=10,O=()=>{const[t]=R(),s=m.useMemo(()=>({limit:E,...Object.fromEntries(t.entries())}),[t]),e=g(),{list:o,loading:a,fetchData:r,rawData:i,hasMore:l}=T(P,s);return u(C,{children:[n(w,{onChange:d=>{if(!d){e(f.RECORD_WITHDRAW,{replace:!0});return}const p=new URLSearchParams(d).toString();e(`${f.RECORD_WITHDRAW}?${p}`,{replace:!0})},value:i==null?void 0:i.query}),n(h,{list:o,hasMore:l,onLoadMore:()=>r({}),loading:a})]})},w=({onChange:t,value:s})=>{const[e,o]=m.useState(s);return m.useEffect(()=>{o(s)},[s]),u(B,{children:[n(W,{start:e==null?void 0:e.startTime,onStartChange:a=>{const r={...e,startTime:a};o(r),t(r)},end:e==null?void 0:e.endTime,onEndChange:a=>{const r={...e,endTime:a};o(r),t(r)}}),n(D,{onClick:()=>t(void 0)})]})},B=c.div`
  display: flex;
  align-items: center;
  gap: 10rem;
`;c(x)`
  flex-basis: 30%;
  max-width: 200rem;
  min-width: 100rem;
`;const W=c(S)`
  flex: 1;
`;export{O as B};
