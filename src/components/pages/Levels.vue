<template>
  <div class="game-container mdc-layout-grid">
    <h1 class="init-hidden fade-in-element">Select level</h1>

    <h3 class="total-scores-title init-hidden fade-in-element">Total:
      <!-- &nbsp; -->
      <i class="material-icons star">star</i>
      <span class="level-scores-number">
        {{ getTotalScrores() }}
      </span>
    </h3>

    <div class="mdc-layout-grid__inner">
      <div
        v-for="(level, levelNr) in levels"
        :key="level.title"
        class="mdc-layout-grid__cell--span-3 init-hidden slide-down-element">
        <!-- <div class="level-card mdc-elevation--z1">
          <img src="../../../public/level1.png" />
          <h2>{{ level.title }}</h2>
        </div> -->

        <div
          class="mdc-card"
          :class="{
            'level-blocked': levelNr > lastCompletedLevel + 1,
            'level-completed': levelNr <= lastCompletedLevel
          }"
          @click="goToLevel(levelNr)"
          >
          <div class="mdc-card__primary-action demo-card__primary-action" tabindex="0">
            <div
              class="mdc-card__media mdc-card__media--16-9 demo-card__media"
              :style="{ backgroundImage: 'url(\'' + level.img + '\')' }"
            ></div>
          </div>

          <h3 class="level-title">
            {{ level.title }}
            <!-- <img class="done-img" src="../../../public/done.gif" /> -->           
          </h3>

          <span class="level-scores">
            <i class="material-icons star">star</i>
            <span class="level-scores-number">
              {{ getScoresForLevel(levelNr) }}
            </span>
          </span>
          
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
// import BlockstackUtils from '../../modules/blockstackUtils'
import State from '../../modules/state'
import Constants from '../../constants'

export default {
  name: "Levels",
  mounted() {
    window.scrollTo(0, 0)
  },
  data() {
    return {
      State,
      levels: Constants.levels,
      
    }
  },
  props: {

  },
  methods: {
    goToLevel(levelNr) {
      // If level not blocked go to it
      if (levelNr <= this.lastCompletedLevel + 1) {
        location.href = `#/level/${levelNr}`
      }
      // console.log(this.lastCompletedLevel)
      // console.log(localStorage.lastLevelCompletedTNTL)
    },
    getScoresForLevel(levelNr) {
      let valFromLocalStorage = localStorage['TNTLScoresForLevel' + levelNr]
      // console.log('GOT: ' + valFromLocalStorage + ' + ' + levelNr)
      if (valFromLocalStorage) {
        return Number(valFromLocalStorage).toFixed(2)
      }
      return 0
    },
    getTotalScrores() {
      let res = 0
      for (let nr = 0; nr < Constants.levels.length; nr++) {
        res += Number(this.getScoresForLevel(nr))
      }
      return res.toFixed(2)
    }
  },
  components: {

  },
  computed: {
    lastCompletedLevel() {
      let result = Number(localStorage.lastLevelCompletedTNTL)
      if (!localStorage.lastLevelCompletedTNTL) {
        return -1
      } else {
        return result
      }
    }
  }
}

</script>

<style scoped>

.mdc-card {
  cursor: pointer;
}

h1 {
  margin-bottom: 10px;
  color: #6200ee;
  font-size: 50px;
  text-align: center;
}

.live-emotions-block {
  height: 700px;
  width: 20%;
  position: fixed;
}

.game-container {
  margin-top: 60px;
}

.level-card {
  width: 90%;
  height: 100%;
}

.level-card img {
  width: 100%;
}

.level-title {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  font-size: 25px;
  color: #6200ee;
  /* color: #FE922A; */
  /* color: #6200ee; */
  text-align: center;
}

.level-blocked {
  opacity: 0.5;
  filter: brightness(45%);
}

.done-img {
  position: relative;
  top: 5px;
  width: 25px;
  display: none;
}

.level-completed .done-img {
  display: inline;
}

.level-scores {
  /* color: #6200ee; */
  position: absolute;
  /* top: 5px;
  left: 5px; */
  color: #FE922A;
  /* font-size: 16px; */
}

.level-scores-number {
  margin-left: -12px;
}

.total-scores-title {
  color: #6200ee;
  text-align: center;
  margin-bottom: 30px;
}

</style>
