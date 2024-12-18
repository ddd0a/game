import{n as i,a,j as s}from"../../../vendor_emotion-CZWcTM8j.js";import{h as g,O as p}from"../../../features-tA-DxrQa.js";import{_ as l,e as u,f as v,g as b}from"../../../vendor_antd-DtS5X67P.js";import{r as f,b as w}from"../../../vendor_react-Bz04f6Pj.js";import{c as x}from"./source-Bxx8IloA.js";const _=({visible:c,onClose:d})=>{const r=g(),t=p().data,o=f.useMemo(()=>{var m;const e=new Set;return t==null||t.map(n=>{e.add(n.channelName)}),((m=r.data)==null?void 0:m.map(n=>({...n,addable:!e.has(n.name)})))??[]},[t,r.data]),h=w();return a(v,{visible:c,onMaskClick:d,onClose:d,children:s(k,{children:[s(y,{children:[a(C,{children:"Classification"}),a(z,{})]}),s(I,{children:[r.loading&&a(A,{}),a(L,{children:o==null?void 0:o.map(e=>a(S,{onClick:e.addable?()=>h(`/wallet/withdraw/add-account/${e.name}`):void 0,className:e.addable?void 0:"disabled",arrowIcon:e.addable?void 0:a(j,{children:"Exists"}),title:e.displayName,prefix:a(u,{src:e.icon,style:{borderRadius:"16rem"},fit:"cover",width:"32rem",height:"32rem"})},e.name))})]})]})})},k=i.div`
  padding: 16rem;
  background-image: url('/channel-list-bg.svg');
  background-size: cover;
`,y=i.div`
  height: 28rem;
  line-height: 28rem;
  position: relative;
`,C=i.div`
  font-size: 22rem;
`,z=i(x)`
  width: 200rem;
  height: 243.69rem;
  position: absolute;
  right: -10rem;
  bottom: -30rem;
  pointer-events: none;
`,I=i.div`
  max-height: 60vh;
  margin-top: 20rem;
  overflow-y: auto;
`,L=i(l)`
  .adm-list-body {
    background-color: transparent;
  }
  --border-inner: none;
`,S=i(l.Item)`
  margin: 10rem;
  padding: 16rem 12rem;
  border-radius: 12rem;
  &.disabled {
    opacity: 0.8;
  }
  .adm-list-item-title {
    font-size: 14rem;
    color: #323232;
    font-weight: 400;
  }
`,N=i.div`
  text-align: center;
  padding: 40rem 0;
  .adm-spin-loading {
    margin: 0 auto;
    --size: 48rem;
  }
`,j=i.div`
  font-size: 12rem;
`;function A(){return a(N,{children:a(b,{})})}export{_ as C};
