import{Q as f}from"./chunk-VP3INACH-DIvX9j-s.js";import{R as b,r as m,j as g,o as a,al as h,t as c,ab as E}from"./index-ClZUDqIk.js";import{u as x}from"./useRequest-BtLDiCMb.js";import{u as C}from"./useTranslation-CZNhYqMX.js";import"./chunk-QDW3HRTT-DHxj4NpX.js";import"./chunk-DTK23SGK-D_Pln4dg.js";import"./throttle-dosqbUsp.js";import"./index-BZ-JBCWR.js";var P=`.payment-password-drawer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.payment-password-drawer .ant-drawer-body {
  padding-right: 0;
  padding-left: 0;
  overflow: hidden;
}
.payment-password-drawer .ant-drawer-content-wrapper {
  width: 100% !important;
}
.payment-password-drawer .ant-drawer-content .ant-drawer-wrapper-body .ant-drawer-header {
  display: none;
}
.payment-password-drawer .particle-pc-drawer .payment-verify-content {
  margin-top: 38px;
}
.payment-password-drawer .payment-verify-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 22px;
}
.payment-password-drawer .payment-verify-content .particle-keywords-map {
  position: absolute;
}
@media (min-width: 600px) {
  .payment-password-drawer {
    position: absolute;
  }
}
`,_=({props:r})=>{let{setPaymentVerify:n,setWrongPassword:s}=b(),{t}=C(),[i,o]=m.useState(""),{authCoreModal:w}=g();m.useEffect(()=>{r.visible&&o("")},[r.visible]);let{loading:l,run:y}=x(E,{manual:!0,onSuccess:(e,d)=>{var p;n({visible:!1}),(p=r.onVerifyCompleted)==null||p.call(r,i)},onError:e=>{if(o(""),(e==null?void 0:e.error_code)===c.WrongPaymentPassword)s({visible:!0});else if((e==null?void 0:e.error_code)===c.SecurityAccountFrozen){let d=e.extra.seconds||0;s({visible:!0,accountFrozen:{seconds:d}})}}}),u=()=>{var e;if(l)return!1;n({visible:!1}),(e=r.onVerifyFailed)==null||e.call(r,t("common.cancel"))},v=e=>{o(e),e.length===6&&y(e)};return a.createElement(a.Fragment,null,a.createElement("style",null,P),a.createElement(h,{visible:r.visible,placement:"bottom",height:421,closable:!1,maskClosable:!1,onClose:u,className:"payment-password-drawer",title:r.type==="close"?t("account.close_payment_password"):t("account.payment_password"),forceRender:!0,getContainer:()=>w.rootBody},a.createElement("div",{className:"content payment-verify-content"},a.createElement(f,{onChange:v,value:i,keyboardInvisible:l}))))},N=_;export{N as default};
