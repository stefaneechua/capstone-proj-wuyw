<template>
  <div id="SubscribeBase" class="container-fluid text-center">
    <div class="py-5 bg-image-full parallax" v-bind:style="style">
    <section-header title="SUBSCRIBE"></section-header>
    <section-subheader subtitle="Lorem ipsum dolor amet?"></section-subheader>
      <div class="container text-center" id="subform">
        <form>
          <div class="form-group">
            <label for="InputEmail">Email</label>
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter your email address">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <button type="submit" class="btn btn-primary btn-lg">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import image from '@/assets/images/cath-footer.png'
export default {
  data () {
    return {
      style: {
        backgroundImage: `url(${image})`
      }
    }
  }
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
}

  #subform {
    width: 50%;
    @media only screen and (max-width: 600px) {
      width: 80%;
    }
  }

  .form-control:focus {
    border-color: orange;
  }
</style>
