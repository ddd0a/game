import{n,a as o}from"../../../vendor_emotion-CZWcTM8j.js";import{m as a}from"../../../vendor_framer_motion-DoAUFi0s.js";import{k as e}from"../../../vendor_react-Bz04f6Pj.js";const r=n(a.div)`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: -70rem;
  margin-top: -1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`,s={initial:{opacity:0},in:{opacity:1},out:{opacity:0}},l={type:"tween",ease:"easeInOut",duration:.5};function d(i){const{pathname:t}=e();return o(r,{initial:"initial",animate:"in",exit:"out",variants:s,transition:l,...i,children:i.children},t)}export{d as T};
