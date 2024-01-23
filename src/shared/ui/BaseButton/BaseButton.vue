<script setup lang='ts'>
import type { BasebuttonTheme } from '.';
interface BasebuttonProps {
  theme?: BasebuttonTheme
}
defineProps<BasebuttonProps>()
</script>

<template>
  <button class="button" :class="theme"><slot/></button>
</template>

<style scoped lang='scss'>
.button {
  cursor: pointer;
}
.clear {
  border: none;
  background: none;
  outline: none;
}
</style>