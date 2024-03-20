import { defineVitestConfig } from "@wattanx/nuxt-bridge-vitest/config";
import { fileURLToPath } from "node:url";

export default defineVitestConfig({
  test: {
    environment: "happy-dom",
  },
});
