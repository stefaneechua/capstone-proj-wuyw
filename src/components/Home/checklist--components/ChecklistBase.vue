<template>
  <div>
    <div class="checklist-skew">
      <div class="content text-center">
        <h1>LOREM IPSUM</h1>
        <b-container fluid>
          <b-row>
            <b-col sm>
              <font-awesome-icon icon="coffee" />
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor amet lorem ipsum dolor amet Lorem ipsum dolor amet lorem ipsum dolor amet</p>
            </b-col>
            <b-col sm>
              <font-awesome-icon icon="coffee" />
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor amet lorem ipsum dolor amet Lorem ipsum dolor amet lorem ipsum dolor amet</p>
            </b-col>
            <b-col sm>
              <font-awesome-icon icon="coffee" />
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor amet lorem ipsum dolor amet Lorem ipsum dolor amet lorem ipsum dolor amet</p>
            </b-col>
          </b-row>
        </b-container>
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

.checklist-skew {
    height: 100%;
    background: $studioblue;
    background-size: cover;
    -webkit-transform: skew(0deg, 10deg);
    transform: skew(0deg, 10deg);
    padding: 100px 0 350px;
    margin-top: 30px;
}

.content {
  height: 100%;
  width: 100%;
  -webkit-transform: skew(0deg, -10deg);
  transform: skew(0deg, -10deg);
  padding: 20px;
  color: #fff;
}

</style>
