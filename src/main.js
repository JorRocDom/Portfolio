import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // Importa la configuración de Vuetify
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify) // Usa Vuetify
  .mount('#app')