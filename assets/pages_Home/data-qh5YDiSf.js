import"../core-z1JMQ5Ff.js";import{c as p,z as f}from"../features-CK6znDLX.js";import{a as b,r as h}from"../vendor_react-DLFB9-kf.js";b(null);const a={home:{name:"home",icon:"",bannerImgUrl:"",recommendedBrandNames:[]},favorite:{name:"favorite",icon:"",bannerImgUrl:"",recommendedBrandNames:[]}};function B(){var r,m,n,t;const u=p(),o=f(),d=h.useMemo(()=>{var i,c;return(((c=(i=o.data)==null?void 0:i.gameMenus)==null?void 0:c.home_game_categories)??[]).filter(e=>!!e.category).map(e=>{var g;return{name:e.category,icon:e.icon,bannerImgUrl:e.bannerImgUrl,recommendedBrandNames:((g=e.topBrands)==null?void 0:g.map(l=>l.name))??[]}})},[(m=(r=o.data)==null?void 0:r.gameMenus)==null?void 0:m.home_game_categories]);return[...(t=(n=u.commonVariable.profile)==null?void 0:n.data)!=null&&t.username?[a.home,a.favorite]:[a.home],...d].map(s=>({...s}))}export{B as u};
