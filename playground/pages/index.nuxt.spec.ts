import { test, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import flushpromises from "flush-promises";
import { mockNuxtImport } from "@wattanx/nuxt-bridge-vitest/runtime";
import Index from "./index.vue";

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

test.only("index", async () => {
  console.log("before mount");
  const wrapper = mount(Index);
  await flushpromises();

  expect(wrapper.text()).toContain(
    "Hello, This is an auto-imported component!"
  );
});

test("save", async () => {
  const wrapper = mount(Index);
  const button = wrapper.find("button");
  await button.trigger("click");
  expect(push).toHaveBeenCalled();
});
