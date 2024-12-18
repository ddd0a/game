import{n as r,j as f,a as t}from"../../../vendor_emotion-nEVkPYdj.js";import{r as g}from"../../../vendor_react-DLFB9-kf.js";import{F as h,_ as l,a as b}from"./source-CDdR00rW.js";const x=r.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 204rem;
  justify-content: center;
  align-items: center;
`;function I(e){var o;const n=g.useMemo(()=>{var i;if((i=e.media)!=null&&i.url)return e.media.url;switch(e.name){case"face":return l;case"idPhoto":return l;case"selfieWithIDPhotoPath":return b;default:return l}},[(o=e.media)==null?void 0:o.url,e.name]);return f(x,{children:[t(y,{children:t(U,{src:n})}),!e.disabled&&t(j,{onChange:e.onChange,media:e.media})]})}const y=r.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`,U=r.img`
  object-fit: contain;
  user-select: none;
  width: 100%;
  height: 100%;
`,k=r.div`
  position: relative;
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  flex-direction: column;
  gap: 4rem;
  z-index: 2;
  justify-content: center;
  align-items: center;
  padding: 10rem;
  > input,
  > strong,
  > svg {
    pointer-events: none;
  }
  > strong {
    color: #ff356b;
    font-size: 14rem;
    line-height: 20rem;
    font-weight: 500;
  }
  &[data-is-existed='true'] {
    > strong {
      color: #004cff;
    }
    > svg {
      > path {
        fill: #004cff;
      }
    }
  }
  /* background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8rem;
    z-index: -1;
    transition: background 0.2s ease-in-out;
    background: #ffffff;
    backdrop-filter: blur(4rem);
    opacity: 0.8;
  }
`,v=r(h)`
  min-width: 44rem;
  min-height: 44rem;
`;function j({onChange:e,media:n}){const o=g.useRef(null),i=!!(n!=null&&n.url);return f(k,{"data-is-existed":i,onClick:()=>{var a;console.log("Upload button clicked"),(a=o.current)==null||a.click()},children:[t(v,{}),t("strong",{children:i?"Change":"Upload"}),t("input",{style:{position:"absolute",opacity:0,zIndex:-1},ref:o,type:"file",accept:"image/png, image/jpeg, image/jpg",onChange:a=>{var d;const s=(d=a.target.files)==null?void 0:d[0];if(!s)return;const c=new FileReader;c.onload=m=>{var u;const p=(u=m.target)==null?void 0:u.result;e==null||e({url:p,type:s.type,file:s})},c.readAsDataURL(s)}})]})}export{I as P};
