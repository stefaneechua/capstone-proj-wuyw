// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import VueCarousel from 'vue-carousel'
import VueAnimate from 'vue-animate-scroll'

// Global Components
import Navbar from './components/Global/main-navbar.vue'
import Footer from './components/Global/main-footer.vue'
import SectionHeader from './components/Global/section-header.vue'
import SectionSubHeader from './components/Global/section-subheader.vue'
import MainButton from './components/Global/main-button.vue'

// Bootstrap + Bootstrap-Vue
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueCarousel)
Vue.use(VueAnimate)

Vue.component('main-navbar', Navbar)
Vue.component('main-footer', Footer)
Vue.component('section-header', SectionHeader)
Vue.component('section-subheader', SectionSubHeader)
Vue.component('main-button', MainButton)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
