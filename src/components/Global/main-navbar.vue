<template>
  <div id="main-navbar">
    <b-navbar toggleable="md" type="light" class="container-fluid">
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
/* $(window).scroll(function () {
  if ($(this).scrollTop()) {
    $('#main-navbar').addClass('shadow')
  } else {
    $('#main-navbar').removeClass('shadow')
  }
}) */
</script>

<style lang="scss" scoped>
#main-navbar {
  width: 100%;
  background: white;
}

#main-navbar {
  position: fixed;
  z-index: 1;
}

.dropshadow {
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, .6);
}

</style>
