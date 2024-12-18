import{n as y,j as M,a as m,F as at}from"../../../vendor_emotion-nEVkPYdj.js";import{i as d}from"../../../core-z1JMQ5Ff.js";import{g as st,R as T,a as f,c as D,w as ct,r as b,f as v,u as B}from"../../../vendor_react-DLFB9-kf.js";import{B as lt}from"./BaseItem-DV2r0v-l.js";import{m as j,A as ut}from"../../../vendor_framer_motion-C4By12OG.js";const N=st(),dt=d().subtract(21,"year").startOf("D"),mt=d().set("y",1940).startOf("y"),ft=dt,yt=d("1996-06-06");function ht(t){b.useEffect(()=>{t!=null&&t.defaultDate&&N.set(E,!0)},[t==null?void 0:t.defaultDate]);const{defaultDate:i=yt.toDate(),options:c={minDateAvailable:mt.toDate(),maxDateAvailable:ft.toDate()}}=t??{},{minDateAvailable:l=d().set("y",1940).startOf("y").toDate(),maxDateAvailable:u=Date.now()}=c,r=d(l),s=d(u),n=b.useMemo(()=>{const L=f(!1),U=f(null,(o,a)=>{a(L,!0)}),W=f(null,(o,a)=>{a(L,!1)}),X=d(i).year(),Z=d(i).month(),tt=d(i).date(),p=f(X),k=f(Z),S=f(tt),et=f(o=>{const[a,e,h]=[o(p),o(k),o(S)];return d().set("y",a).set("M",e).set("D",h).startOf("D").toDate()}),nt=f(()=>{const o=d(s).year()-d(r).year()+1;return Array.from({length:o},(a,e)=>d(r).year()+e).map(a=>{const e=a<r.year()||a>s.year();return{type:"year",value:a,disabled:e}})}),ot=f(o=>{const e=o(p);return Array.from({length:12},(h,C)=>C).map(h=>{const C=e<=r.year()?e<r.year()?!0:h<r.month():e>=s.year()?e>s.year()?!0:h>s.month():!1;return{type:"month",value:h,disabled:C}})}),it=f(o=>{const a=d(d().set("year",o(p)).set("month",o(k))).daysInMonth();return Array.from({length:a},(e,h)=>h+1).sort((e,h)=>Number(e)-Number(h)).map(e=>{const h=o(p)===r.year()&&o(k)===r.month()?e<r.date():o(p)===s.year()&&o(k)===s.month()?e>s.date():!1;return{type:"date",value:e,disabled:h}})}),Y=f(null,(o,a,e)=>{e<r.year()||e>s.year()||a(p,e)}),z=f(null,(o,a,e)=>{o(p)===r.year()&&e<r.month()||o(p)===s.year()&&e>s.month()||a(k,e)}),I=f(null,(o,a,e)=>{o(p)===r.year()&&o(k)===r.month()&&e<r.date()||o(p)===s.year()&&o(k)===s.month()&&e>s.date()||a(S,e)}),rt=f(null,(o,a,e)=>{switch(e.type){case"year":a(Y,e.value);break;case"month":a(z,e.value);break;case"date":a(I,e.value);break}});return{isOpenAtom:L,openAtom:U,closeAtom:W,yearListAtom:nt,monthListAtom:ot,dayListAtom:it,pickedYearAtom:p,pickeMonthdAtom:k,pickedDayAtom:S,setPickedYearAtom:Y,setPickedMonthAtom:z,setPickedDayAtom:I,pickedDateAtom:et,pickAtom:rt}},[]),A=v(n.isOpenAtom),g=D(n.openAtom),x=D(n.closeAtom),P=v(n.yearListAtom),H=v(n.monthListAtom),G=v(n.dayListAtom),J=D(n.setPickedYearAtom),q=D(n.setPickedMonthAtom),V=D(n.setPickedDayAtom),K=v(n.pickedDateAtom),Q=D(n.pickAtom);return{_atoms:n,isOpen:A,open:g,close:x,yearList:P,monthList:H,dayList:G,setPickedYear:J,setPickedMonth:q,setPickedDay:V,pickedDate:K,pick:Q}}const pt=y(j.div)`
  --unit-height: 48rem;
  z-index: 5000;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex: 1;
  height: 50vh;
  overflow: auto;
  border-top-left-radius: 12rem;
  border-top-right-radius: 12rem;
  background: white;
  font-family: 'Gilroy';
  align-items: center;
`,$=T.createContext(null);function w(){const t=T.useContext($);if(!t)throw new Error("useDatePickerContext must be used within a DatePickerContext");return t}const R=f(null),_=f(0),E=f(!1);function bt(){const t=w(),[i,c]=B(_);b.useEffect(()=>()=>{c(0)},[]),b.useEffect(()=>{const u=setTimeout(()=>{var s,n,A,g;const r=document.querySelectorAll('.date-picker-option-box[data-picked="true"]');for(const x of r){const P=Number((n=(s=x.parentElement)==null?void 0:s.computedStyleMap().get("padding-top"))==null?void 0:n.toString().replace("px",""));(g=(A=x.parentElement)==null?void 0:A.parentElement)==null||g.scrollTo({top:x.offsetTop-P,behavior:i?"smooth":"instant"})}},i?500:0);return()=>{clearTimeout(u)}},[i]);const l=v(E);return b.useEffect(()=>{var u;(u=t.onChange)==null||u.call(t,l?t.pickedDate:void 0)},[t.pickedDate]),null}function Tt(t){const i=ht(t.hookProps),c=D(R);return M($.Provider,{value:{...i,onChange:t.onChange},children:[m(jt,{disabled:t.disabled}),t.open??i.isOpen?ct.createPortal(M(at,{children:[m(bt,{}),m(xt,{}),m(ut,{children:M(pt,{initial:{y:"100%"},animate:{y:0,transition:{duration:.5,stiffness:100,type:"spring"}},ref:l=>{if(l){const u=window.getComputedStyle(document.documentElement).fontSize,r=40*Number(u.replace("px","")),s=(l.offsetHeight-r)/2*-1,n=new IntersectionObserver(A=>{for(const g of A)if(g.isIntersecting&&g.intersectionRatio===1&&N.get(_)>0){const x=g.target,P=JSON.parse(x.getAttribute("data-unit")??"");i.pick(P)}},{root:l,rootMargin:`${s}px 0px ${s}px 0px`,threshold:1});c(n)}},children:[m(Lt,{}),M(gt,{children:[m(O,{title:"Month",type:"month"}),m(O,{title:"Day",type:"date"}),m(O,{title:"Year",type:"year"})]}),m(F,{}),m(vt,{}),m(Ct,{})]})})]}),document.body):null]})}const gt=y(j.div)`
  position: relative;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  height: 100%;
`,kt=y.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  /* hide scrollbar */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Dt=y(j.div)`
  position: fixed;
  background: #0000006e;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5000;
`;function xt(){const t=w();return m(Dt,{initial:{opacity:0,backdropFilter:"blur(0rem)"},animate:{opacity:1,backdropFilter:"blur(2rem)",transition:{duration:.3}},onClick:t.close})}const vt=y.div`
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
`;function O(t){const i=w(),c=D(_),l=b.useMemo(()=>{switch(t.type){case"year":return i.yearList;case"month":return i.monthList;case"date":return i.dayList}},[i.dayList,i.monthList,i.yearList,t.type]);return m(kt,{onScroll:()=>{c(u=>u+1)},onTouchMove:()=>{c(u=>u+1)},children:m(At,{children:l.map(u=>m(Mt,{unit:u},`${u.type}-${u.value}`))})})}y.h1`
  position: absolute;
  top: 0;
  margin: 0;
  z-index: 2;
`;const At=y.div`
  --padding-y: calc((50vh - var(--unit-height)) / 2);
  padding-top: var(--padding-y);
  padding-bottom: var(--padding-y);
  display: inline-flex;
  flex-direction: column;
  height: auto;
`,wt=y.div`
  position: relative;
  height: var(--unit-height);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > h2 {
    font-weight: 400;
    font-size: 16rem;
    line-height: 22rem;
    margin: 0;
  }
  &[data-disabled='true'] {
    opacity: 0.5;
    color: red;
    /* line through */
    text-decoration: line-through;
  }
`,Pt=y.div`
  display: block;
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: red;
  opacity: 0;
`;function Mt(t){const i=w(),c=v(R),l=b.useRef(null),u=b.useRef(null);b.useEffect(()=>{if(l.current)return c==null||c.observe(l.current),()=>{l.current&&(c==null||c.unobserve(l.current))}},[c]);const r=b.useMemo(()=>{const n=d().set(t.unit.type,t.unit.value);switch(t.unit.type){case"year":return n.format("YYYY");case"month":return n.format("MMMM");case"date":return n.format("D")}},[t.unit.type,t.unit.value]),s=b.useMemo(()=>d(i.pickedDate).get(t.unit.type)===t.unit.value,[i.pickedDate,t.unit.type,t.unit.value]);return M(wt,{className:"date-picker-option-box",ref:u,"data-picked":s,"data-disabled":t.unit.disabled,children:[m("h2",{children:r}),m(Pt,{ref:n=>{l.current=n,n==null||n.setAttribute("data-unit",JSON.stringify(t.unit))}})]})}const F=y.div`
  height: var(--unit-height);
  position: absolute;
  border: 1px solid #c2c2c2;
  width: 100%;
  pointer-events: none;
`;function Lt(){return m(F,{})}const St=y.div`
  position: absolute;
  bottom: 24rem;
  left: 0;
  width: 100%;
  height: 10rem;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-family: Gilroy;
  z-index: 5001;
  font-size: 16rem;
  font-weight: 500;
  color: #0073ff;
  &::before {
    content: var(--age);
  }
`;function Ct(){const t=w(),i=d(t.pickedDate).format("LL"),c=d().diff(t.pickedDate,"year"),l=`${i} (${c} years old)`;return m(St,{children:l})}const Ot=y(lt)`
  cursor: pointer;
  user-select: none;
  > input {
    cursor: pointer;
    user-select: none;
  }
`;function jt(t){const[i,c]=B(E),l=w(),u=i?d(l.pickedDate).format("LL"):"Select Date";return m(Ot,{...t,readOnly:!0,value:u,onClick:r=>{r.preventDefault(),!t.disabled&&(l.open(),c(!0))}})}y.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
`;y.button`
  color: #ff356b;
  background: transparent;
  border: none;
  font-weight: 400;
  font-size: 14rem;
  line-height: 20rem;
  padding: 16rem 18rem;
  cursor: pointer;
`;export{Tt as D};
