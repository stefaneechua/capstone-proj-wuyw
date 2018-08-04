<template>
  <div>
    <b-container fluid class="text-center">
      <b-row>
        <b-col>
            <vue-typer
            :text='["Wake up your purpose.", "Wake up your potential.", "Wake up your wow."]'
            :shuffle='false'
            :repeat='Infinity'
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :pre-erase-delay='2000'
            :erase-delay='250'
            erase-style='clear'
            :erase-on-complete='false'
            caret-animation='phase'
            ></vue-typer>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
  name: '',
  components: {
    'vue-typer': VueTyper
  }
}
</script>

<style lang="scss" scoped>
@import "~scss/styles";

.vue-typer {
  font-family: 'Poppins', sans-serif;
  font-size: 4em;
  font-weight: bolder;
  margin: 0;
  -webkit-text-fill-color: $base;
}
</style>
