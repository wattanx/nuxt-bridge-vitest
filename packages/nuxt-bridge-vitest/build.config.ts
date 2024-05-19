import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  externals: [
    "@nuxt/schema",
    "vitest",
    "playwright-core",
    "nitropack",
    "nuxt/schema",
    "@cucumber/cucumber",
    "@jest/globals",
    "@playwright/test",
  ],
  failOnWarn: false,
});
