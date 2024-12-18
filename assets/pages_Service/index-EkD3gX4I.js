import{n as S,a,j as y,F as b}from"../vendor_emotion-CZWcTM8j.js";import{i as F,T}from"../components-DTw2mVnC.js";import{F as I}from"../features-tA-DxrQa.js";import{r as v}from"../vendor_react-Bz04f6Pj.js";const M=S.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
`,P=S.iframe`
  width: 100%;
  flex: 1;
  overscroll-behavior: contain;
`;function E(){var r,t,o,i,s,n,m;const[w,L]=v.useState(!0),e=I(),j=v.useMemo(()=>{var d,f,u,h,p,N,g;const c={name:[(f=(d=e.data)==null?void 0:d.realName)==null?void 0:f.firstName,(h=(u=e.data)==null?void 0:u.realName)==null?void 0:h.middleName,(N=(p=e.data)==null?void 0:p.realName)==null?void 0:N.lastName].join(" "),email:(g=e.data)==null?void 0:g.email},l=new URL("https://secure.livechatinc.com/licence/15348909/open_chat.cgi");for(const x in c){const k=x;l.searchParams.set(x,c[k]??"")}return l.toString()},[(r=e.data)==null?void 0:r.email,(o=(t=e.data)==null?void 0:t.realName)==null?void 0:o.firstName,(s=(i=e.data)==null?void 0:i.realName)==null?void 0:s.lastName,(m=(n=e.data)==null?void 0:n.realName)==null?void 0:m.middleName]);return a(b,{children:y(M,{children:[a(P,{src:j,onLoad:()=>{setTimeout(()=>{L(!1)},2e3)}}),a(F,{isLoading:w}),a(T,{current:"service"})]})})}export{E as S};
