<template>
  <div id="main-footer" class="container-fluid text-center">
      <div class="row">
        <!-- Header -->
        <div class="col-sm-12">
          <h3>{{ footerheader }}</h3>
        </div>
      </div>
      <div class="row">
        <!-- Address -->
        <div class="col-sm-4">
          <p>Address Line 1</p>
          <p>Address Line 2</p>
          <p>Address Line 3</p>
        </div>
        <div class="col-sm-4">
          <a href="#" ><i class="fab fa-linkedin fa-5x"></i></a>
          <a href="#" ><i class="fab fa-facebook-square fa-5x"></i></a>
        </div>
        <div class="col-sm-4">
          <p>Name here</p>
          <p>Email Here</p>
          <p>Mobile Here</p>
        </div>
      </div>
      <div class="container-fluid">
        <div class="row">
        <iframe id="map-container" style="border:0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.485804690362!2d174.76276731529143!3d-36.85478897993737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e5d0e974d9%3A0xd83592c310724072!2sStudio+38!5e0!3m2!1sen!2snz!4v1530531293577"></iframe>
        </div>
      </div>
      <footer class="medium text-center text-white-50">
      <div class="container">
        Copyright &copy; Your Website 2018
      </div>
      </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footerheader: 'CONTACT',
      copyright: 'pakshettttttttttttttttttt'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/styles";

#main-footer {
  width: 100%;
  min-height: 200px;
  background-color: $studioblue;
  color: white;
}

#map-container {
  width: 100%;
  margin-top: 30px;
  @include dropshadow;
}

#copyright {
  background: $cathorange;
}

a {
  color: white;
}

</style>
