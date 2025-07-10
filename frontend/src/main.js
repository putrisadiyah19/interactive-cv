import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import animateOnScroll from './directives/animateOnScroll';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

app.directive('animate-on-scroll', animateOnScroll);
app.use(router);
app.use(Toast);
app.mount('#app');
