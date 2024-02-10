<script setup lang="ts">
import BaseModal from '@/shared/ui/BaseModal';

import { useLayout } from '../config/layout';
import { useGlobalTheme } from '../providers/theme';

import AppClearLayout from './AppClearLayout.vue';
import AppMainLayout from './AppMainLayout.vue';

const { layout, Layouts } = useLayout()
const { theme } = useGlobalTheme();
</script>

<template>
  <div
    class="app"
    :class="theme"
  >
    <AppClearLayout v-if="layout === Layouts.CLEAR" />
    <AppMainLayout v-else />
    <BaseModal>123</BaseModal>
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
