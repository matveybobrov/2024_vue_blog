<script setup lang="ts">
import { useTheme } from '@/app/lib/useTheme';

const {theme, toggleTheme} = useTheme()
</script>

<template>
  <div class="app" :class="theme">
  <button @click="toggleTheme">toggle theme</button>
    <RouterLink to="/">To Main Page</RouterLink>
    <RouterLink to="/about">To About Page</RouterLink>
    <RouterView />
  </div>
</template>

<style lang="scss">
@import '../styles/index'
</style>