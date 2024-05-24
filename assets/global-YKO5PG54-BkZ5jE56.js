var o=`.particle-auth-core-shadow-root {
  overflow: hidden;
  font-family: var(--auth-core-font-family);
  color: var(--text-color);
}
.particle-auth-core-shadow-root input:-webkit-autofill,
.particle-auth-core-shadow-root input:-webkit-autofill:hover,
.particle-auth-core-shadow-root input:-webkit-autofill:focus,
.particle-auth-core-shadow-root textarea:-webkit-autofill,
.particle-auth-core-shadow-root textarea:-webkit-autofill:hover,
.particle-auth-core-shadow-root textarea:-webkit-autofill:focus,
.particle-auth-core-shadow-root select:-webkit-autofill,
.particle-auth-core-shadow-root select:-webkit-autofill:hover,
.particle-auth-core-shadow-root select:-webkit-autofill:focus {
  font-size: 15px;
  box-shadow: 0 0 0 100px transparent inset;
  transition: background-color 5000s ease-in-out 0s;
  caret-color: var(--text-color);
  -webkit-text-fill-color: var(--text-color);
}

button,
input,
optgroup,
select,
textarea {
  font-family: var(--auth-core-font-family);
}

.icon-navigation-back {
  position: absolute;
  z-index: 99;
  top: 16px;
  left: 16px;
  font-size: 28px;
}

.close-iframe {
  position: absolute;
  z-index: 100;
  top: 16px;
  right: 16px;
}
.close-iframe.top-hint {
  top: 75px;
}

.ant-btn {
  padding: 3px 15px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 600 !important;
  font-size: var(--primary-btn-font-size);
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
.ant-btn:hover {
  border: none;
  opacity: var(--hover-opacity);
}
.ant-btn:active .ant-btn:focus {
  border: none;
}
.ant-btn:disabled {
  opacity: var(--disable-opacity);
  pointer-events: none;
}
.ant-btn:disabled span {
  opacity: var(--disable-opacity);
}

.ant-modal-confirm-btns .ant-btn {
  padding-right: 18px;
  padding-left: 18px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}

.ant-modal-content {
  border: none !important;
  border-radius: var(--modal-border-radius) !important;
  background-color: var(--modal-background-color) !important;
}
.ant-modal-content .ant-modal-header {
  background: none;
}
.ant-modal-content .ant-modal-confirm-title {
  color: var(--text-color) !important;
}

.ant-modal-confirm-body .ant-modal-confirm-content {
  color: var(--text-color);
}

.ant-drawer-content-wrapper {
  width: 100%;
  max-width: 100% !important;
  box-shadow: none !important;
}

.ant-drawer-content {
  border-radius: var(--modal-border-radius) var(--modal-border-radius) 0 0;
  background-color: var(--theme-background-color) !important;
}

.ant-form {
  color: var(--text-color);
}

.ant-form-item-explain-error {
  color: var(--error-color);
}

.ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input,
.ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input:hover {
  border-color: var(--error-color);
}

.ant-message {
  z-index: 9999999;
}

.ant-message-notice-content {
  padding: 0;
  border-radius: var(--primary-btn-border-radius);
  overflow: hidden;
  font-weight: 500;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.15);
}
.ant-message-notice-content .ant-message-custom-content {
  padding: 10px 16px;
  color: #fff;
}

.particle-auth-core-shadow-root.dark {
  color: var(--text-color);
}
.particle-auth-core-shadow-root.dark .info-sign .btn-box {
  background-color: var(--card-unclickable-background-color);
}
.particle-auth-core-shadow-root.dark .info-sign .risk-reminder {
  background-color: var(--card-unclickable-background-color);
}
.particle-auth-core-shadow-root.dark .ant-message-notice-content {
  color: var(--text-color);
  background: var(--modal-background-color);
}

.hidden {
  display: none;
}

.pre-wrap {
  white-space: pre-wrap;
}

.hide-hover {
  --hover-opacity: 1 !important;
}

::selection {
  color: #fff;
  background-color: var(--accent-color);
}

.react-input-code {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.react-input-code .input-code-item {
  width: 44px;
  height: 44px;
  padding: 0;
  margin-right: 6px;
  margin-left: 6px;
  border: transparent;
  border-radius: 12px;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: var(--text-color);
  background-clip: padding-box;
  background-color: var(--input-background-color);
  caret-color: var(--text-color);
}
.react-input-code .input-code-item:focus {
  appearance: none;
  outline: 0;
}
.react-input-code .input-code-item:not(:placeholder-shown) {
  appearance: none;
  outline: 0;
}
.react-input-code input:-webkit-autofill,
.react-input-code input:-webkit-autofill:hover,
.react-input-code input:-webkit-autofill:focus,
.react-input-code input:-webkit-autofill:active {
  box-shadow: 0 0 0 60px var(--input-background-color) inset !important;
  -webkit-text-fill-color: var(--text-color) !important;
}
.react-input-code .input-code-mask {
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
}

.primary-antd-btn {
  width: 100%;
  height: 47px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  outline: none;
  font-size: var(--primary-btn-font-size);
  line-height: 22px;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
.primary-antd-btn:focus, .primary-antd-btn:active {
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
.primary-antd-btn:hover {
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: var(--hover-opacity);
}
.primary-antd-btn:disabled {
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: var(--disable-opacity);
}
.primary-antd-btn:disabled span {
  opacity: var(--disable-opacity);
}
.primary-antd-btn.danger {
  color: white !important;
  background: var(--error-color) !important;
}
.primary-antd-btn.secondary {
  color: var(--secondary-btn-color);
  background: var(--secondary-btn-background-color);
}
.primary-antd-btn span {
  font-weight: 500;
}

.accent-antd-btn {
  width: 100%;
  height: 47px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  outline: none;
  font-size: var(--primary-btn-font-size);
  line-height: 22px;
  color: white;
  background-color: var(--accent-color);
}
.accent-antd-btn:focus, .accent-antd-btn:active {
  color: white;
  background-color: var(--accent-color);
}
.accent-antd-btn:hover {
  color: white;
  background-color: var(--accent-color);
  opacity: var(--hover-opacity);
}
.accent-antd-btn:disabled {
  color: white;
  background-color: var(--accent-color);
  opacity: var(--disable-opacity);
}
.accent-antd-btn span {
  font-weight: 500;
}

.theme-font-icon {
  color: var(--text-color);
}
.theme-font-icon:hover {
  opacity: var(--hover-opacity);
}

.no-number {
  appearance: textfield !important;
}

.ant-input-affix-wrapper:focus,
.ant-input-affix-wrapper-focused,
.ant-input:focus,
.ant-radio-input:focus + .ant-radio-inner,
.ant-input-focused {
  box-shadow: none;
}

.ant-radio-inner {
  border-width: 2px !important;
  border-color: var(--accent-color) !important;
  background: none;
}
.ant-radio-inner::after {
  width: 14px;
  height: 14px;
  margin-top: -7px;
  margin-left: -7px;
}

.ant-radio-wrapper:hover .ant-radio,
.ant-radio:hover .ant-radio-inner,
.ant-radio-input:focus + .ant-radio-inner {
  border-color: var(--accent-color) !important;
}

.ant-message-error {
  background: var(--error-color);
}
.ant-message-error .anticon {
  color: #fff;
}

.ant-message-success {
  border: 1px solid var(--green-color);
  overflow: hidden;
  background: var(--green-color);
}
.ant-message-success .anticon {
  color: #fff;
}

.color-scheme-dark {
  color-scheme: dark;
}
.color-scheme-dark iframe {
  color-scheme: none;
}

.m-warning-modal .ant-modal-confirm-btns {
  display: none;
}
.m-warning-modal .content {
  margin-top: 26px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: var(--text-color);
}
.m-warning-modal .anticon-exclamation-circle {
  display: none;
}
.m-warning-modal .anticon-close {
  color: var(--secondary-text-color);
}
.m-warning-modal .footer-btns {
  column-gap: 18px;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
.m-warning-modal .footer-btns .ant-btn {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 47px;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  color: var(--background-color);
  box-shadow: none !important;
}
.m-warning-modal .footer-btns .ant-btn:first-child {
  color: var(--secondary-btn-color);
  background-color: var(--secondary-btn-background-color);
}
.m-warning-modal .footer-btns .ant-btn::after {
  display: none !important;
}
.m-warning-modal .footer-btns .confirm-btn:hover,
.m-warning-modal .footer-btns .confirm-btn:focus,
.m-warning-modal .footer-btns .confirm-btn:active {
  color: var(--primary-btn-color);
  background-color: var(--primary-btn-background-color);
}

.ant-input {
  padding-right: 14px;
  padding-left: 14px;
}
.ant-input:focus {
  border: 1px solid var(--accent-color) !important;
}

.ant-input,
.input_email,
.ant-input-number-input,
.account-input-box input {
  border: 1px solid var(--input-background-color);
  border-radius: var(--primary-btn-border-radius);
  transition: none !important;
}
.ant-input:focus,
.input_email:focus,
.ant-input-number-input:focus,
.account-input-box input:focus {
  border: 1px solid var(--accent-color) !important;
}

.ant-btn-primary {
  background-color: var(--primary-btn-background-color);
  box-shadow: none !important;
}
.ant-btn-primary:hover {
  background-color: var(--primary-btn-background-color);
}

.ant-tabs .ant-tabs-tab .ant-tabs-tab-btn {
  font-size: 16px;
}
.ant-tabs .ant-tabs-ink-bar {
  display: none;
}

.more-text-btn {
  color: var(--accent-color) !important;
}

input::placeholder {
  color: var(--input-placeholder-color) !important;
}

.ant-btn-loading {
  opacity: var(--disable-opacity);
}
.ant-btn-loading span {
  opacity: var(--disable-opacity);
}
.ant-btn-loading::before {
  display: none !important;
}
.ant-btn-loading .ant-btn-loading-icon {
  position: relative;
  top: 3px;
  left: -3px;
  width: 19px !important;
  height: 19px !important;
  background-image: var(--loading-icon);
  background-size: 19px 19px;
  opacity: 1;
  transition: initial !important;
  animation: none !important;
}
.ant-btn-loading .ant-btn-loading-icon .anticon {
  display: none;
}

.ant-modal {
  width: 90%;
  max-width: 340px;
}
.ant-modal > [aria-hidden=true] {
  display: none;
  pointer-events: none;
}
.ant-modal .ant-modal-body {
  padding: 18px;
}
.ant-modal .ant-modal-close-x {
  background: var(--close-icon);
  background-position: 12px 12px;
  background-repeat: no-repeat;
}
.ant-modal .ant-modal-close-x .anticon {
  display: none;
}
.ant-modal .ant-btn span {
  font-size: var(--primary-btn-font-size);
}

input {
  caret-color: var(--accent-color);
}

.root-particle-modal-container {
  color: var(--text-color);
  position: fixed !important;
}
.root-particle-modal-container .ant-modal-close {
  z-index: 999;
}
.root-particle-modal-container .ant-modal-close .ant-modal-close-x {
  position: relative;
  top: 1px;
}
.root-particle-modal-container > .ant-modal > .ant-modal-content {
  width: 100%;
  height: 100%;
  border: none !important;
  border-radius: var(--modal-border-radius) !important;
  overflow: hidden;
  color: var(--text-color);
  background-color: var(--theme-background-color) !important;
}
.root-particle-modal-container > .ant-modal > .ant-modal-content > .ant-modal-body {
  width: 100%;
  height: 100%;
  padding: 0;
  color: var(--text-color);
}
.root-particle-modal-container > .ant-modal > .ant-modal-content > .ant-modal-body > div[data-path] {
  width: 100%;
  height: 100%;
}
.root-particle-modal-container > .ant-modal > .ant-modal-content > .ant-modal-body > div[data-path] .lazy-loaing-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.root-particle-modal-container > .ant-modal > .ant-modal-content > .ant-modal-body .ant-drawer {
  width: 100%;
  height: 100%;
}
.root-particle-modal-container > .ant-modal > .ant-modal-content > .ant-modal-body .ant-drawer .ant-drawer-content-wrapper {
  width: 100% !important;
}
@media (min-width: 600px) {
  .root-particle-modal-container > .ant-modal > .ant-modal-content > .ant-modal-body .ant-drawer {
    position: absolute;
  }
}
.root-particle-modal-container .ant-drawer-content-wrapper * {
  overscroll-behavior-y: none;
}
.root-particle-modal-container .ant-drawer-content-wrapper .ant-drawer-content {
  padding: 0;
  overflow: hidden;
}
.root-particle-modal-container .ant-drawer-content-wrapper .ant-drawer-content .ant-drawer-body {
  padding: 0;
  padding-top: 17px;
}
.root-particle-modal-container .ant-drawer-content-wrapper .ant-drawer-content .ant-drawer-body .particle-drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.root-particle-modal-container .ant-drawer-content-wrapper .ant-drawer-content .ant-drawer-body .particle-drawer-content .particle-close-btn + div {
  flex: 1;
  overflow: hidden;
}
@media (max-width: 600px) {
  .root-particle-modal-container .ant-drawer-content-wrapper .ant-drawer-content .ant-drawer-body {
    padding-top: 0;
  }
}
.root-particle-modal-container .ant-modal-wrap.auth-core-modal-error > .ant-modal,
.root-particle-modal-container .ant-modal-wrap.auth-core-modal-warning > .ant-modal {
  display: block;
}
.root-particle-modal-container .ant-modal-wrap.auth-core-modal-error .ant-modal-confirm-error,
.root-particle-modal-container .ant-modal-wrap.auth-core-modal-warning .ant-modal-confirm-error {
  top: 100px;
  display: block;
  margin: auto;
}
.root-particle-modal-container .ant-modal-wrap.auth-core-modal-error .ant-modal-confirm-error .ant-modal-content .ant-modal-body,
.root-particle-modal-container .ant-modal-wrap.auth-core-modal-warning .ant-modal-confirm-error .ant-modal-content .ant-modal-body {
  padding: 18px;
}

.width-100 {
  width: 100%;
}

.still-confirm {
  color: white !important;
  background: var(--error-color) !important;
}

.ant-modal-wrap {
  position: absolute;
}

.footer-box-v2 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--footer-height);
  margin: 0 !important;
  background: var(--theme-background-color);
}
.footer-box-v2 img {
  width: 167px;
  margin: 0;
}

.scroll-content {
  flex: 1;
  width: 100%;
  overflow-y: auto;
}

.height-100 {
  height: 100%;
}

@media (max-width: 600px) {
  .m-margin-top-40 {
    margin-top: 40px !important;
  }
}

@media (max-width: 600px) {
  .m-margin-top-20 {
    margin-top: 20px !important;
  }
}

.padding-top-16 {
  padding-top: 16px !important;
}`;export{o as default};
