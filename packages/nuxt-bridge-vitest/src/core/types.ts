import type { ExecaChildProcess } from "execa";
import type { Browser, LaunchOptions } from "playwright-core";
import type { NuxtConfig, Nuxt } from "@nuxt/schema";

export type TestRunner = "vitest" | "jest" | "cucumber";

export interface TestOptions {
  testDir: string;
  fixture: string;
  configFile: string;
  rootDir: string;
  buildDir: string;
  nuxtConfig: NuxtConfig;
  build: boolean;
  dev: boolean;
  setupTimeout: number;
  waitFor: number;
  browser: boolean;
  runner: TestRunner;
  logLevel: number;
  browserOptions: {
    type: "chromium" | "firefox" | "webkit";
    launch?: LaunchOptions;
  };
  server: boolean;
  port?: number;
}

export interface TestContext {
  options: TestOptions;
  nuxt?: Nuxt;
  browser?: Browser;
  url?: string;
  serverProcess?: ExecaChildProcess;
  mockFn?: (...args: unknown[]) => unknown;
  /**
   * Functions to run on the vitest `afterAll` hook.
   * Useful for removing anything created during the test.
   */
  teardown?: (() => void)[];
}

export interface TestHooks {
  beforeEach: () => void;
  afterEach: () => void;
  afterAll: () => Promise<void>;
  setup: () => Promise<void>;
  ctx: TestContext;
}
