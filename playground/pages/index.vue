<script setup lang="ts">
import SomeComponent from "~~/components/SomeComponent.vue";
import { useRouter } from "#imports";

const router = useRouter();

const handleClick = () => {
  router.push("/about");
};

definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div>
    <h1>Hello World</h1>
    <button data-testid="save" @click="handleClick">save</button>
    <SomeComponent message="This is an auto-imported component" />
  </div>
</template>
