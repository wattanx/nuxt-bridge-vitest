declare module "@nuxt/bridge-schema" {
  interface NuxtAppCompat {
    $hello(msg: string): string;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $hello(msg: string): string;
  }
}

export {};
