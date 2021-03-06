import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Login from './views/login/Login.vue'
import Scoreboard from './views/Scoreboard.vue'
import LoginGithub from './views/login/LoginGithub.vue'
import LoginGitlab from './views/login/LoginGitlab.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/login/github',
            name: 'login_github',
            component: LoginGithub
        }, {
            path: '/login/gitlab',
            name: 'login_gitlab',
            component: LoginGitlab
        },
        {
            path: '/scoreboard',
            name: 'scoreboard',
            component: Scoreboard
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
    ]
})
