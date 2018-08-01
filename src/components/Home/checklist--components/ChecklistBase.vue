<template>
  <div id="ChecklistBase" class="checklist-skew">
    <div class="container content text-center">
    <section-header title="3 THINGS FOR CONFERENCE ORGANISERS"></section-header>
    <section-subheader subtitle="—conference checklist"></section-subheader>
      <div class="row spacing">
        <div class="col-sm-4">
          <i class="fas fa-child" style="font-size:5em;"></i>
          <p class="h4">{{ checklistheader }}</p>
          <p class="text-justify">{{ checklistdesc }}</p>
        </div>
        <div class="col-sm-4">
          <i class="fas fa-dollar-sign" style="font-size:5em;"></i>
          <p class="h4">{{ checklistheader }}</p>
          <p class="text-justify">{{ checklistdesc }}</p>
        </div>
        <div class="col-sm-4">
          <i class="far fa-comments" style="font-size:5em;"></i>
          <p class="h4">{{ checklistheader }}</p>
          <p class="text-justify">{{ checklistdesc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checklistheader: 'Lorem Ipsum Dolor',
      checklistdesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
    }
  }
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
  margin-top: 50px;
}

.content {
  height: 100%;
  width: 100%;
  -webkit-transform: skew(0deg, -10deg);
  transform: skew(0deg, -10deg);
  padding: 20px;
  color: $base !important;
  margin-bottom: 50px;
}

</style>
