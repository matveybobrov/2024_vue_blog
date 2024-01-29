import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { Layouts } from '@/app/providers/router/routes';

export default function useLayout() {
  const route = useRoute()
  const layout = computed<Layouts>(() => route.meta.layout as Layouts ?? Layouts.MAIN)
  return { layout, Layouts }
}
