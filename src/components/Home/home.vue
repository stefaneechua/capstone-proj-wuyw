<template>
  <div id="home">
      <LandingBtn></LandingBtn>
      <HomeBase></HomeBase>
  </div>
</template>

<script>
import HomeBase from '@/components/Home/home--components/home-base.vue'
import LandingBtn from '@/components/Home/home--components/landing-btn.vue'
export default {
  name: '',
  components: {
    'HomeBase': HomeBase,
    'LandingBtn': LandingBtn
  }
}
</script>

<style lang="scss" scoped>

</style>
