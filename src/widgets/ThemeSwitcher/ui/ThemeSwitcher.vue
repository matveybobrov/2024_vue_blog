<script setup lang='ts'>
  import { inject } from 'vue';
  import { themeProvider } from '@/app/providers/theme';
  import LightIcon from "@/shared/assets/icons/theme-light.svg"
  import DarkIcon from "@/shared/assets/icons/theme-dark.svg"
  import BaseButton, { BaseButtonTheme} from "@/shared/ui/BaseButton"
  const { theme, toggleTheme, Theme } = inject(themeProvider, {})
</script>

<template>
  <BaseButton :theme="BaseButtonTheme.CLEAR" class="themeToggler" @click="toggleTheme">
    <LightIcon v-if="theme === Theme?.DARK" class="icon"/>
    <DarkIcon v-else class="icon"/>
  </BaseButton>
</template>

<style scoped lang='scss'>
.themeToggler {
  height: 20px;
  width: 20px;
}
.icon {
  width: 100%;
  height: 100%;
  color: var(--bg-color-inverted);
}
</style>