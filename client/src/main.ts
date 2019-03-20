import Vue from 'vue';
import '@/styles/global.styl';
import store from './store';
import router from './router';
import App from './app.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

const instance = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

if (process.env.NODE_ENV !== 'production') {
  Object.assign(window, { v: instance });
}
