import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import myWeb from '@/components/myWeb'
import aboutYou from '@/components/myResume'
import login from '@/view/index-login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        title: '我的-登录'
      }
    },
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/myWeb',
      name: 'myWeb',
      component: myWeb
    },
    {
      path: '/aboutYou',
      name: 'aboutYou',
      component: aboutYou,
      meta: {
        title: '我的'
      }
    }
  ]
})
