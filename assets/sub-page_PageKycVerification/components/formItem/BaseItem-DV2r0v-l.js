import{n as s,a as n}from"../../../vendor_emotion-nEVkPYdj.js";import{R as m}from"../../../vendor_react-DLFB9-kf.js";import{u as c}from"../../utils-ClAOSpnF.js";const p=s.div`
  transition: background 0.2s ease-in-out;
  display: flex;
  flex: 1;
  width: 100%;
  position: relative;
  padding: 12rem 16rem;
  height: 48rem;
  border-radius: 8rem;
  background: #ffffff;
  > input {
    width: 100%;
    z-index: 1;
    font-size: 16rem;
    line-height: 24rem;
    border: none;
    /* remove focus border */
    outline: none;
    background: transparent;
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
`;function g(a,d){const{style:f,className:l,onClick:o,...i}=a,{name:b,disabled:u}=i,e=c(b);return n(p,{"data-is-invalid":!!(e!=null&&e.message),"data-disabled":u,onClickCapture:r=>{r.preventDefault();const t=r.target.children[0];o&&o(r),t==null||t.focus()},style:f,className:l,children:n("input",{...i,ref:d})})}const I=m.forwardRef(g),_=s.div`
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
`;export{I as B,_ as E};
