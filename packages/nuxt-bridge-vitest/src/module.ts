import { defineNuxtModule, installModule } from "@nuxt/kit";
import mockTransform from "./modules/mock";

export default defineNuxtModule({
  meta: {
    name: "@wattanx/nuxt-bridge-vitest",
  },
  async setup(_, nuxt) {
    await installModule(mockTransform);
  },
});
