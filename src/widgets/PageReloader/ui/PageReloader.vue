<script setup lang='ts'>
import { useRouter } from 'vue-router';

import { Routes } from '@/app/providers/router';

import BaseButton, { BaseButtonTheme } from '@/shared/ui/BaseButton';

const router = useRouter()
function goToMainPage() {
  router.replace(Routes.MAIN)
}
</script>

<template>
  <BaseButton
    :theme="BaseButtonTheme.BACKGROUND"
    class="page-reloader"
    @click="goToMainPage"
  >
    {{ t('Перезагрузить страницу') }}
  </BaseButton>
</template>

<style scoped lang='scss'>
.page-reloader {
  border: 1px solid var(--secondary-color);
  padding: 5px;
}
</style>
