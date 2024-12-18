import{n as c,a as i}from"../../../vendor_emotion-CZWcTM8j.js";import{n as v}from"../../../components-DTw2mVnC.js";import{r as a}from"../../../vendor_react-Bz04f6Pj.js";const u=a.createContext({selected:void 0,setSelected:void 0,disabled:!1});function w(){return a.useContext(u)}const m=c.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 48rem;
`;function k(t){const{options:e,value:n,onChange:r,defaultValue:d,...s}=t,[f,b]=a.useState(()=>e.find(o=>o.value===n)),h={selected:f,setSelected(o){b(o),r==null||r(o)},disabled:t.disabled};return i(u.Provider,{value:h,children:i(m,{children:e.map((o,l)=>i(g,{index:l,option:o},`radio-${l}`))})})}const p=c(v)`
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out,
    width 0.2s ease-in-out;
  --radius: 8rem;
  --border-width: 1.5rem;
  color: #fb2d60;
  background: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-style: solid;
  border-color: #fb2d60;
  border-width: calc(var(--border-width) * 0.5);
  border-top-width: var(--border-width);
  border-bottom-width: var(--border-width);
  font-size: 16rem;
  line-height: 24rem;
  &[data-is-selected='true'] {
    background: #fb2d60;
    color: #ffffff;
    width: 120%;
    font-weight: 500;
  }
  &:first-of-type {
    border-radius: var(--radius) 0 0 var(--radius);
    border-left-width: calc(var(--border-width));
  }
  &:last-of-type {
    border-radius: 0 var(--radius) var(--radius) 0;
    border-right-width: calc(var(--border-width));
  }
  &[data-is-disabled='true'] {
    color: #e6e7eb;
    background: #e6e7eb;
    cursor: not-allowed;
    border-color: #e6e7eb;
    &[data-is-selected='true'] {
      background: #fb2d60;
      color: #ffffff;
      width: 120%;
      font-weight: 500;
    }
  }
`;function g(t){var r;const e=w(),n=a.useMemo(()=>{var d;return((d=e.selected)==null?void 0:d.value)===t.option.value},[(r=e.selected)==null?void 0:r.value,t.option.value]);return i(p,{onClick:d=>{var s;d.preventDefault(),(s=e.setSelected)==null||s.call(e,t.option)},"data-index":t.index,"data-is-selected":n,"data-is-disabled":e.disabled,children:t.option.label})}export{k as R};
