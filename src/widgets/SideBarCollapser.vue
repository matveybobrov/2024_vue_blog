<script setup lang='ts'>
import BaseButton, { BaseButtonTheme } from '@/components/ui/BaseButton';

import useCollapseSidebar from '@/composables/useCollapseSidebar';

const { toggleCollapsed } = useCollapseSidebar()
</script>

<template>
  <div class="SideBarCollapser">
    <BaseButton
      :theme="BaseButtonTheme.CLEAR"
      type="button"
      class="collapser"
      @click="toggleCollapsed"
    >
      <div />
      <div />
      <div />
    </BaseButton>
  </div>
</template>

<style scoped lang='scss'>
.SideBarCollapser {
  position: absolute;
  left: 0;
  width: var(--icon-size);
  height: var(--icon-size);
}

.collapser {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 3px;

  & div {
    width: 20px;
    height: 2px;
    background-color: var(--primary-color);
  }
}
</style>
