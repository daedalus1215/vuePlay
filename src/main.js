import { createApp } from 'vue';
import App from './App.vue';
import mainStore from './store/mainStore';



createApp(App)
    .use(mainStore)
    .mount('#app');

