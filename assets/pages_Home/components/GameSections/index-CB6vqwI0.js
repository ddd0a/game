import{n as o,a as t,j as r}from"../../../vendor_emotion-nEVkPYdj.js";import{q as p}from"../../../api_interface-Cuputjbr.js";import{L as d}from"../../../vendor_react-DLFB9-kf.js";import{G as h}from"../../../components-DVpIsGwS.js";import{G as y}from"./GameSection-BBg7UsW6.js";import{F as u}from"./source-GOvGYw3W.js";import{z as w}from"../../../features-CK6znDLX.js";const G=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12rem;
  position: sticky;
  left: 0;
`,S=o.h1`
  font-size: 16rem;
  font-family: 'SF Pro';
  font-weight: 500;
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
  }

  img {
    height: 20rem;
    margin-left: 8rem;
  }
`,x=o(d)`
  display: inline-flex;
  font-family: 'SF Pro';
  font-weight: 500;
  align-items: center;
  justify-content: center;
  font-size: 14rem;
  color: #646464;
  gap: 4rem;
  > svg {
    width: 16rem;
    height: 16rem;
  }
`;async function k({category:s}){var i;return((i=(await p({categories:s,limit:10})).data)==null?void 0:i.list)??[]}function T(){var n,i,m;return(m=(i=(n=w().data)==null?void 0:n.gameSections)==null?void 0:i.home_game_sections)==null?void 0:m.map(e=>{var c;console.log("gameSections");const a=new URL(e.link,window.location.origin),g=a.searchParams.get("category")??((c=e.title)==null?void 0:c.toLowerCase());`${a.searchParams.get("category")}`;const l=a.searchParams.get("title")??e.title;return t(y,{getGames:async()=>e.topGames??k({category:g}),renders:{title:r(G,{children:[r(S,{children:[t("span",{children:l}),t("span",{children:t("img",{src:e.icon,alt:l})})]}),e.link&&r(x,{to:{pathname:e.link},children:[t("span",{children:"View All"}),t(u,{})]})]}),card({data:f}){return t(h,{data:f})}}},e.title)})}export{T as G};
