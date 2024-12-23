import"../chunks/disclose-version.Bg9kRutz.js";import{p as V,c as s,s as l,r as a,t as A,a as z,f as Z,n as tt,l as $,o as et,b as at,d as st,m as ot}from"../chunks/runtime.Cw2PpcJ0.js";import{a as E,t as U}from"../chunks/template.OTC7gM9F.js";import{e as rt,i as lt}from"../chunks/each.B-PoUjlZ.js";import{s as G,r as it}from"../chunks/attributes.BsurzF8e.js";import{b as nt}from"../chunks/input.DJu4yLiR.js";import{s as K,a as O}from"../chunks/store.CZYjUEVM.js";import{g as ct}from"../chunks/entry.lVKKxEUb.js";import{p as dt}from"../chunks/stores.D-uusrgO.js";import{a as Q}from"../chunks/app.api.B3_0NDVF.js";import"../chunks/legacy.CtaTdtmd.js";import{s as B}from"../chunks/render.CvXTrFji.js";import{e as C}from"../chunks/events.CmFAfe7c.js";import{i as W}from"../chunks/lifecycle.TwNfgdsC.js";import{p as S}from"../chunks/props.BoL1xUs-.js";import{p as R}from"../chunks/path.admin.FjXmaQqh.js";import{s as pt}from"../chunks/slot.B4quXUi_.js";import{t as q}from"../chunks/class.C7VFhbVn.js";import{w as I}from"../chunks/index.C-J9etjc.js";import{a as H}from"../chunks/notification.CQ_dIDcv.js";import{d as mt}from"../chunks/dayjs.min.lVgWzJct.js";import{P as ut}from"../chunks/Pagination.DC5SsM4z.js";import{P as F}from"../chunks/common.Chk20Gqn.js";import{g as J}from"../chunks/store.DSmKlgty.js";import{o as gt}from"../chunks/index-client.aKxFF8fk.js";function ft(r,e,t,n){var g=r.__styles??(r.__styles={});g[e]!==t&&(g[e]=t,t==null?r.style.removeProperty(e):r.style.setProperty(e,t,""))}var vt=U('<div class="fixed inset-0 bg-black bg-opacity-50 z-50"><div class="flex justify-center items-center min-h-screen"><div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md transform svelte-1w5u870"><!> <div class="flex gap-2"><button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Accept</button> <button class="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md">Cancel</button></div></div></div></div>');function bt(r,e){V(e,!1);let t=S(e,"isOpen",8,!1),n=S(e,"closeModal",8,()=>{}),g=S(e,"action",8,()=>{});function c(i){i.target===i.currentTarget&&n()()}W();var d=vt(),L=s(d),f=s(L),b=s(f);pt(b,e,"default",{},null);var v=l(b,2),h=s(v),x=l(h,2);a(v),a(f),a(L),a(d),A(()=>{ft(d,"visibility",t()?"visible":"hidden"),q(f,"scale-100",t()),q(f,"scale-95",!t())}),C("click",h,()=>{g()(),n()()}),C("click",x,function(...i){var m;(m=n())==null||m.apply(this,i)}),C("click",d,c),E(r,d),z()}var ht=U('<h2 class="text-xl font-semibold">Confirm Delete</h2> <p>Are you sure you want to delete this blog ?</p>',1),xt=U('<!> <div class="single-blog-post max-w-[500px]"><div class="post-content"><div class="flex gap-4"><span><i class="fal fa-comments mr-2"></i> </span> <span><i class="fal fa-calendar-alt mr-2"></i> </span></div> <h2 class="text-xl"><a> </a></h2> <p> </p> <div class="flex gap-2"><a class="theme-btn !bg-blue-500 !rounded-lg px-4 py-2 mt-4 line-height"><span>Edit</span></a> <button class="theme-btn !rounded-lg px-4 py-2 mt-4 line-height"><span>Delete</span></button></div></div></div>',1);function _t(r,e){V(e,!1);const t=K(),n=()=>O(d,"$isModalOpen",t);let g=S(e,"fetchData",8,()=>{}),c=S(e,"blog",8),d=I(!1);const L=()=>d.set(!0),f=()=>d.set(!1),b=async u=>{const k=await Q.deleteBlog(u);if("error"in k){H({message:k.error,type:"error"});return}g()(),H({message:"Blog deleted successfully",type:"success"})};W();var v=xt(),h=Z(v);bt(h,{action:()=>{b(c().id)},get isOpen(){return n()},closeModal:f,children:(u,k)=>{var X=ht();tt(2),E(u,X)},$$slots:{default:!0}});var x=l(h,2),i=s(x),m=s(i),w=s(m),j=l(s(w),1,!0);a(w);var M=l(w,2),T=l(s(M),1,!0);A(()=>B(T,mt(c().date).format("DD MMMM YYYY"))),a(M),a(m);var _=l(m,2),D=s(_);A(()=>G(D,"href",R.blog.edit(String(c().id))));var N=s(D,!0);a(D),a(_);var y=l(_,2),Y=s(y,!0);a(y);var o=l(y,2),p=s(o);A(()=>G(p,"href",R.blog.edit(String(c().id))));var P=l(p,2);a(o),a(i),a(x),A(()=>{B(j,c().author),B(N,c().title),B(Y,c().description)}),C("click",P,()=>L()),E(r,v),z()}function yt(r,e){const t=I(r);return gt(()=>{let n=setTimeout(()=>{t.set(r)},e);return console.log("debouncedValue:",t),()=>{clearTimeout(n)}}),t}var Pt=U('<div class="p-8"><div class="flex gap-4 mb-8 justify-center"><h1 class="!text-4xl text-center">Blog List</h1></div> <div class="flex gap-2 max-w-[600px] mx-auto mb-8"><input type="text" class="flex-1 rounded-md p-2 svelte-1n2sg7j" placeholder="Search..."> <button class="bg-blue-500 min-w-[120px] hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"><a class="text-neutral-50">Add blog +</a></button></div> <div class="flex flex-wrap gap-8"></div> <!></div>');function Jt(r,e){V(e,!0);const t=K(),n=()=>O(dt,"$page",t),g=()=>O(b,"$blogs",t),c=()=>O(m,"$debouncedSearchInput",t),d=()=>O(v,"$totalPages",t),f=new URLSearchParams(n().url.search).get("limit");let b=I([]),v=I(0),h=I(0),x=I(!0),i=st("");const m=yt($(i),500);m.subscribe(o=>{console.log("debouncedSearchInput value changed",o)});const w=async({page:o,limit:p,search:P})=>{J.set(!0),x.set(!0);try{console.log("search",P);const u=await Q.getBlogs({page:o,limit:p,search:P});v.set(u.totalPages),h.set(u.totalBlogs),b.set(u.blogs)}catch(u){console.log(u)}finally{J.set(!1),x.set(!1)}},j=async o=>{let p=ot(()=>f||F.DEFAULT_LIMIT);await ct(`?page=${o}&limit=${$(p)}`)};et(()=>{const o=new URLSearchParams(n().url.search),p=o.get("page"),P=o.get("limit");w({page:p?Number(p):F.DEFAULT_PAGE,limit:P?Number(P):F.DEFAULT_LIMIT,search:$(i)})});var M=Pt(),T=l(s(M),2),_=s(T);it(_);var D=l(_,2),N=s(D);A(()=>G(N,"href",R.blog.create())),a(D),a(T);var y=l(T,2);rt(y,5,g,lt,(o,p)=>{_t(o,{fetchData:()=>{w({page:1,limit:10,search:c()})},get blog(){return $(p)}})}),a(y);var Y=l(y,2);ut(Y,{get totalPages(){return d()},onPageChange:j}),a(M),nt(_,()=>$(i),o=>at(i,o)),E(r,M),z()}export{Jt as component};