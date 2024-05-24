import{B as N}from"./chunk-TLEWMFYM--Slwbln6.js";import{x as R}from"./chunk-CUBEO3NX-tbM3jJn3.js";import{N as T}from"./chunk-DTK23SGK-BcNPuRld.js";import{Y as k,r as a,o as e,R as A,h as P,P as p,U as s,a7 as C}from"./index-D2QwjoYc.js";import{u as F}from"./useRequest-DvGZ-a7d.js";import{u as V}from"./useTranslation-CcW9x3BB.js";import{F as i}from"./index-BogYi78o.js";import{C as I,T as M}from"./index-jM2IlMDX.js";import"./chunk-QDW3HRTT-DK35P0hx.js";import"./throttle-6aRruvdQ.js";import"./index-BxMKVXWG.js";import"./TextArea-DQNLfIJR.js";import"./colors-iuaMKVG3.js";import"./index-bpMwPc1f.js";var z=`.mp-verify-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
  font-size: 14px;
  color: var(--text-color);
  background-color: var(--theme-background-color);
}
.mp-verify-container .ant-form {
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  min-height: 360px;
}
.mp-verify-container .ant-form .scroll-content {
  flex: 1;
  width: 100%;
  padding-left: 18px;
  padding-right: 18px;
}
.mp-verify-container .ant-form-item {
  margin-bottom: 0;
}
.mp-verify-container .mp-verify-title {
  margin-top: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: var(--text-color);
}
.mp-verify-container .mp-input-name {
  align-self: flex-start;
  margin-top: 30px;
  font-weight: 400;
}
.mp-verify-container .mp-input {
  margin-top: 6px;
}
.mp-verify-container .mp-input-error {
  align-self: flex-start;
  margin-top: 8px;
  color: var(--error-color);
}
.mp-verify-container .mp-tip-space {
  width: 100%;
  margin-top: 25px;
  margin-bottom: 110px;
  line-height: 20px;
}
.mp-verify-container .mp-tip-space span {
  color: var(--text-color);
}
.mp-verify-container .bottom-container {
  width: 100%;
}
.mp-verify-container .bottom-container.footer {
  padding-left: 18px;
  padding-right: 18px;
}
.mp-verify-container .bottom-container .mp-next {
  position: relative;
  display: block;
  width: 100%;
  max-width: 800px;
  margin: auto;
}
.mp-verify-container .bottom-container .footer-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--footer-height);
  margin: 0;
}
.mp-verify-container .bottom-container .footer-box img {
  margin: 0;
}
`,B=f=>{let{Text:m,Link:d}=M,c=k(),[u,n]=a.useState(!1),{t:o}=V(),{loginVerifyMasterPassword:v}=f||{},l=e.useRef(null),[g,x]=a.useState(!0),{loginSuccessRedirectToApp:y}=A(),h=R(),{run:E,loading:w}=F(C,{manual:!0,onBefore:()=>{p({record_type:s.PAGE_MASTER_PASSWORD_VERIFY})},onSuccess:t=>{t?(p({record_type:s.PAGE_MASTER_PASSWORD_VERIFY_SUCCESS}),v?y():c(-1)):n(!0)},onError:t=>{h.error((t==null?void 0:t.message)||"check master password error")}}),b=()=>{c("/account/master-password/description")},_=t=>{let{password:r}=t;(r==null?void 0:r.length)>=6&&(r==null?void 0:r.length)<=20?(n(!1),E(r)):n(!0)},S=t=>{let{password:r}=t;n(!1),x(!r)};return a.useEffect(()=>{setTimeout(()=>{var t,r;(r=(t=l.current)==null?void 0:t.querySelector(".password-input input"))==null||r.focus()},200)},[]),e.createElement("div",{className:"mp-verify-container",ref:l},e.createElement("style",null,z),e.createElement("div",{className:"mp-verify-title"},o("account.restore_wallet")),e.createElement(i,{layout:"vertical",onFinish:_,onValuesChange:S},e.createElement("div",{className:"scroll-content"},e.createElement("div",{className:"mp-input-name padding-top-16"},o("account.master_password")),e.createElement(i.Item,{name:"password"},e.createElement(N,{className:"mp-input"})),u&&e.createElement("div",{className:"mp-input-error"},o("account.password_error")),e.createElement(I,{direction:"vertical",className:"mp-tip-space"},e.createElement(m,null,o("account.mpc_tss_intro")),e.createElement(m,null,o("account.input_decrypt_hint")," ",e.createElement(d,{onClick:b,className:"more-text-btn"},o("account.learn_more_period"))))),e.createElement(i.Item,null,e.createElement("div",{className:"bottom-container footer"},e.createElement(P,{className:"primary-antd-btn mp-next",htmlType:"submit",loading:w,disabled:g},o("common.confirm")),e.createElement(T,{className:"footer-box-v2"})))))},X=B;export{X as default};
