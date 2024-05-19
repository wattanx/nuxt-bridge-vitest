import { setup, createPage } from "@wattanx/nuxt-bridge-vitest/e2e";
import { describe, it, expect } from "vitest";

describe("e2e", async () => {
  await setup({
    rootDir: "playground",
    server: true,
    browser: true,
    dev: true,
  });

  it("should render", async () => {
    const page = await createPage("/");

    const text = await page.textContent("h1");

    expect(text).toBe("Hello World");
  });
});
