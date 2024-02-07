<script setup lang='ts'>
import { ref } from 'vue'

import LangSwitcher from '@/widgets/LangSwitcher';
import ThemeSwitcher from '@/widgets/ThemeSwitcher';

import BaseButton, { BaseButtonSize, BaseButtonTheme } from '@/shared/ui/BaseButton';

const expanded = ref(false)
</script>

<template>
  <div
    class="SideBar"
    :class="{ expanded }"
  >
    <div
      class="switchers"
    >
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
    <BaseButton
      :theme="BaseButtonTheme.BACKGROUND"
      :size="BaseButtonSize.L"
      class="expand-btn"
      @click="expanded = !expanded"
    >
      {{ expanded ? '<' : '>' }}
    </BaseButton>
  </div>
</template>

<style scoped lang='scss'>
.SideBar {
  height: calc(100vh - var(--navbar-height));
  width: var(--sidebar-width-collapsed);
  background-color: var(--bg-color);
  border-right: 2px solid var(--secondary-color);
  position: relative;
  transition: width 0.2s;
}

.switchers {
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
}

.expanded {
  width: var(--sidebar-width);

  .switchers {
    flex-direction: row;
    justify-content: center;
  }
}

.expand-btn {
  position: absolute;
  top: 50%;
  transform: translate(100%, -50%);
  right: 0;
  border: 2px solid var(--secondary-color);
  border-left: none;
  line-height: 0;
}
</style>
