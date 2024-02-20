<script setup lang='ts'>
import type { RouterLinkProps } from 'vue-router'

import { Routes } from '@/router/routes'

interface AppLinkProps extends RouterLinkProps {
  to: Routes
}
defineProps<AppLinkProps>()
</script>

<template>
  <RouterLink
    :to="to"
    class="AppLink"
  >
    <slot />
  </RouterLink>
</template>

<style scoped lang='scss'>
.AppLink {
  color: var(--primary-color);
  text-decoration: none;
}
</style>
