/// <reference types="vite/client" />

// Define VUE globalProperties for typescript to see it
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    t: (text: string) => string
  }
}

export {}
