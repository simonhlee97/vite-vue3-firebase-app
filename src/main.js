import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// import Global Components
import BaseCard from './components/ui/BaseCard.vue'
import BaseBadge from './components/ui/BaseBadge.vue'
import BaseButton from './components/ui/BaseButton.vue'


// vuex store
import store from './store/index.js'

const app = createApp(App)
app.use(router)
app.use(store)


// register Global components
app.component('base-card', BaseCard)
app.component('base-badge', BaseBadge)
app.component('base-button', BaseButton)



app.mount('#app')
