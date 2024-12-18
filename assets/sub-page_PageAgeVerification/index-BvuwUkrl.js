import{n as i,a as e,j as a}from"../vendor_emotion-nEVkPYdj.js";import{F as k}from"../pages_Home/HomeLayout/Header-CwdKsQKC.js";import{F as v,a as C,b as y,c as w,d as F}from"./source-DXjr1Jqj.js";import{B as A}from"../components-DVpIsGwS.js";import{X as m,Y as l,Z as R,b as P,l as z}from"../features-CK6znDLX.js";import{m as n}from"../vendor_framer_motion-C4By12OG.js";import{a as L,f as u,c as b}from"../vendor_react-DLFB9-kf.js";const D=i(n.div)`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  &,
  * {
    font-family: Gilroy !important;
  }
`,B=L(null,(o,r,t)=>{r(m,c=>{const h=t===l.length-1,s=c.map((d,g)=>h?!c[c.length-1]:g===t?!d:d),x=s.every((d,g)=>g===l.length-1||d);return s[s.length-1]=x,s})});function ne(){return e(D,{children:a(S,{children:[a(j,{children:[e(N,{}),e(I,{children:"The Following Personalities Are Not Allowed To Register And/Or Play In This Online Gaming Website:"}),a(T,{children:[e(Y,{}),a(q,{children:[e("p",{children:"Funds or credits in the account of player who is found ineligible to play shall mean forfeiture of said funds/credits in favor of the Government."}),e("p",{children:"You are prohibited to play in open and public places."})]}),e(Z,{}),e(H,{})]})]}),a($,{children:[e(V,{}),e(G,{})]})]})})}const S=i(n.div)`
  --base-gap-y: 12rem;
  --base-border-color: #0000009f;
  --base-padding-x: 12rem;
  --base-padding-y: 10rem;
  --rules-padding: 12rem;

  position: relative;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 12rem 12rem 0 0;
  background: linear-gradient(to bottom, #ffd6eb 0%, #ffffff 10%, #ffffff 100%);
`,j=i(n.div)`
  box-sizing: border-box;
  padding: var(--base-padding-y) var(--base-padding-x);
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--base-gap-y);
`;i.h2`
  text-align: center;
  font-weight: 400;
`;const N=i(k)`
  align-self: center;
  height: 32rem;
  width: auto;
  margin: 12rem 0;
`;i(n.div)`
  cursor: pointer;
  position: absolute;
  right: var(--base-padding-x);
  top: var(--base-padding-y);
`;const I=i(n.div)`
  box-sizing: border-box;
  font-size: 14rem;
  line-height: 20rem;
`,T=i(n.div)`
  display: flex;
  flex-direction: column;
  gap: var(--base-gap-y);
`,$=i(n.div)`
  display: flex;
  justify-content: space-evenly;
  padding: 12rem;
  padding-bottom: 24rem;
`,V=i(v)`
  height: 24rem;
  width: auto;
`,G=i(C)`
  height: 24rem;
  width: auto;
`,E=i(n.div)`
  display: flex;
  flex-direction: column;
  gap: var(--base-gap-y);
`,f=i(A)`
  font-size: 16rem !important;
  height: 40rem !important;
  line-height: 24rem;
`;function H(){const o=u(R),r=P(),t=b(z);return a(E,{children:[e(f,{style:{backgroundColorLeft:"#FF3568",backgroundColorRight:"#FF5CC9"},disabled:!o,onClick:()=>{r.close(),t(o)},children:"Proceed"}),e(f,{frameType:"outline",style:{backgroundColorLeft:"#FFF",backgroundColorRight:"#FFF",frameColorLeft:"#FF3568",frameColorRight:"#FF5CC9",color:"#FF3568"},onClick:()=>{window.location.href="https://www.facebook.com/profile.php?id=61558064663091"},children:"Exit"})]})}const O=i(n.div)`
  box-sizing: border-box;
  display: inline-flex;
  flex-direction: column;
  gap: var(--base-gap-y);
  border-radius: 5rem;
  padding: var(--rules-padding);
  box-shadow: 0 0 1rem var(--base-border-color);
  max-height: 40vh;
  overflow-y: auto;
  background: #ffffff;
`;function Y(){const o=l.slice(0,l.length-1);return e(O,{children:o.map((r,t)=>e(p,{content:r,index:t,isDisplayChecked:!0,isLi:!0},t))})}const _=i(n.div)`
  font-size: 14rem;
  line-height: 20rem;
  display: inline-flex;
  cursor: pointer;
  gap: 8rem;
  align-items: center;
  --w-check-box-svg: 20rem;

  .check-box-svg {
    min-width: var(--w-check-box-svg);
    width: var(--w-check-box-svg);
    min-height: var(--w-check-box-svg);
    height: var(--w-check-box-svg);
  }
  .check-box-svg-li {
    min-width: 8rem;
    width: 8rem;
    min-height: 8rem;
    height: 8rem;
  }

  &[data-is-li='true'] {
    pointer-events: none;
    align-items: flex-start;
    font-size: 12rem;
    line-height: 16rem;
    gap: 8rem;
  }
`,M=i(y)``,W=i.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 14rem;
  &[data-is-check-all='true'] {
    height: 30rem;
  }
`;function p(o){const r=b(B),t=u(m)[o.index]||o.isDisplayChecked;return a(_,{onClick:h=>{h.target instanceof HTMLAnchorElement||r(o.index)},className:"check-box-paragraph","data-is-li":o.isLi,children:[e(W,{"data-is-check-all":o.isCheckAll,children:t?o.isLi?e(M,{className:"check-box-svg-li"}):e(w,{className:"check-box-svg"}):e(F,{className:"check-box-svg"})}),e("div",{children:o.content})]})}const X=i.div`
  /* padding: 0rem var(--rules-padding); */
`;function Z(){return e(X,{children:e(p,{content:l[l.length-1],index:l.length-1,isCheckAll:!0})})}const q=i.div`
  font-weight: 400;
  font-size: 14rem;
  line-height: 20rem;
  > p {
    padding: 0;
    margin: 0;
    &::first-letter {
      font-size: 1.2em;
      font-weight: 600;
      color: #ff3568;
    }
  }
`;export{ne as P};
