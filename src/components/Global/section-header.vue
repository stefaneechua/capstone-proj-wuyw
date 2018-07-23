<template>
  <header>
    <h1 class="text-center">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ['title'],
  template: '<h1>{{ title }}</h1>'
}
</script>

<style lang="scss" scoped>
@import "~scss/styles";
header {
  margin: 40px;
  padding: 10px;
}
h1, h4 {
  color: $cathorange;
}
</style>
