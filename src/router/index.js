import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/main',
    component: Main,


    children: [{
            path: '/service',
            name: 'Service',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/Service.vue')
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ( /* webpackChunkName: "about" */ '../views/Dashboard.vue')
        },



    ]
}, ]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router