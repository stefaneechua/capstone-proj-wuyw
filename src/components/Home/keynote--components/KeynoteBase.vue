<template>
  <div>
    <section-header title="KEYNOTES"></section-header>
    <div id="boo" class="container-fluid text-center">
      <div class="row">
        <div class="col-md-6 text-center">
          <h3>{{ KeynoteTitle }}</h3>
            <h5>{{ KeynoteSub }}</h5>
            <p>{{ KeynoteDesc }}</p>
            <button type="button" class="btn btn-primary btn-lg d-block mx-auto my-3">JULIA!</button>
            <button type="button" class="btn btn-primary btn-lg d-block mx-auto">JULIA!</button>
        </div>
        <div class="col-md-6">
          <h3>{{ KeynoteTitle }}</h3>
            <h5>{{ KeynoteSub }}</h5>
            <p>{{ KeynoteDesc }}</p>
            <button type="button" class="btn btn-primary btn-lg d-block mx-auto my-3">JULIA!</button>
            <button type="button" class="btn btn-primary btn-lg d-block mx-auto">JULIA!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from 'vue-parallaxy'
export default {
  components: {
    Parallax
  },
  data () {
    return {
      KeynoteTitle: 'Keynote Name',
      KeynoteSub: 'Keynote Sub',
      KeynoteDesc: 'Lorem ipsum dolor amet ipsum dolor amet ipsum dolor amet'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
