import { createApp } from 'vue';
import App from './App.vue';
import router from './views/router/router.js';

// Crée l'application Vue
const app = createApp(App);

// Utilise le routeur avant de monter l'application
app.use(router);

// Monte l'application sur l'élément avec l'ID "app" dans index.html
app.mount('#app');