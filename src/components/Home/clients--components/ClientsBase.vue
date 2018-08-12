<template>
  <div class="container text-center">
    <section-header title="CLIENTS"></section-header>
    <carousel :autoplay="true" perPage="1" speed="3000">
      <slide>
      <img id="client-logo" src="https://www.foresthillchase.com.au/uploads/images/stores/anz-bank.jpg" />
      <p class="h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <p class="h6"> -Jane Doe, Head of Sales</p>
      </slide>
      <slide>
      <img id="client-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flight_Centre_Logo.jpg/220px-Flight_Centre_Logo.jpg" />
      <p class="h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <p class="h6"> -Juliea McSilver, Executive</p>
      </slide>
      <slide>
      <img id="client-logo" src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/022011/tetra_pak_spn.png?itok=-LcFxy12" />
      <p class="h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <p class="h6"> -Yen Jabson, Director</p>
      </slide>
      </carousel>
  </div>
</template>

<script>
export default {
}
</script>

<style>

.VueCarousel-slide {
  position: relative;
  background: #FF671F;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 200px;
  padding: 50px;
}

.label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#client-logo {
  width: 80px;
  border-radius:50%;
}

</style>
