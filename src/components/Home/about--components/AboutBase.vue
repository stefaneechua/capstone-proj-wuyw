<template>
  <div id="AboutBase">
    <section-header title="TEST ME!"></section-header>
    <section-subheader subtitle="Subheader"></section-subheader>
    <b-container fluid class="text-center">
      <b-row>
        <b-col sm><p>{{ minibio }}</p></b-col>
        <b-col sm><p>{{ minibio }}</p></b-col>
      </b-row>
      <b-row>
        <b-col sm>
          <img :src="img" />
        </b-col>
      </b-row>
      <b-row>
        <b-col sm>
        <main-button button="hello"></main-button>
        </b-col>
      </b-row>
    </b-container>
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
div {
  p {
      margin: 10% 20%;
      font-size: 1em;
      color: #000;
  }
  img {
    width: 50%;
  }
}
</style>
