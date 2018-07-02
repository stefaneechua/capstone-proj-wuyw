<template>
  <div class="container">
      <b-navbar toggleable="md" type="light" class="container" id="main-navbar">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">BRAND LOGO</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">Keynotes</b-nav-item>
          <b-nav-item href="#">Shop</b-nav-item>
          <b-nav-item href="#">Contact</b-nav-item>
        </b-navbar-nav>

        </b-collapse>
        </b-navbar>
      </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
#main-navbar {
  background: white;
}

#main-navbar {
  position: fixed;
  z-index: 1;
}

</style>
