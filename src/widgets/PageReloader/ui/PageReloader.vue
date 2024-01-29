<script setup lang='ts'>
import { Routes } from '@/app/providers/router';

import BaseButton from '@/shared/ui/BaseButton';
</script>

<template>
  <BaseButton @click="$router.replace(Routes.MAIN)">
    {{ t('Перезагрузить страницу') }}
  </BaseButton>
</template>
