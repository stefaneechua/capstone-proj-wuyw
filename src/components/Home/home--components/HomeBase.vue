<template>
  <div id="HomeBase" class="bg-skew">
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "~scss/styles";

.bg-skew {
    height: 100%;
    background: $cathorange;
    -webkit-transform: skew(0deg, -10deg);
    transform: skew(0deg, -10deg);
    padding: 350px 0;
    margin-top: -120px;
}

</style>
