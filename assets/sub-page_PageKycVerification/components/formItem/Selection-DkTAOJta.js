import{n as c,j as h,a as o,F as z}from"../../../vendor_emotion-CZWcTM8j.js";import{g as M,a as x,r as i,c as w,w as P,u as T,f as S}from"../../../vendor_react-Bz04f6Pj.js";import{B}from"./BaseItem-Bee3awgE.js";import{m as C,A as H}from"../../../vendor_framer_motion-DoAUFi0s.js";const N=M(),g=x(0);x(!1);const k=x(null),O=i.createContext({selected:{key:"",value:void 0,label:""},setSelected:function(e){throw new Error("Function not implemented.")},options:[],setOptions:function(e){throw new Error("Function not implemented.")},open:!1,setOpen:function(e){throw new Error("Function not implemented.")},title:"",setTitle:function(e){throw new Error("Function not implemented.")}});function p(){return i.useContext(O)}function V(e){return o(O.Provider,{value:{...e.init},children:e.children})}const D=c(C.div)`
  --unit-height: 48rem;
  z-index: 5000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex: 1;
  height: 50vh;
  border-top-left-radius: 12rem;
  border-top-right-radius: 12rem;
  background: white;
  font-family: 'Gilroy';
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;function G(e){const n=oe();return o(D,{initial:{y:"100%"},animate:{y:0,transition:{duration:.5,stiffness:100,type:"spring"}},ref:t=>{n(t)},children:e.children})}function ae(e){const{options:n,value:t,defaultValue:d,open:r=!1,onChange:l,...u}=e,[f,b]=i.useState(r),[a,v]=i.useState(()=>[{key:"selection-op-0",value:null,label:"Please select"},...n]),[m,_]=i.useState(()=>{const s=t||d;return a.find(j=>j.value===s)||a[0]}),E=i.useMemo(()=>t&&a.find(s=>s.value===t)||m,[t,a,m]),I=i.useCallback(s=>{_(s),l(s)},[l]),[A,F]=i.useState(u.title??""),y=w(g);return h(V,{init:{selected:E,setSelected:I,options:a,setOptions:v,open:f,setOpen:b,title:A,setTitle:F},children:[o(ee,{...u}),f?P.createPortal(h(z,{children:[o(ie,{}),o(ne,{}),o(H,{children:h(G,{children:[o(L,{}),o(X,{}),o(J,{onScroll:()=>{y(s=>s+1)},onTouchMove:()=>{y(s=>s+1)},children:o(U,{})}),o(Y,{})]})})]}),document.body):null]})}const J=c.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  align-items: center;
  overflow: auto;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  /* hide scrollbar */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,$=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 48rem;
  font-size: 16rem;
  line-height: 24rem;
  position: absolute;
  top: 0;
  z-index: 10;
  border-bottom: 1px solid #c2c2c2;
  width: 100%;
`;function L(){const e=p();return o($,{children:e.title})}const R=c.div`
  height: var(--unit-height);
  font-size: 16rem;
  line-height: 22rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  &[data-is-selected='true'] {
    font-weight: bold;
    color: #ff3568;
  }
`,q=c.div`
  position: relative;
  --padding-y: calc((50vh - var(--unit-height)) / 2);
  padding-top: var(--padding-y);
  padding-bottom: var(--padding-y);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`,K=c.div`
  display: block;
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: red;
  opacity: 0;
`;function Q(e){const n=p(),t=S(k),d=S(g),r=i.useRef(null),l=i.useMemo(()=>n.selected.value===e.value,[n.selected.value,e.value]);return i.useEffect(()=>{if(r.current&&t)return t.observe(r.current),()=>{r.current&&t.unobserve(r.current)}},[t]),i.useEffect(()=>{if(l){const u=setTimeout(()=>{var f;(f=r.current)==null||f.scrollIntoView({block:"center",behavior:d?"smooth":"instant"})},d?700:0);return()=>{clearTimeout(u)}}},[l,d]),h(R,{"data-option":JSON.stringify(e.option),"data-value":e.value,"data-is-selected":l,children:[e.label,o(K,{"data-option":JSON.stringify(e.option),ref:u=>{r.current=u}})]})}function U(){const e=p();return o(q,{children:e.options.map((n,t)=>o(Q,{label:n.label,value:n.value,option:n},n.key??`selection-op-${t}`))})}const W=c.div`
  height: var(--unit-height);
  position: absolute;
  border: 1px solid #c2c2c2;
  width: 100%;
  pointer-events: none;
`;function X(){return o(W,{})}const Y=c.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 10%,
    #ffffff00 50%,
    rgba(255, 255, 255, 1) 90%,
    rgba(255, 255, 255, 1) 100%
  );
`,Z=c(B)`
  cursor: pointer;
  user-select: none;
  > input {
    cursor: pointer;
    user-select: none;
  }
`;function ee(e){const n=p();return o(Z,{...e,readOnly:!0,value:n.selected.label,onClick:t=>{t.preventDefault(),!e.disabled&&n.setOpen(!0)}})}const te=c(C.div)`
  position: fixed;
  background: #0000006e;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5000;
`;function ne(){const e=p();return o(te,{initial:{opacity:0,backdropFilter:"blur(0rem)"},animate:{opacity:1,backdropFilter:"blur(2rem)",transition:{duration:.3}},onClick:()=>{e.setOpen(!1)}})}function oe(){const e=w(k),n=p();return t=>{if(t){const d=window.getComputedStyle(document.documentElement).fontSize,r=48*Number(d.replace("px","")),l=(t.offsetHeight-r)/2*-1,u=`${l}px 0px ${l}px 0px`,f=new IntersectionObserver(b=>{for(const a of b)if(a.isIntersecting&&a.intersectionRatio===1&&N.get(g)>0){const v=a.target,m=JSON.parse(v.getAttribute("data-option")??"");n.setSelected(m)}},{root:t,rootMargin:u,threshold:1});e(f)}}}function ie(){const[e,n]=T(g);return i.useEffect(()=>()=>{n(0)},[]),null}export{ae as S};
