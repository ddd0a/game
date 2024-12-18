import{n as c,c as te,j as r,a as t}from"../../vendor_emotion-CZWcTM8j.js";import{r as m,b as se}from"../../vendor_react-Bz04f6Pj.js";import{u as ne}from"./data-BRiQ_e_6.js";import{F as re}from"./FixedPointer-BiWAZHoD.js";import{F as oe,a as ae,b as ce}from"../Vip-BcZuT_Iu.js";import{P as ie}from"./Pointer-DfAJsDhk.js";import{T as le}from"./Ticks-DRWe-cOK.js";import{PATHS as ue}from"../../pagePaths-6FEed3-5.js";import{L as me}from"./Level-Da79DUhT.js";import{m as f,b as de,c as M,a as x,d as W}from"../../vendor_framer_motion-DoAUFi0s.js";const I=[{hue:0,brightness:1,saturate:1,contrast:1},{hue:35,brightness:1,saturate:1.2,contrast:1.2},{hue:115,brightness:1,saturate:1,contrast:1.1},{hue:200,brightness:.95,saturate:1,contrast:1.1},{hue:280,brightness:1,saturate:1,contrast:1}];function he(R){const d=I.length,k=Math.floor(R);let o=R%1;const s=I[(k%d+d)%d];if(o<0&&(o+=1),o===0)return s;const n=I[((k+1)%d+d)%d];let C=n.hue-s.hue;C<0&&(C+=360);let E=C*o+s.hue;const i=(n.brightness-s.brightness)*o+s.brightness,L=(n.saturate-s.saturate)*o+s.saturate,v=(n.contrast-s.contrast)*o+s.contrast;return E=(E%360+360)%360,{hue:E,brightness:i,saturate:L,contrast:v}}const Ve=({children:R,Header:d})=>{const{levelScores:k,progress:o,scaleAngle:s,currentLevel:n,scaleCount:C,levelsInfo:E}=ne(),i=de(0),L=m.useRef(0),v=m.useRef(0),T=m.useRef(null),j=m.useRef(),[$,V]=m.useState(n);m.useEffect(()=>{V(n)},[n]);const P=m.useMemo(()=>{const e=E[$]??{},h=e.vipRebateRate?Math.round(parseFloat(e.vipRebateRate)*1e4)/100:0,p=e.vipBonusAmount??"0";return{rebate:h,dailyBonus:p}},[$,E]),{maxOffset:O,minOffset:A,getColors:Z}=m.useMemo(()=>{const e=n,h=n-C;return{maxOffset:e,minOffset:h,getColors:l=>he(o-l)}},[n,o,C]),D=m.useRef(null);m.useEffect(()=>{const e=D.current;if(e){const h=a=>{var b,u,w;a.preventDefault(),L.current=a.clientX??((u=(b=a.touches)==null?void 0:b[0])==null?void 0:u.clientX),(w=T.current)==null||w.stop(),clearTimeout(j.current)},p=a=>{var z,H;a.preventDefault();const b=L.current;if(b<=0)return;let u=a.clientX;if(u||(u=(H=(z=a.touches)==null?void 0:z[0])==null?void 0:H.clientX),isNaN(u))return;const ee=(u-b)/120+v.current;i.set(ee)},l=a=>{a.preventDefault(),L.current=0,v.current=i.get();const b=v.current,u=Math.min(Math.max(Math.round(b),A),O);V(n-u),T.current=W(i,u,{duration:.3,ease:"backOut",onUpdate:w=>{v.current=w},onComplete:()=>{j.current=setTimeout(_,3e3)}})},_=()=>{T.current=W(i,0,{duration:.3,ease:"backOut",onUpdate:a=>{v.current=a},onComplete:()=>V(n)})};return e.addEventListener("mousedown",h),e.addEventListener("mousemove",p),e.addEventListener("mouseup",l),e.addEventListener("mouseleave",l),e.addEventListener("touchstart",h,{passive:!1}),e.addEventListener("touchmove",p,{passive:!1}),e.addEventListener("touchend",l),e.addEventListener("touchcancel",l),()=>{e.removeEventListener("mousedown",h),e.removeEventListener("mousemove",p),e.removeEventListener("mouseup",l),e.removeEventListener("mouseleave",l),e.removeEventListener("touchstart",h),e.removeEventListener("touchmove",p),e.removeEventListener("touchend",l),e.removeEventListener("touchcancel",l)}}},[n,O,A,i]);const q=M(i,[A-1,O+1],[(A-1)*s,(O+1)*s]),G=M(i,Z),N=M(G,e=>`hue-rotate(${e.hue}deg) brightness(${e.brightness}) saturate(${e.saturate}) contrast(${e.contrast})`),g=M(G,e=>e.hue),J=x`hsl(${g}, 100%, 90%)`,K=x`linear-gradient(to right,hsl(${g}, 70%, 80%),hsl(${g},60%, 75%))`,F=x`hsl(${g}, 80%, 48%)`,Q=x`hsl(${g}, 80%, 40%)`,U=x`hsl(${g}, 80%, 50%)`,Y=se();return r(fe,{style:{backgroundColor:J},children:[t(ve,{style:{backgroundImage:K},children:d&&t(d,{hueValue:g})}),r(ge,{style:{filter:N,willChange:"filter"},children:[r(Ee,{children:[t(oe,{css:y,style:{willChange:"transform"}}),t(f.div,{css:y,style:{rotate:q,willChange:"transform"},children:t(le,{values:k,progress:o,scaleAngle:s,css:y,style:{willChange:"transform"}})}),t(re,{css:y}),t(ie,{css:y,progress:o,scaleAngle:s,offsetValue:i}),t(ae,{css:y}),t(me,{css:y,value:$})]}),t(Ce,{ref:D})]}),r(pe,{children:[r(S,{children:[r(B,{style:{color:Q},children:["V",$]}),r(X,{style:{color:F},children:["current",t("br",{}),"vip level"]})]}),r(S,{children:[r(B,{style:{color:U},children:[P.rebate,"%"]}),r(X,{style:{color:F},children:["vip",t("br",{}),"rebate"]})]}),r(S,{children:[r(B,{style:{color:U},children:["₱",P.dailyBonus]}),r(X,{style:{color:F},children:["daily",t("br",{}),"free get"]})]})]}),t(ye,{style:{filter:N},children:t(be,{onClick:()=>Y(ue.WELFARE+"/bonus"),children:t(ce,{})})}),R]})},fe=c(f.div)`
  flex: 1;
  /* background-color: hsla(var(--primary-hue), 100%, 90%, 1); */
  /* transform: translateZ(0); */
  user-select: none;
  will-change: background;
`,ve=c(f.div)`
  padding-top: env(safe-area-inset-top);
  padding-bottom: 80rem;
  will-change: background;
`,ge=c(f.div)`
  height: 400rem;
  overflow: hidden;
  position: relative;
  margin-top: -100rem;
`,pe=c.div`
  margin-top: -40rem;
  display: flex;
  align-items: start;
  padding-left: 20rem;
`,S=c.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 5rem;
`,X=c(f.div)`
  letter-spacing: 0;
  white-space: nowrap;
`,B=c(f.div)`
  font-size: 24rem;
  font-weight: 500;
`,be=c(f.a)`
  display: block;
  width: 311rem;
  height: 96rem;
`,ye=c(f.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20rem;
`,Ce=c.div`
  position: absolute;
  touch-action: pan-x;
  /* background-color: rgba(0, 0, 0, 0.2); */
  width: 100%;
  height: 200rem;
  left: 0;
  top: 30rem;
`,Ee=c.div`
  width: 870rem;
  height: 870rem;
  position: absolute;
  left: 50%;
  transform: translateX(-430rem);
  top: 0;
`,y=te`
  width: 870rem;
  height: 870rem;
  position: absolute;
  left: 0;
  top: 0;
`;export{Ve as V};
