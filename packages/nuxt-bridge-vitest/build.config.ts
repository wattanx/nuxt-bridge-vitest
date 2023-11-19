import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  externals: ["#imports", "@nuxt/schema", "vite", "vitest", "unimport"],
  failOnWarn: false,
});
