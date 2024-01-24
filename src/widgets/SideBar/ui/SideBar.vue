<script setup lang='ts'>
import LangSwitcher from '@/widgets/LangSwitcher';
import ThemeSwitcher from '@/widgets/ThemeSwitcher';
</script>

<template>
  <div class="SideBar">
    <div class="switchers">
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
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

  &:hover {
    width: var(--sidebar-width)
  }
}

.switchers {
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
}
</style>
