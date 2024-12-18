import{n as s,j as d,a as n,F as R}from"../vendor_emotion-nEVkPYdj.js";import{c as w}from"../components-DVpIsGwS.js";import{b as v,k as C,r as a,O as E}from"../vendor_react-DLFB9-kf.js";import{PATHS as r}from"../pagePaths-6FEed3-5.js";import{m as x,e as b}from"../vendor_framer_motion-C4By12OG.js";const g=[{title:"Balance",path:r.RECORD_BALANCE},{title:"Deposit",path:r.RECORD_DEPOSIT},{title:"Withdraw",path:r.RECORD_WITHDRAW},{title:"Bet",path:r.RECORD_BET}],S=()=>{const u=v(),{pathname:m}=C(),c=b(),l=a.useMemo(()=>g.findIndex(t=>t.path===m),[m]),f=a.useRef([]),h=a.useRef(null);return a.useEffect(()=>{const t=f.current[l];if(t){t.scrollIntoView();const e=h.current;if(e){const o=t.getBoundingClientRect(),i=e.getBoundingClientRect(),p=o.left-i.left+e.scrollLeft+o.width/2;c.start({x:p})}}},[c,l]),d(R,{children:[n(w,{title:"Account Records",children:n(B,{children:d(O,{ref:h,children:[g.map(({title:t,path:e},o)=>n(T,{ref:i=>{i&&(f.current[o]=i)},onClick:()=>u(e,{replace:!0}),className:l===o?"active":void 0,children:t},t)),n(D,{animate:c})]})})}),n(E,{})]})},B=s.div`
  padding: 12rem;
  margin: 0 auto;
`,D=s(x.div)`
  position: absolute;
  bottom: 0;
  width: 24rem;
  height: 2rem;
  background-color: #323232f2;
  margin-left: -12rem;
`,O=s.div`
  display: flex;
  position: relative;
  gap: 20rem;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0; /* 隐藏滚动条 */
    height: 0; /* 隐藏滚动条 */
  }
`,T=s.a`
  display: block;
  line-height: 24rem;
  height: 30rem;
  font-weight: 400;
  color: hsla(0, 0%, 63%, 1);
  font-size: 16rem;
  min-width: 60rem;
  text-align: center;
  &.active {
    color: hsla(0, 0%, 20%, 1);
    font-weight: 510;
  }
`;export{S as R};
