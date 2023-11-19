import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue2";
import { mockNuxtImportPlugin } from "@wattanx/nuxt-bridge-vitest/plugin";
import { createUnimport } from "unimport";

const granularAppPresets = [
  {
    imports: [
      "setNuxtAppInstance",
      "useNuxtApp",
      "defineNuxtPlugin",
      "useRuntimeConfig",
      "useNuxt2Meta",
    ],
    from: "#app/nuxt",
  },
  {
    imports: ["defineNuxtComponent"],
    from: "#app/composables/component",
  },
  {
    imports: [
      "useRoute",
      "useRouter",
      "abortNavigation",
      "addRouteMiddleware",
      "defineNuxtRouteMiddleware",
      "navigateTo",
    ],
    from: "#app/composables/router",
  },
  {
    imports: ["useState"],
    from: "#app/composables/state",
  },
  {
    imports: ["useLazyAsyncData", "refreshNuxtData"],
    from: "#app/composables/asyncData",
  },
  {
    imports: [
      "clearError",
      "createError",
      "isNuxtError",
      "showError",
      "useError",
      "throwError",
    ],
    from: "#app/composables/error",
  },
  {
    imports: ["useLazyFetch"],
    from: "#app/composables/fetch",
  },
  {
    imports: ["useCookie"],
    from: "#app/composables/cookie",
  },
  {
    imports: ["useRequestHeaders", "useRequestEvent"],
    from: "#app/composables/ssr",
  },
  {
    imports: ["useAsyncData", "useFetch", "useHydration"],
    from: "#app/mocks",
  },
];

const ctx = createUnimport({
  presets: granularAppPresets,
});

export default defineConfig(async () => {
  return {
    plugins: [
      vue(),
      mockNuxtImportPlugin({
        resolvedFirstSetupFile: null,
        imports: await ctx.getImports(),
      }),
    ],
    test: {
      alias: [
        { find: "#imports", replacement: ".nuxt/imports.mjs" },
        {
          find: "#app/",
          replacement: "@nuxt/bridge/dist/runtime/",
        },
      ],
      environment: "happy-dom",
    },
  };
});
