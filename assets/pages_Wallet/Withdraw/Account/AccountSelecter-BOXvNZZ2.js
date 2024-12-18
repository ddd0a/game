import{n as o,j as d,a as r,F as A}from"../../../vendor_emotion-CZWcTM8j.js";import{N as v,O as k,h as y}from"../../../features-tA-DxrQa.js";import{r as c}from"../../../vendor_react-Bz04f6Pj.js";import{A as C}from"./AccountItem-fSAbP2lf.js";import{C as S}from"./ChannelSelecter-KDm0APmB.js";import{g as I,a as z}from"./data-Qx4mSnEk.js";import{b as B}from"./source-Bxx8IloA.js";const G=({accountID:p,onChange:i,errorMessage:a})=>{const[u,s]=c.useState(!1),{warp:b}=v(),f=b(()=>s(!0)),{data:n}=k(),h=y(),l=c.useMemo(()=>n==null?void 0:n.map(e=>{var t;return{...e,iconUrl:I(e.channelName),color:z(e.channelName),channelInfo:(t=h.data)==null?void 0:t.find(x=>x.name===e.channelName)}}),[n,h.data]),[w,m]=c.useState();return d(A,{children:[n?d(N,{children:[d(U,{children:[r(j,{children:"Extraction method"}),r(E,{onClick:f,children:"Add"})]}),r(F,{children:l==null?void 0:l.map(e=>{var t;return r(C,{id:e.id,selectable:!0,selected:e.id===p,color:e.color,iconUrl:e.iconUrl,account:e.account,onClick:()=>i==null?void 0:i(e.id,e),open:e.id===w,onOpen:()=>m(e.id),onClose:()=>m(void 0),disabled:!((t=e.channelInfo)!=null&&t.available)},e.id)})}),a&&r(g,{children:a})]}):d(O,{onClick:f,children:[r(R,{}),r(T,{children:"Add withdrawal account"}),a&&r(g,{children:a})]}),r(S,{visible:u,onClose:()=>s(!1)})]})},N=o.div`
  border: 1rem #ffffff solid;
  border-radius: 8rem;
  padding: 12rem;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.65) 50%,
      #ffffff 100%
    ),
    radial-gradient(
        25.07% 83.02% at 6.41% 4.25%,
        rgba(255, 240, 211, 0.25) 0%,
        rgba(255, 240, 211, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`,U=o.div`
  display: flex;
  padding-bottom: 6rem;
`,j=o.div`
  line-height: 24rem;
  font-size: 16rem;
  font-weight: 400;
  flex: 1;
`,E=o.a`
  display: block;
  width: 60rem;
  height: 24rem;
  border-radius: 4rem;
  background-color: #ff536c;
  color: #ffffff;
  text-align: center;
  font-size: 14rem;
  line-height: 24rem;
`,F=o.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`,g=o.div`
  color: #f53f3f;
  font-size: 14rem;
  font-weight: 400;
  line-height: 20rem;
  padding-top: 10rem;
`,O=o.a`
  display: block;
  background-color: #ffffff;
  border-radius: 8rem;
  text-align: center;
  padding-top: 24rem;
  padding-bottom: 16rem;
`,R=o(B)`
  width: 48rem;
  height: 48rem;
`,T=o.div`
  padding-top: 12rem;
  font-size: 14rem;
  line-height: 20rem;
  font-weight: 400;
  color: #323232;
`;export{G as A};
