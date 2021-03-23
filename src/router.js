import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default  new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('./viewes/DiffStatus.vue')
        },
        {
            path: '/second',
            component: () => import('./viewes/stackState.vue')
        }
    ]
})