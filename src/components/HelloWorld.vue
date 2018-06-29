<template>
  <div class="hello text-center">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HASSSHHH'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/styles";

div {
  background: $primary;
  padding: $width;
}

</style>
