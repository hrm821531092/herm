// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.prototype.$axios = axios
Vue.use(VueResource)
Vue.use(ElementUi)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    next({path: '/aboutMe'})
  } else {
    next({path: '/aboutMe'})
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}
)
