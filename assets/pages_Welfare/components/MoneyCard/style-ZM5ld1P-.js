import{n as t}from"../../../vendor_emotion-nEVkPYdj.js";const r=t.div`
  padding: 16rem;
  position: relative;
  overflow: hidden;
  .bg {
    width: 100%;
    position: absolute;
    top: -128rem;
    left: 0;
    -webkit-user-drag: none;
    vertical-align: top;
  }
`,a=t.div`
  border-radius: 12rem;
  border-radius: 8rem;
  &.bg1 {
    border: 1rem solid rgba(255, 255, 255, 0.5);
    background: radial-gradient(
        38.16% 27.08% at 0% 65.17%,
        #ffd2de 0%,
        rgba(255, 210, 222, 0) 100%
      ),
      radial-gradient(
        62.84% 44.59% at 100% 100%,
        rgba(246, 152, 255, 0.6) 0%,
        rgba(246, 152, 255, 0) 100%
      ),
      rgba(255, 255, 255, 0.75);
    box-shadow: 0px 4px 12px 0px rgba(81, 0, 186, 0.1);
    backdrop-filter: blur(20px);
  }
  &.bg2 {
    border: 1rem solid rgba(255, 255, 255, 0.5);
    background: radial-gradient(
        38.16% 27.08% at 0% 65.17%,
        rgba(255, 217, 160, 0.4) 0%,
        rgba(255, 217, 160, 0) 100%
      ),
      radial-gradient(
        62.84% 44.59% at 100% 100%,
        rgba(255, 206, 228, 0.8) 0%,
        rgba(255, 206, 228, 0) 100%
      ),
      rgba(255, 255, 255, 0.75);
    box-shadow: 0px 4px 12px 0px rgba(11, 79, 199, 0.1);
    backdrop-filter: blur(20px);
  }
`,i=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none !important;
  .title{
    width: 116rem;
    margin-top: -12rem;
    -webkit-user-drag: none;
  user-select: none !important;
  }
`,n=t.p`
  color: rgba(0, 0, 0, 0.90);
  text-align: center;
  font-family: 'DIN Next LT Pro';
  font-size: 34rem;
  font-style: italic;
  font-weight: 700;
  line-height: 34rem;
  padding-bottom: 15rem;
  margin: 0;
  width: 100%;
  user-select: none !important;
  position: relative;

  &::before{
    content: attr(data-text);
    position: absolute;
    -webkit-text-stroke: 6rem #fff;
    z-index: -1;
  }
`,o=t.p`
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
  font-family: 'PingFang SC';
  font-size: 14rem;
  font-style: normal;
  font-weight: 400;
  line-height: 20rem;
  text-transform: capitalize;
  margin: 0;
  width: 100%;
`,l=t.p`
  text-align: center;
  font-family: Roboto;
  font-size: 36rem;
  font-style: normal;
  font-weight: 500;
  line-height: 30rem;
  text-transform: capitalize;
  margin: 0;
  width: 100%;
  padding: 10rem 0;
  user-select: none !important;
  &.bg1 {
    background: var(
      --Font-color-VIP-Bonus-,
      linear-gradient(180deg, #6e08f4 0%, #b200d8 94.79%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  &.bg2 {
    background: var(
      --Font-color-VIP-Rebate-,
      linear-gradient(180deg, #005bff 6.02%, #ff58a3 117.5%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,d=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30rem 0;
  span {
    text-align: center;
    font-family: 'Digital Numbers';
    font-size: 42rem;
    font-style: normal;
    font-weight: 400;
    text-transform: capitalize;
    height: 56rem;
    line-height: 56rem;
  }
  .bg1 {
    background: var(
      --Font-color-VIP-Bonus-,
      linear-gradient(180deg, #6e08f4 0%, #b200d8 94.79%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .bg2 {
    background: var(
      --Font-color-VIP-Rebate-,
      linear-gradient(180deg, #005bff 6.02%, #ff58a3 117.5%)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .time {
    min-width: 72rem;
    font-size: 32rem;
    position: relative;
    &::before{
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 6rem;
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
  .code {
    margin: 0 8rem;
    line-height: 46rem;
  }
`;export{a as C,i as T,n as a,o as b,d as c,l as d,r as e};
