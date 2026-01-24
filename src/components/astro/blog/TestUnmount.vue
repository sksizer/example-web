<script lang="ts">
let x = 0;
</script>
<script setup lang="ts">
import {onMounted, onUnmounted} from "vue";

const instance = x++;

let cleaned = false;
const cleanup = function() {
  if (!cleaned) {
    console.log("TestUnmount:cleanup");
    document.removeEventListener("astro:before-swap", cleanup);
    cleaned = true;
  }
}
onMounted(() => {
  console.log(`TestUnmount:onMounted${x}`)
  document.addEventListener("astro:before-swap", cleanup);
})
onUnmounted(() => {
  console.log("TestUnmount:onUnmounted")
  cleanup();
})
function debug() {
  console.log(`debug from component instance: ${instance}`);
}
</script>

<template>
  <div>
    I'm just here so I don't get fined
    <button @click="debug">Debug</button>/
  </div>
</template>

<style scoped>

</style>