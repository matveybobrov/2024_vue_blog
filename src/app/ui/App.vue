<script setup lang="ts">
import { useTheme } from '../providers/theme';

import NavBar from '@/widgets/NavBar';

const {theme, toggleTheme} = useTheme()
</script>

<template>
  <div class="app" :class="theme">
    <NavBar />
    <RouterView />
  </div>
  <button @click="toggleTheme">toggle theme</button>
</template>

<style lang="scss">
@import '../styles/index'
</style>