<template>
  <div id="home-main">
      <main-navbar></main-navbar>
      <HomeBase></HomeBase>
      <AboutBase/>
      <main-footer></main-footer>
  </div>
</template>

<script>
import HomeBase from '@/components/Home/home--components/HomeBase.vue'
import AboutBase from '@/components/Home/about--components/AboutBase.vue'
export default {
  name: 'home-main',
  components: {
    'HomeBase': HomeBase,
    'AboutBase': AboutBase
  }
}
</script>

<style lang="scss" scoped>
</style>
