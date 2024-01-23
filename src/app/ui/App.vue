<script setup lang="ts">
import NavBar from '@/widgets/NavBar';
import SideBar from '@/widgets/SideBar';

import { inject } from 'vue';
import { themeProvider } from '../providers/theme';
const {theme} = inject(themeProvider, {})
</script>

<template>
  <div class="app" :class="theme">
    <NavBar />
    <div class="content-page">
      <SideBar />
      <RouterView class="main-page"/>
    </div>
  </div>
</template>

<style lang="scss">
@import '../styles/index';
.content-page {
  display: flex;
}
.main-page {
  flex-grow: 1;
  padding: 20px;
}
</style>