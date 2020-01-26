import User from './components/user/User.vue';
import UserStart from './components/user/UserStart.vue';
import UserDetail from './components/user/UserDetail.vue';
import UserEdit from './components/user/UserEdit.vue';
import Home from './components/Home.vue';
import Header from './components/Header.vue';


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