import { createApp } from 'vue'
// since we use the pinia, we have to restructure the main js
// first let's import the pinia library
import { createPinia } from 'pinia'


import './style.css'
import App from './App.vue'

//createApp(App).mount('#app')

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// now we need to mount our app

app.mount('#app')