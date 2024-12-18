import{n as g,j as C,a as m}from"../vendor_emotion-nEVkPYdj.js";import{g as G,q as j}from"../api_interface-Cuputjbr.js";import{E as y}from"./layouts/common-D_ZVEozo.js";import{g as E,a as R,h as B,m as D,r as c,f as O}from"../vendor_react-DLFB9-kf.js";import{G as k}from"../components-DVpIsGwS.js";import{n as H}from"../features-CK6znDLX.js";const v=E(),S=g(y)`
    /* background-color: #007404; */
    --row-count: var(--row-count-input, 7);
    --gap: 8rem;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gap);
    padding: 8rem 12rem;

    @media (max-width: 1600px) {
        --row-count: 6;
    }
    @media (max-width: 1200px) {
        --row-count: 5;
    }
    @media (max-width: 1100px) {
        --row-count: 4;
    }
    @media (max-width: 1000px) {
        --row-count: 3;
    }
`,$=g.div`
    --height: var(--default-height, auto);
    display: inline-flex;
    width: calc(
            ((100% - (var(--row-count) - 1) * var(--gap)) / var(--row-count))
    ) !important;

    > div {
        /* width: 100% !important;
        > img {
          width: 100% !important;
          height: auto !important;
          object-fit: cover;
        }
        height: var(--height) !important; */
    }
`;let w;function I(e){clearTimeout(w),w=setTimeout(()=>{v.set(l,e)},1e3)}function P(e){const{children:r,...a}=e;return m($,{ref:n=>{var o;n&&((o=n.parentElement)==null?void 0:o.children[1])===n&&new ResizeObserver(p=>{const[i]=p,u=i.contentRect.height;I(u)}).observe(n)},...a,children:r})}const l=R();function T(...e){console.trace("getGames");const[r]=e;return r.category==="favorite"?G().then(a=>({data:{list:a.data??[],query:r},success:!0})):j(...e)}function V(){const[e]=B(),r=e.get("brand")??"",{category:a}=D(),n=s=>{const t={...s};return Object.keys(t).forEach(d=>{(t[d]===""||t[d]==null)&&delete t[d]}),t},o=c.useMemo(()=>n({limit:21,categories:a,brands:r}),[r,a]),{list:h,loading:p,fetchData:i,resetData:u}=H(T,o),f=c.useRef(null);c.useEffect(()=>(i(o),()=>{u()}),[i,u,o]),c.useEffect(()=>{if(f.current){const s=new IntersectionObserver(t=>{t[0].isIntersecting&&i(o)},{threshold:0});return s.observe(f.current),()=>{s.disconnect()}}},[o,i,u]);const x=O(l),b=c.useRef();return c.useEffect(()=>()=>{v.set(l,void 0)},[a,r]),C(S,{style:{"--games-count":h.length,"--default-height":`${x}px`},children:[h.map((s,t)=>m(P,{children:m(k,{data:s,ref:t===0?b:null})},`${s.name}-${t}`)),m(q,{ref:f})]})}const q=g.div`
    height: 0;
`;export{V as G};
