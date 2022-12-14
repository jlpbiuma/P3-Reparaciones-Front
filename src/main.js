import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import "bootstrap/dist/css/bootstrap.min.css"
import {PromiseDialog} from 'vue3-promise-dialog'

const pinia = createPinia()
const app = createApp(App)

// Middlewares in our Vue App
app.use(pinia)
app.use(router)
app.use(PromiseDialog);

app.mount('#app')
