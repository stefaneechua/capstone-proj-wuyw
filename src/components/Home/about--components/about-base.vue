<template>
  <b-container fluid>
    <div id="hAbout" class="text-center">
      <b-row>
        <b-col><p>{{ minibio_p1 }}</p></b-col>
        <b-col><p>{{ minibio_p2 }}</p></b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      minibio_p1: 'pakshetttttttt',
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
      font-size: 1.2em;
      color: $cathorange;
  }
}

</style>
