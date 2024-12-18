import{n as a,a as i}from"../../../vendor_emotion-CZWcTM8j.js";import{g as D,a as S,r as s,f as v}from"../../../vendor_react-Bz04f6Pj.js";import{b as A,a as u}from"./data-DWyZobRw.js";import{m as _}from"../../../vendor_framer_motion-DoAUFi0s.js";const k=a.div`
  display: flex;
  flex: 1;
  position: absolute;
  overflow-x: hidden;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* hide scroll bar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  background: var(--background-color, #ffffff);
  transition: background 0.5s ease-in-out;
`,l=D(),x=S();function w(){l.set(u,t=>++t)}function M(){l.set(u,t=>--t)}function b(){const t=setInterval(()=>{w()},3e3);l.set(x,t)}function I(){const t=l.get(x);t!==void 0&&clearInterval(t)}function z(t){const{...n}=t;return s.useEffect(()=>(b(),()=>{I()}),[]),i(k,{id:"BannersSpin",onScrollCapture:e=>(e.stopPropagation(),e.preventDefault(),!1),onScroll:e=>(e.stopPropagation(),e.preventDefault(),!1),...n,children:i($,{})})}a.div`
  width: 100%;
`;a.img`
  width: 100vw;
`;a.div`
  transition: all 0.5s ease-in-out;
  display: inline-flex;
  flex-wrap: nowrap;
  transform: translateX(var(--left, 0));
`;a.div`
  transition: all 0.3s;
  background: #0000004d;
  height: 4rem;
  width: 4rem;
  &[data-is-active='true'] {
    background: #ffffff;
    width: 12rem;
  }
  cursor: pointer;
`;a.div`
  height: 12rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;
  z-index: 1;
  margin: 0 12rem;
`;const Y=a(_.div)`
  width: 100%;
  position: relative;
  transform-style: preserve-3d; /* 保持3D效果 */
  flex: 1;
  touch-action: pan-x;
`,P=a.div`
  position: absolute;
  flex: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`,E=a.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
  cursor: pointer;
`;function $(t){const n=v(A),e=[...n,...n],c=v(u),f=window.innerWidth,g=e.length?R(f,e.length):0,y=e.length?j(f,e.length):0,[C,h]=s.useState(!1),[m,d]=s.useState(0),p=s.useMemo(()=>360/e.length*c+F(g,-m),[c,e.length,m,g]);return i(Y,{...t,className:"BannerCylinder",initial:{rotateY:`${-p}deg`},animate:{rotateY:`${-p}deg`,transition:C?{duration:0}:{duration:.5}},drag:"x",dragConstraints:{left:0,right:0},onDragStart:(o,{offset:r})=>{h(!0),d(r.x),I()},onDragEnd:(o,{offset:r})=>{h(!1),d(0),Math.abs(r.x)>100&&(r.x>0?M():w()),b()},onDrag:(o,{offset:r})=>(o.preventDefault(),o.stopPropagation(),d(r.x),!1),children:e.map((o,r)=>{const B=r*360/e.length;return i(P,{"data-is-active":c===r,style:{transform:`rotateY(${B}deg) translateZ(${y}px)`,transformOrigin:"center center",background:o.backgroundColor},children:i(E,{className:"BannerImage",src:o.url})},`BannerCylinderFace-${r}`)})})}function j(t,n){if(n<3)throw new Error("边数 n 必须大于或等于 3");return t/(2*Math.tan(Math.PI/n))}function R(t,n){if(n<3)throw new Error("边数必须大于等于 3");return t/Math.sin(Math.PI/n)}function F(t,n){return n/t*(180/Math.PI)}export{z as B};
