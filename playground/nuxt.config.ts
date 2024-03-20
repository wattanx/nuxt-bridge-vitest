import { defineNuxtConfig } from "@nuxt/bridge";
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  telemetry: false,
  bridge: {
    meta: false,
    vite: true,
    nitro: true,
    macros: {
      pageMeta: true,
    },
  },
  build: {
    quiet: true,
  },
  components: true,
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
  plugins: ["~/plugins/hello"],
});
