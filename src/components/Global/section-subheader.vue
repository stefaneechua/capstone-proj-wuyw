<template>
  <header>
    <h6 class="text-center">{{ subtitle }}</h6>
  </header>
</template>

<script>
export default {
  props: ['subtitle'],
  template: '<h6>{{ subtitle }}</h6>'
}
</script>

<style lang="scss" scoped>
@import "~scss/styles";
h6 {
  margin-bottom: 50px;
}
</style>
