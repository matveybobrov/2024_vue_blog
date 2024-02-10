<script setup lang='ts'>
import { ref } from 'vue';

import BaseButton, { BaseButtonTheme } from '@/shared/ui/BaseButton';
import BaseModal from '@/shared/ui/BaseModal';

const isAuth = ref(false)
</script>

<template>
  <div class="NavBar">
    <div class="links">
      <BaseButton
        :theme="BaseButtonTheme.CLEAR"
        type="button"
        @click="isAuth = true"
      >
        {{ t('Войти') }}
      </BaseButton>
    </div>
  </div>
  <BaseModal
    :is-open="isAuth"
    @close="isAuth = false"
  >
    123
  </BaseModal>
</template>

<style scoped lang="scss">
.NavBar {
  width: 100%;
  height: var(--navbar-height);
  background-color: var(--bg-color);
  border-bottom: 2px solid var(--secondary-color);
  display: flex;
  align-items: center;
  padding: 20px;
}

.links {
  margin-left: auto;
  display: flex;
  gap: 20px;
}
</style>
