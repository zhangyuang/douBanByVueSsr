import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('../components/Index/Index') },
      { path: '/search', component: () => import('../components/Search/Search')},
      { path: '/more', component: () => import('../components/MoreMovie/MoreMovie')},
    ]
  })
}