<script setup lang='ts'>
import HeaderMenu from '@/widgets/HeaderMenu.vue';
import SideBar from '@/widgets/SideBar.vue';
</script>

<template>
  <HeaderMenu />
  <div class="content-page">
    <SideBar />
    <RouterView class="main-page" />
  </div>
</template>
