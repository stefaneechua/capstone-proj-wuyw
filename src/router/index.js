import Vue from 'vue'
import Router from 'vue-router'
import HomeBase from '@/components/Home/home-base.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeBase',
      component: HomeBase
    }
  ]
})
