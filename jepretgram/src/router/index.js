import Vue from 'vue'
import Router from 'vue-router'
import TheHomepage from '@/components/TheHomepage'
import TheLogin from '@/components/TheLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TheHomepage',
      component: TheHomepage
    },
    {
      path: '/login',
      name: 'TheLogin',
      component: TheLogin
    }
  ]
})
