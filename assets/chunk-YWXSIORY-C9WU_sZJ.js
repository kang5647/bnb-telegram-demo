import{x as i}from"./chunk-CUBEO3NX-6tnDEY28.js";import{j as d,t,M as u}from"./index-mZLd65Wz.js";function c(r){var a,l,e;if(r&&r.error_code){let o=(l=(a=window==null?void 0:window.particleI18n)==null?void 0:a.t)==null?void 0:l.call(a,`error.server_${r.error_code}`);return o&&o.startsWith("error.server_")&&(r!=null&&r.extra&&Array.isArray(r==null?void 0:r.extra)&&(r!=null&&r.extra.length)?o=r==null?void 0:r.extra[0]:o=(e=r==null?void 0:r.extra)!=null?e:r.message,o=o.charAt(0).toUpperCase()+o.slice(1)),o}else return r==null?void 0:r.message}var f=()=>{let{authCoreModal:r}=d(),a=i();function l(e){var o;let s=(o=e.error_code)!=null?o:e.code;if(s&&typeof s=="number"){if(!(s===t.InvalidCode||s===t.ResendCode||s===t.SecurityAccountFrozen||s===t.WrongPaymentPassword)){let n=c(e);n&&u.error({title:n,wrapClassName:"auth-core-modal-error",getContainer:()=>r.rootBody})}}else if(e.code==="ECONNABORTED")e.message?a.error(e.message):a.error("Network Error");else switch(e.status){case 401:case 403:case 404:case 500:a.error("Http Error: "+e.status);break;default:e.message&&typeof e.message=="string"&&a.error(e.message);break}}return{errorHandle:l}};export{f as C};
