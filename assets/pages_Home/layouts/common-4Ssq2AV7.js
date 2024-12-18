import{n,a as d}from"../../vendor_emotion-CZWcTM8j.js";import{A as c}from"../../features-tA-DxrQa.js";import{r as m}from"../../vendor_react-Bz04f6Pj.js";const f=n.div`
  position: relative;
  /* background-color: #cccccc; */
  ::before,
  ::after {
    display: ${o=>o["data-is-mode-dev"]?"block":"none"};
    position: absolute;
    color: #fff;
    background-color: #000;
    padding: 0.25rem;
    font-size: 5rem;
    z-index: 1000;
    display: none;
  }
  /* label */
  ::before {
    top: 0;
    right: 0;
    content: attr(data-layout-name);
  }
  /* bottom-label */
  ::after {
    bottom: 0;
    right: 0;
    content: '${o=>`I am bottom of the layout ${o["data-layout-name"]}`}';
  }
`;m.forwardRef(function(t,r){const{children:u,className:l,layoutName:e,...i}=t,s=["BaseLayout",l,e].map(a=>a==null?void 0:a.trim()).filter(Boolean).join(" ");return d(f,{ref:r,className:s,"data-layout-name":e,"data-is-mode-dev":c,...i,children:t.children})});const x=n.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;export{x as E};
