import { createApp } from 'vue'
import App from './ui/App.vue'
import router from './lib/router'

const app = createApp(App)
app.use(router)

export default app
