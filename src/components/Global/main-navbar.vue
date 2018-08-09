<template>
  <div id="main-navbar" class="dropshadow">
    <!-- Bootsrap-Vue -->
    <b-navbar toggleable="md" type="light" class="container-fluid">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#"><img src="@/assets/images/logo.png" /></b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" v-on:click= "HomeLink">Home</b-nav-item>
          <b-nav-item href="#" v-on:click= "AboutLink">About</b-nav-item>
          <b-nav-item href="#" v-on:click= "KeyLink">Keynotes</b-nav-item>
          <b-nav-item href="#" v-on:click= "ShopLink">Shop</b-nav-item>
          <b-nav-item href="#" v-on:click= "ContactLink">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    HomeLink: function (event) {
      var elmntH = document.getElementById('HomeBase')
      elmntH.scrollIntoView()
    },
    AboutLink: function (event) {
      var elmntA = document.getElementById('AboutBase')
      elmntA.scrollIntoView()
    },
    KeyLink: function (event) {
      var elmntK = document.getElementById('KeynoteBase')
      elmntK.scrollIntoView()
    },
    ShopLink: function (event) {
      var elmntS = document.getElementById('ShopPreviewBase')
      elmntS.scrollIntoView()
    },
    ContactLink: function (event) {
      var elmntC = document.getElementById('main-footer')
      elmntC.scrollIntoView()
    }
  }
}
/* IGNORE ME!!!!!!!!!!!!!
$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $('#main-navbar').addClass('dropshadow')
  } else {
    $('#main-navbar').removeClass('dropshadow')
  }
}) */
</script>

<style lang="scss" scoped>

#main-navbar {
  width: 100%;
  background: white;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  img {
    width: 150px;
  }
}

.dropshadow {
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, .6);
}
.nodropshadow {
 box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, .6);
 }

</style>
