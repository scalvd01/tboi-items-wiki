import './assets/main.css'
import './public/fonts/upheavtt.ttf'
import './public/fonts/SilomBol.ttf'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
