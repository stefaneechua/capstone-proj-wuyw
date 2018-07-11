<template>
  <header>
    <h1>{{ SectionTitle }}</h1>
  </header>
</template>

<script>
export default {
  data () {
    return {
      SectionTitle: 'About'
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  background: green;
  padding: 10px;
}

h1 {
  color: #222;
  text-align: center;
}
</style>
