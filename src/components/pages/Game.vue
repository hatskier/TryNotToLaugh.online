<template>
  <div class="game-container mdc-layout-grid">
    <h1>The game will be here</h1>
    <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-3">
        <!-- <h2>Level 1</h2> -->
      </div>
    </div>
  </div>
</template>

<script>

import BlockstackUtils from '../../modules/blockstackUtils'
import State from '../../modules/state'

export default {
  name: "Game",
  data() {
    return {
      State,
    }
  },
  props: {

  },
  components: {

  },
  created() {

  },
  computed: {

  }
}

</script>

<style scoped>

.live-emotions-block {
  height: 700px;
  width: 20%;
  position: fixed;
}

.game-container {
  margin-top: 60px;
}

</style>
