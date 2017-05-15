import Vue from 'vue'
import App from './App'
import { createStore } from './store'
import VueResource from 'vue-resource'
import router from './router'
import * as filters from './utils/filters'

Vue.config.productionTip = false
Vue.use(VueResource)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
const store = createStore()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
