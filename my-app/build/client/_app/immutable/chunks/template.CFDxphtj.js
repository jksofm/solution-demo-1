import{aj as d,C as l,V as m,ay as p,az as h,j as u,k as o,B as g,q as T}from"./runtime.BrVA7zyZ.js";function v(t){var r=document.createElement("template");return r.innerHTML=t,r.content}function i(t,r){var e=m;e.nodes_start===null&&(e.nodes_start=t,e.nodes_end=r)}function E(t,r){var e=(r&p)!==0,f=(r&h)!==0,s,a=!t.startsWith("<!>");return()=>{if(u)return i(o,null),o;s===void 0&&(s=v(a?t:"<!>"+t),e||(s=l(s)));var n=f?document.importNode(s,!0):s.cloneNode(!0);if(e){var _=l(n),c=n.lastChild;i(_,c)}else i(n,n);return n}}function x(t,r){var e=E(t,r);return()=>y(e())}function N(t,r,e="svg"){var f=!t.startsWith("<!>"),s=`<${e}>${f?t:"<!>"+t}</${e}>`,a;return()=>{if(u)return i(o,null),o;if(!a){var n=v(s),_=l(n);a=l(_)}var c=a.cloneNode(!0);return i(c,c),c}}function y(t){if(u)return t;const r=t.nodeType===11,e=t.tagName==="SCRIPT"?[t]:t.querySelectorAll("script"),f=m;for(const a of e){const n=document.createElement("script");for(var s of a.attributes)n.setAttribute(s.name,s.value);n.textContent=a.textContent,(r?t.firstChild===a:t===a)&&(f.nodes_start=n),(r?t.lastChild===a:t===a)&&(f.nodes_end=n),a.replaceWith(n)}return t}function A(t=""){if(!u){var r=d(t+"");return i(r,r),r}var e=o;return e.nodeType!==3&&(e.before(e=d()),g(e)),i(e,e),e}function M(){if(u)return i(o,null),o;var t=document.createDocumentFragment(),r=document.createComment(""),e=d();return t.append(r,e),i(r,e),t}function b(t,r){if(u){m.nodes_end=o,T();return}t!==null&&t.before(r)}export{b as a,x as b,M as c,i as d,v as e,A as f,N as n,E as t};