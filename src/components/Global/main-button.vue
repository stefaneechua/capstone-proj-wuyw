<template>
  <button class="Button">
    <b-button href="#" size="lg" variant="primary">{{ button }}</b-button>
  </button>
</template>

<script>
export default {
  props: ['button'],
  template: '<b-button>{{ button }}</b-button>'
}
</script>

<style lang="scss" scoped>

</style>
