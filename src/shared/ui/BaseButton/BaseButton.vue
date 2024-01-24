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
        class="button"
        :class="theme"
    >
        <slot />
    </button>
</template>

<style scoped lang='scss'>
.button {
  cursor: pointer;
}
.clear {
  border: none;
  background: none;
  outline: none;
}
</style>
