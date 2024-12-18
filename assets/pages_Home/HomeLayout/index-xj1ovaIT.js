import{n as r,j as t,a}from"../../vendor_emotion-CZWcTM8j.js";import{x as n}from"../../features-tA-DxrQa.js";import{B as i}from"../components/BannersSpin/index-CUsr9ESq.js";import{F as s}from"./Footer-aWfzPJjM.js";import{H as m}from"./Header-CVtWA_Za.js";import{M as p}from"./Main-ZUB8Bvh3.js";import{S as c}from"./SideEffects-Bjoid-dV.js";import{T as d}from"../../components-DTw2mVnC.js";import{u as f}from"../components/BannersSpin/data-DWyZobRw.js";import{PATHS as l}from"../../pagePaths-6FEed3-5.js";import{n as u,O as v}from"../../vendor_react-Bz04f6Pj.js";const g=r.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
  padding-top: 150rem;
  &[data-is-banner-active='true'] {
    padding-top: 320rem;
  }
  &[data-is-banner-active='false'] {
    .BannerImage {
      display: none;
    }
    .BannerCylinder {
      pointer-events: none;
    }
  }
  &[data-active-category='favorite'] {
    padding-top: 100rem;
  }
`;function O(){n();const o=f(),e=u(l.GAMES);return t(g,{"data-active-category":e==null?void 0:e.params.category,"data-is-banner-active":o,children:[a(c,{}),a(m,{}),a(i,{}),a(p,{children:a(v,{})}),a(s,{}),a(d,{current:"home"})]})}export{O as H};
