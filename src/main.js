import Vue from 'vue'
import { createRouter } from './router'
import { createStore } from './vuex'
import { sync } from 'vuex-router-sync'
import App from './app'
export function createApp (ssrContext) {
  const router = createRouter()
  const store = createStore()
  //同步路由状态到store
  sync(store, router)
  const app = new Vue({
    router,
    store,
    ssrContext,
    render: h => h(App)
  })
  return { app, router, store }
}