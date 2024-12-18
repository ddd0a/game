import{n as l,j as d,a as r}from"../../vendor_emotion-CZWcTM8j.js";import{c as s,C as c}from"../../components-DTw2mVnC.js";import{i as m,e as p}from"../../vendor_antd-DtS5X67P.js";import{r as f}from"../../vendor_react-Bz04f6Pj.js";import{d as i}from"./data-Cq1GjRbT.js";function x(){const[t,n]=f.useState(0);return d(c,{children:[r(s,{}),r(g,{children:i.map((e,o)=>r(h,{name:e.typeName,image:e.imageUrl,setActive:a=>n(a),index:o,active:t},e.typeName))}),r(u,{accordion:!0,children:i[t].listHelpInfo.map(e=>r(m.Panel,{title:e.title,children:r("div",{dangerouslySetInnerHTML:{__html:e.content}})},e.id.toString()))})]})}const g=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12rem;
`,h=({name:t,image:n,index:e,active:o,setActive:a})=>d("div",{onClick:()=>a(e),style:{background:"#fff",borderRadius:"12rem",height:"128rem",overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"4rem",border:"1.5rem solid transparent",borderColor:o===e?"#FF536C":"transparent"},children:[r(p,{src:n,width:"72rem",height:"72rem"}),r("div",{style:{color:"#323232",fontSize:"16rem",fontWeight:"510",textAlign:"center"},children:t})]}),u=l(m)`
  .adm-list-body {
    background-color: transparent;
    border: none;
    margin-top: 36rem;
  }
  .adm-list-item {
    border-radius: 12rem;
    margin-top: 12rem;
  }
  .adm-list-item-content {
    border: none;
  }
  .adm-collapse-arrow {
    color: #646464;
    font-size: 14rem;
  }
  .adm-list-item-content-main {
    font-size: 14rem;
  }
  .adm-collapse-panel-header {
    /* padding: 12rem; */
  }
`;export{x as F};
