import{n as a,j as m,a as n,F as _}from"../../vendor_emotion-nEVkPYdj.js";import{a as G,r as e,u as N}from"../../vendor_react-DLFB9-kf.js";import{t as T,v as D,w as j}from"../../features-CK6znDLX.js";import{_ as A}from"../../vendor_lodash-CD85c6SO.js";import{h as O,i as M}from"./source-DyHF-4B3.js";import{_ as W}from"./source/no-resu-31ysrojo.js";import{G as $}from"../../components-DVpIsGwS.js";import{m as f,u as E}from"../../vendor_framer_motion-C4By12OG.js";const H=a(f.create($))``,V=j;function Z(t){const[c,s]=E();return e.useEffect(()=>{s([[".SearchBarBox",{maxWidth:t?"500rem":"173rem",top:0,left:0},{duration:0}],[c.current,{position:t?"fixed":"relative",top:0,left:0,zIndex:t?1e4:0},{duration:t?.3:0}],[c.current,{padding:t?"8rem 12rem":"0",paddingBottom:t?"60rem":"0"},{duration:.3}],[".SearchPart",{position:t?"sticky":"relative",top:0}]])},[t]),[c,s]}const q=G(!1),y=21;function ue(){const[t,c]=e.useState(""),s=e.useDeferredValue(t),[v,S]=e.useState(!1),[r,k]=N(q),[F,oe]=Z(r),{list:d,fetchData:u,resetData:l,loading:re}=T(V,{current:1,pageSize:y,keywords:s}),w=e.useCallback(()=>(l(),u(),()=>{l()}),[u,l]),R=e.useMemo(()=>A.debounce(()=>{w()},1e3),[w]);e.useEffect(()=>{r&&R()},[s,r]);const z=e.useCallback(o=>{S(!0),k(!0)},[]),C=e.useCallback(o=>{S(!1)},[]),p=e.useRef(null),b=e.useRef(null),[P,B]=e.useState(!1);e.useEffect(()=>{const o=new IntersectionObserver(x=>{const[i]=x;i&&B(!i.isIntersecting)},{threshold:0});b.current&&o.observe(b.current);const h=new IntersectionObserver(x=>{const[i]=x;i!=null&&i.isIntersecting&&u()},{threshold:0,rootMargin:"0px 0px 100px 0px"});return p.current&&d.length>0&&h.observe(p.current),()=>{h.disconnect(),o.disconnect()}},[r,u,d.length]),e.useEffect(()=>{r||(l(),B(!1))},[r,l]);const g=D();return e.useEffect(()=>{g(r?"hidden":"initial")},[r,g]),m(J,{ref:F,onScrollCapture:o=>{o.preventDefault(),o.stopPropagation()},"data-is-focus":v,"data-is-expand":r,children:[m(K,{className:"SearchPart",children:[m(Q,{"data-is-scroll-over":P,"data-is-focus":v,className:"SearchBarBox",children:[n(U,{}),n(X,{inputMode:"search",className:"SearchBarBoxInput",placeholder:"Search Games",type:"text",value:s,onFocus:z,onBlur:C,onChange:o=>c(o.currentTarget.value)})]}),r&&n(L,{whileHover:{scale:1.3,rotate:90,transition:{duration:.2}},onClick:()=>k(!1),children:n(M,{})})]}),r&&m(_,{children:[n(ee,{ref:b}),n(Y,{className:"SearchResultBlock",children:d.length>0?d.map((o,h)=>n(H,{initial:{opacity:0,scale:.3},animate:{opacity:1,scale:1},transition:{duration:.2,delay:h%y*.1,ease:"easeInOut"},data:o},o.name)):n(te,{children:"No Results Found"})}),n(I,{ref:p})]})]})}const J=a(f.div)`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  overscroll-behavior: contain;

  &[data-is-expand='true'] {
    transition: background 0.2s;
    background: transparent;
    background: #ffdfecc4;

    overflow: auto;
    width: 100%;
    height: 100vh;
    .SearchPart {
      width: 100%;
    }
  }
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10rem);
    z-index: -1;
  }
  /* hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`,K=a.div`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 8rem;
  height: unset;
`,L=a(f.button)`
  background: transparent;
  border: none;
  transform-origin: center center;
  width: auto;
  height: 100%;
  display: inline-flex;
  padding: 0;
  svg {
    width: 16rem;
    height: 100%;
    /* white */
    filter: contrast(10);
  }
`,Q=a(f.div)`
  --text-color: #000000;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  max-width: 173rem;
  height: 32rem;
  display: inline-flex;
  align-items: stretch;
  padding: 8rem 12rem;
  overscroll-behavior-y: contain;

  &::before {
    transition: box-shadow 0.3s, background 0.5s;
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    border-radius: 18rem;
  }
  &[data-is-focus='true'] {
    &::before {
      box-shadow: inset 0 0rem 5rem #ffffff;
      background: #ffffff;
    }
  }
  &[data-is-scroll-over='true'] {
    --text-color: #000000;
    &::before {
      box-shadow: inset 0 0rem 10rem #ffffff;
      background: #ffffff66;
    }
  }

  &:focus-within {
    &::before {
      box-shadow: inset 0 0rem 5rem #ffffff;
    }
    .SearchResultBlock {
      z-index: 1;
    }
  }
`,U=a(O)`
  width: 16rem;
  height: 16rem;
  &,
  * {
    fill: var(--text-color);
  }
`,X=a.input`
  transition: all 0.2s;
  font-size: 14rem;
  margin-left: 12rem;
  width: 100%;
  background: transparent;
  border: none;
  /* hide the frame during foucs */
  outline: none;
  color: var(--text-color);
  /* placeholder color */
  caret-color: var(--text-color);
  font-family: 'SF Pro';
  font-weight: bold;
  &:focus {
    text-shadow: 1rem 1rem 1rem rgba(var(--text-color) 0.5);
  }
  &::placeholder {
    color: var(--text-color);
    opacity: 0.5;
  }
`,Y=a(f.div)`
  position: relative;
  box-sizing: border-box;
  --search-result-gap: 8rem;
  z-index: -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 创建3列，每列1fr */
  left: 0;
  justify-content: start;
  align-items: center;
  align-content: baseline;
  padding: 8rem 0;
  gap: var(--search-result-gap);
  flex: 1;
  > * {
    /* max-width: calc((100% - 2 * var(--search-result-gap)) / 3); */
  }
`,I=a.div`
  width: 100%;
  height: 0;
  opacity: 0;
`,ee=a(I)``,te=a.div`
  position: absolute;
  left: calc(50% - 120rem);
  background: url(${W});
  width: 240rem;
  height: 240rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;export{ue as S,q as i};
