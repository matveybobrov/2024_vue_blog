<script setup lang='ts'>
</script>

<template>
  <div class="loader" />
</template>

<style scoped lang='scss'>
.loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #888;

  --m:
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;

  mask: var(--m);
  mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}

@keyframes l3 {to{transform: rotate(1turn)}}
</style>
