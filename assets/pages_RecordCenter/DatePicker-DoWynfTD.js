import{n as t,a as e,j as w}from"../vendor_emotion-CZWcTM8j.js";import{c}from"../vendor_antd-DtS5X67P.js";import{d as l}from"../vendors-CS-3Ohps.js";import{F as p}from"../pages_RecordCenter-DB5bUHE8.js";const y=({start:i,end:r,onStartChange:n,onEndChange:a,className:f,style:h})=>e(g,{className:f,style:h,children:w(x,{children:[e(d,{onClick:async()=>{const o=await c.prompt({title:"start date",confirmText:"confirm",cancelText:"cancel",defaultValue:i?new Date(i):void 0,max:r?new Date(r):new Date});o&&n&&n(o.getTime())},children:i?e(m,{children:l(i).format("DD/MM/YYYY")}):e(s,{children:"Start Date"})}),e(D,{}),e(d,{onClick:async()=>{const o=await c.prompt({title:"end date",confirmText:"confirm",cancelText:"cancel",defaultValue:r?new Date(r):void 0,max:new Date,min:i?new Date(i):void 0});o&&a&&a(o.getTime())},children:r?e(m,{children:l(r).format("DD/MM/YYYY")}):e(s,{children:"End Date"})}),e(v,{})]})}),g=t.div``,x=t.div`
  display: flex;
  background: #ffffff;
  height: 36rem;
  border-radius: 4rem;
  align-items: center;
  padding: 0 12rem;
  gap: 10rem;
`,d=t.a`
  display: block;
  flex: 1;
`,D=t.div`
  height: 1rem;
  width: 3rem;
  background: #303236;
`,m=t.div`
  color: #303236;
  font-size: 13rem;
  font-weight: 400;
  line-height: 20rem;
  text-align: center;
  white-space: nowrap; /* 强制文本在同一行显示 */
  overflow: hidden; /* 隐藏超出部分 */
  text-overflow: ellipsis;
`,s=t.div`
  color: #797b7f;
  font-size: 13rem;
  font-weight: 400;
  line-height: 20rem;
  text-align: center;
  white-space: nowrap; /* 强制文本在同一行显示 */
  overflow: hidden; /* 隐藏超出部分 */
  text-overflow: ellipsis;
`,v=t(p)`
  width: 14rem;
  height: 15rem;
`;export{y as D};
