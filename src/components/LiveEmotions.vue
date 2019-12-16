<template>
  <div v-if="enabled" class="live-emotions-container ">
    <video id="video" class="mdc-elevation--z1" width="200" height="150" autoplay muted></video>

    <span v-if="enabled" id="expression-emoji">
      {{ expressionEmoji }}
    </span>

    <!-- TODO add !ready -->
    <span v-if="enabled && !ready" id="expression-emoji">
      <!-- <img class="loader-img" src="../../public/oval.svg"> -->
      <img class="loader-img" src="../../public/spinner2.svg">
    </span>

    <div id="live-emotions-stats" class="mdc-elevation--z1">
      <i class="material-icons centered" id="time-icon">alarm</i><br />
      <h2 class="centered">
        {{ happyTimeSeconds }}
      </h2>
      <p id="seconds-text" class="centered">seconds</p>
      <p id="happy-time-text" class="centered">Laughing time</p>
    </div>
  </div>
</template>

<script>
import { nets, detectAllFaces, TinyFaceDetectorOptions } from 'face-api.js'
import State from '../modules/state'

const tickSize = 300 // ms
let video

// Global stram variable for this component
let stream
let timer

let hackyStopSignalSent = false

async function startVideo(onExpressionsDetected) {
  try {
    video = document.getElementById('video')
    // window.toastr.success('ML models loading started')
    await loadMLModels()

    stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    })
    video = document.getElementById('video')
    video.srcObject = stream

    timer = setInterval(async () => {
      let expressions = await detectExpressions()
      onExpressionsDetected(expressions)
    }, tickSize)

    if (hackyStopSignalSent) {
      stopVideo()
    }
  } catch (e) {
    window.toastr.error('Video initialization failed :(')
    console.error(e)
  }
}

async function stopVideo() {
  stream.getTracks().forEach(function(track) {
    track.stop();
  });
  clearInterval(timer)
}

async function loadMLModels() {
  console.log('Loading ML models')
  await Promise.all([
    nets.tinyFaceDetector.loadFromUri('/MLModels'),
    nets.faceLandmark68Net.loadFromUri('/MLModels'),
    nets.faceRecognitionNet.loadFromUri('/MLModels'),
    nets.faceExpressionNet.loadFromUri('/MLModels')
  ])
  console.log('ML models loaded')
}

async function detectExpressions() {
  let detections = await detectAllFaces(video, new TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
  if (detections && detections[0]) {
    return detections[0].expressions
  } else {
    return {}
  }
}

function updateHappyTime(expressions) {
  
  let prevHappyTime = localStorage.happyTimeOnBlockgag
  if (expressions.happy > 0.4) {
    localStorage.happyTimeOnBlockgag = (Number(prevHappyTime) || 0) + tickSize
  }
  return localStorage.happyTimeOnBlockgag
}

const emoji = {
  neutral: '😐',
  happy: {
    1: '🙂',
    2: '😊',
    3: '😃',
    4: '😄',
    5: '😁',
    6: '😆',
    7: '😅',
    8: '😂',
    // 9: '🤣',
  },
  sad: {
    1: '😕',
    2: '😟',
    3: '😩',
  },
  angry: {
    1: '😠',
    2: '😤',
    3: '😡',
  },
  surprised: {
    1: '😮',
  }
}

export default {
  props: {
    enabled: Boolean,
  },
  data() {
    return {
      expressions: {},
      ready: false,
      happyTimeSeconds: (localStorage.happyTimeOnBlockgag || 0) / 1000,
    }
  },
  computed: {
    expressionEmoji() {
      // if (!modelsLoaded) {
      //   return emoji.neutral
      // }

      let emojiConfig = {
        happy: {
          0.8: emoji.happy[8],
          0.6: emoji.happy[7],
          0.5: emoji.happy[5],
          0.3: emoji.happy[2],
          0.2: emoji.happy[1]
        },
        sad: {
          0.5: emoji.sad[3]
        },
        angry: {
          0.2: emoji.angry[3]
        },
        surprised: {
          0.2: emoji.surprised[1]
        }
      }

      if (this.expressions.happy > 0.3) {
        // window.toastr.success('We see, you\'re smiling')
      }

      if (State.emotionDetectionCB) {
        State.emotionDetectionCB(this.expressions)
      }

      for (let expressionType in emojiConfig) {
        for (let level in emojiConfig[expressionType]) {
          if (this.expressions[expressionType] > level) {
            return emojiConfig[expressionType][level]
          }
        }
      }
      return emoji.neutral
    }
  },
  beforeDestroy() {
    console.log('Finishing video recording')
    stopVideo()
    hackyStopSignalSent = true
    setTimeout(() => {
      this.ready = false
    }, tickSize * 2)
  },
  watch: {
    enabled: function(newVal) {
      if (newVal) {
        hackyStopSignalSent = false

        console.log('Starting video recording')

        startVideo((detectedExpressions) => {
          if (!this.ready && detectedExpressions) {
            this.ready = true
            window.toastr.success('Algorithm is ready. Emoji should show your emotions now')
          }
          this.expressions = detectedExpressions
          let newHappyTime = updateHappyTime(detectedExpressions)
          this.happyTimeSeconds = newHappyTime / 1000
        })
      } else {
        console.log('Finishing video recording')
        stopVideo()
        hackyStopSignalSent = true
        setTimeout(() => {
          this.ready = false
        }, tickSize * 2)
      }
    }
  }
}
</script>

<style>
#video {
  position: fixed;
  padding: 3px;
  top: 110px;
  right: 30px;
  /* left:0; */
}

#expression-emoji {
  position: absolute;
  top: 10px;
  /* right: 30px; */
  right: calc(50vw - 30px);
  font-size: 60px;
  z-index: 100;
}

#live-emotions-stats {
  width: 206px;
  /* height: 300px; */
  top: 300px;
  position: fixed;
  right: 30px;
}

#live-emotions-stats h2 {
  /* margin-top: 5px; */
  font-size: 40px;
  /* color: #00be00; */
  color: #6200ee;
  margin-top: -5px;
}

#seconds-text {
  margin-bottom: 20px;
}

#happy-time-text {
  font-size: 16px;
  margin-bottom: 20px;
}

#time-icon {
  text-align: center;
  margin: auto;
  margin-top: 20px;
  display: block;
}

.loader-img {
  position: fixed;
  top: 140px;
  right: 80px;
  width: 100px;
}

</style>