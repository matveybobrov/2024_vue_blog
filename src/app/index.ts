import { createApp } from 'vue'
import App from './ui/App.vue'
import router from './providers/router'

const app = createApp(App)
app.use(router)

export default app
