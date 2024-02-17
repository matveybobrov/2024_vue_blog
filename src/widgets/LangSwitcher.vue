<script setup lang='ts'>
import BaseButton, { BaseButtonTheme } from '@/components/ui/BaseButton'

import { useGlobalTranslation } from '@/composables/useGlobalTranslation';

import LanguageIcon from '@/assets/icons/language.svg'

const { toggleLang } = useGlobalTranslation()
</script>

<template>
  <BaseButton
    :theme="BaseButtonTheme.CLEAR"
    class="LangSwitcher"
    @click="toggleLang"
  >
    <LanguageIcon class="icon" />
  </BaseButton>
</template>

<style scoped lang='scss'>
.LangSwitcher {
  width: 20px;
  height: 20px;
}

.icon {
  color: var(--bg-color-inverted);
}
</style>
