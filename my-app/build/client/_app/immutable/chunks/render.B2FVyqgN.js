import{aj as N,e as L,aA as O,j as c,aB as H,z as T,a1 as _,B as g,k as f,C as S,aC as A,H as w,q as j,at as k,A as Y,aD as B,ar as F,al as M,aE as $,g as q,p as z,V as P,a as W,a3 as G}from"./runtime.BrVA7zyZ.js";import{b as J,c as C,h as v}from"./events.0BlegxR4.js";import{d as K}from"./template.CFDxphtj.js";let n;function Q(){n=void 0}function te(a){let e=null,t=c;var i;if(c){for(e=f,n===void 0&&(n=S(document.head));n!==null&&(n.nodeType!==8||n.data!==H);)n=T(n);n===null?_(!1):n=g(T(n))}c||(i=document.head.appendChild(N()));try{L(()=>a(i),O)}finally{t&&(_(!0),n=f,g(e))}}const U=["touchstart","touchmove"];function X(a){return U.includes(a)}let D=!0;function re(a,e){var t=e==null?"":typeof e=="object"?e+"":e;t!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=t,a.nodeValue=t==null?"":t+"")}function Z(a,e){return V(a,e)}function ne(a,e){A(),e.intro=e.intro??!1;const t=e.target,i=c,y=f;try{for(var r=S(t);r&&(r.nodeType!==8||r.data!==H);)r=T(r);if(!r)throw w;_(!0),g(r),j();const l=V(a,{...e,anchor:r});if(f===null||f.nodeType!==8||f.data!==k)throw Y(),w;return _(!1),l}catch(l){if(l===w)return e.recover===!1&&B(),A(),F(t),_(!1),Z(a,e);throw l}finally{_(i),g(y),Q()}}const u=new Map;function V(a,{target:e,anchor:t,props:i={},events:y,context:r,intro:l=!0}){A();var m=new Set,E=o=>{for(var s=0;s<o.length;s++){var d=o[s];if(!m.has(d)){m.add(d);var h=X(d);e.addEventListener(d,v,{passive:h});var b=u.get(d);b===void 0?(document.addEventListener(d,v,{passive:h}),u.set(d,1)):u.set(d,b+1)}}};E(M(J)),C.add(E);var p=void 0,I=$(()=>{var o=t??e.appendChild(N());return q(()=>{if(r){z({});var s=G;s.c=r}y&&(i.$$events=y),c&&K(o,null),D=l,p=a(o,i)||{},D=!0,c&&(P.nodes_end=f),r&&W()}),()=>{var h;for(var s of m){e.removeEventListener(s,v);var d=u.get(s);--d===0?(document.removeEventListener(s,v),u.delete(s)):u.set(s,d)}C.delete(E),R.delete(p),o!==t&&((h=o.parentNode)==null||h.removeChild(o))}});return R.set(p,I),p}let R=new WeakMap;function se(a){const e=R.get(a);e&&e()}export{ne as a,D as b,te as h,Z as m,re as s,se as u};