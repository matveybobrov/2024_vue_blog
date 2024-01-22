<script setup lang="ts">
import NavBar from '@/widgets/NavBar';

import { useTheme } from '../providers/theme';
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
@import '../styles/index';
</style>