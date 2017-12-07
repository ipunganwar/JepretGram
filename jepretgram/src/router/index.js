import Vue from 'vue'
import Router from 'vue-router'
import TheHomepage from '@/components/TheHomepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TheHomepage',
      component: TheHomepage
    }
  ]
})
