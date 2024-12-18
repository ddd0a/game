import{n as d,j as g,a as e,F as w}from"./vendor_emotion-CZWcTM8j.js";import{R as P,h as A,r as i,y as C,a as y,u as F,c as N}from"./vendor_react-Bz04f6Pj.js";import{F as B}from"./sub-page_source-BAwWripL.js";import{P as _}from"./sub-page_PageAgeVerification/index-XHvfWrJz.js";import{P as z}from"./sub-page_PageAvatarSetting/index-B7fRzvdM.js";import{v as I,b as D}from"./features-tA-DxrQa.js";import{P as x}from"./sub-page_PageKycVerification/index-UXlxcpwD.js";import{i as E}from"./src_ts_file-BXSbaNF5.js";import{B as o}from"./enum-Cky0aGNf.js";import{m as p,A as v}from"./vendor_framer_motion-DoAUFi0s.js";const W=P.lazy(()=>E.SubPageGame),M={page_game:{reactNode:e(W,{}),options:{get closeNotAllowed(){return!0}}},page_age_verification:{reactNode:e(_,{}),options:{get closeNotAllowed(){return!0}}},page_avatar_setting:{reactNode:e(z,{}),options:{get closeNotAllowed(){return!0}}},page_kyc_verification:{reactNode:e(x,{}),options:{get closeNotAllowed(){return!0}}},get page_kyc_verification_manual(){return{reactNode:e(x,{}),options:{get closeNotAllowed(){return!1}}}}};function re(){var u;const[r]=A(),l=r.get("sub_page"),[a,t]=i.useState(null),s=I(),n=i.useMemo(()=>M[l],[l]);return i.useEffect(()=>{s(a?"hidden":"initial")},[s,a]),i.useEffect(()=>{const c=(n==null?void 0:n.reactNode)||null;return t(c),()=>{t(null)}},[n]),a&&C.createPortal(e(v,{children:g(T,{layout:!0,variants:V,initial:"hidden",animate:"visible",exit:{opacity:0},children:[!((u=n==null?void 0:n.options)!=null&&u.closeNotAllowed)&&g(w,{children:[e(O,{}),e(K,{})]}),e(j,{variants:R,initial:"hidden",animate:"visible",children:a})]})}),document.body)}const T=d(p.div)`
  &,
  * {
    box-sizing: border-box;
  }
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overscroll-behavior: none;
  overflow: scroll;
  flex-direction: column;

  /* hide scrollbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,V={hidden:{opacity:0,background:"rgba(0, 0, 0, 0)",zIndex:-1},visible:{opacity:1,background:"rgba(0, 0, 0, 0.589)",zIndex:3002,transition:{duration:.5,type:"spring",stiffness:100,when:"beforeChildren"}}},j=d(p.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
`,R={hidden:{y:document.documentElement.clientHeight,opacity:0},visible:{y:0,opacity:1,transition:{duration:.5,type:"spring",stiffness:100,velocity:2,mass:.5,delay:.5}}},f="--button-status",G=d(p.button)`
  background: none;
  border: none;
  /*  */
  box-sizing: content-box;
  display: inline-flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  width: 12rem;
  height: 12rem;
  padding: 4rem;
  transform-origin: center center;
  user-select: none;
  svg {
    box-sizing: border-box;
    padding: 2rem;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 12rem rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }
  cursor: pointer;
  &.button-close-sleep {
    svg {
      filter: contrast(0) brightness(10);
    }
  }
`;function K(){const r=i.useMemo(()=>{const c=y(o.Sleep);let m;const k=y(null,(b,h,U)=>{switch(b(c)){case o.Sleep:return m&&clearTimeout(m),h(c,o.Wake),m=setTimeout(()=>{h(c,o.Sleep)},3e3),!1;case o.Wake:return!0}});return function(){return{buttonStatus:F(c),onButtonClick:N(k)}}},[]),[l,a]=i.useState(!1),{buttonStatus:[t],onButtonClick:s}=r(),n=i.useMemo(()=>{switch(t){case o.Sleep:return"button-close-sleep";case o.Wake:return"button-close-wake"}},[t]),u=D();return e(G,{className:n,initial:{[f]:t},animate:{scale:t===o.Wake?3:1,x:t===o.Wake?"-10rem":"0rem",y:t===o.Wake?"10rem":"0rem",[f]:t},onAnimationComplete:c=>{switch(c[f]){case o.Sleep:{a(!1);break}case o.Wake:a(!0)}},transition:{type:"spring",stiffness:300,duration:.3,mass:.5},onClick:()=>{l?u.close():s()},children:e(B,{})})}const L=d(p.div)`
  position: absolute;
  z-index: 1;
  right: 25rem;
  top: 7rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 8rem;
  color: #ffffff;
  display: inline-flex;
  justify-content: center;
  align-items: stretch;
  letter-spacing: 1rem;
  text-shadow: 1rem 1rem 2rem rgb(0, 0, 0);
  pointer-events: none;
  user-select: none;
  flex-direction: row;
  gap: 1rem;
  flex-wrap: nowrap;
  white-space: nowrap;
  box-sizing: content-box;
`,H=[{char:"F",color:"#2283F6"},{char:"I",color:"#2283F6"},{char:"L",color:"#2283F6"},{char:"B",color:"#ED1D49"},{char:"E",color:"#ED1D49"},{char:"T",color:"#ED1D49"}],S=[g(w,{children:["Welcome to"," ",H.map(r=>e("div",{style:{display:"inline-block",color:r.color,fontFamily:"inherit",fontWeight:"bolder"},children:r.char},r.char))]}),"Tap the 2nd time to close -->"];function O(){const[r,l]=i.useState(0),a=i.useCallback(s=>{(s==null?void 0:s.opacity)<=0&&l(n=>n+1)},[]),t=i.useMemo(()=>Math.floor(r/2)%S.length,[r]);return e(v,{children:e(L,{animate:{opacity:[0,1,1,0]},exit:{opacity:0,"--status":"end"},transition:{delay:3,duration:2,repeat:1/0,repeatType:"loop",repeatDelay:3,times:[0,.2,.8,1]},onUpdate:a,children:S[t]})})}export{re as S};
