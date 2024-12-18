import{n as m,j as a,a as r,F as c}from"../vendor_emotion-CZWcTM8j.js";import{f as d,T as f}from"../components-DTw2mVnC.js";import{B as p}from"./BalanceCard-Dwo5-6JH.js";import{M as u}from"./More-CzVAJaal.js";import{G as g}from"../api_interface-Cwk1YCej.js";import{H as e,n as h}from"../features-tA-DxrQa.js";import{r as o}from"../vendor_react-Bz04f6Pj.js";function w(){o.useEffect(()=>(e(),()=>{e()}),[]);const t=o.useMemo(()=>({limit:10}),[]),{list:s,loading:n,fetchData:i,hasMore:l}=h(g,t);return a(c,{children:[a(x,{style:{padding:"12rem"},children:[r(p,{}),r(u,{}),r(d,{list:s,hasMore:l,onLoadMore:i,loading:n})]}),r(f,{current:"wallet"})]})}const x=m.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;export{w as W};
