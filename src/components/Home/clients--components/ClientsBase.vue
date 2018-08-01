<template>
  <div id="ClientsBase" class="container text-center">
    <section-header title="CLIENTS"></section-header>
    <div class="row">
      <div class="col-md-8 col-center m-auto">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <!-- Carousel Navigation -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <!-- Carousel Controls -->
          <a href="#myCarousel" class="carousel-control left carousel-control-prev" data-slide="prev">
            <i class="fas fa-angle-left" style:color="red;"></i>
          </a>
          <a href="#myCarousel" class="carousel-control right carousel-control-next" data-slide="next">
            <i class="fas fa-angle-right" style:color="red;"></i>
          </a>
          <!-- Carousel Wrapper-->
          <div class="carousel-inner">
            <div class="item carousel-item active">
              <div class="img-box"><img src="/examples/images/clients/1.jpg" alt=""></div>
              <p class="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
              <p class="overview"><b>Paula Wilson</b>, Media Analyst</p>
            </div>
          </div>
        </div>
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

.col-center {
  margin: 0 auto;
  float: none !important;
}

.carousel {
  margin: 50px auto;
  padding: 0 70px;
}

.carousel .item .img-box {
  width: 135px;
  height: 135px;
  margin: 0 auto;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.carousel .img-box img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}

.carousel .testimonial {
  padding: 30px 0 10px;
}
.carousel .overview {
  font-style: italic;
}
.carousel .overview b {
  text-transform: uppercase;
  color: #7AA641;
}
.carousel .carousel-control {
  width: 40px;
  height: 40px;
  margin-top: -20px;
  top: 50%;
  background: none;
}
.carousel-control i {
  font-size: 68px;
  line-height: 42px;
  position: absolute;
  display: inline-block;
  color: rgba(0, 0, 0, 0.8);
  text-shadow: 0 3px 3px #e6e6e6, 0 0 0 #000;
}
.carousel .carousel-indicators {
  bottom: -40px;
}
.carousel-indicators li, .carousel-indicators li.active {
  width: 10px;
  height: 10px;
  margin: 1px 3px;
  border-radius: 50%;
}
.carousel-indicators li {
  background: #999;
  border-color: transparent;
  box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}
.carousel-indicators li.active {
  background: #555;
  box-shadow: inset 0 2px 1px rgba(0,0,0,0.2);
}

</style>
