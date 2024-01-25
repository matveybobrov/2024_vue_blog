import { createApp } from 'vue'

import { router } from './providers/router'
import translation from './providers/translation'
import App from './ui/App.vue'

const app = createApp(App)

app.use(router)
app.use(translation)

export default app
