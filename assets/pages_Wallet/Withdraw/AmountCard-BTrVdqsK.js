import{n as e,j as a,a as n}from"../../vendor_emotion-CZWcTM8j.js";const u=({children:d,withdrawableBalance:l,totalBalance:o,fillAll:s,disabled:c})=>a(h,{"data-disabled":c,children:[n(f,{children:"Withdrawal amount"}),d,a(g,{children:[a(m,{children:[a(r,{children:[n(i,{children:"total balance:"}),a(t,{children:["₱",o]})]}),a(r,{children:[n(i,{children:"withdrawable balance:"}),a(t,{className:"strong",children:["₱",l]})]})]}),n(b,{onClick:s,children:"Withdraw All"})]})]}),h=e.div`
  transition: opacity 0.3s;
  border-radius: 8rem;
  padding: 12rem;
  border-width: 1rem;
  border-style: solid;
  border-color: #ffffff;

  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.65) 50%,
      #ffffff 100%
    ),
    radial-gradient(
        25.07% 83.02% at 6.41% 4.25%,
        rgba(255, 240, 211, 0.25) 0%,
        rgba(255, 240, 211, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  &[data-disabled='true'] {
    opacity: 0.5;
    pointer-events: none;
  }
`,f=e.div`
  font-size: 16rem;
  font-weight: 400;
  line-height: 24rem;
`,g=e.div`
  padding-top: 12rem;
  display: flex;
  align-items: center;
`,m=e.div`
  flex: 1;
  color: #646464;
  font-size: 12rem;
  line-height: 20rem;
`,r=e.div`
  display: flex;
  align-items: center;
`,i=e.div`
  opacity: 0.8;
`,t=e.div`
  margin-left: 5rem;
  &.strong {
    font-size: 1.1em;
  }
`,b=e.a`
  color: #165dff;
  line-height: 30rem;
  font-size: 14rem;
  font-weight: 400;
  cursor: pointer;
`;export{u as A};
