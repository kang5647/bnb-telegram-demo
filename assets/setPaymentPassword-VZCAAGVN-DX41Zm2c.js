import{Q as u}from"./chunk-VP3INACH-3pa2Ap_3.js";import{C as N}from"./chunk-YWXSIORY-Drw168uA.js";import{i as w}from"./chunk-QDW3HRTT-DocQPane.js";import{Y as C,r as o,o as e,h as P,aa as z}from"./index-CAp6xuhZ.js";import{u as S}from"./useRequest-JDPSWK37.js";import{u as Q}from"./useTranslation-BKtvu0YV.js";import"./chunk-DTK23SGK-xgC9uMvM.js";import"./chunk-CUBEO3NX-CQq5TfP4.js";import"./throttle-CF0-_NCD.js";import"./index-B3d3qJ41.js";var g=`.set-password-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: hidden;
  color: var(--text-color);
}
.set-password-container .display-none {
  display: none;
}
.set-password-container .password-mistake {
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  margin-top: 50px;
  text-align: center;
  color: var(--error-color);
}
.set-password-container .payment-title {
  margin-top: 60px;
  font-size: 22px;
  color: var(--text-color);
}
.set-password-container .patment-tips1 {
  width: 80vw;
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
  color: var(--text-color);
}
@media (min-width: 600px) {
  .set-password-container .patment-tips1 {
    width: calc(80 * var(--vw));
  }
}
.set-password-container .payment-buttons2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 50px;
}
.set-password-container .payment-buttons2 .payment-main-button2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 47px;
  border: none !important;
  border-radius: var(--primary-btn-border-radius);
  outline: none;
  font-weight: 500;
  font-size: var(--primary-btn-font-size);
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
}
.set-password-container .payment-buttons2 .payment-main-button2:hover {
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
.set-password-container .payment-buttons2 .payment-main-button2:disabled {
  opacity: 0.5;
}
@media (max-width: 565px) {
  .set-password-container .payment-buttons2 {
    height: calc(var(--doc-height) - 245px - 106px - 31px - 42px);
    margin-top: 0;
  }
}
.set-password-container .success-icon {
  width: 50px;
  height: 50px;
  margin-top: 60px;
}
.set-password-container .payment-desc-1 {
  box-sizing: border-box;
  margin: 15px 0 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: var(--text-color);
}
.set-password-container .keyboard-container {
  width: 100%;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 50px;
}
@media (max-width: 565px) {
  .set-password-container .keyboard-container {
    margin-top: 10px;
  }
}
`,j=y=>{let r=C(),{t:n}=Q(),a=y,[x,s]=o.useState("loading"),[p,i]=o.useState(""),[d,l]=o.useState(""),[h,m]=o.useState(),[b,c]=o.useState(!1),{errorHandle:v}=N(),{loading:f,run:E}=S(z,{manual:!0,onSuccess:()=>{r(-1)},onError:t=>{v(t),(t==null?void 0:t.error_code)===50104&&(i(""),l(""),m(!1),s("password"))}});o.useEffect(()=>{s("password")},[]);let k=t=>{t.length===6?t===d?(i(t),c(!0)):(i(""),l(""),m(!0),s("password"),c(!1)):(i(t),c(!1))},_=()=>{if(a!=null&&a.account)r("/account/verify",{state:{account:a==null?void 0:a.account,password:p,pageType:"reset_payment_password"}});else if(a!=null&&a.oldPassword){let t=a==null?void 0:a.oldPassword;E({password:p,oldPassword:t})}};return x==="confirm"?e.createElement("div",{className:"set-password-container"},e.createElement("style",null,g),e.createElement(w,{className:"icon-navigation-back",name:"circle_back",onClick:()=>r(-1)}),e.createElement("h2",{className:"payment-title"},n("account.set_payment_password")),e.createElement("p",{className:"payment-desc-1"},n("account.re_enter_confirm")),e.createElement("div",{className:"keyboard-container"},e.createElement(u,{onChange:k,value:p})),e.createElement("div",{className:"payment-buttons2"},e.createElement(P,{className:"payment-main-button2",disabled:!b,loading:a!=null&&a.oldPassword?f:!1,onClick:_},n("account.done")))):e.createElement(e.Fragment,null,e.createElement("style",null,g),e.createElement("div",{className:"set-password-container"},e.createElement(w,{className:"icon-navigation-back",name:"circle_back",onClick:()=>r(-1)}),e.createElement("h2",{className:"payment-title"},n("account.set_payment_password")),e.createElement("p",{className:"payment-desc-1"},n("account.set_payment_password_tip")),e.createElement("div",{className:"keyboard-container"},e.createElement(u,{onChange:t=>{l(t),t.length>5&&(m(!1),c(!1),s("confirm"))},value:d})),h&&e.createElement("div",{className:"password-mistake"},n("account.password_do_not_match"))))},D=j;export{D as default};
