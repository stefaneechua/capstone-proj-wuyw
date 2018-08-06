import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/home-main.vue'
import About from '@/components/About/about-main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'About',
      component: About
    }
  ]
})
