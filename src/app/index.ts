import { createApp } from 'vue'
import App from './ui/App.vue'
import { router } from './providers/router'
import theme from './providers/theme'
import translation from './providers/translation'

const app = createApp(App)

app.use(theme)
app.use(router)
app.use(translation)

export default app
