<script setup lang='ts'>
import { useGlobalTheme } from '@/app/providers/theme';

import BaseButton, { BaseButtonTheme } from '@/shared/ui/BaseButton'

import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import LightIcon from '@/shared/assets/icons/theme-light.svg'

const { toggleTheme, theme, Theme } = useGlobalTheme()
</script>

<template>
  <BaseButton
    :theme="BaseButtonTheme.CLEAR"
    class="ThemeSwitcher"
    @click="toggleTheme"
  >
    <LightIcon
      v-if="theme === Theme.DARK"
      class="icon"
    />
    <DarkIcon
      v-else
      class="icon"
    />
  </BaseButton>
</template>

<style scoped lang='scss'>
.ThemeSwitcher {
  height: 20px;
  width: 20px;
}

.icon {
  width: 100%;
  height: 100%;
  color: var(--bg-color-inverted);
}
</style>
