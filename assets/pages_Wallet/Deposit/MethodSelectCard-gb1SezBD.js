import{n as s,a as r,j as o}from"../../vendor_emotion-CZWcTM8j.js";import{S as A}from"../../vendor_antd-DtS5X67P.js";import{r as h}from"../../vendor_react-Bz04f6Pj.js";import{T as N,L as p,I as f,A as g,E as T,C as j}from"./components-Ckcd_aw3.js";import{a as E}from"./source-DnptHFf-.js";import{g as M}from"../../features-tA-DxrQa.js";const x=6,P=({value:i,onChange:a,errorMessage:c,className:v})=>{const[n,S]=h.useState(!1),l=M(),{items:y,hiddenItems:t}=h.useMemo(()=>{const e=l.data??[];let m=e,d;return(e.length??0>x)&&(m=e.slice(0,6),d=e.slice(x)),{hiddenItems:d,items:m}},[l]);return r("div",{className:v,children:o(j,{children:[r(N,{children:"Supported Methods"}),l.loading&&r(A.Paragraph,{lineCount:5,animated:!0}),r(p,{children:y.map(e=>o(f,{className:i===e.name?"active":void 0,onClick:()=>a==null?void 0:a(e.name),children:[r(w,{src:e.icon}),r(u,{children:e.displayName}),i===e.name&&r(g,{})]},e.name))}),!!(t!=null&&t.length)&&r(z,{className:n?"show":"hidden",children:r(p,{style:{paddingTop:"12rem",paddingBottom:"4rem"},children:t==null?void 0:t.map(e=>o(f,{className:i===e.name?"active":void 0,onClick:()=>a==null?void 0:a(e.name),children:[r(w,{src:e.icon}),r(u,{children:e.displayName}),i===e.name&&r(g,{})]},e.name))})}),c&&r(T,{children:c}),!!(t!=null&&t.length)&&o(k,{onClick:()=>S(!n),children:[r(L,{children:n?"Less":"More"}),r(b,{className:n?"rotate":void 0})]})]})})},w=s.img`
  height: 24rem;
  width: 24rem;
  object-fit: cover;
  border-radius: 12rem;
`,u=s.span`
  padding-left: 8rem;
  font-size: 14rem;
  color: #323232;
`,k=s.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #00000026;
  margin-top: 15rem;
  padding-top: 10rem;
`,L=s.span`
  color: #969696;
  line-height: 20rem;
  font-size: 14rem;
  margin-right: 10rem;
`,b=s(E)`
  width: 10rem;
  height: 5.4rem;
  transition: transform 0.5s linear;
  transform: translateY(1rem);
  &.rotate {
    transform: rotate(180deg) translateY(-1rem);
  }
`,z=s.div`
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s linear;
  &.show {
    max-height: 300rem;
  }
`;export{P as M};
