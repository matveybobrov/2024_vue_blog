<script setup lang='ts'>
import PageReloader from '@/widgets/PageReloader';
</script>

<template>
  <div class="ErrorPage">
    {{ t('Возникла непредвиденная ошибка') }}
    <PageReloader />
  </div>
</template>

<style scoped lang='scss'>
.ErrorPage {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font: var(--font-l)
}
</style>
