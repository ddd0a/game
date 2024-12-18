import{n as o,a as t,j as i}from"../../vendor_emotion-CZWcTM8j.js";import{m as c}from"../../core-B_o7srNM.js";import{A as n}from"./AmountInput-BYyB3d5m.js";import{T as p,E as u,L as v,I as A,A as f,C as x}from"./components-Ckcd_aw3.js";const y=[100,500,1e3,2e3,5e3,1e4].map(s=>({displayName:c(s),value:s.toString()})),E=({value:s,onChange:a,onBlur:d,errorMessage:e,className:l,placeholder:m})=>t("div",{className:l,children:i(x,{children:[t(p,{children:"Amount"}),t(j,{children:t(n,{value:s,onChange:a,onBlur:d,placeholder:m})}),e&&t(u,{children:e}),t(v,{children:y.map(r=>i(A,{className:s===r.value?"active":void 0,onClick:()=>a==null?void 0:a(r.value),style:{justifyContent:"center"},children:[t(I,{children:r.displayName}),s===r.value&&t(f,{})]},r.value))})]})}),I=o.div`
  font-size: 16rem;
`,j=o.div`
  border-bottom: 1px solid #00000026;
`;export{E as A};
