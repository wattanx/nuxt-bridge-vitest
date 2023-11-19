import { defineNuxtModule, installModule } from "@nuxt/kit";
import mockTransform from "./modules/mock";

export default defineNuxtModule({
  meta: {
    name: "nuxt-bridge-vitest",
  },
  async setup() {
    await installModule(mockTransform);
  },
});
