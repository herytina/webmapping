/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';

const app = createApp(App)
const pinia = createPinia();

// Ajouter le plugin de persistance
pinia.use(piniaPersist);

app.use(pinia);
registerPlugins(app)

app.mount('#app')
