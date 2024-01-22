<script setup lang='ts'>
import type { RouterLinkProps } from 'vue-router'
import { Routes } from "@/app/providers/router"

interface ApplinkProps extends RouterLinkProps {
  to: Routes
}
defineProps<ApplinkProps>()
</script>

<template>
  <RouterLink :to="to" class="link">
    <slot/>
  </RouterLink>
</template>

<style scoped lang='scss'>
.link {
  color: var(--primary-color-inverted);
  text-decoration: none;
}
</style>