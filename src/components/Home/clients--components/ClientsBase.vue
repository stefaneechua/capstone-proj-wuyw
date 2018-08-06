<template>
  <div class="text-center">
    <carousel>
      <slide>
      Slide 1 Content
      </slide>
      <slide>
      Slide 2 Content
      </slide>
      <slide>
      Slide 4 Content
      </slide>
      <slide>
      Slide 5 Content
      </slide>
      </carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselTwo'
}
</script>

<style>
.VueCarousel-slide {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
