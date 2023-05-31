
// --------------------
// Request: /home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/app/entry.js
// Parents: 
// - <entry> ($id_x1frnpf8FZ)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - ofetch ($id_UFVI0MuJ4f)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/paths.mjs ($id_Up7q7ehfmD)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/css.mjs ($id_yFPNJioFDA)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/plugins/server.mjs ($id_tDytp20I18)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/root-component.mjs ($id_5iuW7xCnIe)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs ($id_DpM3LLuOgA)
// --------------------
const $id_acFyUhZEAH = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("ofetch");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/paths.mjs");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/css.mjs");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/plugins/server.mjs");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/root-component.mjs");
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs");








if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  let vueAppPromise;
  entry = async function initApp() {
    if (vueAppPromise) {
      return vueAppPromise;
    }
    const isSSR = Boolean(
      window.__NUXT__?.serverRendered || document.getElementById("__NUXT_DATA__")?.dataset.ssr === "true"
    );
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#" + __vite_ssr_import_7__.appRootId);
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
  vueAppPromise = entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: vue
// Parents: 
// - /home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/app/entry.js ($id_Mgv6TUMvKL)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/@unhead/vue/dist/shared/vue.505b826e.mjs ($id_QMoeI2mV4r)
// - /node_modules/@unhead/vue/dist/index.mjs ($id_gagBM5c1XT)
// - /node_modules/nuxt/dist/app/composables/component.js ($id_EFEW5YJRwR)
// - /node_modules/nuxt/dist/app/composables/asyncData.js ($id_W1ji9MdLhE)
// - /node_modules/nuxt/dist/app/composables/error.js ($id_2FidUTdZvd)
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// - /node_modules/nuxt/dist/app/composables/state.js ($id_68OSB2SdRF)
// - /node_modules/nuxt/dist/app/composables/fetch.js ($id_ynUirX8S5z)
// - /node_modules/nuxt/dist/app/composables/cookie.js ($id_yWSXoj2tZ1)
// - /node_modules/nuxt/dist/app/composables/payload.js ($id_mAQaWvWD5Y)
// - /node_modules/nuxt/dist/app/components/nuxt-link.js ($id_g9hqu8HOHe)
// - /node_modules/nuxt/dist/app/config.js ($id_zdup3dcG8q)
// - /node_modules/nuxt/dist/app/plugins/revive-payload.server.js ($id_yG8IOAoySn)
// - /components/BookmarksButton.vue?nuxt_component=async ($id_QH92TJXINJ)
// - /components/BookmarksButton.vue ($id_fXyegQXU9b)
// - /components/EmptyHotelsList.vue?nuxt_component=async ($id_b7zKcYzK9M)
// - /components/EmptyHotelsList.vue ($id_JSLzf6HnzA)
// - /components/Footer.vue?nuxt_component=async ($id_3pPvvxgHir)
// - /components/Footer.vue ($id_89jzJWR97X)
// - /components/FormError.vue?nuxt_component=async ($id_mD3BUML6lP)
// - /components/FormError.vue ($id_r2G1VHDpCz)
// - /components/FormInput.vue?nuxt_component=async ($id_64M04cma2l)
// - /components/FormInput.vue ($id_sNdiJ0oTHU)
// - /components/FormRatingInput.vue?nuxt_component=async ($id_nqPnL4zLmN)
// - /components/FormRatingInput.vue ($id_o0v8dWVRYA)
// - /components/Header.vue?nuxt_component=async ($id_enl7fGcgPL)
// - /components/Header.vue ($id_TihPwxfEDt)
// - /components/HostInfo.vue?nuxt_component=async ($id_fwVC1KJOO4)
// - /components/HostInfo.vue ($id_s2f7LRfCsE)
// - /components/HotelCard.vue?nuxt_component=async ($id_3lWm8cfwpj)
// - /components/HotelRating.vue ($id_934PdLsxKF)
// - /components/HotelCard.vue ($id_pqV02CMxtT)
// - /components/HotelGallery.vue?nuxt_component=async ($id_eDZAxE6TVq)
// - /components/HotelGalleryItem.vue ($id_FcSjIWHFDl)
// - /components/HotelGallery.vue ($id_f5MZ4aVd2u)
// - /components/HotelGalleryItem.vue?nuxt_component=async ($id_dKUgaAln56)
// - /components/HotelLocationsItem.vue?nuxt_component=async ($id_zvTMM49tu8)
// - /components/HotelLocationsItem.vue ($id_bSPqJgKEFP)
// - /components/HotelRating.vue?nuxt_component=async ($id_XI4rJ0tfdB)
// - /components/HotelReviews.vue?nuxt_component=async ($id_RafQNTXFjA)
// - /components/ReviewsItem.vue ($id_nUZSUjbpRZ)
// - /components/HotelReviews.vue ($id_DWKdjvSAcl)
// - /components/HotelSortForm.vue?nuxt_component=async ($id_X0cJf5s9Lo)
// - /components/HotelSortForm.vue ($id_AsGlHIpR6R)
// - /components/SortOption.vue ($id_wC3lqAOixe)
// - /components/HotelsList.vue?nuxt_component=async ($id_T6N6rvoB6y)
// - /components/HotelsListItem.vue ($id_Ya185VBJTJ)
// - /components/HotelsList.vue ($id_UVEumiMazl)
// - /components/HotelsListItem.vue?nuxt_component=async ($id_kMKglbvfwS)
// - /components/HotelsLocations.vue?nuxt_component=async ($id_lqzm2aGpo9)
// - /components/HotelsLocations.vue ($id_vxGDSfsmvQ)
// - /components/LoadingScreen.vue?nuxt_component=async ($id_GPd7wO4YaT)
// - /components/LoadingScreen.vue ($id_tzlkO9Fweu)
// - /components/LocationsMap.vue?nuxt_component=async ($id_1FSjJcMFWY)
// - /components/LocationsMap.vue ($id_sBJI28Njtu)
// - /components/NearbyHotels.vue?nuxt_component=async ($id_DKKHILtlZ9)
// - /components/NearbyHotels.vue ($id_eKQvBvMaGm)
// - /components/PageFooter.vue?nuxt_component=async ($id_X7AlCxR0wl)
// - /components/PageFooter.vue ($id_Yruyz0fHzU)
// - /components/PropertyItem.vue?nuxt_component=async ($id_Tor5e7UrqM)
// - /components/PropertyItem.vue ($id_shIeN2yOI9)
// - /components/ReviewForm.vue?nuxt_component=async ($id_eU8qoYeBhU)
// - /components/ReviewForm.vue ($id_GUcAwljbvC)
// - /components/ReviewsItem.vue?nuxt_component=async ($id_dcrXNeWLFJ)
// - /components/SortOption.vue?nuxt_component=async ($id_M3P8rQYcKD)
// - /node_modules/nuxt/dist/pages/runtime/plugins/router.js ($id_D3QvO0DhQh)
// - /node_modules/nuxt/dist/pages/runtime/composables.js ($id_qONe2xcmWo)
// - /pages/SignIn.vue ($id_BENA1yn67l)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// - /node_modules/nuxt/dist/pages/runtime/router.options.js ($id_oOlBa4xK8E)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/layout.js ($id_rl83QbM9u6)
// - /node_modules/nuxt/dist/app/components/utils.js ($id_XcQgbwvARI)
// - /node_modules/nuxt/dist/pages/runtime/page.js ($id_Gu6Fb8JH8w)
// - /node_modules/nuxt/dist/pages/runtime/utils.js ($id_UauUSmVzfY)
// - /layouts/default.vue ($id_dononVQSck)
// - /layouts/users.vue ($id_YWBDzoTZZX)
// - /app.vue ($id_K0boQqLzfo)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// - /node_modules/nuxt/dist/app/components/island-renderer.js ($id_J7KWDNzYhZ)
// - /node_modules/nuxt/dist/app/components/test-component-wrapper.js ($id_QKyW9deWPQ)
// Dependencies: 
// - /node_modules/vue/index.js ($id_EBsueceuQs)
// --------------------
const $id_ktywPNbBs3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/vue/index.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/vue/index.js
// Parents: 
// - vue ($id_VkOCJnUZrn)
// Dependencies: 

// --------------------
const $id_mvLyULLGX6 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/vue/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/vue/index.js\".")
  })


// --------------------
// Request: ofetch
// Parents: 
// - /home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/app/entry.js ($id_Mgv6TUMvKL)
// Dependencies: 

// --------------------
const $id_R2Lf8iMud7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ofetch")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ofetch\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/paths.mjs
// Parents: 
// - /home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/app/entry.js ($id_Mgv6TUMvKL)
// Dependencies: 
// - /node_modules/ufo/dist/index.mjs ($id_YU3gYOEqyI)
// --------------------
const $id_988RDeVMnj = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":"","head":{"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]},"layoutTransition":false,"pageTransition":false,"keepalive":false,"rootId":"__nuxt","rootTag":"div"}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});
if (false) {
  globalThis.__buildAssetsURL = buildAssetsURL
  globalThis.__publicAssetsURL = publicAssetsURL
};
}


// --------------------
// Request: /node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/paths.mjs ($id_Up7q7ehfmD)
// Dependencies: 

// --------------------
const $id_zRixqOrprr = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/nuxt.js
// Parents: 
// - /home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/app/entry.js ($id_Mgv6TUMvKL)
// - /node_modules/nuxt/dist/app/index.js ($id_5aoHRxZAK9)
// - /node_modules/nuxt/dist/app/composables/component.js ($id_EFEW5YJRwR)
// - /node_modules/nuxt/dist/app/composables/asyncData.js ($id_W1ji9MdLhE)
// - /node_modules/nuxt/dist/app/composables/error.js ($id_2FidUTdZvd)
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// - /node_modules/nuxt/dist/app/composables/state.js ($id_68OSB2SdRF)
// - /node_modules/nuxt/dist/app/composables/ready.js ($id_i9E38ZUuqG)
// - /node_modules/nuxt/dist/app/composables/hydrate.js ($id_4n6svHth9F)
// - /node_modules/nuxt/dist/app/composables/ssr.js ($id_0hXVMeuliO)
// - /node_modules/nuxt/dist/app/composables/cookie.js ($id_yWSXoj2tZ1)
// - /node_modules/nuxt/dist/app/composables/preload.js ($id_0cWPY5ardo)
// - /node_modules/nuxt/dist/app/composables/payload.js ($id_mAQaWvWD5Y)
// - /node_modules/nuxt/dist/app/composables/chunk.js ($id_JQIBAdjkCm)
// - /node_modules/nuxt/dist/app/components/nuxt-link.js ($id_g9hqu8HOHe)
// - /node_modules/nuxt/dist/app/config.js ($id_zdup3dcG8q)
// - /node_modules/nuxt/dist/app/plugins/revive-payload.server.js ($id_yG8IOAoySn)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// - /node_modules/nuxt/dist/head/runtime/plugins/unhead.js ($id_Qxg1EpMjVq)
// - /node_modules/nuxt/dist/pages/runtime/plugins/router.js ($id_D3QvO0DhQh)
// - /node_modules/nuxt/dist/pages/runtime/router.options.js ($id_oOlBa4xK8E)
// - /node_modules/nuxt/dist/pages/runtime/validate.js ($id_z9WcQnu6O4)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/pages/runtime/page.js ($id_Gu6Fb8JH8w)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - hookable ($id_Jqn8E4F5w7)
// - unctx ($id_95GsJqysu7)
// --------------------
const $id_sALCwTsmza = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("hookable");
const __vite_ssr_import_2__ = await __vite_ssr_import__("unctx");



const nuxtAppCtx = /* @__PURE__ */ __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.5.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ ?? {} : { serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => callWithNuxt(nuxtApp, fn),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  if (true) {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (true) {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
    }
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext._payloadReducers = {};
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  if (false) {
    window.addEventListener("nuxt.preloadError", (event) => {
      nuxtApp.callHook("app:chunkError", { error: event.payload });
    });
    const unreg = nuxtApp.hook("app:error", (...args) => {
      console.error("[nuxt] error caught during app initialization", ...args);
    });
    nuxtApp.hook("app:mounted", unreg);
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  const parallels = [];
  const errors = [];
  for (const plugin of plugins) {
    const promise = applyPlugin(nuxtApp, plugin);
    if (plugin.meta?.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  const unwrappedPlugins = [];
  const legacyInjectPlugins = [];
  const invalidPlugins = [];
  const plugins = [];
  for (const plugin of _plugins) {
    if (typeof plugin !== "function") {
      if (true) {
        invalidPlugins.push(plugin);
      }
      continue;
    }
    let _plugin = plugin;
    if (plugin.length > 1) {
      if (true) {
        legacyInjectPlugins.push(plugin);
      }
      _plugin = (nuxtApp) => plugin(nuxtApp, nuxtApp.provide);
    }
    if (true && !isNuxtPlugin(_plugin)) {
      unwrappedPlugins.push(_plugin);
    }
    plugins.push(_plugin);
  }
  plugins.sort((a, b) => (a.meta?.order || orderMap.default) - (b.meta?.order || orderMap.default));
  if (true && legacyInjectPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin with legacy Nuxt 2 format (context, inject) which is likely to be broken. In the future they will be ignored:", legacyInjectPlugins.map((p) => p.name || p).join(","));
  }
  if (true && invalidPlugins.length) {
    console.warn("[warn] [nuxt] Some plugins are not exposing a function and skipped:", invalidPlugins);
  }
  if (true && unwrappedPlugins.length) {
    console.warn("[warn] [nuxt] You are using a plugin that has not been wrapped in `defineNuxtPlugin`. It is advised to wrap your plugins as in the future this may enable enhancements:", unwrappedPlugins.map((p) => p.name || p).join(","));
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
const orderMap = {
  pre: -20,
  default: 0,
  post: 20
};
function definePayloadPlugin(plugin) {
  return /* #__PURE__ */ defineNuxtPlugin(plugin, { order: -40 });
}
Object.defineProperty(__vite_ssr_exports__, "definePayloadPlugin", { enumerable: true, configurable: true, get(){ return definePayloadPlugin }});
function /* #__PURE__ */ defineNuxtPlugin(plugin, meta) {
  if (typeof plugin === "function") {
    return /* #__PURE__ */ defineNuxtPlugin({ setup: plugin }, meta);
  }
  const wrapper = (nuxtApp) => {
    if (plugin.hooks) {
      nuxtApp.hooks.addHooks(plugin.hooks);
    }
    if (plugin.setup) {
      return plugin.setup(nuxtApp);
    }
  };
  wrapper.meta = {
    name: meta?.name || plugin.name || plugin.setup?.name,
    parallel: plugin.parallel,
    order: meta?.order || plugin.order || orderMap[plugin.enforce || "default"] || orderMap.default
  };
  wrapper[NuxtPluginIndicator] = true;
  return wrapper;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isNuxtPlugin(plugin) {
  return typeof plugin === "function" && NuxtPluginIndicator in plugin;
}
Object.defineProperty(__vite_ssr_exports__, "isNuxtPlugin", { enumerable: true, configurable: true, get(){ return isNuxtPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  } else {
    nuxtAppCtx.set(nuxt);
    return nuxt.vueApp.runWithContext(fn);
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  let nuxtAppInstance;
  if (__vite_ssr_import_0__.hasInjectionContext()) {
    nuxtAppInstance = __vite_ssr_import_0__.getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    if (true) {
      throw new Error("[nuxt] A composable that requires access to the Nuxt instance was called outside of a plugin, Nuxt hook, Nuxt middleware, or Vue setup function. This is probably not a Nuxt bug. Find out more at `https://nuxt.com/docs/guide/concepts/auto-imports#using-vue-and-nuxt-composables`.");
    } else {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function /* #__PURE__ */ useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
function defineAppConfig(config) {
  return config;
}
Object.defineProperty(__vite_ssr_exports__, "defineAppConfig", { enumerable: true, configurable: true, get(){ return defineAppConfig }});
;
}


// --------------------
// Request: hookable
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// Dependencies: 

// --------------------
const $id_p6x8naIYgL = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("hookable")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"hookable\".")
  })


// --------------------
// Request: unctx
// Parents: 
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/pages/runtime/plugins/router.js ($id_D3QvO0DhQh)
// - /node_modules/nuxt/dist/pages/runtime/validate.js ($id_z9WcQnu6O4)
// Dependencies: 

// --------------------
const $id_Zn9H5zfDIh = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("unctx")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"unctx\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/css.mjs
// Parents: 
// - /home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/app/entry.js ($id_Mgv6TUMvKL)
// Dependencies: 
// - /assets/css/main.css ($id_LKZO79Aiv6)
// --------------------
const $id_L28ykIoVQq = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/assets/css/main.css");
;
}


// --------------------
// Request: /assets/css/main.css
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/css.mjs ($id_yFPNJioFDA)
// Dependencies: 

// --------------------
const $id_3OkJSbgAR2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}@font-face{font-family:rubik;font-style:normal;font-weight:300;src:url(/_nuxt/assets/fonts/rubik-light.woff2) format(\"woff2\"),url(/_nuxt/assets/fonts/rubik-light.woff) format(\"woff\"),url(/_nuxt/assets/fonts/rubik-light.ttf) format(\"truetype\");font-display:swap}@font-face{font-family:rubik;font-style:normal;font-weight:400;src:url(/_nuxt/assets/fonts/rubik-regular.woff2) format(\"woff2\"),url(/_nuxt/assets/fonts/rubik-regular.woff) format(\"woff\"),url(/_nuxt/assets/fonts/rubik-regular.ttf) format(\"truetype\");font-display:swap}@font-face{font-family:rubik;font-style:normal;font-weight:500;src:url(/_nuxt/assets/fonts/rubik-medium.woff2) format(\"woff2\"),url(/_nuxt/assets/fonts/rubik-medium.woff) format(\"woff\"),url(/_nuxt/assets/fonts/rubik-medium.ttf) format(\"truetype\");font-display:swap}@font-face{font-family:rubik;font-style:normal;font-weight:700;src:url(/_nuxt/assets/fonts/rubik-bold.woff2) format(\"woff2\"),url(/_nuxt/assets/fonts/rubik-bold.woff) format(\"woff\"),url(/_nuxt/assets/fonts/rubik-bold.ttf) format(\"truetype\");font-display:swap}body,html{width:100%;min-width:1144px;margin:0;padding:0;font-family:rubik,arial,sans-serif;font-weight:400;font-style:normal;font-size:16px;line-height:1.15;color:#383838;background-color:#f5f5f5;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;box-sizing:border-box}*,::after,::before{box-sizing:inherit}a{color:inherit;text-decoration:none;transition:color .3s,opacity .3s;cursor:pointer;outline:0}textarea{resize:none}img{max-width:100%;height:auto}.visually-hidden{position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;white-space:nowrap;-webkit-clip-path:inset(100%);clip-path:inset(100%);clip:rect(0 0 0 0);overflow:hidden}.container{width:1144px;margin-left:auto;margin-right:auto;padding-left:58px;padding-right:58px}.button{padding:0;background:0 0;border:none;text-decoration:none;cursor:pointer;display:inline-block;font:inherit;text-align:center;word-break:break-word;word-wrap:wrap;overflow-wrap:break-word;transition:color .3s,background-color .3s;outline:0}.page{background-color:#fff}.page--login{display:flex;flex-direction:column;width:1144px;margin-left:auto;margin-right:auto;background-image:linear-gradient(to right,#f5f5f5 509px,transparent 509px),url(/_nuxt/assets/img/amsterdam.jpg);background-position:top left,right top;height:100vh;background-size:auto,auto 100%;background-repeat:no-repeat,no-repeat;overflow:hidden}@media (-webkit-min-device-pixel-ratio:1.5), (min-resolution:144dpi), (min-resolution:1.5dppx){.page--login{background-image:linear-gradient(to right,#f5f5f5 509px,transparent 509px),url(/_nuxt/assets/img/amsterdam@2x.jpg)}}@media (max-height:720px){.page--login{background-size:auto,auto 715px}}.page--favorites-empty{display:flex;flex-direction:column;height:100vh}.page--main{display:flex;flex-direction:column;height:100vh}.page--gray{background-color:#f5f5f5}.page__main--property{padding-bottom:129px}.page__main--login{display:flex;flex-grow:1}.page__main--favorites{padding-top:11px}.page__main--favorites-empty{display:flex;flex-grow:1}.page__main--favorites-empty .page__favorites-container{display:flex}.page__main--index{display:flex;flex-grow:1;flex-direction:column;overflow-y:hidden}.page__login-container{display:flex}.header__wrapper{display:flex;align-items:flex-start;padding:19px 16px 0}.header__left{display:flex;flex-wrap:wrap;flex-shrink:0;margin-right:auto}.header__logo-link{margin-bottom:15px}.header__logo-link:not(.header__logo-link--active):focus,.header__logo-link:not(.header__logo-link--active):hover{opacity:.5}.header__nav{display:flex;flex-shrink:0;flex-wrap:wrap;margin-top:11px;margin-left:30px}.header__nav-list{margin:0;padding:0;list-style:none;display:flex;flex-wrap:wrap;align-items:center}.header__nav-item{margin-bottom:15px}.header__nav-item:not(:last-child){margin-right:15px}.header__nav-link{display:flex;align-items:center;font-size:14px;line-height:1.2143;transition:text-shadow .3s}.header__nav-link:focus,.header__nav-link:hover{text-shadow:.5px 0 0,-.5px 0 0}.header__avatar-wrapper{width:20px;height:20px;margin-right:8px}.header__login{padding-top:2px;padding-right:8px}.header__user-name, .header__signout{padding-top:2px}.user__avatar-wrapper{background-image:url(/_nuxt/assets/img/avatar.svg);background-size:100%;background-repeat:no-repeat}.user__avatar{border-radius:50%}.rating__stars{position:relative;display:block;font-size:0}.rating__stars::before{content:\"\";display:inline-block;height:100%;background:url(/_nuxt/assets/img/stars.svg) transparent no-repeat center}.rating__stars span{position:absolute;top:0;left:0;display:inline-block;height:100%;overflow:hidden}.rating__stars span::before{content:\"\";display:inline-block;height:100%;background:url(/_nuxt/assets/img/stars-active.svg) transparent no-repeat center}.cities{display:flex;flex-grow:1;background-color:#fff;overflow-y:hidden}.cities__places-container{display:flex;padding-right:0}.cities__places-container--empty{padding-right:0}.cities__no-places{position:relative;width:498px;padding-left:18px}.cities__no-places::after{content:\"\";position:absolute;width:12.06vh;min-width:100px;max-width:120px;height:100%;bottom:0;right:-48px;background-color:#fff;border-right:6px solid #4481c3;transform:skew(-6.5deg)}.cities__places{width:572px;margin-top:2px;margin-right:2px;padding-top:29px;padding-bottom:7px;padding-left:9px;overflow-y:auto}.cities__places-list{display:flex;flex-wrap:wrap;margin-left:-8px;padding-left:5px}.cities__place-card{width:260px;margin-left:8px;margin-bottom:24px}.page__main--index-empty .cities__right-section{background-image:url(/_nuxt/assets/img/no-places@2x.png);background-size:auto 119%;background-repeat:no-repeat;background-position:right 100%}@media (-webkit-min-device-pixel-ratio:1.5), (min-resolution:144dpi), (min-resolution:1.5dppx){.page__main--index-empty .cities__right-section{background-image:url(/_nuxt/assets/img/no-places@2x.png)}}@media (max-height:780px){.page__main--index-empty .cities__right-section{background-position:right center;background-size:100% auto}}.cities__right-section{display:flex;flex-grow:1}.cities__map{width:100%;align-self:stretch;background-image:url(/_nuxt/assets/img/map.jpg);background-size:682px auto;background-repeat:no-repeat;background-position:-170px center}@media (-webkit-min-device-pixel-ratio:1.5), (min-resolution:144dpi), (min-resolution:1.5dppx){.cities__map{background-image:url(/_nuxt/assets/img/map@2x.jpg);background-size:682px 794px}}@media (min-height:980px){.cities__map{background-size:cover}}.cities__status-wrapper{position:relative;z-index:1;width:auto;margin-top:25.4vh;margin-right:auto;margin-left:auto;padding-top:62px;text-align:center;background-image:url(/_nuxt/assets/img/ico-no-results.svg);background-size:45px 47px;background-position:center top;background-repeat:no-repeat}.cities__status{display:block;margin-bottom:5px;font-size:32px;line-height:1.1875}.cities__status-description{margin-top:0;margin-bottom:0;padding:0 45px;font-size:16px;line-height:1.5}.locations--login{display:flex;justify-content:center;align-items:center;flex-grow:1;padding:0 51px 63px 130px}.locations--login .locations__item-link{padding:9px 21px 6px 16px}.locations--current .locations__item{margin:0}.locations--current .locations__item-link{color:#fff;background-color:#4481c3;text-shadow:1px 0 0,.5px 0 0,-1px 0 0}.locations__list{margin:0;padding:0;list-style:none;display:flex;flex-wrap:wrap;align-items:flex-start;padding:16px 3px 33px}.locations__item{display:block;margin-right:36px;margin-bottom:19px}.favorites__locations .locations__item-link{min-width:137px;padding:9px 14px 6px 15px;text-align:center;letter-spacing:.9px}.locations__item-link{display:block;padding:9px 21px 6px 11px;font-size:19px;line-height:1.211;font-weight:300;font-style:oblique;transform:skew(-15deg);border-radius:3px;transition:background .3s,color .3s,text-shadow .3s}.locations__item-link span{display:block;transform:skew(15deg)}.locations__item-link:focus,.locations__item-link:hover{text-shadow:1px 0 0,.5px 0 0,-1px 0 0}.locations__item-link.tabs__item--active{text-shadow:1px 0 0,.5px 0 0,-1px 0 0;color:#fff;background-color:#4481c3}.places__found{display:block;margin-bottom:22px;padding-left:2px;font-size:24px;line-height:1.167;font-weight:700;font-style:oblique}.places__sorting{position:relative;margin-bottom:33px;padding-left:5px}.places__sorting-arrow{position:absolute;top:55%;transform:translateY(-50%);right:0;fill:#0d0d0d}.places__options{margin:0;padding:0;list-style:none;background-color:#fff;border:1px solid #dfdfdf;border-radius:4px}.places__options--custom{position:absolute;top:calc(100% + 1px);left:52px;z-index:1;display:none}.places__options--opened{display:block}.places__option{min-width:170px;padding:14px 16px 10px;font-size:14px;line-height:1.2143;transition:background .3s;outline:0;cursor:pointer}.places__option--active,.places__option:focus,.places__option:hover{background-color:#f2f2f2}.places__option:selected{background-color:#f2f2f2}.places__sorting-caption{font-size:12px;line-height:1.167;font-weight:700}.places__sorting-type{position:relative;display:inline-block;padding-right:12px;font-size:12px;line-height:1.167;cursor:pointer}.place-card{position:relative}.place-card:hover{opacity:.6}.place-card__image-wrapper{margin-bottom:9px}.place-card__image{display:block;border-radius:4px}.place-card__info{flex-grow:1}.place-card__price-wrapper{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:5px}.place-card__price{margin-right:20px}.favorites__card .place-card__bookmark-button{margin-top:0;transform:skew(10deg)}.place-card__bookmark-button{flex-shrink:0;width:18px;height:19px;margin-top:2px}.place-card__bookmark-button:focus .place-card__bookmark-icon,.place-card__bookmark-button:hover .place-card__bookmark-icon{stroke:#4481c3}.place-card__bookmark-button--active .place-card__bookmark-icon{stroke:#4481c3;fill:#4481c3}.place-card__bookmark-icon{fill:none;stroke:#979797;stroke-width:2;transition:fill .3s,stroke .3s}.place-card__price-value{font-size:20px;line-height:1.2;font-weight:700}.place-card__price-text{font-size:12px;line-height:1.1667}.place-card__rating{margin-bottom:6px}.place-card__stars{width:73px;height:12px}.place-card__stars::before{width:73px;background-size:73px 12px}.place-card__stars span{width:0%}.place-card__stars span::before{width:73px;background-size:73px 12px}.place-card__name{margin-top:0;margin-bottom:4px;font-size:18px;line-height:1.223;font-weight:700;font-style:oblique}.place-card__name a{display:inline-block}.place-card__name a:focus,.place-card__name a:hover{opacity:.7}.place-card__type{margin-top:0;margin-bottom:0;font-size:12px;line-height:1.1667}.place-card__mark{position:absolute;top:-5px;left:-3px;padding:5px 15px 5px 9px;font-size:12px;line-height:1.1667;font-weight:700;color:#fff;background-color:#4481c3;transform:skew(-10deg);border-radius:3px}.place-card__mark span{display:block;transform:skew(10deg)}.property__gallery-container{padding-left:52px;padding-right:52px}.property__gallery{position:relative;display:flex;align-items:flex-start;flex-wrap:wrap;justify-content:center;width:784px;margin-right:auto;margin-left:auto;max-height:452px;margin-bottom:30px;overflow:hidden}.property__gallery::before{content:\"\";position:absolute;top:-1px;left:0;width:34px;height:100%;background-image:url(/_nuxt/assets/img/triangle.svg);background-repeat:no-repeat;background-size:34px 452px;transform:rotate(180deg)}.property__gallery::after{content:\"\";position:absolute;top:-1px;right:0;width:34px;height:100%;background-image:url(/_nuxt/assets/img/triangle.svg);background-repeat:no-repeat;background-size:34px 452px}.property__image-wrapper{display:flex;justify-content:center;align-items:center;margin-bottom:2px;margin-right:2px;width:260px;height:200px;overflow:hidden}.property__image-wrapper:nth-child(3n){margin-right:0}.property__image{display:block;min-width:100%;min-height:100%;flex-grow:1}.property__container{position:relative;overflow-x:hidden}.property__wrapper{display:flex;flex-direction:column;align-items:center;max-width:613px;margin-right:auto;margin-left:auto}.property__mark{margin-bottom:8px;padding:7px 11px 3px 8px;font-size:16px;line-height:1.1875;font-weight:700;font-style:oblique;color:#fff;background-color:#4481c3;transform:skew(-10deg);border-radius:2px;background-color:#4481c3}.property__mark span{display:block;transform:skew(10deg)}.property__name{margin-top:0;margin-bottom:7px;padding:0 28px;font-size:38px;line-height:1.21053;font-weight:700;font-style:oblique;text-align:center}.property__bookmark-button{position:absolute;top:41px;right:93px;width:31px;height:33px;margin-top:2px}.property__bookmark-button:focus .property__bookmark-icon,.property__bookmark-button:hover .property__bookmark-icon{stroke:#4481c3}.property__bookmark-button--active .property__bookmark-icon{stroke:#4481c3;fill:#4481c3}.property__bookmark-icon{fill:none;stroke:#b8b8b8;stroke-width:2;transition:fill .3s,stroke .3s}.property__rating{display:flex;align-items:flex-start;margin-bottom:24px}.property__stars{width:147px;height:24px}.property__stars::before{width:147px;background-size:147px 24px}.property__stars span{width:0%}.property__stars span::before{width:147px;background-size:147px 24px}.property__rating-value{margin-left:5px;padding-top:2px;font-size:24px;line-height:1;font-weight:700;font-style:oblique}.property__features{margin:0;padding:0;list-style:none;display:flex;margin-bottom:38px;margin-left:-64px}.property__feature{margin-left:64px;padding-left:18px;font-size:16px;line-height:1.3;background-repeat:no-repeat}.property__feature--entire{background-image:url(/_nuxt/assets/img/ico-place.svg);background-size:13px 16px}.property__feature--bedrooms{background-image:url(/_nuxt/assets/img/ico-bedrooms.svg);background-size:14px 18px}.property__feature--adults{background-image:url(/_nuxt/assets/img/ico-adults.svg);background-size:13px 12px;background-position:left 3px}.property__price{position:relative;margin-bottom:56px}.property__price::before{content:\"\";position:absolute;top:18px;left:calc(100% + 12px);width:345px;height:1px;background-image:linear-gradient(to left,rgba(255,255,255,.01),#7ca7d5)}.property__price::after{content:\"\";position:absolute;top:18px;right:calc(100% + 11px);width:425px;height:1px;background-image:linear-gradient(to right,rgba(255,255,255,.01),#6899ce)}.property__price-value{position:relative;padding-right:8px;padding-left:6px;font-size:32px;line-height:1.1875;font-weight:700;font-style:oblique}.property__price-value::after{content:\"\";position:absolute;top:-7px;right:-2px;height:52px;width:2px;background-color:#4481c3;transform:skew(-12deg)}.property__price-text{font-size:18px;line-height:1.223;font-weight:700;font-style:oblique;opacity:.48}.property__inside{width:100%;margin-bottom:52px}.property__inside-title{margin-top:0;margin-bottom:24px;font-size:24px;line-height:1.1667;font-weight:700;font-style:oblique;text-align:center;color:#000}.property__inside-list{margin:0;padding:0;list-style:none;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start}.property__inside-item{position:relative;width:100%;max-width:174px;padding-left:18px;font-size:16px;line-height:1.75;color:#000}.property__inside-item::before{content:\"\";position:absolute;top:14px;left:0;width:12px;height:1px;background-color:#000}.property__host-title{margin-top:0;margin-bottom:25px;font-size:24px;line-height:1.1667;font-weight:700;font-style:oblique;text-align:center;color:#000}.property__host-user{display:flex;flex-direction:column;align-items:center;margin-bottom:15px;padding-right:16px}.property__avatar-wrapper{position:relative;width:74px;min-width:74px;height:74px;margin-bottom:7px}.property__avatar-wrapper--pro::after{content:\"\";position:absolute;top:-3px;right:-16px;width:33px;height:33px;border-radius:50%;background-color:#ff9000;background-image:url(/_nuxt/assets/img/star-white.svg);background-size:20px 19px;background-position:center 6px;background-repeat:no-repeat}.property__user-name{font-size:16px;line-height:1.187;font-weight:700;color:#000}.property__user-status{font-size:12px;line-height:1.167;color:#696969}.property__description{margin-bottom:52px}.property__text{margin-top:0;margin-bottom:28px;font-size:16px;line-height:1.75;color:#000}.property__reviews{width:100%;margin-bottom:55px}.property__map{width:100%;height:579px;margin-bottom:50px;background-image:url(/_nuxt/assets/img/map-big.jpg);background-repeat:no-repeat;background-size:1144px auto;background-position:center top}@media (-webkit-min-device-pixel-ratio:1.5), (min-resolution:144dpi), (min-resolution:1.5dppx){.property__map{background-image:url(/_nuxt/assets/img/map-big@2x.jpg);background-size:1144px auto}}.reviews__title{margin-top:0;margin-bottom:37px;font-size:24px;line-height:1.1667;font-weight:700;font-style:oblique;color:#000;text-align:center}.reviews__avatar-wrapper{min-width:54px;width:54px;height:54px;margin-bottom:10px}.reviews__avatar{display:block}.reviews__user{display:flex;flex-direction:column;align-items:center;max-width:54px;margin-right:22px}.reviews__user-name{font-size:14px;line-height:1.2143;color:#000;word-break:break-word;word-wrap:break-word;overflow-wrap:break-word}.reviews__list{margin:0;padding:0;list-style:none}.reviews__item{display:flex;align-items:flex-start;margin-bottom:22px}.reviews__text{margin-top:0;margin-bottom:5px;font-size:16px;line-height:1.75;color:#000}.reviews__rating{margin-bottom:7px}.reviews__stars{width:98px;height:16px}.reviews__stars::before{width:98px;background-size:98px 16px}.reviews__stars span{width:0%}.reviews__stars span::before{width:98px;background-size:98px 16px}.reviews__time{font-size:14px;line-height:1;color:#5d5d5d}.reviews__form{margin-right:-30px;padding-left:76px}.reviews__label{display:inline-block;margin-bottom:14px;font-size:14px;line-height:1.2143;font-weight:700;font-style:oblique;color:#000}.reviews__textarea{width:568px;height:92px;margin-bottom:12px;padding:15px 16px}.reviews__rating-form{margin-bottom:21px}.reviews__button-wrapper{display:flex;align-items:flex-start;justify-content:space-between}.reviews__help{width:402px;margin-top:8px;margin-bottom:0;font-size:12px;line-height:1.334}.reviews__star{padding-left:15px;background-image:url(/_nuxt/assets/img/star-active.svg);background-size:12px 11px;background-repeat:no-repeat}.reviews__text-amount{font-weight:700}.reviews__submit{width:143px;font-size:16px;line-height:1.1875}.form__rating{display:flex;flex-direction:row-reverse;justify-content:flex-end;align-items:flex-start}.form__rating-label{display:block;width:37px;height:33px;margin-right:4px;cursor:pointer}.form__rating-label:first-child{margin-right:0}.form__rating-input:checked~.form__rating-label .form__star-image,.form__rating-input:focus~.form__rating-label .form__star-image,.form__rating-label:hover .form__star-image,.form__rating-label:hover~.form__rating-label .form__star-image{fill:#ff9000}.form__star-image{fill:#c7c7c7;transition:fill .3s}.form__textarea{font-size:16px;line-height:1.1875;color:#383838;background-color:#fff;border:1px solid #e6e6e6;border-radius:2px}.form__textarea::-moz-placeholder{font-size:16px;line-height:1.1875;color:#9b9b9b}.form__textarea::placeholder{font-size:16px;line-height:1.1875;color:#9b9b9b}.form__textarea::-ms-input-placeholder{font-size:16px;line-height:1.1875;color:#9b9b9b}.form__input{padding:15px 14px 13px;font-size:16px;line-height:1.1875;color:#383838;background-color:#fff;border:1px solid #e6e6e6;border-radius:2px}.form__input::-moz-placeholder{font-size:16px;line-height:1.1875;color:#818181}.form__input::placeholder{font-size:16px;line-height:1.1875;color:#818181}.form__input::-ms-input-placeholder{font-size:16px;line-height:1.1875;color:#818181}.form__submit{padding:16px 20px 13px;color:#fff;background-color:#4481c3;border-radius:3px}.form__submit:focus,.form__submit:hover{background-color:#3069a6}.form__submit:disabled{background-color:#c7c7c7}.near-places{margin:0 16px 0 12px;padding-bottom:27px;border-bottom:2px solid rgba(222,222,222,.5)}.near-places__title{margin-top:0;margin-bottom:25px;font-size:24px;line-height:1.1667;font-weight:700;font-style:oblique;text-align:center;color:#000}.near-places__list{display:flex;justify-content:center;align-items:flex-start;flex-wrap:wrap;margin-left:-8px;padding-left:3px}.near-places__card{width:260px;margin-left:8px;margin-bottom:24px}.login{position:relative;width:520px;padding-top:19.6vh;padding-right:60px;padding-left:13px}.login::after{content:\"\";position:absolute;width:12.03vh;min-width:195px;height:100vh;min-height:450px;bottom:0;right:-2px;background-color:#f5f5f5;border-right:6px solid #4481c3;transform:skew(-6.5deg)}.login__title{position:relative;z-index:1;margin-top:0;margin-bottom:28px;font-size:32px;line-height:1.1875;font-weight:700;font-style:oblique}.login__form{position:relative;z-index:1;width:341px}.login__input-wrapper{margin-right:2px}.login__input{width:100%;margin-bottom:24px}.login__submit{width:100%}.favorites{padding:0 15px 93px;border-bottom:2px solid rgba(222,222,222,.5)}.favorites--empty{width:100%;padding:0 0 93px 38px}.favorites__title{margin-top:0;margin-bottom:49px;font-size:32px;line-height:1.1429;font-weight:700;font-style:oblique;text-align:center}.favorites__list{margin:0;padding:0;list-style:none}.favorites__locations-items{display:flex;align-items:flex-start;margin-bottom:52px}.favorites__locations-items:last-child{margin-bottom:0}.favorites__locations{display:flex;width:244px;margin-right:20px}.favorites__card{display:flex;align-items:flex-start;width:421px;margin-bottom:32px}.favorites__card:last-child{margin-bottom:0}.favorites__image-wrapper{min-width:150px;margin-right:16px;margin-bottom:0}.favorites__card-info{padding-top:1px}.favorites__status-wrapper{width:420px;margin-top:16.7vh;margin-right:auto;margin-left:auto;padding-top:94px;text-align:center;background-image:url(/_nuxt/assets/img/ico-saved.svg);background-size:60px 73px;background-position:center top;background-repeat:no-repeat}.favorites__status{display:block;margin-bottom:5px;font-size:32px;line-height:1.1875}.favorites__status-description{margin-top:0;margin-bottom:0;padding:0 30px;font-size:16px;line-height:1.5}.footer{display:flex;justify-content:center;align-items:flex-start;padding-top:48px;padding-bottom:52px}.header__logo-link:not(.header__logo-link--active):focus,.header__logo-link:not(.header__logo-link--active):hover{opacity:.5}/*# sourceMappingURL=main.css.map */\n";
}


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/plugins/server.mjs
// Parents: 
// - /home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/app/entry.js ($id_Mgv6TUMvKL)
// Dependencies: 
// - /node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs ($id_i9ItelNnNP)
// - /node_modules/nuxt/dist/app/plugins/revive-payload.server.js ($id_yG8IOAoySn)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// - /node_modules/nuxt/dist/head/runtime/plugins/unhead.js ($id_Qxg1EpMjVq)
// - /node_modules/nuxt/dist/pages/runtime/plugins/router.js ($id_D3QvO0DhQh)
// --------------------
const $id_RAriUTnbdO = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/plugins/revive-payload.server.js");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/head/runtime/plugins/unhead.js");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/plugins/router.js");





__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default
];
}


// --------------------
// Request: /node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/plugins/server.mjs ($id_tDytp20I18)
// Dependencies: 
// - pinia ($id_08NwGtDtAK)
// - /node_modules/nuxt/dist/app/index.js ($id_5aoHRxZAK9)
// --------------------
const $id_wfPHNxH2Pg = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("pinia");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.js");


const plugin = /* #__PURE__ */ __vite_ssr_import_1__.defineNuxtPlugin((nuxtApp) => {
  const pinia = __vite_ssr_import_0__.createPinia();
  nuxtApp.vueApp.use(pinia);
  __vite_ssr_import_0__.setActivePinia(pinia);
  if (true) {
    nuxtApp.payload.pinia = pinia.state.value;
  } else if (nuxtApp.payload && nuxtApp.payload.pinia) {
    pinia.state.value = nuxtApp.payload.pinia;
  }
  return {
    provide: {
      pinia
    }
  };
});
__vite_ssr_exports__.default = plugin;
;
}


// --------------------
// Request: pinia
// Parents: 
// - /node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs ($id_i9ItelNnNP)
// - /stores/useUserStore.ts ($id_q5kbabqLSb)
// - /stores/useHotelsStore.ts ($id_upffMzxLCg)
// Dependencies: 

// --------------------
const $id_jzLU7WEUI3 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("pinia")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"pinia\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/index.js
// Parents: 
// - /node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs ($id_i9ItelNnNP)
// - /node_modules/nuxt/dist/app/composables/url.js ($id_5ORK2SA042)
// - /components/ReviewForm.vue ($id_GUcAwljbvC)
// - /pages/SignIn.vue ($id_BENA1yn67l)
// - /states.ts ($id_7V82x31Vcq)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// - /node_modules/nuxt/dist/app/components/index.js ($id_M28hAzMvA1)
// - /node_modules/nuxt/dist/app/config.js ($id_zdup3dcG8q)
// --------------------
const $id_1Qp6x1UA7f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/index.js");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/index.js");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/config.js");
__vite_ssr_exportAll__(__vite_ssr_import_3__);




const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/index.js
// Parents: 
// - /node_modules/nuxt/dist/app/index.js ($id_5aoHRxZAK9)
// Dependencies: 
// - /node_modules/@unhead/vue/dist/index.mjs ($id_gagBM5c1XT)
// - /node_modules/nuxt/dist/app/composables/component.js ($id_EFEW5YJRwR)
// - /node_modules/nuxt/dist/app/composables/asyncData.js ($id_W1ji9MdLhE)
// - /node_modules/nuxt/dist/app/composables/hydrate.js ($id_4n6svHth9F)
// - /node_modules/nuxt/dist/app/composables/state.js ($id_68OSB2SdRF)
// - /node_modules/nuxt/dist/app/composables/error.js ($id_2FidUTdZvd)
// - /node_modules/nuxt/dist/app/composables/fetch.js ($id_ynUirX8S5z)
// - /node_modules/nuxt/dist/app/composables/cookie.js ($id_yWSXoj2tZ1)
// - /node_modules/nuxt/dist/app/composables/ssr.js ($id_0hXVMeuliO)
// - /node_modules/nuxt/dist/app/composables/ready.js ($id_i9E38ZUuqG)
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// - /node_modules/nuxt/dist/app/composables/preload.js ($id_0cWPY5ardo)
// - /node_modules/nuxt/dist/app/composables/payload.js ($id_mAQaWvWD5Y)
// - /node_modules/nuxt/dist/app/composables/chunk.js ($id_JQIBAdjkCm)
// - /node_modules/nuxt/dist/app/composables/url.js ($id_5ORK2SA042)
// --------------------
const $id_r8JRcSFwFF = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@unhead/vue/dist/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useSeoMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.useSeoMeta }});
Object.defineProperty(__vite_ssr_exports__, "useServerSeoMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.useServerSeoMeta }});const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/component.js");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.defineNuxtComponent }});const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.js");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "clearNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.clearNuxtData }});const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/hydrate.js");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHydration }});const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.js");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useState }});const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.js");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "createError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.createError }});
Object.defineProperty(__vite_ssr_exports__, "isNuxtError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.isNuxtError }});
Object.defineProperty(__vite_ssr_exports__, "showError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.showError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useError }});const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/fetch.js");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useLazyFetch }});const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/cookie.js");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useCookie }});const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.js");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRequestFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRequestFetch }});
Object.defineProperty(__vite_ssr_exports__, "setResponseStatus", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.setResponseStatus }});const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ready.js");

Object.defineProperty(__vite_ssr_exports__, "onNuxtReady", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onNuxtReady }});const __vite_ssr_import_10__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.js");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeRouteLeave", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.onBeforeRouteLeave }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeRouteUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.onBeforeRouteUpdate }});
Object.defineProperty(__vite_ssr_exports__, "setPageLayout", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.setPageLayout }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_10__.useRouter }});const __vite_ssr_import_11__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/preload.js");

Object.defineProperty(__vite_ssr_exports__, "preloadComponents", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.preloadComponents }});
Object.defineProperty(__vite_ssr_exports__, "prefetchComponents", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.prefetchComponents }});
Object.defineProperty(__vite_ssr_exports__, "preloadRouteComponents", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_11__.preloadRouteComponents }});const __vite_ssr_import_12__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/payload.js");

Object.defineProperty(__vite_ssr_exports__, "isPrerendered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_12__.isPrerendered }});
Object.defineProperty(__vite_ssr_exports__, "loadPayload", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_12__.loadPayload }});
Object.defineProperty(__vite_ssr_exports__, "preloadPayload", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_12__.preloadPayload }});
Object.defineProperty(__vite_ssr_exports__, "definePayloadReducer", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_12__.definePayloadReducer }});
Object.defineProperty(__vite_ssr_exports__, "definePayloadReviver", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_12__.definePayloadReviver }});const __vite_ssr_import_13__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/chunk.js");

Object.defineProperty(__vite_ssr_exports__, "reloadNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_13__.reloadNuxtApp }});const __vite_ssr_import_14__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/url.js");

Object.defineProperty(__vite_ssr_exports__, "useRequestURL", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_14__.useRequestURL }});














;
}


// --------------------
// Request: /node_modules/@unhead/vue/dist/index.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// - /node_modules/nuxt/dist/app/composables/component.js ($id_EFEW5YJRwR)
// - /node_modules/nuxt/dist/app/composables/payload.js ($id_mAQaWvWD5Y)
// - /node_modules/nuxt/dist/head/runtime/plugins/unhead.js ($id_Qxg1EpMjVq)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 
// - unhead ($id_8ZBh4L155h)
// - /node_modules/@unhead/vue/dist/shared/vue.505b826e.mjs ($id_QMoeI2mV4r)
// - vue ($id_VkOCJnUZrn)
// - @unhead/shared ($id_yCC4ZXEOmJ)
// --------------------
const $id_1nMcQV1pDv = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("unhead");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@unhead/vue/dist/shared/vue.505b826e.mjs");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("@unhead/shared");
const __vite_ssr_import_4__ = await __vite_ssr_import__("unhead");

Object.defineProperty(__vite_ssr_exports__, "createHeadCore", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.createHeadCore }});const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/@unhead/vue/dist/shared/vue.505b826e.mjs");

Object.defineProperty(__vite_ssr_exports__, "VueReactiveUseHeadPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.V }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.a }});
Object.defineProperty(__vite_ssr_exports__, "createServerHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.c }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.i }});






const VueHeadMixin = {
  created() {
    const instance = __vite_ssr_import_2__.getCurrentInstance();
    if (!instance)
      return;
    const options = instance.type;
    if (!options || !("head" in options))
      return;
    const source = typeof options.head === "function" ? () => options.head.call(instance.proxy) : options.head;
    __vite_ssr_import_1__.u(source);
  }
};

const Vue2ProvideUnheadPlugin = function(_Vue, head) {
  _Vue.mixin({
    beforeCreate() {
      const options = this.$options;
      const origProvide = options.provide;
      options.provide = function() {
        let origProvideResult;
        if (typeof origProvide === "function")
          origProvideResult = origProvide.call(this);
        else
          origProvideResult = origProvide || {};
        return {
          ...origProvideResult,
          [__vite_ssr_import_1__.h]: head
        };
      };
    }
  });
};

function useHeadSafe(input, options = {}) {
  return __vite_ssr_import_1__.u(input, { ...options, transform: __vite_ssr_import_0__.whitelistSafeInput });
}

function useSeoMeta(input, options) {
  const headInput = __vite_ssr_import_2__.ref({});
  __vite_ssr_import_2__.watchEffect(() => {
    const resolvedMeta = __vite_ssr_import_1__.r(input);
    const { title, titleTemplate, ...meta } = resolvedMeta;
    headInput.value = {
      title,
      titleTemplate,
      meta: __vite_ssr_import_0__.unpackMeta(meta)
    };
  });
  return __vite_ssr_import_1__.u(headInput, options);
}

function useServerHead(input, options = {}) {
  return __vite_ssr_import_1__.s(input, { ...options, mode: "server" });
}

function useServerHeadSafe(input, options = {}) {
  return useHeadSafe(input, { ...options, mode: "server" });
}

function useServerSeoMeta(input, options) {
  return useSeoMeta(input, { ...options || {}, mode: "server" });
}

function useTagTitle(title) {
  return __vite_ssr_import_1__.u({ title });
}
function useTitleTemplate(titleTemplate) {
  return __vite_ssr_import_1__.u({ titleTemplate });
}
function useTagMeta(meta) {
  return __vite_ssr_import_1__.u({ meta: __vite_ssr_import_3__.asArray(meta) });
}
function useTagMetaFlat(meta) {
  const input = __vite_ssr_import_2__.ref({});
  __vite_ssr_import_2__.watchEffect(() => {
    input.value = __vite_ssr_import_0__.unpackMeta(__vite_ssr_import_1__.r(meta));
  });
  return __vite_ssr_import_1__.u({ meta: input });
}
function useTagLink(link) {
  return __vite_ssr_import_1__.u({ link: __vite_ssr_import_3__.asArray(link) });
}
function useTagScript(script) {
  return __vite_ssr_import_1__.u({ script: __vite_ssr_import_3__.asArray(script) });
}
function useTagStyle(style) {
  return __vite_ssr_import_1__.u({ style: __vite_ssr_import_3__.asArray(style) });
}
function useTagNoscript(noscript) {
  return __vite_ssr_import_1__.u({ noscript: __vite_ssr_import_3__.asArray(noscript) });
}
function useTagBase(base) {
  return __vite_ssr_import_1__.u({ base });
}
function useHtmlAttrs(attrs) {
  return __vite_ssr_import_1__.u({ htmlAttrs: attrs });
}
function useBodyAttrs(attrs) {
  return __vite_ssr_import_1__.u({ bodyAttrs: attrs });
}
function useServerTagTitle(title) {
  return useServerHead({ title });
}
function useServerTitleTemplate(titleTemplate) {
  return useServerHead({ titleTemplate });
}
function useServerTagMeta(meta) {
  return useServerHead({ meta: __vite_ssr_import_3__.asArray(meta) });
}
function useServerTagMetaFlat(meta) {
  const input = __vite_ssr_import_2__.ref({});
  __vite_ssr_import_2__.watchEffect(() => {
    input.value = __vite_ssr_import_0__.unpackMeta(__vite_ssr_import_1__.r(meta));
  });
  return useServerHead({ meta: input });
}
function useServerTagLink(link) {
  return useServerHead({ link: __vite_ssr_import_3__.asArray(link) });
}
function useServerTagScript(script) {
  return useServerHead({ script: __vite_ssr_import_3__.asArray(script) });
}
function useServerTagStyle(style) {
  return useServerHead({ style: __vite_ssr_import_3__.asArray(style) });
}
function useServerTagNoscript(noscript) {
  return useServerHead({ noscript: __vite_ssr_import_3__.asArray(noscript) });
}
function useServerTagBase(base) {
  return useServerHead({ base });
}
function useServerHtmlAttrs(attrs) {
  return useServerHead({ htmlAttrs: attrs });
}
function useServerBodyAttrs(attrs) {
  return __vite_ssr_import_1__.u({ bodyAttrs: attrs });
}

const coreComposableNames = [
  "injectHead"
];
const unheadVueComposablesImports = {
  "@unhead/vue": [...coreComposableNames, ...__vite_ssr_import_0__.composableNames]
};


Object.defineProperty(__vite_ssr_exports__, "Vue2ProvideUnheadPlugin", { enumerable: true, configurable: true, get(){ return Vue2ProvideUnheadPlugin }});
Object.defineProperty(__vite_ssr_exports__, "VueHeadMixin", { enumerable: true, configurable: true, get(){ return VueHeadMixin }});
Object.defineProperty(__vite_ssr_exports__, "headSymbol", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.h }});
Object.defineProperty(__vite_ssr_exports__, "resolveUnrefHeadInput", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.r }});
Object.defineProperty(__vite_ssr_exports__, "unheadVueComposablesImports", { enumerable: true, configurable: true, get(){ return unheadVueComposablesImports }});
Object.defineProperty(__vite_ssr_exports__, "useBodyAttrs", { enumerable: true, configurable: true, get(){ return useBodyAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.u }});
Object.defineProperty(__vite_ssr_exports__, "useHeadSafe", { enumerable: true, configurable: true, get(){ return useHeadSafe }});
Object.defineProperty(__vite_ssr_exports__, "useHtmlAttrs", { enumerable: true, configurable: true, get(){ return useHtmlAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useSeoMeta", { enumerable: true, configurable: true, get(){ return useSeoMeta }});
Object.defineProperty(__vite_ssr_exports__, "useServerBodyAttrs", { enumerable: true, configurable: true, get(){ return useServerBodyAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useServerHead", { enumerable: true, configurable: true, get(){ return useServerHead }});
Object.defineProperty(__vite_ssr_exports__, "useServerHeadSafe", { enumerable: true, configurable: true, get(){ return useServerHeadSafe }});
Object.defineProperty(__vite_ssr_exports__, "useServerHtmlAttrs", { enumerable: true, configurable: true, get(){ return useServerHtmlAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useServerSeoMeta", { enumerable: true, configurable: true, get(){ return useServerSeoMeta }});
Object.defineProperty(__vite_ssr_exports__, "useServerTagBase", { enumerable: true, configurable: true, get(){ return useServerTagBase }});
Object.defineProperty(__vite_ssr_exports__, "useServerTagLink", { enumerable: true, configurable: true, get(){ return useServerTagLink }});
Object.defineProperty(__vite_ssr_exports__, "useServerTagMeta", { enumerable: true, configurable: true, get(){ return useServerTagMeta }});
Object.defineProperty(__vite_ssr_exports__, "useServerTagMetaFlat", { enumerable: true, configurable: true, get(){ return useServerTagMetaFlat }});
Object.defineProperty(__vite_ssr_exports__, "useServerTagNoscript", { enumerable: true, configurable: true, get(){ return useServerTagNoscript }});
Object.defineProperty(__vite_ssr_exports__, "useServerTagScript", { enumerable: true, configurable: true, get(){ return useServerTagScript }});
Object.defineProperty(__vite_ssr_exports__, "useServerTagStyle", { enumerable: true, configurable: true, get(){ return useServerTagStyle }});
Object.defineProperty(__vite_ssr_exports__, "useServerTagTitle", { enumerable: true, configurable: true, get(){ return useServerTagTitle }});
Object.defineProperty(__vite_ssr_exports__, "useServerTitleTemplate", { enumerable: true, configurable: true, get(){ return useServerTitleTemplate }});
Object.defineProperty(__vite_ssr_exports__, "useTagBase", { enumerable: true, configurable: true, get(){ return useTagBase }});
Object.defineProperty(__vite_ssr_exports__, "useTagLink", { enumerable: true, configurable: true, get(){ return useTagLink }});
Object.defineProperty(__vite_ssr_exports__, "useTagMeta", { enumerable: true, configurable: true, get(){ return useTagMeta }});
Object.defineProperty(__vite_ssr_exports__, "useTagMetaFlat", { enumerable: true, configurable: true, get(){ return useTagMetaFlat }});
Object.defineProperty(__vite_ssr_exports__, "useTagNoscript", { enumerable: true, configurable: true, get(){ return useTagNoscript }});
Object.defineProperty(__vite_ssr_exports__, "useTagScript", { enumerable: true, configurable: true, get(){ return useTagScript }});
Object.defineProperty(__vite_ssr_exports__, "useTagStyle", { enumerable: true, configurable: true, get(){ return useTagStyle }});
Object.defineProperty(__vite_ssr_exports__, "useTagTitle", { enumerable: true, configurable: true, get(){ return useTagTitle }});
Object.defineProperty(__vite_ssr_exports__, "useTitleTemplate", { enumerable: true, configurable: true, get(){ return useTitleTemplate }});
;
}


// --------------------
// Request: unhead
// Parents: 
// - /node_modules/@unhead/vue/dist/index.mjs ($id_gagBM5c1XT)
// - /node_modules/@unhead/vue/dist/shared/vue.505b826e.mjs ($id_QMoeI2mV4r)
// Dependencies: 

// --------------------
const $id_yJrok2P1Ph = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("unhead")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"unhead\".")
  })


// --------------------
// Request: /node_modules/@unhead/vue/dist/shared/vue.505b826e.mjs
// Parents: 
// - /node_modules/@unhead/vue/dist/index.mjs ($id_gagBM5c1XT)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - unhead ($id_8ZBh4L155h)
// - @unhead/shared ($id_yCC4ZXEOmJ)
// --------------------
const $id_7wibDrW982 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("unhead");
const __vite_ssr_import_2__ = await __vite_ssr_import__("@unhead/shared");




function resolveUnref(r) {
  return typeof r === "function" ? r() : __vite_ssr_import_0__.unref(r);
}
function resolveUnrefHeadInput(ref, lastKey = "") {
  if (ref instanceof Promise)
    return ref;
  const root = resolveUnref(ref);
  if (!ref || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, __vite_ssr_import_0__.unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}

const Vue3 = __vite_ssr_import_0__.version.startsWith("3");
const IsBrowser = "undefined" !== "undefined";

const headSymbol = "usehead";
function injectHead() {
  return __vite_ssr_import_0__.getCurrentInstance() && __vite_ssr_import_0__.inject(headSymbol) || __vite_ssr_import_1__.getActiveHead();
}
function vueInstall(head) {
  const plugin = {
    install(app) {
      if (Vue3) {
        app.config.globalProperties.$unhead = head;
        app.config.globalProperties.$head = head;
        app.provide(headSymbol, head);
      }
    }
  };
  return plugin.install;
}
function createServerHead(options = {}) {
  const head = __vite_ssr_import_1__.createServerHead({
    ...options,
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...options?.plugins || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}
function createHead(options = {}) {
  const head = __vite_ssr_import_1__.createHead({
    ...options,
    // arbitrary delay the dom update for batch updates
    domDelayFn: (fn) => setTimeout(() => __vite_ssr_import_0__.nextTick(() => fn()), 10),
    plugins: [
      VueReactiveUseHeadPlugin(),
      ...options?.plugins || []
    ]
  });
  head.install = vueInstall(head);
  return head;
}

function VueReactiveUseHeadPlugin() {
  return __vite_ssr_import_2__.defineHeadPlugin({
    hooks: {
      "entries:resolve": function(ctx) {
        for (const entry of ctx.entries)
          entry.resolvedInput = resolveUnrefHeadInput(entry.input);
      }
    }
  });
}

function clientUseHead(input, options = {}) {
  const head = injectHead();
  const deactivated = __vite_ssr_import_0__.ref(false);
  const resolvedInput = __vite_ssr_import_0__.ref({});
  __vite_ssr_import_0__.watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry = head.push(resolvedInput.value, options);
  __vite_ssr_import_0__.watch(resolvedInput, (e) => {
    entry.patch(e);
  });
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (vm) {
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      entry.dispose();
    });
    __vite_ssr_import_0__.onDeactivated(() => {
      deactivated.value = true;
    });
    __vite_ssr_import_0__.onActivated(() => {
      deactivated.value = false;
    });
  }
  return entry;
}

function serverUseHead(input, options = {}) {
  const head = injectHead();
  return head.push(input, options);
}

function useHead(input, options = {}) {
  const head = injectHead();
  if (head) {
    const isBrowser = IsBrowser || !!head.resolvedOptions?.document;
    if (options.mode === "server" && isBrowser || options.mode === "client" && !isBrowser)
      return;
    return isBrowser ? clientUseHead(input, options) : serverUseHead(input, options);
  }
}


Object.defineProperty(__vite_ssr_exports__, "V", { enumerable: true, configurable: true, get(){ return VueReactiveUseHeadPlugin }});
Object.defineProperty(__vite_ssr_exports__, "a", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "c", { enumerable: true, configurable: true, get(){ return createServerHead }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return headSymbol }});
Object.defineProperty(__vite_ssr_exports__, "i", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "r", { enumerable: true, configurable: true, get(){ return resolveUnrefHeadInput }});
Object.defineProperty(__vite_ssr_exports__, "s", { enumerable: true, configurable: true, get(){ return serverUseHead }});
Object.defineProperty(__vite_ssr_exports__, "u", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: @unhead/shared
// Parents: 
// - /node_modules/@unhead/vue/dist/shared/vue.505b826e.mjs ($id_QMoeI2mV4r)
// - /node_modules/@unhead/vue/dist/index.mjs ($id_gagBM5c1XT)
// Dependencies: 

// --------------------
const $id_M2Iohz6Ehq = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@unhead/shared")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@unhead/shared\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/component.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/@unhead/vue/dist/index.mjs ($id_gagBM5c1XT)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/app/composables/asyncData.js ($id_W1ji9MdLhE)
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// - /node_modules/nuxt/dist/app/composables/error.js ($id_2FidUTdZvd)
// --------------------
const $id_kCJDZe9gID = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@unhead/vue/dist/index.mjs");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.js");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.js");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.js");






const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_4__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data, error } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => nuxtApp.runWithContext(() => fn(nuxtApp)));
  if (error.value) {
    throw __vite_ssr_import_5__.createError(error.value);
  }
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData && !options.head) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
      const res = setup ? Promise.resolve(nuxtApp.runWithContext(() => setup(props, ctx))).then((r) => r || {}) : {};
      const promises = [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      if (options.head) {
        const nuxtApp2 = __vite_ssr_import_2__.useNuxtApp();
        __vite_ssr_import_1__.useHead(typeof options.head === "function" ? () => options.head(nuxtApp2) : options.head);
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/asyncData.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/component.js ($id_EFEW5YJRwR)
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// - /node_modules/nuxt/dist/app/composables/fetch.js ($id_ynUirX8S5z)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/app/composables/error.js ($id_2FidUTdZvd)
// - /node_modules/nuxt/dist/app/composables/ready.js ($id_i9E38ZUuqG)
// --------------------
const $id_KOty97QEcE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ready.js");




const getDefault = () => null;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = options.server ?? true;
  options.default = options.default ?? getDefault;
  options.lazy = options.lazy ?? false;
  options.immediate = options.immediate ?? true;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: __vite_ssr_import_0__.ref(getCachedData() ?? options.default()),
      pending: __vite_ssr_import_0__.ref(!hasCachedData()),
      error: __vite_ssr_import_0__.toRef(nuxt.payload._errors, key)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxt.isHydrating && opts._initial !== false) && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = __vite_ssr_import_2__.createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (__vite_ssr_import_0__.getCurrentInstance()) {
      __vite_ssr_import_0__.onServerPrefetch(() => promise);
    } else {
      nuxt.hook("app:created", () => promise);
    }
  }
  if (false) {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (instance && !instance._nuxtOnBeforeMountCbs) {
      instance._nuxtOnBeforeMountCbs = [];
      const cbs = instance._nuxtOnBeforeMountCbs;
      if (instance) {
        __vite_ssr_import_0__.onBeforeMount(() => {
          cbs.forEach((cb) => {
            cb();
          });
          cbs.splice(0, cbs.length);
        });
        __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
      }
    }
    if (fetchOnServer && nuxt.isHydrating && hasCachedData()) {
      asyncData.pending.value = false;
    } else if (instance && (nuxt.payload.serverRendered && nuxt.isHydrating || options.lazy) && options.immediate) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else if (options.immediate) {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [key, handler, options] = args;
  return useAsyncData(key, handler, { ...options, lazy: true }, null);
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function useNuxtData(key) {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  if (!(key in nuxt.payload.data)) {
    nuxt.payload.data[key] = null;
  }
  return {
    data: __vite_ssr_import_0__.toRef(nuxt.payload.data, key)
  };
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtData", { enumerable: true, configurable: true, get(){ return useNuxtData }});
async function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  await new Promise((resolve) => __vite_ssr_import_3__.onNuxtReady(resolve));
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  await __vite_ssr_import_1__.useNuxtApp().hooks.callHookParallel("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function clearNuxtData(keys) {
  const nuxtApp = __vite_ssr_import_1__.useNuxtApp();
  const _allKeys = Object.keys(nuxtApp.payload.data);
  const _keys = !keys ? _allKeys : typeof keys === "function" ? _allKeys.filter(keys) : Array.isArray(keys) ? keys : [keys];
  for (const key of _keys) {
    if (key in nuxtApp.payload.data) {
      nuxtApp.payload.data[key] = void 0;
    }
    if (key in nuxtApp.payload._errors) {
      nuxtApp.payload._errors[key] = void 0;
    }
    if (nuxtApp._asyncData[key]) {
      nuxtApp._asyncData[key].data.value = void 0;
      nuxtApp._asyncData[key].error.value = void 0;
      nuxtApp._asyncData[key].pending.value = false;
    }
    if (key in nuxtApp._asyncDataPromises) {
      nuxtApp._asyncDataPromises[key] = void 0;
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "clearNuxtData", { enumerable: true, configurable: true, get(){ return clearNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/error.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.js ($id_W1ji9MdLhE)
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// - /node_modules/nuxt/dist/app/composables/component.js ($id_EFEW5YJRwR)
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// - /node_modules/nuxt/dist/app/plugins/revive-payload.server.js ($id_yG8IOAoySn)
// - /node_modules/nuxt/dist/pages/runtime/plugins/router.js ($id_D3QvO0DhQh)
// - /node_modules/nuxt/dist/pages/runtime/validate.js ($id_z9WcQnu6O4)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/island-renderer.js ($id_J7KWDNzYhZ)
// Dependencies: 
// - h3 ($id_ltfhTi4n2w)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// --------------------
const $id_mwfduYDqmR = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("h3");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.js");




const useError = () => __vite_ssr_import_1__.toRef(__vite_ssr_import_2__.useNuxtApp().payload, "error");
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    const error = useError();
    if (false) {
      nuxtApp.hooks.callHook("app:error", err);
    }
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "showError", { enumerable: true, configurable: true, get(){ return showError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await __vite_ssr_import_3__.useRouter().replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
Object.defineProperty(__vite_ssr_exports__, "isNuxtError", { enumerable: true, configurable: true, get(){ return isNuxtError }});
const createError = (err) => {
  const _err = __vite_ssr_import_0__.createError(err);
  _err.__nuxt_error = true;
  return _err;
};
Object.defineProperty(__vite_ssr_exports__, "createError", { enumerable: true, configurable: true, get(){ return createError }});
;
}


// --------------------
// Request: h3
// Parents: 
// - /node_modules/nuxt/dist/app/composables/error.js ($id_2FidUTdZvd)
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// - /node_modules/nuxt/dist/app/composables/ssr.js ($id_0hXVMeuliO)
// - /node_modules/nuxt/dist/app/composables/cookie.js ($id_yWSXoj2tZ1)
// - /node_modules/nuxt/dist/app/composables/url.js ($id_5ORK2SA042)
// - /node_modules/nuxt/dist/pages/runtime/plugins/router.js ($id_D3QvO0DhQh)
// Dependencies: 

// --------------------
const $id_K2PnHEPz0m = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("h3")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"h3\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/router.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/error.js ($id_2FidUTdZvd)
// - /node_modules/nuxt/dist/app/composables/component.js ($id_EFEW5YJRwR)
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// - /node_modules/nuxt/dist/app/composables/preload.js ($id_0cWPY5ardo)
// - /node_modules/nuxt/dist/app/components/nuxt-link.js ($id_g9hqu8HOHe)
// - /node_modules/nuxt/dist/pages/runtime/plugins/router.js ($id_D3QvO0DhQh)
// - /node_modules/nuxt/dist/pages/runtime/validate.js ($id_z9WcQnu6O4)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/layout.js ($id_rl83QbM9u6)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - h3 ($id_ltfhTi4n2w)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/app/composables/error.js ($id_2FidUTdZvd)
// - /node_modules/nuxt/dist/app/composables/state.js ($id_68OSB2SdRF)
// --------------------
const $id_658BkKajvD = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("h3");
const __vite_ssr_import_2__ = await __vite_ssr_import__("ufo");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.js");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.js");






const useRouter = () => {
  return __vite_ssr_import_3__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  if (true && isProcessingMiddleware()) {
    console.warn("[nuxt] Calling `useRoute` within middleware may lead to misleading results. Instead, use the (to, from) arguments passed to the middleware to access the new and old routes.");
  }
  if (__vite_ssr_import_0__.hasInjectionContext()) {
    return __vite_ssr_import_0__.inject("_route", __vite_ssr_import_3__.useNuxtApp()._route);
  }
  return __vite_ssr_import_3__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const onBeforeRouteLeave = (guard) => {
  const unsubscribe = useRouter().beforeEach((to, from, next) => {
    if (to === from) {
      return;
    }
    return guard(to, from, next);
  });
  __vite_ssr_import_0__.onUnmounted(unsubscribe);
};
Object.defineProperty(__vite_ssr_exports__, "onBeforeRouteLeave", { enumerable: true, configurable: true, get(){ return onBeforeRouteLeave }});
const onBeforeRouteUpdate = (guard) => {
  const unsubscribe = useRouter().beforeEach(guard);
  __vite_ssr_import_0__.onUnmounted(unsubscribe);
};
Object.defineProperty(__vite_ssr_exports__, "onBeforeRouteUpdate", { enumerable: true, configurable: true, get(){ return onBeforeRouteUpdate }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
  const global = options.global || typeof name !== "string";
  const mw = typeof name !== "string" ? name : middleware;
  if (!mw) {
    console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", name);
    return;
  }
  if (global) {
    nuxtApp._middleware.global.push(mw);
  } else {
    nuxtApp._middleware.named[name] = mw;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_3__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : to.path || "/";
  const isExternal = options?.external || __vite_ssr_import_2__.hasProtocol(toPath, { acceptRelative: true });
  if (isExternal && !options?.external) {
    throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
  }
  if (isExternal && __vite_ssr_import_2__.parseURL(toPath).protocol === "script:") {
    throw new Error("Cannot navigate to an URL with script protocol.");
  }
  const inMiddleware = isProcessingMiddleware();
  if (false && !isExternal && inMiddleware) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : __vite_ssr_import_2__.joinURL(/* #__PURE__ */ __vite_ssr_import_3__.useRuntimeConfig().app.baseURL, fullPath);
      async function redirect() {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: __vite_ssr_import_1__.sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return inMiddleware ? (
          /* abort route navigation */
          false
        ) : void 0;
      }
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect() : void 0);
        return to;
      }
      return redirect();
    }
  }
  if (isExternal) {
    if (options?.replace) {
      location.replace(toPath);
    } else {
      location.href = toPath;
    }
    return Promise.resolve();
  }
  return options?.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (!err) {
    return false;
  }
  err = __vite_ssr_import_4__.createError(err);
  if (err.fatal) {
    __vite_ssr_import_3__.useNuxtApp().runWithContext(() => __vite_ssr_import_4__.showError(err));
  }
  throw err;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
const setPageLayout = (layout) => {
  if (true) {
    if (true && __vite_ssr_import_0__.getCurrentInstance() && __vite_ssr_import_5__.useState("_layout").value !== layout) {
      console.warn("[warn] [nuxt] `setPageLayout` should not be called to change the layout on the server within a component as this will cause hydration errors.");
    }
    __vite_ssr_import_5__.useState("_layout").value = layout;
  }
  const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
  if (true && nuxtApp.isHydrating && nuxtApp.payload.serverRendered && __vite_ssr_import_5__.useState("_layout").value !== layout) {
    console.warn("[warn] [nuxt] `setPageLayout` should not be called to change the layout during hydration as this will cause hydration errors.");
  }
  const inMiddleware = isProcessingMiddleware();
  if (inMiddleware || true || nuxtApp.isHydrating) {
    const unsubscribe = useRouter().beforeResolve((to) => {
      to.meta.layout = layout;
      unsubscribe();
    });
  }
  if (!inMiddleware) {
    useRoute().meta.layout = layout;
  }
};
Object.defineProperty(__vite_ssr_exports__, "setPageLayout", { enumerable: true, configurable: true, get(){ return setPageLayout }});
;
}


// --------------------
// Request: ufo
// Parents: 
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// - /node_modules/nuxt/dist/app/composables/payload.js ($id_mAQaWvWD5Y)
// - /node_modules/nuxt/dist/app/composables/url.js ($id_5ORK2SA042)
// - /node_modules/nuxt/dist/app/components/nuxt-link.js ($id_g9hqu8HOHe)
// - /node_modules/nuxt/dist/pages/runtime/plugins/router.js ($id_D3QvO0DhQh)
// - /node_modules/nuxt/dist/app/components/test-component-wrapper.js ($id_QKyW9deWPQ)
// Dependencies: 

// --------------------
const $id_KJr7LehhrL = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ufo")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ufo\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/state.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// - /node_modules/nuxt/dist/pages/runtime/plugins/router.js ($id_D3QvO0DhQh)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// --------------------
const $id_U9DcvmA1To = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");


function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = "$s" + _key;
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ready.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/asyncData.js ($id_W1ji9MdLhE)
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.js ($id_g9hqu8HOHe)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/app/compat/idle-callback.js ($id_tZJHAv8Xy8)
// --------------------
const $id_F8E7JfWS3k = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/idle-callback.js");


const onNuxtReady = (callback) => {
  if (true) {
    return;
  }
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  if (nuxtApp.isHydrating) {
    nuxtApp.hooks.hookOnce("app:suspense:resolve", () => {
      __vite_ssr_import_1__.requestIdleCallback(callback);
    });
  } else {
    __vite_ssr_import_1__.requestIdleCallback(callback);
  }
};
Object.defineProperty(__vite_ssr_exports__, "onNuxtReady", { enumerable: true, configurable: true, get(){ return onNuxtReady }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/compat/idle-callback.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/ready.js ($id_i9E38ZUuqG)
// - /node_modules/nuxt/dist/app/components/nuxt-link.js ($id_g9hqu8HOHe)
// Dependencies: 

// --------------------
const $id_NEHaRet5Qt = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const requestIdleCallback = true ? () => {
} : globalThis.requestIdleCallback || ((cb) => {
  const start = Date.now();
  const idleDeadline = {
    didTimeout: false,
    timeRemaining: () => Math.max(0, 50 - (Date.now() - start))
  };
  return setTimeout(() => {
    cb(idleDeadline);
  }, 1);
});
Object.defineProperty(__vite_ssr_exports__, "requestIdleCallback", { enumerable: true, configurable: true, get(){ return requestIdleCallback }});
const cancelIdleCallback = true ? () => {
} : globalThis.cancelIdleCallback || ((id) => {
  clearTimeout(id);
});
Object.defineProperty(__vite_ssr_exports__, "cancelIdleCallback", { enumerable: true, configurable: true, get(){ return cancelIdleCallback }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/hydrate.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// --------------------
const $id_DYWusgJ62C = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/fetch.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - ohash ($id_yEY2As6gE7)
// - /node_modules/nuxt/dist/app/composables/ssr.js ($id_0hXVMeuliO)
// - /node_modules/nuxt/dist/app/composables/asyncData.js ($id_W1ji9MdLhE)
// --------------------
const $id_jpN9dMhHA6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("ohash");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/asyncData.js");




function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || __vite_ssr_import_1__.hash([autoKey, __vite_ssr_import_0__.unref(opts.baseURL), typeof request === "string" ? request : "", __vite_ssr_import_0__.unref(opts.params || opts.query)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = __vite_ssr_import_0__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_0__.unref(r);
  });
  if (!opts.baseURL && typeof _request.value === "string" && _request.value.startsWith("//")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = __vite_ssr_import_0__.reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = __vite_ssr_import_3__.useAsyncData(key, () => {
    controller?.abort?.();
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const isLocalFetch = typeof _request.value === "string" && _request.value.startsWith("/");
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (true && !opts.$fetch && isLocalFetch) {
      _$fetch = __vite_ssr_import_2__.useRequestFetch();
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, arg1, arg2) {
  const [opts, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  return useFetch(
    request,
    {
      ...opts,
      lazy: true
    },
    // @ts-expect-error we pass an extra argument with the resolved auto-key to prevent another from being injected
    autoKey
  );
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: ohash
// Parents: 
// - /node_modules/nuxt/dist/app/composables/fetch.js ($id_ynUirX8S5z)
// - /node_modules/nuxt/dist/app/composables/cookie.js ($id_yWSXoj2tZ1)
// Dependencies: 

// --------------------
const $id_ApQSwD9AXx = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("ohash")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"ohash\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/ssr.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/fetch.js ($id_ynUirX8S5z)
// - /node_modules/nuxt/dist/app/composables/cookie.js ($id_yWSXoj2tZ1)
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// - /node_modules/nuxt/dist/app/composables/url.js ($id_5ORK2SA042)
// Dependencies: 
// - h3 ($id_ltfhTi4n2w)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// --------------------
const $id_eQIOnnCkL6 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("h3");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");


function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_1__.useNuxtApp().ssrContext?.event.node.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.map((key) => key.toLowerCase()).filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_1__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
function useRequestFetch() {
  if (false) {
    return globalThis.$fetch;
  }
  const event = __vite_ssr_import_1__.useNuxtApp().ssrContext?.event;
  return event?.$fetch || globalThis.$fetch;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestFetch", { enumerable: true, configurable: true, get(){ return useRequestFetch }});
function setResponseStatus(arg1, arg2, arg3) {
  if (false) {
    return;
  }
  if (arg1 && typeof arg1 !== "number") {
    return __vite_ssr_import_0__.setResponseStatus(arg1, arg2, arg3);
  }
  return __vite_ssr_import_0__.setResponseStatus(useRequestEvent(), arg1, arg2);
}
Object.defineProperty(__vite_ssr_exports__, "setResponseStatus", { enumerable: true, configurable: true, get(){ return setResponseStatus }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/cookie.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - cookie-es ($id_MKm94FqkqC)
// - h3 ($id_ltfhTi4n2w)
// - destr ($id_12yP1cX3Wj)
// - ohash ($id_yEY2As6gE7)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/app/composables/ssr.js ($id_0hXVMeuliO)
// --------------------
const $id_9mr3MbDwwc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("cookie-es");
const __vite_ssr_import_2__ = await __vite_ssr_import__("h3");
const __vite_ssr_import_3__ = await __vite_ssr_import__("destr");
const __vite_ssr_import_4__ = await __vite_ssr_import__("ohash");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.js");







const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts) || {};
  const cookie = __vite_ssr_import_0__.ref(cookies[name] ?? opts.default?.());
  if (false) {
    const callback = () => {
      writeClientCookie(name, cookie.value, opts);
    };
    if (opts.watch) {
      __vite_ssr_import_0__.watch(cookie, callback, { deep: opts.watch !== "shallow" });
    } else {
      callback();
    }
  } else if (true) {
    const nuxtApp = __vite_ssr_import_5__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (!__vite_ssr_import_4__.isEqual(cookie.value, cookies[name])) {
        writeServerCookie(__vite_ssr_import_6__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_6__.useRequestEvent()?.node.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return __vite_ssr_import_2__.setCookie(event, name, value, opts);
    }
    if (__vite_ssr_import_2__.getCookie(event, name) !== void 0) {
      return __vite_ssr_import_2__.deleteCookie(event, name, opts);
    }
  }
}
;
}


// --------------------
// Request: cookie-es
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.js ($id_yWSXoj2tZ1)
// Dependencies: 

// --------------------
const $id_t3HHRMhh7L = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("cookie-es")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"cookie-es\".")
  })


// --------------------
// Request: destr
// Parents: 
// - /node_modules/nuxt/dist/app/composables/cookie.js ($id_yWSXoj2tZ1)
// - /node_modules/nuxt/dist/app/components/utils.js ($id_XcQgbwvARI)
// Dependencies: 

// --------------------
const $id_ZK3lg3ye5b = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("destr")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"destr\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/preload.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// - /node_modules/nuxt/dist/app/components/nuxt-link.js ($id_g9hqu8HOHe)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// --------------------
const $id_jjgKHGQZOv = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.js");


const preloadComponents = async (components) => {
  if (true) {
    return;
  }
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  components = Array.isArray(components) ? components : [components];
  await Promise.all(components.map((name) => _loadAsyncComponent(nuxtApp.vueApp._context.components[name])));
};
Object.defineProperty(__vite_ssr_exports__, "preloadComponents", { enumerable: true, configurable: true, get(){ return preloadComponents }});
const prefetchComponents = (components) => {
  return preloadComponents(components);
};
Object.defineProperty(__vite_ssr_exports__, "prefetchComponents", { enumerable: true, configurable: true, get(){ return prefetchComponents }});
function _loadAsyncComponent(component) {
  if (component?.__asyncLoader && !component.__asyncResolved) {
    return component.__asyncLoader();
  }
}
async function preloadRouteComponents(to, router = __vite_ssr_import_1__.useRouter()) {
  if (true) {
    return;
  }
  const { path, matched } = router.resolve(to);
  if (!matched.length) {
    return;
  }
  if (!router._routePreloaded) {
    router._routePreloaded = /* @__PURE__ */ new Set();
  }
  if (router._routePreloaded.has(path)) {
    return;
  }
  const promises = router._preloadPromises = router._preloadPromises || [];
  if (promises.length > 4) {
    return Promise.all(promises).then(() => preloadRouteComponents(to, router));
  }
  router._routePreloaded.add(path);
  const components = matched.map((component) => component.components?.default).filter((component) => typeof component === "function");
  for (const component of components) {
    const promise = Promise.resolve(component()).catch(() => {
    }).finally(() => promises.splice(promises.indexOf(promise)));
    promises.push(promise);
  }
  await Promise.all(promises);
}
Object.defineProperty(__vite_ssr_exports__, "preloadRouteComponents", { enumerable: true, configurable: true, get(){ return preloadRouteComponents }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/payload.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// - /node_modules/nuxt/dist/app/plugins/revive-payload.server.js ($id_yG8IOAoySn)
// Dependencies: 
// - ufo ($id_Idgm3MW7hZ)
// - devalue ($id_fjgCvoo9Js)
// - /node_modules/@unhead/vue/dist/index.mjs ($id_gagBM5c1XT)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs ($id_DpM3LLuOgA)
// --------------------
const $id_KdrlwRpMka = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("ufo");
const __vite_ssr_import_1__ = await __vite_ssr_import__("devalue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/@unhead/vue/dist/index.mjs");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs");






function loadPayload(url, opts = {}) {
  if (true) {
    return null;
  }
  const payloadURL = _getPayloadURL(url, opts);
  const nuxtApp = __vite_ssr_import_4__.useNuxtApp();
  const cache = nuxtApp._payloadCache = nuxtApp._payloadCache || {};
  if (cache[payloadURL]) {
    return cache[payloadURL];
  }
  cache[payloadURL] = _importPayload(payloadURL).then((payload) => {
    if (!payload) {
      delete cache[payloadURL];
      return null;
    }
    return payload;
  });
  return cache[payloadURL];
}
Object.defineProperty(__vite_ssr_exports__, "loadPayload", { enumerable: true, configurable: true, get(){ return loadPayload }});
function preloadPayload(url, opts = {}) {
  const payloadURL = _getPayloadURL(url, opts);
  __vite_ssr_import_2__.useHead({
    link: [
      { rel: "modulepreload", href: payloadURL }
    ]
  });
}
Object.defineProperty(__vite_ssr_exports__, "preloadPayload", { enumerable: true, configurable: true, get(){ return preloadPayload }});
const extension = __vite_ssr_import_5__.renderJsonPayloads ? "json" : "js";
function _getPayloadURL(url, opts = {}) {
  const u = new URL(url, "http://localhost");
  if (u.search) {
    throw new Error("Payload URL cannot contain search params: " + url);
  }
  if (u.host !== "localhost" || __vite_ssr_import_0__.hasProtocol(u.pathname, { acceptRelative: true })) {
    throw new Error("Payload URL must not include hostname: " + url);
  }
  const hash = opts.hash || (opts.fresh ? Date.now() : "");
  return __vite_ssr_import_0__.joinURL(/* #__PURE__ */ __vite_ssr_import_4__.useRuntimeConfig().app.baseURL, u.pathname, hash ? `_payload.${hash}.${extension}` : `_payload.${extension}`);
}
async function _importPayload(payloadURL) {
  if (true) {
    return null;
  }
  try {
    return __vite_ssr_import_5__.renderJsonPayloads ? parsePayload(await fetch(payloadURL).then((res) => res.text())) : await __vite_ssr_dynamic_import__(
      /* webpackIgnore: true */
      /* @vite-ignore */
      payloadURL
    ).then((r) => r.default || r);
  } catch (err) {
    console.warn("[nuxt] Cannot load payload ", payloadURL, err);
  }
  return null;
}
function isPrerendered() {
  const nuxtApp = __vite_ssr_import_4__.useNuxtApp();
  return !!nuxtApp.payload.prerenderedAt;
}
Object.defineProperty(__vite_ssr_exports__, "isPrerendered", { enumerable: true, configurable: true, get(){ return isPrerendered }});
let payloadCache = null;
async function getNuxtClientPayload() {
  if (true) {
    return;
  }
  if (payloadCache) {
    return payloadCache;
  }
  const el = document.getElementById("__NUXT_DATA__");
  if (!el) {
    return {};
  }
  const inlineData = parsePayload(el.textContent || "");
  const externalData = el.dataset.src ? await _importPayload(el.dataset.src) : void 0;
  payloadCache = {
    ...inlineData,
    ...externalData,
    ...window.__NUXT__
  };
  return payloadCache;
}
Object.defineProperty(__vite_ssr_exports__, "getNuxtClientPayload", { enumerable: true, configurable: true, get(){ return getNuxtClientPayload }});
function parsePayload(payload) {
  return __vite_ssr_import_1__.parse(payload, __vite_ssr_import_4__.useNuxtApp()._payloadRevivers);
}
Object.defineProperty(__vite_ssr_exports__, "parsePayload", { enumerable: true, configurable: true, get(){ return parsePayload }});
function definePayloadReducer(name, reduce) {
  if (true) {
    __vite_ssr_import_4__.useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
Object.defineProperty(__vite_ssr_exports__, "definePayloadReducer", { enumerable: true, configurable: true, get(){ return definePayloadReducer }});
function definePayloadReviver(name, revive) {
  if (true && __vite_ssr_import_3__.getCurrentInstance()) {
    console.warn("[nuxt] [definePayloadReviver] This function must be called in a Nuxt plugin that is `unshift`ed to the beginning of the Nuxt plugins array.");
  }
  if (false) {
    __vite_ssr_import_4__.useNuxtApp()._payloadRevivers[name] = revive;
  }
}
Object.defineProperty(__vite_ssr_exports__, "definePayloadReviver", { enumerable: true, configurable: true, get(){ return definePayloadReviver }});
;
}


// --------------------
// Request: devalue
// Parents: 
// - /node_modules/nuxt/dist/app/composables/payload.js ($id_mAQaWvWD5Y)
// Dependencies: 

// --------------------
const $id_Q1u7ol7AXS = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("devalue")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"devalue\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/composables/payload.js ($id_mAQaWvWD5Y)
// - /node_modules/nuxt/dist/head/runtime/plugins/unhead.js ($id_Qxg1EpMjVq)
// - /node_modules/nuxt/dist/pages/runtime/router.options.js ($id_oOlBa4xK8E)
// - /node_modules/nuxt/dist/pages/runtime/page.js ($id_Gu6Fb8JH8w)
// - /node_modules/nuxt/dist/app/components/layout.js ($id_rl83QbM9u6)
// - /node_modules/nuxt/dist/app/components/test-component-wrapper.js ($id_QKyW9deWPQ)
// - /home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/app/entry.js ($id_Mgv6TUMvKL)
// Dependencies: 

// --------------------
const $id_o2F06jHcbh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const appBaseURL = "/"
Object.defineProperty(__vite_ssr_exports__, "appBaseURL", { enumerable: true, configurable: true, get(){ return appBaseURL }});

const appBuildAssetsDir = "/_nuxt/"
Object.defineProperty(__vite_ssr_exports__, "appBuildAssetsDir", { enumerable: true, configurable: true, get(){ return appBuildAssetsDir }});

const appCdnURL = ""
Object.defineProperty(__vite_ssr_exports__, "appCdnURL", { enumerable: true, configurable: true, get(){ return appCdnURL }});

const appHead = {"meta":[{"name":"viewport","content":"width=device-width, initial-scale=1"},{"charset":"utf-8"}],"link":[],"style":[],"script":[],"noscript":[]}
Object.defineProperty(__vite_ssr_exports__, "appHead", { enumerable: true, configurable: true, get(){ return appHead }});

const appLayoutTransition = false
Object.defineProperty(__vite_ssr_exports__, "appLayoutTransition", { enumerable: true, configurable: true, get(){ return appLayoutTransition }});

const appPageTransition = false
Object.defineProperty(__vite_ssr_exports__, "appPageTransition", { enumerable: true, configurable: true, get(){ return appPageTransition }});

const appKeepalive = false
Object.defineProperty(__vite_ssr_exports__, "appKeepalive", { enumerable: true, configurable: true, get(){ return appKeepalive }});

const appRootId = "__nuxt"
Object.defineProperty(__vite_ssr_exports__, "appRootId", { enumerable: true, configurable: true, get(){ return appRootId }});

const appRootTag = "div"
Object.defineProperty(__vite_ssr_exports__, "appRootTag", { enumerable: true, configurable: true, get(){ return appRootTag }});

const renderJsonPayloads = true
Object.defineProperty(__vite_ssr_exports__, "renderJsonPayloads", { enumerable: true, configurable: true, get(){ return renderJsonPayloads }});

const devPagesDir = "pages"
Object.defineProperty(__vite_ssr_exports__, "devPagesDir", { enumerable: true, configurable: true, get(){ return devPagesDir }});

const devRootDir = "/home/user/projects/1814207-six-cities-simple-3/frontend/project"
Object.defineProperty(__vite_ssr_exports__, "devRootDir", { enumerable: true, configurable: true, get(){ return devRootDir }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/chunk.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// Dependencies: 
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// --------------------
const $id_nI4NP3EukU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");

function reloadNuxtApp(options = {}) {
  if (true) {
    return;
  }
  const path = options.path || window.location.pathname;
  let handledPath = {};
  try {
    handledPath = JSON.parse(sessionStorage.getItem("nuxt:reload") || "{}");
  } catch {
  }
  if (options.force || handledPath?.path !== path || handledPath?.expires < Date.now()) {
    try {
      sessionStorage.setItem("nuxt:reload", JSON.stringify({ path, expires: Date.now() + (options.ttl ?? 1e4) }));
    } catch {
    }
    if (options.persistState) {
      try {
        sessionStorage.setItem("nuxt:reload:state", JSON.stringify({ state: __vite_ssr_import_0__.useNuxtApp().payload.state }));
      } catch {
      }
    }
    if (window.location.pathname !== path) {
      window.location.href = path;
    } else {
      window.location.reload();
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "reloadNuxtApp", { enumerable: true, configurable: true, get(){ return reloadNuxtApp }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/composables/url.js
// Parents: 
// - /node_modules/nuxt/dist/app/composables/index.js ($id_L8HKS4APg8)
// Dependencies: 
// - h3 ($id_ltfhTi4n2w)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/composables/ssr.js ($id_0hXVMeuliO)
// - /node_modules/nuxt/dist/app/index.js ($id_5aoHRxZAK9)
// --------------------
const $id_Oo8AkqgKTk = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("h3");
const __vite_ssr_import_1__ = await __vite_ssr_import__("ufo");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ssr.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.js");




function useRequestURL() {
  if (true) {
    const { baseURL } = /* #__PURE__ */ __vite_ssr_import_3__.useRuntimeConfig().app;
    const url = __vite_ssr_import_0__.getRequestURL(__vite_ssr_import_2__.useRequestEvent());
    url.pathname = __vite_ssr_import_1__.joinURL(baseURL, url.pathname);
    return url;
  }
  return new URL(window.location.href);
}
Object.defineProperty(__vite_ssr_exports__, "useRequestURL", { enumerable: true, configurable: true, get(){ return useRequestURL }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/index.js
// Parents: 
// - /node_modules/nuxt/dist/app/index.js ($id_5aoHRxZAK9)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.js ($id_g9hqu8HOHe)
// --------------------
const $id_ivVk6lCKw3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.js");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-link.js
// Parents: 
// - /node_modules/nuxt/dist/app/components/index.js ($id_M28hAzMvA1)
// - /components/Footer.vue ($id_89jzJWR97X)
// - /components/Header.vue ($id_TihPwxfEDt)
// - /components/HotelsListItem.vue ($id_Ya185VBJTJ)
// - /layouts/users.vue ($id_YWBDzoTZZX)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/composables/preload.js ($id_0cWPY5ardo)
// - /node_modules/nuxt/dist/app/composables/ready.js ($id_i9E38ZUuqG)
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/app/compat/idle-callback.js ($id_tZJHAv8Xy8)
// --------------------
const $id_2kvxX8kFSs = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("ufo");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/preload.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/ready.js");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.js");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/compat/idle-callback.js");







const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function /* #__PURE__ */ defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    const normalizeTrailingSlash = options.trailingSlash === "append" ? __vite_ssr_import_1__.withTrailingSlash : __vite_ssr_import_1__.withoutTrailingSlash;
    if (typeof to === "string") {
      return normalizeTrailingSlash(to, true);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true)
    };
  };
  return /* #__PURE__ */ __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_4__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, { acceptRelative: true });
      });
      const prefetched = __vite_ssr_import_0__.ref(false);
      const el = true ? void 0 : __vite_ssr_import_0__.ref(null);
      const elRef = true ? void 0 : (ref2) => {
        el.value = props.custom ? ref2?.$el?.nextElementSibling : ref2?.$el;
      };
      if (false) {
        checkPropConflicts(props, "prefetch", "noPrefetch");
        const shouldPrefetch = props.prefetch !== false && props.noPrefetch !== true && props.target !== "_blank" && !isSlowConnection();
        if (shouldPrefetch) {
          const nuxtApp = __vite_ssr_import_5__.useNuxtApp();
          let idleId;
          let unobserve = null;
          __vite_ssr_import_0__.onMounted(() => {
            const observer = useObserver();
            __vite_ssr_import_3__.onNuxtReady(() => {
              idleId = __vite_ssr_import_6__.requestIdleCallback(() => {
                if (el?.value?.tagName) {
                  unobserve = observer.observe(el.value, async () => {
                    unobserve?.();
                    unobserve = null;
                    const path = typeof to.value === "string" ? to.value : router.resolve(to.value).fullPath;
                    await Promise.all([
                      nuxtApp.hooks.callHook("link:prefetch", path).catch(() => {
                      }),
                      !isExternal.value && __vite_ssr_import_2__.preloadRouteComponents(to.value, router).catch(() => {
                      })
                    ]);
                    prefetched.value = true;
                  });
                }
              });
            });
          });
          __vite_ssr_import_0__.onBeforeUnmount(() => {
            if (idleId) {
              __vite_ssr_import_6__.cancelIdleCallback(idleId);
            }
            unobserve?.();
            unobserve = null;
          });
        }
      }
      return () => {
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return __vite_ssr_import_0__.h(
            __vite_ssr_import_0__.resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => __vite_ssr_import_4__.navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = __vite_ssr_import_1__.parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return __vite_ssr_import_1__.parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return __vite_ssr_import_0__.h("a", { ref: el, href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = /* #__PURE__ */ defineNuxtLink({ componentName: "NuxtLink" });
function useObserver() {
  if (true) {
    return;
  }
  const nuxtApp = __vite_ssr_import_5__.useNuxtApp();
  if (nuxtApp._observer) {
    return nuxtApp._observer;
  }
  let observer = null;
  const callbacks = /* @__PURE__ */ new Map();
  const observe = (element, callback) => {
    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          const callback2 = callbacks.get(entry.target);
          const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
          if (isVisible && callback2) {
            callback2();
          }
        }
      });
    }
    callbacks.set(element, callback);
    observer.observe(element);
    return () => {
      callbacks.delete(element);
      observer.unobserve(element);
      if (callbacks.size === 0) {
        observer.disconnect();
        observer = null;
      }
    };
  };
  const _observer = nuxtApp._observer = {
    observe
  };
  return _observer;
}
function isSlowConnection() {
  if (true) {
    return;
  }
  const cn = navigator.connection;
  if (cn && (cn.saveData || /2g/.test(cn.effectiveType))) {
    return true;
  }
  return false;
}
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/config.js
// Parents: 
// - /node_modules/nuxt/dist/app/index.js ($id_5aoHRxZAK9)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - klona ($id_nrzGzFPyO6)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /.nuxt/app.config.mjs ($id_w46oQPW65q)
// --------------------
const $id_GVmnzQeYXi = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("klona");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/.nuxt/app.config.mjs");




const _getAppConfig = () => __vite_ssr_import_3__.default;
Object.defineProperty(__vite_ssr_exports__, "_getAppConfig", { enumerable: true, configurable: true, get(){ return _getAppConfig }});
function deepDelete(obj, newObj) {
  for (const key in obj) {
    const val = newObj[key];
    if (!(key in newObj)) {
      delete obj[key];
    }
    if (val !== null && typeof val === "object") {
      deepDelete(obj[key], newObj[key]);
    }
  }
}
function deepAssign(obj, newObj) {
  for (const key in newObj) {
    const val = newObj[key];
    if (val !== null && typeof val === "object") {
      obj[key] = obj[key] || {};
      deepAssign(obj[key], val);
    } else {
      obj[key] = val;
    }
  }
}
function useAppConfig() {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  if (!nuxtApp._appConfig) {
    nuxtApp._appConfig = true ? __vite_ssr_import_1__.klona(__vite_ssr_import_3__.default) : __vite_ssr_import_0__.reactive(__vite_ssr_import_3__.default);
  }
  return nuxtApp._appConfig;
}
Object.defineProperty(__vite_ssr_exports__, "useAppConfig", { enumerable: true, configurable: true, get(){ return useAppConfig }});
function updateAppConfig(appConfig) {
  const _appConfig = useAppConfig();
  deepAssign(_appConfig, appConfig);
}
Object.defineProperty(__vite_ssr_exports__, "updateAppConfig", { enumerable: true, configurable: true, get(){ return updateAppConfig }});
if (true) {
  let applyHMR = function(newConfig) {
    const appConfig = useAppConfig();
    if (newConfig && appConfig) {
      deepAssign(appConfig, newConfig);
      deepDelete(appConfig, newConfig);
    }
  };
  if (__vite_ssr_import_meta__.hot) {
    __vite_ssr_import_meta__.hot.accept((newModule) => {
      const newConfig = newModule?._getAppConfig();
      applyHMR(newConfig);
    });
  }
  if (__vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept("#build/app.config.mjs", () => {
      applyHMR(__vite_ssr_import_3__.default);
    });
  }
}
;
}


// --------------------
// Request: klona
// Parents: 
// - /node_modules/nuxt/dist/app/config.js ($id_zdup3dcG8q)
// Dependencies: 

// --------------------
const $id_MT0DEYp506 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("klona")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"klona\".")
  })


// --------------------
// Request: /.nuxt/app.config.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/config.js ($id_zdup3dcG8q)
// Dependencies: 
// - /node_modules/defu/dist/defu.mjs ($id_16rZclLIWW)
// --------------------
const $id_WyyAnP0gwc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/defu/dist/defu.mjs");



const inlineConfig = {}



__vite_ssr_exports__.default = /* #__PURE__ */ __vite_ssr_import_0__.defuFn(inlineConfig)
;
}


// --------------------
// Request: /node_modules/defu/dist/defu.mjs
// Parents: 
// - /.nuxt/app.config.mjs ($id_w46oQPW65q)
// Dependencies: 

// --------------------
const $id_x2kRxyaSeQ = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"/home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/app/plugins/revive-payload.server.js
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/plugins/server.mjs ($id_tDytp20I18)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/composables/payload.js ($id_mAQaWvWD5Y)
// - /node_modules/nuxt/dist/app/composables/error.js ($id_2FidUTdZvd)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// --------------------
const $id_3nWtAj7hgG = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/payload.js");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");




const reducers = {
  NuxtError: (data) => __vite_ssr_import_2__.isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => __vite_ssr_import_0__.isRef(data) && __vite_ssr_import_0__.isShallow(data) && !data.value && (JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => __vite_ssr_import_0__.isRef(data) && !data.value && (JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => __vite_ssr_import_0__.isRef(data) && __vite_ssr_import_0__.isShallow(data) && data.value,
  ShallowReactive: (data) => __vite_ssr_import_0__.isReactive(data) && __vite_ssr_import_0__.isShallow(data) && __vite_ssr_import_0__.toRaw(data),
  Ref: (data) => __vite_ssr_import_0__.isRef(data) && data.value,
  Reactive: (data) => __vite_ssr_import_0__.isReactive(data) && __vite_ssr_import_0__.toRaw(data)
};
__vite_ssr_exports__.default = /* #__PURE__ */ __vite_ssr_import_3__.defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      __vite_ssr_import_1__.definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/plugins/server.mjs ($id_tDytp20I18)
// Dependencies: 
// - /components/BookmarksButton.vue?nuxt_component=async ($id_QH92TJXINJ)
// - /components/EmptyHotelsList.vue?nuxt_component=async ($id_b7zKcYzK9M)
// - /components/Footer.vue?nuxt_component=async ($id_3pPvvxgHir)
// - /components/FormError.vue?nuxt_component=async ($id_mD3BUML6lP)
// - /components/FormInput.vue?nuxt_component=async ($id_64M04cma2l)
// - /components/FormRatingInput.vue?nuxt_component=async ($id_nqPnL4zLmN)
// - /components/Header.vue?nuxt_component=async ($id_enl7fGcgPL)
// - /components/HostInfo.vue?nuxt_component=async ($id_fwVC1KJOO4)
// - /components/HotelCard.vue?nuxt_component=async ($id_3lWm8cfwpj)
// - /components/HotelGallery.vue?nuxt_component=async ($id_eDZAxE6TVq)
// - /components/HotelGalleryItem.vue?nuxt_component=async ($id_dKUgaAln56)
// - /components/HotelLocationsItem.vue?nuxt_component=async ($id_zvTMM49tu8)
// - /components/HotelRating.vue?nuxt_component=async ($id_XI4rJ0tfdB)
// - /components/HotelReviews.vue?nuxt_component=async ($id_RafQNTXFjA)
// - /components/HotelSortForm.vue?nuxt_component=async ($id_X0cJf5s9Lo)
// - /components/HotelsList.vue?nuxt_component=async ($id_T6N6rvoB6y)
// - /components/HotelsListItem.vue?nuxt_component=async ($id_kMKglbvfwS)
// - /components/HotelsLocations.vue?nuxt_component=async ($id_lqzm2aGpo9)
// - /components/LoadingScreen.vue?nuxt_component=async ($id_GPd7wO4YaT)
// - /components/LocationsMap.vue?nuxt_component=async ($id_1FSjJcMFWY)
// - /components/NearbyHotels.vue?nuxt_component=async ($id_DKKHILtlZ9)
// - /components/PageFooter.vue?nuxt_component=async ($id_X7AlCxR0wl)
// - /components/PropertyItem.vue?nuxt_component=async ($id_Tor5e7UrqM)
// - /components/ReviewForm.vue?nuxt_component=async ($id_eU8qoYeBhU)
// - /components/ReviewsItem.vue?nuxt_component=async ($id_dcrXNeWLFJ)
// - /components/SortOption.vue?nuxt_component=async ($id_M3P8rQYcKD)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// --------------------
const $id_hyVSaGtfGc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/BookmarksButton.vue?nuxt_component=async");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/EmptyHotelsList.vue?nuxt_component=async");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/Footer.vue?nuxt_component=async");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/FormError.vue?nuxt_component=async");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/FormInput.vue?nuxt_component=async");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/FormRatingInput.vue?nuxt_component=async");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/Header.vue?nuxt_component=async");
const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/HostInfo.vue?nuxt_component=async");
const __vite_ssr_import_8__ = await __vite_ssr_import__("/components/HotelCard.vue?nuxt_component=async");
const __vite_ssr_import_9__ = await __vite_ssr_import__("/components/HotelGallery.vue?nuxt_component=async");
const __vite_ssr_import_10__ = await __vite_ssr_import__("/components/HotelGalleryItem.vue?nuxt_component=async");
const __vite_ssr_import_11__ = await __vite_ssr_import__("/components/HotelLocationsItem.vue?nuxt_component=async");
const __vite_ssr_import_12__ = await __vite_ssr_import__("/components/HotelRating.vue?nuxt_component=async");
const __vite_ssr_import_13__ = await __vite_ssr_import__("/components/HotelReviews.vue?nuxt_component=async");
const __vite_ssr_import_14__ = await __vite_ssr_import__("/components/HotelSortForm.vue?nuxt_component=async");
const __vite_ssr_import_15__ = await __vite_ssr_import__("/components/HotelsList.vue?nuxt_component=async");
const __vite_ssr_import_16__ = await __vite_ssr_import__("/components/HotelsListItem.vue?nuxt_component=async");
const __vite_ssr_import_17__ = await __vite_ssr_import__("/components/HotelsLocations.vue?nuxt_component=async");
const __vite_ssr_import_18__ = await __vite_ssr_import__("/components/LoadingScreen.vue?nuxt_component=async");
const __vite_ssr_import_19__ = await __vite_ssr_import__("/components/LocationsMap.vue?nuxt_component=async");
const __vite_ssr_import_20__ = await __vite_ssr_import__("/components/NearbyHotels.vue?nuxt_component=async");
const __vite_ssr_import_21__ = await __vite_ssr_import__("/components/PageFooter.vue?nuxt_component=async");
const __vite_ssr_import_22__ = await __vite_ssr_import__("/components/PropertyItem.vue?nuxt_component=async");
const __vite_ssr_import_23__ = await __vite_ssr_import__("/components/ReviewForm.vue?nuxt_component=async");
const __vite_ssr_import_24__ = await __vite_ssr_import__("/components/ReviewsItem.vue?nuxt_component=async");
const __vite_ssr_import_25__ = await __vite_ssr_import__("/components/SortOption.vue?nuxt_component=async");
const __vite_ssr_import_26__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");



























const lazyGlobalComponents = [
  ["BookmarksButton", __vite_ssr_import_0__.default],
["EmptyHotelsList", __vite_ssr_import_1__.default],
["Footer", __vite_ssr_import_2__.default],
["FormError", __vite_ssr_import_3__.default],
["FormInput", __vite_ssr_import_4__.default],
["FormRatingInput", __vite_ssr_import_5__.default],
["Header", __vite_ssr_import_6__.default],
["HostInfo", __vite_ssr_import_7__.default],
["HotelCard", __vite_ssr_import_8__.default],
["HotelGallery", __vite_ssr_import_9__.default],
["HotelGalleryItem", __vite_ssr_import_10__.default],
["HotelLocationsItem", __vite_ssr_import_11__.default],
["HotelRating", __vite_ssr_import_12__.default],
["HotelReviews", __vite_ssr_import_13__.default],
["HotelSortForm", __vite_ssr_import_14__.default],
["HotelsList", __vite_ssr_import_15__.default],
["HotelsListItem", __vite_ssr_import_16__.default],
["HotelsLocations", __vite_ssr_import_17__.default],
["LoadingScreen", __vite_ssr_import_18__.default],
["LocationsMap", __vite_ssr_import_19__.default],
["NearbyHotels", __vite_ssr_import_20__.default],
["PageFooter", __vite_ssr_import_21__.default],
["PropertyItem", __vite_ssr_import_22__.default],
["ReviewForm", __vite_ssr_import_23__.default],
["ReviewsItem", __vite_ssr_import_24__.default],
["SortOption", __vite_ssr_import_25__.default]
]

__vite_ssr_exports__.default = /* #__PURE__ */ __vite_ssr_import_26__.defineNuxtPlugin({
  name: 'nuxt:global-components',
  setup (nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component)
      nuxtApp.vueApp.component('Lazy' + name, component)
    }
  }
})
;
}


// --------------------
// Request: /components/BookmarksButton.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/BookmarksButton.vue ($id_fXyegQXU9b)
// --------------------
const $id_5VSzW0O35I = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/BookmarksButton.vue").then(r => r.default));
}


// --------------------
// Request: /components/BookmarksButton.vue
// Parents: 
// - /components/BookmarksButton.vue?nuxt_component=async ($id_QH92TJXINJ)
// - /components/HotelsListItem.vue ($id_Ya185VBJTJ)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_G7JuncrBa0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");
const _sfc_main = {}



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({
    class: "place-card__bookmark-button button",
    type: "button"
  }, _attrs))}><svg class="place-card__bookmark-icon" width="18" height="19"><use xlink:href="#icon-bookmark"></use></svg><span class="visually-hidden">To bookmarks</span></button>`)
}



const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/BookmarksButton.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/BookmarksButton.vue"]]);
}


// --------------------
// Request: vue/server-renderer
// Parents: 
// - /components/BookmarksButton.vue ($id_fXyegQXU9b)
// - /components/EmptyHotelsList.vue ($id_JSLzf6HnzA)
// - /components/Footer.vue ($id_89jzJWR97X)
// - /components/FormError.vue ($id_r2G1VHDpCz)
// - /components/FormInput.vue ($id_sNdiJ0oTHU)
// - /components/FormRatingInput.vue ($id_o0v8dWVRYA)
// - /components/Header.vue ($id_TihPwxfEDt)
// - /components/HostInfo.vue ($id_s2f7LRfCsE)
// - /components/HotelRating.vue ($id_934PdLsxKF)
// - /components/HotelCard.vue ($id_pqV02CMxtT)
// - /components/HotelGalleryItem.vue ($id_FcSjIWHFDl)
// - /components/HotelGallery.vue ($id_f5MZ4aVd2u)
// - /components/HotelLocationsItem.vue ($id_bSPqJgKEFP)
// - /components/ReviewsItem.vue ($id_nUZSUjbpRZ)
// - /components/HotelReviews.vue ($id_DWKdjvSAcl)
// - /components/SortOption.vue ($id_wC3lqAOixe)
// - /components/HotelSortForm.vue ($id_AsGlHIpR6R)
// - /components/HotelsListItem.vue ($id_Ya185VBJTJ)
// - /components/HotelsList.vue ($id_UVEumiMazl)
// - /components/HotelsLocations.vue ($id_vxGDSfsmvQ)
// - /components/LoadingScreen.vue ($id_tzlkO9Fweu)
// - /components/LocationsMap.vue ($id_sBJI28Njtu)
// - /components/NearbyHotels.vue ($id_eKQvBvMaGm)
// - /components/PageFooter.vue ($id_Yruyz0fHzU)
// - /components/PropertyItem.vue ($id_shIeN2yOI9)
// - /components/ReviewForm.vue ($id_GUcAwljbvC)
// - /pages/SignIn.vue ($id_BENA1yn67l)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// - /layouts/default.vue ($id_dononVQSck)
// - /layouts/users.vue ($id_YWBDzoTZZX)
// - /app.vue ($id_K0boQqLzfo)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 

// --------------------
const $id_aRHphPzMpI = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("vue/server-renderer")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"vue/server-renderer\".")
  })


// --------------------
// Request: /@id/__x00__plugin-vue:export-helper
// Parents: 
// - /components/BookmarksButton.vue ($id_fXyegQXU9b)
// - /components/EmptyHotelsList.vue ($id_JSLzf6HnzA)
// - /components/Footer.vue ($id_89jzJWR97X)
// - /components/FormError.vue ($id_r2G1VHDpCz)
// - /components/FormInput.vue ($id_sNdiJ0oTHU)
// - /components/FormRatingInput.vue ($id_o0v8dWVRYA)
// - /components/Header.vue ($id_TihPwxfEDt)
// - /components/HostInfo.vue ($id_s2f7LRfCsE)
// - /components/HotelRating.vue ($id_934PdLsxKF)
// - /components/HotelCard.vue ($id_pqV02CMxtT)
// - /components/HotelGalleryItem.vue ($id_FcSjIWHFDl)
// - /components/HotelGallery.vue ($id_f5MZ4aVd2u)
// - /components/HotelLocationsItem.vue ($id_bSPqJgKEFP)
// - /components/ReviewsItem.vue ($id_nUZSUjbpRZ)
// - /components/HotelReviews.vue ($id_DWKdjvSAcl)
// - /components/SortOption.vue ($id_wC3lqAOixe)
// - /components/HotelSortForm.vue ($id_AsGlHIpR6R)
// - /components/HotelsListItem.vue ($id_Ya185VBJTJ)
// - /components/HotelsList.vue ($id_UVEumiMazl)
// - /components/HotelsLocations.vue ($id_vxGDSfsmvQ)
// - /components/LoadingScreen.vue ($id_tzlkO9Fweu)
// - /components/LocationsMap.vue ($id_sBJI28Njtu)
// - /components/NearbyHotels.vue ($id_eKQvBvMaGm)
// - /components/PageFooter.vue ($id_Yruyz0fHzU)
// - /components/PropertyItem.vue ($id_shIeN2yOI9)
// - /components/ReviewForm.vue ($id_GUcAwljbvC)
// - /pages/SignIn.vue ($id_BENA1yn67l)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// - /layouts/default.vue ($id_dononVQSck)
// - /layouts/users.vue ($id_YWBDzoTZZX)
// - /app.vue ($id_K0boQqLzfo)
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 

// --------------------
const $id_mHD6riC5ol = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /components/EmptyHotelsList.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/EmptyHotelsList.vue ($id_JSLzf6HnzA)
// --------------------
const $id_7a1yHqhR7u = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/EmptyHotelsList.vue").then(r => r.default));
}


// --------------------
// Request: /components/EmptyHotelsList.vue
// Parents: 
// - /components/EmptyHotelsList.vue?nuxt_component=async ($id_b7zKcYzK9M)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_dOSY7ZLrZL = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");
const _sfc_main = {}



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "cities" }, _attrs))}><div class="cities__places-container cities__places-container--empty container"><section class="cities__no-places"><div class="cities__status-wrapper tabs__content"><b class="cities__status">No places to stay available</b><p class="cities__status-description">We could not find any property available at the moment in Dusseldorf</p></div></section><div class="cities__right-section"></div></div></div>`)
}



const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/EmptyHotelsList.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/EmptyHotelsList.vue"]]);
}


// --------------------
// Request: /components/Footer.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/Footer.vue ($id_89jzJWR97X)
// --------------------
const $id_0LBKdUEHFL = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/Footer.vue").then(r => r.default));
}


// --------------------
// Request: /components/Footer.vue
// Parents: 
// - /components/Footer.vue?nuxt_component=async ($id_3pPvvxgHir)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.js ($id_g9hqu8HOHe)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_ehziwFEPis = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

const _sfc_main = {}



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<footer${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "footer container" }, _attrs))}>`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "footer__logo-link"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img class="footer__logo" src="/_nuxt/assets/img/logo.svg" alt="6 cities logo" width="64" height="33" data-testid="logo"${_scopeId}>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("img", {
            class: "footer__logo",
            src: "/_nuxt/assets/img/logo.svg",
            alt: "6 cities logo",
            width: "64",
            height: "33",
            "data-testid": "logo"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</footer>`)
}



const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Footer.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/Footer.vue"]]);
}


// --------------------
// Request: /components/FormError.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/FormError.vue ($id_r2G1VHDpCz)
// --------------------
const $id_WnETKkV3Ri = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/FormError.vue").then(r => r.default));
}


// --------------------
// Request: /components/FormError.vue
// Parents: 
// - /components/FormError.vue?nuxt_component=async ($id_mD3BUML6lP)
// - /components/ReviewForm.vue ($id_GUcAwljbvC)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_ZBJUm3CIU9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "FormError",
  props: {
    errorText: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ className: "form-error" }, _attrs))}>${__vite_ssr_import_2__.ssrInterpolate($props.errorText)}</div>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormError.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/FormError.vue"]]);
;
}


// --------------------
// Request: /components/FormInput.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/FormInput.vue ($id_sNdiJ0oTHU)
// --------------------
const $id_7SKHKupkZK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/FormInput.vue").then(r => r.default));
}


// --------------------
// Request: /components/FormInput.vue
// Parents: 
// - /components/FormInput.vue?nuxt_component=async ($id_64M04cma2l)
// - /pages/SignIn.vue ($id_BENA1yn67l)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_CrXpByPqn1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "FormInput",
  props: {
    labelText: { type: String, required: true },
    modelValue: { type: [String, Number], required: true },
    type: { type: String, required: false },
    pattern: { type: String, required: false },
    required: { type: Boolean, required: false },
    placeholder: { type: String, required: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose, emit: emits }) {
    __expose();
    const __returned__ = { emits };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "login__input-wrapper form__input-wrapper" }, _attrs))}><label class="visually-hidden">${__vite_ssr_import_2__.ssrInterpolate($props.labelText)}</label><input class="login__input form__input"${__vite_ssr_import_2__.ssrRenderAttr("type", $props.type || "text")}${__vite_ssr_import_2__.ssrRenderAttr("value", $props.modelValue)}${__vite_ssr_import_2__.ssrRenderAttr("pattern", $props.pattern)}${__vite_ssr_import_2__.ssrIncludeBooleanAttr($props.required) ? " required" : ""}${__vite_ssr_import_2__.ssrRenderAttr("placeholder", $props.placeholder)}></div>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/FormInput.vue"]]);
;
}


// --------------------
// Request: /components/FormRatingInput.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/FormRatingInput.vue ($id_o0v8dWVRYA)
// --------------------
const $id_iZPe96PNEZ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/FormRatingInput.vue").then(r => r.default));
}


// --------------------
// Request: /components/FormRatingInput.vue
// Parents: 
// - /components/FormRatingInput.vue?nuxt_component=async ($id_nqPnL4zLmN)
// - /components/ReviewForm.vue ($id_GUcAwljbvC)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_q9IYJfS5mi = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "FormRatingInput",
  props: {
    value: { type: Number, required: true },
    rating: { type: Number, required: true }
  },
  emits: ["on-rating-change"],
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><input class="form__rating-input visually-hidden" name="rating"${__vite_ssr_import_1__.ssrRenderAttr("value", $props.value)}${__vite_ssr_import_1__.ssrRenderAttr("id", `${$props.value}-stars`)}${__vite_ssr_import_1__.ssrIncludeBooleanAttr($props.rating === $props.value) ? " checked" : ""} type="radio"><label${__vite_ssr_import_1__.ssrRenderAttr("for", `${$props.value}-stars`)} class="reviews__rating-label form__rating-label" title="perfect"><svg class="form__star-image" width="37" height="33"><use xlink:href="#icon-star"></use></svg></label><!--]-->`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FormRatingInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_3__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/FormRatingInput.vue"]]);
;
}


// --------------------
// Request: /components/Header.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/Header.vue ($id_TihPwxfEDt)
// --------------------
const $id_OnRQfyniRb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/Header.vue").then(r => r.default));
}


// --------------------
// Request: /components/Header.vue
// Parents: 
// - /components/Header.vue?nuxt_component=async ($id_enl7fGcgPL)
// - /layouts/default.vue ($id_dononVQSck)
// - /layouts/users.vue ($id_YWBDzoTZZX)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.js ($id_g9hqu8HOHe)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_2XeyhrzP9k = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

const _sfc_main = {}



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<header${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "header" }, _attrs))}><div class="container"><div class="header__wrapper"><div class="header__left">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "header__logo-link header__logo-link--active"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img class="header__logo" src="/_nuxt/assets/img/logo.svg" alt="6 cities logo" width="81" height="41"${_scopeId}>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("img", {
            class: "header__logo",
            src: "/_nuxt/assets/img/logo.svg",
            alt: "6 cities logo",
            width: "81",
            height: "41"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div><nav class="header__nav"><ul class="header__nav-list"><li class="header__nav-item user">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/favorites",
    class: "header__nav-link header__nav-link--profile"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<div class="header__avatar-wrapper user__avatar-wrapper"${
          _scopeId
        }></div><span class="header__user-name user__name"${
          _scopeId
        }>Oliver.conner@gmail.com</span>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("div", { class: "header__avatar-wrapper user__avatar-wrapper" }),
          __vite_ssr_import_1__.createVNode("span", { class: "header__user-name user__name" }, "Oliver.conner@gmail.com")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li><li class="header__nav-item">`)
  _push(__vite_ssr_import_2__.ssrRenderComponent(_component_NuxtLink, {
    to: "/signIn",
    class: "header__nav-link"
  }, {
    default: __vite_ssr_import_1__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<span class="header__signout"${_scopeId}>Sign out</span>`)
      } else {
        return [
          __vite_ssr_import_1__.createVNode("span", { class: "header__signout" }, "Sign out")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</li></ul></nav></div></div></header>`)
}



const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/Header.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/Header.vue"]]);
}


// --------------------
// Request: /components/HostInfo.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/HostInfo.vue ($id_s2f7LRfCsE)
// --------------------
const $id_kT0flZok3e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/HostInfo.vue").then(r => r.default));
}


// --------------------
// Request: /components/HostInfo.vue
// Parents: 
// - /components/HostInfo.vue?nuxt_component=async ($id_fwVC1KJOO4)
// - /components/HotelCard.vue ($id_pqV02CMxtT)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_l5Ul3003Hw = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "HostInfo",
  props: {
    host: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "property__host-user user" }, _attrs))}><div class="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper"><img class="property__avatar user__avatar"${__vite_ssr_import_2__.ssrRenderAttr("src", $props.host.avatarPath)} width="74" height="74" alt="Host avatar"></div><span class="property__user-name">${__vite_ssr_import_2__.ssrInterpolate($props.host.name)}</span>`);
  if ($props.host.isPro) {
    _push(`<span class="property__user-status"> Pro </span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HostInfo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/HostInfo.vue"]]);
;
}


// --------------------
// Request: /components/HotelCard.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/HotelCard.vue ($id_pqV02CMxtT)
// --------------------
const $id_1ZfW2A6I3Y = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/HotelCard.vue").then(r => r.default));
}


// --------------------
// Request: /components/HotelCard.vue
// Parents: 
// - /components/HotelCard.vue?nuxt_component=async ($id_3lWm8cfwpj)
// Dependencies: 
// - /components/HotelRating.vue ($id_934PdLsxKF)
// - /components/HostInfo.vue ($id_s2f7LRfCsE)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_oVPBvfhe0Z = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/HotelRating.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/HostInfo.vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");



const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "HotelCard",
  props: {
    hotel: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_hotel_rating = __vite_ssr_import_0__.default;
  const _component_host_info = __vite_ssr_import_1__.default;
  _push(`<main${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "page__main page__main--property" }, _attrs))}><section class="property"><!-- <hotel-gallery :images="images"></hotel-gallery> --><div class="property__container container"><div class="property__wrapper">`);
  if ($props.hotel.isPremium) {
    _push(`<div class="property__mark"><span>Premium</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="property__name-wrapper"><h1 class="property__name">${__vite_ssr_import_4__.ssrInterpolate($props.hotel.title)}</h1><button class="property__bookmark-button button" type="button"><svg class="property__bookmark-icon" width="31" height="33"><use xlink:href="#icon-bookmark"></use></svg><span class="visually-hidden">To bookmarks</span></button></div><div class="property__rating rating"><div class="property__stars rating__stars">`);
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_hotel_rating, {
    "rating-value": $props.hotel.rating
  }, null, _parent));
  _push(`</div><span class="property__rating-value rating__value">${__vite_ssr_import_4__.ssrInterpolate($props.hotel.rating)}</span></div><ul class="property__features"><li class="property__feature property__feature--entire">${__vite_ssr_import_4__.ssrInterpolate($props.hotel.type)}</li><li class="property__feature property__feature--bedrooms">${__vite_ssr_import_4__.ssrInterpolate($props.hotel.bedrooms)} Bedrooms </li><li class="property__feature property__feature--adults"> Max ${__vite_ssr_import_4__.ssrInterpolate($props.hotel.maxAdults)} adults </li></ul><div class="property__price"><b class="property__price-value">\u20AC${__vite_ssr_import_4__.ssrInterpolate($props.hotel.price)}</b><span class="property__price-text">\xA0night</span></div><div class="property__inside"><h2 class="property__inside-title">What&#39;s inside</h2><ul class="property__inside-list"><!-- <property-item
                v-for="property in hotel.goods"
                :key="property"
                :property="property"
              ></property-item> --></ul></div><div class="property__host"><h2 class="property__host-title">Meet the host</h2>`);
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_host_info, {
    host: $props.hotel.host
  }, null, _parent));
  _push(`<div class="property__description"><p class="property__text">${__vite_ssr_import_4__.ssrInterpolate($props.hotel.description)}</p></div></div><section class="property__reviews reviews"><!-- <hotel-reviews
              v-if="reviews && reviews.length"
              :reviews="reviews"
            ></hotel-reviews>
            <review-form></review-form> --></section></div></div><!-- <section  v-if="nearbyHotels && nearbyHotels.length" class="property__map map">
        <locations-map
          :hotels="nearbyHotels"
          :activeHotel="activeHotel"
        ></locations-map>
      </section> --></section><div class="container"><!-- <nearby-hotels
        v-if="nearbyHotels && nearbyHotels.length"
        :nearbyHotels="nearbyHotels"
        @onHotelHover="setCurrentHotelId($event)"
      ></nearby-hotels> --></div></main>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HotelCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/HotelCard.vue"]]);
;
}


// --------------------
// Request: /components/HotelRating.vue
// Parents: 
// - /components/HotelCard.vue ($id_pqV02CMxtT)
// - /components/HotelRating.vue?nuxt_component=async ($id_XI4rJ0tfdB)
// - /components/ReviewsItem.vue ($id_nUZSUjbpRZ)
// - /components/HotelsListItem.vue ($id_Ya185VBJTJ)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /utils/common.ts ($id_1mSdbJb64q)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_nyRRy5wSKK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/utils/common.ts");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");



const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "HotelRating",
  props: {
    ratingValue: { type: Number, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const rating = __vite_ssr_import_0__.computed(() => props.ratingValue ? __vite_ssr_import_2__.convertRatingToPercent(props.ratingValue) : 0);
    const __returned__ = { props, rating };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><span style="${__vite_ssr_import_3__.ssrRenderStyle({ width: $setup.rating })}"></span><span class="visually-hidden">Rating</span><!--]-->`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HotelRating.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/HotelRating.vue"]]);
;
}


// --------------------
// Request: /utils/common.ts
// Parents: 
// - /components/HotelRating.vue ($id_934PdLsxKF)
// - /components/HotelsList.vue ($id_UVEumiMazl)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - /const/common.ts ($id_LXLjZmZjkm)
// --------------------
const $id_erTj1GTbgX = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/const/common.ts");

const convertSnekeToCamelCase = (data) => JSON.parse(JSON.stringify(data).replace(/(_\w)\w+":/g, (match) => match[1].toUpperCase() + match.substring(2)));
Object.defineProperty(__vite_ssr_exports__, "convertSnekeToCamelCase", { enumerable: true, configurable: true, get(){ return convertSnekeToCamelCase }});
const convertRatingToPercent = (placeRating) => `${Math.round(placeRating) / __vite_ssr_import_0__.MAX_RATING * 100}%`;
Object.defineProperty(__vite_ssr_exports__, "convertRatingToPercent", { enumerable: true, configurable: true, get(){ return convertRatingToPercent }});
const filterHotelsByCity = (city, hotels) => hotels.filter((hotel) => hotel.city.name === city);
Object.defineProperty(__vite_ssr_exports__, "filterHotelsByCity", { enumerable: true, configurable: true, get(){ return filterHotelsByCity }});
const sortHotels = (type, hotels) => {
  switch (type) {
    case __vite_ssr_import_0__.sortOption.PRICE_LOW:
      return hotels.sort((a, b) => a.price - b.price);
    case __vite_ssr_import_0__.sortOption.PRICE_HIGH:
      return hotels.sort((a, b) => b.price - a.price);
    case __vite_ssr_import_0__.sortOption.RATING:
      return hotels.sort((a, b) => b.rating - a.rating);
    default:
      return hotels.sort((a, b) => a.id - b.id);
  }
};
Object.defineProperty(__vite_ssr_exports__, "sortHotels", { enumerable: true, configurable: true, get(){ return sortHotels }});
const getHotelById = (hotels, id) => hotels.find((hotel) => hotel.id === id);
Object.defineProperty(__vite_ssr_exports__, "getHotelById", { enumerable: true, configurable: true, get(){ return getHotelById }});
;
}


// --------------------
// Request: /const/common.ts
// Parents: 
// - /utils/common.ts ($id_1mSdbJb64q)
// - /components/HotelSortForm.vue ($id_AsGlHIpR6R)
// - /components/HotelsListItem.vue ($id_Ya185VBJTJ)
// - /components/HotelsLocations.vue ($id_vxGDSfsmvQ)
// - /components/NearbyHotels.vue ($id_eKQvBvMaGm)
// - /pages/SignIn.vue ($id_BENA1yn67l)
// - /stores/useUserStore.ts ($id_q5kbabqLSb)
// - /states.ts ($id_7V82x31Vcq)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 

// --------------------
const $id_9uTDPTWI8t = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const MAX_RATING = 5;
Object.defineProperty(__vite_ssr_exports__, "MAX_RATING", { enumerable: true, configurable: true, get(){ return MAX_RATING }});
const CITIES = ["Paris", "Cologne", "Brussels", "Amsterdam", "Hamburg", "Dusseldorf"];
Object.defineProperty(__vite_ssr_exports__, "CITIES", { enumerable: true, configurable: true, get(){ return CITIES }});
const DEFAULT_CITY = "Paris";
Object.defineProperty(__vite_ssr_exports__, "DEFAULT_CITY", { enumerable: true, configurable: true, get(){ return DEFAULT_CITY }});
const sortOption = {
  DEFAULT: "Popular",
  PRICE_LOW: "Price: low to high",
  PRICE_HIGH: "Price: high to low",
  RATING: "Top rated first"
};
Object.defineProperty(__vite_ssr_exports__, "sortOption", { enumerable: true, configurable: true, get(){ return sortOption }});
const RATINGS = ["perfect", "good", "not bad", "badly", "terribly"];
Object.defineProperty(__vite_ssr_exports__, "RATINGS", { enumerable: true, configurable: true, get(){ return RATINGS }});
const URL_MARKER_DEFAULT = "~/assets/img/pin.svg";
Object.defineProperty(__vite_ssr_exports__, "URL_MARKER_DEFAULT", { enumerable: true, configurable: true, get(){ return URL_MARKER_DEFAULT }});
const URL_MARKER_CURRENT = "/pin-active.svg";
Object.defineProperty(__vite_ssr_exports__, "URL_MARKER_CURRENT", { enumerable: true, configurable: true, get(){ return URL_MARKER_CURRENT }});
const PlacesListType = {
  NEAR: "NEAR",
  MAIN: "MAIN"
};
Object.defineProperty(__vite_ssr_exports__, "PlacesListType", { enumerable: true, configurable: true, get(){ return PlacesListType }});
const PlacesListClassName = {
  NEAR: "near-places__list ",
  MAIN: "cities__places-list"
};
Object.defineProperty(__vite_ssr_exports__, "PlacesListClassName", { enumerable: true, configurable: true, get(){ return PlacesListClassName }});
const PlaceCardClassName = {
  NEARBY: "near-places__card",
  DEFAULT: "cities__place-card"
};
Object.defineProperty(__vite_ssr_exports__, "PlaceCardClassName", { enumerable: true, configurable: true, get(){ return PlaceCardClassName }});
const AuthorizationStatus = {
  AUTH: "AUTH",
  NO_AUTH: "NO_AUTH",
  UNKNOWN: "UNKNOWN"
};
Object.defineProperty(__vite_ssr_exports__, "AuthorizationStatus", { enumerable: true, configurable: true, get(){ return AuthorizationStatus }});
const ReviewsTextLimit = {
  MAX: 300,
  MIN: 50
};
Object.defineProperty(__vite_ssr_exports__, "ReviewsTextLimit", { enumerable: true, configurable: true, get(){ return ReviewsTextLimit }});
const errorCode = {
  UNAUTORIZED_ERROR_CODE: 401,
  NOT_FOUND: 404
};
Object.defineProperty(__vite_ssr_exports__, "errorCode", { enumerable: true, configurable: true, get(){ return errorCode }});
const ReviewsPostError = {
  UNAUTORIZED: "Login to post a comment",
  COMMON_ERROR: "Error. Please try later"
};
Object.defineProperty(__vite_ssr_exports__, "ReviewsPostError", { enumerable: true, configurable: true, get(){ return ReviewsPostError }});
const BookmarkClass = {
  OFFER_CARD: "property",
  OFFER_LIST: "place-card"
};
Object.defineProperty(__vite_ssr_exports__, "BookmarkClass", { enumerable: true, configurable: true, get(){ return BookmarkClass }});
;
}


// --------------------
// Request: /components/HotelGallery.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/HotelGallery.vue ($id_f5MZ4aVd2u)
// --------------------
const $id_XW2rEmpSyy = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/HotelGallery.vue").then(r => r.default));
}


// --------------------
// Request: /components/HotelGallery.vue
// Parents: 
// - /components/HotelGallery.vue?nuxt_component=async ($id_eDZAxE6TVq)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// Dependencies: 
// - /components/HotelGalleryItem.vue ($id_FcSjIWHFDl)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_020ZEjnHga = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/HotelGalleryItem.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");


const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "HotelGallery",
  props: {
    images: { type: Array, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_hotel_gallery_item = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "property__gallery-container container" }, _attrs))}><div class="property__gallery"><!--[-->`);
  __vite_ssr_import_3__.ssrRenderList($props.images, (image) => {
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_hotel_gallery_item, {
      key: image,
      image
    }, null, _parent));
  });
  _push(`<!--]--></div></div>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HotelGallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/HotelGallery.vue"]]);
;
}


// --------------------
// Request: /components/HotelGalleryItem.vue
// Parents: 
// - /components/HotelGallery.vue ($id_f5MZ4aVd2u)
// - /components/HotelGalleryItem.vue?nuxt_component=async ($id_dKUgaAln56)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_zYSTDT56lt = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "HotelGalleryItem",
  props: {
    image: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "property__image-wrapper" }, _attrs))}><img class="property__image"${__vite_ssr_import_2__.ssrRenderAttr("src", $props.image)} alt="Photo studio"></div>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HotelGalleryItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/HotelGalleryItem.vue"]]);
;
}


// --------------------
// Request: /components/HotelGalleryItem.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/HotelGalleryItem.vue ($id_FcSjIWHFDl)
// --------------------
const $id_GN2TB98WjW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/HotelGalleryItem.vue").then(r => r.default));
}


// --------------------
// Request: /components/HotelLocationsItem.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/HotelLocationsItem.vue ($id_bSPqJgKEFP)
// --------------------
const $id_wCeEhz00C8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/HotelLocationsItem.vue").then(r => r.default));
}


// --------------------
// Request: /components/HotelLocationsItem.vue
// Parents: 
// - /components/HotelLocationsItem.vue?nuxt_component=async ($id_zvTMM49tu8)
// - /components/HotelsLocations.vue ($id_vxGDSfsmvQ)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_yW9bK7plNL = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "HotelLocationsItem",
  props: {
    city: { type: String, required: true },
    currentCity: { type: String, required: true }
  },
  emits: ["current-city-change"],
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "locations__item" }, _attrs))}><a class="${__vite_ssr_import_2__.ssrRenderClass([{ "tabs__item--active": $props.city === $props.currentCity }, "locations__item-link tabs__item"])}"><span>${__vite_ssr_import_2__.ssrInterpolate($props.city)}</span></a></li>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HotelLocationsItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/HotelLocationsItem.vue"]]);
;
}


// --------------------
// Request: /components/HotelRating.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/HotelRating.vue ($id_934PdLsxKF)
// --------------------
const $id_CsQ8EQw4WG = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/HotelRating.vue").then(r => r.default));
}


// --------------------
// Request: /components/HotelReviews.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/HotelReviews.vue ($id_DWKdjvSAcl)
// --------------------
const $id_XxBBDZMjMC = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/HotelReviews.vue").then(r => r.default));
}


// --------------------
// Request: /components/HotelReviews.vue
// Parents: 
// - /components/HotelReviews.vue?nuxt_component=async ($id_RafQNTXFjA)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// Dependencies: 
// - /components/ReviewsItem.vue ($id_nUZSUjbpRZ)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_4q8TxbCdvM = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/ReviewsItem.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");


const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "HotelReviews",
  props: {
    reviews: { type: Array, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_reviews_item = __vite_ssr_import_0__.default;
  _push(`<!--[--><h2 class="reviews__title"> Reviews \xB7 <span class="reviews__amount">${__vite_ssr_import_3__.ssrInterpolate($props.reviews.length)}</span></h2><ul class="reviews__list"><!--[-->`);
  __vite_ssr_import_3__.ssrRenderList($props.reviews, (review) => {
    _push(__vite_ssr_import_3__.ssrRenderComponent(_component_reviews_item, {
      key: `review${review.id}`,
      review
    }, null, _parent));
  });
  _push(`<!--]--></ul><!--]-->`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HotelReviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/HotelReviews.vue"]]);
;
}


// --------------------
// Request: /components/ReviewsItem.vue
// Parents: 
// - /components/HotelReviews.vue ($id_DWKdjvSAcl)
// - /components/ReviewsItem.vue?nuxt_component=async ($id_dcrXNeWLFJ)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/HotelRating.vue ($id_934PdLsxKF)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_PV3KbMBbCe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/HotelRating.vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");


const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "ReviewsItem",
  props: {
    review: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { HotelRating: __vite_ssr_import_1__.default };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "reviews__item" }, _attrs))}><div class="reviews__user user"><div class="reviews__avatar-wrapper user__avatar-wrapper"><img class="reviews__avatar user__avatar"${__vite_ssr_import_3__.ssrRenderAttr("src", $props.review.user.avatarPath)} width="54" height="54" alt="Reviews avatar"></div><span class="reviews__user-name">${__vite_ssr_import_3__.ssrInterpolate($props.review.user.name)}</span></div><div class="reviews__info"><div class="reviews__rating rating"><div class="reviews__stars rating__stars">`);
  _push(__vite_ssr_import_3__.ssrRenderComponent($setup["HotelRating"], {
    ratingValue: $props.review.rating
  }, null, _parent));
  _push(`</div></div><p class="reviews__text">${__vite_ssr_import_3__.ssrInterpolate($props.review.comment)}</p><time class="reviews__time"${__vite_ssr_import_3__.ssrRenderAttr("datetime", $props.review.date.toString())}>${__vite_ssr_import_3__.ssrInterpolate(new Date($props.review.date).toLocaleDateString("en", { month: "long", year: "numeric" }))}</time></div></li>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReviewsItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/ReviewsItem.vue"]]);
;
}


// --------------------
// Request: /components/HotelSortForm.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/HotelSortForm.vue ($id_AsGlHIpR6R)
// --------------------
const $id_xDUtCg51H4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/HotelSortForm.vue").then(r => r.default));
}


// --------------------
// Request: /components/HotelSortForm.vue
// Parents: 
// - /components/HotelSortForm.vue?nuxt_component=async ($id_X0cJf5s9Lo)
// - /components/HotelsList.vue ($id_UVEumiMazl)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/SortOption.vue ($id_wC3lqAOixe)
// - /const/common.ts ($id_LXLjZmZjkm)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_WGzJMKMUeC = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/SortOption.vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/const/common.ts");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");




const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "HotelSortForm",
  props: {
    currentSortType: { type: String, required: true }
  },
  emits: ["sortOptionChange"],
  setup(__props, { expose: __expose, emit: emits }) {
    __expose();
    const sortOptionsIsOpen = __vite_ssr_import_1__.ref(false);
    const toggleSortOptions = () => {
      sortOptionsIsOpen.value = !sortOptionsIsOpen.value;
    };
    const onSortOptionChange = (type) => {
      emits("sortOptionChange", type);
      toggleSortOptions();
    };
    const __returned__ = { emits, sortOptionsIsOpen, toggleSortOptions, onSortOptionChange, SortOption: __vite_ssr_import_2__.default, get sortOption() {
      return __vite_ssr_import_3__.sortOption;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${__vite_ssr_import_5__.ssrRenderAttrs(__vite_ssr_import_4__.mergeProps({
    class: "places__sorting",
    action: "#",
    method: "get"
  }, _attrs))}><span class="places__sorting-caption">Sort by</span><span class="places__sorting-type" tabindex="0">${__vite_ssr_import_5__.ssrInterpolate($props.currentSortType)} <svg class="places__sorting-arrow" width="7" height="4"><use xlink:href="#icon-arrow-select"></use></svg></span><ul class="${__vite_ssr_import_5__.ssrRenderClass([{ "places__options--opened": $setup.sortOptionsIsOpen }, "places__options places__options--custom"])}"><!--[-->`);
  __vite_ssr_import_5__.ssrRenderList($setup.sortOption, (value, name) => {
    _push(__vite_ssr_import_5__.ssrRenderComponent($setup["SortOption"], {
      key: name,
      name,
      currentSortType: $props.currentSortType,
      value,
      onSortOptionChange: ($event) => $setup.onSortOptionChange($event)
    }, null, _parent));
  });
  _push(`<!--]--></ul></form>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_6__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HotelSortForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_7__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/HotelSortForm.vue"]]);
;
}


// --------------------
// Request: /components/SortOption.vue
// Parents: 
// - /components/HotelSortForm.vue ($id_AsGlHIpR6R)
// - /components/SortOption.vue?nuxt_component=async ($id_M3P8rQYcKD)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_6NyFHeqBVY = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "SortOption",
  props: {
    name: { type: String, required: true },
    value: { type: String, required: true },
    currentSortType: { type: String, required: true }
  },
  emits: ["sortOptionChange"],
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({
    class: "places__option places__option--active",
    tabindex: "0"
  }, _attrs))}>${__vite_ssr_import_2__.ssrInterpolate($props.value)}</li>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SortOption.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/SortOption.vue"]]);
;
}


// --------------------
// Request: /components/HotelsList.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/HotelsList.vue ($id_UVEumiMazl)
// --------------------
const $id_QcJtkszsLl = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/HotelsList.vue").then(r => r.default));
}


// --------------------
// Request: /components/HotelsList.vue
// Parents: 
// - /components/HotelsList.vue?nuxt_component=async ($id_T6N6rvoB6y)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - /components/HotelSortForm.vue ($id_AsGlHIpR6R)
// - /components/HotelsListItem.vue ($id_Ya185VBJTJ)
// - vue ($id_VkOCJnUZrn)
// - /utils/common.ts ($id_1mSdbJb64q)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_Va52kUusjm = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/HotelSortForm.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/HotelsListItem.vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/utils/common.ts");
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");





const _sfc_main = /* @__PURE__ */ __vite_ssr_import_3__.defineComponent({
  __name: "HotelsList",
  props: {
    hotels: { type: Array, required: true },
    currentSortType: { type: String, required: true },
    currentCity: { type: String, required: true }
  },
  emits: ["change-sort-option"],
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const currentHotelId = __vite_ssr_import_2__.ref();
    const setCurrentHotelId = (id) => {
      currentHotelId.value = id;
    };
    const activeHotel = __vite_ssr_import_2__.computed(() => __vite_ssr_import_4__.getHotelById(props.hotels, currentHotelId.value) || props.hotels[0]);
    const __returned__ = { props, currentHotelId, setCurrentHotelId, activeHotel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_hotel_sort_form = __vite_ssr_import_0__.default;
  const _component_hotels_list_item = __vite_ssr_import_1__.default;
  _push(`<div${__vite_ssr_import_6__.ssrRenderAttrs(__vite_ssr_import_5__.mergeProps({ class: "cities" }, _attrs))}><div class="cities__places-container container"><section class="cities__places places"><h2 class="visually-hidden">Places</h2><b class="places__found">${__vite_ssr_import_6__.ssrInterpolate($props.hotels?.length)} places to stay in ${__vite_ssr_import_6__.ssrInterpolate($props.currentCity)}</b>`);
  _push(__vite_ssr_import_6__.ssrRenderComponent(_component_hotel_sort_form, {
    currentSortType: $props.currentSortType,
    onSortOptionChange: ($event) => _ctx.$emit("sortOptionChange", $event)
  }, null, _parent));
  _push(`<div class="cities__places-list places__list tabs__content"><!--[-->`);
  __vite_ssr_import_6__.ssrRenderList($props.hotels, (hotel) => {
    _push(__vite_ssr_import_6__.ssrRenderComponent(_component_hotels_list_item, {
      key: `hotel-${hotel.id}`,
      hotel,
      onOnHotelHover: ($event) => $setup.setCurrentHotelId($event)
    }, null, _parent));
  });
  _push(`<!--]--></div></section><div class="cities__right-section"><section class="cities__map map"><!-- <locations-map
            :hotels="hotels"
            :activeHotel="activeHotel"
          ></locations-map> --></section></div></div></div>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HotelsList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_8__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/HotelsList.vue"]]);
;
}


// --------------------
// Request: /components/HotelsListItem.vue
// Parents: 
// - /components/HotelsList.vue ($id_UVEumiMazl)
// - /components/HotelsListItem.vue?nuxt_component=async ($id_kMKglbvfwS)
// - /components/NearbyHotels.vue ($id_eKQvBvMaGm)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.js ($id_g9hqu8HOHe)
// - vue ($id_VkOCJnUZrn)
// - /components/BookmarksButton.vue ($id_fXyegQXU9b)
// - /components/HotelRating.vue ($id_934PdLsxKF)
// - /const/common.ts ($id_LXLjZmZjkm)
// - /const/routes.ts ($id_hMKhdAsTwW)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_dZee0Kdasf = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/BookmarksButton.vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/HotelRating.vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/const/common.ts");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/const/routes.ts");
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_7__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");






const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "HotelsListItem",
  props: {
    hotel: { type: Object, required: true },
    wrapperName: { type: String, required: false }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, BookmarksButton: __vite_ssr_import_2__.default, HotelRating: __vite_ssr_import_3__.default, get PlaceCardClassName() {
      return __vite_ssr_import_4__.PlaceCardClassName;
    }, get AppRoute() {
      return __vite_ssr_import_5__.AppRoute;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default;
  _push(`<article${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({
    class: ["place-card", $props.wrapperName || $setup.PlaceCardClassName.DEFAULT]
  }, _attrs))}>`);
  if ($props.hotel.isPremium) {
    _push(`<div class="place-card__mark"><span>Premium</span></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="cities__image-wrapper place-card__image-wrapper">`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
    to: `${$setup.AppRoute.OFFER}/${$props.hotel.id}`
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${__vite_ssr_import_7__.ssrRenderAttr("src", $props.hotel.previewImage)} class="place-card__image" width="260" height="200" alt="Place image"${_scopeId}>`);
      } else {
        return [
          __vite_ssr_import_6__.createVNode("img", {
            src: $props.hotel.previewImage,
            class: "place-card__image",
            width: "260",
            height: "200",
            alt: "Place image"
          }, null, 8, ["src"])
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</div><div class="place-card__info"><div class="place-card__price-wrapper"><div class="place-card__price"><b class="place-card__price-value">\u20AC${__vite_ssr_import_7__.ssrInterpolate($props.hotel.price)}</b><span class="place-card__price-text">/\xA0night</span></div>`);
  _push(__vite_ssr_import_7__.ssrRenderComponent($setup["BookmarksButton"], null, null, _parent));
  _push(`</div><div class="place-card__rating rating"><div class="place-card__stars rating__stars">`);
  _push(__vite_ssr_import_7__.ssrRenderComponent($setup["HotelRating"], {
    "rating-value": $props.hotel.rating
  }, null, _parent));
  _push(`</div></div><h2 class="place-card__name">`);
  _push(__vite_ssr_import_7__.ssrRenderComponent(_component_NuxtLink, {
    to: `${$setup.AppRoute.OFFER}/${$props.hotel.id}`
  }, {
    default: __vite_ssr_import_6__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${__vite_ssr_import_7__.ssrInterpolate($props.hotel.title)}`);
      } else {
        return [
          __vite_ssr_import_6__.createTextVNode(
            __vite_ssr_import_6__.toDisplayString($props.hotel.title),
            1
            /* TEXT */
          )
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</h2><p class="place-card__type">${__vite_ssr_import_7__.ssrInterpolate($props.hotel.type)}</p></div></article>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HotelsListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_9__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/HotelsListItem.vue"]]);
;
}


// --------------------
// Request: /const/routes.ts
// Parents: 
// - /components/HotelsListItem.vue ($id_Ya185VBJTJ)
// - /components/ReviewForm.vue ($id_GUcAwljbvC)
// - /pages/SignIn.vue ($id_BENA1yn67l)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 

// --------------------
const $id_UVJIUwIeN7 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const APIRoute = {
  OFFERS: "/offers",
  LOGIN: "/users/login",
  LOGOUT: "/logout",
  REVIEWS: "/comments",
  NEARBY: "/nearby",
  FAVORITE: "/favorite"
};
Object.defineProperty(__vite_ssr_exports__, "APIRoute", { enumerable: true, configurable: true, get(){ return APIRoute }});
const BACKEND_URL = "http://localhost:5000";
Object.defineProperty(__vite_ssr_exports__, "BACKEND_URL", { enumerable: true, configurable: true, get(){ return BACKEND_URL }});
const AppRoute = {
  MAIN: "/",
  SIGN_IN: "/login",
  FAVORITES: "/favorites",
  OFFER: "/offer",
  NOT_FOUND: "/404"
};
Object.defineProperty(__vite_ssr_exports__, "AppRoute", { enumerable: true, configurable: true, get(){ return AppRoute }});
;
}


// --------------------
// Request: /components/HotelsListItem.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/HotelsListItem.vue ($id_Ya185VBJTJ)
// --------------------
const $id_q9WG7BbIvP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/HotelsListItem.vue").then(r => r.default));
}


// --------------------
// Request: /components/HotelsLocations.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/HotelsLocations.vue ($id_vxGDSfsmvQ)
// --------------------
const $id_7soUldYSCP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/HotelsLocations.vue").then(r => r.default));
}


// --------------------
// Request: /components/HotelsLocations.vue
// Parents: 
// - /components/HotelsLocations.vue?nuxt_component=async ($id_lqzm2aGpo9)
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - /components/HotelLocationsItem.vue ($id_bSPqJgKEFP)
// - vue ($id_VkOCJnUZrn)
// - /const/common.ts ($id_LXLjZmZjkm)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_GoTODQWTfW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/HotelLocationsItem.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/const/common.ts");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");



const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "HotelsLocations",
  props: {
    currentCity: { type: String, required: true }
  },
  emits: ["current-city-change"],
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get CITIES() {
      return __vite_ssr_import_2__.CITIES;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_hotel_locations_item = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "tabs" }, _attrs))}><section class="locations container"><ul class="locations__list tabs__list"><!--[-->`);
  __vite_ssr_import_4__.ssrRenderList($setup.CITIES, (city) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_hotel_locations_item, {
      key: city,
      city,
      currentCity: $props.currentCity,
      onCurrentCityChange: ($event) => _ctx.$emit("currentCityChange", $event)
    }, null, _parent));
  });
  _push(`<!--]--></ul></section></div>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HotelsLocations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/HotelsLocations.vue"]]);
;
}


// --------------------
// Request: /components/LoadingScreen.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/LoadingScreen.vue ($id_tzlkO9Fweu)
// --------------------
const $id_AnIhda4UHU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/LoadingScreen.vue").then(r => r.default));
}


// --------------------
// Request: /components/LoadingScreen.vue
// Parents: 
// - /components/LoadingScreen.vue?nuxt_component=async ($id_GPd7wO4YaT)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_k38LRDkvX0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");
const _sfc_main = {}



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ className: "page" }, _attrs))}><main className="page__main"><div className="container"><section><h1>Loading ...</h1></section></div></main></div>`)
}



const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/LoadingScreen.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/LoadingScreen.vue"]]);
}


// --------------------
// Request: /components/LocationsMap.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/LocationsMap.vue ($id_sBJI28Njtu)
// --------------------
const $id_OQKxFzFnGc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/LocationsMap.vue").then(r => r.default));
}


// --------------------
// Request: /components/LocationsMap.vue
// Parents: 
// - /components/LocationsMap.vue?nuxt_component=async ($id_1FSjJcMFWY)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_Yoc06nn4US = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");


const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "LocationsMap",
  props: {
    hotels: { type: Array, required: true },
    activeHotel: { type: Object, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const activeItem = __vite_ssr_import_0__.computed(() => props.activeHotel || props.hotels[0]);
    const zoom = __vite_ssr_import_0__.ref(10);
    const __returned__ = { props, activeItem, zoom };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_yandex_map = __vite_ssr_import_2__.resolveComponent("yandex-map");
  const _component_ymap_marker = __vite_ssr_import_2__.resolveComponent("ymap-marker");
  _push(`<!--[-->`);
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_yandex_map, __vite_ssr_import_2__.mergeProps({
    coords: [54, 39],
    class: "map"
  }, _attrs), {
    default: __vite_ssr_import_2__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(__vite_ssr_import_3__.ssrRenderComponent(_component_ymap_marker, {
          markerId: "123",
          "marker-type": "placemark",
          "hint-content": "element.hint",
          coords: [54, 39]
        }, null, _parent2, _scopeId));
      } else {
        return [
          __vite_ssr_import_2__.createVNode(_component_ymap_marker, {
            markerId: "123",
            "marker-type": "placemark",
            "hint-content": "element.hint",
            coords: [54, 39]
          })
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`<!-- {{ activeItem }} --><!-- <l-map
    :useGlobalLeaflet="false"
    :zoom="activeItem.city?.location?.zoom || 20"
    :center="[activeItem.city.location.latitude, activeItem.city.location.longitude]"
  >
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ></l-tile-layer>
    <l-control-layers />
    <l-marker
      v-for="hotel in hotels"
      :key="hotel.id"
      :lat-lng="[hotel.city.location.latitude, hotel.city.location.longitude]"
    >
      <l-icon :icon-url="hotel.id === activeItem.id ? URL_MARKER_CURRENT : URL_MARKER_DEFAULT" />
    </l-marker>
  </l-map> --><!--]-->`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LocationsMap.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_5__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/LocationsMap.vue"]]);
;
}


// --------------------
// Request: /components/NearbyHotels.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/NearbyHotels.vue ($id_eKQvBvMaGm)
// --------------------
const $id_hhRb04z2mh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/NearbyHotels.vue").then(r => r.default));
}


// --------------------
// Request: /components/NearbyHotels.vue
// Parents: 
// - /components/NearbyHotels.vue?nuxt_component=async ($id_DKKHILtlZ9)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// Dependencies: 
// - /components/HotelsListItem.vue ($id_Ya185VBJTJ)
// - vue ($id_VkOCJnUZrn)
// - /const/common.ts ($id_LXLjZmZjkm)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_1lqvgItHft = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/HotelsListItem.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/const/common.ts");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");



const _sfc_main = /* @__PURE__ */ __vite_ssr_import_1__.defineComponent({
  __name: "NearbyHotels",
  props: {
    nearbyHotels: { type: Array, required: true }
  },
  emits: ["on-hotel-hover"],
  setup(__props, { expose: __expose }) {
    __expose();
    const wrapperName = __vite_ssr_import_2__.PlaceCardClassName.NEARBY;
    const __returned__ = { wrapperName };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_hotels_list_item = __vite_ssr_import_0__.default;
  _push(`<section${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "near-places places" }, _attrs))}><h2 class="near-places__title">Other places in the neighbourhood</h2><div class="near-places__list places__list"><!--[-->`);
  __vite_ssr_import_4__.ssrRenderList($props.nearbyHotels, (hotel) => {
    _push(__vite_ssr_import_4__.ssrRenderComponent(_component_hotels_list_item, {
      key: `nearby-${hotel.id}`,
      hotel,
      wrapperName: $setup.wrapperName,
      onOnHotelHover: ($event) => _ctx.$emit("on-hotel-hover", $event)
    }, null, _parent));
  });
  _push(`<!--]--></div></section>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NearbyHotels.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_6__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/NearbyHotels.vue"]]);
;
}


// --------------------
// Request: /components/PageFooter.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/PageFooter.vue ($id_Yruyz0fHzU)
// --------------------
const $id_bPKWkaJx2X = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/PageFooter.vue").then(r => r.default));
}


// --------------------
// Request: /components/PageFooter.vue
// Parents: 
// - /components/PageFooter.vue?nuxt_component=async ($id_X7AlCxR0wl)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_qZu2rCn8u5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");
const _sfc_main = {}



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = __vite_ssr_import_0__.resolveComponent("router-link")

  _push(`<footer${__vite_ssr_import_1__.ssrRenderAttrs(__vite_ssr_import_0__.mergeProps({ class: "footer" }, _attrs))}>`)
  _push(__vite_ssr_import_1__.ssrRenderComponent(_component_router_link, {
    to: {name: 'main'},
    class: "footer__logo-link",
    href: "main.html"
  }, {
    default: __vite_ssr_import_0__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<img class="footer__logo" src="/_nuxt/assets/img/logo.svg" alt="6 cities logo" width="64" height="33"${_scopeId}>`)
      } else {
        return [
          __vite_ssr_import_0__.createVNode("img", {
            class: "footer__logo",
            src: "/_nuxt/assets/img/logo.svg",
            alt: "6 cities logo",
            width: "64",
            height: "33"
          })
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</footer>`)
}



const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_2__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("components/PageFooter.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_3__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/PageFooter.vue"]]);
}


// --------------------
// Request: /components/PropertyItem.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/PropertyItem.vue ($id_shIeN2yOI9)
// --------------------
const $id_JGz0aT5oMM = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/PropertyItem.vue").then(r => r.default));
}


// --------------------
// Request: /components/PropertyItem.vue
// Parents: 
// - /components/PropertyItem.vue?nuxt_component=async ($id_Tor5e7UrqM)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_4od3l8Hrxx = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

const _sfc_main = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  __name: "PropertyItem",
  props: {
    property: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${__vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "property__inside-item" }, _attrs))}>${__vite_ssr_import_2__.ssrInterpolate($props.property)}</li>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PropertyItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_4__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/PropertyItem.vue"]]);
;
}


// --------------------
// Request: /components/ReviewForm.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/ReviewForm.vue ($id_GUcAwljbvC)
// --------------------
const $id_JfzQeyxTvp = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/ReviewForm.vue").then(r => r.default));
}


// --------------------
// Request: /components/ReviewForm.vue
// Parents: 
// - /components/ReviewForm.vue?nuxt_component=async ($id_eU8qoYeBhU)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// Dependencies: 
// - /components/FormRatingInput.vue ($id_o0v8dWVRYA)
// - /components/FormError.vue ($id_r2G1VHDpCz)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.js ($id_5aoHRxZAK9)
// - /const/routes.ts ($id_hMKhdAsTwW)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_0a2hBihrkx = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/FormRatingInput.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/FormError.vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.js");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/const/routes.ts");
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_7__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_8__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");






const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "ReviewForm",
  props: {
    id: { type: String, required: true }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const formData = __vite_ssr_import_2__.reactive({
      comment: "",
      rating: 0,
      offerId: props.id
    });
    const errorMessage = __vite_ssr_import_2__.ref("");
    const handleSubmit = async () => {
      const { data, error } = await __vite_ssr_import_3__.useFetch(`${__vite_ssr_import_5__.BACKEND_URL}${__vite_ssr_import_5__.APIRoute.REVIEWS}`, {
        method: "POST",
        body: formData
      }, '$bo74AKVZP7');
      if (error.value) {
        errorMessage.value = error.value.data.error;
        return;
      }
      formData.comment = "";
      formData.rating = 0;
      errorMessage.value = "";
    };
    const __returned__ = { props, formData, errorMessage, handleSubmit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormRatingInput = __vite_ssr_import_0__.default;
  const _component_FormError = __vite_ssr_import_1__.default;
  _push(`<form${__vite_ssr_import_7__.ssrRenderAttrs(__vite_ssr_import_6__.mergeProps({
    class: "reviews__form form",
    action: "#",
    method: "post"
  }, _attrs))}><label class="reviews__label form__label" for="review">Your review</label><div class="reviews__rating-form form__rating"><!--[-->`);
  __vite_ssr_import_7__.ssrRenderList([5, 4, 3, 2, 1], (item) => {
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_FormRatingInput, {
      key: `rating-input-${item}`,
      value: item,
      rating: $setup.formData.rating,
      onOnRatingChange: ($event) => $setup.formData.rating = $event
    }, null, _parent));
  });
  _push(`<!--]--></div><textarea class="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved">${__vite_ssr_import_7__.ssrInterpolate($setup.formData.comment)}</textarea>`);
  if ($setup.errorMessage) {
    _push(__vite_ssr_import_7__.ssrRenderComponent(_component_FormError, { errorText: $setup.errorMessage }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="reviews__button-wrapper"><p class="reviews__help"> To submit review please make sure to set <span class="reviews__star">rating</span> and describe your stay with at least <b class="reviews__text-amount">50 characters</b>. </p><button class="reviews__submit form__submit button" type="submit"${__vite_ssr_import_7__.ssrIncludeBooleanAttr(!$setup.formData.comment || !$setup.formData.rating) ? " disabled" : ""}> Submit </button></div></form>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_8__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ReviewForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_9__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/components/ReviewForm.vue"]]);
;
}


// --------------------
// Request: /components/ReviewsItem.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/ReviewsItem.vue ($id_nUZSUjbpRZ)
// --------------------
const $id_J45QV9I6jp = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/ReviewsItem.vue").then(r => r.default));
}


// --------------------
// Request: /components/SortOption.vue?nuxt_component=async
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs ($id_ybYZLOyhct)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /components/SortOption.vue ($id_wC3lqAOixe)
// --------------------
const $id_JEZfJCctjs = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/components/SortOption.vue").then(r => r.default));
}


// --------------------
// Request: /node_modules/nuxt/dist/head/runtime/plugins/unhead.js
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/plugins/server.mjs ($id_tDytp20I18)
// Dependencies: 
// - /node_modules/@unhead/vue/dist/index.mjs ($id_gagBM5c1XT)
// - @unhead/ssr ($id_HZ8qoAPBSc)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs ($id_DpM3LLuOgA)
// --------------------
const $id_1I531sGzWn = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@unhead/vue/dist/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("@unhead/ssr");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs");




__vite_ssr_exports__.default = /* #__PURE__ */ __vite_ssr_import_2__.defineNuxtPlugin({
  name: "nuxt:head",
  setup(nuxtApp) {
    const createHead = true ? __vite_ssr_import_0__.createServerHead : __vite_ssr_import_0__.createHead;
    const head = createHead();
    head.push(__vite_ssr_import_3__.appHead);
    nuxtApp.vueApp.use(head);
    if (false) {
      let pauseDOMUpdates = true;
      const unpauseDom = () => {
        pauseDOMUpdates = false;
        head.hooks.callHook("entries:updated", head);
      };
      head.hooks.hook("dom:beforeRender", (context) => {
        context.shouldRender = !pauseDOMUpdates;
      });
      nuxtApp.hooks.hook("page:start", () => {
        pauseDOMUpdates = true;
      });
      nuxtApp.hooks.hook("page:finish", unpauseDom);
      nuxtApp.hooks.hook("app:suspense:resolve", unpauseDom);
    }
    if (true) {
      nuxtApp.ssrContext.renderMeta = async () => {
        const meta = await __vite_ssr_import_1__.renderSSRHead(head);
        return {
          ...meta,
          bodyScriptsPrepend: meta.bodyTagsOpen,
          // resolves naming difference with NuxtMeta and Unhead
          bodyScripts: meta.bodyTags
        };
      };
    }
  }
});
;
}


// --------------------
// Request: @unhead/ssr
// Parents: 
// - /node_modules/nuxt/dist/head/runtime/plugins/unhead.js ($id_Qxg1EpMjVq)
// Dependencies: 

// --------------------
const $id_tKWJCUwI9W = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@unhead/ssr")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@unhead/ssr\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/plugins/router.js
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/plugins/server.mjs ($id_tDytp20I18)
// Dependencies: 
// - unctx ($id_95GsJqysu7)
// - vue ($id_VkOCJnUZrn)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/vue-router.mjs ($id_jfLnGYXxGQ)
// - h3 ($id_ltfhTi4n2w)
// - ufo ($id_Idgm3MW7hZ)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/app/composables/error.js ($id_2FidUTdZvd)
// - /node_modules/nuxt/dist/app/composables/state.js ($id_68OSB2SdRF)
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/routes.mjs ($id_Lpg2BAQXEH)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/router.options.mjs ($id_qzZ15UAyRe)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/middleware.mjs ($id_JVF7LmebzJ)
// --------------------
const $id_zgtilDkNCy = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("unctx");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/vue-router.mjs");
const __vite_ssr_import_3__ = await __vite_ssr_import__("h3");
const __vite_ssr_import_4__ = await __vite_ssr_import__("ufo");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.js");
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/state.js");
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.js");
const __vite_ssr_import_9__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/routes.mjs");
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/router.options.mjs");
const __vite_ssr_import_11__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/middleware.mjs");
/* _processed_nuxt_unctx_transform */











function createCurrentLocation(base, location) {
  const { pathname, search, hash } = location;
  const hashPos = base.indexOf("#");
  if (hashPos > -1) {
    const slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
    let pathFromHash = hash.slice(slicePos);
    if (pathFromHash[0] !== "/") {
      pathFromHash = "/" + pathFromHash;
    }
    return __vite_ssr_import_4__.withoutBase(pathFromHash, "");
  }
  const path = __vite_ssr_import_4__.withoutBase(pathname, base);
  return path + search + hash;
}
const plugin = /* #__PURE__ */ __vite_ssr_import_5__.defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {let __temp, __restore;
    let routerBase = /* #__PURE__ */ __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
    if (__vite_ssr_import_10__.default.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = __vite_ssr_import_10__.default.history?.(routerBase) ?? (false ? __vite_ssr_import_10__.default.hashMode ? __vite_ssr_import_2__.createWebHashHistory(routerBase) : __vite_ssr_import_2__.createWebHistory(routerBase) : __vite_ssr_import_2__.createMemoryHistory(routerBase));
    const routes = __vite_ssr_import_10__.default.routes?.(__vite_ssr_import_9__.default) ?? __vite_ssr_import_9__.default;
    let startPosition;
    const initialURL = true ? nuxtApp.ssrContext.url : createCurrentLocation(routerBase, window.location);
    const router = __vite_ssr_import_2__.createRouter({
      ...__vite_ssr_import_10__.default,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === __vite_ssr_import_2__.START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = __vite_ssr_import_10__.default.scrollBehavior;
        return __vite_ssr_import_10__.default.scrollBehavior?.(to, __vite_ssr_import_2__.START_LOCATION, startPosition || savedPosition);
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = __vite_ssr_import_1__.shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = __vite_ssr_import_1__.shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      if (to.matched[0]?.components?.default === from.matched[0]?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      route[key] = __vite_ssr_import_1__.computed(() => _route.value[key]);
    }
    nuxtApp._route = __vite_ssr_import_1__.reactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    const error = __vite_ssr_import_6__.useError();
    try {
      if (true) {
        ;(([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>router.push(initialURL))),await __temp,__restore());;
      }
      ;(([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>router.isReady())),await __temp,__restore());;
    } catch (error2) {
      ;(([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>nuxtApp.runWithContext(() => __vite_ssr_import_6__.showError(error2)))),await __temp,__restore());;
    }
    const initialLayout = __vite_ssr_import_7__.useState("_layout");
    router.beforeEach(async (to, from) => {
      to.meta = __vite_ssr_import_1__.reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout.value && !__vite_ssr_import_1__.isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout.value;
      }
      nuxtApp._processingMiddleware = true;
      if (false || !nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...__vite_ssr_import_11__.globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          if (Array.isArray(componentMiddleware)) {
            for (const entry of componentMiddleware) {
              middlewareEntries.add(entry);
            }
          } else {
            middlewareEntries.add(componentMiddleware);
          }
        }
        for (const entry of middlewareEntries) {
          const middleware = typeof entry === "string" ? nuxtApp._middleware.named[entry] || await __vite_ssr_import_11__.namedMiddleware[entry]?.().then((r) => r.default || r) : entry;
          if (!middleware) {
            if (true) {
              throw new Error(`Unknown route middleware: '${entry}'. Valid middleware: ${Object.keys(__vite_ssr_import_11__.namedMiddleware).map((mw) => `'${mw}'`).join(", ")}.`);
            }
            throw new Error(`Unknown route middleware: '${entry}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          if (true || !nuxtApp.payload.serverRendered && nuxtApp.isHydrating) {
            if (result === false || result instanceof Error) {
              const error2 = result || __vite_ssr_import_3__.createError({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => __vite_ssr_import_6__.showError(error2));
              return false;
            }
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (false && !nuxtApp.isHydrating && error.value) {
        await nuxtApp.runWithContext(__vite_ssr_import_6__.clearError);
      }
      if (true && failure?.type === 4) {
        return;
      }
      if (to.matched.length === 0 && (!true || !nuxtApp.ssrContext?.islandContext)) {
        await nuxtApp.runWithContext(() => __vite_ssr_import_6__.showError(__vite_ssr_import_3__.createError({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })));
      } else if (true && to.redirectedFrom) {
        await nuxtApp.runWithContext(() => __vite_ssr_import_8__.navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
          force: true
        });
        router.options.scrollBehavior = __vite_ssr_import_10__.default.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => __vite_ssr_import_6__.showError(error2));
      }
    });
    return { provide: { router } };
  }
},1);
__vite_ssr_exports__.default = plugin;
;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/vue-router.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/plugins/router.js ($id_D3QvO0DhQh)
// - /node_modules/nuxt/dist/pages/runtime/page.js ($id_Gu6Fb8JH8w)
// Dependencies: 
// - vue-router ($id_RGqOect6fq)
// --------------------
const $id_T2Y8kUUQMJ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue-router");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: vue-router
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/vue-router.mjs ($id_jfLnGYXxGQ)
// - /node_modules/nuxt/dist/pages/runtime/composables.js ($id_qONe2xcmWo)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/pages.mjs ($id_ciTBBnUKYP)
// - /node_modules/nuxt/dist/app/components/test-component-wrapper.js ($id_QKyW9deWPQ)
// Dependencies: 

// --------------------
const $id_7dT9jx0uwT = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("vue-router")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"vue-router\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/routes.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/plugins/router.js ($id_D3QvO0DhQh)
// Dependencies: 
// - /pages/SignIn.vue?macro=true ($id_Wc9irDZwKO)
// - /pages/index.vue?macro=true ($id_XdcCQB7w7V)
// - /pages/offer/[id].vue?macro=true ($id_SAsQx8MXpS)
// - /pages/SignIn.vue ($id_BENA1yn67l)
// - /pages/index.vue ($id_zKWOlz8EPO)
// - /pages/offer/[id].vue ($id_HFME5CYjq7)
// --------------------
const $id_gjhBvU2abm = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/pages/SignIn.vue?macro=true");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/pages/index.vue?macro=true");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/pages/offer/[id].vue?macro=true");



__vite_ssr_exports__.default = [
  {
    name: __vite_ssr_import_0__.default?.name ?? "SignIn",
    path: __vite_ssr_import_0__.default?.path ?? "/SignIn",
    meta: __vite_ssr_import_0__.default || {},
    alias: __vite_ssr_import_0__.default?.alias || [],
    redirect: __vite_ssr_import_0__.default?.redirect || undefined,
    component: () => __vite_ssr_dynamic_import__("/pages/SignIn.vue").then(m => m.default || m)
  },
  {
    name: __vite_ssr_import_1__.default?.name ?? "index",
    path: __vite_ssr_import_1__.default?.path ?? "/",
    meta: __vite_ssr_import_1__.default || {},
    alias: __vite_ssr_import_1__.default?.alias || [],
    redirect: __vite_ssr_import_1__.default?.redirect || undefined,
    component: () => __vite_ssr_dynamic_import__("/pages/index.vue").then(m => m.default || m)
  },
  {
    name: __vite_ssr_import_2__.default?.name ?? "offer-id",
    path: __vite_ssr_import_2__.default?.path ?? "/offer/:id()",
    meta: __vite_ssr_import_2__.default || {},
    alias: __vite_ssr_import_2__.default?.alias || [],
    redirect: __vite_ssr_import_2__.default?.redirect || undefined,
    component: () => __vite_ssr_dynamic_import__("/pages/offer/[id].vue").then(m => m.default || m)
  }
];
}


// --------------------
// Request: /pages/SignIn.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/routes.mjs ($id_Lpg2BAQXEH)
// Dependencies: 

// --------------------
const $id_oyfkNA25Mc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __nuxt_page_meta = {
      layout: "users"
    }
__vite_ssr_exports__.default = __nuxt_page_meta
// Vite
if (__vite_ssr_import_meta__.hot) {
  __vite_ssr_import_meta__.hot.accept(mod => {
    Object.assign(__nuxt_page_meta, mod)
  })
}
// webpack
if (__vite_ssr_import_meta__.webpackHot) {
  __vite_ssr_import_meta__.webpackHot.accept((err) => {
    if (err) { window.location = window.location.href }
  })
};
}


// --------------------
// Request: /pages/index.vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/routes.mjs ($id_Lpg2BAQXEH)
// Dependencies: 

// --------------------
const $id_VlH7mPF5UU = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __nuxt_page_meta = null
__vite_ssr_exports__.default = __nuxt_page_meta

// Vite
if (__vite_ssr_import_meta__.hot) {
  __vite_ssr_import_meta__.hot.accept(mod => {
    Object.assign(__nuxt_page_meta, mod)
  })
}
// webpack
if (__vite_ssr_import_meta__.webpackHot) {
  __vite_ssr_import_meta__.webpackHot.accept((err) => {
    if (err) { window.location = window.location.href }
  })
};
}


// --------------------
// Request: /pages/offer/[id].vue?macro=true
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/routes.mjs ($id_Lpg2BAQXEH)
// Dependencies: 

// --------------------
const $id_EGXRCaTOm9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

const __nuxt_page_meta = null
__vite_ssr_exports__.default = __nuxt_page_meta

// Vite
if (__vite_ssr_import_meta__.hot) {
  __vite_ssr_import_meta__.hot.accept(mod => {
    Object.assign(__nuxt_page_meta, mod)
  })
}
// webpack
if (__vite_ssr_import_meta__.webpackHot) {
  __vite_ssr_import_meta__.webpackHot.accept((err) => {
    if (err) { window.location = window.location.href }
  })
};
}


// --------------------
// Request: /pages/SignIn.vue
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/routes.mjs ($id_Lpg2BAQXEH)
// Dependencies: 
// - /components/FormInput.vue ($id_sNdiJ0oTHU)
// - /node_modules/nuxt/dist/pages/runtime/composables.js ($id_qONe2xcmWo)
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/index.js ($id_5aoHRxZAK9)
// - /const/routes.ts ($id_hMKhdAsTwW)
// - /const/common.ts ($id_LXLjZmZjkm)
// - /stores/useUserStore.ts ($id_q5kbabqLSb)
// - nuxt-storage ($id_6TrJvqcGCx)
// - /states.ts ($id_7V82x31Vcq)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_R9VuHfEPiH = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/FormInput.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/composables.js");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.js");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/const/routes.ts");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/const/common.ts");
const __vite_ssr_import_7__ = await __vite_ssr_import__("/stores/useUserStore.ts");
const __vite_ssr_import_8__ = await __vite_ssr_import__("nuxt-storage");
const __vite_ssr_import_9__ = await __vite_ssr_import__("/states.ts");
const __vite_ssr_import_10__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_11__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_12__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");










const _sfc_main = /* @__PURE__ */ __vite_ssr_import_4__.defineComponent({
  __name: "SignIn",
  setup(__props, { expose: __expose }) {
    __expose();
    __vite_ssr_import_1__.definePageMeta({
      layout: "users"
    });
    const store = __vite_ssr_import_7__.useUserStore();
    const formData = __vite_ssr_import_2__.reactive({
      email: "",
      password: ""
    });
    const errorMessage = __vite_ssr_import_2__.ref("");
    const handleSubmit = async () => {
      const { data, error } = await __vite_ssr_import_3__.useFetch(`${__vite_ssr_import_5__.BACKEND_URL}${__vite_ssr_import_5__.APIRoute.LOGIN}`, {
        method: "POST",
        body: formData
      }, '$NiBLqx001u');
      store.setUser(error ? __vite_ssr_import_6__.AuthorizationStatus.NO_AUTH : __vite_ssr_import_6__.AuthorizationStatus.AUTH, data.value);
      if (error.value) {
        errorMessage.value = error.value.data.error;
        return;
      }
      const status = __vite_ssr_import_9__.useAuthStatus();
      const token = __vite_ssr_import_9__.useAuthToken();
      const user = __vite_ssr_import_9__.useUser();
      user.value = data.value;
      token.value = data.value.token;
      errorMessage.value = "";
      status.value = __vite_ssr_import_6__.AuthorizationStatus.AUTH;
      __vite_ssr_import_8__.default.localStorage.setData("6c-token", token.value);
      __vite_ssr_import_3__.navigateTo("/");
    };
    const __returned__ = { store, formData, errorMessage, handleSubmit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_FormInput = __vite_ssr_import_0__.default;
  _push(`<section${__vite_ssr_import_11__.ssrRenderAttrs(__vite_ssr_import_10__.mergeProps({ class: "login" }, _attrs))}><h1 class="login__title">Sign in</h1><form class="login__form form" action="#">`);
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_FormInput, {
    labelText: "E-mail",
    modelValue: $setup.formData.email,
    type: "email",
    placeholder: "Email",
    "onUpdate:modelValue": ($event) => $setup.formData.email = $event
  }, null, _parent));
  _push(__vite_ssr_import_11__.ssrRenderComponent(_component_FormInput, {
    labelText: "Password",
    modelValue: $setup.formData.password,
    type: "password",
    placeholder: "Password",
    "onUpdate:modelValue": ($event) => $setup.formData.password = $event
  }, null, _parent));
  if ($setup.errorMessage) {
    _push(`<div>${__vite_ssr_import_11__.ssrInterpolate($setup.errorMessage)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button class="login__submit form__submit button" type="button"> Sign in </button></form></section>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/SignIn.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_13__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/pages/SignIn.vue"]]);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/composables.js
// Parents: 
// - /pages/SignIn.vue ($id_BENA1yn67l)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// --------------------
const $id_bw4je9zLwR = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue-router");


const warnRuntimeUsage = (method) => console.warn(
  `${method}() is a compiler-hint helper that is only usable inside the script block of a single file component which is also a page. Its arguments should be compiled away and passing it at runtime has no effect.`
);
const definePageMeta = (meta) => {
  if (true) {
    const component = __vite_ssr_import_0__.getCurrentInstance()?.type;
    try {
      const isRouteComponent = component && __vite_ssr_import_1__.useRoute().matched.some((p) => Object.values(p.components || {}).includes(component));
      if (isRouteComponent) {
        return;
      }
    } catch {
    }
    warnRuntimeUsage("definePageMeta");
  }
};
Object.defineProperty(__vite_ssr_exports__, "definePageMeta", { enumerable: true, configurable: true, get(){ return definePageMeta }});
;
}


// --------------------
// Request: /stores/useUserStore.ts
// Parents: 
// - /pages/SignIn.vue ($id_BENA1yn67l)
// Dependencies: 
// - pinia ($id_08NwGtDtAK)
// - /const/common.ts ($id_LXLjZmZjkm)
// --------------------
const $id_dpozEPk55p = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("pinia");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/const/common.ts");


const useUserStore = __vite_ssr_import_0__.defineStore("userStore", {
  state: () => ({
    authorizationStatus: __vite_ssr_import_1__.AuthorizationStatus.UNKNOWN,
    user: {
      token: "",
      email: "",
      name: "",
      avatarPath: "",
      isPro: true
    }
  }),
  actions: {
    setUser(status, user) {
      this.authorizationStatus = status;
      this.user = user || null;
    }
  }
});
Object.defineProperty(__vite_ssr_exports__, "useUserStore", { enumerable: true, configurable: true, get(){ return useUserStore }});
;
}


// --------------------
// Request: nuxt-storage
// Parents: 
// - /pages/SignIn.vue ($id_BENA1yn67l)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 

// --------------------
const $id_39wBofSDi2 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("nuxt-storage")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"nuxt-storage\".")
  })


// --------------------
// Request: /states.ts
// Parents: 
// - /pages/SignIn.vue ($id_BENA1yn67l)
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 
// - /node_modules/nuxt/dist/app/index.js ($id_5aoHRxZAK9)
// - /const/common.ts ($id_LXLjZmZjkm)
// --------------------
const $id_XWSPznCzZv = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/const/common.ts");


const useAuthToken = () => __vite_ssr_import_0__.useState(() => "", '$kcG7W0J9s3');
Object.defineProperty(__vite_ssr_exports__, "useAuthToken", { enumerable: true, configurable: true, get(){ return useAuthToken }});
const useAuthStatus = () => __vite_ssr_import_0__.useState(() => __vite_ssr_import_1__.AuthorizationStatus.UNKNOWN, '$RJ21lC5heo');
Object.defineProperty(__vite_ssr_exports__, "useAuthStatus", { enumerable: true, configurable: true, get(){ return useAuthStatus }});
const useUser = () => __vite_ssr_import_0__.useState(() => ({}), '$ovMU6tfDdQ');
Object.defineProperty(__vite_ssr_exports__, "useUser", { enumerable: true, configurable: true, get(){ return useUser }});
;
}


// --------------------
// Request: /pages/index.vue
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/routes.mjs ($id_Lpg2BAQXEH)
// Dependencies: 
// - /components/LoadingScreen.vue ($id_tzlkO9Fweu)
// - /components/HotelsLocations.vue ($id_vxGDSfsmvQ)
// - /components/HotelsList.vue ($id_UVEumiMazl)
// - /node_modules/nuxt/dist/app/index.js ($id_5aoHRxZAK9)
// - vue ($id_VkOCJnUZrn)
// - /const/routes.ts ($id_hMKhdAsTwW)
// - /stores/useHotelsStore.ts ($id_upffMzxLCg)
// - /const/common.ts ($id_LXLjZmZjkm)
// - /utils/common.ts ($id_1mSdbJb64q)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_deQD3HL8Z9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/LoadingScreen.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/HotelsLocations.vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/HotelsList.vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.js");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/const/routes.ts");
const __vite_ssr_import_7__ = await __vite_ssr_import__("/stores/useHotelsStore.ts");
const __vite_ssr_import_8__ = await __vite_ssr_import__("/const/common.ts");
const __vite_ssr_import_9__ = await __vite_ssr_import__("/utils/common.ts");
const __vite_ssr_import_10__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_11__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_12__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_13__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");










const _sfc_main = /* @__PURE__ */ __vite_ssr_import_5__.defineComponent({
  __name: "index",
  async setup(__props, { expose: __expose }) {
    __expose();
    let __temp, __restore;
    const { pending, data } = ([__temp, __restore] = __vite_ssr_import_5__.withAsyncContext(() => __vite_ssr_import_3__.useFetch(`${__vite_ssr_import_6__.BACKEND_URL}${__vite_ssr_import_6__.APIRoute.OFFERS}`, '$PslAyef5YX')), __temp = await __temp, __restore(), __temp);
    const currentSortType = __vite_ssr_import_4__.ref(__vite_ssr_import_8__.sortOption.DEFAULT);
    const updateSortType = (type) => {
      currentSortType.value = type;
    };
    const hotels = __vite_ssr_import_4__.computed(
      () => __vite_ssr_import_9__.sortHotels(
        currentSortType.value,
        __vite_ssr_import_9__.filterHotelsByCity(currentCity.value, data.value)
      )
    );
    const store = __vite_ssr_import_7__.useHotelsStore();
    store.setHotelList(data.value);
    const currentCity = __vite_ssr_import_4__.ref(__vite_ssr_import_8__.DEFAULT_CITY);
    const updateCurrentCity = (city) => {
      currentCity.value = city;
    };
    const __returned__ = { pending, data, currentSortType, updateSortType, hotels, store, currentCity, updateCurrentCity };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loading_screen = __vite_ssr_import_0__.default;
  const _component_hotels_locations = __vite_ssr_import_1__.default;
  const _component_hotels_list = __vite_ssr_import_2__.default;
  _push(`<div${__vite_ssr_import_11__.ssrRenderAttrs(__vite_ssr_import_10__.mergeProps({ class: "page--main" }, _attrs))}>`);
  if ($setup.pending) {
    _push(__vite_ssr_import_11__.ssrRenderComponent(_component_loading_screen, null, null, _parent));
  } else {
    _push(`<main class="page__main page__main--index"><h1 class="visually-hidden">Cities</h1>`);
    _push(__vite_ssr_import_11__.ssrRenderComponent(_component_hotels_locations, {
      currentCity: $setup.currentCity,
      onCurrentCityChange: ($event) => $setup.updateCurrentCity($event)
    }, null, _parent));
    if ($setup.hotels.length > 0) {
      _push(__vite_ssr_import_11__.ssrRenderComponent(_component_hotels_list, {
        hotels: $setup.hotels,
        currentCity: $setup.currentCity,
        currentSortType: $setup.currentSortType,
        onSortOptionChange: ($event) => $setup.updateSortType($event)
      }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(`</main>`);
  }
  _push(`</div>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_12__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_13__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/pages/index.vue"]]);
;
}


// --------------------
// Request: /stores/useHotelsStore.ts
// Parents: 
// - /pages/index.vue ($id_zKWOlz8EPO)
// Dependencies: 
// - pinia ($id_08NwGtDtAK)
// --------------------
const $id_jXkTPDi2b9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("pinia");

const useHotelsStore = __vite_ssr_import_0__.defineStore("hotelStore", {
  state: () => ({
    hotels: [],
    hotelsIsLoading: false
  }),
  actions: {
    setHotelList(hotels) {
      this.hotels = hotels;
    }
  }
});
Object.defineProperty(__vite_ssr_exports__, "useHotelsStore", { enumerable: true, configurable: true, get(){ return useHotelsStore }});
;
}


// --------------------
// Request: /pages/offer/[id].vue
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/routes.mjs ($id_Lpg2BAQXEH)
// Dependencies: 
// - /components/LoadingScreen.vue ($id_tzlkO9Fweu)
// - /components/HotelGallery.vue ($id_f5MZ4aVd2u)
// - /components/HotelRating.vue ($id_934PdLsxKF)
// - /components/PropertyItem.vue ($id_shIeN2yOI9)
// - /components/HostInfo.vue ($id_s2f7LRfCsE)
// - /components/HotelReviews.vue ($id_DWKdjvSAcl)
// - /components/ReviewForm.vue ($id_GUcAwljbvC)
// - /components/NearbyHotels.vue ($id_eKQvBvMaGm)
// - /node_modules/nuxt/dist/app/index.js ($id_5aoHRxZAK9)
// - vue ($id_VkOCJnUZrn)
// - /const/routes.ts ($id_hMKhdAsTwW)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_t5PnLjMZNK = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/LoadingScreen.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/components/HotelGallery.vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/components/HotelRating.vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/components/PropertyItem.vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/components/HostInfo.vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/components/HotelReviews.vue");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/components/ReviewForm.vue");
const __vite_ssr_import_7__ = await __vite_ssr_import__("/components/NearbyHotels.vue");
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.js");
const __vite_ssr_import_9__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_10__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_11__ = await __vite_ssr_import__("/const/routes.ts");
const __vite_ssr_import_12__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_13__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_14__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_15__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");












const _sfc_main = /* @__PURE__ */ __vite_ssr_import_10__.defineComponent({
  __name: "[id]",
  async setup(__props, { expose: __expose }) {
    __expose();
    let __temp, __restore;
    const route = __vite_ssr_import_8__.useRoute();
    const { pending, data } = ([__temp, __restore] = __vite_ssr_import_10__.withAsyncContext(() => __vite_ssr_import_8__.useFetch(`${__vite_ssr_import_11__.BACKEND_URL}${__vite_ssr_import_11__.APIRoute.OFFERS}/${route.params.id}`, '$UADPF8EBcN')), __temp = await __temp, __restore(), __temp);
    const hotel = __vite_ssr_import_9__.computed(() => data.value);
    const images = __vite_ssr_import_9__.computed(() => hotel.value.images.slice(0, 6));
    const nearbyDataFetch = ([__temp, __restore] = __vite_ssr_import_10__.withAsyncContext(() => __vite_ssr_import_8__.useFetch(`${__vite_ssr_import_11__.BACKEND_URL}${__vite_ssr_import_11__.APIRoute.OFFERS}/${route.params.id}${__vite_ssr_import_11__.APIRoute.NEARBY}`, '$v8VWipYCN9')), __temp = await __temp, __restore(), __temp);
    const nearbyHotelsData = __vite_ssr_import_9__.computed(() => nearbyDataFetch.data.value);
    const hotelReviewsDataFetch = ([__temp, __restore] = __vite_ssr_import_10__.withAsyncContext(() => __vite_ssr_import_8__.useFetch(`${__vite_ssr_import_11__.BACKEND_URL}${__vite_ssr_import_11__.APIRoute.OFFERS}/${route.params.id}${__vite_ssr_import_11__.APIRoute.REVIEWS}`, '$dP5PrLBk6S')), __temp = await __temp, __restore(), __temp);
    const hotelReviewsData = __vite_ssr_import_9__.computed(() => hotelReviewsDataFetch.data.value);
    const setCurrentHotelId = (id) => {
    };
    const __returned__ = { route, pending, data, hotel, images, nearbyDataFetch, nearbyHotelsData, hotelReviewsDataFetch, hotelReviewsData, setCurrentHotelId };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loading_screen = __vite_ssr_import_0__.default;
  const _component_hotel_gallery = __vite_ssr_import_1__.default;
  const _component_hotel_rating = __vite_ssr_import_2__.default;
  const _component_property_item = __vite_ssr_import_3__.default;
  const _component_host_info = __vite_ssr_import_4__.default;
  const _component_hotel_reviews = __vite_ssr_import_5__.default;
  const _component_review_form = __vite_ssr_import_6__.default;
  const _component_nearby_hotels = __vite_ssr_import_7__.default;
  _push(`<main${__vite_ssr_import_13__.ssrRenderAttrs(__vite_ssr_import_12__.mergeProps({ class: "page__main page__main--property" }, _attrs))}>`);
  if ($setup.pending) {
    _push(__vite_ssr_import_13__.ssrRenderComponent(_component_loading_screen, null, null, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($setup.hotel) {
    _push(`<section class="property">`);
    _push(__vite_ssr_import_13__.ssrRenderComponent(_component_hotel_gallery, { images: $setup.images }, null, _parent));
    _push(`<div class="property__container container"><div class="property__wrapper">`);
    if ($setup.hotel.isPremium) {
      _push(`<div class="property__mark"><span>Premium</span></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<div class="property__name-wrapper"><h1 class="property__name">${__vite_ssr_import_13__.ssrInterpolate($setup.hotel.title)}</h1><button class="property__bookmark-button button" type="button"><svg class="property__bookmark-icon" width="31" height="33"><use xlink:href="#icon-bookmark"></use></svg><span class="visually-hidden">To bookmarks</span></button></div><div class="property__rating rating"><div class="property__stars rating__stars">`);
    _push(__vite_ssr_import_13__.ssrRenderComponent(_component_hotel_rating, {
      "rating-value": $setup.hotel.rating
    }, null, _parent));
    _push(`</div><span class="property__rating-value rating__value">${__vite_ssr_import_13__.ssrInterpolate($setup.hotel.rating)}</span></div><ul class="property__features"><li class="property__feature property__feature--entire">${__vite_ssr_import_13__.ssrInterpolate($setup.hotel.type)}</li><li class="property__feature property__feature--bedrooms">${__vite_ssr_import_13__.ssrInterpolate($setup.hotel.bedrooms)} Bedrooms </li><li class="property__feature property__feature--adults"> Max ${__vite_ssr_import_13__.ssrInterpolate($setup.hotel.maxAdults)} adults </li></ul><div class="property__price"><b class="property__price-value">\u20AC${__vite_ssr_import_13__.ssrInterpolate($setup.hotel.price)}</b><span class="property__price-text">\xA0night</span></div><div class="property__inside"><h2 class="property__inside-title">What&#39;s inside</h2><ul class="property__inside-list"><!--[-->`);
    __vite_ssr_import_13__.ssrRenderList($setup.hotel.goods, (property) => {
      _push(__vite_ssr_import_13__.ssrRenderComponent(_component_property_item, {
        key: property,
        property
      }, null, _parent));
    });
    _push(`<!--]--></ul></div><div class="property__host"><h2 class="property__host-title">Meet the host</h2>`);
    _push(__vite_ssr_import_13__.ssrRenderComponent(_component_host_info, {
      host: $setup.hotel.user
    }, null, _parent));
    _push(`<div class="property__description"><p class="property__text">${__vite_ssr_import_13__.ssrInterpolate($setup.hotel.description)}</p></div></div><section class="property__reviews reviews">`);
    if ($setup.hotelReviewsData?.length) {
      _push(__vite_ssr_import_13__.ssrRenderComponent(_component_hotel_reviews, { reviews: $setup.hotelReviewsData }, null, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(__vite_ssr_import_13__.ssrRenderComponent(_component_review_form, {
      id: $setup.route.params.id
    }, null, _parent));
    _push(`</section></div></div><!-- <section  v-if="nearbyHotels && nearbyHotels.length" class="property__map map">
        <locations-map
          :hotels="nearbyHotels"
          :activeHotel="activeHotel"
        ></locations-map>
      </section> --></section>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="container">`);
  if ($setup.nearbyHotelsData?.length) {
    _push(__vite_ssr_import_13__.ssrRenderComponent(_component_nearby_hotels, {
      nearbyHotels: $setup.nearbyHotelsData,
      onOnHotelHover: ($event) => $setup.setCurrentHotelId($event)
    }, null, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></main>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_14__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/offer/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_15__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/pages/offer/[id].vue"]]);
;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/router.options.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/plugins/router.js ($id_D3QvO0DhQh)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/router.options.js ($id_oOlBa4xK8E)
// --------------------
const $id_pEFzLjzrqA = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/router.options.js");

const configRouterOptions = {}
__vite_ssr_exports__.default = {
...configRouterOptions,
...__vite_ssr_import_0__.default,
};
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/router.options.js
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/router.options.mjs ($id_qzZ15UAyRe)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs ($id_DpM3LLuOgA)
// --------------------
const $id_anMEEJcztT = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs");



__vite_ssr_exports__.default = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = __vite_ssr_import_1__.useNuxtApp();
    let position = savedPosition || void 0;
    if (!position && from && to && to.meta.scrollToTop !== false && _isDifferentRoute(from, to)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
      }
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? __vite_ssr_import_2__.appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await __vite_ssr_import_0__.nextTick();
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash) };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
function _isDifferentRoute(a, b) {
  const samePageComponent = a.matched[0] === b.matched[0];
  if (!samePageComponent) {
    return true;
  }
  if (samePageComponent && JSON.stringify(a.params) !== JSON.stringify(b.params)) {
    return true;
  }
  return false;
}
;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/middleware.mjs
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/plugins/router.js ($id_D3QvO0DhQh)
// Dependencies: 
// - /node_modules/nuxt/dist/pages/runtime/validate.js ($id_z9WcQnu6O4)
// --------------------
const $id_cGljapDxRE = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/validate.js");

const globalMiddleware = [
  __vite_ssr_import_0__.default
]
Object.defineProperty(__vite_ssr_exports__, "globalMiddleware", { enumerable: true, configurable: true, get(){ return globalMiddleware }});
const namedMiddleware = {}
Object.defineProperty(__vite_ssr_exports__, "namedMiddleware", { enumerable: true, configurable: true, get(){ return namedMiddleware }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/validate.js
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/middleware.mjs ($id_JVF7LmebzJ)
// Dependencies: 
// - unctx ($id_95GsJqysu7)
// - /node_modules/nuxt/dist/app/composables/error.js ($id_2FidUTdZvd)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// --------------------
const $id_4TzlseLgdh = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("unctx");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.js");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.js");
/* _processed_nuxt_unctx_transform */



__vite_ssr_exports__.default = /* #__PURE__ */ __vite_ssr_import_3__.defineNuxtRouteMiddleware(async (to) => {let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  const router = __vite_ssr_import_3__.useRouter();
  const result = (([__temp,__restore]=__vite_ssr_import_0__.executeAsync(()=>Promise.resolve(to.meta.validate(to)))),__temp=await __temp,__restore(),__temp);
  if (result === true) {
    return;
  }
  if (true) {
    return result;
  }
  const error = __vite_ssr_import_1__.createError({
    statusCode: 404,
    statusMessage: `Page Not Found: ${to.fullPath}`
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => __vite_ssr_import_1__.showError(error));
        window.history.pushState({}, "", to.fullPath);
      });
      return false;
    }
  });
},1);
;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/root-component.mjs
// Parents: 
// - /home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/app/entry.js ($id_Mgv6TUMvKL)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// --------------------
const $id_V1soBacLdW = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/root-component.mjs ($id_5iuW7xCnIe)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/app/composables/error.js ($id_2FidUTdZvd)
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/app-component.mjs ($id_eK28guFjTj)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/error-component.mjs ($id_6n2CzVsOL6)
// - /node_modules/nuxt/dist/app/components/island-renderer.js ($id_J7KWDNzYhZ)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/test-component-wrapper.mjs ($id_6fM76llwU0)
// --------------------
const $id_TYLWlhy3x8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.js");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/app-component.mjs");
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_6__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_8__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");







const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose: __expose }) {
  __expose();

const ErrorComponent = /* #__PURE__ */ __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/error-component.mjs").then(r => r.default || r))
const IslandRenderer = true
  ? /* #__PURE__ */ __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/nuxt/dist/app/components/island-renderer.js").then(r => r.default || r))
  : () => null

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = nuxtApp.deferHydration()

const url = true ? nuxtApp.ssrContext.url : window.location.pathname
const SingleRenderer = false && true && true && url.startsWith('/__nuxt_component_test__/') && /* #__PURE__ */ /* #__PURE__ */ __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/test-component-wrapper.mjs")
  .then(r => r.default(true ? url : window.location.href)))

// Inject default route (outside of pages) as active route
__vite_ssr_import_0__.provide('_route', __vite_ssr_import_3__.useRoute())

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_2__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true || (__vite_ssr_import_2__.isNuxtError(err) && (err.fatal || err.unhandled))) {
    const p = nuxtApp.runWithContext(() => __vite_ssr_import_2__.showError(err))
    __vite_ssr_import_0__.onServerPrefetch(() => p)
    return false // suppress error from breaking render
  }
})

// Component islands context
const { islandContext } = true && nuxtApp.ssrContext

const __returned__ = { ErrorComponent, IslandRenderer, nuxtApp, onResolve, url, SingleRenderer, results, error, islandContext, defineAsyncComponent: __vite_ssr_import_0__.defineAsyncComponent, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, onServerPrefetch: __vite_ssr_import_0__.onServerPrefetch, provide: __vite_ssr_import_0__.provide, get useNuxtApp() { return __vite_ssr_import_1__.useNuxtApp }, get isNuxtError() { return __vite_ssr_import_2__.isNuxtError }, get showError() { return __vite_ssr_import_2__.showError }, get useError() { return __vite_ssr_import_2__.useError }, get useRoute() { return __vite_ssr_import_3__.useRoute }, get AppComponent() { return __vite_ssr_import_4__.default } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  __vite_ssr_import_6__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_6__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else if ($setup.islandContext) {
        _push(__vite_ssr_import_6__.ssrRenderComponent($setup["IslandRenderer"], { context: $setup.islandContext }, null, _parent))
      } else if ($setup.SingleRenderer) {
        __vite_ssr_import_6__.ssrRenderVNode(_push, __vite_ssr_import_5__.createVNode(__vite_ssr_import_5__.resolveDynamicComponent($setup.SingleRenderer), null, null), _parent)
      } else {
        _push(__vite_ssr_import_6__.ssrRenderComponent($setup["AppComponent"], null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}



const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_7__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_8__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/app-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// Dependencies: 
// - /app.vue ($id_K0boQqLzfo)
// --------------------
const $id_JtQkjqgzyv = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/app.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /app.vue
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/app-component.mjs ($id_eK28guFjTj)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/layout.js ($id_rl83QbM9u6)
// - /node_modules/nuxt/dist/app/index.js ($id_5aoHRxZAK9)
// - vue ($id_VkOCJnUZrn)
// - nuxt-storage ($id_6TrJvqcGCx)
// - /states.ts ($id_7V82x31Vcq)
// - /const/common.ts ($id_LXLjZmZjkm)
// - /const/routes.ts ($id_hMKhdAsTwW)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_qs1VfFGLbC = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/layout.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/index.js");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("nuxt-storage");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/states.ts");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/const/common.ts");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/const/routes.ts");
const __vite_ssr_import_7__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_8__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_9__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_10__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");







const _sfc_main = /* @__PURE__ */ __vite_ssr_import_2__.defineComponent({
  __name: "app",
  async setup(__props, { expose: __expose }) {
    __expose();
    let __temp, __restore;
    const token = __vite_ssr_import_4__.useAuthToken();
    const status = __vite_ssr_import_4__.useAuthStatus();
    const user = __vite_ssr_import_4__.useUser();
    if (status.value === __vite_ssr_import_5__.AuthorizationStatus.UNKNOWN) {
      if (token.value.length || __vite_ssr_import_3__.default.localStorage.getData("6c-token")) {
        const { data, error } = ([__temp, __restore] = __vite_ssr_import_2__.withAsyncContext(() => __vite_ssr_import_1__.useFetch(`${__vite_ssr_import_6__.BACKEND_URL}${__vite_ssr_import_6__.APIRoute.LOGIN}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }, '$E3KxD8SGyR')), __temp = await __temp, __restore(), __temp);
        if (error.value) {
          status.value = __vite_ssr_import_5__.AuthorizationStatus.NO_AUTH;
        } else {
          user.value = data.value;
          status.value = __vite_ssr_import_5__.AuthorizationStatus.AUTH;
        }
      } else {
        status.value = __vite_ssr_import_5__.AuthorizationStatus.NO_AUTH;
      }
    }
    const __returned__ = { token, status, user };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLayout = __vite_ssr_import_0__.default;
  _push(`<div${__vite_ssr_import_8__.ssrRenderAttrs(_attrs)}><div style="${__vite_ssr_import_8__.ssrRenderStyle({ "display": "none" })}"><svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewbox="0 0 7 4"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewbox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewbox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg></div>`);
  _push(__vite_ssr_import_8__.ssrRenderComponent(_component_NuxtLayout, null, {
    default: __vite_ssr_import_7__.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` some page content `);
      } else {
        return [
          __vite_ssr_import_7__.createTextVNode(" some page content ")
        ];
      }
    }),
    _: 1
    /* STABLE */
  }, _parent));
  _push(`</div>`);
}

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_9__.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

__vite_ssr_exports__.default = /* @__PURE__ */ __vite_ssr_import_10__.default(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "/home/user/projects/1814207-six-cities-simple-3/frontend/project/app.vue"]]);
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/layout.js
// Parents: 
// - /app.vue ($id_K0boQqLzfo)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /node_modules/nuxt/dist/app/components/utils.js ($id_XcQgbwvARI)
// - /node_modules/nuxt/dist/app/composables/router.js ($id_2CY2tpajHR)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/pages.mjs ($id_ciTBBnUKYP)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/layouts.mjs ($id_OmMa3fn6Pn)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs ($id_DpM3LLuOgA)
// --------------------
const $id_I9cxmEYsMF = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.js");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/router.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/pages.mjs");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/layouts.mjs");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs");






const LayoutLoader = /* #__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    ...true ? { hasTransition: Boolean } : {}
  },
  async setup(props, context) {
    let vnode;
    if (true && false) {
      __vite_ssr_import_0__.onMounted(() => {
        __vite_ssr_import_0__.nextTick(() => {
          if (props.name && ["#comment", "#text"].includes(vnode?.el?.nodeName)) {
            console.warn(`[nuxt] \`${props.name}\` layout does not have a single root node and will cause errors when navigating between routes.`);
          }
        });
      });
    }
    const LayoutComponent = await __vite_ssr_import_4__.default[props.name]().then((r) => r.default || r);
    return () => {
      if (true && false && props.hasTransition) {
        vnode = __vite_ssr_import_0__.h(LayoutComponent, context.attrs, context.slots);
        return vnode;
      }
      return __vite_ssr_import_0__.h(LayoutComponent, context.attrs, context.slots);
    };
  }
});
__vite_ssr_exports__.default = /* #__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    }
  },
  setup(props, context) {
    const injectedRoute = __vite_ssr_import_0__.inject("_route");
    const route = injectedRoute === __vite_ssr_import_2__.useRoute() ? __vite_ssr_import_3__.useRoute() : injectedRoute;
    const layout = __vite_ssr_import_0__.computed(() => __vite_ssr_import_0__.unref(props.name) ?? route.meta.layout ?? "default");
    let vnode;
    let _layout;
    if (true && false) {
      __vite_ssr_import_0__.onMounted(() => {
        __vite_ssr_import_0__.nextTick(() => {
          if (_layout && _layout in __vite_ssr_import_4__.default && ["#comment", "#text"].includes(vnode?.el?.nodeName)) {
            console.warn(`[nuxt] \`${_layout}\` layout does not have a single root node and will cause errors when navigating between routes.`);
          }
        });
      });
    }
    return () => {
      const hasLayout = layout.value && layout.value in __vite_ssr_import_4__.default;
      if (true && layout.value && !hasLayout && layout.value !== "default") {
        console.warn(`Invalid layout \`${layout.value}\` selected.`);
      }
      const transitionProps = route.meta.layoutTransition ?? __vite_ssr_import_5__.appLayoutTransition;
      return __vite_ssr_import_1__._wrapIf(__vite_ssr_import_0__.Transition, hasLayout && transitionProps, {
        default: () => __vite_ssr_import_1__._wrapIf(LayoutLoader, hasLayout && {
          key: layout.value,
          name: layout.value,
          ...true ? { hasTransition: !!transitionProps } : {},
          ...context.attrs
        }, context.slots).default()
      }).default();
    };
  }
});
;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/utils.js
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.js ($id_rl83QbM9u6)
// - /node_modules/nuxt/dist/pages/runtime/page.js ($id_Gu6Fb8JH8w)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - @vue/shared ($id_FcJYoqIAB0)
// - destr ($id_12yP1cX3Wj)
// --------------------
const $id_MTwY5WuuN2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("@vue/shared");
const __vite_ssr_import_2__ = await __vite_ssr_import__("destr");



const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => props ? __vite_ssr_import_0__.h(component, props, slots) : slots.default?.() };
};
Object.defineProperty(__vite_ssr_exports__, "_wrapIf", { enumerable: true, configurable: true, get(){ return _wrapIf }});
function createBuffer() {
  let appendable = false;
  const buffer = [];
  return {
    getBuffer() {
      return buffer;
    },
    push(item) {
      const isStringItem = __vite_ssr_import_1__.isString(item);
      if (appendable && isStringItem) {
        buffer[buffer.length - 1] += item;
      } else {
        buffer.push(item);
      }
      appendable = isStringItem;
      if (__vite_ssr_import_1__.isPromise(item) || __vite_ssr_import_1__.isArray(item) && item.hasAsync) {
        buffer.hasAsync = true;
      }
    }
  };
}
Object.defineProperty(__vite_ssr_exports__, "createBuffer", { enumerable: true, configurable: true, get(){ return createBuffer }});
const TRANSLATE_RE = /&(nbsp|amp|quot|lt|gt);/g;
const NUMSTR_RE = /&#(\d+);/gi;
function decodeHtmlEntities(html) {
  const translateDict = {
    nbsp: " ",
    amp: "&",
    quot: '"',
    lt: "<",
    gt: ">"
  };
  return html.replace(TRANSLATE_RE, function(_, entity) {
    return translateDict[entity];
  }).replace(NUMSTR_RE, function(_, numStr) {
    const num = parseInt(numStr, 10);
    return String.fromCharCode(num);
  });
}
Object.defineProperty(__vite_ssr_exports__, "decodeHtmlEntities", { enumerable: true, configurable: true, get(){ return decodeHtmlEntities }});
function vforToArray(source) {
  if (__vite_ssr_import_1__.isArray(source)) {
    return source;
  } else if (__vite_ssr_import_1__.isString(source)) {
    return source.split("");
  } else if (typeof source === "number") {
    if (true && !Number.isInteger(source)) {
      console.warn(`The v-for range expect an integer value but got ${source}.`);
    }
    const array = [];
    for (let i = 0; i < source; i++) {
      array[i] = i;
    }
    return array;
  } else if (__vite_ssr_import_1__.isObject(source)) {
    if (source[Symbol.iterator]) {
      return Array.from(
        source,
        (item) => item
      );
    } else {
      const keys = Object.keys(source);
      const array = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        array[i] = source[key];
      }
      return array;
    }
  }
  return [];
}
Object.defineProperty(__vite_ssr_exports__, "vforToArray", { enumerable: true, configurable: true, get(){ return vforToArray }});
function getFragmentHTML(element) {
  if (element) {
    if (element.nodeName === "#comment" && element.nodeValue === "[") {
      return getFragmentChildren(element);
    }
    return [element.outerHTML];
  }
  return [];
}
Object.defineProperty(__vite_ssr_exports__, "getFragmentHTML", { enumerable: true, configurable: true, get(){ return getFragmentHTML }});
function getFragmentChildren(element, blocks = []) {
  if (element && element.nodeName) {
    if (isEndFragment(element)) {
      return blocks;
    } else if (!isStartFragment(element)) {
      blocks.push(element.outerHTML);
    }
    getFragmentChildren(element.nextSibling, blocks);
  }
  return blocks;
}
function isStartFragment(element) {
  return element.nodeName === "#comment" && element.nodeValue === "[";
}
function isEndFragment(element) {
  return element.nodeName === "#comment" && element.nodeValue === "]";
}
const SLOT_PROPS_RE = /<div[^>]*nuxt-ssr-slot-name="([^"]*)" nuxt-ssr-slot-data="([^"]*)"[^/|>]*>/g;
function getSlotProps(html) {
  const slotsDivs = html.matchAll(SLOT_PROPS_RE);
  const data = {};
  for (const slot of slotsDivs) {
    const [_, slotName, json] = slot;
    const slotData = __vite_ssr_import_2__.default(decodeHtmlEntities(json));
    data[slotName] = slotData;
  }
  return data;
}
Object.defineProperty(__vite_ssr_exports__, "getSlotProps", { enumerable: true, configurable: true, get(){ return getSlotProps }});
;
}


// --------------------
// Request: @vue/shared
// Parents: 
// - /node_modules/nuxt/dist/app/components/utils.js ($id_XcQgbwvARI)
// Dependencies: 

// --------------------
const $id_NOAOzpHkPB = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("@vue/shared")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"@vue/shared\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/pages.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.js ($id_rl83QbM9u6)
// Dependencies: 
// - vue-router ($id_RGqOect6fq)
// --------------------
const $id_BCBPrhTe5R = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue-router");

Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.useRoute }});;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/layouts.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/layout.js ($id_rl83QbM9u6)
// Dependencies: 
// - /layouts/default.vue ($id_dononVQSck)
// - /layouts/users.vue ($id_YWBDzoTZZX)
// --------------------
const $id_G3xaTb24N4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {
  default: () => __vite_ssr_dynamic_import__("/layouts/default.vue").then(m => m.default || m),
  users: () => __vite_ssr_dynamic_import__("/layouts/users.vue").then(m => m.default || m)
};
}


// --------------------
// Request: /layouts/default.vue
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/layouts.mjs ($id_OmMa3fn6Pn)
// Dependencies: 
// - /components/Header.vue ($id_TihPwxfEDt)
// - /node_modules/nuxt/dist/pages/runtime/page.js ($id_Gu6Fb8JH8w)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_sNwScSO35P = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Header.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.js");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");


const _sfc_main = {}



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.default

  _push(`<div${__vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "page page--gray" }, _attrs))}>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_Header, null, null, _parent))
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtPage, null, null, _parent))
  _push(`</div>`)
}



const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/user/projects/1814207-six-cities-simple-3/frontend/project/layouts/default.vue"]]);
}


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/page.js
// Parents: 
// - /layouts/default.vue ($id_dononVQSck)
// - /layouts/users.vue ($id_YWBDzoTZZX)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/vue-router.mjs ($id_jfLnGYXxGQ)
// - defu ($id_q1WUEsFSUQ)
// - /node_modules/nuxt/dist/pages/runtime/utils.js ($id_UauUSmVzfY)
// - /node_modules/nuxt/dist/app/nuxt.js ($id_cbtJsgBTYi)
// - /node_modules/nuxt/dist/app/components/utils.js ($id_XcQgbwvARI)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs ($id_DpM3LLuOgA)
// --------------------
const $id_NVw4t3CVS5 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/vue-router.mjs");
const __vite_ssr_import_2__ = await __vite_ssr_import__("defu");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/utils.js");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/nuxt.js");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/utils.js");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs");







__vite_ssr_exports__.default = /* #__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs }) {
    const nuxtApp = __vite_ssr_import_4__.useNuxtApp();
    return () => {
      return __vite_ssr_import_0__.h(__vite_ssr_import_1__.RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            return;
          }
          const key = __vite_ssr_import_3__.generateRouteKey(routeProps, props.pageKey);
          const done = nuxtApp.deferHydration();
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? __vite_ssr_import_6__.appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            __vite_ssr_import_6__.appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          return __vite_ssr_import_5__._wrapIf(
            __vite_ssr_import_0__.Transition,
            hasTransition && transitionProps,
            __vite_ssr_import_3__.wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? __vite_ssr_import_6__.appKeepalive,
              __vite_ssr_import_0__.h(__vite_ssr_import_0__.Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  __vite_ssr_import_0__.nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, { default: () => __vite_ssr_import_0__.h(RouteProvider, { key, routeProps, pageKey: key, hasTransition }) })
            )
          ).default();
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return __vite_ssr_import_2__.defu(..._props);
}
const RouteProvider = /* #__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "RouteProvider",
  // TODO: Type props
  // eslint-disable-next-line vue/require-prop-types
  props: ["routeProps", "pageKey", "hasTransition"],
  setup(props) {
    const previousKey = props.pageKey;
    const previousRoute = props.routeProps.route;
    const route = {};
    for (const key in props.routeProps.route) {
      route[key] = __vite_ssr_import_0__.computed(() => previousKey === props.pageKey ? props.routeProps.route[key] : previousRoute[key]);
    }
    __vite_ssr_import_0__.provide("_route", __vite_ssr_import_0__.reactive(route));
    let vnode;
    if (true && false && props.hasTransition) {
      __vite_ssr_import_0__.onMounted(() => {
        __vite_ssr_import_0__.nextTick(() => {
          if (["#comment", "#text"].includes(vnode?.el?.nodeName)) {
            const filename = (vnode?.type).__file;
            console.warn(`[nuxt] \`${filename}\` does not have a single root node and will cause errors when navigating between routes.`);
          }
        });
      });
    }
    return () => {
      if (true && false) {
        vnode = __vite_ssr_import_0__.h(props.routeProps.Component);
        return vnode;
      }
      return __vite_ssr_import_0__.h(props.routeProps.Component);
    };
  }
});
;
}


// --------------------
// Request: defu
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.js ($id_Gu6Fb8JH8w)
// Dependencies: 

// --------------------
const $id_q6X4BWspBy = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("defu")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"defu\".")
  })


// --------------------
// Request: /node_modules/nuxt/dist/pages/runtime/utils.js
// Parents: 
// - /node_modules/nuxt/dist/pages/runtime/page.js ($id_Gu6Fb8JH8w)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// --------------------
const $id_hkrs5XSreS = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");

const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => route.params[r.slice(1)]?.toString() || "");
};
const generateRouteKey = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => m.components?.default === routeProps.Component.type);
  const source = override ?? matchedRoute?.meta.key ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
Object.defineProperty(__vite_ssr_exports__, "generateRouteKey", { enumerable: true, configurable: true, get(){ return generateRouteKey }});
const wrapInKeepAlive = (props, children) => {
  return { default: () => false && props ? __vite_ssr_import_0__.h(__vite_ssr_import_0__.KeepAlive, props === true ? {} : props, children) : children };
};
Object.defineProperty(__vite_ssr_exports__, "wrapInKeepAlive", { enumerable: true, configurable: true, get(){ return wrapInKeepAlive }});
;
}


// --------------------
// Request: /layouts/users.vue
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/layouts.mjs ($id_OmMa3fn6Pn)
// Dependencies: 
// - /components/Header.vue ($id_TihPwxfEDt)
// - /node_modules/nuxt/dist/pages/runtime/page.js ($id_Gu6Fb8JH8w)
// - /node_modules/nuxt/dist/app/components/nuxt-link.js ($id_g9hqu8HOHe)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_vi65wTOF5y = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/components/Header.vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/nuxt/dist/pages/runtime/page.js");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.js");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");



const _sfc_main = {}



function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __vite_ssr_import_0__.default
  const _component_NuxtPage = __vite_ssr_import_1__.default
  const _component_NuxtLink = __vite_ssr_import_2__.default

  _push(`<div${__vite_ssr_import_4__.ssrRenderAttrs(__vite_ssr_import_3__.mergeProps({ class: "page page--gray page--login" }, _attrs))}>`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_Header, null, null, _parent))
  _push(`<main class="page__main page__main--login"><div class="page__login-container container">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtPage, null, null, _parent))
  _push(`<section class="locations locations--login locations--current"><div class="locations__item">`)
  _push(__vite_ssr_import_4__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "locations__item-link"
  }, {
    default: __vite_ssr_import_3__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`<span${_scopeId}>Amsterdam</span>`)
      } else {
        return [
          __vite_ssr_import_3__.createVNode("span", null, "Amsterdam")
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></section></div></main></div>`)
}



const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/users.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/user/projects/1814207-six-cities-simple-3/frontend/project/layouts/users.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// --------------------
const $id_LKd7X3MSFV = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/error-component.mjs ($id_6n2CzVsOL6)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// --------------------
const $id_921TGTgMkd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;



// Deliberately prevent reactive update when error is cleared
// eslint-disable-next-line vue/no-setup-props-destructure
const { error } = props

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
        line.includes('internal') ||
        line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = Number(error.statusCode || 500)
const is404 = statusCode === 404

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

// TODO: Investigate side-effect issue with imports
const _Error404 = /* #__PURE__ */ __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue").then(r => r.default || r))
const _Error = true
  ? /* #__PURE__ */ __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue").then(r => r.default || r))
  : /* #__PURE__ */ __vite_ssr_import_0__.defineAsyncComponent(() => __vite_ssr_dynamic_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue").then(r => r.default || r))

const ErrorTemplate = is404 ? _Error404 : _Error

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, _Error404, _Error, ErrorTemplate, defineAsyncComponent: __vite_ssr_import_0__.defineAsyncComponent }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_2__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_1__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}



const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_3__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_4__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"/home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/nuxt-link.js ($id_g9hqu8HOHe)
// - /node_modules/@unhead/vue/dist/index.mjs ($id_gagBM5c1XT)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css ($id_UH106zs9IT)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_YI6E130ZSN = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/nuxt-link.js");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/@unhead/vue/dist/index.mjs");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_3__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css");
const __vite_ssr_import_5__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");


const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 404
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, get useHead() { return __vite_ssr_import_1__.useHead } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-bc8852ab><div class="fixed left-0 right-0 spotlight z-10" data-v-bc8852ab></div><div class="max-w-520px text-center z-20" data-v-bc8852ab><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-bc8852ab>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-bc8852ab>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-bc8852ab>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}




const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-bc8852ab"],['__file',"/home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_uQ1ND2iuUo)
// Dependencies: 

// --------------------
const $id_jIbUn0IkCP = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-bc8852ab]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh);height:40vh;bottom:-30vh}.gradient-border[data-v-bc8852ab]{position:relative;border-radius:0.5rem;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}@media (prefers-color-scheme: light){.gradient-border[data-v-bc8852ab]{background-color:rgba(255, 255, 255, 0.3)}.gradient-border[data-v-bc8852ab]::before{background:linear-gradient(90deg, #e2e2e2 0%, #e2e2e2 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}@media (prefers-color-scheme: dark){.gradient-border[data-v-bc8852ab]{background-color:rgba(20, 20, 20, 0.3)}.gradient-border[data-v-bc8852ab]::before{background:linear-gradient(90deg, #303030 0%, #303030 25%, #00DC82 50%, #36E4DA 75%, #0047E1 100%)}}.gradient-border[data-v-bc8852ab]::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:0.5rem;padding:2px;width:100%;background-size:400% auto;opacity:0.5;transition:background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;-webkit-mask:linear-gradient(#fff 0 0) content-box,\n            linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,\n                    linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude}.gradient-border[data-v-bc8852ab]:hover::before{background-position:-50% 0;opacity:1}.bg-white[data-v-bc8852ab]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-bc8852ab]{cursor:pointer}.flex[data-v-bc8852ab]{display:flex}.grid[data-v-bc8852ab]{display:grid}.place-content-center[data-v-bc8852ab]{place-content:center}.items-center[data-v-bc8852ab]{align-items:center}.justify-center[data-v-bc8852ab]{justify-content:center}.font-sans[data-v-bc8852ab]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-bc8852ab]{font-weight:500}.font-light[data-v-bc8852ab]{font-weight:300}.text-8xl[data-v-bc8852ab]{font-size:6rem;line-height:1}.text-xl[data-v-bc8852ab]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-bc8852ab]{line-height:1.25}.mb-8[data-v-bc8852ab]{margin-bottom:2rem}.mb-16[data-v-bc8852ab]{margin-bottom:4rem}.max-w-520px[data-v-bc8852ab]{max-width:520px}.min-h-screen[data-v-bc8852ab]{min-height:100vh}.overflow-hidden[data-v-bc8852ab]{overflow:hidden}.px-8[data-v-bc8852ab]{padding-left:2rem;padding-right:2rem}.py-2[data-v-bc8852ab]{padding-top:.5rem;padding-bottom:.5rem}.px-4[data-v-bc8852ab]{padding-left:1rem;padding-right:1rem}.fixed[data-v-bc8852ab]{position:fixed}.left-0[data-v-bc8852ab]{left:0px}.right-0[data-v-bc8852ab]{right:0px}.text-center[data-v-bc8852ab]{text-align:center}.text-black[data-v-bc8852ab]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-bc8852ab]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-bc8852ab]{width:100%}.z-10[data-v-bc8852ab]{z-index:10}.z-20[data-v-bc8852ab]{z-index:20}@media (min-width: 640px){.sm\\:text-4xl[data-v-bc8852ab]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-bc8852ab]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-bc8852ab]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-bc8852ab]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-bc8852ab]{padding-top:.75rem;padding-bottom:.75rem}.sm\\:px-6[data-v-bc8852ab]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-bc8852ab]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-bc8852ab]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/@unhead/vue/dist/index.mjs ($id_gagBM5c1XT)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css ($id_qcoFgmhGJ5)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_BJMYede6Eb = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@unhead/vue/dist/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 500
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, get useHead() { return __vite_ssr_import_0__.useHead } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-6b2d7187><div class="fixed left-0 right-0 spotlight" data-v-6b2d7187></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-6b2d7187>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-6b2d7187>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-6b2d7187><pre class="text-xl font-light leading-tight z-10 p-8" data-v-6b2d7187>${
    $props.stack
  }</pre></div></div>`)
}




const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-6b2d7187"],['__file',"/home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_vC10oUHchO)
// Dependencies: 

// --------------------
const $id_zU3KktJDTV = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-6b2d7187]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);opacity:0.8;filter:blur(30vh);height:60vh;bottom:-40vh}.bg-white[data-v-6b2d7187]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-6b2d7187]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-6b2d7187]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-6b2d7187]{display:flex}.flex-col[data-v-6b2d7187]{flex-direction:column}.flex-1[data-v-6b2d7187]{flex:1 1 0%}.font-sans[data-v-6b2d7187]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-6b2d7187]{font-weight:500}.font-light[data-v-6b2d7187]{font-weight:300}.h-auto[data-v-6b2d7187]{height:auto}.text-xl[data-v-6b2d7187]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-6b2d7187]{font-size:3.75rem;line-height:1}.leading-tight[data-v-6b2d7187]{line-height:1.25}.mb-8[data-v-6b2d7187]{margin-bottom:2rem}.mb-6[data-v-6b2d7187]{margin-bottom:1.5rem}.min-h-screen[data-v-6b2d7187]{min-height:100vh}.overflow-y-auto[data-v-6b2d7187]{overflow-y:auto}.p-8[data-v-6b2d7187]{padding:2rem}.px-10[data-v-6b2d7187]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-6b2d7187]{padding-top:3.5rem}.fixed[data-v-6b2d7187]{position:fixed}.left-0[data-v-6b2d7187]{left:0px}.right-0[data-v-6b2d7187]{right:0px}.text-black[data-v-6b2d7187]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-6b2d7187]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-6b2d7187]{z-index:10}@media (min-width: 640px){.sm\\:text-8xl[data-v-6b2d7187]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-6b2d7187]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-6b2d7187]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-6b2d7187]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-6b2d7187]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_jMbXP0vyaY)
// Dependencies: 
// - /node_modules/@unhead/vue/dist/index.mjs ($id_gagBM5c1XT)
// - vue ($id_VkOCJnUZrn)
// - vue/server-renderer ($id_UyJffsox60)
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css ($id_anXr5LNAH3)
// - /@id/__x00__plugin-vue:export-helper ($id_eFZ80lXORx)
// --------------------
const $id_BZplh9R2tx = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/@unhead/vue/dist/index.mjs");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue/server-renderer");
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css");
const __vite_ssr_import_4__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/__x00__plugin-vue:export-helper");

const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: Number,
    default: 500
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, get useHead() { return __vite_ssr_import_0__.useHead } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}



function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-f37408fc><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-f37408fc></div><div class="max-w-520px text-center" data-v-f37408fc><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-f37408fc>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-f37408fc>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}




const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-f37408fc"],['__file',"/home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css
// Parents: 
// - /node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_FMi1dBhUQk)
// Dependencies: 

// --------------------
const $id_aNL2Q0cdkg = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = "\n.spotlight[data-v-f37408fc]{background:linear-gradient(45deg, #00DC82 0%, #36E4DA 50%, #0047E1 100%);filter:blur(20vh)}.bg-white[data-v-f37408fc]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-f37408fc]{display:grid}.place-content-center[data-v-f37408fc]{place-content:center}.font-sans[data-v-f37408fc]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-f37408fc]{font-weight:500}.font-light[data-v-f37408fc]{font-weight:300}.h-1\\/2[data-v-f37408fc]{height:50%}.text-8xl[data-v-f37408fc]{font-size:6rem;line-height:1}.text-xl[data-v-f37408fc]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-f37408fc]{line-height:1.25}.mb-8[data-v-f37408fc]{margin-bottom:2rem}.mb-16[data-v-f37408fc]{margin-bottom:4rem}.max-w-520px[data-v-f37408fc]{max-width:520px}.min-h-screen[data-v-f37408fc]{min-height:100vh}.overflow-hidden[data-v-f37408fc]{overflow:hidden}.px-8[data-v-f37408fc]{padding-left:2rem;padding-right:2rem}.fixed[data-v-f37408fc]{position:fixed}.left-0[data-v-f37408fc]{left:0px}.right-0[data-v-f37408fc]{right:0px}.-bottom-1\\/2[data-v-f37408fc]{bottom:-50%}.text-center[data-v-f37408fc]{text-align:center}.text-black[data-v-f37408fc]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-f37408fc]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width: 640px){.sm\\:text-4xl[data-v-f37408fc]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-f37408fc]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-f37408fc]{padding-left:0;padding-right:0}}@media (prefers-color-scheme: dark){.dark\\:bg-black[data-v-f37408fc]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-f37408fc]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}\n";
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/island-renderer.js
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// Dependencies: 
// - vue ($id_VkOCJnUZrn)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.islands.mjs ($id_RPT2JQCCS7)
// - /node_modules/nuxt/dist/app/composables/error.js ($id_2FidUTdZvd)
// --------------------
const $id_zwc34DV0CQ = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.islands.mjs");
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/composables/error.js");



__vite_ssr_exports__.default = /* #__PURE__ */ __vite_ssr_import_0__.defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = __vite_ssr_import_1__[props.context.name];
    if (!component) {
      throw __vite_ssr_import_2__.createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${JSON.stringify(component)}`
      });
    }
    return () => __vite_ssr_import_0__.createVNode(component || "span", { ...props.context.props, "nuxt-ssr-component-uid": "" });
  }
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.islands.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/island-renderer.js ($id_J7KWDNzYhZ)
// Dependencies: 

// --------------------
const $id_gxNzhaSr9h = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {};
}


// --------------------
// Request: /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/test-component-wrapper.mjs
// Parents: 
// - /node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_6btoGdWLJh)
// Dependencies: 
// - /node_modules/nuxt/dist/app/components/test-component-wrapper.js ($id_QKyW9deWPQ)
// --------------------
const $id_UBU5pvf2Do = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/nuxt/dist/app/components/test-component-wrapper.js");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/nuxt/dist/app/components/test-component-wrapper.js
// Parents: 
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/test-component-wrapper.mjs ($id_6fM76llwU0)
// Dependencies: 
// - ufo ($id_Idgm3MW7hZ)
// - vue ($id_VkOCJnUZrn)
// - vue-router ($id_RGqOect6fq)
// - pathe ($id_bDQP7LmLC7)
// - /@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs ($id_DpM3LLuOgA)
// --------------------
const $id_YYzkCdvxN8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("ufo");
const __vite_ssr_import_1__ = await __vite_ssr_import__("vue");
const __vite_ssr_import_2__ = await __vite_ssr_import__("vue-router");
const __vite_ssr_import_3__ = await __vite_ssr_import__("pathe");
const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs");





__vite_ssr_exports__.default = (url) => /* #__PURE__ */ __vite_ssr_import_1__.defineComponent({
  name: "NuxtTestComponentWrapper",
  async setup(props, { attrs }) {
    const query = __vite_ssr_import_2__.parseQuery(__vite_ssr_import_0__.parseURL(url).search);
    const urlProps = query.props ? JSON.parse(query.props) : {};
    const path = __vite_ssr_import_3__.resolve(query.path);
    if (!path.startsWith(__vite_ssr_import_4__.devRootDir)) {
      throw new Error(`[nuxt] Cannot access path outside of project root directory: \`${path}\`.`);
    }
    const comp = await __vite_ssr_dynamic_import__(
      /* @vite-ignore */
      query.path
    ).then((r) => r.default);
    return () => [
      __vite_ssr_import_1__.h("div", "Component Test Wrapper for " + query.path),
      __vite_ssr_import_1__.h("div", { id: "nuxt-component-root" }, [
        __vite_ssr_import_1__.h(comp, { ...attrs, ...props, ...urlProps })
      ])
    ];
  }
});
;
}


// --------------------
// Request: pathe
// Parents: 
// - /node_modules/nuxt/dist/app/components/test-component-wrapper.js ($id_QKyW9deWPQ)
// Dependencies: 

// --------------------
const $id_VHawnm5lvi = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("pathe")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"pathe\".")
  })


const __modules__ = {
  "/home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/app/entry.js": $id_acFyUhZEAH,
  vue: $id_ktywPNbBs3,
  "/node_modules/vue/index.js": $id_mvLyULLGX6,
  ofetch: $id_R2Lf8iMud7,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/paths.mjs": $id_988RDeVMnj,
  "/node_modules/ufo/dist/index.mjs": $id_zRixqOrprr,
  "/node_modules/nuxt/dist/app/nuxt.js": $id_sALCwTsmza,
  hookable: $id_p6x8naIYgL,
  unctx: $id_Zn9H5zfDIh,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/css.mjs": $id_L28ykIoVQq,
  "/assets/css/main.css": $id_3OkJSbgAR2,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/plugins/server.mjs": $id_RAriUTnbdO,
  "/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.mjs": $id_wfPHNxH2Pg,
  pinia: $id_jzLU7WEUI3,
  "/node_modules/nuxt/dist/app/index.js": $id_1Qp6x1UA7f,
  "/node_modules/nuxt/dist/app/composables/index.js": $id_r8JRcSFwFF,
  "/node_modules/@unhead/vue/dist/index.mjs": $id_1nMcQV1pDv,
  unhead: $id_yJrok2P1Ph,
  "/node_modules/@unhead/vue/dist/shared/vue.505b826e.mjs": $id_7wibDrW982,
  "@unhead/shared": $id_M2Iohz6Ehq,
  "/node_modules/nuxt/dist/app/composables/component.js": $id_kCJDZe9gID,
  "/node_modules/nuxt/dist/app/composables/asyncData.js": $id_KOty97QEcE,
  "/node_modules/nuxt/dist/app/composables/error.js": $id_mwfduYDqmR,
  h3: $id_K2PnHEPz0m,
  "/node_modules/nuxt/dist/app/composables/router.js": $id_658BkKajvD,
  ufo: $id_KJr7LehhrL,
  "/node_modules/nuxt/dist/app/composables/state.js": $id_U9DcvmA1To,
  "/node_modules/nuxt/dist/app/composables/ready.js": $id_F8E7JfWS3k,
  "/node_modules/nuxt/dist/app/compat/idle-callback.js": $id_NEHaRet5Qt,
  "/node_modules/nuxt/dist/app/composables/hydrate.js": $id_DYWusgJ62C,
  "/node_modules/nuxt/dist/app/composables/fetch.js": $id_jpN9dMhHA6,
  ohash: $id_ApQSwD9AXx,
  "/node_modules/nuxt/dist/app/composables/ssr.js": $id_eQIOnnCkL6,
  "/node_modules/nuxt/dist/app/composables/cookie.js": $id_9mr3MbDwwc,
  "cookie-es": $id_t3HHRMhh7L,
  destr: $id_ZK3lg3ye5b,
  "/node_modules/nuxt/dist/app/composables/preload.js": $id_jjgKHGQZOv,
  "/node_modules/nuxt/dist/app/composables/payload.js": $id_KdrlwRpMka,
  devalue: $id_Q1u7ol7AXS,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/nuxt.config.mjs": $id_o2F06jHcbh,
  "/node_modules/nuxt/dist/app/composables/chunk.js": $id_nI4NP3EukU,
  "/node_modules/nuxt/dist/app/composables/url.js": $id_Oo8AkqgKTk,
  "/node_modules/nuxt/dist/app/components/index.js": $id_ivVk6lCKw3,
  "/node_modules/nuxt/dist/app/components/nuxt-link.js": $id_2kvxX8kFSs,
  "/node_modules/nuxt/dist/app/config.js": $id_GVmnzQeYXi,
  klona: $id_MT0DEYp506,
  "/.nuxt/app.config.mjs": $id_WyyAnP0gwc,
  "/node_modules/defu/dist/defu.mjs": $id_x2kRxyaSeQ,
  "/node_modules/nuxt/dist/app/plugins/revive-payload.server.js": $id_3nWtAj7hgG,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.plugin.mjs": $id_hyVSaGtfGc,
  "/components/BookmarksButton.vue?nuxt_component=async": $id_5VSzW0O35I,
  "/components/BookmarksButton.vue": $id_G7JuncrBa0,
  "vue/server-renderer": $id_aRHphPzMpI,
  "/@id/__x00__plugin-vue:export-helper": $id_mHD6riC5ol,
  "/components/EmptyHotelsList.vue?nuxt_component=async": $id_7a1yHqhR7u,
  "/components/EmptyHotelsList.vue": $id_dOSY7ZLrZL,
  "/components/Footer.vue?nuxt_component=async": $id_0LBKdUEHFL,
  "/components/Footer.vue": $id_ehziwFEPis,
  "/components/FormError.vue?nuxt_component=async": $id_WnETKkV3Ri,
  "/components/FormError.vue": $id_ZBJUm3CIU9,
  "/components/FormInput.vue?nuxt_component=async": $id_7SKHKupkZK,
  "/components/FormInput.vue": $id_CrXpByPqn1,
  "/components/FormRatingInput.vue?nuxt_component=async": $id_iZPe96PNEZ,
  "/components/FormRatingInput.vue": $id_q9IYJfS5mi,
  "/components/Header.vue?nuxt_component=async": $id_OnRQfyniRb,
  "/components/Header.vue": $id_2XeyhrzP9k,
  "/components/HostInfo.vue?nuxt_component=async": $id_kT0flZok3e,
  "/components/HostInfo.vue": $id_l5Ul3003Hw,
  "/components/HotelCard.vue?nuxt_component=async": $id_1ZfW2A6I3Y,
  "/components/HotelCard.vue": $id_oVPBvfhe0Z,
  "/components/HotelRating.vue": $id_nyRRy5wSKK,
  "/utils/common.ts": $id_erTj1GTbgX,
  "/const/common.ts": $id_9uTDPTWI8t,
  "/components/HotelGallery.vue?nuxt_component=async": $id_XW2rEmpSyy,
  "/components/HotelGallery.vue": $id_020ZEjnHga,
  "/components/HotelGalleryItem.vue": $id_zYSTDT56lt,
  "/components/HotelGalleryItem.vue?nuxt_component=async": $id_GN2TB98WjW,
  "/components/HotelLocationsItem.vue?nuxt_component=async": $id_wCeEhz00C8,
  "/components/HotelLocationsItem.vue": $id_yW9bK7plNL,
  "/components/HotelRating.vue?nuxt_component=async": $id_CsQ8EQw4WG,
  "/components/HotelReviews.vue?nuxt_component=async": $id_XxBBDZMjMC,
  "/components/HotelReviews.vue": $id_4q8TxbCdvM,
  "/components/ReviewsItem.vue": $id_PV3KbMBbCe,
  "/components/HotelSortForm.vue?nuxt_component=async": $id_xDUtCg51H4,
  "/components/HotelSortForm.vue": $id_WGzJMKMUeC,
  "/components/SortOption.vue": $id_6NyFHeqBVY,
  "/components/HotelsList.vue?nuxt_component=async": $id_QcJtkszsLl,
  "/components/HotelsList.vue": $id_Va52kUusjm,
  "/components/HotelsListItem.vue": $id_dZee0Kdasf,
  "/const/routes.ts": $id_UVJIUwIeN7,
  "/components/HotelsListItem.vue?nuxt_component=async": $id_q9WG7BbIvP,
  "/components/HotelsLocations.vue?nuxt_component=async": $id_7soUldYSCP,
  "/components/HotelsLocations.vue": $id_GoTODQWTfW,
  "/components/LoadingScreen.vue?nuxt_component=async": $id_AnIhda4UHU,
  "/components/LoadingScreen.vue": $id_k38LRDkvX0,
  "/components/LocationsMap.vue?nuxt_component=async": $id_OQKxFzFnGc,
  "/components/LocationsMap.vue": $id_Yoc06nn4US,
  "/components/NearbyHotels.vue?nuxt_component=async": $id_hhRb04z2mh,
  "/components/NearbyHotels.vue": $id_1lqvgItHft,
  "/components/PageFooter.vue?nuxt_component=async": $id_bPKWkaJx2X,
  "/components/PageFooter.vue": $id_qZu2rCn8u5,
  "/components/PropertyItem.vue?nuxt_component=async": $id_JGz0aT5oMM,
  "/components/PropertyItem.vue": $id_4od3l8Hrxx,
  "/components/ReviewForm.vue?nuxt_component=async": $id_JfzQeyxTvp,
  "/components/ReviewForm.vue": $id_0a2hBihrkx,
  "/components/ReviewsItem.vue?nuxt_component=async": $id_J45QV9I6jp,
  "/components/SortOption.vue?nuxt_component=async": $id_JEZfJCctjs,
  "/node_modules/nuxt/dist/head/runtime/plugins/unhead.js": $id_1I531sGzWn,
  "@unhead/ssr": $id_tKWJCUwI9W,
  "/node_modules/nuxt/dist/pages/runtime/plugins/router.js": $id_zgtilDkNCy,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/vue-router.mjs": $id_T2Y8kUUQMJ,
  "vue-router": $id_7dT9jx0uwT,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/routes.mjs": $id_gjhBvU2abm,
  "/pages/SignIn.vue?macro=true": $id_oyfkNA25Mc,
  "/pages/index.vue?macro=true": $id_VlH7mPF5UU,
  "/pages/offer/[id].vue?macro=true": $id_EGXRCaTOm9,
  "/pages/SignIn.vue": $id_R9VuHfEPiH,
  "/node_modules/nuxt/dist/pages/runtime/composables.js": $id_bw4je9zLwR,
  "/stores/useUserStore.ts": $id_dpozEPk55p,
  "nuxt-storage": $id_39wBofSDi2,
  "/states.ts": $id_XWSPznCzZv,
  "/pages/index.vue": $id_deQD3HL8Z9,
  "/stores/useHotelsStore.ts": $id_jXkTPDi2b9,
  "/pages/offer/[id].vue": $id_t5PnLjMZNK,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/router.options.mjs": $id_pEFzLjzrqA,
  "/node_modules/nuxt/dist/pages/runtime/router.options.js": $id_anMEEJcztT,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/middleware.mjs": $id_cGljapDxRE,
  "/node_modules/nuxt/dist/pages/runtime/validate.js": $id_4TzlseLgdh,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/root-component.mjs": $id_V1soBacLdW,
  "/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_TYLWlhy3x8,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/app-component.mjs": $id_JtQkjqgzyv,
  "/app.vue": $id_qs1VfFGLbC,
  "/node_modules/nuxt/dist/app/components/layout.js": $id_I9cxmEYsMF,
  "/node_modules/nuxt/dist/app/components/utils.js": $id_MTwY5WuuN2,
  "@vue/shared": $id_NOAOzpHkPB,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/pages.mjs": $id_BCBPrhTe5R,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/layouts.mjs": $id_G3xaTb24N4,
  "/layouts/default.vue": $id_sNwScSO35P,
  "/node_modules/nuxt/dist/pages/runtime/page.js": $id_NVw4t3CVS5,
  defu: $id_q6X4BWspBy,
  "/node_modules/nuxt/dist/pages/runtime/utils.js": $id_hkrs5XSreS,
  "/layouts/users.vue": $id_vi65wTOF5y,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/error-component.mjs": $id_LKd7X3MSFV,
  "/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_921TGTgMkd,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_YI6E130ZSN,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=bc8852ab&lang.css": $id_jIbUn0IkCP,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_BJMYede6Eb,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=6b2d7187&lang.css": $id_zU3KktJDTV,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_BZplh9R2tx,
  "/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=f37408fc&lang.css": $id_aNL2Q0cdkg,
  "/node_modules/nuxt/dist/app/components/island-renderer.js": $id_zwc34DV0CQ,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/components.islands.mjs": $id_gxNzhaSr9h,
  "/@id/virtual:nuxt:/home/user/projects/1814207-six-cities-simple-3/frontend/project/.nuxt/test-component-wrapper.mjs": $id_UBU5pvf2Do,
  "/node_modules/nuxt/dist/app/components/test-component-wrapper.js": $id_YYzkCdvxN8,
  pathe: $id_VHawnm5lvi
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("/home/user/projects/1814207-six-cities-simple-3/frontend/project/node_modules/nuxt/dist/app/entry.js")