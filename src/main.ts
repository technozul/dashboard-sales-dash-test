import '@/assets/styles/css/style.css';
import '@/assets/styles/sass/base.scss';

import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import VueApexCharts from 'vue3-apexcharts';

const app = createApp(App);

app.use(router);
app.use(VueApexCharts);

router.isReady().then(() => {
  app.mount('#app');
});
