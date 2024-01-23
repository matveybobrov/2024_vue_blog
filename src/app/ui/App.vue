<script setup lang="ts">
import NavBar from '@/widgets/NavBar';

import { inject } from 'vue';
import { themeProvider } from '../providers/theme';
const {theme} = inject(themeProvider, {})
</script>

<template>
  <div class="app" :class="theme">
    <NavBar />
    <RouterView />
  </div>
</template>

<style lang="scss">
@import '../styles/index';
</style>