import{n as e,j as r,a as t}from"../../vendor_emotion-CZWcTM8j.js";import{b as h,r as g}from"../../vendor_react-Bz04f6Pj.js";import{F as p,c as u,d as w,l as x}from"../source-2yT3hbV3.js";import{T as y}from"./Terms-7ReBfh14.js";const G=({title:c,subTitle:l,children:d,onSubmit:i})=>{const s=h();function m(){s("/",{replace:!0})}const n=g.useRef(null);async function f(o){o.preventDefault(),!(!i||!n.current||!await n.current.check())&&i(o)}return r(b,{children:[r(S,{children:[t(a,{style:{top:"-235.12rem",left:"50%",transform:"translateX(-70rem)"}}),t(a,{style:{top:"-320rem",left:"50%",transform:"translateX(-300rem)"}}),t(T,{onClick:m,children:t(j,{})})]}),r(z,{children:[t(v,{children:t(k,{src:x})}),t(F,{children:c}),t(C,{children:l}),t(P,{onSubmit:f,children:d}),t(I,{children:t(R,{children:"OR"})}),r(L,{children:[t(B,{}),t(D,{})]}),t(y,{style:{paddingTop:"20rem"},ref:n})]})]})},b=e.div`
  background-color: #ffffff;
  flex: 1;
`,v=e.div`
  text-align: center;
`,k=e.img`
  max-width: 230rem;
  max-height: 50rem;
  width: auto;
  height: auto;
  object-fit: contain;
`,F=e.div`
  font-family: SF Pro;
  font-size: 18rem;
  font-weight: 510;
  line-height: 36rem;
  text-align: left;
  color: #000000;
  text-align: center;
  margin-top: 80rem;
`,C=e.div`
  font-family: PingFang SC;
  font-size: 14rem;
  font-weight: 400;
  line-height: 20rem;
  text-align: left;
  color: #4e5969;
  text-align: center;
`,S=e.div`
  position: relative;
  width: 100%;
  height: 180rem;
  overflow: hidden;
  z-index: 0;
`,a=e.div`
  position: absolute;
  width: 416.47rem;
  height: 416.47rem;
  gap: 0rem;
  opacity: 0.3;
  background: #efb6ff;
  border-radius: 50%;
`,j=e(p)`
  height: 16.5rem;
  width: 16.5rem;
  opacity: 0.8;
`,T=e.a`
  display: block;
  position: absolute;
  right: 10rem;
  top: 30rem;
  height: 16.5rem;
  width: 16.5rem;
  padding: 10rem;
`,z=e.div`
  position: relative;
  margin-top: -100rem;
  z-index: 1;
`,I=e.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    height: 1rem;
    width: 115rem;
    display: block;
    background-image: linear-gradient(to right, transparent, #d9d9d9);
  }

  &::after {
    content: '';
    height: 1rem;
    width: 115rem;
    display: block;
    background-image: linear-gradient(to left, transparent, #d9d9d9);
  }
`,R=e.div`
  padding: 0 16rem;
  color: #1f0004a6;
  font-family: SF Pro;
  font-size: 14rem;
  font-weight: 510;
  line-height: 24rem;
`,L=e.div`
  padding-top: 15rem;
  width: 120rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
`,B=e(u)`
  width: 38rem;
  height: 38rem;
`,D=e(w)`
  width: 38rem;
  height: 38rem;
`,P=e.form`
  padding: 24rem;
  display: flex;
  flex-direction: column;
  gap: 16rem;
`;export{G as L};
