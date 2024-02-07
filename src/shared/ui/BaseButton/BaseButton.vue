<script setup lang='ts'>
import type { BaseButtonSize, BaseButtonTheme } from '.';

interface BaseButtonProps {
  theme?: BaseButtonTheme,
  size?: BaseButtonSize
}
defineProps<BaseButtonProps>()
</script>

<template>
  <button
    type="button"
    class="BaseButton"
    :class="[theme, size]"
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

.background {
  background-color: var(--bg-color);
  color: var(--primary-color);
  border: none
}

.background-inverted {
  background-color: var(--bg-color-inverted);
  color: var(--primary-color-inverted);
  border: none
}

.size-m {
  width: var(--font-line-m);
  height: var(--font-line-m);
  font: var(--font-m)
}

.size-l {
  width: var(--font-line-l);
  height: var(--font-line-l);
  font: var(--font-l)
}

.size-xl {
  width: var(--font-line-xl);
  height: var(--font-line-xl);
  font: var(--font-xl)
}
</style>
