<script setup lang='ts'>
import BaseButton, { BaseButtonTheme } from '@/components/ui/BaseButton'

import DarkIcon from '@/assets/icons/theme-dark.svg'
import LightIcon from '@/assets/icons/theme-light.svg'

import useGlobalTheme from '@/composables/useGlobalTheme';

const { toggleTheme, theme, Theme } = useGlobalTheme()
</script>

<template>
  <BaseButton
    :theme="BaseButtonTheme.CLEAR"
    class="ThemeSwitcher"
    @click="toggleTheme"
  >
    <LightIcon
      v-if="theme === Theme.LIGHT"
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
  width: var(--icon-size);
  height: var(--icon-size);
}

.icon {
  width: 100%;
  height: 100%;
  color: var(--bg-color-inverted);
}
</style>
