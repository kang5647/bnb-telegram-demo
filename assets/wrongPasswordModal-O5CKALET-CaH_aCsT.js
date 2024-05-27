import{R as F,Y as _,j as N,r as d,o as t,M,X as k,h as v}from"./index-BqjRk-0P.js";import{u as C}from"./index-CexoyNIZ.js";import{u as B}from"./useTranslation-CyMoO3vw.js";import"./index-Dm_nwht0.js";var P=`.ant-modal-content .ant-modal-footer {
  display: none;
}
.wrong-password-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrong-password-content .modal-title {
  font-size: 22px;
  font-weight: bold;
  position: relative;
  top: 7px;
  margin-bottom: 12px;
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
  border-radius: var(--primary-btn-border-radius);
  font-size: var(--primary-btn-font-size);
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
}
.wrong-password-content .close-icon {
  align-self: flex-end;
}
`,S=({info:e})=>{var p;let{t:l}=B(),{setWrongPassword:u,setPaymentVerify:f,userInfo:n,showSelectSecurityAccount:w}=F(),y=_(),b=()=>{u({visible:!1}),f({visible:!1}),h()},{authCoreModal:x}=N(),h=()=>{var o,a,r,c;(o=n==null?void 0:n.security_account)!=null&&o.email&&((a=n==null?void 0:n.security_account)!=null&&a.phone)?w(!0):y("/account/set-password",{state:{account:((r=n==null?void 0:n.security_account)==null?void 0:r.email)||((c=n==null?void 0:n.security_account)==null?void 0:c.phone)}})},i=()=>{u({visible:!1})},[z,s]=d.useState(),[m,g]=d.useState(((p=e.accountFrozen)==null?void 0:p.seconds)||0);C(()=>{let o=m-1;g(o),o<=0&&(s(void 0),i())},z),d.useEffect(()=>(e.accountFrozen&&(g(e.accountFrozen.seconds),s(1e3)),()=>{s(void 0)}),[e.accountFrozen]);let E=o=>{let a=Math.floor(o/60/60);a=a<10?"0"+a:a;let r=Math.floor(o/60%60);r=r<10?"0"+r:r;let c=Math.floor(o%60);return c=c<10?"0"+c:c,a+":"+r+":"+c};return t.createElement(t.Fragment,null,t.createElement("style",null,P),t.createElement(M,{open:e.visible,closable:!1,centered:!0,okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}},getContainer:()=>x.rootBody},t.createElement("div",{className:"wrong-password-content"},t.createElement(k,{className:"close-icon",onClick:i}),e.accountFrozen?t.createElement(t.Fragment,null,t.createElement("div",{className:"modal-title"},l("account.incorrect_payment_password")),t.createElement("div",{className:"tip m-margin-top-20"},l("account.incorrect_tip2"))):t.createElement("div",{className:"tip m-margin-top-20"},l("account.incorrect_tip1")),e.accountFrozen&&t.createElement("div",{className:"frozen-countdown"},E(m)),t.createElement(v,{className:"btn",onClick:b},l("account.forgot_password")),!e.accountFrozen&&t.createElement(v,{className:"btn",onClick:i},l("account.retry")))))},J=S;export{J as default};
