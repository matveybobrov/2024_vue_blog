<script setup lang='ts'>
import { useRouter } from 'vue-router';

import { Routes } from '@/app/providers/router';

import BaseButton from '@/shared/ui/BaseButton';

const router = useRouter()
function goToMainPage() {
  router.replace(Routes.MAIN)
}
</script>

<template>
  <BaseButton @click="goToMainPage">
    {{ t('Перезагрузить страницу') }}
  </BaseButton>
</template>
