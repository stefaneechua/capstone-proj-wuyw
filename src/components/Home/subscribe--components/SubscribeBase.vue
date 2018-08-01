<template>
  <div id="SubscribeBase" class="container-fluid text-center">
    <div class="py-5 bg-image-full parallax" style="background-image: url('https://unsplash.it/1900/1080?image=1076');">
    <section-header title="HEY PLS WORK"></section-header>
    <section-subheader subtitle="JULIAAAAAAA"></section-subheader>
      <div class="container text-center" id="subform">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Email</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Email Address">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "~scss/styles";

#SubscribeBase {
  padding-left: 0;
  padding-right: 0;
}

.parallax {
  @include parallax;
  background-color: $studioblue;
  background-blend-mode: overlay;
}

  #subform {
    width: 60%;
  }

  .form-control:focus {
    border-color: orange;
    box-shadow: none;
  }
</style>
