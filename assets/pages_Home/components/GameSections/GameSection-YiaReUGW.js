import{n,j as l,a as m}from"../../../vendor_emotion-CZWcTM8j.js";import{b as i}from"../../../core-B_o7srNM.js";import{r as c}from"../../../vendor_react-Bz04f6Pj.js";import{G as d}from"./GameCardList-DDWGB10I.js";const f=n.div`
  font-size: 16rem;
  font-family: 'HarmonyOS Sans';
  font-weight: bold;
  overflow-x: auto;
  padding: 8rem 0;

  /* hide scroll bar */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;function G(s){const{getGames:y,style:p,className:o,renders:a,...r}=s,e=i(async()=>await s.getGames(),[],[]),t=c.useMemo(()=>["game-card-list-block",o].filter(Boolean).join(" "),[o]);return e&&e.length?l(f,{...r,children:[a.title,m(d,{className:t,list:e,card:a.card})]}):null}export{G};
