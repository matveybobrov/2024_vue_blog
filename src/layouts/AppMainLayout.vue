<script setup lang='ts'>
import NavBar from '@/widgets/NavBar';
import SideBar from '@/widgets/SideBar';
</script>

<template>
  <NavBar />
  <div class="content-page">
    <SideBar />
    <RouterView class="main-page" />
  </div>
</template>
