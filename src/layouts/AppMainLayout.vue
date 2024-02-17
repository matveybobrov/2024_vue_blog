<script setup lang='ts'>
import NavBar from '@/widgets/NavBar.vue';
import SideBar from '@/widgets/SideBar.vue';
</script>

<template>
  <NavBar />
  <div class="content-page">
    <SideBar />
    <RouterView class="main-page" />
  </div>
</template>
