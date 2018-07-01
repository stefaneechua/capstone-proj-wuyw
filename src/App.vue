<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <SectionHeader></SectionHeader>
    <TestBtn></TestBtn>
  </div>
</template>

<script>
import TestBtn from '@/components/Home/landing-btn.vue'
import navbar from '@/components/Navbar/navbar.vue'
import SectionHeader from '@/components/Global/SectionHeader.vue'

export default {
  name: 'App',
  components: {
    'TestBtn': TestBtn,
    'navbar': navbar,
    'SectionHeader': SectionHeader
  }
}
</script>

<style>
</style>
