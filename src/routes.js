import User from './components/user/User.vue';
import Home from './components/Home.vue';

export const routes = [
    { path: '', component: Home }, // No props, no nothing
    { path: '/user/:id', component: User, props: { name: 'Anthony' }} // Pass route.params to props
];