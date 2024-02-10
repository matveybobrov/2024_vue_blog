<template>
  <div class="overlay">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped lang='scss'>
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0 0 0 / 50%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  background-color: var(--bg-color);
  max-width: 600px;
}
</style>
