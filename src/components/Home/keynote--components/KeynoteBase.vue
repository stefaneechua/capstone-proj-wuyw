<template>
  <div id="KeynotesBase" class="container-fluid text-center">
    <section-header title="KEYNOTES"></section-header>
    <section-subheader subtitle="—services"></section-subheader>
    <div class="py-5 bg-image-full parallax" style="background-image: url('https://unsplash.it/1900/1080?image=1076');">
      <img class="img-fluid d-block mx-auto" src="http://placehold.it/200x200&text=Logo" alt="">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="card my-5">
            <div class="card-body my-5 px-5">
              <h3 class="card-title">{{ KeynoteTitle }}</h3>
              <h5 class="card-text">{{ KeynoteSub }}</h5>
              <p>{{ KeynoteDesc }}</p>
              <button type="button" class="btn btn-primary btn-block btn-lg d-block mx-auto my-3">JULIA!</button>
              <button type="button" class="btn btn-primary btn-block btn-lg d-block mx-auto">JULIA!</button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card my-5">
            <div class="card-body my-5 px-5">
              <h3 class="card-title">{{ KeynoteTitle }}</h3>
              <h5 class="card-text">{{ KeynoteSub }}</h5>
              <p>{{ KeynoteDesc }}</p>
              <button type="button" class="btn btn-primary btn-block btn-lg d-block mx-auto my-3">JULIA!</button>
              <button type="button" class="btn btn-primary btn-block btn-lg d-block mx-auto">JULIA!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      KeynoteTitle: 'Keynote Name',
      KeynoteSub: 'Keynote Sub',
      KeynoteDesc: 'Lorem ipsum dolor amet ipsum dolor amet ipsum dolor amet orem ipsum dolor amet ipsum dolor amet ipsum dolor amet orem ipsum dolor amet ipsum dolor amet ipsum dolor amet'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/styles";

#KeynotesBase {
  padding-left: 0;
  padding-right: 0;
}

.parallax {
  @include parallax;
  background-color: $cathorange;
  background-blend-mode: overlay;
}

</style>
