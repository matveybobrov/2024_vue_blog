import { createApp } from 'vue'

import translation from '@/app/providers/translation'

import errorHandler from '@/plugins/errorHandler'
import router from '@/router'

import App from './App.vue'

import './styles/index.scss'

const app = createApp(App)

app.use(router)
app.use(translation)
app.use(errorHandler)

app.mount('#app')
