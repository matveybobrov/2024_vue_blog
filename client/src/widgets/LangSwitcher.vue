<script setup lang='ts'>
import BaseButton, { BaseButtonTheme } from '@/components/ui/BaseButton'

import LanguageIcon from '@/assets/icons/language.svg'

import { useGlobalTranslation } from '@/composables/useGlobalTranslation';

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
  width: var(--icon-size);
}

.icon {
  color: var(--bg-color-inverted);
}
</style>
