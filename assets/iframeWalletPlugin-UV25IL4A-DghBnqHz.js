import{af as h,ag as A,ah as E,Q as C,i as m,r as n,ai as I,aj as l,ak as a,a as P,o as b}from"./index-mZLd65Wz.js";var j=()=>{var i;let{provider:r}=h(),{wallet:o}=A(),{openAccountAndSecurity:c}=E(),{modalOptions:e}=C(),{connected:u}=m(),s=n.useCallback(async t=>{if(t==="open-account-and-security")c();else if(t==="get-user-info")return I()},[c]);return n.useEffect(()=>{var t,d,p;if(((t=e.wallet)==null?void 0:t.visible)!==!1){let g={...e.wallet,erc4337:e.erc4337,language:e.language};l.init({projectId:e.projectId,clientKey:e.clientKey,appId:e.appId},g);let w=()=>{l.walletEntryCreate()},f=()=>{l.walletEntryDestroy()};return typeof window<"u"&&((d=window.particleAuth)==null||d.on(a.ParticleAuthDisconnect,f),(p=window.particleAuth)==null||p.on(a.ParticleAuthConnect,w)),P()&&l.walletEntryCreate(),()=>{var v,y;typeof window<"u"&&((v=window.particleAuth)==null||v.off(a.ParticleAuthDisconnect,f),(y=window.particleAuth)==null||y.off(a.ParticleAuthConnect,w))}}},[e.projectId,e.clientKey,e.appId,e.wallet,e.erc4337,e.language]),n.useEffect(()=>{var t;u&&((t=e.wallet)==null?void 0:t.visible)!==!1&&l.setWalletCore({ethereum:r,solana:o},s)},[u,r,o,(i=e.wallet)==null?void 0:i.visible,s]),b.createElement("div",{id:"auth-core-modal-wallet-plugin",style:{display:"none"}},"Wallet Plugin")},K=j;export{K as default};
