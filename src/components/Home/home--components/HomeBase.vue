<template>
  <div id="HomeBase">
    <b-container fluid class="bg-skew">
      <HomeBaseHeading/>
      <HomeBaseBtn/>
    </b-container>
  </div>
</template>

<script>
import HomeBaseHeading from '@/components/Home/home--components/HomeBaseHeading.vue'
import HomeBaseBtn from '@/components/Home/home--components/HomeBaseBtn.vue'

export default {
  name: '',
  components: {
    'HomeBaseHeading': HomeBaseHeading,
    'HomeBaseBtn': HomeBaseBtn
  }
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
