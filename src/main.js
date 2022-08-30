/* import { createApp } from 'vue'
import App from './App.vue'
import HomeVue from './components/Home.vue'

createApp(App).mount('#app') */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // <---

createApp(App).use(router).mount('#app')