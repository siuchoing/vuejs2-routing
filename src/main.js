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
 *
 * scrollBehavior     // in case using the back button and the user scroll down a bit
 */
const router = new VueRouter({
  routes,
  mode: 'history',

  // scroll config for scroll far down
  scrollBehavior(to, from, savePosition) {
    /*******************************************
    * To scroll up edit page at the top
     *******************************************/
    //return { x: 0, y: 0 };

    /*******************************************
     * To scroll far down page at the bottom (method 1)
     *******************************************/
    // To check if save position is set
    if (savePosition) {
      return savePosition;
    }
    // To check if hash is set
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };          // to scroll down edit page at the bottom with hash and savePosition properties

    /*******************************************
     * To scroll far down page at the bottom (method 2)
     *
     *******************************************/
    //return { x: 0, y: 700 };        // to scroll down edit page at the bottom for 700px without hash and savePosition properties
  }
});

new Vue({
  el: '#app',
  router,        // router: router,
  render: h => h(App)
})
