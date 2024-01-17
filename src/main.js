// BENTRICODE FRONTEND PROJECT - GABRIEL E MARLON
//--------
// Isso aqui importa o SCSS que importa o CSS do Bootstrap e outras coisas
import './scss/styles.scss'

// Isso aqui importa o Javascript do Bootstrap
import * as bootstrap from 'bootstrap'
//--------


// Os imports do Vue e coisas dele (Pinia e Vue Router)

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)  //Cria App Vue (i)

app.use(createPinia())
app.use(router) //Do arquivo index.js em router

app.mount('#app') //Inicia Componente Raiz do Vue Aqui
