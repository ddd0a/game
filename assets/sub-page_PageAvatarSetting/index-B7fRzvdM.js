import{F as C,_ as x,a as A,b as S,c as U,d as j,e as P,f as F,g as L,h as B,i as I,j as M,k as E,l as R,m as z,n as O,o as T}from"./source-CD5rmcCl.js";import{n as c,j as b,a as o}from"../vendor_emotion-CZWcTM8j.js";import{r as s,e as H,a as p,c as W,u as m,f as y}from"../vendor_react-Bz04f6Pj.js";import{B as D}from"../components-DTw2mVnC.js";import{g as Z,d as $,t as h}from"../core-B_o7srNM.js";import{b as k,W as G,_ as K,C as N}from"../features-tA-DxrQa.js";import{_ as V}from"../vendor_lodash-CD85c6SO.js";import{S as q}from"../api_interface-Cwk1YCej.js";const J=({title:e,titleId:t,...a},i)=>s.createElement("svg",{width:8,height:8,viewBox:"0 0 8 8",xmlns:"http://www.w3.org/2000/svg",ref:i,"aria-labelledby":t,...a},e?s.createElement("title",{id:t},e):null,s.createElement("path",{d:"M1.14763 0.197146C0.885091 -0.0653897 0.459437 -0.0653897 0.196901 0.197146C-0.0656338 0.459681 -0.0656338 0.885335 0.196901 1.14787L3.04971 3.99941L0.196901 6.85222C-0.0656338 7.11476 -0.0656338 7.54041 0.196901 7.80295C0.459437 8.06548 0.885091 8.06548 1.14763 7.80295L7.8027 1.14787C8.06524 0.885335 8.06524 0.459681 7.8027 0.197146C7.54017 -0.0653897 7.11451 -0.0653897 6.85198 0.197146L4.00044 3.04869L1.14763 0.197146ZM4.63362 5.58459L5.58434 4.63386L7.8027 6.85222C8.06524 7.11476 8.06524 7.54041 7.8027 7.80295C7.54017 8.06548 7.11451 8.06548 6.85198 7.80295L4.63362 5.58459Z"})),Q=s.forwardRef(J);function X(){const e=Object.assign({"./source/boy-0.png":x,"./source/boy-1.png":A,"./source/boy-2.png":S,"./source/boy-3.png":U,"./source/filbet-0.png":j,"./source/filbet-1.png":P,"./source/filbet-2.png":F,"./source/filbet-3.png":L,"./source/girl-0.png":B,"./source/girl-1.png":I,"./source/girl-2.png":M,"./source/girl-3.png":E,"./source/sport-0.png":R,"./source/sport-1.png":z,"./source/sport-2.png":O,"./source/sport-3.png":T});return V.groupBy(Object.keys(e).map(a=>{var l;const i=(l=a.match(/\.\/source\/(.*)\.(png|jpg|jpeg)/))==null?void 0:l[1];return{key:i,group:i==null?void 0:i.split("-")[0],url:e[a].default}}),"group")}function Y(e){return Object.keys(e).map(t=>({title:(()=>{switch(t){case"filbet":return"Filbet illustration";case"boy":return"AI generated boys";case"girl":return"AI generated girls";case"sport":return"Sports";default:return t}})(),group:t,avatars:e[t]}))}const ee=Y(X()),te=$(localStorage),w=H(Z("defaultAvatarAtom"),null,te,{getOnInit:!0}),_=p(),v=p(!1),ae=p(null,(e,t)=>{t(_,void 0),t(v,!1)}),re=c.div`
  --base-gap: 20rem;
  --base-padding: 20rem;
  --base-padding-x: 20rem;
  --base-padding-y: 20rem;

  width: 100%;
  font-family: 'Gilroy', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  flex: 1;
  background: linear-gradient(
    to right,
    #dbe9ffcc 0%,
    #dbe9ffcc 70%,
    #f5e4f4cc 100%
  );
  padding: var(--base-padding-y) var(--base-padding-x);
  padding-top: 0;
  &,
  * {
    box-sizing: border-box;
  }
  backdrop-filter: blur(1rem);
`;function je(){const e=W(ae);return s.useEffect(()=>()=>{e()},[e]),b(re,{children:[o(oe,{children:"Avatar"}),o(ie,{}),o(se,{children:o(le,{children:ee.map(t=>o(fe,{config:t},t.group))})}),o(_e,{})]})}const oe=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44rem;
  font-weight: 500;
  font-size: 18rem;
  line-height: 28rem;
`,ne=c(Q)`
  cursor: pointer;
  position: absolute;
  right: 12rem;
  top: 12rem;
  width: 16rem;
  height: 16rem;
  fill: #000;
`;function ie(){const e=k();return o(ne,{onClick:()=>{e.close()}})}const se=c.div`
  position: relative;
  flex: 1;
  overflow-y: auto;
  /* hide scorllbar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,le=c.div`
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  padding: 0 0;
  gap: 16rem;
`,ce=c.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8rem;
`,de=c.div`
  font-weight: 400;
  font-size: 16rem;
  line-height: 24rem;
`,ge=c.div`
  display: flex;
  flex-direction: row;
  gap: var(--base-gap);
  margin-left: 8rem;
`;function fe(e){return b(ce,{children:[o(de,{children:e.config.title}),o(ge,{children:e.config.avatars.map((t,a)=>o(be,{data:t},a))})]})}const ue=c(C)`
  position: absolute;
  width: 16rem;
  height: 16rem;
  right: 0;
  bottom: 0;
`,me=c.div`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 66rem;
  > img {
    width: inherit;
  }
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 50%;
  }
  &[data-is-picked='true'] {
    &::before {
      transform-origin: center center;
      transform: scale(1.08);
      background: radial-gradient(
        circle at center,
        #ffffff00 0%,
        #ffffff00 68%,
        #fb517b 68%,
        #fb517b 70%
      );
    }
  }
  &[data-default-picked='true'] {
    &::before {
      transform-origin: center center;
      transform: scale(1.08);
      background: radial-gradient(
        circle at center,
        #ffffff00 0%,
        #ffffff00 68%,
        #517efb 68%,
        #517efb 70%
      );
    }
    .icon-picked {
      path {
        fill: #517efb;
      }
    }
  }
  &[data-disabled='true'] {
    pointer-events: none;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function be(e){const t=s.useRef(null),[a,i]=m(_),l=y(v),d=s.useMemo(()=>l,[l]),r=y(w),u=s.useMemo(()=>a!=null&&a.key?a.key===e.data.key:r!=null&&r.key?r.key===e.data.key:!1,[r==null?void 0:r.key,a==null?void 0:a.key,e.data.key]),n=s.useMemo(()=>(r==null?void 0:r.key)===e.data.key,[r,e.data.key]);n&&console.log(r,e.data);const g=s.useCallback(()=>{d||n||i(f=>(f==null?void 0:f.key)===e.data.key?void 0:{...e.data,img:t.current})},[d,n,i,e.data]);return b(me,{onClick:g,"data-is-picked":u,"data-disabled":d,"data-default-picked":n,children:[o("img",{ref:t,src:e.data.url,alt:e.data.key}),(u||n)&&o(ue,{className:"icon-picked"})]})}const pe=c.div`
  margin-top: 20rem;
`;function _e(){return o(pe,{children:o(ve,{})})}function ve(){const[e]=m(_),[t,a]=m(v),i=k(),[l,d]=m(w),r=s.useMemo(()=>t,[t]),u=s.useMemo(()=>r?!0:l?e?l.key===e.key:!0:!e,[l,r,e]);return o(D,{disabled:u,frameType:"solid",loading:r,onClick:async()=>{if(a(!0),e){const n=ye(e.img,`${e.key}.png`),g=await G({filename:n.name,fileContentType:n.type,contentLength:n.size},"avatar");if(g.data)try{await K({uploadUrl:g.data.uploadUrl,file:n,headers:g.data.header}),await q({avatarUrl:g.data.visitUrl});const f={key:e.key,group:e.group,url:g.data.visitUrl};d(f),await N(),h("Avatar updated",{level:"success"}),setTimeout(()=>{i.close()},1e3)}catch(f){console.error(f),h("Failed to upload avatar",{level:"error"}),a(!1)}}},style:{backgroundColorLeft:"#FF3568",backgroundColorRight:"#FF5CC9",width:"100%"},children:"Save"})}function ye(e,t="avatar.png"){const a=document.createElement("canvas");a.width=e.naturalWidth,a.height=e.naturalHeight,a.getContext("2d").drawImage(e,0,0);const l=a.toDataURL("image/png"),d=atob(l.split(",")[1]),r=[];for(let n=0;n<d.length;n++)r.push(d.charCodeAt(n));const u=new Blob([new Uint8Array(r)],{type:"image/png"});return new File([u],t,{type:"image/png"})}export{je as P};
