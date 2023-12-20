import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  externals: ["@nuxt/schema", "vitest"],
  failOnWarn: false,
});
