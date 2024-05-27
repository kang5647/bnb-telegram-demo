import{i as C,Y as N,R as P,r as k,o as h,l as m,K as O,a as o,T as y,b as j}from"./index-BRu3AybB.js";var z=`.index-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
`,J=()=>{let{connect:w}=C(),f=N(),{setConnectionStatus:t,socialConnectCallback:n}=P(),v=async()=>{var r;try{let e=m.parse(O()?"":window.location.search,{ignoreQueryPrefix:!0}),c=e==null?void 0:e.particleThirdpartyParams;if(!c){o()||t("disconnected");return}delete e.particleThirdpartyParams;let l=(window.location.origin+window.location.pathname+"?"+m.stringify(e)).replace(/\?$/,"");window.history.replaceState({},document.title,l),document.title=document.title||l;let T=JSON.parse(y.decode(c)),{code:s,nonce:a,appState:d,error:i}=T,g=d?JSON.parse(y.decode(d)):{},{authorization:x,chain:E,purpose:p,verifyToken:S}=g;if(i){o()||t("disconnected"),p?j.error(i):(r=n==null?void 0:n.onError)==null||r.call(n,new Error(i));return}let u=a.split("@")[0];p==="bindLoginAccount"?f("/login-account/bind-loading",{state:{authType:u,verifyToken:S,code:s,nonce:a},replace:!0}):(await new Promise(b=>{setTimeout(()=>{b(!0)},20)}),await w({socialType:u,code:s,nonce:a,authorization:x,chain:E}))}catch{o()||t("disconnected")}};return k.useEffect(()=>{v()},[]),h.createElement("div",{className:"index-container"},h.createElement("style",null,z))},I=J;export{I as default};
