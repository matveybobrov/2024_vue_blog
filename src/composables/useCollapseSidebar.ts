import { ref } from 'vue'

const collapsed = ref(true)

function toggleCollapsed() {
  collapsed.value = !collapsed.value
}

export default function useCollapseSidebar(value?: boolean) {
  if (typeof value === 'boolean') collapsed.value = value
  return {
    collapsed,
    toggleCollapsed
  }
}
