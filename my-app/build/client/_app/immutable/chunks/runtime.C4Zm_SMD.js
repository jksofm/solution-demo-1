import{l as et}from"./index.BFqC5wTN.js";const yt=!1;var Pn=Array.isArray,Ln=Array.from,Fn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,tn=Object.getOwnPropertyDescriptors,Mn=Object.prototype,Hn=Array.prototype,nn=Object.getPrototypeOf;function Yn(t){return typeof t=="function"}const jn=()=>{};function Bn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,Tt=4,j=8,st=16,T=32,J=64,R=128,V=256,p=512,g=1024,q=2048,b=4096,B=8192,rn=16384,mt=32768,en=65536,sn=1<<18,At=1<<19,vt=Symbol("$state"),Un=Symbol("legacy props"),Gn=Symbol("");function It(t){return t===this.v}function an(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function gt(t){return!an(t,this.v)}function ln(t){throw new Error("effect_in_teardown")}function un(){throw new Error("effect_in_unowned_derived")}function on(t){throw new Error("effect_orphan")}function fn(){throw new Error("effect_update_depth_exceeded")}function Vn(){throw new Error("hydration_failed")}function Kn(t){throw new Error("props_invalid_value")}function $n(){throw new Error("state_descriptors_fixed")}function Zn(){throw new Error("state_prototype_fixed")}function _n(){throw new Error("state_unsafe_local_read")}function cn(){throw new Error("state_unsafe_mutation")}function at(t){return{f:0,v:t,reactions:null,equals:It,version:0}}function zn(t){return St(at(t))}function vn(t,n=!1){var e;const r=at(t);return n||(r.equals=gt),et&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Jn(t,n=!1){return St(vn(t,n))}function St(t){return o!==null&&o.f&w&&(y===null?On([t]):y.push(t)),t}function pt(t,n){return kt(t,ft(()=>Xt(t))),n}function kt(t,n){return o!==null&&it()&&o.f&(w|st)&&(y===null||!y.includes(t))&&cn(),pn(t,n)}function pn(t,n){return t.equals(n)||(t.v=n,t.version=$t(),Ot(t,g),it()&&u!==null&&u.f&p&&!(u.f&T)&&(_!==null&&_.includes(t)?(E(u,g),Q(u)):I===null?Rn([t]):I.push(t))),n}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=it(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&g||!e&&l===u||(E(l,n),i&(p|R)&&(i&w?Ot(l,q):Q(l)))}}const Qn=1,Wn=2,Xn=4,tr=8,nr=16,rr=1,er=2,sr=4,ar=8,lr=16,ur=4,or=1,ir=2,dn="[",hn="[!",En="]",Rt={},fr=Symbol();function xt(t){console.warn("hydration_mismatch")}let O=!1;function _r(t){O=t}let h;function M(t){if(t===null)throw xt(),Rt;return h=t}function cr(){return M(x(h))}function vr(t){if(O){if(x(h)!==null)throw xt(),Rt;h=t}}function pr(t=1){if(O){for(var n=t,r=h;n--;)r=x(r);h=r}}function dr(){for(var t=0,n=h;;){if(n.nodeType===8){var r=n.data;if(r===En){if(t===0)return n;t-=1}else(r===dn||r===hn)&&(t+=1)}var e=x(n);n.remove(),n=e}}var dt,yn,Dt,Nt;function hr(){if(dt===void 0){dt=window,yn=document;var t=Element.prototype,n=Node.prototype;Dt=ct(n,"firstChild").get,Nt=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function W(t=""){return document.createTextNode(t)}function X(t){return Dt.call(t)}function x(t){return Nt.call(t)}function Er(t,n){if(!O)return X(t);var r=X(h);if(r===null)r=h.appendChild(W());else if(n&&r.nodeType!==3){var e=W();return r==null||r.before(e),M(e),e}return M(r),r}function yr(t,n){if(!O){var r=X(t);return r instanceof Comment&&r.data===""?x(r):r}return h}function wr(t,n=1,r=!1){let e=O?h:t;for(;n--;)e=x(e);if(!O)return e;var s=e.nodeType;if(r&&s!==3){var a=W();return e==null||e.before(a),M(a),a}return M(e),e}function Tr(t){t.textContent=""}function wn(t){var n=w|g;u===null?n|=R:u.f|=At;const r={children:null,ctx:f,deps:null,equals:It,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&w){var e=o;(e.children??(e.children=[])).push(r)}return r}function mr(t){const n=wn(t);return n.equals=gt,n}function Ct(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?lt(e):L(e)}}}function bt(t){var n,r=u;z(t.parent);try{Ct(t),n=Zt(t)}finally{z(r)}return n}function qt(t){var n=bt(t),r=(D||t.f&R)&&t.deps!==null?q:p;E(t,r),t.equals(n)||(t.v=n,t.version=$t())}function lt(t){Ct(t),Y(t,0),E(t,B),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Pt(t){u===null&&o===null&&on(),o!==null&&o.f&R&&un(),ot&&ln()}function Tn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&J)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|g,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=N;try{ht(!0),U(l),l.f|=rn}catch(c){throw L(l),c}finally{ht(i)}}else n!==null&&Q(l);var m=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&At)===0;if(!m&&!s&&e&&(a!==null&&Tn(l,a),o!==null&&o.f&w)){var A=o;(A.children??(A.children=[])).push(l)}return l}function Ar(t){const n=P(j,null,!1);return E(n,p),n.teardown=t,n}function Ir(t){Pt();var n=u!==null&&(u.f&T)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Lt(t);return e}}function gr(t){return Pt(),ut(t)}function Sr(t){const n=P(J,t,!0);return()=>{L(n)}}function Lt(t){return P(Tt,t,!1)}function kr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ut(()=>{t(),!e.ran&&(e.ran=!0,kt(r.l.r2,!0),ft(n))})}function Or(){var t=f;ut(()=>{if(Xt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&E(r,q),F(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function ut(t){return P(j,t,!0)}function Rr(t){return mn(t)}function mn(t,n=0){return P(j|st|n,t,!0)}function xr(t,n=!0){return P(j|T,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=ot,e=o;Et(!0),Z(null);try{n.call(null)}finally{Et(r),Z(e)}}}function Mt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)lt(n[r])}}function Ht(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;L(r,n),r=e}}function An(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||L(n),n=r}}function L(t,n=!0){var r=!1;if((n||t.f&sn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:x(e);e.remove(),e=a}r=!0}Ht(t,n&&!r),Mt(t),Y(t,0),E(t,B);var l=t.transitions;if(l!==null)for(const m of l)m.stop();Ft(t);var i=t.parent;i!==null&&i.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Yt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Dr(t,n){var r=[];jt(t,r,!0),In(r,()=>{L(t),n&&n()})}function In(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function jt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&mt)!==0||(e.f&T)!==0;jt(e,n,a?r:!1),e=s}}}function Nr(t){Bt(t,!0)}function Bt(t,n){if(t.f&b){F(t)&&U(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&mt)!==0||(r.f&T)!==0;Bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const gn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let K=!1,$=!1,tt=[],nt=[];function Ut(){K=!1;const t=tt.slice();tt=[],wt(t)}function Gt(){$=!1;const t=nt.slice();nt=[],wt(t)}function Cr(t){K||(K=!0,queueMicrotask(Ut)),tt.push(t)}function br(t){$||($=!0,gn(Gt)),nt.push(t)}function Sn(){K&&Ut(),$&&Gt()}const Vt=0,kn=1;let G=Vt,H=!1,N=!1,ot=!1;function ht(t){N=t}function Et(t){ot=t}let k=[],C=0;let o=null;function Z(t){o=t}let u=null;function z(t){u=t}let y=null;function On(t){y=t}let _=null,d=0,I=null;function Rn(t){I=t}let Kt=0,D=!1,S=null,f=null;function $t(){return++Kt}function it(){return!et||f!==null&&f.l===null}function F(t){var l,i;var n=t.f;if(n&g)return!0;if(n&q){var r=t.deps,e=(n&R)!==0;if(r!==null){var s;if(n&V){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=V}for(s=0;s<r.length;s++){var a=r[s];if(F(a)&&qt(a),e&&u!==null&&!D&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||E(t,p)}return!1}function xn(t,n,r){throw t}function Zt(t){var _t;var n=_,r=d,e=I,s=o,a=D,l=y,i=f,m=t.f;_=null,d=0,I=null,o=m&(T|J)?null:t,D=!N&&(m&R)!==0,y=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(Y(t,d),c!==null&&d>0)for(c.length=d+_.length,v=0;v<_.length;v++)c[d+v]=_[v];else t.deps=c=_;if(!D)for(v=d;v<c.length;v++)((_t=c[v]).reactions??(_t.reactions=[])).push(t)}else c!==null&&d<c.length&&(Y(t,d),c.length=d);return A}finally{_=n,d=r,I=e,o=s,D=a,y=l,f=i}}function Dn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&w&&(_===null||!_.includes(n))&&(E(n,q),n.f&(R|V)||(n.f^=V),Y(n,0))}function Y(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Dn(t,r[e])}function U(t){var n=t.f;if(!(n&B)){E(t,p);var r=u;u=t;try{n&st?An(t):Ht(t),Mt(t),Ft(t);var e=Zt(t);t.teardown=typeof e=="function"?e:null,t.version=Kt}catch(s){xn(s)}finally{u=r}}}function zt(){C>1e3&&(C=0,fn()),C++}function Jt(t){var n=t.length;if(n!==0){zt();var r=N;N=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Qt(s,a),Nn(a)}}finally{N=r}}}function Nn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(B|b))&&F(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yt(e):e.fn=null))}}function Cn(){if(H=!1,C>1001)return;const t=k;k=[],Jt(t),H||(C=0)}function Q(t){G===Vt&&(H||(H=!0,queueMicrotask(Cn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(J|T)){if(!(r&p))return;n.f^=p}}k.push(n)}function Qt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&T)!==0,l=a&&(s&p)!==0;if(!l&&!(s&b))if(s&j){a?r.f^=p:F(r)&&U(r);var i=r.first;if(i!==null){r=i;continue}}else s&Tt&&e.push(r);var m=r.next;if(m===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=m}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Qt(i,n)}function Wt(t){var n=G,r=k;try{zt();const s=[];G=kn,k=s,H=!1,Jt(r);var e=t==null?void 0:t();return Sn(),(k.length>0||s.length>0)&&Wt(),C=0,e}finally{G=n,k=r}}async function qr(){await Promise.resolve(),Wt()}function Xt(t){var i;var n=t.f,r=(n&w)!==0;if(r&&n&B){var e=bt(t);return lt(t),e}if(S!==null&&S.add(t),o!==null){y!==null&&y.includes(t)&&_n();var s=o.deps;_===null&&s!==null&&s[d]===t?d++:_===null?_=[t]:_.push(t),I!==null&&u!==null&&u.f&p&&!(u.f&T)&&I.includes(t)&&(E(u,g),Q(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,F(a)&&qt(a)),t.v}function Pr(t){var n=S;S=new Set;var r=S,e;try{if(ft(t),n!==null)for(e of S)n.add(e)}finally{S=n}for(e of r)if(e.f&en)for(const s of e.deps||[])s.f&w||pt(s,null);else pt(e,null)}function ft(t){const n=o;try{return o=null,t()}finally{o=n}}const bn=~(g|q|p);function E(t,n){t.f=t.f&bn|n}function Lr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},et&&!n&&(f.l={s:null,u:null,r1:[],r2:at(!1)})}function Fr(t){const n=f;if(n!==null){t!==void 0&&(n.x=t);const l=n.e;if(l!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];z(a.effect),Z(a.reaction),Lt(a.fn)}}finally{z(r),Z(e)}}f=n.p,n.m=!0}return t||{}}function Mr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)rt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&rt(r)}}}function rt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{rt(t[e],n)}catch{}const r=nn(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=tn(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{yn as $,xt as A,M as B,X as C,Jn as D,mt as E,it as F,ct as G,Rt as H,Kn as I,gt as J,T as K,en as L,z as M,rr as N,er as O,sr as P,ar as Q,J as R,vt as S,Un as T,mr as U,u as V,lr as W,vn as X,S as Y,Nr as Z,hn as _,Fr as a,dr as a0,_r as a1,Mn as a2,Hn as a3,at as a4,$n as a5,fr as a6,Zn as a7,nn as a8,Pn as a9,sn as aA,dn as aB,hr as aC,Vn as aD,Sr as aE,Z as aF,Fn as aG,Wt as aH,qr as aI,Pr as aJ,st as aK,rn as aL,Yn as aM,ur as aN,kr as aO,Or as aP,pt as aQ,an as aa,gr as ab,f as ac,Bn as ad,wt as ae,Mr as af,W as ag,Xn as ah,Ln as ai,b as aj,Qn as ak,pn as al,Wn as am,jt as an,Tr as ao,In as ap,En as aq,o as ar,tr as as,nr as at,br as au,Gn as av,tn as aw,Ar as ax,or as ay,ir as az,kt as b,Er as c,zn as d,mn as e,yr as f,xr as g,jn as h,L as i,O as j,h as k,Xt as l,wn as m,pr as n,Ir as o,Lr as p,cr as q,vr as r,wr as s,Rr as t,ft as u,Dr as v,Lt as w,ut as x,Cr as y,x as z};