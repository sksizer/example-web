<script setup lang="ts">
import { ref } from "vue";

const counter = ref<number>(0);
function click() {
	counter.value++;
}
</script>

<template>
  <h1>Counter: {{counter}} <button @click="click">Add 1</button></h1>
</template>

<style scoped>

</style>