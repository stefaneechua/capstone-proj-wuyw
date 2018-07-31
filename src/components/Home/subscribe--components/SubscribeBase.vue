<template>
  <div>
    <div class="text-center">
      <section-header title="HEY PLS WORK"></section-header>
      <section-subheader subtitle="JULIAAAAAAA"></section-subheader>
    </div>
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
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  #subform {
    width: 60%;
  }

  .form-control:focus {
    border-color: orange;
    box-shadow: none;
  }
</style>

