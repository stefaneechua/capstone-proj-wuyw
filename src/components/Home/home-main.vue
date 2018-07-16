<template>
  <div id="home-main">
      <main-navbar></main-navbar>
      <HomeBase/>
      <AboutBase/>
      <ChecklistBase/>
      <KeynoteBase/>
      <main-footer></main-footer>
  </div>
</template>

<script>
import HomeBase from '@/components/Home/home--components/HomeBase.vue'
import AboutBase from '@/components/Home/about--components/AboutBase.vue'
import ChecklistBase from '@/components/Home/checklist--components/ChecklistBase.vue'
import KeynoteBase from '@/components/Home/keynote--components/KeynoteBase.vue'

export default {
  name: 'home-main',
  components: {
    'HomeBase': HomeBase,
    'AboutBase': AboutBase,
    'ChecklistBase': ChecklistBase,
    'KeynoteBase': KeynoteBase
  }
}
</script>

<style lang="scss" scoped>
</style>
