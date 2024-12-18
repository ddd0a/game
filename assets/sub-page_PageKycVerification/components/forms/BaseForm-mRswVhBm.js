import{n as a,j as g,a as o,F as w}from"../../../vendor_emotion-nEVkPYdj.js";import{e as N,b as B,t as A}from"../../../core-z1JMQ5Ff.js";import{b as v,x as f,r as i,c as V}from"../../../vendor_react-DLFB9-kf.js";import{u as I}from"../../data-BtPHYjuj.js";import{B as x}from"../../../components-DVpIsGwS.js";import{F as M}from"./source-DpEV4B_4.js";import{k as P,b as R,s as D}from"../../utils-ClAOSpnF.js";import{i as L,b as O,m as T,C as z}from"../../../features-CK6znDLX.js";const j=a.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 32rem;
  > div[data-section-name] {
    gap: 16rem;
  }
  padding: 0 var(--base-padding);
  padding-bottom: var(--base-padding);
`;function re(t){var n,c;const{children:s,...e}=t;return g(w,{children:[o(j,{...e,children:s}),o(H,{}),N.isDevMode&&o(G,{}),o(J,{memoActionNextButtonText:(n=t.actionProps)==null?void 0:n.memoActionNextButtonText,callbackActionNextButtonOnClick:(c=t.actionProps)==null?void 0:c.callbackActionNextButtonOnClick})]})}const E=a.div`
  position: sticky;
  display: flex;
  flex-direction: row;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16rem 20rem;
  gap: 12rem;
  justify-content: space-between;
  align-items: center;
  background: #ffffffbf;
  z-index: 10;
`,q=a.button`
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 40rem;
  width: 40rem;
  height: 40rem;
  border-radius: 40rem;
  position: relative;
  background: #ffffff;
  border: 1px solid #1c1e211a;

  > svg {
    width: 24rem;
    height: 24rem;
    position: absolute;
    transform-origin: center;
    transform: rotate(180deg);
    pointer-events: none;
  }
`,K=a(x)`
  border-radius: 20rem;
  width: 250%;
  font-size: 16rem;
  line-height: 24rem;
  font-weight: 500;
`,_=a(x)`
  border-radius: 20rem;
  width: 100%;
  font-size: 16rem;
  line-height: 24rem;
  font-weight: 500;
`;function J(t){const s=v(),e=I(),n=f(),c=i.useMemo(()=>{var r;return((r=P[e.currentStepName.enum])==null?void 0:r.requiredPath)??[]},[e.currentStepName.enum]),l=i.useCallback(async()=>{const r=c.map(async d=>await n.trigger(d));return(await Promise.all(r)).every(Boolean)},[n,c]),b=B(async()=>await l(),!1,[l]),h=i.useMemo(()=>n.formState.disabled?e.currentScreenStepIndex===e.currentScreenSteps.length-1:!b||n.formState.isSubmitting,[n.formState.disabled,n.formState.isSubmitting,b,e.currentScreenStepIndex,e.currentScreenSteps.length]),u=i.useMemo(()=>{if(t!=null&&t.memoActionNextButtonText){const r=t.memoActionNextButtonText(e.currentStepName.enum);if(r)return r}return e.currentScreenStepIndex===e.currentScreenSteps.length-1?"Submit":"Next"},[e.currentScreenStepIndex,e.currentScreenSteps.length,e.currentStepName.enum,t]),S=i.useCallback(async()=>{const r=m=>D("full",m);await n.handleSubmit(r,R)()},[n]),C=i.useMemo(()=>e.currentScreenStepIndex>0&&e.currentScreenSteps.length>1,[e.currentScreenStepIndex,e.currentScreenSteps.length]),p=V(L),k=O(),y=i.useMemo(()=>n.formState.disabled?"Close":"Do it later",[n.formState.disabled]),F=i.useCallback(async r=>{if(!(t!=null&&t.callbackActionNextButtonOnClick&&!t.callbackActionNextButtonOnClick(r)))switch(u){case"Next":{if(n.formState.disabled){e.moveNext();break}await l()&&e.moveNext();break}case"Submit":{if(await l())try{await S(),await T(),await z(),await e.moveNext()}catch(d){console.error("submitKycForm:Error",d),A("Failed to submit KYC form",{level:"error"})}break}}},[u,n.formState.disabled,e,t,S,l]);return g(E,{children:[C&&o(q,{onClick:e.movePrevScreenStep,children:o(M,{})}),o(K,{onClick:F,disabled:h,style:{backgroundColorLeft:"#FF3568",backgroundColorRight:"#FF5CC9"},children:u}),o(_,{frameType:"outline",style:{backgroundColorLeft:"#ffffff",backgroundColorRight:"#ffffff",frameColorLeft:"#FF3568",frameColorRight:"#FF5CC9",color:"#FF3568"},onClick:()=>{p(!0),e.isSubPageMode?k.close():s(-1)},children:y})]})}const Y=a.pre`
  position: fixed;
  left: 0;
  top: 0;
  word-wrap: normal;
  font-family: monospace;
  font-size: 8rem;
  pointer-events: none;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.6);
  opacity: 0.5;
`;function G(){const s=f().watch();return o(Y,{children:JSON.stringify(s,null,2)})}function H(){return f().watch(),null}export{re as B};
