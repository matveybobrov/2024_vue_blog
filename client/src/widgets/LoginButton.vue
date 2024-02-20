<script setup lang='ts'>
import BaseButton, { BaseButtonTheme } from '@/components/ui/BaseButton';
import BaseModal from '@/components/ui/BaseModal';

import { ref } from 'vue';

const isAuth = ref(false)
</script>

<template>
  <div>
    <BaseButton
      :theme="BaseButtonTheme.CLEAR"
      type="button"
      @click="isAuth = true"
    >
      {{ t('Войти') }}
    </BaseButton>
    <BaseModal
      :is-open="isAuth"
      @close="isAuth = false"
    >
      123
    </BaseModal>
  </div>
</template>
