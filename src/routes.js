/***********
 * Eager loading all components / applications when we need it
 */
import Home from './components/Home.vue';
import Header from './components/Header.vue';

/***********
 * Lazy loading part of components / applications when we need it by syntax webpack recognizers
 * for big project
 */
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user');
};
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
};
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user');
};

/****************************************
 * beforeEnter       // can store in another file and simply import.
 *                   // executing while only if I select the individual user, and hence go to the user detail page
 ***************************************/

export const routes = [
    { path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    } },
    { path: '/user', name: 'user', components: {
        default: User,
        'header-bottom': Header
    }, children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            console.log('inside route setup');
            next()      // to continues below code
        } },
        { path: ':id/edit', component: UserEdit, name: 'userEdit' },
    ] },
    { path: '/redirect-user', redirect: '/user' },
    { path: '/redirect-home', redirect: { name: 'home' } },
    { path: '/redirect-user1-edit', redirect: { name: 'userEdit', params: { id: 1 } } },
    { path: '*', redirect: '/' }
];