import{b as le,t as ge,a as Ie,u as f,P as T,s as A,T as g,S as j,c as W,d as E,e as k,f as b,K as fe}from"./index.browser.esm-8K0H-0Qb.js";import"./index-mZLd65Wz.js";var a;(function(e){e[e.InitializeMint=0]="InitializeMint",e[e.InitializeAccount=1]="InitializeAccount",e[e.InitializeMultisig=2]="InitializeMultisig",e[e.Transfer=3]="Transfer",e[e.Approve=4]="Approve",e[e.Revoke=5]="Revoke",e[e.SetAuthority=6]="SetAuthority",e[e.MintTo=7]="MintTo",e[e.Burn=8]="Burn",e[e.CloseAccount=9]="CloseAccount",e[e.FreezeAccount=10]="FreezeAccount",e[e.ThawAccount=11]="ThawAccount",e[e.TransferChecked=12]="TransferChecked",e[e.ApproveChecked=13]="ApproveChecked",e[e.MintToChecked=14]="MintToChecked",e[e.BurnChecked=15]="BurnChecked",e[e.InitializeAccount2=16]="InitializeAccount2",e[e.SyncNative=17]="SyncNative",e[e.InitializeAccount3=18]="InitializeAccount3",e[e.InitializeMultisig2=19]="InitializeMultisig2",e[e.InitializeMint2=20]="InitializeMint2"})(a||(a={}));const ie=e=>{const t=e.decode.bind(e),n=e.encode.bind(e);return{decode:t,encode:n}},ze=e=>t=>{const n=le(e,t),{encode:c,decode:i}=ie(n),r=n;return r.decode=(o,s)=>{const u=i(o,s);return ge(Buffer.from(u))},r.encode=(o,s,u)=>{const l=Ie(o,e);return c(l,s,u)},r},C=ze(8),we=e=>{const t=f(e),{encode:n,decode:c}=ie(t),i=t;return i.decode=(r,o)=>!!c(r,o),i.encode=(r,o,s)=>{const u=Number(r);return n(u,o,s)},i},p=e=>{const t=le(32,e),{encode:n,decode:c}=ie(t),i=t;return i.decode=(r,o)=>{const s=c(r,o);return new T(s)},i.encode=(r,o,s)=>{const u=r.toBuffer();return n(u,o,s)},i},d=new T("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),K=new T("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),P=new T("So11111111111111111111111111111111111111112");class B extends Error{constructor(t){super(t)}}class $ extends B{constructor(){super(...arguments),this.name="TokenAccountNotFoundError"}}class ee extends B{constructor(){super(...arguments),this.name="TokenInvalidAccountOwnerError"}}class re extends B{constructor(){super(...arguments),this.name="TokenInvalidAccountSizeError"}}class ve extends B{constructor(){super(...arguments),this.name="TokenInvalidMintError"}}class me extends B{constructor(){super(...arguments),this.name="TokenInvalidOwnerError"}}class Se extends B{constructor(){super(...arguments),this.name="TokenOwnerOffCurveError"}}class z extends B{constructor(){super(...arguments),this.name="TokenInvalidInstructionProgramError"}}class v extends B{constructor(){super(...arguments),this.name="TokenInvalidInstructionKeysError"}}class I extends B{constructor(){super(...arguments),this.name="TokenInvalidInstructionDataError"}}class y extends B{constructor(){super(...arguments),this.name="TokenInvalidInstructionTypeError"}}const N=A([f("instruction"),f("decimals"),p("mintAuthority"),f("freezeAuthorityOption"),p("freezeAuthority")]);function Ce(e,t,n,c,i=d){const r=[{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:j,isSigner:!1,isWritable:!1}],o=Buffer.alloc(N.span);return N.encode({instruction:a.InitializeMint,decimals:t,mintAuthority:n,freezeAuthorityOption:c?1:0,freezeAuthority:c||new T(0)},o),new g({keys:r,programId:i,data:o})}function Me(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==N.span)throw new I;const{keys:{mint:n,rent:c},data:i}=Be(e);if(i.instruction!==a.InitializeMint)throw new y;if(!n||!c)throw new v;return{programId:t,keys:{mint:n,rent:c},data:i}}function Be({programId:e,keys:[t,n],data:c}){const{instruction:i,decimals:r,mintAuthority:o,freezeAuthorityOption:s,freezeAuthority:u}=N.decode(c);return{programId:e,keys:{mint:t,rent:n},data:{instruction:i,decimals:r,mintAuthority:o,freezeAuthority:s?u:null}}}const O=A([f("instruction")]);function ye(e,t,n,c=d){const i=[{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!1},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:j,isSigner:!1,isWritable:!1}],r=Buffer.alloc(O.span);return O.encode({instruction:a.InitializeAccount},r),new g({keys:i,programId:c,data:r})}function Te(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==O.span)throw new I;const{keys:{account:n,mint:c,owner:i,rent:r},data:o}=We(e);if(o.instruction!==a.InitializeAccount)throw new y;if(!n||!c||!i||!r)throw new v;return{programId:t,keys:{account:n,mint:c,owner:i,rent:r},data:o}}function We({programId:e,keys:[t,n,c,i],data:r}){return{programId:e,keys:{account:t,mint:n,owner:c,rent:i},data:O.decode(r)}}const F=A([f("instruction"),f("m")]);function Ke(e,t,n,c=d){const i=[{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:j,isSigner:!1,isWritable:!1}];for(const o of t)i.push({pubkey:o,isSigner:!1,isWritable:!1});const r=Buffer.alloc(F.span);return F.encode({instruction:a.InitializeMultisig,m:n},r),new g({keys:i,programId:c,data:r})}function Ee(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==F.span)throw new I;const{keys:{account:n,rent:c,signers:i},data:r}=Pe(e);if(r.instruction!==a.InitializeMultisig)throw new y;if(!n||!c||!i.length)throw new v;return{programId:t,keys:{account:n,rent:c,signers:i},data:r}}function Pe({programId:e,keys:[t,n,...c],data:i}){return{programId:e,keys:{account:t,rent:n,signers:c},data:F.decode(i)}}function m(e,t,n){if(n.length){e.push({pubkey:t,isSigner:!1,isWritable:!1});for(const c of n)e.push({pubkey:c.publicKey,isSigner:!0,isWritable:!1})}else e.push({pubkey:t,isSigner:!0,isWritable:!1});return e}const D=A([f("instruction"),C("amount")]);function Ne(e,t,n,c,i=[],r=d){const o=m([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],n,i),s=Buffer.alloc(D.span);return D.encode({instruction:a.Transfer,amount:BigInt(c)},s),new g({keys:o,programId:r,data:s})}function Oe(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==D.span)throw new I;const{keys:{source:n,destination:c,owner:i,multiSigners:r},data:o}=Fe(e);if(o.instruction!==a.Transfer)throw new y;if(!n||!c||!i)throw new v;return{programId:t,keys:{source:n,destination:c,owner:i,multiSigners:r},data:o}}function Fe({programId:e,keys:[t,n,c,...i],data:r}){return{programId:e,keys:{source:t,destination:n,owner:c,multiSigners:i},data:D.decode(r)}}const q=A([f("instruction"),C("amount")]);function De(e,t,n,c,i=[],r=d){const o=m([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!1}],n,i),s=Buffer.alloc(q.span);return q.encode({instruction:a.Approve,amount:BigInt(c)},s),new g({keys:o,programId:r,data:s})}function qe(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==q.span)throw new I;const{keys:{account:n,delegate:c,owner:i,multiSigners:r},data:o}=Re(e);if(o.instruction!==a.Approve)throw new y;if(!n||!c||!i)throw new v;return{programId:t,keys:{account:n,delegate:c,owner:i,multiSigners:r},data:o}}function Re({programId:e,keys:[t,n,c,...i],data:r}){return{programId:e,keys:{account:t,delegate:n,owner:c,multiSigners:i},data:q.decode(r)}}const R=A([f("instruction")]);function Ue(e,t,n=[],c=d){const i=m([{pubkey:e,isSigner:!1,isWritable:!0}],t,n),r=Buffer.alloc(R.span);return R.encode({instruction:a.Revoke},r),new g({keys:i,programId:c,data:r})}function xe(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==R.span)throw new I;const{keys:{account:n,owner:c,multiSigners:i},data:r}=_e(e);if(r.instruction!==a.Revoke)throw new y;if(!n||!c)throw new v;return{programId:t,keys:{account:n,owner:c,multiSigners:i},data:r}}function _e({programId:e,keys:[t,n,...c],data:i}){return{programId:e,keys:{account:t,owner:n,multiSigners:c},data:R.decode(i)}}var ue;(function(e){e[e.MintTokens=0]="MintTokens",e[e.FreezeAccount=1]="FreezeAccount",e[e.AccountOwner=2]="AccountOwner",e[e.CloseAccount=3]="CloseAccount"})(ue||(ue={}));const U=A([f("instruction"),f("authorityType"),f("newAuthorityOption"),p("newAuthority")]);function Le(e,t,n,c,i=[],r=d){const o=m([{pubkey:e,isSigner:!1,isWritable:!0}],t,i),s=Buffer.alloc(U.span);return U.encode({instruction:a.SetAuthority,authorityType:n,newAuthorityOption:c?1:0,newAuthority:c||new T(0)},s),new g({keys:o,programId:r,data:s})}function Ge(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==U.span)throw new I;const{keys:{account:n,currentAuthority:c,multiSigners:i},data:r}=Ze(e);if(r.instruction!==a.SetAuthority)throw new y;if(!n||!c)throw new v;return{programId:t,keys:{account:n,currentAuthority:c,multiSigners:i},data:r}}function Ze({programId:e,keys:[t,n,...c],data:i}){const{instruction:r,authorityType:o,newAuthorityOption:s,newAuthority:u}=U.decode(i);return{programId:e,keys:{account:t,currentAuthority:n,multiSigners:c},data:{instruction:r,authorityType:o,newAuthority:s?u:null}}}const x=A([f("instruction"),C("amount")]);function Ve(e,t,n,c,i=[],r=d){const o=m([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],n,i),s=Buffer.alloc(x.span);return x.encode({instruction:a.MintTo,amount:BigInt(c)},s),new g({keys:o,programId:r,data:s})}function Je(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==x.span)throw new I;const{keys:{mint:n,destination:c,authority:i,multiSigners:r},data:o}=Qe(e);if(o.instruction!==a.MintTo)throw new y;if(!n||!c||!i)throw new v;return{programId:t,keys:{mint:n,destination:c,authority:i,multiSigners:r},data:o}}function Qe({programId:e,keys:[t,n,c,...i],data:r}){return{programId:e,keys:{mint:t,destination:n,authority:c,multiSigners:i},data:x.decode(r)}}const _=A([f("instruction"),C("amount")]);function Ye(e,t,n,c,i=[],r=d){const o=m([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],n,i),s=Buffer.alloc(_.span);return _.encode({instruction:a.Burn,amount:BigInt(c)},s),new g({keys:o,programId:r,data:s})}function He(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==_.span)throw new I;const{keys:{account:n,mint:c,owner:i,multiSigners:r},data:o}=Xe(e);if(o.instruction!==a.Burn)throw new y;if(!n||!c||!i)throw new v;return{programId:t,keys:{account:n,mint:c,owner:i,multiSigners:r},data:o}}function Xe({programId:e,keys:[t,n,c,...i],data:r}){return{programId:e,keys:{account:t,mint:n,owner:c,multiSigners:i},data:_.decode(r)}}const L=A([f("instruction")]);function je(e,t,n,c=[],i=d){const r=m([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],n,c),o=Buffer.alloc(L.span);return L.encode({instruction:a.CloseAccount},o),new g({keys:r,programId:i,data:o})}function $e(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==L.span)throw new I;const{keys:{account:n,destination:c,authority:i,multiSigners:r},data:o}=et(e);if(o.instruction!==a.CloseAccount)throw new y;if(!n||!c||!i)throw new v;return{programId:t,keys:{account:n,destination:c,authority:i,multiSigners:r},data:o}}function et({programId:e,keys:[t,n,c,...i],data:r}){return{programId:e,keys:{account:t,destination:n,authority:c,multiSigners:i},data:L.decode(r)}}const G=A([f("instruction")]);function tt(e,t,n,c=[],i=d){const r=m([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!1}],n,c),o=Buffer.alloc(G.span);return G.encode({instruction:a.FreezeAccount},o),new g({keys:r,programId:i,data:o})}function nt(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==G.span)throw new I;const{keys:{account:n,mint:c,authority:i,multiSigners:r},data:o}=it(e);if(o.instruction!==a.FreezeAccount)throw new y;if(!n||!c||!i)throw new v;return{programId:t,keys:{account:n,mint:c,authority:i,multiSigners:r},data:o}}function it({programId:e,keys:[t,n,c,...i],data:r}){return{programId:e,keys:{account:t,mint:n,authority:c,multiSigners:i},data:G.decode(r)}}const Z=A([f("instruction")]);function rt(e,t,n,c=[],i=d){const r=m([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!1}],n,c),o=Buffer.alloc(Z.span);return Z.encode({instruction:a.ThawAccount},o),new g({keys:r,programId:i,data:o})}function ct(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==Z.span)throw new I;const{keys:{account:n,mint:c,authority:i,multiSigners:r},data:o}=ot(e);if(o.instruction!==a.ThawAccount)throw new y;if(!n||!c||!i)throw new v;return{programId:t,keys:{account:n,mint:c,authority:i,multiSigners:r},data:o}}function ot({programId:e,keys:[t,n,c,...i],data:r}){return{programId:e,keys:{account:t,mint:n,authority:c,multiSigners:i},data:Z.decode(r)}}const V=A([f("instruction"),C("amount"),f("decimals")]);function st(e,t,n,c,i,r,o=[],s=d){const u=m([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!1},{pubkey:n,isSigner:!1,isWritable:!0}],c,o),l=Buffer.alloc(V.span);return V.encode({instruction:a.TransferChecked,amount:BigInt(i),decimals:r},l),new g({keys:u,programId:s,data:l})}function at(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==V.span)throw new I;const{keys:{source:n,mint:c,destination:i,owner:r,multiSigners:o},data:s}=ut(e);if(s.instruction!==a.TransferChecked)throw new y;if(!n||!c||!i||!r)throw new v;return{programId:t,keys:{source:n,mint:c,destination:i,owner:r,multiSigners:o},data:s}}function ut({programId:e,keys:[t,n,c,i,...r],data:o}){return{programId:e,keys:{source:t,mint:n,destination:c,owner:i,multiSigners:r},data:V.decode(o)}}const J=A([f("instruction"),C("amount"),f("decimals")]);function dt(e,t,n,c,i,r,o=[],s=d){const u=m([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!1},{pubkey:n,isSigner:!1,isWritable:!1}],c,o),l=Buffer.alloc(J.span);return J.encode({instruction:a.ApproveChecked,amount:BigInt(i),decimals:r},l),new g({keys:u,programId:s,data:l})}function lt(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==J.span)throw new I;const{keys:{account:n,mint:c,delegate:i,owner:r,multiSigners:o},data:s}=ft(e);if(s.instruction!==a.ApproveChecked)throw new y;if(!n||!c||!i||!r)throw new v;return{programId:t,keys:{account:n,mint:c,delegate:i,owner:r,multiSigners:o},data:s}}function ft({programId:e,keys:[t,n,c,i,...r],data:o}){return{programId:e,keys:{account:t,mint:n,delegate:c,owner:i,multiSigners:r},data:J.decode(o)}}const Q=A([f("instruction"),C("amount"),f("decimals")]);function wt(e,t,n,c,i,r=[],o=d){const s=m([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],n,r),u=Buffer.alloc(Q.span);return Q.encode({instruction:a.MintToChecked,amount:BigInt(c),decimals:i},u),new g({keys:s,programId:o,data:u})}function yt(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==Q.span)throw new I;const{keys:{mint:n,destination:c,authority:i,multiSigners:r},data:o}=ht(e);if(o.instruction!==a.MintToChecked)throw new y;if(!n||!c||!i)throw new v;return{programId:t,keys:{mint:n,destination:c,authority:i,multiSigners:r},data:o}}function ht({programId:e,keys:[t,n,c,...i],data:r}){return{programId:e,keys:{mint:t,destination:n,authority:c,multiSigners:i},data:Q.decode(r)}}const Y=A([f("instruction"),C("amount"),f("decimals")]);function kt(e,t,n,c,i,r=[],o=d){const s=m([{pubkey:e,isSigner:!1,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0}],n,r),u=Buffer.alloc(Y.span);return Y.encode({instruction:a.BurnChecked,amount:BigInt(c),decimals:i},u),new g({keys:s,programId:o,data:u})}function bt(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==Y.span)throw new I;const{keys:{account:n,mint:c,owner:i,multiSigners:r},data:o}=pt(e);if(o.instruction!==a.BurnChecked)throw new y;if(!n||!c||!i)throw new v;return{programId:t,keys:{account:n,mint:c,owner:i,multiSigners:r},data:o}}function pt({programId:e,keys:[t,n,c,...i],data:r}){return{programId:e,keys:{account:t,mint:n,owner:c,multiSigners:i},data:Y.decode(r)}}const H=A([f("instruction")]);function he(e,t=d){const n=[{pubkey:e,isSigner:!1,isWritable:!0}],c=Buffer.alloc(H.span);return H.encode({instruction:a.SyncNative},c),new g({keys:n,programId:t,data:c})}function At(e,t=d){if(!e.programId.equals(t))throw new z;if(e.data.length!==H.span)throw new I;const{keys:{account:n},data:c}=gt(e);if(c.instruction!==a.SyncNative)throw new y;if(!n)throw new v;return{programId:t,keys:{account:n},data:c}}function gt({programId:e,keys:[t],data:n}){return{programId:e,keys:{account:t},data:H.decode(n)}}function Mt(e,t=d){if(!e.data.length)throw new I;const n=f().decode(e.data);if(n===a.InitializeMint)return Me(e,t);if(n===a.InitializeAccount)return Te(e,t);if(n===a.InitializeMultisig)return Ee(e,t);if(n===a.Transfer)return Oe(e,t);if(n===a.Approve)return qe(e,t);if(n===a.Revoke)return xe(e,t);if(n===a.SetAuthority)return Ge(e,t);if(n===a.MintTo)return Je(e,t);if(n===a.Burn)return He(e,t);if(n===a.CloseAccount)return $e(e,t);if(n===a.FreezeAccount)return nt(e,t);if(n===a.ThawAccount)return ct(e,t);if(n===a.TransferChecked)return at(e,t);if(n===a.ApproveChecked)return lt(e,t);if(n===a.MintToChecked)return yt(e,t);if(n===a.BurnChecked)return bt(e,t);if(n===a.InitializeAccount2)throw new y;if(n===a.SyncNative)return At(e,t);throw n===a.InitializeAccount3?new y:n===a.InitializeMultisig2?new y:n===a.InitializeMint2?new y:new y}function Bt(e){return e.data.instruction===a.InitializeMint}function Tt(e){return e.data.instruction===a.InitializeAccount}function Wt(e){return e.data.instruction===a.InitializeMultisig}function Kt(e){return e.data.instruction===a.Transfer}function Et(e){return e.data.instruction===a.Approve}function Pt(e){return e.data.instruction===a.Revoke}function Nt(e){return e.data.instruction===a.SetAuthority}function Ot(e){return e.data.instruction===a.MintTo}function Ft(e){return e.data.instruction===a.Burn}function Dt(e){return e.data.instruction===a.CloseAccount}function qt(e){return e.data.instruction===a.FreezeAccount}function Rt(e){return e.data.instruction===a.ThawAccount}function Ut(e){return e.data.instruction===a.TransferChecked}function xt(e){return e.data.instruction===a.ApproveChecked}function _t(e){return e.data.instruction===a.MintToChecked}function Lt(e){return e.data.instruction===a.BurnChecked}function Gt(e){return e.data.instruction===a.SyncNative}function ce(e,t,n,c,i=d,r=K){const o=[{pubkey:e,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:n,isSigner:!1,isWritable:!1},{pubkey:c,isSigner:!1,isWritable:!1},{pubkey:W.programId,isSigner:!1,isWritable:!1},{pubkey:i,isSigner:!1,isWritable:!1},{pubkey:j,isSigner:!1,isWritable:!1}];return new g({keys:o,programId:r,data:Buffer.alloc(0)})}var X;(function(e){e[e.Uninitialized=0]="Uninitialized",e[e.Initialized=1]="Initialized",e[e.Frozen=2]="Frozen"})(X||(X={}));const ke=A([p("mint"),p("owner"),C("amount"),E("delegateOption"),p("delegate"),f("state"),E("isNativeOption"),C("isNative"),C("delegatedAmount"),E("closeAuthorityOption"),p("closeAuthority")]),te=ke.span;async function de(e,t,n,c=d){const i=await e.getAccountInfo(t,n);if(!i)throw new $;if(!i.owner.equals(c))throw new ee;if(i.data.length!=te)throw new re;const r=ke.decode(i.data);return{address:t,mint:r.mint,owner:r.owner,amount:r.amount,delegate:r.delegateOption?r.delegate:null,delegatedAmount:r.delegatedAmount,isInitialized:r.state!==X.Uninitialized,isFrozen:r.state===X.Frozen,isNative:!!r.isNativeOption,rentExemptReserve:r.isNativeOption?r.isNative:null,closeAuthority:r.closeAuthorityOption?r.closeAuthority:null}}async function be(e,t){return await e.getMinimumBalanceForRentExemption(te,t)}const pe=A([E("mintAuthorityOption"),p("mintAuthority"),C("supply"),f("decimals"),we("isInitialized"),E("freezeAuthorityOption"),p("freezeAuthority")]),oe=pe.span;async function Zt(e,t,n,c=d){const i=await e.getAccountInfo(t,n);if(!i)throw new $;if(!i.owner.equals(c))throw new ee;if(i.data.length!=oe)throw new re;const r=pe.decode(i.data);return{address:t,mintAuthority:r.mintAuthorityOption?r.mintAuthority:null,supply:r.supply,decimals:r.decimals,isInitialized:r.isInitialized,freezeAuthority:r.freezeAuthorityOption?r.freezeAuthority:null}}async function It(e,t){return await e.getMinimumBalanceForRentExemption(oe,t)}async function se(e,t,n=!1,c=d,i=K){if(!n&&!T.isOnCurve(t.toBuffer()))throw new Se;const[r]=await T.findProgramAddress([t.toBuffer(),c.toBuffer(),e.toBuffer()],i);return r}const Ae=A([f("m"),f("n"),we("isInitialized"),p("signer1"),p("signer2"),p("signer3"),p("signer4"),p("signer5"),p("signer6"),p("signer7"),p("signer8"),p("signer9"),p("signer10"),p("signer11")]),ae=Ae.span;async function Vt(e,t,n,c=d){const i=await e.getAccountInfo(t,n);if(!i)throw new $;if(!i.owner.equals(c))throw new ee;if(i.data.length!=ae)throw new re;return{address:t,...Ae.decode(i.data)}}async function zt(e,t){return await e.getMinimumBalanceForRentExemption(ae,t)}async function Jt(e,t,n,c,i,r=fe.generate(),o,s=d){const u=await It(e),l=new k().add(W.createAccount({fromPubkey:t.publicKey,newAccountPubkey:r.publicKey,space:oe,lamports:u,programId:s}),Ce(r.publicKey,i,n,c,s));return await b(e,l,[t,r],o),r.publicKey}async function vt(e,t,n,c,i,r=d,o=K){const s=await se(n,c,!1,r,o),u=new k().add(ce(t.publicKey,s,c,n,r,o));return await b(e,u,[t],i),s}async function mt(e,t,n,c,i,r,o=d){if(!i)return await vt(e,t,n,c,r,o);const s=await be(e),u=new k().add(W.createAccount({fromPubkey:t.publicKey,newAccountPubkey:i.publicKey,space:te,lamports:s,programId:o}),ye(i.publicKey,n,c,o));return await b(e,u,[t,i],r),i.publicKey}async function Qt(e,t,n,c,i,r,o=d){if(!c)return await mt(e,t,P,n,i,r,o);if(!i){const l=await se(P,n,!1,o,K),w=new k().add(ce(t.publicKey,l,n,P,o,K),W.transfer({fromPubkey:t.publicKey,toPubkey:l,lamports:c}),he(l,o));return await b(e,w,[t],r),l}const s=await be(e),u=new k().add(W.createAccount({fromPubkey:t.publicKey,newAccountPubkey:i.publicKey,space:te,lamports:s,programId:o}),W.transfer({fromPubkey:t.publicKey,toPubkey:i.publicKey,lamports:c}),ye(i.publicKey,P,n,o));return await b(e,u,[t,i],r),i.publicKey}async function Yt(e,t,n,c,i=fe.generate(),r,o=d){const s=await zt(e),u=new k().add(W.createAccount({fromPubkey:t.publicKey,newAccountPubkey:i.publicKey,space:ae,lamports:s,programId:o}),Ke(i.publicKey,n,c,o));return await b(e,u,[t,i],r),i.publicKey}function S(e,t){return e instanceof T?[e,t]:[e.publicKey,[e]]}async function Ht(e,t,n,c,i,r,o=[],s,u=d){const[l,w]=S(i,o),h=new k().add(Ne(n,c,l,r,o,u));return await b(e,h,[t,...w],s)}async function Xt(e,t,n,c,i,r,o=[],s,u=d){const[l,w]=S(i,o),h=new k().add(De(n,c,l,r,o,u));return await b(e,h,[t,...w],s)}async function jt(e,t,n,c,i=[],r,o=d){const[s,u]=S(c,i),l=new k().add(Ue(n,s,i,o));return await b(e,l,[t,...u],r)}async function $t(e,t,n,c,i,r,o=[],s,u=d){const[l,w]=S(c,o),h=new k().add(Le(n,l,i,r,o,u));return await b(e,h,[t,...w],s)}async function en(e,t,n,c,i,r,o=[],s,u=d){const[l,w]=S(i,o),h=new k().add(Ve(n,c,l,r,o,u));return await b(e,h,[t,...w],s)}async function tn(e,t,n,c,i,r,o=[],s,u=d){const[l,w]=S(i,o),h=new k().add(Ye(n,c,l,r,o,u));return await b(e,h,[t,...w],s)}async function nn(e,t,n,c,i,r=[],o,s=d){const[u,l]=S(i,r),w=new k().add(je(n,c,u,r,s));return await b(e,w,[t,...l],o)}async function rn(e,t,n,c,i,r=[],o,s=d){const[u,l]=S(i,r),w=new k().add(tt(n,c,u,r,s));return await b(e,w,[t,...l],o)}async function cn(e,t,n,c,i,r=[],o,s=d){const[u,l]=S(i,r),w=new k().add(rt(n,c,u,r,s));return await b(e,w,[t,...l],o)}async function on(e,t,n,c,i,r,o,s,u=[],l,w=d){const[h,M]=S(r,u),ne=new k().add(st(n,c,i,h,o,s,u,w));return await b(e,ne,[t,...M],l)}async function sn(e,t,n,c,i,r,o,s,u=[],l,w=d){const[h,M]=S(r,u),ne=new k().add(dt(c,n,i,h,o,s,u,w));return await b(e,ne,[t,...M],l)}async function an(e,t,n,c,i,r,o,s=[],u,l=d){const[w,h]=S(i,s),M=new k().add(wt(n,c,w,r,o,s,l));return await b(e,M,[t,...h],u)}async function un(e,t,n,c,i,r,o,s=[],u,l=d){const[w,h]=S(i,s),M=new k().add(kt(n,c,w,r,o,s,l));return await b(e,M,[t,...h],u)}async function dn(e,t,n,c,i=d){const r=new k().add(he(n,i));return await b(e,r,[t],c)}async function ln(e,t,n,c,i=!1,r,o,s=d,u=K){const l=await se(n,c,i,s,u);let w;try{w=await de(e,l,r,s)}catch(h){if(h instanceof $||h instanceof ee){try{const M=new k().add(ce(t.publicKey,l,c,n,s,u));await b(e,M,[t],o)}catch{}w=await de(e,l,r,s)}else throw h}if(!w.mint.equals(n))throw new ve;if(!w.owner.equals(c))throw new me;return w}export{te as ACCOUNT_SIZE,K as ASSOCIATED_TOKEN_PROGRAM_ID,ke as AccountLayout,X as AccountState,ue as AuthorityType,oe as MINT_SIZE,ae as MULTISIG_SIZE,pe as MintLayout,Ae as MultisigLayout,P as NATIVE_MINT,d as TOKEN_PROGRAM_ID,$ as TokenAccountNotFoundError,B as TokenError,a as TokenInstruction,ee as TokenInvalidAccountOwnerError,re as TokenInvalidAccountSizeError,I as TokenInvalidInstructionDataError,v as TokenInvalidInstructionKeysError,z as TokenInvalidInstructionProgramError,y as TokenInvalidInstructionTypeError,ve as TokenInvalidMintError,me as TokenInvalidOwnerError,Se as TokenOwnerOffCurveError,Xt as approve,sn as approveChecked,J as approveCheckedInstructionData,q as approveInstructionData,tn as burn,un as burnChecked,Y as burnCheckedInstructionData,_ as burnInstructionData,nn as closeAccount,L as closeAccountInstructionData,mt as createAccount,dt as createApproveCheckedInstruction,De as createApproveInstruction,vt as createAssociatedTokenAccount,ce as createAssociatedTokenAccountInstruction,kt as createBurnCheckedInstruction,Ye as createBurnInstruction,je as createCloseAccountInstruction,tt as createFreezeAccountInstruction,ye as createInitializeAccountInstruction,Ce as createInitializeMintInstruction,Ke as createInitializeMultisigInstruction,Jt as createMint,wt as createMintToCheckedInstruction,Ve as createMintToInstruction,Yt as createMultisig,Ue as createRevokeInstruction,Le as createSetAuthorityInstruction,he as createSyncNativeInstruction,rt as createThawAccountInstruction,st as createTransferCheckedInstruction,Ne as createTransferInstruction,Qt as createWrappedNativeAccount,lt as decodeApproveCheckedInstruction,ft as decodeApproveCheckedInstructionUnchecked,qe as decodeApproveInstruction,Re as decodeApproveInstructionUnchecked,bt as decodeBurnCheckedInstruction,pt as decodeBurnCheckedInstructionUnchecked,He as decodeBurnInstruction,Xe as decodeBurnInstructionUnchecked,$e as decodeCloseAccountInstruction,et as decodeCloseAccountInstructionUnchecked,nt as decodeFreezeAccountInstruction,it as decodeFreezeAccountInstructionUnchecked,Te as decodeInitializeAccountInstruction,We as decodeInitializeAccountInstructionUnchecked,Me as decodeInitializeMintInstruction,Be as decodeInitializeMintInstructionUnchecked,Ee as decodeInitializeMultisigInstruction,Pe as decodeInitializeMultisigInstructionUnchecked,Mt as decodeInstruction,yt as decodeMintToCheckedInstruction,ht as decodeMintToCheckedInstructionUnchecked,Je as decodeMintToInstruction,Qe as decodeMintToInstructionUnchecked,xe as decodeRevokeInstruction,_e as decodeRevokeInstructionUnchecked,Ge as decodeSetAuthorityInstruction,Ze as decodeSetAuthorityInstructionUnchecked,At as decodeSyncNativeInstruction,gt as decodeSyncNativeInstructionUnchecked,ct as decodeThawAccountInstruction,ot as decodeThawAccountInstructionUnchecked,at as decodeTransferCheckedInstruction,ut as decodeTransferCheckedInstructionUnchecked,Oe as decodeTransferInstruction,Fe as decodeTransferInstructionUnchecked,rn as freezeAccount,G as freezeAccountInstructionData,de as getAccount,se as getAssociatedTokenAddress,be as getMinimumBalanceForRentExemptAccount,It as getMinimumBalanceForRentExemptMint,zt as getMinimumBalanceForRentExemptMultisig,Zt as getMint,Vt as getMultisig,ln as getOrCreateAssociatedTokenAccount,O as initializeAccountInstructionData,N as initializeMintInstructionData,F as initializeMultisigInstructionData,xt as isApproveCheckedInstruction,Et as isApproveInstruction,Lt as isBurnCheckedInstruction,Ft as isBurnInstruction,Dt as isCloseAccountInstruction,qt as isFreezeAccountInstruction,Tt as isInitializeAccountInstruction,Bt as isInitializeMintInstruction,Wt as isInitializeMultisigInstruction,_t as isMintToCheckedInstruction,Ot as isMintToInstruction,Pt as isRevokeInstruction,Nt as isSetAuthorityInstruction,Gt as isSyncNativeInstruction,Rt as isThawAccountInstruction,Ut as isTransferCheckedInstruction,Kt as isTransferInstruction,en as mintTo,an as mintToChecked,Q as mintToCheckedInstructionData,x as mintToInstructionData,jt as revoke,R as revokeInstructionData,$t as setAuthority,U as setAuthorityInstructionData,dn as syncNative,H as syncNativeInstructionData,cn as thawAccount,Z as thawAccountInstructionData,Ht as transfer,on as transferChecked,V as transferCheckedInstructionData,D as transferInstructionData};
