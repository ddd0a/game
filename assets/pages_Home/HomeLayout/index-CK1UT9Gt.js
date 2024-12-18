import{n as r,j as t,a}from"../../vendor_emotion-nEVkPYdj.js";import{x as n}from"../../features-CK6znDLX.js";import{B as i}from"../components/BannersSpin/index-CtQ-Jg7K.js";import{F as s}from"./Footer-CDqrBJfC.js";import{H as m}from"./Header-CwdKsQKC.js";import{M as p}from"./Main-5fS4z6DC.js";import{S as c}from"./SideEffects-BKVwsYzN.js";import{T as d}from"../../components-DVpIsGwS.js";import{u as f}from"../components/BannersSpin/data-B7Ccobjx.js";import{PATHS as l}from"../../pagePaths-6FEed3-5.js";import{n as u,O as v}from"../../vendor_react-DLFB9-kf.js";const g=r.div`
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
