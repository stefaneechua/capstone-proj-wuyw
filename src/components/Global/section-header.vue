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
  margin-top: 50px;
}
</style>
