<script setup lang="ts">
defineProps<{ message: string }>();

let message = "";

try {
  console.log("SomeComponent");
  console.log("useNuxtApp has", useNuxtApp() !== undefined);
  const { $hello } = useNuxtApp();

  message = $hello("Hello World");
} catch (e) {
  console.error(e);
}
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>
