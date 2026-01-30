<script setup lang="ts">

function click() {
  alert('click')
}
</script>

<template>
  <div>
    This is from a Vue Component
    <button @click="click">Click This</button>
  </div>
</template>

<style scoped>

</style>