<template>
  <section id="live-emotions-explanation">
    <!-- <vue-particles color="#dedede"></vue-particles> -->
    <div
      id="text-content">
      <h2>
        <!-- Emotions analyzer -->
        
        Don't laugh
        <br />
        Have fun
        
      </h2>
      <p class="description">
        <!-- Your video is private -->
        <!-- AI will analyze your emotions, but the video will not be sent anywhere.
        The expressions analyzer works directly in your browser and your video
        is private by default. The current emotions analyzer version can recognize 
        happiness, sadness, surprise and anger. -->
      </p>

      <a href="/#/levels/" id="get-started-button"
        v-observe-visibility="visibilityChanged"
        :class="{ 'fade-in-element': wasViewable }"
        class="mdc-button mdc-button--raised init-hidden"
       >
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">
          PLAY
          <!-- <i class="material-icons">flash_on</i> -->
          <i class="material-icons">videogame_asset</i>
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
  font-size: 8vh;
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
  /* height: 500px; */
  height: 80vh;
  /* background: #f8fafd; */
  /* background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url('../../../public/bg-earth.jpg') center center no-repeat;; */
  /* background: black; */
  background: #6200ee;
  /* background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('../../../public/trying-not-to-laugh.gif') repeat; */
  background-size: 300px 150px;
}

#get-started-button {
  /* margin-top: 45vh; */
  margin-top: 30px;
  font-size: 5vh;
  /* padding: 10px; */
  height: 10vh;
  background: #FE922A;
}

.material-icons {
  font-size: 5vh;
}

/* .particles-js-canvas-el { */
  /* height: 90vh; */
  /* position: absolute; */
  /* top: -90vh; */
  /* z-index:  */
  /* bottom: 90vh; */
/* } */

.description {
  font-size: 45px;
  text-align: center;
}

</style>