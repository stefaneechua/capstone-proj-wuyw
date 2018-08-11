<template>
  <div class="container text-center">
    <carousel :autoplay="true" perPage="1" speed="1000">
      <slide>
      <img src="http://cdn.osxdaily.com/wp-content/uploads/2015/02/facebook-app-icon.png" />
      <p> Lorem ipsum dolor amet....</p>
      <p> -Jane Doe</p>
      <p> Head of Sales, KPMG</p>
      </slide>
      <slide>
      <p> Lorem ipsum dolor amet....</p>
      <p> -Steph Chua</p>
      <p> Babygirl</p>
      </slide>
      <slide>
      <p> YAAAAAH G</p>
      <p> -Yen Jabson</p>
      <p> Cutie</p>
      </slide>
      <slide>
      Slide 5 Content
      </slide>
      </carousel>
  </div>
</template>

<script>
export default {
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
