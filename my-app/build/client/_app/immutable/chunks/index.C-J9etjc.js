import{h as u,af as p}from"./runtime.Cw2PpcJ0.js";const e=[];function a(n,b=u){let i=null;const o=new Set;function r(t){if(p(n,t)&&(n=t,i)){const f=!e.length;for(const s of o)s[1](),e.push(s,n);if(f){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(n))}function l(t,f=u){const s=[t,f];return o.add(s),o.size===1&&(i=b(r,c)||u),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:c,subscribe:l}}export{a as w};