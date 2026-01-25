<script setup lang="ts">
import { useStore } from '@nanostores/vue'
import {$counter, increment} from './_store.ts'

const count = useStore($counter)

</script>

<template>
  <h1>{{count}}</h1>
  <button @click="increment()">Increment</button>
</template>

<style scoped>

</style>