<script setup lang='ts'>
import type { BaseButtonTheme } from '.';

interface BaseButtonProps {
  theme?: BaseButtonTheme
}
defineProps<BaseButtonProps>()
</script>

<template>
  <button
    type="button"
    class="BaseButton"
    :class="theme"
  >
    <slot />
  </button>
</template>

<style scoped lang='scss'>
.BaseButton {
  cursor: pointer
}

.clear {
  border: none;
  background: none;
  outline: none;
}

.outline {
  padding: 5px;
  border: 1px solid;
  border-color: var(--secondary-color);
  background: var(--primary-color);
  color: var(--secondary-color);
  outline: none;
}
</style>
