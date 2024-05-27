import{r as i,b_ as fe,bX as j,bV as q,av as L,bZ as Ze,b$ as A,d4 as Br,dX as Fr,o as Cn,cA as oi,c4 as st,bW as N,c9 as Vr,c0 as $n,cG as Mt,au as Ur,ex as ii,d7 as Wr,ce as Qe,c3 as ue,bY as Gr,d1 as Hr,cB as ai,cC as si,bU as fi,bT as li,cd as qr,cN as Yr,c1 as ci,cx as ui,c5 as gi,cJ as pi,ey as ft,ao as Kn,ez as en,eA as At,eB as Bn,eC as di,eD as mi,am as Xr,eE as vi,R as Zr,e as bi,eF as xi,eG as hi,aq as _i,eH as er,Y as wi,eI as yi}from"./index-BRu3AybB.js";import{R as et,P as Ci,b as Si,u as Sn,T as Jr,i as $i}from"./colors-CsfG1L0B.js";import{D as Ei,i as Pi}from"./chunk-QDW3HRTT-BMcfbWvm.js";import{a as Ii}from"./index-HJps0ZjI.js";function Ti(e,n){return function(t){return e(n(t))}}var Qr=Ti,Ni=Qr,Ri=Ni(Object.getPrototypeOf,Object),eo=Ri,Oi=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],bn=void 0;function ki(e,n){var t=e.prefixCls,r=e.invalidate,o=e.item,a=e.renderItem,s=e.responsive,f=e.responsiveDisabled,l=e.registerSize,c=e.itemKey,g=e.className,u=e.style,p=e.children,m=e.display,d=e.order,h=e.component,b=h===void 0?"div":h,x=fe(e,Oi),C=s&&!m;function _(E){l(c,E)}i.useEffect(function(){return function(){_(null)}},[]);var y=a&&o!==bn?a(o):p,S;r||(S={opacity:C?0:1,height:C?0:bn,overflowY:C?"hidden":bn,order:s?d:bn,pointerEvents:C?"none":bn,position:C?"absolute":bn});var v={};C&&(v["aria-hidden"]=!0);var R=i.createElement(b,j({className:q(!r&&t,g),style:L(L({},S),u)},v,x,{ref:n}),y);return s&&(R=i.createElement(et,{onResize:function(T){var $=T.offsetWidth;_($)},disabled:f},R)),R}var zn=i.forwardRef(ki);zn.displayName="Item";function Mi(e){if(typeof MessageChannel>"u")Ze(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}function Ai(){var e=i.useRef(null),n=function(r){e.current||(e.current=[],Mi(function(){Fr.unstable_batchedUpdates(function(){e.current.forEach(function(o){o()}),e.current=null})})),e.current.push(r)};return n}function Mn(e,n){var t=i.useState(n),r=A(t,2),o=r[0],a=r[1],s=Br(function(f){e(function(){a(f)})});return[o,s]}var nt=Cn.createContext(null),ji=["component"],Di=["className"],zi=["className"],Li=function(n,t){var r=i.useContext(nt);if(!r){var o=n.component,a=o===void 0?"div":o,s=fe(n,ji);return i.createElement(a,j({},s,{ref:t}))}var f=r.className,l=fe(r,Di),c=n.className,g=fe(n,zi);return i.createElement(nt.Provider,{value:null},i.createElement(zn,j({ref:t,className:q(f,c)},l,g)))},no=i.forwardRef(Li);no.displayName="RawItem";var Ki=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],to="responsive",ro="invalidate";function Bi(e){return"+ ".concat(e.length," ...")}function Fi(e,n){var t=e.prefixCls,r=t===void 0?"rc-overflow":t,o=e.data,a=o===void 0?[]:o,s=e.renderItem,f=e.renderRawItem,l=e.itemKey,c=e.itemWidth,g=c===void 0?10:c,u=e.ssr,p=e.style,m=e.className,d=e.maxCount,h=e.renderRest,b=e.renderRawRest,x=e.suffix,C=e.component,_=C===void 0?"div":C,y=e.itemComponent,S=e.onVisibleChange,v=fe(e,Ki),R=u==="full",E=Ai(),T=Mn(E,null),$=A(T,2),w=$[0],k=$[1],O=w||0,M=Mn(E,new Map),F=A(M,2),V=F[0],B=F[1],X=Mn(E,0),Z=A(X,2),le=Z[0],ne=Z[1],P=Mn(E,0),I=A(P,2),D=I[0],W=I[1],de=Mn(E,0),ve=A(de,2),ie=ve[0],me=ve[1],ae=i.useState(null),G=A(ae,2),Ie=G[0],Se=G[1],$e=i.useState(null),Te=A($e,2),K=Te[0],Ee=Te[1],be=i.useMemo(function(){return K===null&&R?Number.MAX_SAFE_INTEGER:K||0},[K,w]),nn=i.useState(!1),De=A(nn,2),we=De[0],Le=De[1],ke="".concat(r,"-item"),Fe=Math.max(le,D),Ve=d===to,Q=a.length&&Ve,Ue=d===ro,ye=Q||typeof d=="number"&&a.length>d,ce=i.useMemo(function(){var z=a;return Q?w===null&&R?z=a:z=a.slice(0,Math.min(a.length,O/g)):typeof d=="number"&&(z=a.slice(0,d)),z},[a,g,w,d,Q]),Ne=i.useMemo(function(){return Q?a.slice(be+1):a.slice(ce.length)},[a,ce,Q,be]),ge=i.useCallback(function(z,H){var re;return typeof l=="function"?l(z):(re=l&&(z==null?void 0:z[l]))!==null&&re!==void 0?re:H},[l]),We=i.useCallback(s||function(z){return z},[s]);function Pe(z,H,re){K===z&&(H===void 0||H===Ie)||(Ee(z),re||(Le(z<a.length-1),S==null||S(z)),H!==void 0&&Se(H))}function he(z,H){k(H.clientWidth)}function xe(z,H){B(function(re){var Re=new Map(re);return H===null?Re.delete(z):Re.set(z,H),Re})}function an(z,H){W(H),ne(D)}function sn(z,H){me(H)}function Ye(z){return V.get(ge(ce[z],z))}oi(function(){if(O&&typeof Fe=="number"&&ce){var z=ie,H=ce.length,re=H-1;if(!H){Pe(0,null);return}for(var Re=0;Re<H;Re+=1){var Ge=Ye(Re);if(R&&(Ge=Ge||0),Ge===void 0){Pe(Re-1,void 0,!0);break}if(z+=Ge,re===0&&z<=O||Re===re-1&&z+Ye(re)<=O){Pe(re,null);break}else if(z+Fe>O){Pe(Re-1,z-Ge-ie+D);break}}x&&Ye(0)+ie>O&&Se(null)}},[O,V,D,ie,ge,ce]);var fn=we&&!!Ne.length,ln={};Ie!==null&&Q&&(ln={position:"absolute",left:Ie,top:0});var ze={prefixCls:ke,responsive:Q,component:y,invalidate:Ue},tn=f?function(z,H){var re=ge(z,H);return i.createElement(nt.Provider,{key:re,value:L(L({},ze),{},{order:H,item:z,itemKey:re,registerSize:xe,display:H<=be})},f(z,H))}:function(z,H){var re=ge(z,H);return i.createElement(zn,j({},ze,{order:H,key:re,item:z,renderItem:We,itemKey:re,registerSize:xe,display:H<=be}))},Ke,cn={order:fn?be:Number.MAX_SAFE_INTEGER,className:"".concat(ke,"-rest"),registerSize:an,display:fn};if(b)b&&(Ke=i.createElement(nt.Provider,{value:L(L({},ze),cn)},b(Ne)));else{var Xe=h||Bi;Ke=i.createElement(zn,j({},ze,cn),typeof Xe=="function"?Xe(Ne):Xe)}var Ce=i.createElement(_,j({className:q(!Ue&&r,m),style:p,ref:n},v),ce.map(tn),ye?Ke:null,x&&i.createElement(zn,j({},ze,{responsive:Ve,responsiveDisabled:!Q,order:be,className:"".concat(ke,"-suffix"),registerSize:sn,display:!0,style:ln}),x));return Ve&&(Ce=i.createElement(et,{onResize:he,disabled:!Q},Ce)),Ce}var Je=i.forwardRef(Fi);Je.displayName="Overflow";Je.Item=no;Je.RESPONSIVE=to;Je.INVALIDATE=ro;function Dn(e){return Ci.includes(e)}var Vi=function(n){var t=n.className,r=n.prefixCls,o=n.style,a=n.color,s=n.children,f=n.text,l=n.placement,c=l===void 0?"end":l,g=i.useContext(st),u=g.getPrefixCls,p=g.direction,m=u("ribbon",r),d=Dn(a),h=q(m,"".concat(m,"-placement-").concat(c),N(N({},"".concat(m,"-rtl"),p==="rtl"),"".concat(m,"-color-").concat(a),d),t),b={},x={};return a&&!d&&(b.background=a,x.color=a),i.createElement("div",{className:"".concat(m,"-wrapper")},s,i.createElement("div",{className:h,style:j(j({},b),o)},i.createElement("span",{className:"".concat(m,"-text")},f),i.createElement("div",{className:"".concat(m,"-corner"),style:x})))};function nr(e){var n=e.prefixCls,t=e.value,r=e.current,o=e.offset,a=o===void 0?0:o,s;return a&&(s={position:"absolute",top:"".concat(a,"00%"),left:0}),i.createElement("span",{style:s,className:q("".concat(n,"-only-unit"),{current:r})},t)}function Ui(e,n,t){for(var r=e,o=0;(r+10)%10!==n;)r+=t,o+=t;return o}function Wi(e){var n=e.prefixCls,t=e.count,r=e.value,o=Number(r),a=Math.abs(t),s=i.useState(o),f=A(s,2),l=f[0],c=f[1],g=i.useState(a),u=A(g,2),p=u[0],m=u[1],d=function(){c(o),m(a)};i.useEffect(function(){var v=setTimeout(function(){d()},1e3);return function(){clearTimeout(v)}},[o]);var h,b;if(l===o||Number.isNaN(o)||Number.isNaN(l))h=[i.createElement(nr,j({},e,{key:o,current:!0}))],b={transition:"none"};else{h=[];for(var x=o+10,C=[],_=o;_<=x;_+=1)C.push(_);var y=C.findIndex(function(v){return v%10===l});h=C.map(function(v,R){var E=v%10;return i.createElement(nr,j({},e,{key:v,value:E,offset:R-y,current:R===y}))});var S=p<a?1:-1;b={transform:"translateY(".concat(-Ui(l,o,S),"00%)")}}return i.createElement("span",{className:"".concat(n,"-only"),style:b,onTransitionEnd:d},h)}var Gi=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t},Hi=function(n){var t=n.prefixCls,r=n.count,o=n.className,a=n.motionClassName,s=n.style,f=n.title,l=n.show,c=n.component,g=c===void 0?"sup":c,u=n.children,p=Gi(n,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),m=i.useContext(st),d=m.getPrefixCls,h=d("scroll-number",t),b=j(j({},p),{"data-show":l,style:s,className:q(h,o,a),title:f}),x=r;if(r&&Number(r)%1===0){var C=String(r).split("");x=C.map(function(_,y){return i.createElement(Wi,{prefixCls:h,count:Number(r),value:_,key:C.length-y})})}return s&&s.borderColor&&(b.style=j(j({},s),{boxShadow:"0 0 0 1px ".concat(s.borderColor," inset")})),u?Vr(u,function(_){return{className:q("".concat(h,"-custom-component"),_==null?void 0:_.className,a)}}):i.createElement(g,b,x)},qi=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t},oo=function(n){var t=n.prefixCls,r=n.scrollNumberPrefixCls,o=n.children,a=n.status,s=n.text,f=n.color,l=n.count,c=l===void 0?null:l,g=n.overflowCount,u=g===void 0?99:g,p=n.dot,m=p===void 0?!1:p,d=n.size,h=d===void 0?"default":d,b=n.title,x=n.offset,C=n.style,_=n.className,y=n.showZero,S=y===void 0?!1:y,v=qi(n,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),R=i.useContext(st),E=R.getPrefixCls,T=R.direction,$=E("badge",t),w=c>u?"".concat(u,"+"):c,k=w==="0"||w===0,O=c===null||k&&!S,M=(a!=null||f!=null)&&O,F=m&&!k,V=F?"":w,B=i.useMemo(function(){var G=V==null||V==="";return(G||k&&!S)&&!F},[V,k,S,F]),X=i.useRef(c);B||(X.current=c);var Z=X.current,le=i.useRef(V);B||(le.current=V);var ne=le.current,P=i.useRef(F);B||(P.current=F);var I=i.useMemo(function(){if(!x)return j({},C);var G={marginTop:x[1]};return T==="rtl"?G.left=parseInt(x[0],10):G.right=-parseInt(x[0],10),j(j({},G),C)},[T,x,C]),D=b??(typeof Z=="string"||typeof Z=="number"?Z:void 0),W=B||!s?null:i.createElement("span",{className:"".concat($,"-status-text")},s),de=!Z||$n(Z)!=="object"?void 0:Vr(Z,function(G){return{style:j(j({},I),G.style)}}),ve=q(N(N(N({},"".concat($,"-status-dot"),M),"".concat($,"-status-").concat(a),!!a),"".concat($,"-status-").concat(f),Dn(f))),ie={};f&&!Dn(f)&&(ie.background=f);var me=q($,N(N(N({},"".concat($,"-status"),M),"".concat($,"-not-a-wrapper"),!o),"".concat($,"-rtl"),T==="rtl"),_);if(!o&&M){var ae=I.color;return i.createElement("span",j({},v,{className:me,style:I}),i.createElement("span",{className:ve,style:ie}),s&&i.createElement("span",{style:{color:ae},className:"".concat($,"-status-text")},s))}return i.createElement("span",j({},v,{className:me}),o,i.createElement(Mt,{visible:!B,motionName:"".concat($,"-zoom"),motionAppear:!1,motionDeadline:1e3},function(G){var Ie=G.className,Se=E("scroll-number",r),$e=P.current,Te=q(N(N(N(N(N(N({},"".concat($,"-dot"),$e),"".concat($,"-count"),!$e),"".concat($,"-count-sm"),h==="small"),"".concat($,"-multiple-words"),!$e&&ne&&ne.toString().length>1),"".concat($,"-status-").concat(a),!!a),"".concat($,"-status-").concat(f),Dn(f))),K=j({},I);return f&&!Dn(f)&&(K=K||{},K.background=f),i.createElement(Hi,{prefixCls:Se,show:!B,motionClassName:Ie,className:Te,count:ne,title:D,style:K,key:"scrollNumber"},de)}),W)};oo.Ribbon=Vi;var Yi={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"},Xi=function(n,t){return i.createElement(Ur,L(L({},n),{},{ref:t,icon:Yi}))},Zi=i.forwardRef(Xi),io=i.createContext(null);function jt(e,n){return e===void 0?null:"".concat(e,"-").concat(n)}function ao(e){var n=i.useContext(io);return jt(n,e)}var Ji=["children","locked"],Be=i.createContext(null);function Qi(e,n){var t=L({},e);return Object.keys(n).forEach(function(r){var o=n[r];o!==void 0&&(t[r]=o)}),t}function Ln(e){var n=e.children,t=e.locked,r=fe(e,Ji),o=i.useContext(Be),a=ii(function(){return Qi(o,r)},[o,r],function(s,f){return!t&&(s[0]!==f[0]||!Wr(s[1],f[1],!0))});return i.createElement(Be.Provider,{value:a},n)}var ea=[],so=i.createContext(null);function lt(){return i.useContext(so)}var fo=i.createContext(ea);function Fn(e){var n=i.useContext(fo);return i.useMemo(function(){return e!==void 0?[].concat(Qe(n),[e]):n},[n,e])}var lo=i.createContext(null),Dt=i.createContext({});function tr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Si(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||t==="a"&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),a=Number(o),s=null;return o&&!Number.isNaN(a)?s=a:r&&s===null&&(s=0),r&&e.disabled&&(s=null),s!==null&&(s>=0||n&&s<0)}return!1}function co(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=Qe(e.querySelectorAll("*")).filter(function(r){return tr(r,n)});return tr(e,n)&&t.unshift(e),t}var wt=ue.LEFT,yt=ue.RIGHT,Ct=ue.UP,Xn=ue.DOWN,Zn=ue.ENTER,uo=ue.ESC,An=ue.HOME,jn=ue.END,rr=[Ct,Xn,wt,yt];function na(e,n,t,r){var o,a,s,f,l="prev",c="next",g="children",u="parent";if(e==="inline"&&r===Zn)return{inlineTrigger:!0};var p=(o={},N(o,Ct,l),N(o,Xn,c),o),m=(a={},N(a,wt,t?c:l),N(a,yt,t?l:c),N(a,Xn,g),N(a,Zn,g),a),d=(s={},N(s,Ct,l),N(s,Xn,c),N(s,Zn,g),N(s,uo,u),N(s,wt,t?g:u),N(s,yt,t?u:g),s),h={inline:p,horizontal:m,vertical:d,inlineSub:p,horizontalSub:d,verticalSub:d},b=(f=h["".concat(e).concat(n?"":"Sub")])===null||f===void 0?void 0:f[r];switch(b){case l:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case u:return{offset:-1,sibling:!1};case g:return{offset:1,sibling:!1};default:return null}}function ta(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}function ra(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}function go(e,n){var t=co(e,!0);return t.filter(function(r){return n.has(r)})}function or(e,n,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var o=go(e,n),a=o.length,s=o.findIndex(function(f){return t===f});return r<0?s===-1?s=a-1:s-=1:r>0&&(s+=1),s=(s+a)%a,o[s]}function oa(e,n,t,r,o,a,s,f,l,c){var g=i.useRef(),u=i.useRef();u.current=n;var p=function(){Ze.cancel(g.current)};return i.useEffect(function(){return function(){p()}},[]),function(m){var d=m.which;if([].concat(rr,[Zn,uo,An,jn]).includes(d)){var h,b,x,C=function(){h=new Set,b=new Map,x=new Map;var F=a();return F.forEach(function(V){var B=document.querySelector("[data-menu-id='".concat(jt(r,V),"']"));B&&(h.add(B),x.set(B,V),b.set(V,B))}),h};C();var _=b.get(n),y=ra(_,h),S=x.get(y),v=na(e,s(S,!0).length===1,t,d);if(!v&&d!==An&&d!==jn)return;(rr.includes(d)||[An,jn].includes(d))&&m.preventDefault();var R=function(F){if(F){var V=F,B=F.querySelector("a");B!=null&&B.getAttribute("href")&&(V=B);var X=x.get(F);f(X),p(),g.current=Ze(function(){u.current===X&&V.focus()})}};if([An,jn].includes(d)||v.sibling||!y){var E;!y||e==="inline"?E=o.current:E=ta(y);var T,$=go(E,h);d===An?T=$[0]:d===jn?T=$[$.length-1]:T=or(E,h,y,v.offset),R(T)}else if(v.inlineTrigger)l(S);else if(v.offset>0)l(S,!0),p(),g.current=Ze(function(){C();var M=y.getAttribute("aria-controls"),F=document.getElementById(M),V=or(F,h);R(V)},5);else if(v.offset<0){var w=s(S,!0),k=w[w.length-2],O=b.get(k);l(k,!1),R(O)}}c==null||c(m)}}function ia(e){Promise.resolve().then(e)}var zt="__RC_UTIL_PATH_SPLIT__",ir=function(n){return n.join(zt)},aa=function(n){return n.split(zt)},St="rc-menu-more";function sa(){var e=i.useState({}),n=A(e,2),t=n[1],r=i.useRef(new Map),o=i.useRef(new Map),a=i.useState([]),s=A(a,2),f=s[0],l=s[1],c=i.useRef(0),g=i.useRef(!1),u=function(){g.current||t({})},p=i.useCallback(function(_,y){var S=ir(y);o.current.set(S,_),r.current.set(_,S),c.current+=1;var v=c.current;ia(function(){v===c.current&&u()})},[]),m=i.useCallback(function(_,y){var S=ir(y);o.current.delete(S),r.current.delete(_)},[]),d=i.useCallback(function(_){l(_)},[]),h=i.useCallback(function(_,y){var S=r.current.get(_)||"",v=aa(S);return y&&f.includes(v[0])&&v.unshift(St),v},[f]),b=i.useCallback(function(_,y){return _.some(function(S){var v=h(S,!0);return v.includes(y)})},[h]),x=function(){var y=Qe(r.current.keys());return f.length&&y.push(St),y},C=i.useCallback(function(_){var y="".concat(r.current.get(_)).concat(zt),S=new Set;return Qe(o.current.keys()).forEach(function(v){v.startsWith(y)&&S.add(o.current.get(v))}),S},[]);return i.useEffect(function(){return function(){g.current=!0}},[]),{registerPath:p,unregisterPath:m,refreshOverflowKeys:d,isSubPathKey:b,getKeyPath:h,getKeys:x,getSubPathKeys:C}}function yn(e){var n=i.useRef(e);n.current=e;var t=i.useCallback(function(){for(var r,o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return(r=n.current)===null||r===void 0?void 0:r.call.apply(r,[n].concat(a))},[]);return e?t:void 0}var fa=Math.random().toFixed(5).toString().slice(2),ar=0;function la(e){var n=Sn(e,{value:e}),t=A(n,2),r=t[0],o=t[1];return i.useEffect(function(){ar+=1;var a="".concat(fa,"-").concat(ar);o("rc-menu-uuid-".concat(a))},[]),r}function po(e,n,t,r){var o=i.useContext(Be),a=o.activeKey,s=o.onActive,f=o.onInactive,l={active:a===e};return n||(l.onMouseEnter=function(c){t==null||t({key:e,domEvent:c}),s(e)},l.onMouseLeave=function(c){r==null||r({key:e,domEvent:c}),f(e)}),l}function mo(e){var n=i.useContext(Be),t=n.mode,r=n.rtl,o=n.inlineIndent;if(t!=="inline")return null;var a=e;return r?{paddingRight:a*o}:{paddingLeft:a*o}}function vo(e){var n=e.icon,t=e.props,r=e.children,o;return typeof n=="function"?o=i.createElement(n,L({},t)):o=n,o||r||null}var ca=["item"];function tt(e){var n=e.item,t=fe(e,ca);return Object.defineProperty(t,"item",{get:function(){return Gr(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}var ua=["title","attribute","elementRef"],ga=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],pa=["active"],da=function(e){ai(t,e);var n=si(t);function t(){return fi(this,t),n.apply(this,arguments)}return li(t,[{key:"render",value:function(){var o=this.props,a=o.title,s=o.attribute,f=o.elementRef,l=fe(o,ua),c=qr(l,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Gr(!s,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),i.createElement(Je.Item,j({},s,{title:typeof a=="string"?a:void 0},c,{ref:f}))}}]),t}(i.Component),ma=i.forwardRef(function(e,n){var t,r=e.style,o=e.className,a=e.eventKey;e.warnKey;var s=e.disabled,f=e.itemIcon,l=e.children,c=e.role,g=e.onMouseEnter,u=e.onMouseLeave,p=e.onClick,m=e.onKeyDown,d=e.onFocus,h=fe(e,ga),b=ao(a),x=i.useContext(Be),C=x.prefixCls,_=x.onItemClick,y=x.disabled,S=x.overflowDisabled,v=x.itemIcon,R=x.selectedKeys,E=x.onActive,T=i.useContext(Dt),$=T._internalRenderMenuItem,w="".concat(C,"-item"),k=i.useRef(),O=i.useRef(),M=y||s,F=Hr(n,O),V=Fn(a),B=function(ae){return{key:a,keyPath:Qe(V).reverse(),item:k.current,domEvent:ae}},X=f||v,Z=po(a,M,g,u),le=Z.active,ne=fe(Z,pa),P=R.includes(a),I=mo(V.length),D=function(ae){if(!M){var G=B(ae);p==null||p(tt(G)),_(G)}},W=function(ae){if(m==null||m(ae),ae.which===ue.ENTER){var G=B(ae);p==null||p(tt(G)),_(G)}},de=function(ae){E(a),d==null||d(ae)},ve={};e.role==="option"&&(ve["aria-selected"]=P);var ie=i.createElement(da,j({ref:k,elementRef:F,role:c===null?"none":c||"menuitem",tabIndex:s?null:-1,"data-menu-id":S&&b?null:b},h,ne,ve,{component:"li","aria-disabled":s,style:L(L({},I),r),className:q(w,(t={},N(t,"".concat(w,"-active"),le),N(t,"".concat(w,"-selected"),P),N(t,"".concat(w,"-disabled"),M),t),o),onClick:D,onKeyDown:W,onFocus:de}),l,i.createElement(vo,{props:L(L({},e),{},{isSelected:P}),icon:X}));return $&&(ie=$(ie,e,{selected:P})),ie});function va(e,n){var t=e.eventKey,r=lt(),o=Fn(t);return i.useEffect(function(){if(r)return r.registerPath(t,o),function(){r.unregisterPath(t,o)}},[o]),r?null:i.createElement(ma,j({},e,{ref:n}))}const ct=i.forwardRef(va);var ba=["className","children"],xa=function(n,t){var r=n.className,o=n.children,a=fe(n,ba),s=i.useContext(Be),f=s.prefixCls,l=s.mode,c=s.rtl;return i.createElement("ul",j({className:q(f,c&&"".concat(f,"-rtl"),"".concat(f,"-sub"),"".concat(f,"-").concat(l==="inline"?"inline":"vertical"),r),role:"menu"},a,{"data-menu-list":!0,ref:t}),o)},Lt=i.forwardRef(xa);Lt.displayName="SubMenuList";var ha=["label","children","key","type"];function Kt(e,n){return Yr(e).map(function(t,r){if(i.isValidElement(t)){var o,a,s=t.key,f=(o=(a=t.props)===null||a===void 0?void 0:a.eventKey)!==null&&o!==void 0?o:s,l=f==null;l&&(f="tmp_key-".concat([].concat(Qe(n),[r]).join("-")));var c={key:f,eventKey:f};return i.cloneElement(t,c)}return t})}function $t(e){return(e||[]).map(function(n,t){if(n&&$n(n)==="object"){var r=n,o=r.label,a=r.children,s=r.key,f=r.type,l=fe(r,ha),c=s??"tmp-".concat(t);return a||f==="group"?f==="group"?i.createElement(xo,j({key:c},l,{title:o}),$t(a)):i.createElement(Bt,j({key:c},l,{title:o}),$t(a)):f==="divider"?i.createElement(ho,j({key:c},l)):i.createElement(ct,j({key:c},l),o)}return null}).filter(function(n){return n})}function _a(e,n,t){var r=e;return n&&(r=$t(n)),Kt(r,t)}var on={adjustX:1,adjustY:1},wa={topLeft:{points:["bl","tl"],overflow:on,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:on,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:on,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:on,offset:[4,0]}},ya={topLeft:{points:["bl","tl"],overflow:on,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:on,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:on,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:on,offset:[4,0]}};function bo(e,n,t){if(n)return n;if(t)return t[e]||t.other}var Ca={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Sa(e){var n=e.prefixCls,t=e.visible,r=e.children,o=e.popup,a=e.popupClassName,s=e.popupOffset,f=e.disabled,l=e.mode,c=e.onVisibleChange,g=i.useContext(Be),u=g.getPopupContainer,p=g.rtl,m=g.subMenuOpenDelay,d=g.subMenuCloseDelay,h=g.builtinPlacements,b=g.triggerSubMenuAction,x=g.forceSubMenuRender,C=g.rootClassName,_=g.motion,y=g.defaultMotions,S=i.useState(!1),v=A(S,2),R=v[0],E=v[1],T=p?L(L({},ya),h):L(L({},wa),h),$=Ca[l],w=bo(l,_,y),k=i.useRef(w);l!=="inline"&&(k.current=w);var O=L(L({},k.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),M=i.useRef();return i.useEffect(function(){return M.current=Ze(function(){E(t)}),function(){Ze.cancel(M.current)}},[t]),i.createElement(Jr,{prefixCls:n,popupClassName:q("".concat(n,"-popup"),N({},"".concat(n,"-rtl"),p),a,C),stretch:l==="horizontal"?"minWidth":null,getPopupContainer:u,builtinPlacements:T,popupPlacement:$,popupVisible:R,popup:o,popupAlign:s&&{offset:s},action:f?[]:[b],mouseEnterDelay:m,mouseLeaveDelay:d,onPopupVisibleChange:c,forceRender:x,popupMotion:O},r)}function $a(e){var n=e.id,t=e.open,r=e.keyPath,o=e.children,a="inline",s=i.useContext(Be),f=s.prefixCls,l=s.forceSubMenuRender,c=s.motion,g=s.defaultMotions,u=s.mode,p=i.useRef(!1);p.current=u===a;var m=i.useState(!p.current),d=A(m,2),h=d[0],b=d[1],x=p.current?t:!1;i.useEffect(function(){p.current&&b(!1)},[u]);var C=L({},bo(a,c,g));r.length>1&&(C.motionAppear=!1);var _=C.onVisibleChanged;return C.onVisibleChanged=function(y){return!p.current&&!y&&b(!0),_==null?void 0:_(y)},h?null:i.createElement(Ln,{mode:a,locked:!p.current},i.createElement(Mt,j({visible:x},C,{forceRender:l,removeOnLeave:!1,leavedClassName:"".concat(f,"-hidden")}),function(y){var S=y.className,v=y.style;return i.createElement(Lt,{id:n,className:S,style:v},o)}))}var Ea=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Pa=["active"],Ia=function(n){var t,r=n.style,o=n.className,a=n.title,s=n.eventKey;n.warnKey;var f=n.disabled,l=n.internalPopupClose,c=n.children,g=n.itemIcon,u=n.expandIcon,p=n.popupClassName,m=n.popupOffset,d=n.onClick,h=n.onMouseEnter,b=n.onMouseLeave,x=n.onTitleClick,C=n.onTitleMouseEnter,_=n.onTitleMouseLeave,y=fe(n,Ea),S=ao(s),v=i.useContext(Be),R=v.prefixCls,E=v.mode,T=v.openKeys,$=v.disabled,w=v.overflowDisabled,k=v.activeKey,O=v.selectedKeys,M=v.itemIcon,F=v.expandIcon,V=v.onItemClick,B=v.onOpenChange,X=v.onActive,Z=i.useContext(Dt),le=Z._internalRenderSubMenuItem,ne=i.useContext(lo),P=ne.isSubPathKey,I=Fn(),D="".concat(R,"-submenu"),W=$||f,de=i.useRef(),ve=i.useRef(),ie=g||M,me=u||F,ae=T.includes(s),G=!w&&ae,Ie=P(O,s),Se=po(s,W,C,_),$e=Se.active,Te=fe(Se,Pa),K=i.useState(!1),Ee=A(K,2),be=Ee[0],nn=Ee[1],De=function(xe){W||nn(xe)},we=function(xe){De(!0),h==null||h({key:s,domEvent:xe})},Le=function(xe){De(!1),b==null||b({key:s,domEvent:xe})},ke=i.useMemo(function(){return $e||(E!=="inline"?be||P([k],s):!1)},[E,$e,k,be,s,P]),Fe=mo(I.length),Ve=function(xe){W||(x==null||x({key:s,domEvent:xe}),E==="inline"&&B(s,!ae))},Q=yn(function(he){d==null||d(tt(he)),V(he)}),Ue=function(xe){E!=="inline"&&B(s,xe)},ye=function(){X(s)},ce=S&&"".concat(S,"-popup"),Ne=i.createElement("div",j({role:"menuitem",style:Fe,className:"".concat(D,"-title"),tabIndex:W?null:-1,ref:de,title:typeof a=="string"?a:null,"data-menu-id":w&&S?null:S,"aria-expanded":G,"aria-haspopup":!0,"aria-controls":ce,"aria-disabled":W,onClick:Ve,onFocus:ye},Te),a,i.createElement(vo,{icon:E!=="horizontal"?me:null,props:L(L({},n),{},{isOpen:G,isSubMenu:!0})},i.createElement("i",{className:"".concat(D,"-arrow")}))),ge=i.useRef(E);if(E!=="inline"&&I.length>1?ge.current="vertical":ge.current=E,!w){var We=ge.current;Ne=i.createElement(Sa,{mode:We,prefixCls:D,visible:!l&&G&&E!=="inline",popupClassName:p,popupOffset:m,popup:i.createElement(Ln,{mode:We==="horizontal"?"vertical":We},i.createElement(Lt,{id:ce,ref:ve},c)),disabled:W,onVisibleChange:Ue},Ne)}var Pe=i.createElement(Je.Item,j({role:"none"},y,{component:"li",style:r,className:q(D,"".concat(D,"-").concat(E),o,(t={},N(t,"".concat(D,"-open"),G),N(t,"".concat(D,"-active"),ke),N(t,"".concat(D,"-selected"),Ie),N(t,"".concat(D,"-disabled"),W),t)),onMouseEnter:we,onMouseLeave:Le}),Ne,!w&&i.createElement($a,{id:ce,open:G,keyPath:I},c));return le&&(Pe=le(Pe,n,{selected:Ie,active:ke,open:G,disabled:W})),i.createElement(Ln,{onItemClick:Q,mode:E==="horizontal"?"vertical":E,itemIcon:ie,expandIcon:me},Pe)};function Bt(e){var n=e.eventKey,t=e.children,r=Fn(n),o=Kt(t,r),a=lt();i.useEffect(function(){if(a)return a.registerPath(n,r),function(){a.unregisterPath(n,r)}},[r]);var s;return a?s=o:s=i.createElement(Ia,e,o),i.createElement(fo.Provider,{value:r},s)}var Ta=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],xn=[],Na=i.forwardRef(function(e,n){var t,r,o=e,a=o.prefixCls,s=a===void 0?"rc-menu":a,f=o.rootClassName,l=o.style,c=o.className,g=o.tabIndex,u=g===void 0?0:g,p=o.items,m=o.children,d=o.direction,h=o.id,b=o.mode,x=b===void 0?"vertical":b,C=o.inlineCollapsed,_=o.disabled,y=o.disabledOverflow,S=o.subMenuOpenDelay,v=S===void 0?.1:S,R=o.subMenuCloseDelay,E=R===void 0?.1:R,T=o.forceSubMenuRender,$=o.defaultOpenKeys,w=o.openKeys,k=o.activeKey,O=o.defaultActiveFirst,M=o.selectable,F=M===void 0?!0:M,V=o.multiple,B=V===void 0?!1:V,X=o.defaultSelectedKeys,Z=o.selectedKeys,le=o.onSelect,ne=o.onDeselect,P=o.inlineIndent,I=P===void 0?24:P,D=o.motion,W=o.defaultMotions,de=o.triggerSubMenuAction,ve=de===void 0?"hover":de,ie=o.builtinPlacements,me=o.itemIcon,ae=o.expandIcon,G=o.overflowedIndicator,Ie=G===void 0?"...":G,Se=o.overflowedIndicatorPopupClassName,$e=o.getPopupContainer,Te=o.onClick,K=o.onOpenChange,Ee=o.onKeyDown;o.openAnimation,o.openTransitionName;var be=o._internalRenderMenuItem,nn=o._internalRenderSubMenuItem,De=fe(o,Ta),we=i.useMemo(function(){return _a(m,p,xn)},[m,p]),Le=i.useState(!1),ke=A(Le,2),Fe=ke[0],Ve=ke[1],Q=i.useRef(),Ue=la(h),ye=d==="rtl",ce=Sn($,{value:w,postState:function(J){return J||xn}}),Ne=A(ce,2),ge=Ne[0],We=Ne[1],Pe=function(J){var oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function Oe(){We(J),K==null||K(J)}oe?Fr.flushSync(Oe):Oe()},he=i.useState(ge),xe=A(he,2),an=xe[0],sn=xe[1],Ye=i.useRef(!1),fn=i.useMemo(function(){return(x==="inline"||x==="vertical")&&C?["vertical",C]:[x,!1]},[x,C]),ln=A(fn,2),ze=ln[0],tn=ln[1],Ke=ze==="inline",cn=i.useState(ze),Xe=A(cn,2),Ce=Xe[0],z=Xe[1],H=i.useState(tn),re=A(H,2),Re=re[0],Ge=re[1];i.useEffect(function(){z(ze),Ge(tn),Ye.current&&(Ke?We(an):Pe(xn))},[ze,tn]);var xt=i.useState(0),Un=A(xt,2),Me=Un[0],Wn=Un[1],mn=Me>=we.length-1||Ce!=="horizontal"||y;i.useEffect(function(){Ke&&sn(ge)},[ge]),i.useEffect(function(){return Ye.current=!0,function(){Ye.current=!1}},[]);var He=sa(),rn=He.registerPath,vn=He.unregisterPath,Rn=He.refreshOverflowKeys,On=He.isSubPathKey,Gn=He.getKeyPath,Y=He.getKeys,U=He.getSubPathKeys,pe=i.useMemo(function(){return{registerPath:rn,unregisterPath:vn}},[rn,vn]),_e=i.useMemo(function(){return{isSubPathKey:On}},[On]);i.useEffect(function(){Rn(mn?xn:we.slice(Me+1).map(function(se){return se.key}))},[Me,mn]);var qe=Sn(k||O&&((t=we[0])===null||t===void 0?void 0:t.key),{value:k}),Ae=A(qe,2),un=Ae[0],ht=Ae[1],Wo=yn(function(se){ht(se)}),Go=yn(function(){ht(void 0)});i.useImperativeHandle(n,function(){return{list:Q.current,focus:function(J){var oe,Oe=un??((oe=we.find(function(ri){return!ri.props.disabled}))===null||oe===void 0?void 0:oe.key);if(Oe){var je,gn,kn;(je=Q.current)===null||je===void 0||(gn=je.querySelector("li[data-menu-id='".concat(jt(Ue,Oe),"']")))===null||gn===void 0||(kn=gn.focus)===null||kn===void 0||kn.call(gn,J)}}}});var Ho=Sn(X||[],{value:Z,postState:function(J){return Array.isArray(J)?J:J==null?xn:[J]}}),Jt=A(Ho,2),Hn=Jt[0],qo=Jt[1],Yo=function(J){if(F){var oe=J.key,Oe=Hn.includes(oe),je;B?Oe?je=Hn.filter(function(kn){return kn!==oe}):je=[].concat(Qe(Hn),[oe]):je=[oe],qo(je);var gn=L(L({},J),{},{selectedKeys:je});Oe?ne==null||ne(gn):le==null||le(gn)}!B&&ge.length&&Ce!=="inline"&&Pe(xn)},Xo=yn(function(se){Te==null||Te(tt(se)),Yo(se)}),Qt=yn(function(se,J){var oe=ge.filter(function(je){return je!==se});if(J)oe.push(se);else if(Ce!=="inline"){var Oe=U(se);oe=oe.filter(function(je){return!Oe.has(je)})}Wr(ge,oe,!0)||Pe(oe,!0)}),Zo=yn($e),Jo=function(J,oe){var Oe=oe??!ge.includes(J);Qt(J,Oe)},Qo=oa(Ce,un,ye,Ue,Q,Y,Gn,ht,Jo,Ee);i.useEffect(function(){Ve(!0)},[]);var ei=i.useMemo(function(){return{_internalRenderMenuItem:be,_internalRenderSubMenuItem:nn}},[be,nn]),ni=Ce!=="horizontal"||y?we:we.map(function(se,J){return i.createElement(Ln,{key:se.key,overflowDisabled:J>Me},se)}),ti=i.createElement(Je,j({id:h,ref:Q,prefixCls:"".concat(s,"-overflow"),component:"ul",itemComponent:ct,className:q(s,"".concat(s,"-root"),"".concat(s,"-").concat(Ce),c,(r={},N(r,"".concat(s,"-inline-collapsed"),Re),N(r,"".concat(s,"-rtl"),ye),r),f),dir:d,style:l,role:"menu",tabIndex:u,data:ni,renderRawItem:function(J){return J},renderRawRest:function(J){var oe=J.length,Oe=oe?we.slice(-oe):null;return i.createElement(Bt,{eventKey:St,title:Ie,disabled:mn,internalPopupClose:oe===0,popupClassName:Se},Oe)},maxCount:Ce!=="horizontal"||y?Je.INVALIDATE:Je.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(J){Wn(J)},onKeyDown:Qo},De));return i.createElement(Dt.Provider,{value:ei},i.createElement(io.Provider,{value:Ue},i.createElement(Ln,{prefixCls:s,rootClassName:f,mode:Ce,openKeys:ge,rtl:ye,disabled:_,motion:Fe?D:null,defaultMotions:Fe?W:null,activeKey:un,onActive:Wo,onInactive:Go,selectedKeys:Hn,inlineIndent:I,subMenuOpenDelay:v,subMenuCloseDelay:E,forceSubMenuRender:T,builtinPlacements:ie,triggerSubMenuAction:ve,getPopupContainer:Zo,itemIcon:me,expandIcon:ae,onItemClick:Xo,onOpenChange:Qt},i.createElement(lo.Provider,{value:_e},ti),i.createElement("div",{style:{display:"none"},"aria-hidden":!0},i.createElement(so.Provider,{value:pe},we)))))}),Ra=["className","title","eventKey","children"],Oa=["children"],ka=function(n){var t=n.className,r=n.title;n.eventKey;var o=n.children,a=fe(n,Ra),s=i.useContext(Be),f=s.prefixCls,l="".concat(f,"-item-group");return i.createElement("li",j({role:"presentation"},a,{onClick:function(g){return g.stopPropagation()},className:q(l,t)}),i.createElement("div",{role:"presentation",className:"".concat(l,"-title"),title:typeof r=="string"?r:void 0},r),i.createElement("ul",{role:"group",className:"".concat(l,"-list")},o))};function xo(e){var n=e.children,t=fe(e,Oa),r=Fn(t.eventKey),o=Kt(n,r),a=lt();return a?o:i.createElement(ka,qr(t,["warnKey"]),o)}function ho(e){var n=e.className,t=e.style,r=i.useContext(Be),o=r.prefixCls,a=lt();return a?null:i.createElement("li",{className:q("".concat(o,"-item-divider"),n),style:t})}var Vn=Na;Vn.Item=ct;Vn.SubMenu=Bt;Vn.ItemGroup=xo;Vn.Divider=ho;var hn={adjustX:1,adjustY:1},_n=[0,0],Ma={topLeft:{points:["bl","tl"],overflow:hn,offset:[0,-4],targetOffset:_n},topCenter:{points:["bc","tc"],overflow:hn,offset:[0,-4],targetOffset:_n},topRight:{points:["br","tr"],overflow:hn,offset:[0,-4],targetOffset:_n},bottomLeft:{points:["tl","bl"],overflow:hn,offset:[0,4],targetOffset:_n},bottomCenter:{points:["tc","bc"],overflow:hn,offset:[0,4],targetOffset:_n},bottomRight:{points:["tr","br"],overflow:hn,offset:[0,4],targetOffset:_n}},Aa=ue.ESC,ja=ue.TAB;function Da(e){var n=e.visible,t=e.setTriggerVisible,r=e.triggerRef,o=e.onVisibleChange,a=e.autoFocus,s=i.useRef(!1),f=function(){if(n&&r.current){var u,p,m,d;(u=r.current)===null||u===void 0||(p=u.triggerRef)===null||p===void 0||(m=p.current)===null||m===void 0||(d=m.focus)===null||d===void 0||d.call(m),t(!1),typeof o=="function"&&o(!1)}},l=function(){var u,p,m,d,h=co((u=r.current)===null||u===void 0||(p=u.popupRef)===null||p===void 0||(m=p.current)===null||m===void 0||(d=m.getElement)===null||d===void 0?void 0:d.call(m)),b=h[0];return b!=null&&b.focus?(b.focus(),s.current=!0,!0):!1},c=function(u){switch(u.keyCode){case Aa:f();break;case ja:{var p=!1;s.current||(p=l()),p?u.preventDefault():f();break}}};i.useEffect(function(){return n?(window.addEventListener("keydown",c),a&&Ze(l,3),function(){window.removeEventListener("keydown",c),s.current=!1}):function(){s.current=!1}},[n])}var za=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function La(e,n){var t=e.arrow,r=t===void 0?!1:t,o=e.prefixCls,a=o===void 0?"rc-dropdown":o,s=e.transitionName,f=e.animation,l=e.align,c=e.placement,g=c===void 0?"bottomLeft":c,u=e.placements,p=u===void 0?Ma:u,m=e.getPopupContainer,d=e.showAction,h=e.hideAction,b=e.overlayClassName,x=e.overlayStyle,C=e.visible,_=e.trigger,y=_===void 0?["hover"]:_,S=e.autoFocus,v=fe(e,za),R=i.useState(),E=A(R,2),T=E[0],$=E[1],w="visible"in e?C:T,k=i.useRef(null);i.useImperativeHandle(n,function(){return k.current}),Da({visible:w,setTriggerVisible:$,triggerRef:k,onVisibleChange:e.onVisibleChange,autoFocus:S});var O=function(){var I=e.overlay,D;return typeof I=="function"?D=I():D=I,D},M=function(I){var D=e.onOverlayClick;$(!1),D&&D(I)},F=function(I){var D=e.onVisibleChange;$(I),typeof D=="function"&&D(I)},V=function(){var I=O();return i.createElement(i.Fragment,null,r&&i.createElement("div",{className:"".concat(a,"-arrow")}),I)},B=function(){var I=e.overlay;return typeof I=="function"?V:V()},X=function(){var I=e.minOverlayWidthMatchTrigger,D=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?I:!D},Z=function(){var I=e.openClassName;return I!==void 0?I:"".concat(a,"-open")},le=function(){var I=e.children,D=I.props?I.props:{},W=q(D.className,Z());return w&&I?i.cloneElement(I,{className:W}):I},ne=h;return!ne&&y.indexOf("contextMenu")!==-1&&(ne=["click"]),i.createElement(Jr,L(L({builtinPlacements:p},v),{},{prefixCls:a,ref:k,popupClassName:q(b,N({},"".concat(a,"-show-arrow"),r)),popupStyle:x,action:y,showAction:d,hideAction:ne||[],popupPlacement:g,popupAlign:l,popupTransitionName:s,popupAnimation:f,popupVisible:w,stretch:X()?"minWidth":"",popup:B(),onPopupVisibleChange:F,onPopupClick:M,getPopupContainer:m}),le())}const Ka=i.forwardRef(La);var Ba={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},Fa=function(n,t){return i.createElement(Ur,L(L({},n),{},{ref:t,icon:Ba}))},Va=i.forwardRef(Fa);const ut=i.createContext(null);var _o=i.forwardRef(function(e,n){var t=e.prefixCls,r=e.className,o=e.style,a=e.id,s=e.active,f=e.tabKey,l=e.children;return i.createElement("div",{id:a&&"".concat(a,"-panel-").concat(f),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":a&&"".concat(a,"-tab-").concat(f),"aria-hidden":!s,style:o,className:q(t,s&&"".concat(t,"-active"),r),ref:n},l)}),Ua=["key","forceRender","style","className"];function Wa(e){var n=e.id,t=e.activeKey,r=e.animated,o=e.tabPosition,a=e.destroyInactiveTabPane,s=i.useContext(ut),f=s.prefixCls,l=s.tabs,c=r.tabPane,g="".concat(f,"-tabpane");return i.createElement("div",{className:q("".concat(f,"-content-holder"))},i.createElement("div",{className:q("".concat(f,"-content"),"".concat(f,"-content-").concat(o),N({},"".concat(f,"-content-animated"),c))},l.map(function(u){var p=u.key,m=u.forceRender,d=u.style,h=u.className,b=fe(u,Ua),x=p===t;return i.createElement(Mt,j({key:p,visible:x,forceRender:m,removeOnLeave:!!a,leavedClassName:"".concat(g,"-hidden")},r.tabPaneMotion),function(C,_){var y=C.style,S=C.className;return i.createElement(_o,j({},b,{prefixCls:g,id:n,tabKey:p,animated:c,active:x,style:L(L({},d),y),className:q(h,S),ref:_}))})})))}var sr={width:0,height:0,left:0,top:0};function Ga(e,n,t){return i.useMemo(function(){for(var r,o=new Map,a=n.get((r=e[0])===null||r===void 0?void 0:r.key)||sr,s=a.left+a.width,f=0;f<e.length;f+=1){var l=e[f].key,c=n.get(l);if(!c){var g;c=n.get((g=e[f-1])===null||g===void 0?void 0:g.key)||sr}var u=o.get(l)||L({},c);u.right=s-u.left-u.width,o.set(l,u)}return o},[e.map(function(r){return r.key}).join("_"),n,t])}function fr(e,n){var t=i.useRef(e),r=i.useState({}),o=A(r,2),a=o[1];function s(f){var l=typeof f=="function"?f(t.current):f;l!==t.current&&n(l,t.current),t.current=l,a({})}return[t.current,s]}var Ha=.1,lr=.01,Jn=20,cr=Math.pow(.995,Jn);function qa(e,n){var t=i.useState(),r=A(t,2),o=r[0],a=r[1],s=i.useState(0),f=A(s,2),l=f[0],c=f[1],g=i.useState(0),u=A(g,2),p=u[0],m=u[1],d=i.useState(),h=A(d,2),b=h[0],x=h[1],C=i.useRef();function _(T){var $=T.touches[0],w=$.screenX,k=$.screenY;a({x:w,y:k}),window.clearInterval(C.current)}function y(T){if(o){T.preventDefault();var $=T.touches[0],w=$.screenX,k=$.screenY;a({x:w,y:k});var O=w-o.x,M=k-o.y;n(O,M);var F=Date.now();c(F),m(F-l),x({x:O,y:M})}}function S(){if(o&&(a(null),x(null),b)){var T=b.x/p,$=b.y/p,w=Math.abs(T),k=Math.abs($);if(Math.max(w,k)<Ha)return;var O=T,M=$;C.current=window.setInterval(function(){if(Math.abs(O)<lr&&Math.abs(M)<lr){window.clearInterval(C.current);return}O*=cr,M*=cr,n(O*Jn,M*Jn)},Jn)}}var v=i.useRef();function R(T){var $=T.deltaX,w=T.deltaY,k=0,O=Math.abs($),M=Math.abs(w);O===M?k=v.current==="x"?$:w:O>M?(k=$,v.current="x"):(k=w,v.current="y"),n(-k,-k)&&T.preventDefault()}var E=i.useRef(null);E.current={onTouchStart:_,onTouchMove:y,onTouchEnd:S,onWheel:R},i.useEffect(function(){function T(O){E.current.onTouchStart(O)}function $(O){E.current.onTouchMove(O)}function w(O){E.current.onTouchEnd(O)}function k(O){E.current.onWheel(O)}return document.addEventListener("touchmove",$,{passive:!1}),document.addEventListener("touchend",w,{passive:!1}),e.current.addEventListener("touchstart",T,{passive:!1}),e.current.addEventListener("wheel",k),function(){document.removeEventListener("touchmove",$),document.removeEventListener("touchend",w)}},[])}function wo(e){var n=i.useState(0),t=A(n,2),r=t[0],o=t[1],a=i.useRef(0),s=i.useRef();return s.current=e,ci(function(){var f;(f=s.current)===null||f===void 0||f.call(s)},[r]),function(){a.current===r&&(a.current+=1,o(a.current))}}function Ya(e){var n=i.useRef([]),t=i.useState({}),r=A(t,2),o=r[1],a=i.useRef(typeof e=="function"?e():e),s=wo(function(){var l=a.current;n.current.forEach(function(c){l=c(l)}),n.current=[],a.current=l,o({})});function f(l){n.current.push(l),s()}return[a.current,f]}var ur={width:0,height:0,left:0,top:0,right:0};function Xa(e,n,t,r,o,a,s){var f=s.tabs,l=s.tabPosition,c=s.rtl,g,u,p;return["top","bottom"].includes(l)?(g="width",u=c?"right":"left",p=Math.abs(t)):(g="height",u="top",p=-t),i.useMemo(function(){if(!f.length)return[0,0];for(var m=f.length,d=m,h=0;h<m;h+=1){var b=e.get(f[h].key)||ur;if(b[u]+b[g]>p+n){d=h-1;break}}for(var x=0,C=m-1;C>=0;C-=1){var _=e.get(f[C].key)||ur;if(_[u]<p){x=C+1;break}}return[x,d]},[e,n,r,o,a,p,l,f.map(function(m){return m.key}).join("_"),c])}function gr(e){var n;return e instanceof Map?(n={},e.forEach(function(t,r){n[r]=t})):n=e,JSON.stringify(n)}var Za="TABS_DQ";function yo(e){return String(e).replace(/"/g,Za)}function Ja(e,n){var t=e.prefixCls,r=e.editable,o=e.locale,a=e.style;return!r||r.showAdd===!1?null:i.createElement("button",{ref:n,type:"button",className:"".concat(t,"-nav-add"),style:a,"aria-label":(o==null?void 0:o.addAriaLabel)||"Add tab",onClick:function(f){r.onEdit("add",{event:f})}},r.addIcon||"+")}const Co=i.forwardRef(Ja);var pr=i.forwardRef(function(e,n){var t=e.position,r=e.prefixCls,o=e.extra;if(!o)return null;var a,s={};return $n(o)==="object"&&!i.isValidElement(o)?s=o:s.right=o,t==="right"&&(a=s.right),t==="left"&&(a=s.left),a?i.createElement("div",{className:"".concat(r,"-extra-content"),ref:n},a):null});function Qa(e,n){var t=e.prefixCls,r=e.id,o=e.tabs,a=e.locale,s=e.mobile,f=e.moreIcon,l=f===void 0?"More":f,c=e.moreTransitionName,g=e.style,u=e.className,p=e.editable,m=e.tabBarGutter,d=e.rtl,h=e.removeAriaLabel,b=e.onTabClick,x=e.getPopupContainer,C=e.popupClassName,_=i.useState(!1),y=A(_,2),S=y[0],v=y[1],R=i.useState(null),E=A(R,2),T=E[0],$=E[1],w="".concat(r,"-more-popup"),k="".concat(t,"-dropdown"),O=T!==null?"".concat(w,"-").concat(T):null,M=a==null?void 0:a.dropdownAriaLabel;function F(P,I){P.preventDefault(),P.stopPropagation(),p.onEdit("remove",{key:I,event:P})}var V=i.createElement(Vn,{onClick:function(I){var D=I.key,W=I.domEvent;b(D,W),v(!1)},prefixCls:"".concat(k,"-menu"),id:w,tabIndex:-1,role:"listbox","aria-activedescendant":O,selectedKeys:[T],"aria-label":M!==void 0?M:"expanded dropdown"},o.map(function(P){var I=p&&P.closable!==!1&&!P.disabled;return i.createElement(ct,{key:P.key,id:"".concat(w,"-").concat(P.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(P.key),disabled:P.disabled},i.createElement("span",null,P.label),I&&i.createElement("button",{type:"button","aria-label":h||"remove",tabIndex:0,className:"".concat(k,"-menu-item-remove"),onClick:function(W){W.stopPropagation(),F(W,P.key)}},P.closeIcon||p.removeIcon||"×"))}));function B(P){for(var I=o.filter(function(ie){return!ie.disabled}),D=I.findIndex(function(ie){return ie.key===T})||0,W=I.length,de=0;de<W;de+=1){D=(D+P+W)%W;var ve=I[D];if(!ve.disabled){$(ve.key);return}}}function X(P){var I=P.which;if(!S){[ue.DOWN,ue.SPACE,ue.ENTER].includes(I)&&(v(!0),P.preventDefault());return}switch(I){case ue.UP:B(-1),P.preventDefault();break;case ue.DOWN:B(1),P.preventDefault();break;case ue.ESC:v(!1);break;case ue.SPACE:case ue.ENTER:T!==null&&b(T,P);break}}i.useEffect(function(){var P=document.getElementById(O);P&&P.scrollIntoView&&P.scrollIntoView(!1)},[T]),i.useEffect(function(){S||$(null)},[S]);var Z=N({},d?"marginRight":"marginLeft",m);o.length||(Z.visibility="hidden",Z.order=1);var le=q(N({},"".concat(k,"-rtl"),d)),ne=s?null:i.createElement(Ka,{prefixCls:k,overlay:V,trigger:["hover"],visible:o.length?S:!1,transitionName:c,onVisibleChange:v,overlayClassName:q(le,C),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:x},i.createElement("button",{type:"button",className:"".concat(t,"-nav-more"),style:Z,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":w,id:"".concat(r,"-more"),"aria-expanded":S,onKeyDown:X},l));return i.createElement("div",{className:q("".concat(t,"-nav-operations"),u),style:g,ref:n},ne,i.createElement(Co,{prefixCls:t,locale:a,editable:p}))}const es=i.memo(i.forwardRef(Qa),function(e,n){return n.tabMoving});function ns(e){var n,t=e.prefixCls,r=e.id,o=e.active,a=e.tab,s=a.key,f=a.label,l=a.disabled,c=a.closeIcon,g=e.closable,u=e.renderWrapper,p=e.removeAriaLabel,m=e.editable,d=e.onClick,h=e.onFocus,b=e.style,x="".concat(t,"-tab"),C=m&&g!==!1&&!l;function _(v){l||d(v)}function y(v){v.preventDefault(),v.stopPropagation(),m.onEdit("remove",{key:s,event:v})}var S=i.createElement("div",{key:s,"data-node-key":yo(s),className:q(x,(n={},N(n,"".concat(x,"-with-remove"),C),N(n,"".concat(x,"-active"),o),N(n,"".concat(x,"-disabled"),l),n)),style:b,onClick:_},i.createElement("div",{role:"tab","aria-selected":o,id:r&&"".concat(r,"-tab-").concat(s),className:"".concat(x,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(s),"aria-disabled":l,tabIndex:l?null:0,onClick:function(R){R.stopPropagation(),_(R)},onKeyDown:function(R){[ue.SPACE,ue.ENTER].includes(R.which)&&(R.preventDefault(),_(R))},onFocus:h},f),C&&i.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(x,"-remove"),onClick:function(R){R.stopPropagation(),y(R)}},c||m.removeIcon||"×"));return u?u(S):S}var wn=function(n){var t=n.current||{},r=t.offsetWidth,o=r===void 0?0:r,a=t.offsetHeight,s=a===void 0?0:a;return[o,s]},qn=function(n,t){return n[t?0:1]};function ts(e,n){var t,r=i.useContext(ut),o=r.prefixCls,a=r.tabs,s=e.className,f=e.style,l=e.id,c=e.animated,g=e.activeKey,u=e.rtl,p=e.extra,m=e.editable,d=e.locale,h=e.tabPosition,b=e.tabBarGutter,x=e.children,C=e.onTabClick,_=e.onTabScroll,y=i.useRef(),S=i.useRef(),v=i.useRef(),R=i.useRef(),E=i.useRef(),T=i.useRef(),$=i.useRef(),w=h==="top"||h==="bottom",k=fr(0,function(Y,U){w&&_&&_({direction:Y>U?"left":"right"})}),O=A(k,2),M=O[0],F=O[1],V=fr(0,function(Y,U){!w&&_&&_({direction:Y>U?"top":"bottom"})}),B=A(V,2),X=B[0],Z=B[1],le=i.useState([0,0]),ne=A(le,2),P=ne[0],I=ne[1],D=i.useState([0,0]),W=A(D,2),de=W[0],ve=W[1],ie=i.useState([0,0]),me=A(ie,2),ae=me[0],G=me[1],Ie=i.useState([0,0]),Se=A(Ie,2),$e=Se[0],Te=Se[1],K=Ya(new Map),Ee=A(K,2),be=Ee[0],nn=Ee[1],De=Ga(a,be,de[0]),we=qn(P,w),Le=qn(de,w),ke=qn(ae,w),Fe=qn($e,w),Ve=we<Le+ke,Q=Ve?we-Fe:we-ke,Ue="".concat(o,"-nav-operations-hidden"),ye=0,ce=0;w&&u?(ye=0,ce=Math.max(0,Le-Q)):(ye=Math.min(0,Q-Le),ce=0);function Ne(Y){return Y<ye?ye:Y>ce?ce:Y}var ge=i.useRef(),We=i.useState(),Pe=A(We,2),he=Pe[0],xe=Pe[1];function an(){xe(Date.now())}function sn(){window.clearTimeout(ge.current)}qa(R,function(Y,U){function pe(_e,qe){_e(function(Ae){var un=Ne(Ae+qe);return un})}return Ve?(w?pe(F,Y):pe(Z,U),sn(),an(),!0):!1}),i.useEffect(function(){return sn(),he&&(ge.current=window.setTimeout(function(){xe(0)},100)),sn},[he]);var Ye=Xa(De,Q,w?M:X,Le,ke,Fe,L(L({},e),{},{tabs:a})),fn=A(Ye,2),ln=fn[0],ze=fn[1],tn=Br(function(){var Y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:g,U=De.get(Y)||{width:0,height:0,left:0,right:0,top:0};if(w){var pe=M;u?U.right<M?pe=U.right:U.right+U.width>M+Q&&(pe=U.right+U.width-Q):U.left<-M?pe=-U.left:U.left+U.width>-M+Q&&(pe=-(U.left+U.width-Q)),Z(0),F(Ne(pe))}else{var _e=X;U.top<-X?_e=-U.top:U.top+U.height>-X+Q&&(_e=-(U.top+U.height-Q)),F(0),Z(Ne(_e))}}),Ke={};h==="top"||h==="bottom"?Ke[u?"marginRight":"marginLeft"]=b:Ke.marginTop=b;var cn=a.map(function(Y,U){var pe=Y.key;return i.createElement(ns,{id:l,prefixCls:o,key:pe,tab:Y,style:U===0?void 0:Ke,closable:Y.closable,editable:m,active:pe===g,renderWrapper:x,removeAriaLabel:d==null?void 0:d.removeAriaLabel,onClick:function(qe){C(pe,qe)},onFocus:function(){tn(pe),an(),R.current&&(u||(R.current.scrollLeft=0),R.current.scrollTop=0)}})}),Xe=function(){return nn(function(){var U=new Map;return a.forEach(function(pe){var _e,qe=pe.key,Ae=(_e=E.current)===null||_e===void 0?void 0:_e.querySelector('[data-node-key="'.concat(yo(qe),'"]'));Ae&&U.set(qe,{width:Ae.offsetWidth,height:Ae.offsetHeight,left:Ae.offsetLeft,top:Ae.offsetTop})}),U})};i.useEffect(function(){Xe()},[a.map(function(Y){return Y.key}).join("_")]);var Ce=wo(function(){var Y=wn(y),U=wn(S),pe=wn(v);I([Y[0]-U[0]-pe[0],Y[1]-U[1]-pe[1]]);var _e=wn($);G(_e);var qe=wn(T);Te(qe);var Ae=wn(E);ve([Ae[0]-_e[0],Ae[1]-_e[1]]),Xe()}),z=a.slice(0,ln),H=a.slice(ze+1),re=[].concat(Qe(z),Qe(H)),Re=i.useState(),Ge=A(Re,2),xt=Ge[0],Un=Ge[1],Me=De.get(g),Wn=i.useRef();function mn(){Ze.cancel(Wn.current)}i.useEffect(function(){var Y={};return Me&&(w?(u?Y.right=Me.right:Y.left=Me.left,Y.width=Me.width):(Y.top=Me.top,Y.height=Me.height)),mn(),Wn.current=Ze(function(){Un(Y)}),mn},[Me,w,u]),i.useEffect(function(){tn()},[g,ye,ce,gr(Me),gr(De),w]),i.useEffect(function(){Ce()},[u]);var He=!!re.length,rn="".concat(o,"-nav-wrap"),vn,Rn,On,Gn;return w?u?(Rn=M>0,vn=M!==ce):(vn=M<0,Rn=M!==ye):(On=X<0,Gn=X!==ye),i.createElement(et,{onResize:Ce},i.createElement("div",{ref:Hr(n,y),role:"tablist",className:q("".concat(o,"-nav"),s),style:f,onKeyDown:function(){an()}},i.createElement(pr,{ref:S,position:"left",extra:p,prefixCls:o}),i.createElement("div",{className:q(rn,(t={},N(t,"".concat(rn,"-ping-left"),vn),N(t,"".concat(rn,"-ping-right"),Rn),N(t,"".concat(rn,"-ping-top"),On),N(t,"".concat(rn,"-ping-bottom"),Gn),t)),ref:R},i.createElement(et,{onResize:Ce},i.createElement("div",{ref:E,className:"".concat(o,"-nav-list"),style:{transform:"translate(".concat(M,"px, ").concat(X,"px)"),transition:he?"none":void 0}},cn,i.createElement(Co,{ref:$,prefixCls:o,locale:d,editable:m,style:L(L({},cn.length===0?void 0:Ke),{},{visibility:He?"hidden":null})}),i.createElement("div",{className:q("".concat(o,"-ink-bar"),N({},"".concat(o,"-ink-bar-animated"),c.inkBar)),style:xt})))),i.createElement(es,j({},e,{removeAriaLabel:d==null?void 0:d.removeAriaLabel,ref:T,prefixCls:o,tabs:re,className:!He&&Ue,tabMoving:!!he})),i.createElement(pr,{ref:v,position:"right",extra:p,prefixCls:o})))}const dr=i.forwardRef(ts);var rs=["renderTabBar"],os=["label","key"];function is(e){var n=e.renderTabBar,t=fe(e,rs),r=i.useContext(ut),o=r.tabs;if(n){var a=L(L({},t),{},{panes:o.map(function(s){var f=s.label,l=s.key,c=fe(s,os);return i.createElement(_o,j({tab:f,key:l,tabKey:l},c))})});return n(a,dr)}return i.createElement(dr,t)}function as(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},n;return e===!1?n={inkBar:!1,tabPane:!1}:e===!0?n={inkBar:!0,tabPane:!1}:n=L({inkBar:!0},$n(e)==="object"?e:{}),n.tabPaneMotion&&n.tabPane===void 0&&(n.tabPane=!0),!n.tabPaneMotion&&n.tabPane&&(n.tabPane=!1),n}var ss=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],mr=0;function fs(e,n){var t,r=e.id,o=e.prefixCls,a=o===void 0?"rc-tabs":o,s=e.className,f=e.items,l=e.direction,c=e.activeKey,g=e.defaultActiveKey,u=e.editable,p=e.animated,m=e.tabPosition,d=m===void 0?"top":m,h=e.tabBarGutter,b=e.tabBarStyle,x=e.tabBarExtraContent,C=e.locale,_=e.moreIcon,y=e.moreTransitionName,S=e.destroyInactiveTabPane,v=e.renderTabBar,R=e.onChange,E=e.onTabClick,T=e.onTabScroll,$=e.getPopupContainer,w=e.popupClassName,k=fe(e,ss),O=i.useMemo(function(){return(f||[]).filter(function(K){return K&&$n(K)==="object"&&"key"in K})},[f]),M=l==="rtl",F=as(p),V=i.useState(!1),B=A(V,2),X=B[0],Z=B[1];i.useEffect(function(){Z($i())},[]);var le=Sn(function(){var K;return(K=O[0])===null||K===void 0?void 0:K.key},{value:c,defaultValue:g}),ne=A(le,2),P=ne[0],I=ne[1],D=i.useState(function(){return O.findIndex(function(K){return K.key===P})}),W=A(D,2),de=W[0],ve=W[1];i.useEffect(function(){var K=O.findIndex(function(be){return be.key===P});if(K===-1){var Ee;K=Math.max(0,Math.min(de,O.length-1)),I((Ee=O[K])===null||Ee===void 0?void 0:Ee.key)}ve(K)},[O.map(function(K){return K.key}).join("_"),P,de]);var ie=Sn(null,{value:r}),me=A(ie,2),ae=me[0],G=me[1];i.useEffect(function(){r||(G("rc-tabs-".concat(mr)),mr+=1)},[]);function Ie(K,Ee){E==null||E(K,Ee);var be=K!==P;I(K),be&&(R==null||R(K))}var Se={id:ae,activeKey:P,animated:F,tabPosition:d,rtl:M,mobile:X},$e,Te=L(L({},Se),{},{editable:u,locale:C,moreIcon:_,moreTransitionName:y,tabBarGutter:h,onTabClick:Ie,onTabScroll:T,extra:x,style:b,panes:null,getPopupContainer:$,popupClassName:w});return i.createElement(ut.Provider,{value:{tabs:O,prefixCls:a}},i.createElement("div",j({ref:n,id:r,className:q(a,"".concat(a,"-").concat(d),(t={},N(t,"".concat(a,"-mobile"),X),N(t,"".concat(a,"-editable"),u),N(t,"".concat(a,"-rtl"),M),t),s)},k),$e,i.createElement(is,j({},Te,{renderTabBar:v})),i.createElement(Wa,j({destroyInactiveTabPane:S},Se,{animated:F}))))}var ls=i.forwardRef(fs),cs={motionAppear:!1,motionEnter:!0,motionLeave:!0};function us(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},t;return n===!1?t={inkBar:!1,tabPane:!1}:n===!0?t={inkBar:!0,tabPane:!0}:t=j({inkBar:!0},$n(n)==="object"?n:{}),t.tabPane&&(t.tabPaneMotion=j(j({},cs),{motionName:ui(e,"switch")})),t}var gs=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function ps(e){return e.filter(function(n){return n})}function ds(e,n){if(e)return e;var t=Yr(n).map(function(r){if(i.isValidElement(r)){var o=r.key,a=r.props,s=a||{},f=s.tab,l=gs(s,["tab"]),c=j(j({key:String(o)},l),{label:f});return c}return null});return ps(t)}var ms=function(){return null},vs=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function bs(e){var n=e.type,t=e.className,r=e.size,o=e.onEdit,a=e.hideAdd,s=e.centered,f=e.addIcon,l=e.children,c=e.items,g=e.animated,u=vs(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),p=u.prefixCls,m=u.moreIcon,d=m===void 0?i.createElement(Zi,null):m,h=i.useContext(st),b=h.getPrefixCls,x=h.direction,C=h.getPopupContainer,_=b("tabs",p),y;n==="editable-card"&&(y={onEdit:function(T,$){var w=$.key,k=$.event;o==null||o(T==="add"?k:w,T)},removeIcon:i.createElement(pi,null),addIcon:f||i.createElement(Va,null),showAdd:a!==!0});var S=b(),v=ds(c,l),R=us(_,g);return i.createElement(gi.Consumer,null,function(E){var T=r!==void 0?r:E;return i.createElement(ls,j({direction:x,getPopupContainer:C,moreTransitionName:"".concat(S,"-slide-up")},u,{items:v,className:q(N(N(N(N({},"".concat(_,"-").concat(T),T),"".concat(_,"-card"),["card","editable-card"].includes(n)),"".concat(_,"-editable-card"),n==="editable-card"),"".concat(_,"-centered"),s),t),editable:y,moreIcon:d,prefixCls:_,animated:R}))})}bs.TabPane=ms;function xs(){this.__data__=[],this.size=0}var hs=xs;function _s(e,n){return e===n||e!==e&&n!==n}var So=_s,ws=So;function ys(e,n){for(var t=e.length;t--;)if(ws(e[t][0],n))return t;return-1}var gt=ys,Cs=gt,Ss=Array.prototype,$s=Ss.splice;function Es(e){var n=this.__data__,t=Cs(n,e);if(t<0)return!1;var r=n.length-1;return t==r?n.pop():$s.call(n,t,1),--this.size,!0}var Ps=Es,Is=gt;function Ts(e){var n=this.__data__,t=Is(n,e);return t<0?void 0:n[t][1]}var Ns=Ts,Rs=gt;function Os(e){return Rs(this.__data__,e)>-1}var ks=Os,Ms=gt;function As(e,n){var t=this.__data__,r=Ms(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this}var js=As,Ds=hs,zs=Ps,Ls=Ns,Ks=ks,Bs=js;function En(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}En.prototype.clear=Ds;En.prototype.delete=zs;En.prototype.get=Ls;En.prototype.has=Ks;En.prototype.set=Bs;var pt=En,Fs=pt;function Vs(){this.__data__=new Fs,this.size=0}var Us=Vs;function Ws(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}var Gs=Ws;function Hs(e){return this.__data__.get(e)}var qs=Hs;function Ys(e){return this.__data__.has(e)}var Xs=Ys,Zs=ft,Js=Kn,Qs="[object AsyncFunction]",ef="[object Function]",nf="[object GeneratorFunction]",tf="[object Proxy]";function rf(e){if(!Js(e))return!1;var n=Zs(e);return n==ef||n==nf||n==Qs||n==tf}var $o=rf,of=en,af=of["__core-js_shared__"],sf=af,_t=sf,vr=function(){var e=/[^.]+$/.exec(_t&&_t.keys&&_t.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function ff(e){return!!vr&&vr in e}var lf=ff,cf=Function.prototype,uf=cf.toString;function gf(e){if(e!=null){try{return uf.call(e)}catch{}try{return e+""}catch{}}return""}var Eo=gf,pf=$o,df=lf,mf=Kn,vf=Eo,bf=/[\\^$.*+?()[\]{}|]/g,xf=/^\[object .+?Constructor\]$/,hf=Function.prototype,_f=Object.prototype,wf=hf.toString,yf=_f.hasOwnProperty,Cf=RegExp("^"+wf.call(yf).replace(bf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Sf(e){if(!mf(e)||df(e))return!1;var n=pf(e)?Cf:xf;return n.test(vf(e))}var $f=Sf;function Ef(e,n){return e==null?void 0:e[n]}var Pf=Ef,If=$f,Tf=Pf;function Nf(e,n){var t=Tf(e,n);return If(t)?t:void 0}var dn=Nf,Rf=dn,Of=en,kf=Rf(Of,"Map"),Ft=kf,Mf=dn,Af=Mf(Object,"create"),dt=Af,br=dt;function jf(){this.__data__=br?br(null):{},this.size=0}var Df=jf;function zf(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var Lf=zf,Kf=dt,Bf="__lodash_hash_undefined__",Ff=Object.prototype,Vf=Ff.hasOwnProperty;function Uf(e){var n=this.__data__;if(Kf){var t=n[e];return t===Bf?void 0:t}return Vf.call(n,e)?n[e]:void 0}var Wf=Uf,Gf=dt,Hf=Object.prototype,qf=Hf.hasOwnProperty;function Yf(e){var n=this.__data__;return Gf?n[e]!==void 0:qf.call(n,e)}var Xf=Yf,Zf=dt,Jf="__lodash_hash_undefined__";function Qf(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=Zf&&n===void 0?Jf:n,this}var el=Qf,nl=Df,tl=Lf,rl=Wf,ol=Xf,il=el;function Pn(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Pn.prototype.clear=nl;Pn.prototype.delete=tl;Pn.prototype.get=rl;Pn.prototype.has=ol;Pn.prototype.set=il;var al=Pn,xr=al,sl=pt,fl=Ft;function ll(){this.size=0,this.__data__={hash:new xr,map:new(fl||sl),string:new xr}}var cl=ll;function ul(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}var gl=ul,pl=gl;function dl(e,n){var t=e.__data__;return pl(n)?t[typeof n=="string"?"string":"hash"]:t.map}var mt=dl,ml=mt;function vl(e){var n=ml(this,e).delete(e);return this.size-=n?1:0,n}var bl=vl,xl=mt;function hl(e){return xl(this,e).get(e)}var _l=hl,wl=mt;function yl(e){return wl(this,e).has(e)}var Cl=yl,Sl=mt;function $l(e,n){var t=Sl(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this}var El=$l,Pl=cl,Il=bl,Tl=_l,Nl=Cl,Rl=El;function In(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}In.prototype.clear=Pl;In.prototype.delete=Il;In.prototype.get=Tl;In.prototype.has=Nl;In.prototype.set=Rl;var Ol=In,kl=pt,Ml=Ft,Al=Ol,jl=200;function Dl(e,n){var t=this.__data__;if(t instanceof kl){var r=t.__data__;if(!Ml||r.length<jl-1)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new Al(r)}return t.set(e,n),this.size=t.size,this}var zl=Dl,Ll=pt,Kl=Us,Bl=Gs,Fl=qs,Vl=Xs,Ul=zl;function Tn(e){var n=this.__data__=new Ll(e);this.size=n.size}Tn.prototype.clear=Kl;Tn.prototype.delete=Bl;Tn.prototype.get=Fl;Tn.prototype.has=Vl;Tn.prototype.set=Ul;var Wl=Tn,Gl=en,Hl=Gl.Uint8Array,ql=Hl;function Yl(e,n){for(var t=-1,r=n.length,o=e.length;++t<r;)e[o+t]=n[t];return e}var Po=Yl,Xl=Po,Zl=At;function Jl(e,n,t){var r=n(e);return Zl(e)?r:Xl(r,t(e))}var Io=Jl;function Ql(e,n){for(var t=-1,r=e==null?0:e.length,o=0,a=[];++t<r;){var s=e[t];n(s,t,e)&&(a[o++]=s)}return a}var ec=Ql;function nc(){return[]}var To=nc,tc=ec,rc=To,oc=Object.prototype,ic=oc.propertyIsEnumerable,hr=Object.getOwnPropertySymbols,ac=hr?function(e){return e==null?[]:(e=Object(e),tc(hr(e),function(n){return ic.call(e,n)}))}:rc,Vt=ac;function sc(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}var fc=sc,lc=ft,cc=Bn,uc="[object Arguments]";function gc(e){return cc(e)&&lc(e)==uc}var pc=gc,_r=pc,dc=Bn,No=Object.prototype,mc=No.hasOwnProperty,vc=No.propertyIsEnumerable,bc=_r(function(){return arguments}())?_r:function(e){return dc(e)&&mc.call(e,"callee")&&!vc.call(e,"callee")},xc=bc,rt={exports:{}};function hc(){return!1}var _c=hc;rt.exports;(function(e,n){var t=en,r=_c,o=n&&!n.nodeType&&n,a=o&&!0&&e&&!e.nodeType&&e,s=a&&a.exports===o,f=s?t.Buffer:void 0,l=f?f.isBuffer:void 0,c=l||r;e.exports=c})(rt,rt.exports);var Ro=rt.exports,wc=9007199254740991,yc=/^(?:0|[1-9]\d*)$/;function Cc(e,n){var t=typeof e;return n=n??wc,!!n&&(t=="number"||t!="symbol"&&yc.test(e))&&e>-1&&e%1==0&&e<n}var Sc=Cc,$c=9007199254740991;function Ec(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=$c}var Oo=Ec,Pc=ft,Ic=Oo,Tc=Bn,Nc="[object Arguments]",Rc="[object Array]",Oc="[object Boolean]",kc="[object Date]",Mc="[object Error]",Ac="[object Function]",jc="[object Map]",Dc="[object Number]",zc="[object Object]",Lc="[object RegExp]",Kc="[object Set]",Bc="[object String]",Fc="[object WeakMap]",Vc="[object ArrayBuffer]",Uc="[object DataView]",Wc="[object Float32Array]",Gc="[object Float64Array]",Hc="[object Int8Array]",qc="[object Int16Array]",Yc="[object Int32Array]",Xc="[object Uint8Array]",Zc="[object Uint8ClampedArray]",Jc="[object Uint16Array]",Qc="[object Uint32Array]",te={};te[Wc]=te[Gc]=te[Hc]=te[qc]=te[Yc]=te[Xc]=te[Zc]=te[Jc]=te[Qc]=!0;te[Nc]=te[Rc]=te[Vc]=te[Oc]=te[Uc]=te[kc]=te[Mc]=te[Ac]=te[jc]=te[Dc]=te[zc]=te[Lc]=te[Kc]=te[Bc]=te[Fc]=!1;function eu(e){return Tc(e)&&Ic(e.length)&&!!te[Pc(e)]}var nu=eu;function tu(e){return function(n){return e(n)}}var Ut=tu,ot={exports:{}};ot.exports;(function(e,n){var t=di,r=n&&!n.nodeType&&n,o=r&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===r,s=a&&t.process,f=function(){try{var l=o&&o.require&&o.require("util").types;return l||s&&s.binding&&s.binding("util")}catch{}}();e.exports=f})(ot,ot.exports);var Wt=ot.exports,ru=nu,ou=Ut,wr=Wt,yr=wr&&wr.isTypedArray,iu=yr?ou(yr):ru,au=iu,su=fc,fu=xc,lu=At,cu=Ro,uu=Sc,gu=au,pu=Object.prototype,du=pu.hasOwnProperty;function mu(e,n){var t=lu(e),r=!t&&fu(e),o=!t&&!r&&cu(e),a=!t&&!r&&!o&&gu(e),s=t||r||o||a,f=s?su(e.length,String):[],l=f.length;for(var c in e)(n||du.call(e,c))&&!(s&&(c=="length"||o&&(c=="offset"||c=="parent")||a&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||uu(c,l)))&&f.push(c);return f}var ko=mu,vu=Object.prototype;function bu(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||vu;return e===t}var Gt=bu,xu=Qr,hu=xu(Object.keys,Object),_u=hu,wu=Gt,yu=_u,Cu=Object.prototype,Su=Cu.hasOwnProperty;function $u(e){if(!wu(e))return yu(e);var n=[];for(var t in Object(e))Su.call(e,t)&&t!="constructor"&&n.push(t);return n}var Eu=$u,Pu=$o,Iu=Oo;function Tu(e){return e!=null&&Iu(e.length)&&!Pu(e)}var Mo=Tu,Nu=ko,Ru=Eu,Ou=Mo;function ku(e){return Ou(e)?Nu(e):Ru(e)}var Ht=ku,Mu=Io,Au=Vt,ju=Ht;function Du(e){return Mu(e,ju,Au)}var zu=Du,Lu=dn,Ku=en,Bu=Lu(Ku,"DataView"),Fu=Bu,Vu=dn,Uu=en,Wu=Vu(Uu,"Promise"),Gu=Wu,Hu=dn,qu=en,Yu=Hu(qu,"Set"),Xu=Yu,Zu=dn,Ju=en,Qu=Zu(Ju,"WeakMap"),eg=Qu,Et=Fu,Pt=Ft,It=Gu,Tt=Xu,Nt=eg,Ao=ft,Nn=Eo,Cr="[object Map]",ng="[object Object]",Sr="[object Promise]",$r="[object Set]",Er="[object WeakMap]",Pr="[object DataView]",tg=Nn(Et),rg=Nn(Pt),og=Nn(It),ig=Nn(Tt),ag=Nn(Nt),pn=Ao;(Et&&pn(new Et(new ArrayBuffer(1)))!=Pr||Pt&&pn(new Pt)!=Cr||It&&pn(It.resolve())!=Sr||Tt&&pn(new Tt)!=$r||Nt&&pn(new Nt)!=Er)&&(pn=function(e){var n=Ao(e),t=n==ng?e.constructor:void 0,r=t?Nn(t):"";if(r)switch(r){case tg:return Pr;case rg:return Cr;case og:return Sr;case ig:return $r;case ag:return Er}return n});var qt=pn;function sg(e,n){for(var t=-1,r=e==null?0:e.length;++t<r&&n(e[t],t,e)!==!1;);return e}var fg=sg,lg=dn,cg=function(){try{var e=lg(Object,"defineProperty");return e({},"",{}),e}catch{}}(),ug=cg,Ir=ug;function gg(e,n,t){n=="__proto__"&&Ir?Ir(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}var jo=gg,pg=jo,dg=So,mg=Object.prototype,vg=mg.hasOwnProperty;function bg(e,n,t){var r=e[n];(!(vg.call(e,n)&&dg(r,t))||t===void 0&&!(n in e))&&pg(e,n,t)}var Do=bg,xg=Do,hg=jo;function _g(e,n,t,r){var o=!t;t||(t={});for(var a=-1,s=n.length;++a<s;){var f=n[a],l=r?r(t[f],e[f],f,t,e):void 0;l===void 0&&(l=e[f]),o?hg(t,f,l):xg(t,f,l)}return t}var vt=_g,wg=vt,yg=Ht;function Cg(e,n){return e&&wg(n,yg(n),e)}var Sg=Cg;function $g(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var Eg=$g,Pg=Kn,Ig=Gt,Tg=Eg,Ng=Object.prototype,Rg=Ng.hasOwnProperty;function Og(e){if(!Pg(e))return Tg(e);var n=Ig(e),t=[];for(var r in e)r=="constructor"&&(n||!Rg.call(e,r))||t.push(r);return t}var kg=Og,Mg=ko,Ag=kg,jg=Mo;function Dg(e){return jg(e)?Mg(e,!0):Ag(e)}var Yt=Dg,zg=vt,Lg=Yt;function Kg(e,n){return e&&zg(n,Lg(n),e)}var Bg=Kg,it={exports:{}};it.exports;(function(e,n){var t=en,r=n&&!n.nodeType&&n,o=r&&!0&&e&&!e.nodeType&&e,a=o&&o.exports===r,s=a?t.Buffer:void 0,f=s?s.allocUnsafe:void 0;function l(c,g){if(g)return c.slice();var u=c.length,p=f?f(u):new c.constructor(u);return c.copy(p),p}e.exports=l})(it,it.exports);var Fg=it.exports;function Vg(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n}var Ug=Vg,Wg=vt,Gg=Vt;function Hg(e,n){return Wg(e,Gg(e),n)}var qg=Hg,Yg=Po,Xg=eo,Zg=Vt,Jg=To,Qg=Object.getOwnPropertySymbols,ep=Qg?function(e){for(var n=[];e;)Yg(n,Zg(e)),e=Xg(e);return n}:Jg,zo=ep,np=vt,tp=zo;function rp(e,n){return np(e,tp(e),n)}var op=rp,ip=Io,ap=zo,sp=Yt;function fp(e){return ip(e,sp,ap)}var lp=fp,cp=Object.prototype,up=cp.hasOwnProperty;function gp(e){var n=e.length,t=new e.constructor(n);return n&&typeof e[0]=="string"&&up.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var pp=gp,Tr=ql;function dp(e){var n=new e.constructor(e.byteLength);return new Tr(n).set(new Tr(e)),n}var Xt=dp,mp=Xt;function vp(e,n){var t=n?mp(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var bp=vp,xp=/\w*$/;function hp(e){var n=new e.constructor(e.source,xp.exec(e));return n.lastIndex=e.lastIndex,n}var _p=hp,Nr=mi,Rr=Nr?Nr.prototype:void 0,Or=Rr?Rr.valueOf:void 0;function wp(e){return Or?Object(Or.call(e)):{}}var yp=wp,Cp=Xt;function Sp(e,n){var t=n?Cp(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var $p=Sp,Ep=Xt,Pp=bp,Ip=_p,Tp=yp,Np=$p,Rp="[object Boolean]",Op="[object Date]",kp="[object Map]",Mp="[object Number]",Ap="[object RegExp]",jp="[object Set]",Dp="[object String]",zp="[object Symbol]",Lp="[object ArrayBuffer]",Kp="[object DataView]",Bp="[object Float32Array]",Fp="[object Float64Array]",Vp="[object Int8Array]",Up="[object Int16Array]",Wp="[object Int32Array]",Gp="[object Uint8Array]",Hp="[object Uint8ClampedArray]",qp="[object Uint16Array]",Yp="[object Uint32Array]";function Xp(e,n,t){var r=e.constructor;switch(n){case Lp:return Ep(e);case Rp:case Op:return new r(+e);case Kp:return Pp(e,t);case Bp:case Fp:case Vp:case Up:case Wp:case Gp:case Hp:case qp:case Yp:return Np(e,t);case kp:return new r;case Mp:case Dp:return new r(e);case Ap:return Ip(e);case jp:return new r;case zp:return Tp(e)}}var Zp=Xp,Jp=Kn,kr=Object.create,Qp=function(){function e(){}return function(n){if(!Jp(n))return{};if(kr)return kr(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}(),ed=Qp,nd=ed,td=eo,rd=Gt;function od(e){return typeof e.constructor=="function"&&!rd(e)?nd(td(e)):{}}var id=od,ad=qt,sd=Bn,fd="[object Map]";function ld(e){return sd(e)&&ad(e)==fd}var cd=ld,ud=cd,gd=Ut,Mr=Wt,Ar=Mr&&Mr.isMap,pd=Ar?gd(Ar):ud,dd=pd,md=qt,vd=Bn,bd="[object Set]";function xd(e){return vd(e)&&md(e)==bd}var hd=xd,_d=hd,wd=Ut,jr=Wt,Dr=jr&&jr.isSet,yd=Dr?wd(Dr):_d,Cd=yd,Sd=Wl,$d=fg,Ed=Do,Pd=Sg,Id=Bg,Td=Fg,Nd=Ug,Rd=qg,Od=op,kd=zu,Md=lp,Ad=qt,jd=pp,Dd=Zp,zd=id,Ld=At,Kd=Ro,Bd=dd,Fd=Kn,Vd=Cd,Ud=Ht,Wd=Yt,Gd=1,Hd=2,qd=4,Lo="[object Arguments]",Yd="[object Array]",Xd="[object Boolean]",Zd="[object Date]",Jd="[object Error]",Ko="[object Function]",Qd="[object GeneratorFunction]",em="[object Map]",nm="[object Number]",Bo="[object Object]",tm="[object RegExp]",rm="[object Set]",om="[object String]",im="[object Symbol]",am="[object WeakMap]",sm="[object ArrayBuffer]",fm="[object DataView]",lm="[object Float32Array]",cm="[object Float64Array]",um="[object Int8Array]",gm="[object Int16Array]",pm="[object Int32Array]",dm="[object Uint8Array]",mm="[object Uint8ClampedArray]",vm="[object Uint16Array]",bm="[object Uint32Array]",ee={};ee[Lo]=ee[Yd]=ee[sm]=ee[fm]=ee[Xd]=ee[Zd]=ee[lm]=ee[cm]=ee[um]=ee[gm]=ee[pm]=ee[em]=ee[nm]=ee[Bo]=ee[tm]=ee[rm]=ee[om]=ee[im]=ee[dm]=ee[mm]=ee[vm]=ee[bm]=!0;ee[Jd]=ee[Ko]=ee[am]=!1;function Qn(e,n,t,r,o,a){var s,f=n&Gd,l=n&Hd,c=n&qd;if(t&&(s=o?t(e,r,o,a):t(e)),s!==void 0)return s;if(!Fd(e))return e;var g=Ld(e);if(g){if(s=jd(e),!f)return Nd(e,s)}else{var u=Ad(e),p=u==Ko||u==Qd;if(Kd(e))return Td(e,f);if(u==Bo||u==Lo||p&&!o){if(s=l||p?{}:zd(e),!f)return l?Od(e,Id(s,e)):Rd(e,Pd(s,e))}else{if(!ee[u])return o?e:{};s=Dd(e,u,f)}}a||(a=new Sd);var m=a.get(e);if(m)return m;a.set(e,s),Vd(e)?e.forEach(function(b){s.add(Qn(b,n,t,b,e,a))}):Bd(e)&&e.forEach(function(b,x){s.set(x,Qn(b,n,t,x,e,a))});var d=c?l?Md:kd:l?Wd:Ud,h=g?void 0:d(e);return $d(h||e,function(b,x){h&&(x=b,b=e[x]),Ed(s,x,Qn(b,n,t,x,e,a))}),s}var xm=Qn,hm=xm,_m=1,wm=4;function ym(e){return hm(e,_m|wm)}var Cm=ym;const zr=Xr(Cm);var Sm=({className:e="",...n})=>Cn.createElement(_i,{className:e,component:Ei,...n}),Vm=Sm,Um=()=>{let[e,n]=i.useState(vi()),{setPaymentPassword:t,userInfo:r,modalOptions:o,showAccountTipModal:a}=Zr();return i.useEffect(()=>{var s;n(!!((s=r==null?void 0:r.security_account)!=null&&s.has_set_payment_password))},[r]),{hasSetPaymentPassword:e,setPaymentPassword:t,showSetPaymentPasswordOrConfirm:s=>{var f,l,c,g;e?s():((f=o.promptSettingConfig)==null?void 0:f.promptPaymentPasswordSettingWhenSign)===2||((l=o.promptSettingConfig)==null?void 0:l.promptPaymentPasswordSettingWhenSign)===3?a({visible:!0,confirm:s}):((c=o.promptSettingConfig)!=null&&c.promptPaymentPasswordSettingWhenSign||bi((g=o.promptSettingConfig)==null?void 0:g.promptPaymentPasswordSettingWhenSign))&&!xi(er.PN_OPEN_SET_PAYMENT_PASSWORD)?(hi(er.PN_OPEN_SET_PAYMENT_PASSWORD,"1"),a({visible:!0,confirm:s})):s()}}},Wm=`.info-sign {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 290px;
  height: 100%;
}
.info-sign .pending-warning-modal {
  top: 100px;
  display: block;
  margin: auto;
}
.info-sign .pending-warning-modal .ant-modal-body {
  padding: 18px;
}
.info-sign .pending-warning-modal .ant-modal-confirm-btns {
  display: none;
}
.info-sign .pending-warning-modal .content {
  margin-top: 26px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: var(--text-color);
}
.info-sign .pending-warning-modal .anticon-exclamation-circle {
  display: none;
}
.info-sign .pending-warning-modal .anticon-close {
  color: var(--secondary-text-color);
}
.info-sign .pending-warning-modal .footer-btns {
  column-gap: 18px;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
.info-sign .pending-warning-modal .footer-btns .ant-btn {
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
}
.info-sign .pending-warning-modal .footer-btns .ant-btn:first-child {
  color: var(--secondary-btn-color);
  background-color: var(--secondary-btn-background-color);
}
.info-sign .pending-warning-modal .footer-btns .ant-btn:hover,
.info-sign .pending-warning-modal .footer-btns .ant-btn:focus,
.info-sign .pending-warning-modal .footer-btns .ant-btn:active {
  color: var(--primary-btn-color);
  background-color: var(--primary-btn-background-color);
}
.info-sign .continue-btn:hover {
  color: var(--secondary-btn-color) !important;
  background-color: var(--secondary-btn-background-color) !important;
}
.info-sign .has-payment-password {
  z-index: 100;
  top: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: var(--set-payment-password-bar-height);
  padding: 0 16px;
  padding-right: 52px;
  background-color: var(--tips-background-color);
  opacity: 1;
}
.info-sign .has-payment-password .has-payment-password-icon {
  width: 18px;
  height: 18px;
  border: 1px solid #f7af5d;
  border-radius: 50%;
  overflow: hidden;
  background-image: var(--icon-warning);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-color: white;
}
.info-sign .has-payment-password .has-payment-password-tip {
  flex: 1;
  margin: 0 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: var(--text-color);
}
@media screen and (max-width: 350px) {
  .info-sign .has-payment-password .has-payment-password-tip {
    letter-spacing: -1px;
  }
}
.info-sign .has-payment-password .has-payment-password-set {
  min-width: 44px;
  height: 22px;
  padding: 0 8px;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  cursor: pointer;
}
.info-sign .has-payment-password .has-payment-password-set:hover {
  opacity: var(--hover-opacity);
}
@media (max-width: 600px) {
  .info-sign .has-payment-password {
    padding-right: 16px;
    margin-top: 15px;
  }
}
.info-sign .ant-tabs {
  width: calc(100% - 36px);
  min-width: 230px;
}
.info-sign .ant-tabs-nav .ant-tabs-tab {
  padding-bottom: 4px;
  color: var(--secondary-text-color);
}
.info-sign .ant-tabs-nav .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: var(--text-color);
}
.info-sign .ant-tabs-nav::before {
  display: none;
}
.info-sign .ant-tabs-nav .ant-tabs-nav-wrap .ant-tabs-ink-bar {
  background: var(--text-color);
}
.info-sign .scroll-part {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 10px;
  margin: 0;
  overflow: auto;
}
.info-sign .scroll-part .top-menu-list {
  position: absolute;
  z-index: 99;
  top: 12px;
  left: 15px;
  column-gap: 5px;
  display: flex;
  justify-content: flex-start;
}
.info-sign .scroll-part .top-menu-list .item {
  cursor: pointer;
}
.info-sign .scroll-part .top-menu-list .item .anticon {
  font-size: 26px;
}
.info-sign .scroll-part .top-menu-list .item .ant-badge-dot {
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border: none;
  box-shadow: none;
}
.info-sign .scroll-part .menu-entry {
  position: absolute;
  z-index: 99;
  top: 16px;
  left: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.info-sign .scroll-part .menu-entry .menu-icon {
  cursor: pointer;
}
.info-sign .scroll-part .menu-entry .wallet-entry {
  margin-left: 8px;
  font-size: 28px;
}
.info-sign .scroll-part .menu-entry .ant-popover {
  padding: 0;
}
.info-sign .scroll-part .menu-entry .ant-popover .ant-popover-arrow {
  display: none;
}
.info-sign .scroll-part .menu-entry .ant-popover .ant-popover-inner {
  border-radius: var(--primary-btn-border-radius);
  background: var(--modal-background-color);
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list {
  display: flex;
  flex-direction: column;
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 2;
  white-space: nowrap;
  cursor: pointer;
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item .ant-badge {
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item .ant-badge .ant-badge-dot {
  top: -1px;
  right: -4px;
}
.info-sign .scroll-part .menu-entry .ant-badge {
  column-gap: 8px;
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .menu-entry .ant-badge .ant-badge-dot {
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border: none;
  box-shadow: none;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content {
  padding: 0;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list {
  padding-top: 6px;
  padding-bottom: 6px;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item {
  height: 45px;
  padding: 0 17px;
  border-bottom: 1px solid var(--keyword-border-color);
  font-weight: 500;
  font-size: 14px;
  line-height: 45px;
  color: #000;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item:last-child {
  border-bottom: none;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item .anticon {
  font-size: 26px;
  color: var(--text-color);
}
.info-sign .scroll-part .info-title {
  height: 19px;
  padding-top: 0;
  margin-top: 10px;
  margin-bottom: 2px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: var(--text-color);
}
.info-sign .scroll-part .info-title img {
  width: 13px;
  height: 13px;
  margin-right: 4px;
  margin-bottom: 3px;
}
.info-sign .scroll-part .info-address {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 23px;
  padding: 0 5px 0 8px;
  margin-top: 5px;
  border-radius: var(--primary-btn-border-radius);
  font-size: 12px;
  line-height: 23px;
  color: var(--secondary-text-color);
  background: var(--tag-background-color);
  cursor: pointer;
}
.info-sign .scroll-part .info-address .copy-icon {
  position: relative;
  width: 14px;
  height: 100%;
  margin-left: 5px;
}
.info-sign .scroll-part .info-address .copy-icon .anticon {
  position: absolute;
  top: 5px;
}
.info-sign .scroll-part .info-request {
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  max-height: 20px;
  padding-top: 0;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: var(--text-color);
  gap: 6px;
}
.info-sign .scroll-part .info-request .aa-icon {
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .info-request .aa-icon .ant-image {
  width: 22px;
  height: 22px;
}
.info-sign .scroll-part .info-request .aa-icon .ant-image img {
  position: absolute;
  left: 0;
  top: 0;
}
.info-sign .scroll-part .info-request .aa-tag {
  padding: 0 4px;
  margin-right: 5px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 12px;
  color: var(--background-color);
  background-color: var(--text-color);
}
.info-sign .scroll-part .info-des {
  max-width: 300px;
  margin: 9px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .apart-line {
  display: none;
  width: 100%;
  border-top: 1px solid var(--card-unclickable-border-color);
}
.info-sign .scroll-part .balance-change {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  border: 1px solid var(--card-unclickable-border-color);
  border-width: 1px;
  border-style: solid;
  border-radius: var(--card-border-radius);
  background: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .balance-change .title {
  padding-bottom: 1px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .balance-change .change-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info-sign .scroll-part .balance-change .change-body .change-title {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .balance-change .change-body .change-title .change-val {
  font-weight: 500;
  font-size: 14px;
  color: var(--green-color);
}
.info-sign .scroll-part .balance-change .change-body .mt20 {
  margin-top: 20px;
}
.info-sign .scroll-part .balance-change .change-body .message-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--text-color);
}
.info-sign .scroll-part .from-to {
  width: 100%;
  min-width: 230px;
  padding: 20px 12px;
  margin-top: 15px;
  border: none;
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
  background: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .from-to .address-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-sign .scroll-part .from-to .mt10 {
  margin-top: 10px;
}
.info-sign .scroll-part .no-gas-fee {
  width: 100%;
  min-width: 230px;
  padding: 20px 12px;
  margin-top: 15px;
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
  background: rgba(234, 67, 53, 0.09);
}
.info-sign .scroll-part .no-gas-fee img {
  width: 18.5px;
  height: 18.5px;
  margin-top: 3px;
  margin-right: 10px;
}
.info-sign .scroll-part .no-gas-fee .no-title {
  font-weight: 500;
}
.info-sign .scroll-part .no-gas-fee .no-warning {
  display: flex;
  padding-bottom: 9px;
  margin-top: 10px;
  border-bottom: 1px solid var(--card-divider-color);
  line-height: 15px;
}
.info-sign .scroll-part .no-gas-fee .data-title {
  margin-top: 15px;
  font-weight: bold;
}
.info-sign .scroll-part .no-gas-fee .data-item {
  margin-top: 10px;
  line-height: 14px;
}
.info-sign .scroll-part .net-fee {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  margin-top: 15px;
  border: 1px solid var(--card-unclickable-border-color);
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
  cursor: pointer;
}
.info-sign .scroll-part .net-fee .title {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .title .fee-val {
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee {
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-title {
  font-weight: 500;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-title span {
  font-weight: 500;
  font-size: 14px;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row img {
  width: 9.19px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .approximately {
  font-weight: 400;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-standard {
  width: 70px;
  margin-right: 10px;
  font-weight: normal;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-time {
  width: 70px;
  margin-right: 19.19px;
  font-weight: 500;
  color: var(--green-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .row-right {
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .row-right .right-icon {
  width: 9.19px;
  margin-left: 15px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right {
  display: flex;
  text-align: right;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right .arrow-right-icon {
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right .arrow-right-icon svg {
  width: 13px;
  height: 13px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .right-time {
  margin-right: 55px;
  font-weight: bold;
  font-size: 12px;
  color: var(--green-color);
}
.info-sign .scroll-part .total {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  margin-top: 15px;
  border: 1px solid var(--card-unclickable-border-color);
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .total .total-title {
  font-weight: bold;
}
.info-sign .scroll-part .total .mt8 {
  margin-top: 8px;
}
.info-sign .scroll-part .total .total-content span {
  font-weight: 400;
  word-break: break-all;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .show-btn {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
}
.info-sign .scroll-part .program-details {
  margin-top: 30px;
  font-weight: 500;
  text-align: center;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction {
  width: 100%;
  min-width: 230px;
  margin-bottom: 15px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item {
  margin-top: 0;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item {
  padding: 13px 11px;
  border: none;
  border-width: 1px;
  border-style: solid;
  border-color: var(--card-unclickable-border-color) !important;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color) !important;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-0 {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  word-break: break-all;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .mt10 {
  margin-top: 10px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .mt15 {
  margin-top: 15px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 span {
  max-width: 220px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: right;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 .data {
  max-width: calc(85 * var(--vw));
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  word-wrap: break-word;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message {
  width: calc(100% - 36px);
  min-width: 230px;
  padding: 0;
  margin-top: 18px;
  border: none;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .sign-message .s-row {
  display: flex;
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 1.3;
  color: var(--text-color);
}
.info-sign .scroll-part .sign-message .s-row[data-index='0'] ::after {
  display: none;
}
.info-sign .scroll-part .sign-message .s-row [data-type='title'],
.info-sign .scroll-part .sign-message .s-row [data-type='index'],
.info-sign .scroll-part .sign-message .s-row .label[data-type='title'],
.info-sign .scroll-part .sign-message .s-row .title[data-type='title'],
.info-sign .scroll-part .sign-message .s-row .value[data-type='index'] {
  position: relative;
  font-weight: bold;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .sign-message .s-row .label {
  font-weight: 400;
  font-size: 14px;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .s-row .value {
  flex: 1;
  overflow: hidden;
  font-weight: 400;
  font-size: 14px;
  word-break: break-all;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .message {
  position: relative;
  max-height: calc(var(--doc-height) - 300px);
  padding: 8px 12px;
  overflow: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  word-wrap: break-word;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .message .personal-message {
  position: relative;
}
.info-sign .scroll-part .sign-message .message pre {
  padding-bottom: 2px;
}
.info-sign .scroll-part .sign-message .message.no-password-tip {
  max-height: calc(var(--doc-height) - 300px - var(--set-payment-password-bar-height) - var(--risk-bar-height)) !important;
}
.info-sign .btn-box {
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 290px;
  height: var(--sign-bottom-menu-height);
  background: var(--theme-background-color);
  box-shadow: 0 -2px 3px 1px rgba(0, 0, 0, 0.08);
}
.info-sign .btn-box > div {
  display: flex;
  width: calc(100% - 36px);
  gap: 18px;
}
.info-sign .btn-box .footer-box {
  margin-top: 10px;
}
.info-sign .btn-box .btn-cancel {
  flex: 1;
  max-width: calc(300 * var(--vw));
  height: 47px;
  padding: 0;
  margin-top: 10px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  color: var(--secondary-btn-color);
  background: var(--secondary-btn-background-color);
}
.info-sign .btn-box .btn-cancel:hover {
  opacity: var(--hover-opacity);
}
.info-sign .btn-box .btn-cancel span {
  font-weight: 500;
}
.info-sign .btn-box .btn-approve {
  flex: 1;
  max-width: calc(300 * var(--vw));
  height: 47px;
  padding: 0;
  margin-top: 10px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: var(--primary-btn-font-size);
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
.info-sign .btn-box .btn-approve:hover {
  opacity: var(--hover-opacity);
}
.info-sign .btn-box .btn-approve img {
  width: 12.75px;
  height: 18.29px;
  margin-right: 12px;
}
.info-sign.info-sign-erc20_transfer .fee-row,
.info-sign.info-sign-erc1155_transfer .fee-row,
.info-sign.info-sign-erc20_approve .fee-row,
.info-sign.info-sign-native_transfer .fee-row,
.info-sign.info-sign-erc721_transfer .fee-row,
.info-sign.info-sign-seaport_cancel_order .fee-row,
.info-sign.info-sign-seaport_nft_listing .fee-row,
.info-sign.info-sign-seaport_fulfill_order .fee-row {
  align-items: center;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row {
  flex-wrap: wrap;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .left,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .left {
  margin-bottom: 10px;
  font-weight: 500;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .right,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .right {
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning {
  display: flex;
  align-items: center;
  line-height: 1.3;
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning span {
  line-height: 1.4;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning img {
  flex: 1;
  align-self: flex-start;
  width: 19px;
  height: 19px;
  margin-top: 4px;
  margin-right: 10px;
}
.info-sign.info-sign-erc20_transfer .info-request,
.info-sign.info-sign-erc1155_transfer .info-request,
.info-sign.info-sign-erc20_approve .info-request,
.info-sign.info-sign-native_transfer .info-request,
.info-sign.info-sign-erc721_transfer .info-request,
.info-sign.info-sign-seaport_cancel_order .info-request,
.info-sign.info-sign-seaport_nft_listing .info-request,
.info-sign.info-sign-seaport_fulfill_order .info-request {
  display: none;
}
.info-sign.info-sign-erc20_transfer .info-title,
.info-sign.info-sign-erc1155_transfer .info-title,
.info-sign.info-sign-erc20_approve .info-title,
.info-sign.info-sign-native_transfer .info-title,
.info-sign.info-sign-erc721_transfer .info-title,
.info-sign.info-sign-seaport_cancel_order .info-title,
.info-sign.info-sign-seaport_nft_listing .info-title,
.info-sign.info-sign-seaport_fulfill_order .info-title {
  height: 20px;
  max-height: 20px;
  line-height: 20px;
  padding: 0;
  margin: 0;
}
.info-sign.info-sign-erc20_transfer .apart-line,
.info-sign.info-sign-erc1155_transfer .apart-line,
.info-sign.info-sign-erc20_approve .apart-line,
.info-sign.info-sign-native_transfer .apart-line,
.info-sign.info-sign-erc721_transfer .apart-line,
.info-sign.info-sign-seaport_cancel_order .apart-line,
.info-sign.info-sign-seaport_nft_listing .apart-line,
.info-sign.info-sign-seaport_fulfill_order .apart-line {
  display: none;
}
.info-sign.info-sign-erc20_transfer .info-address,
.info-sign.info-sign-erc1155_transfer .info-address,
.info-sign.info-sign-erc20_approve .info-address,
.info-sign.info-sign-native_transfer .info-address,
.info-sign.info-sign-erc721_transfer .info-address,
.info-sign.info-sign-seaport_cancel_order .info-address,
.info-sign.info-sign-seaport_nft_listing .info-address,
.info-sign.info-sign-seaport_fulfill_order .info-address {
  margin-top: 10px;
  margin-bottom: 10px;
}
.info-sign.info-sign-erc20_transfer .info-des,
.info-sign.info-sign-erc1155_transfer .info-des,
.info-sign.info-sign-erc20_approve .info-des,
.info-sign.info-sign-native_transfer .info-des,
.info-sign.info-sign-erc721_transfer .info-des,
.info-sign.info-sign-seaport_cancel_order .info-des,
.info-sign.info-sign-seaport_nft_listing .info-des,
.info-sign.info-sign-seaport_fulfill_order .info-des {
  display: none;
}
.info-sign.info-sign-erc20_transfer .transfer-content,
.info-sign.info-sign-erc1155_transfer .transfer-content,
.info-sign.info-sign-erc20_approve .transfer-content,
.info-sign.info-sign-native_transfer .transfer-content,
.info-sign.info-sign-erc721_transfer .transfer-content,
.info-sign.info-sign-seaport_cancel_order .transfer-content,
.info-sign.info-sign-seaport_nft_listing .transfer-content,
.info-sign.info-sign-seaport_fulfill_order .transfer-content {
  width: calc(100% - 36px);
  min-width: 230px;
  margin: auto;
  margin-top: 18px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc1155_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc20_approve .transfer-content .mg-bottom-15,
.info-sign.info-sign-native_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc721_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_cancel_order .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_nft_listing .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .mg-bottom-15 {
  margin-bottom: 15px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc20_approve .transfer-content .flex-sp-row,
.info-sign.info-sign-native_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc721_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .flex-sp-row {
  display: flex;
  justify-content: space-between;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box,
.info-sign.info-sign-erc20_approve .transfer-content .less-box,
.info-sign.info-sign-native_transfer .transfer-content .less-box,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box {
  padding: 13px;
  padding-bottom: 3px;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .pn-row,
.info-sign.info-sign-native_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .pn-row {
  width: 100%;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item {
  padding-top: 14px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--card-divider-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item:last-child {
  border-bottom: none;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row1 .left {
  font-weight: 800;
  font-size: 18px;
  line-height: 19px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row1 .right {
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 22px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon {
  width: 32px;
  min-width: 32px;
  height: 32px;
  margin-right: 6px;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount {
  line-height: 1.2;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: var(--accent-color);
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon {
  width: 12px;
  height: 12px;
  margin-left: 6px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3 {
  margin-top: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 {
  align-items: flex-start;
  margin-top: 20px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left {
  display: flex;
  align-items: center;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon {
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 100%;
  overflow: hidden;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  overflow-x: auto;
  overflow-y: hidden;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  line-height: 32px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val {
  margin-right: 4px;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  white-space: nowrap;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol {
  position: relative;
  margin-left: 2px;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  white-space: nowrap;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd {
  height: 32px;
  line-height: 32px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 {
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .left {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .left img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .right {
  display: -webkit-box;
  flex: 1;
  overflow: hidden;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  text-overflow: ellipsis;
  color: var(--text-color);
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .right .name {
  line-height: 1.2;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row4 {
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row5 {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row6 {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2-0 {
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 {
  padding-top: 24px;
  padding-bottom: 22px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .flex-sp-row {
  height: 44px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right .pn-row1 {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right .pn-row2 {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right {
  text-align: right;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .pn-row2 {
  margin-top: 10px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .middle {
  position: relative;
  width: 34px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .middle .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 13px;
  transform: translate(-50%, -50%);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 {
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 .price-sub {
  position: relative;
  padding-left: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 .price-sub::before {
  position: absolute;
  top: 50%;
  left: 4px;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background: var(--accent-color);
  transform: translateY(-50%);
  content: '';
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content,
.info-sign.info-sign-native_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 13px;
  line-height: 30px;
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content img,
.info-sign.info-sign-native_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content img {
  width: 10px;
  height: 6px;
  margin-left: 5px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .wrap > div {
  display: flex;
  align-items: center;
  gap: 6px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .arrow-icon {
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .arrow-icon svg {
  width: 11px;
  height: 11px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .fold,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .fold {
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .unfold,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .unfold {
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .unfold .arrow-icon {
  transform: rotate(180deg);
}
.edit-approve-amount-modal .ant-modal-content {
  overflow: hidden;
  background-color: var(--modal-background-color) !important;
}
.edit-approve-amount-modal .ant-modal-header {
  border: none;
}
.edit-approve-amount-modal .ant-modal-header .ant-modal-title {
  text-align: center;
  color: var(--text-color);
}
.edit-approve-amount-modal .ant-modal-body {
  padding-bottom: 16px;
}
.edit-approve-amount-modal .ant-form {
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.edit-approve-amount-modal .ant-form .ant-row {
  flex: 1;
}
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input {
  height: 40px;
  border: 1px solid var(--input-border-color);
  color: var(--text-color);
  background: var(--input-background-color-3);
}
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input,
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input:hover {
  background: var(--input-background-color-3);
}
.edit-approve-amount-modal .ant-form .icon {
  width: 30px;
  min-width: 30px;
  height: 30px;
  margin: 0 8px;
  margin-top: 5px;
}
.edit-approve-amount-modal .ant-form .icon img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
}
.edit-approve-amount-modal .ant-form .symbol {
  font-weight: 500;
  font-size: 14px;
  line-height: 40px;
  color: var(--text-color);
}
.edit-approve-amount-modal .ant-modal-footer {
  display: flex !important;
  justify-content: center;
  padding-bottom: 30px;
  border: none;
}
.edit-approve-amount-modal .ant-modal-footer .ant-btn-default {
  display: none;
}
.edit-approve-amount-modal .ant-modal-footer .ant-btn-primary {
  width: 100%;
  max-width: 300px;
  height: 47px;
  margin-left: 0;
  border-radius: var(--primary-btn-border-radius);
  font-size: var(--primary-btn-font-size);
  line-height: 22px;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
`,$m=e=>{var n;let{userInfo:t}=e,r=wi(),{modalOptions:o}=Zr(),a=i.useMemo(()=>{let c=`${o.appId}_${t==null?void 0:t.uuid}`;return`account_security_${yi(c)}`},[o.appId,t==null?void 0:t.uuid]),[s,f]=i.useState({account:{name:"Account & Security",display:!0,badge:!1}});i.useEffect(()=>{if(t!=null&&t.security_account&&a&&!localStorage.getItem(a)){let{has_set_master_password:c,has_set_payment_password:g}=(t==null?void 0:t.security_account)||{};!c||!g?s.account.badge=!0:s.account.badge=!1}else s.account.badge=!1;f(zr(s))},[t==null?void 0:t.security_account,a]);let l=Cn.createElement("div",{className:"item",onClick:()=>{s.account.badge=!1,f(zr(s)),r("/account/security"),localStorage.setItem(a,"true")}},Cn.createElement(oo,{dot:!!s.account.badge},Cn.createElement(Pi,{className:"wallet-icon",name:"security_icon"})));return Cn.createElement("div",{className:"top-menu-list"},!!((n=s==null?void 0:s.account)!=null&&n.display)&&l)},Gm=$m,bt={};function Rt(e){"@babel/helpers - typeof";return Rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Rt(e)}Object.defineProperty(bt,"__esModule",{value:!0});bt.CopyToClipboard=void 0;var Yn=Fo(i),Em=Fo(Ii),Pm=["text","onCopy","options","children"];function Fo(e){return e&&e.__esModule?e:{default:e}}function Lr(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Kr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Lr(Object(t),!0).forEach(function(r){Zt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Lr(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Im(e,n){if(e==null)return{};var t=Tm(e,n),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function Tm(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function Nm(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Rm(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Om(e,n,t){return n&&Rm(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function km(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&Ot(e,n)}function Ot(e,n){return Ot=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},Ot(e,n)}function Mm(e){var n=jm();return function(){var r=at(e),o;if(n){var a=at(this).constructor;o=Reflect.construct(r,arguments,a)}else o=r.apply(this,arguments);return Am(this,o)}}function Am(e,n){if(n&&(Rt(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Vo(e)}function Vo(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function jm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function at(e){return at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},at(e)}function Zt(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Uo=function(e){km(t,e);var n=Mm(t);function t(){var r;Nm(this,t);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return r=n.call.apply(n,[this].concat(a)),Zt(Vo(r),"onClick",function(f){var l=r.props,c=l.text,g=l.onCopy,u=l.children,p=l.options,m=Yn.default.Children.only(u),d=(0,Em.default)(c,p);g&&g(c,d),m&&m.props&&typeof m.props.onClick=="function"&&m.props.onClick(f)}),r}return Om(t,[{key:"render",value:function(){var o=this.props;o.text,o.onCopy,o.options;var a=o.children,s=Im(o,Pm),f=Yn.default.Children.only(a);return Yn.default.cloneElement(f,Kr(Kr({},s),{},{onClick:this.onClick}))}}]),t}(Yn.default.PureComponent);bt.CopyToClipboard=Uo;Zt(Uo,"defaultProps",{onCopy:void 0,options:void 0});var Dm=bt,kt=Dm.CopyToClipboard;kt.CopyToClipboard=kt;var zm=kt;const Hm=Xr(zm);export{Vm as D,Wm as L,Hm as S,bs as T,Um as V,Gm as n};
