<template>
  <div class="container text-center">
    <div class="row">
      <div class="col text-center">
        <button v-on:click = "myFunction" type="button" class="btn btn-lg btn-outline-light text-center">{{ HomeBaseBtn }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      HomeBaseBtn: 'SHOW ME HOW'
    }
  },
  methods: {
    myFunction: function (event) {
      var elmnt = document.getElementById('AboutBase')
      elmnt.scrollIntoView()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/styles";

button {
  margin: 50px;
}

</style>
