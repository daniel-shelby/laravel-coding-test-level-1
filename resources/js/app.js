import './bootstrap';
import '../css/app.css';

import { createApp } from 'vue';
import routes from './routes'

import App from './components/App.vue';

createApp(App).use(routes).mount('#app');
