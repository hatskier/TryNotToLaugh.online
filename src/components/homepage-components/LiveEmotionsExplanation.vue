<template>
  <section id="live-emotions-explanation">
    <!-- <vue-particles color="#dedede"></vue-particles> -->
    <div
      :class="{ 'slide-left-element': wasViewable }"
      v-observe-visibility="visibilityChanged"
      id="text-content">
      <h2>
        Live emotions
      </h2>
      <p>
        Touch the future with the brand new AI feature on the blockgag.co.
        Our algorithm can use video from your web camera (of course if you give access) to analyze your facial
        expressions and calculate the time of being happy on the website.
        Note, that each  webcam video is private and is not sent anywhere, AI algorithm works directly in your browser.
        Currently the "live emotions" algoithm can recognize happiness, sadness, surprise and anger.
        In the close future we'll add optional "likes by smiling" and "scrolling by nod" features.
      </p>

      <a href="/#/posts/" id="get-started-button" class="mdc-button mdc-button--raised">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">
          TRY BLOCKGAG
          <!-- <i class="material-icons">keyboard_arrow_right</i> -->
        </span>
      </a>
    </div>
    
    <!-- <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        <div class="mdc-layout-grid__cell">
          Artificial intelligence algorithm works directly in your browser
        </div>
        <div class="mdc-layout-grid__cell">
          It ananlyzes facial expressions and builds statistics what you like
        </div>
        <div class="mdc-layout-grid__cell">
          All your data is secure, they don't even leave your browser
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

// console.log()


export default {
  data() {
    return {
      wasViewable: false,
    }
  },
  created() {
    
  },
  methods: {
    // goToPosts() {
    //   location.href = '/#/posts/'
    // }
    visibilityChanged(isVisible) {
      if (isVisible) {
        this.wasViewable = true
      }
      
    }
  },
}
</script>

<style scoped>
#text-content {
  /* margin: auto; */
  width: 100vw;
  text-align: center;
}
h2 {
  text-align: center;
  padding-top: 23vh;
  padding-bottom: 20px;
  color: white;
  z-index: 10;
  font-size: 12vh;
  /* position: absolute; */
}

p {
  /* position: absolute; */
  text-align: left;
  width: 700px;
  margin: auto;
  font-size: 2.4vh;

  color: white;
}

#live-emotions-explanation {
  width: 100%;
  height: 100vh;
  /* background: #f8fafd; */
  /* background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url('../../../public/bg-earth.jpg') center center no-repeat;; */
  background: black;
}

#get-started-button {
  margin-top: 40px;
  font-size: 20px;
  /* padding: 10px; */
  height: 60px;
}

/* .particles-js-canvas-el { */
  /* height: 90vh; */
  /* position: absolute; */
  /* top: -90vh; */
  /* z-index:  */
  /* bottom: 90vh; */
/* } */

</style>