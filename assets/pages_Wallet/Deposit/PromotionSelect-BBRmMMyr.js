import{n as r,a as e,j as o}from"../../vendor_emotion-CZWcTM8j.js";import{S as f}from"../../vendor_antd-DtS5X67P.js";import{M as p}from"../../features-tA-DxrQa.js";import{T as b,E as g,C as u}from"./components-Ckcd_aw3.js";import{b as v}from"./source-DnptHFf-.js";const M=({value:s,onChange:t,errorMessage:n,className:l})=>{const{loading:c,plans:m}=p();return e("div",{className:l,children:o(u,{children:[e(b,{children:"Promotions"}),c&&e(f.Paragraph,{lineCount:5,animated:!0}),e(w,{children:m.map((i,h)=>{const a=s===i.planName,d=[];return i.available||d.push("disabled"),a&&d.push("active"),o(x,{className:d.join(" "),onClick:i.available?()=>t==null?void 0:t(i.planName):void 0,children:[e(k,{src:i.icon}),o(j,{children:[e(y,{children:i.title}),o(z,{children:["Minimum deposit:₱",i.rule.minAmount]})]}),a?e(N,{}):e(P,{})]},h)})}),n&&e(g,{children:n})]})})},w=r.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  /* grid-auto-rows: 20rem; */
  gap: 8rem;
  margin-top: 16rem;
`,x=r.a`
  height: 60rem;
  display: flex;
  padding-right: 16rem;
  align-items: center;
  border-radius: 8rem;
  overflow: hidden;
  position: relative;
  background-color: #ffffff;
  &.disabled {
    background-color: #eaeaea;
    opacity: 0.7;
    cursor: not-allowed;
  }
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 8rem;
    border: 1rem solid #e6e6e6;
  }
  &.active::before {
    border: 1rem solid #ff536c;
  }
`,k=r.img`
  height: 60rem;
  width: 60rem;
  object-fit: cover;
  z-index: 1;
`,j=r.div`
  padding-left: 12rem;
  flex: 1;
`,y=r.div`
  font-weight: 500;
  font-size: 14rem;
  color: #323232;
  line-height: 24rem;
`,z=r.div`
  color: #646464;
  font-weight: 400;
  font-size: 12rem;
  padding-top: 3rem;
`,P=r.div`
  width: 16rem;
  height: 16rem;
  box-sizing: border-box;
  border-radius: 8rem;
  border: 1rem #c9cdd4 solid;
`,N=r(v)`
  width: 16rem;
  height: 16rem;
`;export{M as P};
