<script setup lang='ts'>
import { ref } from "vue"
import ThemeSwitcher from "@/widgets/ThemeSwitcher";
</script>

<template>
  <div class="sidebar">
    <div class="switchers">
      <ThemeSwitcher />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.sidebar {
  height: calc(100vh - var(--navbar-height));
  width: var(--sidebar-width-collapsed);
  background-color: var(--bg-color-inverted);
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
}
</style>