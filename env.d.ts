/// <reference types="vite/client" />

// Define Vue globalProperties for typescript to see it
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    t: (text: string) => string
  }
}

export {}
