import{j as r,a as e}from"../vendor_emotion-nEVkPYdj.js";import{u as c}from"./data-BtPHYjuj.js";import{S as i}from"./components/StageLayout-BjDkzg9c.js";import{e as l}from"../core-z1JMQ5Ff.js";function p(){const n=c(),{currentStep:t,currentScreen:o}=n;return r(i,{"data-screen-name":n.currentScreenName.enum,children:[o.layout?e(o.layout,{children:!!t.component&&e(t.component,{})}):!!t.component&&e(t.component,{}),l.isDevMode&&e(m,{})]})}function m(){const n=c();return r("div",{style:{position:"fixed",display:"flex",gap:"5rem",bottom:"10rem",justifyContent:"space-evenly",width:"100%",zIndex:100},children:[e("button",{onClick:()=>{n.moveFirst()},children:"First"}),e("button",{onClick:()=>{n.movePrev()},children:"Prev"}),e("button",{onClick:()=>{n.movePrevScreenStep()},children:"Screen Prev"}),e("button",{onClick:()=>{n.moveNextScreenStep()},children:"Screen Next"}),e("button",{onClick:()=>{n.moveNext()},children:"Next"}),e("button",{onClick:()=>{n.moveLast()},children:"Last"})]})}export{p as P};
