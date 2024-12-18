import{n,a as c,j as b,F as P}from"../../../vendor_emotion-CZWcTM8j.js";import{t as V}from"../../../core-B_o7srNM.js";import{C as H}from"../../../features-tA-DxrQa.js";import{D as J}from"../../../vendor_antd-DtS5X67P.js";import{r as f}from"../../../vendor_react-Bz04f6Pj.js";import{F as K,a as Q}from"./source-Bxx8IloA.js";import{N as U}from"../../../api_interface-Cwk1YCej.js";const ve=({iconUrl:q,account:z,className:$,color:M,selected:S,disabled:w,selectable:W,onClick:L,open:m=!1,onOpen:E,onClose:X,id:B})=>{const d=f.useRef(null),A=f.useRef(null),g=f.useRef(0),a=f.useRef(0),h=f.useRef(m);f.useEffect(()=>{let x=0,k=0;const I=()=>{cancelAnimationFrame(x),h.current=!0,m||E==null||E();const t=200,r=a.current,o=-A.current.clientWidth;let i=null;const s=u=>{i||(i=u);const R=u-i,v=Math.min(R/t,1),p=r+(o-r)*v;d.current&&(d.current.style.transform=`translateX(${p}px)`,a.current=p),v<1&&(x=requestAnimationFrame(s))};x=requestAnimationFrame(s)},F=()=>{cancelAnimationFrame(k),h.current=!1,m&&(X==null||X());const t=200,r=a.current,o=0;let i=null;const s=u=>{i||(i=u);const R=u-i,v=Math.min(R/t,1),p=r+(o-r)*v;d.current&&(d.current.style.transform=`translateX(${p}px)`,a.current=p),v<1&&(k=requestAnimationFrame(s))};k=requestAnimationFrame(s)};h.current!==m&&(m?(h.current=!0,I()):(h.current=!1,F()));const y=t=>{var r,o;t.preventDefault(),g.current=t.clientX??((o=(r=t.touches)==null?void 0:r[0])==null?void 0:o.clientX)},D=t=>{var s,u;t.preventDefault();const r=g.current;if(r<=0)return;let o=t.clientX;o||(o=(u=(s=t.touches)==null?void 0:s[0])==null?void 0:u.clientX);const i=o-r+a.current;i>0||(d.current.style.transform=`translateX(${i}px)`)},l=t=>{var s;if(t.preventDefault(),g.current<=0)return;let r=t.clientX;r||(r=(s=t.changedTouches[0])==null?void 0:s.clientX);const o=r-g.current;if(g.current=0,a.current+=o,a.current>0&&(a.current=0),Math.abs(o)<10){h.current||L==null||L(),F();return}const i=A.current.clientWidth;if(a.current<-(i*.6)){I();return}F()},e=d.current;if(!w&&e)return e.addEventListener("mousedown",y),e.addEventListener("mousemove",D),e.addEventListener("mouseup",l),e.addEventListener("mouseleave",l),e.addEventListener("touchstart",y,{passive:!1}),e.addEventListener("touchmove",D,{passive:!1}),e.addEventListener("touchend",l),e.addEventListener("touchcancel",l),()=>{e.removeEventListener("mousedown",y),e.removeEventListener("mousemove",D),e.removeEventListener("mouseup",l),e.removeEventListener("mouseleave",l),e.removeEventListener("touchstart",y),e.removeEventListener("touchmove",D),e.removeEventListener("touchend",l),e.removeEventListener("touchcancel",l)}},[L,E,X,m,w]);const[T,j]=f.useState(!1),N=async()=>{if(T)return;j(!0),(await U({id:B})).success&&(V("delete account successful"),await H()),j(!1)},G=f.useMemo(()=>M,[M]);return c("div",{className:$,children:b(Y,{"data-disabled":w,children:[c(oe,{onClick:N,ref:A,children:T?c(ce,{color:"white"}):b(P,{children:[c(ie,{}),c(se,{children:"Delete"})]})}),b(Z,{ref:d,children:[c(_,{style:{backgroundColor:G}}),b(C,{children:[b(O,{children:[c(ee,{src:q}),c(te,{children:z})]}),W&&c(re,{children:S&&c(ne,{})})]}),w&&c(ae,{children:"Not available"})]})]})})},Y=n.div`
  height: 56rem;
  overflow: hidden;
  border-radius: 6rem;
  background-color: #f53f3f;
  position: relative;
  &[data-disabled='true'] {
    background-color: #5e5e5e;
    pointer-events: none;
  }
`,Z=n.a`
  display: block;
  height: 100%;
  position: relative;
  width: 100%;
  background-color: #ffffff;
`,_=n.div`
  background-image: url('/account-item-bg.svg');
  background-size: 337rem 152.72rem;
  background-position: right -50rem;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.15),
      transparent
    );
  }
`,C=n.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
`,O=n.div`
  padding-left: 16rem;
  padding-top: 8rem;
`,ee=n.img`
  height: 16rem;
`,te=n.div`
  color: #ffffff;
  font-weight: 500;
  font-size: 16rem;
  line-height: 24rem;
`,re=n.div`
  height: 16rem;
  width: 16rem;
  border-radius: 8rem;
  background-color: #ffffff;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  right: 16rem;
  top: 20rem;
`,ne=n(K)`
  height: 6rem;
  width: 8rem;
`,oe=n.a`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 52rem;
  text-align: center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,ie=n(Q)`
  width: 16rem;
  height: 16rem;
`,se=n.div`
  font-size: 12rem;
  line-height: 16rem;
  margin-top: 4rem;
`,ce=n(J)``,ae=n.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: Gilroy;
  font-weight: 600;
  color: #ffffff;
  z-index: 1;
`;export{ve as A};
