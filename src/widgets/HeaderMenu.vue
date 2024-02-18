<script setup lang='ts'>
import LoginButton from '@/widgets/LoginButton.vue';
</script>

<template>
  <div class="NavBar">
    <div class="links">
      <LoginButton />
    </div>
  </div>
</template>

<style scoped lang="scss">
.NavBar {
  width: 100%;
  height: var(--navbar-height);
  background-color: var(--bg-color);
  display: flex;
  align-items: center;
  padding: 20px;
  box-shadow: 0 3px 5px var(--shadow-color);
  position: relative;
  z-index: var(--header-z-index);
}

.links {
  margin-left: auto;
  display: flex;
  gap: 20px;
}
</style>
