<script setup lang="ts">
import { Routes } from '@/app/providers/router';
import AppLink from '@/shared/ui/AppLink';
</script>

<template>
  <div class="navbar">
    <div class="links">
      <AppLink :to="Routes.MAIN">{{ t('Главная') }}</AppLink>
      <AppLink :to="Routes.ABOUT">{{ t('О сайте') }}</AppLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  width: 100%;
  height: var(--navbar-height);
  background-color: var(--bg-color-inverted);
  display: flex;
  align-items: center;
  padding: 20px;
}
.links {
  margin-left: auto;
  display: flex;
  gap: 20px;
}
</style>