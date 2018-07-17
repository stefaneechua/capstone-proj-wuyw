<template>
  <div id="home-main">
      <main-navbar></main-navbar>
      <HomeBase/>
      <AboutBase/>
      <ChecklistBase/>
      <KeynoteBase/>
      <ClientsBase/>
      <SubscribeBase/>
      <main-footer></main-footer>
  </div>
</template>

<script>
import HomeBase from '@/components/Home/home--components/HomeBase.vue'
import AboutBase from '@/components/Home/about--components/AboutBase.vue'
import ChecklistBase from '@/components/Home/checklist--components/ChecklistBase.vue'
import KeynoteBase from '@/components/Home/keynote--components/KeynoteBase.vue'
import ClientsBase from '@/components/Home/clients--components/ClientsBase.vue'
import SubscribeBase from '@/components/Home/subscribe--components/SubscribeBase.vue'

export default {
  name: 'home-main',
  components: {
    'HomeBase': HomeBase,
    'AboutBase': AboutBase,
    'ChecklistBase': ChecklistBase,
    'KeynoteBase': KeynoteBase,
    'ClientsBase': ClientsBase,
    'SubscribeBase': SubscribeBase
  }
}
</script>

<style lang="scss" scoped>
</style>
