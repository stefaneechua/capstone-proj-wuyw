<template>
  <button type="button" class="btn btn-primary btn-lg">{{ button }}</button>
</template>

<script>
export default {
  props: ['button'],
  template: '<main-button>{{ button }}</main-button>'
}
</script>

<style lang="scss" scoped>

</style>
