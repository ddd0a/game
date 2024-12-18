import{n as r}from"../vendor_emotion-CZWcTM8j.js";const o=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: Gilroy;
  &.bg1 {
    background: #ffdef5;
  }
  &.bg3 {
    background: linear-gradient(
      180deg,
      rgba(227, 213, 255, 0) 0%,
      #e3d5ff 26.99%,
      #e3d5ff 100%
    );
  }

  &.bg4 {
    background: linear-gradient(
      180deg,
      rgba(213, 235, 255, 0) 0%,
      #d5ebff 26.93%,
      #d5ebff 100%
    );
  }
  &.bg5 {
    background: linear-gradient(
      to bottom,
      rgba(213, 235, 255, 0) 0%,
      rgba(204, 255, 235, 100) 26.93%,
      rgba(204, 255, 235, 100) 100%
    );
  }
`,a=r.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 4rem 12rem 0 rgba(0, 0, 0, 0.1),
    0 -1rem 0 0 rgba(255, 255, 255, 0.2) inset;
  backdrop-filter: blur(44rem);
  padding: 8rem 0 12rem 0;
  border-bottom: 1rem solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  overflow: hidden;
  .scroll {
    width: 490rem;
    max-width: 100%;
    display: flex;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 0 auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`,i=r.div`
  flex: 0 0 auto;
  cursor: pointer;
  text-align: center;
  width: 113rem;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  margin-left: 6rem;
  > img {
    width: 100%;
    -webkit-user-drag: none;
  }
  &.last {
    margin-right: 14rem;
  }
`;export{i as S,o as W,a};
