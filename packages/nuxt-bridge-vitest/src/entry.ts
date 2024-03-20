import { vi } from "vitest";

if (
  typeof window !== "undefined" &&
  // @ts-expect-error undefined property
  window.__NUXT_VITEST_ENVIRONMENT__
) {
  // @ts-expect-error alias to allow us to transform the entrypoint
  await import("#app/nuxt-vitest-app-entry");

  vi.resetModules();
}

export {};
