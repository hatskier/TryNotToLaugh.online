<template>
  <div class="level-container">
    <h1 class="init-hidden slide-left-element">{{ level.title }}</h1>

    <LiveEmotions :enabled="liveEmotionsEnabled" />

    <div class="video-player-container">
      <youtube
        id="video-player"
        :video-id="level.videoId"
        :player-vars="{rel: '0', allowfullscreen: '0', autoplay: '1'}"
        host="https://www.youtube-nocookie.com"
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

Vue.use(VueYouTubeEmbed)

export default {
  name: "Level",
  data() {
    console.log(this.player)
    return {
      level: Constants.levels[this.$route.params.levelNr],
      player: null,
      liveEmotionsEnabled: false,
    }
  },
  created() {
    BlockstackUtils.saveLevelAsCompleted(this.$route.params.levelNr)
  },
  beforeDestroy() {
    // console.log('BEFORE DESTROY........')
    this.liveEmotionsEnabled = false
  },
  props: {
    text: Number,
    img: String,
  },
  components: {
    LiveEmotions,
  },
  methods: {
    ready(event) {
      this.player = event.target
      this.liveEmotionsEnabled = true
    },
    ended() {
      console.log('ended')
    },
    playing() {
      console.log('playing')
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
  margin-bottom: 30px;
}

#video-player {
  width: 640px;
  margin: auto !important;
  display: block;
}
</style>
