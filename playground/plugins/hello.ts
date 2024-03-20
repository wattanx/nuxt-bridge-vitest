export default defineNuxtPlugin(() => {
  console.log("Hello from plugin!");
  return {
    provide: {
      hello: (msg: string) => `Hello, ${msg}!`,
    },
  };
});
