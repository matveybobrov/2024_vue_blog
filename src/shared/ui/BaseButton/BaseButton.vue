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
  cursor: pointer;
}

.clear {
  color: var(--primary-color);
  border: none;
  background: none;
  outline: none;
}

.outline {
  padding: 5px;
  border: 1px solid;
  border-color: var(--primary-color);
  background: var(--primary-color-inverted);
  color: var(--primary-color);
  outline: none;
}
</style>
