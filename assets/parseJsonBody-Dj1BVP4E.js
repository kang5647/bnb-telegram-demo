import{c as a}from"./index-BCLRDPOn.js";const x=(e,t)=>{const o={};for(const s in t)d(o,e,t,s);return o},d=(e,t,o,s)=>{if(t!==null){let n=o[s];typeof n=="function"&&(n=[,n]);const[f=p,l=y,u=s]=n;(typeof f=="function"&&f(t[u])||typeof f!="function"&&f)&&(e[s]=l(t[u]));return}let[r,i]=o[s];if(typeof i=="function"){let n;const f=r===void 0&&(n=i())!=null,l=typeof r=="function"&&!!r(void 0)||typeof r!="function"&&!!r;f?e[s]=n:l&&(e[s]=i())}else{const n=r===void 0&&i!=null,f=typeof r=="function"&&!!r(i)||typeof r!="function"&&!!r;(n||f)&&(e[s]=i)}},p=e=>e!=null,y=e=>e,c=e=>{if(e==null)return{};if(Array.isArray(e))return e.filter(t=>t!=null).map(c);if(typeof e=="object"){const t={};for(const o of Object.keys(e))e[o]!=null&&(t[o]=c(e[o]));return t}return e},m=(e,t)=>a(e,t).then(o=>{if(o.length)try{return JSON.parse(o)}catch(s){throw(s==null?void 0:s.name)==="SyntaxError"&&Object.defineProperty(s,"$responseBodyText",{value:o}),s}return{}}),O=async(e,t)=>{const o=await m(e,t);return o.message=o.message??o.Message,o},_=(e,t)=>{const o=(i,n)=>Object.keys(i).find(f=>f.toLowerCase()===n.toLowerCase()),s=i=>{let n=i;return typeof n=="number"&&(n=n.toString()),n.indexOf(",")>=0&&(n=n.split(",")[0]),n.indexOf(":")>=0&&(n=n.split(":")[0]),n.indexOf("#")>=0&&(n=n.split("#")[1]),n},r=o(e.headers,"x-amzn-errortype");if(r!==void 0)return s(e.headers[r]);if(t.code!==void 0)return s(t.code);if(t.__type!==void 0)return s(t.__type)};export{c as _,O as a,_ as l,m as p,x as t};
