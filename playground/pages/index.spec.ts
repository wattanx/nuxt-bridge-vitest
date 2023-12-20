import { test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Index from "./index.vue";
import { mockNuxtImport } from "@wattanx/nuxt-bridge-vitest/runtime";

const { push } = vi.hoisted(() => {
  return {
    push: vi.fn(),
  };
});

mockNuxtImport("useRouter", () => {
  return () => ({
    push,
  });
});

test("index", async () => {
  const wrapper = mount(Index);

  expect(wrapper.text()).toContain("Hello World");
});

test("save", async () => {
  const wrapper = mount(Index);
  const button = wrapper.find("button");
  await button.trigger("click");
  expect(push).toHaveBeenCalled();
});
