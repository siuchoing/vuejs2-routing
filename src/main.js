import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

/**********
 * Configure your server url    (https://router.vuejs.org/guide/essentials/history-mode.html)
 *
 * mode: 'history'    // without hash tag (#) style in url (http://localhost:8080/user)
 * mode: 'hash'       // with hash tag (#) style in url, by default (http://localhost:8080/user/#/)
 */
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,        // router: router,
  render: h => h(App)
})
