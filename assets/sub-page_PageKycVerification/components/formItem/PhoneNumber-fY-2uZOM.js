import{n as s,j as c,a as e}from"../../../vendor_emotion-CZWcTM8j.js";import{R as m}from"../../../vendor_react-Bz04f6Pj.js";import{u as p}from"../../utils-C3KCcOvf.js";const h=s.div`
  box-sizing: border-box;
  transition: background 0.2s ease-in-out;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  position: relative;
  padding: 12rem 16rem;
  height: 48rem;
  border-radius: 8rem;
  background: #ffffff;

  input:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }

  > div > input {
    width: 100%;
    z-index: 1;
    font-size: 16rem;
    line-height: 24rem;
    border: none;
    /* remove focus border */
    outline: none;
    background: transparent;
  }

  > div {
    display: inline-flex;
    &:first-of-type {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      > input {
        width: 30rem;
      }
      &::before {
        content: '🇵🇭 +';
        display: inline-flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: end;
        align-items: center;
        font-size: 16rem;
        line-height: 24rem;
      }
      width: 100rem;
      margin-right: 8rem;
    }
    &:last-of-type {
      width: 100%;
    }
  }
  &::before {
    transition: border 0.2s ease-in-out;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: inherit;
    border: 0rem solid #ff35687c;
  }
  &[data-is-invalid='true'] {
    &::before {
      border: 1.5rem solid #ff3568;
    }
  }
  cursor: text;
  &[data-disabled='true'] {
    background: #e6e7eb;
    cursor: not-allowed;
    > input {
      pointer-events: none;
    }
    &::before {
      border: none;
    }
  }
`;function g(d,x){const{style:a,className:l,onClick:o,...f}=d,{name:b,disabled:u,registeration:n}=f,r=p(b);return c(h,{"data-is-invalid":!!(r!=null&&r.message),"data-disabled":u,onClickCapture:t=>{t.preventDefault();const i=t.target.children[0];o&&o(t),i==null||i.focus()},style:a,className:l,children:[e("div",{children:e("input",{...n.code,disabled:!0})}),e("div",{children:e("input",{...n.number,disabled:!0})})]})}const k=m.forwardRef(g);s.div`
  position: relative;
  border-radius: 8rem;
  &::before {
    transition: border 0.2s ease-in-out;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: inherit;
    border: 0rem solid #ff35687c;
    z-index: 1;
    pointer-events: none;
  }
  &[data-is-error='true'] {
    &::before {
      border: 1.5rem solid #ff3568;
    }
  }
  &[data-is-disabled='true'] {
    &::before {
      border: 0rem solid #ff3568;
    }
  }
`;export{k as P};
