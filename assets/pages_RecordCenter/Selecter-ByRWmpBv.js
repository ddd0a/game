import{n as o,a as n,j as d}from"../vendor_emotion-CZWcTM8j.js";import{P as m}from"../vendor_antd-DtS5X67P.js";import{r as p}from"../vendor_react-Bz04f6Pj.js";import{a as h}from"../pages_RecordCenter-DB5bUHE8.js";const P=({placeholder:s,items:e,value:r,onChange:l,className:a,style:f})=>{const c=p.useMemo(()=>{var t;return r?(t=e==null?void 0:e.find(i=>i.value===r))==null?void 0:t.label:void 0},[r,e]);return n(w,{style:f,className:a,children:d(x,{onClick:async()=>{const t=await m.prompt({columns:[e??[]],defaultValue:r?[r]:void 0,confirmText:"confirm",cancelText:"cancel"});if(t){const[i]=t;i&&(l==null||l(i))}},children:[c?n(v,{children:c}):n(u,{children:s}),n(g,{})]})})},w=o.div``,x=o.a`
  display: flex;
  background: #ffffff;
  height: 36rem;
  border-radius: 4rem;
  align-items: center;
  padding: 0 12rem;
  justify-content: space-between;
`,v=o.div`
  color: #303236;
  font-size: 13rem;
  font-weight: 400;
  line-height: 20rem;
  text-align: left;
  white-space: nowrap; /* 强制文本在同一行显示 */
  overflow: hidden; /* 隐藏超出部分 */
  text-overflow: ellipsis;
`,u=o.div`
  color: #797b7f;
  font-size: 13rem;
  font-weight: 400;
  line-height: 20rem;
  text-align: left;
  white-space: nowrap; /* 强制文本在同一行显示 */
  overflow: hidden; /* 隐藏超出部分 */
  text-overflow: ellipsis;
`,g=o(h)`
  width: 10rem;
  height: 6rem;
`;export{P as S};
