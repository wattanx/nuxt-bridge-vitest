<script setup lang="ts">
import { useRouter } from "#app/composables/router";

const router = useRouter();

const handleClick = () => {
  router.push("/about");
};
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <button data-testid="save" @click="handleClick">save</button>
  </div>
</template>
