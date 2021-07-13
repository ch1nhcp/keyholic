import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store/index.js"
import { VueCookieNext } from 'vue-cookie-next'
createApp(App).use(store).use(VueCookieNext).use(router).mount('#app')
// set default config
VueCookieNext.config({ expire: '7d' })

