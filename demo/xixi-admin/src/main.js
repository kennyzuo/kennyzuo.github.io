import 'iview/dist/styles/iview.css';
import Vue from 'vue';
import iView from 'iview';
import App from './app';
import { router } from './router';

Vue.use(iView);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
