import{Q as d}from"./chunk-VP3INACH-t7xp1xc_.js";import{w as x}from"./chunk-KXKRH74J-m665oa4Y.js";import{Y as g,r as u,R as y,o as t,t as s,ab as w}from"./index-DW7D-4vt.js";import{u as f}from"./useRequest-Bazr17Dy.js";import{u as v}from"./useTranslation-Bh4yTaS7.js";import"./chunk-QDW3HRTT-BB5_2CDs.js";import"./chunk-DTK23SGK-0cddLqjW.js";import"./throttle-BQxmxivP.js";import"./index-D8aPmypR.js";var h=`.payment-password-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  color: var(--text-color);
}
.payment-password-container > .wrapper {
  padding: 0 30px;
}
.payment-password-container .display-none {
  display: none;
}
.payment-password-container .page-title {
  margin-top: 0px;
  font-size: 22px;
  color: var(--text-color);
  text-align: center;
}
.payment-title {
  margin-top: 60px;
  font-size: 22px;
  color: var(--text-color);
}
.patment-tips1 {
  width: 80vw;
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
  color: var(--text-color);
}
@media (min-width: 600px) {
  .patment-tips1 {
    width: calc(80 * var(--vw));
  }
}
.payment-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: auto;
  padding-bottom: 20px;
}
.success-icon {
  width: 50px;
  height: 50px;
  margin-top: 60px;
}
.payment-desc-1 {
  box-sizing: border-box;
  margin: 15px 0 75px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: var(--text-color);
}
`,b=E=>{let l=g(),{t:o}=v(),[a,r]=u.useState(""),{setWrongPassword:n}=y(),{loading:p,run:c}=f(w,{manual:!0,onSuccess:(e,i)=>{l("/account/set-password",{state:{oldPassword:a},replace:!0})},onError:e=>{if(r(""),(e==null?void 0:e.error_code)===s.WrongPaymentPassword)n({visible:!0});else if((e==null?void 0:e.error_code)===s.SecurityAccountFrozen){let i=e.extra.seconds||0;n({visible:!0,accountFrozen:{seconds:i}})}}}),m=e=>{r(e),e.length===6&&c(e)};return t.createElement(t.Fragment,null,t.createElement("style",null,h),t.createElement("div",{className:"payment-password-container"},t.createElement(x,{displayBackBtn:!0}),t.createElement("div",{className:"wrapper"},t.createElement("div",{className:"page-title"},o("account.change_payment_password")),t.createElement("p",{className:"payment-desc-1"},o("account.change_enter_payment")),t.createElement(d,{onChange:m,value:a,keyboardInvisible:p}))))},R=b;export{R as default};
