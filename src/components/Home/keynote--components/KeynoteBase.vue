<template>
  <div>
    <section-header title="PLS WORK"></section-header>
    <parallax><img src="@/assets/images/cath-keynotes.png" alt="" id=test /></parallax>
    <b-container fluid id="boo" class="text-center">
      <b-row>
        <b-col sm>
          <h3>{{ KeynoteTitle }}</h3>
            <h5>{{ KeynoteSub }}</h5>
            <p>{{ KeynoteDesc }}</p>
            <main-button></main-button>
        </b-col>
        <b-col sm>
          <h3>{{ KeynoteTitle }}</h3>
            <h5>{{ KeynoteSub }}</h5>
            <p>{{ KeynoteDesc }}</p>
            <main-button></main-button>
        </b-col>
      </b-row>
    </b-container>
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
#test {
  width: 100%;
  height: 50%;
}

#boo {
  background: yellow no-repeat right top;
  height: 500px;
  h3 {
    width: 100%;
    height: 100%;
    background: orange;
  }
}
</style>
