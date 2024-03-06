import './assets/main.css'
import '../node_modules/bulma-start/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vuetify } from './config/vuetify.config'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
