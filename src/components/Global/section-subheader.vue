<template>
  <header>
    <h4 class="text-center">{{ subtitle }}</h4>
  </header>
</template>

<script>
export default {
  props: ['subtitle'],
  template: '<h4>{{ subtitle }}</h4>'
}
</script>

<style lang="scss" scoped>
@import "~scss/styles";
header {
  margin: 40px;
  padding: 10px;
}

h4 {
  color: $cathorange;
}
</style>
