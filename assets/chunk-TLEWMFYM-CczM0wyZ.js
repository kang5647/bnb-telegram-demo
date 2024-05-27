import{i as r}from"./chunk-QDW3HRTT-BoTSDDuh.js";import{o as l,a9 as u,a6 as i}from"./index-BqjRk-0P.js";import{I as s}from"./index-ATFV76Yr.js";var o=`.icon-eye {
  display: block;
  margin: auto;
  font-size: 23px;
}
`,d=()=>l.createElement(l.Fragment,null,l.createElement("style",null,o),l.createElement(r,{className:"icon-eye",name:"eye_open"})),c=()=>l.createElement(l.Fragment,null,l.createElement("style",null,o),l.createElement(r,{className:"icon-eye",name:"eye_close"})),p=`.password-input {
  position: relative;
  width: 100%;
  height: 47px;
  min-height: 47px;
  padding: 0;
  border: 1px solid var(--input-border-color) !important;
  border-radius: var(--primary-btn-border-radius);
  overflow: hidden;
  background: none;
}
.password-input input {
  width: 100%;
  height: 45px;
  padding: 0 8px;
  padding-left: 16px !important;
  font-weight: 500;
  font-size: 15px;
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.password-input .ant-input-suffix {
  position: absolute;
  z-index: 1;
  top: 12px;
  right: 14px;
  cursor: pointer;
}
`,m=e=>{let n=l.useRef(null);return l.createElement(l.Fragment,null,l.createElement("style",null,p),l.createElement(s.Password,{ref:n,className:"password-input"+(e!=null&&e.className?` ${e==null?void 0:e.className}`:""),iconRender:a=>a?l.createElement("div",null,l.createElement(d,null)):l.createElement("div",null,l.createElement(c,null)),onChange:a=>{var t;e!=null&&e.onChange&&((t=e==null?void 0:e.onChange)==null||t.call(e,a.target.value))},defaultValue:e==null?void 0:e.defaultValue,maxLength:(e==null?void 0:e.maxLength)||20,onPressEnter:a=>{var t;return(t=e==null?void 0:e.onPressEnter)==null?void 0:t.call(e,a)},onBlur:a=>{var t;return(t=e==null?void 0:e.onBlur)==null?void 0:t.call(e,a)},autoFocus:u(e==null?void 0:e.autoFocus)&&i()?!0:e==null?void 0:e.autoFocus}))},x=m;export{x as B};
