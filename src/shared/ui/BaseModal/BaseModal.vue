<template>
  <div
    class="overlay"
    tabindex="0"
    @click="$emit('close')"
    @keyup.esc="$emit('close')"
  >
    <div
      class="content"
      @click.stop
    >
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
  z-index: var(--modal-z-index);
}

.content {
  background-color: var(--bg-color);
  max-width: 600px;
  padding: 20px;
}
</style>
