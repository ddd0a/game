import{n as e,j as o,a as i}from"../../vendor_emotion-CZWcTM8j.js";import{F as s}from"./source-BNWy202X.js";const y=({placeholder:l="Please enter the amount",value:r="",onChange:t,...a})=>o(c,{children:[o(d,{children:[i(m,{children:"₱"}),i(p,{children:i(u,{type:"number",inputMode:"decimal",value:r,onChange:n=>t==null?void 0:t(n.target.value),placeholder:` ${l}`,...a})})]}),r&&i(b,{onClick:n=>{n.preventDefault(),t==null||t("")},children:i(f,{})})]}),c=e.div`
  display: flex;
  align-items: center;
`,d=e.label`
  display: flex;
  align-items: center;
  justify-content: start;
`,m=e.div`
  font-family: Gilroy;
  font-size: 32rem;
  color: #323232;
  display: flex;
  align-items: end;
  width: 30rem;
`,p=e.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 60rem;
  justify-content: start;
  align-items: center;
`,u=e.input`
  display: flex;
  align-items: center;
  justify-content: start;
  outline: none;
  border: none;
  background: transparent;
  height: 50rem;
  line-height: 40rem;
  font-size: 50rem;
  font-weight: 500;
  color: #323232;
  width: 100%;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* placeholder text size */
  &::placeholder {
    /* make it virtical mid */
    line-height: 20rem;
    font-size: 20rem;
    color: #b3b3b3;
  }
`,f=e(s)`
  height: 24rem;
  width: 24rem;
`,b=e.button`
  /* make click area bigger */
  padding: 10rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #f5f5f5;
  }
  &:active {
    background: #ebebeb;
  }
`;export{y as A};
