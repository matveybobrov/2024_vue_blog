import { createApp } from 'vue'

import errorHandler from './providers/errorHandler'
import router from './providers/router'
import translation from './providers/translation'
import App from './ui/App.vue'

import './styles/index.scss'

const app = createApp(App)

app.use(router)
app.use(translation)
app.use(errorHandler)

export default app
