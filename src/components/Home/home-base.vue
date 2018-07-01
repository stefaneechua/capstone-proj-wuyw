<template>
    <div class="bg-skew"></div>
</template>

<script>
export default {
  name: 'home-base'
}
</script>

<style lang="scss" scoped>
@import "~scss/styles";

.bg-skew {
    height: 100%;
    background: $cathorange;
    -webkit-transform: skew(0deg, -10deg);
    transform: skew(0deg, -10deg);
    padding: 200px 0;
    // margin-top: -190px;
}

</style>
