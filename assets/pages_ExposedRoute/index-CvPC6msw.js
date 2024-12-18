import{n as k,a as i,F as S,j as p}from"../vendor_emotion-CZWcTM8j.js";import{w as I,x}from"../api_interface-Cwk1YCej.js";import{t as d,c as E,k as b,e as F}from"../core-B_o7srNM.js";import{b as w,j as P,s as R,k as L,l as v,m as D}from"../features-tA-DxrQa.js";import{g as N,m as M,r as t,b as y,h as _}from"../vendor_react-Bz04f6Pj.js";import{PATHS as l}from"../pagePaths-6FEed3-5.js";import{a as O}from"../src_ts_file-BXSbaNF5.js";import{M as u}from"../enum-Cky0aGNf.js";import{B as T,a as A}from"../components-DTw2mVnC.js";function K(){const e=O(),a=M(),s=w();return t.useEffect(()=>{e("isAccessThroughQuickLogin",!0),e("isAccessFromGLife",!0)},[]),t.useEffect(()=>{s.open("page_game",{state:{data:{name:a.name}}})},[a.name,s]),i(S,{})}function G(){const e=y(),a=O(),s=P(),[o,m]=_(),c=t.useMemo(()=>{const n=o.get("code"),r=o.get("gameName"),f=o.get("target");return{authCode:n,gameName:r,target:f}},[]),h=w(),g=t.useCallback(async()=>{if(!c.authCode){d("Invalid auth code",{level:"error"});return}const n=await I({authCode:c.authCode});return n.success?(await R(n.data),await E.exec("login"),d("Login Successfully!",{level:"success"}),!0):(d("Failed to login",{level:"error"}),!1)},[c.authCode]),C=t.useCallback(async()=>{try{if(m(r=>(r.delete("code"),r.delete("gameName"),r.delete("target"),r),{replace:!0}),!await g())return e(l.INDEX,{replace:!0,state:{ignore:!0}});switch(c.target){case"kyc":{h.open("page_kyc_verification_manual",{state:{stepIndex:0}});return}case"game":return c.gameName?s(c.gameName):e(l.INDEX,{replace:!0,state:{ignore:!0}});default:return e(l.INDEX,{replace:!0,state:{ignore:!0}})}}catch(n){d(n.message,{level:"error"})}},[]);return t.useLayoutEffect(()=>{a("isAccessThroughQuickLogin",!0),a("isAccessFromGLife",!0),C()},[]),i(X,{children:"Thank you for supporting our platform. Wishing you great success and big winnings!"})}const X=k.div`
  font-family: Gilroy;
  font-size: 16rem;
  line-height: 24rem;
  text-align: center;
  color: #666666;
`;function z(){const{searchParams:e}=new URL(location.href),a=y(),s=Number(e.get("status")||0),o=t.useMemo(()=>{switch(s){case u.KycOcrComplete:return"OCR Complete";case u.KycOcrInterrupt:return"OCR Interrupt";default:return"Unknown Status"}},[s]),{secondsCountDown:m}=b({secondsEnd:5,callback(){a(l.INDEX,{replace:!0,state:{ignore:!0}})}});return p("div",{children:[o,"...",m]})}const U=N();function j(){const e=t.useMemo(()=>L(),[]),a=y(),s=t.useMemo(()=>e.status===u.KycOcrComplete,[e.status]),o=t.useCallback(async()=>{var r,f;return e.bizId&&((r=e.response)!=null&&r.state)?(await x({bizId:e.bizId,transactionId:(f=e.response)==null?void 0:f.state})).success??!1:!1},[]),m=t.useCallback(async()=>{switch(U.set(v,!0),e.status){case u.KycOcrComplete:{if(!await o()){d("Failed to submit OCR result",{level:"error"});return}await D(),a({pathname:l.INDEX,search:new URLSearchParams({sub_page:"page_kyc_verification"}).toString()},{replace:!0,state:{stepIndex:3}});return}case u.KycOcrInterrupt:default:{a({pathname:l.INDEX,search:new URLSearchParams({sub_page:"page_kyc_verification"}).toString()},{replace:!0,state:{stepIndex:2}});return}}},[e.status,o,a]),c=t.useMemo(()=>{switch(e.status){case u.KycOcrComplete:return"OCR Complete";case u.KycOcrInterrupt:return"OCR Interrupt";default:return"Unknown Status"}},[e.status]),h=t.useMemo(()=>s?"Continue":"Retry",[s]),{secondsCountDownDisplay:g}=b({secondsEnd:10,callback(){m()}}),C=t.useCallback(()=>s?p("caption",{children:["Your OCR has been approved. The process will automatically continue in",p("span",{children:[" ",g," "]})," seconds."]}):p("caption",{children:["Your OCR process was interrupted. You can choose to",i("span",{children:"Retry"})," or proceed with your KYC application later",i("span",{children:"Do it later"}),". You will be redirected to the OCR application page in ",p("span",{children:[" ",g," "]})," seconds."]}),[s,g]),n=t.useMemo(()=>JSON.stringify(e,null,2),[e]);return p(Y,{children:[i("h2",{children:c}),C(),i(T,{style:{width:"100%",backgroundColorLeft:"#FF3568",backgroundColorRight:"#FF5CC9",color:"#FFFFFF"},onClick:m,children:h}),i(A,{style:{width:"100%"},onClick:()=>{a(l.INDEX,{replace:!0,state:{ignore:!0}})}}),F.isDevMode&&i("pre",{children:n})]})}const Y=k.div`
  font-family: Gilroy;
  > caption {
    text-align: left;
    font-size: 16rem;
    line-height: 24rem;
    span {
      font-weight: 600;
      color: #ff3568;
    }
  }
  > button {
    font-weight: 600;
    font-size: 14rem !important;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12rem;
  padding: 16rem;
`,te={Game:K,QuickLogin:G,MiddlePage:z,OcrCallbackPage:j};export{te as E};
