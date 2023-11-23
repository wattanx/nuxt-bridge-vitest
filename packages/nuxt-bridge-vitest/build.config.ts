import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  externals: ["@nuxt/schema", "vite", "vitest"],
  failOnWarn: false,
});
