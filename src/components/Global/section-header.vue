<template>
  <header>
    <h1 class="text-center">{{ sectionTitle }}</h1>
    <h4 class="text-center">{{ SectionSubHeader}}</h4>
  </header>
</template>

<script>
export default {
  data () {
    return {
      sectionTitle: ''
    }
  }
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
