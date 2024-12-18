import{n as o,j as i,a as e}from"../../vendor_emotion-CZWcTM8j.js";import{F as t,a as r,b as s,c as a}from"./source-UZmmGE5X.js";const c=o.div`
  z-index: 1;
  color: #000;
  font-family: 'SF Pro';
  font-weight: 500;
  display: flex;
  flex-direction: column;
  padding: 0 12rem;
  position: relative;
  h3 {
    color: #00000099;
    margin: 0;
    line-height: 24rem;
    font-size: 16rem;
    font-family: 'SF Pro';
    font-weight: 500;
  }
`,m=[{icon:s,link:"https://www.facebook.com/share/HsrTMrvkWGUvSK5y/"},{icon:a,link:"https://www.instagram.com/filbet01?igsh=MXFyb3hzNTRwYmZ4NA=="}];function p(){return i(c,{children:[i(d,{children:[e("h3",{children:"Follow Us"}),e("div",{className:"follow-items",children:m.map(l=>e("a",{href:l.link,target:"_blank",children:e(l.icon,{})},l.link))})]}),i(h,{children:[e("h3",{children:"Responsible Gaming"}),i("div",{className:"logos",children:[e(t,{}),e("div",{className:"split-line"}),e(r,{})]})]})]})}const n=o.div`
  position: relative;
  &::before {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    top: 0;
    height: 1rem;
    background-color: #000;
    opacity: 0.15;
  }
  padding-top: 7rem;
`,d=o(n)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 103rem;
  gap: 12rem;
  .follow-items {
    display: inline-flex;
    gap: 16rem;
    justify-content: center;
    align-items: center;
    > * > svg {
      width: 32rem;
      height: 32rem;
    }
  }
`,h=o(n)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 87rem;
  gap: 10rem;
  .logos {
    display: flex;
    align-items: center;
    gap: 37rem;

    .split-line {
      width: 1rem;
      height: 24rem;
      background-color: #000;
      opacity: 0.15;
    }
    > svg {
      height: 28rem;
      width: auto;
    }
  }
`;export{p as F};
