<template>
  <div id="home">
      <main-navbar></main-navbar>
      <HomeBase></HomeBase>
      <AboutBase></AboutBase>
      <main-footer></main-footer>
  </div>
</template>

<script>
import HomeBase from '@/components/Home/home--components/home-base.vue'
import AboutBase from '@/components/Home/about--components/about-base.vue'
export default {
  name: 'Home',
  components: {
    'HomeBase': HomeBase,
    'AboutBase': AboutBase
  }
}
</script>

<style lang="scss" scoped>
</style>
