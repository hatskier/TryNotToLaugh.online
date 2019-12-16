<template>
  <div class="level-container">
    <h1 class="init-hidden slide-left-element">{{ level.title }}</h1>

    <h3 class="init-hidden slide-left-element">Level scores: {{ levelScoresFormatted }} </h3>
    <h3 class="init-hidden slide-left-element">Times smiling: {{ laughingTimes }}</h3>

    <button
      id="complete-level-button"
      @click="completeLevel()"
      class="mdc-button mdc-button--raised sign-in-button init-hidden slide-down-element">
      <div class="mdc-button__ripple"></div>
        COMPLETE LEVEL
    </button>

    <LiveEmotions :enabled="liveEmotionsEnabled" />

    <div class="video-player-container">
      <youtube
        id="video-player"
        :video-id="level.videoId"
        :player-vars="{rel: '0', allowfullscreen: '0', autoplay: '1'}"
        host="https://www.youtube-nocookie.com"
        :player-width="800"
        :player-height="480"
        @ready="ready"
        @ended="ended"
        @playing="playing"
      ></youtube>
    </div>

    <!-- <a @click="stop()">Stop</a>
    <br />
    <a @click="pause()">Pause</a>
    <br />
    <a @click="play()">Start</a>
    <br />
    <a @click="log()">Log</a>
    <br />
    <a @click="enableLE()">Enable LE</a>
    <br />
    <a @click="disableLE()">Disable LE</a> -->
    
  </div>
</template>

<script>

import BlockstackUtils from '../../modules/blockstackUtils'
import Constants from '../../constants'
import Vue from 'vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import LiveEmotions from '../LiveEmotions'
import State from '../../modules/state'

Vue.use(VueYouTubeEmbed)

const scoresBit = 0.01
const maxScores = 30

export default {
  name: "Level",
  data() {
    console.log(this.player)
    return {
      level: Constants.levels[this.$route.params.levelNr],
      player: null,
      liveEmotionsEnabled: false,
      laughingTimes: 0,
      isPaused: false,
      levelScores: 0,
    }
  },
  created() {
    BlockstackUtils.saveLevelAsCompleted(this.$route.params.levelNr)

    this.laughingTimes = 0
    State.setEmotionsDetectionCB((detections) => {
      if (!detections) {
        console.error('NOT DETECTED')
      }
      let detectionWorks = (typeof detections == 'object') && ('happy' in detections)
      // console.log(detections.happy)
      if (!detectionWorks) {
        if (!this.isPaused) {
          window.toastr.warning('Can\'t find a face. Video paused. Will continue automatically')
        }
        
        this.pause()
        this.isPaused = true
      } else {
        this.play()
        this.isPaused = false
      }
      // console.log(detectionWorks)
      if (!detections.happy || detections.happy < 0.4) {
        if (this.levelScores < maxScores) {
          this.levelScores += scoresBit
        }
      } else {
        this.laughingTimes++
        this.levelScores -= (scoresBit * 5)
      }
    })
  },
  beforeDestroy() {
    // console.log('BEFORE DESTROY........')
    this.liveEmotionsEnabled = false
  },
  props: {
    text: Number,
    img: String,
  },
  computed: {
    levelScoresFormatted() {
      return this.levelScores.toFixed(2)
    }
  },
  components: {
    LiveEmotions,
  },
  methods: {
    ready(event) {
      this.player = event.target
      this.liveEmotionsEnabled = true
    },
    completeLevel() {
      if (confirm(`Do you want to confirm this level and claim ${this.levelScoresFormatted}?`)) {
        State.saveScoresForLevel(this.$route.params.levelNr, this.levelScores)
        location.href = '#/levels'
      }
    },
    ended() {
      console.log('ended')
    },
    playing() {
      console.log('playing')
      this.isPaused = false
    },
    stop() {
      this.player.stopVideo()
    },
    pause() {
      this.player.pauseVideo()
    },
    play() {
      this.player.playVideo()
    },
    log() {
      console.log(this.player)
    },
    enableLE() {
      this.liveEmotionsEnabled = true
    },
    disableLE() {
      this.liveEmotionsEnabled = false
    }
  }
}

</script>

<style scoped>
.level-container {
  margin-top: 60px;
}

h1 {
  color: #6200ee;
  font-size: 50px;
  text-align: center;
  padding-top: 30px;
  margin-bottom: 10px;
}

h3 {
  color: #6200ee;
  font-size: 16px;
  text-align: center;
  margin-bottom: 10px;
}

#video-player {
  width: 800px;
  margin: auto !important;
  display: block;
}

#complete-level-button {
  text-align: center;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>
