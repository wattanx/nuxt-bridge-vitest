import { defineNuxtConfig } from "@nuxt/bridge";
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  ssr: false,
  telemetry: false,
  bridge: {
    meta: false,
    vite: false,
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
        "@wattanx/nuxt-bridge-vitest/runtime": fileURLToPath(
          new URL("../packages/nuxt-bridge-vitest/src/runtime", import.meta.url)
        ),
      },
    },
  },
});
