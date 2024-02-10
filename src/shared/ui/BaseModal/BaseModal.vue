<script setup lang='ts'>
defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
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
  </Teleport>
</template>

<style scoped lang='scss'>
.overlay {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--overlay-color);
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
