import { createApp } from 'vue'

import router from '@/router'

import errorHandler from '@/plugins/errorHandler'
import translation from '@/plugins/translation'

import App from './App.vue'

import './styles/index.scss'

const app = createApp(App)

app.use(router)
app.use(translation)
app.use(errorHandler)

app.mount('#app')
