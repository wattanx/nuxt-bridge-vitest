import { addVitePlugin, defineNuxtModule } from "@nuxt/kit";
import type { Import, Unimport } from "unimport";
import { createMockPlugin } from "./plugins/mock";
import type { MockPluginContext } from "./plugins/mock";

const PLUGIN_NAME = "nuxt:vitest:mock-transform";

export interface MockImportInfo {
  name: string;
  import: Import;
  factory: string;
}

export default defineNuxtModule({
  meta: {
    name: PLUGIN_NAME,
  },
  setup(_, nuxt) {
    const ctx: MockPluginContext = {
      components: [],
      imports: [],
    };

    let importsCtx: Unimport;
    nuxt.hook("imports:context", async (ctx) => {
      importsCtx = ctx;
    });
    nuxt.hook("ready", async () => {
      ctx.imports = await importsCtx.getImports();
    });

    nuxt.hook("components:extend", (_) => {
      ctx.components = _;
    });

    addVitePlugin(createMockPlugin(ctx).vite());
  },
});
