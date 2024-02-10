<script setup lang='ts'>
defineEmits(['close'])
interface BaseModalProps {
  open?: boolean
}
defineProps<BaseModalProps>()
</script>

<template>
  <Teleport to="body">
    <!--Use :duration to properly animate both transitions on leaving DOM-->
    <Transition :duration="300">
      <div
        v-if="open"
        class="modal"
      >
        <!--Use tabindex to be able to close modal on esc-->
        <div
          class="overlay"
          tabindex="0"
          @click="$emit('close')"
          @keyup.esc="$emit('close')"
        >
          <div
            v-if="open"
            class="content"
            @click.stop
          >
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang='scss'>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: var(--modal-z-index);
}

.overlay {
  width: 100%;
  height: 100%;
  background-color: var(--overlay-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  background-color: #fff;
  max-width: 50%;
  padding: 20px;
}

.overlay, .content {
  transition: all 0.3s ease;
}

.v-enter-from .content {
  transform: translateY(-50vh);
  opacity: 0;
}

.v-leave-to .content  {
  transform: translateY(50vh);
  opacity: 0;
}

.v-enter-from .overlay, .v-leave-to .overlay {
  opacity: 0;
}
</style>
