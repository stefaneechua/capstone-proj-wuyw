<template>
  <div id="app">
    <main-navbar></main-navbar>
    <router-view></router-view>
    <TestBtn></TestBtn>
  </div>
</template>

<script>
import TestBtn from '@/components/Home/landing-btn.vue'

export default {
  name: 'App',
  components: {
    'TestBtn': TestBtn
  }
}
</script>

<style>
</style>
