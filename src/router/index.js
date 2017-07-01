import Vue from 'vue'
import Router from 'vue-router'
// import Search from '../components/Search/Search'
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: () => import('../components/Index/Index') },
      { path: '/search', component: () => import('../components/Search/Search')}
    ]
  })
}