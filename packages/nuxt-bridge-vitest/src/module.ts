import { defineNuxtModule, installModule, addVitePlugin } from "@nuxt/kit";
import { join } from "pathe";
import mockTransform from "./modules/mock";
import { NuxtRootStubPlugin } from "./modules/plugins/entry";

export default defineNuxtModule({
  meta: {
    name: "@wattanx/nuxt-bridge-vitest",
  },
  async setup(_, nuxt) {
    await installModule(mockTransform);

    addVitePlugin(
      NuxtRootStubPlugin.vite({
        entry: join(nuxt.options.buildDir, "client.js"),
      })
    );
  },
});
