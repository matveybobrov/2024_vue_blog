import { createApp } from 'vue'
import App from './ui/App.vue'

import { router } from './providers/router'
import theme from './providers/theme'
import translation from './providers/translation'
import { Language } from './providers/translation'

const app = createApp(App)

app.use(router)
app.use(theme)
app.use(translation, { language: Language.RU })

export default app
