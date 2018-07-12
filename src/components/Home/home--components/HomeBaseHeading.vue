<template>
  <div>
    <b-container>
      <b-row>
        <b-col sm>
            <vue-typer
            :text='["Wake up your wow", "Wake up your potential"]'
            :shuffle='false'
            :repeat='Infinity'
            initial-action='typing'
            :pre-type-delay='70'
            :type-delay='70'
            :pre-erase-delay='2000'
            :erase-delay='250'
            erase-style='clear'
            :erase-on-complete='false'
            caret-animation='phase'>
            </vue-typer>
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

<style>

</style>
