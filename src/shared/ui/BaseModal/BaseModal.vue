<script setup lang='ts'>
defineEmits(['close'])
</script>

<template>
  <Teleport to=".app">
    <div class="modal">
      <!--Use tabindex to be able to close modal on esc-->
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
    </div>
  </Teleport>
</template>

<style scoped lang='scss'>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
}

.overlay {
  width: 100%;
  height: 100%;
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
