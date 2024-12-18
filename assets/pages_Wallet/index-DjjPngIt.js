import{n as m,j as a,a as r,F as c}from"../vendor_emotion-nEVkPYdj.js";import{f as d,T as f}from"../components-DVpIsGwS.js";import{B as p}from"./BalanceCard-CKvh1hAZ.js";import{M as u}from"./More-DpNSdYWh.js";import{G as g}from"../api_interface-Cuputjbr.js";import{H as e,n as h}from"../features-CK6znDLX.js";import{r as o}from"../vendor_react-DLFB9-kf.js";function w(){o.useEffect(()=>(e(),()=>{e()}),[]);const t=o.useMemo(()=>({limit:10}),[]),{list:s,loading:n,fetchData:i,hasMore:l}=h(g,t);return a(c,{children:[a(x,{style:{padding:"12rem"},children:[r(p,{}),r(u,{}),r(d,{list:s,hasMore:l,onLoadMore:i,loading:n})]}),r(f,{current:"wallet"})]})}const x=m.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;export{w as W};
