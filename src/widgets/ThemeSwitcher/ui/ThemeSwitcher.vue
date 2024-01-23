<script setup lang='ts'>
  import { inject } from 'vue';
  import { themeProvider } from '@/app/providers/theme';
  const { toggleTheme } = inject(themeProvider, {})
</script>

<template>
  <button @click="toggleTheme">toggle theme</button>
</template>

<style scoped lang='scss'>
</style>