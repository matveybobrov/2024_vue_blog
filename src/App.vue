<script setup lang="ts">
import useLayout from '@/composables/useLayout';
import AppClearLayout from '@/layouts/AppClearLayout.vue';
import AppMainLayout from '@/layouts/AppMainLayout.vue';

const { layout, Layouts } = useLayout()
</script>

<template>
  <div
    class="app"
  >
    <AppClearLayout v-if="layout === Layouts.CLEAR" />
    <AppMainLayout v-else />
  </div>
</template>

<style lang="scss">
.app {
  font: var(--font-m);
  background-color: var(--bg-color);
  color: var(--primary-color);
  min-height: 100vh;
}

.content-page {
  display: flex;
}

.main-page {
  flex-grow: 1;
  padding: 20px;
}
</style>
