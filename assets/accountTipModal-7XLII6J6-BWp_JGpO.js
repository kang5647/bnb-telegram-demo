import{R as g,j as u,o,M as b,X as w,h as r}from"./index-i-XO0_6y.js";import{u as x}from"./useTranslation-DfisVDRh.js";var f=`.ant-modal-content .ant-modal-footer {
  display: none;
}
.wrong-password-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrong-password-content .modal-title {
  margin-top: 20px 0;
  font-size: 22px;
  line-height: 25px;
  text-align: center;
  color: var(--text-color);
}
.wrong-password-content .tip {
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 16px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.3;
  text-align: center;
  color: var(--secondary-text-color);
}
.wrong-password-content .frozen-countdown {
  margin-top: 12px;
  margin-bottom: 22px;
  font-weight: bold;
  font-size: 24px;
  color: var(--text-color);
}
.wrong-password-content .btn {
  width: 100%;
  height: 47px;
  margin-top: 10px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: var(--primary-btn-font-size);
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
}
.wrong-password-content .btn.cancel {
  color: var(--secondary-btn-color);
  background: var(--secondary-btn-background-color);
}
.wrong-password-content .close-icon {
  align-self: flex-end;
}
`,v=({modal:l})=>{var e;let{visible:c,confirm:a}=l,{t}=x(),{setPaymentPassword:i,showAccountTipModal:n,modalOptions:s}=g(),{authCoreModal:d}=u(),m=()=>{n({visible:!1}),i()},p=()=>{a==null||a(),n({visible:!1})};return o.createElement(o.Fragment,null,o.createElement("style",null,f),o.createElement(b,{open:c,closable:!1,centered:!0,okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}},width:"90%",getContainer:()=>d.rootBody},o.createElement("div",{className:"wrong-password-content"},o.createElement(w,{className:"close-icon",onClick:()=>n({visible:!1})}),o.createElement("h3",{className:"modal-title m-margin-top-40"},t("account.account_modal1_title")),o.createElement("div",{className:"tip"},t("account.account_modal1_tip")),o.createElement(r,{className:"btn",onClick:m},t("account.account_modal1_btn1")),((e=s.promptSettingConfig)==null?void 0:e.promptPaymentPasswordSettingWhenSign)!==3&&o.createElement(r,{className:"btn cancel",onClick:p},t("account.account_modal1_btn2")))))},E=v;export{E as default};
