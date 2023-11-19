import { addVitePlugin, defineNuxtModule } from "@nuxt/kit";
import type { Import } from "unimport";
import { mockNuxtImportPlugin } from "../plugins/mock";

const PLUGIN_NAME = "nuxt:mock-nuxt-import-transform";

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
    let imports: Import[] = [];

    // TODO: nuxt 2 not working, instead of using imports:context
    nuxt.hook("imports:extend", (_imports) => {
      imports = _imports;
    });

    // path of the first vitest setup file to be ran
    let resolvedFirstSetupFile: null | string = null;
    addVitePlugin(mockNuxtImportPlugin({ resolvedFirstSetupFile, imports }));
  },
});
