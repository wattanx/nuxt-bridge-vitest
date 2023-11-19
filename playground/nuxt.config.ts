import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  ssr: false,
  telemetry: false,
  bridge: {
    meta: false,
    vite: true,
    nitro: true,
  },
  build: {
    quiet: true,
  },
  vite: {
    // TODO: fix bug with stubbing root package
    resolve: {
      alias: {
        "@wattanx/nuxt-bridge-vitest/config":
          "../packages/nuxt-bridge-vitest/src/config",
        "@wattanx/nuxt-bridge-vitest/utils":
          "../packages/nuxt-bridge-vitest/src/utils",
      },
    },
  },
});
