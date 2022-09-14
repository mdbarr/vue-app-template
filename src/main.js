import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import vuetify from '@/plugins/vuetify';
import moment from 'moment';

import state from '@/state';
import hyperingenuity from '@hyperingenuity/vue-plugin';
Vue.use(hyperingenuity, {
  state, cookie: 'vue-app-template',
});

Vue.filter('calendar', (value = 0) => moment(value).calendar());

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
