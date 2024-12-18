import{n as c,j as d,a as n}from"../vendor_emotion-CZWcTM8j.js";import{H as h}from"../api_interface-Cwk1YCej.js";import{g}from"../components-DTw2mVnC.js";import{n as S,f as R}from"../features-tA-DxrQa.js";import{h as x,r as m,b as C}from"../vendor_react-Bz04f6Pj.js";import{PATHS as u}from"../pagePaths-6FEed3-5.js";import{D as E}from"./DatePicker-DoWynfTD.js";import{S as P}from"./Selecter-ByRWmpBv.js";import{C as B,R as D}from"./components-BqGtsO1-.js";const T=10,_=()=>{const[s]=x(),o=m.useMemo(()=>({limit:T,...Object.fromEntries(s.entries())}),[s]),t=C(),{list:a,loading:i,fetchData:r,rawData:e,hasMore:f}=S(h,o);return d(B,{children:[n(w,{onChange:l=>{if(!l){t(u.RECORD_BET,{replace:!0});return}const p=new URLSearchParams(l).toString();t(`${u.RECORD_BET}?${p}`,{replace:!0})},value:e==null?void 0:e.query}),n(g,{list:a,hasMore:f,onLoadMore:()=>r({}),loading:i})]})},w=({onChange:s,value:o})=>{const[t,a]=m.useState(o);m.useEffect(()=>{a(o)},[o]);const i=R("GhsCommonModel.Status");return d(j,{children:[n(y,{placeholder:"All Status",items:i.items,value:t==null?void 0:t.status,onChange:r=>{const e={...t,status:r};a(e),s(e)}}),n(F,{start:t==null?void 0:t.startTime,onStartChange:r=>{const e={...t,startTime:r};a(e),s(e)},end:t==null?void 0:t.endTime,onEndChange:r=>{const e={...t,endTime:r};a(e),s(e)}}),n(D,{onClick:()=>s(void 0)})]})},j=c.div`
  display: flex;
  align-items: center;
  gap: 10rem;
`,y=c(P)`
  flex-basis: 30%;
  max-width: 200rem;
  min-width: 100rem;
`,F=c(E)`
  flex: 1;
`;export{_ as B};
