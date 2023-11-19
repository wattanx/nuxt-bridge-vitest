export function mockNuxtImport<T = any>(
  _name: string,
  _factory: () => T | Promise<T>
): void {
  throw new Error(
    "mockNuxtImport() is a macro and it did not get transpiled, this may be an internal bug of nuxt-bridge-vitest."
  );
}
