import { Q as store_get, V as ensure_array_like, R as unsubscribe_stores, v as pop, P as escape_html, Y as bind_props, t as push } from './index-ChVjjWva.js';
import { g as goto } from './client-TAfaRk9z.js';
import { p as page } from './stores-nK2n3wP9.js';
import { a as appApi } from './app.api-LMz3KRml.js';
import { p as pathAdmin } from './path.admin-BQDC-pBo.js';
import { M as Modal } from './Modal-Bge2rtyn.js';
import { f as fallback } from './utils-p5k09QVL.js';
import { w as writable } from './index3-CsTpgeW4.js';
import { a as addToast } from './notification-CA7h_3Dj.js';
import dayjs from 'dayjs';
import { a as attr } from './attributes-BBAyRfwG.js';
import { P as Pagination } from './Pagination-BgyP52iM.js';
import { g as globalLoading } from './store-CI2MmCxJ.js';
import './exports-CTha0ECg.js';
import './common-CcJGoJjR.js';

function Card($$payload, $$props) {
  push();
  var $$store_subs;
  let fetchData = fallback($$props["fetchData"], () => {
  });
  let blog = $$props["blog"];
  let isModalOpen = writable(false);
  const closeModal = () => isModalOpen.set(false);
  const handleDelete = async (id) => {
    const response = await appApi.deleteBlog(id);
    if ("error" in response) {
      addToast({ message: response.error, type: "error" });
      return;
    }
    fetchData();
    addToast({
      message: "Blog deleted successfully",
      type: "success"
    });
  };
  Modal($$payload, {
    action: () => {
      handleDelete(blog.id);
    },
    isOpen: store_get($$store_subs ??= {}, "$isModalOpen", isModalOpen),
    closeModal,
    children: ($$payload2) => {
      $$payload2.out += `<h2 class="text-xl font-semibold">Confirm Delete</h2> <p>Are you sure you want to delete this blog ?</p>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="single-blog-post max-w-[500px]"><div class="post-content"><div class="flex gap-4"><span><i class="fal fa-comments mr-2"></i>${escape_html(blog.author)}</span> <span><i class="fal fa-calendar-alt mr-2"></i>${escape_html(dayjs(blog.date).format("DD MMMM YYYY"))}</span></div> <h2 class="text-xl"><a${attr("href", pathAdmin.blog.edit(String(blog.id)))}>${escape_html(blog.title)}</a></h2> <p>${escape_html(blog.description)}</p> <div class="flex gap-2"><a${attr("href", pathAdmin.blog.edit(String(blog.id)))} class="theme-btn !bg-blue-500 !rounded-lg px-4 py-2 mt-4 line-height"><span>Edit</span></a> <button class="theme-btn !rounded-lg px-4 py-2 mt-4 line-height"><span>Delete</span></button></div></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { fetchData, blog });
  pop();
}
function useDebounce(value, delay) {
  const debouncedValue = writable(value);
  return debouncedValue;
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const urlParams = new URLSearchParams(store_get($$store_subs ??= {}, "$page", page).url.search);
  urlParams.get("limit");
  let blogs = writable([]);
  let totalPages = writable(0);
  let totalBlogs = writable(0);
  let isLoading = writable(true);
  let search = "";
  const debouncedSearchInput = useDebounce(search);
  debouncedSearchInput.subscribe((value) => {
    console.log("debouncedSearchInput value changed", value);
  });
  const fetchBlogs = async ({ page: page2, limit, search: search2 }) => {
    globalLoading.set(true);
    isLoading.set(true);
    try {
      console.log("search", search2);
      const data = await appApi.getBlogs({ page: page2, limit, search: search2 });
      totalPages.set(data.totalPages);
      totalBlogs.set(data.totalBlogs);
      blogs.set(data.blogs);
    } catch (e) {
      console.log(e);
    } finally {
      globalLoading.set(false);
      isLoading.set(false);
    }
  };
  const handlePageChange = async (page2) => {
    await goto();
  };
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$blogs", blogs));
  $$payload.out += `<div class="p-8"><div class="flex gap-4 mb-8 justify-center"><h1 class="!text-4xl text-center">Blog List</h1></div> <div class="flex gap-2 max-w-[600px] mx-auto mb-8"><input${attr("value", search)} type="text" class="flex-1 rounded-md p-2 svelte-1n2sg7j" placeholder="Search..."> <button class="bg-blue-500 min-w-[120px] hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"><a class="text-neutral-50"${attr("href", pathAdmin.blog.create())}>Add blog +</a></button></div> <div class="flex flex-wrap gap-8"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let blog = each_array[$$index];
    Card($$payload, {
      fetchData: () => {
        fetchBlogs({
          page: 1,
          limit: 10,
          search: store_get($$store_subs ??= {}, "$debouncedSearchInput", debouncedSearchInput)
        });
      },
      blog
    });
  }
  $$payload.out += `<!--]--></div> `;
  Pagination($$payload, {
    totalPages: store_get($$store_subs ??= {}, "$totalPages", totalPages),
    onPageChange: handlePageChange
  });
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DhP35En6.js.map
