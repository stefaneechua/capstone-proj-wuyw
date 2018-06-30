<template>
  <div id="app">
    <TestBtn></TestBtn>
    <router-view></router-view>
    <navbar></navbar>
  </div>
</template>

<script>
import TestBtn from '@/components/Home/TestBtn.vue'
import navbar from '@/components/Navbar/navbar.vue'

export default {
  name: 'App',
  components: {
    'TestBtn': TestBtn,
    'navbar': navbar
  }
}
</script>

<style>
</style>
