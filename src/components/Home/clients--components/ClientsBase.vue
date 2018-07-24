<template>
  <div>
    <b-carousel id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#FF671F"
      :interval="5000"
      img-width="500"
      img-height="150"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd">

      <!-- Client testimonal #1 -->
      <b-carousel-slide caption="Ray White" text="- Some Person">
        <img slot="img" class="d-block .img-fluid" width="400" height="400" src="http://res.cloudinary.com/renew-brighton/image/upload/c_fill,w_1160/mor18du1wslttsf7owvj.jpg" alt="image slot">
        <h1>"Brilliant, practical, funny and thought provoking... Massively motivational!"</h1>
      </b-carousel-slide>

      <!-- Client testimonal #2 -->
      <b-carousel-slide caption="Chevron Australia" text="- Some Person">
        <img slot="img" class="d-block .img-fluid" width="400" height="400" src="https://healthierworkplacewa.com.au/media/130033/chevron-logo.jpg" alt="image slot">
        <h1>"Brilliant, practical, funny and thought provoking... Massively motivational!"</h1>
      </b-carousel-slide>

      <!-- Client testimonal #3 -->
      <b-carousel-slide caption="Singapore Airlines" text="- Some Person">
        <img slot="img" class="d-block .img-fluid" width="400" height="400" src="https://d24ndt2yiijez0.cloudfront.net/uploads/carrier/logo/209/Singapore_airlines_500x500.jpg" alt="image slot">
        <h1>"Brilliant, practical, funny and thought provoking... Massively motivational!"</h1>
      </b-carousel-slide>

      <!-- Client testimonal #4 -->
      <b-carousel-slide caption="Main Roads Australia" text="- Some Person">
        <img slot="img" class="d-block .img-fluid" width="400" height="400" src="http://franklandrivercrc.net.au/wp-content/uploads/2016/09/main-roads-pic.jpg" alt="image slot">
        <h1>"Brilliant, practical, funny and thought provoking... Massively motivational!"</h1>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
