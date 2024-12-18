import{n as o,j as n,a as s}from"../../vendor_emotion-nEVkPYdj.js";import{A as d,V as C}from"../../components-DVpIsGwS.js";import{E as g,F as h}from"../../features-CK6znDLX.js";import{m as i,a as r}from"../../vendor_framer_motion-C4By12OG.js";const V=({hueValue:t})=>{const{data:a}=g(),{data:e}=h(),l=r`hsl(${t},40%,50%)`,c=r`hsla(${t}, 50%, 48%, 0.2)`,m=r`hsl(${t}, 50%, 48%)`;return n(p,{children:[s(d,{src:e==null?void 0:e.avatarUrl,size:30}),n(f,{children:[s(v,{style:{color:l},children:e==null?void 0:e.nickname}),s(C,{level:(a==null?void 0:a.level)??0})]}),n("svg",{width:"32rem",height:"32rem",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[s(i.circle,{cx:"16",cy:"16",r:"16",fill:c}),s(i.path,{d:"M11 19.5V14.5C11 12.081 12.718 10.0635 15 9.6V9C15 8.4475 15.4475 8 16 8C16.5525 8 17 8.4475 17 9V9.6C19.282 10.0635 21 12.081 21 14.5V19.5H21.5015C22.053 19.5 22.5 19.944 22.5 20.5C22.5 21.0525 22.0525 21.5 21.5015 21.5H10.4985C9.947 21.5 9.5 21.056 9.5 20.5C9.5 19.9475 9.9475 19.5 10.4985 19.5H11ZM17.5 22.5C17.5 23.3285 16.8285 24 16 24C15.1715 24 14.5 23.3285 14.5 22.5H17.5Z",fill:m})]})]})},p=o.div`
  display: flex;
  align-items: center;
  padding: 16rem;
  gap: 12rem;
`,f=o.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 20rem;
`,v=o(i.div)`
  font-size: 20rem;
  font-weight: 510;
`;export{V as H};
