# nuxt bridge vitest

> [!WARNING]
> This library is in active development and you should pin the patch version before using.

Supporting nuxt bridge testing in the vitest environment.

[▶️ Playground](https://stackblitz.com/edit/github-bk3cd8)

## Installation

1. First install nuxt-vitest:

```bash
pnpm add -D @wattanx/nuxt-bridge-vitest vitest happy-dom

# or
yarn add --dev @wattanx/nuxt-bridge-vitest vitest happy-dom
npm i -D @wattanx/nuxt-bridge-vitest vitest happy-dom
```

2. Then create a `vitest.config.ts` with the following content:

```ts
import { defineVitestConfig } from "@wattanx/nuxt-bridge-vitest/config";

export default defineVitestConfig({
  // any custom vitest config you require
});
```

## Helpers

Currently only `mockNuxtImport` is supported.

### mockNuxtImport

The basic usage is the same as [nuxt-vitest](https://github.com/danielroe/nuxt-vitest).

https://github.com/danielroe/nuxt-vitest#mocknuxtimport
