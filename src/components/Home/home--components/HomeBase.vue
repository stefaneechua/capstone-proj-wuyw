<template>
  <div id="HomeBase">
    <div class="bg-skew" v-bind:style="style">
      <div class="content">
        <HomeBaseHeading/>
        <HomeBaseBtn/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeBaseHeading from '@/components/Home/home--components/HomeBaseHeading.vue'
import HomeBaseBtn from '@/components/Home/home--components/HomeBaseBtn.vue'
import image from '@/assets/images/cathfooter.png'
export default {
  data () {
    return {
      style: {
        backgroundImage: `url(${image})`,
        transform: `skew(0deg, -10deg)`
      }
    }
  },
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
  background-color: $cathorange;
  background-blend-mode: overlay;
  overflow: hidden;
  -webkit-transform: skew(0deg, -10deg);
  transform: skew(0deg, -10deg);
  padding: 350px 0;
  margin-top: -60px;
}

.bg-img {
  -webkit-transform: skew(0deg, -10deg);
  transform: skew(0deg, -10deg);
}

.content {
  height: 100%;
  width: 100%;
  -webkit-transform: skew(0deg, 10deg);
  transform: skew(0deg, 10deg);
}

</style>
