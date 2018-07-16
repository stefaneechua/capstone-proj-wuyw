<template>
  <div id="HomeBase">
    <div class="bg-skew">
      <div class="content">
        <parallax>
          <img src="@/assets/images/cath-home.png" alt="very cool bg">
        </parallax>
        <HomeBaseHeading/>
        <HomeBaseBtn/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBaseHeading from '@/components/Home/home--components/HomeBaseHeading.vue'
import HomeBaseBtn from '@/components/Home/home--components/HomeBaseBtn.vue'
import Parallax from 'vue-parallaxy'

export default {
  name: '',
  components: {
    'HomeBaseHeading': HomeBaseHeading,
    'HomeBaseBtn': HomeBaseBtn,
    Parallax
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

.content {
  width: 100%;
  -webkit-transform: skew(0deg, 10deg);
  transform: skew(0deg, 10deg);
}

</style>
