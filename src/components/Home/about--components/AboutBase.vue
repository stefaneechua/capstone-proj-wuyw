<template>
  <div id="AboutBase" class="container text-center">
    <section-header title="ABOUT"></section-header>
    <section-subheader subtitle="—about subheader"></section-subheader>
      <div class="row">
        <div class="col-sm-6 form-group text-justify">{{ minibio }}</div>
        <div class="col-sm-6 form-group text-justify">{{ minibio }}</div>
      </div>
      <div class="row">
        <div class="col form-group"><img :src="img" /></div>
      </div>
    <main-button button="LOREM IPSUM DOLOR"></main-button>
  </div>
</template>

<script>
import image from '@/assets/images/cath-banner.jpg'
export default {
  name: '',
  data () {
    return {
      minibio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      img: image
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/styles";

img {
    width: 50%;
}

</style>
