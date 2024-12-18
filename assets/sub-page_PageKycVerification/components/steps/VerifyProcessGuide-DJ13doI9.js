import{n as r,j as i,a as e}from"../../../vendor_emotion-CZWcTM8j.js";import{B as a}from"../../../components-DTw2mVnC.js";import{u as s}from"../../data-CsaiakhX.js";import{a as h,b as f,c as m}from"./source-BFY6szQu.js";function k(){const d=s();return i(p,{children:[i(n,{children:[e("h1",{children:"Step 1: Take ID Photo"}),i(o,{children:[i(l,{children:[e("p",{children:"Make sure information below is clear on your ID"}),i("ul",{children:[e("li",{children:"Full Name"}),e("li",{children:"Date of Birth"})]})]}),e(c,{children:e(t,{src:h})})]})]}),i(n,{children:[e("h1",{children:"Step 2: Scan face or Selfie With ID Card"}),i(o,{children:[e(l,{children:e("p",{children:"Check that your information is complete and accurate"})}),e(c,{children:e(t,{src:f})})]})]}),i(n,{children:[e("h1",{children:"Step 3: Information Confirm"}),i(o,{children:[e(l,{children:e("p",{children:"Position your face within the frame, and make sure that you are well-lighted."})}),e(c,{children:e(t,{src:m})})]})]}),e(a,{style:{backgroundColorLeft:"#FF3568",backgroundColorRight:"#FF5CC9",color:"#FFFFFF",marginTop:"auto"},onClick:()=>{d.moveNext()},children:"KYC Verify"})]})}const p=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: var(--base-padding);
  gap: 24rem;
`,n=r.div`
  display: flex;
  flex-direction: column;
  > h1 {
    margin: 0;
    font-weight: 600;
    font-size: 16rem;
    line-height: 24rem;
    color: #000000;
  }
`,o=r.div`
  background: #f8f8f8;
  border-radius: 8rem;
  display: flex;
  flex-direction: row;
  gap: 12rem;
  padding: 16rem;
`,l=r.div`
  display: inline-flex;
  flex-direction: column;
  font-size: 14rem;
  justify-content: center;
  li::marker {
    color: #0a6cff;
    font-size: 20rem;
    line-height: 16rem;
  }
  > p {
    margin: 0;
    line-height: 20rem;
    color: #000000;
  }
  > ul {
    padding: 0;
    margin: 0;
    list-style-type: disc;
    padding-left: 16rem;
  }
`,c=r.div`
  display: inline-flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`,t=r.img`
  width: 72rem;
  height: auto;
  object-fit: contain;
`;export{k as V};
