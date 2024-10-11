import './assets/main.css'
import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
router.afterEach((to) => {
  document.title = to.meta.title || 'Loom'
})
createApp(App).use(router).mount('#app')
