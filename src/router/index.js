import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myWeb from '@/components/myWeb'
import aboutMe from '@/components/myResume'
import login from '@/view/index-login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '我的-登录'
      }
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/myWeb',
      name: 'myWeb',
      component: myWeb,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: aboutMe,
      meta: {
        title: '我的',
        requireAuth: false
      }
    }
  ]
})
