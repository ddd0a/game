import{j as r,a as s}from"../../../vendor_emotion-CZWcTM8j.js";import{r as m}from"../../../vendor_react-Bz04f6Pj.js";import{u as i}from"../../hooks-DUneFoKu.js";import{j as e}from"../../../components-DTw2mVnC.js";import{H as c,B as g,C as p}from"./style-CuYateFk.js";import{g as d}from"../../data--un2_Xxz.js";const f=({children:t,style:n})=>{const{currentTab:o}=i(),a=m.useMemo(()=>d(o==null?void 0:o.name),[o==null?void 0:o.name]);return r(p,{style:n,children:[s(c,{children:s(e,{src:a.header,className:"bg"})}),r(g,{children:[s(e,{src:a.content,className:"bg"}),s("div",{children:t})]})]})},B=m.memo(f);export{B as C};
