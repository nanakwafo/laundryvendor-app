import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Service from '../views/Service'

Vue.use(VueRouter)

const routes = [{
    path: '/main',
    component: Main,


    children: [{
            path: '/service',
            component: Service,


            children: [{
                    path: '/',
                    name: 'List',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "about" */ '../views/service/List.vue'),
                },
                {
                    path: '/add',
                    name: 'Add',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "about" */ '../views/service/Add.vue'),
                },
                {
                    path: '/edit/:id',
                    name: 'Edit',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () =>
                        import ( /* webpackChunkName: "about" */ '../views/service/Add.vue'),
                }
            ]
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