import"../chunks/entry.CdBhVsaT.js";import{a as r}from"../chunks/notification.CQ_dIDcv.js";import"../chunks/disclose-version.Bg9kRutz.js";import{p as i,f as s,a as c}from"../chunks/runtime.Cw2PpcJ0.js";import{c as l,a as d}from"../chunks/template.OTC7gM9F.js";import{s as m}from"../chunks/snippet.DC6Me_5G.js";function p(){const n=window.fetch;return async(o,e)=>{const t=localStorage.getItem("access_token");if(!t&&window.location.pathname!=="/login"&&window.location.pathname.includes("/admin"))return alert("Please login first"),window.location.href="/login",new Response;e.headers={...e.headers,authorization:`Bearer ${t}`};const a=await n(o,e);return console.log("Response:",a),(a.status===403||a.status===401)&&(localStorage.removeItem("access_token"),r({type:"error",message:"Session expired. Please login again."}),window.location.href="/login"),a}}const f=async()=>{typeof window<"u"&&(window.fetch=p())},v=Object.freeze(Object.defineProperty({__proto__:null,load:f},Symbol.toStringTag,{value:"Module"}));function S(n,o){i(o,!0);var e=l(),t=s(e);m(t,()=>o.children),d(n,e),c()}export{S as component,v as universal};