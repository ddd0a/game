import{n as t}from"../../../vendor_emotion-nEVkPYdj.js";import{B as e}from"../../../vendor_antd-kEHdUJyS.js";const i=t.div`
  position: relative;
  margin: 12rem auto;
  width: 80%;
  height: 40rem;
  border-radius: 32rem;
  border: ${r=>`4rem solid ${r.borderColor}`};
  box-shadow: ${r=>`0 2rem 8rem 1rem ${r.borderColor}`};
  background: ${r=>r.backgroundColor};
  opacity: ${r=>r.isVisible?1:0};
  transform: ${r=>r.isVisible?"translateY(0)":"translateY(30rem)"};
  transition: opacity 0.5s ease, transform 0.5s ease;
`,n=t(e)`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  width: 100%;
  height: 40rem !important;
  background: transparent !important;
  overflow: hidden !important;
  user-select: none;
  border-radius: 28rem !important;
  overflow: hidden;
  padding: 0;
  border-color: transparent !important;
  > span {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  &:hover {
    background: transparent;
  }
  &:active {
    background: transparent;
  }
  &:focus {
    background: transparent;
  }
  &::before {
    background: transparent;
  }
`,s=t.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${r=>r.progress??0}%;
  height: 100%;
  background: ${r=>r.progressColor};
  transition: width 0.5s linear;
`,d=t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  color: #fff;
  font-weight: bold;
  transition: opacity 0.3s ease;
  font-size: 16rem;
  z-index: 1;
`,m=t.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-right: 20rem;
  @keyframes wave-box {
    from {
      transform: translateY(-60rem);
    }
    to {
      transform: translateY(0);
    }
  }
  .wave-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    animation: wave-box linear infinite ${r=>r.waveSpeed}s;
    height: 120rem;
  }
`,l=t.div`
  box-shadow: ${r=>`20rem 0rem 0rem 11rem ${r.bgColor}`};
  width: 15rem;
  top: 0rem;
  position: relative;
  border-radius: 50%;
  height: 34rem;
  background-color: transparent;
  z-index: 2;
  right: calc(39rem - 100%);
`,p=t.div`
  width: 30rem;
  margin-top: -4rem;
  position: relative;
  right: calc(29rem - 100%);
  height: 30rem;
  &::before {
    content: '';
    position: absolute;
    top: -3rem;
    right: 14rem;
    width: 20rem;
    height: 36rem;
    border-radius: 50%;
    background: ${r=>r.bgColor};
  }
`;export{n as B,i as C,s as P,d as T,m as W,l as a,p as b};
