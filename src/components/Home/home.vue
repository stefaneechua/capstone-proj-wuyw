<template>
  <div id="home">
      <main-navbar></main-navbar>
      <LandingBtn></LandingBtn>
      <HomeBase></HomeBase>
      <main-footer></main-footer>
  </div>
</template>

<script>
import HomeBase from '@/components/Home/home--components/home-base.vue'
import LandingBtn from '@/components/Home/home--components/landing-btn.vue'
export default {
  name: 'Home',
  components: {
    'HomeBase': HomeBase,
    'LandingBtn': LandingBtn
  }
}
</script>

<style lang="scss" scoped>

</style>
