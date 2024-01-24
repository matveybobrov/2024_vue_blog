<script setup lang='ts'>
import { inject } from 'vue';

import { translationProvider } from '@/app/providers/translation';

import BaseButton, { BaseButtonTheme } from '@/shared/ui/BaseButton'

import LanguageIcon from '@/shared/assets/icons/language.svg'

const { toggleLang } = inject(translationProvider, {})
</script>

<template>
    <BaseButton
        :theme="BaseButtonTheme.CLEAR"
        class="langSwitcher"
        @click="toggleLang"
    >
        <LanguageIcon class="icon" />
    </BaseButton>
</template>

<style scoped lang='scss'>
.langSwitcher {
  width: 20px;
  height: 20px;
}
.icon {
  color: var(--bg-color-inverted);
}
</style>
