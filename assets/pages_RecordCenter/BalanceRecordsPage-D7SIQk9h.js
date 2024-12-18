import{n as m,j as f,a as n}from"../vendor_emotion-nEVkPYdj.js";import{f as h}from"../components-DVpIsGwS.js";import{n as g,f as C}from"../features-CK6znDLX.js";import{h as R,r as c,b as S}from"../vendor_react-DLFB9-kf.js";import{PATHS as d}from"../pagePaths-6FEed3-5.js";import{D as x}from"./DatePicker-CzjW_5bO.js";import{S as A}from"./Selecter-D_Bc0hia.js";import{C as E,R as B}from"./components-BjfJwixx.js";import{G as P}from"../api_interface-Cuputjbr.js";const w=10,W=()=>{const[r]=R(),a=c.useMemo(()=>({limit:w,...Object.fromEntries(r.entries())}),[r]),e=S(),{list:o,loading:i,fetchData:s,rawData:t,hasMore:p}=g(P,a);return f(E,{children:[n(D,{onChange:l=>{if(!l){e(d.RECORD_BALANCE,{replace:!0});return}const u=new URLSearchParams(l).toString();e(`${d.RECORD_BALANCE}?${u}`,{replace:!0})},value:t==null?void 0:t.query}),n(h,{list:o,hasMore:p,onLoadMore:()=>s({}),loading:i})]})},D=({onChange:r,value:a})=>{const[e,o]=c.useState(a);c.useEffect(()=>{o(a)},[a]);const i=C("CommonCoreWallet.Action");return f(T,{children:[n(y,{placeholder:"All Type",items:i.items,value:e==null?void 0:e.action,onChange:s=>{const t={...e,action:s};o(t),r(t)}}),n(j,{start:e==null?void 0:e.startTime,onStartChange:s=>{const t={...e,startTime:s};o(t),r(t)},end:e==null?void 0:e.endTime,onEndChange:s=>{const t={...e,endTime:s};o(t),r(t)}}),n(B,{onClick:()=>r(void 0)})]})},T=m.div`
  display: flex;
  align-items: center;
  gap: 10rem;
`,y=m(A)`
  flex-basis: 30%;
  max-width: 200rem;
  min-width: 100rem;
`,j=m(x)`
  flex: 1;
`;export{W as B};
