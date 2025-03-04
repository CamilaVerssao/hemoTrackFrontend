import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css';  // Observe que o nome do arquivo é "all.min.css", não "all.css"

const app = createApp(App)
app.use(router).mount('#app')
