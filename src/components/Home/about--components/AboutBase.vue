<template>
  <div id="AboutBase">
    <section-header></section-header>
    <b-container fluid class="text-center">
      <b-row>
        <b-col sm><p>{{ minibio_p1 }}</p></b-col>
        <b-col sm><p>{{ minibio_p2 }}</p></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      minibio_p1: 'lorem ipsum dolor',
      minibio_p2: 'put some text'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/styles";

div {
  p {
      margin-top: 100px;
      font-size: 2em;
      color: $cathorange;
  }
}

</style>
