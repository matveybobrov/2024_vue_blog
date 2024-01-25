import { createApp } from 'vue'

import { router } from './providers/router'
import translation, { Language } from './providers/translation'
import App from './ui/App.vue'

const app = createApp(App)

app.use(router)
app.use(translation, { language: Language.RU })

export default app
