import { createApp } from 'vue';
import './assets/scss/style.scss';
import App from './App.vue';
import router from './router'; // Импортируем роутер

const app = createApp(App);

app.use(router); // Подключаем роутер
app.mount('#app'); // Монтируем приложение
