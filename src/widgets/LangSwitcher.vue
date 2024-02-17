<script setup lang='ts'>
import LanguageIcon from '@/shared/assets/icons/language.svg'

import BaseButton, { BaseButtonTheme } from '@/components/ui/BaseButton'
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
  width: 20px;
  height: 20px;
}

.icon {
  color: var(--bg-color-inverted);
}
</style>
