import{t as Z,r as J,g as L}from"./unicode-JQcmJgeo.js";import{K as O}from"./chunk-TLW6RSVG-qmrOFnT4.js";import{x as q}from"./chunk-CUBEO3NX-tbM3jJn3.js";import{i as I}from"./chunk-QDW3HRTT-DK35P0hx.js";import{N as D}from"./chunk-DTK23SGK-BcNPuRld.js";import{Y as K,r as o,f as M,j as G,o as t,h as j,Z as P,s as Q,m as X,n as H,x as ee,l as te,t as V,$ as ne}from"./index-D2QwjoYc.js";import{u as oe}from"./index-EBLt6X51.js";import{u as U}from"./useRequest-DvGZ-a7d.js";import{L as ae}from"./throttle-6aRruvdQ.js";import{u as W}from"./useTranslation-CcW9x3BB.js";import{R as re}from"./DownOutlined-D2uTgR_R.js";import"./index-BxMKVXWG.js";var Y=`.set-email-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
  color: var(--text-color);
}
.set-email-container .footer-box {
  position: absolute;
  bottom: 10px;
  margin: 0;
}
@media (max-height: 500px) {
  .set-email-container .footer-box {
    display: none;
  }
}
.set-email-container .display-none {
  display: none;
}
.set-email-container .error-tip {
  width: 90%;
  height: 0;
  padding-left: 10px;
  margin-top: 6px;
  margin-bottom: 0;
  text-align: left;
  color: red;
  opacity: 0;
  transition: all 0.3s;
}
.set-email-container .error-tip.show {
  height: 30px;
  opacity: 1;
}
.set-email-container .set-email-title {
  margin-top: 60px;
  font-size: 22px;
  color: var(--text-color);
}
.set-email-container .patment-tips1 {
  width: 80vw;
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
  color: var(--text-color);
}
@media (min-width: 600px) {
  .set-email-container .patment-tips1 {
    width: calc(80 * var(--vw));
  }
}
.set-email-container .set-email-buttons {
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
.set-email-container .success-icon {
  width: 50px;
  height: 50px;
  margin-top: 60px;
}
.set-email-container .set-email-desc-1 {
  box-sizing: border-box;
  padding: 0 18px;
  margin: 15px 0 25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: var(--text-color);
}
.set-email-container .account-input-box {
  position: relative;
  z-index: 3;
  width: 90%;
  height: 47px;
  margin-top: 28px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--primary-btn-border-radius);
  line-height: 47px;
  color: var(--text-color);
  background-color: var(--input-background-color);
  opacity: 1;
}
.set-email-container .account-input-box .account-select-country {
  position: absolute;
  z-index: 2;
  top: 54px;
  left: 2%;
  width: 96%;
  height: 210px;
  border-radius: var(--card-border-radius) !important;
  overflow-y: auto;
  background-color: var(--input-background-color);
}
.set-email-container .account-input-box .account-select-country::-webkit-scrollbar {
  display: none;
  width: 0;
}
.set-email-container .account-input-box .account-select-country .account-select-country-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 47px;
  padding: 5px 0 5px 13px;
  margin: 0;
  border-bottom: 1px solid var(--card-unclickable-background-color);
  font-size: 14px;
  color: var(--text-color);
  cursor: pointer;
}
.set-email-container .account-input-box .account-select-country .account-select-country-item:hover {
  background-color: var(--card-unclickable-background-color);
}
.set-email-container .account-input-box .account-select-country .account-select-country-item div {
  display: flex;
  margin-right: 13px;
}
.set-email-container .account-input-box .account-select-country .account-select-country-item div .country-name {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.set-email-container .account-input-box input[type='number']::-webkit-inner-spin-button,
.set-email-container .account-input-box input[type='number']::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}
.set-email-container .account-input-box.phone {
  display: flex;
  align-items: center;
  border: 1px solid var(--input-background-color);
  border-radius: var(--primary-btn-border-radius);
}
.set-email-container .account-input-box.phone[data-focus='true'] {
  border: 1px solid var(--accent-color) !important;
}
.set-email-container .account-input-box.phone input {
  border: none !important;
}
.set-email-container .account-input-box.phone input:focus {
  border: none !important;
}
.set-email-container .account-input-box .account-select-opt {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100%;
  padding-left: 8px;
  cursor: pointer;
}
.set-email-container .account-input-box .account-select-opt .account-select-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: 15px;
}
.set-email-container .account-input-box .account-select-opt .down-more {
  margin-left: 8px;
  font-size: 10px;
}
.set-email-container .account-input-box span {
  flex-shrink: 0;
  margin: 0;
  font-size: 15px;
}
.set-email-container .account-input-box input {
  flex-shrink: 1;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  outline: none;
  font-weight: 400;
  font-size: 15px;
  color: var(--text-color);
  background-color: transparent;
}
.set-email-container .send-code-btn {
  margin-bottom: 0 !important;
}
.set-email-container .account-submit-btn {
  width: 90%;
  height: 47px;
  padding: 0;
  margin-top: 38px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: var(--primary-btn-font-size);
  line-height: 47px;
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
}
.set-email-container .account-submit-btn.bottom-margin {
  margin-bottom: 100px;
}
.set-email-container .account-submit-btn:hover {
  border: none;
  color: var(--primary-btn-color) !important;
  background: var(--primary-btn-background-color) !important;
  opacity: var(--hover-opacity);
}
.set-email-container .account-switch-item {
  margin-top: 40px;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: var(--accent-color);
  cursor: pointer;
}
.set-email-container .set-email-desc-2 {
  min-width: 116px;
  height: 23px;
  padding: 0 15px;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 400;
  font-size: 12px;
  line-height: 23px;
  text-align: center;
  color: var(--secondary-text-color);
  background: var(--tag-background-color);
  opacity: 1;
}
.set-email-container .code-error {
  position: absolute;
  left: calc((100vw - 316px) / 2);
  margin-top: 220px;
  font-weight: 400;
  font-size: 12px;
  color: var(--error-color);
}
@media (min-width: 600px) {
  .set-email-container .code-error {
    left: calc((var(--vw) * 100 - 316px) / 2);
  }
}
.set-email-container .back {
  display: flex;
  align-items: center;
  height: 19px;
  margin-top: 90px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--accent-color);
  opacity: 1;
  cursor: pointer;
  gap: 8px;
}
.set-email-container .back svg {
  position: relative;
  top: 0;
  color: var(--accent-color);
}
.set-email-container .send-again {
  margin-top: 20px;
  border: none !important;
  outline: none !important;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--text-color);
  background-color: transparent;
  box-shadow: none;
}
.set-email-container .send-again:hover {
  color: var(--text-color);
  background-color: transparent !important;
}
.set-email-container .send-again:disabled {
  opacity: 0.5;
}
`,ie=S=>{let{bindAccount:c,backToInputAccount:r,redirectUrl:a="",verifyToken:w=""}=S,T=q(),{t:l}=W(),{themeType:E,language:f}=M(),p=K(),[s,k]=o.useState(""),[_,d]=o.useState(1e3),[i,g]=o.useState(60),[m,b]=o.useState(),$=o.useRef(null),{authCoreModal:A}=G();oe(()=>{if(i>0){let e=i-1;g(e),e===0&&d(void 0)}},_);let{loading:u,run:N}=U(ne,{manual:!0,onSuccess:e=>{ee(),a?p(a.split("?")[0],{replace:!0,back:!0,state:{...te.parse(a.split("?")[1]),verifyToken:e==null?void 0:e.token,account:c}}):e.has_set_payment_password?p("/account/security",{replace:!0}):p("/account/set-password")},onError:e=>{(e==null?void 0:e.error_code)===V.InvalidCode?b(l("login.invalid_code")):(e==null?void 0:e.error_code)===V.ResendCode&&b(l("login.please_send_again"))}}),{loading:x,run:h}=U(P,{manual:!0,onSuccess:(e,n)=>{_||(g(60),d(1e3))},onError:e=>{g(0),d(void 0)}}),v=e=>{let n;c.includes("@")?n={email:c,code:e||s}:n={phone:c,code:e||s},w&&(n.token=w),N(n)},R=()=>{b(""),c.includes("@")?h({email:c}):H({theme:E,language:f,getContainer:()=>A.rootBody}).then(e=>{h({phone:c,cf_turnstile_response:e})}).catch(e=>{T.error(l("error.server_20112"))})},C=e=>{k(e),b(""),e.length===6&&y(e)},y=o.useCallback(ae(e=>{v(e)},1e3,{leading:!0,trailing:!1}),[]);o.useEffect(()=>{var e;let n=document.getElementsByClassName("react-input-code"),F=z=>z.preventDefault();return(e=n[0])==null||e.addEventListener("contextmenu",F),()=>{var z;(z=n[0])==null||z.removeEventListener("contextmenu",F)}},[]);let B=()=>{var e;(e=document.getElementsByClassName("input-code-item")[Math.min(s.length,5)])==null||e.focus()};return t.createElement("div",{className:"set-email-container"},t.createElement("style",null,Y),t.createElement(I,{className:"icon-navigation-back",name:"circle_back",onClick:r}),t.createElement("h2",{className:"set-email-title"},l("account.enter_code")),t.createElement("p",{className:"set-email-desc-2",style:{margin:20}},c),t.createElement("div",{onClick:B},t.createElement(O,{containerClassName:"react-input-code",inputClassName:"input-code-item",allowedCharacters:"numeric",length:6,ref:$,placeholder:" ",onChange:C})),m&&t.createElement("div",{className:"code-error"},m),t.createElement(j,{disabled:s.length!==6,className:"account-submit-btn",loading:u,onClick:()=>v()},l("common.confirm")),t.createElement(j,{className:"send-again",onClick:R,disabled:i>0||x},i>0?`${l("login.send_again")} (${i}s)`:l("login.send_again")),t.createElement("div",{className:"back",onClick:r},t.createElement(I,{className:"arrow1-icon",name:"arrow1_icon"}),t.createElement("span",null,l("login.back"))),t.createElement(D,null))},ce=ie,le=S=>{let c=K(),{t:r}=W(),a=S,w=a==null?void 0:a.redirectUrl,T=a==null?void 0:a.verifyToken,l=q(),E=o.useRef(),[f,p]=o.useState(""),[s,k]=o.useState(["United States","us","1"]),[_,d]=o.useState(!1),i=o.useRef(null),[g,m]=o.useState(""),{themeType:b,language:$}=M(),{authCoreModal:A}=G(),[u,N]=o.useState("email");o.useEffect(()=>{if(u==="phone"||a!=null&&a.showSwitch){let e=Z();e&&k(e)}},[u,a==null?void 0:a.showSwitch]);let[x,h]=o.useState(!1);o.useEffect(()=>{if(x)return document.addEventListener("click",v,!0),()=>{document.removeEventListener("click",v,!0)}},[x]);let v=e=>{setTimeout(()=>{var n;(n=E.current)!=null&&n.contains(e.target)||h(!1)})};o.useEffect(()=>{let e=a==null?void 0:a.accountType;e&&N(e)},[a]);let{loading:R,run:C}=U(P,{manual:!0,onSuccess:(e,n)=>{d(e)},onError:e=>{let n=(e==null?void 0:e.error_code)||0;(n===50003||n===50004)&&(p(""),i.current.value="")}}),y=()=>{let e=i.current.value;if(u==="email")if(e){if(!Q.test(e))return m(r("login.email_format_error"))}else return m(r("account.input_vaild_email"));else{let n=s[1].toUpperCase();if(!e&&e!=="0")return m(r("account.input_vaild_mobile"));if(X(e,n))e=`+${s[2]}${e}`;else return m(r("login.phone_format_error"))}p(e),e.includes("@")?C({email:e}):H({theme:b,language:$,getContainer:()=>A.rootBody}).then(n=>{C({phone:e,cf_turnstile_response:n})}).catch(n=>{l.error(r("error.server_20112"))})},B=()=>{N(u==="email"?"phone":"email"),p("")};return o.useEffect(()=>{setTimeout(()=>{var e;(e=i.current)==null||e.focus()})},[]),_?t.createElement(ce,{bindAccount:f,redirectUrl:w||"",verifyToken:T,backToInputAccount:()=>{d(!1)}}):t.createElement("div",{className:"set-email-container"},t.createElement("style",null,Y),t.createElement(I,{className:"icon-navigation-back",name:"circle_back",onClick:()=>c(-1)}),t.createElement("h2",{className:"set-email-title"},r(u==="email"?"account.set_your_email":"account.set_your_mobile")),t.createElement("p",{className:"set-email-desc-1"},r(u==="email"?"account.set_your_email_tip":"account.set_your_mobile_tip")),u==="email"?t.createElement(t.Fragment,null,t.createElement("div",{className:"account-input-box"},t.createElement("input",{onInput:()=>m(""),className:"input_email",type:"email",placeholder:r("account.place_email_address"),ref:i,defaultValue:f,onKeyDown:e=>{e.key==="Enter"&&y()}}))):t.createElement(t.Fragment,null,t.createElement("div",{className:"account-input-box phone",ref:E},x&&t.createElement("div",{className:"account-select-country"},J.map((e,n)=>t.createElement("p",{key:n,className:"account-select-country-item",onClick:()=>{k(e),h(!1)}},t.createElement("div",{className:"country-box"},t.createElement("div",{className:"country-flag"},L(`${e[1]}`)),t.createElement("span",{className:"country-name"},e[0])),t.createElement("div",{className:"country-code"},"+"+e[2])))),t.createElement("div",{className:"account-select-opt",onClick:()=>h(!x)},t.createElement("div",{className:"account-select-icon"},L(`${s[1]}`)),t.createElement(re,{className:"down-more"})),t.createElement("span",null,"+",s[2]),t.createElement("input",{onInput:()=>{var e;m(""),i.current.value=((e=i.current.value.match(/^\d+/))==null?void 0:e[0])||""},type:"text",className:"no-number dd",placeholder:r("account.mobile"),ref:i,onWheel:e=>e.target.blur(),defaultValue:f.replace(`+${s[2]}`,""),onKeyDown:e=>{e.key==="Enter"&&y()},onFocus:()=>{var e;(e=document.querySelector(".account-input-box.phone"))==null||e.setAttribute("data-focus","true")},onBlur:()=>{var e;(e=document.querySelector(".account-input-box.phone"))==null||e.setAttribute("data-focus","false")}}))),t.createElement("p",{className:`error-tip ${g?"show":""}`},g),t.createElement(j,{className:"send-code-btn account-submit-btn bottom-margin",loading:R,onClick:y},r("login.get_captcha")),(a==null?void 0:a.showSwitch)&&t.createElement("div",{className:"account-switch-item",onClick:B},r(u==="email"?"account.switch_text_mobile":"account.switch_text_email")),t.createElement(D,null))},we=le;export{we as default};
