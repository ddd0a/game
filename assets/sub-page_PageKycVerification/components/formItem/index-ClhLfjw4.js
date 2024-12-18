import{n as u,a as r,j as p}from"../../../vendor_emotion-nEVkPYdj.js";import{E as b,B as c}from"./BaseItem-DV2r0v-l.js";import{a as s,C as m,u as h}from"../../utils-ClAOSpnF.js";import{D}from"./DatePicker-CpDJ1_w-.js";import{i as N}from"../../../core-z1JMQ5Ff.js";import{a as M,r as f,f as x,u as T}from"../../../vendor_react-DLFB9-kf.js";import{P as w}from"./PhotoUploader-DM9gIXRG.js";import{F as q,$ as A,a0 as B}from"../../../features-CK6znDLX.js";import{b as E,c as O,d as k,e as R}from"./source-CDdR00rW.js";import{S as g}from"./Selection-CWa5Tf_0.js";import{R as U}from"./Radio-CcoZ3vdy.js";import{P as z}from"./PhoneNumber-DDTX1ESx.js";const I=B(),H=u.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8rem;
`,j=u.label`
  font-size: 14rem;
  font-weight: 500;
  line-height: 20rem;
`,L=u.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  gap: 8rem;

  > strong {
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 12rem;
    color: #ff3568;
    font-weight: 400;
    line-height: 16rem;
    position: relative;
    top: 1.5rem;
  }
  > svg {
    --r: 14.67rem;
    width: var(--r);
    min-width: var(--r);
    height: var(--r);
    min-height: var(--r);
  }
`;function V(t){var n;const e=h(t.field);return e?p(L,{children:[r(R,{}),r("strong",{children:(n=e.message)==null?void 0:n.toString()})]}):null}function d(t){const{title:e,field:n,children:i,disableErrorFrame:o,...a}=t,l=s();return p(H,{...a,children:[e&&r(j,{children:e}),i,!l.formState.disabled&&r(V,{field:n})]})}const $=u.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8rem;
`,F=[{title:"Unified Multi-Purpose ID (UMID)",value:"UMID"},{title:"Driver‘s License",value:"DRIVING_LICENSE"},{title:"Passport",value:"PASSPORT"},{title:"PhilHealth ID",value:"PHIL_HEALTH"},{title:"SSS (Social Security System) ID",value:"SSS"},{title:"Postal ID",value:"POSTAL"},{title:"PRC ID",value:"PRC"},{title:"TIN – New Version",value:"TIN"}],Y=u.div`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  cursor: pointer;
  height: 48rem;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
  border-radius: 8rem;
  padding: 0 16rem;
  > div:first-of-type {
    font-weight: 400;
    font-size: 16rem;
    line-height: 24rem;
  }
  &::before {
    transition: border 0.2s ease-in-out;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    border-radius: inherit;
    border: 0rem solid #ff35687c;
  }
  &[data-selected='true'] {
    &::before {
      border: 2rem solid #ff3568;
    }
  }
`,Z=u(E)`
  position: absolute;
  right: 16rem;
  width: 24rem;
  height: 24rem;
`;function se(){const t=s();return r(m,{control:t.control,name:"basic.idType",rules:{required:"Please select an ID type"},render:e=>r($,{children:F.map(n=>p(Y,{onClick:()=>{e.field.onChange(n.value),t.trigger("basic.idType")},"data-selected":e.field.value===n.value,children:[r("div",{children:n.title}),r(Z,{})]},n.value))})})}function de(){const t=s(),e="basic.idType",n=f.useMemo(()=>F.map(o=>({label:o.title,value:o.value})),[]),i=h(e);return r(d,{title:"ID Type",field:e,children:r(b,{"data-is-error":!!i,"data-is-disabled":t.formState.disabled,children:r(m,{control:t.control,name:e,rules:{required:"Please select an ID type"},render:o=>{const a=o.field.value;return r(g,{title:"ID Type",options:n,onChange:l=>{o.field.onChange(l.value)},value:a,disabled:o.formState.disabled})}})})})}function me(){const t=s(),e="basic.realName.firstName";return r(d,{title:"First Name",field:e,children:r(c,{...t.register(e,{required:"Please fill your first name",pattern:{value:/^[a-zA-Z\s]*$/,message:"Please enter a valid first name"}})})})}function ue(){const t=s(),e=x(S),n="basic.realName.middleName",i=f.useMemo(()=>t.register(n,{required:"Please fill your middle name",pattern:{value:/^[a-zA-Z\s]*$/,message:"Please enter a valid middle name"},disabled:t.formState.disabled||e}),[e,t]);return p(d,{title:"Middle Name",field:n,children:[r(c,{...i}),!t.formState.disabled&&r(J,{})]})}const S=M(!1),G=u.div`
  cursor: pointer;
  display: flex;
  gap: 8rem;
  align-items: center;
  > span > svg {
    min-width: 21rem;
    min-height: 21rem;
  }
  > span:nth-of-type(2) {
    font-weight: 400;
    font-size: 14rem;
    line-height: 20rem;
  }
`;function J(){const t=s(),[e,n]=T(S);return f.useEffect(()=>{const i=t.getValues("basic.realName.middleName");t.setValue("basic.realName.middleName",e?"":i)},[e]),p(G,{onClick:()=>{n(i=>(i||t.setValue("basic.realName.middleName",""),!i))},children:[r("span",{children:e?r(O,{}):r(k,{})}),r("span",{children:"I do not have a middle name."})]})}function ce(){const t=s(),e="basic.realName.lastName";return r(d,{title:"Last Name",field:e,children:r(c,{...t.register(e,{required:"Please fill your last name",pattern:{value:/^[a-zA-Z\s]*$/,message:"Please enter a valid last name"}})})})}function fe(){const t=s(),e="basic.idNumber";return r(d,{title:"ID Number",field:e,children:r(c,{...t.register(e,{required:"Please fill your ID number",pattern:{value:/^[a-zA-Z0-9]*$/,message:"Please enter a valid ID number"}})})})}function he(){const t=s(),e="basic.birthday",n=h(e);return r(d,{title:"Birthday",field:e,children:r(b,{"data-is-error":!!n,"data-is-disabled":t.formState.disabled,children:r(m,{control:t.control,name:e,rules:{required:"Please pick your birthday"},render:i=>{var a;const o=N((a=i.field.value)==null?void 0:a.toString()).startOf("date");return r(D,{disabled:i.formState.disabled,hookProps:{defaultDate:o.isValid()?o.toDate():void 0},onChange:l=>{if(l){const v=N(l).format("YYYY-MM-DD");i.field.onChange(v)}}})}})})})}function pe(){var a,l,v,P;const t=s(),e="more.phoneNumber",n=q(),i=((l=(a=n.data)==null?void 0:a.phoneNumber)==null?void 0:l.countryCode)||"63",o=((P=(v=n.data)==null?void 0:v.phoneNumber)==null?void 0:P.number)??"";return r(m,{control:t.control,name:e,rules:{required:"Please fill your phone number",validate(y){return y?y.countryCode?y.number?!0:"Please fill your phone number":"Please select a country code":"Please fill your phone number"}},render:y=>r(d,{title:"Phone Number",field:"more.phoneNumber",children:r(z,{disabled:!0,registeration:{code:t.register("more.phoneNumber.countryCode",{required:"Please select a country code",value:i}),number:t.register("more.phoneNumber.number",{required:"Please fill your phone number",value:o})}})})})}const K=u.ol`
  padding-left: 12rem;
`;function C(t){const e=s(),n=t.field.split(".")[1];return r(m,{control:e.control,name:t.field,rules:t.rules,disabled:e.formState.disabled,render:i=>{const o=i.field.value;return p(d,{title:t.title,field:t.field,disableErrorFrame:!0,children:[r(w,{name:n,media:o,onChange:i.field.onChange,disabled:e.formState.disabled}),t.reminders?r(K,{children:t.reminders.map((a,l)=>r("li",{children:a.content},l))}):null]})}})}function be(){return r(C,{title:"Front Photo of ID",field:"medias.idPhoto",rules:{required:"Please Upload a photo of the front of your ID card"},reminders:[{content:"Take a clear photo of your Valid ID for verification."},{content:"The photo size limit is 3MB."}]})}function ge(){return r(C,{title:"Selfie with ID Card",field:"medias.face",rules:{required:"Please Upload a photo of the front of Selfie with ID Card"},reminders:[{content:"Take a clear photo of your Selfie with ID Card."},{content:"The photo size limit is 3MB."}]})}function ve(){const t=s(),e="basic.gender",n=f.useMemo(()=>[{label:"Male",value:"male"},{label:"Female",value:"female"},{label:"Unknown",value:"un_know"}],[]);return r(d,{title:"Gender",field:e,children:r(m,{control:t.control,name:e,rules:{required:"Please pick your gender."},render:i=>r(U,{disabled:t.formState.disabled,options:n,value:i.field.value,onChange:o=>{i.field.onChange(o.value)}})})})}function ye(){const t=s(),e="more.nationality",n=f.useMemo(()=>A().map(a=>({label:a.name,value:a.code})).sort((a,l)=>a.label==="Philippines"?-1:l.label==="Philippines"?1:a.label.localeCompare(l.label)),[]),i=h(e);return r(d,{title:"Nationality",field:e,children:r(b,{"data-is-error":!!i,"data-is-disabled":t.formState.disabled,children:r(m,{control:t.control,name:e,rules:{required:"Please pick your nationality."},render:o=>{const a=o.field.value||"Philippines";return r(g,{disabled:t.formState.disabled,title:"Nationality",options:n,onChange:l=>{o.field.onChange(l.value)},value:a})}})})})}function Ie(){const t=s(),e="more.placeOfBirth";return r(d,{title:"Place of Birth",field:e,children:r(c,{...t.register(e,{required:"Please Input Place of Birth"})})})}function Pe(){const t=s(),e="more.currentAddress";return r(d,{title:"Current Address",field:e,children:r(c,{...t.register(e,{required:"Please Input Current Address"})})})}function Ne(){const t=s(),e="more.permanentAddress";return r(d,{title:"Permanent Address",field:e,children:r(c,{...t.register(e,{required:"Please Input Permanent Address"})})})}function Fe(){const t=s(),e="more.nearestBranch";return r(d,{title:"Nearest Branch",field:e,children:r(c,{...t.register(e,{required:"Please Input Nearest Branch",value:"Filbet 2024 Taft Ave"}),disabled:!0})})}function Se(){const t=s(),e="more.occupation",n=f.useMemo(()=>I.Occupation.map(o=>({label:o,value:o})),[]),i=h(e);return r(d,{title:"Occupation",field:e,children:r(b,{"data-is-error":!!i,"data-is-disabled":t.formState.disabled,children:r(m,{control:t.control,name:e,rules:{required:"Please pick your occupation."},render:o=>{const a=o.field.value;return r(g,{disabled:o.formState.disabled,title:"Occupation",options:n,onChange:l=>{o.field.onChange(l.value)},value:a})}})})})}function Ce(){const t=s(),e="more.sourceOfIncome",n=f.useMemo(()=>I.EmploymentType.map(o=>({label:o,value:o})),[]),i=h(e);return r(d,{title:"Employment Type",field:e,children:r(b,{"data-is-error":!!i,"data-is-disabled":t.formState.disabled,children:r(m,{control:t.control,name:e,rules:{required:"Please pick your employment type."},render:o=>{const a=o.field.value;return r(g,{disabled:o.formState.disabled,title:"Employment Type",options:n,onChange:l=>{o.field.onChange(l.value)},value:a})}})})})}function De(){const t=s(),e="more.sourceOfIncome",n=f.useMemo(()=>I.MainSourceOfFunds.map(o=>({label:o,value:o})),[]),i=h(e);return r(d,{title:"Main Source of Funds",field:e,children:r(b,{"data-is-error":!!i,"data-is-disabled":t.formState.disabled,children:r(m,{control:t.control,name:e,rules:{required:"Please pick your main source of funds."},render:o=>{const a=o.field.value;return r(g,{disabled:o.formState.disabled,title:"Main Source of Funds",options:n,onChange:l=>{o.field.onChange(l.value)},value:a})}})})})}export{se as F,de as a,be as b,ge as c,me as d,ue as e,ce as f,he as g,ve as h,pe as i,ye as j,Ie as k,Pe as l,Ne as m,Fe as n,Se as o,De as p,fe as q,Ce as r};
