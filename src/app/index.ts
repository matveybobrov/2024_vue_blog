import { createApp } from 'vue'
import App from './ui/App.vue'
import { router } from './providers/router'
import theme from './providers/theme'

const app = createApp(App)

app.use(theme)
app.use(router)

export default app
