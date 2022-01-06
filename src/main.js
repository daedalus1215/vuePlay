import { createApp, nextTick } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './pages/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue';
import UsersFooter from './pages/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            name: 'teams',
            path: '/teams',
            meta: { needsAuth: true },
            components: { default: TeamsList, footer: TeamsFooter },
            children: [
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                },
            ]
        },
        {
            name: 'users',
            path: '/users',
            components: { default: UsersList, footer: UsersFooter },
        },
        { path: '/:notFound(.*)', component: NotFound },
    ],
    scrollBehavior(_, _2, savedPosition) {
        return savedPosition && savedPosition || { left: 0, top: 0 }
    },
});


router.beforeEach((to, from, next) => {
    // sending analytics data
    console.log(to, from);
    console.log('Global beforeEach');
    if (to.meta.needsAuth) {
        console.log('Needs auth!!')
        next();
    }
});

router.afterEach((to, from) => {
    // sending analytics data
    console.log(to, from);
    console.log('Global aftereach');
});

createApp(App).use(router).mount('#app')